# High-Fidelity DOCX Audit — EBS Website

Date: 2026-08-27

Method:
- Parsed the original DOCX as WordprocessingML-aware annotated text.
- Preserved revision semantics used by the client docs:
  - `highlight=yellow|strike` = old text to remove
  - `highlight=cyan` = replacement/final text
  - `highlight=green` = editorial note
- Compared page-by-page client packets under `.omo/audit/annotated-pages/` against the implemented route files in `ebs-website/src/app/[locale]/...` and related data/message files.

## Verdict

The previous agent did **not** complete the client-document verification pass to the required standard.

The codebase is **partially aligned**, but multiple pages still contain one or more of:
- stale/public copy drift from the final client text,
- unsupported invented content,
- inconsistent counts/source-of-truth,
- incomplete implementation of sections present in the client packet,
- unresolved editorial notes.

## Page-by-page findings

### 1. Homepage (`/`)

Status: **Partially aligned, not complete**

Confirmed:
- English homepage stale copy was previously still using the old 2025/2026 campaign and old AI/about wording; `messages/en.json` has now been corrected.
- The homepage correction DOCX explicitly marks old text in yellow+strike and final text in cyan.
- The DOCX contains an explicit editorial note in green: `(et mettre la bonne photo)`.
- The DOCX contains an explicit instruction: `SUPPRIMER BLOGS DU PAGE D’ACCUEIL`.

Remaining issues:
- `messages/fr.json` and `messages/en.json` `HomePage.coursepromo.desc` still use older mobility wording rather than the revised homepage wording.
- Homepage partner carousel `src/components/sections/AcademicPartners.tsx` includes `Audencia` and `FIGS`, creating a public partner list inconsistent with the 14-partner client corpus.
- Homepage blog/news removal is unresolved at implementation level. `src/app/[locale]/page.tsx` still renders `TopicsSection`, `EventsSection`, `TestimonialsSection`, `NewsletterSection`; `BlogSection` is not mounted on homepage, but the client instruction is broader than the current implementation state and needs interpretation.
- The green editorial note to change the AI slide photo is not evidenced as resolved by the current code audit.

### 2. Qui sommes-nous (`/qui-sommes-nous`)

Status: **Significant drift**

Confirmed matches:
- Hero badge, body intro, founder message paragraphs, campus text, timeline headings, services headings, and CTA theme are substantially based on the client document.

Confirmed mismatches:
- Partner count is wrong in public stats/copy:
  - client doc: `14 partenaires internationaux`
  - implementation: `16` in hero stats and accreditation copy
  - file: `src/app/[locale]/qui-sommes-nous/QuiSommesNousClient.tsx`
- Program count is wrong in hero stats:
  - client doc: `9 Programmes disponibles`
  - implementation: `7`
- The four pillars use rewritten/older marketing copy instead of the exact client-approved paragraphs for:
  - Qualité de l'Enseignement
  - Pédagogie Innovante
  - Développement Personnel et Professionnel
  - Ouverture sur l'Environnement
- Accreditation block copy drifts from the client packet, especially around partner count and wording.
- The client note `Photo plus petite` for the founder section is not traceably addressed.

### 3. Vision, Mission & Valeurs (`/vision-mission-valeurs`)

Status: **Mostly aligned with some drift**

Confirmed:
- Mission bullets and values grid are closely aligned with the client packet.
- 14-partner statement is correctly used in the values section.

Confirmed drift:
- The main “Notre Vision” statement is paraphrased rather than matching the client wording exactly.
- This page is in better shape than most others, but still not a strict fidelity pass.

### 4. IA & Certifications (`/ia-et-certifications`)

Status: **Mostly aligned with wording drift**

Confirmed:
- Core structure exists.
- Main sections from client packet are implemented:
  - hero with obligation framing
  - why AI section
  - 5 core competencies
  - AI certifications block
- Much of the body copy matches or closely tracks the client packet.

Confirmed drift:
- Hero badge differs from client wording:
  - client: `Compétence transversale intégrée à tous les parcours depuis 2026`
  - implementation: `Compétence transversale obligatoire depuis 2026`
- Stats labels differ from client packet wording (`Modules obligatoires IA`, `Modules optionnels IA` vs implementation variants).
- Final CTA copy differs from the client packet wording.

### 5. Corps enseignant (`/corps-enseignant`)

Status: **Partially aligned but unsupported content introduced**

Confirmed:
- Hero title, subtitle, and stats row match the client packet closely.

Confirmed issue:
- The remainder of the page is a fabricated searchable teacher grid of sample faculty profiles not evidenced by the client packet.
- The client packet only clearly supports the hero/stat framing and recruitment CTA, not the invented named faculty catalogue.

### 6. Partenaires académiques (`/partenaires-academiques`)

Status: **Largely aligned, but source-of-truth conflict remains**

Confirmed:
- Core copy for hero, 14 partners, countries, “Notre réseau”, “Pourquoi EBS ?”, and contact/CTA sections is close to the client packet.

Confirmed issues:
- Public partner source-of-truth is inconsistent across the site:
  - this page says 14,
  - homepage carousel exposes 16,
  - detailed partner data generates extra live pages.
- Slight wording drift exists in the partnership justification and contact paragraph.

