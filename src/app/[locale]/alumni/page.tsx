"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowDown, Award, Briefcase, Globe, MapPin, Quote, Send, Star, Users } from "lucide-react";
import { CtaSection } from "@/components/shared";

const destinations = [
  { name: "Tunisie", count: "65%" },
  { name: "France", count: "18%" },
  { name: "Canada", count: "8%" },
  { name: "EAU", count: "4%" },
  { name: "Qatar", count: "2%" },
  { name: "Belgique", count: "1.5%" },
  { name: "Allemagne", count: "1.5%" },
];

const testimonials = [
  {
    name: "Ahmed MEJRI",
    role: "Data Analyst — Orange Tunisie",
    promo: "Promotion 2019 — Licence Informatique",
    quote: "Grâce aux certifications Google et IBM obtenues pendant ma Licence à EBS, j'ai décroché mon premier emploi avant même d'être diplômé. Aujourd'hui, je manage une équipe de 5 analystes.",
    initials: "AM",
  },
  {
    name: "Sarra BEN ALI",
    role: "Digital Marketing Manager — Publicis",
    promo: "Promotion 2020 — Licence Marketing",
    quote: "La Licence Marketing d'EBS m'a donné les armes pour réussir en agence. Les certifications HubSpot et Google Ads m'ont ouverte les portes de Publicis dès mon stage de fin d'études.",
    initials: "SB",
  },
  {
    name: "Youssef GHARBI",
    role: "Project Manager — UQAT Canada",
    promo: "Promotion 2018 — Licence Management",
    quote: "J'ai commencé ma Licence à EBS et je l'ai terminée à l'UQAT au Canada grâce au partenariat. Aujourd'hui je travaille à Montréal et j'ai obtenu ma résidence permanente.",
    initials: "YG",
  },
  {
    name: "Mariem KALLEL",
    role: "Financial Analyst — KPMG Tunisie",
    promo: "Promotion 2021 — Licence Finance",
    quote: "Les simulations Bloomberg et Forage m'ont préparée aux réalités du métier. Dès mon premier entretien chez KPMG, les recruteurs ont été impressionnés par mes certifications.",
    initials: "MK",
  },
];

const secteurs = [
  { icon: <Briefcase className="w-6 h-6" />, nom: "Banque & Finance", desc: "Analystes, gestionnaires de portefeuille, auditeurs dans les plus grandes institutions financières." },
  { icon: <Star className="w-6 h-6" />, nom: "Digital & Marketing", desc: "Digital marketing managers, growth hackers, SEO specialists en agence et en entreprise." },
  { icon: <Award className="w-6 h-6" />, nom: "Tech & IA", desc: "Data scientists, ML engineers, experts cybersécurité dans les entreprises technologiques." },
  { icon: <Globe className="w-6 h-6" />, nom: "Conseil", desc: "Consultants en stratégie, management et transformation digitale chez les Big Four." },
  { icon: <Star className="w-6 h-6" />, nom: "Entrepreneuriat", desc: "Fondateurs de startups, incubés et accélérés par le réseau EBS et ses partenaires." },
];

