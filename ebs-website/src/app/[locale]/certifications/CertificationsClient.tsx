"use client";

import { startTransition, useDeferredValue, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Filter,
  GraduationCap,
  LayoutGrid,
  RotateCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Table,
  Trophy,
  X,
  SlidersHorizontal,
} from "lucide-react";
import { Badge, CtaSection } from "@/components/shared";
import { fadeUp, staggerDelay, transitions, viewportOnce } from "@/lib/animation";
import {
  assessmentRigorLabels,
  credentialStrengthLabels,
  credentialTypeLabels,
  getCatalogueV3Opportunities,
  getCatalogueV3ProviderLogo,
  tierHelp,
  tierLabels,
  type CatalogueV3PublicSnapshot,
  type JoinedProgrammeOpportunity,
  type OpportunityTier,
  type Resource,
} from "@/lib/certifications/v3";
import { CertificationDetailDrawer } from "@/components/certifications/CertificationDetailDrawer";

type CycleFilter = "all" | "licence" | "master" | "ia" | "finance" | "marketing" | "cyber";
type TierFilter = "all" | OpportunityTier;
type ViewMode = "grid" | "table";

const initialVisibleCount = 36;

const cyclePresets: Array<{ id: CycleFilter; label: string; icon?: string }> = [
  { id: "all", label: "Toutes les certifications" },
  { id: "licence", label: "Parcours Licences (L1-L3)" },
  { id: "master", label: "Parcours Masters (M1-M2)" },
  { id: "ia", label: "Intelligence Artificielle" },
  { id: "finance", label: "Finance & Marchés" },
  { id: "marketing", label: "Marketing & CRM" },
  { id: "cyber", label: "Cybersécurité & Réseaux" },
];

const classificationLabels: Record<Resource["classification"], string> = {
  "ai-literacy": "Culture IA",
  "applied-ai": "IA appliquée",
  "non-ai": "Métier & Outils",
};

const classificationStyles: Record<Resource["classification"], { bg: string; text: string; dot: string }> = {
  "ai-literacy": { bg: "bg-purple-50 text-purple-700 border border-purple-200/80", text: "text-purple-700", dot: "bg-purple-500" },
  "applied-ai": { bg: "bg-cyan-50 text-cyan-800 border border-cyan-200/80", text: "text-cyan-800", dot: "bg-cyan-500" },
  "non-ai": { bg: "bg-slate-100 text-slate-800 border border-slate-200/80", text: "text-slate-700", dot: "bg-slate-500" },
};

// Key spotlight providers for quick one-click chips
const topPartnerSlugs = [
  "google",
  "ibm",
  "harvard",
  "microsoft",
  "goldman-sachs",
  "bcg",
  "jpmorgan-chase",
  "hubspot",
  "cisco",
  "databricks",
];

