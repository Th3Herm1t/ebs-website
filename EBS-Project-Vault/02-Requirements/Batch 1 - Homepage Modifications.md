---
tags: [requirements, batch-1, homepage]
created: 2026-06-04
status: in-progress
source: "Page d'accueil ebs.tn.docx"
---

# 📦 Batch 1 — Homepage Modifications

> **Source:** `Page d'accueil ebs.tn.docx` (6.6 MB, contains annotated screenshots)
> **Focus:** Complete homepage redesign
> **Received:** June 2026

> [!IMPORTANT]
> **Development Rule:** Every element — including those referenced from Educa, Optima, or any other template — must be **pixel-perfect rebuilt using shadcn/ui components + TailwindCSS 4**. Templates are visual references only, never ported as raw HTML/CSS.

---

## Section-by-Section Breakdown

### 1. 📞 Top Contact Bar
**Instruction:** "Ajouter une bande de coordonnées + boutons social media en dessus"
- Add a contact info strip at the very top
- Include phone numbers, email
- Add social media icon buttons (Facebook, Instagram, LinkedIn, etc.)
- **Component:** `TopBar.tsx` (exists, needs modification)

**Status:** `[ ]` Not started

---

### 2. 🧭 Navigation Bar
**Instruction:** "Laisser cette bande en blanc"
- Keep navigation bar on white background
- **Menu items:** `L'université – Licences – Masters – International – Blog – Contact`
- This is a simplified nav compared to current site
- **Component:** `Header.tsx` / `Header2.tsx`

**Status:** `[ ]` Not started

---

### 3. 🦸 Hero Section
**New Copy:**
> **La Business School**
> **Tournée vers**
> **Le Futur**
>
> Formez-vous pour le monde de demain
> Business · Finance · Technologie · Intelligence Artificielle · Cybersécurité · Licences et Masters reconnus avec +150 certifications internationales gratuites disponibles

**Additional Element:** "Introduire cette liste déroulante sous l'écriture et à côté de la fille (Educa Template)"
- Add a **dropdown/select element** from the **Educa template** positioned below the text and beside the hero image of a girl
- **Component:** `HeroSection.tsx`
- **Template Reference:** Educa landing page template

**Status:** `[ ]` Not started

---

### 4. 🔧 Services/Features Section (NEW — from Optima)
**Instruction:** "Puis introduire cette section (maquette Optima)"
- Introduce the services/features section from the **Optima template**
- **Color scheme:**
  - `#264653` (Dark Teal)
  - `#2a9d8f` (Teal Green)
  - `#e9c46a` (Gold)
- **Component:** `OptimaServicesSection.tsx` (already exists)

**Status:** `[ ]` Not started

---

### 5. 📰 News Slider Section (from Optima)
**Instruction:** "Slider avec photo (changer la photo pour chaque slide) (maquette Optima)"
- Image slider where each slide has a different photo
- Uses the Optima template styling
- **Component:** `NewsCardsSection.tsx`

**Three news cards with content:**

#### Card 1: ★ NOUVEAU
**Title:** L'IA comme compétence obligatoire dans tous nos parcours
**Content:** Pour la rentrée 2025/2026, l'intelligence artificielle sera intégrée comme compétence essentielle dans l'ensemble de nos parcours, indépendamment de la spécialité choisie. Les étudiants développent une compréhension des outils, des usages et des enjeux de l'IA afin d'en faire un levier d'analyse, d'innovation et de performance.
Cette approche permet de préparer des diplômés capables d'évoluer dans un environnement où l'intelligence artificielle transforme progressivement les métiers et les organisations.

#### Card 2: ★ EXCLUSIF
**Title:** Intégration de +150 Certifications Internationales dans nos différents parcours
**Content:** EBS intègre plus de 150 certifications internationales reconnues dans ses différents programmes de formation afin de renforcer les compétences académiques par des validations professionnelles concrètes.
Ces certifications couvrent des domaines variés tels que le management, la finance, le marketing, l'intelligence artificielle, la gestion de projets, la cybersécurité et les technologies numériques.
Cette approche permet aux étudiants d'enrichir leur profil, de valoriser leurs acquis et de se préparer aux standards et exigences du marché international.

#### Card 3: ★ ACTUALITÉ
**Title:** Inscriptions 2025-2026 ouvertes — Réductions Early Bird jusqu'au 30 Juin
**Content:** Les candidatures pour l'année universitaire 2025-2026 sont désormais ouvertes pour l'ensemble de nos licences, masters et formations spécialisées. Profitez de nos réductions Early Bird, allant jusqu'à -25% sur vos frais de scolarité, en finalisant votre inscription avant le 30 juin, et préparez dès aujourd'hui votre parcours académique dans un environnement tourné vers l'innovation, les technologies et les compétences de demain.
Nos équipes pédagogiques et administratives sont à votre disposition pour vous accompagner dans le choix de la formation la plus adaptée à votre projet académique et professionnel.

**Status:** `[ ]` Not started

---

