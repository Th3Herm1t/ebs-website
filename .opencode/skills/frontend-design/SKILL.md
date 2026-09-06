---
name: frontend-design
description: Principles for typography, composition, color, visual hierarchy, and deliberate design decisions applied to static print layouts (A4 brochures). Disregards web animations and interactions in favor of print-perfect aesthetics.
---

# Frontend Design for Static Print Layouts

This skill guides visual direction, typography, hierarchy, and composition for high-end static print publications—specifically **4-page A4 marketing brochures**.

---

## 1. Core Print Philosophy

Unlike responsive web applications, print design is defined by fixed physical boundaries, precise geometric coordinates, optical balance, and tangible typography.

- **No web animations, transitions, or hover states**: Everything must look stunning, intentional, and fully resolved at rest.
- **Physical page dimensions**: A4 format is strictly `210mm × 297mm` (aspect ratio ~1:1.414).
- **Ink & contrast awareness**: Maintain high contrast between typography and backgrounds. Avoid muddy contrast or illegible colored text over low-contrast fills.
- **Intentional whitespace**: Whitespace in print is an active structural element, not empty space. Group related items tightly and give major sections room to breathe.

---

## 2. Typography & Typographic Scale

Typography sets the editorial tone of the institution. Use modern, highly legible sans-serif / geometric typefaces (e.g., *Inter*, *Outfit*, *Plus Jakarta Sans*, *Montserrat*, *Cabinet Grotesk*).

### Typographic Hierarchy (A4 Scale)

| Level | Role | Size Guide (pt / mm) | Weight | Line Height |
|---|---|---|---|---|
| **Cover Display Title** | Hero Degree / Program Name | 28pt – 36pt (10 – 13mm) | Bold / Black (800–900) | 1.05 – 1.15 |
| **Section Heading (H2)** | Major Themes / Modules | 14pt – 18pt (5 – 6.5mm) | Bold (700) | 1.2 – 1.25 |
| **Card / Group Title (H3)** | Module / Pathway Title | 10pt – 12pt (3.5 – 4.2mm) | SemiBold (600) | 1.25 – 1.3 |
| **Body Copy** | Descriptive text & paragraphs | 8.5pt – 9.5pt (3.0 – 3.4mm) | Regular / Medium (400–500) | 1.35 – 1.45 |
| **Badges & Metadata** | Labels, durations, credits | 7pt – 8pt (2.5 – 2.8mm) | SemiBold / Bold (600–700) | 1.1 – 1.2 |
| **Footer & Disclaimers** | Legal, accreditation, microcopy | 6.5pt – 7.5pt (2.3 – 2.6mm) | Regular (400) | 1.2 |

### Typographic Rules for Print
1. **Never squeeze text below 6.5pt**: Content must remain effortlessly readable by human eyes when printed at 100% scale.
2. **Control line lengths**: Optimal paragraph line length is 45–75 characters. Multi-column layouts (2 or 3 columns) prevent excessively wide text blocks.
3. **No orphan words**: Avoid single-word dangling lines at the end of paragraphs (`text-wrap: pretty` or non-breaking spaces before final words).
4. **Standardize punctuation**: Use proper typographical quotes (`« »` or `“ ”`), real apostrophes (`’`), and em-dashes (`—`).

---

## 3. Composition, Grids & Layout Structure

### The 12-Column Print Grid
Use a modular 12-column grid system with consistent gutters:
- **Outer Page Margins**: `12mm` to `16mm` on all sides (keep vital content inside the safe printable zone).
- **Column Gutters**: `4mm` to `6mm`.
- **Vertical Rhythm**: Base baseline grid on `4mm` or `8pt` increments for consistent vertical alignment across columns.

### Visual Anchors & Density Distribution
- **Page 1 (Cover)**: Strong hero identity, institution branding, degree level (Bac+3 / Bac+5), powerful positioning statement, and 4–5 core thematic pills/badges.
- **Page 2 (Curriculum & Skills)**: Clear structured blocks (Tronc commun + Options or 5 Competency Blocks), highlighted certifications ribbon, and career outcomes.
- **Page 3 (Pedagogy, Value & Deep-Dive)**: Differentiators, why choose EBS, practical projects, AI integration banner, and transversal soft skills.
- **Page 4 (International, Partners & Back Cover)**: International pathway map/cards, university partner logos, corporate partner network, contacts, and high-resolution QR code.

---

## 4. Color Palette & Brand Consistency

For Espima Business School (EBS), use rich, premium color palettes tailored to faculty and degree discipline:

- **EBS Core Identity**:
  - Deep Navy / Obsidian: `#0B192C` / `#1E3E62` (Authority, academic excellence)
  - Crimson / Accent Red: `#C00000` / `#E02424` (Energy, innovation)
  - Pure White & Off-Whites: `#FFFFFF`, `#F8FAFC`, `#F1F5F9`
- **Program Accent Colors**:
  - *Finance & Ingénierie Financière*: Emerald / Cyan Teal (`#00897B` / `#00BCD4`)
  - *Management & Startups*: Royal Blue / Electric Indigo (`#2196F3` / `#5E35B1`)
  - *Marketing & CRM*: Hot Magenta / Rose (`#E91E8C` / `#E91E63`)
  - *Informatique & Cybersécurité*: Deep Purple / Amber Orange (`#9C27B0` / `#FF9800`)

---

## 5. Visual Asset Treatment

- **Logos**: Maintain aspect ratios, use vector SVGs or high-res transparent PNGs, and ensure uniform visual optical weighting.
- **Cards & Badges**: Use subtle borders (`1px solid rgba(0,0,0,0.08)`), crisp border radii (`6px` to `10px`), and soft background fills (`#F8FAFC`).
- **Icons**: Simple, uniform stroke weight (1.5px – 2px) from a cohesive icon set (Lucide / Tabler).
