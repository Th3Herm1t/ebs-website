"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowDown, Bus, Building, Clock, Coffee, Hotel, MapPin, Monitor, ParkingCircle, Wifi, Camera } from "lucide-react";
import { CtaSection } from "@/components/shared";

const campusSpaces = [
  { title: "Amphithéâtre", icon: <Building className="w-8 h-8" />, color: "#2B8FAB" },
  { title: "Salle informatique", icon: <Monitor className="w-8 h-8" />, color: "#9C27B0" },
  { title: "Coworking", icon: <Coffee className="w-8 h-8" />, color: "#E89745" },
  { title: "Bibliothèque", icon: <Building className="w-8 h-8" />, color: "#00BCD4" },
  { title: "Espaces communs", icon: <Camera className="w-8 h-8" />, color: "#E91E8C" },
];

const equipements = [
  { icon: <Monitor className="w-5 h-5" />, label: "Salles de cours équipées", desc: "Projecteurs, tableaux interactifs, prises connectées" },
  { icon: <Monitor className="w-5 h-5" />, label: "Laboratoire informatique", desc: "PC dernière génération, logiciels professionnels" },
  { icon: <Wifi className="w-5 h-5" />, label: "WiFi haut débit", desc: "Connexion fibre optique sur tout le campus" },
  { icon: <Coffee className="w-5 h-5" />, label: "Espace détente", desc: "Cafétéria, terrasse, salle de pause" },
  { icon: <Bus className="w-5 h-5" />, label: "Transports & Accès", desc: "Bus, métro léger, parking étudiants" },
  { icon: <Hotel className="w-5 h-5" />, label: "Logement à proximité", desc: "Résidences étudiantes et appartements" },
];

export default function CampusPage() {
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
              <div className="inline-flex items-center gap-3 text-[#2B8FAB]/60 text-[12px] font-bold uppercase tracking-[4px] mb-8">
                <MapPin className="w-4 h-4" />
                10 Rue Socrate, Z.I Kheireddine — Le Kram, Tunis
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[40px] md:text-[52px] lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
            >
              Un espace pensé pour
              <br />
              <span className="text-[#2B8FAB]">votre réussite.</span>
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
              Explorez le campus
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {campusSpaces.map((space, i) => (
              <motion.div
                key={space.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-penn-border hover:shadow-xl transition-all duration-300"
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
              Visite virtuelle 360°
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
                <h2 className="text-[34px] font-extrabold text-penn-navy mb-8">Informations pratiques</h2>

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

      <CtaSection
        title="Venez visiter notre campus !"
        subtitle="Prenez rendez-vous pour une visite personnalisée et découvrez l'environnement EBS."
        primaryCta={{ label: "Prendre rendez-vous", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
