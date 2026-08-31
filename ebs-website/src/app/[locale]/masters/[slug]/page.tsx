import { notFound } from "next/navigation";
import { ProgramLPHero, ProgramPresentation, PublicCible, ModulesAccordion, CertificationsTable, IACompetences, InternationalPerspectives, DebouchesGrid } from "@/components/program";
import { AdmissionForm } from "@/components/forms/AdmissionForm";
import { Breadcrumb, CtaSection } from "@/components/shared";
import { masters } from "@/lib/programmes/masters";
import { aiProfileLabels, getCatalogueV3Opportunities, getCatalogueV3Programme, getCatalogueV3AcademicRequirements } from "@/lib/certifications/v3";
import { getCatalogueV3Snapshot } from "@/lib/certifications/v3/server";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

interface PageParams {
  params: Promise<{ slug: string; locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return ["fr", "en"].flatMap((locale) =>
    Object.keys(masters).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: PageParams) {
  const { slug, locale } = await params;
  const data = masters[slug];
  if (!data) return {};
  const catalogue = await getCatalogueV3Snapshot();
  const certifications = getCatalogueV3Opportunities({ programmeId: data.catalogueId }, catalogue);
  const programme = getCatalogueV3Programme(data.catalogueId, catalogue);
  return pageMetadata({
    title: `${programme?.name.fr ?? data.title} en Tunisie`,
    description: `${data.tagline} ${certifications.length} certifications gratuites vérifiées, IA appliquée et débouchés internationaux chez EBS Tunis.`,
    path: `/${locale}/masters/${slug}`,
  });
}

export default async function MasterLPPage({ params }: PageParams) {
  const { slug } = await params;
  const data = masters[slug];
  if (!data) notFound();
  const catalogue = await getCatalogueV3Snapshot();
  const catalogueProgramme = getCatalogueV3Programme(data.catalogueId, catalogue);
  const certifications = getCatalogueV3Opportunities({ programmeId: data.catalogueId }, catalogue);
  const requirements = getCatalogueV3AcademicRequirements(data.catalogueId, catalogue);
  const programmeTitle = catalogueProgramme?.name.fr ?? data.title;
  const profileLabel = catalogueProgramme ? aiProfileLabels[catalogueProgramme.profile] : undefined;

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
      name: programmeTitle,
    description: data.pitch,
    provider: {
      "@type": "CollegeOrUniversity",
      name: "Espima Business School",
      sameAs: "https://ebs.tn",
    },
    educationalCredentialAwarded: data.niveau,
    timeRequired: data.duree,
  };
  const breadcrumb = breadcrumbJsonLd([
    { name: "Accueil", path: "/fr" },
    { name: "Masters", path: "/fr/masters" },
    { name: data.title, path: `/fr/masters/${data.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="relative">
        {/* Floating Right Sidebar for Desktop */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-full pointer-events-none z-40">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12 h-full relative">
            <div className="absolute right-5 lg:right-12 top-0 w-[380px] h-full pt-[196px]">
              <div className="sticky top-[120px] pointer-events-auto">
                <AdmissionForm type="master" programmeName={data.title} />
              </div>
            </div>
          </div>
        </div>

        <ProgramLPHero
          type={data.type}
          title={programmeTitle}
          tagline={data.tagline}
          pitch={data.pitch}
          color={data.color}
          niveau={data.niveau}
          duree={data.duree}
          totalCerts={certifications.length + requirements.length}
          slug={data.slug}
        />

        <div className="max-w-[1280px] mx-auto px-5 lg:px-12 py-5 bg-white">
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Masters", href: "/masters" }, { label: programmeTitle }]} />
        </div>

      <section className="section-padding bg-penn-bg-light relative z-10">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
            <div className="space-y-16">
          <ProgramPresentation
            surtitre={`Master · Espima Business School`}
            title={`${programmeTitle} — Présentation`}
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

          <div id="certifications">
            <CertificationsTable certs={certifications} requirements={requirements} profileLabel={profileLabel} color={data.color} />
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
        title={`Prêt(e) à rejoindre le programme ${programmeTitle} ?`}
        subtitle="Candidatures 2026–2027 ouvertes. Effectuez votre préinscription dès maintenant. Réponse garantie sous 24h."
        primaryCta={{ label: "Télécharger la brochure", href: `/brochures/${data.slug}.pdf` }}
        whatsapp="+216 55 582 843"
        background="penn-green"
      />
    </>
  );
}
