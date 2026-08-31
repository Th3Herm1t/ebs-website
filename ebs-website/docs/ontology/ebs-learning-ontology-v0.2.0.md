# EBS Learning Ontology

**Version:** 0.2.0-draft
**Date:** 2026-08-31
**Status:** Canonicalization proposal for EBS LMS and website

## Purpose

The EBS LMS is the source of truth for official EBS academic programmes and
the professional learning and credential layer attached to them. The website
is a consumer of that model. This ontology deliberately avoids a second
catalogue-specific programme abstraction.

## Core Concepts

| Concept | Definition |
| --- | --- |
| Academic Level | Degree family: `LICENCE` or `MASTER`. |
| Academic Year | Year within a programme: `L1`, `L2`, `L3`, `M1`, or `M2`. |
| Programme | Official EBS academic offering, such as Licence en Marketing or Master CRM. |
| Competency | A skill module required inside one programme and academic year. |
| Academic Requirement | The rule defining how a competency is satisfied. |
| Learning Resource | A course, module, pathway, guided project, or assessment preparation activity. |
| Credential | Proof issued after completing or passing a resource: certificate, badge, achievement, accreditation, or similar. |
| Certification | A credential with certification-level professional validation. It is not a synonym for every credential. |
| Provider | Organisation that provides a resource or issues a credential. |
| Platform | Service where a learning resource is delivered. |
| Opportunity | A learning resource recommended or discoverable for a programme, year, and competency. |
| Student Programme Pathway | A student's progression through one EBS programme and academic year sequence. |
| Student Credential Evidence | A student's submitted proof that a credential was obtained. |
| Catalogue Release | An immutable published version of the learning and credential data. |

## Satisfaction Rule

An Academic Requirement is satisfied when the student obtains at least the
configured minimum number of accepted credentials or evidence paths for its
Competency.

Example: the `Culture IA` competency in `L1` of the `Licence en Marketing`
may require one accepted credential from a list of approved external options.
An EBS assessment may also be an accepted evidence path where configured.

## Naming Rules

- `Programme` means an official EBS Licence or Master.
- `Academic Level` means Licence or Master, never resource difficulty.
- `Academic Year` means L1/L2/L3/M1/M2.
- `Learning Resource` means the thing a student studies or follows.
- `Credential` means the proof produced by that resource.
- `Certification` is only used for a credential whose type is certification.
- `Opportunity` means a resource assignment, not a credential and not a programme.
- `difficulty` is used for resource difficulty: introductory, intermediate, advanced.
- `Provider` and `Platform` are separate: the issuer/provider may use one or more platforms.
- `Academic Requirement` is the satisfaction rule, not the competency itself.

## Canonical Relationships

```text
Academic Level
  -> contains Academic Years

Programme
  -> has Academic Level
  -> contains Competencies by Academic Year

Competency
  -> has one or more Academic Requirements

Academic Requirement
  -> accepts a minimum number of Evidence Paths

Learning Resource
  -> is offered by a Provider
  -> is delivered on a Platform
  -> may produce one or more Credentials

Opportunity
  -> recommends a Learning Resource for a Programme + Academic Year + Competency

Student Programme Pathway
  -> belongs to a Student and Programme
  -> contains Student Opportunities

Student Credential Evidence
  -> proves a Credential obtained by a Student
  -> can satisfy an Academic Requirement
```

## Canonical Data Names

| Existing name | Canonical name |
| --- | --- |
| `EBS Programme` | `EBS Programme` |
| `programmeId` | `programmeId` |
| `studyLevel` | `academicLevel` |
| `academic_year` | `academic_year` |
| `ProgrammeCompetency` | `ProgrammeCompetency` |
| `CoreRequirement` / `coreRequirements` | `AcademicRequirement` / `academicRequirements` |
| `OpportunityAssignment` / `opportunityAssignments` | `Opportunity` / `opportunities` |
| `resource.level` | `resource.difficulty` |
| `catalogueId` | `catalogueId` until API v3.2; then `programmeId` where it directly references EBS Programme |
| `totalCerts` | `credentialCount` or `opportunityCount`, depending on what is counted |

## Versioning

- v0.2.0-draft: ontology approved for implementation direction, dated 2026-08-31.
- v3.1.0: existing published data release; programme identities remain valid.
- v3.2.0: target data release using `academicRequirements`, `opportunities`,
  `academicLevel`, and `difficulty` consistently.
- Existing programme IDs must not change during this migration.
- A release is immutable once published. Corrections create a new release.

## Frappe Ownership

Frappe owns the authoritative records for Programmes, Competencies, Academic
Requirements, Resources, Credentials, Providers, Platforms, Opportunities,
Student Pathways, and Student Credential Evidence. The website may cache a
published snapshot but must not become an independent source of truth.
