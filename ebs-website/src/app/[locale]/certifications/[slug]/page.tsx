import { notFound } from "next/navigation";
import { CtaSection } from "@/components/shared";
import { providers } from "@/lib/certifications/providers";
import { CertProviderContent } from "@/components/certifications/CertProviderContent";
import { pageMetadata } from "@/lib/seo";

interface PageParams {
  params: Promise<{ slug: string; locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return ["fr", "en"].flatMap((locale) =>
    Object.keys(providers).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: PageParams) {
  const { slug, locale } = await params;
  const data = providers[slug];
  if (!data) return {};
  return pageMetadata({
    title: `Certifications ${data.name} incluses chez EBS`,
    description: `${data.tagline} ${data.presentation.slice(0, 135)}`,
    path: `/${locale}/certifications/${slug}`,
  });
}

export default async function CertProviderPage({ params }: PageParams) {
  const { slug } = await params;
  const data = providers[slug];
  if (!data) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    name: `Certifications ${data.name}`,
    description: data.presentation,
    provider: {
      "@type": "CollegeOrUniversity",
      name: "Espima Business School",
      sameAs: "https://ebs.tn",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CertProviderContent data={data} />
      <CtaSection
        title="Prêt(e) à décrocher ces certifications ?"
        subtitle="Toutes ces certifications sont incluses dans votre formation chez EBS."
        primaryCta={{ label: "Voir nos programmes", href: "/nos-programmes" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
