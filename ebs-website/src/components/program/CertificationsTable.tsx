"use client";

import { useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Brain, BriefcaseBusiness, CheckCircle2, Layers3, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { FormattedTitle } from "@/components/shared/FormattedTitle";
import {
  assessmentRigorLabels,
  credentialStrengthLabels,
  credentialTypeLabels,
  getCatalogueV3ProviderLogo,
  tierHelp,
  tierLabels,
  type JoinedProgrammeOpportunity,
  type OpportunityTier,
  type Resource,
} from "@/lib/certifications/v3";

interface CertificationsTableProps {
  certs: JoinedProgrammeOpportunity[];
  color?: string;
  limit?: number;
  className?: string;
}

type Filter = "all" | OpportunityTier;

const classificationLabels: Record<Resource["classification"], string> = {
  "ai-literacy": "Culture IA",
  "applied-ai": "IA appliquée",
  "non-ai": "Métier & outils",
};

const classificationMeta: Record<Resource["classification"], { icon: ReactNode; help: string }> = {
  "ai-literacy": {
    icon: <Brain className="h-4 w-4" />,
    help: "Socle IA, prompting, productivité et agents.",
  },
  "applied-ai": {
    icon: <Sparkles className="h-4 w-4" />,
    help: "IA appliquée au métier et automatisation.",
  },
  "non-ai": {
    icon: <BriefcaseBusiness className="h-4 w-4" />,
    help: "Compétences métier, finance, data, cyber, marketing et CRM.",
  },
};

function sortOpportunities(a: JoinedProgrammeOpportunity, b: JoinedProgrammeOpportunity) {
  const tierWeight: Record<OpportunityTier, number> = { CORE: 0, RECOMMENDED: 1, DISCOVERY: 2 };
  const tierDiff = tierWeight[a.mapping.tier] - tierWeight[b.mapping.tier];
  if (tierDiff !== 0) return tierDiff;
  const yearDiff = a.mapping.year.localeCompare(b.mapping.year);
  if (yearDiff !== 0) return yearDiff;
  return a.resource.title.localeCompare(b.resource.title);
}

export function CertificationsTable({ certs, color, limit, className }: CertificationsTableProps) {
  const accentColor = color ?? "#2B8FAB";
  const [filter, setFilter] = useState<Filter>("all");
  const displayed = limit ? [...certs].sort(sortOpportunities).slice(0, limit) : [...certs].sort(sortOpportunities);

  const stats = useMemo(() => {
    const byTier = {
      CORE: displayed.filter((entry) => entry.mapping.tier === "CORE").length,
      RECOMMENDED: displayed.filter((entry) => entry.mapping.tier === "RECOMMENDED").length,
      DISCOVERY: displayed.filter((entry) => entry.mapping.tier === "DISCOVERY").length,
    };
    const byClassification = {
      "ai-literacy": displayed.filter((entry) => entry.resource.classification === "ai-literacy").length,
      "applied-ai": displayed.filter((entry) => entry.resource.classification === "applied-ai").length,
      "non-ai": displayed.filter((entry) => entry.resource.classification === "non-ai").length,
    };
    return { byTier, byClassification };
  }, [displayed]);

  const filtered = displayed.filter((entry) => filter === "all" || entry.mapping.tier === filter);
  const grouped = (["CORE", "RECOMMENDED", "DISCOVERY"] as OpportunityTier[])
    .map((tier) => ({ tier, entries: filtered.filter((entry) => entry.mapping.tier === tier) }))
    .filter((group) => group.entries.length > 0);

  if (displayed.length === 0) return null;

  return (
    <section className={cn("overflow-hidden rounded-[30px] border border-penn-border bg-white shadow-sm", className)}>
      <div className="relative overflow-hidden border-b border-penn-border bg-penn-navy p-6 text-white lg:p-8">
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: accentColor }} />
        <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_280px] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.12em] text-white/70">
              <Award className="h-4 w-4" style={{ color: accentColor }} />
              Catalogue v3 vérifié zero-cost
            </div>
            <h4 className="text-[28px] font-extrabold leading-tight text-white md:text-[36px]">
              <FormattedTitle text="Des exigences CORE et une marketplace gratuite." />
            </h4>
            <p className="mt-4 max-w-[720px] text-[15px] leading-relaxed text-white/60">
              Le CORE désigne une compétence EBS à satisfaire, pas un vendor imposé. RECOMMENDED et DISCOVERY enrichissent le profil avec des ressources et credentials gratuits vérifiés.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
            <StatPill label="Mappings" value={displayed.length} color="#ffffff" />
            <StatPill label="CORE" value={stats.byTier.CORE} color={accentColor} />
            <StatPill label="Recommandés" value={stats.byTier.RECOMMENDED} color="#94A3B8" />
            <StatPill label="Discovery" value={stats.byTier.DISCOVERY} color="#CBD5E1" />
          </div>
        </div>
      </div>

      <div className="grid gap-5 border-b border-penn-border bg-penn-bg-light p-4 md:grid-cols-3 lg:p-6">
        {(["ai-literacy", "applied-ai", "non-ai"] as Resource["classification"][]).map((classification) => (
          <div key={classification} className="rounded-2xl border border-penn-border bg-white p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[13px] font-extrabold text-penn-navy">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl" style={{ backgroundColor: `${accentColor}14`, color: accentColor }}>
                  {classificationMeta[classification].icon}
                </span>
                {classificationLabels[classification]}
              </div>
              <span className="text-[24px] font-extrabold leading-none text-penn-navy">{stats.byClassification[classification]}</span>
            </div>
            <p className="text-[12px] leading-relaxed text-penn-body/65">{classificationMeta[classification].help}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 border-b border-penn-border p-4 md:flex-row md:items-center md:justify-between lg:p-6">
        <div className="flex flex-wrap gap-2">
          {([
            { value: "all", label: "Tout", count: displayed.length },
            { value: "CORE", label: "CORE", count: stats.byTier.CORE },
            { value: "RECOMMENDED", label: "Recommandé", count: stats.byTier.RECOMMENDED },
            { value: "DISCOVERY", label: "Discovery", count: stats.byTier.DISCOVERY },
          ] as Array<{ value: Filter; label: string; count: number }>).map((option) => {
            const active = filter === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setFilter(option.value)}
                className={cn(
                  "rounded-full border px-4 py-2 text-[13px] font-extrabold transition-all",
                  active ? "text-white" : "border-penn-border bg-white text-penn-body hover:border-penn-navy/25"
                )}
                style={active ? { backgroundColor: option.value === "CORE" ? accentColor : "#232434", borderColor: option.value === "CORE" ? accentColor : "#232434" } : undefined}
              >
                {option.label} · {option.count}
              </button>
            );
          })}
        </div>
        <Link href="/certifications" className="inline-flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-wide text-penn-green hover:underline">
          Catalogue complet
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="space-y-6 p-4 lg:p-6">
        {grouped.map((group) => (
          <div key={group.tier}>
            <div className="mb-3 flex items-center justify-between gap-4">
              <h5 className="flex items-center gap-2 text-[15px] font-extrabold text-penn-navy">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl" style={{ backgroundColor: `${accentColor}14`, color: accentColor }}>
                  <Layers3 className="h-4 w-4" />
                </span>
                {tierLabels[group.tier]}
              </h5>
              <span className="text-[12px] font-bold text-penn-body/50">{tierHelp[group.tier]}</span>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {group.entries.map((entry) => (
                <CertificationCard key={`${entry.resource.id}-${entry.mapping.year}-${entry.mapping.tier}`} entry={entry} accentColor={accentColor} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatPill({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-center lg:text-left">
      <p className="text-[26px] font-extrabold leading-none" style={{ color }}>{value}</p>
      <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-white/45">{label}</p>
    </div>
  );
}

function CertificationCard({ entry, accentColor }: { entry: JoinedProgrammeOpportunity; accentColor: string }) {
  const logo = getCatalogueV3ProviderLogo(entry.resource.providerId);
  const isCore = entry.mapping.tier === "CORE";
  const credentialType = entry.credential ? credentialTypeLabels[entry.credential.type] : "Credential";

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-penn-border bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: isCore ? accentColor : "rgba(35,36,52,0.16)" }} />
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex h-12 min-w-0 items-center">
          {logo ? (
            <Image src={logo} alt={entry.provider?.name ?? "Provider"} width={132} height={42} className="h-9 w-auto max-w-[132px] object-contain opacity-80 transition-opacity group-hover:opacity-100" unoptimized />
          ) : (
            <span className="text-[13px] font-extrabold text-penn-navy">{entry.provider?.name}</span>
          )}
        </div>
        <span
          className="rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em]"
          style={{ backgroundColor: isCore ? `${accentColor}12` : "#F1F5F9", color: isCore ? accentColor : "#64748B" }}
        >
          {tierLabels[entry.mapping.tier]}
        </span>
      </div>

      <h6 className="min-h-[44px] text-[15px] font-extrabold leading-snug text-penn-navy transition-colors group-hover:text-penn-green">
        {entry.resource.title}
      </h6>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-penn-bg-light px-3 py-1 text-[11px] font-bold text-penn-body">{entry.mapping.year}</span>
        <span className="rounded-full px-3 py-1 text-[11px] font-bold" style={{ backgroundColor: `${accentColor}12`, color: accentColor }}>{credentialType}</span>
        <span className="rounded-full bg-penn-green/10 px-3 py-1 text-[11px] font-bold text-penn-green">100 % gratuit</span>
        <span className="rounded-full bg-penn-navy/5 px-3 py-1 text-[11px] font-bold text-penn-navy/70">{classificationLabels[entry.resource.classification]}</span>
      </div>

      {entry.credential && (
        <div className="mt-4 space-y-1 border-t border-penn-border pt-3 text-[12px] font-bold text-penn-body/65">
          <p>{credentialStrengthLabels[entry.credential.strength]} · {assessmentRigorLabels[entry.credential.assessmentRigor]}</p>
          <p>{entry.resource.launch.mode === "direct" ? "Lien direct" : "Recherche dans le catalogue provider"}</p>
        </div>
      )}

      {isCore && (
        <div className="mt-4 flex items-center gap-2 border-t border-penn-border pt-3 text-[12px] font-bold text-penn-body/65">
          <CheckCircle2 className="h-4 w-4" style={{ color: accentColor }} />
          Option valide pour une exigence CORE
        </div>
      )}
    </article>
  );
}
