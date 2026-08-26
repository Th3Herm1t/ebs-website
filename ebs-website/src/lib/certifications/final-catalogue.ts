import { getProviderLogo } from "./providers";

export type CertificationClassification = "ai-literacy" | "applied-ai" | "non-ai";
export type CertificationRequirement = "mandatory" | "optional";
export type CertificationDeliveryPlatform = "provider-direct" | "forage" | "other";
export type CertificationStudyLevel = "licence" | "master";
export type CertificationYear = "L1" | "L2" | "L3" | "M1" | "M2";

export type CertificationProgrammeSlug =
  | "management"
  | "marketing"
  | "finance"
  | "informatique-ia"
  | "cybersecurite"
  | "marketing-digital-ia"
  | "crm"
  | "startups"
  | "ingenierie-financiere";

export interface FinalCertification {
  id: string;
  name: string;
  provider: string;
  displayProvider: string;
  classification: CertificationClassification;
  requirement: CertificationRequirement;
  studyLevels: CertificationStudyLevel[];
  programmes: CertificationProgrammeSlug[];
  recommendedYear: CertificationYear;
  deliveryPlatform: CertificationDeliveryPlatform;
  externalUrl?: string;
  isForageSimulation?: boolean;
  publicNote?: string;
  publicVisible: boolean;
  sourceNote?: string;
}

export const allProgrammeSlugs: CertificationProgrammeSlug[] = [
  "management",
  "marketing",
  "finance",
  "informatique-ia",
  "cybersecurite",
  "marketing-digital-ia",
  "crm",
  "startups",
  "ingenierie-financiere",
];

export const licenceProgrammeSlugs: CertificationProgrammeSlug[] = [
  "management",
  "marketing",
  "finance",
  "informatique-ia",
  "cybersecurite",
];

export const masterProgrammeSlugs: CertificationProgrammeSlug[] = [
  "marketing-digital-ia",
  "crm",
  "startups",
  "ingenierie-financiere",
];

const forageNote = "*Simulation Forage";

function cert(certification: FinalCertification): FinalCertification {
  return certification;
}

function direct(
  data: Omit<FinalCertification, "displayProvider" | "deliveryPlatform" | "publicVisible">
): FinalCertification {
  return cert({
    ...data,
    displayProvider: data.provider,
    deliveryPlatform: "provider-direct",
    publicVisible: true,
  });
}

function forage(
  data: Omit<FinalCertification, "displayProvider" | "deliveryPlatform" | "isForageSimulation" | "publicNote" | "publicVisible">
): FinalCertification {
  return cert({
    ...data,
    displayProvider: data.provider,
    deliveryPlatform: "forage",
    isForageSimulation: true,
    publicNote: forageNote,
    publicVisible: true,
  });
}

