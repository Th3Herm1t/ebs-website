const fs = require('fs');
const path = require('path');

// 1. Read and parse partenaires.ts
const ts = require('typescript');
const partenairesTsPath = path.join(__dirname, '../src/lib/partenaires/partenaires.ts');
const partenairesTsCode = fs.readFileSync(partenairesTsPath, 'utf8');

// Transpile to JS and execute in vm or eval
const jsCode = ts.transpile(partenairesTsCode, { module: ts.ModuleKind.CommonJS });
const moduleExports = {};
const fn = new Function('exports', jsCode);
fn(moduleExports);

const partenaires = moduleExports.partenaires;
if (!partenaires) {
  console.error("FAILED to load partenaires object!");
  process.exit(1);
}

// 2. Read academic-partners.ts
const academicPartnersTsPath = path.join(__dirname, '../src/lib/partenaires/academic-partners.ts');
const academicPartnersTsCode = fs.readFileSync(academicPartnersTsPath, 'utf8');
const apJsCode = ts.transpile(academicPartnersTsCode, { module: ts.ModuleKind.CommonJS });
const apExports = {};
new Function('exports', apJsCode)(apExports);
const academicPartners = apExports.academicPartners;

// 3. Mapping of guide files to slugs
const guideMapping = {
  'eklore': 'GUIDE PARTENARIAT EBS - EKLORE_ED.md',
  'em-normandie': 'GUIDE PARTENARIAT EBS - EM_NORMANDIE.md',
  'epitech': 'GUIDE PARTENARIAT EBS - EPITECH.md',
  'epsi': 'GUIDE PARTENARIAT EBS - EPSI.md',
  'excelia': 'GUIDE PARTENARIAT EBS - EXCELIA.md',
  'gutech': 'GUIDE PARTENARIAT EBS - GUTECH.md',
  'idrac': 'GUIDE PARTENARIAT EBS - IDRAC.md',
  'ifag': 'GUIDE PARTENARIAT EBS - IFAG.md',
  'igefi': 'GUIDE PARTENARIAT EBS - IGEFI.md',
  'link-university': 'GUIDE PARTENARIAT EBS - LINK_UNIVERSITY.md',
  'psb': 'GUIDE PARTENARIAT EBS - PSB.md',
  'redsup': 'GUIDE PARTENARIAT EBS - RED_SUP.md',
  'supdecom': 'GUIDE PARTENARIAT EBS - SUP_DE_COM.md',
  'uqat': 'GUIDE PARTENARIAT EBS - UQAT.md'
};

const guideDir = path.join(__dirname, 'markdown_guides');
const publicDir = path.join(__dirname, '../public');

console.log("=================================================================");
console.log("DEEP VERIFICATION AUDIT FOR ACADEMIC PARTNERS");
console.log("=================================================================\n");

let errorCount = 0;
let warningCount = 0;

// A. Check Academic Partners grid slugs vs Partenaires dictionary
console.log("--- PART 1: Academic Partners Grid vs Partenaires Registry ---");
const gridSlugs = academicPartners.map(p => p.slug);
console.log(`Grid has ${academicPartners.length} partners.`);
console.log(`Registry has ${Object.keys(partenaires).length} partners.`);

academicPartners.forEach(ap => {
  if (!partenaires[ap.slug]) {
    console.error(`❌ [ERROR] Partner in grid "${ap.name}" with slug "${ap.slug}" is NOT in partenaires.ts!`);
    errorCount++;
  } else {
    console.log(`✓ Grid partner "${ap.name}" (${ap.slug}) matches registry.`);
  }

  // Check logo
  if (ap.logo && ap.logo.startsWith('/')) {
    const localLogo = path.join(publicDir, ap.logo);
    if (!fs.existsSync(localLogo)) {
      console.warn(`⚠️ [WARN] Logo in academicPartners for "${ap.name}" not found on disk: ${ap.logo}`);
      warningCount++;
    }
  }
});

// B. Check each partner in Partenaires dictionary
console.log("\n--- PART 2: Comprehensive Partner Integrity & Guide Alignment ---");

