import type { Metadata } from "next";

export const siteUrl = "https://ebs.tn";
export const siteName = "Espima Business School";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  image = "/images/all-img/hero.webp",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const normalizedPath = path.replace(/^\/(?:fr|en)(?=\/|$)/, "") || "/";
  const locale = path.startsWith("/en") ? "en" : "fr";
  const localizedPath = locale === "en" ? `/en${normalizedPath === "/" ? "" : normalizedPath}` : normalizedPath;
  const url = absoluteUrl(localizedPath);
  const frenchPath = normalizedPath;
  const englishPath = `/en${normalizedPath === "/" ? "" : normalizedPath}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: absoluteUrl(frenchPath),
        en: absoluteUrl(englishPath),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
