---
tags: [plan, refinement, production, batch-2]
created: 2026-06-09
status: active
---

# 🏭 Refinement Sprint — Production-Grade Pages

> **Phase:** All 47 new pages have been scaffolded. Now we refine each one to production quality.
> **Method:** Architect → Engineer → Build (one page or template per iteration)
> **Principle:** No page is left too simple. Every page justifies its existence.

---

## 📊 Current State

| Category | Pages | Status |
|---|---|---|
| Program LPs | 9 | Scaffolded — templated, data-driven, functional but basic |
| Program Overviews | 2 | Scaffolded — ShowcaseHero + cards, functional but basic |
| Partner Detail | 15 | Scaffolded — templated, data-driven, functional but basic |
| Cert Provider | 10 | Scaffolded — templated, data-driven, functional but basic |
| Certifications Overview | 1 | Scaffolded — basic grid of cards |
| Institutional | 6 | Scaffolded — standalone, some placeholder content |
| International | 2 | Scaffolded — functional but basic |
| IA & Certifications | 1 | Scaffolded — data-driven, functional |
| Refactored | 3 | Blog, Tarifs, Entreprises — basic |
| **Total** | **49** | |

---

## 🎯 Quality Bar (What "Production-Grade" Means)

Every page must pass this checklist before being marked done:

### Visual
- [ ] Responsive at all breakpoints (mobile → 4K)
- [ ] Motion/animation where it adds value (no gratuitous movement)
- [ ] Proper spacing rhythm (section-padding, consistent gaps)
- [ ] No layout shift during load
- [ ] Typography hierarchy is clear and on-brand

### Content
- [ ] All text matches the client document exactly
- [ ] No placeholder or Lorem Ipsum text
- [ ] CTAs are context-aware and conversion-optimized
- [ ] SEO metadata (title, description) set per page

### Technical
- [ ] No runtime errors in console
- [ ] No hydration mismatches
- [ ] All imports are tree-shakeable
- [ ] Images use next/image with proper sizing
- [ ] Forms have validation and success states
- [ ] Loading states handled (skeletons or suspense)

### UX
- [ ] Breadcrumbs present on all inner pages
- [ ] Sticky CTA/form works correctly on scroll
- [ ] Mobile menu works with all new routes
- [ ] 404 handling for invalid slugs
- [ ] Keyboard navigation works

---

## 🔁 Refinement Order (Priority)

### Batch A — Program Landing Pages (Template A)
**Why first:** Highest traffic, conversion-focused, sets the standard for all other pages.

| Page | URL | Complexity |
|---|---|---|
| A1 | `/licences/management` | Medium |
| A2 | `/licences/marketing` | Medium |
| A3 | `/licences/finance` | Medium |
| A4 | `/licences/informatique-standard` | Medium |
| A5 | `/licences/informatique-ia` | Medium |
| A6 | `/licences/cybersecurite` | Medium |
| A7 | `/masters/crm` | Medium |
| A8 | `/masters/startups` | Medium |
| A9 | `/masters/ingenierie-financiere` | Medium |

**Refinement goals:**
- ProgramLPHero: Full-width hero with gradient bg, animated stats, floating form
- StickyForm: Real validation, WhatsApp integration, thank-you state
- ModulesAccordion: Proper expand/collapse with description, smooth animation
- CertificationsTable: Show all certs with pagination, provider logos
- IACompetences: Visual upgrade, progress indicators
- InternationalPerspectives: Card-based layout with flag icons
- DebouchesGrid: Hover cards with salary ranges (if available)
- CtaSection: Program-specific color, countdown timer for Early Bird

### Batch B — Program Overview Pages (Template D)
**Why second:** Hub pages that funnel into LPs.

| Page | URL |
|---|---|
| B1 | `/licences` |
| B2 | `/masters` |

**Refinement goals:**
- Overview hero: Animated stat counters, parallax cards
- ProgramCard: Rich preview with module count, duration, cert count
- Add comparison table (Licence vs Master)
- Add testimonial carousel
- Add FAQ accordion

### Batch C — Partner Detail Pages (Template B)
**Why third:** 15 pages, but simple structure. Template efficiency.

