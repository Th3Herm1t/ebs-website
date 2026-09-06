import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { chromium } from 'playwright';
import { PDFDocument } from 'pdf-lib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const jsonDir = path.resolve(__dirname, '../../ebs-brochure-content/json');
const pdfDir = path.join(rootDir, 'dist/pdf');
const previewDir = path.join(rootDir, 'dist/previews');
const allProgrammes = [
  'licence-finance',
  'licence-informatique',
  'licence-management',
  'licence-marketing',
  'master-crm-transformation-digitale',
  'master-ingenierie-financiere',
  'master-management-projets',
  'master-marketing-digital-ia',
];
const targetArg = process.argv.slice(2).find((arg) => !arg.startsWith('--'));
const targets = targetArg ? [targetArg] : allProgrammes;
const requiredSectionPattern = /curriculum|certification|career|professional_experience|reasons|skills|pedagogy|ai_learning|closing|international|academic_partners|enterprise_partners|student_journey/;
const normalize = (value) => value.replace(/\s+/g, ' ').trim();

function collectPublicationStrings(value, output = []) {
  if (typeof value === 'string') output.push(value);
  if (Array.isArray(value)) value.forEach((entry) => collectPublicationStrings(entry, output));
  if (value && typeof value === 'object') {
    const publicationKeys = [
      'heading', 'text', 'callout', 'conditions_source', 'programme_title_source',
      'issuer_source', 'credential_source', 'partner', 'country', 'entry_source',
      'qualification_source', 'recognition_source', 'options_heading', 'items',
      'groups', 'partners', 'options',
    ];
    publicationKeys.forEach((key) => {
      if (key in value && value[key] != null) collectPublicationStrings(value[key], output);
    });
  }
  return output;
}

async function countPdfPages(pdfPath) {
  const document = await PDFDocument.load(fs.readFileSync(pdfPath));
  return document.getPageCount();
}

async function run() {
  console.log('Running EBS brochure production audit...\n');
  const server = await createServer({ root: rootDir, server: { port: 5175 } });
  await server.listen();
  const port = server.config.server.port || 5175;
  const browser = await chromium.launch({ headless: true });
  let passedCount = 0;

  try {
    for (const programmeId of targets) {
      const issues = [];
      const jsonPath = path.join(jsonDir, `${programmeId}.json`);
      if (!fs.existsSync(jsonPath)) {
        console.error(`[${programmeId}] FAIL: source JSON is missing`);
        continue;
      }
      const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      const requiredStrings = Object.entries(data.sections)
        .filter(([sectionId]) => requiredSectionPattern.test(sectionId))
        .flatMap(([, section]) => collectPublicationStrings(section))
        .map(normalize)
        .filter(Boolean);

      const page = await browser.newPage({ viewport: { width: 1240, height: 1754 } });
      await page.goto(`http://localhost:${port}/?programme=${programmeId}`, { waitUntil: 'networkidle' });
      await page.waitForSelector('.brochure-root');
      await page.evaluate(() => document.fonts.ready);
      const runtime = await page.evaluate(() => {
        const pages = Array.from(document.querySelectorAll('.page'));
        const pageIssues = pages.map((pageElement, index) => {
          const pageRect = pageElement.getBoundingClientRect();
          const escaped = Array.from(pageElement.querySelectorAll('[data-source-text]')).filter((element) => {
            const rect = element.getBoundingClientRect();
            return rect.left < pageRect.left - 1 || rect.right > pageRect.right + 1 || rect.top < pageRect.top - 1 || rect.bottom > pageRect.bottom + 1;
          }).map((element) => element.textContent?.trim() || '(empty)');
          return { page: index + 1, overflow: pageElement.scrollHeight > pageElement.clientHeight + 1, escaped };
        });
        const smallText = Array.from(document.querySelectorAll('[data-source-text]'))
          .filter((element) => element.textContent?.trim())
          .map((element) => ({ text: element.textContent.trim(), px: Number.parseFloat(getComputedStyle(element).fontSize) }))
          .filter((entry) => entry.px < 8.66);
        const brokenImages = Array.from(document.images).filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src);
        const externalImages = Array.from(document.images).map((image) => image.src).filter((src) => !src.startsWith(location.origin));
        return {
          pageCount: pages.length,
          pageIssues,
          smallText,
          brokenImages,
          externalImages,
          placeholders: document.querySelectorAll('.asset-placeholder').length,
          sourceText: Array.from(document.querySelectorAll('[data-source-text]')).map((element) => element.textContent || ''),
          qrPayloads: Array.from(document.querySelectorAll('[data-qr-payload]')).map((element) => element.getAttribute('data-qr-payload')),
          bodyText: document.body.textContent || '',
        };
      });
      await page.close();

      if (runtime.pageCount !== 4) issues.push(`DOM page count is ${runtime.pageCount}, expected 4`);
      runtime.pageIssues.forEach((entry) => {
        if (entry.overflow || entry.escaped.length) issues.push(`page ${entry.page} has hidden or escaped content (overflow=${entry.overflow}, escaped=${entry.escaped.length}${entry.escaped.length ? `: ${entry.escaped.slice(0, 3).join(' | ')}` : ''})`);
      });
      if (runtime.smallText.length) issues.push(`${runtime.smallText.length} source text elements are below 6.5pt`);
      if (runtime.brokenImages.length) issues.push(`${runtime.brokenImages.length} local images are broken`);
      if (runtime.externalImages.length) issues.push(`${runtime.externalImages.length} images use external URLs`);
      if (runtime.placeholders) issues.push(`${runtime.placeholders} asset placeholders remain`);
      const renderedText = normalize(runtime.sourceText.join(' '));
      const missing = requiredStrings.filter((value) => !renderedText.includes(value));
      if (missing.length) issues.push(`${missing.length} authoritative content strings are missing (first: ${missing[0]})`);
      if (runtime.bodyText.includes('71 182 625')) issues.push('obsolete phone number 71 182 625 is rendered');
      if (!runtime.bodyText.includes('+216 71 18 26 25')) issues.push('official phone number is missing');
      const expectedQr = Object.values(data.sections).map((section) => section.qr?.payload).find(Boolean);
      if (expectedQr && !runtime.qrPayloads.includes(expectedQr)) issues.push(`QR payload is missing or incorrect: ${expectedQr}`);

      const pdfPath = path.join(pdfDir, `${programmeId}.pdf`);
      if (!fs.existsSync(pdfPath)) issues.push('PDF output is missing');
      else if (await countPdfPages(pdfPath) !== 4) issues.push(`PDF does not contain exactly 4 pages`);
      const programmePreviewDir = path.join(previewDir, programmeId);
      const previews = fs.existsSync(programmePreviewDir)
        ? fs.readdirSync(programmePreviewDir).filter((name) => /^page-[1-4]\.png$/.test(name))
        : [];
      if (previews.length !== 4) issues.push(`preview page count is ${previews.length}, expected 4`);

      if (issues.length) console.error(`[${programmeId}] FAIL\n  - ${issues.join('\n  - ')}`);
      else {
        passedCount += 1;
        console.log(`[${programmeId}] PASS: 4 A4 pages, content complete, typography and assets valid`);
      }
    }
  } finally {
    await browser.close();
    await server.close();
  }

  console.log(`\n${passedCount}/${targets.length} brochures passed.`);
  if (passedCount !== targets.length) process.exitCode = 1;
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
