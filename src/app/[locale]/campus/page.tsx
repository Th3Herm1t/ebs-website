"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ArrowDown, Bus, Building, CalendarDays, Clock, Coffee, Hotel, MapPin, Monitor, ParkingCircle, Wifi, Camera, Gamepad2, Utensils, BookOpen, Mail, Phone, Send, X, User } from "lucide-react";
import { Badge } from "@/components/shared";

const campusSpaces = [
  { title: "Salle Polyvalente", icon: <Building className="w-8 h-8" />, color: "#2B8FAB" },
  { title: "Salle Informatique", icon: <Monitor className="w-8 h-8" />, color: "#9C27B0" },
  { title: "Espaces de Détente", icon: <Coffee className="w-8 h-8" />, color: "#E89745" },
  { title: "Salle des Jeux", icon: <Gamepad2 className="w-8 h-8" />, color: "#4CAF50" },
  { title: "Buvette", icon: <Utensils className="w-8 h-8" />, color: "#FF9800" },
  { title: "Bibliothèque", icon: <BookOpen className="w-8 h-8" />, color: "#00BCD4" },
  { title: "Espaces Communs", icon: <Camera className="w-8 h-8" />, color: "#E91E8C" },
];

const equipements = [
  { icon: <Monitor className="w-5 h-5" />, label: "Salles de Cours Équipées", desc: "Projecteurs, tableaux interactifs, prises connectées" },
  { icon: <Monitor className="w-5 h-5" />, label: "Laboratoire Informatique", desc: "PC dernière génération, logiciels professionnels" },
  { icon: <Wifi className="w-5 h-5" />, label: "WiFi Haut Débit", desc: "Connexion fibre optique sur tout le campus" },
  { icon: <Coffee className="w-5 h-5" />, label: "Espace de Détente", desc: "Cafétéria, terrasse, salle de pause" },
  { icon: <Bus className="w-5 h-5" />, label: "Transports & Accès", desc: "Bus, métro léger, parking étudiants" },
  { icon: <Hotel className="w-5 h-5" />, label: "Logement à Proximité", desc: "Résidences étudiantes et appartements" },
];

