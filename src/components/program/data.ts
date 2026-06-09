export interface CertItem {
  name: string;
  provider: string;
  level: string;
}

export interface ModuleItem {
  title: string;
  description?: string;
}

export interface PathwayItem {
  programme: string;
  partenaire: string;
  details: string;
}

export interface ProgramLPData {
  slug: string;
  type: "licence" | "master";
  title: string;
  tagline: string;
  pitch: string;
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
  { name: "Fondements de l'IA", provider: "IBM" },
  { name: "CS50's Introduction to AI with Python", provider: "Harvard" },
  { name: "Generative AI Fundamentals", provider: "Databricks" },
  { name: "n8n Automation Level 1 & 2", provider: "n8n" },
];
