import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import vm from "node:vm";

function loadTsModule(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;

  const module = { exports: {} };
  vm.runInNewContext(output, { module, exports: module.exports, console }, { filename: filePath });
  return module.exports;
}

const repoRoot = process.cwd();
const dataPath = path.join(repoRoot, "src", "lib", "certifications", "v2", "data.ts");
const outputPath = path.join(repoRoot, "src", "lib", "certifications", "public-taxonomy.json");

const { resources, assignments } = loadTsModule(dataPath);
const resourceById = new Map(resources.map((resource) => [resource.id, resource]));

const pathwayLabels = {
  "core-competency": "Socle commun",
  "approved-pathway": "Parcours certifiant",
  onboarding: "Mise à niveau",
  enrichment: "Approfondissement",
};

const depthLabels = {
  "ai-user": "Usage IA",
  "ai-practitioner": "IA appliquée",
  "ai-builder": "Construction IA",
};

const publicCertifications = assignments.flatMap((assignment) => {
  if (assignment.releaseState !== "approved") return [];

  const resource = resourceById.get(assignment.resourceId);
  if (!resource) return [];

  return [
    {
      id: assignment.id,
      name: resource.canonicalTitle,
      provider: resource.provider,
      displayProvider: resource.provider,
      classification: resource.classification,
      requirement: assignment.releaseRequirement === "mandatory" ? "mandatory" : "optional",
      studyLevels: [assignment.studyLevel],
      programmes: [assignment.programme],
      recommendedYear: assignment.recommendedYear,
      deliveryPlatform: resource.deliveryPlatform ?? undefined,
      externalUrl: resource.canonicalUrl ?? resource.sourceUrl ?? undefined,
      publicVisible: true,
      pathwayLabel: pathwayLabels[assignment.curriculumRole] ?? "Parcours EBS",
      depthLabel: depthLabels[assignment.depthProfile] ?? "Compétence professionnelle",
    },
  ];
});

const taxonomy = {
  generatedAt: new Date().toISOString(),
  source: "src/lib/certifications/v2/data.ts",
  totalPublicCertifications: publicCertifications.length,
  dimensions: {
    classifications: [...new Set(publicCertifications.map((certification) => certification.classification))].sort(),
    requirements: [...new Set(publicCertifications.map((certification) => certification.requirement))].sort(),
    studyLevels: [...new Set(publicCertifications.flatMap((certification) => certification.studyLevels))].sort(),
    programmes: [...new Set(publicCertifications.flatMap((certification) => certification.programmes))].sort(),
    providers: [...new Set(publicCertifications.map((certification) => certification.displayProvider || certification.provider))].sort(),
  },
  certifications: publicCertifications,
};

fs.writeFileSync(outputPath, `${JSON.stringify(taxonomy, null, 2)}\n`);

console.log(`Wrote ${publicCertifications.length} public certifications to ${outputPath}`);
