"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Award,
  BookOpen,
  ChevronDown,
  Globe,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";
import { Badge, CtaSection } from "@/components/shared";
import { providers } from "@/lib/certifications/providers";

const providerList = Object.values(providers);
const totalCerts = providerList.reduce(
  (sum, p) =>
    sum + p.categories.reduce((s, cat) => s + cat.certs.length, 0),
  0
);
const totalCategories = providerList.reduce(
  (sum, p) => sum + p.categories.length,
  0
);

export default function CertificationsPage() {
  return (
    <>
      {/* ═══════════ IMMERSIVE HERO ═══════════ */}
      <section className="relative pt-40 pb-28 overflow-hidden">
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
              Google · IBM · Harvard · Cisco · Bloomberg · Fortinet · HubSpot ·
              DeepLearning.AI · SEMrush · AWS · PMI · ScrumStudy · Databricks ·
              Microsoft
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[42px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
          >
            {totalCerts}+ certifications{" "}
            <span className="text-[#2B8FAB]">incluses</span>.
            <br />
            Intégrées à votre formation.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[17px] md:text-[19px] text-white/70 leading-relaxed max-w-[700px] mb-12"
          >
            Chez EBS, votre diplôme n&apos;est que le début. Vous repartez
            certifié par les plus grands noms mondiaux — Google, IBM, Harvard,
            Bloomberg, et 15+ fournisseurs — inclus dans votre formation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">
                {totalCerts}+
              </p>
              <p className="text-[12px] text-white/50 font-medium">
                Certifications disponibles
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-[#2B8FAB] leading-none mb-1">
                {providerList.length}
              </p>
              <p className="text-[12px] text-white/50 font-medium">
                Fournisseurs premium
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">
                {totalCategories}
              </p>
              <p className="text-[12px] text-white/50 font-medium">
                Domaines couverts
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-[#2B8FAB] leading-none mb-1">
                100%
              </p>
              <p className="text-[12px] text-white/50 font-medium">Incluses</p>
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

      {/* ═══════════ PROVIDER GRID ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">
              Nos fournisseurs
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              {providerList.length} fournisseurs de certifications premium
            </h2>
            <p className="text-[16px] text-penn-body mt-3 max-w-[650px] mx-auto">
              Chaque fournisseur propose un catalogue de certifications
              reconnues mondialement par les recruteurs, incluses
              dans votre formation.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {providerList.map((p, i) => {
              const certCount = p.categories.reduce(
                (s, cat) => s + cat.certs.length,
                0
              );

              return (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]"
                >
                  <Link
                    href={`/certifications/${p.slug}`}
                    className="group bg-white rounded-2xl border border-penn-border p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#2B8FAB]/30"
                  >
                    <div className="h-12 w-full mb-4 flex items-center">
                      <Image
                        src={p.logo}
                        alt={p.name}
                        width={140}
                        height={48}
                        className="object-contain h-10 w-auto max-w-[140px] opacity-70 group-hover:opacity-100 transition-opacity"
                        unoptimized
                      />
                    </div>

                    <h3 className="text-[18px] font-extrabold text-penn-navy group-hover:text-[#2B8FAB] transition-colors mb-2">
                      {p.name}
                    </h3>

                    <p className="text-[14px] text-penn-body leading-relaxed mb-4 flex-1 line-clamp-2">
                      {p.tagline}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-penn-border">
                      <div className="flex items-center gap-2">
                        <span className="text-[24px] font-extrabold text-penn-navy leading-none">
                          {certCount}+
                        </span>
                        <span className="text-[11px] text-penn-body/60 font-medium leading-tight">
                          certifications
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[13px] font-bold text-[#2B8FAB]">
                        Explorer
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ WHY EBS CERTS ═══════════ */}
      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #2B8FAB 0%, transparent 70%)",
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
              <Badge variant="outline" size="lg" className="mb-4 border-white/20 text-white/80">
                Pourquoi EBS ?
              </Badge>
            <h2 className="text-[34px] md:text-[48px] font-extrabold text-white leading-[1.1]">
              Des certifications reconnues
              <br />
              <span className="text-[#2B8FAB]">incluses</span> dans votre
              formation
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              {
                icon: (
                  <Trophy className="w-6 h-6 lg:w-7 lg:h-7" />
                ),
                title: "Reconnaissance mondiale",
                text: "Des certifications immédiatement reconnues par les recruteurs dans 190+ pays.",
                featured: true,
              },
              {
                icon: (
                  <Zap className="w-6 h-6 lg:w-7 lg:h-7" />
                ),
                title: "Incluses dans votre formation",
                text: "Aucun frais supplémentaire. Les certifications sont intégrées à votre parcours.",
                featured: true,
              },
              {
                icon: (
                  <Globe className="w-6 h-6 lg:w-7 lg:h-7" />
                ),
                title: `${providerList.length} fournisseurs`,
                text: "Google, IBM, Harvard, Bloomberg, Cisco, Fortinet, HubSpot, AWS, et bien d'autres.",
                featured: false,
              },
              {
                icon: (
                  <BookOpen className="w-6 h-6 lg:w-7 lg:h-7" />
                ),
                title: "7 programmes couverts",
                text: "Chaque Licence et Master a son propre parcours de certifications dédié.",
                featured: false,
              },
              {
                icon: (
                  <ShieldCheck className="w-6 h-6 lg:w-7 lg:h-7" />
                ),
                title: "Différenciation garantie",
                text: "Un CV EBS se distingue immédiatement sur le marché de l'emploi.",
                featured: false,
              },
              {
                icon: (
                  <GraduationCap className="w-6 h-6 lg:w-7 lg:h-7" />
                ),
                title: "Intégré à votre cursus",
                text: "Les certifications sont intégrées à votre emploi du temps, pas en plus de vos études.",
                featured: false,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`relative group bg-white/[0.03] backdrop-blur-sm border rounded-2xl p-6 lg:p-8 flex items-start gap-5 transition-all duration-300 ${
                  item.featured
                    ? "border-[#2B8FAB]/20 shadow-[0_0_60px_rgba(43,143,171,0.08)]"
                    : "border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05]"
                }`}
              >
                {item.featured && (
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow:
                        "inset 0 0 80px rgba(43,143,171,0.08)",
                    }}
                  />
                )}

                <div
                  className={`shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    item.featured
                      ? "w-14 h-14 lg:w-16 lg:h-16 bg-[#2B8FAB]/10 text-[#2B8FAB]"
                      : "w-14 h-14 lg:w-16 lg:h-16 bg-white/5 text-white/60"
                  }`}
                >
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <h3 className="text-[16px] lg:text-[18px] font-extrabold text-white/90 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[13px] lg:text-[14px] text-white/50 leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {item.featured && (
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#2B8FAB] animate-pulse" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ QUICK CTAs ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-[34px] md:text-[44px] font-extrabold text-penn-navy text-center mb-16"
          >
            Prêt à construire votre avenir certifié ?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <GraduationCap className="w-6 h-6" />
                ),
                title: "Nos Licences",
                desc: "5 parcours de Licence avec certifications dédiées.",
                href: "/licences",
                label: "Explorer",
              },
              {
                icon: (
                  <Trophy className="w-6 h-6" />
                ),
                title: "Nos Masters",
                desc: "3 Masters professionnels avec certifications avancées.",
                href: "/masters",
                label: "Explorer",
              },
              {
                icon: (
                  <Sparkles className="w-6 h-6" />
                ),
                title: "IA & Certifications",
                desc: "Découvrez comment l'IA transforme l'employabilité.",
                href: "/ia-et-certifications",
                label: "Découvrir",
              },
              {
                icon: (
                  <Award className="w-6 h-6" />
                ),
                title: "Pré-inscription",
                desc: "Candidatures 2026–2027 ouvertes. Early Bird jusqu'au 30 Juin.",
                href: "/preinscription",
                label: "Postuler",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={card.href}
                  className="group bg-white rounded-2xl border border-penn-border p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#2B8FAB]/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center mb-4 text-[#2B8FAB] group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="text-[17px] font-extrabold text-penn-navy mb-2 group-hover:text-[#2B8FAB] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-penn-body leading-relaxed mb-4 flex-1">
                    {card.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#2B8FAB]">
                    {card.label}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Rejoignez une formation qui vous certifie par les leaders mondiaux."
        subtitle="Candidatures 2026–2027 ouvertes. Déposez votre dossier dès maintenant."
        primaryCta={{
          label: "Voir nos programmes", href: "/nos-programmes",
        }}
        secondaryCta={{
          label: "Nous contacter",
          href: "/contact",
        }}
        background="penn-green"
      />
    </>
  );
}
