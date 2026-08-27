"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Banknote, BriefcaseMedical, Building, Bus, Check, ChevronDown, FileText, Globe, GraduationCap, HeartHandshake, Hotel, MapPin, Phone, Plane, Quote, Receipt, ShieldUser, Users } from "lucide-react";
import { Badge, CtaSection } from "@/components/shared";
import { CountryFlag } from "@/components/shared/CountryFlag";
import AcademicPartners from "@/components/sections/AcademicPartners";

const destinations = [
  { pays: "Canada", code: "CA", partenaire: "UQAT", color: "#E53935", avantages: ["Poursuite d’études possible après un cursus à EBS", "Maîtrises (Bac+5) accessibles selon le parcours académique", "Expérience universitaire au Québec", "Accompagnement dans le projet de mobilité"] },
  { pays: "France", code: "FR", partenaire: "11 partenaires académiques", color: "#1E88E5", avantages: ["Écoles et Grandes Écoles partenaires", "Bachelors, Masters, MSc et programmes Bac+5", "Nombreux campus et spécialisations", "Accompagnement dans les démarches de mobilité"] },
  { pays: "Italie", code: "IT", partenaire: "Link University — Rome", color: "#43A047", avantages: ["Mobilité possible dès les premières années à EBS", "Bachelors et Masters accessibles selon le parcours", "Programmes internationaux à Rome", "Études en anglais selon le programme choisi"] },
  { pays: "Oman", code: "OM", partenaire: "GUtech", color: "#FB8C00", avantages: ["Université technologique internationale anglophone", "Collaboration académique avec RWTH Aachen University", "Informatique, Intelligence Artificielle et Cybersécurité", "Projets, Summer Schools et mobilité académique"] },
];

const etapes = [
  { number: "01", title: "Choisissez votre programme", desc: "Découvrez les Licences et Masters d’EBS et choisissez la formation." },
  { number: "02", title: "Déposez votre candidature", desc: "Transmettez votre dossier d’admission. Notre équipe vous accompagne." },
  { number: "03", title: "Recevez votre admission", desc: "Après validation, recevez les documents pour préparer votre arrivée." },
  { number: "04", title: "Préparez votre arrivée", desc: "Accompagnement pour visa, logement et démarches administratives." },
  { number: "05", title: "Commencez votre vie à EBS", desc: "Rejoignez le campus, découvrez votre nouvel environnement." },
];

const phases = [
  {
    id: "avant",
    title: "Avant votre arrivée",
    icon: <Plane className="w-6 h-6" />,
    color: "#2B8FAB",
    intro: "Préparez votre projet d’études avec EBS : choix du programme, candidature, admission et préparation des documents nécessaires à votre venue en Tunisie.",
    items: [
      { icon: <FileText className="w-4 h-4" />, title: "Projet d'études", desc: "Choix du programme et candidature" },
      { icon: <BadgeCheck className="w-4 h-4" />, title: "Admission", desc: "Validation de votre candidature" },
      { icon: <Plane className="w-4 h-4" />, title: "Préparation", desc: "Documents nécessaires à votre venue" },
    ],
  },
  {
    id: "arrivee",
    title: "Votre arrivée en Tunisie",
    icon: <MapPin className="w-6 h-6" />,
    color: "#2196F3",
    intro: "À votre arrivée, notre équipe vous accompagne pour faciliter vos premiers repères à Tunis, rejoindre votre logement et préparer votre rentrée à EBS.",
    items: [
      { icon: <Plane className="w-4 h-4" />, title: "Premiers repères", desc: "Accompagnement dès votre arrivée" },
      { icon: <Hotel className="w-4 h-4" />, title: "Logement", desc: "Rejoindre votre logement en toute sécurité" },
      { icon: <GraduationCap className="w-4 h-4" />, title: "Rentrée à EBS", desc: "Préparation de votre intégration" },
    ],
  },
  {
    id: "installation",
    title: "Votre installation",
    icon: <Building className="w-6 h-6" />,
    color: "#00897B",
    intro: "Nous vous aidons à organiser les principales étapes nécessaires pour commencer sereinement votre nouvelle vie étudiante.",
    items: [
      { icon: <BadgeCheck className="w-4 h-4" />, title: "Assistance séjour", desc: "Accompagnement pour vos démarches administratives" },
      { icon: <Hotel className="w-4 h-4" />, title: "Recherche de logement", desc: "Orientation et assistance pour un logement adapté" },
      { icon: <HeartHandshake className="w-4 h-4" />, title: "Accompagnement personnalisé", desc: "Une équipe dédiée pour faciliter votre intégration" },
    ],
  },
];

