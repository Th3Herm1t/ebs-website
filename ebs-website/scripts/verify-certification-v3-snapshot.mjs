import snapshot from "../src/lib/certifications/v3/public-snapshot.json" with { type: "json" };

const { release, programmes, resources, credentials, academicRequirements, opportunities } = snapshot;

const nonZeroCostResources = resources.filter(
  (resource) =>
    resource.costPolicy?.eligibility !== "VERIFIED_ZERO_COST" ||
    resource.costPolicy?.learningAccess !== "ZERO_COST" ||
    resource.costPolicy?.assessment !== "ZERO_COST" ||
    resource.costPolicy?.credentialIssue !== "ZERO_COST" ||
    resource.costPolicy?.hiddenPurchase !== false,
);
const nonZeroCostCredentials = credentials.filter(
  (credential) => credential.costEligibility !== "VERIFIED_ZERO_COST",
);

const aiBuilderProgrammes = programmes.filter((programme) => programme.profile === "AI_BUILDER");
const masterFinance = programmes.find((programme) => programme.id === "master-ingenierie-financiere");
const marketingAiCulture = academicRequirements.find(
  (requirement) =>
    requirement.programmeId === "licence-marketing" &&
    requirement.year === "L1" &&
    requirement.title?.fr === "Culture IA",
);
const invalidAiEnabledEngineerRequirements = academicRequirements.filter((requirement) => {
  const programme = programmes.find((entry) => entry.id === requirement.programmeId);
  return programme?.profile === "AI_ENABLED" && requirement.requiredCapability === "ENGINEER";
});

console.log(`EBS catalogue v${release.version} (${release.status})`);
console.log(`programmes=${programmes.length}`);
console.log(`resources=${resources.length}`);
console.log(`credentials=${credentials.length}`);
console.log(`academicRequirements=${academicRequirements.length}`);
console.log(`opportunities=${opportunities.length}`);

if (resources.length !== release.counts.publicResources) {
  throw new Error(`Resource count mismatch: ${resources.length} != ${release.counts.publicResources}`);
}

if (credentials.length !== release.counts.publicCredentials) {
  throw new Error(`Credential count mismatch: ${credentials.length} != ${release.counts.publicCredentials}`);
}

if (programmes.length !== release.counts.programmes) {
  throw new Error(`Programme count mismatch: ${programmes.length} != ${release.counts.programmes}`);
}

if (academicRequirements.length !== release.counts.academicRequirements) {
  throw new Error(`Academic requirement count mismatch: ${academicRequirements.length} != ${release.counts.academicRequirements}`);
}

if (opportunities.length !== release.counts.opportunities) {
  throw new Error(`Opportunity count mismatch: ${opportunities.length} != ${release.counts.opportunities}`);
}

if (nonZeroCostResources.length > 0 || nonZeroCostCredentials.length > 0) {
  throw new Error("Public snapshot contains non-zero-cost entries");
}

if (snapshot.schemaVersion !== "3.2.0" || release.schemaVersion !== "3.2.0") {
  throw new Error("Snapshot is not a v3.2 release");
}

if (aiBuilderProgrammes.length !== 2) {
  throw new Error(`Expected 2 AI Builder programmes, found ${aiBuilderProgrammes.length}`);
}

if (masterFinance?.profile !== "AI_ENABLED") {
  throw new Error("Master en Ingénierie Financière must be AI-Enabled");
}

if (!marketingAiCulture) {
  throw new Error("Licence en Marketing must include L1 Culture IA");
}

if (invalidAiEnabledEngineerRequirements.length > 0) {
  throw new Error("AI-Enabled programmes must not require ENGINEER capability");
}
