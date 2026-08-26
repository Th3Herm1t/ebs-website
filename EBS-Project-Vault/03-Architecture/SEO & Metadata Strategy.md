---
tags: [architecture, seo, metadata, planning]
created: 2026-06-05
---

# 🕷️ Enterprise SEO & Metadata Strategy (Next.js App Router)

> [!IMPORTANT]
> This document outlines the comprehensive plan for implementing an enterprise-grade SEO and metadata architecture for the EBS website using Next.js 14+ App Router features.

## 1. Global Layout Metadata (`src/app/layout.tsx`)

The root layout must define the baseline metadata for the entire application.

```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Espima Business School (EBS)',
    default: 'Espima Business School (EBS) | Université Privée en Tunisie', 
  },
  description: 'ESPIMA Business School est une université privée d’informatique et de management en Tunisie fondée en 2013, agréée par le ministère de l’Enseignement Supérieur.',
  keywords: ['EBS', 'Espima Business School', 'Université Privée', 'Tunisie', 'Management', 'Informatique', 'Licence', 'Master'],
  authors: [{ name: 'EBS' }],
  creator: 'Espima Business School',
  metadataBase: new URL('https://ebs.tn'), // Replace with actual production URL
  openGraph: {
    type: 'website',
    locale: 'fr_TN', // Or dynamic based on i18n
    url: 'https://ebs.tn',
    title: 'Espima Business School (EBS)',
    description: 'Votre avenir commence ici.',
    siteName: 'Espima Business School',
    images: [
      {
        url: '/images/og-image.jpg', // MUST CREATE THIS ASSET
        width: 1200,
        height: 630,
        alt: 'EBS Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espima Business School (EBS)',
    description: 'Université privée d’informatique et de management en Tunisie.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

## 2. Dynamic Metadata for Pages

Every route (e.g., individual courses, blog posts) must export a `generateMetadata` function.

```typescript
// src/app/courses/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const course = await fetchCourse(params.slug);
  return {
    title: course.title,
    description: course.shortDescription,
    // Dynamic OG images, etc.
  };
}
```

## 3. Structural SEO Components

### `sitemap.ts` (Dynamic Sitemap Generation)
We will utilize Next.js `app/sitemap.ts` to automatically generate a standard XML sitemap based on our dynamic content (courses, blog posts) and static routes.

### `robots.txt`
A static `app/robots.txt` or dynamic `app/robots.ts` file to guide crawlers.

### Canonical URLs
Ensure `metadataBase` is set and canonical links are explicitly declared in the metadata object to prevent duplicate content penalties, especially critical for course variants.

## 4. Structured Data (JSON-LD)

We must implement `Schema.org` JSON-LD structured data for rich search results.

*   **CollegeOrUniversity Schema:** On the homepage to define the institution.
*   **Course Schema:** On every individual course page (Licences, Masters) detailing prerequisites, duration, and provider.
*   **Event Schema:** For upcoming EBS events.
*   **Article Schema:** For blog posts.

**Implementation Method:**
Using a script tag in the page layout or specific page components:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

## 5. Internationalization (i18n) SEO implications

When we implement the i18n system:
*   Ensure `<html lang="fr">` (or dynamic locale) is correctly set in `layout.tsx`.
*   Implement `<link rel="alternate" hreflang="x" href="url" />` tags in the `<head>` to tell Google about localized versions of a page.
*   Ensure URL structures reflect the language (e.g., `/fr/about` vs `/en/about`).

## Next Steps for SEO Implementation
1.  Add `metadataBase` to root layout.
2.  Create placeholder `og-image.jpg`.
3.  Write `sitemap.ts`.
4.  Implement `CollegeOrUniversity` JSON-LD on the homepage.
