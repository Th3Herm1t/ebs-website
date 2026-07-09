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
  { pays: "Canada", code: "CA", partenaire: "UQAT", color: "#E53935", avantages: ["Immigration facilitée via le PEQ", "Maîtrise en Gestion de Projets, MBA", "Résidence permanente possible", "Qualité de vie exceptionnelle"] },
  { pays: "France", code: "FR", partenaire: "12 partenaires", color: "#1E88E5", avantages: ["Visa étudiant facilité", "Grandes Écoles accréditées", "Multi-campus dans toute la France", "Accès au marché européen"] },
  { pays: "Italie", code: "IT", partenaire: "Link University", color: "#43A047", avantages: ["Accès dès la 1ère année à EBS", "Bachelor et Masters à Rome", "Reconnue par l'État italien", "Visa Schengen — toute l'Europe"] },
  { pays: "Oman", code: "OM", partenaire: "GUtech", color: "#FB8C00", avantages: ["Partenariat RWTH Aachen", "Cours en anglais", "Marché du Golfe", "Cadre moderne et sécurisé"] },
];

const etapes = [
  { number: "01", title: "Études à EBS", desc: "Validez 1, 2 ou 3 années selon votre destination" },
  { number: "02", title: "Candidature", desc: "Notre équipe constitue votre dossier partenaire" },
  { number: "03", title: "Admission", desc: "Convention facilitant la reconnaissance des crédits" },
  { number: "04", title: "Visa & Départ", desc: "Guidance pour visa et installation sur place" },
  { number: "05", title: "Emploi", desc: "Accès au marché du travail local et international" },
];

