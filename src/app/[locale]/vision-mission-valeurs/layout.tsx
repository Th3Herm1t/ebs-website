import { metadataForRoute } from "@/lib/route-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("vision-mission-valeurs", (await params).locale);
}

export default function VisionLayout({ children }: { children: React.ReactNode }) { return children; }
