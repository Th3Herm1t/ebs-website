import { metadataForRoute } from "@/lib/route-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("blog", (await params).locale);
}

export default function BlogLayout({ children }: { children: React.ReactNode }) { return children; }
