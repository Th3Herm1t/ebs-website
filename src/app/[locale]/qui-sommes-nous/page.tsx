import { Award, BookOpen, Globe, ShieldCheck } from "lucide-react";
import { PageHero, CtaSection } from "@/components/shared";

const stats = [
  { value: "2013", label: "Fondation" },
  { value: "7", label: "Programmes" },
  { value: "150+", label: "Certifications gratuites" },
  { value: "95%", label: "Taux de réussite" },
  { value: "16", label: "Partenaires internationaux" },
];

const accreditations = [
  "Université privée agréée par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique de la République Tunisienne",
  "Agrément N°2013/02 — Diplômes reconnus par l'État tunisien",
  "Membre du réseau de 16 institutions universitaires partenaires : UQAT (Canada), EM Normandie, PSB Paris, IDRAC, IFAG, IGEFI, Éklore, Epitech, EPSI, Excelia, FIGS, Sup'de Com, RedSup (France), Link University (Italie) et GUtech (Oman)",
  "Partenariats actifs avec entreprises nationales et multinationales",
];

export default function QuiSommesNousPage() {
  return (
    <>
      <PageHero
        title="EBS : Former les Leaders de demain, depuis 2013."
        subtitle="Espima Business School forme depuis plus de 10 ans les managers, ingénieurs financiers, experts du digital et spécialistes en technologies qui font la différence sur le marché de l'emploi tunisien et international."
        badge="Université privée agréée · Tunis, Tunisie · Fondée en 2013"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Qui sommes-nous ?" }]}
        background="light"
      />

      {/* Histoire */}
      <section className="section-padding bg-white">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-6">Notre histoire</h2>
          <div className="text-[16px] text-penn-body leading-relaxed space-y-4">
            <p>
              Fondée en 2013 à Tunis et agréée par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique (Agrément N°2013/02), Espima Business School a été créée avec une conviction forte : la Tunisie mérite des formations universitaires privées à la hauteur des standards internationaux.
            </p>
            <p>
              Depuis plus de 10 ans, nous formons des managers, des ingénieurs financiers, des experts du digital et des professionnels de la technologie capables de comprendre la complexité du monde économique et de s'adapter aux transformations permanentes qui redéfinissent notre société.
            </p>
            <p>
              Aujourd'hui, EBS franchit un nouveau cap stratégique : l'intégration de l'Intelligence Artificielle comme compétence fondamentale obligatoire dans tous ses parcours, et le déploiement d'un accès gratuit à plus de 150 certifications internationales délivrées par Google, IBM, Harvard, Cisco, Bloomberg, Fortinet, HubSpot, DeepLearning.AI et bien d'autres.
            </p>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy text-center mb-12">Chiffres clés</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-xl border border-penn-border p-6 text-center shadow-sm">
                <p className="text-[32px] md:text-[40px] font-extrabold text-penn-green leading-none mb-2">{s.value}</p>
                <p className="text-[13px] md:text-[14px] text-penn-body font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accréditations */}
      <section className="section-padding bg-white">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-8">Accréditations & Reconnaissance</h2>
          <div className="space-y-4">
            {accreditations.map((a) => (
              <div key={a} className="flex items-start gap-4 p-4 bg-penn-bg-light rounded-xl">
                <ShieldCheck className="w-5 h-5 text-penn-green shrink-0 mt-0.5" />
                <p className="text-[15px] text-penn-body leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Prêt(e) à rejoindre EBS ?"
        subtitle="Découvrez nos programmes et construisez votre avenir avec nous."
        primaryCta={{ label: "Voir nos programmes", href: "/licences" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
