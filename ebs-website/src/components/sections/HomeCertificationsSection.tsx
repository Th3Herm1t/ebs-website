import { getCatalogueV3Opportunities, getCatalogueV3ProviderLogo, type Resource } from "@/lib/certifications/v3";
import { getCatalogueV3Snapshot } from "@/lib/certifications/v3/server";
import HomeCertificationsCarousel, { type HomeCertificationCard } from "./HomeCertificationsCarousel";

export default async function HomeCertificationsSection() {
  const catalogue = await getCatalogueV3Snapshot();
  const opportunities = getCatalogueV3Opportunities({}, catalogue);
  const programmeNames = new Map(catalogue.programmes.map((programme) => [programme.id, programme.name.fr]));
  const byResource = new Map<string, HomeCertificationCard>();

  for (const opportunity of opportunities) {
    const current = byResource.get(opportunity.resource.id);
    if (current) {
      if (!current.programmes.includes(programmeNames.get(opportunity.mapping.programmeId) ?? opportunity.mapping.programmeId)) {
        current.programmes.push(programmeNames.get(opportunity.mapping.programmeId) ?? opportunity.mapping.programmeId);
      }
      continue;
    }

    byResource.set(opportunity.resource.id, {
      id: opportunity.resource.id,
      title: opportunity.resource.title,
      provider: opportunity.provider?.name ?? "Organisme international",
      providerLogo: getCatalogueV3ProviderLogo(opportunity.resource.providerId, catalogue),
      classification: classificationLabel(opportunity.resource.classification),
      credential: opportunity.credential?.name ?? opportunity.resource.resourceKind,
      programmes: [programmeNames.get(opportunity.mapping.programmeId) ?? opportunity.mapping.programmeId],
    });
  }

  const cards = Array.from(byResource.values()).slice(0, 10);
  if (cards.length === 0) return null;

  return (
    <HomeCertificationsCarousel
      cards={cards}
      total={opportunities.length}
      resourceCount={catalogue.resources.length}
      providerCount={catalogue.providers.length}
      programmeCount={catalogue.programmes.length}
    />
  );
}

function classificationLabel(classification: Resource["classification"]) {
  if (classification === "ai-literacy") return "Culture IA";
  if (classification === "applied-ai") return "IA appliquée";
  return "Métier & outils";
}
