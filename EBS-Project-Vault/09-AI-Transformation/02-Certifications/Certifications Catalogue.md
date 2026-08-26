---
tags: [certifications, catalogue]
created: 2026-07-10
updated: 2026-07-11
status: legacy-reference
source: "C:\\Users\\abdel\\Desktop\\EBS WEB\\Certification\\EBS_Certifications_Roadmap-.html"
---

# Certifications Catalogue

> Legacy/reference extraction from the raw HTML roadmap.
> The active managed catalogue is now `final-catalogue.ts` in the website repository. See [[Managed Catalogue Review]] and [[Certification Data Model]].

> **267 certifications** extracted from the HTML roadmap on 2026-07-10.
> Active structured data: `src/lib/certifications/final-catalogue.ts`
> Raw extraction: [[certifications-raw-extraction.txt]]

## Summary Stats

| Metric | Value |
|---|---|
| Total certifications | 267 |
| Sections | 10 programme sections + 1 recap |

### By Provider

| Provider | Count |
|---|---|
| Forage | 59 |
| IBM | 44 |
| HubSpot | 31 |
| Google | 25 |
| Semrush | 25 |
| Cisco | 23 |
| Harvard | 13 |
| Google Career | 9 |
| Microsoft | 7 |
| Databricks | 5 |
| Scrum | 4 |
| DeepLearning.AI | 4 |
| Bloomberg | 4 |
| MSI | 3 |
| Fortinet | 3 |
| LinkedIn | 3 |
| PMI | 2 |
| n8n | 2 |
| Ahrefs | 1 |

### By Level

| Level | Count |
|---|---|
| Débutant | 57 |
| Intermédiaire | 75 |
| Avancé | 135 |

### By Year

| Year | Count |
|---|---|
| L1 | 33 |
| L2 | 46 |
| L3 | 53 |
| M1 | 70 |
| M2 | 65 |

## Key Observations

- **Forage simulations** (59 items) are the largest single provider. Per [[Forage Simulation Rules]], these need displayProvider remapping.
- **HubSpot** links (31 items) have known issues per Ahmed's notes. Some point to `academy.hubspot.com` instead of specific courses. See [[Link Validation Log]].
- **Advanced** certifications (135) are the majority. Per [[Required vs Recommended vs Optional]], these should be curated carefully for mandatory workload.
- **Duplicates exist** across sections (e.g. CS50 intro appears in both IA and Cyber tracks). Deduplication is needed.

## Remaining Tasks

- [x] Extract all certification titles, providers, URLs, levels, years.
- [x] Create a separate managed catalogue instead of forcing the full extraction to become operational.
- [x] Mark final managed records as `mandatory` or `optional`.
- [x] Mark Forage simulations with correct displayProvider in the managed catalogue.
- [ ] Validate HubSpot links.
- [ ] Evaluate AWS additions after managed catalogue approval.
- [ ] Map skills and estimated hours in a future student-space model.
- [ ] Confirm exact public certification count claim for website copy.

---

## 🧠 Bloc IA Transversal — Obligatoire pour tous les parcours

> Applied to ALL licences (Débutant/Intermédiaire) and ALL masters (Avancé).

### Bloc IA — Licences (Débutant & Intermédiaire) · 22 certifications

