---
tags: [ai-transformation, hub, ebs, propulsia]
created: 2026-07-10
updated: 2026-07-11
status: active
---

# EBS AI Transformation Hub

> Portable project management and knowledge base for the EBS AI transformation initiative.

## Mission

Modernize Espima Business School by integrating AI as a transversal skill across all programmes, supported by curated international certifications, applied projects, and a future student badge ecosystem.

## Current Strategic Thesis

EBS should not position this as "200+ online certificates". EBS should position it as an **AI Passport**: every student graduates with AI literacy, domain-specific AI workflows, verified badges, and a practical portfolio.

## Current Phase

**Phase 1: Managed source of truth and operating model.**

The raw certification roadmap and Ahmed's first recommendations are now treated as legacy/reference inputs. The active implementation source of truth is the curated certification catalogue in the EBS website repository.

Current managed source of truth:

- Website data model: `C:\Users\abdel\Desktop\EBS WEB\ebs-website\src\lib\certifications\final-catalogue.ts`
- Raw/audit roadmap data: `C:\Users\abdel\Desktop\EBS WEB\ebs-website\src\lib\certifications\roadmap.ts`
- Generated review report: `C:\Users\abdel\Desktop\EBS WEB\ebs-website\CERTIFICATION_CATALOGUE_REVIEW.md`

## Quick Navigation

| Area | Link |
|---|---|
| Context | [[00-Context/Project Context]] |
| Source Files | [[00-Context/Source Files Index]] |
| Stakeholders | [[00-Context/Stakeholder Map]] |
| AI Passport | [[01-Strategy/EBS AI Passport Model]] |
| North Star | [[01-Strategy/AI Transformation North Star]] |
| Certification Data Model | [[02-Certifications/Certification Data Model]] |
| Managed Catalogue Review | [[02-Certifications/Managed Catalogue Review]] |
| Required vs Optional | [[02-Certifications/Required vs Recommended vs Optional]] |
| Forage Rules | [[02-Certifications/Forage Simulation Rules]] |
| Public UX | [[04-Website-Implementation/Public Certifications UX]] |
| Wall of Badges | [[04-Website-Implementation/Wall of Badges Spec]] |
| Deployment Plan | [[05-Operations/Deployment Plan]] |
| Decisions | [[07-Decisions/Decision Log]] |
| Current Context | [[09-Agent-Handoff/Current Context]] |
| Open Questions | [[09-Agent-Handoff/Open Questions]] |
| Agent Rules | [[09-Agent-Handoff/Agent Working Rules]] |

## Immediate Priorities

- [x] Convert the HTML roadmap into structured raw/audit data.
- [x] Define the managed certification matrix: AI Literacy, Applied AI, Non-AI x Mandatory, Optional.
- [x] Create the curated final catalogue in `final-catalogue.ts`.
- [x] Generate a catalogue review report with programme counts and zero-cell audit.
- [ ] Review the 121-cert managed catalogue with Ahmed/Raouf.
- [ ] Decide whether the public claim should be `100+`, `120+`, `150+ opportunities`, or `certification pathways`.
- [ ] Begin Phase 2: public website catalogue integration using the managed catalogue, not the raw HTML.
- [ ] Begin Phase 3: faculty enablement planning.
- [ ] Validate HubSpot course-specific links marked with `sourceNote`.
- [ ] Evaluate AWS additions only after the current catalogue is approved.

## Key Decisions So Far

- Public certification cards should not link externally.
- External certification links belong in the future student space.
- Forage simulations should display the company/provider first, with `*Simulation Forage` as a secondary note.
- The full roadmap should not be treated as mandatory.
- The strategic product should be framed as `EBS AI Passport`.
- The Wall of Badges is strategically relevant for proof/social validation.
- The active requirement model is now `mandatory` and `optional`; `recommended` is deferred/removed from the active data model.
- Conceptual classification is mandatory: `AI Literacy`, `Applied AI`, `Non-AI`.
- The managed catalogue currently contains 121 public-visible certification records.
- The managed matrix has no zero cells at programme level.
- Mandatory workload currently ranges from 11 to 14 certifications per programme.
- AWS AI Practitioner (AIF-C01) remains a candidate but is not part of the active managed catalogue yet.

## If You Are An AI Agent

Read these first:

1. [[09-Agent-Handoff/Agent Working Rules]]
2. [[09-Agent-Handoff/Current Context]]
3. [[07-Decisions/Decision Log]]
4. [[09-Agent-Handoff/Open Questions]]

Then update [[09-Agent-Handoff/Session Log]] when you finish a meaningful work session.
