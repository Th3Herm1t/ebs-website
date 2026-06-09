import { PageHero, CtaSection } from "@/components/shared";
import Link from "next/link";
import { Award, Briefcase, Globe, Newspaper, Sparkles, Users } from "lucide-react";

const categories = [
  { icon: <Sparkles className="w-5 h-5" />, nom: "IA & Certifications", description: "Guides certifications, tutoriels IA, actualités GenAI", href: "#" },
  { icon: <Briefcase className="w-5 h-5" />, nom: "Carrière & Emploi", description: "Conseils CV, préparation entretien, métiers de l'avenir", href: "#" },
  { icon: <Users className="w-5 h-5" />, nom: "Vie étudiante", description: "Campus EBS, événements, témoignages, actualités", href: "#" },
  { icon: <Newspaper className="w-5 h-5" />, nom: "Actualités EBS", description: "Nouveaux partenariats, résultats, événements, lauréats", href: "#" },
  { icon: <Award className="w-5 h-5" />, nom: "Secteurs", description: "Finance, Marketing digital, Cybersécurité, IA, Entrepreneuriat", href: "#" },
  { icon: <Globe className="w-5 h-5" />, nom: "International", description: "Étudier en France, étudier au Canada, visa étudiant, guides pays", href: "#" },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Actualités, conseils et insights d'Espima Business School."
        badge="Blog"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Blog" }]}
        background="light"
      />

      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] font-extrabold text-penn-navy text-center mb-10">Catégories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c) => (
              <Link
                key={c.nom}
                href={c.href}
                className="bg-penn-bg-light rounded-xl border border-penn-border p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-penn-green/10 flex items-center justify-center mb-3 text-penn-green group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <h3 className="text-[16px] font-extrabold text-penn-navy mb-1 group-hover:text-penn-green transition-colors">{c.nom}</h3>
                <p className="text-[13px] text-penn-body">{c.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16 p-12 bg-penn-bg-light rounded-2xl border border-penn-border">
            <p className="text-[17px] text-penn-body font-medium">
              Les articles seront publiés prochainement. Revenez bientôt !
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        title="En attendant, découvrez nos programmes."
        primaryCta={{ label: "Voir nos Licences", href: "/licences" }}
        secondaryCta={{ label: "Voir nos Masters", href: "/masters" }}
        background="penn-green"
      />
    </>
  );
}
