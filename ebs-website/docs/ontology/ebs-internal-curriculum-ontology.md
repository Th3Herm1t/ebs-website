# EBS Internal Curriculum Ontology

Version: 1.0
Source: `/src/lib/programmes/licences.ts`, `/src/lib/programmes/masters.ts`, `/src/components/program/data.ts`, and the legacy curriculum structure in `EBS web - v0.1/web/src/data/programmes.ts`.
Scope: EBS internal academic curriculum and programme taxonomy only.

## 1. Purpose

This model describes what EBS teaches and how its programmes are structured. It is the internal academic source of truth for:

- Licence and Master programme identity
- Programme-level positioning
- Curriculum modules and progression
- Academic delivery model
- Assessment model
- Applied projects and professional outcomes
- Admissions framing

The model does not define external qualifications, issuers, credential evidence, provider verification, or external certification workflows.

## 2. Source Audit

### Current canonical programme data

The current Next.js programme records are split into:

- `licences.ts`: 5 Licence programmes
- `masters.ts`: 4 Master programmes

Current programme records contain:

- `slug`
- `catalogueId`
- `type`
- `title`
- `tagline`
- `pitch`
- `color`
- `niveau`
- `duree`
- `semestres`
- `totalCerts`
- `publicCible`
- `modules`
- `internationalPathways`
- `debouches`

The internal curriculum model deliberately omits `totalCerts` and all certification-related data.

### Legacy enrichment data

The legacy Astro data in `EBS web - v0.1/web/src/data/programmes.ts` contains a more detailed academic shape:

- Curriculum grouped by year (`L1`, `L2`, `L3`, `M1`, `M2`)
- Year title
- Module lists by year
- Teaching format
- Tools
- Assessment model
- Sample projects
- Admission selectivity
- Employment and employer outcomes

These fields should be promoted into the canonical internal model. They should not remain only in legacy data.

### Important source discrepancy

The current and legacy source sets do not have identical programme lists or naming. The current source is authoritative for the programme set, while the legacy source is authoritative only for curriculum enrichment that is still valid after review.

No programme should be imported into the operational model solely because it appears in the legacy file.

## 3. Conceptual Model

```text
Institution
  └── Academic Division
        └── Programme Family
              └── Programme
                    └── Programme Version
                          └── Academic Year / Semester
                                └── Module
                                      └── Learning Unit
                                            └── Learning Activity
```

Supporting relationships:

```text
Programme ──has──> Programme Outcome
Programme ──targets──> Audience Profile
Programme ──uses──> Delivery Model
Programme ──uses──> Assessment Model
Programme ──includes──> Professional Experience
Programme ──leads to──> Career Outcome
Module ──develops──> Competency
Module ──requires──> Prerequisite
Module ──is assessed by──> Assessment Component
```

## 4. Entity Definitions

### Institution

The EBS institutional owner of academic programmes.

Required fields:

- `institution_id`
- `legal_name`
- `display_name`
- `country`
- `active`

Initial value:

- `ESPIMA Business School`

### Academic Division

An internal academic grouping used to organize programmes. The website does not currently provide a formal division list, so this entity should remain optional until approved by EBS.

Suggested fields:

- `division_id`
- `name`
- `description`
- `programme_ids`

### Programme Family

A subject-area grouping that is broader than a single degree programme.

Initial taxonomy:

- Management and Organisation
- Marketing and Commerce
- Finance and Financial Engineering
- Computer Science and Information Systems
- Artificial Intelligence and Data
- Cybersecurity
- Digital Transformation and CRM
- Entrepreneurship and Innovation

A programme may belong to one primary family and several secondary subject tags.

### Programme

The stable identity of an EBS academic programme. A programme is not a delivery batch, course instance, or external learning route.

Required fields:

- `programme_id`
- `slug`
- `title`
- `degree_type`
- `display_title`
- `academic_level`
- `duration_value`
- `duration_unit`
- `semester_count`
- `programme_family`
- `active`

Descriptive fields:

- `tagline`
- `pitch`
- `audience_profile`
- `color_token`
- `admission_profile`
- `teaching_format`
- `assessment_model`

Derived display rule:

