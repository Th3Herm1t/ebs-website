"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Award, BookOpen, ChevronDown, Target } from "lucide-react";
import { Badge } from "@/components/shared";
import { CertCategorySection } from "./CertCategorySection";
import type { CertProviderData } from "@/lib/certifications/providers";

const categoryColors = [
  "#2B8FAB",
  "#2196F3",
  "#E91E8C",
  "#FF9800",
  "#9C27B0",
  "#00BCD4",
  "#E91E63",
  "#5E35B1",
  "#00897B",
  "#FF5722",
];

export function CertProviderContent({ data }: { data: CertProviderData }) {
  const totalCerts = data.categories.reduce(
    (sum, cat) => sum + cat.certs.length,
    0
  );

  return (
    <>
      {/* ═══════════ IMMERSIVE HERO ═══════════ */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-penn-navy via-[#1a2035] to-penn-navy" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #2B8FAB 0%, transparent 60%), radial-gradient(circle at 70% 20%, #2B8FAB 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(43,143,171,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              size="lg"
              className="mb-6 border-white/20 text-white/80"
            >
               Organisme référencé · Catalogue EBS
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            {data.logo ? (
              <Image
                src={data.logo}
                alt={data.name}
                width={160}
                height={56}
                className="object-contain h-12 w-auto max-w-[160px]"
                unoptimized
              />
            ) : <span className="text-2xl font-extrabold text-white">{data.name}</span>}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[42px] md:text-[56px] lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
          >
             Ressources{" "}
            <span className="text-penn-green">{data.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[17px] md:text-[18px] text-white/70 leading-relaxed max-w-[700px] mb-12"
          >
            {data.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center w-[calc(50%-8px)] md:w-[calc((100%-48px)/3)]">
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">
                {totalCerts}+
              </p>
              <p className="text-[12px] text-white/50 font-medium">
                 ressources publiées
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center w-[calc(50%-8px)] md:w-[calc((100%-48px)/3)]">
              <p className="text-[32px] md:text-[44px] font-extrabold text-penn-green leading-none mb-1">
                {data.categories.length}
              </p>
              <p className="text-[12px] text-white/50 font-medium">Domaines</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center w-[calc(50%-8px)] md:w-[calc((100%-48px)/3)]">
              <Award className="w-6 h-6 text-penn-green mx-auto mb-1" />
              <p className="text-[12px] text-white/50 font-medium">
                 Gratuité vérifiée avant publication
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </section>

      {/* ═══════════ INTRO: Présentation + Pourquoi ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-penn-green/10 flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-penn-green" />
              </div>
              <h2 className="text-[28px] font-extrabold text-penn-navy mb-4">
                Présentation
              </h2>
              <p className="text-[15px] md:text-[16px] text-penn-body leading-relaxed">
                {data.presentation}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-penn-green/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-penn-green" />
              </div>
              <h2 className="text-[28px] font-extrabold text-penn-navy mb-4">
                 Pourquoi ces ressources comptent
              </h2>
              <div className="bg-penn-navy/5 rounded-2xl border border-penn-green/10 p-6">
                <p className="text-[15px] md:text-[16px] text-penn-body leading-relaxed">
                  {data.pourquoi}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ CATEGORIES ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">
              Catalogue complet
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
               {totalCerts} ressources et justificatifs publiés
            </h2>
            <p className="text-[16px] text-penn-body mt-3 max-w-[600px] mx-auto">
              Ces ressources sont présentées selon leur statut d'accès et leur
              intégration dans les parcours EBS.
            </p>
          </motion.div>

          <div className="space-y-10">
            {data.categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <CertCategorySection
                  category={cat}
                  index={i}
                  color={categoryColors[i % categoryColors.length]}
                  providerLogo={data.logo}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
