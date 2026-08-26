import { metadataForRoute } from "@/lib/route-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("partenaires-academiques", (await params).locale);
}

export default function AcademicPartnersLayout({ children }: { children: React.ReactNode }) { return children; }
