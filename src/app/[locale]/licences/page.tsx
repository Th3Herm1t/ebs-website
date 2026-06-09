import { Award, BookOpen, Sparkles } from "lucide-react";
import { Badge, CtaSection, InfiniteLogoMarquee } from "@/components/shared";
import { MagneticProgramCard } from "@/components/program";
import { ShowcaseHero } from "@/components/hero";
import { licences } from "@/lib/programmes/licences";

const businessPrograms = [
  { ...licences.management, subtitle: "Formation au leadership et au pilotage d'organisations dans un monde digital.", featured: false },
  { ...licences.marketing, subtitle: "La formation marketing digital la plus complète en Tunisie. Maîtrisez le digital et l'IA générative avec les outils de pointe (HubSpot, Google Ads, GA4).", featured: true },
  { ...licences.finance, subtitle: "Certifications Bloomberg pour une carrière en finance internationale.", featured: false },
];

const techPrograms = [
  { ...licences["informatique-standard"], subtitle: "Bases solides en ingénierie logicielle et systèmes informatiques.", featured: false },
  { ...licences["informatique-ia"], subtitle: "La formation de référence en Intelligence Artificielle. Machine learning, deep learning et NLP avec les certifications Harvard et DeepLearning.AI.", featured: true },
  { ...licences.cybersecurite, subtitle: "Ethical hacking, forensics, SOC avec Cisco, Fortinet et Google.", featured: false },
];

const licencesCards = [
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
    title: "6 Parcours",
    subtitle: "Management & Tech",
    color: "#E89745",
    offsetY: -10,
    parallaxSpeed: 0.6,
  }
];

export default function LicencesPage() {
  return (
    <>
      <ShowcaseHero
        title="Nos Licences : 3 ans pour construire votre avenir."
        subtitle="4 Licences · 6 Parcours · IA intégrée dans chaque filière · 57 à 87 certifications internationales gratuites par programme · Accrédité État tunisien."
        badge="Licences"
        cards={licencesCards}
      />

      <InfiniteLogoMarquee />

      {/* BUSINESS SECTION */}
      <section className="pt-24 pb-12 bg-[#FAFAFA]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="mb-12">
            <Badge variant="default" size="lg" className="mb-4">EBS Business School</Badge>
            <h2 className="text-[32px] lg:text-[40px] font-extrabold text-penn-navy leading-tight max-w-[600px]">
              Formez-vous aux métiers du management et du digital.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {businessPrograms.map((prog) => (
              <div key={prog.slug}>
                <MagneticProgramCard
                  title={prog.title}
                  subtitle={prog.subtitle}
                  certifications={prog.totalCerts}
                  color={prog.color}
                  href={`/licences/${prog.slug}`}
                  isFeatured={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH SECTION */}
      <section className="pt-12 pb-24 bg-[#FAFAFA]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="mb-12">
            <Badge style={{ backgroundColor: "#9C27B015", color: "#9C27B0", borderColor: "#9C27B030" }} size="lg" className="mb-4">EBS IT & AI Academy</Badge>
            <h2 className="text-[32px] lg:text-[40px] font-extrabold text-penn-navy leading-tight max-w-[600px]">
              Devenez l'ingénieur de demain avec nos parcours Tech.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {techPrograms.map((prog) => (
              <div key={prog.slug}>
                <MagneticProgramCard
                  title={prog.title}
                  subtitle={prog.subtitle}
                  certifications={prog.totalCerts}
                  color={prog.color}
                  href={`/licences/${prog.slug}`}
                  isFeatured={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Prêt(e) à choisir votre Licence ?"
        subtitle="Candidatures 2026–2027 ouvertes. Early Bird jusqu'au 30 Juin."
        primaryCta={{ label: "Contactez-nous", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
