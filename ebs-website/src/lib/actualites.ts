export type ArticleTag =
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

export interface Article {
  id: string;
  title: string;
  date: string;
  sortKey: string;
  description: string;
  image?: string;
  tag: ArticleTag;
  fullContent?: string;
}

export const articleAlaUne: Article = {
  id: "arforghe-2022",
  title: "Accord de Partenariat entre l'ARFORGHE et l'Université Privée EBS",
  date: "08 Septembre 2022",
  sortKey: "2022-09-08",
  description:
    "Signature d'un accord stratégique avec l'Association des Responsables de Formation et de Gestion Humaine dans les Entreprises pour faciliter l'insertion professionnelle des étudiants.",
  image: "/images/ebs-tn/IMG_2-1024x683.jpg",
  tag: "Partenariat",
  fullContent: `ESPIMA BUSINESS SCHOOL (EBS), université privée tunisienne basée aux Berges du Lac 3, forte d'une expérience pédagogique riche et innovante de plus de dix ans, a signé le jeudi 8 Septembre 2022 un accord de partenariat avec l'Association des Responsables de Formation et de Gestion Humaine dans les Entreprises (ARFORGHE).\n\nLa signature du partenariat a eu lieu dans les locaux de EBS en présence des responsables des deux institutions : Mme Mounira BOUZOUITA (Présidente de l'ARFORGHE), M. Mohamed BOUKADHABA (Vice-Président de l'ARFORGHE, et DRH de ONE TECH HOLDING), M. Mohamed LATRACH (Secrétaire Général de l'ARFORGHE, et DRH d'ORANGE), M. Yahia BOUCHADDAK (Trésorier de l'ARFORGHE), Mme ATIA Zeïneb (Ex Présidente de l'ARFORGHE) et Mme Samia ANOUN (Responsable Administrative et Financière de l'ARFORGHE), d'une part, M. Abderraouf NAJAR (Président de l'Université EBS), M. Melik HICHRI (Directeur de EBS), Mme Yamina Gharbi (Responsable administrative chargée des relations externes) et M. Karim HANTOUS (Docteur en Management enseignant visiteur à ESPIMA Business School), d'autre part.\n\nCe partenariat a pour objectifs de permettre aux étudiants de EBS l'obtention de stages en entreprises affiliées de l'ARFORGHE, et surtout, de faciliter leur insertion sur le marché de l'emploi. Par ailleurs, ce partenariat permettra à l'EBS de faire bénéficier ses étudiants d'un enseignement plus pratique par l'intervention de professionnels et experts de l'ARFORGHE dans les différentes spécialités.`,
};

