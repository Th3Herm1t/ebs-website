---
tags: [notes, meeting, kickoff]
date: 2026-06-04
---

# Meeting Notes — 2026-06-04 — Project Kickoff

## Context
Initial project setup and analysis of the first batch of client modifications for the EBS website rebuild.

## What Was Done

### 1. Original Website Analysis (ebs.tn)
- Analyzed the current WordPress + Elementor website
- Documented the existing page structure, navigation, and content
- Identified current tech stack: WordPress, Elementor, WPForms, Yoast SEO, WP Rocket, Zoho CRM, HubSpot chat, TranslatePress
- Current site is French-only with language switcher available
- Site uses Poppins + Roboto fonts with orange (#FF6D00) primary accent

### 2. Next.js Project Review
- Confirmed the Penn template has already been converted to Next.js 16 + shadcn/ui
- 46 section components already exist
- 5 layout components (TopBar, Header, Header2, Footer, PageHeader)
- 23+ page routes scaffolded
- Docker deployment ready

### 3. Batch 1 Document Analysis
- Source: `Page d'accueil ebs.tn.docx` (6.6 MB with annotated screenshots)
- Focus: Complete homepage redesign
- 16 sections identified with specific modifications
- Key changes: new hero copy, Educa dropdown, Optima services section, news slider, updated content throughout

### 4. Template Inventory
- 6 templates available: Penn (primary), Educa, Optima, Evnia, Lawyer, Profit
- Mapped which templates feed which sections

## Key Decisions
- Homepage section order follows the client's batch document layout
- Navigation simplified to: L'université – Licences – Masters – International – Blog – Contact
- Color scheme for services: #264653 / #2a9d8f / #e9c46a

## Open Questions
- Social media platforms for top bar?
- Hero section dropdown functionality (program selector?)
- Partner and certification logos source?
- Language support scope (FR only? FR/EN?)
- Chat widget integration plans?

## Next Steps
- [ ] Begin Batch 1 implementation (high priority sections first)
- [ ] Clarify open questions with client
- [ ] Await Batch 2 from client
