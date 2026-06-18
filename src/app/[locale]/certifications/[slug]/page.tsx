import { notFound } from "next/navigation";
import { CtaSection } from "@/components/shared";
import { providers } from "@/lib/certifications/providers";
import { CertProviderContent } from "@/components/certifications/CertProviderContent";

interface PageParams {
  params: Promise<{ slug: string; locale: string }>;
}

export default async function CertProviderPage({ params }: PageParams) {
  const { slug } = await params;
  const data = providers[slug];
  if (!data) notFound();

  return (
    <>
      <CertProviderContent data={data} />
      <CtaSection
        title="Prêt(e) à décrocher ces certifications ?"
        subtitle="Toutes ces certifications sont incluses gratuitement dans votre formation chez EBS."
        primaryCta={{ label: "Voir nos programmes", href: "/nos-programmes" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
