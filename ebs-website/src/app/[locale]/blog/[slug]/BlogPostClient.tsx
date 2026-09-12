"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileCheck,
  Globe,
  GraduationCap,
  Info,
  Layers,
  School,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Breadcrumb, CtaSection } from "@/components/shared";
import type { BlogPost } from "@/lib/blog/posts";

interface Props {
  post: BlogPost;
}

const reconnaissancesList = [
  {
    nom: "Diplôme visé par l'État",
    signification: "Diplôme dont la qualité académique est officiellement reconnue par l'État français. Le visa garantit que la formation répond aux exigences nationales les plus strictes en matière d'enseignement supérieur.",
    delivreur: "Ministère de l'Enseignement supérieur et de la Recherche (MESR)",
    type: "Académique",
    color: "#2B8FAB",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    nom: "Grade de Licence",
    signification: "Grade universitaire attribué à certains diplômes Bac+3 reconnus par l'État. Il confère 180 crédits ECTS et garantit l'accès de droit aux candidatures en Master universitaire en France et dans l'Espace Européen.",
    delivreur: "Ministère de l'Enseignement supérieur (MESR)",
    type: "Académique",
    color: "#2196F3",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    nom: "Grade de Master",
    signification: "Grade universitaire de niveau Bac+5 reconnu par l'État français. Il est accordé aux diplômes universitaires de Master, aux Programmes Grande École (PGE) et à certains Mastères spécialisés d'excellence.",
    delivreur: "Ministère de l'Enseignement supérieur (MESR)",
    type: "Académique",
    color: "#9C27B0",
    icon: <Award className="w-5 h-5" />,
  },
  {
    nom: "Programme Grande École (PGE)",
    signification: "Programme d'excellence proposé par une Grande École de management ou d'ingénieurs. Lorsqu'il est visé par l'État, il confère automatiquement le prestigieux Grade de Master.",
    delivreur: "Grande École accréditée + Ministère de l'Enseignement supérieur",
    type: "Prestige / Concours",
    color: "#E91E8C",
    icon: <School className="w-5 h-5" />,
  },
  {
    nom: "Titre RNCP (Répertoire National)",
    signification: "Certification professionnelle enregistrée au Répertoire National des Certifications Professionnelles. Elle atteste des compétences professionnelles opérationnelles et est officiellement reconnue par l'État.",
    delivreur: "France Compétences (Ministère du Travail)",
    type: "Professionnel",
    color: "#FF9800",
    icon: <FileCheck className="w-5 h-5" />,
  },
  {
    nom: "RNCP Niveau 6",
    signification: "Correspond à un niveau de qualification Bac+3 / Bac+4 (Licence professionnelle, Bachelor d'école). Prépare à des fonctions d'encadrement intermédiaire et de gestion de projet.",
    delivreur: "France Compétences",
    type: "Niveau Bac+3/4",
    color: "#00BCD4",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    nom: "RNCP Niveau 7",
    signification: "Correspond au niveau de qualification Bac+5 (Master professionnel, MBA, Mastère). Atteste de la capacité à piloter des organisations et des projets stratégiques complexes.",
    delivreur: "France Compétences",
    type: "Niveau Bac+5",
    color: "#4CAF50",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    nom: "MSc (Master of Science)",
    signification: "Diplôme international spécialisé de niveau Bac+5 dispensé en anglais. Lorsqu'il bénéficie du label MSc de la Conférence des Grandes Écoles (CGE), il répond à un cahier des charges académique rigoureux.",
    delivreur: "École membre + Conférence des Grandes Écoles (CGE)",
    type: "International",
    color: "#673AB7",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    nom: "MBA (Master of Business Administration)",
    signification: "Formation professionnalisante de haut niveau destinée au management et au pilotage stratégique. La valeur et la reconnaissance dépendent du programme (titre RNCP 7, label CGE, accréditations internationales).",
    delivreur: "Écoles de commerce / France Compétences",
    type: "Executive & Pro",
    color: "#795548",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    nom: "AACSB International",
    signification: "Accréditation américaine d'excellence attribuée à moins de 6% des meilleures business schools dans le monde. Elle évalue l'excellence professorale, la recherche et l'innovation pédagogique.",
    delivreur: "Association to Advance Collegiate Schools of Business (USA)",
    type: "Accréditation Mondiale",
    color: "#E89745",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    nom: "EQUIS (EFMD Global)",
    signification: "Accréditation européenne d'excellence évaluant l'équilibre entre haut niveau académique, internationalisation et proximité étroite avec les entreprises multinationales.",
    delivreur: "EFMD Global (Bruxelles)",
    type: "Accréditation Mondiale",
    color: "#3F51B5",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    nom: "AMBA",
    signification: "Accréditation internationale britannique de référence spécifique aux programmes MBA, DBA et Masters in Management d'élite.",
    delivreur: "Association of MBAs (Royaume-Uni)",
    type: "Accréditation Mondiale",
    color: "#009688",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    nom: "Conférence des Grandes Écoles (CGE)",
    signification: "Association regroupant les Grandes Écoles d'ingénieurs et de management les plus prestigieuses en France. Elle délivre les labels exclusifs Mastère Spécialisé (MS) et Master of Science (MSc).",
    delivreur: "Conférence des Grandes Écoles",
    type: "Label d'Élite",
    color: "#D32F2F",
    icon: <School className="w-5 h-5" />,
  },
];

