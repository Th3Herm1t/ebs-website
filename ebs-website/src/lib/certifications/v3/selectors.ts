import snapshot from "./public-snapshot.json";
import { getProviderLogo } from "../providers";
import type {
  CatalogueV3PublicSnapshot,
  CatalogueV3Query,
  CredentialType,
  Credential,
  JoinedProgrammeOpportunity,
  OpportunityTier,
  Resource,
} from "./types";

export const catalogueV3 = snapshot as CatalogueV3PublicSnapshot;

const providerById = new Map(catalogueV3.providers.map((provider) => [provider.id, provider]));
const platformById = new Map(catalogueV3.platforms.map((platform) => [platform.id, platform]));
const credentialById = new Map<string, Credential>(
  catalogueV3.credentials.map((credential) => [credential.id, credential]),
);
const resourceById = new Map<string, Resource>(
  catalogueV3.resources.map((resource) => [resource.id, resource]),
);

export function getCatalogueV3Release() {
  return catalogueV3.release;
}

export function getCatalogueV3Counts() {
  return catalogueV3.release.counts;
}

export function getCatalogueV3Provider(providerId: string) {
  return providerById.get(providerId);
}

export function getCatalogueV3Platform(platformId: string) {
  return platformById.get(platformId);
}

export function getCatalogueV3ProviderLogo(providerId: string) {
  const provider = providerById.get(providerId);
  return provider ? getProviderLogo(provider.name) : undefined;
}

export function getCatalogueV3Resource(resourceId: string) {
  return resourceById.get(resourceId);
}

export function getCatalogueV3Credential(credentialId: string) {
  return credentialById.get(credentialId);
}

export function getCatalogueV3RequirementGroups(programmeId?: string) {
  if (!programmeId) return catalogueV3.requirementGroups;
  return catalogueV3.requirementGroups.filter((group) => group.programmeId === programmeId);
}

export function getCatalogueV3ProgrammeSummary(programmeId: string) {
  const opportunities = getCatalogueV3Opportunities({ programmeId });
  return {
    total: opportunities.length,
    core: opportunities.filter((opportunity) => opportunity.mapping.tier === "CORE").length,
    recommended: opportunities.filter((opportunity) => opportunity.mapping.tier === "RECOMMENDED").length,
    discovery: opportunities.filter((opportunity) => opportunity.mapping.tier === "DISCOVERY").length,
    requirements: getCatalogueV3RequirementGroups(programmeId).length,
  };
}

export function getCatalogueV3Opportunities(
  query: CatalogueV3Query = {},
): JoinedProgrammeOpportunity[] {
  return catalogueV3.resources.flatMap((resource) => {
    const credential = credentialById.get(resource.credentialIds[0]);

    if (query.providerId && resource.providerId !== query.providerId) return [];
    if (query.classification && resource.classification !== query.classification) return [];
    if (query.language && !resource.languages.includes(query.language)) return [];
    if (query.topic && !resource.topics.includes(query.topic)) return [];
    if (query.credentialType && credential?.type !== query.credentialType) return [];

    return resource.programmeMappings.flatMap((mapping) => {
      if (query.programmeId && mapping.programmeId !== query.programmeId) return [];
      if (query.year && mapping.year !== query.year) return [];
      if (query.tier && mapping.tier !== query.tier) return [];

      return [
        {
          resource,
          credential,
          provider: providerById.get(resource.providerId),
          platform: platformById.get(resource.platformId),
          mapping,
        },
      ];
    });
  });
}

export const tierLabels: Record<OpportunityTier, string> = {
  CORE: "Essentiel",
  RECOMMENDED: "Recommandé",
  DISCOVERY: "Explorer",
};

export const tierHelp: Record<OpportunityTier, string> = {
  CORE: "Un objectif de compétence à valider, avec plusieurs formations au choix.",
  RECOMMENDED: "Les formations prioritaires pour renforcer le profil du programme.",
  DISCOVERY: "Un espace libre pour explorer et se différencier.",
};

export const credentialTypeLabels: Record<CredentialType, string> = {
  certification: "Certification",
  completion_certificate: "Certificat d'achèvement",
  digital_badge: "Badge numérique",
  pathway_badge: "Badge de parcours",
  superbadge: "Superbadge",
  accreditation: "Accréditation",
  achievement: "Achievement",
};

export const credentialStrengthLabels: Record<string, string> = {
  completion: "Achèvement",
  knowledge_validation: "Validation de connaissances",
  practical_validation: "Validation pratique",
  professional_certification: "Certification professionnelle",
};

export const assessmentRigorLabels: Record<string, string> = {
  completion: "Complétion",
  quiz: "Quiz",
  exam: "Examen",
  practical: "Pratique",
  project: "Projet",
  project_exam: "Projet + examen",
  mixed: "Mixte",
};
