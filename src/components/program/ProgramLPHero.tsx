"use client";

import { motion } from "motion/react";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/shared/Badge";
import { StatBar } from "@/components/shared/StatBar";
import { AdmissionForm } from "@/components/forms/AdmissionForm";
import { cn } from "@/lib/utils";

interface ProgramLPHeroProps {
  type: "licence" | "master";
  title: string;
  tagline: string;
  pitch: string;
  color: string;
  niveau: string;
  duree: string;
  totalCerts: number;
  slug: string;
}

export function ProgramLPHero({
  type,
  title,
  tagline,
  pitch,
  color,
  niveau,
  duree,
  totalCerts,
  slug,
}: ProgramLPHeroProps) {
  const typeLabel = type === "licence" ? "Licence" : "Master";

  const statItems = [
    { label: "certifications incluses", value: `${totalCerts}+` },
    { label: "", value: duree },
    { label: "Accrédité État Tunisien", value: "100%" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-white to-penn-green/5">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12 pt-36 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
          {/* LEFT — Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Badge
                style={{ backgroundColor: color + "15", color, borderColor: color + "30" }}
                size="lg"
              >
                {typeLabel} · {duree} · Accrédité État Tunisien
              </Badge>
            </div>

            <h1 className="text-[38px] md:text-[48px] lg:text-[56px] font-extrabold text-penn-navy leading-tight tracking-[-0.5px] mb-5">
              {title}
            </h1>

            <p
              className="text-[20px] md:text-[24px] font-bold italic mb-5"
              style={{ color }}
            >
              &ldquo;{tagline}&rdquo;
            </p>

            <p className="text-[15px] md:text-[17px] text-penn-body leading-relaxed max-w-[620px] mb-8">
              {pitch}
            </p>

            <div className="mb-10">
              <StatBar stats={statItems} color={color} />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/${type === "licence" ? "licences" : "masters"}/${slug}#form`}
                className={cn(
                  "inline-flex items-center gap-2 h-12 px-8 font-bold text-[14px] uppercase tracking-wide rounded-full text-white transition-all duration-200 hover:opacity-90"
                )}
                style={{ backgroundColor: color }}
              >
                Pré-inscription gratuite
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={`/brochures/${slug}.pdf`}
                className="inline-flex items-center gap-2 h-12 px-6 font-bold text-[14px] text-penn-navy rounded-full border-2 border-penn-border hover:border-penn-green hover:text-penn-green transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                Télécharger la brochure
              </Link>
            </div>
          </motion.div>

          {/* RIGHT — Sticky Form (MOBILE ONLY) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            id="form"
            className="h-full lg:hidden"
          >
            <AdmissionForm
              type={type}
              programmeName={title}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
