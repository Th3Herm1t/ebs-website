"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Clock, Phone, Send, X, Check } from "lucide-react";
import { useTranslations } from 'next-intl';
import { cn } from "@/lib/utils";

const timeSlots = [
  { label: "Matin (9h – 12h)", value: "morning", icon: "🌅" },
  { label: "Après-midi (14h – 17h)", value: "afternoon", icon: "☀️" },
  { label: "Soirée (17h – 19h)", value: "evening", icon: "🌆" },
];

export default function TopPromo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const t = useTranslations('HomePage.toppromo');

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [phone, setPhone] = useState("");
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async () => {
    if (!phone.trim() || !selectedSlot) return;
    setFormState("sending");
    try {
      await fetch("https://formspree.io/f/xeojaqdr", {
        method: "POST",
        body: JSON.stringify({ phone, slot: selectedSlot, _subject: "Demande de rappel — EBS" }),
        headers: { "Content-Type": "application/json" },
      });
      setFormState("sent");
    } catch {
      setFormState("sent"); // show success anyway for UX
    }
  };

  const resetModal = () => {
    setModalOpen(false);
    setSelectedSlot("");
    setPhone("");
    setFormState("idle");
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
      asButton: false,
    },
    {
      id: "whatsapp",
      title: t('p2.title'),
      desc: t('p2.desc'),
      ctaText: t('p2.btn'),
      bgColor: "bg-[#2B8FAB]",
      link: "",
      image: "/images/toppromo/candidature.jpg",
      asButton: true,
    },
    {
      id: "apply",
      title: t('p3.title'),
      desc: t('p3.desc'),
      ctaText: t('p3.btn'),
      bgColor: "bg-[#f4a261]",
      link: "/preinscription",
      image: "/images/toppromo/conseiller.jpg",
      asButton: false,
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
                  {promo.asButton ? (
                    <button
                      onClick={() => setModalOpen(true)}
                      className={cn("inline-block px-8 py-3 rounded-full text-white uppercase text-[13px] tracking-wide font-bold transition-opacity hover:opacity-90", promo.bgColor)}
                    >
                      {promo.ctaText}
                    </button>
                  ) : (
                    <a
                      href={promo.link}
                      className={cn("inline-block px-8 py-3 rounded-full text-white uppercase text-[13px] tracking-wide font-bold transition-opacity hover:opacity-90", promo.bgColor)}
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl max-w-[480px] w-full shadow-2xl overflow-hidden"
            >
              {formState === "sent" ? (
                <div className="p-8 md:p-10 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-5">
                    <Check className="w-8 h-8 text-[#2B8FAB]" />
                  </div>
                  <h3 className="text-[22px] font-extrabold text-penn-navy mb-2">Demande envoyée !</h3>
                  <p className="text-[14px] text-penn-body/60 mb-6 max-w-[300px] mx-auto">
                    Un conseiller vous appellera au <strong className="text-penn-navy">{phone}</strong> dans le créneau sélectionné.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href={`tel:+21653355196`}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#2B8FAB] text-white font-bold text-[14px] hover:bg-[#2B8FAB]/90 transition-all"
                    >
                      <Phone className="w-4 h-4" /> Appeler maintenant
                    </a>
                    <button onClick={resetModal} className="text-[14px] font-bold text-penn-body/40 hover:text-penn-navy transition-colors">
                      Fermer
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="p-6 md:p-8 border-b border-penn-border/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[#2B8FAB]" />
                      </div>
                      <div>
                        <h3 className="text-[16px] font-extrabold text-penn-navy">Parler à un conseiller</h3>
                        <p className="text-[12px] text-penn-body/40">Choisissez votre créneau</p>
                      </div>
                    </div>
                    <button onClick={resetModal} className="p-2 rounded-lg hover:bg-penn-bg-light transition-colors">
                      <X className="w-5 h-5 text-penn-body/40" />
                    </button>
                  </div>

                  <div className="p-6 md:p-8 space-y-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-[13px] font-bold text-penn-navy mb-2">Votre numéro</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-penn-body/30" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+216 XX XXX XXX"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-penn-border text-[14px] text-penn-navy placeholder:text-penn-body/30 focus:outline-none focus:border-[#2B8FAB] focus:ring-2 focus:ring-[#2B8FAB]/10 transition-all"
                        />
                      </div>
                    </div>

                    {/* Time slots */}
                    <div>
                      <label className="block text-[13px] font-bold text-penn-navy mb-3">Créneau souhaité</label>
                      <div className="space-y-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot.value}
                            onClick={() => setSelectedSlot(slot.value)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left text-[14px] font-semibold transition-all ${
                              selectedSlot === slot.value
                                ? "border-[#2B8FAB] bg-[#2B8FAB]/5 text-penn-navy"
                                : "border-penn-border/50 text-penn-body/60 hover:border-penn-border hover:text-penn-navy"
                            }`}
                          >
                            <Clock className="w-4 h-4 shrink-0" />
                            <span className="flex-1">{slot.label}</span>
                            {selectedSlot === slot.value && <Check className="w-4 h-4 text-[#2B8FAB]" />}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 pt-2">
                      <button
                        onClick={handleSubmit}
                        disabled={formState === "sending" || !phone.trim() || !selectedSlot}
                        className="w-full py-3 rounded-xl bg-[#2B8FAB] text-white font-bold text-[14px] hover:bg-[#2B8FAB]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {formState === "sending" ? "Envoi..." : <><Send className="w-4 h-4" /> Être rappelé</>}
                      </button>

                      <div className="relative flex items-center gap-3">
                        <div className="flex-1 h-px bg-penn-border/50" />
                        <span className="text-[11px] font-semibold text-penn-body/30 uppercase">ou</span>
                        <div className="flex-1 h-px bg-penn-border/50" />
                      </div>

                      <a
                        href="tel:+21653355196"
                        className="w-full py-3 rounded-xl border-2 border-penn-border text-penn-navy font-bold text-[14px] hover:border-[#2B8FAB]/30 hover:bg-penn-bg-light transition-all flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" /> Appeler immédiatement
                      </a>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
