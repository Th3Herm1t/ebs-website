"use client";

import Link from "next/link";
import Image from "next/image";
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
import {
  catalogueV3,
  credentialTypeLabels,
  getCatalogueV3Opportunities,
  getCatalogueV3ProgrammeSummary,
  getCatalogueV3ProviderLogo,
  tierLabels,
  type OpportunityTier,
  type Resource,
} from "@/lib/certifications/v3";

const iaCompetences = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "IA Générative & Prompting",
    desc: "ChatGPT, Gemini, Claude, Copilot. Rédaction, synthèse, génération de contenu, analyse de documents : vous maîtrisez les principaux outils d'IA générative utilisés dans le monde professionnel.",
    certs: "Google Prompting Essentials · IBM Prompt Engineering · DeepLearning.AI GenAI",
    color: "#9C27B0",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Agents IA & Automatisation",
    desc: "Conception de workflows intelligents avec n8n, IBM Watsonx, LangChain. Vous automatisez des processus métier et développez des solutions d'IA adaptées aux besoins des entreprises.",
    certs: "n8n Level 1 & 2 · IBM Watsonx Orchestrate · Databricks AI Agents",
    color: "#2196F3",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analyse de Données Augmentée",
    desc: "Power BI, IA, GA4, IBM Data Science, Looker Studio. Vous analysez et exploitez des données complexes grâce aux outils les plus utilisés par les entreprises.",
    certs: "Google Data Analytics · IBM Data Science · Databricks GenAI",
    color: "#FF9800",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "IA Appliquée au Métier",
    desc: "Marketing augmenté, trading algorithmique, détection de fraude, CRM prédictif : l'IA au service de votre spécialité, quel que soit votre programme.",
    certs: "Certifications spécifiques à chaque filière · Projets pratiques",
    color: "#E91E8C",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Éthique & IA Responsable",
    desc: "Biais algorithmiques, transparence, réglementation (EU AI Act), protection des données et impact sociétal. Vous comprenez les enjeux d'une utilisation responsable de l'Intelligence Artificielle.",
    certs: "Google AI Essentials · IBM Foundations of AI · Harvard CS50 AI",
    color: "#00BCD4",
  },
];

const iaOpportunities = getCatalogueV3Opportunities().filter(
  (opportunity) =>
    opportunity.resource.classification === "ai-literacy" || opportunity.resource.classification === "applied-ai"
);

const aiResourceIds = new Set(iaOpportunities.map((opportunity) => opportunity.resource.id));
const iaResources = catalogueV3.resources.filter((resource) => aiResourceIds.has(resource.id));

const totalCertifications = catalogueV3.release.counts.publicCredentials;
const aiStats = {
  literacy: iaResources.filter((resource) => resource.classification === "ai-literacy").length,
  applied: iaResources.filter((resource) => resource.classification === "applied-ai").length,
  core: iaOpportunities.filter((opportunity) => opportunity.mapping.tier === "CORE").length,
  marketplace: iaOpportunities.filter((opportunity) => opportunity.mapping.tier !== "CORE").length,
};

const aiClassificationLabels: Record<Resource["classification"], string> = {
  "ai-literacy": "Culture IA",
  "applied-ai": "IA appliquée",
  "non-ai": "Métier & outils",
};

const aiClassificationText: Record<"ai-literacy" | "applied-ai", string> = {
  "ai-literacy": "Le socle transversal : comprendre, prompter, utiliser et encadrer l'IA dans le travail quotidien.",
  "applied-ai": "Les usages métiers : marketing, finance, data, cyber, CRM, automatisation et productivité avancée.",
};

const groupedAiCertifications = (["ai-literacy", "applied-ai"] as const).map((classification) => ({
  classification,
  opportunities: iaOpportunities.filter((opportunity) => opportunity.resource.classification === classification),
}));

