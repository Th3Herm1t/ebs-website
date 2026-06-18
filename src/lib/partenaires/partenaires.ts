export interface PartnerData {
  slug: string;
  name: string;
  country: string;
  countryCode?: string;
  type: string;
  logo?: string;
  heroImage?: string;
  presentation: string;
  programmes: { nom: string; duree: string; details: string; richExpanded?: { type: "bullets" | "grid" | "text" | "thesis"; items?: string[]; thesisProjects?: { author: string; year: string; topic: string }[]; testimonial?: { quote: string; name: string; role: string; photo: string }; extra?: string; bourse?: string }[] }[];
  eligibilite: string;
  avantages: string[];
  debouches: string[];
  keyStats?: { label: string; value: string; icon?: string }[];
  pricing?: { label: string; amount: string; period: string; note?: string; featured?: boolean }[];
  imageSection?: { src: string; caption?: string };
  professors?: { nom: string; img: string }[];
  testimonials?: { quote: string; name: string; role: string; photo: string; programKey: string }[];
  residencyBadge?: { text: string; sub: string };
  accreditationImage?: string;
  accreditations?: { label: string; description: string; logo?: string }[];
  extraSections?: { title: string; body: string; }[];
}

export const partenaires: Record<string, PartnerData> = {
  audencia: {
    slug: "audencia",
    name: "Audencia",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/logo-audencia.png",
    heroImage: "/images/heroes/hero-alumni.jpg",
    type: "Grande École de Commerce — Triple accréditée EQUIS · AACSB · AMBA",
    presentation: "Triplement accréditée (EQUIS, AACSB et AMBA), Audencia Business School est membre de la Conférence des Grandes Écoles. Classée 11ème meilleure école de commerce en France (Le Figaro Étudiant) et 6ème par l'Express-NextEdu, Audencia compte 11 campus dans le monde, 180 professeurs permanents et +900 entreprises partenaires. Fondée à Nantes, elle forme depuis plus d'un siècle des leaders responsables et audacieux.",
    programmes: [
      { nom: "Bachelor in Management", duree: "1 an (L3)", details: "Accès après avoir effectué les 2 premières années à EBS. Formation post-bac en 3 ans sur le campus de Nantes." },
      { nom: "PGE — Programme Grande École (Grade de Master)", duree: "2 ans", details: "Accès après avoir obtenu la Licence à EBS. Programme visé Bac+5, classé 25ème Master in Management Monde (Financial Times). Spécialisations en finance, marketing, management, entrepreneuriat." },
      { nom: "MSc — Master of Science (M1 ou M2)", duree: "1 ou 2 ans", details: "Inscription en M1 après la Licence EBS, ou en M2 après le M1 à EBS. Large choix de spécialisations en finance, marketing, management international, supply chain, data." },
    ],
    eligibilite: "Être inscrit à EBS. Avoir 12 de moyenne sur les années précédant celle de l'inscription. Avoir un bon niveau d'anglais et de français. Étude de dossier et entretien de sélection.",
    avantages: [
      "Triple accréditation EQUIS + AACSB + AMBA — top 1% mondial des écoles de commerce",
      "Classée 11ème meilleure école de commerce en France (Le Figaro)",
      "11 campus en France et à l'international (Nantes, Paris, Shenzhen, São Paulo, Sydney...)",
      "180 professeurs permanents, +900 entreprises partenaires",
      "90% des diplômés trouvent un emploi dans les 6 mois",
      "+47 000 alumni dans le monde entier",
      "Visa étudiant France facilité par la convention EBS — Audencia",
      "Parcours en alternance possibles sur certains programmes",
    ],
    debouches: [
      "Manager international / Chef de projet",
      "Directeur marketing / Brand Manager",
      "Analyste financier / Banquier d'affaires",
      "Consultant en stratégie (MBB, Big 4)",
      "Entrepreneur / Fondateur de startup",
      "Supply Chain Manager / Responsable logistique",
      "Data Analyst / Business Intelligence Manager",
    ],
    keyStats: [
      { label: "Étudiants", value: "7 000+" },
      { label: "Campus", value: "11" },
      { label: "Entreprises", value: "900+" },
      { label: "Alumni", value: "47 000+" },
    ],
    accreditations: [
      { label: "AACSB", description: "Accréditation mondiale de référence — seules 5% des écoles la détiennent", logo: "/images/partenaires-academiques/AACSB-logo-accredited-color-PMS_Website-1024x346.png" },
      { label: "EQUIS", description: "Label d'excellence académique et internationale de l'EFMD", logo: "/images/partenaires-academiques/EFMD-Global-EQUIS-Accredited-Pantonelm.png" },
      { label: "AMBA", description: "Accréditation de référence pour les programmes MBA et post-graduate", logo: "/images/partenaires-academiques/amba-logo-association-of-mba-accredited-1244274_copie-removebg-preview.png" },
    ],
  },
  uqat: {
    slug: "uqat",
    name: "UQAT",
    country: "🇨🇦 Canada",
    countryCode: "CA",
    logo: "/images/partenaires-academiques/uqat.png",
    heroImage: "https://www.uqat.ca/resources/medias/covers/mait-en-gestion-de-projet-profil-professionnel.jpg",
    type: "Université publique québécoise — Membre du réseau Université du Québec",
    presentation: "L'Université du Québec en Abitibi-Témiscamingue (UQAT) est une université publique canadienne affiliée au réseau de l'Université du Québec qui compte dix établissements. Elle offre plus de 100 programmes d'études couvrant les trois cycles d'études (Bachelor, Maîtrise et Doctorat) dans des domaines variés. Avec ses 14 chaires de recherche et ses 11 unités de recherche, l'UQAT est première au Canada pour le volume de recherche par étudiant de cycles supérieurs.",
    programmes: [
      {
        nom: "MGP — Maîtrise en Gestion de Projet (profil professionnel)",
        duree: "2 ans",
        details: "L'objectif fondamental du programme MGP est de former des gestionnaires dotés d'une vision stratégique et intégrée du domaine, aptes à gérer stratégiquement et efficacement des projets, programmes et portefeuilles, de leur conception jusqu'à l'obtention des bénéfices. Programme de cours (profil professionnel).",
        richExpanded: [
          { type: "bullets", items: ["L'utilisation d'outils techniques vous permettant de planifier et de gérer tout type de projet et d'en faire le suivi.", "Une formation offerte à temps partiel (cours de soir et de fin de semaine) qui vous permet de concilier les études, le travail et la famille.", "Des professeurs d'expérience et des chargés de cours chevronnés qui vous offrent un enseignement pratique de la gestion de projet."], extra: "Forces de la MGP" },
          { type: "text", testimonial: { quote: "J'ai pu devenir directrice générale d'une entreprise du secteur hôtelier grâce au DESS en gestion de projet qui m'a donné toutes les compétences nécessaires.", name: "Zabrina Rojas", role: "Diplômée DESS + Maîtrise en gestion de projet", photo: "https://www.uqat.ca/resources/medias/etudes/temoignages/zabrina-rojas.jpg" } },
          { type: "text", bourse: "Bourse d'accueil : 25% des frais de scolarité majorés couverts pour les étudiants internationaux, pour 6 sessions consécutives." },
        ],
      },
      {
        nom: "MGO — Maîtrise en Gestion des Organisations (profil recherche)",
        duree: "2 ans",
        details: "Cette maîtrise vise à développer vos connaissances et vos habiletés en recherche, vous permettant de faire progresser des organisations et de contribuer à l'avancement du savoir. Innovation, entrepreneuriat, efficacité organisationnelle, gestion du changement, développement régional ou mondialisation des échanges — la MGO enrichira votre vision de gestionnaire par de nouvelles perspectives.",
        richExpanded: [
          { type: "grid", items: ["Changement organisationnel et RH", "Climat psychologique au travail", "Développement durable (secteur minier)", "Développement local et régional", "Entrepreneuriat", "Évaluation de la performance", "Gestion allégée (Lean management)", "Nouveaux modèles d'affaires électroniques", "Systèmes d'information et TI"], extra: "Champs de recherche" },
          { type: "thesis", thesisProjects: [{ author: "A. Ben Abdel Wahed", year: "2024", topic: "Facteurs de rétention des employés — secteur manufacturier" }, { author: "M. Labrecque-Denis", year: "2024", topic: "Développement des écosystèmes technocréatifs en régions périphériques" }, { author: "M-P. Côté", year: "2023", topic: "Responsabilité sociale et identification sociale des employés" }, { author: "K. Gareau", year: "2023", topic: "Fidélisation des donateurs — modélisation du parcours philanthropique" }, { author: "É. Alain", year: "2020", topic: "Modèle intégrant créativité et analyse fonctionnelle en innovation" }], extra: "Thèses récentes" },
          { type: "text", testimonial: { quote: "Étudier à la MGO a vraiment été l'une des meilleures décisions de ma vie. L'encadrement attentif et bienveillant des professeurs a vraiment fait la différence.", name: "Larissa Fomena Neuchy", role: "Finissante MGO, étudiante internationale", photo: "https://www.uqat.ca/resources/medias/etudes/temoignages/llarissa-fomena-neuchy.jpg" } },
          { type: "text", bourse: "Bourse d'accueil : 50% des frais de scolarité majorés couverts pour les étudiants internationaux, pour 4 sessions consécutives." },
        ],
      },
    ],
    eligibilite: "Détenir le diplôme de Licence ou de Master d'ESPIMA Business School (études équivalentes au grade de bachelier au Québec) ou l'équivalent ; Avoir réussi les cours avec une moyenne équivalente à un minimum de 11 sur 20 ; Avoir réussi le programme de préparation pour la maîtrise en gestion de projet préparé par ESPIMA Business School ; Satisfaire aux conditions d'admission en vigueur du programme MGP de l'UQAT ; Posséder une connaissance adéquate du français et une compréhension suffisante de l'anglais.",
    avantages: [
      "Diplôme de Maîtrise d'une université publique canadienne reconnu à l'échelle internationale",
      "Maîtrise en gestion de projet particulièrement reconnue en entreprise",
      "Frais de scolarité identiques à ceux des étudiants canadiens (tarifs réduits)",
      "Région dynamique avec plusieurs opportunités d'emplois",
      "Possibilité de jobs étudiants à temps plein sur le campus et à temps partiel en dehors",
      "Logement disponible sur le campus",
      "Visa étudiant facilité grâce à la convention inter-universitaire EBS–UQAT",
      "Possibilité de résidence permanente via le Programme de l'expérience québécoise (PEQ)",
      "Bourses d'accueil couvrant 25% des frais de scolarité majorés (étudiants internationaux)",
    ],
    debouches: [
      "Gestionnaire de projets international (PMP-ready)",
      "Directeur de programme / PMO",
      "Consultant en management stratégique",
      "Chef de projet IT / Transformation digitale",
      "Analyste-chercheur en gestion des organisations",
      "Entrepreneur / Fondateur de startup",
    ],
    keyStats: [
      { label: "Programmes", value: "100+" },
      { label: "Chaires", value: "14" },
      { label: "Étudiants", value: "3 000+" },
      { label: "Campus", value: "3" },
    ],
    pricing: [
      { label: "Étudiants internationaux", amount: "~7 500", period: "€/an", note: "Bourse d'accueil : -25%" },
      { label: "Frais identiques", amount: "Mêmes frais", period: "que les Québécois", note: "Avantage exclusif EBS-UQAT", featured: true },
      { label: "Bourse d'accueil", amount: "25–50", period: "%", note: "Selon le programme choisi" },
    ],
    imageSection: { src: "/images/ebs-tn/img-uqat.png", caption: "Abitibi-Témiscamingue, Québec" },
    professors: [
      { nom: "Louis Belisle", img: "https://www.uqat.ca/resources/medias/professeurs/professeur-louis-belisle.jpg" },
      { nom: "Jérôme Deschênes", img: "https://www.uqat.ca/resources/medias/professeurs/professeur-jerome-deschenes.jpg" },
      { nom: "Augustin Épenda", img: "https://www.uqat.ca/resources/medias/professeurs/professeur-augustin-ependa.jpg" },
      { nom: "Julie-Andrée Girard", img: "https://www.uqat.ca/resources/medias/professeurs/profeseure-julie-andree-girard.jpg" },
      { nom: "Oscar Labra", img: "https://www.uqat.ca/resources/medias/professeurs/professeur-oscar-labra.jpg" },
      { nom: "Ahmed Marhfor", img: "https://www.uqat.ca/resources/medias/professeurs/professeur-ahmed-marhfor.jpg" },
      { nom: "Wassila Merkouche", img: "https://www.uqat.ca/resources/medias/professeurs/professeure-wassila-merkouche.jpg" },
      { nom: "Yasmine Mohamed", img: "https://www.uqat.ca/resources/medias/professeurs/professeure-yasmine-mohamed.jpg" },
      { nom: "Doina Muresanu", img: "https://www.uqat.ca/resources/medias/professeurs/professeure-doina-muresanu.jpg" },
      { nom: "Mycalle Trudel", img: "https://www.uqat.ca/resources/medias/professeurs/professeure-doina-muresanu.jpg" },
    ],
    testimonials: [
      { quote: "J'ai pu devenir directrice générale d'une entreprise du secteur hôtelier grâce au DESS en gestion de projet qui m'a donné toutes les compétences nécessaires.", name: "Zabrina Rojas", role: "Diplômée DESS + Maîtrise en gestion de projet", photo: "https://www.uqat.ca/resources/medias/etudes/temoignages/zabrina-rojas.jpg", programKey: "MGP" },
      { quote: "Étudier à la MGO a vraiment été l'une des meilleures décisions de ma vie. L'encadrement attentif et bienveillant des professeurs a vraiment fait la différence.", name: "Larissa Fomena Neuchy", role: "Finissante MGO, étudiante internationale", photo: "https://www.uqat.ca/resources/medias/etudes/temoignages/llarissa-fomena-neuchy.jpg", programKey: "MGO" },
    ],
    residencyBadge: { text: "Résidence permanente possible via le PEQ", sub: "Programme de l'expérience québécoise" },
  },

  "em-normandie": {
    slug: "em-normandie",
    name: "EM Normandie",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/ebs-tn/EM_Normandie-Logo.png",
    type: "Grande École de Commerce — Triple accréditée EQUIS · AACSB · AMBA",
    presentation: "150 ans d'innovations et de conquêtes ont permis à l'EM Normandie de s'imposer comme l'une des meilleures Business Schools mondiales. Triple accréditée EQUIS, AACSB et AMBA — seulement 1% des écoles de commerce dans le monde détiennent cette double accréditation. Classée 18ème meilleure école de commerce en France (Le Figaro Étudiant). Elle compte aujourd'hui plus de 5 800 apprenants répartis sur 6 campus : Caen, Le Havre, Paris, Dubaï, Dublin et Oxford.",
    programmes: [
      {
        nom: "Bachelor in Management",
        duree: "1 an (L3)",
        details: "Accès après avoir effectué les 2 premières années à EBS. Formation en management, marketing et commerce international.",
      },
      {
        nom: "PGE — Programme Grande École (Grade de Master)",
        duree: "2 ans",
        details: "Accès après avoir obtenu la Licence à EBS. Programme visé Bac+5, grade de Master reconnu par l'État français. Spécialisations : Management International · Digital Marketing · Finance · Entrepreneuriat · Supply Chain.",
      },
      {
        nom: "MSc — Master of Science (M1 ou M2)",
        duree: "1 ou 2 ans",
        details: "Inscription en M1 après la Licence EBS, ou en M2 après le M1 à EBS. 10 spécialisations disponibles : Financial Data Management, International Events, Logistics & Port, Luxury & Lifestyle, FinTech à Oxford, Digital Marketing à Dublin, etc.",
      },
    ],
    eligibilite: "Être inscrit à EBS. Avoir 12 de moyenne sur les années précédant celle de l'inscription. Avoir un bon niveau d'anglais et de français. Étude de dossier et entretien de sélection. Score TOEIC 750 minimum (filière anglophone) ou TOEIC 600 (filière francophone).",
    avantages: [
      "Triple accréditation EQUIS + AACSB + AMBA — top 1% mondial des écoles de commerce",
      "6 campus internationaux : Caen, Le Havre, Paris, Dubaï, Dublin, Oxford",
      "Réseau de 5 000+ entreprises partenaires, 70 000+ offres de stages/emplois",
      "1 000+ étudiants internationaux de 65 nationalités chaque année",
      "105 professeurs permanents, 100% titulaires d'un doctorat",
      "800+ intervenants professionnels de haut niveau (KPMG, Nestlé, Orange...)",
      "1 600 alternants par an, CFA intégré, 1 500 offres d'alternance",
      "400+ événements de recrutement par an",
      "Visa étudiant France facilité par la convention EBS — EM Normandie",
      "Diplôme visé par l'État français, grade de Master reconnu",
    ],
    debouches: [
      "Manager international / Chef de projet",
      "Directeur marketing / CMO",
      "Analyste financier / Banquier (M&A, FinTech)",
      "Consultant en stratégie (Big 4)",
      "Entrepreneur / Fondateur de startup",
      "Supply Chain Manager",
      "Expert Luxury & Lifestyle Management",
      "Directeur général (trajectoire 7-10 ans)",
    ],
    keyStats: [
      { label: "Étudiants", value: "5 800" },
      { label: "Campus", value: "6" },
      { label: "Nationalités", value: "65+" },
      { label: "Entreprises", value: "5 000+" },
    ],
    pricing: [
      { label: "MIM — Programme Grande École", amount: "~10 500", period: "€/an", note: "Master visé par l'État français" },
      { label: "MSc — Master of Science", amount: "~13 000", period: "€/an", note: "10 spécialisations disponibles" },
      { label: "MS — Mastère Spécialisé", amount: "~9 500", period: "€/an", note: "Bac+6, label CGE" },
    ],
    imageSection: { src: "/images/ebs-tn/img-page-em-presentiel.png" },
    accreditations: [
      { label: "AACSB", description: "La plus prestigieuse accréditation mondiale en management — seules 5% des écoles de commerce la détiennent" },
      { label: "EQUIS", description: "Label d'excellence académique et internationale décerné par l'EFMD" },
      { label: "AMBA", description: "Accréditation de référence pour les programmes MBA et post-graduate" },
    ],
    accreditationImage: "/images/ebs-tn/Calque-2-2.png",
    extraSections: [
      {
        title: "10 MSc — Masters of Science",
        body: "---LISTE\n1. MSc Financial Data Management — Paris (+Le Havre)\n2. MSc International Events Management — Paris (+Le Havre)\n3. MSc International Logistics & Port Management — Le Havre\n4. MSc International Marketing & Business Development — Caen (+Le Havre)\n5. MSc Marketing & Digital in Luxury & Lifestyle — Paris (+Le Havre)\n6. MSc Banking, Finance & FinTech — Oxford (+Le Havre)\n7. MSc Supply Chain Management — Le Havre\n8. MSc Sustainable Business & Strategy — Paris (+Le Havre)\n9. MSc Digital Strategy & Innovation — Paris (+Le Havre)\n10. MSc Digital Marketing & Sales — Dublin (+Le Havre)\n\nAccès en 1ère année (2 ans) ou 2ème année (1 an) selon le profil. Certaines spécialisations sont disponibles en alternance.\n\n[https://www.em-normandie.com/fr/mastere-specialise-master-of-science|Voir tous les MSc sur le site EM Normandie →]"
      },
      {
        title: "Qu'est-ce qu'une Grande École de Management ?",
        body: "Une Grande École forme des managers responsables, agiles, capables d'exercer leurs compétences dans une multitude de domaines : entrepreneuriat, logistique, Supply Chain, gestion des ressources humaines, commerce international, luxe, intelligence artificielle, marketing…\n\nUn haut niveau académique, des connexions étroites avec le monde de l'entreprise, une forte ouverture internationale, un accompagnement personnalisé et des investissements permanents en faveur de l'innovation pédagogique sont les principaux critères d'excellence attendus au sein d'une Grande École de management.\n\nLes Grandes Écoles reconnues au niveau mondial, comme l'EM Normandie, font l'objet d'accréditations internationales comme AACSB et EQUIS (seulement 1% des écoles de commerce dans le monde ont cette double accréditation)."
      }
    ],
  },

  psb: {
    slug: "psb",
    name: "PSB Paris School of Business",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/psb.png",
    type: "Grande École de Commerce — Triple accréditée AACSB · EQUIS · AMBA",
    presentation: "Paris School of Business est une Grande École de commerce triplement accréditée EQUIS, AACSB et AMBA. Membre de la Conférence des Grandes Écoles, elle est classée dans le top 3 des écoles de commerce post-bac à Paris et dans le top 20 en France (Le Figaro Étudiant). Fondée en 2015, elle compte 4 000+ étudiants, 20 000+ alumni et un campus moderne au cœur du 5ème arrondissement de Paris.",
    programmes: [
      { nom: "Bachelor in Management", duree: "1 an (L3)", details: "Accès après avoir effectué les 2 premières années à EBS. Bachelor Management International ou Bachelor Tech for Management." },
      { nom: "PGE — Programme Grande École (Grade de Master)", duree: "2 ans", details: "Accès après avoir obtenu la Licence à EBS. Cursus en 5 ans visé Bac+5. Spécialisations en Finance, Management, Marketing & Data, Commerce & Entrepreneuriat." },
      { nom: "MSc — Master of Science (M1 ou M2)", duree: "1 ou 2 ans", details: "Inscription en M1 après la Licence EBS, ou en M2 après le M1 à EBS. 10+ MSc : AI & Cybersecurity, International Finance, Luxury & Fashion, Supply Chain, Data Management, etc." },
    ],
    eligibilite: "Être inscrit à EBS. Avoir 12 de moyenne sur les années précédant celle de l'inscription. Avoir un bon niveau d'anglais et de français. Étude de dossier et entretien de sélection.",
    avantages: [
      "Triple accréditation AACSB + EQUIS + AMBA — top 1% mondial",
      "Classée dans le top 3 des écoles post-bac à Paris",
      "Campus moderne au cœur de Paris (5ème arrondissement)",
      "4 000+ étudiants, 20 000+ alumni",
      "Réseau international d'universités partenaires",
      "Alternance possible dans plusieurs programmes",
      "Visa étudiant France facilité via convention EBS",
      "Membre de la Conférence des Grandes Écoles (CGE)",
    ],
    debouches: [
      "Manager international / Business Developer",
      "Analyste financier / Contrôleur de gestion",
      "Digital Marketing Manager",
      "Consultant en stratégie",
      "Chef de produit / Product Manager",
      "Responsable Supply Chain",
      "Entrepreneur / Fondateur de startup",
      "Data Analyst / Business Intelligence",
    ],
    keyStats: [
      { label: "Étudiants", value: "4 000+" },
      { label: "Alumni", value: "20 000+" },
      { label: "Campus", value: "Paris" },
      { label: "Accréditations", value: "3" },
    ],
    accreditations: [
      { label: "AACSB", description: "Accréditation mondiale de référence en management", logo: "/images/partenaires-academiques/AACSB-logo-accredited-color-PMS_Website-1024x346.png" },
      { label: "EQUIS", description: "Label d'excellence académique et internationale de l'EFMD", logo: "/images/partenaires-academiques/EFMD-Global-EQUIS-Accredited-Pantonelm.png" },
      { label: "AMBA", description: "Accréditation de référence pour les programmes MBA", logo: "/images/partenaires-academiques/amba-logo-association-of-mba-accredited-1244274_copie-removebg-preview.png" },
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
    name: "Éklore-ed",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/eklore.png",
    type: "Grande École de Commerce — Accréditée EFMD · Membre CGE",
    presentation: "Éklore-ed, anciennement ESC Pau BS, est une Grande École de commerce accréditée EFMD et membre de la Conférence des Grandes Écoles. Elle propose des diplômes allant du Bac au Bac+5, en formation initiale et en alternance, tous reconnus par l'État, dans les domaines du management, de la gestion d'entreprises, du commerce et du marketing sportif. Avec ses 3 campus (Pau, Grenoble, Saint-Denis), 2 600+ étudiants et 21 000+ diplômés, éklore-ed allie excellence académique et bien-être étudiant.",
    programmes: [
      { nom: "Bachelor in Management", duree: "1 an (L3)", details: "Accès après avoir effectué les 2 premières années à EBS. Formation reconnue par l'État, disponible en initial ou alternance." },
      { nom: "PGE — Programme Grande École (Grade de Master)", duree: "2 ans", details: "Accès après avoir obtenu la Licence à EBS. Diplôme visé Bac+5, grade de Master. Spécialisations en management, gestion d'entreprises, commerce." },
      { nom: "Mastère Manager du Développement Commercial", duree: "2 ans", details: "Accès en M1 après la Licence EBS. Formation professionnalisante en développement commercial et management des ventes." },
    ],
    eligibilite: "Être inscrit à EBS. Avoir 12 de moyenne sur les années précédant celle de l'inscription. Avoir un bon niveau d'anglais et de français. Étude de dossier et entretien de sélection.",
    avantages: [
      "Accréditée EFMD — reconnaissance académique internationale",
      "Membre de la Conférence des Grandes Écoles (CGE)",
      "3 campus en France : Pau, Grenoble, Saint-Denis",
      "Diplômes reconnus par l'État du Bac au Bac+5",
      "Formations en initial et en alternance",
      "2 600+ étudiants, 21 000+ diplômés",
      "Pédagogie centrée sur le bien-être étudiant",
      "Visa étudiant France facilité via convention EBS",
      "Spécialisation unique en marketing sportif",
    ],
    debouches: [
      "Manager commercial / Business Developer",
      "Responsable marketing et communication",
      "Chef de projet / Product Manager",
      "Manager du développement commercial",
      "Entrepreneur / Créateur d'entreprise",
      "Responsable marketing sportif",
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
    logo: "/images/partenaires-academiques/link-university.jpeg",
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
