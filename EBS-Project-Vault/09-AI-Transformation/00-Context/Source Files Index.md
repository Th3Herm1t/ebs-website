---
tags: [context, sources]
created: 2026-07-10
---

# Source Files Index

This mini-vault is portable. External files are listed as absolute paths so future agents know where the original materials came from.

## Primary Sources

| Artifact | Path | Notes |
|---|---|---|
| Certification roadmap HTML | `C:\Users\abdel\Desktop\EBS WEB\Certification\EBS_Certifications_Roadmap-.html` | Raw certification catalogue and programme mapping. Contains embedded base64 badge images. |
| Ahmed initial recommendations | `C:\Users\abdel\Desktop\EBS WEB\Certification\initial recommendations.md` | WhatsApp-style notes from 2026-07-03. |
| EBS website repo | `C:\Users\abdel\Desktop\EBS WEB\ebs-website` | Next.js implementation. |
| Parent EBS vault | `C:\Users\abdel\Desktop\EBS WEB\EBS-Project-Vault` | Main website project vault. This folder is designed to remain copy-paste portable. |
| Managed final catalogue | `C:\Users\abdel\Desktop\EBS WEB\ebs-website\src\lib\certifications\final-catalogue.ts` | Active curated source of truth for the certification system. |
| Raw roadmap/audit module | `C:\Users\abdel\Desktop\EBS WEB\ebs-website\src\lib\certifications\roadmap.ts` | Parsed AI blocks and recap/audit reference. |
| Catalogue review report | `C:\Users\abdel\Desktop\EBS WEB\ebs-website\CERTIFICATION_CATALOGUE_REVIEW.md` | Generated counts and matrix audit. |
| Catalogue report generator | `C:\Users\abdel\Desktop\EBS WEB\ebs-website\scripts\generate-certification-catalogue-report.mjs` | Regenerates review counts from `final-catalogue.ts`. |

## Current Website Facts

- Public website should not directly expose external certification links.
- Certification links should be preserved for the future student space.
- Public catalogue should use provider logos and internal EBS-controlled UX.
- Active public-visible managed catalogue currently contains 121 records.
- The legacy extracted catalogue contains 267 raw entries and should not be treated as operationally mandatory.
