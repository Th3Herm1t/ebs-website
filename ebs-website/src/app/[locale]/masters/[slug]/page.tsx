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
  const programmeTitle = data.title;
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
           totalCerts={certifications.length}
           accreditationLabel={data.accreditationLabel}
           statAccreditationLabel={data.statAccreditationLabel ?? "Diplôme habilité par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique"}
          slug={data.slug}
        />

        <div className="max-w-[1280px] mx-auto px-5 lg:px-12 py-5 bg-white">
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Masters", href: "/masters" }, { label: programmeTitle }]} />
        </div>

      <section className="section-padding bg-penn-bg-light relative z-10">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
            <div className="space-y-16">
          <SectionHeading>1. PRÉSENTATION GÉNÉRALE DU MASTER</SectionHeading>
          <ProgramPresentation
            surtitre={`Master · Espima Business School`}
            title={`${programmeTitle} — Présentation`}
          >
            {data.generalPresentation ? <>
              <p><strong>Intitulé du diplôme :</strong> {data.generalPresentation.diplomaTitle}</p>
              <p><strong>Diplôme :</strong> {data.generalPresentation.diploma}</p>
              <p><strong>Durée :</strong> {data.generalPresentation.duration}</p>
              <p><strong>Organisation :</strong> {data.generalPresentation.organisation}</p>
              <p><strong>Présentation :</strong></p>
              {data.generalPresentation.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </> : (data.presentationBlocks ?? [data.presentation ?? data.pitch]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </ProgramPresentation>

           <div>
             <SectionHeading>2. OBJECTIFS DE LA FORMATION</SectionHeading>
             <TextList intro={data.objectivesIntro ?? "Le Master poursuit plusieurs objectifs complémentaires :"} items={data.objectives ?? []} />
           </div>

          <div>
            <SectionHeading>3. PUBLIC CIBLE</SectionHeading>
             {data.publicCibleIntro && <TextList intro={data.publicCibleIntro} items={[]} />}
             <PublicCible items={data.publicCibleWording ?? data.publicCible} color={data.color} />
          </div>

          <div>
            <SectionHeading>4. COMPÉTENCES DÉVELOPPÉES</SectionHeading>
             <TextGroups intro={data.competenciesIntro} groups={data.competencies ?? requirements.slice(0, 8).map((requirement) => ({ title: undefined, items: [requirement.title.fr] }))} />
          </div>

          <div>
            <SectionHeading>5. LES ATOUTS DISTINCTIFS D'ESPIMA BUSINESS SCHOOL</SectionHeading>
             <TextList intro={data.distinctiveIntro} items={data.distinctiveAdvantages ?? []} />
          </div>

          <div>
            <SectionHeading>6. MODULES DU PROGRAMME</SectionHeading>
            {data.moduleIntro && <p className="mb-5 text-[15px] leading-relaxed text-penn-body">{data.moduleIntro}</p>}
            <ModulesAccordion modules={data.modules} color={data.color} />
           </div>

           <div>
             <SectionHeading>7. PARCOURS CERTIFIANT EBS</SectionHeading>
             {data.certificationDescription && <p className="mb-5 text-[15px] leading-relaxed text-penn-body">{data.certificationDescription}</p>}
             {data.certificationSections && <TextGroups groups={data.certificationSections} />}
             <CertificationsTable certs={certifications} requirements={requirements} profileLabel={profileLabel} color={data.color} />
          </div>

           <div>
             <SectionHeading>8. L'INTELLIGENCE ARTIFICIELLE AU CŒUR DU MASTER</SectionHeading>
              <IACompetences color={data.color} description={data.iaDescription ? <div>{data.iaIntro && <p>{data.iaIntro}</p>}{data.iaDescription.split("\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{data.iaApplicationsIntro && <p>{data.iaApplicationsIntro}</p>}{data.iaContent?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{data.iaConclusion && <p>{data.iaConclusion}</p>}</div> : undefined} />
           </div>

           <div>
             <SectionHeading>9. PÉDAGOGIE</SectionHeading>
             <TextList intro={data.pedagogyIntro} items={data.pedagogy ?? []} conclusion={data.pedagogyConclusion} />
           </div>

           <div>
             <SectionHeading>10. STAGE, MÉMOIRE ET PROJET PROFESSIONNEL</SectionHeading>
             <TextList intro={data.stageIntro} items={data.stageMemoire ?? []} />
           </div>

           <div>
             <SectionHeading>11. DÉBOUCHÉS PROFESSIONNELS</SectionHeading>
              <TextList intro={data.professionalOutcomesIntro} items={[]} conclusion={data.professionalOutcomesConclusion} />
              <DebouchesGrid items={data.debouches} color={data.color} />
           </div>

           <div>
             <SectionHeading>12. POURSUITE D'ÉTUDES ET OUVERTURE INTERNATIONALE</SectionHeading>
              <InternationalPerspectives pathways={data.internationalPathways} intro={data.internationalIntro} content={data.internationalContent} color={data.color} />
           </div>

           <div>
             <SectionHeading>13. LES ATOUTS DU MASTER</SectionHeading>
             <TextList intro={data.finalAdvantagesIntro} items={data.finalAdvantages ?? []} />
           </div>
            </div>
            <div className="hidden lg:block">{/* Empty column to reserve space for floating sidebar */}</div>
          </div>
        </div>
      </section>
      </div>

      <CtaSection
         title={`Prêt(e) à rejoindre ${programmeTitle} ?`}
         subtitle="Les candidatures 2026/2027 sont ouvertes. Bénéficiez de nos avantages en cours. Réponse garantie sous 24 h."
        primaryCta={{ label: "Télécharger la brochure", href: `/brochures/${data.slug}.pdf` }}
        whatsapp="+216 55 582 843"
        background="penn-green"
      />
    </>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-5 text-[22px] font-extrabold text-penn-navy md:text-[26px]">{children}</h3>;
}

function TextList({ intro, items, conclusion }: { intro?: string; items: string[]; conclusion?: string }) {
  return <div className="space-y-3 text-[15px] leading-relaxed text-penn-body">
    {intro && <p>{intro}</p>}
    {items.map((item) => <p key={item}>{item}</p>)}
    {conclusion && <p>{conclusion}</p>}
  </div>;
}

function TextGroups({ intro, groups }: { intro?: string; groups: { title?: string; items: string[] }[] }) {
  return <div className="space-y-5 text-[15px] leading-relaxed text-penn-body">
    {intro && <p>{intro}</p>}
    {groups.map((group) => <div key={`${group.title ?? "group"}-${group.items[0]}`}>
      {group.title && <p className="font-bold text-penn-navy">{group.title}</p>}
      {group.items.map((item) => <p key={item}>{item}</p>)}
    </div>)}
  </div>;
}
