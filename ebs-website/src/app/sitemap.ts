import type { MetadataRoute } from "next";
import { catalogueV3 } from "@/lib/certifications/v3";
import { partenaires } from "@/lib/partenaires/partenaires";
import { licences } from "@/lib/programmes/licences";
import { masters } from "@/lib/programmes/masters";
import { siteUrl } from "@/lib/seo";

const staticRoutes = [
  "",
  "/actualites",
  "/admissions",
  "/alumni",
  "/blog",
  "/brochures",
  "/campus",
  "/certifications",
  "/contact",
  "/corps-enseignant",
  "/etudiants-internationaux",
  "/faq",
  "/ia-et-certifications",
  "/licences",
  "/masters",
  "/nos-programmes",
  "/parcours-international",
  "/partenaires",
  "/partenaires-academiques",
  "/partenaires-economiques",
  "/preinscription",
  "/qui-sommes-nous",
  "/recruter-nos-etudiants",
  "/vision-mission-valeurs",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const dynamicRoutes = [
    ...Object.keys(licences).map((slug) => `/licences/${slug}`),
    ...Object.keys(masters).map((slug) => `/masters/${slug}`),
    ...catalogueV3.providers.map((provider) => `/certifications/${provider.id.replace(/^provider-/, "")}`),
    ...Object.keys(partenaires).map((slug) => `/partenaires/${slug}`),
  ];

  return ["fr", "en"].flatMap((locale) =>
    [...staticRoutes, ...dynamicRoutes].map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : route.includes("licences") || route.includes("masters") ? 0.9 : 0.7,
    }))
  );
}
