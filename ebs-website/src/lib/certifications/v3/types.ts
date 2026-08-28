export type OpportunityTier = "CORE" | "RECOMMENDED" | "DISCOVERY";

export type CredentialType =
  | "certification"
  | "completion_certificate"
  | "digital_badge"
  | "pathway_badge"
  | "superbadge"
  | "accreditation"
  | "achievement";

export type CredentialStrength =
  | "completion"
  | "knowledge_validation"
  | "practical_validation"
  | "professional_certification";

export type AssessmentRigor =
  | "completion"
  | "quiz"
  | "exam"
  | "practical"
  | "project"
  | "project_exam"
  | "mixed";

export interface LocalizedText {
  fr: string;
  en: string;
}

export interface LaunchTarget {
  mode: "direct" | "provider_catalog_search";
  url: string | null;
  catalogUrl: string | null;
  externalSearchTitle: string | null;
}

export interface ProgrammeMapping {
  programmeId: string;
  year: string;
  tier: OpportunityTier;
  requirementGroupIds: string[];
}

export interface Resource {
  id: string;
  providerId: string;
  platformId: string;
  title: string;
  resourceKind: string;
  classification: "ai-literacy" | "applied-ai" | "non-ai";
  topics: string[];
  level: "introductory" | "intermediate" | "advanced";
  languages: string[];
  estimatedHours: number | null;
  launch: LaunchTarget;
  zeroCost: true;
  credentialIds: string[];
  programmeMappings: ProgrammeMapping[];
}

export interface Credential {
  id: string;
  resourceId: string;
  issuerProviderId: string;
  name: string;
  type: CredentialType;
  strength: CredentialStrength;
  assessmentRigor: AssessmentRigor;
  shareable: boolean;
  validity: string | null;
  verificationUrl: string | null;
  zeroCost: true;
}

export interface RequirementGroup {
  id: string;
  programmeId: string;
  year: string;
  competencyId: string;
  title: LocalizedText;
  satisfactionRule: "ALL" | "ANY_N";
  minComplete: number;
  options: Array<{
    resourceId: string;
    credentialId: string;
  }>;
  status: "ACTIVE";
}

export interface CatalogueV3PublicSnapshot {
  schemaVersion: "3.0.0";
  release: {
    version: string;
    releasedAt: string;
    status: string;
    counts: Record<string, number>;
    policy: string;
  };
  providers: Array<{ id: string; name: string; status: string }>;
  platforms: Array<{ id: string; name: string; status: string }>;
  programmes: Array<{
    id: string;
    name: LocalizedText;
    studyLevel: "licence" | "master";
    depthProfile: string;
  }>;
  competencies: Array<Record<string, unknown>>;
  requirementGroups: RequirementGroup[];
  resources: Resource[];
  credentials: Credential[];
}

export interface JoinedProgrammeOpportunity {
  resource: Resource;
  credential: Credential | undefined;
  provider: { id: string; name: string; status: string } | undefined;
  platform: { id: string; name: string; status: string } | undefined;
  mapping: ProgrammeMapping;
}

export interface CatalogueV3Query {
  programmeId?: string;
  year?: string;
  tier?: OpportunityTier;
  providerId?: string;
  credentialType?: CredentialType;
  classification?: Resource["classification"];
  language?: string;
  topic?: string;
}
