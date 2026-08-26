import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/shared/Badge";

interface ProgramCardProps {
  title: string;
  subtitle?: string;
  certifications: number;
  color: string;
  href: string;
  badge?: string;
  className?: string;
}

export function ProgramCard({
  title,
  subtitle,
  certifications,
  color,
  href,
  badge,
  className,
}: ProgramCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block bg-white rounded-2xl border-2 border-penn-border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
      style={{ borderTopColor: color, borderTopWidth: "4px" }}
    >
      {badge && (
        <Badge size="sm" className="mb-4" style={{ backgroundColor: color + "15", color, borderColor: color + "30" }}>
          {badge}
        </Badge>
      )}

      <h3 className="text-[20px] font-extrabold text-penn-navy leading-tight mb-2 group-hover:text-penn-green transition-colors">
        {title}
      </h3>

      {subtitle && (
        <p className="text-[14px] text-penn-body leading-relaxed mb-4">
          {subtitle}
        </p>
      )}

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-penn-border">
        <span className="inline-flex items-center gap-1.5 text-[13px] font-bold" style={{ color }}>
          <Award className="w-3.5 h-3.5" />
          {certifications}+ certifications
        </span>
        <ArrowRight className="w-4 h-4 text-penn-body group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </Link>
  );
}