| ID | Title | Provider | Level | Year | Tier |
|---|---|---|---|---|---|
| CERT-001 | Google AI Essentials | Google | Débutant | L1 | unassigned |
| CERT-002 | Google Prompting Essentials | Google | Débutant | L1 | unassigned |
| CERT-003 | Présentation de l'IA et des agents génératifs | Microsoft | Débutant | L1 | unassigned |
| CERT-004 | Fondements de l'IA | IBM | Débutant | L1 | unassigned |
| CERT-005 | Concepts d'IA | IBM | Débutant | L1 | unassigned |
| CERT-006 | Introduire l'IA | IBM | Débutant | L1 | unassigned |
| CERT-007 | Introduction to Modern AI | Cisco | Débutant | L1 | unassigned |
| CERT-008 | Apply AI: Update Your Resume | Cisco | Débutant | L1 | unassigned |
| CERT-009 | Statistiques 101 | IBM | Débutant | L1 | unassigned |
| CERT-010 | Big Data 101 | IBM | Débutant | L2 | unassigned |
| CERT-011 | Ingénierie des Prompts pour Tous | IBM | Intermédiaire | L2 | unassigned |
| CERT-012 | Travailler plus intelligemment avec l'IA | Microsoft | Intermédiaire | L2 | unassigned |
| CERT-013 | Renforcez votre productivité grâce aux outils d'IA | Microsoft | Intermédiaire | L2 | unassigned |
| CERT-014 | Fondements de la Science des Données | IBM | Intermédiaire | L2 | unassigned |
| CERT-015 | Fondements du Big Data | IBM | Intermédiaire | L3 | unassigned |
| CERT-016 | Méthodologie de la Science des Données | IBM | Intermédiaire | L3 | unassigned |
| CERT-017 | Outils de Science des Données (open source) | IBM | Intermédiaire | L3 | unassigned |
| CERT-018 | Introduction to Data Science | Cisco | Intermédiaire | L2 | unassigned |
| CERT-019 | AI Fundamentals with IBM SkillsBuild | Cisco | Intermédiaire | L2 | unassigned |
| CERT-020 | Data Analytics Essentials | Cisco | Intermédiaire | L3 | unassigned |
| CERT-021 | Introduction to IoT & Digital Transformation | Cisco | Intermédiaire | L3 | unassigned |
| CERT-022 | Construire des chatbots IA sans programmation | IBM | Intermédiaire | L3 | unassigned |

### Bloc IA — Masters (Avancé) · 13 certifications

| ID | Title | Provider | Level | Year | Tier |
|---|---|---|---|---|---|
| CERT-023 | Scrum with AI Certified (SAC™) | Scrum | Avancé | M1 | unassigned |
| CERT-024 | Déverrouiller le potentiel commercial — agents IA | Microsoft | Avancé | M1 | unassigned |
| CERT-025 | Foundations & Applications of Generative AI | IBM | Avancé | M1 | unassigned |
| CERT-026 | Agentic AI in Practice | IBM | Avancé | M1 | unassigned |
| CERT-027 | AI Agent Pratique (Hands-on) | IBM | Avancé | M1 | unassigned |
| CERT-028 | Introduction à l'IA Agent | IBM | Avancé | M1 | unassigned |
| CERT-029 | Build & Deploy Modern Web and AI Apps | IBM | Avancé | M2 | unassigned |
| CERT-030 | Fondements de l'Apprentissage Profond | IBM | Avancé | M2 | unassigned |
| CERT-031 | Generative AI Fundamentals | Databricks | Avancé | M1 | unassigned |
| CERT-032 | Bring AI to Your Data (Databricks Fundamentals) | Databricks | Avancé | M1 | unassigned |
| CERT-033 | AI for Good Specialization | DeepLearning.AI | Avancé | M2 | unassigned |
| CERT-034 | Data Science: Capstone (Harvard) | Harvard | Avancé | M2 | unassigned |
| CERT-035 | Datacom \| Automation AI Accelerator | Forage | Avancé | M2 | unassigned |
| CERT-036 | EAB \| GenAI for Proposal Generation | Forage | Avancé | M2 | unassigned |

---

## 🏢 Licence en Management

| ID | Title | Provider | Level | Year | Tier |
|---|---|---|---|---|---|
| CERT-037 | Google People Management Essentials | Google | Intermédiaire | L2 | unassigned |
| CERT-038 | Google Agile Essentials | Google | Débutant | L1 | unassigned |
| CERT-039 | Scrum Fundamentals Certified (SFC®) | Scrum | Débutant | L1 | unassigned |
| CERT-040 | Scrum with AI Certified (SAC™) | Scrum | Intermédiaire | L3 | unassigned |
| CERT-041 | Project Management Essentials Certification | MSI | Débutant | L2 | unassigned |
| CERT-042 | Business Management Essentials Certification | MSI | Débutant | L1 | unassigned |
| CERT-043 | PMI Kickoff | PMI | Débutant | L2 | unassigned |
| CERT-044 | Introduction au Développement Agile et Scrum | IBM | Débutant | L2 | unassigned |
| CERT-045 | Creating Compelling Reports | Cisco | Débutant | L2 | unassigned |
| CERT-046 | Discovering Entrepreneurship | Cisco | Débutant | L1 | unassigned |
| CERT-047 | Launching a Business Venture | Cisco | Intermédiaire | L2 | unassigned |
| CERT-048 | Managing a Business Venture | Cisco | Intermédiaire | L3 | unassigned |
| CERT-049 | PwC US \| Management Consulting | Forage | Intermédiaire | L3 | unassigned |
| CERT-050 | Bloomberg Company Essentials | Forage | Débutant | L2 | unassigned |
| CERT-051 | Bloomberg \| Client Engagement | Forage | Intermédiaire | L3 | unassigned |
| CERT-052 | Bloomberg \| Client Service | Forage | Intermédiaire | L3 | unassigned |
| CERT-053 | Mastercard \| Advisors & Consulting Services | Forage | Intermédiaire | L3 | unassigned |
| CERT-054 | BCG \| Introduction to Strategy Consulting | Forage | Intermédiaire | L3 | unassigned |