- Licence programme: `Licence en <discipline>` unless the approved official title specifies an option.
- Master programme: `Master en <discipline>` unless the approved official title specifies a different official title.

The display title must be stored explicitly once approved. It must not be reconstructed differently in different applications.

### Programme Version

An immutable academic version of a programme curriculum.

Required fields:

- `programme_version_id`
- `programme_id`
- `version_label`
- `effective_from`
- `effective_to`
- `status`
- `approval_reference`

Statuses:

- `DRAFT`
- `IN_REVIEW`
- `APPROVED`
- `ACTIVE`
- `RETIRED`

Historical student records must continue to point to the version that applied when the student studied it.

### Academic Year

A progression stage inside a programme version.

Examples:

- `L1`, `L2`, `L3`
- `M1`, `M2`

Required fields:

- `year_id`
- `programme_version_id`
- `code`
- `label`
- `sequence`
- `semester_count`
- `purpose`

### Semester

A teaching period within an academic year.

Required fields:

- `semester_id`
- `year_id`
- `code`
- `sequence`
- `title`
- `start_date`
- `end_date`

The public website currently exposes semesters as a count. The operational model must represent them individually.

### Module

A coherent internal teaching domain inside a programme year or semester.

Required fields:

- `module_id`
- `programme_version_id`
- `academic_year_id`
- `semester_id`
- `module_code`
- `title`
- `description`
- `sequence`
- `status`

Optional fields:

- `credits`
- `hours`
- `delivery_mode`
- `assessment_weight`
- `competency_ids`
- `prerequisite_ids`

The current website uses module titles and descriptions. It does not yet provide stable module IDs, credits, hours, or semester assignment. Those must be added during normalization rather than guessed.

### Learning Unit

A smaller teachable unit inside a module.

Examples:

- Market segmentation
- Relational database design
- Financial statement analysis
- Incident response

Required fields:

- `unit_id`
- `module_id`
- `title`
- `description`
- `sequence`
- `learning_objective_ids`

This level is not populated consistently in the website source and should be introduced only when detailed syllabi are available.

### Learning Activity

An activity through which a learner practices or demonstrates a learning unit.

Types:

- Lecture
- Tutorial
- Practical lab
- Case study
- Simulation
- Workshop
- Team project
- Internship
- Final-year project
- Presentation

Required fields:

- `activity_id`
- `unit_id`
- `activity_type`
- `title`
- `description`
- `sequence`

### Competency

An internal EBS capability developed by one or more modules. Competencies are the bridge between curriculum content and programme outcomes.

Required fields:

- `competency_id`
- `name`
- `definition`
- `domain`
- `level`
- `observable_indicators`

Competency levels:

- `FOUNDATION`
- `DEVELOPING`
- `APPLIED`
- `ADVANCED`

### Learning Objective

A measurable learner outcome for a module or unit.

Required fields:

- `objective_id`
- `statement`
- `verb`
- `knowledge_domain`
- `target_level`
- `module_id`

Objectives should use observable verbs such as analyse, design, build, evaluate, manage, communicate, and present.

### Assessment Model

The approved way a programme measures learning.

Required fields:

- `assessment_model_id`
- `programme_version_id`
- `components`
- `grading_scale`
- `progression_rule`
- `final_project_required`

Each assessment component contains:

- `component_type`
- `weight`
- `description`
- `applies_to`

The website currently expresses assessment as prose, for example continuous assessment, projects, and examinations. It must be normalized into components before calculation is implemented.

### Professional Experience

The internal professionalization requirement of a programme.

Types:

- Internship
- Alternance
- Client project
- Final-year project
- Dissertation or professional thesis

Required fields:

- `experience_id`
- `programme_version_id`
- `experience_type`
- `year_id`
- `required`
- `description`
- `validation_rule`

### Career Outcome

An internal description of roles or sectors a programme prepares learners for.

Required fields:

- `career_outcome_id`
- `programme_id`
- `title`
- `description`
- `career_family`

Career outcomes are guidance, not guaranteed employment claims.

### Audience Profile

The intended entry profile of a programme.

Required fields:

- `audience_profile_id`
- `programme_id`
- `entry_level`
- `backgrounds`
- `interests`
- `progression_intent`

