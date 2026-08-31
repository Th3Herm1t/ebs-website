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

const PROVIDER_EDITORIAL_METADATA: Record<string, { tagline: string; presentation: string; pourquoi: string }> = {
  google: {
    tagline: "Accessible chez EBS — Reconnues mondialement par les recruteurs.",
    presentation: "Google propose via Google Career Certificates, Google Skillshop et Google Cloud un catalogue de formations et certifications valorisées dans le monde entier en data analytics, marketing digital, IA et cybersécurité.",
    pourquoi: "Les certifications Google constituent un signal d'employabilité immédiat sur le marché tunisien et international, validant des compétences opérationnelles concrètes.",
  },
  ibm: {
    tagline: "Accessible chez EBS — Certifications de référence en IA, Data Science et Cloud.",
    presentation: "IBM (via IBM SkillsBuild, Cognitive Class et IBM Training) propose un portefeuille reconnu en Intelligence Artificielle, Machine Learning, Data Science et automatisation d'entreprise.",
    pourquoi: "Les certifications IBM valident des connaissances technologiques pointues directement applicables aux projets de transformation numérique des entreprises.",
  },
  harvard: {
    tagline: "Accessible chez EBS — La référence mondiale de l'enseignement en informatique.",
    presentation: "Harvard University met à disposition ses cursus d'excellence CS50 et Data Science, références incontournables dans l'enseignement de l'informatique et de l'intelligence artificielle.",
    pourquoi: "Un justificatif de complétion Harvard atteste d'un niveau d'exigence académique de premier plan et d'une rigueur méthodologique reconnue mondialement.",
  },
  cisco: {
    tagline: "Accessible chez EBS — Réseaux, cybersécurité et infrastructures IT.",
    presentation: "Cisco Networking Academy (NetAcad) propose des formations de référence mondiale pour bâtir des compétences solides en sécurité des réseaux et architectures informatiques.",
    pourquoi: "Cisco est le leader mondial des technologies réseau. Ses parcours préparent directement aux standards professionnels de la cybersécurité moderne.",
  },
  hubspot: {
    tagline: "Accessible chez EBS — CRM, Inbound Marketing et automatisation des ventes.",
    presentation: "HubSpot Academy est l'autorité mondiale du marketing entrant, du CRM et des opérations commerciales numériques.",
    pourquoi: "Une certification HubSpot prouve immédiatement aux recruteurs la maîtrise des outils de prospection, de fidélisation et de gestion de la relation client.",
  },
  semrush: {
    tagline: "Accessible chez EBS — SEO, Content Marketing et visibilité IA.",
    presentation: "SEMrush Academy propose des certifications sur l'optimisation pour les moteurs de recherche, la stratégie de contenu et le référencement naturel augmenté par l'IA.",
    pourquoi: "SEMrush est l'outil SEO de référence utilisé par des millions d'agences et d'entreprises à travers le monde.",
  },
  microsoft: {
    tagline: "Accessible chez EBS — Productivité augmentée, Cloud et IA générative.",
    presentation: "Microsoft Learn offre des parcours structurés pour comprendre l'IA d'entreprise, les copilotes et la transformation numérique des organisations.",
    pourquoi: "La maîtrise des technologies Microsoft constitue un prérequis incontournable dans l'environnement bureautique et décisionnel des grandes entreprises.",
  },
  salesforce: {
    tagline: "Accessible chez EBS — Leader mondial du CRM et de l'écosystème Trailhead.",
    presentation: "Salesforce Trailhead propose des badges et certifications validant la configuration et l'exploitation de la plateforme CRM la plus puissante au monde.",
    pourquoi: "L'écosystème Salesforce représente l'un des viviers d'embauche les plus dynamiques du conseil en systèmes d'information et de la relation client.",
  },
  bcg: {
    tagline: "Accessible chez EBS — Simulation professionnelle en conseil de direction et stratégie.",
    presentation: "Boston Consulting Group (BCG) propose des simulations virtuelles immersives permettant de résoudre des problématiques réelles de conseil en stratégie et transformation d'entreprise.",
    pourquoi: "Ces simulations permettent aux étudiants EBS de s'exercer aux méthodologies d'analyse et de recommandation des plus grands cabinets de conseil mondiaux.",
  },
  "goldman-sachs": {
    tagline: "Accessible chez EBS — Simulation professionnelle en finance de marché et banque d'affaires.",
    presentation: "Goldman Sachs propose des mises en situation pratiques sur les opérations financières, l'évaluation des risques et les métiers de la banque d'investissement.",
    pourquoi: "Une immersion concrète dans les exigences et les pratiques d'une des institutions financières les plus prestigieuses de Wall Street.",
  },
  "jpmorgan-chase": {
    tagline: "Accessible chez EBS — Ingénierie financière, recherche quantitative et banque d'affaires.",
    presentation: "JPMorgan Chase propose des simulations professionnelles autour de l'analyse financière, de la modélisation quantitative et des services bancaires d'investissement.",
    pourquoi: "Ces programmes développent des compétences analytiques de pointe directement transposables dans les institutions financières et banques d'affaires.",
  },
  databricks: {
    tagline: "Accessible chez EBS — Intelligence artificielle, Data Engineering et flux de données.",
    presentation: "Databricks propose des formations certifiantes sur l'architecture de données moderne, les pipelines d'IA et les agents intelligents.",
    pourquoi: "Databricks est le standard émergent des entreprises pour le traitement massif de données et le déploiement de modèles de machine learning.",
  },
  freecodecamp: {
    tagline: "Accessible chez EBS — Développement logiciel, algorithmique et projets certifiants.",
    presentation: "freeCodeCamp est une plateforme éducative à but non lucratif qui certifie des compétences pratiques à travers des centaines d'heures de code et de projets validés.",
    pourquoi: "Chaque certification freeCodeCamp repose sur la livraison de projets concrets examinés et vérifiables publiquement.",
  },
  "hugging-face": {
    tagline: "Accessible chez EBS — Modèles de langage, open-source et IA générative.",
    presentation: "Hugging Face est le hub mondial des modèles de machine learning open-source et du traitement du langage naturel (NLP).",
    pourquoi: "Indispensable pour les étudiants de la filière informatique & IA souhaitant concevoir et déployer des architectures IA modernes.",
  },
};

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
        level: resource.difficulty,
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

  const editorial = PROVIDER_EDITORIAL_METADATA[slug];
  const isSimulation = resources.some((r) => r.platformId === "platform-forage");

  return {
    slug,
    name: provider.name,
    logo: getCatalogueV3ProviderLogo(provider.id) ?? "",
    tagline: editorial?.tagline ?? (isSimulation ? "Accessible chez EBS — Simulation professionnelle et mise en situation réelle." : "Accessible chez EBS — Ressources et justificatifs vérifiés gratuits."),
    presentation: editorial?.presentation ?? (isSimulation
      ? `${provider.name} propose des simulations professionnelles interactives permettant de travailler sur des cas pratiques réels d'entreprise, vérifiées et intégrées dans le catalogue EBS.`
      : `${resources.length} ressources de ${provider.name} sont publiées dans la release v3.1 du catalogue EBS, chacune vérifiée gratuite de bout en bout.`),
    pourquoi: editorial?.pourquoi ?? "Ces parcours développent des compétences pratiques reconnues et enrichissent le profil de nos diplômés sans aucun coût additionnel.",
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
