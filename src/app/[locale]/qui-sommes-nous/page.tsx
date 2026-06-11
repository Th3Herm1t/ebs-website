"use client";

import { Award, BookOpen, Building2, ChevronDown, Globe, GraduationCap, Heart, Lightbulb, Monitor, ShieldCheck, Star, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Badge, CtaSection } from "@/components/shared";

const timeline = [
  { year: "2013", title: "Fondation d'EBS", text: "Création d'Espima Business School à Tunis. Agrément N°2013/02 du Ministère de l'Enseignement Supérieur. Une conviction : la Tunisie mérite des formations aux standards internationaux.", highlight: false },
  { year: "2016", title: "Premiers partenariats", text: "Signature des premières conventions avec des universités françaises. Déploiement des programmes de Licence en Management, Marketing, Finance et Informatique.", highlight: false },
  { year: "2020", title: "Expansion internationale", text: "Le réseau s'étend : UQAT Canada, EM Normandie, PSB Paris. Ouverture des parcours internationaux. Lancement des Masters professionnels.", highlight: false },
  { year: "2026", title: "Le virage IA", text: "EBS devient la première université tunisienne à intégrer l'IA comme compétence transversale obligatoire. 150+ certifications internationales gratuites. Partenariats avec Google, IBM, Harvard, Bloomberg et 15+ fournisseurs mondiaux.", highlight: true },
];

const piliers = [
  {
    icon: <Star className="w-7 h-7" />,
    title: "Qualité de l'enseignement",
    desc: "EBS est une business school moderne et dynamique, qui propose des parcours et des diplômes de qualité, en Licence et en Master, répondant aux standards internationaux. Les partenariats internationaux, les codiplômations et les certifications attestent de la qualité des études universitaires à EBS.",
    color: "#2B8FAB",
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: "Pédagogie innovante",
    desc: "Notre université a mis en place un système d'enseignement utilisant les nouvelles technologies, avec une plateforme de E-Learning favorisant l'autonomie et l'interaction. EBS a mis l'accent sur le « learning by doing » dont les objectifs sont de développer la créativité, le travail en équipe, l'esprit d'analyse et le leadership.",
    color: "#2196F3",
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Développement personnel et professionnel",
    desc: "Le développement personnel occupe une place très importante dans notre université. Notre objectif : développer la confiance en soi, l'ouverture d'esprit et la culture générale pour former des entrepreneurs, des managers et des hauts cadres ambitieux, efficaces et responsables.",
    color: "#E91E8C",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Ouverture sur l'environnement",
    desc: "EBS est un pont d'échange entre le monde professionnel et le monde académique. Plusieurs conventions ont été signées avec des grands groupes pour offrir les meilleures opportunités de stages et d'emplois. Des accords de collaboration avec des universités étrangères favorisent la mobilité des étudiants et des enseignants.",
    color: "#FF9800",
  },
];

const services = [
  { icon: <Building2 className="w-5 h-5" />, title: "Career Center", desc: "Ateliers CV, simulations d'entretien, matching alternance, réseau employeurs. Accessible dès la L1.", color: "#2B8FAB" },
  { icon: <Award className="w-5 h-5" />, title: "Centre de certification", desc: "Salles dédiées au passage des certifications. Accès aux plateformes officielles Google, IBM, AWS, Cisco, etc.", color: "#2196F3" },
  { icon: <Globe className="w-5 h-5" />, title: "Bureau international", desc: "Accompagnement visa, dossiers de candidature aux partenaires, préparation au départ à l'étranger.", color: "#E91E8C" },
  { icon: <BookOpen className="w-5 h-5" />, title: "Bibliothèque & e-learning", desc: "Accès aux ressources numériques, manuels, cours en ligne complémentaires et bases de données.", color: "#FF9800" },
  { icon: <Users className="w-5 h-5" />, title: "Tutorat & soutien", desc: "Séances de rattrapage, tutorat par les pairs, accompagnement individuel pour les étudiants en difficulté.", color: "#9C27B0" },
  { icon: <Monitor className="w-5 h-5" />, title: "Espaces de coworking", desc: "Zones de travail collaboratif, salles de projet et espaces dédiés aux travaux de groupe.", color: "#00BCD4" },
];

