import { Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface PublicCibleProps {
  items: string[];
  color?: string;
  className?: string;
}

export function PublicCible({ items, color, className }: PublicCibleProps) {
  const accentColor = color ?? "#2B8FAB";

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200"
          style={{
            backgroundColor: accentColor + "10",
            color: accentColor,
            border: `1.5px solid ${accentColor}30`,
          }}
        >
          <Users className="w-3.5 h-3.5 shrink-0" />
          {item}
        </span>
      ))}
    </div>
  );
}