export default function CertificationsPage({ catalogue }: { catalogue: CatalogueV3PublicSnapshot }) {
  const [cycleFilter, setCycleFilter] = useState<CycleFilter>("all");
  const [tierFilter, setTierFilter] = useState<TierFilter>("all");
  const [providerFilter, setProviderFilter] = useState("all");
  const [programmeFilter, setProgrammeFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [selectedOpportunity, setSelectedOpportunity] = useState<JoinedProgrammeOpportunity | null>(null);

  const deferredSearchTerm = useDeferredValue(searchTerm.trim().toLowerCase());
  const prefersReducedMotion = false;

  const allOpportunities = useMemo(() => getCatalogueV3Opportunities({}, catalogue), [catalogue]);

  const programmeLabels = useMemo(
    () => Object.fromEntries(catalogue.programmes.map((programme) => [programme.id, programme.name.fr])),
    [catalogue]
  );

  const uniqueResourceCount = catalogue.release.counts.publicResources;
  const uniqueCredentialCount = catalogue.release.counts.publicCredentials;

  const spotlightProviders = useMemo(() => {
    return catalogue.providers
      .filter((p) => topPartnerSlugs.includes(p.id.replace(/^provider-/, "")))
      .map((p) => ({
        id: p.id,
        name: p.name,
        logo: getCatalogueV3ProviderLogo(p.id, catalogue),
        count: catalogue.resources.filter((r) => r.providerId === p.id).length,
      }));
  }, [catalogue]);

  const setFilter = <T,>(setter: (value: T) => void, value: T) => {
    startTransition(() => {
      setter(value);
      setVisibleCount(initialVisibleCount);
    });
  };

  const clearAllFilters = () => {
    startTransition(() => {
      setCycleFilter("all");
      setTierFilter("all");
      setProviderFilter("all");
      setProgrammeFilter("all");
      setSearchTerm("");
      setVisibleCount(initialVisibleCount);
    });
  };

  const hasActiveFilters =
    cycleFilter !== "all" ||
    tierFilter !== "all" ||
    providerFilter !== "all" ||
    programmeFilter !== "all" ||
    searchTerm.trim().length > 0;

  // Filter pipeline
  const filteredOpportunities = useMemo(() => {
    return allOpportunities.filter((opportunity) => {
      // Cycle & Domain Presets
      if (cycleFilter === "licence" && !opportunity.mapping.programmeId.startsWith("licence")) return false;
      if (cycleFilter === "master" && !opportunity.mapping.programmeId.startsWith("master") && !["crm", "startups", "ingenierie-financiere"].includes(opportunity.mapping.programmeId)) return false;
      if (cycleFilter === "ia" && opportunity.resource.classification !== "ai-literacy" && opportunity.resource.classification !== "applied-ai") return false;
      if (cycleFilter === "finance" && !["licence-finance", "master-ingenierie-financiere"].includes(opportunity.mapping.programmeId) && !opportunity.resource.topics.some(t => t.includes("finance") || t.includes("banking") || t.includes("investment"))) return false;
      if (cycleFilter === "marketing" && !["licence-marketing", "master-marketing-digital-ia", "master-crm-revops"].includes(opportunity.mapping.programmeId)) return false;
      if (cycleFilter === "cyber" && !["licence-cybersecurite", "licence-informatique-ia"].includes(opportunity.mapping.programmeId)) return false;

      // Tier Filter
      if (tierFilter !== "all" && opportunity.mapping.tier !== tierFilter) return false;

      // Provider Filter
      if (providerFilter !== "all" && opportunity.resource.providerId !== providerFilter) return false;

      // Specific Programme Filter
      if (programmeFilter !== "all" && opportunity.mapping.programmeId !== programmeFilter) return false;

      // Search Query
      if (deferredSearchTerm) {
        const searchable = [
          opportunity.resource.title,
          opportunity.credential?.name,
          opportunity.provider?.name,
          opportunity.platform?.name,
          opportunity.mapping.year,
          tierLabels[opportunity.mapping.tier],
          classificationLabels[opportunity.resource.classification],
          programmeLabels[opportunity.mapping.programmeId],
          ...(opportunity.resource.topics ?? []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        if (!searchable.includes(deferredSearchTerm)) return false;
      }

      return true;
    });
  }, [
    allOpportunities,
    cycleFilter,
    tierFilter,
    providerFilter,
    programmeFilter,
    deferredSearchTerm,
    programmeLabels,
  ]);

  const displayedOpportunities = filteredOpportunities.slice(0, visibleCount);

  return (
    <>
      {/* ══════════════════ COMPACT & ELEGANT HERO ══════════════════ */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-penn-navy via-[#11172a] to-[#070b14]" />
        
        {/* Glow & Mesh */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #2B8FAB 0%, transparent 40%), radial-gradient(circle at 80% 15%, #9C27B0 0%, transparent 35%), radial-gradient(circle at 50% 90%, #2B8FAB 0%, transparent 40%)",
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="max-w-[820px]">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={transitions.hero}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/85 backdrop-blur-md mb-5">
                <Sparkles className="h-3.5 w-3.5 text-penn-green" />
                AI Passport EBS · Catalogue international de certifications
              </div>

              <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-extrabold text-white leading-[1.08] tracking-[-1px] mb-4">
                {uniqueResourceCount} certifications internationales.
                <br />
                <span className="text-penn-green">Incluses et vérifiées gratuites</span>
                <span className="text-white">.</span>
              </h1>

              <p className="text-[16px] md:text-[18px] text-white/70 leading-relaxed max-w-[660px] mb-8">
                Un catalogue structuré par programme, associant des certifications obligatoires constituant le socle EBS et des certifications optionnelles délivrées par Google, IBM, Harvard, Bloomberg, Cisco, Microsoft, Goldman Sachs, BCG et plus de 30 leaders mondiaux.
              </p>

              {/* Verified Trust Stats */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-white/80 text-[13px] font-bold">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <span>100% Gratuit & Garanti</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white">
                    <Award className="h-4 w-4 text-penn-green" />
                  </div>
                  <span>{uniqueCredentialCount} Justificatifs Officiels</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white">
                    <GraduationCap className="h-4 w-4 text-penn-green" />
                  </div>
                  <span>36 Organismes Partenaires</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════ ERGONOMIC EXPLORATION HUB ══════════════════ */}
      <section id="catalogue" className="bg-[#F8FAFC] py-10 lg:py-14 border-t border-penn-border">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12 space-y-6">

          {/* 1. PRIMARY INTENT TABS (Cycle & Domain Segments) */}
          <div className="overflow-x-auto pb-1 scrollbar-none">
            <div className="flex items-center gap-2 min-w-max">
              {cyclePresets.map((preset) => {
                const active = cycleFilter === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setFilter(setCycleFilter, preset.id)}
                    className={`rounded-2xl px-4 py-2.5 text-[13px] font-extrabold transition-all duration-200 ${
                      active
                        ? "bg-penn-navy text-white shadow-sm"
                        : "border border-penn-border bg-white text-penn-body hover:border-penn-green/50 hover:text-penn-navy hover:bg-slate-50"
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. REFINED SEARCH & FILTER CONTROL BAR */}
          <div className="rounded-2xl border border-penn-border bg-white p-4 shadow-xs space-y-4">
            {/* Top Row: Search Input + Programme Select + View Mode */}
            <div className="flex flex-col md:flex-row items-center gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-penn-body/45" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setFilter(setSearchTerm, e.target.value)}
                  placeholder="Rechercher par compétence ou outil (ex: Python, Risk, GA4, IA, M1)..."
                  className="h-11 w-full rounded-xl border border-penn-border bg-penn-bg-light pl-10 pr-9 text-[13px] font-semibold text-penn-navy outline-none transition-all focus:border-penn-green focus:bg-white focus:ring-2 focus:ring-penn-green/10"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setFilter(setSearchTerm, "")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-penn-body/40 hover:text-penn-navy"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* Programme Select */}
              <div className="w-full md:w-[260px]">
                <select
                  value={programmeFilter}
                  onChange={(e) => setFilter(setProgrammeFilter, e.target.value)}
                  className="h-11 w-full rounded-xl border border-penn-border bg-penn-bg-light px-3.5 text-[13px] font-extrabold text-penn-navy outline-none transition-colors focus:border-penn-green focus:bg-white"
                >
                  <option value="all">Tous les programmes EBS</option>
                  {catalogue.programmes.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name.fr}
                    </option>
                  ))}
                </select>
              </div>

              {/* Level Segmented Switch (Tous / Recommandé / Explorer) */}
              <div className="flex items-center gap-1 rounded-xl border border-penn-border bg-penn-bg-light p-1 shrink-0">
                {(["all", "RECOMMENDED", "DISCOVERY"] as const).map((tier) => {
                  const active = tierFilter === tier;
                  const label = tier === "all" ? "Tous" : tier === "RECOMMENDED" ? "Recommandé" : "Explorer";
                  return (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setFilter(setTierFilter, tier)}
                      className={`rounded-lg px-3 py-1.5 text-[12px] font-extrabold transition-all ${
                        active
                          ? "bg-penn-navy text-white shadow-2xs"
                          : "text-penn-body hover:text-penn-navy"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* View Switcher */}
              <div className="flex items-center gap-1 rounded-xl border border-penn-border bg-penn-bg-light p-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`flex h-8 px-2.5 items-center gap-1.5 rounded-lg text-[12px] font-extrabold transition-colors ${
                    viewMode === "grid" ? "bg-penn-navy text-white shadow-xs" : "text-penn-body hover:text-penn-navy"
                  }`}
                  title="Vue Grille"
                >
                  <LayoutGrid className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Grille</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("table")}
                  className={`flex h-8 px-2.5 items-center gap-1.5 rounded-lg text-[12px] font-extrabold transition-colors ${
                    viewMode === "table" ? "bg-penn-navy text-white shadow-xs" : "text-penn-body hover:text-penn-navy"
                  }`}
                  title="Vue Tableau"
                >
                  <Table className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Tableau</span>
                </button>
              </div>
            </div>

            {/* Bottom Row: Spotlight Partner Logo Quick Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pt-1 scrollbar-thin">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-penn-body/50 shrink-0 mr-1">
                Organismes :
              </span>
              <button
                type="button"
                onClick={() => setFilter(setProviderFilter, "all")}
                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-extrabold transition-all ${
                  providerFilter === "all"
                    ? "bg-penn-navy text-white shadow-2xs"
                    : "border border-penn-border bg-penn-bg-light text-penn-navy hover:bg-white"
                }`}
              >
                Tous
              </button>
              {spotlightProviders.map((provider) => {
                const active = providerFilter === provider.id;
                return (
                  <button
                    key={provider.id}
                    type="button"
                    onClick={() => setFilter(setProviderFilter, active ? "all" : provider.id)}
                    className={`flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1 transition-all ${
                      active
                        ? "border border-penn-green bg-penn-green/10 text-penn-navy font-extrabold shadow-2xs"
                        : "border border-penn-border bg-white text-penn-body hover:border-penn-green/40 hover:text-penn-navy"
                    }`}
                  >
                    {provider.logo ? (
                      <Image
                        src={provider.logo}
                        alt={provider.name}
                        width={60}
                        height={18}
                        className="h-3.5 w-auto max-w-[55px] object-contain opacity-85"
                        unoptimized
                      />
                    ) : (
                      <span className="text-[11px] font-bold">{provider.name}</span>
                    )}
                    <span className="text-[10px] opacity-60 font-semibold">({provider.count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. ACTIVE FILTERS PILLS */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 text-[12px]">
              <span className="font-bold text-penn-body/60">Filtres actifs :</span>
              {cycleFilter !== "all" && (
                <span className="inline-flex items-center gap-1 rounded-full bg-penn-navy/5 border border-penn-navy/10 px-3 py-0.5 font-bold text-penn-navy">
                  {cyclePresets.find((p) => p.id === cycleFilter)?.label}
                  <button type="button" onClick={() => setFilter(setCycleFilter, "all")} className="hover:text-red-500">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {tierFilter !== "all" && (
                <span className="inline-flex items-center gap-1 rounded-full bg-penn-navy/5 border border-penn-navy/10 px-3 py-0.5 font-bold text-penn-navy">
                  {tierLabels[tierFilter]}
                  <button type="button" onClick={() => setFilter(setTierFilter, "all")} className="hover:text-red-500">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {providerFilter !== "all" && (
                <span className="inline-flex items-center gap-1 rounded-full bg-penn-navy/5 border border-penn-navy/10 px-3 py-0.5 font-bold text-penn-navy">
                  {catalogue.providers.find((p) => p.id === providerFilter)?.name}
                  <button type="button" onClick={() => setFilter(setProviderFilter, "all")} className="hover:text-red-500">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {programmeFilter !== "all" && (
                <span className="inline-flex items-center gap-1 rounded-full bg-penn-navy/5 border border-penn-navy/10 px-3 py-0.5 font-bold text-penn-navy">
                  {programmeLabels[programmeFilter]}
                  <button type="button" onClick={() => setFilter(setProgrammeFilter, "all")} className="hover:text-red-500">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {searchTerm && (
                <span className="inline-flex items-center gap-1 rounded-full bg-penn-navy/5 border border-penn-navy/10 px-3 py-0.5 font-bold text-penn-navy">
                  "{searchTerm}"
                  <button type="button" onClick={() => setFilter(setSearchTerm, "")} className="hover:text-red-500">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              <button
                type="button"
                onClick={clearAllFilters}
                className="ml-auto inline-flex items-center gap-1 font-extrabold text-red-600 hover:underline"
              >
                <RotateCcw className="h-3 w-3" />
                Réinitialiser
              </button>
            </div>
          )}

          {/* 4. RESULTS COUNTER & SUMMARY */}
          <div className="flex items-center justify-between text-[13px] font-bold text-penn-body/60 px-1">
            <p>
              <span className="text-penn-navy font-extrabold">{filteredOpportunities.length}</span> formations trouvées
              {filteredOpportunities.length > displayedOpportunities.length && (
                <span> (affichage des {displayedOpportunities.length} premières)</span>
              )}
            </p>
          </div>

          {/* 5. MAIN RESULTS STREAM: GRID OR TABLE */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayedOpportunities.map((opportunity, i) => (
                <OpportunityCard
                  key={`${opportunity.resource.id}-${opportunity.mapping.programmeId}-${opportunity.mapping.year}-${opportunity.mapping.tier}`}
                  opportunity={opportunity}
                  programmeLabel={programmeLabels[opportunity.mapping.programmeId]}
                  index={i}
                  prefersReducedMotion={Boolean(prefersReducedMotion)}
                  onSelect={() => setSelectedOpportunity(opportunity)}
                />
              ))}
            </div>
          ) : (
            /* High-Density Matrix Table */
            <div className="overflow-hidden rounded-2xl border border-penn-border bg-white shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead className="border-b border-penn-border bg-penn-bg-light text-[11px] font-extrabold uppercase tracking-wider text-penn-body/60">
                    <tr>
                      <th className="px-5 py-3.5">Organisme & Intitulé</th>
                      <th className="px-4 py-3.5">Programme EBS</th>
                      <th className="px-3 py-3.5">Niveau</th>
                      <th className="px-4 py-3.5">Domaine</th>
                      <th className="px-4 py-3.5">Justificatif</th>
                      <th className="px-4 py-3.5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-penn-border">
                    {displayedOpportunities.map((opportunity) => {
                      const logo = getCatalogueV3ProviderLogo(opportunity.resource.providerId);
                      const credentialType = opportunity.credential
                        ? credentialTypeLabels[opportunity.credential.type]
                        : "Justificatif";
                      const classStyle = classificationStyles[opportunity.resource.classification];

                      return (
                        <tr
                          key={`${opportunity.resource.id}-${opportunity.mapping.programmeId}-${opportunity.mapping.year}-${opportunity.mapping.tier}`}
                          onClick={() => setSelectedOpportunity(opportunity)}
                          className="group cursor-pointer transition-colors hover:bg-penn-green/5"
                        >
                          <td className="px-5 py-3.5">
                            <div className="flex items-center gap-3">
                              {logo ? (
                                <Image
                                  src={logo}
                                  alt={opportunity.provider?.name ?? ""}
                                  width={70}
                                  height={22}
                                  className="h-4.5 w-auto max-w-[65px] object-contain shrink-0"
                                  unoptimized
                                />
                              ) : (
                                <span className="text-[11px] font-bold text-penn-navy/70 shrink-0">
                                  {opportunity.provider?.name}
                                </span>
                              )}
                              <span className="font-extrabold text-penn-navy group-hover:text-penn-green transition-colors">
                                {opportunity.resource.title}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3.5 font-semibold text-penn-navy">
                            {programmeLabels[opportunity.mapping.programmeId]}
                          </td>
                          <td className="px-3 py-3.5">
                            <span className="rounded-full bg-penn-bg-light px-2.5 py-0.5 text-[11px] font-bold text-penn-body">
                              {opportunity.mapping.year}
                            </span>
                          </td>
                          <td className="px-4 py-3.5">
                            <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-extrabold ${classStyle.bg}`}>
                              <span className={`h-1.5 w-1.5 rounded-full ${classStyle.dot}`} />
                              {classificationLabels[opportunity.resource.classification]}
                            </span>
                          </td>
                          <td className="px-4 py-3.5">
                            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-700">
                              {credentialType}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-right">
                            <button
                              type="button"
                              className="inline-flex items-center gap-1 text-[12px] font-extrabold text-penn-navy group-hover:text-penn-green"
                            >
                              Détails
                              <ArrowRight className="h-3.5 w-3.5" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Empty State */}
          {displayedOpportunities.length === 0 && (
            <div className="rounded-2xl border border-penn-border bg-white p-12 text-center text-penn-body shadow-xs">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-penn-bg-light text-penn-navy">
                <SlidersHorizontal className="h-6 w-6 text-penn-body/40" />
              </div>
              <p className="text-[17px] font-extrabold text-penn-navy mb-1.5">Aucune formation trouvée</p>
              <p className="text-[13px] text-penn-body/70 max-w-[400px] mx-auto mb-5">
                Essayez d'élargir vos critères de recherche ou sélectionnez un autre cycle académique.
              </p>
              <button
                type="button"
                onClick={clearAllFilters}
                className="inline-flex h-10 items-center gap-2 rounded-xl bg-penn-navy px-5 text-[12px] font-extrabold text-white hover:bg-penn-green transition-all"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Afficher toutes les formations
              </button>
            </div>
          )}

          {/* Pagination */}
          {visibleCount < filteredOpportunities.length && (
            <div className="pt-6 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + 36)}
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-penn-navy px-7 text-[13px] font-extrabold text-white transition-all hover:bg-penn-green hover:shadow-md"
              >
                Afficher plus ({filteredOpportunities.length - visibleCount} restantes)
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════ APPROACH PILLARS ══════════════════ */}
      <section className="section-padding bg-penn-navy">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-12">
            <Badge variant="outline" size="lg" className="mb-3 border-white/20 text-white/80">
              Garantie d'excellence EBS
            </Badge>
            <h2 className="text-[32px] md:text-[44px] font-extrabold text-white leading-[1.1]">
              Un catalogue rigoureux,
              <br />
              vérifié et intégré à vos études.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {[
              {
                icon: <Trophy className="w-5 h-5" />,
                title: "Justificatifs authentiques",
                text: "Certification, badge numérique, certificat d'achèvement ou simulation : le format réel est documenté sans ambiguïté.",
              },
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                title: "100 % Gratuit garanti",
                text: "Apprentissage, évaluations et émission des certificats sont vérifiés sans frais cachés pour chaque étudiant.",
              },
              {
                icon: <BookOpen className="w-5 h-5" />,
                title: "Socle flexible & modulaire",
                text: "Chaque objectif de compétence peut être validé par différentes preuves reconnues au choix de l'étudiant.",
              },
              {
                icon: <Sparkles className="w-5 h-5" />,
                title: "Profil hautement différenciant",
                text: "Les parcours Recommandé et Explorer permettent d'obtenir jusqu'à 14 certifications de référence avant la diplomation.",
              },
              {
                icon: <BadgeCheck className="w-5 h-5" />,
                title: "Veille & audit continus",
                text: "Chaque ressource est auditée à chaque rentrée pour garantir la pérennité de son accès gratuit.",
              },
              {
                icon: <GraduationCap className="w-5 h-5" />,
                title: "Intégration directe au cursus",
                text: "Les certifications sont articulées avec les cours magistraux et projets d'application de chaque semestre.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ ...transitions.reveal, delay: prefersReducedMotion ? 0 : staggerDelay(i, 0.15) }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 lg:p-6 transition-all hover:bg-white/[0.055]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-penn-green/10 text-penn-green">
                  {item.icon}
                </div>
                <h3 className="text-[16px] font-extrabold text-white mb-1.5">{item.title}</h3>
                <p className="text-[13px] text-white/55 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Construisez un profil de compétences vérifié, gratuit et lisible."
        subtitle="Développez des compétences pratiques reconnues mondialement avec Espima Business School."
        primaryCta={{ label: "Voir nos programmes", href: "/nos-programmes" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />

      {/* Slide-over Detail Drawer */}
      <CertificationDetailDrawer
        opportunity={selectedOpportunity}
        onClose={() => setSelectedOpportunity(null)}
        programmeLabel={selectedOpportunity ? programmeLabels[selectedOpportunity.mapping.programmeId] : undefined}
      />
    </>
  );
}

function OpportunityCard({
  opportunity,
  programmeLabel,
  index,
  prefersReducedMotion,
  onSelect,
}: {
  opportunity: JoinedProgrammeOpportunity;
  programmeLabel?: string;
  index: number;
  prefersReducedMotion: boolean;
  onSelect: () => void;
}) {
  const logo = getCatalogueV3ProviderLogo(opportunity.resource.providerId);
  const tier = opportunity.mapping.tier;
  const credentialType = opportunity.credential ? credentialTypeLabels[opportunity.credential.type] : "Justificatif";
  const classStyle = classificationStyles[opportunity.resource.classification];

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ ...transitions.quick, delay: prefersReducedMotion ? 0 : staggerDelay(index, 0.12) }}
      onClick={onSelect}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-penn-border bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-penn-green/50 hover:shadow-lg motion-reduce:hover:translate-y-0 flex flex-col justify-between"
    >
      {/* Top Accent Line */}
      <div
        className={`absolute inset-x-0 top-0 h-1.5 ${
          tier === "RECOMMENDED" ? "bg-penn-navy group-hover:bg-penn-green transition-colors" : "bg-slate-200"
        }`}
      />

      <div>
        {/* Card Header: Provider Logo + Tier Pill */}
        <div className="flex items-start justify-between gap-3 mb-3.5 pt-1">
          <div className="h-9 min-w-0 flex items-center">
            {logo ? (
              <Image
                src={logo}
                alt={opportunity.provider?.name ?? "Organisme"}
                width={110}
                height={32}
                className="h-7 w-auto max-w-[110px] object-contain opacity-85 transition-opacity group-hover:opacity-100"
                unoptimized
              />
            ) : (
              <span className="text-[12px] font-extrabold text-penn-navy">{opportunity.provider?.name}</span>
            )}
          </div>
          <span
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider shrink-0 ${
              tier === "RECOMMENDED" ? "bg-penn-navy text-white" : "bg-slate-100 text-slate-700"
            }`}
          >
            {tierLabels[tier]}
          </span>
        </div>

        {/* Course Title */}
        <h3 className="min-h-[44px] text-[15px] font-extrabold text-penn-navy leading-snug group-hover:text-penn-green transition-colors mb-3">
          {opportunity.resource.title}
        </h3>

        {/* Badges Bar */}
        <div className="flex flex-wrap items-center gap-1.5 mb-3">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-extrabold ${classStyle.bg}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${classStyle.dot}`} />
            {classificationLabels[opportunity.resource.classification]}
          </span>
          <span className="rounded-full bg-penn-bg-light px-2.5 py-0.5 text-[11px] font-bold text-penn-body">
            {opportunity.mapping.year}
          </span>
          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-700">
            {credentialType}
          </span>
        </div>
      </div>

      {/* Footer Bar: Programme + Action */}
      <div className="mt-auto pt-3 border-t border-penn-border/70 flex items-center justify-between text-[11px] font-bold text-penn-body/65">
        <span className="truncate max-w-[170px] text-penn-navy/80">{programmeLabel}</span>
        <span className="text-penn-green font-extrabold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
          Détails
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </motion.article>
  );
}
