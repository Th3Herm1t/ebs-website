---
tags: [website, student-space]
created: 2026-07-10
updated: 2026-07-11
status: populated
---

# Student Space Requirements

> Ahmed mentioned student space work as a later step, likely around August.

## Purpose

The student space should deliver the operational side of certifications — the part that students and faculty actually interact with.

## Candidate Features

### Must-Have (Phase 1 — August 2026)

| Feature | Description | Priority |
|---|---|---|
| Student login | EBS authentication (email/password or SSO) | Critical |
| Assigned certification path | Programme-specific mandatory/optional certs | Critical |
| External links to providers | Direct links to certification platforms | Critical |
| Completion status | Track which certs are completed/in-progress/not started | Critical |
| Badge/certificate upload | Students submit proof of completion | Critical |
| Staff validation | Faculty reviews and approves submissions | Critical |

### Should-Have (Phase 2 — Q4 2026)

| Feature | Description | Priority |
|---|---|---|
| Portfolio artifact submission | Upload projects for faculty assessment | High |
| Wall of Badges consent toggle | Opt-in to public badge display | High |
| Progress dashboard | Visual progress through programme certification path | High |
| Notification system | Reminders for upcoming deadlines | Medium |

### Nice-to-Have (Phase 3 — 2027)

| Feature | Description | Priority |
|---|---|---|
| Credly API integration | Auto-verify badges via Credly | Medium |
| LinkedIn badge sync | One-click badge sharing to LinkedIn | Low |
| Employer portal | Employers verify badge authenticity | Low |
| Analytics dashboard | Completion rates, popular certs, programme health | Medium |

## Public vs Private Split

| Public Website (ebs.tn) | Student Space |
|---|---|
| Marketing and credibility | Actual links and tracking |
| No external certification links | External certification links |
| Provider logos and pathways | Completion workflows |
| Wall of Badges previews | Badge upload/validation |
| Certification descriptions | Student progress tracking |
| Programme requirement overviews | Programme-specific paths |

## Technical Architecture (Proposed)

### Phase 1: Lightweight

- Next.js authenticated routes (middleware + session).
- TypeScript/JSON export from `final-catalogue.ts`.
- Google Form for badge submission ( interim).
- Spreadsheet for verification tracking (interim).

### Phase 2: Database-backed

- PostgreSQL database for student + certification + verification data.
- Admin panel for faculty validation.
- API for badge verification.
- Wall of Badges page with consent filtering.

### Phase 3: Integrated

- Credly API for real-time badge verification.
- EBS enrollment database integration.
- Analytics on completion rates.
- Employer verification portal.

## Timeline

| Milestone | Target | Status |
|---|---|---|
| Public certification catalogue on ebs.tn | Now | ✅ Live |
| Student space Phase 1 | August 2026 | ⬜ Pending |
| Student space Phase 2 | Q4 2026 | ⬜ Pending |
| Student space Phase 3 | 2027 | ⬜ Pending |
