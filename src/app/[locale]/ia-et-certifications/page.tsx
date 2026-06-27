"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Award,
  BarChart3,
  Bot,
  Brain,
  ChevronDown,
  Code2,
  Globe,
  GraduationCap,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { Badge, CtaSection } from "@/components/shared";

const iaCompetences = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "IA Générative & Prompting",
    desc: "ChatGPT, Gemini, Claude, Copilot. Rédaction, résumé, génération de contenu, analyse de documents — vous maîtrisez les outils d'IA générative de niveau professionnel.",
    certs: "Google Prompting Essentials · IBM Prompt Engineering · DeepLearning.AI GenAI",
    color: "#9C27B0",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Agents IA & Automatisation",
    desc: "Conception de workflows autonomes avec n8n, IBM Watsonx, LangChain. Vous automatisez les processus métier de bout en bout.",
    certs: "n8n Level 1 & 2 · IBM Watsonx Orchestrate · Databricks AI Agents",
    color: "#2196F3",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analyse de Données Augmentée",
    desc: "Power BI + IA, GA4, IBM Data Science, Looker Studio. Vous analysez des données complexes avec les outils les plus puissants du marché.",
    certs: "Google Data Analytics · IBM Data Science · Databricks GenAI",
    color: "#FF9800",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "IA Appliquée au Métier",
    desc: "Marketing augmenté, trading algorithmique, détection de fraude, CRM prédictif — l'IA au service de votre spécialité, quel que soit votre programme.",
    certs: "Certifications spécifiques à chaque filière · Projets pratiques",
    color: "#E91E8C",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Éthique & IA Responsable",
    desc: "Biais algorithmiques, transparence, régulation (EU AI Act), impact sociétal. Vous comprenez les enjeux éthiques de l'IA.",
    certs: "Google AI Essentials · IBM Foundations of AI · Harvard CS50 AI",
    color: "#00BCD4",
  },
];

const iaCertList = [
  { name: "Google AI Essentials", provider: "Google" },
  { name: "Google AI Professional Certificate", provider: "Google" },
  { name: "Google Prompting Essentials", provider: "Google" },
  { name: "AI-Powered Performance Ads", provider: "Google" },
  { name: "Fondements de l'IA", provider: "IBM" },
  { name: "IA Générative : Transformation des Entreprises", provider: "IBM" },
  { name: "Foundations of GenAI", provider: "IBM" },
  { name: "Agentic AI in Practice", provider: "IBM" },
  { name: "Ingénierie des Prompts pour Tous", provider: "IBM" },
  { name: "Watsonx Orchestrate : Automatisation IA", provider: "IBM" },
  { name: "CS50's Introduction to AI with Python", provider: "Harvard" },
  { name: "Machine Learning and AI with Python", provider: "Harvard" },
  { name: "TensorFlow Developer Certificate", provider: "DeepLearning.AI" },
  { name: "PyTorch for Deep Learning", provider: "DeepLearning.AI" },
  { name: "ML Specialization (Andrew Ng)", provider: "DeepLearning.AI" },
  { name: "Deep Learning Specialization", provider: "DeepLearning.AI" },
  { name: "Generative AI for Software Dev", provider: "DeepLearning.AI" },
  { name: "Generative AI Fundamentals", provider: "Databricks" },
  { name: "AI Agents in Workflows", provider: "Databricks" },
  { name: "n8n Automation Level 1", provider: "n8n" },
  { name: "n8n Automation Level 2", provider: "n8n" },
  { name: "SEO Essentials with AI", provider: "SEMrush" },
  { name: "Technical SEO and AI Search", provider: "SEMrush" },
  { name: "AI-Powered Marketer", provider: "SEMrush" },
  { name: "AI for Marketing, Sales & Service", provider: "HubSpot" },
  { name: "Introduction to Modern AI", provider: "Cisco" },
  { name: "AI Fundamentals", provider: "Cisco" },
  { name: "Introduction IA et agents génératifs", provider: "Microsoft" },
  { name: "Transformer votre entreprise avec l'IA", provider: "Microsoft" },
  { name: "Productivité avec les outils d'IA", provider: "Microsoft" },
  { name: "Scrum with AI Certified SAC™", provider: "ScrumStudy" },
];

