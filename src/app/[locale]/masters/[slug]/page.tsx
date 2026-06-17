import { notFound } from "next/navigation";
import { ProgramLPHero, ProgramPresentation, PublicCible, ModulesAccordion, CertificationsTable, IACompetences, InternationalPerspectives, DebouchesGrid } from "@/components/program";
import { CtaSection, StickyForm } from "@/components/shared";
import { masters } from "@/lib/programmes/masters";

interface PageParams {
  params: Promise<{ slug: string; locale: string }>;
}

export default async function MasterLPPage({ params }: PageParams) {
  const { slug } = await params;
  const data = masters[slug];
  if (!data) notFound();

  return (
    <>
      <div className="relative">
        {/* Floating Right Sidebar for Desktop */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-full pointer-events-none z-40">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12 h-full relative">
            <div className="absolute right-5 lg:right-12 top-0 w-[380px] h-full pt-[196px]">
              <div className="sticky top-[120px] pointer-events-auto">
                <StickyForm title="Déposez votre candidature" programmeName={data.title} />
              </div>
            </div>
          </div>
        </div>

        <ProgramLPHero
          type={data.type}
          title={data.title}
          tagline={data.tagline}
          pitch={data.pitch}
          color={data.color}
          niveau={data.niveau}
          duree={data.duree}
          totalCerts={data.totalCerts}
          slug={data.slug}
        />

      <section className="section-padding bg-penn-bg-light relative z-10">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
            <div className="space-y-16">
          <ProgramPresentation
            surtitre={`Master · Espima Business School`}
            title={`${data.title} — Présentation`}
          >
            <p>{data.pitch}</p>
          </ProgramPresentation>

          <div>
            <h3 className="text-[22px] font-extrabold text-penn-navy mb-5">Public cible</h3>
            <PublicCible items={data.publicCible} color={data.color} />
          </div>

          <div>
            <h3 className="text-[22px] font-extrabold text-penn-navy mb-5">
              Modules du programme ({data.modules.length})
            </h3>
            <ModulesAccordion modules={data.modules} color={data.color} />
          </div>

          <div>
            <h3 className="text-[22px] font-extrabold text-penn-navy mb-5">
              ★ {data.totalCerts}+ certifications incluses
            </h3>
            <CertificationsTable certs={data.certifications} color={data.color} limit={10} />
            <p className="text-[13px] text-penn-body mt-4">
              + 16 autres certifications spécifiques au programme + 26 certifications IA transversales incluses.
            </p>
          </div>

          <IACompetences color={data.color} />

          <InternationalPerspectives pathways={data.internationalPathways} color={data.color} />

          <DebouchesGrid items={data.debouches} color={data.color} />
            </div>
            <div className="hidden lg:block">{/* Empty column to reserve space for floating sidebar */}</div>
          </div>
        </div>
      </section>
      </div>

      <CtaSection
        title={`Prêt(e) à rejoindre le programme ${data.title} ?`}
        subtitle={`Candidatures 2026–2027 ouvertes. Early Bird jusqu'au 30 Juin. Réponse garantie sous 24h.`}
        primaryCta={{ label: "Pré-inscription gratuite", href: `#form` }}
        secondaryCta={{ label: "Télécharger la brochure", href: `/brochures/${data.slug}.pdf` }}
        whatsapp="+216 53 355 196"
        background={data.color}
      />
    </>
  );
}
