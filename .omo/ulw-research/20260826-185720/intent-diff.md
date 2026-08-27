# Intent vs Reality

| intent_id | Expected truth | Observed reality | Diff | Violated invariant | Intent source | Supporting observations | Status | Claims |
|---|---|---|---|---|---|---|---|---|
| I-001 | The existing Next.js implementation is the active new EBS rebuild and must be preserved. | Repository contains the active app under `ebs-website/`; user explicitly corrected that it is the new work. | None known; verify architecture and history. | Do not discard current implementation. | User correction, 2026-08-26 | O-001 | true | C-001 |
| I-002 | The legacy WordPress stack is not present in this repository. | No WP code has been identified; legacy WP is external context only. | Verify by repository-wide inspection. | Do not plan an in-repo WP migration. | User correction, 2026-08-26 | O-001 | true | C-002 |
| I-003 | EBS is a long-term Propulsia client and the website rebuild is strategically linked to future CRM work. | Founder memory confirms EBS is a current client; detailed relationship and CRM scope remain to be verified from vault/user evidence. | Stakeholder roles and CRM boundaries are not yet registered canonically. | Separate verified client facts from assumptions. | User statement and founder recall | O-002, O-003 | unknown | C-003 |
| I-004 | Repository re-initiation must improve standards without erasing valid current work. | Current structure, tests, CI, docs, deployment, and quality gates have not yet been comprehensively assessed. | Standards gap map pending. | Preserve working behavior before refactoring. | User request | O-001 | unknown | C-004 |
