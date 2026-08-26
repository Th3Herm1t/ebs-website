---
tags: [tasks, dashboard]
created: 2026-06-04
---

# 📝 Tasks Dashboard

## Batch 1 — Homepage Modifications

### 🔴 Priority: High (Structural Changes)

- [ ] #B1-01 **Hero Section Redesign**
  - [ ] Update hero copy (La Business School Tournée vers Le Futur)
  - [ ] Add Educa template dropdown element
  - [ ] Position dropdown beside hero image
  - [ ] Responsive layout adjustments
  - **Component:** `HeroSection.tsx`
  - **Template ref:** Educa

- [ ] #B1-02 **Navigation Overhaul**
  - [ ] Change menu items to: L'université – Licences – Masters – International – Blog – Contact
  - [ ] Set white background
  - [ ] Remove or restructure top secondary nav
  - **Components:** `Header.tsx`, `TopBar.tsx`

- [ ] #B1-03 **News Slider (Optima Style)**
  - [ ] Create photo-based slider (different photo per slide)
  - [ ] 3 news cards: NOUVEAU (AI), EXCLUSIF (Certifications), ACTUALITÉ (Inscriptions)
  - [ ] Add all text content
  - **Component:** `NewsCardsSection.tsx`
  - **Template ref:** Optima

### 🟡 Priority: Medium (Content & Style Updates)

- [ ] #B1-04 **Services Section Colors**
  - [ ] Apply color scheme: #264653, #2a9d8f, #e9c46a
  - [ ] Match Optima template styling
  - **Component:** `OptimaServicesSection.tsx`

- [ ] #B1-05 **Top Contact Bar + Social Media**
  - [ ] Add social media icon buttons
  - [ ] Ensure contact info is present
  - **Component:** `TopBar.tsx`

- [ ] #B1-06 **Value Proposition Section**
  - [ ] Update content: "Rejoignez la Business School..."
  - [ ] Add "L'IA comme outil différenciateur" subsection
  - [ ] Add "Des compétences certifiées" subsection
  - **Component:** `EbsBrandSection.tsx`

- [ ] #B1-07 **Statistics Counters**
  - [ ] Update to: 150+, 7, 10+, 93%
  - [ ] Update labels
  - **Component:** `CounterSection.tsx`

- [ ] #B1-08 **Partners Sections**
  - [ ] Economic partners logos section
  - [ ] Academic partners logos section
  - [ ] May need to create separate components or expand `PartnerLogos.tsx`
  - **Component:** `PartnerLogos.tsx`

### 🟢 Priority: Low (Content Updates)

- [ ] #B1-09 **Programs Section Split**
  - [ ] Separate Licences and Masters into two sections
  - **Component:** `EbsProgramsSection.tsx`

- [ ] #B1-10 **EBS Universe Section**
  - [ ] Update "Pourquoi choisir notre Université" content
  - **Component:** `EbsUniverseSection.tsx`

- [ ] #B1-11 **Newsletter Section**
  - [ ] Update copy
  - **Component:** `NewsletterSection.tsx`

- [ ] #B1-12 **Certifications Section**
  - [ ] Update certification logos
  - **Component:** `EbsCertificationsSection.tsx`

- [ ] #B1-13 **Events Section**
  - [ ] Style updates
  - **Component:** `EventsSection.tsx`

- [ ] #B1-14 **Testimonials Section**
  - [ ] Style updates
  - **Component:** `TestimonialsSection.tsx`

- [ ] #B1-15 **Blog Section**
  - [ ] Style updates
  - **Component:** `BlogSection.tsx`

- [ ] #B1-16 **Footer Update**
  - [ ] Update links and content
  - **Component:** `Footer.tsx`

---

## Batch 2 — Full Website Content (50 pages)

> **Received:** 08/06/2026 | **Overview:** [[../02-Requirements/Batch 2 - Full Website Content]]

### Phase 1 — Shared Components (Foundation)

- [ ] #B2-01 **ProgramHero Component**
  - 60/40 layout with sticky form, badge, stats badge, CTAs
  - WhatsApp floating link (`+216 29 58 28 35`)
  - Used by: 8 LPs + International LP

- [ ] #B2-02 **StickyPreInscriptionForm Component**
  - Prénom · Nom · Email · Téléphone · Niveau · Message
  - "Réponse sous 24h" + WhatsApp CTA
  - Used by: 9 campaign pages

