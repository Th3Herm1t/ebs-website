import { createServer } from 'vite';
import { chromium } from 'playwright';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const previewsBaseDir = path.join(rootDir, 'dist/previews');

const allProgrammes = [
  'licence-finance',
  'licence-informatique',
  'licence-management',
  'licence-marketing',
  'master-crm-transformation-digitale',
  'master-ingenierie-financiere',
  'master-management-projets',
  'master-marketing-digital-ia'
];

const targetArg = process.argv.slice(2).find(arg => !arg.startsWith('--'));
const targets = targetArg ? [targetArg] : allProgrammes;

async function run() {
  console.log('🖼️  Generating high-res PNG previews & Contact Sheet...\n');
  const server = await createServer({
    root: rootDir,
    server: { port: 5174 }
  });
  await server.listen();
  const port = server.config.server.port || 5174;

  const browser = await chromium.launch({ headless: true });

  for (const progId of targets) {
    const progPreviewDir = path.join(previewsBaseDir, progId);
    fs.mkdirSync(progPreviewDir, { recursive: true });

    const page = await browser.newPage({
      viewport: { width: 1240, height: 1754 }
    });

    const targetUrl = `http://localhost:${port}/?programme=${progId}`;
    await page.goto(targetUrl, { waitUntil: 'networkidle' });
    await page.waitForSelector('.brochure-root', { timeout: 10000 });
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(async () => {
      const images = Array.from(document.querySelectorAll('img'));
      await Promise.all(images.map((image) => image.decode().catch(() => undefined)));
    });
    await page.waitForTimeout(800);

    const pageElements = await page.$$('.page');
    console.log(`📸 Capturing ${pageElements.length} pages for [${progId}]...`);

    const pageImagePaths = [];

    for (let i = 0; i < pageElements.length; i++) {
      const pageImagePath = path.join(progPreviewDir, `page-${i + 1}.png`);
      await pageElements[i].screenshot({ path: pageImagePath });
      pageImagePaths.push(pageImagePath);
      console.log(`  ✓ Page ${i + 1} -> ${pageImagePath}`);
    }

    // Generate 2x2 Contact Sheet with Sharp
    try {
      if (pageImagePaths.length === 4) {
        console.log(`  🖼️  Assembling 4-Page Contact Sheet with Sharp...`);
        const sheetWidth = 1200;
        const sheetHeight = 850;
        const thumbW = 580;
        const thumbH = 400;

        const thumb1 = await sharp(pageImagePaths[0]).resize(thumbW, thumbH, { fit: 'inside' }).toBuffer();
        const thumb2 = await sharp(pageImagePaths[1]).resize(thumbW, thumbH, { fit: 'inside' }).toBuffer();
        const thumb3 = await sharp(pageImagePaths[2]).resize(thumbW, thumbH, { fit: 'inside' }).toBuffer();
        const thumb4 = await sharp(pageImagePaths[3]).resize(thumbW, thumbH, { fit: 'inside' }).toBuffer();

        const contactSheetPath = path.join(progPreviewDir, 'contact-sheet.png');

        await sharp({
          create: {
            width: sheetWidth,
            height: sheetHeight,
            channels: 4,
            background: { r: 241, g: 245, b: 249, alpha: 1 }
          }
        })
          .composite([
            { input: thumb1, top: 15, left: 15 },
            { input: thumb2, top: 15, left: 605 },
            { input: thumb3, top: 430, left: 15 },
            { input: thumb4, top: 430, left: 605 }
          ])
          .png()
          .toFile(contactSheetPath);

        console.log(`  ✅ Contact Sheet created: ${contactSheetPath}`);
      }
    } catch (sharpErr) {
      console.warn(`  ⚠️  Sharp contact sheet generation notice:`, sharpErr.message);
    }

    await page.close();
    console.log(`\n`);
  }

  await browser.close();
  await server.close();
  console.log('✨ Preview generation completed.');
}

run().catch((err) => {
  console.error('❌ Preview Error:', err);
  process.exit(1);
});
