"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Badge, CtaSection } from "@/components/shared";
import {
  ArrowRight, Briefcase, Building2, Check, GraduationCap,
  Handshake, Mail, Phone, Send, Sparkles, Star, TrendingUp, Users,
} from "lucide-react";

const steps = [
  { step: "01", title: "Vous candidatez", desc: "Remplissez le formulaire avec les informations de votre entreprise et vos besoins." },
  { step: "02", title: "Nous échangeons", desc: "Notre équipe vous contacte pour comprendre vos objectifs et définir le cadre." },
  { step: "03", title: "Convention signée", desc: "Nous formalisons le partenariat et lançons les premières actions." },
];

const existingPartners = [
  { name: "ASTEELFLASH", sector: "Fabrication Électronique", logo: "/images/partenaires/asteelflash.png" },
  { name: "ARFORGHE", sector: "Formation & RH", logo: "/images/partenaires/arforghe.png" },
  { name: "Sopra HR", sector: "Solutions RH", logo: "/images/partenaires/soprahr.png" },
  { name: "ATB", sector: "Banque", logo: "/images/partenaires/atb.png" },
  { name: "Audita", sector: "Audit & Conseil", logo: "/images/partenaires/audita.png" },
  { name: "Satem", sector: "Assurances", logo: "/images/partenaires/satem.png" },
  { name: "Cayon", sector: "Industrie", logo: "/images/partenaires/cayon.png" },
  { name: "Yperyon", sector: "Digital", logo: "/images/partenaires/yperyon.png" },
  { name: "Smart Future", sector: "Technologies", logo: "/images/partenaires/smartfuture.png" },
  { name: "Médianet", sector: "Médias & Communication", logo: "/images/partenaires/medianet.png" },
  { name: "Unifactor", sector: "Services Financiers", logo: "/images/partenaires/unifactor.png" },
];

