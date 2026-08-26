# Current Context

Updated: 2026-07-11

## Current State

The project moved from legacy/raw roadmap interpretation into a managed certification source of truth.

Active implementation files in the website repo:

- `src/lib/certifications/final-catalogue.ts` — active managed catalogue.
- `src/lib/certifications/roadmap.ts` — parsed raw/audit roadmap data.
- `src/app/[locale]/certifications/CertificationsClient.tsx` — public catalogue page now displays managed catalogue cards and filters.
- `CERTIFICATION_CATALOGUE_REVIEW.md` — generated count/matrix report.
- `scripts/generate-certification-catalogue-report.mjs` — report generator.

## Active Model

Every managed certificate uses:

- Classification: `ai-literacy`, `applied-ai`, `non-ai`.
- Requirement: `mandatory`, `optional`.
- Delivery platform: `provider-direct`, `forage`, `other`.

Forage is treated as a delivery platform, not the displayed provider. Public display should show the real organization and add `*Simulation Forage`.

## Current Managed Counts

| Classification | Mandatory | Optional |
|---|---:|---:|
| AI Literacy | 9 | 6 |
| Applied AI | 30 | 15 |
| Non-AI | 54 | 42 |

Total public-visible managed records: 156.

No programme exceeds 14 mandatory certifications. No programme has a zero matrix cell.

## Deferred On Purpose

- Cohort rollout policy.
- Semester enforcement.
- Student-space implementation.

## Vault Cleanup Status

- Active vault guidance now uses `mandatory` and `optional` instead of the legacy `required/recommended/optional` model.
- `Semester Roadmap.md` and `Programme Mapping.md` are marked as superseded/legacy drafts because they are based on the older tier model.
- `Certifications Catalogue.md` is retained only as a raw 267-entry reference.

## Next Recommended Work

1. Add programme-specific certification sections to licence/master detail pages from `final-catalogue.ts`.
2. Validate HubSpot course-specific URLs marked with `sourceNote`.
3. Review the managed catalogue with Abdelkarim/Ahmed.
4. Decide final public count claim wording.
