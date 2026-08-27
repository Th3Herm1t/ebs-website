"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  BookOpen,
  Building2,
  Check,
  ChevronDown,
  Globe,
  Handshake,
  Mail,
  Phone,
  Send,
  Shield,
  Users,
} from "lucide-react";
import { Badge, CtaSection } from "@/components/shared";
import { CountryFlag } from "@/components/shared/CountryFlag";
import { siteConfig } from "@/lib/config";
import { academicPartners } from "@/lib/partenaires/academic-partners";

const avantagesAcademiques = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Vivier d'Étudiants Qualifiés",
    desc: "Nos étudiants bénéficient d'une formation de qualité, de certifications internationales et d'une préparation académique répondant aux standards internationaux.",
    color: "#2B8FAB",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Programmes Complémentaires",
    desc: "Nos licences et nos masters s'articulent parfaitement avec vos cursus. La reconnaissance mutuelle des crédits facilite la mobilité des étudiants.",
    color: "#2196F3",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Rayonnement International",
    desc: "Développez votre présence en Afrique du Nord grâce à un partenaire universitaire tunisien agréé par l'État.",
    color: "#9C27B0",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Cadre Sécurisé",
    desc: "Conventions interuniversitaires, procédures transparentes et suivi académique conjoint garantissent une collaboration durable.",
    color: "#FF9800",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Excellence Académique",
    desc: "EBS est une université privée agréée par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique de Tunisie et conforme au système LMD.",
    color: "#E91E8C",
  },
];

