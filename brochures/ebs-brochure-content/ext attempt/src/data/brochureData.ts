import { CurriculumModule, CareerOption, CertificationItem, InternationalPathway, AcademicPartner } from '../types';

export const BROCHURE_META = {
  institution: "ESPIMA BUSINESS SCHOOL",
  institutionShort: "EBS",
  tagline: ["PENSEZ", "INNOVER", "RÉUSSIR"],
  degree: "Licence • Bac+3 • 3 ans",
  accreditation: "DIPLÔME ACCRÉDITÉ PAR L'ÉTAT TUNISIEN",
  programName: "LICENCE EN FINANCE",
  headlineIntro: "MAÎTRISEZ LA FINANCE, LES DONNÉES ET L'INTELLIGENCE ARTIFICIELLE POUR ACCOMPAGNER LES DÉCISIONS FINANCIÈRES DE DEMAIN.",
  introDescription: "La Licence en Finance d'EBS prépare des spécialistes capables d'évoluer dans les domaines de la finance d'entreprise, de la banque, des marchés financiers et de la FinTech. Grâce aux certifications Bloomberg, à l'analyse de données et à l'Intelligence Artificielle, vous développerez des compétences techniques et analytiques particulièrement recherchées par les entreprises et les institutions financières.",
  contact: {
    website: "www.ebs.tn",
    phone1: "+216 71 18 26 25",
    phone2: "+216 71 182 635",
    email: "info@ebs.tn",
    address: "Les berges du Lac 3 - Tunis",
  },
  pillarsPage1: [
    { title: "EXPERTISE FINANCIÈRE", icon: "TrendingUp", desc: "Maîtrise approfondie des instruments financiers, corporate finance et valorisation." },
    { title: "DÉCISIONS ÉCLAIRÉES", icon: "Landmark", desc: "Capacité d'analyse stratégique basée sur des modèles financiers éprouvés." },
    { title: "CERTIFICATIONS INCLUSES", icon: "Award", desc: "Bloomberg, Google, IBM, Citi, Cisco sans frais de scolarité supplémentaires." },
    { title: "OUVERTURE INTERNATIONALE", icon: "Globe", desc: "Double diplômes et passerelles académiques en Italie, France et Canada." },
    { title: "CARRIÈRE D'AVENIR", icon: "Target", desc: "Insertion rapide dans les banques, cabinets d'audit, fonds d'investissement et FinTech." }
  ]
};

