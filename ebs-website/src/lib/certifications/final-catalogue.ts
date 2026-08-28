import { getProviderLogo } from "./providers";
import { getLegacyCatalogue } from "./v2";

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
  deliveryPlatform?: CertificationDeliveryPlatform;
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

export const finalCertificationCatalogue: FinalCertification[] = getLegacyCatalogue().map((certification) => ({
  ...certification,
  deliveryPlatform: certification.deliveryPlatform as CertificationDeliveryPlatform | undefined,
  programmes: certification.programmes as CertificationProgrammeSlug[],
  studyLevels: certification.studyLevels as CertificationStudyLevel[],
  recommendedYear: certification.recommendedYear as CertificationYear,
}));

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
  requirement: CertificationRequirement,
) {
  return finalCertificationCatalogue.filter(
    (certification) => certification.classification === classification && certification.requirement === requirement,
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
