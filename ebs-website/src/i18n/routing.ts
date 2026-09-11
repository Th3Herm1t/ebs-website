import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['fr', 'en'],
  
  // Used when no locale matches
  defaultLocale: 'fr',

  // Serve the default French site at the canonical root URL.
  localePrefix: 'as-needed',
  localeDetection: false,

  // Provide a localized pathname for specific routes if needed
  pathnames: {
    '/': '/',
    '/licences': '/licences',
    '/nos-programmes': '/nos-programmes',
    '/masters': '/masters',
    '/partenaires': '/partenaires',
    '/certifications': '/certifications',
    '/qui-sommes-nous': '/qui-sommes-nous',
    '/vision-mission-valeurs': '/vision-mission-valeurs',
    '/corps-enseignant': '/corps-enseignant',
    '/alumni': '/alumni',
    '/campus': '/campus',
    '/parcours-international': '/parcours-international',
    '/etudiants-internationaux': '/etudiants-internationaux',
    '/partenaires-economiques': '/partenaires-economiques',
    '/partenaires-academiques': '/partenaires-academiques',
    '/blog': '/blog',
    '/faq': '/faq',
    '/ia-et-certifications': '/ia-et-certifications',
    '/admissions': '/admissions',
    '/preinscription': '/preinscription',
    '/contact': '/contact',
    '/actualites': '/actualites',
    '/brochures': '/brochures',
    '/tarifs': '/tarifs',
    '/recruter-nos-etudiants': '/recruter-nos-etudiants',
    '/blog/[slug]': '/blog/[slug]',
    '/partenaires/[slug]': '/partenaires/[slug]',
    '/licences/[slug]': '/licences/[slug]',
    '/masters/[slug]': '/masters/[slug]',
    '/certifications/[slug]': '/certifications/[slug]',
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