export default function AlumniPage() {

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-40 pb-24 overflow-hidden">
                {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/heroes/hero-alumni.jpg" alt="" fill className="object-cover" priority />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/50 via-[#1a2035]/50 to-penn-navy/50" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_70%,_#2B8FAB_0%,_transparent_50%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
<div className="max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 text-[#2B8FAB]/60 text-[12px] font-bold uppercase tracking-[4px] mb-8">
                <div className="w-8 h-px bg-[#2B8FAB]/30" />
                Réseau des Diplômés
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[40px] md:text-[52px] lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
            >
              Des diplômés qui réussissent
              <br />
              <span className="text-[#2B8FAB]">partout dans le monde.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[17px] md:text-[19px] text-white/60 leading-relaxed max-w-[550px]"
            >
              Rejoignez une communauté de diplômés actifs en Tunisie, en France, au Canada, dans les pays du Golfe et à l&apos;international.
            </motion.p>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {[
              { value: "93%", label: "Embauchés en 3 mois" },
              { value: "7", label: "Pays de destination" },
              { value: "500+", label: "Diplômés" },
              { value: "5", label: "Secteurs d'activité" },
            ].map((s) => (
              <div key={s.label} className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 text-center">
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

      {/* ═══════════ WORLD MAP ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-14"
          >
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15] mb-4">
              Nos alumni dans le monde
            </h2>
            <p className="text-[16px] text-penn-body max-w-[600px] mx-auto">
              Une communauté internationale qui fait rayonner EBS sur 3 continents.
            </p>
          </motion.div>

          {/* Visual destination bars */}
          <div className="space-y-3 max-w-[700px] mx-auto">
            {destinations.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-4"
              >
                <div className="w-24 text-right shrink-0">
                  <span className="text-[14px] font-bold text-penn-navy">{d.name}</span>
                </div>
                <div className="flex-1 h-10 bg-penn-bg-light rounded-r-lg overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: d.count }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#2B8FAB] to-[#2B8FAB]/60 rounded-r-lg flex items-center justify-end pr-3"
                  >
                    <span className="text-[12px] font-extrabold text-white">{d.count}</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_30%_50%,_#2B8FAB_0%,_transparent_60%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-14"
          >
            <span className="inline-block text-[13px] font-bold uppercase tracking-[3px] text-[#2B8FAB] mb-4">
              Témoignages
            </span>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-white leading-[1.15]">
              Ils ont fait EBS. Ils partagent.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1100px] mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 lg:p-8 hover:bg-white/[0.05] transition-colors"
              >
                <Quote className="w-6 h-6 text-[#2B8FAB]/20 mb-4" />
                <p className="text-[15px] text-white/70 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                  <div className="w-11 h-11 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center text-[#2B8FAB] font-extrabold text-[15px] border border-[#2B8FAB]/10">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[15px] font-extrabold text-white">{t.name}</p>
                    <p className="text-[13px] text-white/50">{t.role}</p>
                    <p className="text-[11px] text-white/30 mt-0.5">{t.promo}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SECTEURS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-14"
          >
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Secteurs d&apos;activité de nos diplômés
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secteurs.map((s, i) => (
              <motion.div
                key={s.nom}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-penn-bg-light rounded-2xl p-6 lg:p-8 border border-penn-border hover:border-[#2B8FAB]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center mb-5 text-[#2B8FAB] group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-[18px] font-extrabold text-penn-navy mb-2">{s.nom}</h3>
                <p className="text-[14px] text-penn-body leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ALUMNI FORM + LINKEDIN ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-white rounded-2xl border border-penn-border p-6 lg:p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center mb-4 text-[#2B8FAB]">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-extrabold text-penn-navy mb-2">Mettez à jour votre profil</h3>
              <p className="text-[14px] text-penn-body mb-4">
                Vous êtes diplômé(e) EBS ? Tenez-nous informés de votre parcours et restez connecté(e) au réseau.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-[14px] font-bold text-[#2B8FAB] hover:text-penn-navy transition-colors"
              >
                Mettre à jour mon profil →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-white rounded-2xl border border-penn-border p-6 lg:p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center mb-4 text-[#0A66C2]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-extrabold text-penn-navy mb-2">Rejoignez le réseau LinkedIn</h3>
              <p className="text-[14px] text-penn-body mb-4">
                Connectez-vous avec les alumni EBS du monde entier sur notre groupe LinkedIn dédié.
              </p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] font-bold text-[#0A66C2] hover:underline transition-colors"
              >
                Rejoindre le groupe →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Vous êtes diplômé(e) EBS ? Devenez mentor."
        subtitle="Partagez votre expérience avec nos étudiants et contribuez à former la prochaine génération de leaders."
        primaryCta={{ label: "Devenir mentor", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
