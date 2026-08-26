const fs = require('fs');
let s = fs.readFileSync('src/lib/partenaires/partenaires.ts', 'utf8');

// Find the UQAT residencyBadge line and add extraSections after it
const marker = 'residencyBadge: { text: "R\u00e9sidence permanente possible via le PEQ", sub: "Programme de l\'exp\u00e9rience qu\u00e9b\u00e9coise" },';
const idx = s.indexOf(marker);
if (idx === -1) {
  console.error('Could not find residencyBadge marker');
  process.exit(1);
}

const insertAfter = idx + marker.length;
const extraSections = `\r\n    extraSections: [\r\n      {\r\n        title: "Conditions financi\u00e8res du partenariat",\r\n        body: "- **Co\u00fbt estimatif** : Entre 24 000 et 30 000 $ CAD pour les deux ann\u00e9es.\\n- **Frais d'admission** : 75 $ CAD.\\n- **Bourse (MGP uniquement)** : 2 500 $ CAD par session, jusqu'\u00e0 un maximum de 4 sessions.\\n- **Indexation** : Les frais de scolarit\u00e9 peuvent \u00eatre r\u00e9vis\u00e9s d'environ 3 % par an.\\n- **Tarif pr\u00e9f\u00e9rentiel** : Les \u00e9tudiants d'ESPIMA b\u00e9n\u00e9ficient du tarif canadien, inf\u00e9rieur au tarif international."\r\n      }\r\n    ],`;

s = s.substring(0, insertAfter) + extraSections + s.substring(insertAfter);
fs.writeFileSync('src/lib/partenaires/partenaires.ts', s, 'utf8');
console.log('Done. Added extraSections to UQAT.');