const programmeBreakdown = [
  {
    programme: "Licence Management",
    href: "/licences/management",
    total: "57+",
    highlights: "Google PM · Scrum SFC™ · IBM Business Analyst",
    color: "#2196F3",
  },
  {
    programme: "Licence Marketing",
    href: "/licences/marketing",
    total: "81+",
    highlights: "Google Digital Mktg · HubSpot Digital · SEMrush SEO AI",
    color: "#E91E8C",
  },
  {
    programme: "Licence Finance",
    href: "/licences/finance",
    total: "64+",
    highlights: "Bloomberg BMC · Bloomberg ESG · Goldman Sachs Forage",
    color: "#00BCD4",
  },
  {
    programme: "Master Marketing & IA",
    href: "/masters/marketing-digital-ia",
    total: "81+",
    highlights: "Google Advanced Data · HubSpot Marketing · Databricks",
    color: "#E91E8C",
  },
  {
    programme: "Licence Info — IA",
    href: "/licences/informatique-ia",
    total: "87+",
    highlights: "Harvard CS50 AI · DeepLearning.AI ML/DL · Databricks GenAI",
    color: "#9C27B0",
  },
  {
    programme: "Licence Info — Cybersécurité",
    href: "/licences/cybersecurite",
    total: "63+",
    highlights: "Google Cyber · Cisco Ethical Hacker · Fortinet FCF/FCA",
    color: "#FF9800",
  },
  {
    programme: "Master CRM Digital",
    href: "/masters/crm",
    total: "73+",
    highlights: "HubSpot CRM · n8n Automation · IBM Watsonx",
    color: "#E91E63",
  },
  {
    programme: "Master Startups",
    href: "/masters/startups",
    total: "59+",
    highlights: "PMI · Google PM · Scrum SAC™ · IBM DevOps",
    color: "#5E35B1",
  },
  {
    programme: "Master Ingénierie Fin.",
    href: "/masters/ingenierie-financiere",
    total: "64+",
    highlights: "Bloomberg BMC/ESG · JP Morgan Quant · Goldman Sachs IB",
    color: "#00897B",
  },
];

const getProviderLogo = (provider: string) => {
  switch (provider.toLowerCase()) {
    case "google":
      return <img src="/images/icon/google.svg" alt="Google" className="w-6 h-6 object-contain" />;
    case "ibm":
      return <img src="/images/icon/ibm.svg" alt="IBM" className="w-6 h-6 object-contain" />;
    case "harvard":
      return <img src="/images/icon/harvard.png" alt="Harvard" className="w-6 h-6 object-contain" />;
    case "deeplearning.ai":
      return <img src="/images/icon/deeplearning.ai.svg" alt="DeepLearning.AI" className="w-6 h-6 object-contain" />;
    case "hubspot":
      return <img src="/images/icon/hubspot.svg" alt="HubSpot" className="w-6 h-6 object-contain" />;
    case "semrush":
      return <img src="/images/icon/semrush.svg" alt="SEMrush" className="w-6 h-6 object-contain" />;
    case "cisco":
      return <img src="/images/icon/cisco-2.svg" alt="Cisco" className="w-6 h-6 object-contain" />;
    case "microsoft":
      return <img src="/images/icon/microsoft.svg" alt="Microsoft" className="w-6 h-6 object-contain" />;
    case "n8n":
      return <img src="/images/icon/n8n.png" alt="n8n" className="w-6 h-6 object-contain" />;
    case "databricks":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="#FF3621" />
          <path d="M3 12L12 17L21 12" stroke="#FF3621" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 17L12 22L21 17" stroke="#FF3621" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "scrumstudy":
      return (
        <div className="w-6 h-6 rounded-full bg-[#006699] flex items-center justify-center text-white text-[11px] font-extrabold font-serif">
          S
        </div>
      );
    default:
      return <Award className="w-5 h-5 text-[#9C27B0]" />;
  }
};

