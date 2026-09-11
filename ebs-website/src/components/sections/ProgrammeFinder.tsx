"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@/i18n/routing";
import {
  ArrowLeft,
  BarChart3,
  BarChartHorizontal,
  Briefcase,
  Code2,
  Globe,
  HelpCircle,
  Lightbulb,
  LineChart,
  Megaphone,
  Monitor,
  Landmark,
  RefreshCw,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Badge } from "@/components/shared";
import { licences } from "@/lib/programmes/licences";
import { masters } from "@/lib/programmes/masters";
import { getPublicCatalogueV3ProgrammeSummary } from "@/lib/certifications/v3";
import { siteStats } from "@/lib/site-stats";

/* ── Programme data for both quiz & compare ── */
const allProgrammes = [
  { key: "management", name: "Licence Management", degree: "Licence", slug: "licences/management", color: "#2196F3", certs: 57, duration: "3 ans", level: "Bac", intl: "UQAT (CA) · EM Normandie (FR) · PSB (FR)", careers: "Chef de projet, Manager, Consultant", data: licences.management },
  { key: "marketing", name: "Licence Marketing", degree: "Licence", slug: "licences/marketing", color: "#E91E8C", certs: 81, duration: "3 ans", level: "Bac", intl: "EM Normandie (FR) · Sup'de Com (FR)", careers: "Digital Marketer, Social Media Mgr, SEO", data: licences.marketing },
  { key: "finance", name: "Licence Finance", degree: "Licence", slug: "licences/finance", color: "#00BCD4", certs: 64, duration: "3 ans", level: "Bac", intl: "IGEFI (FR) · PSB (FR) · EM Normandie (FR)", careers: "Analyste financier, Contrôleur, Auditeur", data: licences.finance },
  { key: "info-ia", name: "Info — Intelligence Artificielle", degree: "Licence", slug: "licences/informatique-ia", color: "#9C27B0", certs: 87, duration: "3 ans", level: "Bac", intl: "Epitech (FR) · EPSI (FR) · GUtech (OM)", careers: "Data Scientist, ML Engineer, AI Dev", data: licences["informatique-ia"] },
  { key: "info-cyber", name: "Info — Cybersécurité", degree: "Licence", slug: "licences/cybersecurite", color: "#FF9800", certs: 63, duration: "3 ans", level: "Bac", intl: "Epitech (FR) · EPSI (FR) · GUtech (OM)", careers: "Pentester, SOC Analyst, RSSI", data: licences.cybersecurite },
  { key: "crm", name: "Master CRM & Digital", degree: "Master", slug: "masters/crm", color: "#E91E63", certs: 73, duration: "2 ans", level: "Bac+3", intl: "EM Normandie (FR) · UQAT (CA)", careers: "CRM Manager, Growth Hacker, CDO", data: masters.crm },
  { key: "mkt-ia", name: "Master Marketing Digital & IA", degree: "Master", slug: "masters/marketing-digital-ia", color: "#E91E8C", certs: 81, duration: "2 ans", level: "Bac+3", intl: "EM Normandie (FR) · Sup'de Com (FR)", careers: "Directeur Marketing Digital, Growth Hacker", data: masters["marketing-digital-ia"] },
  { key: "startups", name: "Master Projets Innovants", degree: "Master", slug: "masters/startups", color: "#5E35B1", certs: 59, duration: "2 ans", level: "Bac+3", intl: "UQAT (CA) · EM Normandie (FR)", careers: "Chef de projet, Product Owner, Entrepreneur", data: masters.startups },
  { key: "ing-fin", name: "Master Ingénierie Financière", degree: "Master", slug: "masters/ingenierie-financiere", color: "#00897B", certs: 64, duration: "2 ans", level: "Bac+3", intl: "IGEFI (FR) · PSB (FR) · UQAT (CA)", careers: "Analyste M&A, Risk Manager, CFO", data: masters["ingenierie-financiere"] },
].map((programme) => ({
  ...programme,
  name: programme.data.title,
    certs: getPublicCatalogueV3ProgrammeSummary(programme.data.catalogueId).total,
}));

export type OrientationProgramme = (typeof allProgrammes)[number];

/* ── Quiz content and logic ── */
type Tab = "quiz" | "compare";

type QuizAnswer = {
  field: string;
  level: string;
  priority: string;
  work: string;
  goal: string;
};

