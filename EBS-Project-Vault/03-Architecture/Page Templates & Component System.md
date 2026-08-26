---
tags: [architecture, templates, components, batch-2]
created: 2026-06-09
status: planning
---

# 🧱 Page Templates & Component System — Batch 2

> **Principle:** Every page belongs to a template. Every template is powered by reusable shadcn/ui components. No one-off pages.

---

## 📊 Page Type Breakdown (49 pages, 4 templates + 11 standalone)

| Template | Pages | Reusability |
|---|---|---|
| **A — Program LP** | 9 | `Licences/[slug]` (×6) + `Masters/[slug]` (×3) |
| **B — Partner Detail** | 15 | `Partenaires/[slug]` |
| **C — Cert Provider** | 10 | `Certifications/[slug]` |
| **D — Program Overview** | 2 | `Licences` + `Masters` |
| **E — International** | 2 | Overview + LP campagne |
| **Standalone** | 11 | Unique layouts, share SectionHeading/PageHero |

---

## 🎨 Design System Alignment

### Brand Tokens (from `globals.css` — DO NOT DEVIATE)

```css
--primary:            #2B8FAB    /* penn-green — main brand */
--primary-foreground: #ffffff
--secondary:          oklch(0.97 0 0)
--secondary-foreground: #232434  /* penn-navy — headings */
--muted-foreground:   #42474c    /* penn-body — paragraphs */
--border:             #ededed    /* penn-border */
--ring:               #2B8FAB
--radius:             0.625rem
```

### Fonts
- **Headings:** Mulish (via `--font-heading`)
- **Body:** Mulish (via `--font-sans`)
- **Sizing:** `text-penn-navy` for headings, `text-penn-body` for paragraphs

### Button System (extend existing shadcn Button)
```
variant: default  → bg-penn-green text-white (primary CTA)
variant: outline  → border-penn-green text-penn-green (secondary)
variant: ghost    → text-penn-navy hover:text-penn-green (text links)
variant: secondary → bg-penn-navy text-white (dark CTA)
size: sm / default / lg
```

### Programme Color Palette (data-driven, not CSS variables)
Used as props to components, applied via inline `style` or Tailwind arbitrary values:

| Programme | Color | Tailwind Usage |
|---|---|---|
| Management | `#2196F3` | `bg-[#2196F3]` `text-[#2196F3]` `border-[#2196F3]` |
| Marketing | `#E91E8C` | `bg-[#E91E8C]` `text-[#E91E8C]` |
| Finance | `#00BCD4` | `bg-[#00BCD4]` `text-[#00BCD4]` |
| Info-Standard | `#FF5722` | `bg-[#FF5722]` |
| Info-IA | `#9C27B0` | `bg-[#9C27B0]` |
| Cybersécurité | `#FF9800` | `bg-[#FF9800]` |
| Master-CRM | `#E91E63` | `bg-[#E91E63]` |
| Master-Startups | `#5E35B1` | `bg-[#5E35B1]` |
| Master-Ing.Fin | `#00897B` | `bg-[#00897B]` |

### 📐 Layout & Grid Centering Pattern
When rendering a grid of cards (e.g., programmes, partners, certifications, features, etc.), if the total number of items does not perfectly divide by the number of columns on a given screen size (leaving the last row incomplete), **always center the items on that last row**.

Instead of using a standard CSS Grid (`grid grid-cols-...`), use a flexbox layout with wrapping and centering:
```html
<div className="flex flex-wrap justify-center gap-6">
  {items.map((item) => (
    <div key={item.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)] flex flex-col">
      <Card />
    </div>
  ))}
</div>
```
*Width Calculation Formula:*
- For `N` columns with a gap `G` (e.g., `gap-6` = `24px`):
  - Width formula: `w-[calc((100% - (N - 1) * G) / N)]`
  - E.g., for 2 columns with `gap-6` (`24px`): `w-[calc(50%-12px)]`
  - E.g., for 3 columns with `gap-6` (`24px`): `w-[calc((100%-48px)/3)]`

