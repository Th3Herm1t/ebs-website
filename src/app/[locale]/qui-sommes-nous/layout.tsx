import { metadataForRoute } from "@/lib/route-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("qui-sommes-nous", (await params).locale);
}

export default function AboutLayout({ children }: { children: React.ReactNode }) { return children; }