- [ ] #B2-03 **ModulesAccordion Component**
  - Expandable program module list with icons
  - Used by: 8 LPs

- [ ] #B2-04 **CertificationsTable Component**
  - Sortable table with provider logos, program filter tabs
  - Used by: 8 LPs + 1 Certs overview + 1 IA page

- [ ] #B2-05 **InternationalPerspectives Component**
  - Partner university pathways table per programme
  - Used by: 8 LPs

- [ ] #B2-06 **DebouchesGrid Component**
  - Career outcomes card grid
  - Used by: 8 LPs

- [ ] #B2-07 **PartnerPageLayout Component**
  - Shared layout: Présentation · Programmes · Éligibilité · Avantages · Débouchés · CTA
  - Used by: 14 partner pages

- [ ] #B2-08 **CertProviderLayout Component**
  - Shared layout: Présentation · Pourquoi · Liste certs par catégorie · CTA
  - Used by: 10 cert provider pages

- [ ] #B2-09 **Route structure + i18n setup**
  - Define all 47 new routes in Next.js App Router
  - Update middleware for new paths
  - Create page shells

### Phase 2 — Institutional Pages (8 pages)

- [ ] #B2-10 **Qui sommes-nous** (`/qui-sommes-nous`)
- [ ] #B2-11 **Vision, Mission & Valeurs** (`/vision-mission-valeurs`)
- [ ] #B2-12 **Mot du Président** (`/mot-du-president`)
- [ ] #B2-13 **Corps Enseignant** (`/corps-enseignant`)
- [ ] #B2-14 **Alumni EBS** (`/alumni`)
- [ ] #B2-15 **Campus** (`/campus`)
- [ ] #B2-16 **FAQ** (`/faq`)
- [ ] #B2-17 **Contact** (`/contact`)

### Phase 3 — Program Overviews (2 pages)

- [ ] #B2-18 **Licences Overview** (`/licences`)
- [ ] #B2-19 **Masters Overview** (`/masters`)

### Phase 4 — Program Landing Pages (8 pages)

- [ ] #B2-20 **LP Licence Management** (`/licences/management`)
- [ ] #B2-21 **LP Licence Marketing** (`/licences/marketing`)
- [ ] #B2-22 **LP Licence Finance** (`/licences/finance`)
- [ ] #B2-23 **LP Licence Info Standard** (`/licences/informatique-standard`)
- [ ] #B2-24 **LP Licence Info – IA** (`/licences/informatique-ia`)
- [ ] #B2-25 **LP Licence Info – Cyber** (`/licences/cybersecurite`)
- [ ] #B2-26 **LP Master CRM Digital** (`/masters/crm`)
- [ ] #B2-27 **LP Master Startups** (`/masters/startups`)
- [ ] #B2-28 **LP Master Ingénierie Fin.** (`/masters/ingenierie-financiere`)

### Phase 5 — International (16 pages)

- [ ] #B2-29 **International Overview** (`/parcours-internationaux`)
- [ ] #B2-30 **LP International** (`/etudier-a-letranger`)
- [ ] #B2-31 → B2-44 **14 Partner Pages** (`/partenaires/*`)

### Phase 6 — Certifications (12 pages)

- [ ] #B2-45 **Certifications Overview** (`/certifications`)
- [ ] #B2-46 → B2-55 **10 Provider Pages** (`/certifications/*`)

### Phase 7 — Signature Pages (4 pages)

- [ ] #B2-56 **IA & Certifications** (`/ia-et-certifications`)
- [ ] #B2-57 **Entreprises Partenaires** (`/entreprises-partenaires`) — Refonte
- [ ] #B2-58 **Blog** (`/blog`) — Restructuration
- [ ] #B2-59 **Tarifs** (`/tarifs`) — Refonte


## Backlog (Future Batches)

- [ ] Batch 3 — TBD (awaiting client)
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Multi-language support (FR/EN/AR)
- [ ] Form integrations (Zoho CRM replacement)
- [ ] Analytics setup (GTM, GA4)
- [ ] Chat widget integration
- [ ] Final deployment & DNS cutover

---

## Completed

- [x] Project setup (Next.js + shadcn + Tailwind)
- [x] Penn template conversion to Next.js
- [x] Initial component scaffolding (46 section components)
- [x] Docker deployment config
- [x] Batch 1 analysis & documentation