export const newArticles: Article[] = [
  {
    id: "a27", title: "EBS AI DAY : l'université augmentée par l'intelligence artificielle", date: "19 Mai 2026", sortKey: "2026-05-19", tag: "IA",
    description: "ESPIMA Business School a réuni experts, professionnels, enseignants et étudiants autour des applications concrètes de l'IA en marketing, communication et management, ainsi que de son intégration dans les programmes EBS.",
    image: "/images/ebs-tn/ebs-ai-day.png",
  },
  {
    id: "a28", title: "EBS & FIGS Education : des perspectives d'études en France pour les étudiants", date: "12 Mai 2026", sortKey: "2026-05-12", tag: "International",
    description: "Une séance d'information consacrée au réseau FIGS Education, aux poursuites d'études en France, aux démarches de visa et à l'accompagnement des étudiants dans leur projet de mobilité internationale.",
    image: "/images/ebs-tn/ebs-figs-education.png",
  },
  {
    id: "a29", title: "EBS Job Fair – AI Career Boost : rencontres et perspectives professionnelles à l'ère de l'IA", date: "30 Avril 2026", sortKey: "2026-04-30", tag: "Carrière",
    description: "Une journée réunissant entreprises partenaires, experts et étudiants autour de l'insertion professionnelle, des opportunités de carrière et de l'évolution des métiers à l'ère de l'intelligence artificielle.",
    image: "/images/ebs-tn/ebs-job-fair.png",
  },
  {
    id: "a30", title: "EBS signe deux conventions de collaboration avec MEDIANET et SATEM", date: "30 Avril 2026", sortKey: "2026-04-30", tag: "Partenariat",
    description: "À l'occasion du EBS Job Fair, EBS a signé deux conventions avec MEDIANET et SATEM afin de renforcer les liens entre formation académique et monde professionnel.",
    image: "/images/ebs-tn/ebs-conventions.png",
  },
  {
    id: "a31", title: "Global Money Week : EBS et AIESEC Carthage réunissent les étudiants autour des FinTech", date: "6 Avril 2026", sortKey: "2026-04-06", tag: "FinTech",
    description: "Une table ronde consacrée aux FinTech et à l'innovation financière, avec Samir Ksibi de Kickoff.tn et Amine Ben Abderrahman de Konnect Networks.",
    image: "/images/ebs-tn/ebs-global-money-week.png",
  },
  {
    id: "a32", title: "EBS au Forum des Mobilités « Étudier en France »", date: "Du 9 au 12 Avril 2026", sortKey: "2026-04-09", tag: "International",
    description: "EBS a participé à la 4e édition du Forum des Mobilités organisé par Campus France Tunisie à Tunis, Sousse et Sfax pour présenter ses parcours internationaux.",
    image: "/images/ebs-tn/ebs-forum-mobilites.png",
  },
  {
    id: "a33", title: "EBS Entrepreneurship Challenge : une 5e édition dédiée à l'innovation et à l'esprit entrepreneurial", date: "Du 31 Mars au 3 Avril 2026", sortKey: "2026-03-31", tag: "Entrepreneuriat",
    description: "La 5e édition de l'EBS Entrepreneurship Challenge a mobilisé les étudiants autour de projets concrets, de l'innovation, du travail en équipe et de l'accompagnement par des mentors.",
    image: "/images/ebs-tn/ebs-entrepreneurship-challenge.png",
  },
  {
    id: "a34", title: "« قفة رمضان » : les clubs étudiants d'EBS mobilisés pour la solidarité", date: "Ramadan 2026", sortKey: "2026-03-20", tag: "Solidarité",
    description: "Les clubs étudiants d'ESPIMA Business School ont organisé une collecte de dons et constitué des paniers alimentaires au profit des familles dans le besoin.",
    image: "/images/ebs-tn/ebs-qoffet-ramadan.png",
  },
  {
    id: "a35", title: "Micro et nanoplastiques : une rencontre internationale et le lancement du club CREALAB à EBS", date: "11 Décembre 2025", sortKey: "2025-12-11", tag: "Conférence",
    description: "EBS a accueilli une rencontre internationale consacrée à l'impact des micro et nanoplastiques sur l'environnement, marquée également par le lancement du club CREALAB.",
    image: "/images/ebs-tn/ebs-micro-nanoplastiques.png",
  },
  {
    id: "a36", title: "L'EM Normandie à ESPIMA Business School : présentation du partenariat et des opportunités internationales", date: "27 Novembre 2025", sortKey: "2025-11-27", tag: "International",
    description: "Une rencontre avec Mme Julia Jean de l'EM Normandie pour présenter l'école, les possibilités de mobilité et les conditions préférentielles réservées aux étudiants EBS.",
    image: "/images/ebs-tn/ebs-em-normandie.png",
  },
];

