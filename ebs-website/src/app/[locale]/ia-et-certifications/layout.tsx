import { metadataForRoute } from "@/lib/route-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("ia-et-certifications", (await params).locale);
}

export default function IaLayout({ children }: { children: React.ReactNode }) { return children; }
