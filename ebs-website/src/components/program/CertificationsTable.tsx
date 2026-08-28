"use client";

import { useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Brain, BriefcaseBusiness, CheckCircle2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  getCertificationLogo,
  type CertificationClassification,
  type CertificationRequirement,
  type FinalCertification,
} from "@/lib/certifications/final-catalogue";
import type { CertItem } from "./data";
import { FormattedTitle } from "@/components/shared/FormattedTitle";

interface CertificationsTableProps {
  certs: Array<CertItem | FinalCertification>;
  color?: string;
  limit?: number;
  className?: string;
}

type Filter = "all" | CertificationRequirement;

const classificationLabels: Record<CertificationClassification, string> = {
  "ai-literacy": "Culture IA",
  "applied-ai": "IA appliquée",
  "non-ai": "Métier & outils",
};

const classificationMeta: Record<CertificationClassification, { icon: ReactNode; help: string }> = {
  "ai-literacy": {
    icon: <Brain className="h-4 w-4" />,
    help: "Socle commun IA, prompting, productivité et agents.",
  },
  "applied-ai": {
    icon: <Sparkles className="h-4 w-4" />,
    help: "IA appliquée au métier et aux outils professionnels.",
  },
  "non-ai": {
    icon: <BriefcaseBusiness className="h-4 w-4" />,
    help: "Certifications métier, outils, finance, data, cyber et marketing.",
  },
};

const requirementLabels: Record<CertificationRequirement, string> = {
  mandatory: "Obligatoire",
  optional: "Optionnel",
};

function isManagedCertification(cert: CertItem | FinalCertification): cert is FinalCertification {
  return "displayProvider" in cert;
}

function sortCertifications(a: FinalCertification, b: FinalCertification) {
  const requirementWeight = a.requirement === b.requirement ? 0 : a.requirement === "mandatory" ? -1 : 1;
  if (requirementWeight !== 0) return requirementWeight;
  const yearWeight = a.recommendedYear.localeCompare(b.recommendedYear);
  if (yearWeight !== 0) return yearWeight;
  return a.name.localeCompare(b.name);
}

