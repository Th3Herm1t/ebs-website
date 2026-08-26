<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# EBS Website — Agent Context & Migration Patterns

## Project Overview
- **Stack**: Next.js 16 + React 19 + shadcn/ui + Tailwind 4 + next-intl i18n
- **Framework**: `motion/react` (was framer-motion), Lucide React icons only
- **Colours**: `#2B8FAB` (penn-green/accent), `penn-navy` (dark navy), `penn-body`, `penn-bg-light`, `penn-border`
- **Font**: Mulish (Google Fonts), 400–800 weights
- **Routes**: `[locale]` dynamic routing, `fr` default locale, `en` available
- **Proxy**: `src/proxy.ts` with matcher `['/((?!api|_next|_vercel|.*\\..*).*)']`
- **Running port**: `3000` (dev), `npm run dev`

## How We Import From External Sources
When bringing content from v0.1 (Astro) or ebs.tn into this codebase, follow this process:

1. **Read the source** — understand the intent, not just the markup
2. **Strip Astro-specific syntax** — no `.astro` files, no `class=` (use `className=`), no `<Fragment set:html={}>`  
3. **Convert to React patterns** — `"use client"` for motion/animated components, `useState` for interactivity
4. **Use existing shared components** — `Badge`, `CtaSection`, `ProcessSteps`, `PageHero` from `@/components/shared`
5. **Match existing aesthetic** — navy-gradient hero (`pt-40 pb-28`), Badge + large heading pattern, `section-padding` for sections
6. **Use real data** — always import from `@/lib/programmes/`, `@/lib/partenaires/`, `@/lib/certifications/` — never hardcode programme lists
7. **Verify routing** — every page needs a route in `src/i18n/routing.ts` pathnames

## Key Patterns
- Hero: `<section className="relative pt-40 pb-28 overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-penn-navy via-[#1a2035] to-penn-navy" />` + Badge + headline + description
- Section: `<section className="section-padding bg-white">`
- Motion: `import { motion } from "motion/react"`, use `initial/animate/whileInView` with `viewport={{ once: true, margin: "-80px" }}`
- Accordion: shadcn ui wrapper, `value` on items, `defaultValue` on root — base-ui accordion inside
- Programme colours: Management=#2196F3, Marketing=#E91E8C, Finance=#00BCD4, Info-Standard=#FF5722, Info-IA=#9C27B0, Cyber=#FF9800, CRM=#E91E63, Startups=#5E35B1, Ing.Fin=#00897B
- Partner accent colours: Canada=#E53935, France=#1E88E5, Italy=#43A047, Oman=#FB8C00
- Contrast Period Typography: Major titles (H1/H2 inside heroes/CTAs) ending in a period must contrast the last word and period. If the last word is in accent color (#2B8FAB), keep the period outside the span (defaults to white/navy). If the last word is in white/navy, wrap the period in `<span className="text-[#2B8FAB]">.</span>`.


## Current Page Status (37+ pages)
| Page | Status | Notes |
|------|--------|-------|
| `/` (homepage) | Refined | Hero, TopPromo, InfoSlider, Pillars, Courses, CoursePromo, ProgrammeFinder, CTA |
| `/licences` | Scaffolded | Grid overview only, LP detail pages exist but scaffolded |
| `/licences/[slug]` | Scaffolded | 6 LP pages exist with mock content |
| `/masters` | Scaffolded | Grid overview only |
| `/masters/[slug]` | Scaffolded | 3 LP pages exist with mock content |
| `/admissions` | **NEW (this batch)** | Process overview, requirements, financing, FAQ, CTA |
| `/preinscription` | **NEW (this batch)** | Multi-step form (4 steps) with real programmes |
| `/certifications` | Refined | 10-provider grid |
| `/certifications/[slug]` | Refined | 10 detail pages |
| `/ia-et-certifications` | Refined | 31 AI certs grid |
| `/parcours-international` | Refined | Partner cards with country flags |
| `/etudiants-internationaux` | Refined | Phase tabs, destinations, CountryFlag |
| `/partenaires/[slug]` | Refined | 15 partner detail pages |
| `/qui-sommes-nous` | Refined | 4 piliers, campus, services étudiants |
| `/vision-mission-valeurs` | Refined | Timeline, values grid |
| `/corps-enseignant` | Refined | Faculty grid |
| `/alumni` | Refined | Leaflet world map + 15 countries, 8 profiles, secteurs, join form |
| `/campus` | Refined | Facilities, gallery |
| `/partenaires-economiques` | Refined | B2B page |
| `/tarifs` | Refined | Pricing cards, FAQ |
| `/faq` | Refined | 25 Q&A, 6 categories |
| `/blog` | Refined | Categories, coming soon |
| `/contact` | Refined | Form, map, quick actions |
| `/cart`, `/about`, `/shop`, etc. | Removed | Old template routes deleted |

## Next SPRINT Priorities
1. Refine `/licences` and `/licences/[slug]` — populate with real data from `@/lib/programmes/licences.ts`
2. Refine `/masters` and `/masters/[slug]` — populate with real data from `@/lib/programmes/masters.ts`
3. Add SEO metadata per page (title, description)
4. Delete 22 old template routes
5. Partner logo assets for EM Normandie, Link University

## Recently Added
- **Homepage program cards → filtered overview**: CoursesSection image, title, and category badge link to `/licences?program=slug` and `/masters?program=slug` using real slug values (management, marketing, finance, informatique-ia, cybersecurite, etc.)
- **searchParams filtering**: `licences/page.tsx` and `masters/page.tsx` are async server components accepting `searchParams: Promise<{ program?: string }>` — filters the programme grid to show only the matching programme, with a "Voir toutes les licences/masters" back link when filtered
- **Alumni world map**: new `AlumniWorldMap` component with Leaflet interactive map (CartoDB tiles, circle markers scaled by count, pulsing Tunisia highlight, popups) + 15-country grid. Replaces old country list. Testimonials section removed. Added CI/SN/GB/TR flags to CountryFlag. Installed `leaflet` + `@types/leaflet`
- `/admissions` — full overview page with 4-step process, requirements, financing, calendar timeline, FAQ
- `/preinscription` — 4-step multi-step form with real programmes, localStorage, Formspree webhook
- Header: "Postuler" → `/preinscription`, "Admissions" added to Université dropdown

## Common Pitfalls
- Turbopack cache corruption after structural changes → delete `.next` folder
- `next-intl` i18n: every `[locale]/` page automatically gets `locale` param
- shadcn base-ui accordion: no `type` prop, `data-[state=open]` variants don't work
- `CountryFlag` component: 12 inline SVGs at `@/components/shared/CountryFlag.tsx`, accepts country code
- WhatsApp: floating button at bottom-24 right-6, linked in footer contact column
- ProgrammeFinder: Quiz+Compare tabs, heavy React state, inserted under Masters grid on homepage
- All animated components must start with `"use client"`
