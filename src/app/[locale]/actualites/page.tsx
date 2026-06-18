"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Calendar,
  ChevronRight,
  Megaphone,
  Newspaper,
  Sparkles,
  Timer,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { Badge } from "@/components/shared";

type Tab = "alaune" | "actualites" | "evenements";

type ArticleTag =
  | "Partenariat"
  | "International"
  | "Technologie"
  | "IA"
  | "Entrepreneuriat"
  | "Conférence"
  | "Carrière"
  | "Cérémonie"
  | "Vie Étudiante"
  | "Solidarité"
  | "Finance"
  | "FinTech"
  | "Orientation"
  | "Digitalisation"
  | "Data Science"
  | "Alumni"
  | "Clubs";

const tagColors: Record<ArticleTag, { bg: string; text: string; border: string }> = {
  Partenariat: { bg: "bg-[#2B8FAB]/10", text: "text-[#2B8FAB]", border: "border-[#2B8FAB]/20" },
  International: { bg: "bg-[#1E88E5]/10", text: "text-[#1E88E5]", border: "border-[#1E88E5]/20" },
  Technologie: { bg: "bg-[#FF5722]/10", text: "text-[#FF5722]", border: "border-[#FF5722]/20" },
  IA: { bg: "bg-[#9C27B0]/10", text: "text-[#9C27B0]", border: "border-[#9C27B0]/20" },
  Entrepreneuriat: { bg: "bg-[#5E35B1]/10", text: "text-[#5E35B1]", border: "border-[#5E35B1]/20" },
  Conférence: { bg: "bg-[#00897B]/10", text: "text-[#00897B]", border: "border-[#00897B]/20" },
  Carrière: { bg: "bg-[#E91E8C]/10", text: "text-[#E91E8C]", border: "border-[#E91E8C]/20" },
  Cérémonie: { bg: "bg-[#FF9800]/10", text: "text-[#FF9800]", border: "border-[#FF9800]/20" },
  "Vie Étudiante": { bg: "bg-[#2196F3]/10", text: "text-[#2196F3]", border: "border-[#2196F3]/20" },
  Solidarité: { bg: "bg-[#E53935]/10", text: "text-[#E53935]", border: "border-[#E53935]/20" },
  Finance: { bg: "bg-[#00BCD4]/10", text: "text-[#00BCD4]", border: "border-[#00BCD4]/20" },
  FinTech: { bg: "bg-[#00BCD4]/10", text: "text-[#00BCD4]", border: "border-[#00BCD4]/20" },
  Orientation: { bg: "bg-[#43A047]/10", text: "text-[#43A047]", border: "border-[#43A047]/20" },
  Digitalisation: { bg: "bg-[#FF5722]/10", text: "text-[#FF5722]", border: "border-[#FF5722]/20" },
  "Data Science": { bg: "bg-[#9C27B0]/10", text: "text-[#9C27B0]", border: "border-[#9C27B0]/20" },
  Alumni: { bg: "bg-[#2B8FAB]/10", text: "text-[#2B8FAB]", border: "border-[#2B8FAB]/20" },
  Clubs: { bg: "bg-[#FF9800]/10", text: "text-[#FF9800]", border: "border-[#FF9800]/20" },
};

interface Article {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  tag: ArticleTag;
  fullContent?: string;
}

const articleAlaUne: Article = {
  id: "arforghe-2022",
  title: "Accord de Partenariat entre l'ARFORGHE et l'Université Privée EBS",
  date: "08 Septembre 2022",
  description:
    "Signature d'un accord stratégique avec l'Association des Responsables de Formation et de Gestion Humaine dans les Entreprises pour faciliter l'insertion professionnelle des étudiants.",
  image: "/images/ebs-tn/IMG_2-1024x683.jpg",
  tag: "Partenariat",
  fullContent: `ESPIMA BUSINESS SCHOOL (EBS), université privée tunisienne basée aux Berges du Lac 3, forte d'une expérience pédagogique riche et innovante de plus de dix ans, a signé le jeudi 8 Septembre 2022 un accord de partenariat avec l'Association des Responsables de Formation et de Gestion Humaine dans les Entreprises (ARFORGHE).\n\nLa signature du partenariat a eu lieu dans les locaux de EBS en présence des responsables des deux institutions : Mme Mounira BOUZOUITA (Présidente de l'ARFORGHE), M. Mohamed BOUKADHABA (Vice-Président de l'ARFORGHE, et DRH de ONE TECH HOLDING), M. Mohamed LATRACH (Secrétaire Général de l'ARFORGHE, et DRH d'ORANGE), M. Yahia BOUCHADDAK (Trésorier de l'ARFORGHE), Mme ATIA Zeïneb (Ex Présidente de l'ARFORGHE) et Mme Samia ANOUN (Responsable Administrative et Financière de l'ARFORGHE), d'une part, M. Abderraouf NAJAR (Président de l'Université EBS), M. Melik HICHRI (Directeur de EBS), Mme Yamina Gharbi (Responsable administrative chargée des relations externes) et M. Karim HANTOUS (Docteur en Management enseignant visiteur à ESPIMA Business School), d'autre part.\n\nCe partenariat a pour objectifs de permettre aux étudiants de EBS l'obtention de stages en entreprises affiliées de l'ARFORGHE, et surtout, de faciliter leur insertion sur le marché de l'emploi. Par ailleurs, ce partenariat permettra à l'EBS de faire bénéficier ses étudiants d'un enseignement plus pratique par l'intervention de professionnels et experts de l'ARFORGHE dans les différentes spécialités.`,
};

