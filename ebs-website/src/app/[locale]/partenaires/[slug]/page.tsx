import { notFound } from "next/navigation";
import PartenaireDetailClient from "./PartenaireDetailClient";
import { partenaires } from "@/lib/partenaires/partenaires";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

interface PageParams {
  params: Promise<{ locale: string; slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return ["fr", "en"].flatMap((locale) =>
    Object.keys(partenaires).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: PageParams) {
  const { locale, slug } = await params;
  const partner = partenaires[slug];
  if (!partner) return {};

  return pageMetadata({
    title: `Partenariat EBS avec ${partner.name}`,
    description: `${partner.name} ${partner.country.replace(/^[^\s]+\s/, "")} : parcours international EBS, programmes accessibles, conditions d'éligibilité et débouchés internationaux.`,
    path: `/${locale}/partenaires/${slug}`,
    image: partner.heroImage?.startsWith("/") ? partner.heroImage : "/images/heroes/hero-alumni.webp",
  });
}

export default async function PartenaireDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const partner = partenaires[slug];
  if (!partner) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: partner.name,
    description: partner.presentation,
    logo: partner.logo,
    address: {
      "@type": "PostalAddress",
      addressCountry: partner.countryCode,
    },
    sameAs: "https://ebs.tn",
  };
  const breadcrumb = breadcrumbJsonLd([
    { name: "Accueil", path: "/fr" },
    { name: "Partenaires", path: "/fr/partenaires" },
    { name: partner.name, path: `/fr/partenaires/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PartenaireDetailClient slug={slug} />
    </>
  );
}
