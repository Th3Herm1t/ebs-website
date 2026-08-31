"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Award,
  CheckCircle2,
  Clock,
  ExternalLink,
  GraduationCap,
  Layers,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Building2,
  FileCheck,
} from "lucide-react";
import { Badge } from "@/components/shared";
import {
  assessmentRigorLabels,
  credentialStrengthLabels,
  credentialTypeLabels,
  getCatalogueV3ProviderLogo,
  tierHelp,
  tierLabels,
  type JoinedProgrammeOpportunity,
} from "@/lib/certifications/v3";

interface CertificationDetailDrawerProps {
  opportunity: JoinedProgrammeOpportunity | null;
  onClose: () => void;
  programmeLabel?: string;
}

const classificationMeta: Record<string, { label: string; bg: string; text: string }> = {
  "ai-literacy": { label: "Culture IA", bg: "bg-purple-50", text: "text-purple-700" },
  "applied-ai": { label: "IA appliquée", bg: "bg-cyan-50", text: "text-cyan-700" },
  "non-ai": { label: "Métier & Outils", bg: "bg-blue-50", text: "text-blue-700" },
};

export function CertificationDetailDrawer({ opportunity, onClose, programmeLabel }: CertificationDetailDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (opportunity) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [opportunity, onClose]);

  if (!opportunity) return null;

  const logo = getCatalogueV3ProviderLogo(opportunity.resource.providerId);
  const classMeta = classificationMeta[opportunity.resource.classification] ?? {
    label: "Général",
    bg: "bg-slate-50",
    text: "text-slate-700",
  };
  const credentialType = opportunity.credential
    ? credentialTypeLabels[opportunity.credential.type]
    : "Justificatif vérifié";

  const isMaster = opportunity.mapping.programmeId.includes("master") || opportunity.mapping.year.startsWith("M");
  const programHref = isMaster
    ? `/masters/${opportunity.mapping.programmeId}`
    : `/licences/${opportunity.mapping.programmeId}`;

  const providerSlug = opportunity.provider?.id.replace(/^provider-/, "");

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Drawer Panel */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          className="relative z-10 flex h-full w-full max-w-[580px] flex-col bg-white shadow-2xl overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-penn-border bg-white/95 px-6 py-4 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-[12px] font-extrabold ${classMeta.bg} ${classMeta.text}`}>
                {classMeta.label}
              </span>
              <span className="rounded-full bg-penn-bg-light px-3 py-1 text-[12px] font-bold text-penn-body">
                {opportunity.mapping.year}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-penn-bg-light text-penn-navy transition-colors hover:bg-slate-200"
              aria-label="Fermer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 md:p-8 space-y-7">
            {/* Provider and Tier */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {logo ? (
                  <div className="flex h-12 w-32 items-center justify-start">
                    <Image
                      src={logo}
                      alt={opportunity.provider?.name ?? "Organisme"}
                      width={120}
                      height={40}
                      className="max-h-9 w-auto object-contain"
                      unoptimized
                    />
                  </div>
                ) : (
                  <span className="text-[16px] font-extrabold text-penn-navy">{opportunity.provider?.name}</span>
                )}
              </div>
              <span
                className={`rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wide ${
                  opportunity.mapping.tier === "RECOMMENDED"
                    ? "bg-penn-navy text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {tierLabels[opportunity.mapping.tier]}
              </span>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-[22px] md:text-[26px] font-extrabold text-penn-navy leading-snug">
                {opportunity.resource.title}
              </h2>
              {opportunity.credential?.name && opportunity.credential.name !== opportunity.resource.title && (
                <p className="mt-2 text-[14px] font-semibold text-penn-body">
                  Justificatif délivré : <span className="text-penn-navy font-bold">{opportunity.credential.name}</span>
                </p>
              )}
            </div>

            {/* Zero cost guarantee callout */}
            <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4">
              <ShieldCheck className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-[14px] font-extrabold text-emerald-900">100 % Gratuit & Vérifié</p>
                <p className="text-[12px] text-emerald-700 leading-relaxed mt-0.5">
                  Formation, évaluation et délivrance du justificatif vérifiées gratuites dans le cadre de la politique EBS.
                </p>
              </div>
            </div>

            {/* Core Specs Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-penn-border bg-penn-bg-light p-4">
                <div className="flex items-center gap-2 text-penn-body/60 mb-1">
                  <Award className="h-4 w-4 text-penn-green" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">Type</span>
                </div>
                <p className="text-[14px] font-extrabold text-penn-navy">{credentialType}</p>
                {opportunity.credential && (
                  <p className="text-[11px] text-penn-body/70 mt-0.5">
                    {credentialStrengthLabels[opportunity.credential.strength]}
                  </p>
                )}
              </div>

              <div className="rounded-2xl border border-penn-border bg-penn-bg-light p-4">
                <div className="flex items-center gap-2 text-penn-body/60 mb-1">
                  <FileCheck className="h-4 w-4 text-penn-green" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">Évaluation</span>
                </div>
                <p className="text-[14px] font-extrabold text-penn-navy">
                  {opportunity.credential ? assessmentRigorLabels[opportunity.credential.assessmentRigor] : "Validation continue"}
                </p>
                <p className="text-[11px] text-penn-body/70 mt-0.5">
                  {opportunity.resource.level ? `Niveau ${opportunity.resource.level}` : "Tous niveaux"}
                </p>
              </div>

              <div className="rounded-2xl border border-penn-border bg-penn-bg-light p-4">
                <div className="flex items-center gap-2 text-penn-body/60 mb-1">
                  <Clock className="h-4 w-4 text-penn-green" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">Volume estimé</span>
                </div>
                <p className="text-[14px] font-extrabold text-penn-navy">
                  {opportunity.resource.estimatedHours ? `${opportunity.resource.estimatedHours} heures` : "Rythme libre"}
                </p>
                <p className="text-[11px] text-penn-body/70 mt-0.5">Apprentissage autonome encadré</p>
              </div>

              <div className="rounded-2xl border border-penn-border bg-penn-bg-light p-4">
                <div className="flex items-center gap-2 text-penn-body/60 mb-1">
                  <Building2 className="h-4 w-4 text-penn-green" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">Plateforme</span>
                </div>
                <p className="text-[14px] font-extrabold text-penn-navy truncate">
                  {opportunity.platform?.name ?? opportunity.provider?.name}
                </p>
                <p className="text-[11px] text-penn-body/70 mt-0.5">
                  {opportunity.resource.languages?.join(", ")?.toUpperCase() ?? "FR / EN"}
                </p>
              </div>
            </div>

            {/* Topics / Skills Covered */}
            {opportunity.resource.topics && opportunity.resource.topics.length > 0 && (
              <div>
                <h3 className="text-[13px] font-extrabold uppercase tracking-wider text-penn-body/60 mb-3">
                  Thématiques & Compétences Clés
                </h3>
                <div className="flex flex-wrap gap-2">
                  {opportunity.resource.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-xl border border-penn-border bg-white px-3 py-1.5 text-[12px] font-bold text-penn-navy shadow-2xs"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Academic Integration */}
            <div className="rounded-2xl border border-penn-border bg-gradient-to-br from-penn-bg-light to-white p-5">
              <div className="flex items-center gap-2 text-penn-navy mb-2">
                <GraduationCap className="h-5 w-5 text-penn-green" />
                <h3 className="text-[15px] font-extrabold">Intégration au Cursus EBS</h3>
              </div>
              <p className="text-[13px] text-penn-body leading-relaxed mb-4">
                Cette ressource est alignée avec les objectifs de validation de compétences pour le programme{" "}
                <strong className="text-penn-navy">{programmeLabel ?? opportunity.mapping.programmeId}</strong> (Année{" "}
                {opportunity.mapping.year}).
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={programHref}
                  className="inline-flex items-center gap-1.5 rounded-full bg-penn-navy px-4 py-2 text-[12px] font-extrabold text-white transition-colors hover:bg-penn-green"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  Découvrir le programme complet
                </Link>
                {providerSlug && (
                  <Link
                    href={`/certifications/${providerSlug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-penn-border bg-white px-4 py-2 text-[12px] font-extrabold text-penn-navy transition-colors hover:border-penn-green hover:text-penn-green"
                  >
                    Voir toutes les certs {opportunity.provider?.name}
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-auto border-t border-penn-border bg-white p-6">
            <Link
              href="/preinscription"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-penn-green py-3.5 text-center text-[15px] font-extrabold text-white shadow-md transition-all hover:bg-penn-green/90"
            >
              <Sparkles className="h-4 w-4" />
              Postuler à EBS pour accéder aux certifications
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
