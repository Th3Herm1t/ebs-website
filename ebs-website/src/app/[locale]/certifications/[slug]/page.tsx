import { notFound } from "next/navigation";
import { CtaSection } from "@/components/shared";
import { CertProviderContent } from "@/components/certifications/CertProviderContent";
import { catalogueV3, getCatalogueV3ProviderLogo } from "@/lib/certifications/v3";
import { pageMetadata } from "@/lib/seo";

interface PageParams {
  params: Promise<{ slug: string; locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return ["fr", "en"].flatMap((locale) =>
    catalogueV3.providers.map((provider) => ({ locale, slug: provider.id.replace(/^provider-/, "") }))
  );
}

function providerForSlug(slug: string) {
  return catalogueV3.providers.find((provider) => provider.id === `provider-${slug}`);
}

function providerPageData(slug: string) {
  const provider = providerForSlug(slug);
  if (!provider) return undefined;

  const resources = catalogueV3.resources.filter((resource) => resource.providerId === provider.id);
  const credentials = new Map(catalogueV3.credentials.map((credential) => [credential.resourceId, credential]));
  const categories = ["ai-literacy", "applied-ai", "non-ai"].flatMap((classification) => {
    const entries = resources
      .filter((resource) => resource.classification === classification)
      .map((resource) => ({
        name: resource.title,
        level: resource.level,
        credential: credentials.get(resource.id),
      }));
    return entries.length > 0
      ? [{
          name: classification === "ai-literacy" ? "Culture IA" : classification === "applied-ai" ? "IA appliquée" : "Compétences métier",
          certs: entries.map(({ name, level, credential }) => ({
            name: credential ? `${name} · ${credential.name}` : name,
            level,
          })),
        }]
      : [];
  });

  return {
    slug,
    name: provider.name,
    logo: getCatalogueV3ProviderLogo(provider.id) ?? "",
    tagline: "Ressources et justificatifs vérifiés dans le catalogue EBS.",
    presentation: `${resources.length} ressources de cet organisme sont publiées dans la release v3.1 du catalogue EBS. Chaque ressource respecte la politique de gratuité vérifiée avant publication.`,
    pourquoi: "Ces ressources peuvent développer une compétence ou enrichir un parcours. Elles ne remplacent pas les exigences académiques EBS et aucun fournisseur n'est imposé.",
    categories,
  };
}

export async function generateMetadata({ params }: PageParams) {
  const { slug, locale } = await params;
  const data = providerPageData(slug);
  if (!data) return {};
  return pageMetadata({
    title: `Ressources vérifiées ${data.name} chez EBS`,
    description: `${data.tagline} ${data.presentation.slice(0, 135)}`,
    path: `/${locale}/certifications/${slug}`,
  });
}

export default async function CertProviderPage({ params }: PageParams) {
  const { slug } = await params;
  const data = providerPageData(slug);
  if (!data) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
     name: `Ressources vérifiées ${data.name}`,
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
         title="Construisez vos compétences avec EBS."
         subtitle="Les ressources présentées sont vérifiées gratuites et peuvent compléter les preuves acceptées de votre parcours."
        primaryCta={{ label: "Voir nos programmes", href: "/nos-programmes" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
