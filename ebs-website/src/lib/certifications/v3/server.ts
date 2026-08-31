import { catalogueV3 } from "./selectors";
import type { CatalogueV3PublicSnapshot } from "./types";

const defaultCatalogueUrl =
  "https://lms.46.224.157.161.sslip.io/api/method/ebs_programme.api.public.get_catalogue";

function isCatalogueSnapshot(value: unknown): value is CatalogueV3PublicSnapshot {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<CatalogueV3PublicSnapshot>;
  return (
    Array.isArray(candidate.providers) &&
    Array.isArray(candidate.platforms) &&
    Array.isArray(candidate.programmes) &&
    candidate.schemaVersion === "3.2.0" &&
    Array.isArray(candidate.academicRequirements) &&
    Array.isArray(candidate.resources) &&
    Array.isArray(candidate.credentials) &&
    Array.isArray(candidate.opportunities) &&
    Boolean(candidate.release)
  );
}

export async function getCatalogueV3Snapshot(): Promise<CatalogueV3PublicSnapshot> {
  const url = process.env.EBS_CATALOGUE_API_URL ?? defaultCatalogueUrl;

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      next: { revalidate: 300 },
    });

    if (!response.ok) return catalogueV3;

    const body = (await response.json()) as { message?: unknown };
    return isCatalogueSnapshot(body.message) ? body.message : catalogueV3;
  } catch {
    return catalogueV3;
  }
}