export const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    id: 1,
    title: "Comptabilité générale et analytique",
    semester: "Semestres 1 & 2",
    category: "Comptabilité",
    description: "Fondements des écritures comptables, bilan, compte de résultat et calcul des coûts de revient pour le pilotage d'entreprise.",
    keyConcepts: ["Bilan comptable", "Compte de résultat", "Amortissements", "Comptabilité par centres de coûts", "Soldes intermédiaires de gestion"]
  },
  {
    id: 2,
    title: "Mathématiques financières, statistiques et économétrie",
    semester: "Semestres 1 & 2",
    category: "Quantitative",
    description: "Modélisation des taux d'intérêt, actualisation, capitalisation, rentes, séries temporelles et régressions économétriques.",
    keyConcepts: ["Intérêts composés", "VAN & TRI", "Probabilités & lois de distribution", "Régressions linéaires multiples", "Économétrie appliquée"]
  },
  {
    id: 3,
    title: "Analyse financière et diagnostic d'entreprise",
    semester: "Semestres 3 & 4",
    category: "Finance",
    description: "Méthodologie de diagnostic de santé financière : structure financière, BFR, solvabilité, rentabilité et liquidité.",
    keyConcepts: ["Tableau de flux de trésorerie", "FRNG & BFR", "Ratios de rentabilité (ROE/ROA)", "Analyse du risque de faillite", "Diagnostic financier"]
  },
  {
    id: 4,
    title: "Marchés financiers et produits d'investissement",
    semester: "Semestres 3 & 4",
    category: "Finance",
    description: "Fonctionnement des bourses de valeurs, actions, obligations, devises (Forex) et produits dérivés.",
    keyConcepts: ["Marché actions & obligations", "Instruments de taux", "Swaps, Options & Futures", "Gestion d'actifs", "Stratégies de couverture"]
  },
  {
    id: 5,
    title: "Finance d'entreprise et évaluation (DCF, comparables)",
    semester: "Semestres 4 & 5",
    category: "Finance",
    description: "Valorisation de sociétés par la méthode des flux actualisés (Discounted Cash Flow) et par les multiples boursiers.",
    keyConcepts: ["Modèle DCF", "Coût moyen pondéré du capital (WACC)", "Multiples de valorisation (EV/EBITDA, P/E)", "Fusions & Acquisitions (M&A)", "Structure du capital"]
  },
  {
    id: 6,
    title: "Contrôle de gestion et reporting financier",
    semester: "Semestres 4 & 5",
    category: "Comptabilité",
    description: "Élaboration des budgets prévisionnels, tableaux de bord interactifs, suivi des écarts et reporting IFRS.",
    keyConcepts: ["Gestion budgétaire", "Tableaux de bord (KPIs)", "Normes comptables IFRS", "Analyse des écarts", "Audit interne"]
  },
  {
    id: 7,
    title: "FinTech et finance numérique",
    semester: "Semestres 5 & 6",
    category: "Technologie & IA",
    description: "Transformation digitale des services bancaires, néobanques, blockchain, crypto-actifs et plateformes de paiement.",
    keyConcepts: ["Blockchain & Smart Contracts", "Néobanques & Crowdfunding", "RegTech & SupTech", "Open Banking & API", "Paiements mobiles"]
  },
  {
    id: 8,
    title: "ESG, finance durable et gestion des risques",
    semester: "Semestres 5 & 6",
    category: "Droit & RSE",
    description: "Critères Environnementaux, Sociaux et de Gouvernance, obligations vertes (green bonds) et cadres de gestion des risques (Bâle III).",
    keyConcepts: ["Critères ESG", "Green Bonds & Climat", "Accords de Bâle III & IV", "Risque de crédit & marché", "Conformité & éthique"]
  },
  {
    id: 9,
    title: "Python appliqué à la finance",
    semester: "Semestres 5 & 6",
    category: "Technologie & IA",
    description: "Automatisation de l'analyse quantitative, manipulation de jeux de données avec Pandas et modélisation de portefeuilles en Python.",
    keyConcepts: ["Pandas & NumPy pour la finance", "Backtesting de stratégies", "Optimisation de portefeuille de Markowitz", "Machine Learning financier", "Visualisation de données financières"]
  },
  {
    id: 10,
    title: "Utilisation du Terminal Bloomberg",
    semester: "Semestres 5 & 6",
    category: "Technologie & IA",
    description: "Prise en main opérationnelle du terminal de référence mondial : cours en temps réel, données macroéconomiques et Bloomberg Market Concepts (BMC).",
    keyConcepts: ["Navigation Terminal Bloomberg", "Fonctions de marché (DES, HP, WEI)", "Analyse fondamentale & technique", "Certification BMC", "Surveillance économique globale"]
  }
];

