import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { IA_CERTS_SHARED } from "./data";

interface IACompetencesProps {
  color?: string;
  className?: string;
}

export function IACompetences({ color, className }: IACompetencesProps) {
  const accentColor = color ?? "#2B8FAB";

  return (
    <div className={className}>
      <div className="bg-penn-navy text-white rounded-2xl p-8 lg:p-10 overflow-hidden relative">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10">
              <Sparkles className="w-5 h-5" style={{ color: accentColor }} />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-extrabold text-white">
              ★ L&apos;IA est obligatoire dans ce programme
            </h3>
          </div>

          <p className="text-white/70 text-[15px] mb-6 max-w-[600px]">
            Les compétences en Intelligence Artificielle sont intégrées comme socle
            commun obligatoire dans tous les parcours EBS. Voici les 6 certifications
            IA fondamentales que vous obtiendrez, parmi les 26 disponibles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {IA_CERTS_SHARED.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-lg border border-white/10"
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: accentColor }}
                />
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-white truncate">
                    {cert.name}
                  </p>
                  <p className="text-[11px] text-white/50">{cert.provider}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/ia-et-certifications"
            className="inline-flex items-center gap-2 text-[14px] font-bold text-white/80 hover:text-white transition-colors"
            style={{ color: accentColor }}
          >
            Voir les 26 certifications IA
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