### 7. Partenaires économiques (`/partenaires-economiques`)

Status: **Mostly aligned, but softened/rewritten**

Confirmed:
- Structure strongly follows the client packet.
- Most major headings and stats are present.

Confirmed drift:
- Some paragraphs are weakened/paraphrased instead of matching the client packet, e.g.:
  - “Un diplômé EBS n’est pas un profil parmi d’autres...” is diluted in implementation.
  - “accueillent nos étudiants en stage” became weaker wording in the partner ecosystem intro.
- This page is not a disaster, but it is not exact.

### 8. Actualités (`/actualites`)

Status: **Major mismatch**

Confirmed issues:
- Hero copy does not match the client packet.
- Stats/summary framing differs from the packet.
- Newsletter/subscription framing diverges from the client packet.
- The page appears to be an older or independently composed content page rather than a strict application of the client revision document.

### 9. Certifications (`/certifications`)

Status: **Major mismatch despite substantial work**

Confirmed:
- The page is sophisticated and functional.
- It includes public/private access framing and certification catalogue structure.

Confirmed issues:
- Hero badge differs materially:
  - client: `AI Passport EBS · Catalogue international de certifications`
  - implementation: `AI Passport EBS · Catalogue international géré`
- The client packet’s specific emphasis on access restrictions, Forage simulations, recognition framing, and wording is only partially reflected.
- Several client lines are paraphrased rather than implemented as approved copy.

### 10. Alumni (`/alumni`)

Status: **Mixed; some sections aligned, others invented or drifted**

Confirmed:
- Mission bullets are present.
- Hero title aligns.
- Sector blocks exist.

Confirmed issues:
- Hero supporting paragraph diverges from the client packet.
- Public stats appear invented/not traceable to the packet.
- Additional network/gallery/mentor UI may be useful product work, but it goes beyond a strict fidelity pass.

### 11. Campus (`/campus`)

Status: **Partial implementation with unsupported additions**

Confirmed:
- Hero concept, address, and practical info are present.
- Equipment copy aligns with parts of the client packet.

Confirmed issues:
- Address in hero badge is less exact than client packet (`Le Kram (2015)` omitted there).
- Client packet calls out specific gallery spaces; implementation uses a redesigned campus card set with renamed categories.
- Extra “Visite Virtuelle 360°” section is not evidenced by the client packet.
- This page mixes aligned content with product invention.

### 12. Licences overview (`/licences`)

Status: **Broadly aligned but not exact**

Confirmed:
- 4 licences / 5 pathways framing is present.
- Core programme cards map to the client packet.

Confirmed issues:
- Several exact lines in the client packet are not implemented literally.
- CTA framing and auxiliary copy differ.
- The page is acceptable structurally, but not strict-copy compliant.

### 13. Masters overview (`/masters`)

Status: **Substantial drift**

Confirmed:
- 4 masters exist and route structure is in place.

Confirmed issues:
- The overview page contains many wording/structure mismatches relative to the client packet.
- The client packet’s admission/form/support framing is not reflected exactly.
- This page needs a more thorough rewrite to match the approved content.

### 14. Admissions (`/admissions`)

Status: **Clearly incomplete vs client packet**

Confirmed:
- Hero exists.
- 4-step admission flow exists.

Confirmed missing content:
- The current file ends after hero, 4-step cards, and a stock photo strip.
- The client packet includes much more content that is not implemented in the current file, including at least:
  - detailed requirements blocks,
  - licence/master documents lists,
  - additional admissions guidance and programme framing.
- This is one of the clearest cases where the previous agent stopped early or shipped an incomplete page.

## Cross-cutting issues

### A. Partner source-of-truth is inconsistent

- Client corpus supports **14** academic partners.
- Current implementation exposes inconsistent partner universes:
  - 14 on overview page
  - 16 in homepage carousel / detailed data
  - live extra `audencia` page with no supplied client guide

### B. Old campaign residue still exists

Confirmed remaining `Early Bird` references:
- `src/app/[locale]/contact/ContactClient.tsx`
- `src/app/[locale]/masters/[slug]/page.tsx`
- `src/app/[locale]/licences/[slug]/page.tsx`
- `src/lib/faq-schema.ts`

### C. Repo/build hygiene still blocks clean verification

- Build fails in this environment on remote Google Fonts fetch for Mulish.
- Lint fails on existing scratch/scripts issues unrelated to the latest copy fix.
- There is a tracked deleted/damaged asset: `assets/Partenaires académiques/figs (2).png`.

## Bottom line

The previous agent did some real implementation work, but it **did not finish the fidelity pass**.

Most reliable pages right now:
- `vision-mission-valeurs`
- `ia-et-certifications`
- `partenaires-academiques`
- `partenaires-economiques`

Most problematic pages right now:
- homepage
- `qui-sommes-nous`
- `actualites`
- `certifications`
- `admissions`
- partner source-of-truth across the site

## Partner corpus resolution — 2026-08-27

- The source corpus contains exactly 14 standalone partner guides, matching `src/lib/partenaires/academic-partners.ts`.
- Audencia and FIGS Education have no standalone guide; their standalone public carousel entries, data records, and generated routes were removed. FIGS remains only where the approved institutional copy names it as the umbrella network for guided member schools.
