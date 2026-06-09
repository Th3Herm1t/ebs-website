import { Check, Clock, ShieldCheck } from "lucide-react";
import { PageHero, CtaSection } from "@/components/shared";

const inclusions = [
  "Formation complète (cours, projets, simulations professionnelles)",
  "150+ certifications internationales gratuites",
  "Accompagnement carrière personnalisé",
  "Accès à la plateforme numérique EBS",
  "Stages professionnels",
];

const faq = [
  { q: "Y a-t-il des bourses disponibles ?", a: "EBS propose des facilités de paiement échelonné. Contactez notre équipe pour une simulation personnalisée." },
  { q: "Des réductions sont-elles disponibles pour les fratries ?", a: "Oui, des réductions sont accordées pour les inscriptions multiples au sein d'une même famille." },
  { q: "Qu'est-ce que la remise Early Bird ?", a: "Une réduction accordée aux inscriptions anticipées : jusqu'au 31 Juillet pour les Licences et jusqu'au 31 Août pour les Masters." },
];

export default function TarifsPage() {
  return (
    <>
      <PageHero
        title="Des formations d'excellence à des tarifs accessibles."
        subtitle="Consultez nos tarifs pour les Licences et Masters. Réductions Early Bird disponibles. Contactez-nous pour une simulation personnalisée."
        badge="Tarifs"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Tarifs" }]}
        background="light"
      />

      {/* Ce qui est inclus */}
      <section className="section-padding bg-white">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] font-extrabold text-penn-navy mb-8">Ce qui est inclus dans votre formation</h2>
          <div className="space-y-3">
            {inclusions.map((i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-penn-bg-light rounded-xl border border-penn-border">
                <Check className="w-5 h-5 text-penn-green shrink-0" />
                <span className="text-[15px] text-penn-body font-medium">{i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Bird */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-penn-green/10 text-penn-green font-bold text-[13px] uppercase tracking-wider mb-4">
            <Clock className="w-4 h-4" />
            Early Bird
          </div>
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-4">
            Réductions Early Bird
          </h2>
          <p className="text-[16px] text-penn-body max-w-[600px] mx-auto mb-3">
            Jusqu'au <strong>31 Juillet</strong> pour les Licences et jusqu'au <strong>31 Août</strong> pour les Masters.
          </p>
          <p className="text-[14px] text-penn-body">
            Possibilité de paiement échelonné sur l'année académique.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] font-extrabold text-penn-navy mb-8">Questions fréquentes</h2>
          <div className="space-y-3">
            {faq.map((item) => (
              <div key={item.q} className="bg-penn-bg-light rounded-xl border border-penn-border p-5">
                <h3 className="text-[16px] font-extrabold text-penn-navy mb-1">{item.q}</h3>
                <p className="text-[14px] text-penn-body">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Demandez une simulation personnalisée."
        subtitle="Notre équipe vous recontacte dans les 24h avec un devis adapté à votre situation."
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
        whatsapp="+216 29 58 28 35"
        background="penn-green"
      />
    </>
  );
}
