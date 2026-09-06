# EBS Project Agent Instructions & Production Guidelines

Guidelines for **Antigravity** and **OpenCode** agents operating in this workspace.

---

## 1. Project Context & Objectives

This workspace contains two interconnected core initiatives for **Espima Business School (EBS)**:
1. **EBS Web Platform** (`ebs-website`): Next.js 15 bilingual web platform.
2. **EBS 2026 Brochure Production** (`brochures/`): Print-perfect 4-page A4 marketing brochures for all 8 degree programmes (4 Licences, 4 Masters).

---

## 2. The 4 Production Skills

Always consult and adhere to the 4 dedicated skills:

1. **`frontend-design`** (`.agents/skills/frontend-design/` or `.opencode/skills/frontend-design/`):
   - Typography, optical hierarchy, multi-column print grid, contrast ratios, and deliberate composition.
   - Tailored to static A4 print layouts (`210mm × 297mm`). Disregard web animations.
2. **`pdf-forge`** (`.agents/skills/pdf-forge/` or `.opencode/skills/pdf-forge/`):
   - Strict CSS `@page { size: A4 portrait; margin: 0; }` configuration.
   - Physical 4-page container pattern (`.page` wrappers with `overflow: hidden; max-height: 297mm;`).
   - Playwright PDF export rules: `printBackground: true`, `preferCSSPageSize: true`, awaiting `document.fonts.ready` and image decoding.
3. **`playwright-cli`** (`.agents/skills/playwright-cli/` or `.opencode/skills/playwright-cli/`):
   - Headless browser verification, element debugging, and automated high-res screenshot capture.
4. **`ebs-brochure-production`** (`.agents/skills/ebs-brochure-production/` or `.opencode/skills/ebs-brochure-production/`):
   - Production workflow, zero-content-loss verification, resolved review decisions, and mandatory visual inspection.

---

## 3. Strict Quality Gates (Non-Negotiable)

- **Strict 4-Page A4 Limit**: Every brochure must render to **exactly 4 pages**.
- **Zero Content Loss**: Every module, certification, career outcome, and pathway condition in `brochures/ebs-brochure-content/json/<programme>.json` must be present.
- **Readable Typography**: Body text must never be squeezed below `6.5pt` (`2.3mm`).
- **High-Res Original Assets**: Use vector SVGs and high-res transparent PNGs from `/images/`—never screenshot crops.
- **Mandatory Visual Inspection**: After generating previews, the agent must **open and visually inspect every page PNG**, not merely check exit codes.
- **Use Resolved Decisions**: Follow `brochures/ebs-brochure-content/REVIEW.md` (phone `+216 71 18 26 25`, SCRUMstudy for SAC™, PMI for Kickoff, MSI for Lean Six Sigma, Cayon for enterprise partner, resolved QR code routes).

---

## 4. Production CLI Commands

In the brochure renderer toolchain (`brochures/ebs-brochure-renderer/`):

```bash
# 1. Type-check & validate data integrity
npm run check

# 2. Render print-ready PDF
npm run render -- <programme-id>

# 3. Generate high-res page PNG previews & contact sheet
npm run preview -- <programme-id>

# 4. Run automated layout, overflow, and content audit
npm run audit -- <programme-id>
```
