"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
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

/* ── Programme data for both quiz & compare ── */
const allProgrammes = [
  { key: "management", name: "Licence Management", degree: "Licence", slug: "licences/management", color: "#2196F3", certs: 57, duration: "3 ans", level: "Bac", intl: "UQAT (CA) · EM Normandie (FR) · PSB (FR)", employment: "90%+", careers: "Chef de projet, Manager, Consultant", data: licences.management },
  { key: "marketing", name: "Licence Marketing", degree: "Licence", slug: "licences/marketing", color: "#E91E8C", certs: 81, duration: "3 ans", level: "Bac", intl: "EM Normandie (FR) · Sup'de Com (FR)", employment: "90%+", careers: "Digital Marketer, Social Media Mgr, SEO", data: licences.marketing },
  { key: "finance", name: "Licence Finance", degree: "Licence", slug: "licences/finance", color: "#00BCD4", certs: 64, duration: "3 ans", level: "Bac", intl: "IGEFI (FR) · PSB (FR) · EM Normandie (FR)", employment: "90%+", careers: "Analyste financier, Contrôleur, Auditeur", data: licences.finance },
  { key: "info-ia", name: "Info — Intelligence Artificielle", degree: "Licence", slug: "licences/informatique-ia", color: "#9C27B0", certs: 87, duration: "3 ans", level: "Bac", intl: "Epitech (FR) · EPSI (FR) · GUtech (OM)", employment: "90%+", careers: "Data Scientist, ML Engineer, AI Dev", data: licences["informatique-ia"] },
  { key: "info-cyber", name: "Info — Cybersécurité", degree: "Licence", slug: "licences/cybersecurite", color: "#FF9800", certs: 63, duration: "3 ans", level: "Bac", intl: "Epitech (FR) · EPSI (FR) · GUtech (OM)", employment: "90%+", careers: "Pentester, SOC Analyst, RSSI", data: licences.cybersecurite },
  { key: "crm", name: "Master CRM & Digital", degree: "Master", slug: "masters/crm", color: "#E91E63", certs: 73, duration: "2 ans", level: "Bac+3", intl: "EM Normandie (FR) · UQAT (CA)", employment: "90%+", careers: "CRM Manager, Growth Hacker, CDO", data: masters.crm },
  { key: "mkt-ia", name: "Master Marketing Digital & IA", degree: "Master", slug: "masters/marketing-digital-ia", color: "#E91E8C", certs: 81, duration: "2 ans", level: "Bac+3", intl: "EM Normandie (FR) · Sup'de Com (FR)", employment: "90%+", careers: "Directeur Marketing Digital, Growth Hacker", data: masters["marketing-digital-ia"] },
  { key: "startups", name: "Master Projets Innovants", degree: "Master", slug: "masters/startups", color: "#5E35B1", certs: 59, duration: "2 ans", level: "Bac+3", intl: "UQAT (CA) · EM Normandie (FR)", employment: "90%+", careers: "Chef de projet, Product Owner, Entrepreneur", data: masters.startups },
  { key: "ing-fin", name: "Master Ingénierie Financière", degree: "Master", slug: "masters/ingenierie-financiere", color: "#00897B", certs: 64, duration: "2 ans", level: "Bac+3", intl: "IGEFI (FR) · PSB (FR) · UQAT (CA)", employment: "90%+", careers: "Analyste M&A, Risk Manager, CFO", data: masters["ingenierie-financiere"] },
];

/* ── Quiz logic ── */
type Tab = "quiz" | "compare";

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
      { val: "certs", label: "Les certifications", icon: <Sparkles className="w-5 h-5" /> },
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

function recommend(answers: string[]): (typeof allProgrammes)[number] {
  const [field, level, , work, goal] = answers;
  const get = (k: string) => allProgrammes.find(p => p.key === k) || allProgrammes[0];
  
  if (level === "bac3") {
    if (field === "tech" || goal === "dev") return get("startups");
    if (field === "mkt" || goal === "marketer") return get("mkt-ia");
    if (field === "fin" || goal === "analyst") return get("ing-fin");
    return get("crm");
  }
  if (field === "tech" || work === "systems" || goal === "dev") {
    if (goal === "dev") return get("info-ia");
    return get("info-cyber");
  }
  if (field === "mkt" || work === "creative" || goal === "marketer") return get("marketing");
  if (field === "fin" || work === "data" || goal === "analyst") return get("finance");
  return get("management");
}

/* ── Compare rows ── */
const compareRows = [
  { label: "Niveau", key: "degree" as const },
  { label: "Durée", key: "duration" as const },
  { label: "Prérequis", key: "level" as const },
  { label: "Certifications", key: "certs" as const, highlight: true },
  { label: "International", key: "intl" as const },
  { label: "Taux d'emploi", key: "employment" as const },
  { label: "Débouchés", key: "careers" as const },
];