const ctaCards = [
  { icon: <BookOpen className="w-6 h-6" />, title: "Nos Programmes", desc: "Licences et Masters en management, finance, marketing et tech.", href: "/licences", label: "Explorer" },
  { icon: <GraduationCap className="w-6 h-6" />, title: "Pré-inscription", desc: "Candidatures 2026–2027 ouvertes. Early Bird jusqu'au 30 Juin.", href: "/contact", label: "Postuler" },
  { icon: <Globe className="w-6 h-6" />, title: "International", desc: "16 partenaires dans 4 pays pour vos études à l'étranger.", href: "/parcours-internationaux", label: "Découvrir" },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Certifications", desc: "150+ certifications gratuites incluses dans votre formation.", href: "/certifications", label: "Explorer" },
];

export default function QuiSommesNousPage() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/heroes/hero-qui-sommes-nous.jpg" alt="" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/50 via-[#1a2035]/50 to-penn-navy/50" />
        <div className="absolute inset-0 z-[1] opacity-[0.04] bg-[radial-gradient(circle_at_30%_50%,_#2B8FAB_0%,_transparent_60%),radial-gradient(circle_at_70%_20%,_#2B8FAB_0%,_transparent_50%)]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="max-w-[800px]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">
                Université privée agréée · Tunis, Tunisie · Fondée en 2013
              </Badge>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-[42px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6">
              L'université qui prépare<br />
              <span className="text-[#2B8FAB]">à la vraie vie</span>.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="text-[17px] md:text-[19px] text-white/70 leading-relaxed max-w-[650px] mb-12">
              EBS Tunis — Espima Business School — est une université privée reconnue par l'État tunisien. Notre mission : former des professionnels immédiatement opérationnels grâce à un modèle unique alliant diplôme, certifications internationales et expérience terrain.
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center"><p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">2013</p><p className="text-[13px] text-white/50 font-medium">Fondation</p></div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center"><p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">9</p><p className="text-[13px] text-white/50 font-medium">Programmes</p></div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center"><p className="text-[32px] md:text-[44px] font-extrabold text-[#2B8FAB] leading-none mb-1">150+</p><p className="text-[13px] text-white/50 font-medium">Certifications gratuites</p></div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center"><p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">95%</p><p className="text-[13px] text-white/50 font-medium">Taux de réussite</p></div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center"><p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">16</p><p className="text-[13px] text-white/50 font-medium">Partenaires internationaux</p></div>
          </motion.div>
        </div>
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}><ChevronDown className="w-6 h-6 text-white/30" /></motion.div>
      </section>

      {/* ═══════════ CAMPUS & INFRASTRUCTURE ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center"><Building2 className="w-7 h-7 text-[#2B8FAB]" /></div>
              <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy">Un campus pensé pour votre réussite</h2>
            </div>
            <p className="text-[16px] text-penn-body leading-relaxed mb-6">
              EBS dispose de toutes les commodités nécessaires à l'épanouissement de ses étudiants : une superficie de 3000 m² avec un bâtiment moderne entièrement climatisé et équipé de WIFI haut débit, une buvette, un espace de repos et de détente offrant un cadre convivial permettant aux étudiants de se rencontrer et d'échanger leurs expériences, avec une vie associative active et des compétitions sportives.
            </p>
            <p className="text-[16px] text-penn-body leading-relaxed">
              La réussite personnelle et professionnelle des étudiants d'Espima Business School est la conséquence directe du bon choix qu'ils ont fait de l'université privée, qui garantit la qualité de l'enseignement dispensé.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ TIMELINE: NOTRE HISTOIRE ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="text-center mb-16">
            <Badge variant="default" size="lg" className="mb-4">Notre Histoire</Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">Plus de 10 ans d'excellence</h2>
          </motion.div>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-penn-border -translate-x-1/2" />
            <div className="space-y-12 lg:space-y-0">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div key={item.year} initial={{ opacity: 0, x: isLeft ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: i * 0.1 }} className={`lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${isLeft ? "" : "lg:[direction:rtl]"} relative`}>
                    <div className={`hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-[3px] z-10 ${item.highlight ? "border-[#2B8FAB] bg-[#2B8FAB]" : "border-penn-border bg-white"}`} />
                    <div className={isLeft ? "lg:[direction:ltr]" : "lg:[direction:ltr]"}>
                      <div className={`bg-white rounded-2xl border p-6 lg:p-8 transition-all duration-300 ${item.highlight ? "border-[#2B8FAB]/30 shadow-[0_0_40px_rgba(43,143,171,0.1)]" : "border-penn-border hover:shadow-md"}`}>
                        <span className={`inline-block text-[13px] font-extrabold uppercase tracking-widest mb-2 ${item.highlight ? "text-[#2B8FAB]" : "text-penn-body/60"}`}>{item.year}</span>
                        <h3 className="text-[20px] font-extrabold text-penn-navy mb-2">{item.title}</h3>
                        <p className="text-[15px] text-penn-body leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                    <div className="hidden lg:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 4 PILIERS EBS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="text-center mb-16">
            <Badge variant="default" size="lg" className="mb-4">Ce qui nous définit</Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">Les 4 piliers d'EBS</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {piliers.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group bg-white rounded-2xl border border-penn-border p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: `${p.color}12` }}>
                  <span style={{ color: p.color }}>{p.icon}</span>
                </div>
                <h3 className="text-[20px] font-extrabold text-penn-navy mb-3">{p.title}</h3>
                <p className="text-[15px] text-penn-body leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CHIFFRES CLÉS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="text-center mb-16">
            <span className="inline-block text-[14px] font-bold uppercase tracking-[3px] text-[#2B8FAB] mb-4">EBS en chiffres</span>
            <h2 className="text-[34px] md:text-[48px] font-extrabold text-penn-navy leading-[1.1]">L'excellence en quelques chiffres</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              { end: 2013, label: "Année de fondation", icon: <Building2 className="w-7 h-7" /> },
              { end: 9, label: "Programmes disponibles", sublabel: "6 Licences · 3 Masters", icon: <BookOpen className="w-7 h-7" /> },
              { end: 150, suffix: "+", label: "Certifications gratuites", sublabel: "Google · IBM · Harvard · Bloomberg...", icon: <Award className="w-7 h-7" />, featured: true },
              { end: 95, suffix: "%", label: "Taux de réussite", icon: <TrendingUp className="w-7 h-7" />, featured: true },
              { end: 16, label: "Partenaires internationaux", sublabel: "France · Canada · Italie · Oman", icon: <Globe className="w-7 h-7" /> },
              { end: 12, suffix: "+", label: "Années d'expérience", icon: <Star className="w-7 h-7" /> },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -4, scale: 1.02 }}
                className={`relative group bg-penn-bg-light border rounded-2xl p-6 lg:p-8 flex items-center gap-5 transition-all duration-300 ${stat.featured ? "border-[#2B8FAB]/20 shadow-[0_0_60px_rgba(43,143,171,0.08)]" : "border-penn-border hover:border-penn-border/80"}`}>
                <div className={`shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${stat.featured ? "w-16 h-16 lg:w-20 lg:h-20 bg-[#2B8FAB]/10 text-[#2B8FAB]" : "w-14 h-14 lg:w-16 lg:h-16 bg-penn-bg-light text-penn-navy/50"}`}>{stat.icon}</div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-1">
                    <span className={`font-extrabold leading-none tracking-tight ${stat.featured ? "text-[38px] md:text-[48px] lg:text-[56px] text-[#2B8FAB]" : "text-[30px] md:text-[38px] lg:text-[44px] text-penn-navy"}`}>{stat.end}{stat.suffix ?? ""}</span>
                  </div>
                  <p className="text-[14px] lg:text-[15px] font-bold text-penn-navy leading-tight mt-1">{stat.label}</p>
                  {stat.sublabel && <p className="text-[11px] lg:text-[12px] text-penn-body/50 font-medium mt-0.5 leading-snug">{stat.sublabel}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ACCRÉDITATIONS ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="text-center mb-16">
            <Badge variant="default" size="lg" className="mb-4">Reconnaissance</Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">Accréditations & Reconnaissance</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <ShieldCheck className="w-7 h-7" />, title: "Agrément d'État", text: "Université privée agréée par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique de la République Tunisienne. Agrément N°2013/02 — Diplômes reconnus par l'État tunisien.", color: "#2B8FAB" },
              { icon: <Globe className="w-7 h-7" />, title: "Réseau international", text: "Membre du réseau de 16 institutions universitaires partenaires : UQAT (Canada), EM Normandie, PSB Paris, IDRAC, IFAG, IGEFI, Éklore, Epitech, EPSI, Excelia, FIGS Education, Sup'de Com, RedSup (France), Link University (Italie) et GUtech (Oman).", color: "#2196F3" },
              { icon: <Building2 className="w-7 h-7" />, title: "Partenariats Entreprises", text: "Partenariats actifs avec des entreprises nationales et multinationales pour offrir à nos étudiants des stages, des alternances et des opportunités de recrutement dans des environnements professionnels réels.", color: "#E91E8C" },
              { icon: <Award className="w-7 h-7" />, title: "Certifications mondiales", text: "Partenariats avec Google, IBM, Harvard, Cisco, Bloomberg, Fortinet, HubSpot, DeepLearning.AI et 15+ fournisseurs mondiaux de certifications. 150+ certifications gratuites incluses dans chaque parcours.", color: "#FF9800" },
            ].map((acc, i) => (
              <motion.div key={acc.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-penn-border hover:border-[#2B8FAB]/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${acc.color}12` }}><span style={{ color: acc.color }}>{acc.icon}</span></div>
                <h3 className="text-[20px] font-extrabold text-penn-navy mb-3">{acc.title}</h3>
                <p className="text-[15px] text-penn-body leading-relaxed">{acc.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES ÉTUDIANTS ═══════════ */}
      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,_#2B8FAB_0%,_transparent_70%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="text-center mb-16">
            <span className="inline-block text-[14px] font-bold uppercase tracking-[3px] text-[#2B8FAB] mb-4">Services étudiants</span>
            <h2 className="text-[34px] md:text-[48px] font-extrabold text-white leading-[1.1]">Tout pour réussir</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.06 }} className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: `${s.color}1A` }}><span style={{ color: s.color }}>{s.icon}</span></div>
                <h3 className="text-[16px] font-extrabold text-white mb-2">{s.title}</h3>
                <p className="text-[13px] text-white/50 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ QUICK CTAs ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} className="text-[34px] md:text-[44px] font-extrabold text-penn-navy text-center mb-16">Prêt à construire votre avenir ?</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ctaCards.map((card, i) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.1 }}>
                <Link href={card.href} className="group bg-white rounded-2xl border border-penn-border p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#2B8FAB]/30">
                  <div className="w-12 h-12 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center mb-4 text-[#2B8FAB] group-hover:scale-110 transition-transform">{card.icon}</div>
                  <h3 className="text-[17px] font-extrabold text-penn-navy mb-2 group-hover:text-[#2B8FAB] transition-colors">{card.title}</h3>
                  <p className="text-[14px] text-penn-body leading-relaxed mb-4 flex-1">{card.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#2B8FAB]">{card.label} <span className="group-hover:translate-x-1 transition-transform">→</span></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Rejoignez la première université tunisienne avec l'IA intégrée." subtitle="Candidatures 2026–2027 ouvertes. Déposez votre dossier dès maintenant." primaryCta={{ label: "Voir nos programmes", href: "/licences" }} secondaryCta={{ label: "Pré-inscription", href: "/contact" }} background="penn-green" />
    </>
  );
}