### Delivery Model

The internal pedagogical pattern used by a programme.

Possible dimensions:

- Course format
- Practical/project ratio
- Alternance schedule
- Teamwork model
- Industry exposure
- Language of instruction
- Digital learning support

## 5. Programme Taxonomy

### Degree taxonomy

| Code | Label | Typical level | Typical duration | Typical semesters |
|---|---|---:|---:|---:|
| `LICENCE` | Licence | Bac+3 | 3 years | 6 |
| `MASTER` | Master | Bac+5 | 2 years | 4 |

### Progression taxonomy

| Code | Degree | Meaning |
|---|---|---|
| `L1` | Licence | First academic year |
| `L2` | Licence | Second academic year |
| `L3` | Licence | Third academic year |
| `M1` | Master | First Master year |
| `M2` | Master | Second Master year |

### Internal subject taxonomy

#### Management and Organisation

- Management fundamentals
- Organisation and leadership
- Human resources management
- Strategy
- Business law
- Business analysis
- Performance management

#### Marketing and Commerce

- Marketing fundamentals
- Consumer behaviour
- Market research
- Digital marketing
- Communication
- E-commerce
- CRM
- Sales and business development
- Brand and content management

#### Finance and Financial Engineering

- Accounting
- Financial mathematics
- Statistics and econometrics
- Financial analysis
- Corporate finance
- Financial markets
- Investment products
- Risk management
- Audit and control
- FinTech
- Sustainable finance

#### Computer Science and Information Systems

- Mathematics and algorithms
- Programming
- Computer architecture
- Operating systems
- Networks
- Databases
- Information systems
- Software engineering
- Web and mobile development
- Cloud and DevOps
- Software quality and testing

#### Artificial Intelligence and Data

- Data analysis
- Business intelligence
- Machine learning
- Deep learning
- Generative AI
- Natural language processing
- Data engineering
- Big data
- MLOps
- AI application design

#### Cybersecurity

- Information-system security
- Application security
- Network security
- Ethical hacking
- Cloud security
- DevSecOps
- Vulnerability management
- Digital forensics
- Incident response
- Security operations
- Cyber risk management

#### Communication and Professional Skills

- French communication
- English communication
- Technical English
- Business English
- Presentation
- Teamwork
- Personal development
- Professional communication

#### Entrepreneurship and Innovation

- Entrepreneurship
- Innovation
- Design thinking
- Lean startup
- Product management
- Agile methods
- Change management
- Business development

## 6. Current Programme Catalogue

The following catalogue is derived from the current programme source files. Curriculum entries below use the current module records. Where the website has year-grouped legacy data, the year grouping is shown separately and must be reconciled before becoming operational.

### Licence en Management

- ID: `management`
- Family: Management and Organisation
- Level: Bac+3
- Duration: 3 years
- Semesters: 6

Current modules:

- Fondements du management, de la gestion et des organisations
- Leadership et management des équipes
- Gestion de projet (PMI PMBOK®, Scrum et Kanban)
- Stratégie d'entreprise et analyse de marché
- Business Analytics et tableaux de bord décisionnels
- Management des Ressources Humaines
- Entrepreneuriat, innovation et création d'entreprise
- Droit des affaires et environnement réglementaire
- Intelligence Artificielle appliquée au management
- Anglais des affaires, communication professionnelle et Soft Skills
- Stage professionnel et Projet de Fin d'Études (PFE)

### Licence en Marketing

- ID: `marketing`
- Family: Marketing and Commerce
- Level: Bac+3
- Duration: 3 years
- Semesters: 6

Current modules:

- Fondements du marketing et comportement du consommateur
- Marketing digital stratégique et e-commerce
- SEO / SEA et référencement
- Social Media Marketing et Community Management
- Google Analytics 4 – Analyse des performances web
- Content Marketing, Copywriting et Storytelling
- CRM, gestion de la relation client et Marketing Automation
- LinkedIn Marketing et Social Selling B2B
- Intelligence Artificielle appliquée au marketing
- Publicité programmatique
- Stage professionnel et Projet de Fin d'Études (PFE)

### Licence en Finance

