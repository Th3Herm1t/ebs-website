const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const root = '/root/ebs-website';
const corrections = [
  'CORRECTION PAGE ACCUEIL EBS.TN.docx',
  'Correction Texte site EBS.TN.docx',
];
const guidesDir = path.join(root, 'GUIDES PARTENAIRES ACADEMIQUES-20260824T060224Z-1-001', 'GUIDES PARTENAIRES ACADEMIQUES');
const outputRoot = path.join(root, '.omo', 'audit', 'inputs');

function xmlText(docxPath) {
  const xml = execFileSync('python3', ['-c', "import sys, zipfile; sys.stdout.write(zipfile.ZipFile(sys.argv[1]).read('word/document.xml').decode('utf-8'))", docxPath], { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
  const paragraphs = [...xml.matchAll(/<w:p(?: [^>]*)?>([\s\S]*?)<\/w:p>/g)];
  return paragraphs.map(([, paragraph]) => {
    const text = [...paragraph.matchAll(/<w:t(?: [^>]*)?>([\s\S]*?)<\/w:t>/g)]
      .map(([, value]) => value)
      .join('')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'");
    return text.replace(/\s+/g, ' ').trim();
  }).filter(Boolean).join('\n');
}

function extract(sourcePath, outputDir) {
  fs.mkdirSync(outputDir, { recursive: true });
  const outputPath = path.join(outputDir, `${path.basename(sourcePath, '.docx')}.txt`);
  fs.writeFileSync(outputPath, `${xmlText(sourcePath)}\n`);
  return outputPath;
}

const outputs = corrections.map((file) => extract(path.join(root, file), path.join(outputRoot, 'corrections')));
for (const file of fs.readdirSync(guidesDir).filter((file) => file.endsWith('.docx')).sort()) {
  outputs.push(extract(path.join(guidesDir, file), path.join(outputRoot, 'guides')));
}
console.log(`extracted ${outputs.length} DOCX files`);
for (const output of outputs) console.log(output);