const decryptageRapide = [
  {
    mention: "Diplôme visé + Grade de Master",
    interpretation: "C'est le plus haut niveau de reconnaissance académique en France pour un diplôme Bac+5, délivré sous l'autorité directe du Ministère de l'Enseignement Supérieur.",
    badge: "Excellence Académique",
    color: "bg-purple-100 text-purple-800 border-purple-200",
  },
  {
    mention: "Programme Grande École (PGE) + Grade de Master",
    interpretation: "Il s'agit du parcours historique et le plus prestigieux des Grandes Écoles de commerce en France, accessible sur concours et conférant le statut de diplômé de Grande École.",
    badge: "Fleuron Historique",
    color: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    mention: "Titre RNCP Niveau 7",
    interpretation: "Le diplôme est reconnu par l'État français sur le plan professionnel et correspond officiellement à un niveau Bac+5 valorisé par les conventions collectives et les entreprises.",
    badge: "Reconnaissance Métier",
    color: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
  {
    mention: "Label MSc (CGE)",
    interpretation: "Le programme répond aux standards de qualité exigeants de la Conférence des Grandes Écoles pour un Master international dispensé en environnement multiculturel.",
    badge: "Label Conférence des Grandes Écoles",
    color: "bg-amber-100 text-amber-800 border-amber-200",
  },
  {
    mention: "Accréditation AACSB / EQUIS / AMBA",
    interpretation: "L'école bénéficie d'une reconnaissance internationale très prestigieuse et fait partie du cercle restreint des meilleures business schools de la planète.",
    badge: "Triple Couronne Mondiale",
    color: "bg-rose-100 text-rose-800 border-rose-200",
  },
];

const frenchPartners = [
  { name: "EM Normandie Business School", status: "Grande École · Visé Bac+5 · Grade de Master · AACSB · EQUIS" },
  { name: "Paris School of Business (PSB)", status: "Grande École · Visé Bac+5 · Grade de Master · AACSB · AMBA" },
  { name: "Excelia Business School", status: "Grande École · Visé Bac+5 · Grade de Master · AACSB · EQUIS · AMBA" },
  { name: "IDRAC Business School", status: "Grande École · Titres RNCP Niveau 6 & 7 · Membre CGE" },
  { name: "IFAG (École de Management)", status: "Titres certifiés RNCP Niveau 7 · Entrepreneuriat & Management" },
  { name: "IGEFI", status: "École de référence en Finance, Comptabilité & Gestion · Titres RNCP 7" },
  { name: "Éklore-ed School of Management", status: "Pau / Paris · Titres visés & certifiés RNCP Niveau 7" },
  { name: "Epitech", status: "Pôle d'excellence informatique · Titre RNCP Niveau 7 (Expert en informatique)" },
  { name: "EPSI", status: "École d'ingénierie informatique · Titres certifiés RNCP Niveau 6 & 7" },
  { name: "Sup' de Com", status: "École supérieure de communication · Titres certifiés RNCP Niveau 7" },
  { name: "RedSup (Réseau d'Établissements)", status: "Partenariats de mobilité et double diplomation" },
];

export default function BlogPostClient({ post }: Props) {
  return (
    <article className="min-h-screen bg-[#FAFAFA]">
      {/* ═══════════ HERO HEADER ═══════════ */}
      <header className="relative pt-36 pb-20 bg-penn-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src={post.featuredImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-penn-navy via-penn-navy/90 to-penn-navy/70 z-[1]" />

        <div className="relative z-10 max-w-[1140px] mx-auto px-5 lg:px-12">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: "Accueil", href: "/" },
                { label: "Blog & Guides", href: "/blog" },
                { label: "Reconnaissance des diplômes français" },
              ]}
              className="text-white/70"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-penn-green/20 text-penn-green border border-penn-green/30 px-3.5 py-1 text-[12px] font-bold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[13px] text-white/60 font-medium">
              <Clock className="w-3.5 h-3.5 text-penn-green" />
              {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[13px] text-white/60 font-medium">
              <Calendar className="w-3.5 h-3.5 text-penn-green" />
              Publié le {post.publishDate}
            </span>
          </div>

          <h1 className="text-[32px] md:text-[46px] lg:text-[54px] font-extrabold text-white leading-[1.12] tracking-tight mb-6">
            {post.title}
          </h1>

          <p className="text-[17px] md:text-[20px] text-white/80 leading-relaxed max-w-[850px] mb-8 font-light">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-penn-green/20 border border-penn-green/40 flex items-center justify-center text-penn-green font-bold">
                EBS
              </div>
              <div>
                <p className="text-[15px] font-bold text-white">{post.author.name}</p>
                <p className="text-[13px] text-white/60">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[13px] text-white/50">Mots-clés :</span>
              <div className="flex flex-wrap gap-1.5">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[11px] bg-white/10 text-white/80 rounded-md px-2.5 py-1">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════ MAIN CONTENT ═══════════ */}
      <div className="max-w-[1140px] mx-auto px-5 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
          {/* Article Body */}
          <main className="space-y-12">
            {/* Introduction Box */}
            <section className="bg-white rounded-2xl p-8 border border-penn-border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-penn-green/10 flex items-center justify-center text-penn-green shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-[20px] font-extrabold text-penn-navy mb-2">
                    Pourquoi ce guide est-il essentiel pour votre projet d&apos;études ?
                  </h2>
                  <p className="text-[15px] text-penn-body leading-relaxed">
                    Lorsque vous envisagez de poursuivre vos études supérieures en France (après une Licence ou pour un double diplôme), le paysage des établissements peut sembler complexe : universités publiques, Grandes Écoles de commerce, écoles d&apos;ingénieurs privées, instituts spécialisés.
                    Chacun met en avant différents types de labels, de visas et d&apos;accréditations.
                  </p>
                  <p className="text-[15px] text-penn-body leading-relaxed mt-3">
                    Ce guide officiel préparé par la <strong>Direction des Relations Internationales d&apos;ESPIMA Business School (EBS Tunis)</strong> décrypte précisément la valeur de chaque mention légale afin de vous aider à faire le bon choix pour votre avenir professionnel.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 1: DECRYPTAGE RAPIDE */}
            <section id="decryptage-rapide" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-penn-green/10 flex items-center justify-center text-penn-green">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h2 className="text-[26px] md:text-[30px] font-extrabold text-penn-navy">
                  1. Comment interpréter ces reconnaissances en un coup d&apos;œil ?
                </h2>
              </div>

              <p className="text-[15px] text-penn-body leading-relaxed">
                Voici la matrice d&apos;interprétation directe des mentions les plus fréquentes sur les diplômes et plaquettes des écoles françaises :
              </p>

              <div className="space-y-4">
                {decryptageRapide.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 border border-penn-border hover:border-penn-green/30 transition-all shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5">
                        <span className={`text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${item.color}`}>
                          {item.badge}
                        </span>
                        <h3 className="text-[16px] font-bold text-penn-navy">
                          {item.mention}
                        </h3>
                      </div>
                      <p className="text-[14px] text-penn-body leading-relaxed">
                        <span className="font-semibold text-penn-navy">Ce que cela signifie : </span>
                        {item.interpretation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 2: TABLEAU EXHAUSTIF DES RECONNAISSANCES */}
            <section id="reconnaissances-officielles" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-penn-green/10 flex items-center justify-center text-penn-green">
                  <Award className="w-5 h-5" />
                </div>
                <h2 className="text-[26px] md:text-[30px] font-extrabold text-penn-navy">
                  2. Le tableau exhaustif des reconnaissances & qui les délivre
                </h2>
              </div>

              <p className="text-[15px] text-penn-body leading-relaxed">
                En France, il existe deux grands piliers de reconnaissance : la <strong>reconnaissance académique</strong> (gérée par le Ministère de l&apos;Enseignement Supérieur) et la <strong>reconnaissance professionnelle</strong> (gérée par France Compétences sous la tutelle du Ministère du Travail).
              </p>

              {/* Responsive Cards Grid for All Recognitions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {reconnaissancesList.map((rec, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-penn-border hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: rec.color }}>
                            {rec.icon}
                          </div>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700">
                            {rec.type}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-[18px] font-extrabold text-penn-navy mb-2">
                        {rec.nom}
                      </h3>

                      <p className="text-[14px] text-penn-body leading-relaxed mb-4">
                        {rec.signification}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-penn-border/60 flex items-center justify-between text-[12px]">
                      <span className="text-penn-body/60 font-medium">Délivré par :</span>
                      <span className="font-bold text-penn-navy text-right max-w-[200px]">{rec.delivreur}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 3: RECONNAISSANCE ACADEMIQUE VS PROFESSIONNELLE */}
            <section id="academique-vs-professionnelle" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-penn-green/10 flex items-center justify-center text-penn-green">
                  <Layers className="w-5 h-5" />
                </div>
                <h2 className="text-[26px] md:text-[30px] font-extrabold text-penn-navy">
                  3. Reconnaissance Académique vs Titre RNCP : Quelles différences ?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-7 border border-penn-border space-y-4">
                  <div className="inline-flex items-center gap-2 text-penn-green font-bold text-[14px] uppercase tracking-wider">
                    <GraduationCap className="w-5 h-5" />
                    Reconnaissance Académique (Visa / Grade)
                  </div>
                  <h3 className="text-[19px] font-extrabold text-penn-navy">
                    Visa ministériel & Grade de Master
                  </h3>
                  <ul className="space-y-2.5 text-[14px] text-penn-body">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-penn-green shrink-0 mt-0.5" />
                      <span>Délivré par le Ministère de l&apos;Enseignement Supérieur (MESR) après évaluation par la CEFDG ou la CTI.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-penn-green shrink-0 mt-0.5" />
                      <span>Garantit le niveau d&apos;exigence académique, le niveau de la recherche et la qualité des enseignants-chercheurs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-penn-green shrink-0 mt-0.5" />
                      <span>Permet la poursuite d&apos;études en Doctorat (Ph.D) et confère les 300 crédits ECTS officiels en Europe.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-7 border border-penn-border space-y-4">
                  <div className="inline-flex items-center gap-2 text-amber-600 font-bold text-[14px] uppercase tracking-wider">
                    <FileCheck className="w-5 h-5" />
                    Reconnaissance Professionnelle (RNCP)
                  </div>
                  <h3 className="text-[19px] font-extrabold text-penn-navy">
                    Titre RNCP Niveau 6 & Niveau 7
                  </h3>
                  <ul className="space-y-2.5 text-[14px] text-penn-body">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Enregistré par France Compétences (Ministère du Travail) sur la base de l&apos;insertion professionnelle réelle.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Certifie des compétences opérationnelles directement recherchées par les entreprises et branches professionnelles.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Niveau 6 = équivalent Bac+3/4 (Cadre intermédiaire). Niveau 7 = équivalent Bac+5 (Cadre dirigeant).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 4: LES ACCREDITATIONS INTERNATIONALES */}
            <section id="accreditations-internationales" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-penn-green/10 flex items-center justify-center text-penn-green">
                  <Globe className="w-5 h-5" />
                </div>
                <h2 className="text-[26px] md:text-[30px] font-extrabold text-penn-navy">
                  4. Les accréditations internationales : La Triple Couronne
                </h2>
              </div>

              <p className="text-[15px] text-penn-body leading-relaxed">
                Les meilleures écoles de management françaises complètent leurs visas d&apos;État par des accréditations internationales indépendantes. Moins de 1% des écoles de commerce dans le monde détiennent la « Triple Couronne » (AACSB + EQUIS + AMBA) :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white rounded-xl p-6 border border-penn-border text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 font-extrabold flex items-center justify-center mx-auto text-[18px]">
                    AACSB
                  </div>
                  <h3 className="font-extrabold text-penn-navy text-[17px]">AACSB (USA)</h3>
                  <p className="text-[13px] text-penn-body leading-relaxed">
                    Évalue la qualité académique, le corps professoral permanent et la pertinence du curriculum managérial mondial.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-penn-border text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 font-extrabold flex items-center justify-center mx-auto text-[18px]">
                    EQUIS
                  </div>
                  <h3 className="font-extrabold text-penn-navy text-[17px]">EQUIS (Europe)</h3>
                  <p className="text-[13px] text-penn-body leading-relaxed">
                    Délivré par l&apos;EFMD. Met l&apos;accent sur la dimension internationale, la gouvernance et les partenariats entreprises.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-penn-border text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 font-extrabold flex items-center justify-center mx-auto text-[18px]">
                    AMBA
                  </div>
                  <h3 className="font-extrabold text-penn-navy text-[17px]">AMBA (UK)</h3>
                  <p className="text-[13px] text-penn-body leading-relaxed">
                    Spécifique aux programmes MBA, DBA et Masters in Management pour certifier l&apos;employabilité des cadres.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: LES PARTENARIATS FRANCAIS EBS */}
            <section id="partenaires-francais-ebs" className="bg-gradient-to-br from-penn-navy to-[#18233c] text-white rounded-3xl p-8 lg:p-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-penn-green">
                  <School className="w-5 h-5" />
                </div>
                <h2 className="text-[24px] md:text-[28px] font-extrabold text-white">
                  5. Les partenaires français d&apos;EBS Tunis et leurs reconnaissances
                </h2>
              </div>

              <p className="text-[15px] text-white/80 leading-relaxed">
                Les étudiants d&apos;ESPIMA Business School bénéficient d&apos;accords directs de coopération et de passerelles de mobilité avec 11 institutions de premier plan en France. Leurs années d&apos;études à Tunis sont automatiquement validées pour intégrer ces programmes visés et certifiés :
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {frenchPartners.map((partner, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between">
                    <p className="text-[15px] font-bold text-white mb-1">{partner.name}</p>
                    <p className="text-[12px] text-penn-green font-medium">{partner.status}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
                <p className="text-[13px] text-white/70">
                  Besoin d&apos;un accompagnement pour votre dossier Campus France ou votre candidature ?
                </p>
                <Link
                  href="/parcours-international"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-penn-green text-white font-bold text-[14px] hover:bg-penn-green/90 transition-all"
                >
                  Découvrir le parcours international
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </section>
          </main>

          {/* Sticky Sidebar */}
          <aside className="space-y-8">
            {/* Table of Contents */}
            <div className="bg-white rounded-2xl p-6 border border-penn-border sticky top-28 shadow-sm">
              <h4 className="text-[16px] font-extrabold text-penn-navy mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-penn-green" />
                Sommaire du guide
              </h4>
              <nav className="space-y-2.5 text-[14px]">
                <a href="#decryptage-rapide" className="block text-penn-body hover:text-penn-green transition-colors">
                  1. Décryptage rapide en 1 coup d&apos;œil
                </a>
                <a href="#reconnaissances-officielles" className="block text-penn-body hover:text-penn-green transition-colors">
                  2. Tableau exhaustif des reconnaissances
                </a>
                <a href="#academique-vs-professionnelle" className="block text-penn-body hover:text-penn-green transition-colors">
                  3. Académique vs RNCP
                </a>
                <a href="#accreditations-internationales" className="block text-penn-body hover:text-penn-green transition-colors">
                  4. Triple Couronne mondiale
                </a>
                <a href="#partenaires-francais-ebs" className="block text-penn-body hover:text-penn-green transition-colors">
                  5. Partenaires français d&apos;EBS
                </a>
              </nav>

              <div className="mt-6 pt-6 border-t border-penn-border">
                <p className="text-[12px] text-penn-body/60 font-medium mb-3">
                  Document officiel extrait du Guide Partenaires Académiques EBS Tunis 2026/2027.
                </p>
                <Link
                  href="/admissions"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-penn-navy text-white text-[13px] font-bold hover:bg-penn-navy/90 transition-all"
                >
                  Postuler à EBS Tunis
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ═══════════ CTA SECTION ═══════════ */}
      <CtaSection
        title="Construisez votre parcours international chez EBS Tunis"
        subtitle="Débutez vos études de Licence ou Master à Tunis et rejoignez nos universités partenaires en France, au Canada, en Italie et à Oman."
        primaryCta={{ label: "Déposer ma candidature", href: "/admissions" }}
        secondaryCta={{ label: "Explorer les partenaires", href: "/partenaires-academiques" }}
        whatsapp="+216 55 582 843"
        background="penn-green"
      />
    </article>
  );
}