export const finalCertificationCatalogue: FinalCertification[] = [
  direct({
    id: "google-ai-essentials",
    name: "Google AI Essentials",
    provider: "Google",
    classification: "ai-literacy",
    requirement: "mandatory",
    studyLevels: ["licence"],
    programmes: licenceProgrammeSlugs,
    recommendedYear: "L1",
    externalUrl: "https://www.skills.google/paths/2336",
  }),
  direct({
    id: "google-prompting-essentials",
    name: "Google Prompting Essentials",
    provider: "Google",
    classification: "ai-literacy",
    requirement: "mandatory",
    studyLevels: ["licence"],
    programmes: licenceProgrammeSlugs,
    recommendedYear: "L1",
    externalUrl: "https://www.skills.google/paths/2337",
  }),
  direct({
    id: "microsoft-generative-ai-agents-intro",
    name: "Présentation de l'IA et des agents génératifs",
    provider: "Microsoft",
    classification: "ai-literacy",
    requirement: "mandatory",
    studyLevels: ["licence"],
    programmes: licenceProgrammeSlugs,
    recommendedYear: "L1",
    externalUrl: "https://learn.microsoft.com/fr-fr/training/modules/fundamentals-generative-ai/",
  }),
  direct({
    id: "ibm-ai-foundations",
    name: "Fondements de l'IA",
    provider: "IBM",
    classification: "ai-literacy",
    requirement: "mandatory",
    studyLevels: ["licence"],
    programmes: licenceProgrammeSlugs,
    recommendedYear: "L1",
    externalUrl: "https://cognitiveclass.ai/learn/fundamentals-of-ai",
  }),
  direct({
    id: "microsoft-work-smarter-with-ai",
    name: "Travailler plus intelligemment avec l'IA",
    provider: "Microsoft",
    classification: "ai-literacy",
    requirement: "mandatory",
    studyLevels: ["licence"],
    programmes: licenceProgrammeSlugs,
    recommendedYear: "L2",
    externalUrl: "https://learn.microsoft.com/fr-fr/training/paths/work-smarter-with-ai/",
  }),
  direct({
    id: "microsoft-ai-business-potential-agents",
    name: "Déverrouiller le potentiel commercial — agents IA",
    provider: "Microsoft",
    classification: "ai-literacy",
    requirement: "mandatory",
    studyLevels: ["master"],
    programmes: masterProgrammeSlugs,
    recommendedYear: "M1",
    externalUrl: "https://learn.microsoft.com/fr-fr/plans/pzxuztqe0kpjq",
  }),
  direct({
    id: "ibm-foundations-applications-generative-ai",
    name: "Foundations & Applications of Generative AI",
    provider: "IBM",
    classification: "ai-literacy",
    requirement: "mandatory",
    studyLevels: ["master"],
    programmes: masterProgrammeSlugs,
    recommendedYear: "M1",
    externalUrl: "https://www.ibm.com/training/learning-path/foundations-and-applications-of-generative-ai-1061",
  }),
  direct({
    id: "ibm-agentic-ai-in-practice",
    name: "Agentic AI in Practice",
    provider: "IBM",
    classification: "ai-literacy",
    requirement: "mandatory",
    studyLevels: ["master"],
    programmes: masterProgrammeSlugs,
    recommendedYear: "M1",
    externalUrl: "https://www.ibm.com/training/learning-path/agentic-ai-in-practice-1058",
  }),
  direct({
    id: "databricks-generative-ai-fundamentals",
    name: "Generative AI Fundamentals",
    provider: "Databricks",
    classification: "ai-literacy",
    requirement: "mandatory",
    studyLevels: ["master"],
    programmes: masterProgrammeSlugs,
    recommendedYear: "M1",
    externalUrl: "https://www.databricks.com/resources/learn/training/generative-ai-fundamentals",
  }),

  direct({ id: "ibm-ai-concepts", name: "Concepts d'IA", provider: "IBM", classification: "ai-literacy", requirement: "optional", studyLevels: ["licence"], programmes: licenceProgrammeSlugs, recommendedYear: "L1", externalUrl: "https://cognitiveclass.ai/courses/ai-concepts-ba67406f-972f-40ec-bd11-4c45a979f57d" }),
  direct({ id: "ibm-introducing-ai", name: "Introduire l'IA", provider: "IBM", classification: "ai-literacy", requirement: "optional", studyLevels: ["licence"], programmes: licenceProgrammeSlugs, recommendedYear: "L1", externalUrl: "https://cognitiveclass.ai/courses/introducing-ai-09f5c2a8-b79c-443d-b09a-8227c40c2108" }),
  direct({ id: "cisco-introduction-modern-ai", name: "Introduction to Modern AI", provider: "Cisco", classification: "ai-literacy", requirement: "optional", studyLevels: ["licence"], programmes: licenceProgrammeSlugs, recommendedYear: "L1", externalUrl: "https://www.netacad.com/courses/introduction-to-modern-ai" }),
  direct({ id: "cisco-apply-ai-resume", name: "Apply AI: Update Your Resume", provider: "Cisco", classification: "ai-literacy", requirement: "optional", studyLevels: ["licence"], programmes: licenceProgrammeSlugs, recommendedYear: "L1", externalUrl: "https://www.netacad.com/courses/apply-ai-update-your-resume" }),
  direct({ id: "microsoft-ai-productivity-tools", name: "Renforcez votre productivité grâce aux outils d'IA", provider: "Microsoft", classification: "ai-literacy", requirement: "optional", studyLevels: ["licence"], programmes: licenceProgrammeSlugs, recommendedYear: "L2", externalUrl: "https://learn.microsoft.com/fr-fr/plans/w0giztqd44m20" }),
  direct({ id: "deeplearning-ai-for-good", name: "AI for Good Specialization", provider: "DeepLearning.AI", classification: "ai-literacy", requirement: "optional", studyLevels: ["master"], programmes: masterProgrammeSlugs, recommendedYear: "M2", externalUrl: "https://www.deeplearning.ai/courses/ai-for-good/" }),

  direct({ id: "scrumstudy-scrum-with-ai-management", name: "Scrum with AI Certified (SAC™)", provider: "ScrumStudy", classification: "applied-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["management"], recommendedYear: "L3", externalUrl: "https://www.scrumstudy.com/certification/scrum-with-ai-certified" }),
  direct({ id: "ibm-chatbots-no-code-management", name: "Construire des chatbots IA sans programmation", provider: "IBM", classification: "applied-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["management"], recommendedYear: "L3", externalUrl: "https://cognitiveclass.ai/courses/building-ai-powered-chatbots-without-programming" }),
  direct({ id: "semrush-content-marketing-ai-search", name: "Content Marketing: SEO & AI Search Optimization", provider: "SEMrush", classification: "applied-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L3", externalUrl: "https://www.semrush.com/academy/courses/content-marketing-essentials-for-seo-and-ai-search-with-semrush/" }),
  direct({ id: "semrush-off-page-ai-search", name: "Off-Page SEO & AI Search Essentials", provider: "SEMrush", classification: "applied-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L3", externalUrl: "https://www.semrush.com/academy/courses/off-page-seo-and-ai-search-essentials-with-semrush/" }),
  direct({ id: "ibm-chatbots-no-code-marketing", name: "Construire des chatbots IA sans programmation", provider: "IBM", classification: "applied-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L3", externalUrl: "https://cognitiveclass.ai/courses/building-ai-powered-chatbots-without-programming" }),
  direct({ id: "microsoft-ai-finance-leaders", name: "Découvrir l'IA pour les leaders en finance", provider: "Microsoft", classification: "applied-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["finance"], recommendedYear: "L3", externalUrl: "https://learn.microsoft.com/fr-fr/training/paths/discover-microsoft-ai-leaders-financial-industry/" }),
  direct({ id: "ibm-data-science-foundations-finance", name: "Fondements de la Science des Données", provider: "IBM", classification: "applied-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["finance"], recommendedYear: "L2", externalUrl: "https://cognitiveclass.ai/learn/data-science" }),
  direct({ id: "harvard-cs50-ai-python", name: "CS50's Introduction to AI with Python", provider: "Harvard", classification: "applied-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["informatique-ia"], recommendedYear: "L2", externalUrl: "https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python" }),
  direct({ id: "deeplearning-machine-learning-specialization", name: "Machine Learning Specialization", provider: "DeepLearning.AI", classification: "applied-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["informatique-ia"], recommendedYear: "L3", externalUrl: "https://www.deeplearning.ai/courses/machine-learning-specialization/" }),
  direct({ id: "deeplearning-math-ml-data-science", name: "Mathematics for ML and Data Science", provider: "DeepLearning.AI", classification: "applied-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["informatique-ia"], recommendedYear: "L2", externalUrl: "https://www.deeplearning.ai/courses/mathematics-for-machine-learning-and-data-science-specialization/" }),
  direct({ id: "cisco-data-science-python", name: "Data Science Essentials with Python", provider: "Cisco", classification: "applied-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["informatique-ia"], recommendedYear: "L3", externalUrl: "https://www.netacad.com/courses/data-science-essentials-with-python" }),
  direct({ id: "google-cloud-cybersecurity", name: "Google Cloud Cybersecurity", provider: "Google", classification: "applied-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["cybersecurite"], recommendedYear: "L2", externalUrl: "https://www.skills.google/paths/419" }),
  direct({ id: "cisco-cyber-threat-management", name: "Cyber Threat Management", provider: "Cisco", classification: "applied-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["cybersecurite"], recommendedYear: "L3", externalUrl: "https://www.netacad.com/courses/cyber-threat-management" }),
  direct({ id: "cisco-modern-ai-cyber", name: "Introduction to Modern AI", provider: "Cisco", classification: "applied-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["cybersecurite"], recommendedYear: "L1", externalUrl: "https://www.netacad.com/courses/introduction-to-modern-ai" }),
  direct({ id: "google-ai-performance-ads", name: "AI-Powered Performance Ads Certification", provider: "Google", classification: "applied-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["marketing-digital-ia"], recommendedYear: "M2", externalUrl: "https://skillshop.docebosaas.com/learn/courses/8510/ai-powered-performance-ads-certification" }),
  direct({ id: "semrush-ai-powered-marketer", name: "How to Become an AI-Powered Marketer", provider: "SEMrush", classification: "applied-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["marketing-digital-ia"], recommendedYear: "M1", externalUrl: "https://www.semrush.com/academy/courses/ai-for-marketing-course/" }),
  direct({ id: "semrush-technical-seo-ai-search", name: "Technical SEO & AI Search Essentials", provider: "SEMrush", classification: "applied-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["marketing-digital-ia"], recommendedYear: "M1", externalUrl: "https://www.semrush.com/academy/courses/techincal-seo-and-ai-search-essentials-with-semrush/" }),
  direct({ id: "n8n-level-one-marketing", name: "n8n Automation - Level One", provider: "n8n", classification: "applied-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["marketing-digital-ia"], recommendedYear: "M1", externalUrl: "https://docs.n8n.io/courses/level-one/" }),
  direct({ id: "microsoft-transform-business-ai", name: "Transformer votre entreprise avec l'IA", provider: "Microsoft", classification: "applied-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["crm"], recommendedYear: "M1", externalUrl: "https://learn.microsoft.com/fr-fr/training/paths/transform-your-business-with-microsoft-ai/" }),
  direct({ id: "ibm-watsonx-orchestrate", name: "watsonx Orchestrate : Automatisation avec IA Agent", provider: "IBM", classification: "applied-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["crm"], recommendedYear: "M1", externalUrl: "https://cognitiveclass.ai/courses/watsonx-orchestrate-automating-business-with-agentic-ai" }),
  direct({ id: "ibm-customer-clustering-kmeans-crm", name: "Clustering Clients avec KMeans", provider: "IBM", classification: "applied-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["crm"], recommendedYear: "M2", externalUrl: "https://cognitiveclass.ai/courses/customer-clustering-with-kmeans-to-boost-business-strategy" }),
  direct({ id: "n8n-level-one-crm", name: "n8n Automation - Level One", provider: "n8n", classification: "applied-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["crm"], recommendedYear: "M1", externalUrl: "https://docs.n8n.io/courses/level-one/" }),
  direct({ id: "scrum-with-ai-project-management", name: "Scrum with AI Certified (SAC™)", provider: "ScrumStudy", classification: "applied-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["startups"], recommendedYear: "M1", externalUrl: "https://www.scrumstudy.com/certification/scrum-with-ai-certified" }),
  direct({ id: "databricks-ai-agents-workflows-pm", name: "Using AI Agents in Workflows", provider: "Databricks", classification: "applied-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["startups"], recommendedYear: "M1", externalUrl: "https://www.databricks.com/resources/training/level-your-ai-agent-skills" }),
  direct({ id: "n8n-level-one-pm", name: "n8n Automation - Level One", provider: "n8n", classification: "applied-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["startups"], recommendedYear: "M1", externalUrl: "https://docs.n8n.io/courses/level-one/" }),
  direct({ id: "ibm-customer-clustering-kmeans-pm", name: "Clustering Clients avec KMeans", provider: "IBM", classification: "applied-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["startups"], recommendedYear: "M2", externalUrl: "https://cognitiveclass.ai/courses/customer-clustering-with-kmeans-to-boost-business-strategy" }),
  direct({ id: "databricks-bring-ai-to-data-finance", name: "Bring AI to Your Data", provider: "Databricks", classification: "applied-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["ingenierie-financiere"], recommendedYear: "M1", externalUrl: "https://www.databricks.com/resources/learn/training/databricks-fundamentals" }),
  direct({ id: "deeplearning-math-ml-finance", name: "Mathematics for ML and Data Science", provider: "DeepLearning.AI", classification: "applied-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["ingenierie-financiere"], recommendedYear: "M1", externalUrl: "https://www.deeplearning.ai/courses/mathematics-for-machine-learning-and-data-science-specialization/" }),
  direct({ id: "harvard-data-science-capstone-finance", name: "Data Science: Capstone", provider: "Harvard", classification: "applied-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["ingenierie-financiere"], recommendedYear: "M2", externalUrl: "https://pll.harvard.edu/course/data-science-capstone/2026-04" }),
  forage({ id: "citi-markets-quantitative-analysis", name: "Markets Quantitative Analysis", provider: "Citi", classification: "applied-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["ingenierie-financiere"], recommendedYear: "M2", externalUrl: "https://www.theforage.com/simulations/citi/global-quantitative-analysis-analyst-6b4m" }),

  direct({ id: "google-ai-shopping-ads", name: "AI-Powered Shopping Ads Certification", provider: "Google", classification: "applied-ai", requirement: "optional", studyLevels: ["master"], programmes: ["marketing-digital-ia"], recommendedYear: "M2", externalUrl: "https://skillshop.docebosaas.com/learn/courses/8992/google-ads-creative-certification" }),
  direct({ id: "ibm-watsonx-assistant", name: "watsonx Assistant : Assistants Virtuels IA Générative", provider: "IBM", classification: "applied-ai", requirement: "optional", studyLevels: ["master"], programmes: ["marketing-digital-ia", "crm"], recommendedYear: "M2", externalUrl: "https://cognitiveclass.ai/courses/watsonx-assistant-virtual-assistants-with-generative-ai" }),
  direct({ id: "n8n-level-two", name: "n8n Automation - Level Two", provider: "n8n", classification: "applied-ai", requirement: "optional", studyLevels: ["master"], programmes: ["marketing-digital-ia", "crm", "startups"], recommendedYear: "M2", externalUrl: "https://docs.n8n.io/courses/level-two/" }),
  direct({ id: "hubspot-ai-marketing-sales-service", name: "AI for Marketing, Sales & Service Bootcamp", provider: "HubSpot", classification: "applied-ai", requirement: "optional", studyLevels: ["master"], programmes: ["marketing-digital-ia", "crm"], recommendedYear: "M2", sourceNote: "HubSpot course-specific URL should be verified before student-space deployment." }),
  direct({ id: "cisco-iot-digital-transformation-management", name: "Introduction to IoT & Digital Transformation", provider: "Cisco", classification: "applied-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["management"], recommendedYear: "L3", externalUrl: "https://www.netacad.com/courses/introduction-iot" }),
  direct({ id: "google-ai-performance-ads-marketing-optional", name: "AI-Powered Performance Ads Certification", provider: "Google", classification: "applied-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L3", externalUrl: "https://skillshop.docebosaas.com/learn/courses/8510/ai-powered-performance-ads-certification" }),
  direct({ id: "ibm-machine-learning-basics-informatique", name: "Fondements de l'Apprentissage Automatique", provider: "IBM", classification: "applied-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["informatique-ia"], recommendedYear: "L2", externalUrl: "https://cognitiveclass.ai/learn/machine-learning-basics" }),
  direct({ id: "cisco-ai-fundamentals-cyber", name: "AI Fundamentals with IBM SkillsBuild", provider: "Cisco", classification: "applied-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["cybersecurite"], recommendedYear: "L2", externalUrl: "https://www.netacad.com/courses/ai-ibm-skillsbuild" }),
  direct({ id: "ibm-ai-agent-hands-on", name: "AI Agent Pratique (Hands-on)", provider: "IBM", classification: "applied-ai", requirement: "optional", studyLevels: ["master"], programmes: ["startups", "crm"], recommendedYear: "M1", externalUrl: "https://cognitiveclass.ai/learn/agentic-ai-hands-on" }),
  direct({ id: "databricks-bring-ai-to-data-crm", name: "Bring AI to Your Data", provider: "Databricks", classification: "applied-ai", requirement: "optional", studyLevels: ["master"], programmes: ["crm", "finance"], recommendedYear: "M1", externalUrl: "https://www.databricks.com/resources/learn/training/databricks-fundamentals" }),
  forage({ id: "jpmorgan-quantitative-research-finance-optional", name: "Quantitative Research", provider: "JPMorganChase", classification: "applied-ai", requirement: "optional", studyLevels: ["master"], programmes: ["ingenierie-financiere"], recommendedYear: "M2", externalUrl: "https://www.theforage.com/simulations/jpmorgan/quantitative-research-11oc" }),
  forage({ id: "datacom-automation-ai-accelerator", name: "Automation AI Accelerator", provider: "Datacom", classification: "applied-ai", requirement: "optional", studyLevels: ["master"], programmes: ["startups"], recommendedYear: "M2", externalUrl: "https://www.theforage.com/simulations/datacom/automation-zn3l" }),
  forage({ id: "eab-genai-proposal-generation", name: "GenAI for Proposal Generation", provider: "EAB", classification: "applied-ai", requirement: "optional", studyLevels: ["master"], programmes: ["marketing-digital-ia", "startups"], recommendedYear: "M2", externalUrl: "https://www.theforage.com/simulations/eab/gen-ai-for-proposal-generation-u7cu" }),

  direct({ id: "google-agile-essentials", name: "Google Agile Essentials", provider: "Google", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["management"], recommendedYear: "L1", externalUrl: "https://www.skills.google/paths/2338" }),
  direct({ id: "scrum-fundamentals-certified", name: "Scrum Fundamentals Certified (SFC™)", provider: "ScrumStudy", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["management"], recommendedYear: "L1", externalUrl: "https://www.scrumstudy.com/certification/scrum-fundamentals-certified" }),
  direct({ id: "msi-project-management-essentials", name: "Project Management Essentials Certification", provider: "MSI", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["management"], recommendedYear: "L2", externalUrl: "https://courses.msicertified.com/course/project-management-essentials-certification" }),
  direct({ id: "msi-business-management-essentials", name: "Business Management Essentials Certification", provider: "MSI", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["management"], recommendedYear: "L1", externalUrl: "https://courses.msicertified.com/course/free-business-management-certification" }),
  direct({ id: "pmi-kickoff", name: "PMI Kickoff", provider: "PMI", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["management"], recommendedYear: "L2", externalUrl: "https://www.pmi.org/kickoff" }),
  direct({ id: "google-fundamentals-digital-marketing", name: "Fundamentals of Digital Marketing", provider: "Google", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L1", externalUrl: "https://skillshop.exceedlms.com/student/collection/1830706" }),
  direct({ id: "hubspot-digital-marketing", name: "HubSpot Digital Marketing", provider: "HubSpot", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L1", externalUrl: "https://academy.hubspot.com/courses/digital-marketing" }),
  direct({ id: "hubspot-content-marketing", name: "HubSpot Content Marketing", provider: "HubSpot", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L1", externalUrl: "https://academy.hubspot.com/courses/content-marketing" }),
  direct({ id: "hubspot-inbound-marketing", name: "HubSpot Inbound Marketing", provider: "HubSpot", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L2", externalUrl: "https://academy.hubspot.com/courses/inbound-marketing" }),
  direct({ id: "semrush-beginner-seo", name: "Beginner SEO with Semrush", provider: "SEMrush", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L1", externalUrl: "https://www.semrush.com/academy/courses/seo-essentials-with-semrush/" }),
  direct({ id: "ibm-finance-accounting-essentials", name: "Finance & Accounting Essentials", provider: "IBM", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["finance"], recommendedYear: "L2", externalUrl: "https://www.ibm.com/training/badge/finance-accounting-essentials" }),
  forage({ id: "bloomberg-company-essentials", name: "Company Essentials", provider: "Bloomberg", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["finance"], recommendedYear: "L2", externalUrl: "https://www.theforage.com/short-courses/bloomberg/company-pathway-wqtk" }),
  forage({ id: "citi-company-essentials", name: "Company Essentials", provider: "Citi", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["finance"], recommendedYear: "L2", externalUrl: "https://www.theforage.com/short-courses/citi/company-pathway-citi" }),
  forage({ id: "mayer-brown-introduction-finance", name: "Introduction to Finance", provider: "Mayer Brown", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["finance"], recommendedYear: "L3", externalUrl: "https://www.theforage.com/simulations/mayer-brown/introduction-to-finance-du23" }),
  direct({ id: "harvard-cs50-computer-science-ia", name: "CS50: Introduction to Computer Science", provider: "Harvard", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["informatique-ia"], recommendedYear: "L1", externalUrl: "https://pll.harvard.edu/course/cs50-introduction-computer-science" }),
  direct({ id: "harvard-cs50-python", name: "CS50's Introduction to Programming with Python", provider: "Harvard", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["informatique-ia"], recommendedYear: "L1", externalUrl: "https://pll.harvard.edu/course/cs50s-introduction-programming-python" }),
  direct({ id: "harvard-cs50-sql-ia", name: "CS50's Introduction to Databases with SQL", provider: "Harvard", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["informatique-ia"], recommendedYear: "L2", externalUrl: "https://pll.harvard.edu/course/cs50s-introduction-databases-sql" }),
  direct({ id: "ibm-python-data-science-ai-development", name: "Python pour la Science des Données, IA & Développement", provider: "IBM", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["informatique-ia"], recommendedYear: "L1", externalUrl: "https://cognitiveclass.ai/courses/python-for-data-science-ai-development" }),
  direct({ id: "ibm-open-source-data-science-tools", name: "Outils de Science des Données (open source)", provider: "IBM", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["informatique-ia"], recommendedYear: "L3", externalUrl: "https://cognitiveclass.ai/courses/data-science-hands-open-source-tools-2" }),
  direct({ id: "harvard-cs50-computer-science-cyber", name: "CS50: Introduction to Computer Science", provider: "Harvard", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["cybersecurite"], recommendedYear: "L1", externalUrl: "https://pll.harvard.edu/course/cs50-introduction-computer-science" }),
  direct({ id: "harvard-cs50-cybersecurity", name: "CS50's Introduction to Cybersecurity", provider: "Harvard", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["cybersecurite"], recommendedYear: "L2", externalUrl: "https://pll.harvard.edu/course/cs50s-introduction-cybersecurity" }),
  direct({ id: "cisco-introduction-cybersecurity", name: "Introduction to Cybersecurity", provider: "Cisco", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["cybersecurite"], recommendedYear: "L1", externalUrl: "https://www.netacad.com/courses/introduction-to-cybersecurity" }),
  direct({ id: "cisco-cybersecurity-essentials", name: "Cybersecurity Essentials", provider: "Cisco", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["cybersecurite"], recommendedYear: "L2", externalUrl: "https://www.netacad.com/courses/cybersecurity-essentials" }),
  direct({ id: "fortinet-fcf-cybersecurity", name: "Fortinet Certified Fundamentals Cybersecurity (FCF)", provider: "Fortinet", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["cybersecurite"], recommendedYear: "L2", externalUrl: "https://training.fortinet.com/local/staticpage/view.php?page=fcf_cybersecurity" }),
  direct({ id: "cisco-linux-essentials", name: "Linux Essentials", provider: "Cisco", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["cybersecurite"], recommendedYear: "L2", externalUrl: "https://www.netacad.com/courses/linux-essentials" }),
  direct({ id: "google-ads-search", name: "Google Ads Search Certification", provider: "Google", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["marketing-digital-ia"], recommendedYear: "M1", externalUrl: "https://skillshop.docebosaas.com/learn/courses/8692/google-ads-search-certification" }),
  direct({ id: "google-ads-display", name: "Google Ads Display Certification", provider: "Google", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["marketing-digital-ia"], recommendedYear: "M1", externalUrl: "https://skillshop.docebosaas.com/learn/courses/8696/google-ads-display-certification" }),
  direct({ id: "google-analytics-certification", name: "Google Analytics Certification", provider: "Google", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["marketing-digital-ia"], recommendedYear: "M1", externalUrl: "https://skillshop.docebosaas.com/learn/courses/14810/google-analytics-certification" }),
  direct({ id: "linkedin-advertising-fundamentals", name: "Certification Publicités LinkedIn", provider: "LinkedIn", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["marketing-digital-ia"], recommendedYear: "M1", externalUrl: "https://training.marketing.linkedin.com/advertising-fundamentals-exam-fr" }),
  direct({ id: "hubspot-marketing-hub-software", name: "HubSpot Marketing Hub Software", provider: "HubSpot", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["marketing-digital-ia"], recommendedYear: "M1", sourceNote: "HubSpot course-specific URL should be verified before student-space deployment." }),
  direct({ id: "google-business-intelligence", name: "Google Business Intelligence Certificate", provider: "Google", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["crm"], recommendedYear: "M1", externalUrl: "https://www.skills.google/paths/2416" }),
  direct({ id: "google-data-analytics", name: "Google Data Analytics Certificate", provider: "Google", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["crm"], recommendedYear: "M1", externalUrl: "https://www.skills.google/paths/2267" }),
  direct({ id: "hubspot-sales-hub", name: "HubSpot Sales Hub Software", provider: "HubSpot", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["crm"], recommendedYear: "M1", sourceNote: "HubSpot course-specific URL should be verified before student-space deployment." }),
  direct({ id: "hubspot-service-hub", name: "HubSpot Service Hub Software", provider: "HubSpot", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["crm"], recommendedYear: "M1", sourceNote: "HubSpot course-specific URL should be verified before student-space deployment." }),
  direct({ id: "hubspot-revenue-operations", name: "HubSpot Revenue Operations", provider: "HubSpot", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["crm"], recommendedYear: "M1", sourceNote: "HubSpot course-specific URL should be verified before student-space deployment." }),
  direct({ id: "microsoft-power-bi-get-data", name: "Obtenir des données dans Power BI", provider: "Microsoft", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["crm"], recommendedYear: "M1", externalUrl: "https://learn.microsoft.com/fr-fr/training/modules/get-data/" }),
  direct({ id: "google-project-management", name: "Google Project Management Certificate", provider: "Google", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["startups"], recommendedYear: "M1", externalUrl: "https://www.skills.google/paths/2272" }),
  direct({ id: "pmi-disciplined-agile-essentials", name: "Disciplined Agile Essentials", provider: "PMI", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["startups"], recommendedYear: "M1", externalUrl: "https://www.pmi.org/shop/p-/elearning/disciplined-agile-essentials-course/el183" }),
  direct({ id: "scrum-ops-devops-fundamentals", name: "Scrum for Operations & DevOps Fundamentals Certified", provider: "ScrumStudy", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["startups"], recommendedYear: "M1", externalUrl: "https://www.scrumstudy.com/certification/scrum-for-ops-and-devops-fundamentals-certified" }),
  direct({ id: "msi-lean-six-sigma-white-belt", name: "Lean Six Sigma White Belt Certification", provider: "MSI", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["startups"], recommendedYear: "M1", externalUrl: "https://courses.msicertified.com/course/lean-six-sigma-white-belt-certification" }),
  direct({ id: "bloomberg-market-concepts-pm", name: "Bloomberg Market Concepts", provider: "Bloomberg", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["startups"], recommendedYear: "M1", externalUrl: "https://portal.bloombergforeducation.com/courses?course_category_id=3" }),
  direct({ id: "bloomberg-market-concepts-finance", name: "Bloomberg Market Concepts", provider: "Bloomberg", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["ingenierie-financiere"], recommendedYear: "M1", externalUrl: "https://portal.bloombergforeducation.com/courses?course_category_id=3" }),
  direct({ id: "bloomberg-finance-fundamentals", name: "Bloomberg Finance Fundamentals", provider: "Bloomberg", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["ingenierie-financiere"], recommendedYear: "M1", externalUrl: "https://portal.bloombergforeducation.com/courses?course_category_id=11" }),
  direct({ id: "bloomberg-spreadsheet-analysis", name: "Bloomberg Spreadsheet Analysis", provider: "Bloomberg", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["ingenierie-financiere"], recommendedYear: "M2", externalUrl: "https://portal.bloombergforeducation.com/courses?course_category_id=15" }),
  direct({ id: "bloomberg-esg", name: "Environmental Social Governance (ESG)", provider: "Bloomberg", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["ingenierie-financiere"], recommendedYear: "M2", externalUrl: "https://portal.bloombergforeducation.com/courses?course_category_id=7" }),
  forage({ id: "goldman-sachs-risk", name: "Risk", provider: "Goldman Sachs", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["ingenierie-financiere"], recommendedYear: "M1", externalUrl: "https://www.theforage.com/simulations/goldman-sachs/risk-ljdz" }),
  forage({ id: "jpmorgan-investment-banking", name: "Investment Banking", provider: "JPMorganChase", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["ingenierie-financiere"], recommendedYear: "M1", externalUrl: "https://www.theforage.com/simulations/jpmorgan/investment-banking-hkyd" }),

  direct({ id: "google-people-management", name: "Google People Management Essentials", provider: "Google", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["management"], recommendedYear: "L2", externalUrl: "https://www.skills.google/paths/3371" }),
  direct({ id: "cisco-discovering-entrepreneurship", name: "Discovering Entrepreneurship", provider: "Cisco", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["management"], recommendedYear: "L1", externalUrl: "https://www.netacad.com/courses/discovering-entrepreneurship" }),
  direct({ id: "google-associate-data-practitioner-informatique", name: "Associate Data Practitioner", provider: "Google", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["informatique-ia"], recommendedYear: "L3", externalUrl: "https://www.skills.google/paths/1336" }),
  direct({ id: "cisco-introduction-data-science-informatique", name: "Introduction to Data Science", provider: "Cisco", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["informatique-ia"], recommendedYear: "L2", externalUrl: "https://www.netacad.com/courses/introduction-data-science" }),
  direct({ id: "hubspot-social-media", name: "HubSpot Social Media Marketing", provider: "HubSpot", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L2", externalUrl: "https://academy.hubspot.com/courses/social-media" }),
  direct({ id: "hubspot-email-marketing", name: "HubSpot Email Marketing", provider: "HubSpot", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L2", externalUrl: "https://academy.hubspot.com/courses/email-marketing" }),
  direct({ id: "semrush-keyword-research", name: "Keyword Research Essentials", provider: "SEMrush", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L2", externalUrl: "https://www.semrush.com/academy/courses/keyword-research-essentials-with-semrush/" }),
  forage({ id: "citi-finance", name: "Finance", provider: "Citi", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["finance"], recommendedYear: "L3", externalUrl: "https://www.theforage.com/simulations/citi/finance-qt4o" }),
  direct({ id: "ibm-tcp-ip", name: "TCP/IP Protocol Overview", provider: "IBM", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["cybersecurite"], recommendedYear: "L2", externalUrl: "https://cognitiveclass.ai/courses/tcp-ip-protocol-overview" }),
  direct({ id: "fortinet-fca-cybersecurity", name: "Fortinet Certified Associate Cybersecurity (FCA)", provider: "Fortinet", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["cybersecurite"], recommendedYear: "L3", externalUrl: "https://training.fortinet.com/local/staticpage/view.php?page=fca_cybersecurity" }),
  direct({ id: "ahrefs-seo-certification", name: "Ahrefs SEO Certification", provider: "Ahrefs", classification: "non-ai", requirement: "optional", studyLevels: ["master"], programmes: ["marketing-digital-ia"], recommendedYear: "M1", externalUrl: "https://ahrefs.com/certification" }),
  direct({ id: "google-advanced-data-analytics-crm", name: "Google Advanced Data Analytics Certificate", provider: "Google", classification: "non-ai", requirement: "optional", studyLevels: ["master"], programmes: ["crm"], recommendedYear: "M2", externalUrl: "https://www.skills.google/paths/2417" }),
  forage({ id: "bcg-digital-transformation", name: "Digital Transformation", provider: "BCG", classification: "non-ai", requirement: "optional", studyLevels: ["master"], programmes: ["crm"], recommendedYear: "M1", externalUrl: "https://www.theforage.com/simulations/bcg/digital-transformation-pk18" }),
  forage({ id: "siemens-project-manager", name: "Project Manager", provider: "Siemens Mobility", classification: "non-ai", requirement: "optional", studyLevels: ["master"], programmes: ["startups"], recommendedYear: "M1", externalUrl: "https://www.theforage.com/simulations/siemens-mobility/project-management-qydx" }),
  forage({ id: "goldman-sachs-operations", name: "Operations", provider: "Goldman Sachs", classification: "non-ai", requirement: "optional", studyLevels: ["master"], programmes: ["ingenierie-financiere"], recommendedYear: "M1", externalUrl: "https://www.theforage.com/simulations/goldman-sachs/operations-9vyc" }),
  forage({ id: "bank-of-america-investment-banking", name: "Investment Banking", provider: "Bank of America", classification: "non-ai", requirement: "optional", studyLevels: ["master"], programmes: ["ingenierie-financiere"], recommendedYear: "M2", externalUrl: "https://www.theforage.com/simulations/bank-of-america/investment-banking-bwp7" }),

  direct({ id: "ibm-creating-compelling-reports-management", name: "Creating Compelling Reports", provider: "IBM", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["management"], recommendedYear: "L2", externalUrl: "https://www.ibm.com/training/" }),
  direct({ id: "cisco-launching-business-venture-management", name: "Launching a Business Venture", provider: "Cisco", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["management"], recommendedYear: "L3", externalUrl: "https://www.netacad.com/courses/launching-business-venture" }),
  direct({ id: "google-ads-measurement-marketing", name: "Google Ads Measurement Certification", provider: "Google", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L3", externalUrl: "https://skillshop.docebosaas.com/learn/courses/8698/google-ads-measurement-certification" }),
  direct({ id: "bloomberg-market-concepts-licence-finance", name: "Bloomberg Market Concepts", provider: "Bloomberg", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["finance"], recommendedYear: "L3", externalUrl: "https://portal.bloombergforeducation.com/courses?course_category_id=3" }),
  direct({ id: "bloomberg-finance-fundamentals-licence-finance", name: "Bloomberg Finance Fundamentals", provider: "Bloomberg", classification: "non-ai", requirement: "mandatory", studyLevels: ["licence"], programmes: ["finance"], recommendedYear: "L3", externalUrl: "https://portal.bloombergforeducation.com/courses?course_category_id=11" }),
  direct({ id: "google-analytics-started-master-marketing", name: "Get Started using Google Analytics", provider: "Google", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["marketing-digital-ia"], recommendedYear: "M1", externalUrl: "https://skillshop.docebosaas.com/learn/courses/7678/get-started-using-google-analytics" }),
  direct({ id: "bloomberg-finance-fundamentals-pm", name: "Bloomberg Finance Fundamentals", provider: "Bloomberg", classification: "non-ai", requirement: "mandatory", studyLevels: ["master"], programmes: ["startups"], recommendedYear: "M2", externalUrl: "https://portal.bloombergforeducation.com/courses?course_category_id=11" }),

  forage({ id: "mastercard-advisors-consulting-management", name: "Advisors & Consulting Services", provider: "Mastercard", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["management"], recommendedYear: "L3", externalUrl: "https://www.theforage.com/simulations/mastercard/advisors-client-services-xvlw" }),
  forage({ id: "bloomberg-client-engagement-management", name: "Client Engagement", provider: "Bloomberg", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["management"], recommendedYear: "L3", externalUrl: "https://www.theforage.com/" }),
  forage({ id: "pwc-virtual-insight-management", name: "Virtual Insight Programme", provider: "PwC UK", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["management"], recommendedYear: "L3", externalUrl: "https://www.theforage.com/simulations/pwc/virtual-insight-programme" }),
  direct({ id: "google-ads-apps-marketing", name: "Google Ads Apps Certification", provider: "Google", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L3", externalUrl: "https://skillshop.docebosaas.com/learn/courses/8697/google-ads-apps-certification" }),
  direct({ id: "google-ads-creative-marketing", name: "Google Ads Creative Certification", provider: "Google", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L3", externalUrl: "https://skillshop.docebosaas.com/learn/courses/8992/google-ads-creative-certification" }),
  direct({ id: "hubspot-digital-advertising-marketing", name: "HubSpot Digital Advertising", provider: "HubSpot", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L3", externalUrl: "https://academy.hubspot.com/courses/digital-advertising" }),
  direct({ id: "semrush-content-led-seo-marketing", name: "Content-Led SEO", provider: "SEMrush", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L3", externalUrl: "https://www.semrush.com/academy/" }),
  direct({ id: "linkedin-marketing-strategy-marketing", name: "LinkedIn Marketing Strategy Certification", provider: "LinkedIn", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["marketing"], recommendedYear: "L3", externalUrl: "https://training.marketing.linkedin.com/" }),
  direct({ id: "bloomberg-esg-licence-finance", name: "Environmental Social Governance (ESG)", provider: "Bloomberg", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["finance"], recommendedYear: "L3", externalUrl: "https://portal.bloombergforeducation.com/courses?course_category_id=7" }),
  direct({ id: "bloomberg-spreadsheet-analysis-licence-finance", name: "Bloomberg Spreadsheet Analysis", provider: "Bloomberg", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["finance"], recommendedYear: "L3", externalUrl: "https://portal.bloombergforeducation.com/courses?course_category_id=15" }),
  forage({ id: "wells-fargo-personal-banker-finance", name: "Personal Banker", provider: "Wells Fargo", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["finance"], recommendedYear: "L3", externalUrl: "https://www.theforage.com/simulations/wells-fargo/personal-banker-y8cq" }),
  forage({ id: "jpmorgan-investment-banking-licence-finance", name: "Investment Banking", provider: "JPMorganChase", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["finance"], recommendedYear: "L3", externalUrl: "https://www.theforage.com/simulations/jpmorgan/investment-banking-hkyd" }),
  direct({ id: "deeplearning-deep-learning-specialization-info", name: "Deep Learning Specialization", provider: "DeepLearning.AI", classification: "applied-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["informatique-ia"], recommendedYear: "L3", externalUrl: "https://www.deeplearning.ai/courses/deep-learning-specialization/" }),
  direct({ id: "ibm-machine-learning-ai-python-info", name: "Machine Learning and AI with Python", provider: "IBM", classification: "applied-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["informatique-ia"], recommendedYear: "L3", externalUrl: "https://cognitiveclass.ai/learn/machine-learning-with-python" }),
  direct({ id: "ibm-data-analysis-python-info", name: "Analyse de Données avec Python", provider: "IBM", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["informatique-ia"], recommendedYear: "L3", externalUrl: "https://cognitiveclass.ai/courses/data-analysis-python" }),
  direct({ id: "ibm-data-visualization-python-info", name: "Visualisation de Données avec Python", provider: "IBM", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["informatique-ia"], recommendedYear: "L3", externalUrl: "https://cognitiveclass.ai/courses/data-visualization-python" }),
  direct({ id: "cisco-endpoint-security-cyber", name: "Endpoint Security", provider: "Cisco", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["cybersecurite"], recommendedYear: "L3", externalUrl: "https://www.netacad.com/courses/endpoint-security" }),
  direct({ id: "cisco-network-defense-cyber", name: "Network Defense", provider: "Cisco", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["cybersecurite"], recommendedYear: "L3", externalUrl: "https://www.netacad.com/courses/network-defense" }),
  direct({ id: "cisco-ethical-hacker-cyber", name: "Ethical Hacker", provider: "Cisco", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["cybersecurite"], recommendedYear: "L3", externalUrl: "https://www.netacad.com/courses/ethical-hacker" }),
  direct({ id: "cisco-git-github-cyber", name: "Git and GitHub", provider: "Cisco", classification: "non-ai", requirement: "optional", studyLevels: ["licence"], programmes: ["cybersecurite"], recommendedYear: "L2", externalUrl: "https://www.netacad.com/courses/git-github" }),
  direct({ id: "google-ads-creative-master-marketing", name: "Google Ads Creative Certification", provider: "Google", classification: "non-ai", requirement: "optional", studyLevels: ["master"], programmes: ["marketing-digital-ia"], recommendedYear: "M2", externalUrl: "https://skillshop.docebosaas.com/learn/courses/8992/google-ads-creative-certification" }),
  direct({ id: "linkedin-content-creative-design-master-marketing", name: "LinkedIn Content & Creative Design Certification", provider: "LinkedIn", classification: "non-ai", requirement: "optional", studyLevels: ["master"], programmes: ["marketing-digital-ia"], recommendedYear: "M2", externalUrl: "https://training.marketing.linkedin.com/" }),
  direct({ id: "hubspot-inbound-sales-crm", name: "HubSpot Inbound Sales", provider: "HubSpot", classification: "non-ai", requirement: "optional", studyLevels: ["master"], programmes: ["crm"], recommendedYear: "M2", externalUrl: "https://academy.hubspot.com/courses/inbound-sales" }),
  direct({ id: "hubspot-content-hub-crm", name: "HubSpot Content Hub for Marketers", provider: "HubSpot", classification: "non-ai", requirement: "optional", studyLevels: ["master"], programmes: ["crm"], recommendedYear: "M2", sourceNote: "HubSpot course-specific URL should be verified before student-space deployment." }),
  forage({ id: "bcg-strategy-consulting-startups", name: "Strategy Consulting", provider: "BCG", classification: "non-ai", requirement: "optional", studyLevels: ["master"], programmes: ["startups"], recommendedYear: "M2", externalUrl: "https://www.theforage.com/simulations/bcg/strategy-consulting-jn9i" }),
  direct({ id: "bloomberg-esg-startups", name: "Environmental Social Governance (ESG)", provider: "Bloomberg", classification: "non-ai", requirement: "optional", studyLevels: ["master"], programmes: ["startups"], recommendedYear: "M2", externalUrl: "https://portal.bloombergforeducation.com/courses?course_category_id=7" }),
  forage({ id: "goldman-sachs-internal-audit-ingfin", name: "Internal Audit", provider: "Goldman Sachs", classification: "non-ai", requirement: "optional", studyLevels: ["master"], programmes: ["ingenierie-financiere"], recommendedYear: "M2", externalUrl: "https://www.theforage.com/simulations/goldman-sachs/internal-audit-5b4p" }),
  forage({ id: "goldman-sachs-controllers-ingfin", name: "Controllers", provider: "Goldman Sachs", classification: "non-ai", requirement: "optional", studyLevels: ["master"], programmes: ["ingenierie-financiere"], recommendedYear: "M2", externalUrl: "https://www.theforage.com/simulations/goldman-sachs/controllers-3djt" }),
];

export function getCertificationLogo(certification: Pick<FinalCertification, "displayProvider" | "provider">) {
  return getProviderLogo(certification.displayProvider) ?? getProviderLogo(certification.provider);
}

export function getCertificationsByProgramme(programme: CertificationProgrammeSlug) {
  return finalCertificationCatalogue.filter((certification) => certification.programmes.includes(programme));
}

export function getMandatoryCertifications(programme: CertificationProgrammeSlug) {
  return getCertificationsByProgramme(programme).filter((certification) => certification.requirement === "mandatory");
}

export function getOptionalCertifications(programme: CertificationProgrammeSlug) {
  return getCertificationsByProgramme(programme).filter((certification) => certification.requirement === "optional");
}

export function getCertificationsByMatrixCell(
  classification: CertificationClassification,
  requirement: CertificationRequirement
) {
  return finalCertificationCatalogue.filter(
    (certification) => certification.classification === classification && certification.requirement === requirement
  );
}

export function getPublicCertificationCount() {
  return finalCertificationCatalogue.filter((certification) => certification.publicVisible).length;
}

export function getProgrammeCertificationMatrix(programme: CertificationProgrammeSlug) {
  const programmeCertifications = getCertificationsByProgramme(programme);
  return {
    "ai-literacy": {
      mandatory: programmeCertifications.filter((certification) => certification.classification === "ai-literacy" && certification.requirement === "mandatory"),
      optional: programmeCertifications.filter((certification) => certification.classification === "ai-literacy" && certification.requirement === "optional"),
    },
    "applied-ai": {
      mandatory: programmeCertifications.filter((certification) => certification.classification === "applied-ai" && certification.requirement === "mandatory"),
      optional: programmeCertifications.filter((certification) => certification.classification === "applied-ai" && certification.requirement === "optional"),
    },
    "non-ai": {
      mandatory: programmeCertifications.filter((certification) => certification.classification === "non-ai" && certification.requirement === "mandatory"),
      optional: programmeCertifications.filter((certification) => certification.classification === "non-ai" && certification.requirement === "optional"),
    },
  };
}
