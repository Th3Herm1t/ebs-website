---
name: ebs-brochure-production
description: Production workflow, editorial rules, and quality gates for the eight EBS 2026 4-page A4 brochures. Governs content ingestion, visual inspection, PDF rendering, asset resolution, and auditing.
---

# EBS Brochure Production Workflow & Quality Gates

This skill defines the authoritative procedure for producing, rendering, inspecting, and auditing the eight **4-page A4 brochures (2026 edition)** for **Espima Business School (EBS)**.

---

## 1. Absolute Quality Rules (Non-Negotiable)

1. **Strict 4-Page A4 Format**: Each brochure must render to **exactly 4 A4 pages** (`210mm × 297mm`). 3 pages or 5 pages is an immediate build failure.
2. **Zero Content Loss**: Every single curriculum module, certification credential, career outcome, and international pathway condition in `ebs-brochure-content/json/<programme>.json` must be present.
3. **No Unreadable Squeezing**: Text size must never fall below `6.5pt` (`2.3mm`). If content is tight, adjust margins, padding, or layout grid—do not shrink fonts into illegibility.
4. **Use Original High-Resolution Assets**:
   - Institutional and partner logos must come from the official vector/asset library (`/images/partenaires/`, `/images/ebs-tn/`), NOT cropped evidence thumbnails.
   - Master back covers must embed verified high-resolution QR codes linking to their resolved URLs.
5. **Mandatory Visual Inspection**: The agent must **render and visually view every single generated page image**, not merely rely on code compilation or contact sheets.
6. **Follow Resolved Review Decisions**: Incorporate the verified resolutions in `REVIEW.md` (official phone `+216 71 18 26 25`, SCRUMstudy for SAC™, PMI for Kickoff, MSI for Lean Six Sigma, Cayon for enterprise partner).

---

## 2. The 8 Programme Profiles

| Programme ID | Level | Pedagogical Structure | Key Elements to Verify |
|---|---|---|---|
| `licence-finance` | Bac+3 / 3 ans | 10 key modules over 6 semesters | 11 certifications (Bloomberg, Google, PwC, Citi, JPMorgan), 8 careers, Link/FR/CA pathways. |
| `licence-informatique` | Bac+3 / 3 ans | 9 common core + 2 options (IA vs Cyber) | 10 certifications, 8 AI themes, 8 Cyber themes, EPITECH/EPSI/UQAT pathways. |
| `licence-management` | Bac+3 / 3 ans | 10 key modules over 6 semesters | 9 certifications (SAC™ SCRUMstudy, PMI Kickoff, Google), 7 careers, international pathways. |
| `licence-marketing` | Bac+3 / 3 ans | 10 key modules over 6 semesters | 9 certifications, 7 careers, SEO/SEA, HubSpot, Social Media, international pathways. |
| `master-crm-transformation-digitale` | Bac+5 / 2 ans | 5 Competency Blocks over 2 years | 8 platforms/certifications (HubSpot, n8n, Meta, IBM watsonx), 10 careers, Cayon partner, QR code. |
| `master-ingenierie-financiere` | Bac+5 / 2 ans | 5 Competency Blocks over 2 years (4 sem.) | 20+ certifications banner, Bloomberg, Goldman Sachs, Citi, FinTech modules, QR code. |
| `master-management-projets` | Bac+5 / 2 ans | 4 explicit semesters (S1 to S4) | Detailed semester course lists, SCRUMstudy, MSI White Belt, 5 careers, QR code. |
| `master-marketing-digital-ia` | Bac+5 / 2 ans | 5 Competency Blocks over 2 years (4 sem.) | 20+ certifications banner, GenAI & Data marketing, Google Ads, Meta, 10 careers, QR code. |

---

## 3. Four Core Project Commands

The production toolchain exposes 4 standardized CLI commands:

```bash
# 1. Type-check code and validate brochure data models
npm run check

# 2. Render high-resolution print PDF via Playwright
npm run render -- licence-informatique

# 3. Generate individual page PNG previews + combined contact sheet
npm run preview -- licence-informatique

# 4. Run automated layout and content audit
npm run audit -- licence-informatique
```

---

## 4. Visual Inspection Protocol for Agents

After running `npm run preview -- <programme-id>`:
1. Open and inspect `dist/previews/<programme-id>/page-1.png`. Check title typography, badge alignment, and cover clarity.
2. Open and inspect `dist/previews/<programme-id>/page-2.png`. Check curriculum grid, module text readability, and certification badge spacing.
3. Open and inspect `dist/previews/<programme-id>/page-3.png`. Check pedagogy pillars, AI banner contrast, and soft skills section.
4. Open and inspect `dist/previews/<programme-id>/page-4.png`. Check international pathway clarity, university partner logo grid, corporate partners, contact block, and QR code placement.
5. If any flaw is observed (overflow, awkward line wrap, clipped logo), adjust the CSS/component layout and re-run `render` + `preview` until perfect.
