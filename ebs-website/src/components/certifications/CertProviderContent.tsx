"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Award,
  BookOpen,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Home,
  ShieldCheck,
  Sparkles,
  Target,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/shared";
import { CertCategorySection } from "./CertCategorySection";

export interface AssociatedProgrammeInfo {
  id: string;
  name: string;
  level: "licence" | "master";
  resourceCount: number;
}

export interface RelatedProviderInfo {
  slug: string;
  name: string;
  logo?: string;
  resourceCount: number;
}

export interface EnhancedCertProviderData {
  slug: string;
  name: string;
  logo: string;
  tagline: string;
  presentation: string;
  pourquoi: string;
  categories: { name: string; certs: { name: string; level?: string; isForage?: boolean }[] }[];
  associatedProgrammes?: AssociatedProgrammeInfo[];
  relatedProviders?: RelatedProviderInfo[];
}

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

export function CertProviderContent({ data }: { data: EnhancedCertProviderData }) {
  const totalCerts = data.categories.reduce((sum, cat) => sum + cat.certs.length, 0);

  return (
    <>
      {/* ═══════════ IMMERSIVE HERO ═══════════ */}
      <section className="relative pt-36 pb-20 md:pt-40 md:pb-24 overflow-hidden">
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
            backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-[13px] text-white/60 mb-6 font-semibold"
            aria-label="Fil d'Ariane"
          >
            <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home className="h-3.5 w-3.5" />
              Accueil
            </Link>
            <ChevronRight className="h-3.5 w-3.5 opacity-40" />
            <Link href="/certifications" className="hover:text-white transition-colors">
              Certifications
            </Link>
            <ChevronRight className="h-3.5 w-3.5 opacity-40" />
            <span className="text-penn-green">{data.name}</span>
          </motion.nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">
              Organisme référencé · Catalogue EBS
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 flex items-center"
          >
            {data.logo ? (
              <div className="bg-white/95 rounded-2xl p-3 shadow-lg flex items-center justify-center">
                <Image
                  src={data.logo}
                  alt={data.name}
                  width={160}
                  height={56}
                  className="object-contain h-10 w-auto max-w-[160px]"
                  unoptimized
                />
              </div>
            ) : (
              <span className="text-2xl font-extrabold text-white">{data.name}</span>
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[38px] md:text-[54px] lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
          >
            Ressources <span className="text-penn-green">{data.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[17px] md:text-[18px] text-white/70 leading-relaxed max-w-[700px] mb-10"
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
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">{totalCerts}+</p>
              <p className="text-[12px] text-white/50 font-medium">ressources vérifiées</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center w-[calc(50%-8px)] md:w-[calc((100%-48px)/3)]">
              <p className="text-[32px] md:text-[44px] font-extrabold text-penn-green leading-none mb-1">
                {data.categories.length}
              </p>
              <p className="text-[12px] text-white/50 font-medium">Domaines de compétences</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center w-[calc(50%-8px)] md:w-[calc((100%-48px)/3)] flex flex-col justify-center items-center">
              <ShieldCheck className="w-8 h-8 text-emerald-400 mb-1" />
              <p className="text-[12px] text-white/70 font-bold">100% Gratuit & Garanti</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-penn-green/10 flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-penn-green" />
              </div>
              <h2 className="text-[28px] font-extrabold text-penn-navy mb-4">Présentation de l'organisme</h2>
              <p className="text-[15px] md:text-[16px] text-penn-body leading-relaxed">{data.presentation}</p>
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
              <h2 className="text-[28px] font-extrabold text-penn-navy mb-4">Pourquoi ces compétences comptent</h2>
              <div className="bg-penn-navy/5 rounded-2xl border border-penn-green/10 p-6">
                <p className="text-[15px] md:text-[16px] text-penn-body leading-relaxed">{data.pourquoi}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ ASSOCIATED EBS PROGRAMMES ═══════════ */}
      {data.associatedProgrammes && data.associatedProgrammes.length > 0 && (
        <section className="py-16 bg-slate-50 border-y border-penn-border">
          <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
            <div className="text-center mb-10">
              <Badge variant="default" size="lg" className="mb-3">
                Parcours académiques
              </Badge>
              <h2 className="text-[28px] md:text-[36px] font-extrabold text-penn-navy">
                Programmes EBS intégrant {data.name}
              </h2>
              <p className="text-[15px] text-penn-body mt-2 max-w-[620px] mx-auto">
                Ces certifications sont directement préparées et valorisées dans les cursus suivants.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.associatedProgrammes.map((programme) => (
                <Link
                  key={programme.id}
                  href={`/${programme.level === "licence" ? "licences" : "masters"}/${programme.id}`}
                  className="group rounded-2xl border border-penn-border bg-white p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-penn-green hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="rounded-full bg-penn-navy/5 px-3 py-1 text-[11px] font-extrabold uppercase text-penn-navy">
                        {programme.level === "licence" ? "Licence" : "Master"}
                      </span>
                      <span className="text-[12px] font-bold text-penn-green">
                        {programme.resourceCount} certs {data.name}
                      </span>
                    </div>
                    <h3 className="text-[16px] font-extrabold text-penn-navy group-hover:text-penn-green transition-colors">
                      {programme.name}
                    </h3>
                  </div>
                  <div className="mt-4 pt-3 border-t border-penn-border flex items-center justify-between text-[12px] font-extrabold text-penn-navy group-hover:text-penn-green">
                    <span>Voir le programme</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ CATEGORIES & COURSE LIST ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">
              Catalogue détaillé
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              {totalCerts} ressources et justificatifs référencés
            </h2>
            <p className="text-[16px] text-penn-body mt-3 max-w-[600px] mx-auto">
              Chaque formation est vérifiée 100% gratuite et intégrée aux parcours de compétences EBS.
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

      {/* ═══════════ RELATED PROVIDERS ═══════════ */}
      {data.relatedProviders && data.relatedProviders.length > 0 && (
        <section className="py-16 bg-[#F8FAFC] border-t border-penn-border">
          <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
            <div className="text-center mb-10">
              <Badge variant="default" size="lg" className="mb-3">
                Autres partenaires
              </Badge>
              <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy">
                Découvrez aussi ces organismes
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.relatedProviders.map((other) => (
                <Link
                  key={other.slug}
                  href={`/certifications/${other.slug}`}
                  className="group flex flex-col items-center justify-center rounded-2xl border border-penn-border bg-white p-5 text-center transition-all hover:-translate-y-1 hover:border-penn-green hover:shadow-md"
                >
                  <div className="h-10 flex items-center justify-center mb-3">
                    {other.logo ? (
                      <Image
                        src={other.logo}
                        alt={other.name}
                        width={100}
                        height={32}
                        className="max-h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        unoptimized
                      />
                    ) : (
                      <span className="text-[14px] font-extrabold text-penn-navy">{other.name}</span>
                    )}
                  </div>
                  <p className="text-[13px] font-extrabold text-penn-navy group-hover:text-penn-green transition-colors">
                    {other.name}
                  </p>
                  <p className="text-[11px] text-penn-body/60 mt-1">{other.resourceCount} ressources vérifiées</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
