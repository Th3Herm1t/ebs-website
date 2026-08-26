---
tags: [academic-design, programmes, mapping]
created: 2026-07-10
updated: 2026-07-10
status: tiered
---

# Programme Mapping

> Legacy mapping draft from the raw 267-entry extraction. Do not use as the active operational model.
> Use `src/lib/certifications/final-catalogue.ts` and [[../02-Certifications/Managed Catalogue Review]] for current mandatory/optional assignments.

> 267 total cert entries → 261 unique (6 duplicates across sections).
> See [[../02-Certifications/Certifications Catalogue]] for full data.

## Duplicate Register

These certifications appear in multiple programme sections. They should be tracked once but mapped to multiple programmes.

| Title | IDs | Sections | Resolution |
|---|---|---|---|
| Scrum with AI Certified (SAC™) | CERT-023, CERT-040 | Transversal M1, Management L3 | Keep in transversal block. Remove from Management-specific list. |
| CS50: Introduction to Computer Science | CERT-095, CERT-113 | Info IA L1, Cyber L1 | Shared foundation. Map to both programmes. Track as one. |
| CS50's Introduction to Databases with SQL | CERT-098, CERT-115 | Info IA L2, Cyber L2 | Shared foundation. Map to both programmes. Track as one. |
| AI for Marketing, Sales & Service Bootcamp | CERT-189, CERT-223 | Marketing M2, CRM M2 | Shared master cert. Map to both programmes. Track as one. |
| Reporting and Analytics Bootcamp | CERT-191, CERT-225 | Marketing M2, CRM M2 | Shared master cert. Map to both programmes. Track as one. |
| Clustering Clients avec KMeans | CERT-208, CERT-235 | CRM M2, Project Mgmt M2 | Shared master cert. Map to both programmes. Track as one. |

---

## Licence Programmes

### Transversal AI Core (all licences)

See [[Licence AI Core]] for details.

| Tier | Count | Cert IDs |
|---|---|---|
| Required | 7 | CERT-001, CERT-002, CERT-007, CERT-011, CERT-012, CERT-014, CERT-022 |
| Recommended | 8 | CERT-003, CERT-004, CERT-008, CERT-009, CERT-010, CERT-018, CERT-020, CERT-021 |
| Optional | 7 | CERT-005, CERT-006, CERT-013, CERT-015, CERT-016, CERT-017, CERT-019 |

### Licence en Management (programme-specific)

| Tier | Count | Cert IDs |
|---|---|---|
| Required | 2 | CERT-038, CERT-042 |
| Recommended | 5 | CERT-037, CERT-039, CERT-043, CERT-044, CERT-046 |
| Optional | 11 | CERT-040*, CERT-041, CERT-045, CERT-047, CERT-048, CERT-049, CERT-050, CERT-051, CERT-052, CERT-053, CERT-054 |

> *CERT-040 (Scrum with AI) is duplicate of transversal CERT-023. Listed as optional here since it is already required for masters.

> **Total required for Management licence: 9** (7 AI core + 2 programme)

### Licence en Marketing (programme-specific)

| Tier | Count | Cert IDs |
|---|---|---|
| Required | 2 | CERT-055, CERT-059 |
| Recommended | 6 | CERT-056, CERT-058, CERT-063, CERT-067, CERT-068, CERT-069 |
| Optional | 17 | CERT-057, CERT-060, CERT-061, CERT-062, CERT-064, CERT-065, CERT-066, CERT-070, CERT-071, CERT-072, CERT-073, CERT-074, CERT-075, CERT-076, CERT-077, CERT-078, CERT-079 |

> **Total required for Marketing licence: 9** (7 AI core + 2 programme)

### Licence en Finance (programme-specific)

| Tier | Count | Cert IDs |
|---|---|---|
| Required | 2 | CERT-080, CERT-081 |
| Recommended | 2 | CERT-084, CERT-089 |
| Optional | 10 | CERT-082, CERT-083, CERT-085, CERT-086, CERT-087, CERT-088, CERT-090, CERT-091, CERT-092 |

> **Total required for Finance licence: 9** (7 AI core + 2 programme)

### Licence en Génie Logiciel — Option IA (programme-specific)

| Tier | Count | Cert IDs |
|---|---|---|
| Required | 3 | CERT-095, CERT-104, CERT-105 |
| Recommended | 6 | CERT-096, CERT-097, CERT-101, CERT-106, CERT-107, CERT-109 |
| Optional | 8 | CERT-094, CERT-098, CERT-099, CERT-100, CERT-102, CERT-103, CERT-108 |

> **Total required for Info IA licence: 10** (7 AI core + 3 programme)

