import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Award, BookOpen, Globe, ShieldCheck, Sparkles } from "lucide-react";
import { Badge, CtaSection, InfiniteLogoMarquee } from "@/components/shared";
import { MagneticProgramCard } from "@/components/program";
import { ShowcaseHero } from "@/components/hero";
import { AdmissionForm } from "@/components/forms/AdmissionForm";
import { masters } from "@/lib/programmes/masters";
import { getCatalogueV3ProgrammeSummary } from "@/lib/certifications/v3";
import { getCatalogueV3Snapshot } from "@/lib/certifications/v3/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return pageMetadata({
    title: "Masters professionnels en Tunisie avec IA et certifications",
    description: "Explorez les Masters EBS en CRM, marketing digital IA, startups et ingénierie financière avec certifications internationales incluses.",
    path: `/${locale}/masters`,
  });
}

const overviewBase = [
  { ...masters.crm, subtitle: "CRM, marketing automation, Intelligence Artificielle et transformation digitale avec HubSpot, n8n et des outils professionnels reconnus.", featured: true, image: "/images/sections/pro-student.jpg" },
  { ...masters["marketing-digital-ia"], subtitle: "Marketing digital, analyse des données, Intelligence Artificielle et automatisation des campagnes marketing.", featured: true, image: "/images/sections/pillar-tech.jpg" },
  { ...masters.startups, subtitle: "Management de projet, innovation, entrepreneuriat, méthodes Agile, PMI® et Scrum.", featured: false, image: "/images/programs/management.jpg" },
  { ...masters["ingenierie-financiere"], subtitle: "Finance d'entreprise, marchés financiers, analyse des données et certifications Bloomberg.", featured: false, image: "/images/programs/finance.jpg" },
];

const mastersCards = [
  {
    icon: <Award className="w-6 h-6" />,
     title: "150+",
     subtitle: "Offertes",
    color: "#2B8FAB",
    offsetY: -80,
    parallaxSpeed: 1,
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "IA obligatoire",
    subtitle: "Dans tous les parcours",
    color: "#9C27B0",
    offsetY: 40,
    parallaxSpeed: 1.5,
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "4 Masters",
     subtitle: "Diplômes habilités par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique",
    color: "#E89745",
    offsetY: -10,
    parallaxSpeed: 0.6,
  }
];

