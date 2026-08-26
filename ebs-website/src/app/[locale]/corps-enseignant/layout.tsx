import { metadataForRoute } from "@/lib/route-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("corps-enseignant", (await params).locale);
}

export default function FacultyLayout({ children }: { children: React.ReactNode }) { return children; }
