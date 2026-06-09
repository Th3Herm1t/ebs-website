import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import { PageHero, CtaSection, ProcessSteps } from "@/components/shared";

const etapes = [
  { number: 1, title: "Vous entamez vos études à EBS", description: "Accédez aux parcours internationaux selon 4 scénarios : L1 validée → Bachelor 2 en Italie · L2 validée → Bachelor 3 en France · L3 validée → Master France ou Maîtrise Canada · M1 validée → Maîtrise Canada." },
  { number: 2, title: "Candidature au partenaire", description: "Notre équipe vous accompagne dans la constitution de votre dossier de candidature pour l'université partenaire choisie." },
  { number: 3, title: "Admission", description: "Vous êtes admis(e) dans l'université partenaire. La convention inter-universitaire EBS facilite le processus et la reconnaissance des crédits." },
  { number: 4, title: "Visa & Installation", description: "Nos équipes vous guident dans les démarches de visa étudiant (France : Campus France · Italie : Universitaly · Canada : Immigration Canada)." },
  { number: 5, title: "Études & Emploi", description: "Vous suivez votre programme d'accueil et accédez au marché du travail local ainsi qu'aux opportunités de résidence permanente." },
];

const avantages = [
  "Diplômes européens et canadiens reconnus mondialement → boostez votre CV international",
  "Immigration facilitée : Canada (PEQ, PNP), France (titre de séjour étudiant → vie professionnelle)",
  "Salaires à l'international 3 à 5 fois supérieurs à la Tunisie pour les profils qualifiés",
  "Réseau international élargi : alumni EBS partout dans le monde",
  "Accès aux marchés de l'emploi les plus dynamiques : France, Canada, Belgique, Suisse",
  "Sécurité : partir avec une convention formelle signée, pas dans l'incertitude",
];

export default function InternationalPage() {
  return (
    <>
      <PageHero
        title="EBS : votre passeport vers le Canada, l'Italie et la France."
        subtitle="Étudiez à EBS. Continuez dans le monde. Nos partenariats avec 16 universités françaises, italiennes et canadiennes vous ouvrent des perspectives académiques et professionnelles sans frontières."
        badge="International"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Parcours Internationaux" }]}
        background="light"
      />

      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy text-center mb-12">
            Comment fonctionne le Parcours International EBS ?
          </h2>
          <ProcessSteps steps={etapes} direction="vertical" color="#2B8FAB" />
        </div>
      </section>

      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy text-center mb-12">
            Pourquoi étudier à l'international depuis EBS ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px] mx-auto">
            {avantages.map((a) => (
              <div key={a} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-penn-border">
                <Globe className="w-5 h-5 text-penn-green shrink-0 mt-0.5" />
                <p className="text-[14px] text-penn-body leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12 text-center">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-6">
            Découvrez nos 16 partenaires
          </h2>
          <Link
            href="/partenaires/uqat"
            className="inline-flex items-center gap-2 text-[16px] font-bold text-penn-green hover:text-penn-navy transition-colors"
          >
            Explorer les universités partenaires
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CtaSection
        title="Prêt(e) à partir étudier à l'international ?"
        subtitle="Candidatez dès maintenant au Parcours International EBS."
        primaryCta={{ label: "Candidatez au Parcours International", href: "/etudier-a-letranger" }}
        whatsapp="+216 29 58 28 35"
        background="penn-green"
      />
    </>
  );
}
