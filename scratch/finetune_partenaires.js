const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const partenairesTsPath = path.join(__dirname, '../src/lib/partenaires/partenaires.ts');
let src = fs.readFileSync(partenairesTsPath, 'utf8');

// 1. Update EM Normandie pricing & add extraSection for financial advantages
const emNormandieOldPricing = `    pricing: [
      { label: "MIM — Programme Grande École", amount: "~10 500", period: "€/an", note: "Master visé par l'État français" },
      { label: "MSc — Master of Science", amount: "~13 000", period: "€/an", note: "10 spécialisations disponibles" },
      { label: "MS — Mastère Spécialisé", amount: "~9 500", period: "€/an", note: "Bac+6, label CGE" },
    ],`;

const emNormandieNewPricing = `    pricing: [
      { label: "MIM — Programme Grande École", amount: "13 750", period: "€/an", note: "Diplôme visé • Grade de Master" },
      { label: "MSc — Master of Science", amount: "15 500", period: "€/an", note: "10 spécialisations disponibles" },
      { label: "MS — Mastère Spécialisé", amount: "12 500", period: "€", note: "Label MS • UniLaSalle Rouen" },
    ],`;

src = src.replace(emNormandieOldPricing, emNormandieNewPricing);

// Check if EM Normandie has financial conditions in extraSections
if (!src.includes('Avantages financiers du partenariat EM Normandie')) {
  const emExtraSearch = `    extraSections: [`;
  const emExtraReplace = `    extraSections: [
      {
        title: "Avantages financiers du partenariat",
        body: "- **Réduction EM Normandie** : 10 % sur les frais de scolarité.\\n- **Réduction ESPIMA** : 5 % supplémentaires.\\n- **Réduction anticipée** : 10 % supplémentaires pour une candidature déposée avant le 30 avril.\\n- **Frais de dossier** : Exonérés.\\n- **Acompte** : 3 000 € à l'admission.\\n- **Refus de visa** : Remboursement de l'acompte selon les dispositions prévues par la convention."
      },`;
  // We want to replace only in em-normandie block
  const emPos = src.indexOf('"em-normandie": {');
  if (emPos !== -1) {
    const extraPos = src.indexOf(emExtraSearch, emPos);
    if (extraPos !== -1 && extraPos < emPos + 4000) {
      src = src.substring(0, extraPos) + emExtraReplace + src.substring(extraPos + emExtraSearch.length);
      console.log("✓ Updated em-normandie extraSections with financial conditions");
    }
  }
}

// 2. Add pricing to PSB
const psbSearch = `    keyStats: [
      { label: "Création", value: "1974" },
      { label: "Étudiants", value: "4 000+" },
      { label: "Alumni", value: "20 000+" },
      { label: "Accréditations", value: "3 (AACSB, EQUIS, AMBA)" },
    ],`;

const psbReplace = `    keyStats: [
      { label: "Création", value: "1974" },
      { label: "Étudiants", value: "4 000+" },
      { label: "Alumni", value: "20 000+" },
      { label: "Accréditations", value: "3 (AACSB, EQUIS, AMBA)" },
    ],
    pricing: [
      { label: "Bachelor, PGE & MSc", amount: "Tarif officiel", period: "", note: "Selon le cursus PSB choisi" },
    ],`;

if (!src.includes('label: "Bachelor, PGE & MSc"')) {
  src = src.replace(psbSearch, psbReplace);
  console.log("✓ Added pricing to PSB");
}

// 3. Add pricing to Audencia
const audenciaSearch = `    keyStats: [
      { label: "Étudiants", value: "7 000+" },
      { label: "Campus", value: "11" },
      { label: "Entreprises", value: "900+" },
      { label: "Alumni", value: "47 000+" },
    ],`;

const audenciaReplace = `    keyStats: [
      { label: "Étudiants", value: "7 000+" },
      { label: "Campus", value: "11" },
      { label: "Entreprises", value: "900+" },
      { label: "Alumni", value: "47 000+" },
    ],
    pricing: [
      { label: "Bachelor & PGE", amount: "Tarif officiel", period: "", note: "Selon le cursus Audencia choisi" },
    ],`;

if (!src.includes('label: "Bachelor & PGE"')) {
  src = src.replace(audenciaSearch, audenciaReplace);
  console.log("✓ Added pricing to Audencia");
}

fs.writeFileSync(partenairesTsPath, src, 'utf8');
console.log("Done fine-tuning partenaires.ts");