### 6. 💡 Value Proposition / Brand Section
**Content:**
> **Rejoignez la Business School tournée vers le futur**
> Espima Business School évolue et fait évoluer ses programmes avec un objectif ultime : permettre à chaque étudiant de construire un profil plus compétitif, plus polyvalent et mieux préparé aux exigences du marché de l'emploi.

> **L'IA comme outil différenciateur**
> Chez EBS, chaque étudiant - quelle que soit sa filière - maîtrise les outils d'IA les plus demandés par les recruteurs. Des licences de management aux masters d'ingénierie financière. Ce n'est pas une option : c'est notre engagement pour votre employabilité.

> **Des compétences certifiées**
> En plus de votre diplôme reconnu par l'État tunisien, vous repartez avec des certifications délivrées par les organisations les plus reconnues au monde. Gratuites. Incluses dans votre formation. Valorisables partout dans le monde.

- **Component:** `EbsBrandSection.tsx`

**Status:** `[ ]` Not started

---

### 7. 📊 Statistics Counters
| Counter | Value |
|---|---|
| Certifications gratuites incluses | 150+ |
| Programmes Licences & Masters | 7 |
| Partenaires universitaires internationaux | 10+ |
| Taux de réussite | 93% |

- **Component:** `CounterSection.tsx` / `EbsCountersSection.tsx`

**Status:** `[ ]` Not started

---

### 8. 🤝 Partners Sections

#### Economic Partners
**Title:** "Nos Partenaires Économiques"
- Logo carousel/grid of business partners
- **Component:** `PartnerLogos.tsx`

#### Academic Partners
**Title:** "Nos Partenaires Académiques Internationaux"
- Logo carousel/grid of university partners

**Status:** `[ ]` Not started

---

### 9. 🎓 Programs Sections

#### Licences
**Header:** "EBS PROGRAMS — Parcourir nos Licences"
- Card grid of licence programs
- **Component:** `EbsProgramsSection.tsx`

#### Masters
**Header:** "EBS PROGRAMS — Parcourir nos Masters"
- Card grid of master programs

**Status:** `[ ]` Not started

---

### 10. 🌟 EBS Universe Section
**Header:** "EBS UNIVERSE ———— Pourquoi choisir notre Université"
- Feature cards highlighting university benefits
- **Component:** `EbsUniverseSection.tsx`

**Status:** `[ ]` Not started

---

### 11. 📧 Newsletter Section
**Header:** "Abonnez-vous à notre liste Emailing"
**Subtitle:** "Recevez nos dernières offres et actualités"
**Description:** "En vous inscrivant dans cette liste, vous recevrez nos dernières offres et actualités"
- Email subscription form
- **Component:** `NewsletterSection.tsx`

**Status:** `[ ]` Not started

---

### 12. 🏅 Certifications Section
**Header:** "EBS CERTIFICATIONS ——— Principales Certifications Disponibles pour nos Étudiants"
- Grid of certification logos/cards
- **Component:** `EbsCertificationsSection.tsx`

**Status:** `[ ]` Not started

---

### 13. 📅 Events Section
**Header:** "EBS EVENTS ——— Actualités et Évènements EBS"
- Event cards with dates
- **Component:** `EventsSection.tsx`

**Status:** `[ ]` Not started

---

### 14. 💬 Testimonials Section
**Header:** "TESTIMONIAL ——— Ce que nos étudiants disent"
- Student testimonial cards/carousel
- **Component:** `TestimonialsSection.tsx`

**Status:** `[ ]` Not started

---

### 15. 📝 Blog Section
**Header:** "ARTICLES ——— Nos derniers blogs"
- Blog post cards
- **Component:** `BlogSection.tsx`

**Status:** `[ ]` Not started

---

### 16. 📎 Footer
- Footer with links, contact info, social media
- **Component:** `Footer.tsx`

**Status:** `[ ]` Not started

---

## Section Order (New Homepage)

```
1.  TopBar (contact info + social media)
2.  Header (white nav: L'université – Licences – Masters – International – Blog – Contact)
3.  HeroSection (new copy + Educa dropdown + hero image)
4.  OptimaServicesSection (3-color services: #264653, #2a9d8f, #e9c46a)
5.  NewsCardsSection (Optima slider with photos)
6.  EbsBrandSection (Value proposition: "Rejoignez...")
7.  CounterSection (150+, 7, 10+, 93%)
8.  Partners — Economic
9.  Partners — Academic
10. EbsProgramsSection — Licences
11. EbsProgramsSection — Masters
12. EbsUniverseSection
13. NewsletterSection
14. EbsCertificationsSection
15. EventsSection
16. TestimonialsSection
17. BlogSection
18. Footer
```

---

## Open Questions for Client
- [ ] Which social media platforms to include in the top bar?
- [ ] What images to use for the news slider slides?
- [ ] Specific partner logos needed (economic + academic)?
- [ ] Specific certification logos to display?
- [ ] Is the Educa dropdown a program selector or a search/filter?
- [ ] Do we keep WhatsApp chat widget? HubSpot chat?
- [ ] Language switcher (FR/EN/AR) still needed?