const programmeMeta: Array<{
  slug: string;
  programme: string;
  href: string;
  highlights: string;
  color: string;
}> = [
  {
    slug: "management",
    programme: "Licence Management",
    href: "/licences/management",
    highlights: "Google PM · Scrum SFC™ · IBM Business Analyst",
    color: "#2196F3",
  },
  {
    slug: "marketing",
    programme: "Licence Marketing",
    href: "/licences/marketing",
    highlights: "Google Digital Mktg · HubSpot Digital · SEMrush SEO AI",
    color: "#E91E8C",
  },
  {
    slug: "finance",
    programme: "Licence Finance",
    href: "/licences/finance",
    highlights: "Bloomberg BMC · Bloomberg ESG · Goldman Sachs Forage",
    color: "#00BCD4",
  },
  {
    slug: "marketing-digital-ia",
    programme: "Master Marketing & IA",
    href: "/masters/marketing-digital-ia",
    highlights: "Google Advanced Data · HubSpot Marketing · Databricks",
    color: "#E91E8C",
  },
  {
    slug: "informatique-ia",
    programme: "Licence Info — IA",
    href: "/licences/informatique-ia",
    highlights: "Harvard CS50 AI · DeepLearning.AI ML/DL · Databricks GenAI",
    color: "#9C27B0",
  },
  {
    slug: "cybersecurite",
    programme: "Licence Info — Cybersécurité",
    href: "/licences/cybersecurite",
    highlights: "Google Cyber · Cisco Ethical Hacker · Fortinet FCF/FCA",
    color: "#FF9800",
  },
  {
    slug: "crm",
    programme: "Master CRM Digital",
    href: "/masters/crm",
    highlights: "HubSpot CRM · n8n Automation · IBM Watsonx",
    color: "#E91E63",
  },
  {
    slug: "startups",
    programme: "Master Startups",
    href: "/masters/startups",
    highlights: "PMI · Google PM · Scrum SAC™ · IBM DevOps",
    color: "#5E35B1",
  },
  {
    slug: "ingenierie-financiere",
    programme: "Master Ingénierie Fin.",
    href: "/masters/ingenierie-financiere",
    highlights: "Bloomberg BMC/ESG · JP Morgan Quant · Goldman Sachs IB",
    color: "#00897B",
  },
];

const programmeBreakdown = programmeMeta.map((programme) => ({
  ...programme,
  ...getCatalogueV3ProgrammeSummary(programme.slug),
}));

