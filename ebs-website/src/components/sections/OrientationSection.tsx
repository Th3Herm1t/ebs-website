import { getPublicCatalogueV3ProgrammeSummary } from "@/lib/certifications/v3";
import { getCatalogueV3Snapshot } from "@/lib/certifications/v3/server";
import { getLicences } from "@/lib/programmes/licences";
import { getMasters } from "@/lib/programmes/masters";
import ProgrammeFinder, { type OrientationProgramme } from "./ProgrammeFinder";

export default async function OrientationSection({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const catalogue = await getCatalogueV3Snapshot();
  const licences = getLicences(locale);
  const masters = getMasters(locale);
  const entries = [
    ...Object.values(licences),
    ...Object.values(masters),
  ];

  const programmes: OrientationProgramme[] = entries.map((data) => {
    const summary = getPublicCatalogueV3ProgrammeSummary(data.catalogueId, catalogue);
    return {
      key: {
        "licence-management": "management",
        "licence-marketing": "marketing",
        "licence-finance": "finance",
        "licence-informatique-ia": "info-ia",
        "licence-cybersecurite": "info-cyber",
        "master-crm-revops": "crm",
        "master-marketing-digital-ia": "mkt-ia",
        "master-startups-entrepreneuriat": "startups",
        "master-ingenierie-financiere": "ing-fin",
      }[data.catalogueId] ?? data.slug,
      name: data.title,
      degree: data.type === "licence" ? "Licence" : "Master",
      slug: `${data.type === "licence" ? "licences" : "masters"}/${data.slug}`,
      color: data.color,
      certs: summary.total,
      duration: data.duree,
      level: data.type === "licence" ? "Bac" : "Bac+3",
      intl: data.internationalPathways.map((pathway) => pathway.partenaire).join(" · "),
      careers: data.debouches.slice(0, 3).join(", "),
      data,
    };
  });

  return <ProgrammeFinder programmes={programmes} locale={locale} />;
}