function Field({ label, name, type = "text", placeholder, icon, required }: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  icon?: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">{label}</label>
      <div className="relative">
        {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-penn-body/25">{icon}</div>}
        <input
          type={type}
          name={name}
          required={required}
          className={`w-full py-3 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all ${icon ? "pl-11 pr-4" : "px-4"}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default function PartenairesAcademiquesPage() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    try {
      await fetch(siteConfig.webhookUrl, {
        method: "POST",
        body: (() => { const fd = new FormData(e.currentTarget); fd.append('formId', 'partenaires_academiques'); return fd; })(),
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
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroes/hero-parcours-internationaux.webp"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/55 via-[#1a2035]/50 to-penn-navy/55" />
        <div
          className="absolute inset-0 z-[1] opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #2B8FAB 0%, transparent 60%), radial-gradient(circle at 70% 20%, #2B8FAB 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">
              <Globe className="w-4 h-4" />
              Partenaires Académiques
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[42px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
          >
            Notre réseau
            <br />
            <span className="text-[#2B8FAB]">universitaire</span> international<span className="text-[#2B8FAB]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[17px] md:text-[19px] text-white/70 leading-relaxed max-w-[650px] mb-12"
          >
            14 partenaires académiques en France, au Canada, en Italie, et à Oman. Des institutions d'excellence qui offrent à nos étudiants des opportunités d'études, de mobilité et de doubles diplômes à l'international.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">14</p>
              <p className="text-[12px] text-white/50 font-medium">Universités partenaires</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-[#2B8FAB] leading-none mb-1">4</p>
              <p className="text-[12px] text-white/50 font-medium">Pays</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">11</p>
              <p className="text-[12px] text-white/50 font-medium">En France</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center flex flex-col justify-center h-full">
              <Building2 className="w-10 h-10 md:w-[44px] md:h-[44px] text-[#2B8FAB] mx-auto mb-1" />
              <p className="text-[12px] text-white/50 font-medium">Grandes Écoles</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="relative z-20 -mt-14 pb-0">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <div className="bg-white rounded-2xl border border-penn-border shadow-xl overflow-hidden">
            <div className="grid grid-cols-3 divide-x divide-penn-border/40">
              {[
                { value: "14", label: "Partenaires académiques", icon: <Building2 className="w-5 h-5" />, color: "#2B8FAB" },
                { value: "4", label: "Pays représentés", icon: <Globe className="w-5 h-5" />, color: "#2196F3" },
                { value: "80+", label: "Programmes accessibles", icon: <BookOpen className="w-5 h-5" />, color: "#FF9800" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col items-center justify-center py-7 px-4 text-center"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${stat.color}15` }}>
                    <span style={{ color: stat.color }}>{stat.icon}</span>
                  </div>
                  <p className="text-[26px] font-extrabold text-penn-navy leading-none mb-1">{stat.value}</p>
                  <p className="text-[11px] font-semibold text-penn-body/40 uppercase tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ NOS PARTENAIRES ACADÉMIQUES ═══════════ */}
      <section className="section-padding bg-white pt-16">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <Badge variant="default" size="lg" className="mb-4">Notre réseau</Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15] mb-4">
              Nos partenaires académiques
            </h2>
            <p className="text-[16px] text-penn-body/60 max-w-[620px] mx-auto">
              Des institutions d&apos;excellence qui partagent notre vision : offrir aux étudiants tunisiens une formation de qualité et des opportunités académiques à l'international.
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
                    <h4 className="text-[16px] font-extrabold text-penn-navy mb-1.5 group-hover:text-[#2B8FAB] transition-colors">
                      {partner.name}
                    </h4>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#2B8FAB] bg-[#2B8FAB]/8 px-2.5 py-1 rounded-full mb-3 w-fit">
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

      {/* ═══════════ POURQUOI S'ASSOCIER À EBS ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">Pourquoi EBS ?</Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Pourquoi vous associer à EBS ?
            </h2>
            <p className="text-[16px] text-penn-body mt-3 max-w-[650px] mx-auto">
              Un partenariat gagnant-gagnant au service de votre institution et de nos étudiants.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative hidden md:block aspect-square lg:aspect-auto lg:h-[600px]"
            >
              <div className="absolute top-0 left-0 w-2/3 h-[60%] rounded-2xl overflow-hidden border-4 border-white shadow-xl z-10">
                <Image src="/images/partenaires/students-1.jpg" alt="Étudiants internationaux EBS" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
              </div>
              <div className="absolute bottom-0 right-0 w-[60%] h-[55%] rounded-2xl overflow-hidden border-4 border-white shadow-xl z-20">
                <Image src="/images/partenaires/students-2.jpg" alt="Mobilité étudiante" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
              </div>
              <div className="absolute top-1/4 right-[10%] w-[45%] h-[40%] rounded-2xl overflow-hidden border-4 border-white shadow-lg z-0 opacity-80">
                <Image src="/images/partenaires/students-3.jpg" alt="Partenariats universitaires" fill className="object-cover" sizes="(max-width: 1024px) 33vw, 20vw" />
              </div>
            </motion.div>

            {/* Features */}
            <div className="flex flex-col gap-5">
              {avantagesAcademiques.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex gap-4 bg-white rounded-2xl border border-penn-border p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <span style={{ color: item.color }}>{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-extrabold text-penn-navy mb-1">{item.title}</h3>
                    <p className="text-[14px] text-penn-body leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FORMULAIRE DE PARTENARIAT ACADÉMIQUE ═══════════ */}
      <section id="devenir-partenaire" className="section-padding bg-white">
        <div className="max-w-[800px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-10"
          >
            <Badge size="lg" className="mb-4">Candidature</Badge>
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-3">
              Devenir partenaire académique
            </h2>
            <p className="text-[15px] text-penn-body/50 max-w-[480px] mx-auto">
              Vous représentez une université ou une école supérieure internationale et
              souhaitez établir un partenariat avec EBS ?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="bg-white rounded-2xl border border-penn-border shadow-lg overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formState === "sent" ? (
                <motion.div key="sent" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-16 px-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-5"
                  >
                    <Check className="w-8 h-8 text-[#2B8FAB]" />
                  </motion.div>
                  <h3 className="text-[22px] font-extrabold text-penn-navy mb-2">Candidature envoyée !</h3>
                  <p className="text-[14px] text-penn-body/50 max-w-[350px] mx-auto">
                    Notre équipe étudiera votre dossier et vous contactera rapidement.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-6 text-[#2B8FAB] font-bold text-[14px] hover:underline"
                  >
                    Envoyer une autre candidature
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="p-8 md:p-10">
                  <input type="hidden" name="_subject" value="Candidature Partenaire Académique — EBS" />

                  <div className="space-y-8">
                    {/* Institution */}
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-8 rounded-lg bg-[#2B8FAB]/10 flex items-center justify-center">
                          <Building2 className="w-4 h-4 text-[#2B8FAB]" />
                        </div>
                        <h4 className="text-[15px] font-extrabold text-penn-navy">Votre institution</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Nom de l'institution *" name="institution" placeholder="Université / École" icon={<Building2 className="w-4 h-4" />} required />
                        <Field label="Pays *" name="pays" placeholder="Ex: France, Canada..." icon={<Globe className="w-4 h-4" />} required />
                        <Field label="Site web" name="site_web" placeholder="https://..." icon={<Globe className="w-4 h-4" />} />
                        <Field label="Accréditations" name="accreditations" placeholder="AACSB, EQUIS, AMBA..." icon={<Award className="w-4 h-4" />} />
                      </div>
                    </div>

                    {/* Contact */}
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-8 rounded-lg bg-[#2196F3]/10 flex items-center justify-center">
                          <Phone className="w-4 h-4 text-[#2196F3]" />
                        </div>
                        <h4 className="text-[15px] font-extrabold text-penn-navy">Personne à contacter</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Nom et prénom *" name="contact" placeholder="M. / Mme..." icon={<Users className="w-4 h-4" />} required />
                        <Field label="Fonction" name="fonction" placeholder="Directeur, Doyen..." icon={<Building2 className="w-4 h-4" />} />
                        <Field label="Email *" name="email" type="email" placeholder="email@institution.edu" icon={<Mail className="w-4 h-4" />} required />
                        <Field label="Téléphone" name="telephone" type="tel" placeholder="+..." icon={<Phone className="w-4 h-4" />} />
                      </div>
                    </div>

                    {/* Type */}
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-8 rounded-lg bg-[#FF9800]/10 flex items-center justify-center">
                          <Handshake className="w-4 h-4 text-[#FF9800]" />
                        </div>
                        <h4 className="text-[15px] font-extrabold text-penn-navy">Type de partenariat</h4>
                      </div>
                      <div>
                        <select
                          name="type_partenariat"
                          className="w-full px-4 py-3 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy bg-white focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all"
                        >
                          <option value="echange">Échange d'étudiants</option>
                          <option value="double">Double diplôme</option>
                          <option value="recherche">Recherche conjointe</option>
                          <option value="mobilite">Mobilité enseignante</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-8 rounded-lg bg-[#9C27B0]/10 flex items-center justify-center">
                          <Mail className="w-4 h-4 text-[#9C27B0]" />
                        </div>
                        <h4 className="text-[15px] font-extrabold text-penn-navy">Votre projet</h4>
                      </div>
                      <textarea
                        name="message"
                        rows={5}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-penn-border/30 text-[14px] text-penn-navy placeholder:text-penn-body/25 focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all resize-none"
                        placeholder="Décrivez votre projet de partenariat académique, vos attentes et les synergies envisagées..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="w-full mt-8 py-4 rounded-xl bg-[#2B8FAB] text-white font-bold text-[15px] hover:bg-[#1e7a94] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2B8FAB]/15 disabled:opacity-50 active:scale-[0.98]"
                  >
                    {formState === "sending" ? "Envoi..." : <><Send className="w-5 h-5" /> Envoyer</>}
                  </button>
                  {formState === "error" && (
                    <p className="text-[13px] text-red-500 text-center mt-3">Une erreur est survenue. Veuillez réessayer.</p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CONTACT ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[800px] mx-auto px-5 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-8 h-8 text-[#2B8FAB]" />
            </div>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15] mb-4">
              Une question ?
            </h2>
            <p className="text-[16px] text-penn-body leading-relaxed mb-10 max-w-[600px] mx-auto">
              Contactez directement notre équipe pour échanger sur votre projet de partenariat académique avec EBS.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[500px] mx-auto">
              <a
                href="tel:+216 55 582 843"
                className="flex items-center gap-3 justify-center p-4 bg-white rounded-xl border border-penn-border hover:border-[#2B8FAB]/30 hover:shadow-md transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-[#2B8FAB]" />
                <span className="text-[15px] font-bold text-penn-navy">+216 55 582 843</span>
              </a>
              <a
                href="mailto:info@ebs.tn"
                className="flex items-center gap-3 justify-center p-4 bg-white rounded-xl border border-penn-border hover:border-[#2B8FAB]/30 hover:shadow-md transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-[#2B8FAB]" />
                <span className="text-[15px] font-bold text-penn-navy">info@ebs.tn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaSection
        title="Rejoignez notre réseau universitaire international."
        subtitle="14 partenaires nous font déjà confiance. Et si votre établissement était le prochain ?"
        primaryCta={{ label: "Devenir partenaire", href: "#devenir-partenaire" }}
        secondaryCta={{ label: "Voir nos formations", href: "/nos-programmes" }}
        background="penn-green"
      />
    </>
  );
}