### 🎨 Contrast Period Typography Accent (Punctuation Highlight)
To establish a premium, state-of-the-art micro-aesthetic and visual contrast, major page headings (typically H1 and H2 inside heroes or main call-to-action sections) ending in a trailing period (`.`) must style the period in a color that contrasts with the last word:
1. **Highlighted Last Word**: If the last word is in the brand accent color (teal `#2B8FAB`), the period `.` must remain outside of the accent span so it defaults to the standard title text color (e.g. white or dark navy).
   - *Example:* `L'université qui prépare <span className="text-[#2B8FAB]">à la vraie vie</span>.`
2. **Standard Last Word**: If the last word is in the standard title text color, the period `.` must be wrapped in a span with the brand accent color class `text-[#2B8FAB]`.
   - *Example:* `Notre réseau universitaire mondial<span className="text-[#2B8FAB]">.</span>`

---

## 🧩 Template A — Program Landing Page (×9 pages)

**Route:** `/licences/[slug]` and `/masters/[slug]`
**Data source:** Content files in `08-Content/Licences Landing Pages Content (FR).md` + `Masters Landing Pages Content (FR).md`

### Page Structure (top to bottom)

```
┌─────────────────────────────────┐
│ ProgramLPHero                   │  ← 60/40 grid: text left + StickyForm right
│   ├─ Badge (Licence/Master)     │     Gradient bg using programme color
│   ├─ H1 + Tagline               │
│   ├─ Pitch paragraph            │
│   ├─ Stats pill row             │
│   └─ CTA buttons                │
├─────────────────────────────────┤
│ ProgramPresentation             │  ← Surtitre + H2 + long text
├─────────────────────────────────┤
│ PublicCible                     │  ← Pill badges for target audience
├─────────────────────────────────┤
│ ModulesAccordion                │  ← Expandable module list with icons
├─────────────────────────────────┤
│ CertificationsTable             │  ← Sortable table + provider logos
├─────────────────────────────────┤
│ IACompetences                   │  ← SHARED — same on ALL 9 LPs
│   ├─ "★ IA Obligatoire" heading│
│   ├─ 6 core certs highlighted   │
│   └─ Link to /ia-et-certifications│
├─────────────────────────────────┤
│ InternationalPerspectives       │  ← Programme-specific partner table
├─────────────────────────────────┤
│ DebouchesGrid                   │  ← Career outcome pills
├─────────────────────────────────┤
│ CtaSection                      │  ← Full-width coloured CTA (program colour)
│   ├─ H2 + subtitle             │
│   ├─ Early Bird mention        │
│   └─ CTA button + WhatsApp     │
└─────────────────────────────────┘
```

### Component Props Interface

```typescript
interface ProgramLPData {
  slug: string;
  type: "licence" | "master";
  title: string;
  tagline: string;
  pitch: string;
  color: string;          // programme accent color
  colorClass: string;     // "mgt" | "mkt" | "fin" | "info" | "ia" | "cyb" | "mcrm" | "mstp" | "mfin"
  niveau: string;         // "Bac+3" | "Bac+5"
  duree: string;          // "3 ans" | "2 ans"
  semestres: number;      // 6 | 4
  totalCerts: number;     // 57 | 81 | 64 | 87 | 63 | 73 | 59 | 64
  statsHero: { label: string; value: string }[];
  publicCible: string[];
  modules: { title: string; description?: string }[];
  certifications: { name: string; provider: string; level: string }[];
  internationalPathways: { programme: string; partenaire: string; details: string }[];
  debouches: string[];
  iaCompetences: IACert[];   // always the same 26
}
```

### File Layout (per programme)

```
src/app/[locale]/licences/
  [slug]/
    page.tsx        ← imports <ProgramLPTemplate data={} />
    data.ts         ← programme-specific data object

src/app/[locale]/masters/
  [slug]/
    page.tsx
    data.ts
```

**Why data.ts per slug instead of a CMS?** No CMS yet. Each file exports a typed `ProgramLPData` object. When a CMS arrives, swap the import to an API call.

