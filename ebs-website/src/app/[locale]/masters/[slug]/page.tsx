import { notFound } from "next/navigation";
import { Award, BadgeCheck, BookOpen, Building2, Check, Clock, FileText, GraduationCap, Layers, ShieldCheck, Target, Trophy, Users } from "lucide-react";
import { ProgramLPHero, ProgramPresentation, PublicCible, ModulesAccordion, CertificationsTable, IACompetences, InternationalPerspectives, DebouchesGrid } from "@/components/program";
import { AdmissionForm } from "@/components/forms/AdmissionForm";
import { Breadcrumb, CtaSection } from "@/components/shared";
import { masters } from "@/lib/programmes/masters";
import { aiProfileLabels, getPublicCatalogueV3Opportunities, getCatalogueV3Programme, getCatalogueV3AcademicRequirements } from "@/lib/certifications/v3";
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
  const certifications = getPublicCatalogueV3Opportunities({ programmeId: data.catalogueId }, catalogue);
  const programme = getCatalogueV3Programme(data.catalogueId, catalogue);
  return pageMetadata({
    title: `${programme?.name.fr ?? data.title} en Tunisie`,
   description: `${data.tagline} ${certifications.length} certifications gratuites, IA appliquée et débouchés internationaux chez EBS Tunis.`,
    path: `/${locale}/masters/${slug}`,
  });
}

