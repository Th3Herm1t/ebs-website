---
tags: [website, certifications, rules]
created: 2026-07-10
updated: 2026-07-11
status: populated
---

# Certification Card Rules

## Required Display Fields

| Field | Source | Notes |
|---|---|---|
| Provider logo | Provider logo policy | Display per provider logo rules |
| Certification title | `final-catalogue.ts` | Full title, not abbreviated |
| Classification badge | AI Literacy / Applied AI / Non-AI | Explains conceptual role |
| Requirement badge | Mandatory / Optional | Shows operational role |
| Year badge | L1/L2/L3/M1/M2 | Shows recommended academic timing |
| Programme/category badge | Programme alignment or category | Helps students find relevant certs |

## Forage Display Rules

- Show company/provider logo first (e.g., Deloitte, KPMG, JPMorgan).
- Add `*Simulation Forage` at the bottom as secondary note.
- Example: **Deloitte** Data Analytics Simulation `*Simulation Forage`
- Do not make "Forage" the primary visual element.

## Links Rules

| Context | External Links? | Notes |
|---|---|---|
| Public cards (ebs.tn) | ❌ No | Cards show info only; no redirect to provider |
| Public detail modal/page | ❌ No | Description + metadata only |
| Future student space | ✅ Yes | After login, direct links to certification platforms |
| Future Wall of Badges | ✅ Yes | Links to Credly badges if available |

## Visual Hierarchy

1. **Provider credibility** — logo + provider name (most recognizable element).
2. **Certification title** — what the student learns.
3. **Relevance metadata** — level, duration, programme alignment.
4. **EBS integration context** — mandatory/optional badge, classification, recommended year.

## Card States

| State | Visual Treatment | Notes |
|---|---|---|
| Mandatory | Highlighted border, "Mandatory" badge | Clear signal to students |
| Optional | Muted border, "Optional" badge | Available for ambitious students |
| Completed | Green checkmark, "Completed" badge | Student space only |
| In-progress | Yellow progress indicator | Student space only |

## Accessibility

- Alt text for all provider logos.
- Color is not the only differentiator for requirement/classification (use text labels too).
- Keyboard navigable cards.
- Screen reader compatible tier labels.