export default function IAEtCertificationsPage() {
  return (
    <>
      {/* ═══════════ IMMERSIVE HERO ═══════════ */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-penn-navy via-[#1a2035] to-penn-navy" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #2B8FAB 0%, transparent 60%), radial-gradient(circle at 70% 20%, #9C27B0 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(156,39,176,0.2) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
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
              Intelligence Artificielle · Compétence transversale obligatoire
              depuis 2026
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[42px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
          >
            L&apos;IA n&apos;est pas une{" "}
            <span className="text-[#2B8FAB]">option</span>.
            <br />
            C&apos;est une{" "}
            <span className="bg-gradient-to-r from-[#9C27B0] to-[#2B8FAB] bg-clip-text text-transparent">
              obligation
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[17px] md:text-[19px] text-white/70 leading-relaxed max-w-[700px] mb-12"
          >
            Depuis 2026, EBS a intégré l&apos;Intelligence Artificielle comme
            socle commun dans TOUS ses programmes. Une décision unique en
            Tunisie : chaque étudiant, quel que soit son parcours, repart avec
            des certifications IA reconnues mondialement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-[#9C27B0] leading-none mb-1">
                30+
              </p>
              <p className="text-[12px] text-white/50 font-medium">
                Certifications IA
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">
                5
              </p>
              <p className="text-[12px] text-white/50 font-medium">
                Compétences IA fondamentales
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-[#2B8FAB] leading-none mb-1">
                9
              </p>
              <p className="text-[12px] text-white/50 font-medium">
                Programmes concernés
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center flex flex-col justify-center items-center">
              <Sparkles className="w-10 h-10 md:w-[44px] md:h-[44px] text-[#9C27B0] mx-auto mb-1" />
              <p className="text-[12px] text-white/50 font-medium mt-1">
                Nouveauté 2026
              </p>
            </div>
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

      {/* ═══════════ POURQUOI L'IA ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#9C27B0]/10 flex items-center justify-center">
                <Brain className="w-7 h-7 text-[#9C27B0]" />
              </div>
              <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy">
                Pourquoi l&apos;IA dans chaque filière ?
              </h2>
            </div>

            <p className="text-[16px] text-penn-body leading-relaxed mb-8">
              Le marché du travail a fondamentalement changé. En 2026, l&apos;IA
              est présente dans tous les secteurs : finance, marketing, gestion,
              cybersécurité, entrepreneuriat. Les entreprises ne cherchent plus
              des experts en IA seulement — elles cherchent des professionnels
              de TOUS les domaines qui savent utiliser l&apos;IA pour être plus
              efficaces, plus créatifs, plus compétitifs.
            </p>

            <div className="bg-penn-navy/5 rounded-2xl border border-[#9C27B0]/10 p-6 lg:p-8">
              <p className="text-[16px] font-bold text-penn-navy mb-2">
                Une décision stratégique, unique en Tunisie.
              </p>
              <p className="text-[15px] text-penn-body leading-relaxed">
                EBS a fait le choix d&apos;intégrer les compétences en IA comme
                socle commun obligatoire dans tous ses programmes — de la
                Licence de Management au Master d&apos;Ingénierie Financière.
                Chaque étudiant EBS repart en sachant utiliser l&apos;IA dans
                son domaine métier, certifié par les leaders mondiaux.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ 5 COMPÉTENCES IA ═══════════ */}
      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #9C27B0 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(156,39,176,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
              <Badge variant="outline" size="lg" className="mb-4 border-[#9C27B0]/30 text-[#9C27B0]">
                Compétences fondamentales
              </Badge>
            <h2 className="text-[34px] md:text-[48px] font-extrabold text-white leading-[1.1]">
              Les 5 compétences IA que maîtrisent
              <br />
              <span className="text-[#2B8FAB]">TOUS</span> les étudiants EBS
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {iaCompetences.map((comp, i) => (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative group bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] rounded-2xl p-6 lg:p-8 transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${comp.color}1A` }}
                >
                  <span style={{ color: comp.color }}>{comp.icon}</span>
                </div>
                <h3 className="text-[18px] font-extrabold text-white mb-3">
                  {comp.title}
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed mb-4">
                  {comp.desc}
                </p>
                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-[12px] font-bold uppercase tracking-wide"
                    style={{ color: comp.color }}>
                    {comp.certs}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CERTIFICATIONS IA ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">
              Certifications IA
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              {iaCertList.length}+ certifications IA disponibles
            </h2>
            <p className="text-[16px] text-penn-body mt-3 max-w-[700px] mx-auto">
              Toutes gratuites. Toutes incluses dans votre formation.
              Toutes reconnues par les recruteurs mondiaux.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {iaCertList.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="flex items-center gap-4 px-5 py-4 bg-penn-bg-light rounded-xl border border-penn-border hover:border-[#2B8FAB]/30 hover:shadow-md transition-all duration-300 group w-full sm:w-[calc(50%-6px)] lg:w-[calc((100%-24px)/3)]"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-penn-border/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform overflow-hidden p-1.5 bg-gradient-to-br from-white to-penn-bg-light shadow-sm">
                  {getProviderLogo(cert.provider)}
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-penn-navy leading-snug">
                    {cert.name}
                  </p>
                  <p className="text-[11px] text-penn-body/60 font-medium">
                    {cert.provider}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 text-[15px] font-bold text-[#2B8FAB] hover:underline"
            >
              Voir toutes les certifications (150+)
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ PROGRAMME BREAKDOWN ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">
              Programme par programme
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Les certifications, filière par filière
            </h2>
            <p className="text-[16px] text-penn-body mt-3 max-w-[650px] mx-auto">
              Chaque programme a son propre parcours de certifications,
              adapté à son domaine métier.
            </p>
          </motion.div>

          <div className="space-y-3">
            {programmeBreakdown.map((p, i) => (
              <motion.div
                key={p.programme}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={p.href}
                  className="group flex items-center gap-4 lg:gap-6 p-4 lg:p-5 bg-white rounded-2xl border border-penn-border hover:shadow-lg hover:border-[#2B8FAB]/20 transition-all duration-300"
                >
                  <div
                    className="w-2 h-12 rounded-full shrink-0"
                    style={{ backgroundColor: p.color }}
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] lg:text-[17px] font-extrabold text-penn-navy group-hover:text-[#2B8FAB] transition-colors">
                      {p.programme}
                    </h3>
                    <p className="text-[13px] text-penn-body/60 mt-0.5">
                      {p.highlights}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="text-[24px] lg:text-[28px] font-extrabold text-penn-navy leading-none">
                      {p.total}
                    </p>
                    <p className="text-[11px] text-penn-body/50 font-medium uppercase tracking-wide">
                      certifications
                    </p>
                  </div>

                  <ArrowRight className="w-5 h-5 text-[#2B8FAB] shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ QUICK CTAs ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-[34px] md:text-[44px] font-extrabold text-penn-navy text-center mb-16"
          >
            Prêt à maîtriser l&apos;IA ?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: "Nos Licences",
                desc: "6 Licences avec IA intégrée.",
                href: "/licences",
                label: "Explorer",
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Certifications",
                desc: "150+ certifications gratuites.",
                href: "/certifications",
                label: "Découvrir",
              },
              {
                icon: <Code2 className="w-6 h-6" />,
                title: "Licence Info — IA",
                desc: "Le programme le plus complet en IA.",
                href: "/licences/informatique-ia",
                label: "En savoir plus",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Pré-inscription",
                desc: "Candidatures 2026–2027 ouvertes.",
                href: "/preinscription",
                label: "Postuler",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={card.href}
                  className="group bg-white rounded-2xl border border-penn-border p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#9C27B0]/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#9C27B0]/10 flex items-center justify-center mb-4 text-[#9C27B0] group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="text-[17px] font-extrabold text-penn-navy mb-2 group-hover:text-[#2B8FAB] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-penn-body leading-relaxed mb-4 flex-1">
                    {card.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#2B8FAB]">
                    {card.label}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Rejoignez la première université tunisienne avec l'IA comme compétence fondamentale."
        subtitle="Candidatures 2026–2027 ouvertes. Déposez votre dossier dès maintenant."
        primaryCta={{ label: "Voir nos programmes", href: "/nos-programmes" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
