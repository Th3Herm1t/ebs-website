"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Award, Briefcase, Globe, GraduationCap, HeartHandshake, MapPin, Send, Star, Users } from "lucide-react";
import { CtaSection } from "@/components/shared";
import { CountryFlag } from "@/components/shared/CountryFlag";

const alumniProfiles = [
  { name: "Mohamed Amine Hamdi", role: "Community Manager — Tinith Services", promo: "Master Marketing Digital — 2019/2020", country: "Tunisie", img: null, initials: "MH" },
  { name: "Dorra Ben Turkia", role: "Contrôleuse de Gestion — Habitat France", promo: "Master Ingénierie Financière — 2018/2019", country: "Paris, France", img: null, initials: "DB" },
  { name: "Maroua Jeribi", role: "Consultante SIRH Oracle — Paris", promo: "Master GRH — 2018/2019", country: "Paris, France", img: null, initials: "MJ" },
  { name: "Hend Jaber", role: "Conceptualizer — BOUMRANG Tunis", promo: "Master Ingénierie Financière — 2015/2016", country: "Tunisie", img: null, initials: "HJ" },
  { name: "Hend Nasri", role: "Digital Marketing Manager — Lezarts.Digital", promo: "Master Marketing Digital — 2019/2020", country: "Tunisie", img: null, initials: "HN" },
  { name: "Kais Layouni", role: "Business Analyst — MENINX Holding", promo: "Licence Finance — 2017/2018", country: "Tunisie", img: null, initials: "KL" },
  { name: "Hend Bedoui", role: "Analyste Financier — LEASE TUNIS", promo: "Master Ing. Financière — 2015/2016", country: "Tunisie", img: null, initials: "HB" },
  { name: "Oussama Ayadi", role: "Expert Technique — GIZ Tunisie", promo: "Master Marketing Bancaire — 2016/2017", country: "Tunisie", img: null, initials: "OA" },
];

const alumniCountries = [
  { country: "Tunisie", code: "TN", count: 350 },
  { country: "France", code: "FR", count: 45 },
  { country: "Canada", code: "CA", count: 20 },
  { country: "Allemagne", code: "DE", count: 12 },
  { country: "Belgique", code: "BE", count: 8 },
  { country: "Suisse", code: "CH", count: 7 },
  { country: "Émirats", code: "AE", count: 15 },
  { country: "Qatar", code: "QA", count: 6 },
  { country: "Arabie Saoudite", code: "SA", count: 5 },
  { country: "Maroc", code: "MA", count: 8 },
];

const missions = [
  "Développer un sentiment d'appartenance à l'ESPIMA BUSINESS SCHOOL",
  "Faciliter les contacts et développer des liens entre les anciens diplômés",
  "Permettre aux étudiants de connaître les anciens qui peuvent les aider",
  "Offrir soutien et conseil dans l'évolution professionnelle",
  "Organiser des événements, conférences, ateliers et rencontres",
  "Encourager les Alumni à participer aux programmes de développement",
];

