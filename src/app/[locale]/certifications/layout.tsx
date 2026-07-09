import { metadataForRoute } from "@/lib/route-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("certifications", (await params).locale);
}

export default function CertificationsLayout({ children }: { children: React.ReactNode }) { return children; }
