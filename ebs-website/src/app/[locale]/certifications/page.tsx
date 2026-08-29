import CertificationsClient from "./CertificationsClient";
import { getCatalogueV3Snapshot } from "@/lib/certifications/v3/server";

export default async function CertificationsPage() {
  const catalogue = await getCatalogueV3Snapshot();
  return <CertificationsClient catalogue={catalogue} />;
}
