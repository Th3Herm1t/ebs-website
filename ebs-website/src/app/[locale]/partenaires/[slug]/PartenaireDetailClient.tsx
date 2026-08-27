"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  ChevronDown,
  Clock,
  GraduationCap,
  Home,
  MapPin,
  Quote,
  Send,
  Sparkles,
} from "lucide-react";
import { Badge, Breadcrumb, CtaSection } from "@/components/shared";
import { CountryFlag } from "@/components/shared/CountryFlag";
import { partenaires, type PartnerData } from "@/lib/partenaires/partenaires";
import { siteConfig } from "@/lib/config";

const fallbackHero = "/images/heroes/hero-alumni.webp";
const accentMap: Record<string, string> = { CA: "#E53935", FR: "#1E88E5", IT: "#43A047", OM: "#FB8C00" };

export default function PartenaireDetailClient({ slug }: { slug: string }) {
  const partner: PartnerData | undefined = partenaires[slug];
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  if (!partner) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-penn-bg-light">
        <div className="text-center">
          <Building2 className="w-16 h-16 text-penn-border mx-auto mb-4" />
          <h1 className="text-2xl font-extrabold text-penn-navy mb-2">Partenaire introuvable</h1>
          <p className="text-penn-body/60 mb-6">Ce partenaire n&apos;existe pas ou a été déplacé.</p>
          <Link href="/parcours-international" className="text-penn-green font-bold hover:underline">Voir tous les partenaires →</Link>
        </div>
      </main>
    );
  }

  const accent = accentMap[partner.countryCode || ""] || "#2B8FAB";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    try {
      await fetch(siteConfig.webhookUrl, { method: "POST", body: (() => { const fd = new FormData(e.currentTarget); fd.append('formId', 'partenaires__slug_'); return fd; })(), headers: { Accept: "application/json" } });
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  };

  return (
    <main className="min-h-screen">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {partner.heroImage ? (
            <Image src={partner.heroImage} alt="" fill className="object-cover" priority sizes="100vw" />
          ) : (
            <Image src={fallbackHero} alt="" fill className="object-cover" priority sizes="100vw" />
          )}
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/70 via-[#1a2035]/60 to-penn-navy/70" />
        <div className="absolute inset-0 z-[1] opacity-[0.03] bg-[radial-gradient(circle_at_50%_70%,_#2B8FAB_0%,_transparent_50%)]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">
              <CountryFlag code={partner.countryCode || "CA"} className="w-5 h-3.5" />
              {partner.country.replace(/^[^\s]+\s/, "")}
            </Badge>
          </motion.div>
          <div className="max-w-[750px]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="flex items-center gap-5 mb-6">
              {partner.logo && (
                <div className="w-28 h-28 rounded-2xl bg-white/90 backdrop-blur-sm border border-white/40 flex items-center justify-center p-3 shrink-0 shadow-lg">
                  <Image src={partner.logo} alt={partner.name} width={112} height={112} className="max-w-full max-h-full object-contain" />
                </div>
              )}
              <div>
                <p className="text-[13px] text-white/40 font-medium uppercase tracking-wider mb-1">{partner.type}</p>
                <h1 className="text-[40px] md:text-[52px] lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-[-1px]">
                  Partenariat<br /><span className="text-penn-green">EBS — {partner.name}</span>
                </h1>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-5 lg:px-12 py-5 bg-white">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Partenaires", href: "/partenaires" }, { label: partner.name }]} />
      </div>

      {/* ═══════════ PRÉSENTATION + STATS ═══════════ */}
      <section className="relative z-20 -mt-16 pb-0">
        <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl border border-penn-border shadow-xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Badge size="lg">À propos</Badge>
              <div className="flex-1 h-px bg-gradient-to-r from-penn-border to-transparent" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-7 space-y-4 text-[15px] text-penn-body/70 leading-relaxed">
                <p className="text-[16px] text-penn-navy font-semibold">{partner.presentation}</p>
              </div>
              <div className="lg:col-span-5">
                {partner.imageSection && (
                  <div className="relative rounded-xl overflow-hidden shadow-md border border-penn-border/50 mb-5">
                    <Image src={partner.imageSection.src} alt={partner.imageSection.caption || ""} width={500} height={320} className="w-full h-auto" />
                    {partner.imageSection.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-penn-navy/80 to-transparent p-4">
                        <div className="flex items-center gap-2 text-white"><MapPin className="w-4 h-4" /><span className="text-[13px] font-bold">{partner.imageSection.caption}</span></div>
                      </div>
                    )}
                  </div>
                )}
                {partner.keyStats && (
                  <div className={`grid gap-2 ${partner.keyStats.length <= 4 ? "grid-cols-4" : "grid-cols-2 md:grid-cols-4"}`}>
                    {partner.keyStats.map((stat) => (
                      <div key={stat.label} className="text-center bg-penn-bg-light rounded-lg p-2.5 border border-penn-border/30">
                        <p className="text-[16px] font-extrabold text-penn-navy leading-none mb-0.5">{stat.value}</p>
                        <p className="text-[10px] font-semibold text-penn-body/40 uppercase tracking-wide">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ ACCRÉDITATIONS ═══════════ */}
      {partner.accreditations && partner.accreditations.length > 0 && (
        <section className="section-padding bg-white pt-8 pb-16">
          <div className="max-w-[900px] mx-auto px-5 lg:px-12">
            <div className="text-center mb-8">
              <Badge size="lg" className="mb-4">Accréditations</Badge>
              <h2 className="text-[24px] md:text-[30px] font-extrabold text-penn-navy mb-2">
                {partner.accreditations.length === 3 ? "Triple" : ""} Accréditation{partner.accreditations.length > 1 ? "s" : ""} Internationale{partner.accreditations.length > 1 ? "s" : ""}
              </h2>
            </div>

            {partner.accreditationImage && (
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
                <div className="bg-white rounded-2xl border-2 border-penn-border/20 p-8 shadow-sm">
                  <Image src={partner.accreditationImage} alt="Accréditations" width={760} height={100} className="w-full h-auto max-h-[100px] object-contain mx-auto" />
                </div>
              </motion.div>
            )}

            <div className={`grid gap-5 ${partner.accreditations.length === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2"}`}>
              {partner.accreditations.map((acc, i) => (
                <motion.div
                  key={acc.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1 }}
                  className="relative bg-gradient-to-br from-penn-bg-light to-white rounded-2xl border border-penn-border/30 p-6 text-center hover:shadow-lg transition-all group"
                >
                  {acc.logo && (
                    <div className="h-16 flex items-center justify-center mb-3">
                      <Image src={acc.logo} alt={acc.label} width={180} height={64} className="max-h-full max-w-[180px] object-contain mx-auto" onError={(e) => { (e.target as HTMLElement).style.display = "none"; }} />
                    </div>
                  )}
                  <h3 className="text-[15px] font-extrabold text-penn-navy mb-2">{acc.label}</h3>
                  <p className="text-[13px] text-penn-body/50 leading-relaxed">{acc.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ PROGRAMMES ═══════════ */}
      <section className="section-padding bg-white pt-20">
        <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
          <div className="text-center mb-14">
            <Badge size="lg" className="mb-4">Programmes</Badge>
            <h2 className="text-[30px] md:text-[38px] font-extrabold text-penn-navy mb-3">Programmes accessibles</h2>
            <p className="text-[15px] text-penn-body/50 max-w-[550px] mx-auto">{partner.programmes.length} programme{partner.programmes.length > 1 ? "s" : ""} accessible{partner.programmes.length > 1 ? "s" : ""} via le partenariat EBS — {partner.name}.</p>
          </div>
          <div className={`flex flex-wrap justify-center gap-6 ${partner.programmes.length === 1 ? "max-w-[550px] mx-auto" : ""}`}>
            {partner.programmes.map((prog, i) => (
              <ProgramCard key={i} accent={accent} programme={prog} index={i} total={partner.programmes.length} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ EXTRA SECTIONS ═══════════ */}
      {partner.extraSections && partner.extraSections.length > 0 && (
        <section className="section-padding bg-penn-bg-light">
          <div className="max-w-[1100px] mx-auto px-5 lg:px-12 space-y-8">
            {partner.extraSections.map((section, i) => (
              <RichSection key={i} section={section} accent={accent} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* ═══════════ PROFESSORS (UQAT-specific) ═══════════ */}
      {partner.professors && partner.professors.length > 0 && (
        <section className="section-padding bg-penn-bg-light">
          <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
            <div className="text-center mb-12">
              <Badge size="lg" className="mb-4">Encadrement</Badge>
              <h2 className="text-[28px] md:text-[36px] font-extrabold text-penn-navy mb-3">Corps professoral</h2>
              <p className="text-[15px] text-penn-body/50 max-w-[550px] mx-auto">
                {partner.professors.length} professeurs-chercheurs de {partner.name} prêts à encadrer votre mémoire de maîtrise.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {partner.professors.map((prof, i) => (
                <motion.div key={prof.nom} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.05 }} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 border border-penn-border/50 shadow-sm group-hover:shadow-lg transition-all duration-300">
                    <Image src={prof.img} alt={prof.nom} fill sizes="(max-width: 640px) 50vw, 20vw" className="object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { (e.target as HTMLElement).style.display = "none"; }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-penn-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-[13px] font-extrabold text-penn-navy mt-2.5 text-center leading-tight group-hover:text-penn-green transition-colors">{prof.nom}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ ADMISSION ═══════════ */}
      <section className={`section-padding ${partner.extraSections?.length ? "bg-white" : "bg-penn-bg-light"}`}>
        <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
          <div className="text-center mb-10">
            <Badge size="lg" className="mb-4">Admission</Badge>
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-3">Conditions d&apos;accès</h2>
            <p className="text-[15px] text-penn-body/50 max-w-[550px] mx-auto">
              Les prérequis pour intégrer les programmes de {partner.name} via le partenariat EBS.
            </p>
          </div>
          <div className="max-w-[800px] mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl border border-penn-border shadow-sm p-8 md:p-10">
              <div className="text-[15px] text-penn-body/70 leading-relaxed space-y-4 whitespace-pre-line">{partner.eligibilite}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ AVANTAGES ═══════════ */}
      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,_#2B8FAB_0%,_transparent_70%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 max-w-[1100px] mx-auto px-5 lg:px-12">
          <div className="text-center mb-12">
            <Badge variant="outline" size="lg" className="mb-4 border-white/20 text-white/80"><Sparkles className="w-3 h-3" />Avantages</Badge>
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-white mb-3">
              Pourquoi <span style={{ color: accent }}>{partner.name}</span> ?
            </h2>
            <p className="text-[15px] text-white/45 max-w-[550px] mx-auto">{partner.avantages.length} avantages du partenariat EBS — {partner.name}.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {partner.avantages.map((avantage, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.05 }} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 w-full md:w-[calc(50%-8px)] lg:w-[calc((100%-32px)/3)]">
                <Check className="w-4 h-4 mb-3" style={{ color: accent }} />
                <p className="text-[14px] text-white/65 leading-relaxed">{avantage}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TARIFS ═══════════ */}
      {partner.pricing && partner.pricing.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-[900px] mx-auto px-5 lg:px-12 text-center">
            <Badge size="lg" className="mb-4">Investissement</Badge>
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-penn-navy mb-3">Frais de scolarité</h2>
            <p className="text-[15px] text-penn-body/50 max-w-[500px] mx-auto mb-12">Tarifs indicatifs pour les programmes de {partner.name}.</p>
            <div className={`grid gap-5 ${partner.pricing.length <= 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
              {partner.pricing.map((card, i) => (
                <motion.div key={card.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.08 }}
                  className={`relative rounded-2xl p-7 text-center shadow-sm border ${card.featured ? "text-white shadow-lg" : "bg-white border-penn-border"}`}
                  style={card.featured ? { backgroundColor: accent, borderColor: accent } : {}}
                >
                  {card.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF9800] text-white text-[11px] font-extrabold px-4 py-1 rounded-full shadow-md uppercase tracking-wider whitespace-nowrap">Recommandé</div>
                  )}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4 ${card.featured ? "bg-white/20" : ""}`} style={card.featured ? {} : { backgroundColor: `${accent}10` }}>
                    <GraduationCap className="w-5 h-5" style={{ color: card.featured ? "white" : accent }} />
                  </div>
                  <p className={`text-[12px] font-bold uppercase tracking-wider mb-2 ${card.featured ? "text-white/60" : "text-penn-body/40"}`}>{card.label}</p>
                  <p className={`text-[28px] font-extrabold leading-none mb-1 ${card.featured ? "text-white" : "text-penn-navy"}`}>{card.amount}<span className={`text-[14px] ${card.featured ? "text-white/50" : "text-penn-body/30"}`}> {card.period}</span></p>
                  {card.note && (
                    <div className={`pt-4 mt-4 border-t ${card.featured ? "border-white/15" : "border-penn-border"}`}>
                      <p className={`text-[12px] ${card.featured ? "text-white/50" : "text-penn-body/40"}`}>{card.note}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ DÉBOUCHÉS ═══════════ */}
      <section className={`section-padding ${partner.pricing ? "bg-penn-bg-light" : "bg-white"}`}>
        <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
          <div className="text-center mb-10">
            <Badge size="lg" className="mb-4">Carrières</Badge>
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-3">Débouchés professionnels</h2>
            <p className="text-[15px] text-penn-body/50 max-w-[500px] mx-auto">Après votre diplôme {partner.name}, en France et à l&apos;international.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-[900px] mx-auto">
            {partner.debouches.map((metier, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.06 }} className="bg-white rounded-xl border border-penn-border p-4 flex items-center gap-3 hover:border-opacity-100 hover:shadow-md transition-all group w-full md:w-[calc(50%-8px)] lg:w-[calc((100%-32px)/3)]"
                style={{ ["--hover-border" as string]: `${accent}30` } as React.CSSProperties}
              >
                <Briefcase className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" style={{ color: accent }} />
                <span className="text-[14px] font-bold text-penn-navy group-hover:opacity-80 transition-colors">{metier}</span>
              </motion.div>
            ))}
          </div>
          {partner.residencyBadge && (
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-white border px-4 py-3.5 rounded-xl shadow-sm" style={{ borderColor: `${accent}30` }}>
                <Home className="w-5 h-5" style={{ color: accent }} />
                <div className="text-left">
                  <p className="text-[14px] font-extrabold text-penn-navy">{partner.residencyBadge.text}</p>
                  <p className="text-[12px] text-penn-body/40">{partner.residencyBadge.sub}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS (UQAT-specific) ═══════════ */}
      {partner.testimonials && partner.testimonials.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-[900px] mx-auto px-5 lg:px-12">
            <div className="text-center mb-10">
              <Badge size="lg" className="mb-4">Témoignages</Badge>
              <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-3">Ils ont fait le choix {partner.name}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partner.testimonials.map((t) => (
                <motion.div key={t.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} className="bg-penn-bg-light rounded-2xl p-6 border border-penn-border/50">
                  <Quote className="w-6 h-6 mb-3" style={{ color: `${accent}20` }} />
                  <p className="text-[14px] text-penn-body/60 leading-relaxed italic mb-5">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0 relative">
                      <Image src={t.photo} alt={t.name} fill sizes="40px" className="object-cover" onError={(e) => { (e.target as HTMLElement).style.display = "none"; }} />
                    </div>
                    <div>
                      <p className="text-[13px] font-extrabold text-penn-navy">{t.name}</p>
                      <p className="text-[11px] text-penn-body/40">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ FORMULAIRE ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[700px] mx-auto px-5 lg:px-12">
          <div className="text-center mb-10">
            <Badge size="lg" className="mb-4">Contact</Badge>
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-3">Intéressé par le partenariat ?</h2>
            <p className="text-[15px] text-penn-body/50 max-w-[480px] mx-auto">Remplissez le formulaire et notre équipe vous contactera.</p>
          </div>
          <AnimatePresence mode="wait">
            {formState === "sent" ? (
              <motion.div key="sent" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl border border-penn-border shadow-sm p-10 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${accent}15` }}><Check className="w-8 h-8" style={{ color: accent }} /></div>
                <h3 className="text-[22px] font-extrabold text-penn-navy mb-2">Message envoyé !</h3>
                <p className="text-penn-body/60 mb-6">Notre équipe vous contactera dans les plus brefs délais.</p>
                <button onClick={() => setFormState("idle")} className="font-bold text-[14px] hover:underline" style={{ color: accent }}>Envoyer un autre message</button>
              </motion.div>
            ) : (
              <motion.form key="form" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleSubmit} className="bg-white rounded-2xl border border-penn-border shadow-sm p-8 space-y-5">
                <input type="hidden" name="_subject" value={`Demande — Partenariat ${partner.name}`} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Prénom *" name="prenom" required />
                  <Field label="Nom *" name="nom" required />
                </div>
                <Field label="Email *" name="email" type="email" required />
                <Field label="Téléphone" name="telephone" type="tel" />
                <div>
                  <label className="block text-[13px] font-bold text-penn-navy mb-2">Programme</label>
                    <select name="programme" className="w-full px-4 py-3 rounded-xl border border-penn-border text-[14px] text-penn-navy bg-white focus:outline-none focus:ring-2 transition-all">
                    {partner.programmes.map((p) => (
                      <option key={p.nom} value={p.nom}>{p.nom}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-penn-navy mb-2">Message</label>
                  <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-penn-border text-[14px] text-penn-navy placeholder:text-penn-body/30 focus:outline-none focus:ring-2 transition-all resize-none" placeholder="Votre message..." />
                </div>
                <button type="submit" disabled={formState === "sending"} className="w-full py-3.5 rounded-xl text-white font-bold text-[14px] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-60" style={{ backgroundColor: accent }}>
                  {formState === "sending" ? "Envoi en cours..." : <><Send className="w-4 h-4" /> Envoyer ma demande</>}
                </button>
                {formState === "error" && <p className="text-[13px] text-red-500 text-center">Une erreur est survenue.</p>}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      <CtaSection
        title={partner.countryCode === "CA" ? "Prêt à étudier au Canada ?" : "Prêt à étudier en France ?"}
        subtitle="Faites le premier pas vers une carrière internationale. Préinscrivez-vous dès maintenant."
        primaryCta={{ label: "Préinscription", href: "/preinscription" }}
        secondaryCta={{ label: "Tous les partenaires", href: "/parcours-international" }}
      />
    </main>
  );
}

/* ──────────────────────────────────────────── */

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[13px] font-bold text-penn-navy mb-2">{label}</label>
      <input type={type} name={name} required={required} className="w-full px-4 py-3 rounded-xl border border-penn-border text-[14px] text-penn-navy placeholder:text-penn-body/30 focus:outline-none focus:border-[#1E88E5] focus:ring-2 focus:ring-[#1E88E5]/10 transition-all" placeholder={label.replace(" *", "")} />
    </div>
  );
}

function ProgramCard({ accent, programme, index, total }: { accent: string; programme: PartnerData["programmes"][number]; index: number; total: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08 }}
      className={`bg-white rounded-2xl border border-penn-border overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col ${
        total === 1
          ? "w-full"
          : total === 2
          ? "w-full lg:w-[calc(50%-12px)]"
          : "w-full md:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]"
      }`}
    >
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${accent}15` }}>
            <Briefcase className="w-5 h-5" style={{ color: accent }} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="flex items-center gap-1.5 text-[12px] font-bold px-2 py-0.5 rounded-full" style={{ color: accent, backgroundColor: `${accent}12` }}>
                <Clock className="w-3 h-3" /> {programme.duree}
              </div>
            </div>
            <h3 className="text-[17px] font-extrabold text-penn-navy leading-snug">{programme.nom}</h3>
          </div>
        </div>
        <p className="text-[14px] text-penn-body/60 leading-relaxed mb-4 line-clamp-3">{programme.details}</p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-[13px] font-bold border transition-all hover:bg-penn-bg-light"
          style={{ color: accent, borderColor: `${accent}20` }}
        >
          {expanded ? "Réduire" : "Voir les détails"}
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
        </button>
      </div>
      <div className={`overflow-hidden transition-all duration-400 ${expanded ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pb-6 border-t border-penn-navy/10 pt-5 space-y-5 bg-gradient-to-b from-penn-navy/[0.02] to-transparent">
          {programme.richExpanded ? (
            programme.richExpanded.map((block, bi) => (
              <div key={bi}>
                {block.extra && (
                  <h4 className="text-[13px] font-extrabold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: accent }}>
                    <div className="w-1 h-4 rounded-full" style={{ backgroundColor: accent }} />
                    {block.extra}
                  </h4>
                )}
                {block.type === "bullets" && block.items && (
                  <div className="space-y-2 bg-white rounded-xl p-4 border border-penn-border/40 shadow-sm">
                    {block.items.map((item, ii) => (
                      <div key={ii} className="flex items-start gap-2.5 text-[13px] text-penn-body/65">
                        <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: accent }} />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
                {block.type === "grid" && block.items && (
                  <div className="grid grid-cols-2 gap-2 bg-white rounded-xl p-4 border border-penn-border/40 shadow-sm">
                    {block.items.map((item, ii) => (
                      <div key={ii} className="flex items-start gap-1.5 text-[13px] text-penn-body/65">
                        <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: accent }} />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
                {block.bourse && (
                  <div className="rounded-xl p-4 border-2 shadow-sm" style={{ borderColor: accent, backgroundColor: `${accent}08` }}>
                    <p className="text-[13px] font-bold mb-1 flex items-center gap-1.5" style={{ color: accent }}>
                      <Sparkles className="w-3.5 h-3.5" /> Bourse d&apos;accueil
                    </p>
                    <p className="text-[13px] text-penn-navy/70 font-medium">{block.bourse}</p>
                  </div>
                )}
                {block.testimonial && (
                  <div className="bg-gradient-to-br from-penn-bg-light to-white rounded-xl p-4 border-2" style={{ borderColor: `${accent}20` }}>
                    <Quote className="w-6 h-6 mb-2" style={{ color: `${accent}15` }} />
                    <p className="text-[13px] text-penn-body/65 leading-relaxed italic mb-3">&ldquo;{block.testimonial.quote}&rdquo;</p>
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 shrink-0 border-2 border-white shadow-sm">
                        <Image src={block.testimonial.photo} alt={block.testimonial.name} fill sizes="36px" className="object-cover" onError={(e) => { (e.target as HTMLElement).style.display = "none"; }} />
                      </div>
                      <div>
                        <p className="text-[12px] font-extrabold text-penn-navy">{block.testimonial.name}</p>
                        <p className="text-[10px] text-penn-body/40">{block.testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                )}
                {block.type === "thesis" && block.thesisProjects && (
                  <div className="space-y-2 bg-white rounded-xl p-4 border border-penn-border/40 shadow-sm">
                    {block.thesisProjects.map((p, pi) => (
                      <div key={pi} className="flex items-start gap-2.5 text-[12px] text-penn-body/55 bg-penn-bg-light border border-penn-border/20 rounded-lg p-2.5">
                        <span className="font-bold shrink-0 px-1.5 py-0.5 rounded text-[11px]" style={{ backgroundColor: `${accent}15`, color: accent }}>{p.year}</span>
                        <div><span className="font-semibold text-penn-navy">{p.author}</span><span className="mx-1">—</span><span>{p.topic}</span></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-[14px] text-penn-body/60 leading-relaxed">{programme.details}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function RichSection({ section, accent, index }: { section: { title: string; body: string }; accent: string; index: number }) {
  const isList = section.body.startsWith("---LISTE");
  const cleanBody = isList ? section.body.replace("---LISTE\n", "") : section.body;

  // Parse links [url|text]
  const parseLinks = (text: string) => {
    const parts = text.split(/(\[https?:\/\/[^\s\]]+\|[^\]]+\])/g);
    return parts.map((part, i) => {
      const match = part.match(/\[(https?:\/\/[^\s\]]+)\|([^\]]+)\]/);
      if (match) {
        return (
          <a key={i} href={match[1]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold hover:underline" style={{ color: accent }}>
            {match[2]} <ArrowRight className="w-3 h-3" />
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  // Parse MSc list items
  const mscItems: { num: string; name: string; campus: string }[] = [];
  if (isList) {
    const lines = cleanBody.split(/\n(?=\d+\.)/).filter((l) => l.trim());
    for (const line of lines) {
      const m = line.match(/^(\d+)\.\s+(.+?)\s+[—–-]\s+(.+)$/);
      if (m) mscItems.push({ num: m[1], name: m[2], campus: m[3] });
    }
  }
  const extraText = isList
    ? cleanBody
        .split(/\n/)
        .filter((l) => !l.match(/^\d+\./))
        .join("\n")
        .trim()
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-penn-border shadow-sm p-8 md:p-10"
    >
      <div className="flex items-center gap-3 mb-6">
        <Badge size="lg" variant="penn-navy">{isList ? "Spécialisations" : "À savoir"}</Badge>
        <div className="flex-1 h-px bg-gradient-to-r from-penn-border to-transparent" />
      </div>
      <h3 className="text-[22px] md:text-[26px] font-extrabold text-penn-navy mb-6">{section.title}</h3>

      {isList && mscItems.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {mscItems.map((item) => (
              <div key={item.num} className="flex items-start gap-3 p-3.5 rounded-xl border border-penn-border/60 hover:border-opacity-100 hover:shadow-sm transition-all"
                style={{ ["--hover-color" as string]: `${accent}20` } as React.CSSProperties}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${accent}15` }}>
                  <span className="text-[12px] font-extrabold" style={{ color: accent }}>{item.num}</span>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-penn-navy leading-snug">{item.name}</p>
                  <p className="text-[12px] text-penn-body/40 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3" style={{ color: accent }} />
                    {item.campus}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {extraText && (
            <div className="text-[14px] text-penn-body/60 leading-relaxed space-y-3 whitespace-pre-line">{parseLinks(extraText)}</div>
          )}
        </>
      )}

      {!isList && (
        <div className="text-[15px] text-penn-body/70 leading-relaxed space-y-4 whitespace-pre-line">{parseLinks(cleanBody)}</div>
      )}
    </motion.div>
  );
}
