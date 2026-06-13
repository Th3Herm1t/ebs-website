"use client";

import Link from "next/link";
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
  ArrowRight,
} from "lucide-react";
import { Badge, CtaSection } from "@/components/shared";
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
    a: "Les frais varient selon le programme : à partir de 6 000 DT/an pour la Licence Informatique, 8 200 DT/an pour les autres Licences, et 8 500 DT/an pour les Masters. Les 150+ certifications sont incluses.",
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
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-penn-navy via-[#1a2035] to-penn-navy" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #2B8FAB 0%, transparent 60%), radial-gradient(circle at 70% 20%, #2B8FAB 0%, transparent 50%)",
          }}
        />

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
              href="/licences"
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

      {/* ═══════════ FINANCING & PAYMENT ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
              >
                <Badge variant="default" size="lg" className="mb-4">
                  Financement & Tarifs
                </Badge>
                <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-tight">
                  Tout est transparent.
                </h2>
              </motion.div>
            </div>
            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.1 }}
                className="text-[16px] text-penn-body leading-relaxed"
              >
                Les frais de scolarité incluent toutes les certifications
                internationales. Aucun coût caché.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                label: "Licence Informatique",
                price: "6 000",
                sub: "14 certifications incluses",
              },
              {
                label: "Autres Licences",
                price: "8 200",
                sub: "10 certifications incluses",
              },
              {
                label: "Masters",
                price: "8 500",
                sub: "4 à 8 certifications incluses",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-penn-bg-light border border-penn-border/40 rounded-2xl p-7"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-penn-body mb-3">
                  {item.label}
                </p>
                <span className="font-extrabold text-3xl text-[#2B8FAB]">
                  {item.price}
                </span>
                <span className="text-penn-body text-sm ml-1">DT/an</span>
                <p className="text-xs text-penn-body mt-2">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              className="bg-penn-bg-light border border-penn-border/40 rounded-2xl p-7"
            >
              <h3 className="font-extrabold text-[16px] text-penn-navy mb-4">
                Facilités de paiement
              </h3>
              <ul className="space-y-3">
                {[
                  "Paiement en 3 tranches (inscription + 2 versements trimestriels)",
                  "Paiement en 4 tranches sur demande (inscription + 3 versements)",
                  "Frais d'inscription : 1 500 DT à la confirmation (déduits du total)",
                  "Réduction fratrie : -10% pour le 2ème enfant inscrit à l'EBS",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] text-penn-body leading-relaxed"
                  >
                    <span
                      className="w-1.5 h-1.5 bg-[#2B8FAB] shrink-0 mt-2 rounded-full"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.1 }}
              className="bg-[#2B8FAB]/5 border border-[#2B8FAB]/15 rounded-2xl p-7"
            >
              <h3 className="font-extrabold text-[16px] text-penn-navy mb-4">
                Conseillère admission
              </h3>
              <p className="text-[14px] text-penn-body leading-relaxed mb-4">
                Pour toute question sur les tarifs, les facilités de paiement ou
                ton dossier, contacte directement notre équipe.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-[14px]">
                  <Phone className="w-4 h-4 text-[#2B8FAB]" />
                  <a
                    href="tel:+21629582835"
                    className="text-penn-navy hover:text-[#2B8FAB] transition-colors font-medium"
                  >
                    +216 29 58 28 35
                  </a>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <svg
                    className="w-4 h-4 text-[#2B8FAB]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a
                    href="mailto:admission@ebs.tn"
                    className="text-penn-navy hover:text-[#2B8FAB] transition-colors font-medium"
                  >
                    admission@ebs.tn
                  </a>
                </div>
                <p className="text-[12px] text-penn-body mt-3">
                  Disponible du lundi au vendredi, 9h–17h.
                </p>
              </div>
            </motion.div>
          </div>
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
                href="/licences"
                className="inline-flex items-center gap-2 font-bold text-[15px] text-white/70 hover:text-white transition-colors py-3.5 px-8"
              >
                Explorer les programmes
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaSection
        title="Des questions sur l'admission ?"
        subtitle="Notre équipe est disponible par téléphone, email ou WhatsApp."
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
        secondaryCta={{ label: "Pré-inscription", href: "/preinscription" }}
        background="penn-navy"
      />
    </>
  );
}