export const CAREER_OPTIONS: CareerOption[] = [
  {
    id: "analyste",
    title: "Analyste financier",
    iconName: "TrendingUp",
    description: "Évalue la valeur et les perspectives des entreprises, réalise des modèles prévisionnels et émet des recommandations d'investissement.",
    sectors: ["Banque d'investissement", "Sociétés de gestion", "Cabinets d'audit"]
  },
  {
    id: "charge-etudes",
    title: "Chargé d'études financières",
    iconName: "Search",
    description: "Effectue des études sectorielles, concurrentielles et macroéconomiques pour guider les décisions stratégiques.",
    sectors: ["Grandes entreprises", "Organismes financiers", "Fédérations professionnelles"]
  },
  {
    id: "gestionnaire-portefeuille",
    title: "Gestionnaire de portefeuille",
    iconName: "PieChart",
    description: "Pilote l'allocation d'actifs pour des clients institutionnels ou particuliers afin d'optimiser le ratio rendement/risque.",
    sectors: ["Fonds d'investissement", "Banques privées", "Compagnies d'assurances"]
  },
  {
    id: "conseiller-bancaire",
    title: "Conseiller bancaire",
    iconName: "Landmark",
    description: "Accompagne une clientèle d'entreprises ou de particuliers haut de gamme dans le financement de projets et placements.",
    sectors: ["Réseau bancaire commercial", "Crédit-bail", "Établissements de crédit"]
  },
  {
    id: "controleur-gestion",
    title: "Contrôleur de gestion",
    iconName: "Calculator",
    description: "Assure la rentabilité des activités via le budget, le calcul des coûts et la conception de dashboards de performance.",
    sectors: ["Industrie", "Distribution", "Services", "Santé"]
  },
  {
    id: "auditeur-junior",
    title: "Auditeur junior",
    iconName: "ClipboardCheck",
    description: "Vérifie la régularité et la sincérité des comptes d'entreprises selon les normes comptables nationales et internationales.",
    sectors: ["Cabinets d'audit (Big 4)", "Expertise comptable", "Audit interne"]
  },
  {
    id: "gestionnaire-tresorerie",
    title: "Gestionnaire de trésorerie",
    iconName: "Coins",
    description: "Optimise les flux de liquidités au jour le jour, prévient les risques de change et de taux, et négocie avec les banques.",
    sectors: ["Multinationales", "PME d'envergure", "Groupes de négoce international"]
  },
  {
    id: "entrepreneur-financier",
    title: "Entrepreneur financier",
    iconName: "UserCheck",
    description: "Lance une FinTech innovante, un cabinet de conseil en gestion de patrimoine ou une plateforme de services financiers numériques.",
    sectors: ["Startups FinTech", "Conseil indépendant", "Courtage en crédit"]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "google-prompting",
    partner: "Google",
    title: "Google Prompting Essentials",
    level: "Certifié International",
    category: "IA & Tech",
    description: "Maîtrise de l'ingénierie de prompt pour démultiplier la productivité avec les modèles de fondation IA de Google.",
    color: "#4285F4"
  },
  {
    id: "pwc-ia-productivite",
    partner: "PwC",
    title: "Renforcez votre productivité grâce aux outils d'IA",
    level: "Certifié PwC",
    category: "IA & Tech",
    description: "Application des outils d'IA générative aux workflows quotidiens des métiers de l'audit et du conseil.",
    color: "#D04A02"
  },
  {
    id: "cisco-ai",
    partner: "CISCO",
    title: "Apply AI: Update Your Resume",
    level: "Certifié Cisco",
    category: "IA & Tech",
    description: "Développement et valorisation de compétences numériques en IA appliquées au marché du travail moderne.",
    color: "#00bceb"
  },
  {
    id: "pwc-ia-leaders",
    partner: "PwC",
    title: "Découvrir l'IA pour les leaders en finance",
    level: "Certifié PwC",
    category: "IA & Tech",
    description: "Transformation des directions financières grâce au Machine Learning, reporting prédictif et automatisation.",
    color: "#D04A02"
  },
  {
    id: "citi-company",
    partner: "Citi",
    title: "Company Essentials",
    level: "Certifié Citi",
    category: "Finance & Comptabilité",
    description: "Immersion dans les opérations, la culture et l'excellence bancaire d'un géant mondial de Wall Street.",
    color: "#003B70"
  },
  {
    id: "ibm-finance",
    partner: "IBM",
    title: "Finance & Accounting Essentials",
    level: "Certifié IBM",
    category: "Finance & Comptabilité",
    description: "Standardisation des flux comptables et financiers numériques propulsés par les méthodologies IBM.",
    color: "#0530AD"
  },
  {
    id: "bloomberg-fundamentals",
    partner: "Bloomberg",
    title: "Bloomberg Finance Fundamentals",
    level: "Certification Officielle Bloomberg",
    category: "Finance & Comptabilité",
    description: "Compréhension pratique du langage financier mondial et des dynamiques macroéconomiques sur les marchés.",
    color: "#5C1D8D"
  },
  {
    id: "mayer-brown",
    partner: "MAYER BROWN",
    title: "Introduction to Finance",
    level: "Certifié Juridique & Finance",
    category: "Finance & Comptabilité",
    description: "Aspects juridiques, contractuels et réglementaires des transactions financières internationales.",
    color: "#1E293B"
  },
  {
    id: "bloomberg-bmc",
    partner: "Bloomberg",
    title: "Bloomberg Market Concepts",
    level: "BMC Terminal Certification",
    category: "Finance & Comptabilité",
    description: "La référence mondiale en 4 modules : Economic Indicators, Currencies, Fixed Income et Equities sur Terminal.",
    color: "#5C1D8D"
  },
  {
    id: "citi-forage",
    partner: "Citi",
    title: "Finance - Simulation Forage",
    level: "Simulation Virtuelle Professionnelle",
    category: "Banque d'investissement",
    description: "Résolution de cas réels d'analyse financière et de structuration bancaire supervisés par Citi.",
    color: "#003B70"
  },
  {
    id: "jpmorgan-ib",
    partner: "JPMorgan",
    title: "Investment Banking",
    level: "Simulation Virtuelle J.P. Morgan",
    category: "Banque d'investissement",
    description: "M&A, levée de fonds, modélisation de dette (LBO) et présentations de pitchs aux comités d'investissement.",
    color: "#111827"
  }
];

