"use client";

import { Award, Eye, Globe, Heart, Lightbulb, Target } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Badge, CtaSection } from "@/components/shared";

const valeurs = [
  {
    number: "01",
    icon: <Award className="w-5 h-5" />,
    nom: "Excellence académique",
    description: "Des programmes conçus selon les standards internationaux, mis à jour en continu.",
    concret: "Corps enseignant qualifié · Programmes revus chaque année · Benchmarking international",
    color: "#2B8FAB",
  },
  {
    number: "02",
    icon: <Lightbulb className="w-5 h-5" />,
    nom: "Innovation pédagogique",
    description: "L'IA et les certifications internationales sont au cœur de chaque parcours.",
    concret: "IA obligatoire dans tous les programmes · 150+ certifications gratuites · Nouvelles méthodes d'enseignement",
    color: "#9C27B0",
  },
  {
    number: "03",
    icon: <Globe className="w-5 h-5" />,
    nom: "Ouverture internationale",
    description: "Nos partenariats ouvrent des horizons sans frontières.",
    concret: "16 partenaires en France, Canada, Italie et Oman · Mobilité étudiante facilitée · Double diplôme possible",
    color: "#E89745",
  },
  {
    number: "04",
    icon: <Target className="w-5 h-5" />,
    nom: "Employabilité réelle",
    description: "Tout est conçu pour votre insertion professionnelle rapide.",
    concret: "Simulations Forage · Certifications reconnues par les RH mondiaux · Stages professionnels",
    color: "#00BCD4",
  },
  {
    number: "05",
    icon: <Heart className="w-5 h-5" />,
    nom: "Proximité & Accompagnement",
    description: "Vous n'êtes jamais un numéro à EBS.",
    concret: "Suivi personnalisé · Administration réactive · Encadrement individuel",
    color: "#E91E8C",
  },
];

const missions = [
  {
    number: "01",
    text: "Préparer les étudiants tunisiens à la vie professionnelle en leur proposant des formations diversifiées, innovantes et alignées sur les standards internationaux.",
  },
  {
    number: "02",
    text: "Former des managers, des entrepreneurs et des cadres supérieurs dotés d'un solide socle de connaissances fondamentales et pratiques.",
  },
  {
    number: "03",
    text: "Intégrer les compétences en Intelligence Artificielle dans tous les parcours, faisant d'EBS la première université tunisienne à adopter l'IA comme compétence transversale universelle.",
  },
  {
    number: "04",
    text: "Permettre à chaque étudiant de décrocher des certifications internationales reconnues par les recruteurs du monde entier.",
  },
  {
    number: "05",
    text: "Ouvrir des perspectives d'études et de carrières à l'international grâce à nos partenariats stratégiques.",
  },
];

const pillars = [
  { icon: <Eye className="w-5 h-5" />, label: "Vision", text: "Notre ambition pour l'avenir" },
  { icon: <Target className="w-5 h-5" />, label: "Mission", text: "Ce que nous faisons chaque jour" },
  { icon: <Award className="w-5 h-5" />, label: "Valeurs", text: "Ce qui nous définit" },
];

