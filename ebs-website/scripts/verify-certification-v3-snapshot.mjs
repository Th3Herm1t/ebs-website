import snapshot from "../src/lib/certifications/v3/public-snapshot.json" with { type: "json" };

const { release, resources, credentials, requirementGroups } = snapshot;

const mappingCount = resources.reduce(
  (total, resource) => total + resource.programmeMappings.length,
  0,
);

const nonZeroCostResources = resources.filter((resource) => resource.zeroCost !== true);
const nonZeroCostCredentials = credentials.filter((credential) => credential.zeroCost !== true);

console.log(`EBS catalogue v${release.version} (${release.status})`);
console.log(`resources=${resources.length}`);
console.log(`credentials=${credentials.length}`);
console.log(`programmeMappings=${mappingCount}`);
console.log(`requirementGroups=${requirementGroups.length}`);

if (resources.length !== release.counts.publicResources) {
  throw new Error(`Resource count mismatch: ${resources.length} != ${release.counts.publicResources}`);
}

if (credentials.length !== release.counts.publicCredentials) {
  throw new Error(`Credential count mismatch: ${credentials.length} != ${release.counts.publicCredentials}`);
}

if (mappingCount !== release.counts.programmeAssignments) {
  throw new Error(`Programme mapping count mismatch: ${mappingCount} != ${release.counts.programmeAssignments}`);
}

if (requirementGroups.length !== release.counts.coreRequirementGroups) {
  throw new Error(
    `Requirement group count mismatch: ${requirementGroups.length} != ${release.counts.coreRequirementGroups}`,
  );
}

if (nonZeroCostResources.length > 0 || nonZeroCostCredentials.length > 0) {
  throw new Error("Public snapshot contains non-zero-cost entries");
}
