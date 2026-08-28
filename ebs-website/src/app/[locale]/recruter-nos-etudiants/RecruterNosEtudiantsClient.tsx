"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Badge, CtaSection } from "@/components/shared";
import { Check, GraduationCap, Search, Send, Star, Users } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function RecruterNosEtudiantsPage() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    try {
      await fetch(siteConfig.webhookUrl, {
        method: "POST",
        body: (() => { const fd = new FormData(e.currentTarget); fd.append('formId', 'recruter_nos_etudiants'); return fd; })(),
        headers: { Accept: "application/json" },
      });
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  };

  return (
    <main className="min-h-screen">
      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/heroes/hero-corps-enseignant.webp" alt="" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/60 via-[#1a2035]/50 to-penn-navy/60" />
        <div className="absolute inset-0 z-[1] opacity-[0.03] bg-[radial-gradient(circle_at_50%_70%,_#2B8FAB_0%,_transparent_50%)]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="max-w-[700px]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">
                <div className="w-1 h-1 rounded-full bg-penn-green" />
                Recrutement
              </Badge>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-[44px] md:text-[56px] lg:text-[68px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6">
              Recruter nos<br />
              <span className="text-penn-green">Étudiants</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="text-[17px] md:text-[19px] text-white/60 leading-relaxed max-w-[550px]">
              Trouvez les talents de demain parmi nos étudiants. Stages, alternance, premier emploi :
              déposez votre offre et accédez à notre vivier de compétences.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}>
                <Badge size="lg" className="mb-4">Pourquoi recruter chez EBS ?</Badge>
                <h2 className="text-[26px] md:text-[32px] font-extrabold text-penn-navy mb-6 leading-tight">
                  Des talents<br />
                  <span className="text-penn-green">prêts à l&apos;emploi</span>
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: <GraduationCap className="w-5 h-5" />, title: "Formation d'Excellence", desc: "Nos étudiants sont formés aux standards internationaux avec des certifications reconnues (Google, IBM, Bloomberg...)." },
                    { icon: <Star className="w-5 h-5" />, title: "Compétences Certifiées", desc: "Catalogue v3 vérifié : IA, data, cybersécurité, finance, marketing digital et credentials gratuits." },
                    { icon: <Search className="w-5 h-5" />, title: "Recrutement Simplifié", desc: "Nous diffusons vos offres directement à nos étudiants et organisons des événements de recrutement." },
                    { icon: <Users className="w-5 h-5" />, title: "Profil Adapté", desc: "Licence, Master, spécialisation — nous vous aidons à trouver le profil qui correspond à vos besoins." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-penn-bg-light border border-penn-border/30 hover:border-penn-green/20 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-penn-green/10 flex items-center justify-center shrink-0">
                        <span className="text-penn-green">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-[14px] font-extrabold text-penn-navy mb-1">{item.title}</h4>
                        <p className="text-[13px] text-penn-body/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}>
                <div className="bg-white rounded-2xl border border-penn-border shadow-sm p-8">
                  <Badge size="lg" className="mb-5">Déposer une offre</Badge>
                  <h3 className="text-[20px] font-extrabold text-penn-navy mb-6">Formulaire de recrutement</h3>

                  <AnimatePresence mode="wait">
                    {formState === "sent" ? (
                      <motion.div key="sent" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                        <div className="w-14 h-14 rounded-2xl bg-penn-green/10 flex items-center justify-center mx-auto mb-4">
                          <Check className="w-7 h-7 text-penn-green" />
                        </div>
                        <h4 className="text-[18px] font-extrabold text-penn-navy mb-2">Offre envoyée !</h4>
                        <p className="text-[14px] text-penn-body/60 mb-4">Notre Career Center diffusera votre offre et vous contactera rapidement.</p>
                        <button onClick={() => setFormState("idle")} className="text-penn-green font-bold text-[14px] hover:underline">
                          Déposer une autre offre
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="space-y-4">
                        <input type="hidden" name="_subject" value="Offre de recrutement — EBS" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Field label="Entreprise *" name="entreprise" placeholder="Nom de l'entreprise" required />
                          <Field label="Secteur" name="secteur" placeholder="Ex: Finance, IT, Marketing..." />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Field label="Personne à contacter *" name="contact" placeholder="Nom et prénom" required />
                          <Field label="Fonction" name="fonction" placeholder="Ex: DRH, Recruteur..." />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Field label="Email *" name="email" type="email" placeholder="email@entreprise.com" required />
                          <Field label="Téléphone *" name="telephone" type="tel" placeholder="+216 XX XXX XXX" required />
                        </div>
                        <div>
                          <label className="block text-[13px] font-bold text-penn-navy mb-2">Type d&apos;offre</label>
                          <select name="type_offre" className="w-full px-4 py-3 rounded-xl border border-penn-border text-[14px] text-penn-navy bg-white focus:outline-none focus:border-penn-green focus:ring-2 focus:ring-penn-green/10 transition-all">
                            <option value="stage">Stage (PFE, initiation, perfectionnement)</option>
                            <option value="alternance">Alternance</option>
                            <option value="cdd">CDD</option>
                            <option value="cdi">CDI / Premier emploi</option>
                            <option value="freelance">Freelance / Mission</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[13px] font-bold text-penn-navy mb-2">Profil recherché</label>
                          <select name="profil" className="w-full px-4 py-3 rounded-xl border border-penn-border text-[14px] text-penn-navy bg-white focus:outline-none focus:border-penn-green focus:ring-2 focus:ring-penn-green/10 transition-all">
                            <option value="management">Management</option>
                            <option value="marketing">Marketing & Digital</option>
                            <option value="finance">Finance & Ingénierie Financière</option>
                            <option value="informatique">Informatique — Développement</option>
                            <option value="ia">Informatique — IA</option>
                            <option value="cybersecurite">Informatique — Cybersécurité</option>
                            <option value="crm">CRM & Transformation Digitale</option>
                            <option value="startups">Projets Innovants & Startups</option>
                            <option value="tous">Tous les profils</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[13px] font-bold text-penn-navy mb-2">Intitulé du poste / Description</label>
                          <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-penn-border text-[14px] text-penn-navy placeholder:text-penn-body/30 focus:outline-none focus:border-penn-green focus:ring-2 focus:ring-penn-green/10 transition-all resize-none" placeholder="Décrivez le poste, les missions et les compétences recherchées..." />
                        </div>
                        <button type="submit" disabled={formState === "sending"} className="w-full py-3.5 rounded-xl bg-penn-green text-white font-bold text-[14px] hover:bg-[#1e7a94] transition-all flex items-center justify-center gap-2 shadow-lg shadow-penn-green/15 disabled:opacity-60">
                          {formState === "sending" ? "Envoi en cours..." : <><Send className="w-4 h-4" /> Déposer l&apos;offre</>}
                        </button>
                        {formState === "error" && <p className="text-[13px] text-red-500 text-center">Erreur. Veuillez réessayer.</p>}
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Une question ?"
        subtitle="Notre Career Center est à votre disposition pour vous accompagner."
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
        secondaryCta={{ label: "Voir les formations", href: "/nos-programmes" }}
      />
    </main>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[13px] font-bold text-penn-navy mb-2">{label}</label>
      <input type={type} name={name} required={required} className="w-full px-4 py-3 rounded-xl border border-penn-border text-[14px] text-penn-navy placeholder:text-penn-body/30 focus:outline-none focus:border-penn-green focus:ring-2 focus:ring-penn-green/10 transition-all" placeholder={placeholder} />
    </div>
  );
}