type Recommendation = {
  programme: OrientationProgramme;
  score: number;
  reasons: string[];
};

const questions = [
  {
    q: "Quel domaine t'attire le plus ?",
    options: [
      { val: "tech", label: "Technologie & Code", icon: <Code2 className="w-5 h-5" /> },
      { val: "biz", label: "Business & Stratégie", icon: <Briefcase className="w-5 h-5" /> },
      { val: "mkt", label: "Marketing & Communication", icon: <Megaphone className="w-5 h-5" /> },
      { val: "fin", label: "Finance & Chiffres", icon: <Landmark className="w-5 h-5" /> },
    ],
  },
  {
    q: "Quel est ton niveau actuel ?",
    options: [
      { val: "bac", label: "Bac / Bac en cours", icon: <Target className="w-5 h-5" /> },
      { val: "bac3", label: "Bac+3 / Licence", icon: <BarChart3 className="w-5 h-5" /> },
    ],
  },
  {
    q: "Qu'est-ce qui compte le plus pour toi ?",
    options: [
       { val: "certs", label: "Les compétences professionnelles", icon: <Sparkles className="w-5 h-5" /> },
      { val: "intl", label: "L'international", icon: <Globe className="w-5 h-5" /> },
      { val: "job", label: "L'employabilité rapide", icon: <TrendingUp className="w-5 h-5" /> },
      { val: "salary", label: "Le salaire élevé", icon: <LineChart className="w-5 h-5" /> },
    ],
  },
  {
    q: "Tu préfères travailler avec...",
    options: [
      { val: "data", label: "Des données et des chiffres", icon: <BarChartHorizontal className="w-5 h-5" /> },
      { val: "people", label: "Des clients et des équipes", icon: <Users className="w-5 h-5" /> },
      { val: "creative", label: "Des contenus et de la créativité", icon: <Lightbulb className="w-5 h-5" /> },
      { val: "systems", label: "Des systèmes et des algorithmes", icon: <Monitor className="w-5 h-5" /> },
    ],
  },
  {
    q: "Où te vois-tu dans 5 ans ?",
    options: [
      { val: "dev", label: "Développeur / Ingénieur", icon: <Code2 className="w-5 h-5" /> },
      { val: "manager", label: "Manager / Chef de projet", icon: <Users className="w-5 h-5" /> },
      { val: "marketer", label: "Marketer / Growth", icon: <Megaphone className="w-5 h-5" /> },
      { val: "analyst", label: "Analyste / Auditeur", icon: <LineChart className="w-5 h-5" /> },
    ],
  },
] as const;

const quizLabels = {
  fr: {
    questions: [
      "Quel domaine t'attire le plus ?",
      "Quel est ton niveau actuel ?",
      "Qu'est-ce qui compte le plus pour toi ?",
      "Tu préfères travailler avec...",
      "Où te vois-tu dans 5 ans ?",
    ],
    options: {
      tech: "Technologie & Code", biz: "Business & Stratégie", mkt: "Marketing & Communication", fin: "Finance & Chiffres",
      bac: "Bac / Bac en cours", bac3: "Bac+3 / Licence", certs: "Les compétences professionnelles", intl: "L'international", job: "L'employabilité rapide", salary: "Le salaire élevé",
      data: "Des données et des chiffres", people: "Des clients et des équipes", creative: "Des contenus et de la créativité", systems: "Des systèmes et des algorithmes",
      dev: "Développeur / Ingénieur", manager: "Manager / Chef de projet", marketer: "Marketer / Growth", analyst: "Analyste / Auditeur",
    },
    reasons: { field: "Votre domaine d'intérêt", level: "Votre niveau d'études", priority: "Votre priorité", work: "Votre environnement de travail", goal: "Votre ambition professionnelle" },
    result: "Ton programme idéal", matches: "correspondances", alternative: "Autres programmes à découvrir", recommendation: "Pourquoi ce programme ?", compare: ["Niveau", "Durée", "Prérequis", "Ressources incluses", "International", "Débouchés"],
  },
  en: {
    questions: [
      "Which field interests you most?",
      "What is your current level?",
      "What matters most to you?",
      "What would you prefer to work with?",
      "Where do you see yourself in five years?",
    ],
    options: {
      tech: "Technology & Code", biz: "Business & Strategy", mkt: "Marketing & Communication", fin: "Finance & Numbers",
      bac: "Baccalaureate / In progress", bac3: "Bachelor's degree", certs: "Professional skills", intl: "International opportunities", job: "Fast employability", salary: "High earning potential",
      data: "Data and numbers", people: "Clients and teams", creative: "Content and creativity", systems: "Systems and algorithms",
      dev: "Developer / Engineer", manager: "Manager / Project Manager", marketer: "Marketer / Growth", analyst: "Analyst / Auditor",
    },
    reasons: { field: "Your area of interest", level: "Your education level", priority: "Your priority", work: "Your preferred work environment", goal: "Your career ambition" },
    result: "Your best match", matches: "matches", alternative: "Other programmes to explore", recommendation: "Why this programme?", compare: ["Level", "Duration", "Entry requirement", "Included resources", "International", "Career opportunities"],
  },
} as const;

