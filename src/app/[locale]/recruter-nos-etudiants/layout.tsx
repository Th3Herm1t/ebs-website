import { metadataForRoute } from "@/lib/route-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("recruter-nos-etudiants", (await params).locale);
}

export default function RecruitLayout({ children }: { children: React.ReactNode }) { return children; }
