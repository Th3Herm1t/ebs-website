import Image from "next/image";
import { Award } from "lucide-react";

interface CertItem {
  name: string;
  level?: string;
  isForage?: boolean;
}

interface CertCategory {
  name: string;
  certs: CertItem[];
}

interface CertCategorySectionProps {
  category: CertCategory;
  index: number;
  color?: string;
  providerLogo?: string;
  className?: string;
}

const levelColors: Record<string, string> = {
  Débutant: "#2B8FAB",
  Intermédiaire: "#E89745",
  Avancé: "#9C27B0",
};

export function CertCategorySection({ category, color, providerLogo, className }: CertCategorySectionProps) {
  const accent = color ?? "#2B8FAB";

  return (
    <div className={className}>
      <h3 className="text-[20px] font-extrabold text-penn-navy mb-4 flex items-center gap-2">
        <span className="w-1 h-6 rounded-full inline-block" style={{ backgroundColor: accent }} />
        {category.name}
      </h3>
      <div className="space-y-2">
        {category.certs.map((cert) => (
          <div
            key={cert.name}
            className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg border border-penn-border hover:shadow-sm transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-penn-green/5 flex items-center justify-center shrink-0">
              {providerLogo ? (
                <Image
                  src={providerLogo}
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain w-5 h-5"
                  unoptimized
                />
              ) : (
                <Award className="w-3.5 h-3.5" style={{ color: accent }} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[14px] font-semibold text-penn-navy block truncate">{cert.name}</span>
              {cert.isForage && (
                <span className="text-[11px] text-penn-body/60 italic">*Simulation Forage</span>
              )}
            </div>
            {cert.level && (
              <span
                className="text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full shrink-0"
                style={{
                  backgroundColor: (levelColors[cert.level] ?? accent) + "12",
                  color: levelColors[cert.level] ?? accent,
                }}
              >
                {cert.level}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
