import { metadataForRoute } from "@/lib/route-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("parcours-international", (await params).locale);
}

export default function InternationalLayout({ children }: { children: React.ReactNode }) { return children; }
