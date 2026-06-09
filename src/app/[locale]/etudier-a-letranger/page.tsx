import { Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHero, CtaSection, StickyForm } from "@/components/shared";

const destinations = [
  { pays: "🇨🇦 Canada", partenaire: "UQAT", avantages: "Immigration facilitée (PEQ) · Maîtrise Gestion de Projets · Qualité de vie · Résidence permanente possible" },
  { pays: "🇫🇷 France", partenaire: "12 partenaires", avantages: "Visa étudiant facilité · Grandes Écoles accréditées · Écoles spécialisées · Multi-campus · Accès marché UE" },
  { pays: "🇮🇹 Italie", partenaire: "Link University", avantages: "Accès dès la 1ère année de Licence · Bachelor direct · Campus Rome · Université reconnue État italien" },
  { pays: "🇴🇲 Oman", partenaire: "GUtech", avantages: "Accès au marché du Golfe · Partenariat RWTH Aachen · Cours en anglais · Perspectives MENA" },
];

export default function EtudierALetrangerPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-gradient-to-b from-penn-bg-light to-white">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
            <div>
              <h1 className="text-[36px] md:text-[48px] font-extrabold text-penn-navy leading-[1.1] mb-4">
                Terminez vos études en France, en Italie ou au Canada — Partez depuis EBS.
              </h1>
              <p className="text-[17px] text-penn-body leading-relaxed mb-8">
                EBS est votre tremplin vers le monde. 16 partenaires universitaires en France, en Italie, au Canada et à Oman. Visa facilité. Diplôme reconnu. Accompagnement complet.
              </p>
              <Link
                href="/parcours-internationaux"
                className="inline-flex items-center gap-2 text-[15px] font-bold text-penn-green hover:text-penn-navy transition-colors"
              >
                Découvrir comment fonctionne le parcours international
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <StickyForm title="J'opte pour le Parcours International" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy text-center mb-12">
            Les 4 destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {destinations.map((d) => (
              <div key={d.pays} className="bg-penn-bg-light rounded-xl border border-penn-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-5 h-5 text-penn-green" />
                  <h3 className="text-[18px] font-extrabold text-penn-navy">{d.pays}</h3>
                  <span className="text-[13px] text-penn-green font-bold">{d.partenaire}</span>
                </div>
                <p className="text-[14px] text-penn-body leading-relaxed">{d.avantages}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Prêt(e) à partir ?"
        subtitle="Déposez votre candidature et notre équipe vous accompagne dans toutes les démarches."
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
        whatsapp="+216 29 58 28 35"
        background="penn-green"
      />
    </>
  );
}
