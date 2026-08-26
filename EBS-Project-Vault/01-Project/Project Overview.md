---
tags: [project, overview]
created: 2026-06-04
---

# 📊 Project Overview

## Client Information

| Field | Details |
|---|---|
| **Client** | Espima Business School (EBS) |
| **Website** | [ebs.tn](https://ebs.tn) |
| **Industry** | Private Higher Education — Tunis, Tunisia |
| **Contact** | Email: contact@ebs.tn |
| **Phone** | +216 29 58 28 35 / +216 71 18 26 25 |

## About EBS

Espima Business School is a private university in Tunis, Tunisia, offering:


## Project Scope

Full website rebuild, migrating from the current WordPress + Elementor stack to a modern **Next.js** application.

### Current Website Analysis
- **CMS:** WordPress with Elementor page builder
- **Language:** French (FR), with TranslatePress multilingual support
- **SEO:** Yoast SEO Premium
- **Forms:** WPForms
- **Analytics:** Google Tag Manager, Google Site Kit
- **CRM:** Zoho CRM integration
- **Performance:** WP Rocket caching
- **Chat:** HubSpot chat widget + WhatsApp (qlwapp)

### New Website Stack
- **Framework:** Next.js 16.2.6
- **UI Library:** shadcn/ui v4.7.0
- **Styling:** TailwindCSS 4
- **Animation:** Motion (Framer Motion) v12.38
- **Carousel:** Swiper v12.1.4
- **Icons:** Lucide React
- **TypeScript:** v5
- **Base Template:** Penn Education (HTML template → converted to Next.js)

## Project Methodology

The client sends modification batches via Word documents (.docx) with annotated screenshots and instructions. Each batch describes specific section modifications to the homepage and other pages.

### Template Sources
The website is a compilation of multiple templates:
1. **Penn** (Primary) — Education/Online Course HTML template
2. **Educa** — Landing page template
3. **Optima** — Psychology center template
4. **Evnia** — Event/conference template
5. **Lawyer** — Law firm template
6. **Profit** — Business template

## Deliverables
1. Fully functional Next.js website matching client requirements
2. Responsive design (mobile, tablet, desktop)
3. SEO-optimized pages
4. All pages from current website rebuilt
5. Docker deployment setup (already configured)

## Links
- [[../02-Requirements/Client Requirements Overview|Client Requirements]]
- [[../03-Architecture/Tech Stack & Architecture|Architecture]]
- [[../05-Templates/Templates Overview|Templates Reference]]
