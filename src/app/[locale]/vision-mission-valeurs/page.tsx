import { Award, Globe, Heart, Lightbulb, Target } from "lucide-react";
import { PageHero, CtaSection } from "@/components/shared";

const valeurs = [
  {
    icon: <Award className="w-6 h-6" />,
    nom: "Excellence académique",
    description: "Des programmes conçus selon les standards internationaux, mis à jour en continu.",
    concret: "Corps enseignant qualifié · Programmes revus chaque année · Benchmarking international",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    nom: "Innovation pédagogique",
    description: "L'IA et les certifications internationales sont au cœur de chaque parcours.",
    concret: "IA obligatoire dans tous les programmes · 150+ certifications gratuites · Nouvelles méthodes d'enseignement",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    nom: "Ouverture internationale",
    description: "Nos partenariats ouvrent des horizons sans frontières.",
    concret: "16 partenaires en France, Canada, Italie et Oman · Mobilité étudiante facilitée · Double diplôme possible",
  },
  {
    icon: <Target className="w-6 h-6" />,
    nom: "Employabilité réelle",
    description: "Tout est conçu pour votre insertion professionnelle rapide.",
    concret: "Simulations Forage (BCG, Goldman Sachs...) · Certifications reconnues par les RH mondiaux · Stages professionnels",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    nom: "Proximité & Accompagnement",
    description: "Vous n'êtes jamais un numéro à EBS.",
    concret: "Suivi personnalisé · Administration réactive · Encadrement individuel",
  },
];

const missions = [
  "Préparer les étudiants tunisiens à la vie professionnelle en leur proposant des formations diversifiées, innovantes et alignées sur les standards internationaux.",
  "Former des managers, des entrepreneurs et des cadres supérieurs dotés d'un solide socle de connaissances fondamentales et pratiques.",
  "Intégrer les compétences en Intelligence Artificielle dans tous les parcours, faisant d'EBS la première université tunisienne à adopter l'IA comme compétence transversale universelle.",
  "Permettre à chaque étudiant de décrocher des certifications internationales reconnues par les recruteurs du monde entier.",
  "Ouvrir des perspectives d'études et de carrières à l'international grâce à nos partenariats stratégiques.",
];

export default function VisionPage() {
  return (
    <>
      <PageHero
        title="Vision, Mission & Valeurs"
        subtitle="Ce qui nous guide au quotidien pour former les leaders de demain."
        badge="EBS"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Vision, Mission & Valeurs" }]}
        background="light"
      />

      {/* Vision */}
      <section className="section-padding bg-penn-navy text-white">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12 text-center">
          <h2 className="text-[14px] font-bold uppercase tracking-[2px] text-white/60 mb-6">Notre Vision</h2>
          <blockquote className="text-[22px] md:text-[28px] font-bold leading-relaxed italic text-white/90">
            « Être l'université de référence en Tunisie pour la formation de professionnels compétitifs à l'échelle internationale, maîtrisant l'Intelligence Artificielle et certifiés par les plus grandes organisations mondiales. »
          </blockquote>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-8">Notre Mission</h2>
          <p className="text-[16px] text-penn-body mb-8">Espima Business School a pour mission de :</p>
          <div className="space-y-4">
            {missions.map((m) => (
              <div key={m} className="flex items-start gap-4 p-4 bg-penn-bg-light rounded-xl">
                <div className="w-2 h-2 rounded-full bg-penn-green shrink-0 mt-2" />
                <p className="text-[15px] text-penn-body leading-relaxed">{m}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy text-center mb-12">Nos 5 Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valeurs.map((v) => (
              <div key={v.nom} className="bg-white rounded-xl border border-penn-border p-6 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-penn-green/10 flex items-center justify-center mb-4 text-penn-green">
                  {v.icon}
                </div>
                <h3 className="text-[18px] font-extrabold text-penn-navy mb-2">{v.nom}</h3>
                <p className="text-[14px] text-penn-body leading-relaxed mb-4">{v.description}</p>
                <p className="text-[13px] text-penn-green font-medium">{v.concret}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Rejoignez une université qui a une vision."
        subtitle="Découvrez nos programmes et construisez votre avenir avec nous."
        primaryCta={{ label: "Voir nos programmes", href: "/licences" }}
        background="penn-green"
      />
    </>
  );
}
