import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const appRoot = dirname(fileURLToPath(import.meta.url));

const legacyRedirects = [
  ['/about', '/qui-sommes-nous'],
  ['/courses', '/licences'],
  ['/course-2', '/licences'],
  ['/course-3', '/masters'],
  ['/course-sidebar', '/nos-programmes'],
  ['/course-single', '/nos-programmes'],
  ['/events', '/actualites'],
  ['/event-single', '/actualites'],
  ['/team', '/corps-enseignant'],
  ['/team-details', '/corps-enseignant'],
  ['/shop', '/certifications'],
  ['/shop-single', '/certifications'],
  ['/cart', '/preinscription'],
  ['/checkout', '/preinscription'],
  ['/login', '/'],
  ['/register', '/preinscription'],
  ['/thank-you', '/'],
  ['/index-2', '/'],
  ['/index-3', '/'],
  ['/blog-single', '/blog'],
  ['/parcours-internationaux', '/parcours-international'],
  ['/entreprises-partenaires', '/partenaires-economiques'],
] as const;

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return legacyRedirects.flatMap(([source, destination]) => [
      { source, destination, permanent: true },
      { source: `/:locale(fr|en)${source}`, destination: `/:locale${destination}`, permanent: true },
    ]);
  },
  turbopack: {
    root: appRoot,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ebs.tn',
      },
      {
        protocol: 'https',
        hostname: 'www.uqat.ca',
      },
      {
        protocol: 'https',
        hostname: 'uqat.ca',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
