import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";

const sourcePath = "src/lib/certifications/final-catalogue.ts";
const reportPath = "CERTIFICATION_CATALOGUE_REVIEW.md";

const file = readFileSync(sourcePath, "utf8");
const catalogueMatch = file.match(/export const finalCertificationCatalogue[\s\S]*?= \[([\s\S]*?)\];/);

if (!catalogueMatch) {
  throw new Error("Could not locate finalCertificationCatalogue array.");
}

const allProgrammeSlugs = [
  "management",
  "marketing",
  "finance",
  "informatique-ia",
  "cybersecurite",
  "marketing-digital-ia",
  "crm",
  "startups",
  "ingenierie-financiere",
];
const licenceProgrammeSlugs = [
  "management",
  "marketing",
  "finance",
  "informatique-ia",
  "cybersecurite",
];
const masterProgrammeSlugs = [
  "marketing-digital-ia",
  "crm",
  "startups",
  "ingenierie-financiere",
];

const catalogueExpression = `[${catalogueMatch[1]
  .replace(/direct\(/g, "")
  .replace(/forage\(/g, "")
  .replace(/}\),/g, "},")
  .replace(/}\)\s*$/g, "}")}]`;

const sandbox = { console };
vm.createContext(sandbox);
vm.runInContext(
  `const allProgrammeSlugs = ${JSON.stringify(allProgrammeSlugs)};
  const licenceProgrammeSlugs = ${JSON.stringify(licenceProgrammeSlugs)};
  const masterProgrammeSlugs = ${JSON.stringify(masterProgrammeSlugs)};
  const finalCertificationCatalogue = ${catalogueExpression};
  function getCertificationsByProgramme(programme) {
    return finalCertificationCatalogue.filter((certification) => certification.programmes.includes(programme));
  }
  function getMandatoryCertifications(programme) {
    return getCertificationsByProgramme(programme).filter((certification) => certification.requirement === "mandatory");
  }
  function getOptionalCertifications(programme) {
    return getCertificationsByProgramme(programme).filter((certification) => certification.requirement === "optional");
  }
  function getCertificationsByMatrixCell(classification, requirement) {
    return finalCertificationCatalogue.filter(
      (certification) => certification.classification === classification && certification.requirement === requirement
    );
  }
  function getPublicCertificationCount() {
    return finalCertificationCatalogue.filter((certification) => certification.publicVisible !== false).length;
  }
  const classifications = ["ai-literacy", "applied-ai", "non-ai"];
  const requirements = ["mandatory", "optional"];
  const programmeRows = allProgrammeSlugs.map((programme) => {
    const certs = getCertificationsByProgramme(programme);
    const row = {
      programme,
      total: certs.length,
      mandatory: getMandatoryCertifications(programme).length,
      optional: getOptionalCertifications(programme).length,
    };
    for (const classification of classifications) {
      for (const requirement of requirements) {
        row[classification + ":" + requirement] = certs.filter(
          (certification) => certification.classification === classification && certification.requirement === requirement
        ).length;
      }
    }
    return row;
  });
  globalThis.reportData = {
    total: getPublicCertificationCount(),
    matrix: Object.fromEntries(classifications.map((classification) => [
      classification,
      Object.fromEntries(requirements.map((requirement) => [
        requirement,
        getCertificationsByMatrixCell(classification, requirement).length,
      ])),
    ])),
    programmeRows,
  };
`,
  sandbox
);

const { reportData } = sandbox;
const overloaded = reportData.programmeRows.filter((row) => row.mandatory > 14);
const sparseOptional = reportData.programmeRows.filter((row) => row.optional < 3);
const emptyCells = reportData.programmeRows.flatMap((row) =>
  Object.entries(row)
    .filter(([key, value]) => key.includes(":") && value === 0)
    .map(([key]) => `${row.programme} / ${key}`)
);

const lines = [
  "# Certification Catalogue Review",
  "",
  `Generated from \`${sourcePath}\`.`,
  "",
  "## Global Matrix",
  "",
  "| Classification | Mandatory | Optional |",
  "|---|---:|---:|",
  `| AI Literacy | ${reportData.matrix["ai-literacy"].mandatory} | ${reportData.matrix["ai-literacy"].optional} |`,
  `| Applied AI | ${reportData.matrix["applied-ai"].mandatory} | ${reportData.matrix["applied-ai"].optional} |`,
  `| Non-AI | ${reportData.matrix["non-ai"].mandatory} | ${reportData.matrix["non-ai"].optional} |`,
  "",
  `Public visible certifications in managed catalogue: **${reportData.total}**.`,
  "",
  "## Programme Counts",
  "",
  "| Programme | Total | Mandatory | Optional | AI Lit M | AI Lit O | Applied AI M | Applied AI O | Non-AI M | Non-AI O |",
  "|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|",
  ...reportData.programmeRows.map((row) =>
    `| ${row.programme} | ${row.total} | ${row.mandatory} | ${row.optional} | ${row["ai-literacy:mandatory"]} | ${row["ai-literacy:optional"]} | ${row["applied-ai:mandatory"]} | ${row["applied-ai:optional"]} | ${row["non-ai:mandatory"]} | ${row["non-ai:optional"]} |`
  ),
  "",
  "## Audit Flags",
  "",
  `Programmes above 14 mandatory certifications: ${overloaded.length ? overloaded.map((row) => `${row.programme} (${row.mandatory})`).join(", ") : "None"}.`,
  "",
  `Programmes with fewer than 3 optional certifications: ${sparseOptional.length ? sparseOptional.map((row) => `${row.programme} (${row.optional})`).join(", ") : "None"}.`,
  "",
  `Programme matrix cells with zero items: ${emptyCells.length ? emptyCells.join(", ") : "None"}.`,
  "",
  "## Notes",
  "",
  "- Public website cards should not link externally; external URLs remain for internal/student-space operations.",
  "- Forage simulations use the real organization as provider and should show `*Simulation Forage` as a small note.",
  "- HubSpot entries marked with `sourceNote` need course-specific URL verification before student-space rollout.",
  "- Cohort rollout policy is intentionally excluded for now.",
];

writeFileSync(reportPath, `${lines.join("\n")}\n`);
console.log(`Wrote ${reportPath}`);
