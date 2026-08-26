# Session Log

## 2026-07-11 — Managed Certification Catalogue Created

Work completed:

- Read the original HTML roadmap and Ahmed's initial recommendations.
- Inspected the Next.js EBS website architecture.
- Added `src/lib/certifications/roadmap.ts` for parsed raw/audit roadmap data.
- Created `src/lib/certifications/final-catalogue.ts` as the managed source of truth.
- Implemented the final matrix: AI Literacy, Applied AI, Non-AI x Mandatory, Optional.
- Added helper selectors for programme-level and matrix-level certification retrieval.
- Added `scripts/generate-certification-catalogue-report.mjs`.
- Generated `CERTIFICATION_CATALOGUE_REVIEW.md`.
- Updated this project vault to mark legacy notes as reference and point to the active catalogue.

Current counts:

- AI Literacy: 9 mandatory, 6 optional.
- Applied AI: 30 mandatory, 13 optional.
- Non-AI: 47 mandatory, 16 optional.
- Public-visible managed records: 121.

Validation:

- `npm run lint` passed in the website repo.

Open next steps:

- Human review of final managed catalogue.
- HubSpot link validation.
- Public website integration.

## 2026-07-11 — Vault Terminology Cleanup

Work completed:

- Updated active vault files to use the final `mandatory`/`optional` requirement model.
- Replaced stale references to `certifications-data.json` with `final-catalogue.ts` where operational.
- Updated operations, governance, student-space, website integration, metrics, and faculty enablement notes.
- Marked `Semester Roadmap.md` as a superseded scheduling draft.
- Added a legacy warning to `Programme Mapping.md`.
- Kept raw 267-entry catalogue and licence/master historical notes as reference context only.

Next best step:

- Build the public website certification UI from `src/lib/certifications/final-catalogue.ts`.

## 2026-07-11 — Public Catalogue UI Connected

Work completed:

- Updated `/certifications` to use `src/lib/certifications/final-catalogue.ts` for the public count and managed certification cards.
- Added public filters for classification and requirement.
- Kept public certification cards non-clickable so external provider URLs remain reserved for student-space use.
- Preserved the existing internal provider pages and internal provider links.
- Corrected public page programme count copy from 7 to 9 programmes and masters copy from 3 to 4 masters.

Validation:

- `npm run lint` passed.
- `npm run build` passed.

## 2026-07-11 — Website Updated for Expanded Catalogue

Work completed:

- Updated `CertificationsTable` to render managed catalogue records with provider, classification, requirement, year, and Forage note.
- Updated licence detail pages to derive counts and displayed certifications from `final-catalogue.ts`.
- Updated master detail pages to derive counts and displayed certifications from `final-catalogue.ts`.
- Updated `/ia-et-certifications` to derive AI certification list, programme totals, and total certification count from the expanded catalogue.
- Updated programme `totalCerts` values to the managed expanded counts for overview cards and preinscription display.

Validation:

- `npm run lint` passed.
- `npm run build` passed before final copy tweak; `npm run lint` passed after final copy tweak.

Next best step:

- Add programme-specific certification sections to licence/master detail pages using `getProgrammeCertificationMatrix()`.

## 2026-07-11 — Client Proposal Generated

Work completed:

- Created `05-Proposals/Proposition AI Passport EBS v4.md` as the client-ready proposal.
- Generated `05-Proposals/Proposition AI Passport EBS v4.docx` for client sharing.
- Generated `05-Proposals/Proposition AI Passport EBS v4.html` as an additional export.
- PDF export was attempted but blocked because `pdflatex` is not installed locally.

Proposal basis:

- Final managed catalogue: 156 public-visible certification records.
- Active requirement model: `mandatory` and `optional`.
- Classification model: AI Literacy, Applied AI, Non-AI.
- Website status: public `/certifications` page already connected to `final-catalogue.ts`.

## 2026-07-11 — Catalogue Expanded to 156

Work completed:

- Expanded `src/lib/certifications/final-catalogue.ts` from 121 to 156 public-visible managed records.
- Added 7 mandatory records and 28 optional records.
- Preserved the operational cap: no programme exceeds 14 mandatory certifications.
- Regenerated `CERTIFICATION_CATALOGUE_REVIEW.md`.
- Updated `02-Certifications/Managed Catalogue Review.md`.
- Updated `05-Proposals/Proposition AI Passport EBS v4.md` with the expanded counts and certificate lists.
- Exported `05-Proposals/Proposition AI Passport EBS v4 - expanded.docx` and `.html`.

Validation:

- `npm run lint` passed.
- `npm run build` passed.