- ID: `finance`
- Family: Finance and Financial Engineering
- Level: Bac+3
- Duration: 3 years
- Semesters: 6

Current modules:

- Comptabilité générale et analytique
- Mathématiques financières, statistiques et économétrie
- Analyse financière et diagnostic d'entreprise
- Marchés financiers et produits d'investissement
- Finance d'entreprise et évaluation
- Contrôle de gestion et reporting financier
- FinTech et finance numérique
- ESG, finance durable et gestion des risques
- Python appliqué à la finance
- Utilisation du Terminal Bloomberg
- Stage professionnel et Projet de Fin d'Études (PFE)

### Licence Informatique - Option IA

- ID: `informatique-ia`
- Family: Computer Science and Information Systems
- Secondary families: Artificial Intelligence and Data
- Level: Bac+3
- Duration: 3 years
- Semesters: 6

Current modules:

- Mathématiques appliquées, algorithmique et programmation
- Systèmes d'exploitation, architecture des ordinateurs et réseaux
- Bases de données et systèmes d'information
- Génie logiciel, programmation orientée objet et méthodes agiles
- Développement Web, Mobile et Cloud
- Intelligence Artificielle et Machine Learning
- Data Engineering, Big Data et MLOps
- Intelligence Artificielle générative et applications avancées
- Qualité logicielle, sécurité et tests
- Communication professionnelle, Soft Skills et entrepreneuriat
- Projet de Fin d'Études (PFE)

### Licence Informatique - Option Cybersécurité

- ID: `cybersecurite`
- Family: Computer Science and Information Systems
- Primary specialization: Cybersecurity
- Level: Bac+3
- Duration: 3 years
- Semesters: 6

Current modules:

- Mathématiques appliquées, algorithmique et programmation
- Systèmes d'exploitation, architecture des ordinateurs et réseaux
- Bases de données et systèmes d'information
- Génie logiciel, programmation orientée objet et méthodes agiles
- Développement Web, Mobile et Cloud
- Cybersécurité des systèmes d'information
- Ethical Hacking, sécurité Cloud et DevSecOps
- Investigation numérique et opérations de sécurité
- Intelligence Artificielle appliquée à la cybersécurité
- Communication professionnelle, Soft Skills et entrepreneuriat
- Projet de Fin d'Études (PFE)

### Master CRM Marketing & Transformation Digitale

- ID: `crm`
- Family: Digital Transformation and CRM
- Level: Bac+5
- Duration: 2 years
- Semesters: 4

Current modules:

- CRM stratégique, expérience client et marketing relationnel
- CRM opérationnel, Marketing Automation et outils professionnels
- Data Analytics, Business Intelligence et Intelligence Artificielle
- Transformation digitale, Business Analysis et management de projet
- RevOps, gouvernance CRM et performance commerciale
- Développement professionnel et parcours appliqué
- Stage professionnel, mémoire et projet de fin d'études

### Master en Management de Projets Innovants & Startups

- ID: `startups`
- Family: Entrepreneurship and Innovation
- Secondary families: Management and Organisation, Digital Transformation and CRM
- Level: Bac+5
- Duration: 2 years
- Semesters: 4

Current modules:

- Management de projet, leadership et pilotage de la performance
- Innovation, entrepreneuriat et développement de Startups
- Business Analysis, Data Analytics et Intelligence Artificielle
- Transformation digitale, gestion des risques et amélioration continue
- Product Management, Agilité et outils professionnels
- Stage professionnel, mémoire et projet de fin d'études

### Master en Ingénierie Financière

- ID: `ingenierie-financiere`
- Family: Finance and Financial Engineering
- Level: Bac+5
- Duration: 2 years
- Semesters: 4

Current modules:

- Finance d'entreprise et analyse financière
- Banque, marchés financiers et ingénierie financière
- Gestion des risques, finance internationale et réglementation
- Finance quantitative, Data et Intelligence Artificielle
- Développement professionnel et expérience en entreprise
- Stage professionnel, mémoire et projet de fin d'études

### Master Marketing Digital & IA

- ID: `marketing-digital-ia`
- Family: Marketing and Commerce
- Secondary families: Artificial Intelligence and Data, Digital Transformation and CRM
- Level: Bac+5
- Duration: 2 years
- Semesters: 4

