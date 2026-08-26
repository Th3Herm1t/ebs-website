import { notFound } from "next/navigation";
import { ProgramLPHero, ProgramPresentation, PublicCible, ModulesAccordion, CertificationsTable, IACompetences, InternationalPerspectives, DebouchesGrid } from "@/components/program";
import { AdmissionForm } from "@/components/forms/AdmissionForm";
import { Breadcrumb, CtaSection } from "@/components/shared";
import { licences } from "@/lib/programmes/licences";
import {
  getCertificationsByProgramme,
  type CertificationProgrammeSlug,
} from "@/lib/certifications/final-catalogue";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

interface PageParams {
  params: Promise<{ slug: string; locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return ["fr", "en"].flatMap((locale) =>
    Object.keys(licences).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: PageParams) {
  const { slug, locale } = await params;
  const data = licences[slug];
  if (!data) return {};
  const certifications = getCertificationsByProgramme(slug as CertificationProgrammeSlug);
  return pageMetadata({
    title: `${data.title} en Tunisie`,
    description: `${data.tagline} ${certifications.length} certifications intégrées, IA intégrée et parcours international chez EBS Tunis.`,
    path: `/${locale}/licences/${slug}`,
  });
}

export default async function LicenceLPPage({ params }: PageParams) {
  const { slug } = await params;
  const data = licences[slug];
  if (!data) notFound();
  const certifications = getCertificationsByProgramme(slug as CertificationProgrammeSlug);

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: data.title,
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
    { name: "Licences", path: "/fr/licences" },
    { name: data.title, path: `/fr/licences/${data.slug}` },
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
                <AdmissionForm type="licence" programmeName={data.title} />
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
          totalCerts={certifications.length}
          slug={data.slug}
        />

        <div className="max-w-[1280px] mx-auto px-5 lg:px-12 py-5 bg-white">
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Licences", href: "/licences" }, { label: data.title }]} />
        </div>

      <section className="section-padding bg-penn-bg-light relative z-10">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
            <div className="space-y-16">
          <ProgramPresentation
            surtitre={`Licence · Espima Business School`}
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

          <div id="certifications">
            <CertificationsTable certs={certifications} color={data.color} />
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
        primaryCta={{ label: "Télécharger la brochure", href: `/brochures/${data.slug}.pdf` }}
        whatsapp="+216 55 582 843"
        background="penn-green"
      />
    </>
  );
}