function recommend(answers: QuizAnswer, programmes: OrientationProgramme[], locale: "fr" | "en"): Recommendation[] {
  const weights: Record<string, Record<string, number>> = {
    management: { biz: 4, people: 3, manager: 3, job: 1, bac: 3 },
    marketing: { mkt: 5, creative: 4, marketer: 5, bac: 3, job: 1 },
    finance: { fin: 5, data: 4, analyst: 5, salary: 3, bac: 3 },
    "info-ia": { tech: 5, systems: 5, dev: 5, certs: 1, bac: 3 },
    "info-cyber": { tech: 4, systems: 5, dev: 3, intl: 1, bac: 3 },
    crm: { biz: 4, people: 4, manager: 3, job: 2, bac3: 5 },
    "mkt-ia": { mkt: 5, creative: 4, marketer: 5, certs: 2, bac3: 5 },
    startups: { biz: 4, people: 3, manager: 5, tech: 2, intl: 1, bac3: 5 },
    "ing-fin": { fin: 5, data: 5, analyst: 5, salary: 3, bac3: 5 },
  };
  const labels = quizLabels[locale];
  const answerLabels = [answers.field, answers.level, answers.priority, answers.work, answers.goal]
    .map((answer) => labels.options[answer as keyof typeof labels.options]);
  const reasonLabels = [labels.reasons.field, labels.reasons.level, labels.reasons.priority, labels.reasons.work, labels.reasons.goal];
  const answerKeys = [answers.field, answers.level, answers.priority, answers.work, answers.goal];

  return programmes
    .map((programme) => {
      const programmeWeights = weights[programme.key] ?? {};
      const score = answerKeys.reduce((total, answer) => total + (programmeWeights[answer] ?? 0), 0);
      const reasons = answerKeys
        .map((answer, index) => programmeWeights[answer] ? `${reasonLabels[index]}: ${answerLabels[index]}` : "")
        .filter(Boolean)
        .slice(0, 3);
      return { programme, score, reasons };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

const englishProgrammeDetails: Record<string, { degree: string; duration: string; level: string; careers: string; tagline: string }> = {
  management: { degree: "Bachelor's", duration: "3 years", level: "High school", careers: "Project Manager, Manager, Consultant", tagline: "Build strong foundations in management, leadership, and organisational performance." },
  marketing: { degree: "Bachelor's", duration: "3 years", level: "High school", careers: "Digital Marketer, Social Media Manager, SEO Specialist", tagline: "Develop practical marketing skills for a digital and international business environment." },
  finance: { degree: "Bachelor's", duration: "3 years", level: "High school", careers: "Financial Analyst, Controller, Auditor", tagline: "Prepare for careers in finance with strong analytical skills and professional resources." },
  "info-ia": { degree: "Bachelor's", duration: "3 years", level: "High school", careers: "Data Scientist, ML Engineer, AI Developer", tagline: "Learn computer science and artificial intelligence through practical projects and professional resources." },
  "info-cyber": { degree: "Bachelor's", duration: "3 years", level: "High school", careers: "Penetration Tester, SOC Analyst, CISO", tagline: "Develop the technical and security skills needed to protect digital systems." },
  crm: { degree: "Master's", duration: "2 years", level: "Bachelor's degree", careers: "CRM Manager, Growth Hacker, Chief Digital Officer", tagline: "Master customer relationship management, automation, data, and digital transformation." },
  "mkt-ia": { degree: "Master's", duration: "2 years", level: "Bachelor's degree", careers: "Digital Marketing Director, Growth Hacker", tagline: "Lead digital marketing strategies by combining data, automation, and artificial intelligence." },
  startups: { degree: "Master's", duration: "2 years", level: "Bachelor's degree", careers: "Project Manager, Product Owner, Entrepreneur", tagline: "Turn innovative ideas into projects, products, and entrepreneurial opportunities." },
  "ing-fin": { degree: "Master's", duration: "2 years", level: "Bachelor's degree", careers: "M&A Analyst, Risk Manager, CFO", tagline: "Build advanced expertise in corporate finance, markets, data, and financial decision-making." },
};

const englishProgrammeNames: Record<string, string> = {
  management: "Bachelor in Management",
  marketing: "Bachelor in Marketing",
  finance: "Bachelor in Finance",
  "info-ia": "Bachelor in Computer Science, Software Engineering & Artificial Intelligence",
  "info-cyber": "Bachelor in Computer Science, Software Engineering & Cybersecurity",
  crm: "Master in CRM Marketing & Digital Transformation",
  "mkt-ia": "Master in Digital Marketing & AI",
  startups: "Master in Innovative Project Management & Startups",
  "ing-fin": "Master in Financial Engineering",
};

/* ── Compare rows ── */
const compareRows = [
  { label: "Niveau", key: "degree" as const },
  { label: "Durée", key: "duration" as const },
  { label: "Prérequis", key: "level" as const },
   { label: "Ressources incluses", key: "certs" as const, highlight: true },
  { label: "International", key: "intl" as const },
  { label: "Débouchés", key: "careers" as const },
];

export default function ProgrammeFinder({ programmes = allProgrammes, locale = "fr" }: { programmes?: OrientationProgramme[]; locale?: "fr" | "en" }) {
  const localePrefix = locale === "en" ? "/en" : "";
  const labels = quizLabels[locale];
  const localizedProgrammes = programmes.map((programme) => ({
    ...programme,
    ...(locale === "en" ? englishProgrammeDetails[programme.key] : {}),
    name: locale === "en" ? englishProgrammeNames[programme.key] ?? programme.name : programme.name,
  }));
  const [tab, setTab] = useState<Tab>("quiz");

  /* Quiz state */
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [result, setResult] = useState<Recommendation[] | null>(null);

  /* Compare state */
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const handleAnswer = (val: string) => {
    const newAnswers = [...answers, val];
    setAnswers(newAnswers);
    if (currentQ + 1 >= questions.length) {
      setResult(recommend({ field: newAnswers[0], level: newAnswers[1], priority: newAnswers[2], work: newAnswers[3], goal: newAnswers[4] }, localizedProgrammes, locale));
    } else {
      setCurrentQ(currentQ + 1);
    }
  };

  const handleBack = () => {
    if (currentQ > 0) {
      setAnswers((prev) => prev.slice(0, -1));
      setCurrentQ(currentQ - 1);
    }
  };

  const restartQuiz = () => {
    setAnswers([]);
    setCurrentQ(0);
    setResult(null);
  };

  const toggleCompare = (key: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else if (next.size < 3) {
        next.add(key);
      }
      return next;
    });
  };

  const selectedProgrammes = localizedProgrammes.filter((p) => selected.has(p.key));
  const progress = result ? 100 : Math.round((currentQ / questions.length) * 100);

  return (
    <section className="relative overflow-hidden border-t-8 border-white bg-penn-bg-light py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] items-start gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        <div className="pt-2 lg:sticky lg:top-28">
           <Badge variant="default" size="lg" className="mb-5">{locale === "en" ? "Orientation" : "Orientation"}</Badge>
          <h2 className="max-w-[520px] text-[36px] font-extrabold leading-[1.08] text-penn-navy md:text-[50px]">
             {locale === "en" ? "Find the programme that suits you" : "Trouvez la formation qui vous ressemble"}<span className="text-penn-green">.</span>
          </h2>
          <p className="mt-6 max-w-[500px] text-[16px] leading-relaxed text-penn-body">
             {locale === "en" ? "Answer five questions to find the EBS programme that best matches your profile, ambitions, and interests." : "Répondez à cinq questions pour identifier le parcours EBS le plus cohérent avec votre profil, vos ambitions et le domaine qui vous attire."}
          </p>
          <div className="mt-8 grid max-w-[500px] grid-cols-3 gap-3 border-y border-penn-border py-5">
             <div><p className="text-[26px] font-extrabold text-penn-green">{siteStats.degreeProgrammes}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-penn-body/55">{locale === "en" ? "Degrees" : "Diplômes"}</p></div>
             <div><p className="text-[26px] font-extrabold text-penn-green">{siteStats.licencePathways}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-penn-body/55">{locale === "en" ? "Bachelor pathways" : "Parcours Licence"}</p></div>
             <div><p className="text-[26px] font-extrabold text-penn-green">{siteStats.masterDegrees}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-penn-body/55">Masters</p></div>
          </div>
        </div>

        <div className="min-w-0">
        {/* Tab switcher */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setTab("quiz")}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full transition-all duration-300 ${
              tab === "quiz"
                ? "bg-penn-green text-white shadow-lg shadow-penn-green/20"
                : "bg-white border border-penn-border text-penn-body hover:text-penn-green hover:border-penn-green/30"
            }`}
          >
            <HelpCircle className="w-4 h-4" />
             {locale === "en" ? "Quiz" : "Quiz"}
          </button>
          <button
            onClick={() => setTab("compare")}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full transition-all duration-300 ${
              tab === "compare"
                ? "bg-penn-green text-white shadow-lg shadow-penn-green/20"
                : "bg-white border border-penn-border text-penn-body hover:text-penn-green hover:border-penn-green/30"
            }`}
          >
            <BarChartHorizontal className="w-4 h-4" />
             {locale === "en" ? "Compare" : "Comparer"}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {tab === "quiz" ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-2xl mx-auto">
                <p className="text-sm text-penn-body/60 text-center mb-6">
                   {locale === "en" ? "5 questions · 1 minute · Personalised recommendation" : "5 questions · 1 minute · Recommandation personnalisée"}
                </p>

                <div className="bg-white rounded-2xl border border-penn-border shadow-sm p-6 md:p-10">
                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between text-xs text-penn-body/50 mb-2">
                      <div className="flex items-center gap-2">
                        {currentQ > 0 && !result && (
                          <button
                            onClick={handleBack}
                            className="w-6 h-6 rounded-full bg-penn-bg-light border border-penn-border flex items-center justify-center hover:bg-penn-green hover:text-white hover:border-penn-green transition-all"
                          >
                            <ArrowLeft className="w-3 h-3" />
                          </button>
                        )}
                        <span>
                           {result ? (locale === "en" ? "Result" : "Résultat") : `${locale === "en" ? "Question" : "Question"} ${currentQ + 1}/${questions.length}`}
                        </span>
                      </div>
                      <span>{progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-penn-border rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-penn-green rounded-full"
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                    </div>
                  </div>

                   {result ? (
                     /* Result */
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-4"
                    >
                       <span className="text-penn-green text-xs font-bold uppercase tracking-wider block mb-3">
                         {labels.result}
                       </span>
                       <h3 className="text-2xl font-extrabold text-penn-navy mb-3">
                         {result[0].programme.name}
                       </h3>
                       <p className="text-sm text-penn-body/70 mb-2">
                          {result[0].programme.duration} · {result[0].programme.certs} ressources · {result[0].programme.degree}
                       </p>
                       <p className="text-sm text-penn-body leading-relaxed mb-8 max-w-md mx-auto">
                         {locale === "en" ? englishProgrammeDetails[result[0].programme.key]?.tagline : result[0].programme.data.tagline}
                       </p>
                       <div className="mx-auto mb-8 max-w-md rounded-xl bg-penn-bg-light p-4 text-left">
                         <p className="mb-2 text-xs font-extrabold uppercase tracking-wide text-penn-green">{labels.recommendation}</p>
                         <ul className="space-y-1 text-sm text-penn-body">
                           {result[0].reasons.map((reason) => <li key={reason}>• {reason}</li>)}
                         </ul>
                       </div>
                       <div className="flex flex-col sm:flex-row gap-3 justify-center">
                         <Link
                            href={`/${result[0].programme.slug}` as React.ComponentProps<typeof Link>["href"]}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-penn-green text-white font-bold text-sm rounded-full hover:bg-penn-green/90 transition-all duration-300 shadow-lg shadow-penn-green/20"
                        >
                           {locale === "en" ? "View programme" : "Voir le programme"}
                          <span>→</span>
                        </Link>
                        <button
                          onClick={restartQuiz}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-penn-border text-penn-navy font-bold text-sm rounded-full hover:bg-penn-bg-light transition-all duration-300"
                        >
                          <RefreshCw className="w-4 h-4" />
                          Recommencer
                        </button>
                       </div>
                       {result.length > 1 && (
                         <div className="mt-8 border-t border-penn-border pt-6 text-left">
                           <p className="mb-3 text-xs font-extrabold uppercase tracking-wide text-penn-body/60">{labels.alternative}</p>
                           <div className="space-y-2">
                             {result.slice(1).map(({ programme }) => (
                                <Link key={programme.key} href={`/${programme.slug}` as React.ComponentProps<typeof Link>["href"]} className="flex items-center justify-between rounded-lg border border-penn-border px-4 py-3 text-sm font-bold text-penn-navy hover:border-penn-green hover:text-penn-green">
                                 <span>{programme.name}</span><span>→</span>
                               </Link>
                             ))}
                           </div>
                         </div>
                       )}
                    </motion.div>
                  ) : (
                    /* Questions */
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentQ}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.25 }}
                      >
                         <h3 className="text-lg font-extrabold text-penn-navy mb-6">
                           {labels.questions[currentQ]}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {questions[currentQ].options.map((opt) => (
                            <button
                              key={opt.val}
                              onClick={() => handleAnswer(opt.val)}
                              className="group flex items-center gap-3 text-left px-5 py-4 border border-penn-border rounded-xl text-penn-navy font-medium text-sm hover:bg-penn-green hover:text-white hover:border-penn-green transition-all duration-200"
                            >
                              <span className="w-9 h-9 rounded-lg bg-penn-bg-light flex items-center justify-center shrink-0 group-hover:bg-white/20 group-hover:text-white text-penn-navy">
                                {opt.icon}
                              </span>
                               {labels.options[opt.val as keyof typeof labels.options]}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="compare"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-penn-body/60 text-center mb-8">
                 {locale === "en" ? "Select two or three programmes to compare them." : "Sélectionne 2 ou 3 programmes pour voir les différences."}
              </p>

              {/* Selectors */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
             {localizedProgrammes.map((p) => (
                  <button
                    key={p.key}
                    onClick={() => toggleCompare(p.key)}
                    className={`px-4 py-2.5 border rounded-full text-sm font-semibold transition-all duration-200 ${
                      selected.has(p.key)
                        ? "text-white shadow-md"
                        : "border-penn-border bg-white text-penn-body hover:text-penn-green hover:border-penn-green/30"
                    }`}
                    style={
                      selected.has(p.key)
                        ? { backgroundColor: p.color, borderColor: p.color }
                        : undefined
                    }
                  >
                    {p.name}
                  </button>
                ))}
              </div>

              {/* Comparison table */}
              {selectedProgrammes.length >= 2 ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="overflow-x-auto bg-white rounded-2xl border border-penn-border shadow-sm"
                >
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-penn-green">
                        <th className="text-left py-4 px-4 font-bold text-penn-body/50 text-xs uppercase tracking-wider w-36" />
                        {selectedProgrammes.map((p) => (
                          <th
                            key={p.key}
                            className="py-4 px-4 text-center"
                          >
                            <Link
                              href={`/${p.slug}` as React.ComponentProps<typeof Link>["href"]}
                              className="font-extrabold text-sm hover:underline"
                              style={{ color: p.color }}
                            >
                              {p.name}
                            </Link>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                       {compareRows.map((row, ri) => (
                        <tr
                          key={row.label}
                          className={`${
                            ri % 2 === 0 ? "bg-transparent" : "bg-penn-bg-light/50"
                          }`}
                        >
                          <td className="py-3 px-4 font-bold text-penn-body/60 text-xs">
                             {labels.compare[ri]}
                          </td>
                          {selectedProgrammes.map((p) => {
                            const val = String(p[row.key as keyof typeof p]);
                            return (
                              <td
                                key={p.key}
                                className={`py-3 px-4 text-center ${
                                  row.highlight
                                    ? "font-extrabold"
                                    : "font-medium text-penn-navy"
                                }`}
                                style={
                                  row.highlight
                                    ? { color: p.color }
                                    : undefined
                                }
                              >
                                {row.key === "certs" ? `${val}+` : val}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              ) : (
                   <p className="text-center text-sm text-penn-body/50">
                   {locale === "en" ? "Select at least two programmes above" : "Sélectionne au moins 2 programmes ci-dessus"}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
