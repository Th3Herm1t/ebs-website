# DESIGN.md — Espima Business School (EBS)

> **Design Authority & Frontend Taste Guidelines**  
> Based on *UI/UX Pro Max*, *Taste Skill (Anti-Slop)*, and *Awesome Claude Design* standards.

---

## 🏛️ 1. Brand Essence & Visual Archetype

* **Brand Character:** Prestigious, forward-looking, rigorous, and technologically augmented.
* **Core Value Proposition:** Private higher education in Tunisia fusing accredited European/Tunisian academic degrees with **practical AI mastery, international dual degrees, and verified global industry credentials**.
* **Visual Mood:** Crisp Mediterranean Cerulean accents against authoritative Deep Midnight Navy, ultra-clean white canvas, refined typography, and purposeful micro-interactions.

---

## 🎨 2. Color System & Design Tokens

### Primary Palette
| Token | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| `--color-navy-dark` | `#080E1B` | Hero base, deep background surfaces |
| `--color-navy` | `#161B2E` | Primary typography, authoritative headers, footer |
| `--color-teal-accent` | `#2B8FAB` | Brand signature accent, key CTAs, highlights |
| `--color-emerald` | `#10B981` | 100% Free / Verified badges, success states |
| `--color-bg-light` | `#F8FAFC` | Section alternate backgrounds, card wells |
| `--color-border` | `#E2E8F0` | Structural dividers, card borders (light mode) |
| `--color-border-dark` | `rgba(255,255,255,0.12)` | Glassmorphic container borders (dark mode) |

### Functional Classification Coding (Certifications & Badges)
* 🟣 **Culture IA (AI Literacy):** `bg-purple-50 text-purple-700 border-purple-200`
* 🔵 **IA Appliquée (Applied AI):** `bg-cyan-50 text-cyan-800 border-cyan-200`
* 🔷 **Métier & Outils (Business & Tech):** `bg-blue-50 text-blue-800 border-blue-200`
* 🟢 **Zero-Cost / Verified Guarantee:** `bg-emerald-50 text-emerald-700 border-emerald-200`

---

## ✍️ 3. Typography & Hierarchy

* **Primary Font:** **Mulish** (Google Fonts), 400 (Body), 600 (Semibold), 700 (Bold), 800/900 (Extrabold).
* **Contrast Period Rule:** Major H1/H2 headlines ending in a period must contrast the last word and punctuation:
  * When the headline text is white/navy, wrap the final accent word or period in `<span className="text-[#2B8FAB]">.</span>`.
* **Scale:**
  * **Hero Title:** `text-[40px] md:text-[58px] lg:text-[68px] font-extrabold leading-[1.06] tracking-[-1.5px]`
  * **Section Title:** `text-[32px] md:text-[44px] font-extrabold leading-[1.15] tracking-[-0.5px]`
  * **Card Title:** `text-[15px] md:text-[16px] font-extrabold leading-snug text-penn-navy`
  * **Metadata / Pills:** `text-[11px] font-extrabold uppercase tracking-wide`

---

## 📐 4. Layout Rhythm & Anti-Slop Guidelines

### ✅ Golden Rules
1. **No Sidebar Questionnaire Traps:** Prefer sticky top-level control bars with faceted segmented toggles over 300px clunky sidebars that break mobile viewports.
2. **Strict Vector Icons:** Use Lucide React SVG icons exclusively. **Never use emoji as interface icons**.
3. **Contextual Slide-Over Drawers:** When users click on rich data items (e.g. certifications, partner details), provide an instant slide-over drawer with full academic context and 1-click links to the relevant EBS degree.
4. **Scannable Hierarchy:** Ensure cards have immediate brand recognition (vector logos), clear visual tiering (`Recommandé` vs `Explorer`), and distinct color-coded domain tags.

### 🚫 Anti-Patterns (To Avoid)
* ❌ Generic pink/purple "AI glow" templates that scream low-effort boilerplate.
* ❌ Giant wall of redundant metrics competing for attention above the fold.
* ❌ Plain unstyled grey badges that cause "banner blindness".
* ❌ Non-responsive sticky elements that trap or obscure mobile viewports.

---

## ⚡ 5. Micro-Interactions & Animation Specs

* **Engine:** `motion` (`motion/react` v12.38).
* **Transitions:**
  * **Hover Lift:** `transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`
  * **Spring Drawers:** `transition={{ type: "spring", damping: 28, stiffness: 300 }}`
  * **View Switcher:** Instant layout toggles between Visual Grid and Compact Matrix/Table.
* **Accessibility:** Always support `motion-reduce:hover:translate-y-0` and WCAG AA 4.5:1 contrast compliance.
