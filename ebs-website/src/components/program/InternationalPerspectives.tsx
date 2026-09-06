import { Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { PathwayItem } from "./data";

interface InternationalPerspectivesProps {
  pathways: PathwayItem[];
  intro?: string;
  content?: string[];
  color?: string;
  className?: string;
}

export function InternationalPerspectives({
  pathways,
  intro = "Ce programme permet de poursuivre vos études auprès de nos universités partenaires en France, au Canada et dans d'autres pays grâce aux accords de coopération conclus par EBS.",
  content,
  color,
  className,
}: InternationalPerspectivesProps) {
  const accentColor = color ?? "#2B8FAB";

  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: accentColor + "12" }}>
          <Globe className="w-5 h-5" style={{ color: accentColor }} />
        </div>
        <h3 className="text-[22px] md:text-[26px] font-extrabold text-penn-navy">
          Perspectives d&apos;études à l&apos;international
        </h3>
      </div>

       <div className="mb-6 space-y-3 text-[15px] text-penn-body">
         <p>{intro}</p>
         {content?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
       </div>

      <div className="space-y-3">
        {pathways.map((pw) => (
          <div
            key={pw.programme}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 px-5 py-4 bg-white rounded-xl border border-penn-border hover:shadow-sm transition-all duration-200"
          >
            <div className="flex-1 min-w-0">
              <p className="text-[14px] md:text-[15px] font-bold text-penn-navy">
                {pw.programme}
              </p>
              <p className="text-[13px] text-penn-body flex items-center gap-1.5 mt-0.5">
                <span className="font-semibold text-penn-green">{pw.partenaire}</span>
                <span className="text-penn-border">—</span>
                <span>{pw.details}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/parcours-international"
        className="inline-flex items-center gap-2 mt-5 text-[14px] font-bold text-penn-green hover:text-penn-navy transition-colors"
      >
        Découvrir tous nos partenaires internationaux
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
