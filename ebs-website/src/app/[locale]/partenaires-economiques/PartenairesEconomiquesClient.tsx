"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  Award,
  Brain,
  Briefcase,
  Building2,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Globe,
  GraduationCap,
  Handshake,
  Lightbulb,
  Mail,
  Phone,
  Rocket,
  Search,
  Send,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Badge, CtaSection } from "@/components/shared";
import { siteConfig } from "@/lib/config";

// ── Data ──────────────────────────────────────────

const avantagesEntreprise = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Talents Certifiés",
    desc: "Vos futurs collaborateurs sont certifiés par Google, IBM, Harvard, Bloomberg, Cisco et d'autres leaders internationaux avant même l'obtention de leur diplôme.",
    color: "#2B8FAB",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Opérationnels Rapidement",
    desc: "Pédagogie par projets, simulations professionnelles Forage et études de cas réels permettent à nos étudiants de s'intégrer rapidement en entreprise.",
    color: "#2196F3",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "IA-Native",
    desc: "Tous nos étudiants développent des compétences en IA générative, prompting et automatisation, désormais essentielles dans tous les métiers.",
    color: "#9C27B0",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Bilingues & Internationaux",
    desc: "Anglais professionnel, partenariats internationaux et ouverture multiculturelle les préparent à évoluer dans des environnements internationaux.",
    color: "#FF9800",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Recrutement Sans Risque",
    desc: "Accueillez nos étudiants en stage de longue durée pour évaluer leurs compétences et préparer leur future intégration dans votre entreprise.",
    color: "#E91E8C",
  },
];

const typesCollaboration = [
  {
    icon: <Calendar className="w-7 h-7" />,
    title: "Stage",
    desc: "Des stagiaires motivés et opérationnels pour accompagner vos projets, quelle que soit votre activité.",
    badge: "Le plus demandé",
    color: "#2B8FAB",
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: "Immersion en entreprise",
    desc: "Accueillez un étudiant en stage de longue durée, 3 à 4 jours par semaine dans votre entreprise, tout en poursuivant sa formation à EBS.",
    color: "#2196F3",
  },
  {
    icon: <Search className="w-7 h-7" />,
    title: "Recrutement",
    desc: "Accès privilégié à notre réseau de diplômés certifiés, avec un accompagnement personnalisé selon vos besoins.",
    color: "#9C27B0",
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: "Projet Réel",
    desc: "Confiez un projet à une équipe d'étudiants encadrée par nos enseignants et bénéficiez de solutions concrètes.",
    color: "#FF9800",
  },
];

const profilDiplomes = [
  {
    icon: <Award className="w-5 h-5" />,
    text: "Multi-certifié : Google, IBM, Harvard, Bloomberg, Cisco, HubSpot, PMI, ScrumStudy et plus de 15 autres organismes internationaux.",
    color: "#2B8FAB",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    text: "Maîtrise de l'IA : prompting, agents IA, automatisation et analyse de données augmentée appliqués à son métier.",
    color: "#9C27B0",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    text: "Expérience pratique : simulations Forage (BCG, Goldman Sachs, JP Morgan, Mastercard, PwC, KPMG, EY) et projets concrets.",
    color: "#E91E8C",
  },
  {
    icon: <Check className="w-5 h-5" />,
    text: "Rapidement opérationnel grâce à une pédagogie par projets, des études de cas et la maîtrise des outils professionnels.",
    color: "#2196F3",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    text: "Profil international : anglais professionnel, expérience multiculturelle et partenariats académiques internationaux.",
    color: "#FF9800",
  },
];

const steps = [
  { step: "01", title: "Exprimez votre Intérêt", desc: "Remplissez le formulaire avec les informations de votre entreprise et vos besoins." },
  { step: "02", title: "Nous Échangeons", desc: "Notre équipe vous contacte pour comprendre vos objectifs et définir le cadre." },
  { step: "03", title: "Convention Signée", desc: "Nous formalisons le partenariat et lançons les premières actions." },
];

