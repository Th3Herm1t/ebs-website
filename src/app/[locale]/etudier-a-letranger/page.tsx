"use client";

import { motion } from "motion/react";
import { ArrowRight, Check, GraduationCap, Plane, Quote, ShieldUser } from "lucide-react";
import { CtaSection } from "@/components/shared";

const destinations = [
  {
    pays: "Canada",
    partenaire: "UQAT",
    color: "#E53935",
    avantages: [
      "Immigration facilitée via le PEQ (Programme de l'expérience québécoise)",
      "Maîtrise en Gestion de Projets, MBA, Maîtrise Sciences de Gestion",
      "Résidence permanente possible après diplôme",
      "Qualité de vie exceptionnelle, sécurité",
    ],
  },
  {
    pays: "France",
    partenaire: "12 partenaires",
    color: "#1E88E5",
    avantages: [
      "Visa étudiant facilité par nos conventions inter-universitaires",
      "Grandes Écoles accréditées et écoles spécialisées",
      "Multi-campus dans toute la France",
      "Accès au marché de l'emploi européen",
    ],
  },
  {
    pays: "Italie",
    partenaire: "Link University",
    color: "#43A047",
    avantages: [
      "Accès dès la 1ère année de Licence validée à EBS",
      "Bachelor direct et Masters au campus de Rome",
      "Université reconnue par l'État italien (MIUR)",
      "Visa Schengen — accès à toute l'Europe",
    ],
  },
  {
    pays: "Oman",
    partenaire: "GUtech",
    color: "#FB8C00",
    avantages: [
      "Partenariat avec RWTH Aachen University (Allemagne)",
      "Cours en anglais — ouverture internationale immédiate",
      "Accès au marché de l'emploi du Golfe (EAU, Qatar, Arabie Saoudite)",
      "Cadre de vie moderne et sécurisé",
    ],
  },
];

const etapes = [
  { number: "01", title: "Études à EBS", desc: "Validez 1, 2 ou 3 années selon votre destination" },
  { number: "02", title: "Candidature", desc: "Notre équipe constitue votre dossier pour l'université partenaire" },
  { number: "03", title: "Admission", desc: "Convention inter-universitaire facilitant la reconnaissance des crédits" },
  { number: "04", title: "Visa & Départ", desc: "Guidance pour les démarches de visa et l'installation sur place" },
  { number: "05", title: "Emploi", desc: "Accès au marché du travail local et opportunités de carrière internationale" },
];

