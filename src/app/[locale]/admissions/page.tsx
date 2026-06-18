"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ChevronDown,
  FileText,
  FolderOpen,
  MessageSquare,
  CheckCircle,
  Check,
  Phone,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
  Clock,
  Globe,
} from "lucide-react";
import { Badge } from "@/components/shared";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    num: "01",
    title: "Préinscription en ligne",
    description:
      "Remplis le formulaire en 3 minutes avec tes informations personnelles et ton choix de programme.",
    icon: <FileText className="w-8 h-8" />,
    color: "#2B8FAB",
  },
  {
    num: "02",
    title: "Étude du dossier",
    description:
      "Notre équipe examine ton dossier sous 48h. Aucun concours d'entrée — l'admission est basée sur ton parcours.",
    icon: <FolderOpen className="w-8 h-8" />,
    color: "#2196F3",
  },
  {
    num: "03",
    title: "Entretien de motivation",
    description:
      "Un échange de 20 minutes pour comprendre ton projet professionnel et répondre à toutes tes questions.",
    icon: <MessageSquare className="w-8 h-8" />,
    color: "#E91E8C",
  },
  {
    num: "04",
    title: "Confirmation d'inscription",
    description:
      "Tu reçois ta lettre d'admission et finalises ton inscription avec les documents officiels.",
    icon: <CheckCircle className="w-8 h-8" />,
    color: "#FF9800",
  },
];

const requirementsLicence = [
  "Baccalauréat (toutes sections)",
  "Relevé de notes du bac",
  "Copie de la carte d'identité nationale",
  "Photo d'identité récente",
  "2 enveloppes timbrées",
];

const requirementsMaster = [
  "Licence ou diplôme équivalent (Bac+3)",
  "Relevés de notes des 3 années de licence",
  "Copie du diplôme de licence",
  "Copie de la carte d'identité nationale",
  "CV actualisé",
  "Lettre de motivation",
  "Photo d'identité récente",
];

const faq = [
  {
    q: "Y a-t-il un concours d'entrée ?",
    a: "Non. L'admission à l'EBS se fait sur dossier et entretien de motivation. Pas de concours, pas de stress inutile.",
  },
  {
    q: "Quand ouvrent les inscriptions ?",
    a: "Les inscriptions ouvrent chaque année en mai et restent ouvertes jusqu'à fin septembre, sous réserve de places disponibles.",
  },
  {
    q: "Peut-on s'inscrire en cours d'année ?",
    a: "Les inscriptions en cours d'année sont possibles sous conditions. Contacte notre équipe pour étudier ta situation.",
  },
  {
    q: "L'EBS est-elle reconnue par l'État ?",
    a: "Oui, l'EBS Tunis est une université privée reconnue par le Ministère de l'Enseignement Supérieur tunisien. Nos diplômes sont conformes au système LMD.",
  },
  {
    q: "Quel est le coût de la scolarité ?",
    a: "Les frais de scolarité sont de 7 500 DT/an pour la Licence Nationale (6 parcours) et 9 500 DT/an pour la Licence Internationale (parcours France, Canada, Italie). Les Masters sont sur devis. Les 150+ certifications internationales sont incluses sans frais supplémentaires.",
  },
  {
    q: "Des facilités de paiement sont-elles disponibles ?",
    a: "Oui, le paiement peut être échelonné en plusieurs tranches. Contacte notre service financier pour un plan personnalisé.",
  },
];

