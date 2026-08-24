"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Check,
  Phone,
  MessageSquare,
  Clock,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/shared";

export default function TarifsClient() {
  return (
    <>
      {/* ═══════════ IMMERSIVE HERO ═══════════ */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroes/hero-campus.webp"
            alt="Frais de scolarité EBS"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/60 via-[#1a2035]/50 to-penn-navy/60" />
        <div className="absolute inset-0 z-[1] opacity-[0.03] bg-[radial-gradient(circle_at_50%_70%,_#2B8FAB_0%,_transparent_50%)]" />

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
              Frais de scolarité
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[42px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
          >
            Nos formations &<br />
            <span className="text-[#2B8FAB]">tarifs</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[17px] md:text-[18px] text-white/70 leading-relaxed max-w-[640px] mx-auto"
          >
            Des formations professionnalisantes, avec des diplômes agréés par l&apos;État tunisien et plus de 150 certifications internationales reconnues.
          </motion.p>
        </div>
      </section>

      {/* ═══════════ NOS FORMATIONS ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            {/* ── PARCOURS GÉNÉRAL ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="bg-white rounded-2xl border border-penn-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                <div className="px-6 lg:px-7 pt-6 lg:pt-7 pb-4 border-b border-penn-border/50">
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-[2px] text-[#2B8FAB] bg-[#2B8FAB]/8 px-3 py-1 rounded-full mb-3">
                    Parcours Général
                  </span>
                  <h3 className="text-[24px] font-extrabold text-penn-navy mb-1">Licence</h3>
                  <p className="text-[28px] font-extrabold text-[#2B8FAB] leading-none">
                    7 500 <span className="text-[15px] font-bold text-penn-body/50">DT / An</span>
                  </p>
                </div>

                <div className="px-6 lg:px-7 py-5 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-penn-body/40 mb-4">
                    4 Licences et 5 parcours
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Management",
                      "Finance",
                      "Marketing",
                      "Informatique – Génie logiciel & Systèmes d'information",
                      "Option : Intelligence Artificielle",
                      "Option : Cybersécurité",
                    ].map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[14px] text-penn-navy/75">
                        <Check className="w-[15px] h-[15px] text-[#2B8FAB] shrink-0 mt-0.5" />
                        <span className="leading-snug">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-6 lg:px-7 pb-6 lg:pb-7">
                  <div className="flex items-center gap-1.5 text-[12px] text-penn-body/40 mb-4">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>3 ans — Bac+3 — 6 semestres</span>
                  </div>
                  <Link
                    href="/licences"
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#2B8FAB] group-hover:gap-2 transition-all"
                  >
                    Voir les parcours
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* ── PARCOURS INTERNATIONAL ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-white rounded-2xl border border-penn-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                <div className="px-6 lg:px-7 pt-6 lg:pt-7 pb-4 border-b border-penn-border/50">
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-[2px] text-[#FF9800] bg-[#FF9800]/8 px-3 py-1 rounded-full mb-3">
                    Parcours International
                  </span>
                  <h3 className="text-[24px] font-extrabold text-penn-navy mb-1">Licence (toutes spécialités)</h3>
                  <p className="text-[28px] font-extrabold text-[#FF9800] leading-none">
                    9 500 <span className="text-[15px] font-bold text-penn-body/50">DT / An</span>
                  </p>
                </div>

                <div className="px-6 lg:px-7 py-5 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-penn-body/40 mb-4">
                    3 destinations
                  </p>
                  <ul className="space-y-3.5">
                    <li className="flex items-start gap-2.5">
                      <Globe className="w-[15px] h-[15px] text-[#FF9800] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-penn-navy/75 leading-snug">
                        L1 en Tunisie → Bachelor 2 ou Bachelor 3 en Italie
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Globe className="w-[15px] h-[15px] text-[#FF9800] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-penn-navy/75 leading-snug">
                        L2 en Tunisie → Bachelor 3 en France
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Globe className="w-[15px] h-[15px] text-[#FF9800] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-penn-navy/75 leading-snug">
                        Licence à EBS → Master ou Maîtrise en France, au Canada ou en Italie
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="px-6 lg:px-7 pb-6 lg:pb-7">
                  <div className="flex items-center gap-1.5 text-[12px] text-penn-body/40 mb-4">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>3 ans — Mobilité internationale</span>
                  </div>
                  <Link
                    href="/parcours-international"
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#FF9800] group-hover:gap-2 transition-all"
                  >
                    Voir les destinations
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* ── MASTERS ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl border border-penn-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                <div className="px-6 lg:px-7 pt-6 lg:pt-7 pb-4 border-b border-penn-border/50">
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-[2px] text-[#9C27B0] bg-[#9C27B0]/8 px-3 py-1 rounded-full mb-3">
                    Masters
                  </span>
                  <h3 className="text-[24px] font-extrabold text-penn-navy mb-1">Master</h3>
                   <p className="text-[28px] font-extrabold text-[#9C27B0] leading-none">8 500 <span className="text-[15px] font-bold text-penn-body/50">DT / An</span></p>
                </div>

                <div className="px-6 lg:px-7 py-5 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-penn-body/40 mb-4">
                    4 Masters
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-[15px] h-[15px] text-[#9C27B0] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-penn-navy/75 leading-snug">
                        Management de Projets Innovants & Startups
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-[15px] h-[15px] text-[#9C27B0] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-penn-navy/75 leading-snug">
                        CRM Marketing & Transformation Digitale
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-[15px] h-[15px] text-[#9C27B0] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-penn-navy/75 leading-snug">
                        Marketing Digital & Intelligence Artificielle
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-[15px] h-[15px] text-[#9C27B0] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-penn-navy/75 leading-snug">
                        Ingénierie Financière
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="px-6 lg:px-7 pb-6 lg:pb-7">
                  <div className="flex items-center gap-1.5 text-[12px] text-penn-body/40 mb-4">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>2 ans — Bac+5 — 4 semestres</span>
                  </div>
                  <Link
                    href="/masters"
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#9C27B0] group-hover:gap-2 transition-all"
                  >
                    Voir les Masters
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* ── MASTER POUR LES PROFESSIONNELS ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white rounded-2xl border border-penn-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                <div className="px-6 lg:px-7 pt-6 lg:pt-7 pb-4 border-b border-penn-border/50">
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-[2px] text-[#1E88E5] bg-[#1E88E5]/8 px-3 py-1 rounded-full mb-3">
                    Master pour les professionnels
                  </span>
                  <h3 className="text-[24px] font-extrabold text-penn-navy mb-1">Master</h3>
                   <p className="text-[28px] font-extrabold text-[#1E88E5] leading-none">6 900 <span className="text-[15px] font-bold text-penn-body/50">DT / An</span></p>
                </div>

                <div className="px-6 lg:px-7 py-5 flex-1">
                  <p className="text-[14px] text-penn-body leading-relaxed mb-5">
                    Conciliez études et activité professionnelle grâce à un emploi du temps aménagé.
                  </p>
                  <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-penn-body/40 mb-4">
                    4 Masters
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-[15px] h-[15px] text-[#1E88E5] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-penn-navy/75 leading-snug">
                        Management de Projets Innovants & Startups
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-[15px] h-[15px] text-[#1E88E5] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-penn-navy/75 leading-snug">
                        CRM Marketing & Transformation Digitale
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-[15px] h-[15px] text-[#1E88E5] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-penn-navy/75 leading-snug">
                        Marketing Digital & Intelligence Artificielle
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-[15px] h-[15px] text-[#1E88E5] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-penn-navy/75 leading-snug">
                        Ingénierie Financière
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="px-6 lg:px-7 pb-6 lg:pb-7">
                  <div className="flex items-center gap-1.5 text-[12px] text-penn-body/40 mb-4">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>2 ans — Bac+5 — Emploi du temps aménagé</span>
                  </div>
                  <Link
                    href="/masters"
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#1E88E5] group-hover:gap-2 transition-all"
                  >
                    Voir les Masters
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ INFORMATIONS & CONTACT ═══════════ */}
      <section className="section-padding bg-white border-t border-penn-border/50">
        <div className="max-w-[800px] mx-auto px-5 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}>
            <div className="w-16 h-16 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-[#2B8FAB]" />
            </div>
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-4">
              Obtenez toutes les informations sur nos tarifs
            </h2>
            <p className="text-[15px] md:text-[17px] text-penn-body leading-relaxed mb-10 max-w-[600px] mx-auto">
              Notre équipe vous répond sous 24 h et vous informe sur les frais de scolarité, réductions disponibles et facilités de paiement selon le programme choisi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2B8FAB] text-white font-bold text-[15px] py-3.5 px-8 rounded-full hover:bg-[#2B8FAB]/90 transition-all duration-300 shadow-lg shadow-[#2B8FAB]/20">
                Nous contacter <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+216 55 582 843" className="inline-flex items-center gap-2 font-bold text-[15px] text-penn-navy hover:text-[#2B8FAB] transition-colors bg-gray-50 border border-gray-200 py-3.5 px-8 rounded-full">
                <Phone className="w-4 h-4" /> +216 55 582 843
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
