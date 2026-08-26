export type RoadmapStudyLevel = "licence" | "master";
export type RoadmapCertificationLevel = "debutant" | "intermediaire" | "avance";
export type RoadmapYear = "L1" | "L2" | "L3" | "M1" | "M2";

export interface RoadmapCertification {
  name: string;
  provider: string;
  level: RoadmapCertificationLevel;
  recommendedYear: RoadmapYear;
  url?: string;
}

export interface RoadmapProgrammeSummary {
  slug: string;
  title: string;
  studyLevel: RoadmapStudyLevel;
  specificCertifications: number;
  aiBlockCertifications: number;
  totalCertifications: number;
  color: string;
}

export interface RoadmapCountIssue {
  area: string;
  expected: number;
  parsed: number;
  note: string;
}

export const roadmapLevels: Record<RoadmapCertificationLevel, { label: string; color: string }> = {
  debutant: { label: "Débutant", color: "#2E8FAF" },
  intermediaire: { label: "Intermédiaire", color: "#E89745" },
  avance: { label: "Avancé", color: "#7D3C98" },
};

export const licenceAiCertifications: RoadmapCertification[] = [
  { name: "Google AI Essentials", provider: "Google", level: "debutant", recommendedYear: "L1", url: "https://www.skills.google/paths/2336" },
  { name: "Google Prompting Essentials", provider: "Google", level: "debutant", recommendedYear: "L1", url: "https://www.skills.google/paths/2337" },
  { name: "Présentation de l'IA et des agents génératifs", provider: "Microsoft", level: "debutant", recommendedYear: "L1", url: "https://learn.microsoft.com/fr-fr/training/modules/fundamentals-generative-ai/" },
  { name: "Fondements de l'IA", provider: "IBM", level: "debutant", recommendedYear: "L1", url: "https://cognitiveclass.ai/learn/fundamentals-of-ai" },
  { name: "Concepts d'IA", provider: "IBM", level: "debutant", recommendedYear: "L1", url: "https://cognitiveclass.ai/courses/ai-concepts-ba67406f-972f-40ec-bd11-4c45a979f57d" },
  { name: "Introduire l'IA", provider: "IBM", level: "debutant", recommendedYear: "L1", url: "https://cognitiveclass.ai/courses/introducing-ai-09f5c2a8-b79c-443d-b09a-8227c40c2108" },
  { name: "Introduction to Modern AI", provider: "Cisco", level: "debutant", recommendedYear: "L1", url: "https://www.netacad.com/courses/introduction-to-modern-ai" },
  { name: "Apply AI: Update Your Resume", provider: "Cisco", level: "debutant", recommendedYear: "L1", url: "https://www.netacad.com/courses/apply-ai-update-your-resume" },
  { name: "Statistiques 101", provider: "IBM", level: "debutant", recommendedYear: "L1", url: "https://cognitiveclass.ai/courses/statistics-101" },
  { name: "Big Data 101", provider: "IBM", level: "debutant", recommendedYear: "L2", url: "https://cognitiveclass.ai/courses/what-is-big-data" },
  { name: "Ingénierie des Prompts pour Tous", provider: "IBM", level: "intermediaire", recommendedYear: "L2", url: "https://cognitiveclass.ai/courses/prompt-engineering-for-everyone" },
  { name: "Travailler plus intelligemment avec l'IA", provider: "Microsoft", level: "intermediaire", recommendedYear: "L2", url: "https://learn.microsoft.com/fr-fr/training/paths/work-smarter-with-ai/" },
  { name: "Renforcez votre productivité grâce aux outils d'IA", provider: "Microsoft", level: "intermediaire", recommendedYear: "L2", url: "https://learn.microsoft.com/fr-fr/plans/w0giztqd44m20" },
  { name: "Fondements de la Science des Données", provider: "IBM", level: "intermediaire", recommendedYear: "L2", url: "https://cognitiveclass.ai/learn/data-science" },
  { name: "Fondements du Big Data", provider: "IBM", level: "intermediaire", recommendedYear: "L3", url: "https://cognitiveclass.ai/learn/big-data" },
  { name: "Méthodologie de la Science des Données", provider: "IBM", level: "intermediaire", recommendedYear: "L3", url: "https://cognitiveclass.ai/courses/data-science-methodology-2" },
  { name: "Outils de Science des Données (open source)", provider: "IBM", level: "intermediaire", recommendedYear: "L3", url: "https://cognitiveclass.ai/courses/data-science-hands-open-source-tools-2" },
  { name: "Introduction to Data Science", provider: "Cisco", level: "intermediaire", recommendedYear: "L2", url: "https://www.netacad.com/courses/introduction-data-science" },
  { name: "AI Fundamentals with IBM SkillsBuild", provider: "Cisco", level: "intermediaire", recommendedYear: "L2", url: "https://www.netacad.com/courses/ai-ibm-skillsbuild" },
  { name: "Data Analytics Essentials", provider: "Cisco", level: "intermediaire", recommendedYear: "L3", url: "https://www.netacad.com/courses/data-analytics-essentials" },
  { name: "Introduction to IoT & Digital Transformation", provider: "Cisco", level: "intermediaire", recommendedYear: "L3", url: "https://www.netacad.com/courses/introduction-iot" },
  { name: "Construire des chatbots IA sans programmation", provider: "IBM", level: "intermediaire", recommendedYear: "L3", url: "https://cognitiveclass.ai/courses/building-ai-powered-chatbots-without-programming" },
];