export default function EtudierALetrangerPage() {
  return (
    <>
      {/* ═══════════ HERO + FORM ═══════════ */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-penn-navy via-[#1a2035] to-penn-navy" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_40%,_#2B8FAB_0%,_transparent_50%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
            {/* LEFT — Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-3 text-[#2B8FAB]/60 text-[12px] font-bold uppercase tracking-[4px] mb-8">
                  <Plane className="w-4 h-4" />
                  Parcours International — Campagne
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-[36px] md:text-[46px] lg:text-[54px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
              >
                Terminez vos études en
                <br />
                <span className="text-[#2B8FAB]">France, en Italie ou au Canada</span>
                <br />
                — Partez depuis EBS.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-[16px] md:text-[18px] text-white/60 leading-relaxed max-w-[550px] mb-8"
              >
                EBS est votre tremplin vers le monde. 16 partenaires universitaires. Visa facilité. Diplôme reconnu. Accompagnement complet à chaque étape.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                {[
                  { icon: <Check className="w-4 h-4" />, text: "Conventions signées" },
                  { icon: <ShieldUser className="w-4 h-4" />, text: "Accompagnement visa" },
                  { icon: <GraduationCap className="w-4 h-4" />, text: "Diplômes reconnus" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-[13px] font-semibold text-white/50">
                    <span className="text-[#2B8FAB]">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-white/10 overflow-hidden">
                <div className="bg-[#2B8FAB] px-6 py-4">
                  <h3 className="text-white font-extrabold text-[16px]">J&apos;opte pour le Parcours International</h3>
                  <p className="text-white/80 text-[13px] mt-0.5">Réponse sous 24h · Gratuit · Sans engagement</p>
                </div>
                <form className="p-6 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Prénom *" required className="w-full h-10 px-3 text-sm border border-penn-border rounded-lg outline-none focus:border-[#2B8FAB] transition-colors" />
                  <input type="text" placeholder="Nom *" required className="w-full h-10 px-3 text-sm border border-penn-border rounded-lg outline-none focus:border-[#2B8FAB] transition-colors" />
                  <input type="email" placeholder="Email *" required className="w-full h-10 px-3 text-sm border border-penn-border rounded-lg outline-none focus:border-[#2B8FAB] transition-colors" />
                  <input type="tel" placeholder="Téléphone / WhatsApp *" required className="w-full h-10 px-3 text-sm border border-penn-border rounded-lg outline-none focus:border-[#2B8FAB] transition-colors" />
                  <select className="w-full h-10 px-3 text-sm border border-penn-border rounded-lg outline-none focus:border-[#2B8FAB] transition-colors text-penn-body">
                    <option value="">Pays de destination</option>
                    <option value="france">France</option>
                    <option value="canada">Canada</option>
                    <option value="italie">Italie</option>
                    <option value="oman">Oman</option>
                  </select>
                  <button type="submit" className="w-full h-11 bg-[#2B8FAB] text-white font-bold text-[14px] rounded-full hover:bg-penn-navy transition-colors">
                    Envoyer ma candidature →
                  </button>
                  <p className="text-[11px] text-penn-body/60 text-center">
                    ✓ Gratuit · ✓ Sans engagement · ✓ Réponse sous 24h
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ 4 DESTINATIONS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-14"
          >
            <span className="inline-block text-[13px] font-bold uppercase tracking-[3px] text-[#2B8FAB] mb-4">
              Destinations
            </span>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Les 4 destinations
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px] mx-auto">
            {destinations.map((d, i) => (
              <motion.div
                key={d.pays}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group bg-white rounded-2xl border border-penn-border p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ borderTopWidth: "4px", borderTopColor: d.color }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-[15px]" style={{ backgroundColor: d.color }}>
                    {d.pays.charAt(0)}
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

      {/* ═══════════ TESTIMONIAL ═══════════ */}
      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_30%_50%,_#2B8FAB_0%,_transparent_50%)]" />
        <div className="relative z-10 max-w-[900px] mx-auto px-5 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <Quote className="w-8 h-8 text-[#2B8FAB]/20 mx-auto mb-6" />
            <blockquote className="text-[20px] md:text-[26px] font-bold text-white/80 leading-relaxed italic mb-8">
              &ldquo;Grâce à EBS et à leur partenariat avec l&apos;UQAT, j&apos;ai pu partir au Canada avec ma Licence en Management. Aujourd&apos;hui je travaille à Montréal et j&apos;ai ma résidence permanente. EBS a tout facilité.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center text-[#2B8FAB] font-extrabold text-[15px] border border-[#2B8FAB]/10">
                SG
              </div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-14"
          >
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Comment ça marche ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {etapes.map((e, i) => (
              <motion.div
                key={e.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative bg-penn-bg-light rounded-2xl border border-penn-border p-5 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-penn-navy text-white flex items-center justify-center mx-auto mb-3 font-extrabold text-[13px]">
                  {e.number}
                </div>
                <h3 className="text-[15px] font-extrabold text-penn-navy mb-1">{e.title}</h3>
                <p className="text-[13px] text-penn-body/70 leading-snug">{e.desc}</p>

                {i < etapes.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-penn-border">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Prêt(e) à partir ?"
        subtitle="Déposez votre candidature et notre équipe vous accompagne dans toutes les démarches."
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
        whatsapp="+216 29 58 28 35"
        background="penn-green"
      />
    </>
  );
}
