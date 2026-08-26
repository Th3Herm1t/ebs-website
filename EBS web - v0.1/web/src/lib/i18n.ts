/**
 * i18n utilities for EBS
 *
 * Default locale: fr (no prefix)
 * Additional: en
 *
 * Usage:
 *   import { getLocalizedPath, getLocaleFromPath, navLinks } from '@/lib/i18n';
 */

export const defaultLocale = "fr" as const;
export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

/* ── Path maps (FR path ↔ EN path) ── */
const frToEn: Record<string, string> = {
  '/': '/en/',
  '/programmes': '/en/programs',
  '/certifications': '/en/certifications',
  '/international': '/en/international',
  '/a-propos': '/en/about',
  '/admissions': '/en/admissions',
  '/alternance': '/en/work-study',
  '/brochures': '/en/brochures',
  '/preinscription': '/en/pre-registration',
  '/confidentialite': '/en/privacy',
  '/mentions-legales': '/en/legal',
  '/actualites': '/en/news',
  '/evenements': '/en/events',
};

const enToFr: Record<string, string> = Object.fromEntries(
  Object.entries(frToEn).map(([fr, en]) => [en, fr])
);

/**
 * Get the equivalent path in the target locale.
 */
export function switchLocalePath(currentPath: string, targetLocale: Locale): string {
  const clean = currentPath.replace(/\/+$/, '') || '/';

  if (targetLocale === 'en') {
    // Direct lookup first
    if (frToEn[clean]) return frToEn[clean];
    // Programme slug: /programmes/xxx → /en/programs/xxx
    const progMatch = clean.match(/^\/programmes\/(.+)/);
    if (progMatch) return `/en/programs/${progMatch[1]}`;
    // Certifications sub-pages
    const certMatch = clean.match(/^\/certifications\/(.+)/);
    if (certMatch) return `/en/certifications/${certMatch[1]}`;
    // Fallback
    return `/en${clean}`;
  }

  // targetLocale === 'fr'
  if (enToFr[clean]) return enToFr[clean];
  const enProgMatch = clean.match(/^\/en\/programs\/(.+)/);
  if (enProgMatch) return `/programmes/${enProgMatch[1]}`;
  const enCertMatch = clean.match(/^\/en\/certifications\/(.+)/);
  if (enCertMatch) return `/certifications/${enCertMatch[1]}`;
  // Strip /en prefix
  return clean.replace(/^\/en/, '') || '/';
}

/**
 * Returns the locale-prefixed path.
 * French (default) has no prefix: /programmes
 * English: /en/programmes
 */
export function getLocalizedPath(path: string, locale: Locale = defaultLocale): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return cleanPath;
  return `/${locale}${cleanPath}`;
}

/**
 * Extracts locale from a URL pathname.
 */
export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (locales.includes(segment as Locale)) return segment as Locale;
  return defaultLocale;
}

/* ── Navigation links per locale ── */
export interface NavChild { label: string; href: string; desc?: string; }
export interface NavLink { label: string; href?: string; children?: NavChild[]; }