| Slug | Partner |
|---|---|
| C1 | uqat |
| C2 | em-normandie |
| C3 | psb |
| C4 | idrac |
| C5 | ifag |
| C6 | igefi |
| C7 | eklore |
| C8 | epitech |
| C9 | epsi |
| C10 | excelia |
| C11 | figs |
| C12 | link-university |
| C13 | supdecom |
| C14 | gutech |
| C15 | redsup |

**Refinement goals:**
- PartnerHero: University logo, country flag, type badge
- PartnerPrograms: Interactive table with expandable rows
- PartnerAdvantages: Icon grid with hover descriptions
- PartnerDebouches: Career path cards
- Add "Related Programmes at EBS" cross-link section

### Batch D — Certification Provider Pages (Template C)
**Why fourth:** 10 pages, template efficiency.

| Slug | Provider |
|---|---|
| D1 | google |
| D2 | ibm |
| D3 | harvard |
| D4 | cisco |
| D5 | bloomberg |
| D6 | fortinet |
| D7 | deeplearning-ai |
| D8 | hubspot |
| D9 | semrush |
| D10 | autres-fournisseurs |

**Refinement goals:**
- CertProviderHero: Provider logo, brand color
- CertCategorySection: Animated count of certs per category
- Add "Which EBS programmes include these?" cross-reference
- Add CTA to programme pages

### Batch E — Institutional Pages (Standalone)
**Why fifth:** Unique layouts, but lower traffic.

| Page | URL |
|---|---|
| E1 | `/qui-sommes-nous` |
| E2 | `/vision-mission-valeurs` |
| E3 | `/mot-du-president` |
| E4 | `/corps-enseignant` |
| E5 | `/alumni` |
| E6 | `/campus` |

### Batch F — International Pages
| Page | URL |
|---|---|
| F1 | `/parcours-internationaux` |
| F2 | `/etudier-a-letranger` |

### Batch G — Signature Pages
| Page | URL |
|---|---|
| G1 | `/ia-et-certifications` |
| G2 | `/certifications` |
| G3 | `/blog` |
| G4 | `/tarifs` |
| G5 | `/entreprises-partenaires` |

---

## 🏗️ Architecture Notes Per Template

### Template A (Program LP) — Shared Components to Upgrade

```
src/components/program/
├── ProgramLPHero.tsx          ← Full redesign needed
├── ProgramPresentation.tsx    ← Add surtitre + stats row
├── PublicCible.tsx            ← Add icons per audience type
├── ModulesAccordion.tsx       ← Full redesign (true accordion)
├── CertificationsTable.tsx    ← Add provider logos, pagination
├── IACompetences.tsx          ← Visual upgrade
├── InternationalPerspectives.tsx ← Card layout
└── DebouchesGrid.tsx          ← Hover cards
```

### Template B (Partner Detail) — Shared Components to Upgrade

```
src/components/partner/
├── PartnerHero.tsx            ← Add logo, flag, type badge
├── PartnerPresentation.tsx    ← Add stats sidebar
├── PartnerPrograms.tsx        ← Interactive table
├── PartnerEligibility.tsx     ← Timeline format
├── PartnerAdvantages.tsx      ← Icon grid
└── PartnerDebouches.tsx       ← Career path cards
```

### Template C (Cert Provider) — Shared Components to Upgrade

```
src/components/certifications/
├── CertProviderHero.tsx       ← Add brand color, provider logo
├── CertProviderIntro.tsx      ← Two-column layout
└── CertCategorySection.tsx    ← Animated cert count
```

---

## 🚫 Pages NOT in Refinement Scope

The following existing template pages will be **removed** in a cleanup PR:
- `/about` (replaced by `/qui-sommes-nous`)
- `/courses`, `/course-2`, `/course-3`, `/course-sidebar`, `/course-single`
- `/shop`, `/shop-single`, `/cart`, `/checkout`
- `/index-2`, `/index-3`
- `/team`, `/team-details`
- `/events`, `/event-single` (to be rebuilt later if needed)
- `/blog-single`
- `/login`, `/register`, `/thank-you` (keep for future)

---

## 📝 Iteration Log

| # | Page/Template | Date Started | Date Completed | Notes |
|---|---|---|---|---|
| - | - | - | - | - |
