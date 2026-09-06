import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsonDir = path.resolve(__dirname, '../../ebs-brochure-content/json');

const programmes = [
  'licence-finance',
  'licence-informatique',
  'licence-management',
  'licence-marketing',
  'master-crm-transformation-digitale',
  'master-ingenierie-financiere',
  'master-management-projets',
  'master-marketing-digital-ia'
];

console.log('🔍 Running EBS Brochure Data & Schema Check...\n');

let hasErrors = false;

for (const progId of programmes) {
  const jsonPath = path.join(jsonDir, `${progId}.json`);
  if (!fs.existsSync(jsonPath)) {
    console.error(`❌ Missing JSON file for ${progId}: ${jsonPath}`);
    hasErrors = true;
    continue;
  }

  try {
    const raw = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(raw);

    // Basic structure assertions
    if (!data.programme || !data.sections || !data.normalized_contacts) {
      console.error(`❌ Schema violation in ${progId}: Missing root fields.`);
      hasErrors = true;
      continue;
    }

    if (!data.sections.accreditation || !data.sections.positioning) {
      console.error(`❌ Incomplete core sections in ${progId}`);
      hasErrors = true;
      continue;
    }

    console.log(`✅ [${progId}] Data valid • Level: ${data.programme.level} • Sections: ${Object.keys(data.sections).length}`);
  } catch (err) {
    console.error(`❌ JSON parse error in ${progId}:`, err);
    hasErrors = true;
  }
}

if (hasErrors) {
  console.error('\n❌ Data check failed.');
  process.exit(1);
} else {
  console.log('\n✨ All 8 brochure data files passed validation!');
}
