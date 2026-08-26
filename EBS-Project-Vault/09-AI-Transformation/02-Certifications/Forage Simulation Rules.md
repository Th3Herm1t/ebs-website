---
tags: [certifications, forage, rules]
created: 2026-07-10
---

# Forage Simulation Rules

## Ahmed's Recommendation

For Forage simulations, the public certification card should foreground the company or certifying organization, not Forage.

## Display Rule

Primary display:

- Company/provider name
- Company/provider logo
- Simulation title

Secondary display:

- `*Simulation Forage` at the bottom of the certification box.

## Example

Bad:

```text
Forage - JPMorgan Simulation
```

Good:

```text
JPMorgan Chase & Co.
Investment Banking Virtual Experience
*Simulation Forage
```

## Data Model Implication

```yaml
provider: JPMorgan Chase & Co.
displayProvider: JPMorgan Chase & Co.
platform: Forage
isSimulation: true
simulationPlatform: Forage
```
