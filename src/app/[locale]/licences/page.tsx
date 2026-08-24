import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Award, BookOpen, Globe, ShieldCheck, Sparkles } from "lucide-react";
import { Badge, CtaSection, InfiniteLogoMarquee } from "@/components/shared";
import { MagneticProgramCard } from "@/components/program";
import { ShowcaseHero } from "@/components/hero";
import { AdmissionForm } from "@/components/forms/AdmissionForm";
import { licences } from "@/lib/programmes/licences";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return pageMetadata({
    title: "Licences en Tunisie avec IA et certifications internationales",
    description: "Découvrez les parcours Licence EBS en management, marketing, finance, IA et cybersécurité avec IA obligatoire, certifications internationales et mobilité académique.",
    path: `/${locale}/licences`,
  });
}

const allPrograms = [
  { ...licences.management, subtitle: "Développez vos compétences en management, leadership, gestion de projets et pilotage des organisations dans un environnement en constante évolution.", image: "/images/programs/management.jpg" },
  { ...licences.marketing, subtitle: "Maîtrisez les fondamentaux du marketing, de la communication, du marketing digital et de la relation client pour répondre aux nouveaux enjeux des entreprises.", image: "/images/sections/pro-student.jpg" },
  { ...licences.finance, subtitle: "Préparez une carrière en finance, banque et contrôle de gestion grâce à des certifications internationales, dont Bloomberg.", image: "/images/programs/finance.jpg" },

  { ...licences["informatique-ia"], subtitle: "Développez des compétences en génie logiciel, intelligence artificielle, data science et développement d'applications intelligentes.", image: "/images/programs/informatique.jpg" },
  { ...licences.cybersecurite, subtitle: "Développez des compétences en génie logiciel, cybersécurité, sécurité des réseaux et protection des systèmes d'information.", image: "/images/sections/pillar-tech.jpg" },
];

const licencesCards = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "150+",
    subtitle: "Certifications offertes",
    color: "#2B8FAB",
    offsetY: -80,
    parallaxSpeed: 1,
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "IA obligatoire",
    subtitle: "Dans tous les parcours",
    color: "#9C27B0",
    offsetY: 40,
    parallaxSpeed: 1.5,
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "4 Licences",
    subtitle: "En 5 parcours",
    color: "#E89745",
    offsetY: -10,
    parallaxSpeed: 0.6,
  }
];

export default async function LicencesPage({
  searchParams,
}: {
  searchParams: Promise<{ program?: string }>;
}) {
  const { program } = await searchParams;
  const filteredPrograms = program
    ? allPrograms.filter(p => p.slug === program)
    : allPrograms;
  const isFiltered = filteredPrograms.length < allPrograms.length && filteredPrograms.length > 0;
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Licences EBS",
    itemListElement: allPrograms.map((program, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://ebs.tn/fr/licences/${program.slug}`,
      name: program.title,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <ShowcaseHero
        title="Nos Licences : 3 ans pour construire votre avenir."
        subtitle="4 Licences déclinées en 5 parcours · Intelligence Artificielle intégrée dans chaque filière · Plus de 25 certifications internationales offertes selon le programme · Diplôme agréé par l'État tunisien."
        badge="Licences"
        cards={licencesCards}
      />

      <InfiniteLogoMarquee />

      <div className="relative">
        {/* Floating Right Sidebar for Desktop */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-full pointer-events-none z-40">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12 h-full relative">
            <div className="absolute right-5 lg:right-12 top-0 w-[380px] h-full pt-16">
              <div className="sticky top-[120px] pointer-events-auto">
                <AdmissionForm type="licence" programsList={allPrograms} />
              </div>
            </div>
          </div>
        </div>

        <section className="section-padding bg-[#FAFAFA] relative z-10">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-16">
              <div className="flex flex-col">
                {isFiltered && (
                  <Link href="/licences" className="inline-flex items-center gap-2 text-penn-green hover:underline mb-8 text-[15px] font-medium transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Voir toutes les licences
                  </Link>
                )}
                <div className="flex flex-wrap justify-center gap-6">
                  {(filteredPrograms.length > 0 ? filteredPrograms : allPrograms).map((prog) => (
                    <div key={prog.slug} className="w-full sm:w-[calc(50%-12px)] flex flex-col">
                      <MagneticProgramCard
                        title={prog.title}
                        subtitle={prog.subtitle}
                        certifications={prog.totalCerts}
                        color={prog.color}
                        href={`/licences/${prog.slug}`}
                        image={prog.image}
                        isFeatured={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">{/* spacer */}</div>
            </div>
          </div>
        </section>
      </div>

      {/* Pourquoi choisir une Licence à EBS ? */}
      <section className="section-padding bg-white relative z-10">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] md:text-[36px] font-extrabold text-penn-navy text-center mb-12">
            Pourquoi choisir une Licence à EBS ?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-video lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/images/programs/program-hero.jpg" alt="Étudiants EBS Licence" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-penn-navy/10 mix-blend-multiply" />
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-penn-green/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-7 h-7 text-penn-green" />
                </div>
                <div>
                  <h3 className="text-[18px] font-extrabold text-penn-navy mb-2">IA intégrée</h3>
                  <p className="text-[15px] text-penn-body leading-relaxed">
                    L'Intelligence Artificielle est intégrée à tous les parcours. Chaque étudiant développe des compétences en IA grâce à un ensemble de certifications adaptées à sa formation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-penn-green/10 flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7 text-penn-green" />
                </div>
                <div>
                  <h3 className="text-[18px] font-extrabold text-penn-navy mb-2">150+ certifications</h3>
                  <p className="text-[15px] text-penn-body leading-relaxed">
                    Des certifications délivrées par Google, IBM, Harvard, Bloomberg, Cisco, HubSpot et d'autres partenaires internationaux, offertes sans frais supplémentaires.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-penn-green/10 flex items-center justify-center shrink-0">
                  <Globe className="w-7 h-7 text-penn-green" />
                </div>
                <div>
                  <h3 className="text-[18px] font-extrabold text-penn-navy mb-2">Partenariats internationaux</h3>
                  <p className="text-[15px] text-penn-body leading-relaxed">
                    Poursuivez vos études en France, au Canada, en Italie ou à Oman grâce à nos 14 partenaires académiques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Argument clé + Certifications logos */}
      <section className="section-padding bg-penn-bg-light relative z-10">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12 text-center">
          <Badge variant="default" size="lg" className="mb-6">
            <ShieldCheck className="w-4 h-4" />
            Certifications incluses
          </Badge>
          <p className="text-[19px] md:text-[22px] font-bold text-penn-navy leading-relaxed max-w-[800px] mx-auto">
            En complément de votre diplôme agréé par l'État tunisien, obtenez des certifications internationales délivrées par Google, IBM, Harvard, Cisco, Bloomberg, Fortinet et d'autres organismes reconnus, sans frais supplémentaires.
          </p>
        </div>
      </section>

      <CtaSection
        title="Prêt(e) à choisir votre Licence ?"
        subtitle="Les candidatures 2026/2027 sont ouvertes. Bénéficiez de nos avantages en cours en déposant votre candidature dès aujourd'hui."
        primaryCta={{ label: "Commencer ma pré-inscription", href: "/preinscription" }}
        background="penn-green"
      />
    </>
  );
}
