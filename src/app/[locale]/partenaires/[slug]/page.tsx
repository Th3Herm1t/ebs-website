import { notFound } from "next/navigation";
import { PartnerPageContent } from "@/components/partner/PartnerPageContent";
import { partenaires } from "@/lib/partenaires/partenaires";

interface PageParams {
  params: Promise<{ slug: string; locale: string }>;
}

export default async function PartnerPage({ params }: PageParams) {
  const { slug } = await params;
  const data = partenaires[slug];
  if (!data) notFound();

  return <PartnerPageContent data={data} />;
}
