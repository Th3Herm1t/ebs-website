"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  getCatalogueV3ProviderLogo,
  tierLabels,
  type JoinedAcademicRequirement,
  type JoinedProgrammeOpportunity,
} from "@/lib/certifications/v3";

interface CertificationsTableProps {
  certs: JoinedProgrammeOpportunity[];
  requirements?: JoinedAcademicRequirement[];
  profileLabel?: string;
  color?: string;
  className?: string;
}

function sortOpportunities(a: JoinedProgrammeOpportunity, b: JoinedProgrammeOpportunity) {
  const tierWeight = { RECOMMENDED: 0, DISCOVERY: 1 } as const;
  return tierWeight[a.mapping.tier] - tierWeight[b.mapping.tier]
    || a.mapping.year.localeCompare(b.mapping.year)
    || a.resource.title.localeCompare(b.resource.title);
}

export function CertificationsTable({ certs, requirements = [], profileLabel, color, className }: CertificationsTableProps) {
  const accentColor = color ?? "#2B8FAB";
  const highlights = [...certs].sort(sortOpportunities).slice(0, 6);

  if (certs.length === 0 && requirements.length === 0) return null;

  return (
    <section id="certifications" className={cn("rounded-[26px] border border-penn-border bg-white p-5 shadow-sm md:p-7", className)}>
      <div className="flex flex-col gap-4 border-b border-penn-border pb-5 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em]" style={{ backgroundColor: `${accentColor}12`, color: accentColor }}>
            <Award className="h-3.5 w-3.5" />
            Parcours certifiant EBS
          </div>
          <h3 className="text-[26px] font-extrabold leading-tight text-penn-navy md:text-[32px]">
            Un parcours structuré entre socle commun et spécialisation.
          </h3>
          <p className="mt-3 max-w-[680px] text-[14px] leading-relaxed text-penn-body">
            Les certifications obligatoires constituent le socle de compétences attendu par EBS. Les certifications optionnelles permettent à chaque étudiant de renforcer son profil en fonction de son projet professionnel.
          </p>
          {profileLabel && <p className="mt-3 text-[12px] font-extrabold uppercase tracking-wide" style={{ color: accentColor }}>{profileLabel}</p>}
        </div>
        <div className="shrink-0 rounded-2xl bg-penn-navy px-5 py-4 text-center text-white md:min-w-[132px]">
          <p className="text-[28px] font-extrabold leading-none">{certs.length}+</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-white/60">Certifications incluses</p>
        </div>
      </div>

      {requirements.length > 0 && (
        <div className="border-b border-penn-border py-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h4 className="text-[15px] font-extrabold text-penn-navy">Compétences requises</h4>
            <span className="text-[12px] font-bold text-penn-body/55">{requirements.length} compétences</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {requirements.slice(0, 6).map((requirement) => (
              <span key={requirement.id} className="inline-flex items-center gap-1.5 rounded-full bg-penn-bg-light px-3 py-2 text-[12px] font-bold text-penn-body">
                <CheckCircle2 className="h-3.5 w-3.5" style={{ color: accentColor }} />
                {requirement.title.fr}
              </span>
            ))}
            {requirements.length > 6 && <span className="rounded-full bg-penn-bg-light px-3 py-2 text-[12px] font-bold text-penn-body/55">+{requirements.length - 6} autres</span>}
          </div>
        </div>
      )}

      <div className="pt-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h4 className="text-[15px] font-extrabold text-penn-navy">Quelques certifications du programme</h4>
          <span className="text-[12px] font-bold text-penn-body/55">{certs.length} au total</span>
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          {highlights.map((entry) => {
            const logo = getCatalogueV3ProviderLogo(entry.resource.providerId);
            return (
              <div key={`${entry.resource.id}-${entry.mapping.year}`} className="flex min-w-0 items-center gap-3 rounded-xl border border-penn-border bg-penn-bg-light px-3 py-3">
                {logo ? <Image src={logo} alt={entry.provider?.name ?? "Organisme"} width={64} height={24} className="h-6 w-16 shrink-0 object-contain object-left" unoptimized /> : <span className="w-16 shrink-0 text-[11px] font-extrabold text-penn-navy">{entry.provider?.name}</span>}
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-extrabold text-penn-navy">{entry.resource.title}</p>
                  <p className="mt-0.5 text-[11px] font-bold text-penn-body/60">{entry.mapping.year} · {tierLabels[entry.mapping.tier]}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Link href="/certifications" className="mt-4 inline-flex items-center gap-2 text-[13px] font-extrabold text-penn-green hover:text-penn-navy">
          Voir le catalogue complet des certifications
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
