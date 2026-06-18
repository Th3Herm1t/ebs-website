import { Briefcase } from "lucide-react";

interface DebouchesGridProps {
  items: string[];
  color?: string;
  className?: string;
}

export function DebouchesGrid({ items, color, className }: DebouchesGridProps) {
  const accentColor = color ?? "#2B8FAB";

  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: accentColor + "12" }}>
          <Briefcase className="w-5 h-5" style={{ color: accentColor }} />
        </div>
        <h3 className="text-[22px] md:text-[26px] font-extrabold text-penn-navy">
          Débouchés professionnels
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg border border-penn-border text-[14px] font-semibold text-penn-navy hover:shadow-sm transition-all duration-200 w-full sm:w-[calc(50%-6px)]"
            style={{ borderLeftWidth: "3px", borderLeftColor: accentColor }}
          >
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: accentColor }} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
