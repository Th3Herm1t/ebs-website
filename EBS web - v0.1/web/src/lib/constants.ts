/**
 * Constants used across the site.
 * Derived from Brand Manifest — single source of truth.
 */

export const SITE = {
  name: "EBS",
  fullName: "EBS — École de Business et de Services",
  url: "https://ebs.tn",
  defaultLocale: "fr",
} as const;

export const SEO = {
  titleTemplate: "%s | EBS",
  defaultDescription:
    "EBS forme des professionnels certifiés. Licence et Master avec 27+ certifications internationales intégrées (AWS, Google, IBM). Alternance, partenariats internationaux.",
  defaultOgImage: "/images/og/default.png",
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/EBS.officiel",
  instagram: "https://www.instagram.com/ebs_officiel",
  linkedin: "https://www.linkedin.com/school/ebs-tunisie",
} as const;
