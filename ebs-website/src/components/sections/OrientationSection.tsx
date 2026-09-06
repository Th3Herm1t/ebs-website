import { getCatalogueV3Programme, getCatalogueV3ProgrammeSummary } from "@/lib/certifications/v3";
import { getCatalogueV3Snapshot } from "@/lib/certifications/v3/server";
import { licences } from "@/lib/programmes/licences";
import { masters } from "@/lib/programmes/masters";
import ProgrammeFinder, { type OrientationProgramme } from "./ProgrammeFinder";

export default async function OrientationSection() {
  const catalogue = await getCatalogueV3Snapshot();
  const entries = [
    ...Object.values(licences),
    ...Object.values(masters),
  ];

  const programmes: OrientationProgramme[] = entries.map((data) => {
    const programme = getCatalogueV3Programme(data.catalogueId, catalogue);
    const summary = getCatalogueV3ProgrammeSummary(data.catalogueId, catalogue);
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
      name: programme?.name.fr ?? data.title,
      degree: data.type === "licence" ? "Licence" : "Master",
      slug: `${data.type === "licence" ? "licences" : "masters"}/${data.slug}`,
      color: data.color,
      certs: summary.total,
      duration: data.duree,
      level: data.type === "licence" ? "Bac" : "Bac+3",
      intl: data.internationalPathways.map((pathway) => pathway.partenaire).join(" · "),
      employment: "90%+",
      careers: data.debouches.slice(0, 3).join(", "),
      data,
    };
  });

  return <ProgrammeFinder programmes={programmes} />;
}