---

## 📣 Licence en Marketing

| ID | Title | Provider | Level | Year | Tier |
|---|---|---|---|---|---|
| CERT-055 | Fundamentals of Digital Marketing | Google | Débutant | L1 | unassigned |
| CERT-056 | Communiquer vos idées avec le storytelling et le design | Google | Débutant | L1 | unassigned |
| CERT-057 | Google UX Design Certificate | Google Career | Intermédiaire | L3 | unassigned |
| CERT-058 | HubSpot Social Media Marketing | HubSpot | Débutant | L2 | unassigned |
| CERT-059 | HubSpot Digital Marketing | HubSpot | Débutant | L1 | unassigned |
| CERT-060 | HubSpot Content Marketing | HubSpot | Débutant | L1 | unassigned |
| CERT-061 | HubSpot SEO | HubSpot | Débutant | L2 | unassigned |
| CERT-062 | HubSpot SEO II | HubSpot | Intermédiaire | L3 | unassigned |
| CERT-063 | HubSpot Inbound | HubSpot | Débutant | L1 | unassigned |
| CERT-064 | HubSpot Inbound Marketing | HubSpot | Intermédiaire | L2 | unassigned |
| CERT-065 | HubSpot Digital Advertising | HubSpot | Intermédiaire | L3 | unassigned |
| CERT-066 | HubSpot Email Marketing | HubSpot | Débutant | L2 | unassigned |
| CERT-067 | Beginner SEO with Semrush | Semrush | Débutant | L1 | unassigned |
| CERT-068 | Getting Started with Semrush | Semrush | Débutant | L1 | unassigned |
| CERT-069 | Keyword Research Essentials | Semrush | Débutant | L2 | unassigned |
| CERT-070 | Fundamentals of Marketing Analytics | Semrush | Débutant | L2 | unassigned |
| CERT-071 | Content Marketing Principles for Business | Semrush | Débutant | L2 | unassigned |
| CERT-072 | Content Creation for Magnetic Strategies | Semrush | Intermédiaire | L2 | unassigned |
| CERT-073 | Content Marketing: SEO & AI Search Optimization | Semrush | Intermédiaire | L3 | unassigned |
| CERT-074 | Off-Page SEO & AI Search Essentials | Semrush | Intermédiaire | L3 | unassigned |
| CERT-075 | Digital Advertising Campaigns | Semrush | Intermédiaire | L3 | unassigned |
| CERT-076 | Influencer Marketing for Beginners | Semrush | Débutant | L2 | unassigned |
| CERT-077 | How to Increase Sales on Shopify | Semrush | Intermédiaire | L3 | unassigned |
| CERT-078 | Mastering Digital PR with Brian Dean | Semrush | Intermédiaire | L3 | unassigned |
| CERT-079 | Lloyds Banking Group \| UX Design Introduction | Forage | Intermédiaire | L3 | unassigned |

---

## 💹 Licence en Finance

