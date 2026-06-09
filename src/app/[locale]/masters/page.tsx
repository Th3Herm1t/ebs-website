import { Award, BookOpen, Globe } from "lucide-react";
import { Badge, CtaSection, PageHero } from "@/components/shared";
import { ProgramCard } from "@/components/program";
import { masters } from "@/lib/programmes/masters";

const overview = [
  { ...masters.crm, subtitle: "CRM, marketing automation et transformation digitale avec HubSpot et n8n." },
  { ...masters.startups, subtitle: "Entrepreneuriat, innovation et gestion de projets avec PMI et Scrum." },
  { ...masters["ingenierie-financiere"], subtitle: "M&A, finance quantitative et marchés financiers avec Bloomberg." },
];

export default function MastersPage() {
  return (
    <>
      <PageHero
        title="Nos Masters : 2 ans pour atteindre l'excellence."
        subtitle="3 Masters professionnels · IA intégrée dans chaque parcours · 59 à 73 certifications internationales incluses · Accrédité État tunisien."
        badge="Masters"
        background="light"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-[14px] font-semibold text-penn-body">
          <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-penn-green" />3 Masters</span>
          <span className="text-penn-border">·</span>
          <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-penn-green" />2 ans</span>
          <span className="text-penn-border">·</span>
          <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-penn-green" />IA incluse</span>
          <span className="text-penn-border">·</span>
          <span>59–73 certifications par programme</span>
        </div>
      </PageHero>

      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <div className="text-center mb-12">
            <Badge variant="default" size="lg" className="mb-4">3 Masters professionnels</Badge>
            <p className="text-[15px] text-penn-body max-w-[700px] mx-auto">
              Des programmes de spécialisation conçus pour former les experts dont le marché a besoin. IA obligatoire et certifications internationales incluses dans chaque Master.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {overview.map((prog) => (
              <ProgramCard
                key={prog.slug}
                title={prog.title}
                subtitle={prog.subtitle}
                certifications={prog.totalCerts}
                color={prog.color}
                href={`/masters/${prog.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12 text-center">
          <p className="text-[17px] text-penn-body leading-relaxed font-medium">
            En plus de votre diplôme reconnu par l&apos;État tunisien, vous repartez avec des certifications délivrées par Google, IBM, Harvard, Bloomberg, HubSpot, PMI, DeepLearning.AI et bien d&apos;autres — sans aucun frais supplémentaire.
          </p>
        </div>
      </section>

      <CtaSection
        title="Prêt(e) à choisir votre Master ?"
        subtitle="Candidatures 2026–2027 ouvertes. Early Bird jusqu'au 30 Juin."
        primaryCta={{ label: "Voir tous les programmes", href: "#" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