export default function DevenirPartenairePage() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [selectedType, setSelectedType] = useState("stages");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/heroes/hero-campus.jpg" alt="" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/65 via-[#1a2035]/55 to-penn-navy/65" />
        <div className="absolute inset-0 z-[1] opacity-[0.03] bg-[radial-gradient(circle_at_50%_70%,_#2B8FAB_0%,_transparent_50%)]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="max-w-[700px]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">
                <div className="w-1 h-1 rounded-full bg-[#2B8FAB]" />
                Partenaires Économiques
              </Badge>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-[44px] md:text-[56px] lg:text-[68px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6">
              Devenir<br />
              <span className="text-[#2B8FAB]">Partenaire</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="text-[17px] md:text-[19px] text-white/60 leading-relaxed max-w-[550px]">
              Rejoignez le réseau des partenaires économiques d&apos;EBS. Accédez à nos talents, 
              bénéficiez de notre expertise et construisez ensemble l&apos;avenir.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-20 -mt-14 pb-0">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <div className="bg-white rounded-2xl border border-penn-border shadow-xl overflow-hidden">
            <div className="grid grid-cols-3 divide-x divide-penn-border/40">
              {[
                { value: "500+", label: "Entreprises partenaires", icon: <Building2 className="w-5 h-5" />, color: "#2B8FAB" },
                { value: "90%+", label: "Insertion professionnelle", icon: <TrendingUp className="w-5 h-5" />, color: "#2196F3" },
                { value: "10+", label: "Secteurs représentés", icon: <Briefcase className="w-5 h-5" />, color: "#FF9800" },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex flex-col items-center justify-center py-7 px-4 text-center">
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

      {/* How it works */}
      <section className="section-padding bg-white pt-16">
        <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
          <div className="text-center mb-14">
            <Badge size="lg" className="mb-4">Processus</Badge>
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-penn-navy mb-3">
              Comment devenir partenaire ?
            </h2>
            <p className="text-[15px] text-penn-body/50 max-w-[500px] mx-auto">
              Un processus simple en 3 étapes pour rejoindre notre réseau.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            {steps.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.1 }}
                className="relative bg-white rounded-2xl border border-penn-border/60 p-6 text-center hover:shadow-lg hover:border-[#2B8FAB]/30 transition-all group"
              >
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-penn-border/30 z-0">
                    <div className="absolute right-0 -top-1 w-2 h-2 border-t-2 border-r-2 border-penn-border/30 rotate-45" />
                  </div>
                )}
                <div className="w-12 h-12 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2B8FAB]/20 transition-colors">
                  <span className="text-[16px] font-extrabold text-[#2B8FAB]">{s.step}</span>
                </div>
                <h4 className="text-[15px] font-extrabold text-penn-navy mb-2">{s.title}</h4>
                <p className="text-[13px] text-penn-body/55 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[800px] mx-auto px-5 lg:px-12">
          <div className="text-center mb-10">
            <Badge size="lg" className="mb-4">Candidature</Badge>
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-3">
              Formulaire de partenariat
            </h2>
            <p className="text-[15px] text-penn-body/50 max-w-[480px] mx-auto">
              Remplissez ce formulaire et notre équipe vous contactera sous 48h.
            </p>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            className="bg-white rounded-2xl border border-penn-border shadow-lg overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formState === "sent" ? (
                <motion.div key="sent" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-16 px-8 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-5"
                  >
                    <Check className="w-8 h-8 text-[#2B8FAB]" />
                  </motion.div>
                  <h3 className="text-[22px] font-extrabold text-penn-navy mb-2">Candidature envoyée !</h3>
                  <p className="text-[14px] text-penn-body/50 max-w-[350px] mx-auto">Notre équipe étudiera votre dossier et vous contactera rapidement.</p>
                  <button onClick={() => setFormState("idle")} className="mt-6 text-[#2B8FAB] font-bold text-[14px] hover:underline">
                    Envoyer une autre candidature
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="p-8 md:p-10">
                  <input type="hidden" name="_subject" value="Candidature Partenaire — EBS" />

                  <div className="space-y-8">
                    {/* Section 1: Entreprise */}
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-8 rounded-lg bg-[#2B8FAB]/10 flex items-center justify-center">
                          <Building2 className="w-4 h-4 text-[#2B8FAB]" />
                        </div>
                        <h4 className="text-[15px] font-extrabold text-penn-navy">Votre entreprise</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Nom de l'entreprise *" name="entreprise" placeholder="Raison sociale" icon={<Building2 className="w-4 h-4" />} required />
                        <Field label="Secteur d'activité *" name="secteur" placeholder="Finance, IT, Industrie..." icon={<Briefcase className="w-4 h-4" />} required />
                        <Field label="Site web" name="site_web" placeholder="https://..." icon={<span className="text-[11px] font-bold">🌐</span>} />
                        <Field label="Effectif" name="effectif" placeholder="Nombre d'employés" icon={<Users className="w-4 h-4" />} />
                      </div>
                    </div>

                    {/* Section 2: Contact */}
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-8 rounded-lg bg-[#2196F3]/10 flex items-center justify-center">
                          <Phone className="w-4 h-4 text-[#2196F3]" />
                        </div>
                        <h4 className="text-[15px] font-extrabold text-penn-navy">Personne à contacter</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Nom et prénom *" name="contact" placeholder="M. / Mme..." icon={<Users className="w-4 h-4" />} required />
                        <Field label="Fonction" name="fonction" placeholder="DRH, Directeur..." icon={<Briefcase className="w-4 h-4" />} />
                        <Field label="Email *" name="email" type="email" placeholder="email@entreprise.com" icon={<Mail className="w-4 h-4" />} required />
                        <Field label="Téléphone *" name="telephone" type="tel" placeholder="+216 XX XXX XXX" icon={<Phone className="w-4 h-4" />} required />
                      </div>
                    </div>

                    {/* Section 3: Type */}
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-8 rounded-lg bg-[#FF9800]/10 flex items-center justify-center">
                          <Handshake className="w-4 h-4 text-[#FF9800]" />
                        </div>
                        <h4 className="text-[15px] font-extrabold text-penn-navy">Type de partenariat</h4>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                          { value: "stages", label: "Stages & Alternance", icon: <GraduationCap className="w-4 h-4" /> },
                          { value: "emploi", label: "Recrutement", icon: <Users className="w-4 h-4" /> },
                          { value: "projets", label: "Projets", icon: <Star className="w-4 h-4" /> },
                          { value: "formation", label: "Formation Continue", icon: <Briefcase className="w-4 h-4" /> },
                          { value: "events", label: "Événements", icon: <Sparkles className="w-4 h-4" /> },
                          { value: "autre", label: "Autre", icon: <Handshake className="w-4 h-4" /> },
                        ].map((opt) => {
                          const active = selectedType === opt.value;
                          return (
                            <label
                              key={opt.value}
                              className={`flex flex-col items-center gap-2 py-4 px-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                                active
                                  ? "border-[#2B8FAB] bg-[#2B8FAB]/5 shadow-sm"
                                  : "border-penn-border/30 hover:border-penn-border/60 hover:bg-penn-bg-light"
                              }`}
                            >
                              <input type="radio" name="type_partenariat" value={opt.value} checked={active} onChange={() => setSelectedType(opt.value)} className="sr-only" />
                              <span className={active ? "text-[#2B8FAB]" : "text-penn-body/30"}>{opt.icon}</span>
                              <span className={`text-[12px] font-bold leading-tight text-center ${active ? "text-penn-navy" : "text-penn-body/50"}`}>{opt.label}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* Section 4: Message */}
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
                        placeholder="Décrivez votre projet de partenariat, vos besoins et vos attentes..."
                      />
                    </div>
                  </div>

                  <button type="submit" disabled={formState === "sending"}
                    className="w-full mt-8 py-4 rounded-xl bg-[#2B8FAB] text-white font-bold text-[15px] hover:bg-[#1e7a94] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2B8FAB]/15 disabled:opacity-50 active:scale-[0.98]"
                  >
                    {formState === "sending" ? "Envoi..." : <><Send className="w-5 h-5" /> Envoyer la candidature</>}
                  </button>
                  {formState === "error" && <p className="text-[13px] text-red-500 text-center mt-3">Une erreur est survenue. Veuillez réessayer.</p>}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Existing partners */}
      <section className="section-padding bg-white">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <div className="text-center mb-10">
            <Badge size="lg" className="mb-4">Ils nous font confiance</Badge>
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-3">
              Nos partenaires économiques
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {existingPartners.map((partner, i) => (
              <motion.div key={partner.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20px" }} transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl p-5 text-center border border-penn-border/30 hover:border-[#2B8FAB]/20 hover:shadow-md transition-all group"
              >
                <div className="h-14 flex items-center justify-center mb-3">
                  <img src={partner.logo} alt={partner.name} className="max-h-10 max-w-[100px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                </div>
                <p className="text-[12px] font-bold text-penn-navy">{partner.name}</p>
                <p className="text-[10px] text-penn-body/40 mt-0.5">{partner.sector}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Déjà partenaire ?"
        subtitle="Contactez-nous directement pour toute question."
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
        secondaryCta={{ label: "Voir nos formations", href: "/licences" }}
      />
    </main>
  );
}

function Field({ label, name, type = "text", placeholder, icon, required }: { label: string; name: string; type?: string; placeholder: string; icon?: React.ReactNode; required?: boolean }) {
  return (
    <div>
      <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">{label}</label>
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-penn-body/25">
            {icon}
          </div>
        )}
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