const calendarEvents = [
  {
    period: "Mai – Juin",
    label: "Ouverture des inscriptions",
    detail:
      "Préinscription en ligne ouverte. Premiers dossiers traités en priorité.",
  },
  {
    period: "Juillet – Août",
    label: "Entretiens de motivation",
    detail:
      "Sessions d'entretien hebdomadaires. Résultats communiqués sous 48h.",
  },
  {
    period: "Septembre",
    label: "Dernières places",
    detail:
      "Inscriptions tardives acceptées sous réserve de disponibilité.",
  },
  {
    period: "Octobre",
    label: "Rentrée universitaire",
    detail:
      "Début des cours. Semaine d'intégration et présentation des certifications.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      {/* ═══════════ IMMERSIVE HERO ═══════════ */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroes/hero-admissions.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/50 via-[#1a2035]/50 to-penn-navy/50" />
        <div className="absolute inset-0 z-[1] opacity-[0.02] bg-[radial-gradient(circle_at_50%_70%,_#2B8FAB_0%,_transparent_50%)]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              size="lg"
              className="mb-6 border-white/20 text-white/80"
            >
              Sur dossier · Sans concours
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[42px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
          >
            Ton admission,
            <br />
            <span className="text-[#2B8FAB]">étape par étape</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[17px] md:text-[18px] text-white/70 leading-relaxed max-w-[600px] mb-12"
          >
            Pas de concours, pas de surprise. L&apos;admission à l&apos;EBS
            repose sur ton parcours et ta motivation. Voici tout ce que tu dois
            savoir.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/preinscription"
              className="inline-flex items-center gap-2 bg-[#2B8FAB] text-white font-bold text-[15px] py-3.5 px-8 rounded-full hover:bg-[#2B8FAB]/90 transition-all duration-300 shadow-lg shadow-[#2B8FAB]/20"
            >
              Commencer ma préinscription
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/nos-programmes"
              className="inline-flex items-center gap-2 font-bold text-[15px] text-white/70 hover:text-white transition-colors py-3.5 px-8"
            >
              Explorer les programmes
              <span>→</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </section>

      {/* ═══════════ 4 STEPS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">
              Processus simplifié
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              4 étapes vers ton inscription
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl border border-penn-border p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <span style={{ color: step.color }}>{step.icon}</span>
                </div>
                <span
                  className="font-extrabold text-sm mb-2 block"
                  style={{ color: step.color }}
                >
                  {step.num}
                </span>
                <h3 className="text-[18px] font-extrabold text-penn-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] text-penn-body leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CAMPUS PHOTO STRIP ═══════════ */}
      <section className="bg-penn-bg-light border-y border-penn-border py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 h-48 md:h-56">
          {[
            "/images/all-img/c1-stock.jpg",
            "/images/all-img/c2-stock.jpg",
            "/images/all-img/c3-stock.jpg",
            "/images/all-img/c4-stock.jpg",
          ].map((src) => (
            <div
              key={src}
              className="relative overflow-hidden group"
            >
              <img
                src={src}
                alt="Campus EBS"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-penn-navy/10 group-hover:bg-penn-navy/0 transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ REQUIREMENTS ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">
              Dossier d&apos;admission
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Documents requis
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-white rounded-2xl border border-penn-border p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-penn-navy text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full">
                  Licence
                </span>
                <span className="text-[14px] text-penn-body">Bac requis</span>
              </div>
              <ul className="space-y-3">
                {requirementsLicence.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#2B8FAB] mt-0.5 shrink-0" />
                    <span className="text-[14px] text-penn-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border border-penn-border p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#2B8FAB] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full">
                  Master
                </span>
                <span className="text-[14px] text-penn-body">Bac+3 requis</span>
              </div>
              <ul className="space-y-3">
                {requirementsMaster.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#2B8FAB] mt-0.5 shrink-0" />
                    <span className="text-[14px] text-penn-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ NOS FORMATIONS ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">Nos formations</Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15] mb-4">
              Licences & Masters
            </h2>
            <p className="text-[16px] text-penn-body/70 leading-relaxed max-w-[640px] mx-auto">
              Des formations professionnalisantes reconnues par l&apos;État, avec
              plus de 150 certifications internationales incluses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* ── LICENCE NATIONALE ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="bg-white rounded-2xl border border-penn-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                <div className="px-6 lg:px-7 pt-6 lg:pt-7 pb-4 border-b border-penn-border/50">
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-[2px] text-[#2B8FAB] bg-[#2B8FAB]/8 px-3 py-1 rounded-full mb-3">
                    Parcours National
                  </span>
                  <h3 className="text-[24px] font-extrabold text-penn-navy mb-1">Licence</h3>
                  <p className="text-[28px] font-extrabold text-[#2B8FAB] leading-none">
                    7 500 <span className="text-[15px] font-bold text-penn-body/50">DT / An</span>
                  </p>
                </div>

                <div className="px-6 lg:px-7 py-5 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-penn-body/40 mb-4">
                    6 parcours
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Management",
                      "Finance",
                      "Marketing",
                      "Informatique – Standard",
                      "Informatique – IA",
                      "Informatique – Cybersécurité",
                    ].map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-[14px] text-penn-navy/75">
                        <Check className="w-[15px] h-[15px] text-[#2B8FAB] shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-6 lg:px-7 pb-6 lg:pb-7">
                  <div className="flex items-center gap-1.5 text-[12px] text-penn-body/40 mb-4">
                    <Clock className="w-3.5 h-3.5" />
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

            {/* ── LICENCE INTERNATIONALE ── */}
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
                  <h3 className="text-[24px] font-extrabold text-penn-navy mb-1">Licence</h3>
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
                      <span className="text-[13px] text-penn-navy/75 leading-snug">
                        L1 en Tunisie → B2/B3{" "}
                        <span className="font-semibold text-penn-navy">Link University — Italie</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Globe className="w-[15px] h-[15px] text-[#FF9800] shrink-0 mt-0.5" />
                      <span className="text-[13px] text-penn-navy/75 leading-snug">
                        L1/L2 en Tunisie → B3{" "}
                        <span className="font-semibold text-penn-navy">Grande école — France</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Globe className="w-[15px] h-[15px] text-[#FF9800] shrink-0 mt-0.5" />
                      <span className="text-[13px] text-penn-navy/75 leading-snug">
                        L1/L2/L3 en Tunisie → M1 au{" "}
                        <span className="font-semibold text-penn-navy">Canada / France / Italie</span>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="px-6 lg:px-7 pb-6 lg:pb-7">
                  <div className="flex items-center gap-1.5 text-[12px] text-penn-body/40 mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    <span>3 ans — Double diplôme — Mobilité</span>
                  </div>
                  <Link
                    href="/parcours-internationaux"
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#FF9800] group-hover:gap-2 transition-all"
                  >
                    Voir les destinations
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* ── MASTER ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 lg:col-span-1"
            >
              <div className="bg-white rounded-2xl border border-penn-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                <div className="px-6 lg:px-7 pt-6 lg:pt-7 pb-4 border-b border-penn-border/50">
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-[2px] text-[#9C27B0] bg-[#9C27B0]/8 px-3 py-1 rounded-full mb-3">
                    Master Professionnel
                  </span>
                  <h3 className="text-[24px] font-extrabold text-penn-navy mb-1">Master</h3>
                  <p className="text-[15px] font-bold text-penn-body/50">Sur devis</p>
                </div>

                <div className="px-6 lg:px-7 py-5 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-penn-body/40 mb-4">
                    3 masters
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
                        CRM & Transformation Digitale
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
                    <Clock className="w-3.5 h-3.5" />
                    <span>2 ans — Bac+5 — 4 semestres</span>
                  </div>
                  <Link
                    href="/masters"
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#9C27B0] group-hover:gap-2 transition-all"
                  >
                    Voir les masters
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ SIMULATION PERSONNALISÉE ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[700px] mx-auto px-5 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}>
            <div className="w-16 h-16 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-6">
              <HeartHandshake className="w-8 h-8 text-[#2B8FAB]" />
            </div>
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-4">
              Demandez une simulation personnalisée
            </h2>
            <p className="text-[15px] text-penn-body leading-relaxed mb-10 max-w-[500px] mx-auto">
              Chaque situation est unique. Notre équipe vous recontacte dans les 24h avec un devis adapté à votre profil et à votre programme.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2B8FAB] text-white font-bold text-[15px] py-3.5 px-8 rounded-full hover:bg-[#2B8FAB]/90 transition-all duration-300 shadow-lg shadow-[#2B8FAB]/20">
                Nous contacter <MessageSquare className="w-4 h-4" />
              </Link>
              <a href="tel:+21653355196" className="inline-flex items-center gap-2 font-bold text-[15px] text-penn-navy hover:text-[#2B8FAB] transition-colors">
                <Phone className="w-4 h-4" /> +216 53 355 196
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ═══════════ INTAKE INFO ═══════════ */}
      <section className="bg-penn-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #2B8FAB 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[1160px] mx-auto px-5 lg:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <span className="text-xs font-semibold text-[#2B8FAB] uppercase tracking-wider block mb-2">
                Rentrée principale
              </span>
              <span className="font-extrabold text-3xl text-white">
                Octobre 2026
              </span>
              <p className="text-sm text-white/50 mt-1">
                Début des cours : 1ère semaine d&apos;octobre
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-xs font-semibold text-[#2B8FAB] uppercase tracking-wider block mb-2">
                Places disponibles
              </span>
              <span className="font-extrabold text-3xl text-white">
                ~30 places/filière
              </span>
              <p className="text-sm text-white/50 mt-1">
                Licences & Masters. Inscriptions par ordre d&apos;arrivée.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-xs font-semibold text-[#2B8FAB] uppercase tracking-wider block mb-2">
                Date limite
              </span>
              <span className="font-extrabold text-3xl text-white">
                30 Sept. 2026
              </span>
              <p className="text-sm text-white/50 mt-1">
                Clôture inscriptions (sous réserve de places)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ CALENDAR TIMELINE ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">
              Calendrier
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Dates clés
            </h2>
          </motion.div>

          <div className="relative">
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-penn-border hidden md:block"
              aria-hidden="true"
            />

            <div className="space-y-8 md:space-y-12">
              {calendarEvents.map((event, i) => (
                <div
                  key={event.label}
                  className="md:grid md:grid-cols-2 md:gap-12 items-center"
                >
                  <div
                    className={
                      i % 2 === 1
                        ? "md:text-right md:col-start-2"
                        : "md:col-start-1"
                    }
                  >
                    <span className="inline-block bg-[#2B8FAB]/10 text-[#2B8FAB] text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {event.period}
                    </span>
                    <h3 className="font-extrabold text-lg text-penn-navy mb-2">
                      {event.label}
                    </h3>
                    <p className="text-[14px] text-penn-body leading-relaxed">
                      {event.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[800px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center">
                <MessageSquare className="w-7 h-7 text-[#2B8FAB]" />
              </div>
              <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy">
                FAQ Admissions
              </h2>
            </div>

            <Accordion className="space-y-3">
              {faq.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white border border-penn-border rounded-xl px-5 lg:px-6 hover:border-[#2B8FAB]/20 transition-all duration-200"
                >
                  <AccordionTrigger className="text-left text-[15px] lg:text-[16px] font-bold text-penn-navy hover:text-[#2B8FAB] hover:no-underline transition-colors py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] lg:text-[15px] text-penn-body leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B8FAB] to-[#1a6d84]" />
        <div className="relative z-10 max-w-[700px] mx-auto px-5 lg:px-12 py-20 lg:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-[28px] md:text-[38px] font-extrabold text-white leading-tight mb-4">
              Prêt à rejoindre l&apos;EBS ?
            </h2>
            <p className="text-[15px] md:text-[17px] text-white/80 leading-relaxed mb-8 max-w-[400px] mx-auto">
              Préinscription en ligne en 3 minutes. Notre équipe te recontacte
              sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/preinscription"
                className="inline-flex items-center gap-2 bg-white text-[#2B8FAB] font-bold text-[15px] py-3.5 px-8 rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg"
              >
                Commencer ma préinscription
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/nos-programmes"
                className="inline-flex items-center gap-2 font-bold text-[15px] text-white/70 hover:text-white transition-colors py-3.5 px-8"
              >
                Explorer les programmes
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