export function CertificationsTable({ certs, color, limit, className }: CertificationsTableProps) {
  const accentColor = color ?? "#2B8FAB";
  const [filter, setFilter] = useState<Filter>("all");
  const managedCerts = certs.filter(isManagedCertification).sort(sortCertifications);
  const displayed = limit ? managedCerts.slice(0, limit) : managedCerts;

  const stats = useMemo(() => {
    const byRequirement = {
      mandatory: displayed.filter((cert) => cert.requirement === "mandatory").length,
      optional: displayed.filter((cert) => cert.requirement === "optional").length,
    };
    const byClassification = {
      "ai-literacy": displayed.filter((cert) => cert.classification === "ai-literacy").length,
      "applied-ai": displayed.filter((cert) => cert.classification === "applied-ai").length,
      "non-ai": displayed.filter((cert) => cert.classification === "non-ai").length,
    };
    return { byRequirement, byClassification };
  }, [displayed]);

  const filtered = displayed.filter((cert) => filter === "all" || cert.requirement === filter);
  const grouped = (["ai-literacy", "applied-ai", "non-ai"] as CertificationClassification[])
    .map((classification) => ({
      classification,
      certs: filtered.filter((cert) => cert.classification === classification),
    }))
    .filter((group) => group.certs.length > 0);

  if (managedCerts.length === 0) {
    return null;
  }

  return (
    <section className={cn("overflow-hidden rounded-[30px] border border-penn-border bg-white shadow-sm", className)}>
      <div className="relative overflow-hidden border-b border-penn-border bg-penn-navy p-6 text-white lg:p-8">
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: accentColor }} />
        <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_280px] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.12em] text-white/70">
              <Award className="h-4 w-4" style={{ color: accentColor }} />
              Parcours certifiant EBS
            </div>
            <h4 className="text-[28px] font-extrabold leading-tight text-white md:text-[36px]">
              <FormattedTitle text="Un parcours structuré entre socle commun et spécialisation." />
            </h4>
            <p className="mt-4 max-w-[720px] text-[15px] leading-relaxed text-white/60">
              Les certifications obligatoires constituent le socle de compétences attendu par EBS. Les certifications optionnelles permettent à chaque étudiant de renforcer son profil en fonction de son projet professionnel.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 lg:grid-cols-1">
            <StatPill label="Total" value={displayed.length} color="#ffffff" />
            <StatPill label="Obligatoires" value={stats.byRequirement.mandatory} color={accentColor} />
            <StatPill label="Optionnelles" value={stats.byRequirement.optional} color="#94A3B8" />
          </div>
        </div>
      </div>

      <div className="grid gap-5 border-b border-penn-border bg-penn-bg-light p-4 md:grid-cols-3 lg:p-6">
        {(["ai-literacy", "applied-ai", "non-ai"] as CertificationClassification[]).map((classification) => (
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
            { value: "all", label: "Tout le parcours", count: displayed.length },
            { value: "mandatory", label: "Obligatoires", count: stats.byRequirement.mandatory },
            { value: "optional", label: "Optionnelles", count: stats.byRequirement.optional },
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
                style={active ? { backgroundColor: option.value === "optional" ? "#232434" : accentColor, borderColor: option.value === "optional" ? "#232434" : accentColor } : undefined}
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
          <div key={group.classification}>
            <div className="mb-3 flex items-center justify-between gap-4">
              <h5 className="flex items-center gap-2 text-[15px] font-extrabold text-penn-navy">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl" style={{ backgroundColor: `${accentColor}14`, color: accentColor }}>
                  {classificationMeta[group.classification].icon}
                </span>
                {classificationLabels[group.classification]}
              </h5>
              <span className="text-[12px] font-bold text-penn-body/50">{group.certs.length} certification{group.certs.length > 1 ? "s" : ""}</span>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {group.certs.map((cert) => (
                <CertificationCard key={cert.id} cert={cert} accentColor={accentColor} />
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

function CertificationCard({ cert, accentColor }: { cert: FinalCertification; accentColor: string }) {
  const logo = getCertificationLogo(cert);
  const mandatory = cert.requirement === "mandatory";

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-penn-border bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: mandatory ? accentColor : "rgba(35,36,52,0.16)" }} />
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex h-12 min-w-0 items-center">
          {logo ? (
            <Image src={logo} alt={cert.displayProvider} width={132} height={42} className="h-9 w-auto max-w-[132px] object-contain opacity-80 transition-opacity group-hover:opacity-100" unoptimized />
          ) : (
            <span className="text-[13px] font-extrabold text-penn-navy">{cert.displayProvider}</span>
          )}
        </div>
        <span
          className="rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em]"
          style={{ backgroundColor: mandatory ? `${accentColor}12` : "#F1F5F9", color: mandatory ? accentColor : "#64748B" }}
        >
          {requirementLabels[cert.requirement]}
        </span>
      </div>

      <h6 className="min-h-[44px] text-[15px] font-extrabold leading-snug text-penn-navy transition-colors group-hover:text-penn-green">
        {cert.name}
      </h6>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-penn-bg-light px-3 py-1 text-[11px] font-bold text-penn-body">{cert.recommendedYear}</span>
        <span className="rounded-full px-3 py-1 text-[11px] font-bold" style={{ backgroundColor: `${accentColor}12`, color: accentColor }}>{cert.pathwayLabel}</span>
        <span className="rounded-full bg-penn-navy/5 px-3 py-1 text-[11px] font-bold text-penn-navy/70">{cert.depthLabel}</span>
        {cert.publicNote && <span className="rounded-full bg-penn-bg-light px-3 py-1 text-[11px] font-bold italic text-penn-body">{cert.publicNote}</span>}
      </div>

      {mandatory && (
        <div className="mt-4 flex items-center gap-2 border-t border-penn-border pt-3 text-[12px] font-bold text-penn-body/65">
          <CheckCircle2 className="h-4 w-4" style={{ color: accentColor }} />
          Socle attendu dans ce programme
        </div>
      )}
    </article>
  );
}
