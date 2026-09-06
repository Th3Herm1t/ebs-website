const fs = require('fs');
const path = require('path');

const transcriptsDir = path.resolve('c:/Users/abdel/Desktop/EBS WEB/brochures/ebs-brochure-content/transcripts');

const files = fs.readdirSync(transcriptsDir).filter(f => f.endsWith('.md'));

for (const f of files) {
  const filePath = path.join(transcriptsDir, f);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix phones
  content = content.replace(/\+216 71 182 635/g, '+216 71 18 26 25');
  content = content.replace(/\+216 71182635/g, '+216 71 18 26 25');

  // Fix typos
  content = content.replace(/dans l’une de nos partenaires/g, 'dans l\'un de nos établissements partenaires');
  content = content.replace(/POURSUIVRE D’ÉTUDES À L’INTERNATIONAL/g, 'POURSUITE D’ÉTUDES À L’INTERNATIONAL');
  content = content.replace(/Analyse professionnel\b/g, 'Analyse professionnelle');
  content = content.replace(/opportunités\.\./g, 'opportunités.');
  content = content.replace(/commence ici\b/g, 'Votre avenir commence ici.');

  // Fix SAC and PMI issuers in text
  content = content.replace(/PwC — Scrum with AI Certified \(SAC™\)/g, 'SCRUMstudy — Scrum with AI Certified (SAC™)');
  content = content.replace(/PwC — PMI Kickoff/g, 'PMI — PMI Kickoff');

  // Clean "À revoir : EBS-xxx" tags as they are resolved
  content = content.replace(/\n*À revoir : [^\n]+\n*/g, '\n\n');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated transcript: ${f}`);
}