const phases = [
  {
    id: "avant",
    title: "Avant Votre Arrivée",
    icon: <Plane className="w-6 h-6" />,
    color: "#2B8FAB",
    intro: "Nous préparons votre venue : visa, logement, et toutes les démarches administratives.",
    items: [
      { icon: <FileText className="w-4 h-4" />, title: "Assistance Visa", desc: "Accompagnement dans l'obtention de votre visa étudiant" },
      { icon: <Hotel className="w-4 h-4" />, title: "Recherche de Logement", desc: "Aide à trouver un logement adapté près du campus" },
      { icon: <Phone className="w-4 h-4" />, title: "Contact Permanent", desc: "Une équipe dédiée répond à toutes vos questions avant le départ" },
    ],
  },
  {
    id: "arrivee",
    title: "Votre Arrivée en Tunisie",
    icon: <MapPin className="w-6 h-6" />,
    color: "#2196F3",
    intro: "Dès votre atterrissage, nous sommes là pour vous accueillir et vous installer.",
    items: [
      { icon: <Plane className="w-4 h-4" />, title: "Accueil Aéroportuaire", desc: "Prise en charge à l'aéroport et transfert vers votre résidence" },
      { icon: <Phone className="w-4 h-4" />, title: "Carte SIM Offerte", desc: "Une carte SIM tunisienne pour rester connecté dès votre arrivée" },
      { icon: <Users className="w-4 h-4" />, title: "Session d'Accueil", desc: "Réunion d'information et de sensibilisation sur la vie en Tunisie" },
    ],
  },
  {
    id: "installation",
    title: "Votre Installation Durable",
    icon: <Building className="w-6 h-6" />,
    color: "#00897B",
    intro: "Nous vous accompagnons jusqu'à votre installation complète et autonome.",
    items: [
      { icon: <BadgeCheck className="w-4 h-4" />, title: "Carte de Séjour", desc: "Assistance complète pour l'obtention de votre titre de séjour" },
      { icon: <Banknote className="w-4 h-4" />, title: "Compte Bancaire", desc: "Aide à l'ouverture d'un compte bancaire international" },
      { icon: <BriefcaseMedical className="w-4 h-4" />, title: "Check-Up Médical", desc: "Bilan de santé et affiliation à l'assurance-maladie" },
      { icon: <Bus className="w-4 h-4" />, title: "Transports", desc: "Abonnement aux transports publics et orientation dans Tunis" },
      { icon: <Receipt className="w-4 h-4" />, title: "Documents Officiels", desc: "Attestations d'inscription et de paiement pour vos démarches" },
      { icon: <Users className="w-4 h-4" />, title: "Vie Étudiante", desc: "Intégration dans les clubs, activités et sorties organisées par EBS" },
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
              De l&apos;aéroport à votre diplôme, une équipe dédiée vous accompagne à chaque étape. Visa, logement, installation — on s&apos;occupe de tout.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-wrap gap-4">
              {[
                { icon: <Check className="w-4 h-4" />, text: "Conventions signées" },
                { icon: <ShieldUser className="w-4 h-4" />, text: "Visa accompagné" },
                { icon: <GraduationCap className="w-4 h-4" />, text: "Diplômes reconnus" },
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
        <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="text-center mb-16">
            <Badge variant="default" size="lg" className="mb-4">Notre engagement</Badge>
            <h2 className="text-[34px] md:text-[48px] font-extrabold text-penn-navy leading-[1.15] mb-4">
              On s&apos;occupe de tout.
              <br />
              <span className="text-[#2B8FAB]">Vous, vous étudiez.</span>
            </h2>
            <p className="text-[16px] text-penn-body max-w-[650px] mx-auto mt-4">
              Notre service d&apos;accompagnement est dédié aux étudiants internationaux. De votre premier contact jusqu&apos;à votre installation complète, une équipe professionnelle et conviviale est à vos côtés.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <HeartHandshake className="w-6 h-6" />, title: "Accueil Personnalisé", desc: "Prise en charge dès l&apos;aéroport par notre équipe dédiée, transfert vers votre logement, et accompagnement continu.", color: "#2B8FAB" },
              { icon: <ShieldUser className="w-6 h-6" />, title: "Démarches Simplifiées", desc: "Visa, carte de séjour, assurance, compte bancaire — nous vous guidons dans toutes les formalités administratives.", color: "#2196F3" },
              { icon: <Users className="w-6 h-6" />, title: "Communauté Internationale", desc: "Rejoignez des étudiants de multiples nationalités. Des activités et sorties organisées pour une intégration réussie.", color: "#E91E8C" },
            ].map((card, i) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group bg-white rounded-2xl border border-penn-border p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: `${card.color}12` }}>
                  <span style={{ color: card.color }}>{card.icon}</span>
                </div>
                <h3 className="text-[18px] font-extrabold text-penn-navy mb-3">{card.title}</h3>
                <p className="text-[14px] text-penn-body leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
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
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">Vous venez de loin.<br />Votre avenir est <span className="text-[#2B8FAB]">ici</span>.</h2>
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
      <AcademicPartners />

      {/* ═══════════ TESTIMONIAL ═══════════ */}
      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_30%_50%,_#2B8FAB_0%,_transparent_50%)]" />
        <div className="relative z-10 max-w-[900px] mx-auto px-5 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}>
            <Quote className="w-8 h-8 text-[#2B8FAB]/20 mx-auto mb-6" />
            <blockquote className="text-[20px] md:text-[26px] font-bold text-white/80 leading-relaxed italic mb-8">
              &ldquo;Grâce à EBS et à leur partenariat avec l&apos;UQAT, j&apos;ai pu partir au Canada avec ma Licence en Management. Aujourd&apos;hui je travaille à Montréal et j&apos;ai ma résidence permanente. EBS a tout facilité.&rdquo;
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
            <h2 className="text-[34px] md:text-[48px] font-extrabold text-penn-navy leading-[1.15] mb-4">Rejoignez-nous !</h2>
            <p className="text-[16px] text-penn-body leading-relaxed mb-10 max-w-[500px] mx-auto">
              Déposez votre candidature et notre équipe vous accompagne dans toutes les démarches.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2B8FAB] text-white font-bold text-[16px] py-4 px-10 rounded-full hover:bg-[#2B8FAB]/90 transition-all duration-300 shadow-lg shadow-[#2B8FAB]/20 hover:shadow-xl hover:-translate-y-0.5">
              Préinscription <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CtaSection title="Une question sur votre venue en Tunisie ?" subtitle="Notre équipe internationale vous répond sous 24h." primaryCta={{ label: "Pré-inscription", href: "/preinscription" }} whatsapp="+216 55 582 843" background="penn-green" />
    </>
  );
}