const actualites: Article[] = [
  {
    id: "a1", title: "Visite du Business IT Solutions Expo", date: "26 Février 2025", tag: "Technologie",
    description: "Participation de nos étudiants à l'événement incontournable du secteur technologique : Business IT Solutions EXPO à la Cité de la Culture à Tunis.",
    image: "/images/ebs-tn/IT-Business-Expo.jpeg",
  },
  {
    id: "a2", title: "Journée Portes Ouvertes au Lycée Louis Pasteur", date: "21 Février 2025", tag: "Orientation",
    description: "Participation d'ESPIMA Business School à la journée d'information sur l'orientation universitaire organisée par le Lycée Louis Pasteur.",
    image: "/images/ebs-tn/Lycee-Louis-Pasteur.jpeg",
  },
  {
    id: "a3", title: "Salon de l'Entrepreneuriat Riyeda 2025", date: "30 Janvier 2025", tag: "Entrepreneuriat",
    description: "Visite des étudiants d'ESPIMA Business School au salon de l'entreprenariat RIYEDA à la cité de la culture.",
    image: "/images/ebs-tn/Salon-Riyeda.jpeg",
  },
  {
    id: "a4", title: "Séminaire : L'Importance de l'Analyse de Données", date: "09 Janvier 2025", tag: "Data Science",
    description: "Conférence autour de l'importance de l'analyse de données dans la prise de décisions. Animée par Mr Mohamed Draoui.",
    image: "/images/ebs-tn/Seminaire-Med-Draoui.jpeg",
  },
  {
    id: "a5", title: "Excelia : Présentation de Notre Partenaire", date: "29 Novembre 2024", tag: "International",
    description: "Mme Ikram BOUHADADI, chargée du développement et recrutement international Excelia, a présenté les programmes d'études à nos étudiants.",
    image: "/images/ebs-tn/Excelia-min-scaled.jpeg",
  },
  {
    id: "a6", title: "EM Normandie : À la Découverte de Notre Partenaire", date: "28 Novembre 2024", tag: "International",
    description: "Mme Amandine DELATTRE, chargée d'admissions Internationales Moyen Orient et Afrique du Nord à l'EM Normandie, a présenté les programmes et conditions d'accès.",
    image: "/images/ebs-tn/EM-Normandie-min-1568x2091.jpeg",
  },
  {
    id: "a7", title: "Séminaire : La Digitalisation en Tunisie", date: "17 Octobre 2024", tag: "Digitalisation",
    description: "Séminaire portant sur la digitalisation en Tunisie, animé par Mme Sonia ELKARA, entrepreneuse et pharmacienne industrielle.",
    image: "/images/ebs-tn/Conference-sonia-el-kara-min-1568x1176.jpeg",
  },
  {
    id: "a8", title: "Forum des Mobilités — Campus France", date: "26 & 27 Avril 2024", tag: "International",
    description: "Participation d'ESPIMA Business School au Forum des mobilités organisé par Campus France Tunisie à l'Institut Français de Tunisie.",
    image: "/images/ebs-tn/campus-france.jpg",
  },
  {
    id: "a9", title: "Visite de la Bourse de Tunis", date: "11 Décembre 2023", tag: "Finance",
    description: "Visite de nos étudiants de Gestion au siège de la Bourse de Tunis. Une opportunité pour découvrir les mécanismes du Marché Boursier.",
    image: "/images/ebs-tn/Bourse-de-Tunis.webp",
  },
  {
    id: "a10", title: "Visite de la Banque Centrale et du Musée", date: "07 Décembre 2023", tag: "Finance",
    description: "Visite à la Banque Centrale de Tunisie et au Musée de la Monnaie pour enrichir le parcours académique des étudiants.",
    image: "/images/ebs-tn/Banque-Centrale.webp",
  },
  {
    id: "a11", title: "Séminaire : Innovations Financières et Blockchain", date: "09 Novembre 2023", tag: "FinTech",
    description: "Séminaire autour des Innovations financières et Technologie Blockchain, animé par Mr Sami Maazaoui et Mr Hatem Chanoufi.",
    image: "/images/ebs-tn/Seminaire-scaled.jpg",
  },
  {
    id: "a12", title: "EBS se Déplace à Djerba", date: "13 Mai 2023", tag: "Orientation",
    description: "Participation à la journée d'information sur l'orientation universitaire au Groupe Scolaire International 'Les Nouvelles Générations' à Djerba.",
    image: "/images/ebs-tn/Djerba.jpg",
  },
  {
    id: "a13", title: "Séminaire autour des Relations Internationales", date: "11 Mai 2023", tag: "Conférence",
    description: "Séminaire animé par M. Noureddine Horchani, expert en relations internationales.",
    image: "/images/ebs-tn/seminaire-horchani.jpg",
  },
  {
    id: "a14", title: "EM Strasbourg : À la Découverte de Notre Partenaire", date: "23 Février 2023", tag: "International",
    description: "Mme Séverine Bonhomme, Responsable du Développement International, a présenté les programmes d'EM Strasbourg, 15ème école de commerce en France.",
    image: "/images/ebs-tn/EM-Strasbourg.jpg",
  },
  {
    id: "a15", title: "Conférence : Data Sciences et Intelligence Artificielle", date: "2 Janvier 2023", tag: "IA",
    description: "Conférence sous le thème de la Data Sciences et de l'intelligence artificielle, animée par M. Hassen Zargouni.",
    image: "/images/ebs-tn/Conference-scaled.jpg",
  },
  {
    id: "a16", title: "Visite d'Entreprise : THE DOT Hub d'Innovation Digitale", date: "17 Novembre 2022", tag: "Entrepreneuriat",
    description: "Les étudiants M1 Management des projets ont visité THE DOT, hub d'innovation digitale animé par des startups matures.",
    image: "/images/ebs-tn/Visite-DOT-1-1.jpg",
  },
  {
    id: "a17", title: "Partenariat ESPIMA Business School et ASTEELFLASH Tunisie", date: "13 Septembre 2022", tag: "Partenariat",
    description: "Célébration de la journée du savoir organisée par ASTEELFLASH TUNISIE, filiale du Groupe ASTEELFLASH USA, leader mondial des services de fabrication électronique.",
    image: "/images/ebs-tn/IMG-20220922-WA0006.jpg",
  },
  {
    id: "a18", title: "Cérémonie de Remise des Diplômes EBS 2022", date: "19 Juillet 2022", tag: "Cérémonie",
    description: "Cérémonie de remise des Diplômes marquée par la présence des familles, enseignants, direction et partenaires académiques et professionnels.",
    image: "/images/ebs-tn/296483269_5639948722706337_6886606887546608667_n.jpg",
  },
  {
    id: "a19", title: "Présence de l'UQAT Canada à la Cérémonie EBS 2022", date: "19 Juillet 2022", tag: "International",
    description: "La cérémonie a été honorée par Mme Yasmine MOHAMED, directrice des programmes Gestion de Projet à l'UQAT Canada.",
    image: "/images/ebs-tn/296830441_10158917271276931_532106099996811579_n.jpg",
  },
  {
    id: "a20", title: "Salon de l'Orientation Étudiants Post-Bac", date: "18 Juillet 2022", tag: "Orientation",
    description: "Participation au salon de l'orientation à Tunis, Sousse et Sfax.",
    image: "/images/ebs-tn/295311127_5603985116302698_2028720448082960089_n.jpg",
  },
  {
    id: "a21", title: "23ème Université d'Été ARFORGHE", date: "9 & 10 Juin 2022", tag: "Conférence",
    description: "Participation à la 23ème Université d'été organisée par l'ARFORGHE sous le thème 'Management de proximité et télétravail : est-ce un paradoxe ?'",
    image: "/images/ebs-tn/289351831_5538561589511718_7608078724883071280_n.jpg",
  },
  {
    id: "a22", title: "Participation au Salon KHOTWA en Algérie", date: "19 Mai 2022", tag: "International",
    description: "Participation au salon international de l'Étudiant sur plusieurs villes d'Algérie (Alger, Constantine, Tlemcen, Sidi Bel Abbes).",
    image: "/images/ebs-tn/284601226_5452434274791117_6972648692719623173_n-1.jpg",
  },
  {
    id: "a23", title: "Étudier en France ? Procédures Campus France", date: "12 Mai 2022", tag: "International",
    description: "Séance de Questions/Réponses destinée aux étudiants de Parcours International avec les responsables Campus France Tunisie.",
    image: "/images/ebs-tn/280653806_5411844118850133_7701947925445388130_n.jpg",
  },
  {
    id: "a24", title: "EBS Entrepreneurship Challenge — 1ère Édition", date: "1 Avril 2022", tag: "Entrepreneuriat",
    description: "Présentation des projets des finalistes devant un Jury de professionnels et remise des prix aux lauréats.",
    image: "/images/ebs-tn/277675248_5285013694866510_3664805883500697118_n.jpg",
  },
  {
    id: "a25", title: "Partenariat EBS / UQAT Canada", date: "28 Février 2022", tag: "International",
    description: "M. Mathieu Noury, Vice Recteur adjoint, et Mme Sonia Demontigny de l'UQAT Canada ont visité les locaux d'EBS.",
    image: "/images/ebs-tn/285834133_5491514384216439_4542440242662762013_n.jpg",
  },
  {
    id: "a26", title: "Forum des Mobilités : Étudier en France", date: "28 & 29 Avril 2022", tag: "International",
    description: "Participation au Forum des mobilités organisé par Campus France Tunisie à l'Institut Français de Tunisie.",
    image: "/images/ebs-tn/Forum-des-mobilites.jpg",
  },
];

