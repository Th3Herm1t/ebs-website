"use client";

import { BookOpen, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ModuleItem } from "./data";

interface ModulesAccordionProps {
  modules: ModuleItem[];
  color?: string;
  className?: string;
}

export function ModulesAccordion({ modules, color, className }: ModulesAccordionProps) {
  const accentColor = color ?? "#2B8FAB";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("space-y-2", className)}>
      {modules.map((mod, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="rounded-xl border border-penn-border bg-white overflow-hidden transition-all duration-200"
            style={isOpen ? { borderColor: accentColor + "60" } : undefined}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-penn-bg-light transition-colors"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                style={{
                  backgroundColor: isOpen ? accentColor : accentColor + "12",
                  color: isOpen ? "#fff" : accentColor,
                }}
              >
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="flex-1 text-[15px] font-bold text-penn-navy">
                {mod.title}
              </span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 text-penn-body shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            <div
              className={cn(
                "grid transition-all duration-200 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-4 pl-[68px]">
                  <p className="text-[14px] text-penn-body leading-relaxed">
                    {mod.description ?? "Contenu détaillé à venir."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
