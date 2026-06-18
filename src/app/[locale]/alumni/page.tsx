"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Award, Briefcase, Globe, HeartHandshake, Send, Sparkles, Star } from "lucide-react";
import { CtaSection } from "@/components/shared";
import { Badge } from "@/components/shared";
import AlumniWorldMap from "@/components/alumni/AlumniWorldMap";

const alumniProfiles = [
  { name: "Mohamed Amine Hamdi", text: "a obtenu son diplôme de Master en Marketing Digital promotion 2019/2020. Actuellement il occupe un poste de Community Manager chez Tinith services Tunis", img: "/images/ebs-tn/amin-hamdi.jpeg", initials: "MH" },
  { name: "Dorra Ben Turkia", text: "a obtenu son diplôme de Master Ingénierie et Analyse Quantitative pour la Finance et l'Assurance promotion 2018/2019. Actuellement elle occupe un poste de Contrôleuse de Gestion chez Habitat France Paris", img: "/images/ebs-tn/dorra-ben-turkia-1022x1024.jpeg", initials: "DB" },
  { name: "Maroua Jeribi", text: "a obtenu son diplôme de Master Professionnel en Gestion des Ressources Humaines promotion 2018/2019. Actuellement elle occupe un poste de Consultante SIRH Oracle Paris", img: "/images/ebs-tn/maroua-jeribi-1022x1024.jpeg", initials: "MJ" },
  { name: "Hend Jaber", text: "a obtenu son diplôme de Master Ingénierie Financière promotion 2015/2016. Actuellement elle occupe un poste de Conceptualizer chez BOUMRANG Tunis", img: "/images/ebs-tn/hend-jaber.jpeg", initials: "HJ" },
  { name: "Hend Nasri", text: "a obtenu son diplôme de Master en Marketing Digital promotion 2019/2020. Actuellement elle occupe un poste de Digital Marketing Manager chez Lezarts.Digital Tunis", img: "/images/ebs-tn/hend-nasri-1024x1024.jpeg", initials: "HN" },
  { name: "Kais Layouni", text: "a obtenu son diplôme de Licence en Finance promotion 2017/2018. Actuellement il occupe un poste de Business Analyst chez MENINX Holding Tunis", img: "/images/ebs-tn/kais-layouni.jpeg", initials: "KL" },
  { name: "Hend Bedoui", text: "a obtenu son diplôme de Master Ingénierie Financière promotion 2015/2016. Actuellement elle occupe un poste de Analyste Financier LEASE TUNIS", img: "/images/ebs-tn/hind-bedoui.jpeg", initials: "HB" },
  { name: "Oussama Ayadi", text: "a obtenu son diplôme de Master en Marketing Bancaire promotion 2016/2017. Actuellement il occupe un poste de Expert Technique chez GIZ Tunisie Tunis", img: "/images/ebs-tn/oussama-ayadi-1024x1024.jpeg", initials: "OA" },
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
              <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">
                <div className="w-1 h-1 rounded-full bg-[#2B8FAB]" />
                Réseau des Diplômés
              </Badge>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-[40px] md:text-[52px] lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6">
              Des diplômés qui réussissent<br /><span className="text-[#2B8FAB]">partout dans le monde</span>.
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
            <Badge variant="outline" size="lg" className="mb-4 border-white/20 text-white/80">EBS Alumni</Badge>
            <h2 className="text-[34px] md:text-[48px] font-extrabold text-white leading-[1.1]">Les Alumni à la une</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {alumniProfiles.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.06 }} className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300 group">
                <div className="w-full aspect-[1] overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  {p.img ? (
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-[#2B8FAB]/10 flex items-center justify-center text-white font-extrabold text-[32px]">{p.initials}</div>
                  )}
                </div>
                <p className="text-[14px] text-white/70 leading-relaxed p-5">
                  <strong className="text-white font-extrabold">{p.name}</strong> {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AlumniWorldMap locale="fr" />

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