const evenements: Article[] = [
  {
    id: "e1", title: "EBS Entrepreneurship Challenge — 4ème Édition", date: "12 Février 2025", tag: "Entrepreneuriat",
    description: "Félicitations aux lauréats de la quatrième édition d'EBS ENTREPRENEURSHIP CHALLENGE.",
    image: "/images/ebs-tn/277675248_5285013694866510_3664805883500697118_n.jpg",
  },
  {
    id: "e2", title: "Journée d'Intégration", date: "14 Novembre 2024", tag: "Vie Étudiante",
    description: "Pour lancer la nouvelle année académique, journée d'intégration pour renforcer les liens et créer l'esprit d'équipe.",
    image: "/images/ebs-tn/Lycee-Louis-Pasteur.jpeg",
  },
  {
    id: "e3", title: "Octobre Rose — Sensibilisation au Cancer du Sein", date: "22 Octobre 2024", tag: "Solidarité",
    description: "En collaboration avec l'ATAMCS, journée de sensibilisation au dépistage du Cancer du Sein.",
    image: "/images/ebs-tn/Excelia-min-scaled.jpeg",
  },
  {
    id: "e4", title: "Cérémonie de Remise des Diplômes 2024", date: "24 Juillet 2024", tag: "Cérémonie",
    description: "7ème édition de la Cérémonie de Remise des Diplômes saluant les accomplissements de nos étudiants.",
    image: "/images/ebs-tn/296483269_5639948722706337_6886606887546608667_n.jpg",
  },
  {
    id: "e5", title: "EBS Job Fair — 2ème Édition", date: "09 Mai 2024", tag: "Carrière",
    description: "Rencontres avec des professionnels et représentants de grandes entreprises pour les opportunités de stages et d'emploi.",
    image: "/images/ebs-tn/Salon-Riyeda.jpeg",
  },
  {
    id: "e6", title: "EBS Entrepreneurship Challenge — 3ème Édition", date: "26 Avril 2024", tag: "Entrepreneuriat",
    description: "Félicitations aux lauréats de la troisième édition et remerciements à tous les contributeurs.",
    image: "/images/ebs-tn/277675248_5285013694866510_3664805883500697118_n.jpg",
  },
  {
    id: "e7", title: "Journée d'Intégration à ADP", date: "12 Janvier 2024", tag: "Partenariat",
    description: "Journée d'intégration au sein des locaux d'ADP pour découvrir les métiers d'expert Payroll et d'analyste fonctionnel.",
    image: "/images/ebs-tn/Visite-DOT-1-1.jpg",
  },
  {
    id: "e8", title: "Journée Métiers", date: "06 Décembre 2023", tag: "Carrière",
    description: "Journée dédiée aux Métiers d'avenir : Marketing digital, Entrepreneuriat, Consulting et Project Management.",
    image: "/images/ebs-tn/Seminaire-scaled.jpg",
  },
  {
    id: "e9", title: "Journée d'Intégration avec Paintball Life Tunisie", date: "27 Octobre 2023", tag: "Vie Étudiante",
    description: "Journée d'intégration favorisant l'esprit d'équipe dans une ambiance détendue.",
    image: "/images/ebs-tn/campus-france.jpg",
  },
  {
    id: "e10", title: "Cérémonie de Remise des Diplômes 2023", date: "18 Juin 2023", tag: "Cérémonie",
    description: "6ème édition de la Cérémonie. Bravo à la promotion 2022/2023.",
    image: "/images/ebs-tn/296483269_5639948722706337_6886606887546608667_n.jpg",
  },
  {
    id: "e11", title: "EBS Job Fair — 1ère Édition", date: "10 Juin 2023", tag: "Carrière",
    description: "Première édition réussie. Échanges avec des représentants de grandes entreprises.",
    image: "/images/ebs-tn/Salon-Riyeda.jpeg",
  },
  {
    id: "e12", title: "EBS Entrepreneurship Challenge — 2ème Édition", date: "17 Mars 2023", tag: "Entrepreneuriat",
    description: "Nos étudiants ont eu quelques jours pour passer de l'idée au projet. Bravo aux lauréats.",
    image: "/images/ebs-tn/277675248_5285013694866510_3664805883500697118_n.jpg",
  },
  {
    id: "e13", title: "Rencontre avec les Alumni Entrepreneurs", date: "16 Octobre 2022", tag: "Alumni",
    description: "Belle rencontre entre alumni entrepreneurs et étudiants actuels dans le cadre de la semaine mondiale de l'entrepreneuriat.",
    image: "/images/ebs-tn/Visite-DOT-1-1.jpg",
  },
  {
    id: "e14", title: "Journée d'Intégration à Paintball Life Tunisie", date: "06 Octobre 2022", tag: "Vie Étudiante",
    description: "Les étudiants ont profité d'une journée d'intégration conviviale avec l'équipe pédagogique et administrative.",
    image: "/images/ebs-tn/campus-france.jpg",
  },
  {
    id: "e15", title: "EBS Entrepreneurship Challenge — 1ère Édition", date: "04 Avril 2022", tag: "Entrepreneuriat",
    description: "Félicitations aux lauréats de cette première édition et remerciements à tous les contributeurs.",
    image: "/images/ebs-tn/277675248_5285013694866510_3664805883500697118_n.jpg",
  },
  {
    id: "e16", title: "Challenge Création d'Entreprises / START UP", date: "02 Mars 2022", tag: "Entrepreneuriat",
    description: "Premier jour : accueil des étudiants et constitution des équipes pour le challenge.",
    image: "/images/ebs-tn/277675248_5285013694866510_3664805883500697118_n.jpg",
  },
  {
    id: "e17", title: "Webinaire EBS / Collège de Paris", date: "24 Février 2022", tag: "International",
    description: "Comment préparer sa mobilité internationale ? Webinaire animé par M. Guillaume FINCK, vice-président du Collège de Paris.",
    image: "/images/ebs-tn/EM-Normandie-min-1568x2091.jpeg",
  },
  {
    id: "e18", title: "Séminaire : Nouveaux Services Digitaux", date: "17 Février 2022", tag: "Conférence",
    description: "Séminaire animé par M. Adel CHOUARI, Directeur Général du Centre National du Registre des Entreprises.",
    image: "/images/ebs-tn/Seminaire-scaled.jpg",
  },
  {
    id: "e19", title: "Formation et Workshop — Club Tunivisions EBS", date: "05 Février 2022", tag: "Clubs",
    description: "Journée Formation et Workshop organisée par le Club Tunivisions EBS, animée par Yosr et Siwar SAID.",
    image: "/images/ebs-tn/campus-france.jpg",
  },
  {
    id: "e20", title: "Journée Club Rotaract Espima", date: "19 Janvier 2022", tag: "Clubs",
    description: "Journée d'activité organisée par le Club Rotaract Espima dans les locaux de l'EBS.",
    image: "/images/ebs-tn/Lycee-Louis-Pasteur.jpg",
  },
  {
    id: "e21", title: "Journée d'Intégration Club Tunivisions EBS", date: "23 Décembre 2021", tag: "Solidarité",
    description: "Journée d'intégration entre retraités et enfants à la maison de retraite Salambo.",
    image: "/images/ebs-tn/Excelia-min-scaled.jpeg",
  },
];

