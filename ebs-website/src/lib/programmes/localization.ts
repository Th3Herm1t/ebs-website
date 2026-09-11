import type { ProgramLPData } from "@/components/program";

export type DomainLocale = "fr" | "en";

// This glossary deliberately only changes editorial language. Names, figures,
// qualifications and URLs remain those of the source catalogue.
const replacements: Array<[string, string]> = [
  ["Intelligence Artificielle", "Artificial Intelligence"],
  ["intelligence artificielle", "artificial intelligence"],
  ["Intelligence artificielle", "Artificial intelligence"],
  ["Poursuite d'études à l'international", "International study pathway"],
  ["Poursuite d’études à l’international", "International study pathway"],
  ["Ce programme permet de poursuivre vos études auprès de nos universités partenaires", "This programme allows students to continue their studies at our partner universities"],
  ["grâce aux accords de coopération conclus par EBS", "through EBS cooperation agreements"],
  ["Bacheliers toutes séries (sauf Lettres et Sport)", "High-school graduates from all streams (except Literature and Sports)"],
  ["Titulaires d'une Licence", "Holders of a Bachelor's degree"],
  ["Titulaires d’une Licence", "Holders of a Bachelor's degree"],
  ["Étudiants souhaitant", "Students wishing"],
  ["Professionnels souhaitant", "Professionals wishing"],
  ["Futurs ", "Future "],
  ["Responsable", "Manager"],
  ["Chargé de", "Officer"],
  ["Chef de projet", "Project Manager"],
  ["Développeur", "Developer"],
  ["Analyste", "Analyst"],
  ["Consultant", "Consultant"],
  ["Stage professionnel", "Professional internship"],
  ["Projet de Fin d'Études", "Final-year project"],
  ["Projet de fin d'études", "Final-year project"],
  ["semestres", "semesters"],
  ["ans", "years"],
  ["Débutant", "Beginner"],
  ["Intermédiaire", "Intermediate"],
  ["Avancé", "Advanced"],
  ["Fondements", "Fundamentals"],
  ["appliqué", "applied"],
  ["appliquée", "applied"],
  [" de ", " of "],
  [" des ", " of "],
  [" du ", " of "],
  [" au ", " to "],
  [" aux ", " to "],
  [" avec ", " with "],
  [" dans ", " in "],
  [" pour ", " for "],
  [" les ", " the "],
  [" le ", " the "],
  [" la ", " the "],
  [" et ", " and "],
];

const titleOverrides: Record<string, string> = {
  management: "Bachelor's Degree in Management",
  marketing: "Bachelor's Degree in Marketing",
  finance: "Bachelor's Degree in Finance",
  "informatique-ia": "Bachelor's Degree in Computer Science - Software Engineering and Information Systems (Artificial Intelligence)",
  cybersecurite: "Bachelor's Degree in Computer Science - Software Engineering and Information Systems (Cybersecurity)",
  crm: "Master's Degree in CRM Marketing and Digital Transformation",
  startups: "Master's Degree in Innovative Project Management and Startups",
  "ingenierie-financiere": "Master's Degree in Financial Engineering",
  "marketing-digital-ia": "Master's Degree in Digital Marketing and AI",
};

export function translateProgrammeText(value: string): string {
  return replacements
    .sort(([a], [b]) => b.length - a.length)
    .reduce((text, [from, to]) => text.replaceAll(from, to), value)
    .replace(/\bLicence\b/g, "Bachelor's degree")
    .replace(/\bMaster\b/g, "Master's degree")
    .replace(/\bFormation\b/g, "Programme")
    .replace(/\bformation\b/g, "programme")
    .replace(/\bGestion\b/g, "Management")
    .replace(/\bgestion\b/g, "management");
}

function translateValue(value: unknown): unknown {
  if (typeof value === "string") return translateProgrammeText(value);
  if (Array.isArray(value)) return value.map(translateValue);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translateValue(item)]));
  }
  return value;
}

export function getEnglishProgramme(programme: ProgramLPData): ProgramLPData {
  const translated = translateValue(programme) as ProgramLPData;
  return { ...translated, title: titleOverrides[programme.slug] ?? translated.title };
}

export function localizeProgrammes(programmes: Record<string, ProgramLPData>, locale: DomainLocale) {
  return locale === "en"
    ? Object.fromEntries(Object.entries(programmes).map(([slug, programme]) => [slug, getEnglishProgramme(programme)]))
    : programmes;
}