for (const [slug, data] of Object.entries(partenaires)) {
  console.log(`\n▶ Partner: ${data.name} (slug: "${slug}")`);
  
  // Basic fields check
  if (!data.slug) { console.error(`  ❌ Missing slug property!`); errorCount++; }
  if (data.slug !== slug) { console.error(`  ❌ Slug mismatch! key="${slug}", data.slug="${data.slug}"`); errorCount++; }
  if (!data.name) { console.error(`  ❌ Missing name!`); errorCount++; }
  if (!data.country) { console.error(`  ❌ Missing country!`); errorCount++; }
  if (!data.type) { console.error(`  ❌ Missing type!`); errorCount++; }
  if (!data.presentation || data.presentation.length < 20) { console.error(`  ❌ Missing or too short presentation!`); errorCount++; }
  if (!data.eligibilite || data.eligibilite.length < 10) { console.error(`  ❌ Missing eligibilite!`); errorCount++; }
  if (!Array.isArray(data.avantages) || data.avantages.length === 0) { console.error(`  ❌ Missing or empty avantages!`); errorCount++; }
  if (!Array.isArray(data.debouches) || data.debouches.length === 0) { console.error(`  ❌ Missing or empty debouches!`); errorCount++; }
  if (!Array.isArray(data.programmes) || data.programmes.length === 0) { console.error(`  ❌ Missing or empty programmes!`); errorCount++; }

  // Check logo & images
  if (data.logo && data.logo.startsWith('/')) {
    const pLogo = path.join(publicDir, data.logo);
    if (!fs.existsSync(pLogo)) {
      console.warn(`  ⚠️ [WARN] Logo not found on disk: ${data.logo}`);
      warningCount++;
    } else {
      console.log(`  ✓ Logo exists: ${data.logo}`);
    }
  }
  if (data.heroImage && data.heroImage.startsWith('/')) {
    const pHero = path.join(publicDir, data.heroImage);
    if (!fs.existsSync(pHero)) {
      console.warn(`  ⚠️ [WARN] Hero image not found on disk: ${data.heroImage}`);
      warningCount++;
    }
  }
  if (data.imageSection && data.imageSection.src && data.imageSection.src.startsWith('/')) {
    const pImg = path.join(publicDir, data.imageSection.src);
    if (!fs.existsSync(pImg)) {
      console.warn(`  ⚠️ [WARN] ImageSection src not found on disk: ${data.imageSection.src}`);
      warningCount++;
    }
  }

  // Check Accreditations logos
  if (data.accreditations) {
    data.accreditations.forEach(acc => {
      if (acc.logo && acc.logo.startsWith('/')) {
        const accPath = path.join(publicDir, acc.logo);
        if (!fs.existsSync(accPath)) {
          console.warn(`  ⚠️ [WARN] Accreditation logo not found on disk: ${acc.logo}`);
          warningCount++;
        }
      }
    });
  }

  // Cross-reference with Markdown guide if available
  const guideFileName = guideMapping[slug];
  if (guideFileName) {
    const guidePath = path.join(guideDir, guideFileName);
    if (fs.existsSync(guidePath)) {
      const guideContent = fs.readFileSync(guidePath, 'utf8');
      console.log(`  ✓ Guide file found: ${guideFileName} (${guideContent.length} chars)`);
      
      // 1. Check for financial / pricing details in guide
      const hasReductionInGuide = /réduction|frais de scolarité|acompte|bourse|tarif/i.test(guideContent);
      if (hasReductionInGuide) {
        const hasPricingOrExtra = (data.pricing && data.pricing.length > 0) || (data.extraSections && data.extraSections.length > 0);
        if (!hasPricingOrExtra) {
          console.warn(`  ⚠️ [WARN] Guide contains financial terms, but partner has no pricing or extraSections!`);
          warningCount++;
        } else {
          console.log(`  ✓ Financial / pricing section captured (pricing: ${data.pricing?.length || 0}, extraSections: ${data.extraSections?.length || 0})`);
        }
      }

      // 2. Check programmes count
      console.log(`  ✓ Programmes configured: ${data.programmes.length}`);
      data.programmes.forEach(p => {
        console.log(`    • [${p.duree}] ${p.nom}`);
      });

      // 3. Stats check
      if (data.keyStats) {
        console.log(`  ✓ KeyStats: ${data.keyStats.map(s => `${s.label}: ${s.value}`).join(' | ')}`);
      }

      // 4. ExtraSections check
      if (data.extraSections) {
        data.extraSections.forEach(es => {
          console.log(`  ✓ ExtraSection: "${es.title}" (${es.body.length} chars)`);
        });
      }
    } else {
      console.warn(`  ⚠️ Guide file mapped but not found on disk: ${guideFileName}`);
      warningCount++;
    }
  } else {
    console.log(`  ℹ (Partner ${slug} is an additional/meta partner without dedicated guide file)`);
  }
}

console.log("\n=================================================================");
console.log(`AUDIT SUMMARY: ${errorCount} Errors, ${warningCount} Warnings`);
console.log("=================================================================");