const allTags: ArticleTag[] = [
  "Partenariat", "International", "Technologie", "IA", "Entrepreneuriat",
  "Conférence", "Carrière", "Cérémonie", "Vie Étudiante", "Solidarité",
  "Finance", "FinTech", "Orientation", "Digitalisation", "Data Science", "Alumni", "Clubs",
];

const tabs: { key: Tab; label: string; icon: React.ReactNode; desc: string }[] = [
  { key: "actualites", label: "Actualités", icon: <Newspaper className="w-4 h-4" />, desc: "26 articles — partenariats, salons, conférences" },
  { key: "evenements", label: "Événements", icon: <Calendar className="w-4 h-4" />, desc: "21 événements — challenges, cérémonies, intégrations" },
  { key: "alaune", label: "À la Une", icon: <Sparkles className="w-4 h-4" />, desc: "L'article phare qui fait l'actualité d'EBS" },
];

const stats = [
  { icon: <Newspaper className="w-5 h-5" />, label: "Articles", value: "27", accent: "#2B8FAB" },
  { icon: <Calendar className="w-5 h-5" />, label: "Événements", value: "21", accent: "#FF9800" },
  { icon: <TrendingUp className="w-5 h-5" />, label: "Thématiques", value: "17", accent: "#9C27B0" },
  { icon: <Timer className="w-5 h-5" />, label: "Années couvertes", value: "4+", accent: "#2196F3" },
];