export const INTERNATIONAL_PATHWAYS: InternationalPathway[] = [
  {
    number: "01",
    title: "1 année à EBS → Bachelor 2 en Italie",
    destination: "Italie",
    destinationName: "Link University – Rome",
    flag: "🇮🇹",
    description: "Après validation de la première année de Licence à EBS, possibilité de poursuivre en 2ᵉ année de Bachelor à Link University, selon le programme choisi et les conditions d'admission.",
    partners: ["Università degli Studi Link - Rome"],
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "02",
    title: "2 années à EBS → Bachelor 3 à l'international",
    destination: "Italie ou France",
    destinationName: "Établissements partenaires en Italie ou en France",
    flag: "🇫🇷",
    description: "Après deux années de Licence validées à EBS, possibilité d'intégrer la 3ᵉ année de Bachelor proposée par des établissements partenaires en Italie ou en France, selon la filière et les conditions d'admission.",
    partners: ["Paris School of Business", "IDRAC Business School", "EM Normandie", "Excelia"],
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "03",
    title: "Licence à EBS → Master à l'international",
    destination: "France • Canada • Italie",
    destinationName: "France • Canada • Italie",
    flag: "🇨🇦",
    description: "Après l'obtention de la Licence EBS, possibilité de poursuivre en Master, Master Grande École, MSc ou autre cursus Bac+5 dans l'une de nos partenaires en France, Canada ou Italie, selon l'établissement, la spécialité et les conditions d'admission.",
    partners: ["UQAT (Canada)", "Paris School of Business", "EPITECH", "IGEFI", "IFAG", "Link University"],
    image: "https://images.unsplash.com/photo-1507992781348-310259076fa0?auto=format&fit=crop&w=800&q=80"
  }
];

export const ACADEMIC_PARTNERS: AcademicPartner[] = [
  {
    id: "uqat",
    name: "UQAT",
    country: "Canada",
    city: "Québec",
    type: "Université publique",
    tagline: "UNIVERSITÉ DU QUÉBEC EN ABITIBI-TÉMISCAMINGUE",
    logoType: "uqat"
  },
  {
    id: "link",
    name: "UNIVERSITÀ DEGLI STUDI LINK",
    country: "Italie",
    city: "Rome",
    type: "Université d'excellence",
    tagline: "Link Campus University Rome",
    logoType: "link"
  },
  {
    id: "epitech",
    name: "EPITECH.",
    country: "France & International",
    type: "École de technologie",
    tagline: "L'ÉCOLE DE L'INNOVATION ET DE L'EXPERTISE INFORMATIQUE",
    logoType: "epitech"
  },
  {
    id: "psb",
    name: "Paris School of Business",
    country: "France",
    city: "Paris",
    type: "Grande École de Commerce",
    tagline: "Accréditée AMBA & EFMD",
    logoType: "psb"
  },
  {
    id: "eklore",
    name: "éklore-ed",
    country: "France",
    city: "Pau / Paris",
    type: "School of Management",
    tagline: "École de Management & Innovation",
    logoType: "eklore"
  },
  {
    id: "excelia",
    name: "excelia",
    country: "France",
    city: "La Rochelle / Paris / Tours",
    type: "Business School Triple Couronnée",
    tagline: "BUSINESS SCHOOL (AACSB, EQUIS, AMBA)",
    logoType: "excelia"
  },
  {
    id: "em-normandie",
    name: "EM NORMANDIE",
    country: "France",
    city: "Le Havre / Caen / Paris / Oxford / Dublin",
    type: "Grande École de Management",
    tagline: "Fondée en 1871",
    logoType: "em-normandie"
  },
  {
    id: "idrac",
    name: "IDRAC",
    country: "France",
    city: "Lyon / Paris / Bordeaux / Nantes / etc.",
    type: "Business School",
    tagline: "BUSINESS SCHOOL",
    logoType: "idrac"
  },
  {
    id: "igefi",
    name: "IGEFI",
    country: "France",
    city: "Paris / Lyon",
    type: "École de la Finance & Comptabilité",
    tagline: "École des métiers de la finance d'entreprise et de l'expertise comptable",
    logoType: "igefi"
  },
  {
    id: "epsi",
    name: "epsi",
    country: "France",
    type: "École d'ingénierie informatique",
    tagline: "l'école d'ingénierie informatique",
    logoType: "epsi"
  },
  {
    id: "ifag",
    name: "IFAG",
    country: "France",
    type: "École de management & entrepreneuriat",
    tagline: "Ecole de management - Depuis 1968",
    logoType: "ifag"
  },
  {
    id: "sup-de-com",
    name: "SUP DE COM",
    country: "France",
    type: "École de communication",
    tagline: "L'école de tous les métiers de la communication",
    logoType: "sup-de-com"
  }
];