export default function EtudiantsInternationauxPage() {
  const [activePhase, setActivePhase] = useState("avant");

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/heroes/hero-intl.webp" alt="" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/50 via-[#1a2035]/50 to-penn-navy/50" />
        <div className="absolute inset-0 z-[1] opacity-[0.03] bg-[radial-gradient(circle_at_50%_40%,_#2B8FAB_0%,_transparent_50%)]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="max-w-[750px]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="outline" size="lg" className="mb-8 border-white/20 text-white/80">
              <Globe className="w-4 h-4" />
              Étudiants Internationaux
            </Badge>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-[42px] md:text-[56px] lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6">
              Venez étudier<br />
              <span className="text-[#2B8FAB]">en Tunisie</span> avec EBS<span className="text-[#2B8FAB]">.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="text-[16px] md:text-[18px] text-white/60 leading-relaxed max-w-[550px] mb-8">
              Rejoindre ESPIMA Business School à Tunis, c'est choisir une université privée agréée offrant un environnement académique ouvert sur l'international et des formations adaptées aux évolutions du monde professionnel. De votre première candidature jusqu'à votre installation en Tunisie, puis tout au long de vos études, notre équipe vous accompagne pour faciliter votre arrivée, votre intégration et votre réussite à EBS.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-wrap gap-4">
              {[
                { icon: <Check className="w-4 h-4" />, text: "Université privée agréée en Tunisie" },
                { icon: <ShieldUser className="w-4 h-4" />, text: "Accompagnement visa, séjour et installation" },
                { icon: <Globe className="w-4 h-4" />, text: "Parcours et partenaires à l'étranger" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-[13px] font-semibold text-white/50">
                  <span className="text-[#2B8FAB]">{item.icon}</span> {item.text}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </section>

      {/* ═══════════ PROMESSE — ACCOMPAGNEMENT ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl hidden md:block"
            >
              <Image src="/images/campus/sidi-bou-said.jpg" alt="Vivre et étudier en Tunisie, Sidi Bou Said" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-penn-navy/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <Badge variant="default" className="mb-3 bg-white/20 backdrop-blur-md text-white border-white/30">Destination Tunisie</Badge>
                <h3 className="text-2xl font-extrabold text-white">Un cadre de vie exceptionnel</h3>
              </div>
            </motion.div>

            {/* Content Section */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="mb-10">
                <Badge variant="default" size="lg" className="mb-4">Notre engagement</Badge>
                <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15] mb-4">
                  Nous vous accompagnons à chaque
                  <br />
                  <span className="text-[#2B8FAB]">étape de votre parcours.</span>
                </h2>
                <p className="text-[16px] text-penn-body mt-4">
                  Étudier dans un nouveau pays représente un véritable projet de vie. Le service d’accompagnement international d’EBS facilite vos démarches et vous aide à préparer votre arrivée dans les meilleures conditions.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: <HeartHandshake className="w-6 h-6" />, title: "Accueil personnalisé", desc: "Une équipe disponible pour vous accompagner avant votre départ, à votre arrivée à Tunis et pendant votre installation.", color: "#2B8FAB" },
                  { icon: <ShieldUser className="w-6 h-6" />, title: "Démarches simplifiées", desc: "Accompagnement pour préparer les formalités liées au visa, séjour et documents administratifs.", color: "#2196F3" },
                  { icon: <Users className="w-6 h-6" />, title: "Communauté internationale", desc: "Intégrez EBS, rencontrez des étudiants de différents horizons et participez à nos activités d'intégration.", color: "#E91E8C" },
                ].map((card, i) => (
                  <motion.div key={card.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group flex items-start gap-5 bg-white rounded-2xl border border-penn-border p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: `${card.color}12` }}>
                      <span style={{ color: card.color }}>{card.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-[17px] font-extrabold text-penn-navy mb-1.5">{card.title}</h3>
                      <p className="text-[14px] text-penn-body leading-relaxed">{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PHASES — VOTRE PARCOURS ═══════════ */}
      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,_#2B8FAB_0%,_transparent_70%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative z-10 max-w-[1100px] mx-auto px-5 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="text-center mb-16">
            <Badge variant="outline" size="lg" className="mb-4 border-white/20 text-white/80">Votre parcours</Badge>
            <h2 className="text-[34px] md:text-[48px] font-extrabold text-white leading-[1.1]">
              De votre pays à votre diplôme,
              <br />
              <span className="text-[#2B8FAB]">étape par étape</span>
            </h2>
          </motion.div>

          {/* Phase selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activePhase === phase.id
                    ? "text-white shadow-lg"
                    : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20"
                }`}
                style={activePhase === phase.id ? { backgroundColor: phase.color } : undefined}
              >
                {phase.icon}
                {phase.title}
              </button>
            ))}
          </div>

          {/* Active phase content */}
          <AnimatePresence mode="wait">
            {phases.filter(p => p.id === activePhase).map((phase) => (
              <motion.div key={phase.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                <p className="text-center text-white/60 text-[15px] mb-10 max-w-[550px] mx-auto">{phase.intro}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phase.items.map((item, i) => (
                    <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.06 }} className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: `${phase.color}1A` }}>
                        <span style={{ color: phase.color }}>{item.icon}</span>
                      </div>
                      <h4 className="text-[15px] font-extrabold text-white mb-1">{item.title}</h4>
                      <p className="text-[13px] text-white/50 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Step indicators */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {phases.map((phase, i) => (
              <div key={phase.id} className="flex items-center gap-2">
                <button onClick={() => setActivePhase(phase.id)} className={`w-3 h-3 rounded-full transition-all duration-300 ${activePhase === phase.id ? "scale-125" : "opacity-40 hover:opacity-70"}`} style={{ backgroundColor: phase.color }} />
                {i < phases.length - 1 && <div className="w-8 h-px bg-white/10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 4 DESTINATIONS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} className="text-center mb-14">
            <Badge variant="default" size="lg" className="mb-4">Depuis l&apos;international</Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15] mb-4">Vous venez de loin.<br />Votre avenir est <span className="text-[#2B8FAB]">ici</span>.</h2>
            <p className="text-[16px] text-penn-body max-w-[700px] mx-auto">
              Commencez vos études à EBS en Tunisie et ouvrez-vous les portes de l'international en France, au Canada, en Italie et à Oman grâce à notre réseau de partenaires académiques.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px] mx-auto">
            {destinations.map((d, i) => (
              <motion.div key={d.pays} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: i * 0.1 }} className="group bg-white rounded-2xl border border-penn-border p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ borderTopWidth: "4px", borderTopColor: d.color }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: d.color + "20" }}>
                    <CountryFlag code={d.code} className="w-5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-extrabold text-penn-navy">{d.pays}</h3>
                    <p className="text-[13px] font-semibold" style={{ color: d.color }}>{d.partenaire}</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {d.avantages.map((a) => (
                    <div key={a} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: d.color }} />
                      <p className="text-[14px] text-penn-body leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ACADEMIC PARTNERS MARQUEE ═══════════ */}
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12 pt-16 text-center">
        <p className="text-[16px] md:text-[18px] text-penn-body leading-relaxed max-w-[800px] mx-auto mb-4">
          EBS développe des partenariats avec des universités, Grandes Écoles et écoles spécialisées en France, au Canada, en Italie et à Oman.
        </p>
        <p className="text-[16px] md:text-[18px] text-penn-body leading-relaxed max-w-[800px] mx-auto mb-8">
          Ces collaborations permettent, selon les accords, de développer des poursuites d'études, mobilités, projets académiques, Summer Schools et autres expériences internationales.
        </p>
      </div>
      <AcademicPartners />

      {/* ═══════════ TESTIMONIAL ═══════════ */}
      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_30%_50%,_#2B8FAB_0%,_transparent_50%)]" />
        <div className="relative z-10 max-w-[900px] mx-auto px-5 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}>
            <Quote className="w-8 h-8 text-[#2B8FAB]/20 mx-auto mb-6" />
            <blockquote className="text-[20px] md:text-[26px] font-bold text-white/80 leading-relaxed italic mb-8">
              &ldquo;Grâce à EBS et à son partenariat avec l'UQAT, j'ai pu poursuivre mes études au Canada après ma Licence en Management. Aujourd'hui, je travaille à Montréal. L'accompagnement d'EBS a été un véritable atout dans mon parcours.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center text-[#2B8FAB] font-extrabold text-[15px] border border-[#2B8FAB]/10">SG</div>
              <div className="text-left">
                <p className="text-[15px] font-extrabold text-white">Sami GHARBI</p>
                <p className="text-[13px] text-white/50">Project Manager — Montréal, Canada</p>
                <p className="text-[11px] text-white/30">Promotion 2018 — Licence Management</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ 5 STEPS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} className="text-center mb-14">
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">Comment ça marche ?</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {etapes.map((e, i) => (
              <motion.div key={e.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: i * 0.08 }} className="relative bg-penn-bg-light rounded-2xl border border-penn-border p-5 text-center hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-penn-navy text-white flex items-center justify-center mx-auto mb-3 font-extrabold text-[13px]">{e.number}</div>
                <h3 className="text-[15px] font-extrabold text-penn-navy mb-1">{e.title}</h3>
                <p className="text-[13px] text-penn-body/70 leading-snug">{e.desc}</p>
                {i < etapes.length - 1 && <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-penn-border"><ArrowRight className="w-4 h-4" /></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ REJOIGNEZ-NOUS ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[700px] mx-auto px-5 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}>
            <div className="w-16 h-16 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-[#2B8FAB]" />
            </div>
            <h2 className="text-[34px] md:text-[48px] font-extrabold text-penn-navy leading-[1.15] mb-4">Rejoignez-nous !<br/>Votre parcours à EBS commence ici.</h2>
            <p className="text-[16px] text-penn-body leading-relaxed mb-10 max-w-[500px] mx-auto">
              Vous souhaitez venir étudier à Tunis ? Déposez votre candidature et notre équipe vous accompagne dans la préparation de votre projet, de l’admission jusqu’à votre installation en Tunisie.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2B8FAB] text-white font-bold text-[16px] py-4 px-10 rounded-full hover:bg-[#2B8FAB]/90 transition-all duration-300 shadow-lg shadow-[#2B8FAB]/20 hover:shadow-xl hover:-translate-y-0.5">
              Préinscription <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CtaSection title="Une question sur votre venue en Tunisie ?" subtitle="Notre équipe internationale vous accompagne pour toute question concernant l’admission, les programmes, le visa, le logement ou votre installation à Tunis. Réponse sous 24 h." primaryCta={{ label: "PRÉ-INSCRIPTION", href: "/preinscription" }} whatsapp="+216 55 582 843" background="penn-green" />
    </>
  );
}