export default function ActualitesPage() {
  const [activeTab, setActiveTab] = useState<Tab>("actualites");
  const [activeTag, setActiveTag] = useState<ArticleTag | null>(null);
  const [modalArticle, setModalArticle] = useState<Article | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);

  const currentList = activeTab === "alaune"
    ? [articleAlaUne]
    : activeTab === "actualites" ? actualites : evenements;

  const filteredList = useMemo(() => {
    if (!activeTag || activeTab === "alaune") return currentList;
    return currentList.filter((a) => a.tag === activeTag);
  }, [currentList, activeTag, activeTab]);

  const visibleArticles = filteredList.slice(0, visibleCount);

  const availableTags = useMemo(() => {
    if (activeTab === "alaune") return [];
    const source = activeTab === "actualites" ? actualites : evenements;
    const tags = [...new Set(source.map((a) => a.tag))];
    return tags.sort((a, b) => a.localeCompare(b));
  }, [activeTab]);

  return (
    <main className="min-h-screen">
      {/* ─────────── HERO ─────────── */}
      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroes/hero-campus.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/60 via-[#1a2035]/50 to-penn-navy/60" />
        <div className="absolute inset-0 z-[1] opacity-[0.03] bg-[radial-gradient(circle_at_50%_70%,_#2B8FAB_0%,_transparent_50%)]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="max-w-[700px]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">
                <div className="w-1 h-1 rounded-full bg-[#2B8FAB]" />
                Restez Informés
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[44px] md:text-[56px] lg:text-[68px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
            >
              Actualités<br />
              <span className="text-[#2B8FAB]">EBS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[17px] md:text-[19px] text-white/60 leading-relaxed max-w-[550px]"
            >
              Partenariats, événements, conférences et vie étudiante. 
              Tout ce qui fait vibrer Espima Business School au quotidien.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─────────── STATS BAR ─────────── */}
      <section className="relative z-20 -mt-10 pb-0">
        <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
          <div className="bg-white rounded-2xl border border-penn-border shadow-xl shadow-black/5 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-penn-border/50">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col items-center justify-center py-7 px-4"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${stat.accent}15` }}>
                    <div style={{ color: stat.accent }}>{stat.icon}</div>
                  </div>
                  <p className="text-[28px] md:text-[32px] font-extrabold text-penn-navy leading-none mb-1">{stat.value}</p>
                  <p className="text-[13px] font-semibold text-penn-body/60 uppercase tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── TABS ─────────── */}
      <section className="section-padding bg-white pt-16">
        <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
          {/* Tab buttons */}
          <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
            {tabs.map((tab) => (
              <motion.button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setActiveTag(null);
                  setVisibleCount(9);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative inline-flex flex-col items-center gap-1 px-6 py-4 rounded-2xl text-[14px] font-bold transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-[#2B8FAB] text-white shadow-lg shadow-[#2B8FAB]/20"
                    : "bg-gray-50 text-penn-navy/50 hover:bg-gray-100 hover:text-penn-navy/80"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </span>
                <span className={`text-[11px] font-medium ${activeTab === tab.key ? "text-white/60" : "text-penn-body/30"}`}>
                  {tab.desc}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Category filters (not shown on À la Une) */}
          {activeTab !== "alaune" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 mb-10 flex-wrap"
            >
              <button
                onClick={() => { setActiveTag(null); setVisibleCount(9); }}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold transition-all ${
                  activeTag === null
                    ? "bg-penn-navy text-white shadow-sm"
                    : "bg-gray-100 text-penn-body/60 hover:bg-gray-200 hover:text-penn-navy"
                }`}
              >
                Tous
              </button>
              {availableTags.map((tag) => {
                const c = tagColors[tag];
                return (
                  <button
                    key={tag}
                    onClick={() => { setActiveTag(tag); setVisibleCount(9); }}
                    className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold border transition-all ${
                      activeTag === tag
                        ? `${c.bg} ${c.text} ${c.border}`
                        : "bg-white border-gray-200 text-penn-body/60 hover:border-gray-300 hover:text-penn-navy"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + (activeTag || "all")}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured article (À la Une) */}
              {activeTab === "alaune" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl border border-penn-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                  onClick={() => setModalArticle(articleAlaUne)}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-[320px] lg:h-full min-h-[340px] overflow-hidden">
                      <Image
                        src={articleAlaUne.image!}
                        alt={articleAlaUne.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-penn-navy/40 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute top-5 left-5">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2B8FAB] text-white text-[12px] font-bold shadow-lg">
                          <Sparkles className="w-3 h-3" /> À la Une
                        </span>
                      </div>
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${tagColors[articleAlaUne.tag].bg} ${tagColors[articleAlaUne.tag].text} border ${tagColors[articleAlaUne.tag].border}`}>
                          {articleAlaUne.tag}
                        </div>
                        <div className="flex items-center gap-1.5 text-[13px] text-penn-body/50">
                          <Calendar className="w-3.5 h-3.5" />
                          {articleAlaUne.date}
                        </div>
                      </div>
                      <h2 className="text-[22px] md:text-[28px] font-extrabold text-penn-navy mb-4 leading-tight group-hover:text-[#2B8FAB] transition-colors">
                        {articleAlaUne.title}
                      </h2>
                      <p className="text-[15px] text-penn-body/70 leading-relaxed mb-6">
                        {articleAlaUne.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#2B8FAB] group-hover:gap-2.5 transition-all">
                        Lire l&apos;article complet <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Grid for Actualités & Événements */}
              {activeTab !== "alaune" && (
                <>
                  {filteredList.length === 0 ? (
                    <div className="text-center py-20">
                      <Megaphone className="w-12 h-12 text-penn-border mx-auto mb-4" />
                      <p className="text-penn-body/50 font-medium">Aucun article trouvé pour cette catégorie.</p>
                      <button onClick={() => setActiveTag(null)} className="mt-4 text-[#2B8FAB] font-bold text-[14px] hover:underline">
                        Voir tous les articles
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {visibleArticles.map((article, idx) => (
                        <motion.article
                          key={article.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          className="bg-white rounded-2xl border border-penn-border/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#2B8FAB]/20 transition-all duration-400 group cursor-pointer flex flex-col"
                          onClick={() => setModalArticle(article)}
                        >
                          {article.image ? (
                            <div className="relative h-[220px] overflow-hidden">
                              <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-600"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-penn-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                              <div className="absolute top-3 left-3">
                                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${tagColors[article.tag].bg} ${tagColors[article.tag].text} ${tagColors[article.tag].border} backdrop-blur-sm`}>
                                  {article.tag}
                                </span>
                              </div>
                              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 shadow-lg">
                                  <ChevronRight className="w-4 h-4 text-penn-navy" />
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="relative h-[220px] bg-gradient-to-br from-[#2B8FAB]/8 via-penn-bg-light to-[#2B8FAB]/4 flex items-center justify-center">
                              <Megaphone className="w-10 h-10 text-[#2B8FAB]/15" />
                              <div className="absolute top-3 left-3">
                                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${tagColors[article.tag].bg} ${tagColors[article.tag].text} ${tagColors[article.tag].border}`}>
                                  {article.tag}
                                </span>
                              </div>
                            </div>
                          )}
                          <div className="p-5 flex flex-col flex-1">
                            <div className="flex items-center gap-2 text-[12px] text-penn-body/40 mb-3">
                              <Calendar className="w-3.5 h-3.5" />
                              <span className="font-medium">{article.date}</span>
                            </div>
                            <h3 className="text-[16px] font-extrabold text-penn-navy mb-2.5 group-hover:text-[#2B8FAB] transition-colors line-clamp-2 leading-snug">
                              {article.title}
                            </h3>
                            <p className="text-[13px] text-penn-body/60 leading-relaxed line-clamp-3 flex-1">
                              {article.description}
                            </p>
                            <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#2B8FAB] mt-4 group-hover:gap-2 transition-all">
                              Lire la suite <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* Load more */}
              {activeTab !== "alaune" && visibleArticles.length < filteredList.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center mt-12"
                >
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 9)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#2B8FAB] text-[#2B8FAB] font-bold text-[14px] hover:bg-[#2B8FAB] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#2B8FAB]/20"
                  >
                    Afficher plus d&apos;articles
                    <ArrowDown className="w-4 h-4" />
                  </button>
                  <p className="text-[13px] text-penn-body/40 mt-3">
                    {visibleArticles.length} sur {filteredList.length} articles affichés
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─────────── NEWSLETTER / STAY CONNECTED ─────────── */}
      <section className="section-padding bg-[#2B8FAB] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_50%_50%,_white_0%,_transparent_70%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 max-w-[900px] mx-auto px-5 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <Badge variant="outline" size="lg" className="mb-6 border-white/30 text-white/90">
              <div className="w-1 h-1 rounded-full bg-white" />
              Newsletter EBS
            </Badge>
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-white mb-4">
              Restez connecté à <span className="text-white">l&apos;actualité</span>
            </h2>
            <p className="text-[16px] text-white/70 max-w-[500px] mx-auto mb-10 leading-relaxed">
              Recevez les dernières nouvelles, événements et opportunités directement dans votre boîte mail.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 max-w-[480px] mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 w-full px-5 py-3.5 rounded-full bg-white/15 border border-white/30 text-white placeholder:text-white/50 text-[14px] focus:outline-none focus:border-white/60 focus:ring-2 focus:ring-white/20 transition-all"
              />
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#2B8FAB] font-bold text-[14px] hover:bg-white/90 transition-all shadow-lg shadow-white/20 hover:shadow-white/30">
                S&apos;abonner
              </button>
            </div>
            <p className="text-[12px] text-white/40 mt-4">
              Aucun spam. Désabonnement possible à tout moment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─────────── MODAL ─────────── */}
      <AnimatePresence>
        {modalArticle && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={() => setModalArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl max-w-[760px] w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setModalArticle(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/95 hover:bg-white shadow-lg transition-all"
              >
                <X className="w-5 h-5 text-penn-navy" />
              </button>

              {modalArticle.image && (
                <div className="relative h-[300px]">
                  <Image
                    src={modalArticle.image}
                    alt={modalArticle.title}
                    fill
                    sizes="760px"
                    className="object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-penn-navy/60 to-transparent rounded-t-2xl" />
                </div>
              )}

              <div className="p-8 md:p-10">
                <div className="flex items-center flex-wrap gap-3 mb-5">
                  <div className={`px-3 py-1 rounded-full text-[12px] font-bold ${tagColors[modalArticle.tag].bg} ${tagColors[modalArticle.tag].text} border ${tagColors[modalArticle.tag].border}`}>
                    {modalArticle.tag}
                  </div>
                  <div className="flex items-center gap-1.5 text-[14px] text-penn-body/50">
                    <Calendar className="w-4 h-4 text-[#2B8FAB]" />
                    {modalArticle.date}
                  </div>
                </div>

                <h2 className="text-[24px] md:text-[28px] font-extrabold text-penn-navy mb-6 leading-tight">
                  {modalArticle.title}
                </h2>

                {modalArticle.fullContent ? (
                  <div className="text-[15px] text-penn-body/80 leading-relaxed space-y-5 whitespace-pre-line">
                    {modalArticle.fullContent}
                  </div>
                ) : (
                  <p className="text-[15px] text-penn-body/80 leading-relaxed">
                    {modalArticle.description}
                  </p>
                )}

                <div className="mt-8 pt-6 border-t border-penn-border flex flex-wrap gap-4">
                  <Link
                    href="/preinscription"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2B8FAB] text-white text-[13px] font-bold hover:bg-[#2B8FAB]/90 transition-all"
                  >
                    Rejoindre EBS <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/nos-programmes"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-penn-border text-penn-navy text-[13px] font-bold hover:border-[#2B8FAB]/30 hover:text-[#2B8FAB] transition-all"
                  >
                    Voir les formations
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
