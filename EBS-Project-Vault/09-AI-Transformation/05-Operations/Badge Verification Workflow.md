---
tags: [operations, badges]
created: 2026-07-10
updated: 2026-07-10
status: populated
---

# Badge Verification Workflow

## Why Verification Matters

Without verification, badges are just claims. Verification ensures:
- The student actually completed the certification.
- The badge is from the claimed provider.
- EBS public claims are defensible.

## Workflow Phases

### Phase 1: Pre-Student-Space (Now → Q4 2026)

1. Student completes certification on provider platform.
2. Student submits via Google Form:
   - Full name (as on certificate).
   - Certification name.
   - Provider name.
   - Date of completion.
   - Badge/certificate URL or screenshot.
   - Student email.
3. EBS faculty owner reviews submission:
   - Validates provider platform URL is legitimate.
   - Checks name matches EBS enrollment.
   - Confirms date is reasonable.
   - Marks as verified or rejects with reason.
4. Verification recorded in shared spreadsheet.
5. Verified students invited to opt into Wall of Badges.

### Phase 2: Student Space (Q4 2026+)

1. Student logs into EBS student space.
2. Student selects certification from catalogue.
3. Student uploads badge/certificate (file or Credly URL).
4. System validates:
   - Credly API check (if available).
   - Provider URL check.
   - Name match against enrollment database.
5. Faculty owner reviews flagged items only (bulk auto-verified).
6. Verified badge appears in student's profile.
7. Student grants public Wall of Badges consent.

### Phase 3: Automated (Future)

1. Credly API integration for real-time badge verification.
2. Automated name matching against EBS enrollment.
3. Auto-approval for verified badges; manual review for exceptions only.
4. Badge wall updates automatically upon verification.

## Verification Criteria

| Criterion | Required | How to Check |
|---|---|---|
| Provider platform URL valid | Yes | Check URL resolves to provider domain |
| Badge/certificate exists | Yes | Verify badge is visible on provider platform |
| Name matches EBS enrollment | Yes | Cross-reference with EBS student records |
| Date is reasonable | Yes | Completion date should be within last 12 months |
| Course matches catalogue | Yes | Verify course name matches an EBS-recognized certification |

## Rejection Criteria

- Badge URL does not resolve.
- Name does not match EBS enrollment.
- Certificate is from a provider not in the EBS catalogue.
- Screenshot is clearly edited or inconsistent.
- Duplicate submission (same cert already verified).

## Verification Log Template

| Student | Certification | Provider | Date Submitted | Verified By | Status | Date Verified | Notes |
|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | — |
