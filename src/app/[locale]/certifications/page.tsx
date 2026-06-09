import Link from "next/link";
import { ArrowRight, Award, BookOpen, Sparkles } from "lucide-react";
import { PageHero, CtaSection } from "@/components/shared";
import { providers } from "@/lib/certifications/providers";

const providerList = Object.values(providers);

const stats = [
  { icon: <Award className="w-5 h-5" />, label: "Certifications disponibles", value: "150+" },
  { icon: <Sparkles className="w-5 h-5" />, label: "Fournisseurs premium", value: "15+" },
  { icon: <BookOpen className="w-5 h-5" />, label: "Programmes couverts", value: "7" },
];

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        title="150+ certifications internationales. Gratuites. Incluses dans votre formation."
        subtitle="Chez EBS, votre diplôme n'est que le début. Vous repartez certifié par Google, IBM, Harvard, Cisco, Bloomberg, Fortinet et bien d'autres — sans aucun frais supplémentaire."
        badge="Certifications"
        background="light"
      >
        <div className="flex flex-wrap items-center justify-center gap-6 text-[14px] font-semibold text-penn-body mt-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-2 text-penn-green">
              {s.icon}
              <span className="text-penn-navy font-extrabold">{s.value}</span>
              <span className="text-penn-body font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {providerList.map((p) => (
              <Link
                key={p.slug}
                href={`/certifications/${p.slug}`}
                className="group bg-white rounded-xl border border-penn-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-[18px] font-extrabold text-penn-navy group-hover:text-penn-green transition-colors mb-2">
                  {p.name}
                </h3>
                <p className="text-[14px] text-penn-body leading-relaxed mb-4 line-clamp-2">
                  {p.presentation.slice(0, 120)}...
                </p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-penn-green">
                  Explorer les certifications
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Prêt(e) à rejoindre EBS ?"
        subtitle="Toutes ces certifications sont incluses gratuitement dans votre formation."
        primaryCta={{ label: "Voir nos programmes", href: "/licences" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