---

## 🧩 Template B — Partner Detail Page (×15 pages)

**Route:** `/partenaires/[slug]`
**Data source:** `08-Content/International Pages Content (FR).md`

### Page Structure

```
┌─────────────────────────────────┐
│ PartnerHero                     │  ← Country flag + school name + type badge
├─────────────────────────────────┤
│ PartnerPresentation             │  ← 1-2 paragraph description
├─────────────────────────────────┤
│ PartnerPrograms                 │  ← Table: Programme | Durée | Détails
├─────────────────────────────────┤
│ PartnerEligibility              │  ← "Éligibilité depuis EBS" section
├─────────────────────────────────┤
│ PartnerAdvantages               │  ← Bullet icon list
├─────────────────────────────────┤
│ PartnerDebouches                │  ← Career outcome pills
├─────────────────────────────────┤
│ PartnerCta                      │  ← Full-width CTA
└─────────────────────────────────┘
```

```typescript
interface PartnerData {
  slug: string;
  name: string;
  country: string;        // "🇨🇦 Canada" | "🇫🇷 France" | "🇮🇹 Italie" | "🇴🇲 Oman"
  type: string;           // "Université publique québécoise" | "Grande École" | ...
  presentation: string;
  programmes: { nom: string; duree: string; details: string }[];
  eligibilite: string;
  avantages: string[];
  debouches: string[];
}
```

---

## 🧩 Template C — Certification Provider Page (×10 pages)

**Route:** `/certifications/[slug]`
**Data source:** `08-Content/Certifications Pages Content (FR).md`

### Page Structure

```
┌─────────────────────────────────┐
│ CertProviderHero                │  ← Provider logo + name + tagline
├─────────────────────────────────┤
│ CertProviderIntro               │  ← Présentation + Pourquoi
├─────────────────────────────────┤
│ CertCategorySection (×N)        │  ← Repeated per category
│   ├─ Category heading           │
│   └─ Cert items list            │
├─────────────────────────────────┤
│ CertProviderCta                 │  ← CTA
└─────────────────────────────────┘
```

```typescript
interface CertProviderData {
  slug: string;
  name: string;
  logo: string;           // path to logo in /public/images/certifications/
  presentation: string;
  pourquoi: string;
  categories: {
    name: string;
    certs: { name: string; level?: string; description?: string }[];
  }[];
}
```

---

## 🧩 Template D — Program Overview Page (×2 pages)

**Route:** `/licences` and `/masters`

```
┌─────────────────────────────────┐
│ OverviewHero                    │  ← H1 + subtitle + CTA + stats bar
├─────────────────────────────────┤
│ ProgramCardGrid                 │  ← Grid of ProgramCard components
├─────────────────────────────────┤
│ WhySection                      │  ← 3 reasons to choose this level
├─────────────────────────────────┤
│ CertLogosStrip                  │  ← Provider logos row (marquee?)
├─────────────────────────────────┤
│ OverviewCta                     │  ← Final CTA
└─────────────────────────────────┘
```

---

## 🧩 Template E — International Pages (×2 pages)

**Route:** `/parcours-internationaux` and `/etudier-a-letranger`

`/parcours-internationaux` (overview):
```
┌─────────────────────────────────┐
│ PageHero                        │
├─────────────────────────────────┤
│ ProcessSteps (5 étapes)         │  ← Infographic creative component
├─────────────────────────────────┤
│ PartnerListTable                │  ← 16 partners table
├─────────────────────────────────┤
│ WhyInternational                │  ← 6-item checklist
├─────────────────────────────────┤
│ CtaSection                      │
└─────────────────────────────────┘
```

`/etudier-a-letranger` (LP campagne):
```
┌─────────────────────────────────┐
│ ProgramLPHero (reuse from Tpl A)│  ← 60/40 + StickyForm
├─────────────────────────────────┤
│ DestinationsGrid                │  ← 4 columns (Canada, France, Italie, Oman)
├─────────────────────────────────┤
│ TestimonialQuote                │  ← Single quote card
├─────────────────────────────────┤
│ ProcessSteps                    │  ← Reuse from overview
├─────────────────────────────────┤
│ CtaSection                      │
└─────────────────────────────────┘
```

