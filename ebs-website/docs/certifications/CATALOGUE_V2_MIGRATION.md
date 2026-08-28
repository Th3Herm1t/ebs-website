# EBS Certification Catalogue v2 migration

This folder is repo-ready for `Th3Herm1t/ebs-website`.

## Snapshot

- Audit date: `2026-08-28`
- Original public rows: **156**
- Deduplicated Resources: **137**
- Programme-specific CurriculumAssignments: **218**
- Approved / approved-with-label: **95**
- Student/institution access checks: **33**
- Replace before release: **24**
- Retired: **4**

## Model

`Resource` stores external truth:

- canonical provider/title/URL
- learning cost
- credential type and credential cost
- access/institutional dependencies
- verification status/evidence/review date
- release decision

`CurriculumAssignment` stores the EBS decision:

- programme and year
- mandatory/optional status
- curriculum role
- depth profile
- release state
- mapping note/replacement

This solves the current denormalization problem: the same course can be core for one
programme and onboarding/enrichment for another without duplicating provider truth.

## Informatique rule

For `informatique-ia`, generic AI-literacy/prompting resources are not the
technical core. The identity is **AI Builder**:

L1 foundations → L2 AI/ML → L3 AI Systems Engineering → production-grade PFE.

## Release safety

The selectors are fail-closed:

- `APPROVED` / `APPROVED_WITH_LABEL`: eligible for public approved pathways.
- `VERIFY_STUDENT_ACCESS`: optional/provisional until a real EBS/Tunisia account test passes.
- `REPLACE_BEFORE_RELEASE` / `RETIRE`: hidden from release pathways.

## Migration sequence inside the repo

1. Add `src/lib/certifications/v2/*`.
2. Run `validateCatalogueV2()` in a build/test check.
3. Find consumers of the old catalogue.
4. Migrate consumers to `getProgrammeCatalogue()` and `getResourceCounts()`.
5. For components that cannot be migrated immediately, use `getLegacyCatalogue()`.
6. Stop deriving a global "certification count" from assignment rows; use resource-level counts.
7. Remove the compatibility adapter once all UI consumers understand v2.
8. Only then retire the old monolithic catalogue source.

## Important

Do **not** replace the old module blindly until its export names and all consumers
have been inspected. The adapter exists specifically to make this a staged,
compile-safe migration.
