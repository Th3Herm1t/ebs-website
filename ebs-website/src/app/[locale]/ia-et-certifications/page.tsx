import IaEtCertificationsClient from "./IaEtCertificationsClient";
import { getCatalogueV3Snapshot } from "@/lib/certifications/v3/server";

export default async function IaEtCertificationsPage() {
  const catalogue = await getCatalogueV3Snapshot();
  return <IaEtCertificationsClient catalogue={catalogue} />;
}
