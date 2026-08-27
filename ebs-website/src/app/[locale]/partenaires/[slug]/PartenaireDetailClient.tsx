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
  Globe2,
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

// Parse links [url|text] and **bold** text
const parseRichText = (text: string, accent: string) => {
  const parts = text.split(/(\[https?:\/\/[^\s\]]+\|[^\]]+\]|\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    const linkMatch = part.match(/\[(https?:\/\/[^\s\]]+)\|([^\]]+)\]/);
    if (linkMatch) {
      return (
        <a key={i} href={linkMatch[1]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold hover:underline" style={{ color: accent }}>
          {linkMatch[2]} <ArrowRight className="w-3.5 h-3.5" />
        </a>
      );
    }
    const boldMatch = part.match(/\*\*(.*?)\*\*/);
    if (boldMatch) {
      return <strong key={i} className="text-penn-navy font-extrabold">{boldMatch[1]}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
};

function RichTextContent({ text, accent, className = "" }: { text: string; accent: string; className?: string }) {
  if (!text) return null;
  const lines = text.split('\n').filter(l => l.trim() !== "");
  
  return (
    <div className={`space-y-4 ${className}`}>
      {lines.map((line, i) => {
        const isBullet = /^[•-]\s+/.test(line);
        if (isBullet) {
          const cleanLine = line.replace(/^[•-]\s+/, "");
          return (
            <div key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: accent }} />
              <span className="leading-relaxed">{parseRichText(cleanLine, accent)}</span>
            </div>
          );
        }
        return <p key={i} className="leading-relaxed whitespace-pre-wrap">{parseRichText(line, accent)}</p>;
      })}
    </div>
  );
}

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
      <section className="relative pt-40 pb-48 lg:pt-48 lg:pb-56 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {partner.heroImage ? (
            <Image src={partner.heroImage} alt="" fill className="object-cover" priority sizes="100vw" />
          ) : (
            <Image src={fallbackHero} alt="" fill className="object-cover" priority sizes="100vw" />
          )}
        </div>
        <div className="absolute inset-0 z-[1] bg-[#0a1128]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 z-[1] opacity-30 mix-blend-screen" style={{ backgroundImage: `radial-gradient(circle at 70% 30%, ${accent} 0%, transparent 60%)` }} />
        <div className="absolute inset-0 z-[1] opacity-20" style={{ backgroundImage: "url('/noise.png')", backgroundRepeat: "repeat" }} />

        <div className="relative z-10 max-w-[1100px] mx-auto px-5 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
            
            <Badge variant="outline" size="lg" className="mb-10 border-white/15 text-white/90 shadow-sm backdrop-blur-md bg-white/[0.03]">
              <CountryFlag code={partner.countryCode || "CA"} className="w-5 h-3.5 shadow-sm" />
              {partner.country.replace(/^[^\s]+\s/, "")}
            </Badge>

            <div className="flex items-center gap-4 md:gap-6 mb-8">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center p-3 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-white font-extrabold text-[28px] md:text-[36px] tracking-tighter">EBS</span>
              </div>
              
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-white/50 text-[14px] md:text-[16px] font-black">X</span>
              </div>

              {partner.logo ? (
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-3xl bg-white/95 backdrop-blur-xl border border-white flex items-center justify-center p-4 shrink-0 shadow-2xl relative group">
                   <div className="absolute inset-0 rounded-2xl md:rounded-3xl blur-xl opacity-40 -z-10 group-hover:opacity-70 transition-opacity" style={{ backgroundColor: accent }} />
                  <Image src={partner.logo} alt={partner.name} width={100} height={100} className="max-w-full max-h-full object-contain drop-shadow-sm" />
                </div>
              ) : (
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-3xl bg-white/95 backdrop-blur-xl border border-white flex items-center justify-center p-3 shrink-0 shadow-2xl relative group">
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl blur-xl opacity-40 -z-10 group-hover:opacity-70 transition-opacity" style={{ backgroundColor: accent }} />
                  <span className="text-penn-navy font-extrabold text-[16px] text-center leading-tight tracking-tight">{partner.name.substring(0, 8)}</span>
                </div>
              )}
            </div>

            <div className="mb-12">
              <p className="text-[13px] md:text-[15px] text-white/60 font-extrabold uppercase tracking-[0.25em] mb-4">Partenariat Académique d&apos;Excellence</p>
              <h1 className="text-[44px] md:text-[72px] lg:text-[88px] font-black text-transparent bg-clip-text leading-[1.05] tracking-[-0.03em] drop-shadow-sm" style={{ backgroundImage: `linear-gradient(135deg, #ffffff 30%, ${accent} 100%)` }}>
                {partner.name}
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <a href="#admission" className="px-8 py-4 rounded-xl text-white font-extrabold text-[15px] transition-all hover:scale-105 shadow-[0_0_40px_-10px] hover:shadow-[0_0_60px_-10px] backdrop-blur-sm" style={{ backgroundColor: accent, ["--tw-shadow-color" as string]: accent } as React.CSSProperties}>
                 Comment l&apos;intégrer
               </a>
               <a href="#programmes" className="px-8 py-4 rounded-xl text-white/90 font-extrabold text-[15px] transition-all hover:bg-white/10 border border-white/20 backdrop-blur-md">
                 Découvrir les programmes
               </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ═══════════ FLOATING INFOBAR ═══════════ */}
      <div className="relative z-20 max-w-[1000px] mx-auto px-5 lg:px-12 -mt-20 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/90 backdrop-blur-xl border border-white shadow-xl rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12">
           <div className="flex items-center gap-5 w-full md:w-auto">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${accent}15` }}>
                <Globe2 className="w-6 h-6" style={{ color: accent }} />
              </div>
              <div>
                <p className="text-[12px] font-bold text-penn-body/50 uppercase tracking-widest mb-1">Destination</p>
                <p className="text-[16px] font-extrabold text-penn-navy">{partner.country}</p>
              </div>
           </div>
           <div className="hidden md:block w-px h-12 bg-penn-border/60 shrink-0" />
           <div className="flex items-center gap-5 w-full md:w-auto">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${accent}15` }}>
                <Building2 className="w-6 h-6" style={{ color: accent }} />
              </div>
              <div>
                <p className="text-[12px] font-bold text-penn-body/50 uppercase tracking-widest mb-1">Type d&apos;établissement</p>
                <p className="text-[16px] font-extrabold text-penn-navy line-clamp-2 leading-snug">{partner.type}</p>
              </div>
           </div>
           {partner.keyStats?.[0] && (
            <>
              <div className="hidden md:block w-px h-12 bg-penn-border/60 shrink-0" />
              <div className="flex items-center gap-5 w-full md:w-auto">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${accent}15` }}>
                    <Sparkles className="w-6 h-6" style={{ color: accent }} />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-penn-body/50 uppercase tracking-widest mb-1">{partner.keyStats[0].label}</p>
                    <p className="text-[16px] font-extrabold text-penn-navy leading-snug">{partner.keyStats[0].value.split(" • ")[0]}</p>
                  </div>
              </div>
            </>
           )}
        </motion.div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 lg:px-12 py-5 bg-white">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Partenaires", href: "/partenaires" }, { label: partner.name }]} />
      </div>

      {/* ═══════════ PRÉSENTATION + STATS ═══════════ */}
      <section className="relative z-20 py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <Badge size="lg">À propos</Badge>
                <div className="flex-1 h-px bg-gradient-to-r from-penn-border to-transparent" />
              </div>
              <div className="text-[16px] md:text-[17px] text-penn-body/80 leading-relaxed font-medium">
                <RichTextContent text={partner.presentation} accent={accent} />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: 0.1 }} className="lg:col-span-5 space-y-8">
              {partner.imageSection && (
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-penn-border/50 group">
                  <Image src={partner.imageSection.src} alt={partner.imageSection.caption || ""} width={600} height={400} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                  {partner.imageSection.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a2035]/90 via-[#1a2035]/50 to-transparent p-5 pt-12">
                      <div className="flex items-center gap-2.5 text-white"><MapPin className="w-5 h-5" style={{ color: accent }} /><span className="text-[14px] font-bold tracking-wide">{partner.imageSection.caption}</span></div>
                    </div>
                  )}
                </div>
              )}
              
              {partner.keyStats && (
                <div className="bg-penn-bg-light rounded-2xl border border-penn-border/60 p-6 shadow-sm">
                  <h3 className="text-[18px] font-extrabold text-penn-navy mb-5 flex items-center gap-2">
                    <Building2 className="w-5 h-5" style={{ color: accent }} />
                    Fiche d&apos;identité
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {partner.keyStats.map((stat) => (
                      <div key={stat.label} className="bg-white rounded-xl p-4 border border-penn-border/40 shadow-sm flex flex-col justify-start">
                        <p className="text-[11px] font-bold text-penn-body/50 uppercase tracking-widest mb-2">{stat.label}</p>
                        {stat.value.includes(" • ") ? (
                          <div className="flex flex-wrap gap-1.5">
                            {stat.value.split(" • ").map((pill, idx) => (
                              <span key={idx} className="text-[12px] font-bold px-2.5 py-1 rounded-md" style={{ color: accent, backgroundColor: `${accent}15` }}>
                                {pill.trim()}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <p className="text-[14px] font-extrabold text-penn-navy leading-snug break-words">{stat.value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
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
                  <h3 className="text-[18px] md:text-[20px] font-extrabold text-penn-navy mb-3">{acc.label}</h3>
                  <p className="text-[15px] md:text-[16px] text-penn-body/70 leading-relaxed">{acc.description}</p>
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
          <div className={`grid gap-6 items-stretch ${partner.programmes.length === 1 ? "grid-cols-1 max-w-[550px] mx-auto" : partner.programmes.length === 2 ? "grid-cols-1 md:grid-cols-2 lg:max-w-[800px] lg:mx-auto" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
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
      <section className={`section-padding py-24 ${partner.extraSections?.length ? "bg-white" : "bg-penn-bg-light"}`}>
        <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
          <div className="text-center mb-12">
            <Badge size="lg" className="mb-4">Admission</Badge>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-penn-navy mb-4">Conditions d&apos;accès</h2>
            <p className="text-[16px] text-penn-body/60 max-w-[600px] mx-auto">
              Les prérequis et procédures pour intégrer les programmes de {partner.name} via le partenariat EBS.
            </p>
          </div>
          <div className="max-w-[900px] mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-3xl border border-penn-border/60 shadow-lg p-8 md:p-12">
              <RichTextContent 
                text={partner.eligibilite.split('\n').map(l => {
                  const t = l.trim();
                  if (!t) return "";
                  if (t.startsWith('•') || t.startsWith('-')) return t;
                  if (t.endsWith(':')) return `**${t}**`;
                  if (t.endsWith('.')) return t;
                  return `• ${t.replace(/;$/, '')}`;
                }).join('\n')} 
                accent={accent} 
                className="text-[15px] text-penn-body/80 font-medium" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ AVANTAGES ═══════════ */}
      <section className="py-24 bg-[#0a1128] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 50% 0%, ${accent} 0%, transparent 70%)` }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 lg:px-12">
          <div className="text-center mb-16">
            <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white shadow-sm backdrop-blur-md bg-white/5"><Sparkles className="w-3.5 h-3.5" /> Avantages exclusifs</Badge>
            <h2 className="text-[32px] md:text-[44px] font-extrabold text-white mb-4">
              Pourquoi choisir <span style={{ color: accent }}>{partner.name}</span> ?
            </h2>
            <p className="text-[16px] text-white/60 max-w-[600px] mx-auto font-medium">Les bénéfices directs offerts aux étudiants d'ESPIMA Business School.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partner.avantages.map((avantage, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.05 }} className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/[0.2] transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ backgroundColor: `${accent}20` }}>
                  <Check className="w-5 h-5" style={{ color: accent }} />
                </div>
                <p className="text-[15px] text-white/80 leading-relaxed font-medium">{avantage.replace(/^[✓•-]\s*/, "")}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TARIFS ═══════════ */}
      {partner.pricing && partner.pricing.length > 0 && (
        <section className="section-padding bg-penn-bg-light py-24">
          <div className="max-w-[1000px] mx-auto px-5 lg:px-12 text-center">
            <Badge size="lg" className="mb-4">Investissement</Badge>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-penn-navy mb-4">Frais de scolarité</h2>
            <p className="text-[16px] text-penn-body/60 max-w-[600px] mx-auto mb-16">Tarifs indicatifs pour les programmes de {partner.name}.</p>
            <div className={`grid gap-6 items-stretch ${partner.pricing.length === 1 ? "grid-cols-1 max-w-[450px] mx-auto" : partner.pricing.length === 2 ? "grid-cols-1 md:grid-cols-2 max-w-[800px] mx-auto" : "grid-cols-1 md:grid-cols-3"}`}>
              {partner.pricing.map((card, i) => (
                <motion.div key={card.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.08 }}
                  className={`relative rounded-3xl p-8 text-center shadow-lg border transition-transform hover:-translate-y-1 ${card.featured ? "text-white" : "bg-white border-penn-border/60"}`}
                  style={card.featured ? { backgroundColor: accent, borderColor: accent } : {}}
                >
                  {card.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF9800] text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider whitespace-nowrap">Recommandé</div>
                  )}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5 ${card.featured ? "bg-white/20" : ""}`} style={card.featured ? {} : { backgroundColor: `${accent}15` }}>
                    <GraduationCap className="w-5 h-5" style={{ color: card.featured ? "white" : accent }} />
                  </div>
                  <p className={`text-[13px] font-bold uppercase tracking-widest mb-3 ${card.featured ? "text-white/70" : "text-penn-body/50"}`}>{card.label}</p>
                  <p className={`text-[32px] font-extrabold leading-none mb-2 ${card.featured ? "text-white" : "text-penn-navy"}`}>{card.amount}<span className={`text-[15px] font-bold ${card.featured ? "text-white/60" : "text-penn-body/40"}`}> {card.period}</span></p>
                  {card.note && (
                    <div className={`pt-5 mt-5 border-t ${card.featured ? "border-white/20" : "border-penn-border/60"}`}>
                      <p className={`text-[14px] font-medium ${card.featured ? "text-white/70" : "text-penn-body/60"}`}>{card.note}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ DÉBOUCHÉS ═══════════ */}
      {(partner.debouches?.length > 0 || partner.residencyBadge) && (
        <section className={`section-padding py-24 ${partner.pricing ? "bg-penn-bg-light" : "bg-white"}`}>
          <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
            {partner.debouches?.length > 0 && (
              <>
                <div className="text-center mb-12">
                  <Badge size="lg" className="mb-4">Carrières</Badge>
                  <h2 className="text-[32px] md:text-[40px] font-extrabold text-penn-navy mb-4">Débouchés professionnels</h2>
                  <p className="text-[16px] text-penn-body/60 max-w-[600px] mx-auto">Après votre diplôme {partner.name}, en France et à l&apos;international.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 max-w-[900px] mx-auto">
                  {partner.debouches.map((metier, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.06 }} className="bg-white rounded-xl border border-penn-border/60 p-4 flex items-center gap-4 hover:shadow-md transition-all group w-full md:w-[calc(50%-8px)] lg:w-[calc((100%-32px)/3)]"
                      style={{ ["--hover-border" as string]: `${accent}40` } as React.CSSProperties}
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${accent}15` }}>
                        <Briefcase className="w-4 h-4" style={{ color: accent }} />
                      </div>
                      <span className="text-[14px] font-bold text-penn-navy group-hover:text-penn-navy/80 transition-colors leading-snug">{metier}</span>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
            {partner.residencyBadge && (
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} className={`text-center ${partner.debouches?.length > 0 ? "mt-12" : ""}`}>
                <div className="inline-flex items-center gap-4 bg-white border px-6 py-5 rounded-2xl shadow-sm" style={{ borderColor: `${accent}30` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${accent}15` }}>
                    <Home className="w-5 h-5" style={{ color: accent }} />
                  </div>
                  <div className="text-left">
                    <p className="text-[15px] font-extrabold text-penn-navy leading-snug mb-0.5">{partner.residencyBadge.text}</p>
                    <p className="text-[13px] font-medium text-penn-body/60">{partner.residencyBadge.sub}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      )}

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
      className={`bg-white rounded-3xl border border-penn-border/60 overflow-hidden shadow-sm hover:shadow-lg hover:border-penn-border transition-all flex flex-col h-full`}
    >
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${accent}15` }}>
            <Briefcase className="w-5 h-5" style={{ color: accent }} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1.5 text-[12px] font-bold px-2.5 py-1 rounded-md" style={{ color: accent, backgroundColor: `${accent}12` }}>
                <Clock className="w-3.5 h-3.5" /> {programme.duree}
              </div>
            </div>
            <h3 className="text-[18px] md:text-[20px] font-extrabold text-penn-navy leading-snug">{programme.nom}</h3>
          </div>
        </div>
        <p className="text-[15px] text-penn-body/70 font-medium leading-relaxed mb-6 line-clamp-3">{programme.details}</p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[14px] font-bold border transition-all hover:bg-penn-bg-light mt-auto"
          style={{ color: accent, borderColor: `${accent}25` }}
        >
          {expanded ? "Réduire" : "Voir les détails"}
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
        </button>
      </div>
      <div className={`overflow-hidden transition-all duration-400 ${expanded ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-8 pb-8 border-t border-penn-border/30 pt-6 space-y-6 bg-gradient-to-b from-penn-navy/[0.01] to-transparent">
          {programme.richExpanded ? (
            programme.richExpanded.map((block, bi) => (
              <div key={bi}>
                {block.extra && (
                  <h4 className="text-[14px] font-extrabold uppercase tracking-widest mb-4 flex items-center gap-2" style={{ color: accent }}>
                    <div className="w-1.5 h-4 rounded-full" style={{ backgroundColor: accent }} />
                    {block.extra}
                  </h4>
                )}
                {block.type === "bullets" && block.items && (
                  <div className="space-y-3 bg-white rounded-2xl p-5 border border-penn-border/40 shadow-sm">
                    {block.items.map((item, ii) => (
                      <div key={ii} className="flex items-start gap-3 text-[14px] font-medium text-penn-body/80">
                        <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: accent }} />
                        <span className="leading-relaxed">{parseRichText(item.replace(/^[•-]\s+/, ""), accent)}</span>
                      </div>
                    ))}
                  </div>
                )}
                {block.type === "grid" && block.items && (
                  <div className="grid grid-cols-2 gap-3 bg-white rounded-2xl p-5 border border-penn-border/40 shadow-sm">
                    {block.items.map((item, ii) => (
                      <div key={ii} className="flex items-start gap-2 text-[14px] font-medium text-penn-body/80">
                        <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: accent }} />
                        <span className="leading-relaxed">{parseRichText(item.replace(/^[•-]\s+/, ""), accent)}</span>
                      </div>
                    ))}
                  </div>
                )}
                {block.bourse && (
                  <div className="rounded-2xl p-5 border-2 shadow-sm" style={{ borderColor: accent, backgroundColor: `${accent}08` }}>
                    <p className="text-[14px] font-extrabold mb-1.5 flex items-center gap-2" style={{ color: accent }}>
                      <Sparkles className="w-4 h-4" /> Bourse d&apos;accueil
                    </p>
                    <p className="text-[14px] text-penn-navy/80 font-medium leading-relaxed">{block.bourse}</p>
                  </div>
                )}
                {block.testimonial && (
                  <div className="bg-gradient-to-br from-penn-bg-light to-white rounded-2xl p-6 border-2" style={{ borderColor: `${accent}20` }}>
                    <Quote className="w-6 h-6 mb-3" style={{ color: `${accent}15` }} />
                    <p className="text-[14px] text-penn-body/80 font-medium leading-relaxed italic mb-4">&ldquo;{block.testimonial.quote}&rdquo;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0 border-2 border-white shadow-sm relative">
                        <Image src={block.testimonial.photo} alt={block.testimonial.name} fill sizes="40px" className="object-cover" onError={(e) => { (e.target as HTMLElement).style.display = "none"; }} />
                      </div>
                      <div>
                        <p className="text-[13px] font-extrabold text-penn-navy">{block.testimonial.name}</p>
                        <p className="text-[11px] text-penn-body/50 font-bold uppercase tracking-wider">{block.testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                )}
                {block.type === "thesis" && block.thesisProjects && (
                  <div className="space-y-3 bg-white rounded-2xl p-5 border border-penn-border/40 shadow-sm">
                    {block.thesisProjects.map((p, pi) => (
                      <div key={pi} className="flex items-start gap-3 text-[13px] font-medium text-penn-body/70 bg-penn-bg-light border border-penn-border/30 rounded-xl p-3">
                        <span className="font-extrabold shrink-0 px-2 py-1 rounded-md text-[12px]" style={{ backgroundColor: `${accent}15`, color: accent }}>{p.year}</span>
                        <div className="leading-relaxed"><span className="font-extrabold text-penn-navy">{p.author}</span><span className="mx-1.5 text-penn-border">—</span><span>{p.topic}</span></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <RichTextContent text={programme.details} accent={accent} className="text-[14px] text-penn-body/80 font-medium" />
          )}
        </div>
      </div>
    </motion.div>
  );
}

function RichSection({ section, accent, index }: { section: { title: string; body: string }; accent: string; index: number }) {
  const isList = section.body.startsWith("---LISTE");
  const cleanBody = isList ? section.body.replace("---LISTE\n", "") : section.body;

  // Parse MSc list items (legacy format)
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
      className="bg-white rounded-3xl border border-penn-border/60 shadow-lg p-8 md:p-12"
    >
      <div className="flex items-center gap-3 mb-8">
        <Badge size="lg" variant="penn-navy">{isList ? "Spécialisations" : "À savoir"}</Badge>
        <div className="flex-1 h-px bg-gradient-to-r from-penn-border to-transparent" />
      </div>
      <h3 className="text-[24px] md:text-[30px] font-extrabold text-penn-navy mb-8">{section.title}</h3>

      {isList && mscItems.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {mscItems.map((item) => (
              <div key={item.num} className="flex items-start gap-4 p-5 rounded-2xl border border-penn-border/60 hover:shadow-md transition-all group"
                style={{ ["--hover-border" as string]: `${accent}30` } as React.CSSProperties}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${accent}15` }}>
                  <span className="text-[14px] font-extrabold" style={{ color: accent }}>{item.num}</span>
                </div>
                <div>
                  <p className="text-[16px] font-extrabold text-penn-navy leading-snug mb-1">{item.name}</p>
                  <p className="text-[13px] text-penn-body/60 font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" style={{ color: accent }} />
                    {item.campus}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {extraText && <RichTextContent text={extraText} accent={accent} className="text-[15px] text-penn-body/80 font-medium" />}
        </>
      )}

      {!isList && (
        <div className="text-[15px] md:text-[16px] text-penn-body/80 font-medium">
          <RichTextContent text={cleanBody} accent={accent} />
        </div>
      )}
    </motion.div>
  );
}
