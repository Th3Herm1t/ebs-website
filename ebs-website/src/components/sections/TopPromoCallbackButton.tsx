"use client";

import { useState } from "react";
import { Check, Clock, Phone, Send, X } from "lucide-react";
import { siteConfig } from "@/lib/config";

const timeSlots = [
  { label: "Ce matin", sub: "9h - 12h", value: "morning" },
  { label: "Cet après-midi", sub: "14h - 17h", value: "afternoon" },
  { label: "Ce soir", sub: "17h - 19h", value: "evening" },
];

export default function TopPromoCallbackButton({ label, className }: { label: string; className: string }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");
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
    if (err) {
      setError(err);
      return;
    }

    setError("");
    setFormState("sending");
    try {
      await fetch(siteConfig.webhookUrl, {
        method: "POST",
        body: JSON.stringify({
          formId: "toppromo_callback",
          phone,
          slot: urgent ? "immediate" : selectedSlot,
          urgent,
          _subject: urgent ? "Rappel immédiat - EBS" : `Rappel planifié (${selectedSlot}) - EBS`,
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

  return (
    <>
      <button onClick={() => setModalOpen(true)} className={className}>
        {label}
      </button>

      {modalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={resetModal}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div onClick={(e) => e.stopPropagation()} className="relative bg-white rounded-2xl max-w-[440px] w-full shadow-2xl overflow-hidden">
            {formState === "sent" ? (
              <SuccessView phone={phone} onClose={resetModal} />
            ) : (
              <FormView
                phone={phone}
                setPhone={(value) => {
                  setPhone(value);
                  setError("");
                }}
                selectedSlot={selectedSlot}
                setSelectedSlot={setSelectedSlot}
                formState={formState}
                error={error}
                onSubmit={submitCallback}
                onClose={resetModal}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

function FormView({
  phone,
  setPhone,
  selectedSlot,
  setSelectedSlot,
  formState,
  error,
  onSubmit,
  onClose,
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
      <div className="px-6 pt-6 pb-4 flex items-start justify-between">
        <div>
          <h3 className="text-[18px] font-extrabold text-penn-navy">Un conseiller vous appelle</h3>
          <p className="text-[13px] text-penn-body/40 mt-0.5">Gratuit et sans engagement</p>
        </div>
        <button onClick={onClose} className="p-2 rounded-xl hover:bg-penn-bg-light transition-colors -mr-2 -mt-1">
          <X className="w-4 h-4 text-penn-body/30" />
        </button>
      </div>

      <div className="px-6 pb-6 space-y-5">
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
                  ? "border-penn-green focus:border-penn-green focus:ring-penn-green/5 bg-penn-green/[0.03]"
                  : "border-penn-border/40 focus:border-penn-green focus:ring-penn-green/5"
            }`}
          />
          {error && (
            <p className="text-[12px] text-red-500 font-semibold mt-1.5 flex items-center gap-1">
              <X className="w-3 h-3" /> {error}
            </p>
          )}
        </div>

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
                      ? "border-penn-green bg-penn-green text-white shadow-lg shadow-penn-green/20 scale-[1.02]"
                      : "border-penn-border/30 bg-white hover:border-penn-border/60 hover:bg-penn-bg-light hover:scale-[1.01]"
                  }`}
                >
                  <Clock className={`w-4 h-4 transition-colors ${active ? "text-white/80" : "text-penn-body/25"}`} />
                  <span className={`text-[12px] font-bold leading-tight ${active ? "text-white" : "text-penn-body/50"}`}>{slot.label}</span>
                  <span className={`text-[10px] font-semibold ${active ? "text-white/60" : "text-penn-body/30"}`}>{slot.sub}</span>
                  {active && (
                    <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-white flex items-center justify-center shadow">
                      <Check className="w-2.5 h-2.5 text-penn-green" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex gap-3 pt-1">
          <button
            onClick={() => onSubmit(false)}
            disabled={formState === "sending" || !phone.trim() || !selectedSlot || !!error}
            className="flex-1 py-3 rounded-xl bg-penn-green text-white font-bold text-[14px] hover:bg-[#1e7a94] transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-penn-green/15 active:scale-[0.98]"
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
    <div className="p-8 text-center">
      <div className="w-16 h-16 rounded-2xl bg-penn-green/10 flex items-center justify-center mx-auto mb-5">
        <Check className="w-8 h-8 text-penn-green" />
      </div>
      <h3 className="text-[20px] font-extrabold text-penn-navy mb-2">C&apos;est noté !</h3>
      <p className="text-[14px] text-penn-body/50 leading-relaxed max-w-[280px] mx-auto">
        Un conseiller EBS va vous appeler{phone ? <> au <strong className="text-penn-navy">{phone}</strong></> : ""} dans les plus brefs délais.
      </p>
      <button onClick={onClose} className="mt-6 px-8 py-2.5 rounded-xl bg-penn-bg-light text-penn-navy font-bold text-[13px] hover:bg-penn-border/30 transition-colors">
        Fermer
      </button>
    </div>
  );
}
