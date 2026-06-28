"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, Building2, Check, GraduationCap, MapPin, Star } from "lucide-react";
import { CtaSection } from "@/components/shared";
import { CountryFlag } from "@/components/shared/CountryFlag";
import type { PartnerData } from "@/lib/partenaires/partenaires";

const countryAccent: Record<string, string> = {
  CA: "#E53935",
  FR: "#1E88E5",
  IT: "#43A047",
  OM: "#FB8C00",
};

export function PartnerPageContent({ data }: { data: PartnerData }) {
  const accent = countryAccent[data.countryCode ?? ""] ?? "#2B8FAB";

  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-penn-navy via-[#1a2035] to-penn-navy" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_40%_50%,_#2B8FAB_0%,_transparent_50%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wide mb-8"
                  style={{ backgroundColor: accent + "15", color: accent }}>
                  <CountryFlag code={data.countryCode ?? ""} className="w-4 h-3" />
                  {data.country}
                </div>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
                className="text-[40px] md:text-[54px] lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-4">
                Partenariat<br /><span style={{ color: accent }}>EBS × {data.name}</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
                className="text-[16px] md:text-[18px] text-white/50 leading-relaxed max-w-[550px]">
                {data.type}
              </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl border border-white/10 p-8 flex flex-col items-center justify-center text-center shadow-xl">
              {data.logo ? (
                <Image src={data.logo} alt={data.name} width={200} height={80} className="object-contain mb-4" style={{ width: "auto", height: "auto", maxHeight: "5rem" }} />
              ) : (
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-[28px] font-extrabold text-penn-navy/20 bg-penn-bg-light mb-4">
                  {data.name.charAt(0)}
                </div>
              )}
              <p className="text-[13px] text-penn-body/60 font-medium flex items-center gap-1.5 justify-center">
                <CountryFlag code={data.countryCode ?? ""} />
                {data.country}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12 space-y-16">
          <PartnerSection icon={<Building2 />} title="Présentation" accent={accent}>
            <p className="text-[16px] text-penn-body leading-relaxed">{data.presentation}</p>
          </PartnerSection>

          <PartnerSection icon={<GraduationCap />} title="Programmes d'accueil" accent={accent}>
            <div className="space-y-3">
              {data.programmes.map((p) => (
                <div key={p.nom} className="bg-penn-bg-light rounded-xl border border-penn-border p-5 hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-[16px] font-extrabold text-penn-navy">{p.nom}</h3>
                    <span className="text-[12px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: accent + "15", color: accent }}>{p.duree}</span>
                  </div>
                  <p className="text-[14px] text-penn-body">{p.details}</p>
                </div>
              ))}
            </div>
          </PartnerSection>

          <PartnerSection icon={<Star />} title="Éligibilité depuis EBS" accent={accent}>
            <p className="text-[16px] text-penn-body leading-relaxed pl-[52px] border-l-[3px] p-4 rounded-r-xl" style={{ borderColor: accent + "30", backgroundColor: accent + "05" }}>
              {data.eligibilite}
            </p>
          </PartnerSection>

          <PartnerSection icon={<Check />} title="Avantages & Facilités" accent={accent}>
            <div className="flex flex-wrap justify-center gap-3">
              {data.avantages.map((a) => (
                <div key={a} className="flex items-start gap-3 p-4 bg-penn-bg-light rounded-xl border border-penn-border hover:border-[#2B8FAB]/20 transition-colors w-full sm:w-[calc(50%-6px)]">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accent }} />
                  <p className="text-[14px] text-penn-body leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </PartnerSection>

          <PartnerSection icon={<ArrowRight />} title="Débouchés" accent={accent}>
            <div className="flex flex-wrap justify-center gap-3">
              {data.debouches.map((d) => (
                <div key={d} className="flex items-center gap-3 px-4 py-3 bg-penn-bg-light rounded-lg border border-penn-border text-[14px] font-semibold text-penn-navy hover:border-[#2B8FAB]/30 transition-colors w-full sm:w-[calc(50%-6px)]"
                  style={{ borderLeftWidth: "3px", borderLeftColor: accent }}>
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: accent }} />
                  {d}
                </div>
              ))}
            </div>
          </PartnerSection>
        </div>
      </section>

      <CtaSection
        title="Intéressé(e) par ce partenaire ?"
        subtitle="Contactez-nous pour en savoir plus sur les modalités d'admission et les conditions d'éligibilité."
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
        whatsapp="+216 55 582 843"
        background="penn-green"
      />
    </>
  );
}

function PartnerSection({ icon, title, accent, children }: { icon: React.ReactNode; title: string; accent: string; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: accent + "15", color: accent }}>{icon}</div>
        <h2 className="text-[24px] font-extrabold text-penn-navy">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}
