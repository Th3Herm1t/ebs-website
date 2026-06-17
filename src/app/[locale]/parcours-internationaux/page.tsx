"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, ArrowRight, Check, Globe, GraduationCap, Mail, Phone, Plane, Send, Shield, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/shared";
import { CountryFlag } from "@/components/shared/CountryFlag";

const scenarios = [
  {
    step: "1 an à EBS",
    arrow: "→",
    dest: "Bachelor 2 en Italie",
    pays: "Link University — Rome",
    code: "IT",
    details: "Accès direct dès la 1ère année de Licence validée. Intégration en Bachelor 2.",
    color: "#43A047",
  },
  {
    step: "2 ans à EBS",
    arrow: "→",
    dest: "Bachelor 3 en France",
    pays: "12 partenaires — France",
    code: "FR",
    details: "Accès direct après validation de 2 années de Licence. Intégration en 3ème année.",
    color: "#1E88E5",
  },
  {
    step: "3 ans à EBS",
    arrow: "→",
    dest: "Master Grande École",
    pays: "France & Canada",
    codes: ["FR", "CA"],
    details: "Après la Licence complète. Admission en Master ou Maîtrise chez nos partenaires.",
    color: "#E53935",
  },
  {
    step: "M1 à EBS",
    arrow: "→",
    dest: "Maîtrise au Canada",
    pays: "UQAT — Québec",
    code: "CA",
    details: "Après une année de Master à EBS. Maîtrise à l'UQAT. Résidence permanente possible.",
    color: "#2B8FAB",
  },
];

const etapes = [
  { number: "01", title: "Études à EBS", desc: "Validez 1, 2 ou 3 années selon votre objectif" },
  { number: "02", title: "Candidature", desc: "Notre équipe vous accompagne pour constituer votre dossier" },
  { number: "03", title: "Admission", desc: "Convention inter-universitaire facilitant la reconnaissance des crédits" },
  { number: "04", title: "Visa", desc: "Guidance pour Campus France, Universitaly ou Immigration Canada" },
  { number: "05", title: "Emploi", desc: "Accès au marché du travail local et résidence permanente" },
];

const partners = [
  { name: "UQAT", code: "CA", slug: "uqat" },
  { name: "Audencia", code: "FR", slug: "audencia" },
  { name: "EM Normandie", code: "FR", slug: "em-normandie" },
  { name: "PSB Paris", code: "FR", slug: "psb" },
  { name: "IDRAC", code: "FR", slug: "idrac" },
  { name: "IFAG", code: "FR", slug: "ifag" },
  { name: "IGEFI", code: "FR", slug: "igefi" },
  { name: "Éklore", code: "FR", slug: "eklore" },
  { name: "Epitech", code: "FR", slug: "epitech" },
  { name: "EPSI", code: "FR", slug: "epsi" },
  { name: "Excelia", code: "FR", slug: "excelia" },
  { name: "Link Univ.", code: "IT", slug: "link-university" },
  { name: "GUtech", code: "OM", slug: "gutech" },
];

