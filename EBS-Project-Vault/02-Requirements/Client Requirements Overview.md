---
tags: [requirements, client]
created: 2026-06-04
---

# 🎯 Client Requirements Overview

## Modification Batches

The client delivers requirements in batches via annotated Word documents (.docx files). Each batch contains:
- Screenshots with annotations
- Text content for each section
- Color specifications
- References to specific templates to use for styling

### Batch Tracker

| Batch | Document | Status | Focus |
|---|---|---|---|
| **Batch 1** | `Page d'accueil ebs.tn.docx` | 📥 Received | Homepage modifications |
| **Batch 2** | `DOCUMENT DE CONTENU COMPLET.docx` (08/06/2026) | 📥 Received | Full website content — 50 pages, all text, blocs, CTAs, structure |
| **Batch 3** | TBD | ⬜ Pending | TBD |

---

## Key Design Principles (Extracted from Batch 1)

### Color Palette
| Color | Hex | Usage |
|---|---|---|
| Dark Teal | `#264653` | Services section background |
| Teal/Green | `#2a9d8f` | Services section accent |
| Gold/Yellow | `#e9c46a` | Services section accent |
| Orange | `#FF6D00` | Primary CTA / Headings (from original) |
| White | `#FFFFFF` | Navigation band, backgrounds |

### Typography
- **Headings:** Poppins (Bold/Semi-Bold)
- **Body:** Roboto
- **Style:** Clean, professional, university-grade aesthetic

### Navigation Structure (New)
```
L'université – Licences – Masters – International – Blog – Contact
```

Previous navigation:
```
EBS – LICENCES – MASTERS – Parcours internationaux – Blog – Contact
(+ Top bar: Étudiants internationaux, Entreprises partenaires, Stages en entreprises, BLOG, Contactez-nous)
```

---

## Pages to Build

### From Current Website (ebs.tn)
1. **Homepage** ← Current focus (Batch 1)
2. About / Qui-sommes nous
3. Campus
4. EBS à la une
5. EBS Alumni
6. EBS en photos
7. Licences overview + 4 individual licence pages
8. Masters overview + 4 individual master pages
9. International Programs (multiple sub-pages)
10. Blog listing + Blog single
11. Contact
12. Events listing + Event single

### From Next.js App (Already Scaffolded)
The following routes already exist in the Next.js project:
- `/` (homepage)
- `/about`
- `/blog`, `/blog-single`
- `/cart`, `/checkout`
- `/contact`
- `/courses`, `/course-2`, `/course-3`, `/course-sidebar`, `/course-single`
- `/events`, `/event-single`
- `/faq`
- `/index-2`, `/index-3`
- `/login`, `/register`
- `/shop`, `/shop-single`
- `/team`, `/team-details`
- `/thank-you`

---

## Detailed Batch Notes
- [[Batch 1 - Homepage Modifications]]
- [[Batch 2 - Full Website Content]]
