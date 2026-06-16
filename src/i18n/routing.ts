import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['fr', 'en'],
  
  // Used when no locale matches
  defaultLocale: 'fr',
  
  // Provide a localized pathname for specific routes if needed
  pathnames: {
    '/': '/',
    '/licences': '/licences',
    '/masters': '/masters',
    '/partenaires': '/partenaires',
    '/certifications': '/certifications',
    '/qui-sommes-nous': '/qui-sommes-nous',
    '/vision-mission-valeurs': '/vision-mission-valeurs',
    '/corps-enseignant': '/corps-enseignant',
    '/alumni': '/alumni',
    '/campus': '/campus',
    '/parcours-internationaux': '/parcours-internationaux',
    '/etudiants-internationaux': '/etudiants-internationaux',
    '/entreprises-partenaires': '/entreprises-partenaires',
    '/tarifs': '/tarifs',
    '/blog': '/blog',
    '/faq': '/faq',
    '/ia-et-certifications': '/ia-et-certifications',
    '/admissions': '/admissions',
    '/preinscription': '/preinscription',
    '/contact': '/contact',
    '/actualites': '/actualites',
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
