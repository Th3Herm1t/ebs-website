"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { getProviderLogo } from "@/lib/certifications/providers";
import type { CertItem } from "./data";

interface CertificationsTableProps {
  certs: CertItem[];
  color?: string;
  limit?: number;
  className?: string;
}

const LEVEL_COLORS: Record<string, string> = {
  Débutant: "#2B8FAB",
  Intermédiaire: "#E89745",
  Avancé: "#9C27B0",
};

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
        const logo = getProviderLogo(cert.provider);
        return (
          <div
            key={i}
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
                {cert.provider}
                {cert.isForage && (
                  <span className="text-penn-body/60 italic ml-1">· *Simulation Forage</span>
                )}
              </p>
            </div>

            <span
              className="text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shrink-0"
              style={{
                backgroundColor: (LEVEL_COLORS[cert.level] ?? accentColor) + "12",
                color: LEVEL_COLORS[cert.level] ?? accentColor,
              }}
            >
              {cert.level}
            </span>
          </div>
        );
      })}
    </div>
  );
}
