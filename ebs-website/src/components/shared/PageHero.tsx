"use client";

import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { Breadcrumb } from "./Breadcrumb";
import { motion } from "motion/react";
import { fadeUp, transitions } from "@/lib/animation";
import { FormattedTitle } from "./FormattedTitle";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs?: BreadcrumbItem[];
  background?: "white" | "light" | "navy" | "teal";
  align?: "left" | "center";
  size?: "default" | "sm" | "lg";
  children?: React.ReactNode;
  className?: string;
}

const bgClasses: Record<string, string> = {
  white: "bg-white",
  light: "bg-penn-bg-light",
  navy: "bg-penn-navy",
  teal: "bg-penn-green",
};

export function PageHero({
  title,
  subtitle,
  badge,
  breadcrumbs,
  background = "white",
  align = "center",
  size = "default",
  children,
  className,
}: PageHeroProps) {
  const isDark = background === "navy" || background === "teal";
  const titleColor = isDark ? "text-white" : "text-penn-navy";
  const subtitleColor = isDark ? "text-white/80" : "text-penn-body";

  const sizeClasses = {
    sm: "pt-32 pb-16",
    default: "pt-40 pb-20",
    lg: "pt-48 pb-28",
  };

  const titleSizes = {
    sm: "text-[32px]/tight md:text-[40px]/tight",
    default: "text-[36px]/tight md:text-[48px]/tight lg:text-[56px]/tight",
    lg: "text-[42px]/tight md:text-[56px]/tight lg:text-[64px]/tight",
  };

  return (
    <section
      className={cn(
        sizeClasses[size],
        bgClasses[background],
        "relative overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "max-w-[1160px] mx-auto px-5 lg:px-12",
          align === "center" && "text-center"
        )}
      >
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={transitions.quick}
            className={cn("mb-5", align === "center" && "flex justify-center")}
          >
            <Breadcrumb items={breadcrumbs} className={isDark ? "[&_a]:text-white/70 [&_span]:text-white/60" : ""} />
          </motion.div>
        )}

        {badge && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transitions.quick, delay: 0.06 }}
            className="mb-4"
          >
            <Badge variant={isDark ? "outline" : "default"} size="lg">
              {badge}
            </Badge>
          </motion.div>
        )}

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ ...transitions.hero, delay: 0.12 }}
          className={cn(
            "font-extrabold tracking-[-0.5px] mb-5",
            titleSizes[size],
            titleColor
          )}
        >
          <FormattedTitle text={title} />
        </motion.h1>

        {subtitle && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transitions.reveal, delay: 0.18 }}
            className={cn(
              "text-[16px] md:text-[18px] leading-relaxed max-w-[680px]",
              align === "center" && "mx-auto",
              subtitleColor
            )}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transitions.reveal, delay: 0.24 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
