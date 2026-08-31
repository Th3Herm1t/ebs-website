export type AIProfile = "AI_ENABLED" | "AI_BUILDER";

export type Capability =
  | "UNDERSTAND"
  | "APPLY"
  | "EVALUATE"
  | "ORCHESTRATE"
  | "GOVERN"
  | "ENGINEER";

export type OpportunityTier = "RECOMMENDED" | "DISCOVERY";

export type EvidencePathType = "EBS_ASSESSMENT" | "EXTERNAL_CREDENTIAL" | "PRIOR_LEARNING";

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

export interface Programme {
  id: string;
  level: "LICENCE" | "MASTER";
  profile: AIProfile;
  name: LocalizedText;
}

export interface ProgrammeCompetency {
  id: string;
  programmeId: string;
  year: string;
  sequence: number;
  competencyId: string;
  targetCapability: Capability;
  required: boolean;
  assessmentTemplateId: string | null;
  status: "ACTIVE";
}

export interface EvidencePath {
  id: string;
  type: EvidencePathType;
  assessmentTemplateId: string | null;
  resourceId: string | null;
  credentialId: string | null;
  label: LocalizedText;
}

export interface AcademicRequirement {
  id: string;
  programmeCompetencyId: string;
  programmeId: string;
  year: string;
  competencyId: string;
  title: LocalizedText;
  requiredCapability: Capability;
  satisfactionRule: "ANY_ONE_PATH";
  minimumCredentials: number;
  waivable: boolean;
  evidencePaths: EvidencePath[];
}

export interface Resource {
  id: string;
  providerId: string;
  platformId: string;
  title: string;
  resourceKind: string;
  classification: "ai-literacy" | "applied-ai" | "non-ai";
  topics: string[];
  difficulty: "introductory" | "intermediate" | "advanced";
  languages: string[];
  estimatedHours: number | null;
  launch: LaunchTarget;
  costPolicy: {
    eligibility: "VERIFIED_ZERO_COST";
    learningAccess: "ZERO_COST";
    assessment: "ZERO_COST";
    credentialIssue: "ZERO_COST";
    requiredSoftware: "ZERO_COST" | "ZERO_COST_OR_FREE_SANDBOX";
    hiddenPurchase: false;
  };
}

export interface Credential {
  id: string;
  resourceId: string;
  issuerProviderId: string;
  name: string;
  type: CredentialType;
  strength: CredentialStrength;
  assessmentRigor: AssessmentRigor;
  costEligibility: "VERIFIED_ZERO_COST";
  shareable: boolean;
  validity: string | null;
  verificationUrl: string | null;
  evidenceIds: string[];
}

export interface Opportunity {
  id: string;
  programmeId: string;
  resourceId: string;
  year: string;
  tier: OpportunityTier;
  status: "ACTIVE";
  source: string;
  rationale: string;
  academicRequirementIds: string[];
}

export interface CatalogueV3PublicSnapshot {
  schemaVersion: "3.2.0";
  release: {
    version: string;
    schemaVersion: "3.2.0";
    releasedAt: string;
    status: string;
    curriculumModel: "COMPETENCY_FIRST";
    profiles: AIProfile[];
    zeroCostPolicy: "STRICT_VERIFIED_ZERO_COST";
    counts: Record<string, number>;
  };
  profiles: Array<Record<string, unknown>>;
  programmes: Programme[];
  competencies: Array<Record<string, unknown>>;
  programmeCompetencies: ProgrammeCompetency[];
  assessmentTemplates: Array<Record<string, unknown>>;
  academicRequirements: AcademicRequirement[];
  providers: Array<{ id: string; name: string; status: string }>;
  platforms: Array<{ id: string; name: string; status: string }>;
  resources: Resource[];
  credentials: Credential[];
  opportunities: Opportunity[];
}

export interface JoinedProgrammeOpportunity {
  opportunity: Opportunity;
  resource: Resource;
  credential: Credential | undefined;
  provider: { id: string; name: string; status: string } | undefined;
  platform: { id: string; name: string; status: string } | undefined;
  mapping: {
    programmeId: string;
    year: string;
    tier: OpportunityTier;
    academicRequirementIds: string[];
  };
}

export interface JoinedEvidencePath {
  path: EvidencePath;
  resource: Resource | undefined;
  credential: Credential | undefined;
  provider: { id: string; name: string; status: string } | undefined;
  platform: { id: string; name: string; status: string } | undefined;
}

export interface JoinedAcademicRequirement extends AcademicRequirement {
  evidence: JoinedEvidencePath[];
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
