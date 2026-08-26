---
tags: [website, data, integration]
created: 2026-07-10
updated: 2026-07-11
status: active
---

# Data Integration Plan

## Goal

Move from static HTML roadmap to structured data powering both public website and future student space.

## Active Source Files

| File | Role |
|---|---|
| `src/lib/certifications/final-catalogue.ts` | Active managed source of truth. |
| `src/lib/certifications/roadmap.ts` | Raw/audit roadmap reference. |
| `CERTIFICATION_CATALOGUE_REVIEW.md` | Generated report for counts and matrix audit. |
| `scripts/generate-certification-catalogue-report.mjs` | Regenerates the report from the active catalogue. |

## Completed Steps

1. Extracted certifications from HTML roadmap into raw/audit understanding.
2. Created `roadmap.ts` for parsed raw AI blocks and recap mismatch tracking.
3. Created `final-catalogue.ts` as the managed source of truth.
4. Added classification and requirement mappings: AI Literacy, Applied AI, Non-AI x Mandatory, Optional.
5. Applied Forage simulation rules in the managed catalogue.
6. Generated the catalogue review report.

## Public Data vs Private Data

| Field | Public (ebs.tn) | Private (student space) |
|---|---|---|
| Certification name | Yes | Yes |
| Provider/display provider | Yes | Yes |
| Classification | Yes | Yes |
| Requirement | Yes | Yes |
| Programme alignment | Yes | Yes |
| Recommended year | Yes | Yes |
| External URL | No | Yes |
| Badge/certificate format | No | Yes |
| Completion status | No | Yes |
| Last validation date | No | Yes |

## Active Schema

See [[../02-Certifications/Certification Data Model]].

## Integration Path

### Phase 1: Website Public Catalogue

- Replace hardcoded certification display data with selectors from `final-catalogue.ts`.
- Public cards must not link externally.
- Add filters for classification and requirement.
- Display Forage simulations with real organization first and `*Simulation Forage` note.

### Phase 2: Student Space

- Use `externalUrl` behind authentication.
- Track completion and badge uploads.
- Validate HubSpot course-specific URLs before launch.

### Phase 3: Database

- Move catalogue, student progress, and badge verification into PostgreSQL or equivalent if scale requires it.
