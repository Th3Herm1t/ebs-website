"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Badge, CtaSection } from "@/components/shared";

export default function CorpsEnseignantPage() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-40 pb-24 overflow-hidden">
                {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/heroes/hero-corps-enseignant.webp" alt="" fill className="object-cover" priority sizes="100vw" />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/50 via-[#1a2035]/50 to-penn-navy/50" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_30%_60%,_#2B8FAB_0%,_transparent_50%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
<div className="max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" size="lg" className="mb-8 border-white/20 text-white/80">
                <div className="w-1 h-1 rounded-full bg-[#2B8FAB]" />
                Corps Enseignant
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[40px] md:text-[52px] lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
            >
              Un corps enseignant d&apos;excellence,
              <br />
              <span className="text-[#2B8FAB]">au croisement de l&apos;académie et de l&apos;entreprise</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[17px] md:text-[19px] text-white/60 leading-relaxed max-w-[550px]"
            >
              Nos enseignants allient excellence académique et expérience professionnelle. Enseignants-chercheurs, experts et dirigeants d&apos;entreprise partagent leur expertise et transmettent des compétences en phase avec les réalités du marché.
            </motion.p>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-16"
          >
            {[
              { value: "55+", label: "Enseignants" },
              { value: "70+", label: "Domaines d'expertise" },
              { value: "40 %", label: "Issus du monde professionnel" },
            ].map((s) => (
              <div key={s.label} className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 text-center w-[calc(50%-8px)] md:w-[calc((100%-32px)/3)]">
                <p className="text-[28px] md:text-[36px] font-extrabold text-white leading-none mb-1">{s.value}</p>
                <p className="text-[13px] text-white/40 font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10"
          >
            <ArrowDown className="w-5 h-5 text-white/20 animate-bounce mx-auto" />
          </motion.div>
        </div>
      </section>

      <CtaSection
        title="Vous souhaitez rejoindre notre équipe enseignante ?"
        subtitle="EBS recrute des enseignants, des experts et des professionnels passionnés souhaitant transmettre leur savoir et contribuer à la formation des leaders de demain."
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
