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
    title: "Pré-inscription en ligne",
    description:
      "Complétez le formulaire en quelques minutes en indiquant vos informations personnelles et le programme souhaité.",
    icon: <FileText className="w-8 h-8" />,
    color: "#2B8FAB",
  },
  {
    num: "02",
    title: "Étude du dossier",
    description:
      "Notre équipe étudie votre dossier dans les meilleurs délais. L'admission repose sur votre parcours académique, votre projet d'études et votre motivation.",
    icon: <FolderOpen className="w-8 h-8" />,
    color: "#2196F3",
  },
  {
    num: "03",
    title: "Entretien de motivation",
    description:
      "Un échange permettant de mieux comprendre votre projet académique et professionnel, de répondre à vos questions et de vous accompagner dans votre orientation.",
    icon: <MessageSquare className="w-8 h-8" />,
    color: "#E91E8C",
  },
  {
    num: "04",
    title: "Confirmation d'inscription",
    description:
      "Après validation de votre dossier, vous finalisez votre inscription avec les pièces et formalités demandées.",
    icon: <CheckCircle className="w-8 h-8" />,
    color: "#FF9800",
  },
];

const requirementsLicence = [
  "Diplôme ou attestation du Baccalauréat",
  "Relevé de notes du Baccalauréat",
  "Copie de la carte d'identité nationale",
  "Photo d'identité récente",
];

const requirementsMaster = [
  "Diplôme de Licence ou diplôme équivalent (Bac+3)",
  "Relevés de notes des trois années de Licence",
  "Copie de la carte d'identité nationale",
  "Curriculum Vitae (CV) actualisé",
  "Lettre de motivation",
  "Photo d'identité récente",
];

const calendarEvents = [
  {
    period: "Mai – Juin",
    label: "Ouverture des inscriptions",
    detail: "Pré-inscription en ligne ouverte. Les premiers dossiers sont étudiés en priorité.",
  },
  {
    period: "Juillet – Août",
    label: "Entretiens de motivation",
    detail: "Des sessions sont organisées régulièrement. Les réponses sont communiquées dans les meilleurs délais après l'entretien.",
  },
  {
    period: "Septembre",
    label: "Dernières places disponibles",
    detail: "Les inscriptions restent possibles sous réserve des places disponibles.",
  },
  {
    period: "Fin septembre",
    label: "Rentrée universitaire",
    detail: "Début des cours, semaine d'intégration et présentation des certifications internationales.",
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
              Admission sur dossier · Étude personnalisée
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[42px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
          >
            Votre admission,
            <br />
            <span className="text-[#2B8FAB]">étape par étape</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[17px] md:text-[18px] text-white/70 leading-relaxed max-w-[600px] mb-12"
          >
            L&apos;admission à EBS repose sur l&apos;étude de votre dossier académique, de votre parcours et de votre motivation. Découvrez les différentes étapes pour rejoindre EBS.
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
              4 étapes vers votre inscription
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
              <Image
                src={src}
                alt="Campus EBS"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

    </>
  );
}