---

## 📄 Standalone Pages (×11) — Key Components Needed

| Page | Route | Key Components |
|---|---|---|
| Qui sommes-nous | `/qui-sommes-nous` | PageHero, HistoryTimeline, KeyStats, AccreditationList, CtaButtons |
| Vision Mission Valeurs | `/vision-mission-valeurs` | QuoteBlock, MissionList, ValueCards (×5) |
| Mot du Président | `/mot-du-president` | ProfileCard, MessageBlock |
| Corps Enseignant | `/corps-enseignant` | FilterBar, TeacherCardGrid, TeacherCard |
| Alumni | `/alumni` | WorldMap, TestimonialVideos, SectorGrid, AlumniForm |
| Campus | `/campus` | PhotoGallery, GoogleMap, HorairesTable, EquipmentsList |
| FAQ | `/faq` | Accordion (shadcn) grouped by theme |
| Contact | `/contact` | ContactInfo, ContactForm, SocialLinks |
| IA & Certifications | `/ia-et-certifications` | CompetenceCards (×5), AllIACertsTable, ProgrammeCertSummary |
| Entreprises Partenaires | `/entreprises-partenaires` | B2BProfile, LogoGrid, CtaButtons |
| Tarifs | `/tarifs` | PricingTable, EarlyBirdBanner, IncludesList, PricingFAQ |

---

## 🔁 Shared Components Inventory

### New shadcn-based components to build:

```
src/components/
├── program/
│   ├── ProgramLPHero.tsx          ← Template A (60/40 hero + sticky form)
│   ├── ProgramPresentation.tsx    ← Template A (text block)
│   ├── PublicCible.tsx            ← Template A (audience badges)
│   ├── ModulesAccordion.tsx       ← Template A (expandable module list)
│   ├── CertificationsTable.tsx    ← Template A, C (sortable cert table)
│   ├── IACompetences.tsx          ← Template A, D (shared IA block)
│   ├── InternationalPerspectives.tsx ← Template A (partner table)
│   ├── DebouchesGrid.tsx          ← Template A, B (career pills)
│   ├── ProgramCard.tsx            ← Template D (overview card)
│   └── ProgramCardGrid.tsx        ← Template D (card grid)
├── partner/
│   ├── PartnerHero.tsx            ← Template B
│   ├── PartnerPresentation.tsx    ← Template B
│   ├── PartnerPrograms.tsx        ← Template B
│   ├── PartnerEligibility.tsx     ← Template B
│   ├── PartnerAdvantages.tsx      ← Template B
│   └── PartnerDebouches.tsx       ← Template B
├── certifications/
│   ├── CertProviderHero.tsx       ← Template C
│   ├── CertProviderIntro.tsx      ← Template C
│   └── CertCategorySection.tsx    ← Template C
├── shared/
│   ├── PageHero.tsx               ← Generic inner page hero
│   ├── StickyForm.tsx             ← Pre-inscription form (60/40 right col)
│   ├── CtaSection.tsx             ← Full-width colored CTA block
│   ├── StatBar.tsx                ← Horizontal stat pills
│   ├── StatCounter.tsx            ← Animated counter
│   ├── ProcessSteps.tsx           ← Step-by-step infographic
│   ├── LogoGrid.tsx              ← Responsive logo grid
│   └── Breadcrumb.tsx             ← Auto breadcrumb
└── ui/                            ← Existing shadcn components extended
    ├── ...existing shadcn
    └── Badge.tsx                   ← Extend with programme colors
```

---

## 🗺️ Route Map — All New Routes