export default function InternationalPage() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleHeroSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    try {
      await fetch("https://formspree.io/f/xeojaqdr", {
        method: "POST",
        body: new FormData(e.currentTarget),
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
      <section className="relative pt-40 pb-28 overflow-hidden">
                {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/heroes/hero-parcours-internationaux.jpg" alt="" fill className="object-cover" priority />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/50 via-[#1a2035]/50 to-penn-navy/50" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_30%_50%,_#2B8FAB_0%,_transparent_50%),radial-gradient(circle_at_70%_80%,_#43A047_0%,_transparent_50%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-14 lg:gap-20">
            {/* ── Left: Text ── */}
            <div className="flex-1 max-w-[660px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">
                  <Globe className="w-4 h-4" />
                  Parcours Internationaux
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-[40px] md:text-[54px] lg:text-[60px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
              >
                Votre passeport vers
                <br />
                <span className="text-[#2B8FAB]">le Canada, la France{" "}
                  <span className="whitespace-nowrap">et l&apos;Italie.</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-[17px] md:text-[18px] text-white/60 leading-relaxed mb-6"
              >
                Étudiez à EBS. Continuez dans le monde. Nos partenariats avec 16
                universités vous ouvrent des perspectives académiques et
                professionnelles sans frontières.
              </motion.p>
            </div>

            {/* ── Right: Form Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="              lg:w-[440px] shrink-0 w-full"
            >
              <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden">
                <AnimatePresence mode="wait">
                  {formState === "sent" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-8 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-14 h-14 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-4"
                      >
                        <Check className="w-7 h-7 text-[#2B8FAB]" />
                      </motion.div>
                      <h3 className="text-[18px] font-extrabold text-penn-navy mb-2">Demande envoyée !</h3>
                      <p className="text-[14px] text-penn-body/50 leading-relaxed">
                        Notre équipe vous contactera sous 48h pour discuter de votre projet international.
                      </p>
                      <button
                        onClick={() => setFormState("idle")}
                        className="mt-5 text-[13px] font-bold text-[#2B8FAB] hover:underline"
                      >
                        Envoyer une autre demande
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleHeroSubmit}
                      className="p-7 lg:p-8"
                    >
                      <input type="hidden" name="_subject" value="Candidature Parcours International — EBS" />

                      <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-8 h-8 rounded-lg bg-[#2B8FAB]/10 flex items-center justify-center">
                          <Send className="w-4 h-4 text-[#2B8FAB]" />
                        </div>
                        <h3 className="text-[15px] font-extrabold text-penn-navy">
                          Démarrez votre parcours
                        </h3>
                      </div>

                      <div className="space-y-3.5">
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-penn-body/25" />
                          <input
                            name="nom"
                            required
                            placeholder="Nom et prénom"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-penn-border/40 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/25 focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all"
                          />
                        </div>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-penn-body/25" />
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="Adresse email"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-penn-border/40 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/25 focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all"
                          />
                        </div>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-penn-body/25" />
                          <input
                            type="tel"
                            name="telephone"
                            required
                            placeholder="Téléphone"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-penn-border/40 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/25 focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all"
                          />
                        </div>
                        <div>
                          <select
                            name="niveau"
                            className="w-full px-4 py-3 rounded-xl border border-penn-border/40 text-[14px] font-medium text-penn-navy bg-white focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all"
                          >
                            <option value="">Votre niveau actuel</option>
                            <option value="bac">Bac (entrée en L1)</option>
                            <option value="bac1">Bac+1</option>
                            <option value="bac2">Bac+2</option>
                            <option value="licence">Licence (Bac+3)</option>
                            <option value="master1">Master 1</option>
                          </select>
                        </div>
                        <div>
                          <select
                            name="pays"
                            className="w-full px-4 py-3 rounded-xl border border-penn-border/40 text-[14px] font-medium text-penn-navy bg-white focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all"
                          >
                            <option value="">Pays visé</option>
                            <option value="france">France</option>
                            <option value="canada">Canada</option>
                            <option value="italie">Italie</option>
                            <option value="oman">Oman</option>
                            <option value="indecis">Je ne sais pas encore</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={formState === "sending"}
                        className="w-full mt-5 py-3.5 rounded-xl bg-[#2B8FAB] text-white font-bold text-[14px] hover:bg-[#1e7a94] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2B8FAB]/15 disabled:opacity-60 active:scale-[0.98]"
                      >
                        {formState === "sending" ? (
                          "Envoi..."
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Être recontacté(e)
                          </>
                        )}
                      </button>

                      {formState === "error" && (
                        <p className="text-[12px] text-red-500 text-center mt-3">
                          Une erreur est survenue. Veuillez réessayer.
                        </p>
                      )}

                      <p className="text-[11px] text-penn-body/30 text-center mt-3 leading-relaxed">
                        Réponse sous 48h · Gratuit · Sans engagement
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ INTRO PARAGRAPH ═══════════ */}
      <section className="bg-white pt-10 lg:pt-14 pb-8 lg:pb-12">
        <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="bg-penn-bg-light rounded-2xl border border-penn-border/60 p-8 lg:p-10 relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 w-1.5 h-full"
              style={{ backgroundColor: "#2B8FAB" }}
            />
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-[#2B8FAB]" />
              </div>
              <div>
                <h3 className="text-[19px] font-extrabold text-penn-navy mb-3">
                  Le Parcours International de l&apos;EBS
                </h3>
                <p className="text-[16px] md:text-[17px] text-penn-navy/70 leading-relaxed">
                  Permet aux étudiants de poursuivre leurs études en France, au Canada,
                  en Italie ou à Oman dans l&apos;une de nos 16 universités partenaires.
                  Plusieurs formules de partenariats offrent la possibilité de continuer
                  à l&apos;étranger à partir d&apos;un Bac+1, Bac+2 ou Bac+3 validé à
                  l&apos;EBS, et d&apos;obtenir une Licence ou un Master en 1 ou 2 ans.
                  Une ouverture sur des institutions de renommée mondiale et une expérience
                  interculturelle unique pour réussir ses études et sa carrière.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ PARTNER GRID ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-14"
          >
            <Badge variant="default" size="lg" className="mb-4">
              Notre réseau
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15] mb-4">
              16 universités partenaires
            </h2>
            <p className="text-[16px] text-penn-body max-w-[600px] mx-auto">
              Des institutions reconnues en France, au Canada, en Italie et à Oman.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {[
              { slug: "uqat", logo: "/images/partenaires-academiques/uqat.png", name: "UQAT", pays: "Canada", code: "CA" },
              { slug: "audencia", logo: "/images/partenaires-academiques/logo-audencia.png", name: "Audencia", pays: "France", code: "FR" },
              { slug: "em-normandie", logo: "https://ebs.tn/wp-content/uploads/2022/08/EM_Normandie-Logo.png", name: "EM Normandie", pays: "France", code: "FR" },
              { slug: "psb", logo: "/images/partenaires-academiques/psb.png", name: "PSB Paris", pays: "France", code: "FR" },
              { slug: "idrac", logo: "/images/partenaires-academiques/idrac.png", name: "IDRAC", pays: "France", code: "FR" },
              { slug: "ifag", logo: "/images/partenaires-academiques/ifag.png", name: "IFAG", pays: "France", code: "FR" },
              { slug: "igefi", logo: "/images/partenaires-academiques/igefi.png", name: "IGEFI", pays: "France", code: "FR" },
              { slug: "eklore", logo: "/images/partenaires-academiques/eklore.png", name: "Éklore", pays: "France", code: "FR" },
              { slug: "epitech", logo: "/images/partenaires-academiques/epitech.png", name: "Epitech", pays: "France", code: "FR" },
              { slug: "epsi", logo: "/images/partenaires-academiques/epsi.png", name: "EPSI", pays: "France", code: "FR" },
              { slug: "excelia", logo: "/images/partenaires-academiques/excelia.png", name: "Excelia", pays: "France", code: "FR" },
              { slug: "figs", logo: "/images/partenaires-academiques/figs (2).png", name: "FIGS Education", pays: "France", code: "FR" },
              { slug: "supdecom", logo: "/images/partenaires-academiques/supdecom.png", name: "Sup'de Com", pays: "France", code: "FR" },
              { slug: "link-university", logo: "/images/partenaires-academiques/link-university.jpeg", name: "Link University", pays: "Italie", code: "IT" },
              { slug: "redsup", logo: "/images/partenaires-academiques/redsup.png", name: "RedSup", pays: "France", code: "FR" },
              { slug: "gutech", logo: "/images/partenaires-academiques/gutech.png", name: "GUtech", pays: "Oman", code: "OM" },
            ].map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <Link
                  href={`/partenaires/${p.slug}`}
                  className="group flex flex-col items-center gap-3 bg-white rounded-xl border border-penn-border p-5 h-full hover:shadow-md hover:border-[#2B8FAB]/30 hover:-translate-y-1 transition-all duration-200"
                >
                  {p.logo ? (
                    <div className="w-full h-16 flex items-center justify-center">
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="max-h-12 max-w-[140px] w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-penn-bg-light flex items-center justify-center">
                      <span className="text-[18px] font-extrabold text-penn-navy/30 group-hover:text-[#2B8FAB]/50 transition-colors">
                        {p.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <p className="text-[13px] font-bold text-penn-navy group-hover:text-[#2B8FAB] transition-colors">
                      {p.name}
                    </p>
                    <p className="text-[11px] text-penn-body/50 flex items-center gap-1 justify-center">
                      <CountryFlag code={p.code} />
                      {p.pays}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-14"
          >
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15] mb-4">
              4 scénarios pour partir
            </h2>
            <p className="text-[16px] text-penn-body max-w-[600px] mx-auto">
              Quel que soit votre niveau, une porte s&apos;ouvre vers l&apos;international.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {scenarios.map((s, i) => (
              <motion.div
                key={s.dest}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl border border-penn-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ borderTopWidth: "4px", borderTopColor: s.color }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center font-extrabold text-[14px] text-white" style={{ backgroundColor: s.color }}>
                    {i + 1}
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                  <span className="text-[15px] font-bold text-penn-navy">{s.step}</span>
                  <span className="text-[#2B8FAB] font-bold">{s.arrow}</span>
                  <span className="text-[15px] font-extrabold text-penn-navy">{s.dest}</span>
                </div>

                <p className="text-[12px] font-semibold text-penn-body/60 mb-3 flex items-center gap-1.5">
                  {s.codes ? s.codes.map((c: string) => <CountryFlag key={c} code={c} />) : s.code && <CountryFlag code={s.code} />}
                  {s.pays}
                </p>
                <p className="text-[13px] text-penn-body/70 leading-relaxed">{s.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ EN QUELQUES MOTS ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-14"
          >
            <Badge variant="default" size="lg" className="mb-4">En bref</Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15] mb-4">
              Le parcours international en quelques mots
            </h2>
            <p className="text-[16px] text-penn-body/60 max-w-[600px] mx-auto">
              Ce que le Parcours International EBS vous apporte concrètement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px] mx-auto">
            {[
              { text: "Des programmes de Licences et de Masters de haut niveau dans des universités partenaires reconnues.", color: "#2B8FAB" },
              { text: "Un enseignement complémentaire pour enrichir le parcours et préparer à la mobilité internationale et à la double diplômation.", color: "#2196F3" },
              { text: "Des formations en Soft Skills : communication, management interculturel, culture générale, anglais.", color: "#9C27B0" },
              { text: "Des activités internationales : conférences thématiques, séminaires en France, préparation TOEIC, voyages d'études.", color: "#FF9800" },
              { text: "Des co-diplômations en Licences et Masters avec les universités partenaires.", color: "#E91E8C" },
              { text: "Des stages rémunérés en France dans le cadre du parcours international.", color: "#43A047" },
              { text: "La possibilité de suivre des cursus 100% en anglais pour une carrière globale.", color: "#2B8FAB" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-penn-border hover:border-[#2B8FAB]/20 hover:shadow-sm transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}12` }}
                >
                  <Check className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <p className="text-[15px] text-penn-navy/80 leading-relaxed mt-1.5">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 5 STEPS ═══════════ */}
      <section className="section-padding bg-penn-bg-light relative overflow-hidden">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {etapes.map((e, i) => (
              <motion.div
                key={e.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative bg-white rounded-2xl border border-penn-border p-5 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-penn-navy text-white flex items-center justify-center mx-auto mb-3 font-extrabold text-[13px]">
                  {e.number}
                </div>
                <h3 className="text-[15px] font-extrabold text-penn-navy mb-1">{e.title}</h3>
                <p className="text-[13px] text-penn-body/70 leading-snug">{e.desc}</p>

                {/* Arrow connector — desktop only */}
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

      {/* ═══════════ WHY ═══════════ */}
      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,_#2B8FAB_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-14"
          >
            <Badge variant="outline" size="lg" className="mb-4 border-white/20 text-white/80">
              Pourquoi partir ?
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-white leading-[1.15]">
              Étudier à l&apos;international depuis EBS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1000px] mx-auto">
            {[
              { icon: <GraduationCap className="w-5 h-5" />, title: "Diplômes mondiaux", desc: "Diplômes européens et canadiens reconnus partout" },
              { icon: <Shield className="w-5 h-5" />, title: "Sécurité", desc: "Partez avec une convention signée, pas dans l'incertitude" },
              { icon: <Check className="w-5 h-5" />, title: "Immigration facilitée", desc: "PEQ Canada, titre de séjour France, visa Schengen Italie" },
              { icon: <Globe className="w-5 h-5" />, title: "Réseau mondial", desc: "Alumni EBS dans 7+ pays, réseau professionnel actif" },
              { icon: <Plane className="w-5 h-5" />, title: "Salaires ×3 à ×5", desc: "Salaires internationaux pour les profils qualifiés" },
              { icon: <ArrowRight className="w-5 h-5" />, title: "Accompagnement complet", desc: "Dossier, visa, installation : on s'occupe de tout" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/[0.06] rounded-xl hover:bg-white/[0.05] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#2B8FAB]/10 flex items-center justify-center text-[#2B8FAB] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[15px] font-extrabold text-white mb-0.5">{item.title}</p>
                  <p className="text-[13px] text-white/50">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ BESOIN D'INFO ═══════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B8FAB] to-[#1a6d84]" />
        <div className="relative z-10 max-w-[600px] mx-auto px-5 lg:px-12 py-16 lg:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-5">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-white mb-4">
              Besoin d&apos;info ?
            </h2>
            <p className="text-[15px] md:text-[17px] text-white/70 leading-relaxed mb-8 max-w-[400px] mx-auto">
              Notre équipe est disponible pour répondre à toutes vos questions sur le Parcours International.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+21653355196"
                className="inline-flex items-center gap-2.5 bg-white text-penn-navy font-bold text-[15px] py-3.5 px-7 rounded-full hover:bg-white/90 transition-all shadow-lg"
              >
                <Phone className="w-4 h-4" />
                +216 53 355 196
              </a>
              <a
                href="mailto:contact@ebs.tn"
                className="inline-flex items-center gap-2.5 bg-white/10 text-white font-bold text-[15px] py-3.5 px-7 rounded-full border border-white/20 hover:bg-white/15 transition-all"
              >
                <Mail className="w-4 h-4" />
                contact@ebs.tn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