export const PAGE_3_WHY_EBS = [
  {
    title: "APPROCHE PROFESSIONNALISANTE",
    description: "Des contenus conçus en lien avec les réalités du secteur financier et bancaire.",
    icon: "Briefcase"
  },
  {
    title: "ENCADREMENT DE QUALITÉ",
    description: "Des enseignants et intervenants experts, à l'écoute et proches des étudiants.",
    icon: "Users"
  },
  {
    title: "APPRENTISSAGE PAR LA PRATIQUE",
    description: "Mises en situation réelles, études de cas, outils professionnels (Bloomberg, Python, etc.), projets concrets.",
    icon: "Cog"
  },
  {
    title: "OUVERTURE & PERSPECTIVES INTERNATIONALES",
    description: "Des partenariats académiques et des passerelles vers des universités et écoles de renom.",
    icon: "Globe"
  },
  {
    title: "CERTIFICATIONS INCLUSES",
    description: "Des certifications reconnues pour renforcer votre profil, sans frais supplémentaires.",
    icon: "Award"
  },
  {
    title: "STAGE EN ENTREPRISE",
    description: "Des opportunités de stage en entreprise pour acquérir une expérience solide et booster votre employabilité.",
    icon: "Handshake"
  },
  {
    title: "PROJETS CONCRETS & CHALLENGE ENTREPRENEURIAT",
    description: "Des projets innovants et un challenge pour développer votre esprit d'initiative et votre créativité.",
    icon: "Lightbulb"
  }
];

export const PAGE_3_SOFT_SKILLS = [
  {
    title: "Esprit critique et capacité de décision",
    description: "Évaluer les situations, anticiper les risques et choisir la meilleure option.",
    icon: "BrainCircuit"
  },
  {
    title: "Communication efficace",
    description: "S'exprimer clairement à l'oral et à l'écrit et convaincre avec impact.",
    icon: "MessageSquareText"
  },
  {
    title: "Gestion du temps et des priorités",
    description: "Planifier, prioriser et optimiser son organisation pour gagner en efficacité.",
    icon: "Clock"
  },
  {
    title: "Compétences linguistiques : Anglais & Français",
    description: "Renforcer vos compétences linguistiques avec une préparation aux certifications TOEFL & TCF.",
    icon: "Languages"
  }
];

export const PEDAGOGY_STEPS = [
  { label: "Cours interactifs", icon: "Presentation" },
  { label: "Travaux collaboratifs", icon: "Users" },
  { label: "Études de cas réelles", icon: "BarChart3" },
  { label: "Projet concret en entreprise", icon: "Puzzle" },
  { label: "Évaluations continues", icon: "ClipboardList" },
  { label: "Accompagnement personnalisé", icon: "UserCheck" }
];
