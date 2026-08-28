export type Classification = "ai-literacy" | "applied-ai" | "non-ai";
export type StudyLevel = "licence" | "master";
export type RecommendedYear = "L1" | "L2" | "L3" | "M1" | "M2";

export type VerificationStatus =
  | "APPROVED"
  | "APPROVED_WITH_LABEL"
  | "VERIFY_STUDENT_ACCESS"
  | "REPLACE_BEFORE_RELEASE"
  | "RETIRE";

export type ReleaseState = "approved" | "provisional" | "blocked";
export type SourceRequirement = "mandatory" | "optional";
export type ReleaseRequirement = "mandatory" | "optional" | "replacement-required";
export type CurriculumRole =
  | "core-competency"
  | "approved-pathway"
  | "onboarding"
  | "enrichment";

export type DepthProfile = "ai-user" | "ai-practitioner" | "ai-builder";

export interface ResourceAccess {
  learningCost: string;
  credentialCost: string;
  accessModel?: string | null;
  institutionalDependency?: string | null;
}

export interface ResourceCredential {
  type: string;
  publicClaim?: string | null;
}

export interface ResourceVerification {
  status: VerificationStatus;
  lastVerifiedAt: string;
  nextReviewAt: string;
  evidenceUrl?: string | null;
  evidenceNote?: string | null;
  maintenanceRisk?: string | null;
}

export interface ResourceRelease {
  decision: string;
  suggestedAction?: string | null;
  replacementCandidate?: string | null;
  mayPublishAsApproved: boolean;
  mayBeMandatory: boolean;
}

export interface Resource {
  id: string;
  canonicalTitle: string;
  provider: string;
  canonicalUrl?: string | null;
  sourceUrl?: string | null;
  deliveryPlatform?: string | null;
  resourceKind?: string | null;
  classification: Classification;
  access: ResourceAccess;
  credential: ResourceCredential;
  verification: ResourceVerification;
  release: ResourceRelease;
  sourceRows: string[];
}

export interface CurriculumAssignment {
  id: string;
  resourceId: string;
  sourceRowId: string;
  programme: string;
  studyLevel: StudyLevel | string;
  recommendedYear: RecommendedYear | string;
  sourceRequirement: SourceRequirement;
  releaseRequirement: ReleaseRequirement;
  curriculumRole: CurriculumRole;
  depthProfile: DepthProfile;
  releaseState: ReleaseState;
  mappingNote?: string | null;
  replacementCandidate?: string | null;
  competencyIds?: string[];
  fallbackResourceIds?: string[];
}

export interface CatalogueRelease {
  name: string;
  version: string;
  auditDate: string;
  status: string;
  policy: string;
  counts: Record<string, number>;
}

export interface CatalogueDoctrine {
  headline: string;
  profiles: Record<DepthProfile, string>;
  informaticsRule: string;
}

export interface CatalogueV2 {
  schemaVersion: string;
  release: CatalogueRelease;
  doctrine: CatalogueDoctrine;
  resources: Resource[];
  assignments: CurriculumAssignment[];
}

export interface CatalogueQuery {
  programme?: string;
  year?: string;
  requirement?: "mandatory" | "optional";
  classification?: Classification;
  includeProvisional?: boolean;
  includeBlocked?: boolean;
}

export interface JoinedCatalogueEntry {
  resource: Resource;
  assignment: CurriculumAssignment;
}
