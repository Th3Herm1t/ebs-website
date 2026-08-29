"use client";

import { startTransition, useDeferredValue, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
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

type ClassificationFilter = "all" | Resource["classification"];
type TierFilter = "all" | OpportunityTier;

const initialVisibleCount = 36;

const classificationLabels: Record<Resource["classification"], string> = {
  "ai-literacy": "Culture IA",
  "applied-ai": "IA appliquée",
  "non-ai": "Métier & outils",
};

const tierOptions: Array<{ value: TierFilter; label: string; help: string }> = [
  { value: "all", label: "Tout", help: "Catalogue public complet" },
  { value: "RECOMMENDED", label: "Recommandé", help: tierHelp.RECOMMENDED },
  { value: "DISCOVERY", label: "Explorer", help: tierHelp.DISCOVERY },
];

const classificationOptions: Array<{ value: ClassificationFilter; label: string; help: string }> = [
  { value: "all", label: "Toutes", help: "Toutes les familles" },
  { value: "ai-literacy", label: "Culture IA", help: "Prompting, agents, usage responsable" },
  { value: "applied-ai", label: "IA appliquée", help: "IA par métier et automatisation" },
  { value: "non-ai", label: "Métier", help: "Finance, marketing, CRM, cyber, data" },
];

function setFilter<T>(setter: (value: T) => void, value: T, resetVisibleCount: () => void) {
  startTransition(() => {
    setter(value);
    resetVisibleCount();
  });
}

export default function CertificationsPage({ catalogue }: { catalogue: CatalogueV3PublicSnapshot }) {
  const [tierFilter, setTierFilter] = useState<TierFilter>("all");
  const [classificationFilter, setClassificationFilter] = useState<ClassificationFilter>("all");
  const [programmeFilter, setProgrammeFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const deferredSearchTerm = useDeferredValue(searchTerm.trim().toLowerCase());
  const prefersReducedMotion = false;
  const allOpportunities = getCatalogueV3Opportunities({}, catalogue);
  const programmeLabels = Object.fromEntries(
    catalogue.programmes.map((programme) => [programme.id, programme.name.fr]),
  );
  const uniqueResourceCount = catalogue.release.counts.publicResources;
  const uniqueCredentialCount = catalogue.release.counts.publicCredentials;
  const tierStats = (["RECOMMENDED", "DISCOVERY"] as OpportunityTier[]).map((tier) => ({
    tier,
    count: allOpportunities.filter((opportunity) => opportunity.mapping.tier === tier).length,
  }));
  const classificationStats = (["ai-literacy", "applied-ai", "non-ai"] as Resource["classification"][]).map((classification) => ({
    classification,
    count: catalogue.resources.filter((resource) => resource.classification === classification).length,
  }));
  const providerStats = catalogue.providers
    .map((provider) => ({
      provider,
      count: catalogue.resources.filter((resource) => resource.providerId === provider.id).length,
    }))
    .filter((entry) => entry.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 12);

  const filteredOpportunities = allOpportunities.filter((opportunity) => {
    const matchesTier = tierFilter === "all" || opportunity.mapping.tier === tierFilter;
    const matchesClassification =
      classificationFilter === "all" || opportunity.resource.classification === classificationFilter;
    const matchesProgramme = programmeFilter === "all" || opportunity.mapping.programmeId === programmeFilter;
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
    return matchesTier && matchesClassification && matchesProgramme && (!deferredSearchTerm || searchable.includes(deferredSearchTerm));
  });

  const displayedOpportunities = filteredOpportunities.slice(0, visibleCount);
  const resetVisibleCount = () => setVisibleCount(initialVisibleCount);

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-24 lg:pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-penn-navy via-[#141b31] to-[#07111f]" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 18% 20%, #2B8FAB 0%, transparent 34%), radial-gradient(circle at 84% 16%, #8b5cf6 0%, transparent 30%), radial-gradient(circle at 52% 86%, #2B8FAB 0%, transparent 34%)" }} />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_430px] gap-12 lg:gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={transitions.hero}>
              <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">
                Catalogue international de certifications gratuites
              </Badge>

              <h1 className="text-[42px] md:text-[60px] lg:text-[76px] font-extrabold text-white leading-[1.02] tracking-[-1.5px] mb-6">
                {uniqueResourceCount} opportunités gratuites.
                <br />
                <span className="text-penn-green">Un parcours vérifié.</span>
              </h1>

              <p className="text-[17px] md:text-[19px] text-white/70 leading-relaxed max-w-[720px] mb-10">
                Un catalogue structuré par programme. Chaque certification est vérifiée gratuite de bout en bout : apprentissage, évaluation, justificatif et accès requis.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="#catalogue" className="inline-flex h-12 items-center gap-2 rounded-full bg-penn-green px-7 text-[14px] font-extrabold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5">
                  Explorer le catalogue
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/ia-et-certifications" className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-7 text-[14px] font-extrabold uppercase tracking-wide text-white/85 hover:border-white/30 hover:bg-white/5">
                  Voir l'approche IA
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-[720px]">
                {tierStats.map((stat) => (
                  <button key={stat.tier} type="button" onClick={() => setFilter(setTierFilter, stat.tier, resetVisibleCount)} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-left backdrop-blur-sm transition-colors hover:bg-white/[0.07]">
                    <p className="text-[30px] md:text-[38px] font-extrabold text-white leading-none">{stat.count}</p>
                    <p className="mt-2 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.08em] text-white/50">{tierLabels[stat.tier]}</p>
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ ...transitions.hero, delay: prefersReducedMotion ? 0 : 0.12 }} className="relative">
              <div className="absolute -inset-4 rounded-[34px] bg-penn-green/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-white/45">Certifications vérifiées</p>
                    <p className="mt-1 text-[44px] font-extrabold leading-none text-white">{uniqueCredentialCount}</p>
                    <p className="mt-2 text-[13px] font-bold text-white/50">des justificatifs précis : certification, badge, certificat</p>
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-penn-green/15 flex items-center justify-center text-penn-green">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 py-5">
                  <Metric label="Programmes" value={catalogue.programmes.length} />
                  <Metric label="Organismes" value={catalogue.providers.length} accent />
                  <Metric label="Plateformes" value={catalogue.platforms.length} />
                  <Metric label="Compétences requises" value={catalogue.release.counts.coreRequirements} accent />
                </div>

                <div className="space-y-3">
                  {[
                    "100 % gratuit, de bout en bout",
                    "Un socle, plusieurs parcours au choix",
                    "Aucun achat caché, aucun accès payant",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-[14px] font-bold text-white/75">
                      <CheckCircle2 className="w-4 h-4 text-penn-green" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </section>

      <section id="catalogue" className="section-padding bg-[#F7FAFC]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <Badge variant="default" size="lg" className="mb-4">Notre catalogue de certifications</Badge>
              <h2 className="text-[34px] md:text-[48px] font-extrabold text-penn-navy leading-[1.08] tracking-[-0.5px]">
                Essentiel, recommandé, explorer.
                <br />
                Des choix gratuits et vérifiés.
              </h2>
              <p className="text-[16px] text-penn-body mt-4 max-w-[690px] leading-relaxed">
                Filtrez par programme, niveau de parcours ou famille de compétence. Chaque résultat affiche le type de justificatif, le niveau de validation et le mode d'accès.
              </p>
            </div>
            <div className="rounded-2xl border border-penn-border bg-white px-5 py-4 shadow-sm">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-penn-body/50">Résultats</p>
              <p className="mt-1 text-[28px] font-extrabold text-penn-navy leading-none">{filteredOpportunities.length}</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 items-start">
            <aside className="lg:sticky lg:top-24 rounded-[28px] border border-penn-border bg-white p-5 shadow-sm">
              <label className="relative block mb-5">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-penn-body/45" />
                <input
                  value={searchTerm}
                  onChange={(event) => setFilter(setSearchTerm, event.target.value, resetVisibleCount)}
                  placeholder="Rechercher une certification, un thème, M1..."
                  className="h-12 w-full rounded-2xl border border-penn-border bg-penn-bg-light pl-11 pr-4 text-[14px] font-semibold text-penn-navy outline-none transition-colors focus:border-penn-green focus:bg-white"
                />
              </label>

              <FilterGroup title="Programme">
                <select value={programmeFilter} onChange={(event) => setFilter(setProgrammeFilter, event.target.value, resetVisibleCount)} className="h-12 w-full rounded-2xl border border-penn-border bg-penn-bg-light px-4 text-[14px] font-extrabold text-penn-navy outline-none focus:border-penn-green">
                  <option value="all">Tous les programmes</option>
                  {catalogue.programmes.map((programme) => (
                    <option key={programme.id} value={programme.id}>{programme.name.fr}</option>
                  ))}
                </select>
              </FilterGroup>

              <FilterGroup title="Niveau de parcours">
                {tierOptions.map((option) => (
                  <FilterButton key={option.value} active={tierFilter === option.value} label={option.label} help={option.help} onClick={() => setFilter(setTierFilter, option.value, resetVisibleCount)} />
                ))}
              </FilterGroup>

              <FilterGroup title="Famille de compétence">
                {classificationOptions.map((option) => (
                  <FilterButton key={option.value} active={classificationFilter === option.value} label={option.label} help={option.help} onClick={() => setFilter(setClassificationFilter, option.value, resetVisibleCount)} />
                ))}
              </FilterGroup>
            </aside>

            <div>
              <div className="mb-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                {classificationStats.map((stat) => (
                  <button key={stat.classification} type="button" onClick={() => setFilter(setClassificationFilter, stat.classification, resetVisibleCount)} className="group rounded-2xl border border-penn-border bg-white p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-penn-green/35 hover:shadow-md">
                    <p className="text-[30px] font-extrabold text-penn-navy leading-none">{stat.count}</p>
                    <p className="mt-2 text-[14px] font-extrabold text-penn-navy group-hover:text-penn-green">{classificationLabels[stat.classification]}</p>
                    <p className="mt-1 text-[12px] text-penn-body/65 leading-relaxed">Certifications gratuites et vérifiées.</p>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {displayedOpportunities.map((opportunity, i) => (
                  <OpportunityCard key={`${opportunity.resource.id}-${opportunity.mapping.programmeId}-${opportunity.mapping.year}-${opportunity.mapping.tier}`} opportunity={opportunity} programmeLabel={programmeLabels[opportunity.mapping.programmeId]} index={i} prefersReducedMotion={Boolean(prefersReducedMotion)} />
                ))}
              </div>

              {displayedOpportunities.length === 0 && (
                <div className="rounded-[24px] border border-penn-border bg-white p-10 text-center text-penn-body shadow-sm">
                  Aucun résultat pour ces filtres.
                </div>
              )}

              {visibleCount < filteredOpportunities.length && (
                <div className="mt-9 text-center">
                  <button type="button" onClick={() => setVisibleCount((count) => count + 36)} className="inline-flex h-12 items-center gap-2 rounded-full bg-penn-navy px-7 text-[14px] font-extrabold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5">
                    Afficher plus
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <Badge variant="default" size="lg" className="mb-4">Organismes de certification</Badge>
              <h2 className="text-[34px] md:text-[46px] font-extrabold text-penn-navy leading-[1.1]">
                36 organismes, un seul standard de gratuité.
              </h2>
              <p className="mt-4 text-[16px] text-penn-body leading-relaxed">
                Notre catalogue ne retient que les formations dont le parcours, l'évaluation, le justificatif et les accès requis sont vérifiés gratuits.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {providerStats.map(({ provider, count }, i) => {
                const logo = getCatalogueV3ProviderLogo(provider.id, catalogue);
                return (
                  <motion.div key={provider.id} initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }} whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-40px" }} transition={{ ...transitions.quick, delay: prefersReducedMotion ? 0 : staggerDelay(i, 0.16) }} className="flex h-28 flex-col items-center justify-center rounded-2xl border border-penn-border bg-penn-bg-light p-4 text-center">
                    {logo ? <Image src={logo} alt={provider.name} width={112} height={34} className="max-h-8 w-auto object-contain opacity-75" unoptimized /> : <p className="text-[13px] font-extrabold text-penn-navy">{provider.name}</p>}
                    <p className="mt-3 text-[11px] font-bold text-penn-body/55">{count} ressources</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #2B8FAB 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-14">
            <Badge variant="outline" size="lg" className="mb-4 border-white/20 text-white/80">Notre approche</Badge>
            <h2 className="text-[34px] md:text-[48px] font-extrabold text-white leading-[1.1]">
              Un catalogue rigoureux,
              <br />
              pas une promesse marketing.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              { icon: <Trophy className="w-6 h-6" />, title: "Justificatifs transparents", text: "Certification, certificat d'achèvement, badge ou achievement : le type réel est affiché tel quel, sans exagération." },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Gratuité vérifiée", text: "Seules les formations gratuites de bout en bout sont affichées. Une formation au coût incertain n'est jamais présentée comme gratuite." },
              { icon: <BookOpen className="w-6 h-6" />, title: "Socle flexible", text: "Un objectif de compétence peut être atteint via plusieurs formations au choix, sans organisme imposé." },
              { icon: <Sparkles className="w-6 h-6" />, title: "Parcours personnalisé", text: "Les niveaux recommandé et explorer permettent de construire un profil différenciant, sans achat caché." },
              { icon: <BadgeCheck className="w-6 h-6" />, title: "Fiabilité contrôlée", text: "Chaque opportunité est contrôlée avant publication, et retirée si son accès devient payant." },
              { icon: <GraduationCap className="w-6 h-6" />, title: "Adapté à chaque filière", text: "Chaque certification est rattachée au programme, à l'année et au niveau qui la concernent." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }} whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ ...transitions.reveal, delay: prefersReducedMotion ? 0 : staggerDelay(i, 0.2) }} className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6 transition-all hover:bg-white/[0.055]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-penn-green/10 text-penn-green">{item.icon}</div>
                <h3 className="text-[17px] font-extrabold text-white mb-2">{item.title}</h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Construisez un profil de compétences vérifié, gratuit et lisible."
        subtitle="Des opportunités gratuites et vérifiées, pour construire un profil qui vous ressemble."
        primaryCta={{ label: "Voir nos programmes", href: "/nos-programmes" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}

function Metric({ label, value, accent = false }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="rounded-2xl bg-white/[0.055] p-4">
      <p className={`text-[28px] font-extrabold leading-none ${accent ? "text-penn-green" : "text-white"}`}>{value}</p>
      <p className="mt-2 text-[12px] font-bold text-white/50">{label}</p>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-5 last:mb-0">
      <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.12em] text-penn-body/55">{title}</p>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function FilterButton({ active, label, help, onClick }: { active: boolean; label: string; help: string; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className={`w-full rounded-2xl border px-4 py-3 text-left transition-all ${active ? "border-penn-green bg-penn-green/10 text-penn-navy" : "border-penn-border bg-white text-penn-body hover:border-penn-green/35"}`}>
      <span className="block text-[14px] font-extrabold">{label}</span>
      <span className="block text-[12px] text-penn-body/60">{help}</span>
    </button>
  );
}

function OpportunityCard({ opportunity, programmeLabel, index, prefersReducedMotion }: { opportunity: JoinedProgrammeOpportunity; programmeLabel?: string; index: number; prefersReducedMotion: boolean }) {
  const logo = getCatalogueV3ProviderLogo(opportunity.resource.providerId);
  const tier = opportunity.mapping.tier;
  const launchLabel = opportunity.resource.launch.mode === "direct" ? "Accès direct" : "Recherche organisme";
  const credentialType = opportunity.credential ? credentialTypeLabels[opportunity.credential.type] : "Justificatif";

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ ...transitions.quick, delay: prefersReducedMotion ? 0 : staggerDelay(index, 0.16) }}
      className="group relative overflow-hidden rounded-[22px] border border-penn-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-penn-green/35 hover:shadow-xl motion-reduce:hover:translate-y-0"
    >
      <div className={`absolute inset-x-0 top-0 h-1 ${tier === "RECOMMENDED" ? "bg-penn-navy" : "bg-penn-navy/18"}`} />
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="h-11 min-w-0 flex items-center">
          {logo ? <Image src={logo} alt={opportunity.provider?.name ?? "Organisme"} width={126} height={40} className="h-9 w-auto max-w-[126px] object-contain opacity-80 transition-opacity group-hover:opacity-100" unoptimized /> : <span className="text-[13px] font-extrabold text-penn-navy">{opportunity.provider?.name}</span>}
        </div>
        <span className="rounded-full bg-penn-bg-light px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] text-penn-body">
          {tierLabels[tier]}
        </span>
      </div>

      <h3 className="min-h-[54px] text-[16px] font-extrabold text-penn-navy leading-snug group-hover:text-penn-green transition-colors">
        {opportunity.resource.title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-penn-bg-light px-3 py-1 text-[11px] font-bold text-penn-body">{classificationLabels[opportunity.resource.classification]}</span>
        <span className="rounded-full bg-penn-bg-light px-3 py-1 text-[11px] font-bold text-penn-body">{opportunity.mapping.year}</span>
        <span className="rounded-full bg-penn-green/10 px-3 py-1 text-[11px] font-bold text-penn-green">100 % gratuit</span>
        <span className="rounded-full bg-penn-navy/5 px-3 py-1 text-[11px] font-bold text-penn-navy/70">{credentialType}</span>
      </div>

      <div className="mt-5 space-y-2 border-t border-penn-border pt-4 text-[12px] font-bold text-penn-body/65">
        <p>{programmeLabel} · {opportunity.provider?.name}</p>
        {opportunity.credential && (
          <p>{credentialStrengthLabels[opportunity.credential.strength]} · {assessmentRigorLabels[opportunity.credential.assessmentRigor]}</p>
        )}
        <p>{launchLabel}{opportunity.resource.estimatedHours ? ` · ${opportunity.resource.estimatedHours}h estimées` : ""}</p>
      </div>
    </motion.article>
  );
}