const existingPartners = [
  {
    name: "ASTEELFLASH",
    sector: "Fabrication Électronique",
    desc: "Leader mondial de la sous-traitance électronique (EMS) avec 18 usines sur 4 continents. Spécialiste de l'ingénierie haut de gamme, du prototypage à la production de masse pour l'aérospatiale, l'automobile, le médical et l'IoT.",
    logo: "/images/partenaires/asteelflash.webp",
  },
  {
    name: "Sopra HR",
    sector: "Solutions RH",
    desc: "Filiale du groupe Sopra Steria, leader européen des solutions digitales RH. Paie, gestion des talents, analytics et IA au service de la transformation RH des grandes organisations.",
    logo: "/images/partenaires/soprahr.webp",
  },
  {
    name: "ATB",
    sector: "Banque",
    desc: "L'Arab Tunisian Bank, acteur majeur du secteur bancaire tunisien, accompagne particuliers, professionnels et entreprises avec une gamme complète de services financiers et digitaux.",
    logo: "/images/partenaires/atb.webp",
  },
  {
    name: "Audita",
    sector: "Audit & Conseil",
    desc: "Cabinet tunisien de référence en audit, expertise comptable et conseil aux entreprises. Accompagnement stratégique pour la croissance et la conformité des organisations.",
    logo: "/images/partenaires/audita.webp",
  },
  {
    name: "Satem",
    sector: "Assurances",
    desc: "Compagnie d'assurances tunisienne offrant des solutions complètes en assurance automobile, habitation, santé et risques professionnels pour les particuliers et les entreprises.",
    logo: "/images/partenaires/satem.webp",
  },
  {
    name: "Cayon",
    sector: "Industrie",
    desc: "Groupe industriel tunisien spécialisé dans la fabrication et la distribution de solutions techniques pour les secteurs du bâtiment, de l'énergie et de l'infrastructure.",
    logo: "/images/partenaires/cayon.webp",
  },
  {
    name: "Yperyon",
    sector: "Agence Digitale",
    desc: "Agence de marketing digital basée aux Berges du Lac, experte en SEO, lead generation, design UI/UX, inbound marketing et marketing d'influence. +82 influenceurs représentés.",
    logo: "/images/partenaires/yperyon.webp",
  },
  {
    name: "Smart Future",
    sector: "Technologies",
    desc: "Entreprise technologique tunisienne spécialisée dans les solutions IT innovantes, le développement logiciel et la transformation digitale des organisations.",
    logo: "/images/partenaires/smartfuture.webp",
  },
  {
    name: "Médianet",
    sector: "Médias & Communication",
    desc: "Acteur majeur des médias et de la communication en Tunisie, offrant des solutions de visibilité et de stratégie de marque pour les entreprises.",
    logo: "/images/partenaires/medianet.webp",
  },
  {
    name: "Unifactor",
    sector: "Services Financiers",
    desc: "Spécialiste tunisien des services financiers, proposant des solutions d'affacturage et de financement pour optimiser la trésorerie des entreprises.",
    logo: "/images/partenaires/unifactor.webp",
  },
  {
    name: "ARFORGHE",
    sector: "Formation & RH",
    desc: "Association des Responsables de Formation et de Gestion Humaine en Entreprises, fondée en 1976 à Tunis. Réseau professionnel de référence pour les décideurs RH en Tunisie.",
    logo: "/images/partenaires/arforghe.webp",
  },
];

// ── Field Helper ──────────────────────────────────

