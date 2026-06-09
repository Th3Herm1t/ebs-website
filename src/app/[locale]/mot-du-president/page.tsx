import { PageHero, CtaSection } from "@/components/shared";

export default function MotDuPresidentPage() {
  return (
    <>
      <PageHero
        title="Le Mot du Président"
        badge="EBS"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Mot du Président" }]}
        background="light"
      />

      <section className="section-padding bg-white">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <div className="bg-penn-navy text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-[16px] md:text-[18px] leading-relaxed text-white/90 mb-6">
                Chères étudiantes, chers étudiants, chères familles,
              </p>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-white/80 space-y-4">
                Depuis la fondation d'Espima Business School en 2013, notre engagement a toujours été le même : vous offrir une formation d'excellence qui vous prépare réellement au monde professionnel d'aujourd'hui et de demain.
              </p>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-white/80 mt-4">
                En 2026, nous avons pris une décision stratégique majeure : intégrer l'Intelligence Artificielle comme compétence fondamentale obligatoire dans l'ensemble de nos programmes. Ce n'est pas une tendance que nous suivons — c'est notre responsabilité envers vous. Le monde du travail a changé, et EBS s'est transformée pour vous y préparer mieux que quiconque.
              </p>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-white/80 mt-4">
                En parallèle, nous avons noué des partenariats avec les plus grandes organisations mondiales de certification pour vous permettre d'obtenir, gratuitement et durant vos études, des certifications reconnues partout dans le monde.
              </p>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-white/80 mt-4">
                Rejoindre EBS, c'est choisir une trajectoire professionnelle ambitieuse, soutenue par une équipe pédagogique dédiée, des outils d'apprentissage de pointe, et un réseau international solide.
              </p>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-white/90 mt-4 font-semibold">
                Bienvenue chez EBS. Votre avenir commence ici.
              </p>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[18px] font-extrabold text-white">Abderraouf NAJAR</p>
                <p className="text-[14px] text-white/60">Président — Espima Business School</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 text-white/5 text-[200px] font-extrabold leading-none select-none pointer-events-none">
              EBS
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Rejoignez la famille EBS."
        primaryCta={{ label: "Voir nos programmes", href: "/licences" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
