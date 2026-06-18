"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  Check,
  Send,
  FileText,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { Badge } from "@/components/shared";
import { licences } from "@/lib/programmes/licences";
import { masters } from "@/lib/programmes/masters";

const allProgrammes = Object.values(licences)
  .concat(Object.values(masters))
  .map((p) => ({
    slug: p.slug,
    title: p.title,
    niveau: p.niveau,
    duree: p.duree,
    totalCerts: p.totalCerts,
    color: p.color,
    type: p.type,
  }));

const stepLabels = [
  { full: "Informations", short: "Infos" },
  { full: "Programme", short: "Prog." },
  { full: "Documents", short: "Docs" },
  { full: "Confirmation", short: "Confirm." },
];

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  programme: string;
  message: string;
}

const initialFormData: FormData = {
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  programme: "",
  message: "",
};

const STORAGE_KEY = "ebs-preinscription";

export default function PreinscriptionPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...initialFormData, ...JSON.parse(saved) };
      }
    } catch {
      /* ignore */
    }
    return initialFormData;
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fileNames, setFileNames] = useState<{ bac: string; cv: string }>({
    bac: "",
    cv: "",
  });

  const saveToStorage = useCallback((data: FormData) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      /* ignore */
    }
  }, []);

  const updateField = (field: keyof FormData, value: string) => {
    const next = { ...formData, [field]: value };
    setFormData(next);
    saveToStorage(next);
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  };

  const validateStep = (index: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (index === 0) {
      if (!formData.nom.trim()) newErrors.nom = "Ce champ est requis";
      if (!formData.prenom.trim()) newErrors.prenom = "Ce champ est requis";
      if (!formData.email.trim()) {
        newErrors.email = "Ce champ est requis";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Adresse email invalide";
      }
      if (!formData.telephone.trim()) newErrors.telephone = "Ce champ est requis";
    }

    if (index === 1) {
      if (!formData.programme) newErrors.programme = "Veuillez sélectionner un programme";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goNext = () => {
    if (!validateStep(step)) return;
    if (step < 3) setStep(step + 1);
  };

  const goPrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;
    setSubmitting(true);

    try {
      await fetch("https://formspree.io/f/xeojaqdr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch {
      /* offline-safe */
    }

    localStorage.removeItem(STORAGE_KEY);
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClasses =
    "w-full h-12 px-4 bg-white border border-penn-border rounded-xl text-[15px] text-penn-navy placeholder:text-penn-body/40 focus:outline-none focus:border-[#2B8FAB] focus:bg-white focus:shadow-md transition-all duration-300";
  const errorClasses = "border-red-400 focus:border-red-400";

  const selectedProgramme = allProgrammes.find(
    (p) => p.slug === formData.programme
  );

  return (
    <>
      {/* ═══════════ IMMERSIVE HERO ═══════════ */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-penn-navy via-[#1a2035] to-penn-navy" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #2B8FAB 0%, transparent 60%), radial-gradient(circle at 70% 20%, #2B8FAB 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              size="lg"
              className="mb-6 border-white/20 text-white/80 mx-auto"
            >
              3 minutes · 4 étapes
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[42px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
          >
            Préinscription
            <br />
            <span className="text-[#2B8FAB]">en ligne</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[17px] md:text-[18px] text-white/70 leading-relaxed max-w-[500px] mx-auto"
          >
            Remplis le formulaire ci-dessous. Notre équipe te contactera sous
            48h pour finaliser ton inscription.
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </section>

      {/* ═══════════ FORM ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[700px] mx-auto px-5 lg:px-12">
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              {stepLabels.map((label, i) => (
                <div
                  key={label.full}
                  className="flex items-center gap-1.5 sm:gap-2"
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold transition-all duration-300 ${
                      i <= step
                        ? "bg-[#2B8FAB] text-white"
                        : "bg-penn-navy/10 text-penn-body"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="text-xs font-medium text-penn-body hidden sm:block">
                    {label.full}
                  </span>
                  <span className="text-xs font-medium text-penn-body sm:hidden">
                    {label.short}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-1.5 bg-penn-navy/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#2B8FAB] rounded-full"
                animate={{ width: `${((step + 1) / 4) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-penn-border p-6 lg:p-10 shadow-sm"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-[#2B8FAB]" />
                </div>
                <h2 className="text-[28px] font-extrabold text-penn-navy mb-4">
                  Préinscription envoyée !
                </h2>
                <p className="text-[16px] text-penn-body leading-relaxed mb-8 max-w-[400px] mx-auto">
                  Merci ! Notre équipe te contactera sous 48h pour finaliser ton
                  inscription.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://wa.me/21629582835"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[14px] font-bold text-[#2B8FAB] hover:underline"
                  >
                    Nous contacter sur WhatsApp
                    <span>→</span>
                  </a>
                  <Link
                    href="/nos-programmes"
                    className="inline-flex items-center gap-2 text-[14px] font-bold text-penn-navy hover:text-[#2B8FAB] transition-colors"
                  >
                    Retour aux programmes
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <AnimatePresence mode="wait">
                  {/* Step 1: Personal Info */}
                  {step === 0 && (
                    <motion.div
                      key="step-0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h2 className="text-[22px] font-extrabold text-penn-navy mb-6">
                        Tes informations
                      </h2>
                      <div className="space-y-5">
                        <div>
                          <label className="block text-[14px] font-bold text-penn-navy mb-2">
                            Nom <span className="text-[#2B8FAB]">*</span>
                          </label>
                          <input
                            type="text"
                            className={`${inputClasses} ${errors.nom ? errorClasses : ""}`}
                            placeholder="Ex : Ben Ali"
                            value={formData.nom}
                            onChange={(e) => updateField("nom", e.target.value)}
                            autoComplete="family-name"
                          />
                          {errors.nom && (
                            <p className="text-[12px] text-red-500 mt-1">
                              {errors.nom}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-[14px] font-bold text-penn-navy mb-2">
                            Prénom <span className="text-[#2B8FAB]">*</span>
                          </label>
                          <input
                            type="text"
                            className={`${inputClasses} ${errors.prenom ? errorClasses : ""}`}
                            placeholder="Ex : Amine"
                            value={formData.prenom}
                            onChange={(e) =>
                              updateField("prenom", e.target.value)
                            }
                            autoComplete="given-name"
                          />
                          {errors.prenom && (
                            <p className="text-[12px] text-red-500 mt-1">
                              {errors.prenom}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-[14px] font-bold text-penn-navy mb-2">
                            Email <span className="text-[#2B8FAB]">*</span>
                          </label>
                          <input
                            type="email"
                            className={`${inputClasses} ${errors.email ? errorClasses : ""}`}
                            placeholder="amine@email.com"
                            value={formData.email}
                            onChange={(e) =>
                              updateField("email", e.target.value)
                            }
                            autoComplete="email"
                          />
                          {errors.email && (
                            <p className="text-[12px] text-red-500 mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-[14px] font-bold text-penn-navy mb-2">
                            Téléphone <span className="text-[#2B8FAB]">*</span>
                          </label>
                          <input
                            type="tel"
                            className={`${inputClasses} ${errors.telephone ? errorClasses : ""}`}
                            placeholder="+216 XX XXX XXX"
                            value={formData.telephone}
                            onChange={(e) =>
                              updateField("telephone", e.target.value)
                            }
                            autoComplete="tel"
                          />
                          {errors.telephone && (
                            <p className="text-[12px] text-red-500 mt-1">
                              {errors.telephone}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Programme Selection */}
                  {step === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h2 className="text-[22px] font-extrabold text-penn-navy mb-6">
                        Choisis ton programme
                      </h2>
                      <div className="space-y-3">
                        {allProgrammes.map((prog) => (
                          <label
                            key={prog.slug}
                            className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                              formData.programme === prog.slug
                                ? "border-[#2B8FAB] bg-[#2B8FAB]/5 shadow-sm"
                                : "border-penn-border hover:border-[#2B8FAB]/30"
                            }`}
                          >
                            <input
                              type="radio"
                              name="programme"
                              value={prog.slug}
                              checked={formData.programme === prog.slug}
                              onChange={(e) =>
                                updateField("programme", e.target.value)
                              }
                              className="mt-1 accent-[#2B8FAB]"
                            />
                            <div className="flex-1">
                              <span className="font-bold text-[15px] text-penn-navy">
                                {prog.title}
                              </span>
                              <div className="flex items-center gap-2 mt-1">
                                <span
                                  className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                                  style={{
                                    backgroundColor: `${prog.color}15`,
                                    color: prog.color,
                                  }}
                                >
                                  {prog.niveau}
                                </span>
                                <span className="text-[12px] text-penn-body">
                                  {prog.duree}
                                </span>
                                <span className="text-[12px] text-penn-body">
                                  ·
                                </span>
                                <span className="text-[12px] text-penn-body">
                                  {prog.totalCerts} certifications
                                </span>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.programme && (
                        <p className="text-[12px] text-red-500 mt-2">
                          {errors.programme}
                        </p>
                      )}
                    </motion.div>
                  )}

                  {/* Step 3: Documents */}
                  {step === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h2 className="text-[22px] font-extrabold text-penn-navy mb-2">
                        Documents
                      </h2>
                      <p className="text-[14px] text-penn-body mb-6">
                        Optionnel à ce stade. Tu pourras les envoyer plus tard.
                      </p>
                      <div className="space-y-5">
                        <div>
                          <label className="block text-[14px] font-bold text-penn-navy mb-2">
                            Relevé de notes du bac
                          </label>
                          <div className="relative">
                            <input
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              onChange={(e) =>
                                setFileNames((prev) => ({
                                  ...prev,
                                  bac: e.target.files?.[0]?.name || "",
                                }))
                              }
                            />
                            <div className="w-full h-12 px-4 bg-white border border-penn-border rounded-xl text-[14px] text-penn-body flex items-center justify-between">
                              <span
                                className={
                                  fileNames.bac ? "text-penn-navy" : ""
                                }
                              >
                                {fileNames.bac
                                  ? fileNames.bac
                                  : "Choisir un fichier..."}
                              </span>
                              <FileText className="w-4 h-4 text-penn-body/40" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-[14px] font-bold text-penn-navy mb-2">
                            CV (optionnel)
                          </label>
                          <div className="relative">
                            <input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              onChange={(e) =>
                                setFileNames((prev) => ({
                                  ...prev,
                                  cv: e.target.files?.[0]?.name || "",
                                }))
                              }
                            />
                            <div className="w-full h-12 px-4 bg-white border border-penn-border rounded-xl text-[14px] text-penn-body flex items-center justify-between">
                              <span
                                className={
                                  fileNames.cv ? "text-penn-navy" : ""
                                }
                              >
                                {fileNames.cv
                                  ? fileNames.cv
                                  : "Choisir un fichier..."}
                              </span>
                              <FileText className="w-4 h-4 text-penn-body/40" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-[14px] font-bold text-penn-navy mb-2">
                            Message (optionnel)
                          </label>
                          <textarea
                            rows={4}
                            className={`${inputClasses} h-auto py-3 resize-none`}
                            placeholder="Votre message..."
                            value={formData.message}
                            onChange={(e) =>
                              updateField("message", e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Confirmation */}
                  {step === 3 && (
                    <motion.div
                      key="step-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-5">
                          <Check className="w-8 h-8 text-[#2B8FAB]" />
                        </div>
                        <h2 className="text-[22px] font-extrabold text-penn-navy mb-3">
                          Récapitulatif
                        </h2>
                        <p className="text-[14px] text-penn-body">
                          Vérifie tes informations avant d&apos;envoyer.
                        </p>
                      </div>

                      <div className="bg-penn-bg-light border border-penn-border rounded-xl p-6 space-y-3">
                        {[
                          { key: "nom", label: "Nom" },
                          { key: "prenom", label: "Prénom" },
                          { key: "email", label: "Email" },
                          { key: "telephone", label: "Téléphone" },
                        ].map(({ key, label }) => (
                          <div
                            key={key}
                            className="flex justify-between text-[14px]"
                          >
                            <span className="text-penn-body">{label}</span>
                            <span className="font-medium text-penn-navy">
                              {formData[key as keyof FormData] || "—"}
                            </span>
                          </div>
                        ))}
                        <div className="border-t border-penn-border pt-3 flex justify-between text-[14px]">
                          <span className="text-penn-body">Programme</span>
                          <span className="font-medium text-penn-navy text-right max-w-[60%]">
                            {selectedProgramme?.title || "—"}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation buttons */}
                <div className="flex items-center justify-between mt-10 pt-6 border-t border-penn-border">
                  <button
                    type="button"
                    onClick={goPrev}
                    className={`inline-flex items-center gap-2 px-6 h-12 text-[14px] font-bold text-penn-body hover:text-penn-navy transition-colors ${
                      step === 0 ? "invisible" : ""
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Retour
                  </button>

                  <div className="ml-auto flex gap-3">
                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={goNext}
                        className="inline-flex items-center gap-2 bg-[#2B8FAB] text-white font-bold text-[14px] py-3 px-8 rounded-full hover:bg-[#2B8FAB]/90 transition-all duration-300 shadow-lg shadow-[#2B8FAB]/20"
                      >
                        Suivant
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center gap-2 bg-[#2B8FAB] text-white font-bold text-[14px] py-3 px-8 rounded-full hover:bg-[#2B8FAB]/90 transition-all duration-300 shadow-lg shadow-[#2B8FAB]/20 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Envoyer ma préinscription
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}