const secteurs = [
  { icon: <Briefcase className="w-6 h-6" />, nom: "Banque & Finance", desc: "Analystes, gestionnaires de portefeuille, auditeurs dans les plus grandes institutions." },
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
        <div className="absolute inset-0 z-0">
          <Image src="/images/heroes/hero-alumni.jpg" alt="" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/50 via-[#1a2035]/50 to-penn-navy/50" />
        <div className="absolute inset-0 z-[1] opacity-[0.02] bg-[radial-gradient(circle_at_50%_70%,_#2B8FAB_0%,_transparent_50%)]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="max-w-[700px]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-3 text-[#2B8FAB]/60 text-[12px] font-bold uppercase tracking-[4px] mb-8">
                <div className="w-8 h-px bg-[#2B8FAB]/30" /> Réseau des Diplômés
              </div>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-[40px] md:text-[52px] lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6">
              Des diplômés qui réussissent<br /><span className="text-[#2B8FAB]">partout dans le monde.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="text-[17px] md:text-[19px] text-white/60 leading-relaxed max-w-[550px]">
              EBS Alumni vous aide à développer votre carrière en mettant à votre disposition de nombreuses offres de stages et d&apos;emplois.
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { value: "93%", label: "Embauchés en 3 mois" },
              { value: "15+", label: "Pays de destination" },
              { value: "500+", label: "Diplômés" },
              { value: "5", label: "Secteurs d'activité" },
            ].map((s) => (
              <div key={s.label} className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 text-center">
                <p className="text-[28px] md:text-[36px] font-extrabold text-white leading-none mb-1">{s.value}</p>
                <p className="text-[13px] text-white/40 font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ RÔLE & MISSIONS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1000px] mx-auto px-5 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center">
                <HeartHandshake className="w-7 h-7 text-[#2B8FAB]" />
              </div>
              <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy">Rôle et missions du réseau EBS Alumni</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {missions.map((m, i) => (
                <motion.div key={m} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.06 }} className="flex items-start gap-3 p-4 bg-penn-bg-light rounded-xl border border-penn-border hover:border-[#2B8FAB]/20 transition-all">
                  <div className="w-6 h-6 rounded-full bg-[#2B8FAB]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[11px] font-extrabold text-[#2B8FAB]">{i + 1}</span>
                  </div>
                  <p className="text-[14px] text-penn-body leading-snug">{m}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ ALUMNI À LA UNE ═══════════ */}
      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,_#2B8FAB_0%,_transparent_70%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="text-center mb-14">
            <span className="inline-block text-[13px] font-bold uppercase tracking-[3px] text-[#2B8FAB] mb-4">EBS Alumni</span>
            <h2 className="text-[34px] md:text-[48px] font-extrabold text-white leading-[1.1]">Les Alumni à la une</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {alumniProfiles.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.06 }} className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center text-white font-extrabold text-[18px] mb-4 group-hover:scale-110 transition-transform">{p.initials}</div>
                <h3 className="text-[15px] font-extrabold text-white mb-1">{p.name}</h3>
                <p className="text-[13px] text-white/50 leading-snug mb-2">{p.role}</p>
                <div className="pt-3 border-t border-white/[0.06]">
                  <p className="text-[11px] text-white/30">{p.promo}</p>
                  <p className="text-[11px] text-[#2B8FAB]/70 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {p.country}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ RÉSEAU ALUMNI — MONDE ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="text-center mb-14">
            <span className="inline-block text-[13px] font-bold uppercase tracking-[3px] text-[#2B8FAB] mb-4">Réseau Alumni</span>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">Nos diplômés dans le monde</h2>
            <p className="text-[16px] text-penn-body mt-3 max-w-[600px] mx-auto">15+ pays, 500+ diplômés — un réseau qui s&apos;étend chaque année.</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-[1000px] mx-auto">
            {alumniCountries.map((c, i) => (
              <motion.div key={c.code} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.3, delay: i * 0.04 }} className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border transition-all ${c.code === "TN" ? "border-[#2B8FAB]/30 bg-[#2B8FAB]/5" : "border-penn-border bg-penn-bg-light hover:border-[#2B8FAB]/20"}`}>
                <CountryFlag code={c.code} className="w-6 h-4" />
                <div>
                  <span className="font-extrabold text-[13px] text-penn-navy block leading-tight">{c.country}</span>
                  <span className="text-[11px] text-penn-body/50">{c.count} diplômés</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="text-center mb-14">
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">Témoignages de nos diplômés</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { name: "Ahmed MEJRI", role: "Data Analyst — Orange Tunisie", promo: "Licence Informatique — 2019", text: "Grâce aux certifications Google et IBM obtenues pendant ma Licence à EBS, j'ai décroché mon premier emploi avant même d'être diplômé. Aujourd'hui, je manage une équipe de 5 analystes.", initials: "AM" },
              { name: "Sarra BEN ALI", role: "Digital Marketing Manager — Publicis", promo: "Licence Marketing — 2020", text: "La Licence Marketing d'EBS m'a donné les armes pour réussir en agence. Les certifications HubSpot et Google Ads m'ont ouverte les portes de Publicis.", initials: "SB" },
              { name: "Youssef GHARBI", role: "Project Manager — UQAT Canada", promo: "Licence Management — 2018", text: "J'ai commencé ma Licence à EBS et je l'ai terminée à l'UQAT au Canada grâce au partenariat. Aujourd'hui je travaille à Montréal et j'ai obtenu ma résidence permanente.", initials: "YG" },
              { name: "Mariem KALLEL", role: "Financial Analyst — KPMG Tunisie", promo: "Licence Finance — 2021", text: "Les simulations Bloomberg et Forage m'ont préparée aux réalités du métier. Dès mon premier entretien chez KPMG, les recruteurs ont été impressionnés par mes certifications.", initials: "MK" },
            ].map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl border border-penn-border p-6 lg:p-8 hover:shadow-md transition-all">
                <p className="text-[15px] text-penn-body leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4 pt-4 border-t border-penn-border">
                  <div className="w-11 h-11 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center text-[#2B8FAB] font-extrabold text-[15px]">{t.initials}</div>
                  <div>
                    <p className="text-[15px] font-extrabold text-penn-navy">{t.name}</p>
                    <p className="text-[13px] text-penn-body/60">{t.role}</p>
                    <p className="text-[11px] text-penn-body/40 mt-0.5">{t.promo}</p>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} className="text-center mb-14">
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">Secteurs d&apos;activité de nos diplômés</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secteurs.map((s, i) => (
              <motion.div key={s.nom} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: i * 0.08 }} className="group bg-penn-bg-light rounded-2xl p-6 lg:p-8 border border-penn-border hover:border-[#2B8FAB]/30 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center mb-5 text-[#2B8FAB] group-hover:scale-110 transition-transform">{s.icon}</div>
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
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} className="text-[28px] md:text-[34px] font-extrabold text-penn-navy text-center mb-10">Rejoignez-nous !</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl border border-penn-border p-6 lg:p-8">
              <div className="w-12 h-12 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center mb-4 text-[#2B8FAB]"><Send className="w-6 h-6" /></div>
              <h3 className="text-[20px] font-extrabold text-penn-navy mb-2">Mettez à jour votre profil</h3>
              <p className="text-[14px] text-penn-body mb-4">Vous êtes diplômé(e) EBS ? Tenez-nous informés de votre parcours et restez connecté(e) au réseau.</p>
              <a href="/contact" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#2B8FAB] hover:text-penn-navy transition-colors">Mettre à jour mon profil →</a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl border border-penn-border p-6 lg:p-8">
              <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center mb-4 text-[#0A66C2]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </div>
              <h3 className="text-[20px] font-extrabold text-penn-navy mb-2">Rejoignez le réseau LinkedIn</h3>
              <p className="text-[14px] text-penn-body mb-4">Connectez-vous avec les alumni EBS du monde entier sur notre groupe LinkedIn dédié.</p>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#0A66C2] hover:underline transition-colors">Rejoindre le groupe →</a>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaSection title="Vous êtes diplômé(e) EBS ? Devenez mentor." subtitle="Partagez votre expérience avec nos étudiants et contribuez à former la prochaine génération de leaders." primaryCta={{ label: "Devenir mentor", href: "/contact" }} background="penn-green" />
    </>
  );
}
