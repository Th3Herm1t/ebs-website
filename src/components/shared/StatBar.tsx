"use client";

import { cn } from "@/lib/utils";
import { StatCounter } from "./StatCounter";
import { motion } from "motion/react";

interface StatItem {
  value: string;
  label: string;
}

interface StatBarProps {
  stats: StatItem[];
  color?: string;
  layout?: "grid" | "row";
  columns?: number;
  className?: string;
}

export function StatBar({
  stats,
  color,
  layout = "row",
  columns,
  className,
}: StatBarProps) {
  const cols = columns ?? Math.min(stats.length, 4);

  if (layout === "grid") {
    return (
      <div
        className={cn(
          "grid gap-6",
          `grid-cols-2 md:grid-cols-${cols}`,
          className
        )}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-lg border border-penn-border p-5 text-center shadow-sm"
          >
            <span
              className="block text-[28px] md:text-[34px] font-extrabold text-penn-navy leading-none mb-2"
              style={color ? { color } : undefined}
            >
              {stat.value}
            </span>
            <span className="text-[13px] md:text-[14px] text-penn-body font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-14",
        className
      )}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="flex flex-col items-center text-center"
        >
          <span
            className="text-[20px] md:text-[24px] font-extrabold text-penn-navy leading-none mb-1"
            style={color ? { color } : undefined}
          >
            {stat.value}
          </span>
          <span className="text-[12px] md:text-[13px] text-penn-body font-medium uppercase tracking-wide">
            {stat.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
