import { Award, BookOpen, Globe } from "lucide-react";
import Link from "next/link";
import { Badge, CtaSection, PageHero } from "@/components/shared";
import { ProgramCard } from "@/components/program";
import { licences } from "@/lib/programmes/licences";

const overview = [
  { ...licences.management, subtitle: "Formation au leadership et au pilotage d'organisations dans un monde digital." },
  { ...licences.marketing, subtitle: "La formation marketing digital la plus complète en Tunisie." },
  { ...licences.finance, subtitle: "Certifications Bloomberg pour une carrière en finance internationale." },
  { ...licences["informatique-standard"], subtitle: "Bases solides en ingénierie logicielle et systèmes informatiques." },
  { ...licences["informatique-ia"], subtitle: "Machine learning, deep learning, NLP avec Harvard et DeepLearning.AI." },
  { ...licences.cybersecurite, subtitle: "Ethical hacking, forensics, SOC avec Cisco, Fortinet et Google." },
];

export default function LicencesPage() {
  return (
    <>
      <PageHero
        title="Nos Licences : 3 ans pour construire votre avenir."
        subtitle="4 Licences · 6 Parcours · IA intégrée dans chaque filière · 57 à 87 certifications internationales gratuites par programme · Accrédité État tunisien."
        badge="Licences"
        background="light"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-[14px] font-semibold text-penn-body">
          <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-penn-green" />4 Licences</span>
          <span className="text-penn-border">·</span>
          <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-penn-green" />6 Parcours</span>
          <span className="text-penn-border">·</span>
          <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-penn-green" />IA incluse</span>
          <span className="text-penn-border">·</span>
          <span>57–87 certifications par programme</span>
        </div>
      </PageHero>

      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <div className="text-center mb-12">
            <Badge variant="default" size="lg" className="mb-4">6 Parcours disponibles</Badge>
            <p className="text-[15px] text-penn-body max-w-[700px] mx-auto">
              EBS propose 4 Licences officielles. La Licence en Informatique est déclinée en 3 parcours distincts, ce qui donne 6 parcours au total. Choisissez votre filière à l&apos;inscription.
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
                href={`/licences/${prog.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12 text-center">
          <p className="text-[17px] text-penn-body leading-relaxed font-medium">
            En plus de votre diplôme reconnu par l&apos;État tunisien, vous repartez avec des certifications délivrées par Google, IBM, Harvard, Cisco, Bloomberg et Fortinet — sans aucun frais supplémentaire.
          </p>
        </div>
      </section>

      <CtaSection
        title="Prêt(e) à choisir votre Licence ?"
        subtitle="Candidatures 2026–2027 ouvertes. Early Bird jusqu'au 30 Juin."
        primaryCta={{ label: "Voir tous les programmes", href: "#" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
