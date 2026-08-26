---
tags: [architecture, tech-stack]
created: 2026-06-04
---

# 🏗️ Tech Stack & Architecture

## Technology Stack

| Layer | Technology | Version |
|---|---|---|
| **Framework** | Next.js | 16.2.6 |
| **Language** | TypeScript | 5.x |
| **UI Components** | shadcn/ui | 4.7.0 |
| **Styling** | TailwindCSS | 4.x |
| **Animation** | Motion (Framer Motion) | 12.38.0 |
| **Carousel** | Swiper | 12.1.4 |
| **Icons** | Lucide React | 1.14.0 |
| **React** | React | 19.2.4 |

## Project Structure

```
ebs-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   ├── about/
│   │   ├── blog/
│   │   ├── blog-single/
│   │   ├── contact/
│   │   ├── courses/            # → Maps to Licences
│   │   ├── course-single/      # → Individual programme page
│   │   ├── events/
│   │   ├── event-single/
│   │   ├── faq/
│   │   ├── team/
│   │   └── ...more routes
│   ├── components/
│   │   ├── layout/             # Layout components
│   │   │   ├── TopBar.tsx      # Top contact bar
│   │   │   ├── Header.tsx      # Main navigation
│   │   │   ├── Header2.tsx     # Alternative header
│   │   │   ├── Footer.tsx      # Footer
│   │   │   ├── PageHeader.tsx  # Page hero/banner
│   │   │   └── TopBar.tsx      # Top info bar
│   │   ├── sections/           # Page sections (46 components)
│   │   │   ├── HeroSection.tsx
│   │   │   ├── EbsBrandSection.tsx
│   │   │   ├── EbsCareerSection.tsx
│   │   │   ├── EbsCertificationsSection.tsx
│   │   │   ├── EbsCountersSection.tsx
│   │   │   ├── EbsInternationalSection.tsx
│   │   │   ├── EbsProgramsSection.tsx
│   │   │   ├── EbsUniverseSection.tsx
│   │   │   ├── OptimaServicesSection.tsx
│   │   │   ├── NewsCardsSection.tsx
│   │   │   └── ...40+ more sections
│   │   └── ui/                 # shadcn/ui components
│   └── lib/                    # Utilities
├── public/                     # Static assets
├── Dockerfile                  # Docker deployment
├── docker-compose.yml
├── components.json             # shadcn config
├── package.json
└── tsconfig.json
```

## Deployment

- **Docker** containerized deployment
- `Dockerfile` and `docker-compose.yml` already configured
- Dev server: `npm run dev`
- Build: `npm run build`

## ⚠️ Critical Constraint: shadcn-First Development

> **ALL components must be built using shadcn/ui primitives + TailwindCSS 4.**
> Template source files (Penn, Educa, Optima, etc.) are **visual references only** — they are never copy-pasted or ported as raw HTML/CSS.
> Every element borrowed from any template must be **pixel-perfect recreated** as proper shadcn/ui components.

### What This Means in Practice
- **Buttons** → `shadcn Button` component with custom variants
- **Cards** → `shadcn Card` composed with `CardHeader`, `CardContent`, etc.
- **Dropdowns** → `shadcn Select` / `DropdownMenu` / `Popover`
- **Navigation** → `shadcn NavigationMenu` with custom styling
- **Sliders/Carousels** → Swiper + shadcn container patterns
- **Forms** → `shadcn Input`, `Label`, `Form` components
- **Dialogs/Modals** → `shadcn Dialog` / `Sheet`
- **Tabs** → `shadcn Tabs`
- **Badges** → `shadcn Badge` (e.g., ★ NOUVEAU, ★ EXCLUSIF)
- **Counters/Stats** → Custom components using shadcn Card primitives
- **Layouts** → TailwindCSS grid/flex, no raw CSS positioning

### Template → shadcn Conversion Workflow
1. **Study** the template element visually (screenshots, browser)
2. **Identify** the closest shadcn/ui primitive(s)
3. **Compose** shadcn components to match the visual design
4. **Style** with TailwindCSS 4 utilities to achieve pixel-perfect match
5. **Animate** with Motion library where needed
6. **Verify** responsiveness across breakpoints

---

## Key Architecture Decisions

### 1. Component Organization
- **Layout components** handle global elements (header, footer, topbar)
- **Section components** are self-contained page sections composed from shadcn primitives
- **UI components** are shadcn/ui base primitives (extended as needed)

### 2. Styling Approach
- TailwindCSS 4 for utility classes
- `globals.css` for custom theme tokens
- Component-level styles via Tailwind utilities
- Motion library for animations

### 3. Page Composition
Pages are composed by importing and arranging section components:
```tsx
// src/app/page.tsx (Homepage)
<TopBar />
<Header />
<HeroSection />
<TopPromo />
<OptimaServicesSection />
<NewsCardsSection />
// ...etc
```

## Links
- [[../01-Project/Project Overview|Project Overview]]
- [[Homepage Section Map]]
