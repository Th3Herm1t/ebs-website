---
tags: [certifications, catalogue, review, source-of-truth]
created: 2026-07-11
status: active
---

# Managed Catalogue Review

This note summarizes the active curated certification catalogue implemented in the EBS website repository.

Canonical implementation file:

`C:\Users\abdel\Desktop\EBS WEB\ebs-website\src\lib\certifications\final-catalogue.ts`

Generated report:

`C:\Users\abdel\Desktop\EBS WEB\ebs-website\CERTIFICATION_CATALOGUE_REVIEW.md`

Report generator:

`C:\Users\abdel\Desktop\EBS WEB\ebs-website\scripts\generate-certification-catalogue-report.mjs`

## Global Matrix

| Classification | Mandatory | Optional |
|---|---:|---:|
| AI Literacy | 9 | 6 |
| Applied AI | 30 | 15 |
| Non-AI | 54 | 42 |

Public-visible managed catalogue count: **156** certification records.

## Programme Counts

| Programme | Total | Mandatory | Optional | AI Lit M | AI Lit O | Applied AI M | Applied AI O | Non-AI M | Non-AI O |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| management | 25 | 14 | 11 | 5 | 5 | 2 | 1 | 7 | 5 |
| marketing | 28 | 14 | 14 | 5 | 5 | 3 | 1 | 6 | 8 |
| finance | 24 | 13 | 11 | 5 | 5 | 2 | 1 | 6 | 5 |
| informatique-ia | 26 | 14 | 12 | 5 | 5 | 4 | 3 | 5 | 4 |
| cybersecurite | 26 | 14 | 12 | 5 | 5 | 3 | 1 | 6 | 6 |
| marketing-digital-ia | 23 | 14 | 9 | 4 | 1 | 4 | 5 | 6 | 3 |
| crm | 24 | 14 | 10 | 4 | 1 | 4 | 5 | 6 | 4 |
| startups | 22 | 14 | 8 | 4 | 1 | 4 | 4 | 6 | 3 |
| ingenierie-financiere | 20 | 14 | 6 | 4 | 1 | 4 | 1 | 6 | 4 |

## Audit Result

- Programmes above 14 mandatory certifications: none.
- Programmes with fewer than 3 optional certifications: none.
- Programme matrix cells with zero items: none.

## Operating Notes

- Public website certification cards should not link externally.
- External URLs remain in the data model for future student-space operations.
- Forage simulations use the real organization as provider and show `*Simulation Forage` as a small note.
- HubSpot entries marked with `sourceNote` require course-specific URL validation.
- Cohort rollout policy is intentionally excluded for now.
