import { Clock, MapPin, Wifi, Monitor, Coffee } from "lucide-react";
import { PageHero, CtaSection } from "@/components/shared";

const equipements = [
  { icon: <Monitor className="w-5 h-5" />, label: "Salles de cours équipées" },
  { icon: <Monitor className="w-5 h-5" />, label: "Laboratoire informatique" },
  { icon: <Wifi className="w-5 h-5" />, label: "Connexion WiFi haut débit" },
  { icon: <Coffee className="w-5 h-5" />, label: "Espace détente" },
];

export default function CampusPage() {
  return (
    <>
      <PageHero
        title="Le Campus EBS : un espace pensé pour votre réussite."
        subtitle="10 Rue Socrate, Z.I Kheireddine — Le Kram (2015) — Tunis"
        badge="Campus"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Campus" }]}
        background="light"
      />

      {/* Adresse + Map */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[28px] font-extrabold text-penn-navy mb-6">Nous trouver</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-penn-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-bold text-penn-navy">Adresse</p>
                    <p className="text-[14px] text-penn-body">10 Rue Socrate, Z.I Kheireddine, Le Kram (2015), Tunis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-penn-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-bold text-penn-navy">Horaires d'ouverture</p>
                    <p className="text-[14px] text-penn-body">08h00 – 17h00, du lundi au vendredi</p>
                    <p className="text-[14px] text-penn-body">08h00 – 13h00, le samedi</p>
                  </div>
                </div>
              </div>

              <h2 className="text-[28px] font-extrabold text-penn-navy mt-10 mb-6">Équipements</h2>
              <div className="grid grid-cols-2 gap-4">
                {equipements.map((e) => (
                  <div key={e.label} className="flex items-center gap-3 p-4 bg-penn-bg-light rounded-xl">
                    <span className="text-penn-green">{e.icon}</span>
                    <span className="text-[14px] font-semibold text-penn-navy">{e.label}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-[28px] font-extrabold text-penn-navy mt-10 mb-4">Transports & Accès</h2>
              <p className="text-[15px] text-penn-body">
                Le campus est accessible via les lignes de bus et le métro léger de Tunis. Un parking est à disposition des étudiants.
              </p>
            </div>

            <div className="bg-penn-bg-light rounded-2xl overflow-hidden border border-penn-border h-[400px] lg:h-auto flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-penn-green/30 mx-auto mb-4" />
                <p className="text-[15px] text-penn-body font-medium">
                  Carte Google Maps intégrée
                </p>
                <p className="text-[13px] text-penn-body/60 mt-1">
                  10 Rue Socrate, Z.I Kheireddine, Le Kram
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Venez visiter notre campus !"
        subtitle="Prenez rendez-vous pour une visite personnalisée et découvrez l'environnement EBS."
        primaryCta={{ label: "Prendre rendez-vous", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
