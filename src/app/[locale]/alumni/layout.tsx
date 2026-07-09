import { metadataForRoute } from "@/lib/route-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("alumni", (await params).locale);
}

export default function AlumniLayout({ children }: { children: React.ReactNode }) { return children; }
