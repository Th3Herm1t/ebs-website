---
name: pdf-forge
description: Reference implementation and document-layout conventions for HTML/Tailwind -> Playwright -> PDF generation. Enforces exact @page CSS rules, page-break control, zero bleed drift, and print-fidelity Playwright options.
---

# PDF-Forge: HTML/CSS to Pixel-Perfect PDF

This skill governs the technical pipeline that transforms React/HTML/Tailwind components into print-ready PDF documents using Chromium and Playwright.

---

## 1. The Print CSS Architecture

High-fidelity print documents require strict CSS page rules that override standard screen behavior.

### Essential `@page` Configuration
```css
@page {
  size: A4 portrait; /* Exactly 210mm x 297mm */
  margin: 0;         /* Crucial: zero browser margins; handle all padding in page container */
}

@media print {
  html, body {
    width: 210mm;
    height: 100%;
    margin: 0;
    padding: 0;
    background: transparent;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
}
```

### The 4-Page Physical Container Pattern
Every brochure consists of exactly 4 distinct physical page wrapper elements:

```html
<div class="brochure-root">
  <section class="page page-1" id="page-1">
    <!-- Page 1 Content: Cover / Identity -->
  </section>
  <section class="page page-2" id="page-2">
    <!-- Page 2 Content: Curriculum & Certifications -->
  </section>
  <section class="page page-3" id="page-3">
    <!-- Page 3 Content: Pedagogy & Why EBS -->
  </section>
  <section class="page page-4" id="page-4">
    <!-- Page 4 Content: International & Contacts -->
  </section>
</div>
```

### Strict Page Geometry & Break Control
```css
.page {
  width: 210mm;
  height: 297mm;
  min-height: 297mm;
  max-height: 297mm;
  position: relative;
  overflow: hidden; /* Prevents unexpected micro-overflow creating phantom blank pages */
  box-sizing: border-box;
  page-break-after: always;
  break-after: page;
}

.page:last-child {
  page-break-after: auto;
  break-after: auto;
}

/* Prevent unwanted breaks inside components */
.card, .module-item, .cert-badge, .partner-card {
  break-inside: avoid;
  page-break-inside: avoid;
}
```

---

## 2. Playwright PDF Generation Protocol

When invoking Playwright to render a PDF, **never leave export options to chance**:

```javascript
import { chromium } from 'playwright';

export async function renderPdf(url, outputPath) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Set precise A4 viewport in 96 DPI screen pixels (794px x 1123px) or 300 DPI equivalent
  await page.setViewportSize({ width: 1240, height: 1754 });

  // Navigate and wait for full hydration
  await page.goto(url, { waitUntil: 'networkidle' });

  // Wait for all web fonts to load completely
  await page.evaluate(() => document.fonts.ready);

  // Wait for all images and SVGs to decode
  await page.evaluate(async () => {
    const images = Array.from(document.querySelectorAll('img'));
    await Promise.all(
      images.map(img => img.complete ? Promise.resolve() : new Promise(res => { img.onload = res; img.onerror = res; }))
    );
  });

  // Generate the PDF
  await page.pdf({
    path: outputPath,
    format: 'A4',
    landscape: false,
    printBackground: true,       // CRITICAL: Renders all background colors, gradients, and images
    preferCSSPageSize: true,     // CRITICAL: Respects @page size declared in CSS (210mm x 297mm)
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  await browser.close();
}
```

---

## 3. Common Failure Modes & Prevention

| Symptom | Cause | Solution |
|---|---|---|
| **5 Pages generated instead of 4** | Sub-pixel height overflow (`297.2mm`) | Add `overflow: hidden; max-height: 297mm;` to each `.page` container. |
| **Missing backgrounds / blank headers** | `printBackground: false` | Explicitly enforce `printBackground: true` in Playwright and `-webkit-print-color-adjust: exact`. |
| **Flashes of unstyled fonts (FOUT)** | Playwright prints before font load | Add `await page.evaluate(() => document.fonts.ready)`. |
| **Blurry or missing logo icons** | Asynchronous image loading | Await `img.complete` decoding before calling `page.pdf()`. |
| **Content pushed to wrong page** | Automatic browser pagination | Explicitly assign content blocks to Page 1, 2, 3, or 4 wrapper elements. |
