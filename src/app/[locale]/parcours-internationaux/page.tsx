"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Check, Globe, GraduationCap, Plane, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CtaSection } from "@/components/shared";

const scenarios = [
  {
    step: "1 an à EBS",
    arrow: "→",
    dest: "Bachelor 2 en Italie",
    pays: "🇮🇹 Link University — Rome",
    details: "Accès direct dès la 1ère année de Licence validée. Intégration en Bachelor 2.",
    color: "#43A047",
  },
  {
    step: "2 ans à EBS",
    arrow: "→",
    dest: "Bachelor 3 en France",
    pays: "🇫🇷 12 partenaires — France",
    details: "Accès direct après validation de 2 années de Licence. Intégration en 3ème année.",
    color: "#1E88E5",
  },
  {
    step: "3 ans à EBS",
    arrow: "→",
    dest: "Master Grande École",
    pays: "🇫🇷🇨🇦 France & Canada",
    details: "Après la Licence complète. Admission en Master ou Maîtrise chez nos partenaires.",
    color: "#E53935",
  },
  {
    step: "M1 à EBS",
    arrow: "→",
    dest: "Maîtrise au Canada",
    pays: "🇨🇦 UQAT — Québec",
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
  { name: "UQAT", country: "🇨🇦", slug: "uqat" },
  { name: "EM Normandie", country: "🇫🇷", slug: "em-normandie" },
  { name: "PSB Paris", country: "🇫🇷", slug: "psb" },
  { name: "IDRAC", country: "🇫🇷", slug: "idrac" },
  { name: "IFAG", country: "🇫🇷", slug: "ifag" },
  { name: "IGEFI", country: "🇫🇷", slug: "igefi" },
  { name: "Éklore", country: "🇫🇷", slug: "eklore" },
  { name: "Epitech", country: "🇫🇷", slug: "epitech" },
  { name: "EPSI", country: "🇫🇷", slug: "epsi" },
  { name: "Excelia", country: "🇫🇷", slug: "excelia" },
  { name: "Link Univ.", country: "🇮🇹", slug: "link-university" },
  { name: "GUtech", country: "🇴🇲", slug: "gutech" },
];

export default function InternationalPage() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-penn-navy via-[#1a2035] to-penn-navy" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_30%_50%,_#2B8FAB_0%,_transparent_50%),radial-gradient(circle_at_70%_80%,_#43A047_0%,_transparent_50%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="max-w-[750px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 text-[#2B8FAB]/60 text-[12px] font-bold uppercase tracking-[4px] mb-8">
                <Globe className="w-4 h-4" />
                Parcours Internationaux
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[40px] md:text-[54px] lg:text-[68px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
            >
              Votre passeport vers
              <br />
              <span className="text-[#2B8FAB]">le Canada, la France et l&apos;Italie.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[17px] md:text-[19px] text-white/60 leading-relaxed max-w-[600px]"
            >
              Étudiez à EBS. Continuez dans le monde. Nos partenariats avec 16 universités vous ouvrent des perspectives académiques et professionnelles sans frontières.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <ArrowDown className="w-5 h-5 text-white/20 animate-bounce mx-auto" />
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
            <span className="inline-block text-[13px] font-bold uppercase tracking-[3px] text-[#2B8FAB] mb-4">
              Notre réseau
            </span>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15] mb-4">
              16 universités partenaires
            </h2>
            <p className="text-[16px] text-penn-body max-w-[600px] mx-auto">
              Des institutions reconnues en France, au Canada, en Italie et à Oman.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {[
              { slug: "uqat", logo: "/images/partenaires-academiques/uqat.png", name: "UQAT", pays: "Canada" },
              { slug: "em-normandie", logo: null, name: "EM Normandie", pays: "France", initials: "EMN" },
              { slug: "psb", logo: "/images/partenaires-academiques/psb.png", name: "PSB Paris", pays: "France" },
              { slug: "idrac", logo: "/images/partenaires-academiques/idrac.png", name: "IDRAC", pays: "France" },
              { slug: "ifag", logo: "/images/partenaires-academiques/ifag.png", name: "IFAG", pays: "France" },
              { slug: "igefi", logo: "/images/partenaires-academiques/igefi.png", name: "IGEFI", pays: "France" },
              { slug: "eklore", logo: "/images/partenaires-academiques/eklore.png", name: "Éklore", pays: "France" },
              { slug: "epitech", logo: "/images/partenaires-academiques/epitech.png", name: "Epitech", pays: "France" },
              { slug: "epsi", logo: "/images/partenaires-academiques/epsi.png", name: "EPSI", pays: "France" },
              { slug: "excelia", logo: "/images/partenaires-academiques/excelia.png", name: "Excelia", pays: "France" },
              { slug: "figs", logo: "/images/partenaires-academiques/figs (2).png", name: "FIGS Education", pays: "France" },
              { slug: "supdecom", logo: "/images/partenaires-academiques/supdecom.png", name: "Sup'de Com", pays: "France" },
              { slug: "link-university", logo: null, name: "Link University", pays: "Italie", initials: "LU" },
              { slug: "redsup", logo: "/images/partenaires-academiques/redsup.png", name: "RedSup", pays: "France" },
              { slug: "gutech", logo: "/images/partenaires-academiques/gutech.png", name: "GUtech", pays: "Oman" },
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
                      <Image
                        src={p.logo}
                        alt={p.name}
                        width={140}
                        height={50}
                        className="max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-penn-bg-light flex items-center justify-center">
                      <span className="text-[18px] font-extrabold text-penn-navy/30 group-hover:text-[#2B8FAB]/50 transition-colors">
                        {p.initials}
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <p className="text-[13px] font-bold text-penn-navy group-hover:text-[#2B8FAB] transition-colors">
                      {p.name}
                    </p>
                    <p className="text-[11px] text-penn-body/50">{p.pays}</p>
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

                <p className="text-[12px] font-semibold text-penn-body/60 mb-3">{s.pays}</p>
                <p className="text-[13px] text-penn-body/70 leading-relaxed">{s.details}</p>
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
            <span className="inline-block text-[13px] font-bold uppercase tracking-[3px] text-[#2B8FAB] mb-4">
              Pourquoi partir ?
            </span>
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

      <CtaSection
        title="Prêt(e) à partir étudier à l'international ?"
        subtitle="Candidatez dès maintenant au Parcours International EBS. Notre équipe vous accompagne à chaque étape."
        primaryCta={{ label: "Candidatez au Parcours International", href: "/etudier-a-letranger" }}
        whatsapp="+216 29 58 28 35"
        background="penn-green"
      />
    </>
  );
}