### Licence en Génie Logiciel — Option Cybersécurité (programme-specific)

| Tier | Count | Cert IDs |
|---|---|---|
| Required | 3 | CERT-121, CERT-122, CERT-129 |
| Recommended | 7 | CERT-113, CERT-114, CERT-117, CERT-119, CERT-122, CERT-130, CERT-133 |
| Optional | 27 | CERT-110, CERT-111, CERT-112, CERT-115, CERT-116, CERT-118, CERT-120, CERT-123, CERT-124, CERT-125, CERT-126, CERT-127, CERT-128, CERT-131, CERT-132, CERT-134, CERT-135, CERT-136, CERT-137, CERT-138, CERT-139, CERT-140, CERT-141, CERT-142, CERT-143, CERT-144, CERT-145, CERT-146 |

> **Total required for Cyber licence: 10** (7 AI core + 3 programme)

---

## Master Programmes

### Transversal AI Core (all masters)

See [[Master AI Core]] for details.

| Tier | Count | Cert IDs |
|---|---|---|
| Required | 5 | CERT-024, CERT-025, CERT-028, CERT-029, CERT-031 |
| Recommended | 5 | CERT-023, CERT-026, CERT-027, CERT-032, CERT-033 |
| Optional | 4 | CERT-030, CERT-034, CERT-035, CERT-036 |

### Master en Digital Marketing & IA (programme-specific)

| Tier | Count | Cert IDs |
|---|---|---|
| Required | 3 | CERT-147, CERT-155, CERT-167 |
| Recommended | 8 | CERT-148, CERT-149, CERT-156, CERT-163, CERT-164, CERT-168, CERT-170, CERT-173 |
| Optional | 35 | CERT-150–CERT-154, CERT-157–CERT-162, CERT-165, CERT-166, CERT-169, CERT-171, CERT-172, CERT-174–CERT-185, CERT-186–CERT-192 |

> **Total required for Marketing & IA master: 8** (5 AI core + 3 programme)

### Master en CRM & Transformation Digitale (programme-specific)

| Tier | Count | Cert IDs |
|---|---|---|
| Required | 3 | CERT-196, CERT-198, CERT-217 |
| Recommended | 8 | CERT-193, CERT-195, CERT-199, CERT-205, CERT-206, CERT-210, CERT-227, CERT-228 |
| Optional | 27 | CERT-194, CERT-200, CERT-201, CERT-202, CERT-203, CERT-204, CERT-207, CERT-208, CERT-209, CERT-211–CERT-216, CERT-218–CERT-226, CERT-229, CERT-230 |

> **Total required for CRM master: 8** (5 AI core + 3 programme)

### Master en Project Management (programme-specific)

| Tier | Count | Cert IDs |
|---|---|---|
| Required | 3 | CERT-231, CERT-232, CERT-236 |
| Recommended | 5 | CERT-233, CERT-234, CERT-237, CERT-239, CERT-243 |
| Optional | 8 | CERT-235, CERT-238, CERT-240, CERT-241, CERT-242, CERT-244, CERT-245, CERT-246 |

> **Total required for Project Management master: 8** (5 AI core + 3 programme)

### Master en Ingénierie Financière (programme-specific)

| Tier | Count | Cert IDs |
|---|---|---|
| Required | 0 | (Relies on AI core + Forage simulations as recommended) |
| Recommended | 5 | CERT-251, CERT-247, CERT-249, CERT-255, CERT-260 |
| Optional | 16 | CERT-248, CERT-250, CERT-252, CERT-253, CERT-254, CERT-256, CERT-257, CERT-258, CERT-259, CERT-261, CERT-262, CERT-263, CERT-264, CERT-265, CERT-266, CERT-267 |

> **Total required for Ingénierie Financière master: 5** (5 AI core + 0 programme-specific). This programme is heavily Forage-simulation based, so required load is intentionally lower.

---

## Summary Table

| Programme | AI Core Required | Programme Required | Total Required | Recommended | Optional |
|---|---:|---:|---:|---:|---:|
| Licence Management | 7 | 2 | **9** | 8 | 11 |
| Licence Marketing | 7 | 2 | **9** | 6 | 17 |
| Licence Finance | 7 | 2 | **9** | 2 | 10 |
| Licence Info IA | 7 | 3 | **10** | 6 | 8 |
| Licence Cyber | 7 | 3 | **10** | 7 | 28 |
| Master Marketing & IA | 5 | 3 | **8** | 8 | 35 |
| Master CRM | 5 | 3 | **8** | 8 | 27 |
| Master Project Mgmt | 5 | 3 | **8** | 5 | 8 |
| Master Ing. Financière | 5 | 0 | **5** | 5 | 16 |
