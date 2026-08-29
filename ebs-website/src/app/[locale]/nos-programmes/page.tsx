import Link from "next/link";
import { ArrowRight, Award, Globe, Plane, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { Badge, CtaSection, InfiniteLogoMarquee } from "@/components/shared";
import { MagneticProgramCard } from "@/components/program";
import { ShowcaseHero } from "@/components/hero";
import { licences } from "@/lib/programmes/licences";
import { masters } from "@/lib/programmes/masters";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return pageMetadata({
    title: "Programmes EBS : Licences, Masters, IA et international",
    description: "Comparez tous les programmes EBS : Licences, Masters, certifications internationales, IA intégrée et parcours internationaux en France, Canada, Italie et Oman.",
    path: `/${locale}/nos-programmes`,
  });
}

const allLicences = [
  { ...licences.management, subtitle: "Formation au leadership et au pilotage d'organisations dans un monde digital." },
  { ...licences.marketing, subtitle: "La formation marketing digital la plus complète en Tunisie." },
  { ...licences.finance, subtitle: "Certifications Bloomberg pour une carrière en finance internationale." },

  { ...licences["informatique-ia"], subtitle: "Machine learning, deep learning et NLP avec les certifications Harvard et DeepLearning.AI." },
  { ...licences.cybersecurite, subtitle: "Ethical hacking, forensics, SOC avec Cisco, Fortinet et Google." },
];

const allMasters = [
  { ...masters.crm, subtitle: "CRM, marketing automation et transformation digitale avec HubSpot et n8n." },
  { ...masters["marketing-digital-ia"], subtitle: "Marketing digital, data marketing et automatisation par l'IA." },
  { ...masters.startups, subtitle: "Entrepreneuriat, innovation et gestion de projets avec PMI et Scrum." },
  { ...masters["ingenierie-financiere"], subtitle: "M&A, finance quantitative et marchés financiers avec Bloomberg." },
];

const nosProgrammesCards = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Catalogue v3.1",
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
    icon: <Globe className="w-6 h-6" />,
    title: "International",
    subtitle: "16 partenaires mondiaux",
    color: "#E89745",
    offsetY: -10,
    parallaxSpeed: 0.6,
  }
];

const mobilityScenarios = [
  { step: "1 an à EBS", dest: "Bachelor 2 en Italie", pays: "Link University — Rome", details: "Accès direct dès la 1ère année de Licence validée. Intégration en Bachelor 2.", color: "#43A047" },
  { step: "2 ans à EBS", dest: "Bachelor 3 en France", pays: "12 partenaires — France", details: "Accès direct après validation de 2 années de Licence. Intégration en 3ème année.", color: "#1E88E5" },
  { step: "3 ans à EBS", dest: "Master Grande École", pays: "France & Canada", details: "Après la Licence complète. Admission en Master ou Maîtrise chez nos partenaires.", color: "#E53935" },
  { step: "M1 à EBS", dest: "Maîtrise au Canada", pays: "UQAT — Québec", details: "Après une année de Master à EBS. Maîtrise à l'UQAT. Résidence permanente possible.", color: "#2B8FAB" },
];

