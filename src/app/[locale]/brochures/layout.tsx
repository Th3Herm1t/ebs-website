import { metadataForRoute } from "@/lib/route-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("brochures", (await params).locale);
}

export default function BrochuresLayout({ children }: { children: React.ReactNode }) { return children; }
