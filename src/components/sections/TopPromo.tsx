"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Clock, Phone, Send, X, Check } from "lucide-react";
import { useTranslations } from 'next-intl';
import { cn } from "@/lib/utils";

const timeSlots = [
  { label: "Ce matin", sub: "9h – 12h", value: "morning" },
  { label: "Cet après-midi", sub: "14h – 17h", value: "afternoon" },
  { label: "Ce soir", sub: "17h – 19h", value: "evening" },
];

export default function TopPromo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const t = useTranslations('HomePage.toppromo');

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  const validatePhone = (val: string) => {
    const digits = val.replace(/\D/g, "");
    if (digits.length < 8) return "Numéro trop court";
    if (digits.length > 15) return "Numéro trop long";
    return "";
  };

  const submitCallback = async (urgent: boolean) => {
    const err = validatePhone(phone);
    if (err) { setError(err); return; }
    setError("");
    setFormState("sending");
    try {
      await fetch("https://formspree.io/f/xeojaqdr", {
        method: "POST",
        body: JSON.stringify({
          phone,
          slot: urgent ? "immediate" : selectedSlot,
          urgent,
          _subject: urgent ? "Rappel immédiat — EBS" : `Rappel planifié (${selectedSlot}) — EBS`,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } catch {}
    setFormState("sent");
  };

  const resetModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setSelectedSlot("");
      setPhone("");
      setError("");
      setFormState("idle");
    }, 300);
  };

  const promos = [
    {
      id: "brochure",
      title: t('p1.title'),
      desc: t('p1.desc'),
      ctaText: t('p1.btn'),
      bgColor: "bg-[#264653]",
      link: "/brochures",
      image: "/images/toppromo/brochure.jpg",
    },
    {
      id: "whatsapp",
      title: t('p2.title'),
      desc: t('p2.desc'),
      ctaText: t('p2.btn'),
      bgColor: "bg-[#2B8FAB]",
      link: "",
      image: "/images/toppromo/candidature.jpg",
    },
    {
      id: "apply",
      title: t('p3.title'),
      desc: t('p3.desc'),
      ctaText: t('p3.btn'),
      bgColor: "bg-[#f4a261]",
      link: "/preinscription",
      image: "/images/toppromo/conseiller.jpg",
    },
  ];

  return (
    <>
      <section className="pb-[50px]" ref={ref}>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {promos.map((promo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative p-[60px] border-r border-penn-border shadow-[0px_0px_150px_0px_rgba(78,67,250,0.1)] last:border-r-0 max-md:border-r-0 overflow-hidden"
              >
                <div className="absolute inset-0 z-0">
                  <Image src={promo.image} alt="" fill className="object-cover opacity-30" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-[20px] font-extrabold mb-[15px] text-penn-navy">{promo.title}</h3>
                  <p className="mb-10 text-penn-body">{promo.desc}</p>
                  {promo.id === "whatsapp" ? (
                    <button
                      onClick={() => setModalOpen(true)}
                      className={cn("inline-block px-8 py-3 rounded-full text-white uppercase text-[13px] tracking-wide font-bold transition-all hover:opacity-90 hover:shadow-lg", promo.bgColor)}
                    >
                      {promo.ctaText}
                    </button>
                  ) : (
                    <a
                      href={promo.link}
                      className={cn("inline-block px-8 py-3 rounded-full text-white uppercase text-[13px] tracking-wide font-bold transition-all hover:opacity-90 hover:shadow-lg", promo.bgColor)}
                    >
                      {promo.ctaText}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ MODAL ═══════════ */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={resetModal}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl max-w-[440px] w-full shadow-2xl overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {formState === "sent" ? (
                  <SuccessView phone={phone} onClose={resetModal} />
                ) : (
                  <FormView
                    key="form"
                    phone={phone}
                    setPhone={(v) => { setPhone(v); setError(""); }}
                    selectedSlot={selectedSlot}
                    setSelectedSlot={setSelectedSlot}
                    formState={formState}
                    error={error}
                    onSubmit={submitCallback}
                    onClose={resetModal}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─────────────────────────────────── */

function FormView({
  phone, setPhone, selectedSlot, setSelectedSlot,
  formState, error, onSubmit, onClose,
}: {
  phone: string;
  setPhone: (v: string) => void;
  selectedSlot: string;
  setSelectedSlot: (v: string) => void;
  formState: string;
  error: string;
  onSubmit: (urgent: boolean) => void;
  onClose: () => void;
}) {
  const isValid = phone.trim().length > 0 && !error;

  return (
    <>
      {/* Header */}
      <div className="px-6 pt-6 pb-4 flex items-start justify-between">
        <div>
          <h3 className="text-[18px] font-extrabold text-penn-navy">Un conseiller vous appelle</h3>
          <p className="text-[13px] text-penn-body/40 mt-0.5">Gratuit et sans engagement</p>
        </div>
        <button onClick={onClose} className="p-2 rounded-xl hover:bg-penn-bg-light transition-colors -mr-2 -mt-1">
          <X className="w-4 h-4 text-penn-body/30" />
        </button>
      </div>

      {/* Body */}
      <div className="px-6 pb-6 space-y-5">
        {/* Phone */}
        <div>
          <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Votre numéro</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+216 XX XXX XXX"
            autoFocus
            className={`w-full px-4 py-3 rounded-xl border-2 text-[16px] font-semibold text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:ring-4 transition-all tracking-wide ${
              error
                ? "border-red-400 focus:border-red-400 focus:ring-red-400/10 bg-red-50/30"
                : isValid
                  ? "border-[#2B8FAB] focus:border-[#2B8FAB] focus:ring-[#2B8FAB]/5 bg-[#2B8FAB]/[0.03]"
                  : "border-penn-border/40 focus:border-[#2B8FAB] focus:ring-[#2B8FAB]/5"
            }`}
          />
          {error && (
            <p className="text-[12px] text-red-500 font-semibold mt-1.5 flex items-center gap-1">
              <X className="w-3 h-3" /> {error}
            </p>
          )}
        </div>

        {/* Time slots */}
        <div>
          <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-3">Créneau souhaité</label>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((slot) => {
              const active = selectedSlot === slot.value;
              return (
                <button
                  key={slot.value}
                  onClick={() => setSelectedSlot(slot.value)}
                  className={`relative flex flex-col items-center gap-1 py-4 px-2 rounded-xl border-2 transition-all duration-200 ${
                    active
                      ? "border-[#2B8FAB] bg-[#2B8FAB] text-white shadow-lg shadow-[#2B8FAB]/20 scale-[1.02]"
                      : "border-penn-border/30 bg-white hover:border-penn-border/60 hover:bg-penn-bg-light hover:scale-[1.01]"
                  }`}
                >
                  <Clock className={`w-4 h-4 transition-colors ${active ? "text-white/80" : "text-penn-body/25"}`} />
                  <span className={`text-[12px] font-bold leading-tight ${active ? "text-white" : "text-penn-body/50"}`}>
                    {slot.label}
                  </span>
                  <span className={`text-[10px] font-semibold ${active ? "text-white/60" : "text-penn-body/30"}`}>
                    {slot.sub}
                  </span>
                  {active && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-white flex items-center justify-center shadow"
                    >
                      <Check className="w-2.5 h-2.5 text-[#2B8FAB]" />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA row */}
        <div className="flex gap-3 pt-1">
          <button
            onClick={() => onSubmit(false)}
            disabled={formState === "sending" || !phone.trim() || !selectedSlot || !!error}
            className="flex-1 py-3 rounded-xl bg-[#2B8FAB] text-white font-bold text-[14px] hover:bg-[#1e7a94] transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-[#2B8FAB]/15 active:scale-[0.98]"
          >
            {formState === "sending" ? "..." : <><Send className="w-4 h-4" /> Être rappelé</>}
          </button>
          <button
            onClick={() => onSubmit(true)}
            disabled={formState === "sending" || !phone.trim() || !!error}
            className="py-3 px-4 rounded-xl border-2 border-penn-navy/15 bg-penn-navy text-white font-bold text-[14px] hover:bg-penn-navy/90 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5 shrink-0 shadow-lg shadow-penn-navy/10 active:scale-[0.98]"
          >
            <Phone className="w-4 h-4" /> <span className="hidden sm:inline">Appelez-moi </span>vite
          </button>
        </div>
      </div>
    </>
  );
}

function SuccessView({ phone, onClose }: { phone: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-8 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
        className="w-16 h-16 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-5"
      >
        <Check className="w-8 h-8 text-[#2B8FAB]" />
      </motion.div>
      <h3 className="text-[20px] font-extrabold text-penn-navy mb-2">C&apos;est noté !</h3>
      <p className="text-[14px] text-penn-body/50 leading-relaxed max-w-[280px] mx-auto">
        Un conseiller EBS va vous appeler{phone ? <> au <strong className="text-penn-navy">{phone}</strong></> : ""} dans les plus brefs délais.
      </p>
      <button
        onClick={onClose}
        className="mt-6 px-8 py-2.5 rounded-xl bg-penn-bg-light text-penn-navy font-bold text-[13px] hover:bg-penn-border/30 transition-colors"
      >
        Fermer
      </button>
    </motion.div>
  );
}