export const actualites: Article[] = [
  {
    id: "a1", title: "Visite du Business IT Solutions Expo", date: "26 Février 2025", sortKey: "2025-02-26", tag: "Technologie",
    description: "Participation de nos étudiants à l'événement incontournable du secteur technologique : Business IT Solutions EXPO à la Cité de la Culture à Tunis.",
    image: "/images/ebs-tn/IT-Business-Expo.jpeg",
  },
  {
    id: "a2", title: "Journée Portes Ouvertes au Lycée Louis Pasteur", date: "21 Février 2025", sortKey: "2025-02-21", tag: "Orientation",
    description: "Participation d'ESPIMA Business School à la journée d'information sur l'orientation universitaire organisée par le Lycée Louis Pasteur.",
    image: "/images/ebs-tn/Lycee-Louis-Pasteur.jpeg",
  },
  {
    id: "a3", title: "Salon de l'Entrepreneuriat Riyeda 2025", date: "30 Janvier 2025", sortKey: "2025-01-30", tag: "Entrepreneuriat",
    description: "Visite des étudiants d'ESPIMA Business School au salon de l'entreprenariat RIYEDA à la cité de la culture.",
    image: "/images/ebs-tn/Salon-Riyeda.jpeg",
  },
  {
    id: "a4", title: "Séminaire : L'Importance de l'Analyse de Données", date: "09 Janvier 2025", sortKey: "2025-01-09", tag: "Data Science",
    description: "Conférence autour de l'importance de l'analyse de données dans la prise de décisions. Animée par Mr Mohamed Draoui.",
    image: "/images/ebs-tn/Seminaire-Med-Draoui.jpeg",
  },
  {
    id: "a5", title: "Excelia : Présentation de Notre Partenaire", date: "29 Novembre 2024", sortKey: "2024-11-29", tag: "International",
    description: "Mme Ikram BOUHADADI, chargée du développement et recrutement international Excelia, a présenté les programmes d'études à nos étudiants.",
    image: "/images/ebs-tn/Excelia-min-scaled.webp",
  },
  {
    id: "a6", title: "EM Normandie : À la Découverte de Notre Partenaire", date: "28 Novembre 2024", sortKey: "2024-11-28", tag: "International",
    description: "Mme Amandine DELATTRE, chargée d'admissions Internationales Moyen Orient et Afrique du Nord à l'EM Normandie, a présenté les programmes et conditions d'accès.",
    image: "/images/ebs-tn/EM-Normandie-min-1568x2091.webp",
  },
  {
    id: "a7", title: "Séminaire : La Digitalisation en Tunisie", date: "17 Octobre 2024", sortKey: "2024-10-17", tag: "Digitalisation",
    description: "Séminaire portant sur la digitalisation en Tunisie, animé par Mme Sonia ELKARA, entrepreneuse et pharmacienne industrielle.",
    image: "/images/ebs-tn/Conference-sonia-el-kara-min-1568x1176.jpeg",
  },
  {
    id: "a8", title: "Forum des Mobilités — Campus France", date: "26 & 27 Avril 2024", sortKey: "2024-04-26", tag: "International",
    description: "Participation d'ESPIMA Business School au Forum des mobilités organisé par Campus France Tunisie à l'Institut Français de Tunisie.",
    image: "/images/ebs-tn/campus-france.jpg",
  },
  {
    id: "a9", title: "Visite de la Bourse de Tunis", date: "11 Décembre 2023", sortKey: "2023-12-11", tag: "Finance",
    description: "Visite de nos étudiants de Gestion au siège de la Bourse de Tunis. Une opportunité pour découvrir les mécanismes du Marché Boursier.",
    image: "/images/ebs-tn/Bourse-de-Tunis.webp",
  },
  {
    id: "a10", title: "Visite de la Banque Centrale et du Musée", date: "07 Décembre 2023", sortKey: "2023-12-07", tag: "Finance",
    description: "Visite à la Banque Centrale de Tunisie et au Musée de la Monnaie pour enrichir le parcours académique des étudiants.",
    image: "/images/ebs-tn/Banque-Centrale.webp",
  },
  {
    id: "a11", title: "Séminaire : Innovations Financières et Blockchain", date: "09 Novembre 2023", sortKey: "2023-11-09", tag: "FinTech",
    description: "Séminaire autour des Innovations financières et Technologie Blockchain, animé par Mr Sami Maazaoui et Mr Hatem Chanoufi.",
    image: "/images/ebs-tn/Seminaire-scaled.webp",
  },
  {
    id: "a12", title: "EBS se Déplace à Djerba", date: "13 Mai 2023", sortKey: "2023-05-13", tag: "Orientation",
    description: "Participation à la journée d'information sur l'orientation universitaire au Groupe Scolaire International 'Les Nouvelles Générations' à Djerba.",
    image: "/images/ebs-tn/Djerba.jpg",
  },
  {
    id: "a13", title: "Séminaire autour des Relations Internationales", date: "11 Mai 2023", sortKey: "2023-05-11", tag: "Conférence",
    description: "Séminaire animé par M. Noureddine Horchani, expert en relations internationales.",
    image: "/images/ebs-tn/seminaire-horchani.webp",
  },
  {
    id: "a14", title: "EM Strasbourg : À la Découverte de Notre Partenaire", date: "23 Février 2023", sortKey: "2023-02-23", tag: "International",
    description: "Mme Séverine Bonhomme, Responsable du Développement International, a présenté les programmes d'EM Strasbourg, 15ème école de commerce en France.",
    image: "/images/ebs-tn/EM-Strasbourg.jpg",
  },
  {
    id: "a15", title: "Conférence : Data Sciences et Intelligence Artificielle", date: "2 Janvier 2023", sortKey: "2023-01-02", tag: "IA",
    description: "Conférence sous le thème de la Data Sciences et de l'intelligence artificielle, animée par M. Hassen Zargouni.",
    image: "/images/ebs-tn/Conference-scaled.jpg",
  },
  {
    id: "a16", title: "Visite d'Entreprise : THE DOT Hub d'Innovation Digitale", date: "17 Novembre 2022", sortKey: "2022-11-17", tag: "Entrepreneuriat",
    description: "Les étudiants M1 Management des projets ont visité THE DOT, hub d'innovation digitale animé par des startups matures.",
    image: "/images/ebs-tn/Visite-DOT-1-1.webp",
  },
  {
    id: "a17", title: "Partenariat ESPIMA Business School et ASTEELFLASH Tunisie", date: "13 Septembre 2022", sortKey: "2022-09-13", tag: "Partenariat",
    description: "Célébration de la journée du savoir organisée par ASTEELFLASH TUNISIE, filiale du Groupe ASTEELFLASH USA, leader mondial des services de fabrication électronique.",
    image: "/images/ebs-tn/IMG-20220922-WA0006.jpg",
  },
  {
    id: "a18", title: "Cérémonie de Remise des Diplômes EBS 2022", date: "19 Juillet 2022", sortKey: "2022-07-19", tag: "Cérémonie",
    description: "Cérémonie de remise des Diplômes marquée par la présence des familles, enseignants, direction et partenaires académiques et professionnels.",
    image: "/images/ebs-tn/296483269_5639948722706337_6886606887546608667_n.jpg",
  },
  {
    id: "a19", title: "Présence de l'UQAT Canada à la Cérémonie EBS 2022", date: "19 Juillet 2022", sortKey: "2022-07-19", tag: "International",
    description: "La cérémonie a été honorée par Mme Yasmine MOHAMED, directrice des programmes Gestion de Projet à l'UQAT Canada.",
    image: "/images/ebs-tn/296830441_10158917271276931_532106099996811579_n.jpg",
  },
  {
    id: "a20", title: "Salon de l'Orientation Étudiants Post-Bac", date: "18 Juillet 2022", sortKey: "2022-07-18", tag: "Orientation",
    description: "Participation au salon de l'orientation à Tunis, Sousse et Sfax.",
    image: "/images/ebs-tn/295311127_5603985116302698_2028720448082960089_n.webp",
  },
  {
    id: "a21", title: "23ème Université d'Été ARFORGHE", date: "9 & 10 Juin 2022", sortKey: "2022-06-09", tag: "Conférence",
    description: "Participation à la 23ème Université d'été organisée par l'ARFORGHE sous le thème 'Management de proximité et télétravail : est-ce un paradoxe ?'",
    image: "/images/ebs-tn/289351831_5538561589511718_7608078724883071280_n.jpg",
  },
  {
    id: "a22", title: "Participation au Salon KHOTWA en Algérie", date: "19 Mai 2022", sortKey: "2022-05-19", tag: "International",
    description: "Participation au salon international de l'Étudiant sur plusieurs villes d'Algérie (Alger, Constantine, Tlemcen, Sidi Bel Abbes).",
    image: "/images/ebs-tn/284601226_5452434274791117_6972648692719623173_n-1.jpg",
  },
  {
    id: "a23", title: "Étudier en France ? Procédures Campus France", date: "12 Mai 2022", sortKey: "2022-05-12", tag: "International",
    description: "Séance de Questions/Réponses destinée aux étudiants de Parcours International avec les responsables Campus France Tunisie.",
    image: "/images/ebs-tn/280653806_5411844118850133_7701947925445388130_n.webp",
  },
  {
    id: "a24", title: "EBS Entrepreneurship Challenge — 1ère Édition", date: "1 Avril 2022", sortKey: "2022-04-01", tag: "Entrepreneuriat",
    description: "Présentation des projets des finalistes devant un Jury de professionnels et remise des prix aux lauréats.",
    image: "/images/ebs-tn/277675248_5285013694866510_3664805883500697118_n.webp",
  },
  {
    id: "a25", title: "Partenariat EBS / UQAT Canada", date: "28 Février 2022", sortKey: "2022-02-28", tag: "International",
    description: "M. Mathieu Noury, Vice Recteur adjoint, et Mme Sonia Demontigny de l'UQAT Canada ont visité les locaux d'EBS.",
    image: "/images/ebs-tn/285834133_5491514384216439_4542440242662762013_n.jpg",
  },
  {
    id: "a26", title: "Forum des Mobilités : Étudier en France", date: "28 & 29 Avril 2022", sortKey: "2022-04-28", tag: "International",
    description: "Participation au Forum des mobilités organisé par Campus France Tunisie à l'Institut Français de Tunisie.",
    image: "/images/ebs-tn/Forum-des-mobilites.jpg",
  },
];

