import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1.5 text-sm", className)}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <ChevronRight className="w-3.5 h-3.5 text-penn-border shrink-0" />
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-penn-green font-semibold hover:text-penn-navy transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  "font-semibold",
                  isLast ? "text-penn-navy" : "text-penn-body"
                )}
              >
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