export default function ProgrammeFinder() {
  const [tab, setTab] = useState<Tab>("quiz");

  /* Quiz state */
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [result, setResult] = useState<(typeof allProgrammes)[number] | null>(null);

  /* Compare state */
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const handleAnswer = (val: string) => {
    const newAnswers = [...answers, val];
    setAnswers(newAnswers);
    if (currentQ + 1 >= questions.length) {
      setResult(recommend(newAnswers));
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

  const selectedProgrammes = allProgrammes.filter((p) => selected.has(p.key));
  const progress = result ? 100 : Math.round((currentQ / questions.length) * 100);

  return (
    <section className="py-20 lg:py-28 bg-penn-bg-light overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-10"
        >
          <Badge variant="default" size="lg" className="mb-4">
            Orientation
          </Badge>
          <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
            Trouve ton programme
          </h2>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setTab("quiz")}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full transition-all duration-300 ${
              tab === "quiz"
                ? "bg-[#2B8FAB] text-white shadow-lg shadow-[#2B8FAB]/20"
                : "bg-white border border-penn-border text-penn-body hover:text-[#2B8FAB] hover:border-[#2B8FAB]/30"
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            Quiz
          </button>
          <button
            onClick={() => setTab("compare")}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full transition-all duration-300 ${
              tab === "compare"
                ? "bg-[#2B8FAB] text-white shadow-lg shadow-[#2B8FAB]/20"
                : "bg-white border border-penn-border text-penn-body hover:text-[#2B8FAB] hover:border-[#2B8FAB]/30"
            }`}
          >
            <BarChartHorizontal className="w-4 h-4" />
            Comparer
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
                  5 questions · 1 minute · Recommandation personnalisée
                </p>

                <div className="bg-white rounded-2xl border border-penn-border shadow-sm p-6 md:p-10">
                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between text-xs text-penn-body/50 mb-2">
                      <div className="flex items-center gap-2">
                        {currentQ > 0 && !result && (
                          <button
                            onClick={handleBack}
                            className="w-6 h-6 rounded-full bg-penn-bg-light border border-penn-border flex items-center justify-center hover:bg-[#2B8FAB] hover:text-white hover:border-[#2B8FAB] transition-all"
                          >
                            <ArrowLeft className="w-3 h-3" />
                          </button>
                        )}
                        <span>
                          {result ? "Résultat" : `Question ${currentQ + 1}/${questions.length}`}
                        </span>
                      </div>
                      <span>{progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-penn-border rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#2B8FAB] rounded-full"
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
                      <span className="text-[#2B8FAB] text-xs font-bold uppercase tracking-wider block mb-3">
                        Ton programme idéal
                      </span>
                      <h3 className="text-2xl font-extrabold text-penn-navy mb-3">
                        {result.name}
                      </h3>
                      <p className="text-sm text-penn-body/70 mb-2">
                        {result.duration} · {result.certs}+ certifications · {result.degree}
                      </p>
                      <p className="text-sm text-penn-body leading-relaxed mb-8 max-w-md mx-auto">
                        {result.data.tagline}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                          href={`/${result.slug}`}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2B8FAB] text-white font-bold text-sm rounded-full hover:bg-[#2B8FAB]/90 transition-all duration-300 shadow-lg shadow-[#2B8FAB]/20"
                        >
                          Voir le programme
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
                          {questions[currentQ].q}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {questions[currentQ].options.map((opt) => (
                            <button
                              key={opt.val}
                              onClick={() => handleAnswer(opt.val)}
                              className="group flex items-center gap-3 text-left px-5 py-4 border border-penn-border rounded-xl text-penn-navy font-medium text-sm hover:bg-[#2B8FAB] hover:text-white hover:border-[#2B8FAB] transition-all duration-200"
                            >
                              <span className="w-9 h-9 rounded-lg bg-penn-bg-light flex items-center justify-center shrink-0 group-hover:bg-white/20 group-hover:text-white text-penn-navy">
                                {opt.icon}
                              </span>
                              {opt.label}
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
                Sélectionne 2 ou 3 programmes pour voir les différences.
              </p>

              {/* Selectors */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {allProgrammes.map((p) => (
                  <button
                    key={p.key}
                    onClick={() => toggleCompare(p.key)}
                    className={`px-4 py-2.5 border rounded-full text-sm font-semibold transition-all duration-200 ${
                      selected.has(p.key)
                        ? "text-white shadow-md"
                        : "border-penn-border bg-white text-penn-body hover:text-[#2B8FAB] hover:border-[#2B8FAB]/30"
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
                      <tr className="border-b-2 border-[#2B8FAB]">
                        <th className="text-left py-4 px-4 font-bold text-penn-body/50 text-xs uppercase tracking-wider w-36" />
                        {selectedProgrammes.map((p) => (
                          <th
                            key={p.key}
                            className="py-4 px-4 text-center"
                          >
                            <Link
                              href={`/${p.slug}`}
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
                            {row.label}
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
                  Sélectionne au moins 2 programmes ci-dessus
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