export const evenements: Article[] = [
  {
    id: "e0", title: "ESPIMA Business School célèbre sa promotion 2026", date: "24 Juillet 2026", sortKey: "2026-07-24", tag: "Cérémonie",
    description: "Le 24 juillet 2026, ESPIMA Business School a célébré la remise des diplômes de sa promotion 2026, réunissant les diplômés de Licence et de Master, leurs familles et leurs enseignants. Cette cérémonie a marqué l'aboutissement de plusieurs années de travail, de persévérance et d'engagement.",
    image: "/images/sections/photo-21.jpg",
  },
  {
    id: "e1", title: "EBS Entrepreneurship Challenge — 4ème Édition", date: "12 Février 2025", sortKey: "2025-02-12", tag: "Entrepreneuriat",
    description: "Félicitations aux lauréats de la quatrième édition d'EBS ENTREPRENEURSHIP CHALLENGE.",
    image: "/images/ebs-tn/277675248_5285013694866510_3664805883500697118_n.webp",
  },
  {
    id: "e2", title: "Journée d'Intégration", date: "14 Novembre 2024", sortKey: "2024-11-14", tag: "Vie Étudiante",
    description: "Pour lancer la nouvelle année académique, journée d'intégration pour renforcer les liens et créer l'esprit d'équipe.",
    image: "/images/ebs-tn/Lycee-Louis-Pasteur.jpeg",
  },
  {
    id: "e3", title: "Octobre Rose — Sensibilisation au Cancer du Sein", date: "22 Octobre 2024", sortKey: "2024-10-22", tag: "Solidarité",
    description: "En collaboration avec l'ATAMCS, journée de sensibilisation au dépistage du Cancer du Sein.",
    image: "/images/ebs-tn/Excelia-min-scaled.webp",
  },
  {
    id: "e4", title: "Cérémonie de Remise des Diplômes 2024", date: "24 Juillet 2024", sortKey: "2024-07-24", tag: "Cérémonie",
    description: "7ème édition de la Cérémonie de Remise des Diplômes saluant les accomplissements de nos étudiants.",
    image: "/images/ebs-tn/296483269_5639948722706337_6886606887546608667_n.jpg",
  },
  {
    id: "e5", title: "EBS Job Fair — 2ème Édition", date: "09 Mai 2024", sortKey: "2024-05-09", tag: "Carrière",
    description: "Rencontres avec des professionnels et représentants de grandes entreprises pour les opportunités de stages et d'emploi.",
    image: "/images/ebs-tn/Salon-Riyeda.jpeg",
  },
  {
    id: "e6", title: "EBS Entrepreneurship Challenge — 3ème Édition", date: "26 Avril 2024", sortKey: "2024-04-26", tag: "Entrepreneuriat",
    description: "Félicitations aux lauréats de la troisième édition et remerciements à tous les contributeurs.",
    image: "/images/ebs-tn/277675248_5285013694866510_3664805883500697118_n.webp",
  },
  {
    id: "e7", title: "Journée d'Intégration à ADP", date: "12 Janvier 2024", sortKey: "2024-01-12", tag: "Partenariat",
    description: "Journée d'intégration au sein des locaux d'ADP pour découvrir les métiers d'expert Payroll et d'analyste fonctionnel.",
    image: "/images/ebs-tn/Visite-DOT-1-1.webp",
  },
  {
    id: "e8", title: "Journée Métiers", date: "06 Décembre 2023", sortKey: "2023-12-06", tag: "Carrière",
    description: "Journée dédiée aux Métiers d'avenir : Marketing digital, Entrepreneuriat, Consulting et Project Management.",
    image: "/images/ebs-tn/Seminaire-scaled.webp",
  },
  {
    id: "e9", title: "Journée d'Intégration avec Paintball Life Tunisie", date: "27 Octobre 2023", sortKey: "2023-10-27", tag: "Vie Étudiante",
    description: "Journée d'intégration favorisant l'esprit d'équipe dans une ambiance détendue.",
    image: "/images/ebs-tn/campus-france.jpg",
  },
  {
    id: "e10", title: "Cérémonie de Remise des Diplômes 2023", date: "18 Juin 2023", sortKey: "2023-06-18", tag: "Cérémonie",
    description: "6ème édition de la Cérémonie. Bravo à la promotion 2022/2023.",
    image: "/images/ebs-tn/296483269_5639948722706337_6886606887546608667_n.jpg",
  },
  {
    id: "e11", title: "EBS Job Fair — 1ère Édition", date: "10 Juin 2023", sortKey: "2023-06-10", tag: "Carrière",
    description: "Première édition réussie. Échanges avec des représentants de grandes entreprises.",
    image: "/images/ebs-tn/Salon-Riyeda.jpeg",
  },
  {
    id: "e12", title: "EBS Entrepreneurship Challenge — 2ème Édition", date: "17 Mars 2023", sortKey: "2023-03-17", tag: "Entrepreneuriat",
    description: "Nos étudiants ont eu quelques jours pour passer de l'idée au projet. Bravo aux lauréats.",
    image: "/images/ebs-tn/277675248_5285013694866510_3664805883500697118_n.webp",
  },
  {
    id: "e13", title: "Rencontre avec les Alumni Entrepreneurs", date: "16 Octobre 2022", sortKey: "2022-10-16", tag: "Alumni",
    description: "Belle rencontre entre alumni entrepreneurs et étudiants actuels dans le cadre de la semaine mondiale de l'entrepreneuriat.",
    image: "/images/ebs-tn/Visite-DOT-1-1.webp",
  },
  {
    id: "e14", title: "Journée d'Intégration à Paintball Life Tunisie", date: "06 Octobre 2022", sortKey: "2022-10-06", tag: "Vie Étudiante",
    description: "Les étudiants ont profité d'une journée d'intégration conviviale avec l'équipe pédagogique et administrative.",
    image: "/images/ebs-tn/campus-france.jpg",
  },
  {
    id: "e15", title: "EBS Entrepreneurship Challenge — 1ère Édition", date: "04 Avril 2022", sortKey: "2022-04-04", tag: "Entrepreneuriat",
    description: "Félicitations aux lauréats de cette première édition et remerciements à tous les contributeurs.",
    image: "/images/ebs-tn/277675248_5285013694866510_3664805883500697118_n.webp",
  },
  {
    id: "e16", title: "Challenge Création d'Entreprises / START UP", date: "02 Mars 2022", sortKey: "2022-03-02", tag: "Entrepreneuriat",
    description: "Premier jour : accueil des étudiants et constitution des équipes pour le challenge.",
    image: "/images/ebs-tn/277675248_5285013694866510_3664805883500697118_n.webp",
  },
  {
    id: "e17", title: "Webinaire EBS / Collège de Paris", date: "24 Février 2022", sortKey: "2022-02-24", tag: "International",
    description: "Comment préparer sa mobilité internationale ? Webinaire animé par M. Guillaume FINCK, vice-président du Collège de Paris.",
    image: "/images/ebs-tn/EM-Normandie-min-1568x2091.webp",
  },
  {
    id: "e18", title: "Séminaire : Nouveaux Services Digitaux", date: "17 Février 2022", sortKey: "2022-02-17", tag: "Conférence",
    description: "Séminaire animé par M. Adel CHOUARI, Directeur Général du Centre National du Registre des Entreprises.",
    image: "/images/ebs-tn/Seminaire-scaled.webp",
  },
  {
    id: "e19", title: "Formation et Workshop — Club Tunivisions EBS", date: "05 Février 2022", sortKey: "2022-02-05", tag: "Clubs",
    description: "Journée Formation et Workshop organisée par le Club Tunivisions EBS, animée par Yosr et Siwar SAID.",
    image: "/images/ebs-tn/campus-france.jpg",
  },
  {
    id: "e20", title: "Journée Club Rotaract Espima", date: "19 Janvier 2022", sortKey: "2022-01-19", tag: "Clubs",
    description: "Journée d'activité organisée par le Club Rotaract Espima dans les locaux de l'EBS.",
    image: "/images/ebs-tn/Lycee-Louis-Pasteur.jpg",
  },
  {
    id: "e21", title: "Journée d'Intégration Club Tunivisions EBS", date: "23 Décembre 2021", sortKey: "2021-12-23", tag: "Solidarité",
    description: "Journée d'intégration entre retraités et enfants à la maison de retraite Salambo.",
    image: "/images/ebs-tn/Excelia-min-scaled.webp",
  },
];

export const allArticles: Article[] = [...newArticles, ...actualites, ...evenements].sort((a, b) =>
  b.sortKey.localeCompare(a.sortKey)
);

export const getLatestArticle = (): Article => allArticles[0];