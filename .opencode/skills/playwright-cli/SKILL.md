---
name: playwright-cli
description: Playwright CLI and browser verification skill. Enables interactive preview inspection, DOM evaluation, automated screenshot capture, and visual validation of rendered print pages without high-overhead MCP dependencies.
---

# Playwright CLI & Visual Inspection

This skill guides running Playwright directly from the command line and Node.js runtime to open previews, evaluate elements, capture page-by-page screenshots, and verify visual fidelity.

---

## 1. Why Playwright CLI Mode?

Using direct Playwright CLI scripts provides:
1. **Zero schema bloat**: No massive accessibility trees or verbose JSON tool schemas consuming LLM context.
2. **Speed & Reliability**: Headless Chromium instance runs locally and outputs crisp, high-resolution PNG previews.
3. **Direct visual inspection**: Enables generating high-res page crops and contact sheets that the agent inspects directly using image-viewing tools.

---

## 2. Common Playwright CLI Patterns

### Opening an Interactive Browser Session
```bash
npx playwright open http://localhost:5173/preview/licence-finance
```

### Capturing Full-Page & Specific Section Screenshots
```bash
# Capture full page screenshot
npx playwright screenshot --viewport-size="1240,1754" --wait-for-timeout=1500 http://localhost:5173/preview/licence-finance output/page-01.png
```

### Scripted Programmatic Evaluation
```javascript
import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1240, height: 1754 } });
  
  await page.goto('http://localhost:5173/preview/licence-finance', { waitUntil: 'networkidle' });
  
  // Check for any broken images
  const brokenImages = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img'))
      .filter(img => !img.complete || img.naturalWidth === 0)
      .map(img => img.src);
  });
  
  if (brokenImages.length > 0) {
    console.error('Broken images detected:', brokenImages);
  }

  // Screenshot individual pages
  const pages = await page.$$('.page');
  for (let i = 0; i < pages.length; i++) {
    await pages[i].screenshot({ path: `dist/previews/page-${i + 1}.png` });
  }

  await browser.close();
})();
```

---

## 3. Visual Verification Checklist

When inspecting generated screenshots:
1. **Logo Rendering**: Verify partner logos are sharp, properly aligned, and not clipped or distorted.
2. **Badge Padding**: Check that certification badges have at least `4px` padding on all sides and text does not touch borders.
3. **Contrast**: Ensure dark text on light cards (`#1E3E62` on `#FFFFFF` / `#F8FAFC`) has strong contrast ratio (≥ 7:1).
4. **Header Baseline**: Ensure section titles align horizontally across multiple columns.
5. **No Text Truncation**: Verify no `...` or hidden overflow text in curriculum cards.