export const navLinks: Record<Locale, NavLink[]> = {
  fr: [
    {
      label: 'Formation',
      children: [
        { label: 'Programmes', href: '/programmes', desc: 'Licences & Masters' },
        { label: 'Certifications', href: '/certifications', desc: 'AWS, Google, IBM...' },
        { label: 'Alternance', href: '/alternance', desc: '3 jours école, 2 jours entreprise' },
      ],
    },
    { label: 'International', href: '/international' },
    {
      label: 'Campus',
      children: [
        { label: 'À propos', href: '/a-propos', desc: 'Notre histoire & équipe' },
        { label: 'Admissions', href: '/admissions', desc: 'Conditions & étapes' },
        { label: 'Brochures', href: '/brochures', desc: 'Télécharger les brochures' },
      ],
    },
    {
      label: 'Actualités',
      children: [
        { label: 'Blog', href: '/actualites', desc: 'Articles & success stories' },
        { label: 'Événements', href: '/evenements', desc: 'Agenda & portes ouvertes' },
      ],
    },
  ],
  en: [
    {
      label: 'Academics',
      children: [
        { label: 'Programs', href: '/en/programs', desc: 'Bachelor\'s & Master\'s' },
        { label: 'Certifications', href: '/en/certifications', desc: 'AWS, Google, IBM...' },
        { label: 'Work-Study', href: '/en/work-study', desc: '3 days school, 2 days company' },
      ],
    },
    { label: 'International', href: '/en/international' },
    {
      label: 'Campus',
      children: [
        { label: 'About', href: '/en/about', desc: 'Our story & team' },
        { label: 'Admissions', href: '/en/admissions', desc: 'Requirements & steps' },
        { label: 'Brochures', href: '/en/brochures', desc: 'Download brochures' },
      ],
    },
    {
      label: 'News',
      children: [
        { label: 'Blog', href: '/en/news', desc: 'Articles & success stories' },
        { label: 'Events', href: '/en/events', desc: 'Calendar & open days' },
      ],
    },
  ],
};

/* ── Shared UI strings ── */
export const ui: Record<Locale, Record<string, string>> = {
  fr: {
    preRegistration: 'Préinscription',
    preRegistrationHref: '/preinscription',
    openMenu: 'Ouvrir le menu',
    skipToContent: 'Aller au contenu principal',
    allRightsReserved: 'Tous droits réservés.',
    legalNotice: 'Mentions légales',
    legalNoticeHref: '/mentions-legales',
    privacyPolicy: 'Politique de confidentialité',
    privacyPolicyHref: '/confidentialite',
    whatsappChat: 'Discussion WhatsApp',
    programmes: 'Programmes',
    resources: 'Ressources',
    contact: 'Contact',
    viewAllProgrammes: 'Voir tous les programmes',
    certCatalog: 'Catalogue Certifications',
    intlPathways: 'Parcours Internationaux',
    workStudyModel: 'Modèle Alternance',
    admissionsGuide: "Guide d'admission",
    brochures: 'Brochures',
    tagline: "L'université privée où votre diplôme rencontre les certifications internationales pour une intégration immédiate sur le marché de l'emploi.",
    address: 'Tunis, Tunisie',
    footerLicenceInfo: 'Licence en Informatique',
    footerLicenceMgmt: 'Licence en Management',
    footerMasterMktg: 'Master Marketing Digital',
    footerMasterCRM: 'Master Transfo. Digitale',
    admissionsHref: '/admissions',
    alternanceHref: '/alternance',
    brochuresHref: '/brochures',
    programmesHref: '/programmes',
    home: 'Accueil',
    homeHref: '/',
  },
  en: {
    preRegistration: 'Pre-registration',
    preRegistrationHref: '/en/pre-registration',
    openMenu: 'Open menu',
    skipToContent: 'Skip to main content',
    allRightsReserved: 'All rights reserved.',
    legalNotice: 'Legal Notice',
    legalNoticeHref: '/en/legal',
    privacyPolicy: 'Privacy Policy',
    privacyPolicyHref: '/en/privacy',
    whatsappChat: 'WhatsApp Chat',
    programmes: 'Programs',
    resources: 'Resources',
    contact: 'Contact',
    viewAllProgrammes: 'View all programs',
    certCatalog: 'Certification Catalog',
    intlPathways: 'International Pathways',
    workStudyModel: 'Work-Study Model',
    admissionsGuide: 'Admissions Guide',
    brochures: 'Brochures',
    tagline: "The private university where your degree meets international certifications for immediate job market integration.",
    address: 'Tunis, Tunisia',
    footerLicenceInfo: 'BSc in Computer Science',
    footerLicenceMgmt: 'BSc in Management',
    footerMasterMktg: 'MSc Digital Marketing',
    footerMasterCRM: 'MSc Digital Transformation',
    admissionsHref: '/en/admissions',
    alternanceHref: '/en/work-study',
    brochuresHref: '/en/brochures',
    programmesHref: '/en/programs',
    home: 'Home',
    homeHref: '/en/',
  },
};