function Field({ label, name, type = "text", placeholder, icon, required }: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  icon?: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[12px] font-bold uppercase tracking-wider text-penn-body/40 mb-2">{label}</label>
      <div className="relative">
        {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-penn-body/25">{icon}</div>}
        <input
          type={type}
          name={name}
          required={required}
          className={`w-full py-3 rounded-xl border-2 border-penn-border/30 text-[14px] font-medium text-penn-navy placeholder:text-penn-body/20 focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all ${icon ? "pl-11 pr-4" : "px-4"}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────

export default function PartenairesEconomiquesPage() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [selectedType, setSelectedType] = useState("stages");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    try {
      await fetch(siteConfig.webhookUrl, {
        method: "POST",
        body: (() => { const fd = new FormData(e.currentTarget); fd.append('formId', 'partenaires_economiques'); return fd; })(),
        headers: { Accept: "application/json" },
      });
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  };

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroes/hero-campus.webp"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/55 via-[#1a2035]/50 to-penn-navy/55" />
        <div
          className="absolute inset-0 z-[1] opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #2B8FAB 0%, transparent 60%), radial-gradient(circle at 70% 20%, #2B8FAB 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(43,143,171,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">
              Recrutement · Stage · Alternance · Partenariat
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[42px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
          >
            Recrutez les talents
            <br />
            <span className="text-[#2B8FAB]">de demain</span>, aujourd&apos;hui<span className="text-[#2B8FAB]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[17px] md:text-[19px] text-white/70 leading-relaxed max-w-[700px] mb-12"
          >
            EBS forme des diplômés répondant aux attentes des entreprises : certifiés, bilingues, maîtrisant l'Intelligence Artificielle et rapidement opérationnels. Vos futurs collaborateurs sont chez nous.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">90 %+</p>
              <p className="text-[12px] text-white/50 font-medium">Taux d&apos;insertion</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-[#2B8FAB] leading-none mb-1">150+</p>
              <p className="text-[12px] text-white/50 font-medium">Certifications internationales proposées</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">8</p>
              <p className="text-[12px] text-white/50 font-medium">Filières ouvertes</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <GraduationCap className="w-10 h-10 md:w-14 md:h-14 text-[#2B8FAB] mx-auto mb-1" />
              <p className="text-[12px] text-white/50 font-medium">Rentrée 2026-2027</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="relative z-20 -mt-14 pb-0">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <div className="bg-white rounded-2xl border border-penn-border shadow-xl overflow-hidden">
            <div className="grid grid-cols-3 divide-x divide-penn-border/40">
              {[
                { value: "12", label: "Partenaires stratégiques", icon: <Building2 className="w-5 h-5" />, color: "#2B8FAB" },
                { value: "90% +", label: "Insertion professionnelle", icon: <TrendingUp className="w-5 h-5" />, color: "#2196F3" },
                { value: "10+", label: "Secteurs représentés", icon: <Briefcase className="w-5 h-5" />, color: "#FF9800" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col items-center justify-center py-7 px-4 text-center"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${stat.color}15` }}>
                    <span style={{ color: stat.color }}>{stat.icon}</span>
                  </div>
                  <p className="text-[26px] font-extrabold text-penn-navy leading-none mb-1">{stat.value}</p>
                  <p className="text-[11px] font-semibold text-penn-body/40 uppercase tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ NOS PARTENAIRES ÉCONOMIQUES ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <Badge variant="default" size="lg" className="mb-4">Ils nous font confiance</Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15] mb-4">
              Nos partenaires économiques
            </h2>
            <p className="text-[16px] text-penn-body/60 max-w-[620px] mx-auto">
              Un écosystème d&apos;entreprises leaders qui recrutent nos talents,
              proposent des stages et collaborent sur des projets concrets.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-5 lg:gap-6">
            {existingPartners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group bg-white rounded-2xl border border-penn-border p-6 lg:p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col w-full sm:w-[calc(50%-10px)] lg:w-[calc((100%-48px)/3)]"
              >
                <div className="h-20 flex items-center mb-5">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={56}
                    className="max-h-14 max-w-[160px] object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-[16px] font-extrabold text-penn-navy mb-1.5 group-hover:text-[#2B8FAB] transition-colors">
                    {partner.name}
                  </h4>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#2B8FAB] bg-[#2B8FAB]/8 px-2.5 py-1 rounded-full mb-3">
                    {partner.sector}
                  </span>
                  <p className="text-[13px] text-penn-body/55 leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ POURQUOI RECRUTER CHEZ EBS ═══════════ */}
      <section className="section-padding bg-white pt-16">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">Pourquoi EBS ?</Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              5 bonnes raisons de recruter chez nous
            </h2>
            <p className="text-[16px] text-penn-body mt-3 max-w-[650px] mx-auto">
              Un diplômé EBS n&apos;est pas un étudiant comme les autres.
              C&apos;est un talent déjà certifié, déjà formé, déjà prêt.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative hidden md:block aspect-square lg:aspect-auto lg:h-[650px]"
            >
              <div className="absolute top-0 left-0 w-[60%] h-[55%] rounded-2xl overflow-hidden border-4 border-white shadow-xl z-20">
                <Image src="/images/partenaires/corporate-1.jpg" alt="Recrutement stagiaires EBS" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
              </div>
              <div className="absolute bottom-5 right-0 w-[65%] h-[50%] rounded-2xl overflow-hidden border-4 border-white shadow-xl z-30">
                <Image src="/images/partenaires/corporate-2.jpg" alt="Étudiants EBS en entreprise" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
              </div>
              <div className="absolute top-[20%] right-[10%] w-[50%] h-[40%] rounded-2xl overflow-hidden border-4 border-white shadow-lg z-10 opacity-70">
                <Image src="/images/partenaires/corporate-3.jpg" alt="Collaboration d'équipe" fill className="object-cover" sizes="(max-width: 1024px) 33vw, 20vw" />
              </div>
            </motion.div>

            {/* Features List */}
            <div className="flex flex-col gap-4">
              {avantagesEntreprise.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex gap-4 bg-white rounded-2xl border border-penn-border p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <span style={{ color: item.color }}>{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-extrabold text-penn-navy mb-1">{item.title}</h3>
                    <p className="text-[13px] text-penn-body leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TYPES DE COLLABORATION ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">Collaborer avec EBS</Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Quatre façons de travailler avec nos talents
            </h2>
            <p className="text-[16px] text-penn-body mt-3 max-w-[650px] mx-auto">
              Chaque entreprise a des besoins différents. Choisissez le format qui vous correspond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {typesCollaboration.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group bg-white rounded-2xl border border-penn-border p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${type.color}12` }}
                  >
                    <span style={{ color: type.color }}>{type.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-[20px] font-extrabold text-penn-navy">{type.title}</h3>
                      {type.badge && (
                        <span className="text-[11px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full" style={{ backgroundColor: `${type.color}15`, color: type.color }}>
                          {type.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[14px] text-penn-body leading-relaxed">{type.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROFIL DU DIPLÔMÉ ═══════════ */}
      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #2B8FAB 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(43,143,171,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-[900px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="outline" size="lg" className="mb-4 border-white/20 text-white/80">Profil type</Badge>
            <h2 className="text-[34px] md:text-[48px] font-extrabold text-white leading-[1.1]">
              Le profil du diplômé EBS
            </h2>
            <p className="text-[16px] text-white/50 mt-3 max-w-[600px] mx-auto">
              Voici ce que vous obtenez quand vous recrutez un talent formé chez nous.
            </p>
          </motion.div>

          <div className="space-y-4">
            {profilDiplomes.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 lg:p-6 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}1A` }}
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                </div>
                <p className="text-[15px] text-white/70 leading-relaxed mt-1.5">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COMMENT DEVENIR PARTENAIRE ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <Badge size="lg" className="mb-4">Processus</Badge>
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-penn-navy mb-3">
              Comment devenir partenaire ?
            </h2>
            <p className="text-[15px] text-penn-body/50 max-w-[500px] mx-auto">
              Un processus simple en 3 étapes pour rejoindre notre réseau.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white rounded-2xl border border-penn-border/60 p-6 text-center hover:shadow-lg hover:border-[#2B8FAB]/30 transition-all group"
              >
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-penn-border/30 z-0">
                    <div className="absolute right-0 -top-1 w-2 h-2 border-t-2 border-r-2 border-penn-border/30 rotate-45" />
                  </div>
                )}
                <div className="w-12 h-12 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2B8FAB]/20 transition-colors">
                  <span className="text-[16px] font-extrabold text-[#2B8FAB]">{s.step}</span>
                </div>
                <h4 className="text-[15px] font-extrabold text-penn-navy mb-2">{s.title}</h4>
                <p className="text-[13px] text-penn-body/55 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FORMULAIRE DE PARTENARIAT ═══════════ */}
      <section id="formulaire-partenariat" className="section-padding bg-white">
        <div className="max-w-[800px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-10"
          >
            <Badge size="lg" className="mb-4">Devenir Partenaire</Badge>
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-3">
              Formulaire de partenariat
            </h2>
            <p className="text-[15px] text-penn-body/50 max-w-[480px] mx-auto">
              Remplissez ce formulaire et notre équipe vous contactera sous 48h.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="bg-white rounded-2xl border border-penn-border shadow-lg overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formState === "sent" ? (
                <motion.div key="sent" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-16 px-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-5"
                  >
                    <Check className="w-8 h-8 text-[#2B8FAB]" />
                  </motion.div>
                  <h3 className="text-[22px] font-extrabold text-penn-navy mb-2">Demande envoyée !</h3>
                  <p className="text-[14px] text-penn-body/50 max-w-[350px] mx-auto">
                    Notre équipe étudiera votre dossier et vous contactera rapidement.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-6 text-[#2B8FAB] font-bold text-[14px] hover:underline"
                  >
                    Envoyer une autre demande
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="p-8 md:p-10">
                  <input type="hidden" name="_subject" value="Demande de Partenariat — EBS" />

                  <div className="space-y-8">
                    {/* Entreprise */}
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-8 rounded-lg bg-[#2B8FAB]/10 flex items-center justify-center">
                          <Building2 className="w-4 h-4 text-[#2B8FAB]" />
                        </div>
                        <h4 className="text-[15px] font-extrabold text-penn-navy">Votre entreprise</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Nom de l'entreprise *" name="entreprise" placeholder="Raison sociale" icon={<Building2 className="w-4 h-4" />} required />
                        <Field label="Secteur d'activité *" name="secteur" placeholder="Finance, IT, Industrie..." icon={<Briefcase className="w-4 h-4" />} required />
                        <Field label="Site web" name="site_web" placeholder="https://..." icon={<Globe className="w-4 h-4" />} />
                        <Field label="Effectif" name="effectif" placeholder="Nombre d'employés" icon={<Users className="w-4 h-4" />} />
                      </div>
                    </div>

                    {/* Contact */}
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-8 rounded-lg bg-[#2196F3]/10 flex items-center justify-center">
                          <Phone className="w-4 h-4 text-[#2196F3]" />
                        </div>
                        <h4 className="text-[15px] font-extrabold text-penn-navy">Personne à contacter</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Nom et prénom *" name="contact" placeholder="M. / Mme..." icon={<Users className="w-4 h-4" />} required />
                        <Field label="Fonction" name="fonction" placeholder="DRH, Directeur..." icon={<Briefcase className="w-4 h-4" />} />
                        <Field label="Email *" name="email" type="email" placeholder="email@entreprise.com" icon={<Mail className="w-4 h-4" />} required />
                        <Field label="Téléphone *" name="telephone" type="tel" placeholder="+216 XX XXX XXX" icon={<Phone className="w-4 h-4" />} required />
                      </div>
                    </div>

                    {/* Type */}
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-8 rounded-lg bg-[#FF9800]/10 flex items-center justify-center">
                          <Handshake className="w-4 h-4 text-[#FF9800]" />
                        </div>
                        <h4 className="text-[15px] font-extrabold text-penn-navy">Type de partenariat</h4>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                          { value: "stages", label: "Stages & Alternance", icon: <GraduationCap className="w-4 h-4" /> },
                          { value: "emploi", label: "Recrutement", icon: <Users className="w-4 h-4" /> },
                          { value: "projets", label: "Projets", icon: <Star className="w-4 h-4" /> },
                          { value: "formation", label: "Formation Continue", icon: <Briefcase className="w-4 h-4" /> },
                          { value: "events", label: "Événements", icon: <Sparkles className="w-4 h-4" /> },
                          { value: "autre", label: "Autre", icon: <Handshake className="w-4 h-4" /> },
                        ].map((opt) => {
                          const active = selectedType === opt.value;
                          return (
                            <label
                              key={opt.value}
                              className={`flex flex-col items-center gap-2 py-4 px-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                                active ? "border-[#2B8FAB] bg-[#2B8FAB]/5 shadow-sm" : "border-penn-border/30 hover:border-penn-border/60 hover:bg-penn-bg-light"
                              }`}
                            >
                              <input type="radio" name="type_partenariat" value={opt.value} checked={active} onChange={() => setSelectedType(opt.value)} className="sr-only" />
                              <span className={active ? "text-[#2B8FAB]" : "text-penn-body/30"}>{opt.icon}</span>
                              <span className={`text-[12px] font-bold leading-tight text-center ${active ? "text-penn-navy" : "text-penn-body/50"}`}>{opt.label}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-8 rounded-lg bg-[#9C27B0]/10 flex items-center justify-center">
                          <Mail className="w-4 h-4 text-[#9C27B0]" />
                        </div>
                        <h4 className="text-[15px] font-extrabold text-penn-navy">Votre projet</h4>
                      </div>
                      <textarea
                        name="message"
                        rows={5}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-penn-border/30 text-[14px] text-penn-navy placeholder:text-penn-body/25 focus:outline-none focus:border-[#2B8FAB] focus:ring-4 focus:ring-[#2B8FAB]/5 transition-all resize-none"
                        placeholder="Décrivez votre projet de partenariat, vos besoins et vos attentes..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="w-full mt-8 py-4 rounded-xl bg-[#2B8FAB] text-white font-bold text-[15px] hover:bg-[#1e7a94] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2B8FAB]/15 disabled:opacity-50 active:scale-[0.98]"
                  >
                    {formState === "sending" ? "Envoi..." : <><Send className="w-5 h-5" /> Envoyer ma demande</>}
                  </button>
                  {formState === "error" && (
                    <p className="text-[13px] text-red-500 text-center mt-3">Une erreur est survenue. Veuillez réessayer.</p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CONTACT ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[800px] mx-auto px-5 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-8 h-8 text-[#2B8FAB]" />
            </div>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15] mb-4">
              Prêt à collaborer ?
            </h2>
            <p className="text-[16px] text-penn-body leading-relaxed mb-10 max-w-[600px] mx-auto">
              Contactez directement notre équipe pour échanger sur vos besoins en recrutement, en stages, en immersion en entreprise ou en partenariats.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <a
                href="tel:+216 55 582 843"
                className="flex items-center gap-3 justify-center p-4 bg-white rounded-xl border border-penn-border hover:border-[#2B8FAB]/30 hover:shadow-md transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-[#2B8FAB]" />
                <span className="text-[15px] font-bold text-penn-navy">+216 55 582 843</span>
              </a>
              <a
                href="mailto:info@ebs.tn"
                className="flex items-center gap-3 justify-center p-4 bg-white rounded-xl border border-penn-border hover:border-[#2B8FAB]/30 hover:shadow-md transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-[#2B8FAB]" />
                <span className="text-[15px] font-bold text-penn-navy">info@ebs.tn</span>
              </a>
              <a
                href="#formulaire-partenariat"
                className="flex items-center gap-3 justify-center p-4 bg-[#2B8FAB] text-white rounded-xl hover:bg-[#2B8FAB]/90 transition-all duration-300 shadow-lg shadow-[#2B8FAB]/20"
              >
                <Building2 className="w-5 h-5" />
                <span className="text-[15px] font-bold">Formulaire de partenariat</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaSection
        title="Rejoignez notre réseau de partenaires économiques."
        subtitle="Accédez à des talents certifiés, formés à l'Intelligence Artificielle et préparés aux exigences du monde professionnel. Construisons ensemble l'avenir."
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
        secondaryCta={{ label: "Voir nos formations", href: "/nos-programmes" }}
        background="penn-green"
      />
    </>
  );
}
