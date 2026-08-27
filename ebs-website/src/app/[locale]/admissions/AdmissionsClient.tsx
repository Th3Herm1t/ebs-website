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
  Calendar,
  Sparkles,
  HelpCircle,
  Award,
  Users,
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

const faqAdmissions = [
  {
    q: "Y a-t-il un concours d'entrée ?",
    a: "Non. L'admission à EBS se fait sur étude du dossier académique et de la motivation du candidat.",
  },
  {
    q: "Quand ouvrent les inscriptions ?",
    a: "Les inscriptions sont ouvertes chaque année pour la prochaine rentrée universitaire, dans la limite des places disponibles.",
  },
  {
    q: "Peut-on s'inscrire en cours d'année ?",
    a: "En principe, les inscriptions ne sont pas possibles en cours d'année. Des admissions exceptionnelles peuvent toutefois être envisagées au cas par cas et sous réserve de l'autorisation du Ministère de l'Enseignement Supérieur et de la Recherche Scientifique.",
  },
  {
    q: "EBS est-elle agréée par l'État tunisien ?",
    a: "Oui. ESPIMA Business School est une université privée agréée par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique sous le n° 02-2013.",
  },
  {
    q: "Des facilités de paiement ou des réductions sont-elles proposées ?",
    a: "Oui. EBS propose des facilités de paiement ainsi que des réductions selon les conditions et offres en vigueur. Pour connaître les modalités applicables, contactez le service Scolarité.",
  },
  {
    q: "Quels Baccalauréats permettent de s'inscrire en Licence ?",
    a: "L'admission en Licence est ouverte aux titulaires du Baccalauréat, toutes sections sauf Lettres et Sport.",
  },
  {
    q: "Puis-je intégrer EBS après avoir commencé mes études dans une autre université ?",
    a: "Oui. Une admission peut être étudiée en fonction de votre niveau, de votre filière et des études déjà validées. L'équivalence et le niveau d'intégration sont examinés sur dossier.",
  },
  {
    q: "Puis-je poursuivre mes études à l'étranger après EBS ?",
    a: "Oui. EBS dispose de partenaires académiques internationaux en France, au Canada, en Italie et à Oman, offrant différentes possibilités de poursuite d'études selon votre filière, votre niveau et les conditions du partenaire.",
  },
  {
    q: "Dois-je choisir le Parcours International dès ma première année ?",
    a: "Oui. Le Parcours International est une classe spécifique à choisir dès la première année. L'admission chez un partenaire reste soumise à l'étude du dossier et à ses conditions d'admission.",
  },
  {
    q: "Peut-on intégrer un Master EBS avec une Licence obtenue dans une autre université ?",
    a: "Oui, sous réserve que votre Licence ou diplôme Bac+3 soit compatible avec le Master choisi et après étude de votre dossier.",
  },
  {
    q: "Les étudiants internationaux peuvent-ils s'inscrire à EBS ?",
    a: "Oui. EBS accueille des étudiants internationaux et les accompagne dans leur candidature ainsi que dans la préparation de leur arrivée et de leur installation en Tunisie.",
  },
  {
    q: "EBS accompagne-t-elle les étudiants pour le visa ?",
    a: "Oui. Pour les étudiants internationaux, EBS apporte un accompagnement dans la préparation des démarches administratives liées à leur venue en Tunisie. Pour les mobilités à l'étranger, l'accompagnement dépend de la destination et du partenariat.",
  },
  {
    q: "La pré-inscription est-elle définitive ?",
    a: "Non. La pré-inscription permet de déposer votre candidature et de démarrer l'étude de votre dossier. L'inscription définitive intervient après validation de l'admission et accomplissement des formalités demandées.",
  },
  {
    q: "Puis-je être conseillé avant de choisir ma filière ?",
    a: "Oui. L'équipe EBS peut vous accompagner pour identifier le programme le plus adapté à votre profil, vos objectifs et votre projet professionnel.",
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
              Commencer ma pré-inscription
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

      {/* ═══════════ DOCUMENTS REQUIS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">
              Dossier d'admission
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Documents requis
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[960px] mx-auto">
            {/* Licence Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-penn-bg-light rounded-3xl p-8 border border-penn-border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center text-[#2B8FAB]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-extrabold text-penn-navy">Licence</h3>
                    <p className="text-[12px] font-bold text-[#2B8FAB] uppercase tracking-wider">
                      Baccalauréat accepté : toutes sections sauf Lettres et Sport
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  {requirementsLicence.map((req) => (
                    <div key={req} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#2B8FAB]/10 flex items-center justify-center text-[#2B8FAB] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-[14px] text-penn-body font-medium">{req}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-penn-border/60">
                <Link
                  href="/licences"
                  className="inline-flex items-center gap-2 text-[14px] font-bold text-[#2B8FAB] hover:underline"
                >
                  Voir les parcours Licence <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Master Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-penn-bg-light rounded-3xl p-8 border border-penn-border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#9C27B0]/10 flex items-center justify-center text-[#9C27B0]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-extrabold text-penn-navy">Master</h3>
                    <p className="text-[12px] font-bold text-[#9C27B0] uppercase tracking-wider">
                      Bac+3 requis
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  {requirementsMaster.map((req) => (
                    <div key={req} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#9C27B0]/10 flex items-center justify-center text-[#9C27B0] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-[14px] text-penn-body font-medium">{req}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-penn-border/60">
                <Link
                  href="/masters"
                  className="inline-flex items-center gap-2 text-[14px] font-bold text-[#9C27B0] hover:underline"
                >
                  Voir les Masters <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ FORMATIONS & TARIFS ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">
              Nos formations
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15] mb-4">
              Licences & Masters
            </h2>
            <p className="text-[16px] text-penn-body max-w-[650px] mx-auto">
              Des formations professionnalisantes, avec des diplômes agréés par l'État tunisien et plus de 150 certifications internationales reconnues.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Licence Général */}
            <div className="bg-white rounded-2xl p-7 border border-penn-border shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-wider text-penn-body/50 block mb-1">
                  Parcours Général
                </span>
                <h3 className="text-[20px] font-extrabold text-penn-navy mb-2">Licence</h3>
                <p className="text-[26px] font-extrabold text-[#2B8FAB] mb-4">7 500 DT <span className="text-[14px] text-penn-body font-normal">/ an</span></p>
                <div className="space-y-2 text-[13px] text-penn-body mb-6">
                  <p className="font-bold text-penn-navy">4 Licences et 5 parcours :</p>
                  <p>• Management</p>
                  <p>• Finance</p>
                  <p>• Marketing</p>
                  <p>• Informatique – Génie logiciel & Systèmes d'information (Option IA / Cybersécurité)</p>
                  <p className="pt-2 font-medium text-penn-body/60">3 ans • Bac+3 • 6 semestres</p>
                </div>
              </div>
              <Link href="/licences" className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-penn-bg-light text-penn-navy font-bold text-[13px] hover:bg-[#2B8FAB] hover:text-white transition-all">
                Voir les parcours
              </Link>
            </div>

            {/* Card 2: Parcours International */}
            <div className="bg-white rounded-2xl p-7 border border-[#2B8FAB]/30 shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#2B8FAB] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
                International
              </div>
              <div>
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#2B8FAB] block mb-1">
                  Parcours International
                </span>
                <h3 className="text-[20px] font-extrabold text-penn-navy mb-2">Licence (toutes spécialités)</h3>
                <p className="text-[26px] font-extrabold text-[#2B8FAB] mb-4">9 500 DT <span className="text-[14px] text-penn-body font-normal">/ an</span></p>
                <div className="space-y-2 text-[13px] text-penn-body mb-6">
                  <p className="font-bold text-penn-navy">3 destinations :</p>
                  <p>• L1 en Tunisie → Bachelor 2 ou Bachelor 3 en Italie</p>
                  <p>• L2 en Tunisie → Bachelor 3 en France</p>
                  <p>• Licence à EBS → Master ou Maîtrise en France, au Canada ou en Italie</p>
                  <p className="pt-2 font-medium text-penn-body/60">3 ans • Mobilité internationale</p>
                </div>
              </div>
              <Link href="/parcours-international" className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#2B8FAB] text-white font-bold text-[13px] hover:bg-[#2B8FAB]/90 transition-all">
                Voir les destinations
              </Link>
            </div>

            {/* Card 3: Masters */}
            <div className="bg-white rounded-2xl p-7 border border-penn-border shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-wider text-penn-body/50 block mb-1">
                  Diplôme Bac+5
                </span>
                <h3 className="text-[20px] font-extrabold text-penn-navy mb-2">Masters</h3>
                <p className="text-[26px] font-extrabold text-[#9C27B0] mb-4">8 500 DT <span className="text-[14px] text-penn-body font-normal">/ an</span></p>
                <div className="space-y-2 text-[13px] text-penn-body mb-6">
                  <p className="font-bold text-penn-navy">4 Masters :</p>
                  <p>• Management de Projets Innovants & Startups</p>
                  <p>• CRM Marketing & Transformation Digitale</p>
                  <p>• Marketing Digital & Intelligence Artificielle</p>
                  <p>• Ingénierie Financière</p>
                  <p className="pt-2 font-medium text-penn-body/60">2 ans • Bac+5 • 4 semestres</p>
                </div>
              </div>
              <Link href="/masters" className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-penn-bg-light text-penn-navy font-bold text-[13px] hover:bg-[#9C27B0] hover:text-white transition-all">
                Voir les Masters
              </Link>
            </div>

            {/* Card 4: Master pour les professionnels */}
            <div className="bg-white rounded-2xl p-7 border border-penn-border shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-wider text-penn-body/50 block mb-1">
                  Horaires aménagés
                </span>
                <h3 className="text-[20px] font-extrabold text-penn-navy mb-2">Master Professionnels</h3>
                <p className="text-[26px] font-extrabold text-[#FF9800] mb-4">6 900 DT <span className="text-[14px] text-penn-body font-normal">/ an</span></p>
                <p className="text-[12px] text-penn-body/70 mb-3 leading-snug">
                  Conciliez études et activité professionnelle grâce à un emploi du temps aménagé.
                </p>
                <div className="space-y-1.5 text-[13px] text-penn-body mb-6">
                  <p>• Management de Projets Innovants & Startups</p>
                  <p>• CRM Marketing & Transformation Digitale</p>
                  <p>• Marketing Digital & Intelligence Artificielle</p>
                  <p>• Ingénierie Financière</p>
                  <p className="pt-2 font-medium text-penn-body/60">2 ans • Bac+5 • Emploi du temps aménagé</p>
                </div>
              </div>
              <Link href="/masters" className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-penn-bg-light text-penn-navy font-bold text-[13px] hover:bg-[#FF9800] hover:text-white transition-all">
                Voir les Masters
              </Link>
            </div>
          </div>

          {/* Banner Contact Tarifs */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-penn-border flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-[20px] font-extrabold text-penn-navy mb-2">
                Obtenez toutes les informations sur nos tarifs
              </h4>
              <p className="text-[15px] text-penn-body max-w-[680px]">
                Notre équipe vous répond sous 24 h et vous informe sur les frais de scolarité, réductions disponibles et facilités de paiement selon le programme choisi.
              </p>
            </div>
            <a
              href="tel:+21655582843"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#2B8FAB] text-white font-bold text-[14px] hover:bg-[#2B8FAB]/90 transition-all shrink-0"
            >
              <Phone className="w-4 h-4" />
              +216 55 582 843
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ CALENDRIER & DATES CLÉS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-center">
            {/* Left: Summary cards */}
            <div>
              <Badge variant="default" size="lg" className="mb-4">
                Calendrier
              </Badge>
              <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15] mb-8">
                Dates clés
              </h2>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-penn-bg-light border border-penn-border">
                  <span className="text-[12px] font-bold text-[#2B8FAB] uppercase tracking-wider block mb-1">
                    Rentrée principale
                  </span>
                  <p className="text-[20px] font-extrabold text-penn-navy">Octobre 2026</p>
                  <p className="text-[13px] text-penn-body mt-1">Début des cours : première semaine d'octobre.</p>
                </div>

                <div className="p-5 rounded-2xl bg-penn-bg-light border border-penn-border">
                  <span className="text-[12px] font-bold text-[#2B8FAB] uppercase tracking-wider block mb-1">
                    Places disponibles
                  </span>
                  <p className="text-[20px] font-extrabold text-penn-navy">Environ 30 places par filière</p>
                  <p className="text-[13px] text-penn-body mt-1">Les inscriptions sont traitées dans l'ordre de réception des dossiers complets.</p>
                </div>

                <div className="p-5 rounded-2xl bg-penn-bg-light border border-penn-border">
                  <span className="text-[12px] font-bold text-[#2B8FAB] uppercase tracking-wider block mb-1">
                    Date limite
                  </span>
                  <p className="text-[20px] font-extrabold text-penn-navy">30 septembre 2026</p>
                  <p className="text-[13px] text-penn-body mt-1">Les inscriptions restent ouvertes dans la limite des places disponibles.</p>
                </div>
              </div>
            </div>

            {/* Right: Steps Timeline */}
            <div className="space-y-4">
              {calendarEvents.map((evt, i) => (
                <div key={evt.period} className="p-6 rounded-2xl border border-penn-border bg-white shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center text-[#2B8FAB] font-extrabold text-[14px] shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <span className="text-[12px] font-extrabold text-[#2B8FAB] uppercase tracking-wider">
                      {evt.period}
                    </span>
                    <h4 className="text-[17px] font-extrabold text-penn-navy mb-1">{evt.label}</h4>
                    <p className="text-[14px] text-penn-body leading-relaxed">{evt.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ADMISSIONS ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">
              FAQ Admissions
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Questions fréquentes sur les admissions
            </h2>
          </motion.div>

          <Accordion className="space-y-4">
            {faqAdmissions.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white border border-penn-border rounded-2xl px-6 data-[state=open]:border-[#2B8FAB]/40 transition-colors"
              >
                <AccordionTrigger className="text-[16px] md:text-[17px] font-bold text-penn-navy py-5 hover:no-underline hover:text-[#2B8FAB]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] text-penn-body leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaSection
        title="Prêt(e) à rejoindre EBS ?"
        subtitle="Pré-inscription en ligne en quelques minutes. Notre équipe vous recontacte dans les meilleurs délais pour vous accompagner dans votre projet d'études."
        primaryCta={{ label: "Commencer ma pré-inscription", href: "/preinscription" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
