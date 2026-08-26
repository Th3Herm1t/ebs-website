import { metadataForRoute } from "@/lib/route-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("preinscription", (await params).locale);
}

export default function PreinscriptionLayout({ children }: { children: React.ReactNode }) { return children; }
