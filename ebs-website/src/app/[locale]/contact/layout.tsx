import { metadataForRoute } from "@/lib/route-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("contact", (await params).locale);
}

export default function ContactLayout({ children }: { children: React.ReactNode }) { return children; }