const getProviderLogo = (provider: string) => {
  switch (provider.toLowerCase()) {
    case "google":
      return <Image src="/images/icon/google.svg" alt="Google" width={24} height={24} className="w-6 h-6 object-contain" style={{ width: 24, height: 24 }} />;
    case "ibm":
      return <Image src="/images/icon/ibm.svg" alt="IBM" width={24} height={24} className="w-6 h-6 object-contain" style={{ width: 24, height: 24 }} />;
    case "harvard":
      return <Image src="/images/icon/harvard.png" alt="Harvard" width={24} height={24} className="w-6 h-6 object-contain" style={{ width: 24, height: 24 }} />;
    case "deeplearning.ai":
      return <Image src="/images/icon/deeplearning.ai.svg" alt="DeepLearning.AI" width={24} height={24} className="w-6 h-6 object-contain" style={{ width: 24, height: 24 }} />;
    case "hubspot":
      return <Image src="/images/icon/hubspot.svg" alt="HubSpot" width={24} height={24} className="w-6 h-6 object-contain" style={{ width: 24, height: 24 }} />;
    case "semrush":
      return <Image src="/images/icon/semrush.svg" alt="SEMrush" width={24} height={24} className="w-6 h-6 object-contain" style={{ width: 24, height: 24 }} />;
    case "cisco":
      return <Image src="/images/icon/cisco-2.svg" alt="Cisco" width={24} height={24} className="w-6 h-6 object-contain" style={{ width: 24, height: 24 }} />;
    case "microsoft":
      return <Image src="/images/icon/microsoft.svg" alt="Microsoft" width={24} height={24} className="w-6 h-6 object-contain" style={{ width: 24, height: 24 }} />;
    case "n8n":
      return <Image src="/images/icon/n8n.png" alt="n8n" width={24} height={24} className="w-6 h-6 object-contain" style={{ width: 24, height: 24 }} />;
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
      <section className="relative pt-40 pb-28 overflow-hidden bg-[#070B18]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(43,143,171,0.28),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(156,39,176,0.18),transparent_30%),linear-gradient(135deg,#070B18_0%,#111A31_52%,#071521_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_72%,transparent)]" />
        <div className="absolute -right-32 top-20 hidden h-[420px] w-[420px] rounded-full border border-penn-green/15 lg:block" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070B18] to-transparent" />

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
              Intelligence Artificielle · Compétence transversale intégrée à
              tous les parcours depuis 2026
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[42px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
          >
            L&apos;IA n&apos;est plus une{" "}
            <span className="text-penn-green">promesse</span>.
            <br />
            C&apos;est une{" "}
              <span className="bg-gradient-to-r from-[#9C27B0] to-[#2B8FAB] bg-clip-text text-transparent">
                preuve
              </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[17px] md:text-[19px] text-white/70 leading-relaxed max-w-[700px] mb-12"
          >
            À partir du catalogue v3, EBS distingue les exigences CORE, les
            opportunités recommandées et la marketplace discovery. Chaque
            étudiant avance sur des ressources IA gratuites, vérifiées et reliées
            à un justificatif clair.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5 lg:max-w-[860px]"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 text-center backdrop-blur-sm">
              <p className="text-[32px] md:text-[44px] font-extrabold text-[#9C27B0] leading-none mb-1">
                {aiStats.literacy}
              </p>
              <p className="text-[12px] text-white/50 font-medium">
                Culture IA
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 text-center backdrop-blur-sm">
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">
                {aiStats.applied}
              </p>
              <p className="text-[12px] text-white/50 font-medium">
                IA appliquée
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 text-center backdrop-blur-sm">
              <p className="text-[32px] md:text-[44px] font-extrabold text-penn-green leading-none mb-1">
                {aiStats.core}
              </p>
              <p className="text-[12px] text-white/50 font-medium">
                mappings CORE
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] p-5 text-center backdrop-blur-sm">
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">
                {aiStats.marketplace}
              </p>
              <p className="text-[12px] text-white/50 font-medium mt-1">
                mappings marketplace
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
              Le marché du travail évolue rapidement. Aujourd&apos;hui, l&apos;IA
              est présente dans tous les secteurs: finance, marketing, management,
              informatique, cybersécurité et entrepreneuriat. Les entreprises recherchent
              désormais des professionnels capables d&apos;utiliser l&apos;Intelligence
              Artificielle pour gagner en efficacité, renforcer leur créativité et améliorer leur prise de décision.
            </p>

            <div className="bg-penn-navy/5 rounded-2xl border border-[#9C27B0]/10 p-6 lg:p-8">
              <p className="text-[16px] font-bold text-penn-navy mb-2">
                Une décision stratégique, pionnière en Tunisie.
              </p>
              <p className="text-[15px] text-penn-body leading-relaxed">
                EBS a fait le choix d&apos;intégrer les compétences en Intelligence Artificielle comme socle commun dans tous ses programmes, de la Licence au Master. Chaque étudiant développe des compétences concrètes en IA appliquées à son domaine et peut les valoriser grâce à des certifications reconnues à l&apos;international.
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
              <span className="text-penn-green">TOUS</span> les étudiants EBS
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
              {iaResources.length} ressources IA vérifiées
            </h2>
            <p className="text-[16px] text-penn-body mt-3 max-w-[700px] mx-auto">
              Chaque ressource publique est gratuite de bout en bout et conserve son type exact de credential : certification, badge, achievement ou certificat d&apos;achèvement.
            </p>
          </motion.div>

          <div className="space-y-8">
            {groupedAiCertifications.map((group) => (
              <div key={group.classification} className="rounded-[28px] border border-penn-border bg-penn-bg-light p-5 lg:p-6">
                <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#9C27B0]">
                      {new Set(group.opportunities.map((opportunity) => opportunity.resource.id)).size} ressource{new Set(group.opportunities.map((opportunity) => opportunity.resource.id)).size > 1 ? "s" : ""}
                    </p>
                    <h3 className="mt-1 text-[24px] font-extrabold text-penn-navy">
                      {aiClassificationLabels[group.classification]}
                    </h3>
                    <p className="mt-2 max-w-[720px] text-[14px] leading-relaxed text-penn-body/70">
                      {aiClassificationText[group.classification]}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="rounded-full bg-white px-3 py-1 text-[11px] font-extrabold text-penn-navy">
                      {group.opportunities.filter((opportunity) => opportunity.mapping.tier === "CORE").length} CORE
                    </span>
                    <span className="rounded-full bg-white px-3 py-1 text-[11px] font-extrabold text-penn-body">
                      {group.opportunities.filter((opportunity) => opportunity.mapping.tier !== "CORE").length} marketplace
                    </span>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.opportunities.slice(0, 18).map((opportunity, i) => {
                    const logo = getCatalogueV3ProviderLogo(opportunity.resource.providerId);
                    const tier = tierLabels[opportunity.mapping.tier as OpportunityTier];
                    return (
                      <motion.div
                        key={`${opportunity.resource.id}-${opportunity.mapping.programmeId}-${opportunity.mapping.year}-${opportunity.mapping.tier}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ duration: 0.35, delay: Math.min(i * 0.025, 0.18) }}
                        className="group flex items-center gap-4 rounded-2xl border border-penn-border bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-penn-green/30 hover:shadow-md"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-penn-border/50 bg-white p-1.5 shadow-sm">
                          {logo ? (
                            <Image src={logo} alt={opportunity.provider?.name ?? "Provider"} width={72} height={32} className="max-h-8 w-auto object-contain" unoptimized />
                          ) : (
                            getProviderLogo(opportunity.provider?.name ?? "")
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[13px] font-extrabold leading-snug text-penn-navy group-hover:text-penn-green">
                            {opportunity.resource.title}
                          </p>
                          <p className="mt-1 text-[11px] font-medium text-penn-body/60">
                            {opportunity.provider?.name} · {opportunity.mapping.year} · {tier} · {opportunity.credential ? credentialTypeLabels[opportunity.credential.type] : "Credential"}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                {group.opportunities.length > 18 && (
                  <p className="mt-4 text-center text-[12px] font-bold text-penn-body/55">
                    +{group.opportunities.length - 18} mappings IA disponibles dans le catalogue complet.
                  </p>
                )}
              </div>
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
              className="inline-flex items-center gap-2 text-[15px] font-bold text-penn-green hover:underline"
            >
              Voir tout le catalogue ({totalCertifications} credentials)
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmeBreakdown.map((p, i) => {
              const tags = [`CORE ${p.core}`, `REC ${p.recommended}`, `DISC ${p.discovery}`];

              return (
                <motion.div
                  key={p.programme}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="h-full"
                >
                  <Link
                    href={p.href}
                    className="group relative flex flex-col h-full p-6 lg:p-8 bg-white rounded-[24px] border border-penn-border hover:shadow-xl transition-all duration-500 overflow-hidden"
                  >
                    {/* Hover Glow Effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle at 100% 0%, ${p.color}15 0%, transparent 60%)` }}
                    />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Top section: Color indicator & Arrow */}
                      <div className="flex items-start justify-between mb-6">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                          style={{ backgroundColor: `${p.color}15`, color: p.color }}
                        >
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div 
                          className="w-10 h-10 rounded-full bg-penn-bg-light flex items-center justify-center group-hover:bg-penn-navy group-hover:text-white transition-colors duration-300"
                        >
                          <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Middle: Title & Tags */}
                      <div className="mb-8">
                        <h3 className="text-[20px] font-extrabold text-penn-navy leading-tight mb-4 group-hover:text-penn-green transition-colors duration-300">
                          {p.programme}
                        </h3>
                        
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag, idx) => (
                            <span 
                              key={idx}
                              className="inline-flex px-3 py-1 text-[12px] font-bold rounded-lg border bg-white shadow-sm"
                              style={{ color: p.color, borderColor: `${p.color}30` }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom: Total Metric */}
                      <div className="mt-auto pt-6 border-t border-penn-border flex items-end justify-between">
                        <div>
                          <p className="text-[12px] font-bold text-penn-body uppercase tracking-wider mb-1">
                            Mappings v3
                          </p>
                          <p className="text-[32px] font-extrabold leading-none" style={{ color: p.color }}>
                            {p.total}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[12px] font-bold text-penn-body uppercase tracking-wider mb-1">
                            Exigences CORE
                          </p>
                          <p className="text-[24px] font-extrabold leading-none text-penn-navy">
                            {p.requirements}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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
                desc: "5 parcours Licence avec IA intégrée.",
                href: "/licences",
                label: "Explorer",
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Certifications",
                desc: `${totalCertifications} credentials gratuits vérifiés.`,
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
                  <h3 className="text-[17px] font-extrabold text-penn-navy mb-2 group-hover:text-penn-green transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-penn-body leading-relaxed mb-4 flex-1">
                    {card.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-penn-green">
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
        title="Une décision stratégique, pionnière en Tunisie."
        subtitle="Chaque étudiant développe des compétences concrètes en IA appliquées à son domaine et peut les valoriser grâce à des certifications reconnues à l'international."
        primaryCta={{ label: "Voir nos programmes", href: "/nos-programmes" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
