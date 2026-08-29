import snapshot from "./public-snapshot.json";
import { getProviderLogo } from "../providers";
import type {
  AIProfile,
  Capability,
  CatalogueV3PublicSnapshot,
  CatalogueV3Query,
  Credential,
  CredentialType,
  JoinedCoreRequirement,
  JoinedEvidencePath,
  JoinedProgrammeOpportunity,
  OpportunityTier,
  Resource,
} from "./types";

export const catalogueV3 = snapshot as CatalogueV3PublicSnapshot;

function createCatalogueIndexes(catalogue: CatalogueV3PublicSnapshot) {
  return {
    providerById: new Map(catalogue.providers.map((provider) => [provider.id, provider])),
    platformById: new Map(catalogue.platforms.map((platform) => [platform.id, platform])),
    credentialById: new Map<string, Credential>(
      catalogue.credentials.map((credential) => [credential.id, credential]),
    ),
    resourceById: new Map<string, Resource>(
      catalogue.resources.map((resource) => [resource.id, resource]),
    ),
  };
}

export function getCatalogueV3Release(catalogue = catalogueV3) {
  return catalogue.release;
}

export function getCatalogueV3Counts(catalogue = catalogueV3) {
  return catalogue.release.counts;
}

export function getCatalogueV3Programme(programmeId: string, catalogue = catalogueV3) {
  return catalogue.programmes.find((programme) => programme.id === programmeId);
}

export function getCatalogueV3Provider(providerId: string, catalogue = catalogueV3) {
  const { providerById } = createCatalogueIndexes(catalogue);
  return providerById.get(providerId);
}

export function getCatalogueV3Platform(platformId: string, catalogue = catalogueV3) {
  const { platformById } = createCatalogueIndexes(catalogue);
  return platformById.get(platformId);
}

export function getCatalogueV3ProviderLogo(providerId: string, catalogue = catalogueV3) {
  const provider = getCatalogueV3Provider(providerId, catalogue);
  return provider ? getProviderLogo(provider.name) : undefined;
}

export function getCatalogueV3Resource(resourceId: string, catalogue = catalogueV3) {
  const { resourceById } = createCatalogueIndexes(catalogue);
  return resourceById.get(resourceId);
}

export function getCatalogueV3Credential(credentialId: string, catalogue = catalogueV3) {
  const { credentialById } = createCatalogueIndexes(catalogue);
  return credentialById.get(credentialId);
}

export function getCatalogueV3CredentialForResource(resourceId: string, catalogue = catalogueV3) {
  return catalogue.credentials.find((credential) => credential.resourceId === resourceId);
}

function joinEvidencePath(
  path: JoinedEvidencePath["path"],
  catalogue: CatalogueV3PublicSnapshot,
): JoinedEvidencePath {
  const { credentialById, platformById, providerById, resourceById } = createCatalogueIndexes(catalogue);
  const resource = path.resourceId ? resourceById.get(path.resourceId) : undefined;
  const credential = path.credentialId ? credentialById.get(path.credentialId) : undefined;
  return {
    path,
    resource,
    credential,
    provider: resource ? providerById.get(resource.providerId) : undefined,
    platform: resource ? platformById.get(resource.platformId) : undefined,
  };
}

export function getCatalogueV3RequirementGroups(programmeId?: string, catalogue = catalogueV3) {
  const requirements = programmeId
    ? catalogue.coreRequirements.filter((requirement) => requirement.programmeId === programmeId)
    : catalogue.coreRequirements;

  return requirements
    .map<JoinedCoreRequirement>((requirement) => ({
      ...requirement,
      evidence: requirement.evidencePaths.map((path) => joinEvidencePath(path, catalogue)),
    }))
    .sort((a, b) => a.year.localeCompare(b.year) || a.title.fr.localeCompare(b.title.fr));
}

export function getCatalogueV3ProgrammeCompetencies(programmeId: string, catalogue = catalogueV3) {
  return catalogue.programmeCompetencies
    .filter((competency) => competency.programmeId === programmeId)
    .sort((a, b) => a.year.localeCompare(b.year) || a.sequence - b.sequence);
}

export function getCatalogueV3ProgrammeSummary(programmeId: string, catalogue = catalogueV3) {
  const opportunities = getCatalogueV3Opportunities({ programmeId }, catalogue);
  const requirements = getCatalogueV3RequirementGroups(programmeId, catalogue);
  return {
    total: opportunities.length,
    recommended: opportunities.filter((opportunity) => opportunity.assignment.tier === "RECOMMENDED").length,
    discovery: opportunities.filter((opportunity) => opportunity.assignment.tier === "DISCOVERY").length,
    requirements: requirements.length,
    externalEvidencePaths: requirements.reduce(
      (total, requirement) =>
        total + requirement.evidence.filter((evidence) => evidence.path.type === "EXTERNAL_CREDENTIAL").length,
      0,
    ),
  };
}

export function getCatalogueV3Opportunities(
  query: CatalogueV3Query = {},
  catalogue = catalogueV3,
): JoinedProgrammeOpportunity[] {
  const { platformById, providerById, resourceById } = createCatalogueIndexes(catalogue);

  return catalogue.opportunityAssignments.flatMap((assignment) => {
    if (query.programmeId && assignment.programmeId !== query.programmeId) return [];
    if (query.year && assignment.year !== query.year) return [];
    if (query.tier && assignment.tier !== query.tier) return [];

    const resource = resourceById.get(assignment.resourceId);
    if (!resource) return [];

    const credential = getCatalogueV3CredentialForResource(resource.id, catalogue);

    if (query.providerId && resource.providerId !== query.providerId) return [];
    if (query.classification && resource.classification !== query.classification) return [];
    if (query.language && !resource.languages.includes(query.language)) return [];
    if (query.topic && !resource.topics.includes(query.topic)) return [];
    if (query.credentialType && credential?.type !== query.credentialType) return [];

    return [
      {
        assignment,
        resource,
        credential,
        provider: providerById.get(resource.providerId),
        platform: platformById.get(resource.platformId),
        mapping: {
          programmeId: assignment.programmeId,
          year: assignment.year,
          tier: assignment.tier,
          requirementGroupIds: assignment.coreRequirementIds,
        },
      },
    ];
  });
}

export const aiProfileLabels: Record<AIProfile, string> = {
  AI_ENABLED: "AI-Enabled",
  AI_BUILDER: "AI Builder",
};

export const capabilityLabels: Record<Capability, string> = {
  UNDERSTAND: "Comprendre",
  APPLY: "Appliquer",
  EVALUATE: "Évaluer",
  ORCHESTRATE: "Orchestrer",
  GOVERN: "Gouverner",
  ENGINEER: "Concevoir",
};

export const tierLabels: Record<OpportunityTier, string> = {
  RECOMMENDED: "Recommandé",
  DISCOVERY: "Explorer",
};

export const tierHelp: Record<OpportunityTier, string> = {
  RECOMMENDED: "Les opportunités prioritaires, alignées avec les compétences du programme.",
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
