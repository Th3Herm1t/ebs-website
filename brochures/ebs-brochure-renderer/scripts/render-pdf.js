import { createServer } from 'vite';
import { chromium } from 'playwright';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distPdfDir = path.join(rootDir, 'dist/pdf');

fs.mkdirSync(distPdfDir, { recursive: true });

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
  console.log('🚀 Starting Vite preview server for PDF render...');
  const server = await createServer({
    root: rootDir,
    server: { port: 5173 }
  });
  await server.listen();
  const port = server.config.server.port || 5173;

  console.log(`🌐 Vite listening on http://localhost:${port}\n`);

  const browser = await chromium.launch({ headless: true });

  for (const progId of targets) {
    const page = await browser.newPage({
      viewport: { width: 1240, height: 1754 }
    });

    const targetUrl = `http://localhost:${port}/?programme=${progId}`;
    console.log(`📄 Rendering [${progId}] from ${targetUrl}...`);

    await page.goto(targetUrl, { waitUntil: 'networkidle' });
    await page.waitForSelector('.brochure-root', { timeout: 10000 });

    // Wait for fonts to be ready
    await page.evaluate(() => document.fonts.ready);

    await page.evaluate(async () => {
      const images = Array.from(document.querySelectorAll('img'));
      await Promise.all(images.map((image) => image.decode().catch(() => undefined)));
    });

    // Wait a brief moment for layout settle
    await page.waitForTimeout(800);

    const outputPath = path.join(distPdfDir, `${progId}.pdf`);

    await page.pdf({
      path: outputPath,
      format: 'A4',
      landscape: false,
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    console.log(`✅ PDF Exported: ${outputPath} (${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB)\n`);
    await page.close();
  }

  await browser.close();
  await server.close();
  console.log('✨ All requested PDFs rendered successfully.');
}

run().catch((err) => {
  console.error('❌ Render Error:', err);
  process.exit(1);
});
