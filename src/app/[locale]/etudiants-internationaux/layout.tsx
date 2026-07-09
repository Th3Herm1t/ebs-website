import { metadataForRoute } from "@/lib/route-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("etudiants-internationaux", (await params).locale);
}

export default function InternationalStudentsLayout({ children }: { children: React.ReactNode }) { return children; }
