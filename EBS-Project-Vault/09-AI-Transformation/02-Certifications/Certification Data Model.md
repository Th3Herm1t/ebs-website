---
tags: [certifications, data-model]
created: 2026-07-10
updated: 2026-07-11
status: active
---

# Certification Data Model

Status: **active model implemented in website repo**.

Canonical file:

`C:\Users\abdel\Desktop\EBS WEB\ebs-website\src\lib\certifications\final-catalogue.ts`

The raw HTML roadmap is no longer the active data model. It is preserved as audit/reference material in `roadmap.ts` and in [[Certifications Catalogue]].

## Active Axes

Every managed certificate is classified across two required axes.

| Axis | Values |
|---|---|
| Classification | `ai-literacy`, `applied-ai`, `non-ai` |
| Requirement | `mandatory`, `optional` |

This creates a six-cell matrix. The current managed catalogue has non-zero cells globally and for every programme.

## Active TypeScript Shape

```ts
interface FinalCertification {
  id: string;
  name: string;
  provider: string;
  displayProvider: string;
  classification: "ai-literacy" | "applied-ai" | "non-ai";
  requirement: "mandatory" | "optional";
  studyLevels: ("licence" | "master")[];
  programmes: CertificationProgrammeSlug[];
  recommendedYear: "L1" | "L2" | "L3" | "M1" | "M2";
  deliveryPlatform: "provider-direct" | "forage" | "other";
  externalUrl?: string;
  isForageSimulation?: boolean;
  publicNote?: string;
  publicVisible: boolean;
  sourceNote?: string;
}
```

## Important Rules

- `externalUrl` is stored for internal/student-space use, not public website click-through.
- `displayProvider` may differ from `deliveryPlatform`, especially for Forage simulations.
- `requirement` replaces the old `tier` field for now.
- HubSpot records with `sourceNote` need course-specific URL verification.
- Cohort rollout fields are intentionally excluded for now.

## Future Student-Space Fields

These may be added later but are not part of the active catalogue yet:

- estimated hours
- language
- badge platform
- validation status
- last validated date
- completion proof type
- student-facing instructions
