import { metadataForRoute } from "@/lib/route-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("partenaires-economiques", (await params).locale);
}

export default function EconomicPartnersLayout({ children }: { children: React.ReactNode }) { return children; }
