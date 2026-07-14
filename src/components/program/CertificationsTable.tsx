"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { getProviderLogo } from "@/lib/certifications/providers";
import type { FinalCertification } from "@/lib/certifications/final-catalogue";
import type { CertItem } from "./data";

interface CertificationsTableProps {
  certs: Array<CertItem | FinalCertification>;
  color?: string;
  limit?: number;
  className?: string;
}

const LEVEL_COLORS: Record<string, string> = {
  Débutant: "#2B8FAB",
  Intermédiaire: "#E89745",
  Avancé: "#9C27B0",
};

const CLASSIFICATION_LABELS: Record<FinalCertification["classification"], string> = {
  "ai-literacy": "Culture IA",
  "applied-ai": "IA appliquée",
  "non-ai": "Métier",
};

function isManagedCertification(cert: CertItem | FinalCertification): cert is FinalCertification {
  return "displayProvider" in cert;
}

export function CertificationsTable({
  certs,
  color,
  limit,
  className,
}: CertificationsTableProps) {
  const accentColor = color ?? "#2B8FAB";
  const displayed = limit ? certs.slice(0, limit) : certs;

  return (
    <div className={cn("space-y-2", className)}>
      {displayed.map((cert, i) => {
        const managed = isManagedCertification(cert);
        const provider = managed ? cert.displayProvider : cert.provider;
        const logo = getProviderLogo(provider) ?? getProviderLogo(cert.provider);
        const rightLabel = managed
          ? cert.requirement === "mandatory" ? "Obligatoire" : "Optionnel"
          : cert.level;
        const rightColor = managed
          ? cert.requirement === "mandatory" ? accentColor : "#64748B"
          : LEVEL_COLORS[cert.level] ?? accentColor;

        return (
          <div
            key={managed ? cert.id : `${cert.name}-${i}`}
            className="flex items-center gap-4 px-5 py-3.5 bg-white rounded-xl border border-penn-border hover:shadow-sm transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-penn-green/5">
              {logo ? (
                <Image
                  src={logo}
                  alt=""
                  width={24}
                  height={24}
                  className="object-contain w-6 h-6"
                  unoptimized
                />
              ) : (
                <Award className="w-4.5 h-4.5" style={{ color: accentColor }} />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-[14px] md:text-[15px] font-bold text-penn-navy truncate group-hover:text-penn-green transition-colors">
                {cert.name}
              </p>
              <p className="text-[12px] text-penn-body">
                {provider}
                {managed && (
                  <span className="text-penn-body/60 ml-1">
                    · {CLASSIFICATION_LABELS[cert.classification]} · {cert.recommendedYear}
                  </span>
                )}
                {((managed && cert.publicNote) || (!managed && cert.isForage)) && (
                  <span className="text-penn-body/60 italic ml-1">· *Simulation Forage</span>
                )}
              </p>
            </div>

            <span
              className="text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shrink-0"
              style={{
                backgroundColor: rightColor + "12",
                color: rightColor,
              }}
            >
              {rightLabel}
            </span>
          </div>
        );
      })}
    </div>
  );
}