export default async function MastersPage({
  searchParams,
}: {
  searchParams: Promise<{ program?: string }>;
}) {
  const { program } = await searchParams;
  const catalogue = await getCatalogueV3Snapshot();
  const overview = overviewBase.map((entry) => {
    const summary = getCatalogueV3ProgrammeSummary(entry.catalogueId, catalogue);
    return {
      ...entry,
       title: entry.title,
       subtitle: entry.subtitle,
       totalCerts: summary.total,
    };
  });
  const filteredOverview = program
    ? overview.filter(p => p.slug === program)
    : overview;
  const isFiltered = filteredOverview.length < overview.length && filteredOverview.length > 0;
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Masters EBS",
    itemListElement: overview.map((program, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://ebs.tn/fr/masters/${program.slug}`,
      name: program.title,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <ShowcaseHero
        title="Nos Masters : 2 ans pour atteindre l'excellence."
         subtitle="4 Masters professionnels • Intelligence Artificielle intégrée dans chaque parcours • Plus de 20 certifications professionnelles internationales selon le programme • Diplôme accrédité par l'État tunisien."
        badge="Masters"
        cards={mastersCards}
      />

      <InfiniteLogoMarquee />

      <div className="relative">
        {/* Floating Right Sidebar for Desktop */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-full pointer-events-none z-40">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12 h-full relative">
            <div className="absolute right-5 lg:right-12 top-0 w-[380px] h-full pt-24">
              <div className="sticky top-[120px] pointer-events-auto">
                <AdmissionForm type="master" programsList={overview} />
              </div>
            </div>
          </div>
        </div>

        <section className="pt-24 pb-24 bg-[#FAFAFA] relative z-10">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-16">
              <div className="flex flex-col">
                <div className="mb-12">
                  <Badge variant="default" size="lg" className="mb-4">EBS Masters</Badge>
                  <h2 className="text-[32px] lg:text-[40px] font-extrabold text-penn-navy leading-tight max-w-[600px]">
                    Expertise de pointe. Diplôme agréé. Certifications internationales.
                  </h2>
                  <p className="text-[16px] text-penn-body mt-4 max-w-[550px] leading-relaxed">
                    Des programmes de spécialisation conçus pour former les experts dont les entreprises ont besoin. L'Intelligence Artificielle, l'automatisation et les certifications internationales sont intégrées à l'ensemble de nos parcours.
                  </p>
                </div>

                {isFiltered && (
                  <Link href="/masters" className="inline-flex items-center gap-2 text-penn-green hover:underline mb-8 text-[15px] font-medium transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Voir tous les masters
                  </Link>
                )}
                <div className="flex flex-wrap justify-center gap-6">
                  {(filteredOverview.length > 0 ? filteredOverview : overview).map((prog) => (
                    <div key={prog.slug} className="w-full sm:w-[calc(50%-12px)] flex flex-col">
                      <MagneticProgramCard
                        title={prog.title}
                        subtitle={prog.subtitle}
                        certifications={prog.totalCerts}
                        color={prog.color}
                        href={`/masters/${prog.slug}`}
                        image={prog.image}
                        isFeatured={prog.featured}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">{/* spacer */}</div>
            </div>
          </div>
        </section>
      </div>

      {/* Pourquoi choisir un Master à EBS ? */}
      <section className="section-padding bg-white relative z-10">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] md:text-[36px] font-extrabold text-penn-navy text-center mb-12">
            Pourquoi choisir un Master à EBS ?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-video lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/images/sections/pillar-mobilite.jpg" alt="Étudiants EBS Master" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-penn-navy/10 mix-blend-multiply" />
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-penn-green/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-7 h-7 text-penn-green" />
                </div>
                <div>
                  <h3 className="text-[18px] font-extrabold text-penn-navy mb-2">IA générative</h3>
                  <p className="text-[15px] text-penn-body leading-relaxed">
                    Développez une maîtrise des technologies qui transforment les entreprises : agents IA, automatisation, analyse des données et outils no-code.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-penn-green/10 flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7 text-penn-green" />
                </div>
                <div>
                   <h3 className="text-[18px] font-extrabold text-penn-navy mb-2">Certifications internationales</h3>
                  <p className="text-[15px] text-penn-body leading-relaxed">
                     Des certifications délivrées par PMI, Scrum, Bloomberg, HubSpot, IBM, Google et d'autres organismes reconnus sont intégrées à votre parcours.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-penn-green/10 flex items-center justify-center shrink-0">
                  <Globe className="w-7 h-7 text-penn-green" />
                </div>
                <div>
                  <h3 className="text-[18px] font-extrabold text-penn-navy mb-2">Ouverture internationale</h3>
                  <p className="text-[15px] text-penn-body leading-relaxed">
                    Poursuivez vos études ou développez votre carrière en France, au Canada et dans d'autres pays grâce à nos partenariats internationaux.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications logos */}
      <section className="section-padding bg-penn-bg-light relative z-10">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12 text-center">
          <Badge variant="default" size="lg" className="mb-6">
            <ShieldCheck className="w-4 h-4" />
            Certifications incluses
          </Badge>
          <p className="text-[19px] md:text-[22px] font-bold text-penn-navy leading-relaxed max-w-[800px] mx-auto">
            En complément de votre diplôme agréé par l'État tunisien, obtenez des certifications délivrées par Google, IBM, Harvard, Bloomberg, HubSpot, PMI, DeepLearning.AI et d'autres organismes internationaux, sans frais supplémentaires.
          </p>
        </div>
      </section>

      <CtaSection
        title="Prêt(e) à choisir votre Master ?"
        subtitle="Les candidatures 2026/2027 sont ouvertes. Bénéficiez de nos avantages en cours. Réponse garantie sous 24 h."
        primaryCta={{ label: "Contactez-nous", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
