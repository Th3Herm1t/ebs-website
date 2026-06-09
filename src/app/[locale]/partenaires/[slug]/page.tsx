import { notFound } from "next/navigation";
import { PartnerHero, PartnerPresentation, PartnerPrograms, PartnerEligibility, PartnerAdvantages, PartnerDebouches } from "@/components/partner";
import { CtaSection } from "@/components/shared";
import { partenaires } from "@/lib/partenaires/partenaires";

interface PageParams {
  params: Promise<{ slug: string; locale: string }>;
}

export default async function PartnerPage({ params }: PageParams) {
  const { slug } = await params;
  const data = partenaires[slug];
  if (!data) notFound();

  return (
    <>
      <PartnerHero name={data.name} country={data.country} type={data.type} />

      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12 space-y-16">
          <PartnerPresentation>
            <p>{data.presentation}</p>
          </PartnerPresentation>

          <PartnerPrograms programmes={data.programmes} />

          <PartnerEligibility>
            <p>{data.eligibilite}</p>
          </PartnerEligibility>

          <PartnerAdvantages avantages={data.avantages} />

          <PartnerDebouches debouches={data.debouches} />
        </div>
      </section>

      <CtaSection
        title="Intéressé(e) par ce partenaire ?"
        subtitle="Contactez-nous pour en savoir plus sur les modalités d'admission et les conditions d'éligibilité."
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
        whatsapp="+216 29 58 28 35"
        background="penn-green"
      />
    </>
  );
}