export default function CampusPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

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
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-40 pb-24 overflow-hidden">
                {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/heroes/hero-campus.jpg" alt="" fill className="object-cover" priority />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/50 via-[#1a2035]/50 to-penn-navy/50" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_40%_60%,_#2B8FAB_0%,_transparent_50%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
<div className="max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" size="lg" className="mb-8 border-white/20 text-white/80">
                <MapPin className="w-3.5 h-3.5" />
                10 Rue Socrate, Z.I Kheireddine — Le Kram, Tunis
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[40px] md:text-[52px] lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
            >
              Un espace pensé pour
              <br />
              <span className="text-[#2B8FAB]">votre réussite</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[17px] md:text-[19px] text-white/60 leading-relaxed max-w-[550px]"
            >
              Bienvenue sur le campus d&apos;Espima Business School, un environnement moderne conçu pour favoriser l&apos;apprentissage, la collaboration et l&apos;épanouissement.
            </motion.p>
          </div>

          {/* Quick info cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {[
              { value: "08h–17h", label: "Lun–Ven", icon: <Clock className="w-4 h-4" /> },
              { value: "08h–13h", label: "Samedi", icon: <Clock className="w-4 h-4" /> },
              { value: "Parking", label: "Disponible", icon: <ParkingCircle className="w-4 h-4" /> },
              { value: "Bus + Métro", label: "À proximité", icon: <Bus className="w-4 h-4" /> },
            ].map((s) => (
              <div key={s.label} className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-4 flex items-center gap-3">
                <div className="text-[#2B8FAB]/50 shrink-0">{s.icon}</div>
                <div>
                  <p className="text-[15px] font-extrabold text-white leading-tight">{s.value}</p>
                  <p className="text-[12px] text-white/40">{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10"
          >
            <ArrowDown className="w-5 h-5 text-white/20 animate-bounce mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════ PHOTO GALLERY ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-14"
          >
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Explorez le Campus
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {campusSpaces.map((space, i) => (
              <motion.div
                key={space.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative aspect-[4/5] w-[calc(50%-8px)] md:w-[calc(33.33%-11px)] lg:w-[calc(20%-13px)] rounded-2xl overflow-hidden border border-penn-border hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-penn-bg-light to-white flex flex-col items-center justify-center p-4 text-center group-hover:scale-105 transition-transform duration-500">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: space.color + "15", color: space.color }}
                  >
                    {space.icon}
                  </div>
                  <h3 className="text-[15px] font-extrabold text-penn-navy">{space.title}</h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-penn-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-[13px] text-white font-bold">Galerie photos →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ VISITE VIRTUELLE ═══════════ */}
      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,_#2B8FAB_0%,_transparent_60%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative z-10 max-w-[900px] mx-auto px-5 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="w-20 h-20 rounded-full bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-6 border border-[#2B8FAB]/20">
              <Camera className="w-9 h-9 text-[#2B8FAB]" />
            </div>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-white leading-[1.15] mb-4">
              Visite Virtuelle 360°
            </h2>
            <p className="text-[17px] text-white/60 mb-8 max-w-[600px] mx-auto">
              Explorez le campus depuis chez vous avec notre visite virtuelle immersive. Une expérience à 360° pour découvrir chaque espace avant votre arrivée.
            </p>
            <div className="inline-flex px-6 py-3 rounded-full border border-white/[0.12] text-[14px] font-bold text-white/40">
              Bientôt disponible
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ INFO + MAP ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Infos */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
              >
                <h2 className="text-[34px] font-extrabold text-penn-navy mb-8">Informations Pratiques</h2>

                {/* Address */}
                <div className="flex items-start gap-4 p-5 bg-penn-bg-light rounded-2xl border border-penn-border mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#2B8FAB]" />
                  </div>
                  <div>
                    <p className="text-[15px] font-extrabold text-penn-navy mb-1">Adresse</p>
                    <p className="text-[14px] text-penn-body leading-relaxed">
                      10 Rue Socrate, Z.I Kheireddine<br />Le Kram (2015) — Tunis, Tunisie
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-5 bg-penn-bg-light rounded-2xl border border-penn-border mb-8">
                  <div className="w-10 h-10 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#2B8FAB]" />
                  </div>
                  <div>
                    <p className="text-[15px] font-extrabold text-penn-navy mb-1">Horaires d&apos;ouverture</p>
                    <p className="text-[14px] text-penn-body">08h00 – 17h00, Lundi – Vendredi</p>
                    <p className="text-[14px] text-penn-body">08h00 – 13h00, Samedi</p>
                  </div>
                </div>

                {/* Équipements */}
                <h3 className="text-[24px] font-extrabold text-penn-navy mb-5">Équipements</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {equipements.map((e, i) => (
                    <motion.div
                      key={e.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      className="flex items-start gap-3 p-4 bg-penn-bg-light rounded-xl border border-penn-border hover:border-[#2B8FAB]/20 transition-colors"
                    >
                      <span className="text-[#2B8FAB] shrink-0 mt-0.5">{e.icon}</span>
                      <div>
                        <p className="text-[14px] font-bold text-penn-navy">{e.label}</p>
                        <p className="text-[12px] text-penn-body/70">{e.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative"
            >
              <div className="sticky top-28">
                <div className="bg-penn-bg-light rounded-2xl overflow-hidden border border-penn-border aspect-[4/5] lg:aspect-[3/4] flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.8!2d10.25!3d36.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUxJzAwLjAiTiAxMMKwMTUnMDAuMCJF!5e0!3m2!1sfr!2stn!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Carte du campus EBS"
                  />
                </div>

                <div className="mt-4 flex items-center justify-center gap-6 text-[13px] text-penn-body/50">
                  <span className="flex items-center gap-1.5">
                    <Bus className="w-3.5 h-3.5" /> Lignes de bus
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ParkingCircle className="w-3.5 h-3.5" /> Parking
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#2B8FAB] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_50%_50%,_white_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-[900px] mx-auto px-5 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}>
            <Badge variant="outline" size="lg" className="mb-6 border-white/30 text-white/90">Visite du Campus</Badge>
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-white mb-4">
              Venez visiter notre campus <span className="text-white">!</span>
            </h2>
            <p className="text-[16px] text-white/70 max-w-[550px] mx-auto mb-8 leading-relaxed">
              Prenez rendez-vous pour une visite personnalisée et découvrez l'environnement EBS.
            </p>
            <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#2B8FAB] font-bold text-[14px] hover:bg-white/90 transition-all shadow-lg shadow-white/20">
              <CalendarDays className="w-5 h-5" /> Prendre rendez-vous
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ MODAL RENDEZ-VOUS ═══════════ */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={() => setModalOpen(false)}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl max-w-[600px] w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <div className="sticky top-0 z-10 bg-white rounded-t-2xl border-b border-penn-border px-8 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center text-[#2B8FAB]"><CalendarDays className="w-5 h-5" /></div>
                  <h3 className="text-[18px] font-extrabold text-penn-navy">Prendre rendez-vous</h3>
                </div>
                <button onClick={() => setModalOpen(false)} className="p-2 rounded-xl hover:bg-gray-100 transition-all"><X className="w-5 h-5 text-penn-body" /></button>
              </div>

              <div className="p-8">
                {formState === "sent" ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-5">
                      <Send className="w-8 h-8 text-[#2B8FAB]" />
                    </div>
                    <h3 className="text-[22px] font-extrabold text-penn-navy mb-2">Merci !</h3>
                    <p className="text-[14px] text-penn-body/50 max-w-[350px] mx-auto">Votre demande de visite a bien été reçue. Notre équipe vous contactera sous 48h pour confirmer le rendez-vous.</p>
                    <button onClick={() => { setModalOpen(false); setFormState("idle"); }} className="mt-6 text-[#2B8FAB] font-bold text-[14px] hover:underline">Fermer</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="_subject" value="Demande de Visite Campus — EBS" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Nom complet</label>
                        <input name="name" required className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all" placeholder="Votre nom" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Email</label>
                        <input name="email" type="email" required className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all" placeholder="email@exemple.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Téléphone</label>
                        <input name="phone" type="tel" required className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all" placeholder="+216 XX XXX XXX" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Date souhaitée</label>
                        <input name="date" type="date" required className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Créneau horaire souhaité</label>
                      <select name="creneau" required className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all appearance-none bg-white">
                        <option value="">Sélectionnez un créneau</option>
                        <option value="09:00-10:00">09:00 – 10:00</option>
                        <option value="10:00-11:00">10:00 – 11:00</option>
                        <option value="11:00-12:00">11:00 – 12:00</option>
                        <option value="14:00-15:00">14:00 – 15:00</option>
                        <option value="15:00-16:00">15:00 – 16:00</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">Message (optionnel)</label>
                      <textarea name="message" rows={3} className="w-full py-3 px-4 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all resize-none" placeholder="Une question particulière ? Un programme qui vous intéresse ?" />
                    </div>
                    <button type="submit" disabled={formState === "sending"} className="w-full py-4 rounded-xl bg-[#2B8FAB] text-white font-bold text-[15px] hover:bg-[#1e7a94] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2B8FAB]/15 disabled:opacity-50 active:scale-[0.98]">
                      {formState === "sending" ? "Envoi..." : <><Send className="w-5 h-5" /> Envoyer ma demande</>}
                    </button>
                    {formState === "error" && <p className="text-[13px] text-red-500 text-center">Une erreur est survenue. Veuillez réessayer.</p>}
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
