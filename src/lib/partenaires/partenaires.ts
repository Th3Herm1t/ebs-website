export interface PartnerData {
  slug: string;
  name: string;
  country: string;
  countryCode?: string;
  type: string;
  logo?: string;
  presentation: string;
  programmes: { nom: string; duree: string; details: string }[];
  eligibilite: string;
  avantages: string[];
  debouches: string[];
}

export const partenaires: Record<string, PartnerData> = {
  uqat: {
    slug: "uqat",
    name: "UQAT",
    country: "🇨🇦 Canada",
    countryCode: "CA",
    logo: "/images/partenaires-academiques/uqat.png",
    type: "Université publique québécoise — Membre du réseau Université du Québec",
    presentation: "L'Université du Québec en Abitibi-Témiscamingue (UQAT) est une université publique québécoise fondée en 1983. Membre du réseau de l'Université du Québec, elle est reconnue pour l'excellence de ses programmes en gestion de projets, management, informatique et sciences de l'administration.",
    programmes: [
      { nom: "Maîtrise en Gestion de Projets", duree: "1 an et demi", details: "Programme officiel reconnu PMP-compatible. Cours en présentiel à Val-d'Or ou Rouyn-Noranda." },
      { nom: "MBA — Maîtrise en Administration des Affaires", duree: "2 ans", details: "Option management, gestion internationale ou entrepreneuriat." },
      { nom: "Maîtrise en Sciences de la Gestion", duree: "2 ans", details: "Recherche ou application pratique. Finance, management, marketing." },
    ],
    eligibilite: "Tous les programmes EBS (Licences et Masters) sont éligibles à une poursuite d'études à l'UQAT, sous réserve des critères d'admission. Convention inter-universitaire EBS–UQAT facilitant la reconnaissance des crédits.",
    avantages: [
      "Visa étudiant facilité grâce à la convention inter-universitaire EBS–UQAT",
      "Reconnaissance des crédits EBS pour admission directe en Maîtrise",
      "Accès au marché de l'emploi canadien (Québec) dès le stage de fin d'études",
      "Possibilité de résidence permanente via le Programme de l'expérience québécoise (PEQ)",
      "Université publique : frais de scolarité accessibles",
      "Campus sécurisé, qualité de vie exceptionnelle",
    ],
    debouches: [
      "Gestionnaire de projets international",
      "Directeur de programme / PMO",
      "Consultant en management",
      "Chef de projet IT / IA",
      "Chercheur / Doctorant en gestion",
    ],
  },

  "em-normandie": {
    slug: "em-normandie",
    name: "EM Normandie Business School",
    country: "🇫🇷 France",
    countryCode: "FR",
    type: "Grande École de Commerce — Triple accréditée EQUIS, AACSB, AMBA",
    presentation: "Fondée en 1871 à Le Havre, l'EM Normandie Business School est l'une des plus anciennes et des plus reconnues grandes écoles de commerce françaises. Triple accréditée EQUIS, AACSB et AMBA, elle propose des programmes en management, finance, marketing et entrepreneuriat avec une forte dimension internationale.",
    programmes: [
      { nom: "Master Grande École (Programme visé Bac+5)", duree: "2 ans", details: "Spécialisations : Management International · Digital Marketing · Finance · Entrepreneuriat · Supply Chain." },
      { nom: "MSc Management International", duree: "1 an", details: "Accès direct depuis Master EBS. Cours en français et anglais." },
      { nom: "Bachelor in International Business (3ème année)", duree: "1 an", details: "Accès depuis Licence 2 EBS. Parcours international en anglais." },
    ],
    eligibilite: "Accès direct depuis les Licences et Masters EBS dans les domaines management, marketing, finance et digital. Convention de partenariat formelle EBS — EM Normandie.",
    avantages: [
      "Diplôme triple accrédité reconnu mondialement — visé par l'État français",
      "Campus sur 4 villes : Le Havre, Caen, Paris, Oxford — mobilité possible",
      "Réseau alumni de 28 000+ diplômés dans 100+ pays",
      "Stage de 6 mois obligatoire en entreprise internationale",
      "Visa étudiant France facilité par la convention EBS",
      "Rang régulièrement dans le top 20 des écoles de commerce françaises",
    ],
    debouches: [
      "Manager international / Chef de projet",
      "Directeur marketing / CMO",
      "Analyste financier / Banquier",
      "Consultant en stratégie",
      "Entrepreneur / Fondateur de startup",
      "Directeur général (trajectoire 7-10 ans)",
    ],
  },

  psb: {
    slug: "psb",
    name: "PSB Paris School of Business",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/psb.png",
    type: "Grande École de commerce et de management — Visée Bac+5",
    presentation: "PSB Paris School of Business est une grande école de commerce parisienne proposant des formations Bachelor et Master en management, finance, marketing, digital et innovation. Implantée au cœur de Paris, PSB bénéficie d'un réseau d'entreprises partenaires dense et d'une forte insertion professionnelle.",
    programmes: [
      { nom: "Master Grande École — Management", duree: "2 ans", details: "Spécialisation Finance, Marketing Digital, Entrepreneuriat ou Supply Chain." },
      { nom: "MSc Finance de Marché", duree: "1 an", details: "Spécialisation marchés financiers, M&A, gestion de portefeuille." },
      { nom: "MSc Marketing & Digital Business", duree: "1 an", details: "Digital marketing, e-commerce, data marketing." },
    ],
    eligibilite: "Accès depuis les Licences EBS (Management, Marketing, Finance). Convention directe EBS → PSB pour admission simplifiée.",
    avantages: [
      "Campus au cœur de Paris — accès à l'écosystème économique parisien",
      "Réseau d'entreprises partenaires actif à Paris et en Île-de-France",
      "Programmes disponibles en français et en anglais",
      "Admission facilitée depuis EBS grâce à la convention",
      "Visa étudiant France simplifié",
    ],
    debouches: [
      "Manager commercial / Business Developer",
      "Analyste financier / Contrôleur de gestion",
      "Digital Marketing Manager",
      "Responsable Supply Chain",
      "Chef de produit / Product Manager",
    ],
  },

  idrac: {
    slug: "idrac",
    name: "IDRAC Business School",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/idrac.png",
    type: "École supérieure de commerce et de management — 6 campus en France",
    presentation: "IDRAC Business School est une école de management présente sur 6 campus en France (Lyon, Bordeaux, Toulouse, Montpellier, Nantes, Paris). Elle propose des formations Bachelor et Master en management, marketing et commerce international, avec une forte orientation professionnalisante.",
    programmes: [
      { nom: "Master Management des Entreprises", duree: "2 ans", details: "Spécialisations : Commerce International · Marketing & Communication · Finance." },
      { nom: "Bachelor Commerce International (3ème année)", duree: "1 an", details: "Accès depuis Licence 2 EBS. En entreprise." },
    ],
    eligibilite: "Accès depuis les Licences EBS Management, Marketing et Finance. Convention EBS — IDRAC pour reconnaissance des crédits.",
    avantages: [
      "6 campus en France — choisir la ville souhaitée",
      "Forte insertion professionnelle : 90%+ d'emplois à 6 mois",
      "Réseau d'entreprises partenaires dans toutes les régions françaises",
      "Visa étudiant France facilité",
      "Frais de scolarité accessibles comparés aux grandes écoles parisiennes",
    ],
    debouches: [
      "Responsable commercial / Manager des ventes",
      "Chargé de marketing et communication",
      "Responsable achats / Supply Chain",
      "Chef de projet international",
      "Responsable RH",
    ],
  },

  ifag: {
    slug: "ifag",
    name: "IFAG École de Management",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/ifag.png",
    type: "École de management — Depuis 1968 — Groupe FIGS Education",
    presentation: "L'IFAG (Institut de Formation aux Affaires et à la Gestion) est une école de management fondée en 1968. Membre du Groupe FIGS Education, elle forme des managers opérationnels capables d'évoluer rapidement dans des fonctions de direction.",
    programmes: [
      { nom: "Master Management Général", duree: "2 ans", details: "Formation au management opérationnel avec forte composante pratique." },
      { nom: "MBA Management & Leadership", duree: "1 an (Bac+5)", details: "Pour profils expérimentés. Accès depuis Master EBS." },
    ],
    eligibilite: "Accès depuis les Licences EBS (Management, Marketing, Finance). Convention partenariale EBS — IFAG.",
    avantages: [
      "55+ ans d'expérience en formation management",
      "Réseau d'anciens étudiants dense dans toute la France",
      "Approche très orientée entreprise et management terrain",
      "Visa étudiant France facilité",
      "Campus dans les principales métropoles françaises",
    ],
    debouches: [
      "Manager opérationnel / Directeur de centre de profit",
      "Responsable RH / Directeur des ressources humaines",
      "Directeur commercial / Business Unit Manager",
      "Entrepreneur / Repreneur d'entreprise",
    ],
  },

  igefi: {
    slug: "igefi",
    name: "IGEFI",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/igefi.png",
    type: "École des métiers de la finance d'entreprise et de l'expertise comptable",
    presentation: "IGEFI est l'École des métiers de la finance d'entreprise et de l'expertise comptable. Spécialisée dans les filières finance, comptabilité et contrôle de gestion, elle forme des experts financiers directement opérationnels.",
    programmes: [
      { nom: "Master Finance d'entreprise & Expertise Comptable", duree: "2 ans", details: "Préparation au DSCG (Diplôme Supérieur de Comptabilité et de Gestion) possible." },
      { nom: "Mastère Contrôle de Gestion & Finance", duree: "1 an", details: "Contrôle de gestion, reporting, analyse financière avancée." },
    ],
    eligibilite: "Accès privilégié depuis la Licence Finance EBS et le Master Ingénierie Financière EBS. Convention directe EBS — IGEFI.",
    avantages: [
      "Spécialisation unique en finance d'entreprise et expertise comptable",
      "Passerelle vers les diplômes comptables reconnus (DCG, DSCG)",
      "Réseau de cabinets d'expertise comptable partenaires (Big4 et indépendants)",
      "Forte demande sur le marché de l'emploi : pénurie de profils qualifiés",
      "Visa étudiant France simplifié via convention EBS",
    ],
    debouches: [
      "Expert-comptable / Commissaire aux comptes (trajectoire)",
      "Contrôleur de gestion",
      "Directeur financier (CFO)",
      "Auditeur senior",
      "Analyste M&A / Corporate Finance",
    ],
  },

  eklore: {
    slug: "eklore",
    name: "Éklore ed. School of Management",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/eklore.png",
    type: "École de management innovante — Groupe FIGS Education",
    presentation: "Éklore ed. School of Management est une école de management innovante appartenant au Groupe FIGS Education. Elle propose des formations en management, marketing et entrepreneuriat avec une pédagogie résolument tournée vers l'innovation et les compétences du futur, dont l'Intelligence Artificielle.",
    programmes: [
      { nom: "Bachelor Management & Innovation", duree: "1 an (L3)", details: "Accès depuis Licence 2 EBS. Axé innovation et transformation digitale." },
      { nom: "Master Management des Organisations", duree: "2 ans", details: "Spécialisation Management & IA · Marketing Digital · Entrepreneuriat." },
    ],
    eligibilite: "Accès depuis les Licences EBS (Management, Marketing). Partenariat formel EBS — Éklore ed.",
    avantages: [
      "Pédagogie innovante centrée sur les compétences du futur (IA, digital)",
      "Synergies avec l'approche EBS (IA transversale, certifications)",
      "Réseau FIGS Education — accès à un réseau d'écoles complémentaires",
      "Visa étudiant France facilité",
    ],
    debouches: [
      "Manager de l'innovation",
      "Chef de projet digital",
      "Product Manager",
      "Entrepreneur / Intrapreneur",
      "Responsable transformation organisationnelle",
    ],
  },

  epitech: {
    slug: "epitech",
    name: "Epitech",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/epitech.png",
    type: "Grande École Informatique — Expert Tech & Innovation",
    presentation: "Epitech est l'École pour l'informatique et les nouvelles technologies, fondée en 1999. Reconnue comme l'une des meilleures écoles d'informatique en France et en Europe, elle forme des experts tech capables d'innover. Epitech est présente sur 15 campus en France et 5 campus à l'international.",
    programmes: [
      { nom: "Master of Science Informatique (Expert en Systèmes d'Information)", duree: "1 an (4ème ou 5ème année)", details: "Spécialisations : IA · Cybersécurité · Data · Cloud · Développement." },
      { nom: "Global Bachelor of Technology (année de mobilité)", duree: "1 an", details: "Mobilité internationale dans l'un des campus Epitech à l'étranger." },
    ],
    eligibilite: "Accès depuis la Licence Informatique (IA ou Cybersécurité) EBS. Convention EBS — Epitech pour admission simplifiée en Bac+4/5.",
    avantages: [
      "Diplôme reconnu Bac+5 par l'État français — Grade de Master",
      "Méthode pédagogique par projets (pas de cours magistraux) — Learning by doing",
      "15 campus France + 5 international (Barcelone, Berlin, Bruxelles, Montréal, Porto...)",
      "Réseau alumni très actif dans l'industrie tech",
      "Taux d'insertion professionnelle > 95% dans les 6 mois",
      "Visa étudiant France facilité",
    ],
    debouches: [
      "Développeur fullstack / Ingénieur logiciel",
      "Architecte cloud / DevOps Engineer",
      "Data Scientist / ML Engineer",
      "Expert cybersécurité / Pentester",
      "CTO / Fondateur de startup tech",
    ],
  },

  epsi: {
    slug: "epsi",
    name: "EPSI",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/epsi.png",
    type: "École d'ingénierie informatique — Titre RNCP Bac+5",
    presentation: "EPSI est une école d'ingénierie informatique proposant des formations de Bac+2 à Bac+5 dans les domaines du développement, de la cybersécurité, de l'IA et de la gestion de projets IT. Forte d'une pédagogie pratique et de partenariats avec les grandes entreprises tech, EPSI garantit une insertion professionnelle rapide.",
    programmes: [
      { nom: "Expert Informatique & Systèmes d'Information (Bac+5)", duree: "1–2 ans", details: "Spécialisations : Développement · Cybersécurité · Data & IA · Cloud." },
      { nom: "Concepteur Développeur d'Applications (Bac+3)", duree: "1 an", details: "Accès depuis Licence 2 EBS Informatique. Titre RNCP niveau 6." },
    ],
    eligibilite: "Accès depuis la Licence Informatique EBS (IA ou Cybersécurité). Convention EBS — EPSI. Intégration en Bac+4 (4ème année EPSI).",
    avantages: [
      "Titre RNCP Bac+5 reconnu par l'État — Grade de Master",
      "Formations disponibles en apprentissage (entreprise intégrée)",
      "Partenariats avec Capgemini, Atos, Orange, SNCF, BNP...",
      "6 campus France — choisir la ville souhaitée",
      "Visa étudiant France facilité via convention EBS",
      "Insertion pro > 92% dans les 3 mois après diplôme",
    ],
    debouches: [
      "Ingénieur développement logiciel",
      "Expert cybersécurité",
      "Architecte systèmes et réseaux",
      "Data Analyst / Data Engineer",
      "Chef de projet IT",
    ],
  },

  excelia: {
    slug: "excelia",
    name: "Excelia Business School",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/excelia.png",
    type: "Grande École de Commerce — Accréditée AACSB et EPAS (EFMD)",
    presentation: "Excelia Business School est une grande école de commerce accréditée AACSB et EPAS (EFMD), implantée à La Rochelle et Tours. Reconnue pour son excellence académique et son ouverture internationale, elle propose des programmes en management, tourisme, digital et supply chain avec une forte dimension RSE.",
    programmes: [
      { nom: "Master Grande École", duree: "2 ans", details: "Spécialisations : Digital Business · Supply Chain · Finance · RSE & Durabilité." },
      { nom: "MSc International Business", duree: "1 an", details: "En anglais. Pour titulaires d'un Bac+3/4. Accès depuis Licence EBS." },
      { nom: "Bachelor Business Administration (3ème année)", duree: "1 an", details: "Accès depuis Licence 2 EBS. Programme en anglais possible." },
    ],
    eligibilite: "Accès depuis les Licences EBS Management, Marketing et Finance. Convention EBS — Excelia pour admission facilitée.",
    avantages: [
      "Double accréditation AACSB + EPAS — reconnaissance internationale",
      "Campus à La Rochelle : qualité de vie exceptionnelle, ville dynamique",
      "Forte dimension RSE et durabilité — en phase avec enjeux ESG",
      "Réseau international : 80+ partenaires universitaires dans le monde",
      "Visa étudiant France facilité",
    ],
    debouches: [
      "Supply Chain Manager / Responsable logistique",
      "Responsable RSE & Développement Durable",
      "Digital Project Manager",
      "Manager international / Export Manager",
      "Consultant en transformation durable",
    ],
  },

  figs: {
    slug: "figs",
    name: "FIGS Education",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/figs (2).png",
    type: "Groupe d'enseignement supérieur — Réseau d'écoles spécialisées",
    presentation: "FIGS Education est un groupe d'enseignement supérieur regroupant plusieurs écoles spécialisées en France, dont IFAG, Éklore et d'autres établissements. Fort d'une expérience de plus de 50 ans dans la formation supérieure, FIGS Education couvre un large spectre de domaines : management, informatique, communication et finance.",
    programmes: [
      { nom: "Ensemble des programmes des écoles du réseau FIGS", duree: "Variable", details: "IFAG (Management) · Éklore (Management Innovation) · autres écoles FIGS selon disponibilité." },
    ],
    eligibilite: "Partenariat global EBS — FIGS Education donnant accès à l'ensemble des écoles du réseau FIGS selon le parcours EBS de l'étudiant.",
    avantages: [
      "Accès à un réseau d'écoles complémentaires via un seul partenariat",
      "Large couverture géographique en France",
      "Offres de formation diversifiées : management, communication, finance, tech",
      "Visa étudiant France facilité via convention EBS — FIGS",
    ],
    debouches: [
      "Selon l'école et la spécialisation choisies au sein du réseau FIGS Education",
    ],
  },

  "link-university": {
    slug: "link-university",
    name: "Link University",
    country: "🇮🇹 Italie",
    countryCode: "IT",
    type: "Université privée italienne reconnue par l'État italien — Campus Rome",
    presentation: "L'Università degli Studi Link (Link University) est une université privée italienne implantée à Rome. Reconnue par le Ministère de l'Enseignement Supérieur italien (MIUR), elle propose des programmes en management, sciences humaines, droit, communication et technologies. Partenaire stratégique d'EBS, Link University offre un accès à l'Europe du Sud dès la première année de Licence.",
    programmes: [
      { nom: "Bachelor en Sciences de l'Entreprise (2ème année)", duree: "2 ans (L2+L3)", details: "Accès direct dès la 1ère année de Licence EBS. Cours en anglais et en italien disponibles." },
      { nom: "MSc Human Resources Management", duree: "2 ans (Bac+5)", details: "Accès depuis Licence complète EBS en Management ou Marketing." },
      { nom: "MSc Project Planning and Management", duree: "2 ans (Bac+5)", details: "Accès depuis Licence EBS (Management, Informatique). Certification PMI-aligned." },
    ],
    eligibilite: "Accès privilégié depuis toutes les Licences EBS selon le niveau validé. Convention de partenariat EBS–Link University pour facilitation des démarches d'admission et de visa.",
    avantages: [
      "Accès possible dès la 1ère année de Licence EBS → intégration en Bachelor 2 à Rome",
      "Campus moderne au cœur de Rome — capitale européenne de culture et d'opportunités",
      "Université reconnue par l'État italien (MIUR) — diplôme homologué EU",
      "Cours disponibles en anglais — pas de niveau d'italien requis à l'entrée",
      "Visa étudiant Italie (Schengen) — accès à toute l'Europe",
      "Possibilité de travailler en Italie pendant les études (permis étudiant)",
      "Réseau Erasmus+ et mobilité dans toutes les universités européennes partenaires",
    ],
    debouches: [
      "Responsable RH / HR Business Partner",
      "Chef de projet / Project Manager certifié",
      "Consultant en management international",
      "Chargé de relations internationales",
      "Entrepreneur franco-italien ou euro-méditerranéen",
    ],
  },

  supdecom: {
    slug: "supdecom",
    name: "Sup'de Com",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/supdecom.png",
    type: "École de la communication et des médias — Bac+3 à Bac+5",
    presentation: "Sup'de Com est l'école de tous les métiers de la communication. Elle forme des professionnels de la communication, du marketing, des relations publiques et des médias digitaux. Forte d'une pédagogie pratique et de partenariats avec des agences et des marques, Sup'de Com garantit une excellente insertion dans les métiers de la communication.",
    programmes: [
      { nom: "Master Communication & Marketing Intégré", duree: "2 ans", details: "Communication corporate, relations presse, brand content, social media." },
      { nom: "MSc Digital Marketing & Social Media", duree: "1 an", details: "Accès depuis Licence Marketing EBS. Spécialisation digital et influence." },
      { nom: "Bachelor Communication (3ème année)", duree: "1 an", details: "Accès depuis Licence 2 EBS Marketing." },
    ],
    eligibilite: "Accès depuis la Licence Marketing EBS. Passerelle naturelle entre le marketing digital (EBS) et la communication professionnelle (Sup'de Com). Convention EBS — Sup'de Com.",
    avantages: [
      "Spécialisation unique dans tous les métiers de la communication",
      "6 campus France dans les principales métropoles",
      "Réseau de partenaires agences de communication (Havas, Publicis, TBWA...)",
      "Projets réels avec des marques partenaires dès la 1ère année",
      "Visa étudiant France facilité via convention EBS",
    ],
    debouches: [
      "Responsable communication",
      "Community Manager / Social Media Manager",
      "Chargé de relations presse",
      "Brand Content Manager",
      "Directeur de la communication (trajectoire 5-7 ans)",
    ],
  },

  gutech: {
    slug: "gutech",
    name: "GUtech",
    country: "🇴🇲 Oman",
    countryCode: "OM",
    logo: "/images/partenaires-academiques/gutech.png",
    type: "Université germanophone en partenariat avec RWTH Aachen (Allemagne) — English-taught programs",
    presentation: "GUtech (German University of Technology in Oman) est une université fondée en partenariat avec la RWTH Aachen University, l'une des meilleures universités techniques au monde. Implantée à Muscat (Oman), GUtech propose des programmes en anglais dans les domaines de l'informatique, de l'ingénierie, de l'architecture et du management.",
    programmes: [
      { nom: "MSc Information Technology", duree: "2 ans", details: "Spécialisations : Intelligent Systems · Cybersecurity · Data Science. Cours en anglais." },
      { nom: "MSc Applied Geosciences", duree: "2 ans", details: "Pour profils scientifiques. Cours en anglais." },
      { nom: "Bachelor of Science in Management (dernière année)", duree: "1 an", details: "Accès depuis Licence Management EBS. Cours en anglais." },
    ],
    eligibilite: "Accès depuis les Licences Informatique (IA et Cybersécurité) et Management EBS. Partenariat EBS — GUtech ouvrant des perspectives d'emploi dans les pays du Golfe.",
    avantages: [
      "Partenariat avec RWTH Aachen University — prestige académique européen",
      "Cours entièrement en anglais — ouverture internationale immédiate",
      "Implantation à Muscat : accès direct au marché de l'emploi du Golfe (EAU, Qatar, Arabie Saoudite, Oman)",
      "Opportunités d'emploi dans l'ingénierie, la tech et le management dans la région MENA",
      "Cadre de vie moderne, sécurisé, multiculturel",
      "Résidence et permis de travail accessibles après diplôme au Sultanat d'Oman",
    ],
    debouches: [
      "Ingénieur informatique / IT Specialist (marché du Golfe)",
      "Data Scientist / AI Specialist (EAU, Qatar, Arabie Saoudite)",
      "Expert cybersécurité (Golfe + international)",
      "Manager des opérations (MENA)",
      "Consultant tech (Moyen-Orient)",
    ],
  },

  redsup: {
    slug: "redsup",
    name: "RedSup Education",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/redsup.png",
    type: "Réseau d'enseignement supérieur — Formation et accompagnement",
    presentation: "RedSup Education est un réseau d'enseignement supérieur proposant des formations et un accompagnement vers les grandes écoles et universités partenaires. RedSup accompagne les étudiants internationaux dans leur intégration en France et l'accès aux parcours académiques supérieurs.",
    programmes: [
      { nom: "Accompagnement vers les grandes écoles partenaires du réseau", duree: "Variable", details: "Orientation, dossier de candidature, préparation aux entretiens, installation en France." },
    ],
    eligibilite: "Partenariat EBS — RedSup pour l'accompagnement des étudiants EBS dans leurs démarches d'intégration en France et l'accès aux programmes supérieurs.",
    avantages: [
      "Accompagnement personnalisé dans les démarches d'études en France",
      "Réseau d'écoles et universités partenaires en France",
      "Support administratif pour le visa étudiant et l'installation",
      "Aide à la recherche de logement étudiant en France",
      "Suivi post-arrivée en France",
    ],
    debouches: [
      "Accès facilité aux grandes écoles et universités françaises partenaires",
    ],
  },
};
