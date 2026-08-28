import { assignments, resources } from "./data";
import type { CurriculumAssignment, Resource } from "./types";

export interface CatalogueValidation {
  ok: boolean;
  errors: string[];
  warnings: string[];
}

export function validateCatalogueV2(): CatalogueValidation {
  const errors: string[] = [];
  const warnings: string[] = [];

  const resourceIds = new Set<string>();
  for (const resource of resources as readonly Resource[]) {
    if (resourceIds.has(resource.id)) {
      errors.push(`Duplicate resource id: ${resource.id}`);
    }
    resourceIds.add(resource.id);

    if (!resource.verification.evidenceUrl) {
      warnings.push(`Missing evidence URL: ${resource.id}`);
    }

    if (
      (resource.verification.status === "REPLACE_BEFORE_RELEASE" ||
        resource.verification.status === "RETIRE") &&
      resource.release.mayBeMandatory
    ) {
      errors.push(`Blocked resource marked mandatory-eligible: ${resource.id}`);
    }
  }

  const assignmentIds = new Set<string>();
  for (const assignment of assignments as readonly CurriculumAssignment[]) {
    if (assignmentIds.has(assignment.id)) {
      errors.push(`Duplicate assignment id: ${assignment.id}`);
    }
    assignmentIds.add(assignment.id);

    if (!resourceIds.has(assignment.resourceId)) {
      errors.push(
        `Assignment ${assignment.id} references unknown resource ${assignment.resourceId}`,
      );
    }

    if (
      assignment.releaseState !== "approved" &&
      assignment.releaseRequirement === "mandatory"
    ) {
      errors.push(
        `Non-approved assignment remains mandatory: ${assignment.id}`,
      );
    }

    if (
      assignment.programme === "informatique-ia" &&
      assignment.curriculumRole === "onboarding" &&
      assignment.releaseRequirement === "mandatory"
    ) {
      errors.push(
        `Informatique onboarding cannot be mandatory: ${assignment.id}`,
      );
    }
  }

  return { ok: errors.length === 0, errors, warnings };
}
