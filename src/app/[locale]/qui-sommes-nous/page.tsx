"use client";

import { Award, BookOpen, Building2, ChevronDown, Clock, Download, Globe, GraduationCap, Phone, ShieldCheck, Trophy, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { Badge, CtaSection } from "@/components/shared";

const timeline = [
  {
    year: "2013",
    title: "Fondation d'EBS",
    text: "Création d'Espima Business School à Tunis. Agrément N°2013/02 du Ministère de l'Enseignement Supérieur et de la Recherche Scientifique. Une conviction : la Tunisie mérite des formations aux standards internationaux.",
    highlight: false,
  },
  {
    year: "2016",
    title: "Premiers partenariats",
    text: "Signature des premières conventions avec des universités françaises. Déploiement des premiers programmes de Licence en Management, Marketing, Finance, et Informatique. Les premières promotions entrent sur le marché.",
    highlight: false,
  },
  {
    year: "2020",
    title: "Expansion internationale",
    text: "Le réseau s'étend : UQAT Canada, EM Normandie, PSB Paris. Ouverture des parcours internationaux. Lancement des Masters professionnels. L'employabilité de nos diplômés dépasse 90%.",
    highlight: false,
  },
  {
    year: "2026",
    title: "Le virage IA",
    text: "EBS devient la première université tunisienne à intégrer l'IA comme compétence transversale obligatoire dans tous ses programmes. 150+ certifications internationales gratuites sont accessibles à chaque étudiant. Partenariats avec Google, IBM, Harvard, Bloomberg et 15+ fournisseurs mondiaux.",
    highlight: true,
  },
];

const ctaCards = [
  { icon: <BookOpen className="w-6 h-6" />, title: "Nos Programmes", desc: "Licences et Masters en management, finance, marketing et tech.", href: "/licences", label: "Explorer" },
  { icon: <GraduationCap className="w-6 h-6" />, title: "Pré-inscription", desc: "Candidatures 2026–2027 ouvertes. Early Bird jusqu'au 30 Juin.", href: "/contact", label: "Postuler" },
  { icon: <Download className="w-6 h-6" />, title: "Brochures", desc: "Téléchargez nos brochures détaillées par programme.", href: "#", label: "Télécharger" },
  { icon: <Phone className="w-6 h-6" />, title: "Nous Contacter", desc: "Une question ? Notre équipe vous répond sous 24h.", href: "/contact", label: "Contact" },
];

export default function QuiSommesNousPage() {
  return (
    <>
      {/* ═══════════ IMMERSIVE HERO ═══════════ */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-penn-navy via-[#1a2035] to-penn-navy" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_30%_50%,_#2B8FAB_0%,_transparent_60%),radial-gradient(circle_at_70%_20%,_#2B8FAB_0%,_transparent_50%)]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">
                Université privée agréée · Tunis, Tunisie · Fondée en 2013
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[42px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
            >
              Former les Leaders
              <br />
              <span className="text-[#2B8FAB]">de demain</span>, depuis 2013.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[17px] md:text-[19px] text-white/70 leading-relaxed max-w-[650px] mb-12"
            >
              Espima Business School forme depuis plus de 10 ans les managers, ingénieurs financiers, experts du digital et spécialistes en technologies qui font la différence sur le marché de l'emploi tunisien et international.
            </motion.p>
          </div>

          {/* Animated Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">2013</p>
              <p className="text-[13px] text-white/50 font-medium">Fondation</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">7</p>
              <p className="text-[13px] text-white/50 font-medium">Programmes</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-[#2B8FAB] leading-none mb-1">150+</p>
              <p className="text-[13px] text-white/50 font-medium">Certifications gratuites</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">95%</p>
              <p className="text-[13px] text-white/50 font-medium">Taux de réussite</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">16</p>
              <p className="text-[13px] text-white/50 font-medium">Partenaires internationaux</p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </section>

      {/* ═══════════ TIMELINE: NOTRE HISTOIRE ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">Notre Histoire</Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Plus de 10 ans d'excellence
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line — desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-penn-border -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-0">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${isLeft ? "" : "lg:[direction:rtl]"} relative`}
                  >
                    {/* Dot on the line */}
                    <div className={`hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-[3px] z-10 ${item.highlight ? "border-[#2B8FAB] bg-[#2B8FAB]" : "border-penn-border bg-white"}`} />

                    <div className={isLeft ? "lg:[direction:ltr]" : "lg:[direction:ltr]"}>
                      <div className={`bg-white rounded-2xl border p-6 lg:p-8 transition-all duration-300 ${item.highlight ? "border-[#2B8FAB]/30 shadow-[0_0_40px_rgba(43,143,171,0.1)]" : "border-penn-border hover:shadow-md"}`}>
                        <span className={`inline-block text-[13px] font-extrabold uppercase tracking-widest mb-2 ${item.highlight ? "text-[#2B8FAB]" : "text-penn-body/60"}`}>
                          {item.year}
                        </span>
                        <h3 className="text-[20px] font-extrabold text-penn-navy mb-2">{item.title}</h3>
                        <p className="text-[15px] text-penn-body leading-relaxed">{item.text}</p>
                      </div>
                    </div>

                    {/* Empty column for stagger */}
                    <div className="hidden lg:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CHIFFRES CLÉS ═══════════ */}
      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,_#2B8FAB_0%,_transparent_70%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[14px] font-bold uppercase tracking-[3px] text-[#2B8FAB] mb-4">
              EBS en chiffres
            </span>
            <h2 className="text-[34px] md:text-[48px] font-extrabold text-white leading-[1.1]">
              L&apos;excellence en quelques chiffres
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              { end: 2013, label: "Année de fondation", icon: <Building2 className="w-6 h-6 lg:w-7 lg:h-7" />, featured: false },
              { end: 7, label: "Programmes disponibles", sublabel: "4 Licences · 3 Masters", icon: <BookOpen className="w-6 h-6 lg:w-7 lg:h-7" />, featured: false },
              { end: 150, suffix: "+", label: "Certifications gratuites", sublabel: "Google · IBM · Harvard · Bloomberg...", icon: <Award className="w-6 h-6 lg:w-7 lg:h-7" />, featured: true },
              { end: 95, suffix: "%", label: "Taux de réussite", sublabel: "Depuis notre création", icon: <Trophy className="w-6 h-6 lg:w-7 lg:h-7" />, featured: true },
              { end: 16, label: "Partenaires internationaux", sublabel: "France · Canada · Italie · Oman", icon: <Globe className="w-6 h-6 lg:w-7 lg:h-7" />, featured: false },
              { end: 10, suffix: "+", label: "Années d&apos;expérience", sublabel: "Former les leaders depuis 2013", icon: <Clock className="w-6 h-6 lg:w-7 lg:h-7" />, featured: false },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`relative group bg-white/[0.03] backdrop-blur-sm border rounded-2xl p-6 lg:p-8 flex items-center gap-5 transition-all duration-300 ${
                  stat.featured
                    ? "border-[#2B8FAB]/20 shadow-[0_0_60px_rgba(43,143,171,0.08)] lg:col-span-1"
                    : "border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05]"
                }`}
              >
                {stat.featured && (
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: "inset 0 0 80px rgba(43,143,171,0.08)" }}
                  />
                )}

                <div className={`shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 text-[#2B8FAB] ${
                  stat.featured ? "w-16 h-16 lg:w-20 lg:h-20 bg-[#2B8FAB]/10" : "w-14 h-14 lg:w-16 lg:h-16 bg-white/5 text-white/60"
                }`}>
                  {stat.icon}
                </div>

                <div className="min-w-0">
                  <div className="flex items-baseline gap-1">
                    <span className={`font-extrabold leading-none tracking-tight ${
                      stat.featured
                        ? "text-[38px] md:text-[48px] lg:text-[56px] text-[#2B8FAB]"
                        : "text-[30px] md:text-[38px] lg:text-[44px] text-white"
                    }`}>
                      {stat.end}{stat.suffix ?? ""}
                    </span>
                  </div>
                  <p className="text-[14px] lg:text-[15px] font-bold text-white/90 leading-tight mt-1">
                    {stat.label}
                  </p>
                  {stat.sublabel && (
                    <p className="text-[11px] lg:text-[12px] text-white/40 font-medium mt-0.5 leading-snug">
                      {stat.sublabel}
                    </p>
                  )}
                </div>

                {stat.featured && (
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#2B8FAB] animate-pulse" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ACCRÉDITATIONS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">Reconnaissance</Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Accréditations & Reconnaissance
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.1 }}
              className="bg-penn-bg-light rounded-2xl p-8 border border-penn-border hover:border-[#2B8FAB]/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7 text-[#2B8FAB]" />
              </div>
              <h3 className="text-[20px] font-extrabold text-penn-navy mb-3">Agrément d'État</h3>
              <p className="text-[15px] text-penn-body leading-relaxed">
                Université privée agréée par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique de la République Tunisienne. Agrément N°2013/02 — Diplômes reconnus par l'État tunisien.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.2 }}
              className="bg-penn-bg-light rounded-2xl p-8 border border-penn-border hover:border-[#2B8FAB]/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-[#2B8FAB]" />
              </div>
              <h3 className="text-[20px] font-extrabold text-penn-navy mb-3">Réseau international</h3>
              <p className="text-[15px] text-penn-body leading-relaxed">
                Membre du réseau de 16 institutions universitaires partenaires : UQAT (Canada), EM Normandie, PSB Paris, IDRAC, IFAG, IGEFI, Éklore, Epitech, EPSI, Excelia, FIGS Education, Sup&apos;de Com, RedSup (France), Link University (Italie) et GUtech (Oman).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.3 }}
              className="bg-penn-bg-light rounded-2xl p-8 border border-penn-border hover:border-[#2B8FAB]/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-7 h-7 text-[#2B8FAB]" />
              </div>
              <h3 className="text-[20px] font-extrabold text-penn-navy mb-3">Partenariats Entreprises</h3>
              <p className="text-[15px] text-penn-body leading-relaxed">
                Partenariats actifs avec des entreprises nationales et multinationales pour offrir à nos étudiants des stages, des alternances et des opportunités de recrutement dans des environnements professionnels réels.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.4 }}
              className="bg-penn-bg-light rounded-2xl p-8 border border-penn-border hover:border-[#2B8FAB]/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-[#2B8FAB]" />
              </div>
              <h3 className="text-[20px] font-extrabold text-penn-navy mb-3">Certifications mondiales</h3>
              <p className="text-[15px] text-penn-body leading-relaxed">
                Partenariats avec Google, IBM, Harvard, Cisco, Bloomberg, Fortinet, HubSpot, DeepLearning.AI et 15+ fournisseurs mondiaux de certifications. 150+ certifications gratuites incluses dans chaque parcours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ QUICK CTAs ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-[34px] md:text-[44px] font-extrabold text-penn-navy text-center mb-16"
          >
            Prêt à construire votre avenir ?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ctaCards.map((card, i) => (
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
                  <p className="text-[14px] text-penn-body leading-relaxed mb-4 flex-1">{card.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#2B8FAB]">
                    {card.label}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Rejoignez la première université tunisienne avec l'IA intégrée."
        subtitle="Candidatures 2026–2027 ouvertes. Déposez votre dossier dès maintenant."
        primaryCta={{ label: "Voir nos programmes", href: "/licences" }}
        secondaryCta={{ label: "Pré-inscription", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
