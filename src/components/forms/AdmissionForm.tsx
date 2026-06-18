"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronLeft, ChevronRight, GraduationCap, Send, X } from "lucide-react";

type FormType = "licence" | "master" | "parcours";

interface AdmissionFormProps {
  type: FormType;
  programmeName?: string;
}

const bacSections = [
  "Sciences Expérimentales",
  "Mathématiques",
  "Techniques",
  "Sciences Informatiques",
  "Économie & Gestion",
  "Lettres",
  "Sport",
  "Autre",
];

const bacPromotions = Array.from({ length: 8 }, (_, i) => `${new Date().getFullYear() - i}`);

const countries = [
  "France",
  "Canada",
  "Italie",
  "Je ne sais pas encore",
];

export function AdmissionForm({ type, programmeName }: AdmissionFormProps) {
  const [step, setStep] = useState(0);
  const [blocked, setBlocked] = useState(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const [data, setData] = useState({
    profil: "",
    bacSection: "",
    bacPromo: "",
    pays: "",
    masterYear: "",
    masterSpecialite: "",
    masterEtablissement: "",
    prenom: "",
    nom: "",
    email: "",
    phone: "",
  });

  const isLicence = type === "licence";
  const isMaster = type === "master";
  const isParcours = type === "parcours";

  const isBlocked = blocked;

  const totalSteps = isMaster ? 3 : 3;

  const canProceed = () => {
    if (step === 0) return data.prenom !== "" && data.nom !== "" && data.email !== "" && data.phone !== "";
    if (step === 1) return data.profil !== "";
    if (step === 2) {
      if (isMaster) return data.masterYear !== "" && data.masterSpecialite !== "" && data.masterEtablissement !== "";
      return !blocked;
    }
    return false;
  };

  const handleNext = () => {
    if (step === totalSteps - 1) return;
    if (step === 1) {
      if (isLicence || isParcours) {
        if (data.profil === "nobacc") { setBlocked(true); return; }
      }
    }
    setStep((s) => s + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    try {
      await fetch("https://formspree.io/f/xeojaqdr", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: `Admission ${type === "licence" ? "Licence" : type === "master" ? "Master" : "Parcours International"} — EBS`, programme: programmeName }),
      });
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  };

  const update = (field: string, value: string) => setData((prev) => ({ ...prev, [field]: value }));

  const progress = ((step + 1) / totalSteps) * 100;

  const stepLabels = isMaster
    ? ["Coordonnées", "Profil", "Formation"]
    : ["Coordonnées", "Profil", "Baccalauréat"];

  if (formState === "sent") {
    return (
      <div className="bg-white rounded-2xl border border-penn-border shadow-lg overflow-hidden">
        <div className="bg-penn-green px-6 py-4">
          <h3 className="text-white font-extrabold text-[16px]">Candidature envoyée !</h3>
        </div>
        <div className="p-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-penn-green/10 flex items-center justify-center mx-auto mb-4">
            <Check className="w-7 h-7 text-penn-green" />
          </div>
          <p className="text-[14px] text-penn-body leading-relaxed">
            Notre équipe vous répond sous 24h.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-penn-border shadow-lg overflow-hidden">
      <div className="bg-penn-green px-6 py-4">
        <h3 className="text-white font-extrabold text-[16px]">
          {isLicence && "Pré-inscription Licence"}
          {isMaster && "Pré-inscription Master"}
          {isParcours && "Pré-inscription Parcours International"}
        </h3>
        <p className="text-white/80 text-[13px] mt-0.5">Réponse sous 24h · Gratuit · Sans engagement</p>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-gray-100">
        <motion.div className="h-full bg-penn-green" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
      </div>

      {/* Step labels */}
      <div className="flex items-center justify-between px-6 pt-5 pb-2">
        {stepLabels.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold transition-colors ${i <= step ? "bg-penn-green text-white" : "bg-gray-100 text-penn-body/30"}`}>
              {i < step ? <Check className="w-3 h-3" /> : i + 1}
            </div>
            <span className={`text-[12px] font-semibold hidden sm:inline transition-colors ${i <= step ? "text-penn-navy" : "text-penn-body/30"}`}>
              {label}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        <AnimatePresence mode="wait">
          {isBlocked ? (
            <motion.div key="blocked" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="py-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                <X className="w-7 h-7 text-red-500" />
              </div>
              <h4 className="text-[16px] font-extrabold text-penn-navy mb-2">Inscription non disponible</h4>
              <p className="text-[13px] text-penn-body/60 leading-relaxed max-w-[300px] mx-auto">
                Ce programme requiert un baccalauréat ou équivalent. Contactez-nous pour étudier les alternatives.
              </p>
              <a href="tel:+21653355196" className="inline-block mt-4 text-[13px] font-bold text-penn-green hover:underline">
                +216 53 355 196
              </a>
            </motion.div>
          ) : (
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
              {/* Step 0: Contact info */}
              {step === 0 && (
                <div className="space-y-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <input value={data.prenom} onChange={(e) => update("prenom", e.target.value)} required placeholder="Prénom *" className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-penn-green focus:ring-4 focus:ring-penn-green/5 transition-all" />
                    <input value={data.nom} onChange={(e) => update("nom", e.target.value)} required placeholder="Nom *" className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-penn-green focus:ring-4 focus:ring-penn-green/5 transition-all" />
                  </div>
                  <input value={data.email} onChange={(e) => update("email", e.target.value)} type="email" required placeholder="Email *" className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-penn-green focus:ring-4 focus:ring-penn-green/5 transition-all" />
                  <input value={data.phone} onChange={(e) => update("phone", e.target.value)} type="tel" required placeholder="Téléphone / WhatsApp *" className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-penn-green focus:ring-4 focus:ring-penn-green/5 transition-all" />
                </div>
              )}

              {/* Step 1: Profil */}
              {step === 1 && (
                <div className="space-y-3">
                  <p className="text-[13px] font-bold text-penn-body/50 uppercase tracking-wide mb-3">Vous êtes</p>
                  <button type="button" onClick={() => update("profil", "parent")} className={`w-full text-left p-3.5 rounded-xl border-2 text-[14px] font-semibold transition-all ${data.profil === "parent" ? "border-penn-green bg-penn-green/5 text-penn-green" : "border-penn-border/30 text-penn-navy hover:border-penn-green/30"}`}>
                    Parent
                  </button>
                  <button type="button" onClick={() => update("profil", "bachelier")} className={`w-full text-left p-3.5 rounded-xl border-2 text-[14px] font-semibold transition-all ${data.profil === "bachelier" ? "border-penn-green bg-penn-green/5 text-penn-green" : "border-penn-border/30 text-penn-navy hover:border-penn-green/30"}`}>
                    Bachelier
                  </button>
                  <button type="button" onClick={() => update("profil", "etudiant")} className={`w-full text-left p-3.5 rounded-xl border-2 text-[14px] font-semibold transition-all ${data.profil === "etudiant" ? "border-penn-green bg-penn-green/5 text-penn-green" : "border-penn-border/30 text-penn-navy hover:border-penn-green/30"}`}>
                    Étudiant
                  </button>
                  {(isLicence || isParcours) && (
                    <button type="button" onClick={() => { update("profil", "nobacc"); setBlocked(true); }} className={`w-full text-left p-3.5 rounded-xl border-2 text-[14px] font-semibold transition-all ${data.profil === "nobacc" ? "border-red-300 bg-red-50 text-red-500" : "border-penn-border/30 text-penn-body hover:border-red-200"}`}>
                      Je n&apos;ai pas le bac
                    </button>
                  )}
                  {isMaster && (
                    <button type="button" onClick={() => update("profil", "jeune-pro")} className={`w-full text-left p-3.5 rounded-xl border-2 text-[14px] font-semibold transition-all ${data.profil === "jeune-pro" ? "border-penn-green bg-penn-green/5 text-penn-green" : "border-penn-border/30 text-penn-navy hover:border-penn-green/30"}`}>
                      Jeune professionnel
                    </button>
                  )}
                </div>
              )}

              {/* Step 2: Bac info (licence/parcours) or Formation info (master) */}
              {step === 2 && !isBlocked && (
                <div className="space-y-4">
                  {(isLicence || isParcours) && (
                    <>
                      <div>
                        <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">{data.profil === "parent" ? "Promotion du bac de votre enfant" : "Promotion du bac"}</label>
                        <select value={data.bacPromo} onChange={(e) => update("bacPromo", e.target.value)} className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy bg-white focus:outline-none focus:border-penn-green focus:ring-4 focus:ring-penn-green/5 transition-all appearance-none">
                          <option value="">Sélectionnez</option>
                          {bacPromotions.map((p) => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">{data.profil === "parent" ? "Section du bac de votre enfant" : "Section du bac"}</label>
                        <select value={data.bacSection} onChange={(e) => update("bacSection", e.target.value)} className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy bg-white focus:outline-none focus:border-penn-green focus:ring-4 focus:ring-penn-green/5 transition-all appearance-none">
                          <option value="">Sélectionnez</option>
                          {bacSections.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      {isParcours && (
                        <div>
                          <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Pays visé</label>
                          <select value={data.pays} onChange={(e) => update("pays", e.target.value)} className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy bg-white focus:outline-none focus:border-penn-green focus:ring-4 focus:ring-penn-green/5 transition-all appearance-none">
                            <option value="">Sélectionnez</option>
                            {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                      )}
                    </>
                  )}
                  {isMaster && (
                    <>
                      <div>
                        <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Année d&apos;obtention de la licence</label>
                        <input value={data.masterYear} onChange={(e) => update("masterYear", e.target.value)} placeholder="Ex: 2024" className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-penn-green focus:ring-4 focus:ring-penn-green/5 transition-all" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Spécialité de la licence</label>
                        <input value={data.masterSpecialite} onChange={(e) => update("masterSpecialite", e.target.value)} placeholder="Ex: Marketing, Finance, Informatique..." className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-penn-green focus:ring-4 focus:ring-penn-green/5 transition-all" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Établissement de la licence</label>
                        <input value={data.masterEtablissement} onChange={(e) => update("masterEtablissement", e.target.value)} placeholder="Nom de l'université / école" className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-penn-green focus:ring-4 focus:ring-penn-green/5 transition-all" />
                      </div>
                    </>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        {!isBlocked && (
          <div className="flex items-center justify-between mt-6">
            {step > 0 ? (
              <button type="button" onClick={() => setStep((s) => s - 1)} className="inline-flex items-center gap-1.5 text-[13px] font-bold text-penn-body/50 hover:text-penn-navy transition-colors">
                <ChevronLeft className="w-4 h-4" /> Retour
              </button>
            ) : <div />}
            {step < totalSteps - 1 ? (
              <button type="button" onClick={handleNext} disabled={!canProceed()} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-penn-green text-white font-bold text-[13px] hover:bg-penn-green/90 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                Suivant <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button type="submit" disabled={formState === "sending" || !canProceed()} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-penn-green text-white font-bold text-[13px] hover:bg-penn-green/90 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                {formState === "sending" ? "Envoi..." : <><Send className="w-4 h-4" /> Envoyer</>}
              </button>
            )}
          </div>
        )}

        {formState === "error" && <p className="text-[12px] text-red-500 text-center mt-3">Une erreur est survenue. Veuillez réessayer.</p>}
      </form>
    </div>
  );
}
