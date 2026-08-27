"use client";

import { useDeferredValue, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";
import { Badge, CtaSection } from "@/components/shared";
import { providers } from "@/lib/certifications/providers";
import {
  finalCertificationCatalogue,
  getCertificationLogo,
  getPublicCertificationCount,
  type CertificationClassification,
  type CertificationRequirement,
} from "@/lib/certifications/final-catalogue";
import { fadeUp, staggerDelay, transitions, viewportOnce } from "@/lib/animation";

const providerList = Object.values(providers);
const publicCertifications = finalCertificationCatalogue.filter((certification) => certification.publicVisible);
const totalCerts = getPublicCertificationCount();
const initialVisibleCount = 36;

const classificationLabels: Record<CertificationClassification, string> = {
  "ai-literacy": "Culture IA",
  "applied-ai": "IA appliquée",
  "non-ai": "Métier & outils",
};

const requirementLabels: Record<CertificationRequirement, string> = {
  mandatory: "Obligatoire",
  optional: "Optionnel",
};

const classificationOptions: Array<{ value: "all" | CertificationClassification; label: string; help: string }> = [
  { value: "all", label: "Toutes", help: "Catalogue complet" },
  { value: "ai-literacy", label: "Culture IA", help: "Socle transversal" },
  { value: "applied-ai", label: "IA appliquée", help: "IA par métier" },
  { value: "non-ai", label: "Métier", help: "Compétences pro" },
];

const requirementOptions: Array<{ value: "all" | CertificationRequirement; label: string }> = [
  { value: "all", label: "Tous" },
  { value: "mandatory", label: "Obligatoires" },
  { value: "optional", label: "Optionnels" },
];

const programmeLabels: Record<string, string> = {
  management: "Management",
  marketing: "Marketing",
  finance: "Finance",
  "informatique-ia": "Info IA",
  cybersecurite: "Cyber",
  "marketing-digital-ia": "Mktg IA",
  crm: "CRM",
  startups: "Projets",
  "ingenierie-financiere": "Ing. Fin.",
};

const classStats = [
  {
    key: "ai-literacy" as const,
    label: "Culture IA",
    count: publicCertifications.filter((certification) => certification.classification === "ai-literacy").length,
    description: "Fondamentaux, prompting, agents et productivité IA.",
  },
  {
    key: "applied-ai" as const,
    label: "IA appliquée",
    count: publicCertifications.filter((certification) => certification.classification === "applied-ai").length,
    description: "Marketing, finance, CRM, data, cyber et automatisation.",
  },
  {
    key: "non-ai" as const,
    label: "Métier & outils",
    count: publicCertifications.filter((certification) => certification.classification === "non-ai").length,
    description: "Certifications métier qui renforcent l'employabilité.",
  },
];

export default function CertificationsPage() {
  const [classificationFilter, setClassificationFilter] = useState<"all" | CertificationClassification>("all");
  const [requirementFilter, setRequirementFilter] = useState<"all" | CertificationRequirement>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const deferredSearchTerm = useDeferredValue(searchTerm.trim().toLowerCase());
  const prefersReducedMotion = useReducedMotion();

  const filteredCertifications = publicCertifications.filter((certification) => {
    const matchesClassification =
      classificationFilter === "all" || certification.classification === classificationFilter;
    const matchesRequirement =
      requirementFilter === "all" || certification.requirement === requirementFilter;
    const searchable = [
      certification.name,
      certification.displayProvider,
      certification.provider,
      certification.recommendedYear,
      classificationLabels[certification.classification],
      requirementLabels[certification.requirement],
      ...certification.programmes.map((programme) => programmeLabels[programme] ?? programme),
    ]
      .join(" ")
      .toLowerCase();
    const matchesSearch = !deferredSearchTerm || searchable.includes(deferredSearchTerm);

    return matchesClassification && matchesRequirement && matchesSearch;
  });

  const displayedCertifications = filteredCertifications.slice(0, visibleCount);
  const mandatoryCount = publicCertifications.filter((certification) => certification.requirement === "mandatory").length;
  const optionalCount = publicCertifications.filter((certification) => certification.requirement === "optional").length;

  function resetVisibleCount() {
    setVisibleCount(initialVisibleCount);
  }

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-24 lg:pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-penn-navy via-[#141b31] to-[#07111f]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #2B8FAB 0%, transparent 36%), radial-gradient(circle at 78% 18%, #8b5cf6 0%, transparent 32%), radial-gradient(circle at 52% 86%, #2B8FAB 0%, transparent 34%)" }} />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={transitions.hero}>
              <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">
                AI Passport EBS · Catalogue international de certifications
              </Badge>

              <h1 className="text-[42px] md:text-[60px] lg:text-[76px] font-extrabold text-white leading-[1.02] tracking-[-1.5px] mb-6">
                Plus de {totalCerts} certifications.
                <br />
                <span className="text-penn-green">Un parcours structuré.</span>
              </h1>

              <p className="text-[17px] md:text-[19px] text-white/70 leading-relaxed max-w-[720px] mb-10">
                Un catalogue organisé par programme, associant des certifications obligatoires constituant le socle EBS et des certifications optionnelles permettant à chaque étudiant de construire un profil différenciant.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="#catalogue" className="inline-flex h-12 items-center gap-2 rounded-full bg-penn-green px-7 text-[14px] font-extrabold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5">
                  Explorer le catalogue
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/ia-et-certifications" className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-7 text-[14px] font-extrabold uppercase tracking-wide text-white/85 hover:border-white/30 hover:bg-white/5">
                  Voir l'approche IA
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-[720px]">
                {classStats.map((stat) => (
                  <div key={stat.key} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-sm">
                    <p className="text-[30px] md:text-[38px] font-extrabold text-white leading-none">{stat.count}</p>
                    <p className="mt-2 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.08em] text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ ...transitions.hero, delay: prefersReducedMotion ? 0 : 0.12 }} className="relative">
              <div className="absolute -inset-4 rounded-[34px] bg-penn-green/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-white/45">Catalogue actif</p>
                    <p className="mt-1 text-[44px] font-extrabold leading-none text-white">{totalCerts}</p>
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-penn-green/15 flex items-center justify-center text-penn-green">
                    <Award className="w-7 h-7" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 py-5">
                  <div className="rounded-2xl bg-white/[0.055] p-4">
                    <p className="text-[28px] font-extrabold text-white leading-none">{mandatoryCount}</p>
                    <p className="mt-2 text-[12px] font-bold text-white/50">Obligatoires</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.055] p-4">
                    <p className="text-[28px] font-extrabold text-penn-green leading-none">{optionalCount}</p>
                    <p className="mt-2 text-[12px] font-bold text-white/50">Optionnelles</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "9 programmes couverts",
                    "Cartes publiques sans liens externes",
                    "Simulations Forage affichées par organisation",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-[14px] font-bold text-white/75">
                      <CheckCircle2 className="w-4 h-4 text-penn-green" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </section>

      <section id="catalogue" className="section-padding bg-[#F7FAFC]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <Badge variant="default" size="lg" className="mb-4">Notre catalogue de certifications</Badge>
              <h2 className="text-[34px] md:text-[48px] font-extrabold text-penn-navy leading-[1.08] tracking-[-0.5px]">
                Plus qu'une liste de certifications.
                <br />
                Un véritable parcours de compétences.
              </h2>
              <p className="text-[16px] text-penn-body mt-4 max-w-[690px] leading-relaxed">
                Filtrez les certifications par catégorie, niveau d'études et caractère obligatoire. L'accès aux plateformes de certification est réservé aux étudiants EBS.
              </p>
            </div>
            <div className="rounded-2xl border border-penn-border bg-white px-5 py-4 shadow-sm">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-penn-body/50">Résultats affichés</p>
              <p className="mt-1 text-[28px] font-extrabold text-penn-navy leading-none">{filteredCertifications.length}</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 items-start">
            <aside className="lg:sticky lg:top-24 rounded-[28px] border border-penn-border bg-white p-5 shadow-sm">
              <label className="relative block mb-5">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-penn-body/45" />
                <input
                  value={searchTerm}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                    resetVisibleCount();
                  }}
                  placeholder="Rechercher Google, finance, M1..."
                  className="h-12 w-full rounded-2xl border border-penn-border bg-penn-bg-light pl-11 pr-4 text-[14px] font-semibold text-penn-navy outline-none transition-colors focus:border-penn-green focus:bg-white"
                />
              </label>

              <div className="space-y-5">
                <div>
                  <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.12em] text-penn-body/55">Classification</p>
                  <div className="space-y-2">
                    {classificationOptions.map((option) => {
                      const active = classificationFilter === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setClassificationFilter(option.value);
                            resetVisibleCount();
                          }}
                          className={`w-full rounded-2xl border px-4 py-3 text-left transition-all ${active ? "border-penn-green bg-penn-green/10 text-penn-navy" : "border-penn-border bg-white text-penn-body hover:border-penn-green/35"}`}
                        >
                          <span className="block text-[14px] font-extrabold">{option.label}</span>
                          <span className="block text-[12px] text-penn-body/60">{option.help}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.12em] text-penn-body/55">Statut</p>
                  <div className="grid grid-cols-1 gap-2">
                    {requirementOptions.map((option) => {
                      const active = requirementFilter === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setRequirementFilter(option.value);
                            resetVisibleCount();
                          }}
                          className={`h-11 rounded-2xl border px-4 text-[13px] font-extrabold transition-all ${active ? "border-penn-navy bg-penn-navy text-white" : "border-penn-border bg-white text-penn-body hover:border-penn-navy/25"}`}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>

            <div>
              <div className="mb-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                {classStats.map((stat) => (
                  <button
                    key={stat.key}
                    type="button"
                    onClick={() => {
                      setClassificationFilter(stat.key);
                      resetVisibleCount();
                    }}
                    className="group rounded-2xl border border-penn-border bg-white p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-penn-green/35 hover:shadow-md"
                  >
                    <p className="text-[30px] font-extrabold text-penn-navy leading-none">{stat.count}</p>
                    <p className="mt-2 text-[14px] font-extrabold text-penn-navy group-hover:text-penn-green">{stat.label}</p>
                    <p className="mt-1 text-[12px] text-penn-body/65 leading-relaxed">{stat.description}</p>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {displayedCertifications.map((certification, i) => {
                  const logo = getCertificationLogo(certification);
                  const programmePreview = certification.programmes.slice(0, 2).map((programme) => programmeLabels[programme] ?? programme).join(" · ");
                  const remainingProgrammes = certification.programmes.length - 2;

                  return (
                    <motion.article
                      key={certification.id}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ ...transitions.quick, delay: prefersReducedMotion ? 0 : staggerDelay(i, 0.16) }}
                      className="group relative overflow-hidden rounded-[22px] border border-penn-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-penn-green/35 hover:shadow-xl motion-reduce:hover:translate-y-0"
                    >
                      <div className={`absolute inset-x-0 top-0 h-1 ${certification.requirement === "mandatory" ? "bg-penn-green" : "bg-penn-navy/18"}`} />
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="h-11 min-w-0 flex items-center">
                          {logo ? (
                            <Image src={logo} alt={certification.displayProvider} width={126} height={40} className="h-9 w-auto max-w-[126px] object-contain opacity-80 transition-opacity group-hover:opacity-100" unoptimized />
                          ) : (
                            <span className="text-[13px] font-extrabold text-penn-navy">{certification.displayProvider}</span>
                          )}
                        </div>
                        <span className={`rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] ${certification.requirement === "mandatory" ? "bg-penn-green/10 text-penn-green" : "bg-penn-bg-light text-penn-body"}`}>
                          {requirementLabels[certification.requirement]}
                        </span>
                      </div>

                      <h3 className="min-h-[54px] text-[16px] font-extrabold text-penn-navy leading-snug group-hover:text-penn-green transition-colors">
                        {certification.name}
                      </h3>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-penn-bg-light px-3 py-1 text-[11px] font-bold text-penn-body">{classificationLabels[certification.classification]}</span>
                        <span className="rounded-full bg-penn-bg-light px-3 py-1 text-[11px] font-bold text-penn-body">{certification.recommendedYear}</span>
                        {certification.publicNote && <span className="rounded-full bg-penn-bg-light px-3 py-1 text-[11px] font-bold text-penn-body">{certification.publicNote}</span>}
                      </div>

                      <div className="mt-5 border-t border-penn-border pt-4">
                        <p className="text-[12px] font-bold text-penn-body/65">
                          {programmePreview}{remainingProgrammes > 0 ? ` · +${remainingProgrammes}` : ""}
                        </p>
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              {visibleCount < filteredCertifications.length && (
                <div className="mt-9 text-center">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((count) => count + 36)}
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-penn-navy px-7 text-[14px] font-extrabold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
                  >
                    Afficher plus
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <Badge variant="default" size="lg" className="mb-4">Organismes de certification</Badge>
              <h2 className="text-[34px] md:text-[46px] font-extrabold text-penn-navy leading-[1.1]">
                Les plus grandes références internationales.
              </h2>
              <p className="mt-4 text-[16px] text-penn-body leading-relaxed">
                Les plus grands organismes de certification réunis dans un seul catalogue. Les informations détaillées, les liens d'accès et le suivi des certifications sont réservés aux étudiants EBS.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {providerList.slice(0, 12).map((provider, i) => (
                <motion.div
                  key={provider.slug}
                  initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ ...transitions.quick, delay: prefersReducedMotion ? 0 : staggerDelay(i, 0.16) }}
                  className="flex h-24 items-center justify-center rounded-2xl border border-penn-border bg-penn-bg-light p-4"
                >
                  <Image src={provider.logo} alt={provider.name} width={132} height={42} className="max-h-10 w-auto object-contain opacity-75" unoptimized />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #2B8FAB 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-14">
            <Badge variant="outline" size="lg" className="mb-4 border-white/20 text-white/80">Pourquoi EBS ?</Badge>
            <h2 className="text-[34px] md:text-[48px] font-extrabold text-white leading-[1.1]">
              Un système de reconnaissance des compétences,
              <br />
              bien plus qu'une collection de badges.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              { icon: <Trophy className="w-6 h-6" />, title: "Reconnaissance mondiale", text: "Des certifications délivrées par des organismes reconnus par les recruteurs et les grandes entreprises." },
              { icon: <Zap className="w-6 h-6" />, title: "Inclus dans la formation", text: "Le parcours de certifications est intégré à la formation et accompagne la progression de chaque étudiant." },
              { icon: <BookOpen className="w-6 h-6" />, title: "9 programmes couverts", text: "Chaque licence et chaque master disposent d'un parcours de certifications adapté." },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Charge maîtrisée", text: "Jusqu'à 12 certifications obligatoires par programme afin de garantir un apprentissage progressif et cohérent." },
              { icon: <Sparkles className="w-6 h-6" />, title: "IA dans chaque filière", text: "Culture IA, IA appliquée et compétences métier sont intégrées dans tous les parcours." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ ...transitions.reveal, delay: prefersReducedMotion ? 0 : staggerDelay(i, 0.2) }}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-6 transition-all hover:bg-white/[0.055]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-penn-green/10 text-penn-green">{item.icon}</div>
                <h3 className="text-[17px] font-extrabold text-white mb-2">{item.title}</h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-[34px] md:text-[44px] font-extrabold text-penn-navy text-center mb-14">
            Construisez votre profil certifié EBS.
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <GraduationCap className="w-6 h-6" />, title: "Nos Licences", desc: "4 Licences avec des parcours de certifications dédiés.", href: "/licences", label: "Explorer" },
              { icon: <Trophy className="w-6 h-6" />, title: "Nos Masters", desc: "4 Masters professionnels avec des certifications avancées.", href: "/masters", label: "Explorer" },
              { icon: <Sparkles className="w-6 h-6" />, title: "IA & Certifications", desc: "Découvrez comment l'Intelligence Artificielle transforme l'employabilité.", href: "/ia-et-certifications", label: "Découvrir" },
              { icon: <Award className="w-6 h-6" />, title: "Pré-inscription", desc: "Les candidatures 2026/2027 sont ouvertes. Bénéficiez de nos avantages en cours en déposant votre candidature dès aujourd'hui.", href: "/preinscription", label: "Postuler" },
            ].map((card, i) => (
              <motion.div key={card.title} initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }} whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ ...transitions.quick, delay: prefersReducedMotion ? 0 : staggerDelay(i, 0.16) }}>
                <Link href={card.href} className="group bg-white rounded-2xl border border-penn-border p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-penn-green/30">
                  <div className="w-12 h-12 rounded-xl bg-penn-green/10 flex items-center justify-center mb-4 text-penn-green group-hover:scale-110 transition-transform">{card.icon}</div>
                  <h3 className="text-[17px] font-extrabold text-penn-navy mb-2 group-hover:text-penn-green transition-colors">{card.title}</h3>
                  <p className="text-[14px] text-penn-body leading-relaxed mb-4 flex-1">{card.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-penn-green">
                    {card.label}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Rejoignez une formation qui transforme les certifications en véritable avantage professionnel."
        subtitle="Candidatures 2026/2027 ouvertes. Déposez votre dossier dès maintenant."
        primaryCta={{ label: "Voir nos programmes", href: "/nos-programmes" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
