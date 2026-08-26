import { metadataForRoute } from "@/lib/route-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("campus", (await params).locale);
}

export default function CampusLayout({ children }: { children: React.ReactNode }) { return children; }
