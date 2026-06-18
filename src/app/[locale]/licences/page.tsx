import Link from "next/link";
import { ArrowLeft, Award, BookOpen, Globe, ShieldCheck, Sparkles } from "lucide-react";
import { Badge, CtaSection, InfiniteLogoMarquee } from "@/components/shared";
import { MagneticProgramCard } from "@/components/program";
import { ShowcaseHero } from "@/components/hero";
import { licences } from "@/lib/programmes/licences";

const allPrograms = [
  { ...licences.management, subtitle: "Formation au leadership et au pilotage d'organisations dans un monde digital." },
  { ...licences.marketing, subtitle: "La formation marketing digital la plus complète en Tunisie." },
  { ...licences.finance, subtitle: "Certifications Bloomberg pour une carrière en finance internationale." },
  { ...licences["informatique-standard"], subtitle: "Bases solides en ingénierie logicielle et systèmes informatiques." },
  { ...licences["informatique-ia"], subtitle: "Machine learning, deep learning et NLP avec les certifications Harvard et DeepLearning.AI." },
  { ...licences.cybersecurite, subtitle: "Ethical hacking, forensics, SOC avec Cisco, Fortinet et Google." },
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
    subtitle: "Management · Finance · Tech",
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
  return (
    <>
      <ShowcaseHero
        title="Nos Licences : 3 ans pour construire votre avenir."
        subtitle="4 Licences · 6 Parcours · IA intégrée dans chaque filière · 57 à 87 certifications internationales gratuites par programme · Accrédité État tunisien."
        badge="Licences"
        cards={licencesCards}
      />

      <InfiniteLogoMarquee />

      <section className="section-padding bg-[#FAFAFA]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          {isFiltered && (
            <Link href="/licences" className="inline-flex items-center gap-2 text-penn-green hover:underline mb-8 text-[15px] font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Voir toutes les licences
            </Link>
          )}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {(filteredPrograms.length > 0 ? filteredPrograms : allPrograms).map((prog) => (
              <div key={prog.slug} className="w-full md:w-[calc(50%-12px)] lg:w-[calc((100%-64px)/3)] flex flex-col">
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

      {/* Pourquoi choisir une Licence à EBS ? */}
      <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] md:text-[36px] font-extrabold text-penn-navy text-center mb-12">
            Pourquoi choisir une Licence à EBS ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-penn-green/10 flex items-center justify-center mx-auto mb-5">
                <Sparkles className="w-7 h-7 text-penn-green" />
              </div>
              <h3 className="text-[18px] font-extrabold text-penn-navy mb-3">IA Intégrée dans Chaque Filière</h3>
              <p className="text-[15px] text-penn-body leading-relaxed">
                L&apos;Intelligence Artificielle est une compétence transversale obligatoire dans tous nos programmes. Chaque étudiant repart avec 26 certifications IA reconnues mondialement.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-penn-green/10 flex items-center justify-center mx-auto mb-5">
                <Award className="w-7 h-7 text-penn-green" />
              </div>
              <h3 className="text-[18px] font-extrabold text-penn-navy mb-3">150+ Certifications Gratuites</h3>
              <p className="text-[15px] text-penn-body leading-relaxed">
                Des certifications délivrées par Google, IBM, Harvard, Bloomberg, Cisco, HubSpot et bien d&apos;autres — intégralement incluses dans votre formation, sans frais supplémentaires.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-penn-green/10 flex items-center justify-center mx-auto mb-5">
                <Globe className="w-7 h-7 text-penn-green" />
              </div>
              <h3 className="text-[18px] font-extrabold text-penn-navy mb-3">Partenariats Internationaux</h3>
              <p className="text-[15px] text-penn-body leading-relaxed">
                Poursuivez vos études en France, au Canada, en Italie ou à Oman grâce à nos 16 partenaires universitaires. Mobilité facilitée et doubles diplômes possibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Argument clé + Certifications logos */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12 text-center">
          <Badge variant="default" size="lg" className="mb-6">
            <ShieldCheck className="w-4 h-4" />
            Certifications incluses
          </Badge>
          <p className="text-[19px] md:text-[22px] font-bold text-penn-navy leading-relaxed max-w-[800px] mx-auto">
            En plus de votre diplôme reconnu par l&apos;État tunisien, vous repartez avec des certifications délivrées par Google, IBM, Harvard, Cisco, Bloomberg et Fortinet — sans aucun frais supplémentaire.
          </p>
        </div>
      </section>

      <CtaSection
        title="Prêt(e) à choisir votre Licence ?"
        subtitle="Candidatures 2026–2027 ouvertes. Early Bird jusqu'au 30 Juin."
        primaryCta={{ label: "Commencer ma pré-inscription", href: "/preinscription" }}
        background="penn-green"
      />
    </>
  );
}