export default function NosProgrammesPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Programmes EBS",
    itemListElement: [...allLicences, ...allMasters].map((program, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://ebs.tn/fr/${program.type === "licence" ? "licences" : "masters"}/${program.slug}`,
      name: program.title,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <ShowcaseHero
        title="Nos Programmes : Formez-vous aux métiers de demain."
        subtitle="Découvrez nos Licences, Masters et Parcours Internationaux. IA intégrée dans chaque filière, certifications internationales affichées et diplômes reconnus par l'État tunisien."
        badge="Nos Programmes"
        cards={nosProgrammesCards}
      />

      <InfiniteLogoMarquee />

      {/* Licences Section */}
      <section className="pt-24 pb-12 bg-[#FAFAFA]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <Badge variant="default" size="lg" className="mb-4">Licences</Badge>
              <h2 className="text-[32px] lg:text-[40px] font-extrabold text-penn-navy leading-tight">
                Licences (Bac+3)
              </h2>
              <p className="text-[17px] text-penn-body mt-4 max-w-[700px]">
                5 parcours de Licence pour construire des bases solides en management, finance, marketing ou technologie.
              </p>
            </div>
            <Link href="/licences" className="inline-flex items-center gap-2 text-penn-green hover:underline text-[15px] font-bold">
              Voir toutes les licences <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {allLicences.map((prog) => (
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

      {/* Masters Section */}
      <section className="pt-12 pb-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <Badge variant="default" size="lg" className="mb-4">Masters</Badge>
              <h2 className="text-[32px] lg:text-[40px] font-extrabold text-penn-navy leading-tight">
                Masters (Bac+5)
              </h2>
              <p className="text-[17px] text-penn-body mt-4 max-w-[700px]">
                3 Masters professionnels pour atteindre l'excellence et devenir un expert prisé sur le marché du travail.
              </p>
            </div>
            <Link href="/masters" className="inline-flex items-center gap-2 text-penn-green hover:underline text-[15px] font-bold">
              Voir tous les masters <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {allMasters.map((prog) => (
              <div key={prog.slug} className="w-full md:w-[calc(50%-12px)] lg:w-[calc((100%-64px)/3)] flex flex-col">
                <MagneticProgramCard
                  title={prog.title}
                  subtitle={prog.subtitle}
                  certifications={prog.totalCerts}
                  color={prog.color}
                  href={`/masters/${prog.slug}`}
                  isFeatured={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Section */}
      <section className="pt-12 pb-24 bg-[#FAFAFA]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="bg-penn-navy rounded-[32px] p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-12">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,_#2B8FAB_0%,_transparent_70%)]" />
            <div className="relative z-10 lg:w-1/2">
              <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">Parcours Internationaux</Badge>
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-white leading-tight mb-6">
                Étudiez à l'étranger avec EBS
              </h2>
              <p className="text-[17px] text-white/80 leading-relaxed mb-8">
                Grâce à nos 16 partenaires académiques en France, Canada, Italie et Oman, accédez à des programmes de mobilité, doubles diplômes et poursuites d'études à l'international. L'équipe du Bureau International vous accompagne du choix de la destination jusqu'à l'obtention de votre visa.
              </p>
              <Link href="/parcours-international" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white text-penn-navy font-bold hover:bg-penn-bg transition-colors">
                Découvrir l'International <Globe className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative z-10 lg:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center flex flex-col justify-center items-center">
                <Globe className="w-8 h-8 text-penn-green mb-3" />
                <p className="text-[36px] font-extrabold text-white leading-none mb-1">16</p>
                <p className="text-[14px] text-white/60 font-medium uppercase tracking-wider">Partenaires</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center flex flex-col justify-center items-center">
                <Plane className="w-8 h-8 text-penn-green mb-3" />
                <p className="text-[36px] font-extrabold text-white leading-none mb-1">4</p>
                <p className="text-[14px] text-white/60 font-medium uppercase tracking-wider">Pays</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 col-span-2">
                <h4 className="text-[18px] font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-penn-green" /> Nos Destinations
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-white/40"/> <span className="text-white/80 text-[15px]">France (12)</span></div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-white/40"/> <span className="text-white/80 text-[15px]">Canada (1)</span></div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-white/40"/> <span className="text-white/80 text-[15px]">Italie (1)</span></div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-white/40"/> <span className="text-white/80 text-[15px]">Oman (1)</span></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-[24px] font-extrabold text-penn-navy text-center mb-8">4 Scénarios de Mobilité sur Mesure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mobilityScenarios.map((scenario, index) => (
                <div key={index} className="bg-white border border-penn-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ backgroundColor: `${scenario.color}15` }}>
                    <Plane className="w-6 h-6" style={{ color: scenario.color }} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[14px] font-extrabold text-penn-navy bg-penn-bg-light px-2 py-1 rounded">{scenario.step}</span>
                    <ArrowRight className="w-4 h-4 text-penn-body/40" />
                  </div>
                  <h4 className="text-[18px] font-extrabold text-penn-navy mb-1" style={{ color: scenario.color }}>{scenario.dest}</h4>
                  <p className="text-[14px] font-bold text-penn-navy/70 mb-3 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {scenario.pays}
                  </p>
                  <p className="text-[14px] text-penn-body leading-relaxed flex-1">{scenario.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection 
        title="Rejoignez la première université tunisienne avec l'IA intégrée." 
        subtitle="Candidatures 2026–2027 ouvertes. Déposez votre dossier dès maintenant." 
        primaryCta={{ label: "Voir nos programmes", href: "/nos-programmes" }} 
        secondaryCta={{ label: "Pré-inscription", href: "/preinscription" }} 
        background="penn-green" 
      />
    </>
  );
}
