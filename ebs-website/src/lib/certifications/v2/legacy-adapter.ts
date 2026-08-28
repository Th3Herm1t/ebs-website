import { getJoinedCatalogue } from "./selectors";
import type { JoinedCatalogueEntry } from "./types";

export interface LegacyCertification {
  id: string;
  name: string;
  provider: string;
  classification: "ai-literacy" | "applied-ai" | "non-ai";
  requirement: "mandatory" | "optional";
  studyLevels: string[];
  programmes: string[];
  recommendedYear: string;
  externalUrl?: string;
  displayProvider: string;
  deliveryPlatform?: string;
  pathwayLabel: string;
  depthLabel: string;
  publicVisible: boolean;
  sourceNote?: string;
}

const pathwayLabels: Record<string, string> = {
  "core-competency": "Socle commun",
  "approved-pathway": "Parcours certifiant",
  onboarding: "Mise à niveau",
  enrichment: "Approfondissement",
};

const depthLabels: Record<string, string> = {
  "ai-user": "Usage IA",
  "ai-practitioner": "IA appliquée",
  "ai-builder": "Construction IA",
};

/**
 * Compatibility bridge for existing UI code.
 *
 * Important: this is intentionally fail-closed. Blocked resources never appear.
 * Provisional resources appear only when explicitly requested and are always
 * downgraded to optional until student/institutional access is verified.
 *
 * IDs are assignment-scoped because v2 allows one Resource to have different
 * curriculum semantics in different programmes.
 */
export function getLegacyCatalogue(options?: {
  includeProvisional?: boolean;
}): LegacyCertification[] {
  const includeProvisional = options?.includeProvisional ?? false;

  return getJoinedCatalogue({
    includeProvisional,
    includeBlocked: false,
  }).map(({ resource, assignment }: JoinedCatalogueEntry) => {
    const provisional = assignment.releaseState === "provisional";
    const requirement =
      provisional || assignment.releaseRequirement !== "mandatory"
        ? "optional"
        : "mandatory";

    return {
      id: assignment.id,
      name: resource.canonicalTitle,
      provider: resource.provider,
      classification: resource.classification,
      requirement,
      studyLevels: [assignment.studyLevel],
      programmes: [assignment.programme],
      recommendedYear: assignment.recommendedYear,
      externalUrl: resource.canonicalUrl ?? resource.sourceUrl ?? undefined,
      displayProvider: resource.provider,
      deliveryPlatform: resource.deliveryPlatform ?? undefined,
      pathwayLabel: pathwayLabels[assignment.curriculumRole] ?? "Parcours EBS",
      depthLabel: depthLabels[assignment.depthProfile] ?? "Compétence professionnelle",
      publicVisible: assignment.releaseState !== "blocked",
      sourceNote:
        resource.verification.status === "APPROVED_WITH_LABEL"
          ? resource.credential.publicClaim ?? undefined
          : provisional
            ? "Access must be verified with an EBS student/institutional account before this resource can become mandatory."
            : undefined,
    };
  });
}
