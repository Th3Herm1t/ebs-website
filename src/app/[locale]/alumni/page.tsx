import { Briefcase, Globe, MapPin, TrendingUp, Users } from "lucide-react";
import { PageHero, CtaSection } from "@/components/shared";

const stats = [
  { icon: <Briefcase className="w-5 h-5" />, value: "Banque & Finance", label: "Secteur" },
  { icon: <TrendingUp className="w-5 h-5" />, value: "Digital & Tech", label: "Secteur" },
  { icon: <Users className="w-5 h-5" />, value: "Conseil", label: "Secteur" },
  { icon: <Globe className="w-5 h-5" />, value: "International", label: "Secteur" },
];

const destinations = [
  "Tunisie", "France", "Canada", "EAU", "Qatar", "Belgique", "Allemagne",
];

const secteurs = [
  { nom: "Banque & Finance", description: "Analystes, gestionnaires de portefeuille, auditeurs dans les plus grandes institutions." },
  { nom: "Digital & Marketing", description: "Digital marketing managers, growth hackers, SEO specialists en agence et en entreprise." },
  { nom: "Tech & IA", description: "Data scientists, ML engineers, experts cybersécurité dans les entreprises tech." },
  { nom: "Conseil", description: "Consultants en stratégie, management et transformation digitale." },
  { nom: "Entrepreneuriat", description: "Fondateurs de startups, incubés et accélérés par le réseau EBS." },
];

export default function AlumniPage() {
  return (
    <>
      <PageHero
        title="Le réseau EBS : des diplômés qui réussissent partout dans le monde."
        subtitle="Rejoignez une communauté de diplômés actifs en Tunisie, en France, au Canada, dans les pays du Golfe et à l'international."
        badge="Alumni"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Alumni" }]}
        background="light"
      />

      {/* Destinations */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy text-center mb-8">
            Nos alumni dans le monde
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {destinations.map((d) => (
              <span key={d} className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-full border border-penn-border text-[14px] font-semibold text-penn-navy shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-penn-green" />
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy text-center mb-12">
            Secteurs d'activité de nos diplômés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secteurs.map((s) => (
              <div key={s.nom} className="bg-penn-bg-light rounded-xl p-6 border border-penn-border">
                <h3 className="text-[17px] font-extrabold text-penn-navy mb-2">{s.nom}</h3>
                <p className="text-[14px] text-penn-body leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Vous êtes diplômé(e) EBS ?"
        subtitle="Rejoignez le groupe LinkedIn EBS Alumni et devenez mentor pour nos étudiants."
        primaryCta={{ label: "Mettre à jour mon profil", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