export const masterAiCertifications: RoadmapCertification[] = [
  { name: "Scrum with AI Certified (SAC™)", provider: "Scrum", level: "avance", recommendedYear: "M1", url: "https://www.scrumstudy.com/certification/scrum-with-ai-certified" },
  { name: "Déverrouiller le potentiel commercial — agents IA", provider: "Microsoft", level: "avance", recommendedYear: "M1", url: "https://learn.microsoft.com/fr-fr/plans/pzxuztqe0kpjq" },
  { name: "Foundations & Applications of Generative AI", provider: "IBM", level: "avance", recommendedYear: "M1", url: "https://www.ibm.com/training/learning-path/foundations-and-applications-of-generative-ai-1061" },
  { name: "Agentic AI in Practice", provider: "IBM", level: "avance", recommendedYear: "M1", url: "https://www.ibm.com/training/learning-path/agentic-ai-in-practice-1058" },
  { name: "AI Agent Pratique (Hands-on)", provider: "IBM", level: "avance", recommendedYear: "M1", url: "https://cognitiveclass.ai/learn/agentic-ai-hands-on" },
  { name: "Introduction à l'IA Agent", provider: "IBM", level: "avance", recommendedYear: "M1", url: "https://cognitiveclass.ai/courses/introduction-to-agentic-ai" },
  { name: "Build & Deploy Modern Web and AI Apps", provider: "IBM", level: "avance", recommendedYear: "M2", url: "https://www.ibm.com/training/learning-path/build-and-deploy-modern-web-and-ai-apps-from-html-basics-to-generative-ai-1062" },
  { name: "Fondements de l'Apprentissage Profond", provider: "IBM", level: "avance", recommendedYear: "M2", url: "https://cognitiveclass.ai/courses/introduction-deep-learning" },
  { name: "Generative AI Fundamentals", provider: "Databricks", level: "avance", recommendedYear: "M1", url: "https://www.databricks.com/resources/learn/training/generative-ai-fundamentals" },
  { name: "Bring AI to Your Data (Databricks Fundamentals)", provider: "Databricks", level: "avance", recommendedYear: "M1", url: "https://www.databricks.com/resources/learn/training/databricks-fundamentals" },
  { name: "AI for Good Specialization", provider: "DeepLearning.AI", level: "avance", recommendedYear: "M2", url: "https://www.deeplearning.ai/courses/ai-for-good/" },
  { name: "Data Science: Capstone (Harvard)", provider: "Harvard", level: "avance", recommendedYear: "M2", url: "https://pll.harvard.edu/course/data-science-capstone/2026-04" },
  { name: "Datacom | Automation AI Accelerator", provider: "Forage", level: "avance", recommendedYear: "M2", url: "https://www.theforage.com/simulations/datacom/automation-zn3l" },
  { name: "EAB | GenAI for Proposal Generation", provider: "Forage", level: "avance", recommendedYear: "M2", url: "https://www.theforage.com/simulations/eab/gen-ai-for-proposal-generation-u7cu" },
];

