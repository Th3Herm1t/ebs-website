import { PageHero, CtaSection } from "@/components/shared";

export default function CorpsEnseignantPage() {
  return (
    <>
      <PageHero
        title="Un corps enseignant d'excellence, entre académie et entreprise."
        subtitle="Nos enseignants allient rigueur académique et expérience professionnelle concrète. Ils connaissent les réalités du marché parce qu'ils en font partie."
        badge="Corps Enseignant"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Corps Enseignant" }]}
        background="light"
      />

      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12 text-center">
          <p className="text-[17px] text-penn-body max-w-[700px] mx-auto mb-8">
            Cette page sera enrichie avec les profils de nos enseignants. Chaque fiche comprendra une photo professionnelle, le parcours académique, les spécialités et les certifications.
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-penn-bg-light rounded-full text-[14px] font-semibold text-penn-navy">
            Management · Marketing · Finance · Informatique · IA · International
          </div>
        </div>
      </section>

      <CtaSection
        title="Vous souhaitez rejoindre notre équipe enseignante ?"
        subtitle="EBS recrute des professionnels passionnés pour transmettre leur expertise."
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
