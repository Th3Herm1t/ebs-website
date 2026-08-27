"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Download, FileText, ArrowRight } from "lucide-react";
import { Badge, CtaSection } from "@/components/shared";

const brochures = [
  {
    title: "Licence en Management",
    desc: "Découvrez le programme complet de la Licence en Management : cursus, certifications, débouchés et mobilité internationale.",
    image: "/images/all-img/hero.webp",
    color: "#2196F3",
    slug: "management"
  },
  {
    title: "Licence en Marketing",
    desc: "Tout savoir sur la Licence en Marketing : spécialisations digitales, projets professionnels et partenariats.",
    image: "/images/all-img/hero.webp",
    color: "#E91E8C",
    slug: "marketing"
  },
  {
    title: "Licence en Finance",
    desc: "Le parcours Finance en détail : ingénierie financière, certifications Bloomberg, stages en entreprise.",
    image: "/images/all-img/hero.webp",
    color: "#00BCD4",
    slug: "finance"
  },
  {
    title: "Licence en Informatique — Standard",
    desc: "Cursus Génie Logiciel : développement, bases de données, réseaux et certifications IT.",
    image: "/images/all-img/hero.webp",
    color: "#FF5722",
    slug: "informatique-standard"
  },
  {
    title: "Licence en Informatique — IA",
    desc: "Parcours Intelligence Artificielle : machine learning, deep learning, data science et projets IA.",
    image: "/images/all-img/hero.webp",
    color: "#9C27B0",
    slug: "informatique-ia"
  },
  {
    title: "Licence en Informatique — Cybersécurité",
    desc: "Sécurité informatique, ethical hacking, pentesting et certifications cyber reconnues.",
    image: "/images/all-img/hero.webp",
    color: "#FF9800",
    slug: "cybersecurite"
  },
  {
    title: "Master en CRM & Transformation Digitale",
    desc: "Maîtrisez la relation client et la transformation digitale : CRM, data analytics, stratégie omnicanale.",
    image: "/images/all-img/hero.webp",
    color: "#E91E63",
    slug: "crm"
  },
  {
    title: "Master en Projets Innovants & Startups",
    desc: "De l'idée au projet : design thinking, lean startup, levée de fonds et incubation.",
    image: "/images/all-img/hero.webp",
    color: "#5E35B1",
    slug: "startups"
  },
  {
    title: "Master en Ingénierie Financière",
    desc: "Finance de marché, M&A, gestion de portefeuille et certifications avancées.",
    image: "/images/all-img/hero.webp",
    color: "#00897B",
    slug: "ingenierie-financiere"
  },
  {
    title: "Master Marketing Digital & IA",
    desc: "Marketing digital, data science, intelligence artificielle, et stratégie d'acquisition.",
    image: "/images/all-img/hero.webp",
    color: "#FF5722",
    slug: "marketing-digital-ia"
  }
];

export default function BrochuresPage() {
  return (
    <main className="min-h-screen">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/heroes/hero-campus.webp" alt="" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/60 via-[#1a2035]/50 to-penn-navy/60" />
        <div className="absolute inset-0 z-[1] opacity-[0.03] bg-[radial-gradient(circle_at_50%_70%,_#2B8FAB_0%,_transparent_50%)]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="max-w-[700px]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">
                <div className="w-1 h-1 rounded-full bg-[#2B8FAB]" />
                Documentation
              </Badge>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-[44px] md:text-[56px] lg:text-[68px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6">
              Brochures<br />
              <span className="text-[#2B8FAB]">EBS</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="text-[17px] md:text-[19px] text-white/60 leading-relaxed max-w-[550px]">
              Parcourez et téléchargez les brochures de nos programmes. Retrouvez toutes les informations sur les cursus, certifications, débouchés et partenariats.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══════════ BROCHURES GRID ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
          <div className="text-center mb-12">
            <Badge size="lg" className="mb-4">Téléchargements</Badge>
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-penn-navy mb-3">
              Nos brochures par programme
            </h2>
            <p className="text-[15px] text-penn-body/50 max-w-[550px] mx-auto">
              Sélectionnez le programme qui vous intéresse et téléchargez sa brochure détaillée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brochures.map((brochure, i) => (
              <motion.div
                key={brochure.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-penn-border overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col"
              >
                <div className="relative h-[160px] overflow-hidden" style={{ backgroundColor: `${brochure.color}15` }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/90 shadow-sm flex items-center justify-center">
                      <FileText className="w-8 h-8" style={{ color: brochure.color }} />
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: brochure.color }} />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-[16px] font-extrabold text-penn-navy mb-2 group-hover:text-[#2B8FAB] transition-colors leading-snug">
                    {brochure.title}
                  </h3>
                  <p className="text-[13px] text-penn-body/60 leading-relaxed mb-4 flex-1 line-clamp-3">
                    {brochure.desc}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-penn-border/50">
                    <a 
                      href={`/brochures/${brochure.slug}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-bold border-2 transition-all hover:bg-penn-bg-light"
                      style={{ borderColor: `${brochure.color}40`, color: brochure.color }}
                    >
                      <FileText className="w-4 h-4" /> Aperçu
                    </a>
                    <a 
                      href={`/brochures/${brochure.slug}.pdf`}
                      download
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-bold text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: brochure.color }}
                    >
                      <Download className="w-4 h-4" /> Télécharger
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ REQUEST SECTION ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[700px] mx-auto px-5 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}>
            <Badge size="lg" className="mb-4">Besoin d&apos;aide ?</Badge>
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-4">
              Vous ne trouvez pas votre brochure ?
            </h2>
            <p className="text-[15px] text-penn-body/50 max-w-[480px] mx-auto mb-8">
              Contactez notre équipe pédagogique pour obtenir la brochure du programme qui vous intéresse.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2B8FAB] text-white font-bold text-[14px] hover:bg-[#2B8FAB]/90 transition-all shadow-lg shadow-[#2B8FAB]/20">
                Nous contacter <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/preinscription" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#2B8FAB] text-[#2B8FAB] font-bold text-[14px] hover:bg-[#2B8FAB] hover:text-white transition-all">
                Préinscription
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaSection
        title="Prêt à rejoindre EBS ?"
        subtitle="Téléchargez la brochure qui vous correspond et faites le premier pas vers votre avenir."
        primaryCta={{ label: "Préinscription", href: "/preinscription" }}
        secondaryCta={{ label: "Toutes les formations", href: "/nos-programmes" }}
      />
    </main>
  );
}