export default function VisionPage() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-40 pb-24 overflow-hidden">
                {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/heroes/hero-vision.jpg" alt="" fill className="object-cover" priority />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/50 via-[#1a2035]/50 to-penn-navy/50" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_20%_80%,_#2B8FAB_0%,_transparent_50%),radial-gradient(circle_at_80%_20%,_#9C27B0_0%,_transparent_50%)]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
<div className="max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">
                Nos Fondamentaux
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[42px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
            >
              Vision, Mission
              <br />
              <span className="text-[#2B8FAB]">&amp; Valeurs</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[17px] md:text-[19px] text-white/60 leading-relaxed max-w-[550px]"
            >
              Ce qui nous guide au quotidien pour former les leaders de demain.
            </motion.p>
          </div>

          {/* 3 Floating Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16"
          >
            {pillars.map((p, i) => (
              <div
                key={p.label}
                className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 flex items-center gap-4 hover:bg-white/[0.06] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center text-[#2B8FAB] shrink-0">
                  {p.icon}
                </div>
                <div>
                  <p className="text-[14px] font-extrabold text-white uppercase tracking-wide">{p.label}</p>
                  <p className="text-[13px] text-white/50">{p.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ VISION ═══════════ */}
      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative z-10 max-w-[900px] mx-auto px-5 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">
              Notre Vision
            </Badge>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <span className="absolute -top-8 -left-4 text-[120px] leading-none font-serif text-[#2B8FAB]/10 select-none pointer-events-none">
              &ldquo;
            </span>
            <p className="text-[24px] md:text-[32px] lg:text-[38px] font-bold leading-snug text-white/90 italic relative z-10">
              Être l&apos;université de référence en Tunisie pour la formation de professionnels compétitifs à l&apos;échelle internationale, maîtrisant l&apos;Intelligence Artificielle et certifiés par les plus grandes organisations mondiales.
            </p>
            <span className="absolute -bottom-12 -right-4 text-[120px] leading-none font-serif text-[#2B8FAB]/10 select-none pointer-events-none rotate-180">
              &ldquo;
            </span>
          </motion.blockquote>
        </div>
      </section>

      {/* ═══════════ MISSION ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="mb-14"
          >
            <Badge variant="default" size="lg" className="mb-4">Notre Mission</Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Ce que nous faisons chaque jour
            </h2>
            <p className="text-[17px] text-penn-body mt-4 max-w-[600px]">
              Espima Business School a pour mission de former les leaders qui façonneront le monde de demain.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connected line */}
            <div className="hidden lg:block absolute left-[35px] top-0 bottom-0 w-px bg-penn-border" />

            <div className="space-y-6">
              {missions.map((m, i) => (
                <motion.div
                  key={m.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative flex gap-8 items-start pl-0 lg:pl-[100px]"
                >
                  {/* Number circle — on the line */}
                  <div className="hidden lg:flex absolute left-0 w-[70px] justify-center">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-penn-border flex items-center justify-center z-10 shrink-0">
                      <span className="text-[13px] font-extrabold text-penn-navy">{m.number}</span>
                    </div>
                  </div>

                  {/* Mobile number */}
                  <div className="lg:hidden w-10 h-10 rounded-full bg-penn-bg-light border-2 border-penn-border flex items-center justify-center shrink-0">
                    <span className="text-[13px] font-extrabold text-penn-navy">{m.number}</span>
                  </div>

                  <div className="bg-penn-bg-light rounded-2xl border border-penn-border p-6 flex-1 hover:border-[#2B8FAB]/30 hover:shadow-md transition-all duration-300">
                    <p className="text-[15px] md:text-[16px] text-penn-navy leading-relaxed font-medium">
                      {m.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ VALEURS ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">Nos Valeurs</Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Les 5 piliers qui nous définissent
            </h2>
          </motion.div>

          {/* 3 + 2 centered grid for 5 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valeurs.slice(0, 3).map((v, i) => (
              <ValeurCard key={v.nom} valeur={v} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-[860px] mx-auto">
            {valeurs.slice(3, 5).map((v, i) => (
              <ValeurCard key={v.nom} valeur={v} index={i + 3} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Rejoignez une université qui a une vision."
        subtitle="Découvrez nos programmes et construisez votre avenir avec nous."
        primaryCta={{ label: "Voir nos programmes", href: "/nos-programmes" }}
        background="penn-green"
      />
    </>
  );
}

function ValeurCard({ valeur, index }: { valeur: typeof valeurs[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl border border-penn-border p-6 lg:p-8 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{ borderLeftWidth: "4px", borderLeftColor: valeur.color }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: valeur.color + "15", color: valeur.color }}
        >
          {valeur.icon}
        </div>
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-widest mb-1 block" style={{ color: valeur.color }}>
            {valeur.number}
          </span>
          <h3 className="text-[19px] font-extrabold text-penn-navy leading-tight">
            {valeur.nom}
          </h3>
        </div>
      </div>

      <p className="text-[14px] text-penn-body leading-relaxed mb-4 pl-[60px]">
        {valeur.description}
      </p>

      <div className="pl-[60px] pt-4 border-t border-penn-border">
        <p className="text-[13px] font-semibold" style={{ color: valeur.color }}>
          Concrètement chez EBS :
        </p>
        <p className="text-[13px] text-penn-body/70 leading-relaxed mt-1">
          {valeur.concret}
        </p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${valeur.color}, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}
