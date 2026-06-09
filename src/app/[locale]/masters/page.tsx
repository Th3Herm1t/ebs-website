import { Award, BookOpen, Sparkles } from "lucide-react";
import { Badge, CtaSection, InfiniteLogoMarquee } from "@/components/shared";
import { MagneticProgramCard } from "@/components/program";
import { ShowcaseHero } from "@/components/hero";
import { masters } from "@/lib/programmes/masters";

const overview = [
  { ...masters.crm, subtitle: "CRM, marketing automation et transformation digitale avec HubSpot et n8n.", featured: true },
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

export default function MastersPage() {
  return (
    <>
      <ShowcaseHero
        title="Nos Masters : 2 ans pour atteindre l'excellence."
        subtitle="3 Masters professionnels · IA intégrée dans chaque parcours · 59 à 73 certifications internationales incluses · Accrédité État tunisien."
        badge="Masters"
        cards={mastersCards}
      />

      <InfiniteLogoMarquee />

      <section className="pt-24 pb-24 bg-[#FAFAFA]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="mb-12">
            <Badge variant="default" size="lg" className="mb-4">EBS Masters</Badge>
            <h2 className="text-[32px] lg:text-[40px] font-extrabold text-penn-navy leading-tight max-w-[600px]">
              Expertise de pointe. Diplôme reconnu. Certifications mondiales.
            </h2>
            <p className="text-[17px] text-penn-body mt-4 max-w-[700px]">
              Des programmes de spécialisation conçus pour former les experts dont le marché a besoin. L'IA générative et l'automatisation sont au cœur de tous nos parcours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {overview.map((prog) => (
              <div key={prog.slug}>
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