```
src/app/[locale]/
├── licences/
│   ├── page.tsx                   ← Overview (Template D)
│   └── [slug]/
│       └── page.tsx               ← LP (Template A) — 6 programmes
├── masters/
│   ├── page.tsx                   ← Overview (Template D)
│   └── [slug]/
│       └── page.tsx               ← LP (Template A) — 3 programmes
├── parcours-internationaux/
│   └── page.tsx                   ← Overview (Template E)
├── etudier-a-letranger/
│   └── page.tsx                   ← LP campagne (Template E)
├── partenaires/
│   └── [slug]/
│       └── page.tsx               ← Partner detail (Template B) — 15 slug values
├── certifications/
│   ├── page.tsx                   ← Overview (Standalone)
│   └── [slug]/
│       └── page.tsx               ← Provider detail (Template C) — 10 slug values
├── qui-sommes-nous/
│   └── page.tsx                   ← Standalone
├── vision-mission-valeurs/
│   └── page.tsx                   ← Standalone
├── mot-du-president/
│   └── page.tsx                   ← Standalone
├── corps-enseignant/
│   └── page.tsx                   ← Standalone
├── alumni/
│   └── page.tsx                   ← Standalone
├── campus/
│   └── page.tsx                   ← Standalone
├── ia-et-certifications/
│   └── page.tsx                   ← Standalone
├── entreprises-partenaires/
│   └── page.tsx                   ← Standalone
├── tarifs/
│   └── page.tsx                   ← Standalone
├── faq/
│   └── page.tsx                   ← Refactor existing
├── contact/
│   └── page.tsx                   ← Refactor existing
└── blog/
    └── page.tsx                   ← Restructure existing
```

### Slug Enumeration

```
licences/[slug]:    management | marketing | finance | informatique-standard | informatique-ia | cybersecurite
masters/[slug]:     crm | startups | ingenierie-financiere
partenaires/[slug]: uqat | em-normandie | psb | idrac | ifag | igefi | eklore | epitech | epsi | excelia | figs | link-university | supdecom | gutech | redsup
certifications/[slug]: google | ibm | harvard | cisco | bloomberg | fortinet | deeplearning-ai | hubspot | semrush | autres-fournisseurs
```

---

## 🧹 Routes to REMOVE (old template pages)

These Next.js routes exist in the codebase but are NOT in the Batch 1/2 requirements. Remove their folders:

```
src/app/[locale]/
├── courses/           → Replaced by /licences
├── course-2/          → Not needed
├── course-3/          → Not needed
├── course-sidebar/    → Not needed
├── course-single/     → Replaced by /licences/[slug]
├── shop/              → No e-commerce in new site
├── shop-single/       → No e-commerce
├── cart/              → No e-commerce
├── checkout/          → No e-commerce
├── index-2/           → Alternative homepage not needed
├── index-3/           → Alternative homepage not needed
├── team/              → Replaced by /corps-enseignant
├── team-details/      → Replaced by /corps-enseignant
├── events/            → TBD — keep or replace
├── event-single/      → TBD
├── login/             → Keep for future student portal
├── register/          → Keep for future student portal
└── thank-you/         → Keep for form confirmation
```

---

## 🏗️ Build Order (Recommended)

| Phase | What | Est. Effort |
|---|---|---|
| **Phase 1** | Shared foundation: PageHero, CtaSection, StickyForm, Breadcrumb, StatBar, StatCounter | 1 day |
| **Phase 2** | Template A components: ProgramLPHero → CtaSection (9 components) | 2 days |
| **Phase 3** | Template A data + pages: 9 programme data files + 9 page.tsx | 1 day |
| **Phase 4** | Template D: ProgramCardGrid, OverviewHero → 2 overview pages | 0.5 day |
| **Phase 5** | Template B: 6 partner components → 15 partner data + pages | 1.5 days |
| **Phase 6** | Template C: 3 cert provider components → 10 data + pages | 1 day |
| **Phase 7** | Template E: 2 international pages | 0.5 day |
| **Phase 8** | Standalone pages: 11 unique pages | 2 days |
| **Phase 9** | Refactor existing: /faq, /contact, /blog, /tarifs | 1 day |
| **Phase 10** | Clean up old routes, update nav, wire everything | 0.5 day |

**Total:** ~11 days of focused development for 49 pages.
