"use client";

import { motion } from "motion/react";
import { ArrowRight, Check, Globe, GraduationCap, Mail, Phone, Plane, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AdmissionForm } from "@/components/forms/AdmissionForm";
import { Badge } from "@/components/shared";
import { CountryFlag } from "@/components/shared/CountryFlag";
import { academicPartners } from "@/lib/partenaires/academic-partners";

const scenarios = [
  {
    step: "1 année à EBS",
    arrow: "→",
    dest: "Bachelor 2 en Italie",
    pays: "Link University — Rome",
    code: "IT",
    details: "Après validation de la première année de Licence à EBS, possibilité de poursuivre en 2ᵉ année de Bachelor à Link University, selon le programme choisi et les conditions d’admission.",
    color: "#43A047",
  },
  {
    step: "2 années à EBS",
    arrow: "→",
    dest: "Bachelor 3 en France",
    pays: "Écoles supérieures et Grandes Écoles",
    code: "FR",
    details: "Après deux années de Licence validées à EBS, possibilité d’intégrer la 3ᵉ année de certains Bachelors proposés par les établissements partenaires, selon la filière et les conditions d’admission.",
    color: "#1E88E5",
  },
  {
    step: "Licence à EBS",
    arrow: "→",
    dest: "Master à l'international",
    pays: "France • Canada • Italie • Oman",
    codes: ["FR", "CA", "IT", "OM"],
    details: "Après l’obtention de la Licence EBS, possibilité de poursuivre en Master, MSc, Mastère, Programme Grande École, Maîtrise ou autre cursus Bac+5, selon l’établissement partenaire.",
    color: "#E53935",
  },
  {
    step: "Master 1 à EBS",
    arrow: "→",
    dest: "Poursuite d'études",
    pays: "Établissements partenaires",
    codes: ["FR", "CA"],
    details: "Après validation d’un Master 1 à EBS, une poursuite d’études peut être envisagée dans certains programmes de niveau Bac+5 ou en Maîtrise au Canada, selon le parcours académique.",
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


export default function InternationalPage() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-40 pb-28 overflow-hidden">
                {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/heroes/hero-parcours-internationaux.webp" alt="" fill className="object-cover" priority sizes="100vw" />
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
                  Parcours International
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
                <span className="text-penn-green">le Canada, la France, l&apos;Italie et Oman</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-[17px] md:text-[18px] text-white/60 leading-relaxed mb-6"
              >
                Étudiez à EBS, poursuivez vos études à l&apos;international. Grâce à nos partenariats avec 14 universités, développez un parcours académique et professionnel ouvert sur le monde.
              </motion.p>
            </div>

            {/* ── Right: Form Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:w-[440px] shrink-0 w-full"
            >
              <AdmissionForm type="parcours" />
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
              <div className="w-12 h-12 rounded-xl bg-penn-green/10 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-penn-green" />
              </div>
              <div>
                <h3 className="text-[19px] font-extrabold text-penn-navy mb-3">
                  Le Parcours International de l&apos;EBS
                </h3>
                <p className="text-[16px] md:text-[17px] text-penn-navy/70 leading-relaxed">
                  Le Parcours International d&apos;EBS permet aux étudiants de construire une partie de leur cursus à l&apos;étranger grâce à un réseau de 14 partenaires académiques internationaux en France, au Canada, en Italie et à Oman. Selon leur niveau d&apos;études, leur filière et le partenariat choisi, les étudiants peuvent rejoindre une école ou une université partenaire après une, deux ou trois années d&apos;études à EBS, et dans certains cas après un Master 1. Ces parcours ouvrent l&apos;accès, selon les établissements et les conditions d&apos;admission, à des Bachelors, Programmes Grande École, Masters, MSc, Mastères, Maîtrises et autres diplômes reconnus. Au-delà du diplôme, le Parcours International EBS permet de développer une expérience académique internationale, de renforcer ses compétences linguistiques et interculturelles et de préparer sa carrière dans un environnement international.
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
              14 universités partenaires
            </h2>
            <p className="text-[16px] text-penn-body max-w-[600px] mx-auto">
              Des institutions reconnues en France, au Canada, en Italie et à Oman.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-5 lg:gap-6">
            {academicPartners.map((partner, i) => (
              <motion.div
                key={partner.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="w-full sm:w-[calc(50%-10px)] lg:w-[calc((100%-48px)/3)]"
              >
                <Link
                  href={`/partenaires/${partner.slug}`}
                  className="group block h-full"
                >
                  <div className="bg-white rounded-2xl border border-penn-border p-6 lg:p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="h-20 flex items-center justify-between mb-5">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={150}
                        height={56}
                        className="max-h-14 max-w-[150px] object-contain"
                      />
                      <CountryFlag code={partner.code} />
                    </div>
                    <h4 className="text-[16px] font-extrabold text-penn-navy mb-1.5 group-hover:text-penn-green transition-colors">
                      {partner.name}
                    </h4>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-penn-green bg-penn-green/8 px-2.5 py-1 rounded-full mb-3 w-fit">
                      {partner.pays}
                    </span>
                    <p className="text-[13px] text-penn-body/55 leading-relaxed flex-1">
                      {partner.desc}
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
                  <span className="text-penn-green font-bold">{s.arrow}</span>
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

          <div className="flex flex-wrap justify-center gap-4 max-w-[900px] mx-auto">
            {[
              { text: "Un réseau de 14 partenaires académiques internationaux dans 4 pays.", color: "#2B8FAB" },
              { text: "Des possibilités de poursuite d'études après 1 an, 2 ans, la Licence ou le Master 1 à EBS, selon les partenariats.", color: "#2196F3" },
              { text: "L'accès à des Bachelors, Programmes Grande École, Masters, MSc, Mastères et Maîtrises.", color: "#9C27B0" },
              { text: "Un accompagnement EBS pour préparer le choix du parcours, la candidature et la mobilité internationale.", color: "#FF9800" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-penn-border hover:border-penn-green/20 hover:shadow-sm transition-all duration-300 group w-full md:w-[calc(50%-8px)]"
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

          <div className="flex flex-wrap justify-center gap-4 relative">
            {etapes.map((e, i) => (
              <motion.div
                key={e.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative bg-white rounded-2xl border border-penn-border p-5 text-center hover:shadow-md transition-all duration-300 w-full sm:w-[calc(50%-8px)] lg:w-[calc((100%-64px)/5)]"
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
                <div className="w-10 h-10 rounded-lg bg-penn-green/10 flex items-center justify-center text-penn-green shrink-0">
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
                href="tel:+216 55 582 843"
                className="inline-flex items-center gap-2.5 bg-white text-penn-navy font-bold text-[15px] py-3.5 px-7 rounded-full hover:bg-white/90 transition-all shadow-lg"
              >
                <Phone className="w-4 h-4" />
                +216 55 582 843
              </a>
              <a
                href="mailto:info@ebs.tn"
                className="inline-flex items-center gap-2.5 bg-white/10 text-white font-bold text-[15px] py-3.5 px-7 rounded-full border border-white/20 hover:bg-white/15 transition-all"
              >
                <Mail className="w-4 h-4" />
                info@ebs.tn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
