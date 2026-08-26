"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "motion/react";
import { FormattedTitle } from "./FormattedTitle";

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  whatsapp?: string;
  background?: "penn-green" | "penn-navy" | "white" | string;
  className?: string;
}

const presetBg: Record<string, string> = {
  "penn-green": "bg-penn-green text-white",
  "penn-navy": "bg-penn-navy text-white",
  white: "bg-white text-penn-navy border-y border-penn-border",
};

export function CtaSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  whatsapp,
  background = "penn-green",
  className,
}: CtaSectionProps) {
  const isPreset = background in presetBg;
  const isDark = background === "penn-navy" || background === "penn-green";
  const textColor = isDark ? "text-white" : "text-penn-navy";
  const mutedColor = isDark ? "text-white/70" : "text-penn-body";

  return (
    <section
      className={cn(
        "section-padding",
        isPreset ? presetBg[background] : "",
        className
      )}
      style={!isPreset ? { backgroundColor: background } : undefined}
    >
      <div className="max-w-[1160px] mx-auto px-5 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className={cn(
            "text-[28px] md:text-[38px] font-extrabold leading-tight mb-4",
            textColor
          )}
        >
          <FormattedTitle text={title} />
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "text-[15px] md:text-[17px] max-w-[600px] mx-auto mb-8",
              mutedColor
            )}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href={primaryCta.href}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 gap-2 px-8 font-bold text-[14px] rounded-full"
            )}
          >
            {primaryCta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 gap-2 px-8 font-bold text-[14px] rounded-full",
                isDark && "bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white"
              )}
            >
              {secondaryCta.label}
            </Link>
          )}

          {whatsapp && (
            <Link
              href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 text-[14px] font-bold hover:underline",
                textColor
              )}
            >
              <Phone className="w-4 h-4" />
              {whatsapp}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
