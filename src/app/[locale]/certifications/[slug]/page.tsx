import { notFound } from "next/navigation";
import { CertProviderHero, CertProviderIntro, CertCategorySection } from "@/components/certifications";
import { CtaSection } from "@/components/shared";
import { providers } from "@/lib/certifications/providers";

interface PageParams {
  params: Promise<{ slug: string; locale: string }>;
}

export default async function CertProviderPage({ params }: PageParams) {
  const { slug } = await params;
  const data = providers[slug];
  if (!data) notFound();

  return (
    <>
      <CertProviderHero name={data.name} tagline={data.tagline} />

      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12 space-y-16">
          <CertProviderIntro presentation={data.presentation} pourquoi={data.pourquoi} />

          {data.categories.map((cat, i) => (
            <CertCategorySection key={cat.name} category={cat} index={i} />
          ))}
        </div>
      </section>

      <CtaSection
        title="Prêt(e) à décrocher ces certifications ?"
        subtitle="Toutes ces certifications sont incluses gratuitement dans votre formation chez EBS."
        primaryCta={{ label: "Voir nos programmes", href: "/licences" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
