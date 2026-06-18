"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Award, ArrowDown, Search, Users } from "lucide-react";
import { Badge, CtaSection } from "@/components/shared";

type Domain = "Tous" | "Management" | "Marketing" | "Finance" | "Informatique" | "IA" | "International";

const domains: Domain[] = ["Tous", "Management", "Marketing", "Finance", "Informatique", "IA", "International"];

interface Teacher {
  id: number;
  name: string;
  title: string;
  domain: Domain;
  certifications: string[];
  bio: string;
  initials: string;
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Dr. Sami BELHADJ",
    title: "Maître de Conférences",
    domain: "Management",
    certifications: ["Google Project Management", "PMI PMP®", "Scrum Master"],
    bio: "15 ans d'expérience en direction de projets dans le secteur bancaire tunisien. Ancien Directeur de Programme chez Amen Bank.",
    initials: "SB",
  },
  {
    id: 2,
    name: "Dr. Leïla MANSOUR",
    title: "Experte en Marketing Digital",
    domain: "Marketing",
    certifications: ["Google Digital Marketing", "HubSpot Inbound", "GA4 Certified"],
    bio: "Fondatrice d'une agence de marketing digital à Tunis. A piloté des campagnes pour des marques internationales en Afrique du Nord.",
    initials: "LM",
  },
  {
    id: 3,
    name: "Dr. Karim ZAGHOUANI",
    title: "Professeur de Finance",
    domain: "Finance",
    certifications: ["Bloomberg BMC", "CFA Level III", "Financial Modeling"],
    bio: "Ancien trader chez Société Générale Paris. Spécialiste en marchés financiers et ingénierie des produits dérivés.",
    initials: "KZ",
  },
  {
    id: 4,
    name: "Dr. Amel JRAD",
    title: "Experte en IA & Data Science",
    domain: "IA",
    certifications: ["Google AI Professional", "IBM Data Science", "DeepLearning.AI ML"],
    bio: "Chercheuse en machine learning appliqué. A contribué à des projets d'IA pour le secteur de la santé en Tunisie.",
    initials: "AJ",
  },
  {
    id: 5,
    name: "Ing. Mohamed CHERIF",
    title: "Expert en Cybersécurité",
    domain: "Informatique",
    certifications: ["Cisco CyberOps", "Fortinet NSE 4", "CEH Certified"],
    bio: "Consultant en sécurité informatique pour des institutions gouvernementales. 12 ans d'expérience en sécurité offensive.",
    initials: "MC",
  },
  {
    id: 6,
    name: "Dr. Nadia BOUZID",
    title: "Maître de Conférences",
    domain: "International",
    certifications: ["Cambridge CELTA", "TOEIC Trainer", "Cross-Cultural Management"],
    bio: "Spécialiste en commerce international et management interculturel. A enseigné en France, au Canada et en Tunisie.",
    initials: "NB",
  },
  {
    id: 7,
    name: "Dr. Hichem TRABELSI",
    title: "Professeur de Stratégie",
    domain: "Management",
    certifications: ["BCG Strategy (Forage)", "McKinsey Forward", "Lean Six Sigma"],
    bio: "Consultant en stratégie auprès de PME tunisiennes. Doctorat en sciences de gestion de l'Université Paris-Dauphine.",
    initials: "HT",
  },
  {
    id: 8,
    name: "Mme. Salma DRIDI",
    title: "Experte en Marketing",
    domain: "Marketing",
    certifications: ["SEMrush SEO", "LinkedIn Marketing", "Google Ads Certified"],
    bio: "Responsable marketing digital chez un groupe international à Tunis. Spécialiste SEO/SEA et growth hacking.",
    initials: "SD",
  },
  {
    id: 9,
    name: "Dr. Youssef MEKKI",
    title: "Expert en Finance Quantitative",
    domain: "Finance",
    certifications: ["Bloomberg ESG", "Python for Finance", "Risk Management"],
    bio: "Analyste quantitatif dans un fonds d'investissement. Doctorat en mathématiques appliquées à la finance.",
    initials: "YM",
  },
];

