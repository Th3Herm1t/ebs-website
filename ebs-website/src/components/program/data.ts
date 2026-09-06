export interface CertItem {
  name: string;
  provider: string;
  level: string;
  isForage?: boolean;
}

export interface ModuleItem {
  title: string;
  description?: string;
  content?: string;
}

export interface MasterTextGroup {
  title?: string;
  items: string[];
}

export interface MasterGeneralPresentation {
  diplomaTitle: string;
  diploma: string;
  duration: string;
  organisation: string;
  paragraphs: string[];
}

export interface PathwayItem {
  programme: string;
  partenaire: string;
  details: string;
}

export interface ProgramLPData {
  slug: string;
  catalogueId: string;
  type: "licence" | "master";
  title: string;
  tagline: string;
  pitch: string;
  presentation?: string;
  presentationBlocks?: string[];
  generalPresentation?: MasterGeneralPresentation;
  objectivesIntro?: string;
  publicCibleIntro?: string;
  publicCibleWording?: string[];
  competenciesIntro?: string;
  objectives?: string[];
  competencies?: MasterTextGroup[];
  distinctiveIntro?: string;
  distinctiveAdvantages?: string[];
  moduleIntro?: string;
  certificationSections?: MasterTextGroup[];
  certificationDescription?: string;
  iaIntro?: string;
  iaApplicationsIntro?: string;
  iaDescription?: string;
  iaContent?: string[];
  iaConclusion?: string;
  pedagogyIntro?: string;
  pedagogy?: string[];
  pedagogyConclusion?: string;
  stageIntro?: string;
  stageMemoire?: string[];
  professionalOutcomesIntro?: string;
  professionalOutcomesConclusion?: string;
  internationalIntro?: string;
  internationalContent?: string[];
  finalAdvantagesIntro?: string;
  finalAdvantages?: string[];
  accreditationLabel?: string;
  statAccreditationLabel?: string;
  color: string;
  niveau: string;
  duree: string;
  semestres: number;
  totalCerts: number;
  publicCible: string[];
  modules: ModuleItem[];
  certifications: CertItem[];
  internationalPathways: PathwayItem[];
  debouches: string[];
}

export const STATS_HERO = [
  { label: "Certifications incluses", key: "totalCerts" },
  { label: "ans", key: "duree" },
  { label: "Accrédité État Tunisien", key: "" },
] as const;

export const IA_CERTS_SHARED: { name: string; provider: string }[] = [
  { name: "Google AI Essentials", provider: "Google" },
  { name: "Google Prompting Essentials", provider: "Google" },
  { name: "Fondements de l'IA (IBM)", provider: "IBM" },
  { name: "CS50's Introduction to AI with Python", provider: "Harvard" },
  { name: "Generative AI Fundamentals (Databricks)", provider: "Databricks" },
  { name: "n8n Automation Level 1", provider: "n8n" },
];
