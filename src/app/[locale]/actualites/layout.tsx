import { metadataForRoute } from "@/lib/route-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("actualites", (await params).locale);
}

export default function ActualitesLayout({ children }: { children: React.ReactNode }) { return children; }