const licenceAiCount = licenceAiCertifications.length;
const masterAiCount = masterAiCertifications.length;

export const roadmapProgrammeSummaries: RoadmapProgrammeSummary[] = [
  { slug: "management", title: "Licence en Management", studyLevel: "licence", specificCertifications: 18, aiBlockCertifications: licenceAiCount, totalCertifications: 18 + licenceAiCount, color: "#1A5276" },
  { slug: "marketing", title: "Licence en Marketing", studyLevel: "licence", specificCertifications: 25, aiBlockCertifications: licenceAiCount, totalCertifications: 25 + licenceAiCount, color: "#C0392B" },
  { slug: "finance", title: "Licence en Finance", studyLevel: "licence", specificCertifications: 13, aiBlockCertifications: licenceAiCount, totalCertifications: 13 + licenceAiCount, color: "#196F3D" },
  { slug: "informatique-ia", title: "Licence en Génie Logiciel — Option IA", studyLevel: "licence", specificCertifications: 17, aiBlockCertifications: licenceAiCount, totalCertifications: 17 + licenceAiCount, color: "#7D3C98" },
  { slug: "cybersecurite", title: "Licence en Génie Logiciel — Option Cybersécurité", studyLevel: "licence", specificCertifications: 37, aiBlockCertifications: licenceAiCount, totalCertifications: 37 + licenceAiCount, color: "#1A252F" },
  { slug: "marketing-digital-ia", title: "Master en Digital Marketing & Intelligence Artificielle", studyLevel: "master", specificCertifications: 46, aiBlockCertifications: masterAiCount, totalCertifications: 46 + masterAiCount, color: "#E74C3C" },
  { slug: "crm", title: "Master en CRM & Transformation Digitale", studyLevel: "master", specificCertifications: 38, aiBlockCertifications: masterAiCount, totalCertifications: 38 + masterAiCount, color: "#2980B9" },
  { slug: "startups", title: "Master en Project Management", studyLevel: "master", specificCertifications: 16, aiBlockCertifications: masterAiCount, totalCertifications: 16 + masterAiCount, color: "#D35400" },
  { slug: "ingenierie-financiere", title: "Master en Ingénierie Financière", studyLevel: "master", specificCertifications: 21, aiBlockCertifications: masterAiCount, totalCertifications: 21 + masterAiCount, color: "#1E8449" },
];

export const roadmapCountIssues: RoadmapCountIssue[] = [
  {
    area: "Bloc IA — Licences",
    expected: 12,
    parsed: licenceAiCount,
    note: "Audit note only: the original roadmap heading and recap table say 12, but the HTML contains 22 licence AI cards. The website source of truth uses 22.",
  },
  {
    area: "Bloc IA — Masters",
    expected: 9,
    parsed: masterAiCount,
    note: "Audit note only: the original roadmap heading and recap table say 9, but the HTML contains 14 master AI cards. The website source of truth uses 14.",
  },
];

export function getRoadmapAiCertifications(studyLevel: RoadmapStudyLevel) {
  return studyLevel === "licence" ? licenceAiCertifications : masterAiCertifications;
}

export function getRoadmapProgrammeSummary(slug: string) {
  return roadmapProgrammeSummaries.find((programme) => programme.slug === slug);
}

export function getComputedRoadmapTotal(programme: RoadmapProgrammeSummary) {
  return programme.specificCertifications + programme.aiBlockCertifications;
}

export function getParsedRoadmapTotal(programme: RoadmapProgrammeSummary) {
  return programme.specificCertifications + getRoadmapAiCertifications(programme.studyLevel).length;
}
