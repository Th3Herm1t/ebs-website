import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { catalogueV3 } from "@/lib/certifications/v3";

interface IACompetencesProps {
  color?: string;
  description?: React.ReactNode;
  title?: string;
  className?: string;
}

export function IACompetences({ color, description, title = "L'IA est obligatoire dans ce programme", className }: IACompetencesProps) {
  const accentColor = color ?? "#2B8FAB";
  const aiResources = catalogueV3.resources
    .filter((resource) => resource.classification === "ai-literacy" || resource.classification === "applied-ai")
    .slice(0, 6);

  return (
    <div className={className}>
      <div className="relative overflow-hidden rounded-2xl bg-penn-navy p-8 text-white lg:p-10">
        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
              <Sparkles className="h-5 w-5" style={{ color: accentColor }} />
            </div>
            <h3 className="text-[20px] font-extrabold text-white md:text-[24px]">{title}</h3>
          </div>

          <div className="mb-6 max-w-[650px] space-y-4 text-[15px] text-white/70">
            {description || (
              <p>
                Les compétences IA sont intégrées au parcours selon le profil du programme. Le catalogue distingue les compétences EBS à valider, les preuves acceptées et les ressources gratuites recommandées.
              </p>
            )}
          </div>

          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aiResources.map((resource) => (
              <div key={resource.id} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                <div className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: accentColor }} />
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-semibold text-white">{resource.title}</p>
                  <p className="text-[11px] text-white/50">{resource.classification === "ai-literacy" ? "Culture IA" : "IA appliquée"}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/ia-et-certifications" className="inline-flex items-center gap-2 text-[14px] font-bold text-white/80 transition-colors hover:text-white" style={{ color: accentColor }}>
             Explorer les ressources IA
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
