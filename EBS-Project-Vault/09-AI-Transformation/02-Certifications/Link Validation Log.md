---
tags: [certifications, links, validation]
created: 2026-07-10
updated: 2026-07-11
status: flagged
---

# Link Validation Log

> **21 of 31 HubSpot links** point to `https://academy.hubspot.com` (generic homepage) instead of the specific course page.
> These need manual lookup and correction before student-space launch.

## Broken / Generic HubSpot Links (21)

| ID | Title | Current URL | Issue | Section |
|---|---|---|---|---|
| CERT-061 | HubSpot SEO | `https://academy.hubspot.com` | Generic — needs course-specific URL | Licence Marketing |
| CERT-062 | HubSpot SEO II | `https://academy.hubspot.com` | Generic — needs course-specific URL | Licence Marketing |
| CERT-186 | Inbound Marketing Optimization | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master Marketing & IA |
| CERT-188 | HubSpot Marketing Hub Software | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master Marketing & IA |
| CERT-189 | AI for Marketing, Sales & Service Bootcamp | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master Marketing & IA |
| CERT-190 | Account-Based Marketing Bootcamp | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master Marketing & IA |
| CERT-210 | HubSpot Sales Hub Software | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master CRM |
| CERT-211 | HubSpot Service Hub Software | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master CRM |
| CERT-212 | HubSpot Inbound Sales | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master CRM |
| CERT-213 | HubSpot Content Hub for Marketers | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master CRM |
| CERT-214 | HubSpot Sales Management | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master CRM |
| CERT-215 | HubSpot Sales Enablement | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master CRM |
| CERT-216 | HubSpot Frictionless Sales | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master CRM |
| CERT-217 | HubSpot Revenue Operations | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master CRM |
| CERT-218 | Integrating With HubSpot I: Foundations | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master CRM |
| CERT-219 | HubSpot CMS for Developers II | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master CRM |
| CERT-220 | HubSpot Data Integrations Certification | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master CRM |
| CERT-221 | HubSpot Email Marketing Software | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master CRM |
| CERT-222 | HubSpot Content Hub Software Certification | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master CRM |
| CERT-223 | AI for Marketing, Sales & Service Bootcamp | `https://academy.hubspot.com` | Generic — duplicate of CERT-189 | Master CRM |
| CERT-224 | CRM Customization Bootcamp for Developers | `https://academy.hubspot.com` | Generic — needs course-specific URL | Master CRM |

## Valid HubSpot Links (10)

| ID | Title | URL |
|---|---|---|
| CERT-058 | HubSpot Social Media Marketing | `https://academy.hubspot.com/courses/social-media` |
| CERT-059 | HubSpot Digital Marketing | `https://academy.hubspot.com/courses/digital-marketing` |
| CERT-060 | HubSpot Content Marketing | `https://academy.hubspot.com/courses/content-marketing` |
| CERT-063 | HubSpot Inbound | `https://academy.hubspot.com/courses/inbound` |
| CERT-064 | HubSpot Inbound Marketing | `https://academy.hubspot.com/courses/inbound-marketing` |
| CERT-065 | HubSpot Digital Advertising | `https://academy.hubspot.com/courses/digital-advertising` |
| CERT-066 | HubSpot Email Marketing | `https://academy.hubspot.com/courses/email-marketing` |
| CERT-187 | Social Media Marketing Certification II | `https://academy.hubspot.com/courses/social-media` |
| CERT-191 | Reporting and Analytics Bootcamp | `https://academy.hubspot.com/courses/reporting-and-analytics-bootcamp` |
| CERT-225 | Reporting and Analytics Bootcamp | `https://academy.hubspot.com/courses/reporting-and-analytics-bootcamp` |

## Other Providers to Validate

All non-HubSpot links in the managed catalogue should be validated in a batch crawl before student-space launch.

## Action Items

- [ ] Manually search HubSpot Academy for each of the 21 broken links.
- [ ] Update `final-catalogue.ts` with corrected URLs.
- [ ] Batch-crawl managed catalogue URLs to check for 404s or redirects.
- [ ] Set up quarterly link validation schedule.
