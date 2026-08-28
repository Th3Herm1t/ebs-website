import { assignments, catalogueDoctrine, catalogueRelease, resources } from "./data";
import type {
  CatalogueQuery,
  CurriculumAssignment,
  JoinedCatalogueEntry,
  Resource,
  VerificationStatus,
} from "./types";

const resourceById = new Map<string, Resource>(
  resources.map((resource) => [resource.id, resource as Resource]),
);

export function getResource(resourceId: string): Resource | undefined {
  return resourceById.get(resourceId);
}

export function getJoinedCatalogue(query: CatalogueQuery = {}): JoinedCatalogueEntry[] {
  const {
    programme,
    year,
    requirement,
    classification,
    includeProvisional = false,
    includeBlocked = false,
  } = query;

  return assignments.flatMap((rawAssignment) => {
    const assignment = rawAssignment as CurriculumAssignment;
    const resource = getResource(assignment.resourceId);
    if (!resource) return [];

    if (!includeBlocked && assignment.releaseState === "blocked") return [];
    if (!includeProvisional && assignment.releaseState === "provisional") return [];
    if (programme && assignment.programme !== programme) return [];
    if (year && assignment.recommendedYear !== year) return [];
    if (classification && resource.classification !== classification) return [];

    if (requirement) {
      if (assignment.releaseRequirement === "replacement-required") return [];
      if (assignment.releaseRequirement !== requirement) return [];
    }

    return [{ resource, assignment }];
  });
}

export function getProgrammeCatalogue(
  programme: string,
  options: Omit<CatalogueQuery, "programme"> = {},
): JoinedCatalogueEntry[] {
  return getJoinedCatalogue({ ...options, programme });
}

export function getMandatoryProgrammeCatalogue(
  programme: string,
  year?: string,
): JoinedCatalogueEntry[] {
  return getJoinedCatalogue({
    programme,
    year,
    requirement: "mandatory",
    includeProvisional: false,
    includeBlocked: false,
  });
}

export function getOptionalProgrammeCatalogue(
  programme: string,
  year?: string,
  includeProvisional = true,
): JoinedCatalogueEntry[] {
  return getJoinedCatalogue({
    programme,
    year,
    requirement: "optional",
    includeProvisional,
    includeBlocked: false,
  });
}

export function getResourceCounts() {
  const byStatus = resources.reduce<Record<VerificationStatus, number>>(
    (acc, resource) => {
      const status = resource.verification.status as VerificationStatus;
      acc[status] = (acc[status] ?? 0) + 1;
      return acc;
    },
    {
      APPROVED: 0,
      APPROVED_WITH_LABEL: 0,
      VERIFY_STUDENT_ACCESS: 0,
      REPLACE_BEFORE_RELEASE: 0,
      RETIRE: 0,
    },
  );

  return {
    totalResources: resources.length,
    totalAssignments: assignments.length,
    ...byStatus,
  };
}

export function getReleaseMetadata() {
  return catalogueRelease;
}

export function getCatalogueDoctrine() {
  return catalogueDoctrine;
}

/**
 * Safe public rule:
 * - approved resources may be published;
 * - approved-with-label resources may be published with their exact publicClaim;
 * - provisional resources stay out of mandatory pathways;
 * - blocked resources do not appear.
 */
export function isPubliclyApproved(resource: Resource): boolean {
  return (
    resource.verification.status === "APPROVED" ||
    resource.verification.status === "APPROVED_WITH_LABEL"
  );
}

export function isMandatoryAllowed(entry: JoinedCatalogueEntry): boolean {
  return (
    entry.assignment.releaseRequirement === "mandatory" &&
    entry.assignment.releaseState === "approved" &&
    entry.resource.release.mayBeMandatory
  );
}