| ID | Title | Provider | Level | Year | Tier |
|---|---|---|---|---|---|
| CERT-080 | Découvrir l'IA pour les leaders en finance | Microsoft | Intermédiaire | L3 | unassigned |
| CERT-081 | Finance & Accounting Essentials | IBM | Débutant | L2 | unassigned |
| CERT-082 | Mayer Brown \| Introduction to Finance | Forage | Intermédiaire | L3 | unassigned |
| CERT-083 | Citi \| Finance | Forage | Intermédiaire | L3 | unassigned |
| CERT-084 | Citi Company Essentials | Forage | Débutant | L2 | unassigned |
| CERT-085 | Citi \| Services (Treasury & Trade) | Forage | Intermédiaire | L3 | unassigned |
| CERT-086 | Citi \| Markets Sales & Trading | Forage | Intermédiaire | L3 | unassigned |
| CERT-087 | Lloyds \| Business & Commercial Banking (Intro) | Forage | Intermédiaire | L3 | unassigned |
| CERT-088 | Wells Fargo \| Consumer, Small & Business Banking | Forage | Intermédiaire | L3 | unassigned |
| CERT-089 | Wells Fargo \| Personal Banker | Forage | Débutant | L2 | unassigned |
| CERT-090 | Clifford Chance \| Financing the Real Economy | Forage | Intermédiaire | L3 | unassigned |
| CERT-091 | Baker McKenzie \| Corporate | Forage | Intermédiaire | L3 | unassigned |
| CERT-092 | Latham & Watkins \| Banking | Forage | Intermédiaire | L3 | unassigned |

---

## 🤖 Licence en Génie Logiciel — Option IA

| ID | Title | Provider | Level | Year | Tier |
|---|---|---|---|---|---|
| CERT-093 | Google AI Professional Certificate | Google Career | Intermédiaire | L3 | unassigned |
| CERT-094 | Associate Data Practitioner | Google | Intermédiaire | L3 | unassigned |
| CERT-095 | CS50: Introduction to Computer Science | Harvard | Débutant | L1 | unassigned |
| CERT-096 | CS50's Introduction to Programming with Python | Harvard | Débutant | L1 | unassigned |
| CERT-097 | CS50's Introduction to AI with Python | Harvard | Intermédiaire | L2 | unassigned |
| CERT-098 | CS50's Introduction to Databases with SQL | Harvard | Intermédiaire | L2 | unassigned |
| CERT-099 | Introduction to Data Science with Python | Harvard | Intermédiaire | L2 | unassigned |
| CERT-100 | Machine Learning and AI with Python | Harvard | Intermédiaire | L3 | unassigned |
| CERT-101 | Mathematics for ML and Data Science | DeepLearning.AI | Intermédiaire | L2 | unassigned |
| CERT-102 | Machine Learning Specialization | DeepLearning.AI | Intermédiaire | L3 | unassigned |
| CERT-103 | Data Science Essentials with Python | Cisco | Intermédiaire | L3 | unassigned |
| CERT-104 | Python pour la Science des Données, IA & Développement | IBM | Débutant | L1 | unassigned |
| CERT-105 | Fondements de l'Apprentissage Automatique | IBM | Débutant | L2 | unassigned |
| CERT-106 | Science des Données avec Python | IBM | Intermédiaire | L2 | unassigned |
| CERT-107 | Analyse de Données avec Python | IBM | Intermédiaire | L2 | unassigned |
| CERT-108 | Visualisation de Données avec Python | IBM | Débutant | L2 | unassigned |
| CERT-109 | Apprentissage Automatique avec Python | IBM | Intermédiaire | L3 | unassigned |

---

## 🔐 Licence en Génie Logiciel — Option Cybersécurité

