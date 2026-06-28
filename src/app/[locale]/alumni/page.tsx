"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Award, Briefcase, Globe, GraduationCap, HeartHandshake, Mail, Phone, Send, Sparkles, Star, X } from "lucide-react";
import { CtaSection } from "@/components/shared";
import { Badge } from "@/components/shared";
import AlumniWorldMap from "@/components/alumni/AlumniWorldMap";
import { siteConfig } from "@/lib/config";

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
  { icon: <Award className="w-6 h-6" />, nom: "Industrie 4.0", desc: "Spécialistes en automatisation, IoT, maintenance prédictive et transformation industrielle." },
];

export default function AlumniPage() {
  const [mentorModalOpen, setMentorModalOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleMentorSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    try {
      await fetch(siteConfig.webhookUrl, {
        method: "POST",
        body: (() => { const fd = new FormData(e.currentTarget); fd.append('formId', 'alumni'); return fd; })(),
        headers: { Accept: "application/json" },
      });
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  };
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
              { value: "90%", label: "Embauchés en 3 mois" },
              { value: "15", label: "Secteurs d'activité" },
              { value: "500+", label: "Diplômés" },
              { value: "5", label: "Secteurs d'activité" },
            ].map((s) => (
              <div key={s.value + s.label} className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 text-center">
                <p className={`text-[28px] md:text-[36px] font-extrabold leading-none mb-1 ${s.value === "500+" ? "text-[#2B8FAB]" : "text-white"}`}>{s.value}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl border border-penn-border p-6 lg:p-8">
              <div className="w-12 h-12 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center mb-4 text-[#2B8FAB]"><Send className="w-6 h-6" /></div>
              <h3 className="text-[20px] font-extrabold text-penn-navy mb-2">Mettez à jour votre profil</h3>
              <p className="text-[14px] text-penn-body mb-4">Vous êtes diplômé(e) EBS ? Tenez-nous informés de votre parcours et restez connecté(e) au réseau.</p>
              <a href="/contact" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#2B8FAB] hover:text-penn-navy transition-colors">Mettre à jour mon profil →</a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl border border-penn-border p-6 lg:p-8 cursor-pointer hover:border-[#2B8FAB]/30 hover:shadow-md transition-all" onClick={() => setMentorModalOpen(true)}>
              <div className="w-12 h-12 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center mb-4 text-[#2B8FAB]"><GraduationCap className="w-6 h-6" /></div>
              <h3 className="text-[20px] font-extrabold text-penn-navy mb-2">Devenir mentor</h3>
              <p className="text-[14px] text-penn-body mb-4">Partagez votre expertise avec les étudiants EBS et contribuez à former la prochaine génération.</p>
              <span className="inline-flex items-center gap-2 text-[14px] font-bold text-[#2B8FAB] hover:text-penn-navy transition-colors">Devenir mentor →</span>
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

      <section className="section-padding bg-[#2B8FAB] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_50%_50%,_white_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-[900px] mx-auto px-5 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}>
            <Badge variant="outline" size="lg" className="mb-6 border-white/30 text-white/90">Mentorat</Badge>
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-white mb-4">
              Vous êtes diplômé(e) EBS ? <span className="text-white">Devenez mentor</span>.
            </h2>
            <p className="text-[16px] text-white/70 max-w-[550px] mx-auto mb-8 leading-relaxed">
              Partagez votre expérience avec nos étudiants et contribuez à former la prochaine génération de leaders.
            </p>
            <button onClick={() => setMentorModalOpen(true)} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#2B8FAB] font-bold text-[14px] hover:bg-white/90 transition-all shadow-lg shadow-white/20">
              Devenir mentor
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ MODAL MENTOR ═══════════ */}
      <AnimatePresence>
        {mentorModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={() => setMentorModalOpen(false)}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl max-w-[600px] w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <div className="sticky top-0 z-10 bg-white rounded-t-2xl border-b border-penn-border px-8 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center text-[#2B8FAB]"><GraduationCap className="w-5 h-5" /></div>
                  <h3 className="text-[18px] font-extrabold text-penn-navy">Devenir mentor</h3>
                </div>
                <button onClick={() => setMentorModalOpen(false)} className="p-2 rounded-xl hover:bg-gray-100 transition-all"><X className="w-5 h-5 text-penn-body" /></button>
              </div>

              <div className="p-8">
                {formState === "sent" ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-5">
                      <Send className="w-8 h-8 text-[#2B8FAB]" />
                    </div>
                    <h3 className="text-[22px] font-extrabold text-penn-navy mb-2">Merci !</h3>
                    <p className="text-[14px] text-penn-body/50 max-w-[350px] mx-auto">Votre candidature a bien été reçue. Notre équipe vous contactera rapidement.</p>
                    <button onClick={() => { setMentorModalOpen(false); setFormState("idle"); }} className="mt-6 text-[#2B8FAB] font-bold text-[14px] hover:underline">Fermer</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleMentorSubmit} className="space-y-5">
                    <input type="hidden" name="_subject" value="Candidature Mentor — EBS" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Nom complet</label>
                        <input name="name" required className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all" placeholder="Votre nom" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Email</label>
                        <input name="email" type="email" required className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all" placeholder="email@exemple.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Téléphone</label>
                        <input name="phone" type="tel" className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all" placeholder="+216 XX XXX XXX" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Poste actuel / Entreprise</label>
                        <input name="poste" required className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all" placeholder="Ex: Data Scientist @ Company" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Secteur d'expertise</label>
                        <select name="secteur" required className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all appearance-none bg-white">
                          <option value="">Sélectionnez</option>
                          <option value="Banque & Finance">Banque & Finance</option>
                          <option value="Digital & Marketing">Digital & Marketing</option>
                          <option value="Tech & IA">Tech & IA</option>
                          <option value="Conseil">Conseil</option>
                          <option value="Entrepreneuriat">Entrepreneuriat</option>
                          <option value="Industrie 4.0">Industrie 4.0</option>
                          <option value="Autre">Autre</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Années d'expérience</label>
                        <select name="experience" required className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all appearance-none bg-white">
                          <option value="">Sélectionnez</option>
                          <option value="1-3 ans">1–3 ans</option>
                          <option value="3-5 ans">3–5 ans</option>
                          <option value="5-10 ans">5–10 ans</option>
                          <option value="10+ ans">10+ ans</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Message / Motivation</label>
                      <textarea name="message" rows={4} required className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all resize-none" placeholder="Pourquoi souhaitez-vous devenir mentor ?" />
                    </div>
                    <button type="submit" disabled={formState === "sending"} className="w-full py-4 rounded-xl bg-[#2B8FAB] text-white font-bold text-[15px] hover:bg-[#1e7a94] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2B8FAB]/15 disabled:opacity-50 active:scale-[0.98]">
                      {formState === "sending" ? "Envoi..." : <><Send className="w-5 h-5" /> Envoyer ma candidature</>}
                    </button>
                    {formState === "error" && <p className="text-[13px] text-red-500 text-center">Une erreur est survenue. Veuillez réessayer.</p>}
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
