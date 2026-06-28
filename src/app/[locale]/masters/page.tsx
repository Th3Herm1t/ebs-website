import Link from "next/link";
import { ArrowLeft, Award, BookOpen, Globe, ShieldCheck, Sparkles } from "lucide-react";
import { Badge, CtaSection, InfiniteLogoMarquee } from "@/components/shared";
import { MagneticProgramCard } from "@/components/program";
import { ShowcaseHero } from "@/components/hero";
import { AdmissionForm } from "@/components/forms/AdmissionForm";
import { masters } from "@/lib/programmes/masters";

const overview = [
  { ...masters.crm, subtitle: "CRM, marketing automation et transformation digitale avec HubSpot et n8n.", featured: true },
  { ...masters["marketing-digital-ia"], subtitle: "Marketing digital, data marketing et automatisation par l'IA.", featured: true },
  { ...masters.startups, subtitle: "Entrepreneuriat, innovation et gestion de projets avec PMI et Scrum.", featured: false },
  { ...masters["ingenierie-financiere"], subtitle: "M&A, finance quantitative et marchés financiers avec Bloomberg.", featured: false },
];

const mastersCards = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "150+ Certs",
    subtitle: "Incluses gratuitement",
    color: "#2B8FAB",
    offsetY: -80,
    parallaxSpeed: 1,
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "IA Obligatoire",
    subtitle: "Dans tous les parcours",
    color: "#9C27B0",
    offsetY: 40,
    parallaxSpeed: 1.5,
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "3 Masters",
    subtitle: "Reconnus par l'État",
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
  const filteredOverview = program
    ? overview.filter(p => p.slug === program)
    : overview;
  const isFiltered = filteredOverview.length < overview.length && filteredOverview.length > 0;
  return (
    <>
      <ShowcaseHero
        title="Nos Masters : 2 ans pour atteindre l'excellence."
        subtitle="3 Masters professionnels · IA intégrée dans chaque parcours · 59 à 73 certifications internationales incluses · Accrédité État tunisien."
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
                    Expertise de pointe. Diplôme reconnu. Certifications mondiales.
                  </h2>
                  <p className="text-[17px] text-penn-body mt-4 max-w-[700px]">
                    Des programmes de spécialisation conçus pour former les experts dont le marché a besoin. L'IA générative et l'automatisation sont au cœur de tous nos parcours.
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
                        isFeatured={false}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-penn-green/10 flex items-center justify-center mx-auto mb-5">
                <Sparkles className="w-7 h-7 text-penn-green" />
              </div>
              <h3 className="text-[18px] font-extrabold text-penn-navy mb-3">IA Générative</h3>
              <p className="text-[15px] text-penn-body leading-relaxed">
                Maîtrisez les technologies qui transforment les entreprises : agents IA, automatisation no-code.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-penn-green/10 flex items-center justify-center mx-auto mb-5">
                <Award className="w-7 h-7 text-penn-green" />
              </div>
              <h3 className="text-[18px] font-extrabold text-penn-navy mb-3">Certifications</h3>
              <p className="text-[15px] text-penn-body leading-relaxed">
                Des certifications PMI, Scrum, Bloomberg, HubSpot, IBM intégrées.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-penn-green/10 flex items-center justify-center mx-auto mb-5">
                <Globe className="w-7 h-7 text-penn-green" />
              </div>
              <h3 className="text-[18px] font-extrabold text-penn-navy mb-3">Ouverture internationale</h3>
              <p className="text-[15px] text-penn-body leading-relaxed">
                Accédez aux marchés de l&apos;emploi en France, au Canada et à l&apos;international grâce à nos partenariats.
              </p>
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
            En plus de votre diplôme reconnu par l&apos;État tunisien, vous repartez avec des certifications délivrées par Google, IBM, Harvard, Bloomberg, HubSpot, PMI, DeepLearning.AI et bien d&apos;autres — sans aucun frais supplémentaire.
          </p>
        </div>
      </section>

      <CtaSection
        title="Prêt(e) à choisir votre Master ?"
        subtitle="Candidatures 2026–2027 ouvertes. Early Bird jusqu'au 30 Juin."
        primaryCta={{ label: "Contactez-nous", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