export default function CorpsEnseignantPage() {
  const [filter, setFilter] = useState<Domain>("Tous");
  const [search, setSearch] = useState("");

  const filtered = teachers.filter((t) => {
    const matchesDomain = filter === "Tous" || t.domain === filter;
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase())
      || t.title.toLowerCase().includes(search.toLowerCase())
      || t.domain.toLowerCase().includes(search.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-40 pb-24 overflow-hidden">
                {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/heroes/hero-corps-enseignant.jpg" alt="" fill className="object-cover" priority />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/50 via-[#1a2035]/50 to-penn-navy/50" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_30%_60%,_#2B8FAB_0%,_transparent_50%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
<div className="max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" size="lg" className="mb-8 border-white/20 text-white/80">
                <div className="w-1 h-1 rounded-full bg-[#2B8FAB]" />
                Corps Enseignant
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[40px] md:text-[52px] lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
            >
              Un corps enseignant d&apos;excellence,
              <br />
              <span className="text-[#2B8FAB]">entre académie et entreprise</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[17px] md:text-[19px] text-white/60 leading-relaxed max-w-[550px]"
            >
              Nos enseignants allient rigueur académique et expérience professionnelle concrète. Ils connaissent les réalités du marché parce qu&apos;ils en font partie.
            </motion.p>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-16"
          >
            {[
              { value: "50+", label: "Enseignants" },
              { value: "60+", label: "Domaines d'expertise" },
              { value: "80%", label: "Issus du monde professionnel" },
            ].map((s) => (
              <div key={s.label} className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 text-center w-[calc(50%-8px)] md:w-[calc((100%-32px)/3)]">
                <p className="text-[28px] md:text-[36px] font-extrabold text-white leading-none mb-1">{s.value}</p>
                <p className="text-[13px] text-white/40 font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10"
          >
            <ArrowDown className="w-5 h-5 text-white/20 animate-bounce mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════ TEACHER GRID ═══════════ */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          {/* Filter + Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12"
          >
            {/* Domain pills */}
            <div className="flex flex-wrap gap-2">
              {domains.map((d) => (
                <button
                  key={d}
                  onClick={() => setFilter(d)}
                  className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-200 ${
                    filter === d
                      ? "bg-penn-navy text-white shadow-md"
                      : "bg-white text-penn-body border border-penn-border hover:border-penn-navy hover:text-penn-navy"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-penn-body/40" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-penn-border rounded-xl text-[14px] text-penn-navy placeholder:text-penn-body/40 outline-none focus:border-[#2B8FAB] transition-colors"
              />
            </div>
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((teacher, i) => (
                <motion.div
                  key={teacher.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group bg-white rounded-2xl border border-penn-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Top color bar */}
                  <div className="h-1.5 bg-gradient-to-r from-[#2B8FAB] to-[#2B8FAB]/30" />

                  <div className="p-6">
                    {/* Photo + Name row */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2B8FAB]/10 to-[#2B8FAB]/5 flex items-center justify-center shrink-0 text-[#2B8FAB] font-extrabold text-[20px] border border-[#2B8FAB]/10">
                        {teacher.initials}
                      </div>
                      <div className="min-w-0 pt-1">
                        <h3 className="text-[17px] font-extrabold text-penn-navy leading-tight group-hover:text-[#2B8FAB] transition-colors">
                          {teacher.name}
                        </h3>
                        <p className="text-[13px] text-penn-body/60 font-medium mt-0.5">{teacher.title}</p>
                      </div>
                    </div>

                    {/* Domain badge */}
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-[#2B8FAB]/5 text-[#2B8FAB] mb-3">
                      {teacher.domain}
                    </span>

                    {/* Bio */}
                    <p className="text-[14px] text-penn-body leading-relaxed mb-4 line-clamp-3">
                      {teacher.bio}
                    </p>

                    {/* Certifications */}
                    <div className="pt-4 border-t border-penn-border">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Award className="w-3.5 h-3.5 text-[#2B8FAB]/60" />
                        <span className="text-[11px] font-bold text-penn-body/50 uppercase tracking-wide">Certifications</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {teacher.certifications.map((cert) => (
                          <span key={cert} className="text-[11px] font-medium bg-penn-bg-light px-2 py-0.5 rounded-md text-penn-navy/70">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="col-span-full text-center py-20">
                <Users className="w-12 h-12 text-penn-border mx-auto mb-4" />
                <p className="text-[17px] text-penn-body font-medium">Aucun enseignant trouvé.</p>
                <button
                  onClick={() => { setFilter("Tous"); setSearch(""); }}
                  className="mt-4 text-[14px] font-bold text-[#2B8FAB] hover:underline"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <CtaSection
        title="Vous souhaitez rejoindre notre équipe enseignante ?"
        subtitle="EBS recrute des professionnels passionnés pour transmettre leur expertise aux leaders de demain."
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