Current modules:

- Marketing stratégique, comportement du consommateur et innovation digitale
- Marketing digital, e-business et stratégies omnicanales
- Acquisition digitale, référencement et Web Analytics
- Communication digitale, Content Marketing et Social Media
- CRM, expérience client et Marketing Automation
- Data Marketing, Business Intelligence et Intelligence Artificielle
- Publicité digitale, Growth Marketing et acquisition avancée
- Management de projets digitaux, innovation et transformation digitale
- Développement professionnel et parcours appliqué
- Stage professionnel, mémoire et projet de fin d'études

## 7. Cross-Programme Curriculum Framework

These are internal curriculum layers that recur across multiple programmes.

### Foundational layer

- Academic communication
- Professional communication
- Digital literacy
- Quantitative reasoning
- Business and organisational context

### Domain layer

- Management and organisation
- Marketing and commerce
- Finance
- Computer science and systems

### Specialization layer

- AI and data
- Cybersecurity
- CRM and digital transformation
- Financial engineering
- Entrepreneurship and innovation

### Professionalization layer

- Case studies
- Practical labs
- Team projects
- Industry projects
- Internship or alternance
- Final-year project
- Professional presentation

## 8. Normalized Data Model

```text
Programme
  id
  title
  degree_type
  academic_level
  family_id
  tagline
  pitch
  duration
  semester_count
  status

ProgrammeVersion
  id
  programme_id
  version
  effective_dates
  approval_status

AcademicYear
  id
  programme_version_id
  code
  sequence

Semester
  id
  academic_year_id
  code
  sequence

Module
  id
  programme_version_id
  academic_year_id
  semester_id
  code
  title
  description
  sequence

LearningUnit
  id
  module_id
  title
  description
  sequence

LearningObjective
  id
  learning_unit_id
  statement
  target_level

Competency
  id
  code
  name
  domain
  level

ModuleCompetency
  module_id
  competency_id
  development_level

AssessmentModel
  id
  programme_version_id
  grading_scale

AssessmentComponent
  id
  assessment_model_id
  module_id
  type
  weight

ProfessionalExperience
  id
  programme_version_id
  academic_year_id
  type
  required

CareerOutcome
  id
  programme_id
  title
  career_family
```

## 9. Integrity Rules

- Every active programme must have exactly one active programme version.
- Every programme version must have at least one academic year.
- Academic years must have ordered semesters.
- Every module belongs to one programme version and one academic year.
- A module may not belong to a semester outside its academic year.
- Module sequence must be stable within an academic year.
- Retired programme versions must remain readable for historical records.
- A programme display title is controlled data, not a UI-generated label.
- A programme may not be published with an empty curriculum.
- Every published module must have a title and description.
- Every final-year project must identify its academic year.
- Assessment weights for a complete assessment model must total 100 percent.
- Career outcomes must not be represented as guaranteed employment claims.

## 10. Normalization Work Required

The website data is presentation-ready but not yet an operational academic model. The following fields require normalization:

- Stable programme version IDs
- Stable module IDs and module codes
- Academic year assignment for current module lists
- Semester assignment
- Credits and teaching hours
- Learning objectives
- Competency mappings
- Assessment components and weights
- Professional experience validation rules
- Approved programme display titles

Do not infer missing credits, hours, semester placement, or competency mappings from module order. These require academic validation.

## 11. Recommended Implementation Boundary

The website and academic system should use this internal model for:

- Programme catalogue pages
- Curriculum pages
- Academic programme administration
- Curriculum versioning
- Module and competency management
- Student academic progression
- Internal assessment planning
- Programme outcome reporting

Learning delivery systems may reference `ProgrammeVersion`, `AcademicYear`, `Semester`, and `Module`, but they must not replace the academic source of truth.

## 12. Immediate Next Step

Create a normalized internal curriculum dataset from the nine current programmes, beginning with:

1. Approved display titles
2. Programme families
3. Programme versions
4. L1/L2/L3 and M1/M2 year structures
5. Module records
6. Academic review of semester placement

Only after that normalization should the model be migrated into Frappe or used to drive other internal systems.
