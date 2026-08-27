# Manual EBS Codebase Audit — 2026-08-27

Scope: deterministic local audit only. The prior `opencode run --agent ebs-*` reviewers did not produce usable findings; result files were empty/header-only and no reviewer process remains alive.

## Authority Corpus

- Extracted 17 DOCX files into `.omo/audit/inputs/`:
  - 2 correction files under `.omo/audit/inputs/corrections/`
  - 15 guide/reference files under `.omo/audit/inputs/guides/`
- Site-wide correction document names 23 target routes; all 23 corresponding app routes exist.

## Verified Current Implementation State

### Routes

All correction-targeted routes exist:

- `/qui-sommes-nous`
- `/vision-mission-valeurs`
- `/ia-et-certifications`
- `/corps-enseignant`
- `/partenaires-academiques`
- `/partenaires-economiques`
- `/actualites`
- `/certifications`
- `/alumni`
- `/campus`
- `/licences`
- `/licences/management`
- `/licences/marketing`
- `/licences/finance`
- `/licences/informatique-ia`
- `/licences/cybersecurite`
- `/masters`
- `/masters/marketing-digital-ia`
- `/masters/startups`
- `/masters/ingenierie-financiere`
- `/parcours-international`
- `/etudiants-internationaux`
- `/admissions`

### Program model

- `src/lib/programmes/licences.ts` has 5 licence pathways: management, marketing, finance, informatique-ia, cybersecurite.
- `src/lib/programmes/masters.ts` has 4 masters: crm, startups, ingenierie-financiere, marketing-digital-ia.
- This matches the correction corpus model: 3 management licences + 1 informatique licence with 2 options + 4 masters.

### Asset references

- Scripted scan found 297 `/images`/asset references and 0 missing files under `ebs-website/public`.

## Confirmed Issues / Mismatches

### P0 — Repo has an unrelated damaged tracked asset

- `git status` shows `D "assets/Partenaires académiques/figs (2).png"`.
- `git diff --stat` showed that file changed from 1,498,407 bytes to 0/deleted.
- This is outside the Next app public asset path but must be restored or intentionally removed before commit/deploy.

### P0 — Build currently fails due Google Fonts fetch

- `npm run build` fails in `src/app/[locale]/layout.tsx` via `next/font/google` because the environment cannot fetch Mulish from `https://fonts.googleapis.com`.
- This is an environment/network or font-hosting robustness issue, not caused by the message copy change.

### P0 — `npm run lint` fails on existing scratch/scripts errors

- 29 lint errors are from `ebs-website/scratch/*.js`, binary-ish scratch TS files, and `scripts/download_phase*.js` using CommonJS require/import patterns.
- This blocks using lint as a clean verification gate until scratch/scripts are excluded, removed, or converted.

### P1 — Homepage correction “SUPPRIMER BLOGS DU PAGE D’ACCUEIL” is not fully resolved

- Homepage `src/app/[locale]/page.tsx` imports and renders tail content sections: `TopicsSection`, `EventsSection`, `TestimonialsSection`, `NewsletterSection`.
- `BlogSection` is not imported on homepage, but blog/news material remains in route/nav/sitemap/footer/messages.
- `/blog` is still in `src/i18n/routing.ts`, `src/app/sitemap.ts`, and footer links.
- Decision needed before implementation: remove only homepage blog/news sections, or delete/hide the entire blog route from navigation/sitemap/footer.

### P1 — Academic partner source-of-truth mismatch

- Correction corpus repeatedly states 14 academic partners.
- `src/lib/partenaires/academic-partners.ts` lists 14 overview cards and omits FIGS.
- `src/components/sections/AcademicPartners.tsx` homepage carousel lists 16 logos including Audencia and FIGS.
- `src/lib/partenaires/partenaires.ts` contains 16 real detailed partners, including `audencia` which has no provided partner guide.
- `src/app/[locale]/partenaires/[slug]/page.tsx` statically generates every key from detailed partner data, so `/partenaires/audencia` is live.
- Recommendation: remove Audencia unless the client supplies an Audencia guide; reconcile homepage carousel, detailed partner pages, and public counts to the same authoritative list.

### P1 — Partner count copy inconsistent

- Correction doc says 14 partners.
- `src/app/[locale]/qui-sommes-nous/QuiSommesNousClient.tsx` shows 16 partners in the hero/stat cards and accreditation text.
- `src/app/[locale]/licences/page.tsx` says 14 partners in one section.
- Partner count needs one source of truth.

### P1 — Homepage/coursepromo mobility copy remains stale

- `messages/fr.json` and `messages/en.json` under `HomePage.coursepromo.desc` still use older “solid network / start in Tunisia and finish abroad” wording.
- Homepage correction provided newer mobility language around intercultural experience and prestigious partners.

### P1 — Early Bird language remains despite campaign correction

Confirmed remaining occurrences:

- `src/app/[locale]/contact/ContactClient.tsx`
- `src/app/[locale]/masters/[slug]/page.tsx`
- `src/app/[locale]/licences/[slug]/page.tsx`
- `src/lib/faq-schema.ts`

Homepage campaign strings were updated away from 2025/2026, but these CTAs still mention Early Bird June 30.

### P2 — Template/slop components remain in source

- `src/components/sections/TopPromo2.tsx` contains Lorem Ipsum and English placeholder cards.
- `src/components/sections/AboutSection2.tsx` contains template copy and “Read More us”.
- These appear unused but create audit/noise risk and should be deleted if not referenced.

### P2 — English locale was stale; partially fixed

- `messages/en.json` now mirrors the homepage correction intent for brochure, mobility, tech/certifications, AI slide, registration slide, and about copy.
- JSON parse validation passes.
- Further English pages were not fully audited line-by-line against the French correction corpus.

## Verification Evidence

- `node .omo/audit/extract-docx.js` extracted 17 files successfully.
- `node -e "JSON.parse(...messages/en.json...)"` passed.
- `git diff --check` passed.
- `npm run build` failed only at remote Google Fonts fetch for Mulish.
- `npm run lint` failed on pre-existing scratch/scripts issues, not `messages/en.json`.

## Recommended Next Implementation Order

1. Restore or intentionally remove `assets/Partenaires académiques/figs (2).png` before any commit.
2. Fix build robustness by self-hosting Mulish or otherwise avoiding network fetch during build.
3. Clean/exclude scratch/scripts so lint becomes usable.
4. Decide blog-removal scope, then remove homepage/blog nav/sitemap/footer accordingly.
5. Reconcile partners to exactly 14 authoritative partners; remove Audencia unless sourced.
6. Normalize all public partner counts to 14.
7. Remove stale Early Bird CTAs and coursepromo mobility copy.
8. Delete unused template/slop components.