| ID | Title | Provider | Level | Year | Tier |
|---|---|---|---|---|---|
| CERT-110 | Google Cybersecurity Certificate | Google Career | Intermédiaire | L3 | unassigned |
| CERT-111 | Google Cloud Cybersecurity (Débutant) | Google | Débutant | L2 | unassigned |
| CERT-112 | Cloud Architect | Google | Intermédiaire | L3 | unassigned |
| CERT-113 | CS50: Introduction to Computer Science | Harvard | Débutant | L1 | unassigned |
| CERT-114 | CS50's Introduction to Cybersecurity | Harvard | Débutant | L2 | unassigned |
| CERT-115 | CS50's Introduction to Databases with SQL | Harvard | Intermédiaire | L2 | unassigned |
| CERT-116 | CS50's Introduction to Programming with Scratch | Harvard | Débutant | L1 | unassigned |
| CERT-117 | HTML Essentials | Cisco | Débutant | L1 | unassigned |
| CERT-118 | CSS Essentials | Cisco | Débutant | L1 | unassigned |
| CERT-119 | Linux Essentials | Cisco | Débutant | L2 | unassigned |
| CERT-120 | Linux Unhatched | Cisco | Débutant | L1 | unassigned |
| CERT-121 | Introduction to Cybersecurity | Cisco | Débutant | L1 | unassigned |
| CERT-122 | Cybersecurity Essentials | Cisco | Intermédiaire | L2 | unassigned |
| CERT-123 | Endpoint Security | Cisco | Intermédiaire | L2 | unassigned |
| CERT-124 | Network Defense | Cisco | Intermédiaire | L3 | unassigned |
| CERT-125 | Cyber Threat Management | Cisco | Intermédiaire | L3 | unassigned |
| CERT-126 | Ethical Hacker | Cisco | Intermédiaire | L3 | unassigned |
| CERT-127 | Network Technician Career Path | Cisco | Débutant | L1 | unassigned |
| CERT-128 | Cyber Career Pathway | Cisco | Débutant | L1 | unassigned |
| CERT-129 | Fortinet Certified Fundamentals Cybersecurity (FCF) | Fortinet | Débutant | L2 | unassigned |
| CERT-130 | Fortinet Certified Associate Cybersecurity (FCA) | Fortinet | Intermédiaire | L3 | unassigned |
| CERT-131 | Network Security Expert (NSE) | Fortinet | Intermédiaire | L3 | unassigned |
| CERT-132 | Certificat Professionnel DevOps & Ingénierie Logicielle | IBM | Intermédiaire | L3 | unassigned |
| CERT-133 | Introduction au Cloud | IBM | Débutant | L1 | unassigned |
| CERT-134 | Commencer avec Git et GitHub | IBM | Débutant | L1 | unassigned |
| CERT-135 | Introduction à DevOps | IBM | Intermédiaire | L2 | unassigned |
| CERT-136 | TCP/IP Protocol Overview | IBM | Intermédiaire | L2 | unassigned |
| CERT-137 | SQL et Bases de Données Relationnelles 101 | IBM | Débutant | L2 | unassigned |
| CERT-138 | Introduction pratique aux commandes Linux & Shell | IBM | Intermédiaire | L2 | unassigned |
| CERT-139 | Sécurité des Applications (Dev & DevOps) | IBM | Intermédiaire | L3 | unassigned |
| CERT-140 | NoSQL et DBaaS 101 | IBM | Intermédiaire | L3 | unassigned |
| CERT-141 | Réseau Blockchain IoT (chaîne d'approvisionnement) | IBM | Intermédiaire | L3 | unassigned |
| CERT-142 | PwC US \| Cyber Security Consulting | Forage | Intermédiaire | L3 | unassigned |
| CERT-143 | PwC US \| Digital Assurance & Transparency | Forage | Intermédiaire | L3 | unassigned |
| CERT-144 | Mastercard \| Cybersecurity | Forage | Intermédiaire | L3 | unassigned |
| CERT-145 | Datacom \| Introduction to Cloud | Forage | Débutant | L2 | unassigned |
| CERT-146 | Datacom \| Cyber Security Operations | Forage | Intermédiaire | L3 | unassigned |

---

## 🚀 Master en Digital Marketing & Intelligence Artificielle

| ID | Title | Provider | Level | Year | Tier |
|---|---|---|---|---|---|
| CERT-147 | Google Ads Search Certification | Google | Avancé | M1 | unassigned |
| CERT-148 | Google Ads Display Certification | Google | Avancé | M1 | unassigned |
| CERT-149 | Google Ads Measurement Certification | Google | Avancé | M1 | unassigned |
| CERT-150 | Google Ads Creative Certification | Google | Avancé | M1 | unassigned |
| CERT-151 | Google Ads Apps Certification | Google | Avancé | M2 | unassigned |
| CERT-152 | AI-Powered Shopping Ads Certification | Google | Avancé | M2 | unassigned |
| CERT-153 | AI-Powered Performance Ads Certification | Google | Avancé | M2 | unassigned |
| CERT-154 | Grow Offline Sales Certification | Google | Avancé | M2 | unassigned |
| CERT-155 | Google Analytics Certification | Google | Avancé | M1 | unassigned |
| CERT-156 | Get Started using Google Analytics | Google | Avancé | M1 | unassigned |
| CERT-157 | Dive Deeper Into GA4 Data and Reports | Google | Avancé | M2 | unassigned |
| CERT-158 | Display & Video 360 Certification | Google | Avancé | M2 | unassigned |
| CERT-159 | Search Ads 360 Certification | Google | Avancé | M2 | unassigned |
| CERT-160 | Campaign Manager 360 Certification | Google | Avancé | M2 | unassigned |
| CERT-161 | Conversion Optimization Certification | Google | Avancé | M2 | unassigned |
| CERT-162 | Analysez les besoins et comportements en ligne | Google | Avancé | M1 | unassigned |
| CERT-163 | Using AI Agents in Workflows | Databricks | Avancé | M1 | unassigned |
| CERT-164 | watsonx Orchestrate: Automatisation avec IA Agent | IBM | Avancé | M1 | unassigned |
| CERT-165 | watsonx Assistant: Assistants Virtuels IA Générative | IBM | Avancé | M2 | unassigned |
| CERT-166 | Commencer avec Automation Builder | IBM | Avancé | M1 | unassigned |
| CERT-167 | How to Become an AI-Powered Marketer | Semrush | Avancé | M1 | unassigned |
| CERT-168 | n8n Automation — Level One | n8n | Avancé | M1 | unassigned |
| CERT-169 | n8n Automation — Level Two | n8n | Avancé | M2 | unassigned |
| CERT-170 | Certification Publicités LinkedIn (bases) | LinkedIn | Avancé | M1 | unassigned |
| CERT-171 | Certification Stratégie Marketing LinkedIn | LinkedIn | Avancé | M2 | unassigned |
| CERT-172 | Certification Contenu & Publicités LinkedIn | LinkedIn | Avancé | M2 | unassigned |
| CERT-173 | Technical SEO & AI Search Essentials | Semrush | Avancé | M1 | unassigned |
| CERT-174 | On-Page SEO Course | Semrush | Avancé | M1 | unassigned |
| CERT-175 | E-Commerce SEO with Internal Linking | Semrush | Avancé | M2 | unassigned |
| CERT-176 | Local SEO Course | Semrush | Avancé | M1 | unassigned |
| CERT-177 | International SEO Course | Semrush | Avancé | M2 | unassigned |
| CERT-178 | Content-Led SEO with Brian Dean | Semrush | Avancé | M2 | unassigned |
| CERT-179 | Analytics for In-House Marketing Teams | Semrush | Avancé | M2 | unassigned |
| CERT-180 | SEO Strategy for In-House Marketers | Semrush | Avancé | M2 | unassigned |
| CERT-181 | Boost Conversions with PPC | Semrush | Avancé | M1 | unassigned |
| CERT-182 | Mobile SEO Course | Semrush | Avancé | M2 | unassigned |
| CERT-183 | Marketing Analysis — Theory Meets Practice | Semrush | Avancé | M1 | unassigned |
| CERT-184 | Advanced Content Marketing with Brian Dean | Semrush | Avancé | M2 | unassigned |
| CERT-185 | Ahrefs SEO Certification | Ahrefs | Avancé | M1 | unassigned |
| CERT-186 | Inbound Marketing Optimization | HubSpot | Avancé | M1 | unassigned |
| CERT-187 | Social Media Marketing Certification II | HubSpot | Avancé | M1 | unassigned |
| CERT-188 | HubSpot Marketing Hub Software | HubSpot | Avancé | M1 | unassigned |
| CERT-189 | AI for Marketing, Sales & Service Bootcamp | HubSpot | Avancé | M2 | unassigned |
| CERT-190 | Account-Based Marketing Bootcamp | HubSpot | Avancé | M2 | unassigned |
| CERT-191 | Reporting and Analytics Bootcamp | HubSpot | Avancé | M2 | unassigned |
| CERT-192 | Lloyds Banking Group \| UX Design Advanced | Forage | Avancé | M2 | unassigned |

---

## ⚙️ Master en CRM & Transformation Digitale

| ID | Title | Provider | Level | Year | Tier |
|---|---|---|---|---|---|
| CERT-193 | Google Advanced Data Analytics Certificate | Google Career | Avancé | M2 | unassigned |
| CERT-194 | Google IT Automation with Python Certificate | Google Career | Avancé | M2 | unassigned |
| CERT-195 | Google Business Intelligence Certificate | Google Career | Avancé | M1 | unassigned |
| CERT-196 | Google Data Analytics Certificate | Google Career | Avancé | M1 | unassigned |
| CERT-197 | Google Digital Marketing & E-commerce Certificate | Google Career | Avancé | M1 | unassigned |
| CERT-198 | Transformer votre entreprise avec l'IA | Microsoft | Avancé | M1 | unassigned |
| CERT-199 | Obtenir des données dans Power BI | Microsoft | Avancé | M1 | unassigned |
| CERT-200 | AWS Platform Architect Badge | Databricks | Avancé | M2 | unassigned |
| CERT-201 | Azure Platform Architect Badge | Databricks | Avancé | M2 | unassigned |
| CERT-202 | Data Science: Visualization (Harvard) | Harvard | Avancé | M1 | unassigned |
| CERT-203 | Data Science: Productivity Tools (Harvard) | Harvard | Avancé | M1 | unassigned |
| CERT-204 | Data Analytics Professional Certificate | DeepLearning.AI | Avancé | M2 | unassigned |
| CERT-205 | IBM SkillsBuild Business Analyst Certificate | IBM | Avancé | M1 | unassigned |
| CERT-206 | Analyste de Données: Préparation Professionnelle | IBM | Avancé | M1 | unassigned |
| CERT-207 | Science des Données d'Entreprise | IBM | Avancé | M1 | unassigned |
| CERT-208 | Clustering Clients avec KMeans | IBM | Avancé | M2 | unassigned |
| CERT-209 | IA Générative: Transformation & Croissance | IBM | Avancé | M2 | unassigned |
| CERT-210 | HubSpot Sales Hub Software | HubSpot | Avancé | M1 | unassigned |
| CERT-211 | HubSpot Service Hub Software | HubSpot | Avancé | M1 | unassigned |
| CERT-212 | HubSpot Inbound Sales | HubSpot | Avancé | M1 | unassigned |
| CERT-213 | HubSpot Content Hub for Marketers | HubSpot | Avancé | M1 | unassigned |
| CERT-214 | HubSpot Sales Management | HubSpot | Avancé | M2 | unassigned |
| CERT-215 | HubSpot Sales Enablement | HubSpot | Avancé | M2 | unassigned |
| CERT-216 | HubSpot Frictionless Sales | HubSpot | Avancé | M2 | unassigned |
| CERT-217 | HubSpot Revenue Operations | HubSpot | Avancé | M1 | unassigned |
| CERT-218 | Integrating With HubSpot I: Foundations | HubSpot | Avancé | M2 | unassigned |
| CERT-219 | HubSpot CMS for Developers II | HubSpot | Avancé | M2 | unassigned |
| CERT-220 | HubSpot Data Integrations Certification | HubSpot | Avancé | M2 | unassigned |
| CERT-221 | HubSpot Email Marketing Software | HubSpot | Avancé | M1 | unassigned |
| CERT-222 | HubSpot Content Hub Software Certification | HubSpot | Avancé | M1 | unassigned |
| CERT-223 | AI for Marketing, Sales & Service Bootcamp | HubSpot | Avancé | M2 | unassigned |
| CERT-224 | CRM Customization Bootcamp for Developers | HubSpot | Avancé | M2 | unassigned |
| CERT-225 | Reporting and Analytics Bootcamp | HubSpot | Avancé | M2 | unassigned |
| CERT-226 | BCG \| Data Science | Forage | Avancé | M2 | unassigned |
| CERT-227 | BCG \| Digital Transformation | Forage | Avancé | M1 | unassigned |
| CERT-228 | BCG \| Data for Decision Makers | Forage | Avancé | M1 | unassigned |
| CERT-229 | Third Bridge \| Client Service Delivery | Forage | Avancé | M1 | unassigned |
| CERT-230 | Quantium \| Data Analytics | Forage | Avancé | M2 | unassigned |

---

## 💡 Master en Project Management

| ID | Title | Provider | Level | Year | Tier |
|---|---|---|---|---|---|
| CERT-231 | Google Project Management Certificate | Google Career | Avancé | M1 | unassigned |
| CERT-232 | Scrum for Operations & DevOps Fundamentals Certified | Scrum | Avancé | M1 | unassigned |
| CERT-233 | Disciplined Agile Essentials | PMI | Avancé | M1 | unassigned |
| CERT-234 | Lean Six Sigma White Belt Certification | MSI | Avancé | M1 | unassigned |
| CERT-235 | Clustering Clients avec KMeans | IBM | Avancé | M2 | unassigned |
| CERT-236 | Bloomberg Market Concepts (BMC) | Bloomberg | Avancé | M1 | unassigned |
| CERT-237 | Bloomberg Finance Fundamentals | Bloomberg | Avancé | M1 | unassigned |
| CERT-238 | Bloomberg Spreadsheet Analysis | Bloomberg | Avancé | M2 | unassigned |
| CERT-239 | Environmental Social Governance (ESG) | Bloomberg | Avancé | M2 | unassigned |
| CERT-240 | Siemens Mobility \| Project Manager | Forage | Avancé | M1 | unassigned |
| CERT-241 | Siemens Mobility \| Commercial Project Manager | Forage | Avancé | M2 | unassigned |
| CERT-242 | EY \| EY Technology Risk | Forage | Avancé | M1 | unassigned |
| CERT-243 | BCG \| Strategy Consulting | Forage | Avancé | M1 | unassigned |
| CERT-244 | BCG \| Venture & Business Builds | Forage | Avancé | M2 | unassigned |
| CERT-245 | Oliver Wyman \| Financial Services: Climate Change | Forage | Avancé | M2 | unassigned |
| CERT-246 | Mayer Brown \| Financing Renewable Energy Projects | Forage | Avancé | M2 | unassigned |

---

## 🏦 Master en Ingénierie Financière

| ID | Title | Provider | Level | Year | Tier |
|---|---|---|---|---|---|
| CERT-247 | Goldman Sachs \| Operations | Forage | Avancé | M1 | unassigned |
| CERT-248 | Goldman Sachs \| Internal Audit | Forage | Avancé | M1 | unassigned |
| CERT-249 | Goldman Sachs \| Risk | Forage | Avancé | M1 | unassigned |
| CERT-250 | Goldman Sachs \| Controllers | Forage | Avancé | M2 | unassigned |
| CERT-251 | JPMorganChase \| Investment Banking | Forage | Avancé | M1 | unassigned |
| CERT-252 | J.P. Morgan \| Quantitative Research | Forage | Avancé | M2 | unassigned |
| CERT-253 | Citi \| Markets Quantitative Analysis (MQA) | Forage | Avancé | M2 | unassigned |
| CERT-254 | Citi \| Investment Banking | Forage | Avancé | M2 | unassigned |
| CERT-255 | Citi \| Personal Banking | Forage | Avancé | M1 | unassigned |
| CERT-256 | Bank of America \| The Private Bank | Forage | Avancé | M1 | unassigned |
| CERT-257 | Bank of America \| Investment Banking | Forage | Avancé | M2 | unassigned |
| CERT-258 | Bank of America \| Global Markets Sales & Trading | Forage | Avancé | M2 | unassigned |
| CERT-259 | Lloyds \| Business & Commercial Banking (Advanced) | Forage | Avancé | M1 | unassigned |
| CERT-260 | Standard Chartered \| Credit Analyst | Forage | Avancé | M1 | unassigned |
| CERT-261 | Wells Fargo \| Commercial Banking | Forage | Avancé | M2 | unassigned |
| CERT-262 | KPMG US \| Career Catalyst: Audit | Forage | Avancé | M1 | unassigned |
| CERT-263 | KPMG US \| Career Catalyst: Tax | Forage | Avancé | M1 | unassigned |
| CERT-264 | KPMG US \| Career Catalyst: Advisory | Forage | Avancé | M2 | unassigned |
| CERT-265 | Goodwin \| Early Stage Financing | Forage | Avancé | M2 | unassigned |
| CERT-266 | Ashurst \| Finance and Mergers & Acquisitions | Forage | Avancé | M2 | unassigned |
| CERT-267 | PwC UK \| Virtual Insight Programme | Forage | Avancé | M1 | unassigned |