export default async function MasterLPPage({ params }: PageParams) {
  const { slug } = await params;
  const data = masters[slug];
  if (!data) notFound();
  const catalogue = await getCatalogueV3Snapshot();
  const catalogueProgramme = getCatalogueV3Programme(data.catalogueId, catalogue);
  const certifications = getPublicCatalogueV3Opportunities({ programmeId: data.catalogueId }, catalogue);
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
           heroImage="/images/sections/master-why.jpg"
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
            {data.generalPresentation ? <>
              <dl className="mb-2 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: GraduationCap, label: "Intitulé du diplôme", value: data.generalPresentation.diplomaTitle },
                  { icon: ShieldCheck, label: "Diplôme", value: data.generalPresentation.diploma },
                  { icon: Clock, label: "Durée", value: data.generalPresentation.duration },
                ].map((meta) => (
                  <div key={meta.label} className="rounded-xl border border-penn-border bg-white p-4">
                    <dt className="mb-1.5 flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-penn-body/60">
                      <meta.icon className="h-3.5 w-3.5" style={{ color: data.color }} />
                      {meta.label}
                    </dt>
                    <dd className="text-[13.5px] font-semibold leading-snug text-penn-navy">{meta.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex items-start gap-3 rounded-xl bg-penn-bg-light px-5 py-4 text-[14px] leading-relaxed text-penn-navy/85">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: data.color }} />
                <p><strong className="font-extrabold">Organisation : </strong>{data.generalPresentation.organisation}</p>
              </div>
              {data.generalPresentation.paragraphs.map((paragraph, i) => (
                <p key={paragraph} className={i === 0 ? "text-[17px] font-medium leading-relaxed text-penn-navy" : undefined}>{paragraph}</p>
              ))}
            </> : (data.presentationBlocks ?? [data.presentation ?? data.pitch]).map((paragraph, i) => (
              <p key={paragraph} className={i === 0 ? "text-[17px] font-medium leading-relaxed text-penn-navy" : undefined}>{paragraph}</p>
            ))}
           </ProgramPresentation>

            <div>
              <SectionHeading icon={Target} title="Objectifs de la formation" color={data.color} />
              <TextList intro={data.objectivesIntro ?? "Le Master poursuit plusieurs objectifs complémentaires :"} items={data.objectives ?? []} color={data.color} />
            </div>

           <div>
             <SectionHeading icon={Users} title="Public cible" color={data.color} />
              {data.publicCibleIntro && <Lead>{data.publicCibleIntro}</Lead>}
              <PublicCible items={data.publicCibleWording ?? data.publicCible} color={data.color} />
           </div>

           <div>
             <SectionHeading icon={BadgeCheck} title="Compétences développées" color={data.color} />
              <TextGroups intro={data.competenciesIntro} groups={data.competencies ?? requirements.slice(0, 8).map((requirement) => ({ title: undefined, items: [requirement.title.fr] }))} color={data.color} />
           </div>

           <div>
             <SectionHeading icon={Award} title="Les atouts distinctifs d'EBS" color={data.color} />
              <TextList intro={data.distinctiveIntro} items={data.distinctiveAdvantages ?? []} color={data.color} />
           </div>

           <div>
             <SectionHeading icon={Layers} title="Modules du programme" color={data.color} />
             {data.moduleIntro && <Lead>{data.moduleIntro}</Lead>}
             <ModulesAccordion modules={data.modules} color={data.color} />
            </div>

            <div>
              {data.certificationDescription && <Lead>{data.certificationDescription}</Lead>}
              {data.certificationSections && <div className="mb-6"><TextGroups groups={data.certificationSections} color={data.color} /></div>}
              <CertificationsTable certs={certifications} requirements={requirements} profileLabel={profileLabel} color={data.color} />
            </div>

            <div>
              <IACompetences color={data.color} description={data.iaDescription ? <div className="space-y-4">
                {data.iaIntro && <p className="text-white/80">{data.iaIntro}</p>}
                {data.iaDescription.split("\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {data.iaApplicationsIntro && <p className="font-bold text-white">{data.iaApplicationsIntro}</p>}
                {data.iaContent && data.iaContent.length > 0 && (
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {data.iaContent.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 rounded-lg border border-white/10 bg-white/5 px-3.5 py-3 text-[13.5px] leading-relaxed text-white/75">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={3} style={{ color: data.color }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {data.iaConclusion && <p>{data.iaConclusion}</p>}
              </div> : undefined} />
           </div>

           <div>
             <SectionHeading icon={BookOpen} title="Pédagogie" color={data.color} />
             <TextList intro={data.pedagogyIntro} items={data.pedagogy ?? []} conclusion={data.pedagogyConclusion} color={data.color} />
           </div>

           <div>
             <SectionHeading icon={FileText} title="Stage, mémoire et projet professionnel" color={data.color} />
             <TextList intro={data.stageIntro} items={data.stageMemoire ?? []} color={data.color} />
           </div>

           <div>
              <TextList intro={data.professionalOutcomesIntro} items={[]} conclusion={data.professionalOutcomesConclusion} color={data.color} />
              <div className="mt-6"><DebouchesGrid items={data.debouches} color={data.color} /></div>
           </div>

           <div>
              <InternationalPerspectives pathways={data.internationalPathways} intro={data.internationalIntro} content={data.internationalContent} color={data.color} />
           </div>

           <div>
             <SectionHeading icon={Trophy} title="Les atouts du master" color={data.color} />
             <TextList intro={data.finalAdvantagesIntro} items={data.finalAdvantages ?? []} color={data.color} />
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

function SectionHeading({ icon: Icon, title, color }: { icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; title: string; color?: string }) {
  const accent = color ?? "#2B8FAB";
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: `${accent}12` }}>
        <Icon className="h-5 w-5" style={{ color: accent }} />
      </div>
      <h2 className="text-[22px] font-extrabold text-penn-navy md:text-[26px]">{title}</h2>
    </div>
  );
}

function Lead({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 max-w-[760px] text-[16px] leading-relaxed text-penn-navy/80">{children}</p>;
}

function TextList({ intro, items, conclusion, color }: { intro?: string; items: string[]; conclusion?: string; color?: string }) {
  const accent = color ?? "#2B8FAB";
  return (
    <div>
      {intro && <Lead>{intro}</Lead>}
      {items.length > 0 && (
        <ul className="space-y-2.5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl border border-penn-border bg-white px-4 py-3.5 text-[14.5px] leading-relaxed text-penn-body">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${accent}14`, color: accent }}>
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {conclusion && (
        <p className="mt-5 rounded-xl border-l-[3px] bg-penn-bg-light px-5 py-4 text-[14.5px] leading-relaxed text-penn-navy/85" style={{ borderLeftColor: accent }}>
          {conclusion}
        </p>
      )}
    </div>
  );
}

function TextGroups({ intro, groups, color }: { intro?: string; groups: { title?: string; items: string[] }[]; color?: string }) {
  const accent = color ?? "#2B8FAB";
  return (
    <div>
      {intro && <Lead>{intro}</Lead>}
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <div key={`${group.title ?? "group"}-${group.items[0]}`} className="rounded-2xl border border-penn-border bg-white p-5">
            {group.title && (
              <p className="mb-3 flex items-center gap-2 text-[15px] font-extrabold text-penn-navy">
                <span className="h-4 w-1 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                {group.title}
              </p>
            )}
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-penn-body">
                  <Check className="mt-1 h-4 w-4 shrink-0" strokeWidth={3} style={{ color: accent }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
