import { Briefcase, Check, Globe, Sparkles, Users } from "lucide-react";
import { PageHero, CtaSection } from "@/components/shared";

const profils = [
  { icon: <Sparkles className="w-5 h-5" />, text: "Multi-certifiés dès la sortie : Google, IBM, Bloomberg, Cisco, HubSpot, PMI..." },
  { icon: <Briefcase className="w-5 h-5" />, text: "Formés à l'IA et aux outils numériques les plus récents et les plus demandés" },
  { icon: <Check className="w-5 h-5" />, text: "Alternants opérationnels dès J1 grâce à la pédagogie pratique EBS" },
  { icon: <Users className="w-5 h-5" />, text: "Expérience de simulations professionnelles Forage (BCG, Goldman Sachs, JP Morgan, Mastercard...)" },
  { icon: <Globe className="w-5 h-5" />, text: "Maîtrise de l'anglais professionnel et des outils de collaboration internationale" },
];

export default function EntreprisesPartenairesPage() {
  return (
    <>
      <PageHero
        title="Les entreprises qui font confiance à EBS."
        subtitle="EBS collabore avec des entreprises tunisiennes et internationales pour offrir à ses étudiants des stages, des alternances et des opportunités d'embauche dans des environnements professionnels réels."
        badge="Entreprises Partenaires"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Entreprises Partenaires" }]}
        background="light"
      />

      <section className="section-padding bg-white">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] font-extrabold text-penn-navy mb-8">
            Profil des diplômés EBS
          </h2>
          <div className="space-y-3">
            {profils.map((p) => (
              <div key={p.text} className="flex items-start gap-4 p-4 bg-penn-bg-light rounded-xl border border-penn-border">
                <span className="text-penn-green shrink-0 mt-0.5">{p.icon}</span>
                <p className="text-[15px] text-penn-body leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12 text-center">
          <h2 className="text-[28px] font-extrabold text-penn-navy mb-4">
            Vous souhaitez collaborer avec EBS ?
          </h2>
          <p className="text-[16px] text-penn-body max-w-[700px] mx-auto mb-6">
            Proposez un partenariat, un stage ou une alternance à nos étudiants. Contactez notre équipe pour découvrir comment nos talents peuvent contribuer à votre entreprise.
          </p>
        </div>
      </section>

      <CtaSection
        title="Proposer un partenariat"
        subtitle="Contactez-nous pour discuter des opportunités de collaboration."
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
        whatsapp="+216 29 58 28 35"
        background="penn-green"
      />
    </>
  );
}
