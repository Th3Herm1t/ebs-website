import type { AcademicPartnerSlug } from "./academic-partners";

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

const canonicalPartenaires = {
  uqat: {
    slug: "uqat",
    name: "UQAT",
    country: "🇨🇦 Canada",
    countryCode: "CA",
    logo: "/images/partenaires-academiques/uqat.webp",
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
      { label: "Coût estimatif (2 ans)", amount: "24 000 - 30 000", period: "$ CAD", note: "Pour les deux années de Maîtrise", featured: true },
      { label: "Frais d'admission", amount: "75", period: "$ CAD", note: "À régler lors de l'admission" },
      { label: "Indexation annuelle", amount: "~3", period: "%", note: "Les frais peuvent être révisés" },
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
    extraSections: [
      {
        title: "Conditions financières du partenariat",
        body: "- **Coût estimatif** : Entre 24 000 et 30 000 $ CAD pour les deux années.\n- **Frais d'admission** : 75 $ CAD.\n- **Bourse (MGP uniquement)** : 2 500 $ CAD par session, jusqu'à un maximum de 4 sessions.\n- **Indexation** : Les frais de scolarité peuvent être révisés d'environ 3 % par an.\n- **Tarif préférentiel** : Les étudiants d'ESPIMA bénéficient du tarif canadien, inférieur au tarif international."
      }
    ],
  },

  "em-normandie": {
    slug: "em-normandie",
    name: "EM Normandie",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/ebs-tn/EM_Normandie-Logo.png",
    type: "Grande École de Commerce — Triple accréditée EQUIS · AACSB · AMBA",
    presentation: "Fondée en 1871, EM Normandie Business School est l'une des plus anciennes Grandes Écoles de Management françaises. Membre de la Conférence des Grandes Écoles (CGE), elle fait partie du cercle très restreint des Business Schools titulaires de la Triple Couronne internationale (AACSB, EQUIS et AMBA). Elle accueille plus de 6 600 étudiants sur 6 campus internationaux : Le Havre, Caen, Paris, Oxford, Dublin et Dubaï.",
    programmes: [
      {
        nom: "Master in Management (Programme Grande École)",
        duree: "2 ans",
        details: "Programme Grande École • Diplôme visé • Grade de Master. Accès après une Licence EBS (Bac+3).",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Programme Grande École • Diplôme visé • Grade de Master",
              "**Étudiants concernés** : Titulaires d'une Licence (Bac+3)",
              "**Campus** : Le Havre • Caen • Paris • Oxford • Dublin • Dubaï (selon le parcours choisi)",
              "**Langue** : Français / Anglais",
              "**Spécialisations** : Management • Marketing • Finance • Supply Chain • Digital & IA • Entrepreneuriat"
            ]
          }
        ]
      },
      {
        nom: "Master of Science (MSc)",
        duree: "1 ou 2 ans",
        details: "Label MSc (selon le programme). Accès pour les titulaires d'un Bac+4 minimum.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Label MSc (selon le programme)",
              "**Étudiants concernés** : Titulaires d'un Bac+4 minimum",
              "**Campus** : Le Havre • Caen • Paris • Oxford • Dublin (selon le MSc choisi)",
              "**Langue** : Principalement Anglais",
              "**Spécialisations** : Supply Chain • Finance • Marketing • Data Science • ESG • Digital Strategy • Luxury • Events • Creative Industries"
            ]
          }
        ]
      },
      {
        nom: "Mastère Spécialisé (MS)",
        duree: "1 an",
        details: "Label MS – Conférence des Grandes Écoles. Accès pour les titulaires d'un Bac+5.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Label MS – Conférence des Grandes Écoles",
              "**Étudiants concernés** : Titulaires d'un Bac+5",
              "**Campus** : Rouen (UniLaSalle)",
              "**Langue** : Français",
              "**Spécialisations** : Marketing, Communication et Ingénierie des Produits Agroalimentaires"
            ]
          }
        ]
      }
    ],
    eligibilite: "Moyenne minimale : 12/20\nRecommandation d'ESPIMA Business School\nDossier de candidature\nEntretien d'admission\nTOEIC 750 (programme en anglais) ou TOEIC 600 (programme en français), ou équivalent TOEFL / IELTS",
    avantages: [
      "Grande École reconnue par l'État",
      "Membre de la Conférence des Grandes Écoles",
      "Triple Couronne AACSB • EQUIS • AMBA",
      "Diplôme visé",
      "Grade de Master",
      "Plus de 6 600 étudiants",
      "Plus de 100 nationalités",
      "6 campus internationaux",
      "Réseau de plus de 20 000 Alumni",
      "Réseau international d'universités partenaires",
      "Accompagnement personnalisé des étudiants internationaux",
    ],
    debouches: [],
    keyStats: [
      { label: "Création", value: "1871" },
      { label: "Campus", value: "Le Havre • Caen • Paris • Oxford • Dublin • Dubaï" },
      { label: "Étudiants", value: "Plus de 6 600" },
      { label: "Nationalités", value: "Plus de 100" },
      { label: "Alumni", value: "Plus de 20 000" },
      { label: "Partenaires", value: "Plus de 200" },
      { label: "Domaines de formation", value: "Management • Marketing • Finance • Supply Chain • Logistique • Commerce international • Data • Digital • RH • Entrepreneuriat" },
      { label: "Langues d'enseignement", value: "Français et Anglais" },
    ],
    pricing: [
      { label: "Master in Management (PGE)", amount: "13 750", period: "€/an" },
      { label: "Master of Science (MSc)", amount: "15 500", period: "€", note: "16 500 £ pour Oxford" },
      { label: "Mastère Spécialisé (MS)", amount: "12 500", period: "€" },
    ],
    imageSection: { src: "/images/ebs-tn/img-page-em-presentiel.webp" },
    accreditations: [
      { label: "AACSB", description: "Accréditation internationale garantissant l'excellence académique des écoles de management" },
      { label: "EQUIS", description: "Accréditation européenne délivrée par l'EFMD, reconnaissant la qualité globale et l'ouverture internationale" },
      { label: "AMBA", description: "Accréditation internationale attribuée au Programme Grande École (Master in Management)" },
    ],
    accreditationImage: "/images/ebs-tn/Calque-2-2.png",
    extraSections: [
      {
        title: "Avantages financiers du partenariat EM Normandie",
        body: "- **Réduction EM Normandie** : 10 % sur les frais de scolarité.\n- **Réduction ESPIMA** : 5 % supplémentaires.\n- **Réduction anticipée** : 10 % supplémentaires pour une candidature déposée avant le 30 avril.\n- **Frais de dossier** : Exonérés.\n- **Acompte** : 3 000 € à régler lors de l'admission.\n- **Refus de visa** : Remboursement de l'acompte selon les dispositions de la convention."
      },
      {
        title: "10 MSc — Masters of Science accessibles",
        body: "---LISTE\n1. MSc Financial Data Management — Paris (+Le Havre)\n2. MSc International Events Management — Paris (+Le Havre)\n3. MSc International Logistics & Port Management — Le Havre\n4. MSc International Marketing & Business Development — Caen (+Le Havre)\n5. MSc Marketing & Digital in Luxury & Lifestyle — Paris (+Le Havre)\n6. MSc Banking, Finance & FinTech — Oxford (+Le Havre)\n7. MSc Supply Chain Management — Le Havre\n8. MSc Sustainable Business & Strategy — Paris (+Le Havre)\n9. MSc Digital Strategy & Innovation — Paris (+Le Havre)\n10. MSc Digital Marketing & Sales — Dublin (+Le Havre)\n\nAccès en 1ère année (2 ans) ou 2ème année (1 an) selon le profil. Certaines spécialisations sont disponibles en alternance.\n\n[https://www.em-normandie.com/fr/mastere-specialise-master-of-science|Voir tous les MSc sur le site EM Normandie →]"
      }
    ],
  },

  psb: {
    slug: "psb",
    name: "PSB Paris School of Business",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/psb.webp",
    type: "Grande École de Commerce — Triple accréditée AACSB · EQUIS · AMBA — Membre CGE",
    presentation: "Paris School of Business (PSB) est une Grande École française de management reconnue pour l'excellence de ses formations, son ouverture internationale et sa proximité avec les entreprises. Membre de la Conférence des Grandes Écoles (CGE), triple accréditée AACSB, EQUIS et AMBA. Fondée en 1974, elle compte 4 000+ étudiants, 20 000+ alumni et un campus au cœur de Paris (Campus Nation).",
    programmes: [
      { nom: "Bachelor", duree: "1 an (Bac+3)", details: "Diplôme visé • Grade de Licence. Spécialisations : Marketing Digital, Banking & Finance, Audit & Contrôle de Gestion, International Business, Entrepreneuriat. Accès après Bac+2 EBS en Bachelor 3." },
      { nom: "Programme Grande École (PGE)", duree: "2 ans (Bac+5)", details: "Diplôme visé • Grade de Master • RNCP 7. Spécialisations : Marketing & Data, Digital Business, International Business, Audit & Contrôle de Gestion, Achats & Supply Chain, Data Management, RH, Entrepreneuriat. Accès après Licence EBS." },
      { nom: "Master of Science (MSc)", duree: "1 ou 2 ans (Bac+5)", details: "Label MSc de la CGE (selon programme). Accès après Licence ou M1 EBS." },
      { nom: "MBA et programmes spécialisés", duree: "Variable (Bac+5)", details: "Titre RNCP / reconnaissance selon le programme. Accès selon le niveau académique requis." },
    ],
    eligibilite: "Être inscrit à EBS. Étude de dossier (parcours, relevés de notes, CV, lettre de motivation). Entretien individuel d'admission. Niveau de langue requis selon le programme choisi.",
    avantages: [
      "Grande École française reconnue, membre de la Conférence des Grandes Écoles (CGE)",
      "Triple accréditation internationale : AACSB, EQUIS et AMBA (top 1% mondial)",
      "Programme Grande École conférant le Grade de Master et large choix de spécialisations",
      "Pédagogie orientée vers les projets, l'innovation et l'expérience professionnelle",
      "Forte dimension internationale et réseau important d'entreprises partenaires",
      "Campus moderne situé à Paris (Campus Nation)",
      "Passerelles après Bac+2, Licence ou M1 selon le programme",
      "Accompagnement personnalisé des étudiants EBS dans le cadre du partenariat",
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
      { label: "Création", value: "1974" },
      { label: "Étudiants", value: "4 000+" },
      { label: "Alumni", value: "20 000+" },
      { label: "Accréditations", value: "3 (AACSB, EQUIS, AMBA)" },
    ],
    pricing: [
      { label: "Bachelor, PGE & MSc", amount: "Tarif officiel", period: "", note: "Selon le cursus PSB choisi" },
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
    logo: "/images/partenaires-academiques/idrac.webp",
    type: "Grande École française de commerce et de management — 8 campus en France",
    presentation: "Fondée en 1965, IDRAC Business School est une Grande École française de commerce et de management, membre de l'Union des Grandes Écoles Indépendantes (UGEI). Implantée sur 8 campus en France (Bordeaux, Grenoble, Lyon, Montpellier, Nantes, Nice, Paris, Toulouse), elle propose des formations de Bac à Bac+5 avec des reconnaissances officielles de l'État français, notamment le Grade de Licence et le Grade de Master.",
    programmes: [
      { nom: "Bachelor Marketing & Business", duree: "1 an (L3)", details: "Diplôme visé par l'État (Bac+3). Accès après Bac+2 EBS / 120 ECTS en 3e année (parcours 2+1)." },
      { nom: "MBA Supply Chain, Achats & RSE", duree: "2 ans", details: "Titre RNCP niveau 7 (Bac+5). Accès après Licence EBS Management. Campus : Grenoble, Lyon." },
      { nom: "MBA Manager de l'innovation stratégique", duree: "2 ans", details: "Titre RNCP niveau 7 (Bac+5). Accès après Licence EBS." },
      { nom: "MBA International Project Management", duree: "2 ans", details: "Titre RNCP niveau 7 (Bac+5). En anglais. Campus : Montpellier, Nantes, Toulouse." },
    ],
    eligibilite: "Accès depuis les Licences EBS. 120 ECTS pour poursuite après Bac+2 ou 180 ECTS après Licence. Niveau B2 en français et anglais selon le programme. Étude de dossier et entretien d'admission.",
    avantages: [
      "Grande École française de commerce fondée en 1965",
      "Diplômes reconnus par l'État (Grade Licence / Grade Master / RNCP 7)",
      "8 campus en France — Bordeaux, Grenoble, Lyon, Montpellier, Nantes, Nice, Paris, Toulouse",
      "Pédagogie professionnalisante : projets, expérience en entreprise, entrepreneuriat",
      "Membre du réseau FIGS Education",
      "12 % de réduction sur les frais de scolarité dans le cadre du partenariat",
      "Accompagnement personnalisé Campus France et visa",
    ],
    debouches: [
      "Responsable commercial / Manager des ventes",
      "Chargé de marketing et communication",
      "Responsable achats / Supply Chain",
      "Chef de projet international",
      "Manager de l'innovation stratégique",
    ],
    keyStats: [
      { label: "Création", value: "1965" },
      { label: "Campus", value: "8 en France" },
      { label: "Niveaux", value: "Bac+3, Bac+5" },
    ],
    pricing: [
      { label: "Bachelor & MBA", amount: "Tarif officiel", period: "", note: "-12% de réduction EBS" },
    ],
    extraSections: [
      {
        title: "Conditions financières prévues par le partenariat",
        body: "- **Réduction** : 12 % sur les frais de scolarité.\n- **Frais de candidature** : Exonération de 80 €.\n- **1er acompte** : 3 000 € à l'admission.\n- **2e acompte** : 3 000 € après obtention du visa.\n- **Solde** : Avant le 30 novembre (Fall) ou le 30 avril (Spring).\n- **Refus de visa** : Remboursement du premier acompte."
      }
    ],
  },

  ifag: {
    slug: "ifag",
    name: "IFAG École de Management",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/ifag.webp",
    type: "École de management — Depuis 1968 — Groupe FIGS Education",
    presentation: "Créée en 1968, l'IFAG est une École Supérieure française de management spécialisée dans les domaines du commerce, des ressources humaines et de l'entrepreneuriat. Pionnière de l'alternance en France, elle forme des étudiants du Bac+2 au Bac+5. Elle fait partie du réseau FIGS Education.",
    programmes: [
      { nom: "Bachelor – Responsable d'Agence et de Commerce", duree: "1 an (Bac+3)", details: "Titre RNCP 6. Accès après Bac+2 EBS." },
      { nom: "Mastère – Manager de Commerce et de Centre de Profit", duree: "2 ans (Bac+5)", details: "Titre RNCP 7. Accès après Licence EBS en Management ou Marketing." },
    ],
    eligibilite: "Accès depuis les Licences EBS (Management, Marketing). Admission examinée selon niveau académique, diplômes, CV, lettre de motivation, concours et/ou entretien.",
    avantages: [
      "55+ ans d'expertise dans le management, le commerce et les RH",
      "Pionnière de l'alternance en France",
      "Vaste réseau de campus (25+) avec 18 000 diplômés",
      "Pédagogie orientée vers l'action, l'entrepreneuriat et les projets",
      "12 % de réduction sur les frais de scolarité pour les étudiants EBS",
      "Accompagnement personnalisé dans les démarches Campus France et visa",
    ],
    debouches: [
      "Manager de commerce / Directeur de centre de profit",
      "Responsable d'agence",
      "Business Developer / Développeur commercial",
      "Entrepreneur / Créateur d'entreprise",
    ],
    keyStats: [
      { label: "Création", value: "1968" },
      { label: "Réseau", value: "25 campus" },
      { label: "Alumni", value: "18 000" },
    ],
    pricing: [
      { label: "Bachelor & Mastère", amount: "Tarif officiel", period: "", note: "-12% de réduction EBS" },
    ],
    extraSections: [
      {
        title: "Conditions financières prévues par le partenariat",
        body: "- **Réduction** : 12 % sur les frais de scolarité.\n- **Frais de candidature** : Exonération de 80 €.\n- **1er acompte** : 3 000 € à l'admission.\n- **2e acompte** : 3 000 € après obtention du visa.\n- **Solde** : Avant le 30 novembre (Fall) ou le 30 avril (Spring).\n- **Refus de visa** : Remboursement du premier acompte."
      }
    ],
  },

  igefi: {
    slug: "igefi",
    name: "IGEFI",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/igefi.webp",
    type: "École des métiers de la finance d'entreprise et de l'expertise comptable",
    presentation: "IGEFI est une École Supérieure française spécialisée dans les métiers de la finance d'entreprise, de la comptabilité, du contrôle de gestion, de la paie et de l'expertise comptable. Son offre s'étend du Bac+2 au Bac+5. Elle fait partie du réseau FIGS Education.",
    programmes: [
      { nom: "Bachelor – Chargé de gestion comptable et financière", duree: "1 an (Bac+3)", details: "Titre RNCP 6. Campus : Bordeaux, Lille. Accès après Bac+2 EBS." },
      { nom: "Bachelor – Contrôleur de Gestion", duree: "1 an (Bac+3)", details: "Titre RNCP 6. Campus : Lyon, Nantes, Paris-Courbevoie. Accès après Bac+2 EBS." },
      { nom: "MBA – Expert Financier (Finance d'entreprise)", duree: "2 ans (Bac+5)", details: "Titre RNCP 7. Campus : Bordeaux, Lille, Lyon, Nantes, Paris. Accès après Licence Finance EBS." },
      { nom: "DSCG – Diplôme Supérieur de Comptabilité et de Gestion", duree: "2 ans (Bac+5)", details: "Titre RNCP 7 / Grade de Master. Campus : Paris-Courbevoie. Accès après Licence EBS compatible." },
    ],
    eligibilite: "Accès depuis la Licence Finance EBS. Validation de 120 ECTS (pour Bac+3) ou Bac+3 pour le cursus Expert Financier. Dossier, tests en ligne et entretien de motivation.",
    avantages: [
      "Spécialisation dans les métiers de la finance d'entreprise et expertise comptable",
      "Diplômes d'État (DCG, DSCG) et titres RNCP de niveaux 6 et 7",
      "Six campus en France (Bordeaux, Lille, Lyon, Nantes, Paris, Toulouse)",
      "Intégration d'outils professionnels, de la data et de l'IA dans certaines formations",
      "12 % de réduction sur les frais de scolarité pour les étudiants EBS",
      "Accompagnement personnalisé pour le visa et Campus France",
    ],
    debouches: [
      "Chargé de gestion comptable et financière",
      "Contrôleur de gestion",
      "Expert financier en entreprise",
      "Analyste financier",
      "Auditeur / Expert-comptable (trajectoire DSCG)",
    ],
    keyStats: [
      { label: "Campus", value: "Bordeaux, Lille, Lyon, Nantes, Paris, Toulouse" },
      { label: "Domaines", value: "Finance, Comptabilité, Audit, Gestion, Paie" },
    ],
    pricing: [
      { label: "Bachelor, MBA & DSCG", amount: "Tarif officiel", period: "", note: "-12% de réduction EBS" },
    ],
    extraSections: [
      {
        title: "Conditions financières prévues par le partenariat",
        body: "- **Réduction** : 12 % sur les frais de scolarité.\n- **Frais de candidature** : Exonération de 80 €.\n- **1er acompte** : 3 000 € à l'admission.\n- **2e acompte** : 3 000 € après obtention du visa.\n- **Solde** : Avant le 30 novembre (Fall) ou le 30 avril (Spring).\n- **Refus de visa** : Remboursement du premier acompte."
      }
    ],
  },

  eklore: {
    slug: "eklore",
    name: "EKLORE-ed",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/eklore.webp",
    type: "Grande École française de commerce — EFMD Accredited",
    presentation: "EKLORE-ed, anciennement ESC Pau Business School, est une Grande École française de commerce. Elle propose des formations du Bachelor au Bac+5 dans les domaines du management, de la gestion d'entreprise, du commerce, du marketing, de la finance, des ressources humaines, de la logistique, ainsi que du sport management. Formations en initiale et alternance, sur les campus de Pau et Paris.",
    programmes: [
      { nom: "Bachelor Business Management", duree: "1 an (L3)", details: "Diplôme Bac+3 • Grade de Licence • Reconnu par l'État (MESR) • RNCP 6. Accès après Bac+2 EBS / 120 ECTS." },
      { nom: "Master en Management – Programme Grande École", duree: "2 ans", details: "Diplôme Bac+5 • Grade de Master • RNCP 7 • EFMD Accredited. Spécialisations : Finance, Marketing, Audit & Expertise Comptable, Management, Sport Management." },
      { nom: "Management & International Business – Full English", duree: "2 ans", details: "Master Grande École • Bac+5 • Grade de Master • RNCP 7 • EFMD Accredited. Enseignement intégralement en anglais à Pau." },
    ],
    eligibilite: "Être inscrit à ESPIMA Business School avec une moyenne minimale de 12/20. Pour le Bachelor : moyenne sur 1re et 2e année. Pour PGE : moyenne sur les 3 années de Licence. Bon niveau d'anglais et de français. Étude de dossier et entretien de sélection.",
    avantages: [
      "Accéder à des formations Bac+5 et à un large choix de spécialisations",
      "Bénéficier d'un Master Full English en Management & International Business à Pau",
      "Suivre un parcours Audit & Expertise Comptable, avec une dispense annoncée de 5 UE sur 7 du DSCG",
      "Choisir, selon les programmes, entre formation initiale et alternance",
      "Réduction de 10 % sur les frais de scolarité dans le cadre du partenariat avec ESPIMA",
    ],
    debouches: [
      "Manager / Chef de projet",
      "Responsable Marketing",
      "Directeur Financier / Auditeur (DSCG)",
      "Manager Sportif",
      "Supply Chain Manager",
    ],
    keyStats: [
      { label: "Campus", value: "Pau, Paris" },
      { label: "Domaines", value: "Management, Finance, Marketing, RH, Sport..." },
      { label: "Formation", value: "Initiale et alternance" },
    ],
    pricing: [
      { label: "Bachelor & Master", amount: "Tarif officiel", period: "", note: "-10% de réduction EBS" },
    ],
    extraSections: [
      {
        title: "Parcours Audit & Expertise Comptable",
        body: "EKLORE-ed propose de suivre un parcours Audit & Expertise Comptable, avec une dispense annoncée de **5 UE sur 7 du DSCG**."
      }
    ],
  },

  epitech: {
    slug: "epitech",
    name: "Epitech",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/epitech.webp",
    type: "Grande École Informatique — Expert Tech & Innovation",
    presentation: "Epitech (École pour l'Informatique et les Nouvelles Technologies), fondée en 1999, est une Grande École française de référence spécialisée dans l'informatique, les technologies numériques et l'innovation. Reconnue pour sa pédagogie par projets (« Learning by doing ») et sa proximité avec les entreprises, elle forme des experts capables de concevoir et piloter les solutions technologiques de demain.",
    programmes: [
      { nom: "Master in IT (Expert en Systèmes d'Information)", duree: "2 ans (Bac+5)", details: "Titre RNCP niveau 7 (Bac+5). Programme international en anglais sur le campus de Paris. Spécialisations : Intelligence Artificielle · Cybersécurité · Cloud Computing · Big Data · Développement Logiciel · IoT · Réalité Virtuelle · Transformation Digitale." },
      { nom: "Global Bachelor of Technology (mobilité)", duree: "1 an", details: "Année de mobilité internationale dans l'un des campus Epitech à l'étranger (Barcelone, Berlin, Bruxelles, Porto...)." },
    ],
    eligibilite: "Titulaires d'une Licence en Informatique (Génie Logiciel & Systèmes d'Information) d'ESPIMA. Recommandation d'ESPIMA Business School. Date limite de dépôt de dossier : 15 mai.",
    avantages: [
      "Grande École française de référence dans les métiers de l'informatique et du numérique",
      "Diplôme Bac+5 visé et Titre certifié RNCP niveau 7",
      "Pédagogie innovante par projets (Learning by doing)",
      "Formations orientées IA, Cybersécurité, Cloud, Big Data, VR et IoT",
      "15 campus en France et 5 campus à l'international",
      "10 % de réduction sur les frais de scolarité dans le cadre du partenariat EBS",
      "Accompagnement personnalisé des étudiants internationaux et visa étudiant France facilité",
    ],
    debouches: [
      "Ingénieur logiciel / Développeur fullstack",
      "Expert en intelligence artificielle & Machine Learning",
      "Expert en cybersécurité / Pentester",
      "Architecte Cloud & DevOps Engineer",
      "Data Engineer / Big Data Specialist",
      "CTO / Fondateur de startup tech",
    ],
    keyStats: [
      { label: "Création", value: "1999" },
      { label: "Campus", value: "15 en France, 5 à l'international" },
      { label: "Certification", value: "Titre RNCP niveau 7 (Bac+5)" },
    ],
    pricing: [
      { label: "Master in IT", amount: "Tarif officiel", period: "", note: "-10% de réduction EBS" },
    ],
    extraSections: [
      {
        title: "Conditions financières du partenariat",
        body: "- **Réduction** : 10 % de réduction sur les frais de scolarité standard.\n- **Acompte à l'admission** : 3 500 € à régler lors de la confirmation d'admission.\n- **Solde** : Payable au plus tard le jour de la rentrée académique.\n- **Refus de visa** : L'acompte est intégralement remboursé si EPITECH est informée dans un délai de 10 jours ouvrables."
      }
    ],
  },

  epsi: {
    slug: "epsi",
    name: "EPSI",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/epsi.webp",
    type: "École d'ingénierie informatique — Titre RNCP Bac+5",
    presentation: "Créée en 1961, EPSI est une école d'ingénierie informatique proposant des formations de Bac+2 à Bac+5 dans les domaines du développement, de la cybersécurité, de l'IA et de la gestion de projets IT. Elle fait partie du réseau FIGS Education.",
    programmes: [
      { nom: "Bachelor – Parcours spécialisés (Dev, IA, Systèmes & Réseaux)", duree: "1 an (Bac+3)", details: "Titre RNCP niveau 6. Accès après Bac+2 EBS Informatique." },
      { nom: "Parcours Expert – Informatique et Système d'Information", duree: "2 ans (Bac+5)", details: "Titre RNCP niveau 7. Accès après Licence EBS." },
      { nom: "Parcours Expert – IA & Data Sciences", duree: "2 ans (Bac+5)", details: "Titre RNCP niveau 7. Accès après Licence EBS." },
      { nom: "Parcours Expert – DevOps", duree: "2 ans (Bac+5)", details: "Titre RNCP niveau 7. Accès après Licence EBS." },
      { nom: "Parcours Expert – Architecte Virtualisation Cloud", duree: "2 ans (Bac+5)", details: "Titre RNCP niveau 7. Accès après Licence EBS." },
      { nom: "Parcours Expert – Cybersécurité", duree: "2 ans (Bac+5)", details: "Titre RNCP niveau 7. Accès après Licence EBS." },
    ],
    eligibilite: "Accès depuis la Licence Informatique (Génie Logiciel & SI) EBS. Convention EBS — EPSI / FIGS Education. Poursuite après Bac+2 (en Bachelor) ou après Licence (en Parcours Expert Bac+5).",
    avantages: [
      "Plus de 60 ans d'expertise dans l'informatique et le numérique",
      "Pédagogie Learning by Doing fondée sur les projets et la pratique",
      "Titres certifiés RNCP de niveaux 6 et 7",
      "Réseau national de campus (Paris, Bordeaux, Lyon, Lille, Nantes, Toulouse...)",
      "12 % de réduction sur les frais de scolarité pour les étudiants EBS",
      "Accompagnement personnalisé dans les démarches Campus France et visa",
    ],
    debouches: [
      "Ingénieur développement logiciel",
      "Expert cybersécurité",
      "Architecte systèmes et réseaux",
      "Data Analyst / Data Engineer",
      "Chef de projet IT",
    ],
    keyStats: [
      { label: "Création", value: "1961" },
      { label: "Réseau Campus", value: "Arras, Bordeaux, Lille, Lyon, Nantes, Paris..." },
      { label: "Niveaux", value: "Bac+2, Bac+3, Bac+5" },
    ],
    pricing: [
      { label: "Bachelor & Parcours Expert", amount: "Tarif officiel", period: "", note: "-12% de réduction EBS" },
    ],
    extraSections: [
      {
        title: "Conditions financières prévues par le partenariat",
        body: "- **Réduction** : 12 % sur les frais de scolarité.\n- **Frais de candidature** : Exonération de 80 €.\n- **1er acompte** : 3 000 € à l'admission.\n- **2e acompte** : 3 000 € après obtention du visa.\n- **Solde** : Avant le 30 novembre (Fall) ou le 30 avril (Spring).\n- **Refus de visa** : Remboursement du premier acompte."
      }
    ],
  },

  excelia: {
    slug: "excelia",
    name: "Excelia Business School",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/excelia.webp",
    type: "Grande École de Commerce — Triple accréditée AACSB · EQUIS · AMBA",
    presentation: "Excelia Business School est une grande école de commerce triplement accréditée AACSB, EQUIS et AMBA, implantée à La Rochelle, Tours, Orléans et Paris. Reconnue pour son excellence académique et son ouverture internationale, elle propose des programmes en management, tourisme, digital et supply chain avec une forte dimension RSE.",
    programmes: [
      { nom: "Programme Grande École", duree: "2 ans", details: "Grade de Master. Spécialisations : Management, Marketing, Finance, Digital, Supply Chain, Entrepreneuriat." },
      { nom: "Master of Science (MSc)", duree: "1 an", details: "Label MSc (CGE) ou Titre RNCP niveau 7. Marketing, Finance, Data, Supply Chain, Luxury, Sustainable Management." },
      { nom: "Bachelor Business (3e année)", duree: "1 an", details: "Diplôme visé, Grade de Licence. Accès depuis Licence 2 EBS." },
      { nom: "BBA International", duree: "1-2 ans", details: "Diplôme visé. Accès depuis Licence 2 EBS." },
    ],
    eligibilite: "Accès depuis les Licences EBS Management, Marketing et Finance. Convention EBS — Excelia pour admission facilitée. Moyenne ≥ 12/20.",
    avantages: [
      "Triple accréditation AACSB + EQUIS + AMBA",
      "Campus à La Rochelle, Tours, Orléans, Paris",
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
    keyStats: [
      { label: "Campus", value: "La Rochelle, Tours, Orléans, Paris" },
      { label: "Accréditations", value: "Triple Couronne (AACSB, EQUIS, AMBA)" },
    ],
    accreditations: [
      { label: "AACSB", description: "Accréditation internationale garantissant l'excellence académique." },
      { label: "EQUIS", description: "Accréditation européenne délivrée par l'EFMD." },
      { label: "AMBA", description: "Accréditation internationale des programmes de management." },
    ],
    pricing: [
      { label: "Programme Grande École", amount: "14 000 à 15 900", period: "€/an" },
      { label: "Master of Science (MSc)", amount: "13 500", period: "€/an" },
      { label: "Bachelor Business", amount: "9 700", period: "€/an" },
      { label: "BBA International", amount: "12 400", period: "€/an" },
    ],
    extraSections: [
      {
        title: "Conditions financières du partenariat",
        body: "- **Réduction** : 10 % de réduction sur les frais de scolarité applicables aux étudiants internationaux (hors Union européenne), valable uniquement pendant la première année d'études."
      }
    ],
  },

  "link-university": {
    slug: "link-university",
    name: "Link University",
    country: "🇮🇹 Italie",
    countryCode: "IT",
    logo: "/images/partenaires-academiques/udl.webp",
    type: "Université privée italienne reconnue par l'État italien — Campus Rome",
    presentation: "Link University (Università degli Studi Link) est une université privée italienne reconnue par le Ministère italien de l'Université et de la Recherche (MUR) et accréditée par l'ANVUR. Située à Rome, elle propose des formations en management, économie, finance, communication, marketing, digital, innovation, sport management et relations internationales. Les diplômes sont reconnus dans l'Espace européen de l'enseignement supérieur grâce au système ECTS.",
    programmes: [
      { nom: "BA in Global Management – International Management and Finance", duree: "2 ans (L2+L3)", details: "Bachelor's Degree. Accès après 1ʳᵉ année EBS (en L2) ou Bac+2 EBS (en L3). En anglais." },
      { nom: "BA in Innovative Technologies for Digital Communication", duree: "2 ans (L2+L3)", details: "Bachelor's Degree. Accès après 1ʳᵉ année EBS (en L2) ou Bac+2 EBS (en L3). En anglais." },
      { nom: "MA in Economics of Innovation and Sustainable Globalization", duree: "2 ans", details: "Master's Degree. Accès après Licence EBS ou M1 EBS. En anglais." },
      { nom: "MA in Advanced Global Management", duree: "2 ans", details: "Master's Degree. Accès après Licence EBS ou M1 EBS. En anglais." },
      { nom: "MA in Technologies and Languages of Communications", duree: "2 ans", details: "Master's Degree. Accès après Licence EBS ou M1 EBS. En anglais." },
    ],
    eligibilite: "Accès privilégié depuis toutes les Licences EBS. Admission selon niveau (Bac+1, Bac+2, Licence, M1). Validation des crédits ECTS, présélection par ESPIMA, puis admission selon les conditions de Link University.",
    avantages: [
      "Université reconnue par le MUR et accréditée ANVUR",
      "Diplômes reconnus dans toute l'Europe (système ECTS)",
      "Campus situé au cœur de Rome",
      "Enseignement en italien ou en anglais",
      "Passerelles dès Bac+1/Bac+2 et poursuite en Master après Licence ou M1",
      "De 15 % à 20 % de réduction sur les frais de scolarité",
      "Accompagnement personnalisé pour visa et installation en Italie",
    ],
    debouches: [
      "Manager international",
      "Spécialiste de la communication digitale",
      "Responsable de l'innovation",
      "Économiste de la mondialisation durable",
      "Dirigeant d'entreprise",
    ],
    keyStats: [
      { label: "Lieu", value: "Rome, Italie" },
      { label: "Reconnaissance", value: "MUR, ANVUR, ECTS" },
      { label: "Langues", value: "Italien, Anglais" },
    ],
    pricing: [
      { label: "BA & MA", amount: "Tarif officiel", period: "", note: "-15% à -20% de réduction EBS" },
    ],
    extraSections: [
      {
        title: "Conditions financières du partenariat",
        body: "- **Réduction** : De 15 % à 20 % sur le tarif officiel des programmes.\n- **Paiement** : Directement auprès de Link University.\n- **En cas de refus de visa** : possibilité de reporter l'admission, de poursuivre les études à ESPIMA ou de bénéficier du remboursement."
      }
    ],
  },

  supdecom: {
    slug: "supdecom",
    name: "SUP'DE COM",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/supdecom.webp",
    type: "École française spécialisée dans les métiers de la communication — Groupe FIGS Education",
    presentation: "SUP'DE COM est une École Supérieure française spécialisée dans les métiers de la communication. Elle forme des professionnels capables de concevoir, piloter et évaluer des stratégies de communication adaptées aux marques, aux organisations et aux nouveaux usages numériques. Elle fait partie du réseau FIGS Education.",
    programmes: [
      { nom: "Bachelor – Chargé de Communication", duree: "1 an (Bac+3)", details: "Titre RNCP 6. Accès après Bac+2 EBS." },
      { nom: "Bachelor – Chargé de Marketing et Communication Digitale", duree: "1 an (Bac+3)", details: "Titre RNCP 6. Accès après Bac+2 EBS en 3e année." },
      { nom: "Manager de la stratégie marketing / communication", duree: "2 ans (Bac+5)", details: "Titre RNCP 7. Accès après Licence EBS Marketing ou Management." },
    ],
    eligibilite: "Accès après Bac+2 ou Licence EBS (Marketing/Management). Admission sur étude de dossier, examen et/ou entretien. Après un M1 EBS, admission en 2e année de certains Bac+5 possible.",
    avantages: [
      "École spécialisée : communication globale, digital, création, événementiel, stratégie de marque",
      "Réseau de campus dans plusieurs grandes villes françaises",
      "Pédagogie fondée sur les projets, la créativité et les mises en situation",
      "Formation aux nouveaux enjeux : data, IA, réseaux sociaux, communication omnicanale",
      "12 % de réduction sur les frais de scolarité pour les étudiants EBS",
      "Accompagnement personnalisé dans les démarches Campus France et visa",
    ],
    debouches: [
      "Chargé de communication / marketing digital",
      "Manager de la stratégie marketing et communication",
      "Social Media Manager",
      "Chef de projet événementiel",
      "Directeur artistique / création",
    ],
    keyStats: [
      { label: "Domaines", value: "Communication, Digital, Événementiel, Stratégie" },
      { label: "Niveaux", value: "Bac+3, Bac+5" },
    ],
    pricing: [
      { label: "Bachelor & Bac+5", amount: "Tarif officiel", period: "", note: "-12% de réduction EBS" },
    ],
    extraSections: [
      {
        title: "Conditions financières prévues par le partenariat",
        body: "- **Réduction** : 12 % sur les frais de scolarité.\n- **Frais de candidature** : Exonération de 80 €.\n- **1er acompte** : 3 000 € à l'admission.\n- **2e acompte** : 3 000 € après obtention du visa.\n- **Solde** : Avant le 30 novembre (Fall) ou le 30 avril (Spring).\n- **Refus de visa** : Remboursement du premier acompte."
      }
    ],
  },

  gutech: {
    slug: "gutech",
    name: "GUtech",
    country: "🇴🇲 Oman",
    countryCode: "OM",
    logo: "/images/partenaires-academiques/gutech.webp",
    type: "Université germanophone en partenariat avec RWTH Aachen (Allemagne) — English-taught programs",
    presentation: "German University of Technology in Oman (GUtech), fondée en 2007 à Halban (Muscat, Oman), est une université privée technologique dispensant ses formations en anglais en étroite collaboration académique avec la prestigieuse RWTH Aachen University en Allemagne. Ses programmes Bachelor sont accrédités internationalement par ACQUIN et par l'OAAAQA.",
    programmes: [
      { nom: "Bachelor of Science (BSc) – Computer Science / AI / Cyber Security", duree: "4 ans (240 ECTS)", details: "Accrédité ACQUIN • Programmes en Computer Science, Artificial Intelligence et Cyber Security. Cours en anglais à Halban, Muscat." },
      { nom: "Master of Science (MSc) in Computer Science", duree: "2 ans (120 ECTS)", details: "Spécialisations : Data Science • Technology Management. Accès après Licence Informatique EBS. Cours en anglais." },
      { nom: "Bachelor of Science in Management", duree: "Poursuite d'études", details: "Accès depuis Licence Management EBS selon dispositions du partenariat." },
    ],
    eligibilite: "Accès depuis les Licences Informatique et Management EBS. Admission et reconnaissance des acquis étudiées au cas par cas par GUtech. Anglais requis.",
    avantages: [
      "Collaboration académique étroite avec RWTH Aachen University (Allemagne)",
      "Programmes Bachelor accrédités internationalement par ACQUIN",
      "Enseignement 100% en anglais dans un environnement technologique moderne",
      "Opportunités de Summer Schools, workshops, bootcamps et projets conjoints",
      "Préparation aux certifications internationales (AWS, Azure, Google Cloud, Cisco, Meta)",
      "Accès privilégié au marché de l'emploi dynamique du Golfe (Oman, EAU, Qatar, Arabie Saoudite)",
      "Possibilité de tarifs préférentiels pour les étudiants EBS",
    ],
    debouches: [
      "Software Engineer / Architecte logiciel",
      "Spécialiste Intelligence Artificielle & Machine Learning",
      "Expert Cybersécurité & Sécurité des Réseaux",
      "Data Scientist / Consultant Big Data",
      "IT Project Leader / Manager des Systèmes d'Information",
    ],
    keyStats: [
      { label: "Création", value: "2007" },
      { label: "Localisation", value: "Halban, Muscat, Sultanat d'Oman" },
      { label: "Accréditations", value: "OAAAQA, ACQUIN" },
    ],
    pricing: [
      { label: "BSc & MSc", amount: "Tarif GUtech", period: "", note: "Tarifs préférentiels EBS" },
    ],
    extraSections: [
      {
        title: "Coopération académique, projets et mobilité",
        body: "- **Stages, projets appliqués**, ateliers techniques et visites académiques ou professionnelles.\n- **Conférences, séminaires, workshops** et Summer Schools.\n- **Mobilité d'enseignants**, d'experts et échanges étudiants de courte durée.\n- **Recherche appliquée**, supervision de projets et développement de modules pédagogiques.\n- **Certifications internationales** : AWS, Azure, Google Cloud, Cisco, Meta..."
      }
    ],
  },

  redsup: {
    slug: "redsup",
    name: "RED-SUP",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/redsup.webp",
    type: "Établissement spécialisé en informatique et cybersécurité",
    presentation: "RED-SUP est un établissement français d'enseignement supérieur privé spécialisé dans l'informatique et la cybersécurité. Ses formations couvrent notamment les réseaux, la sécurité informatique et la cybersécurité, avec des cursus de niveau Bac+3 et Bac+5.",
    programmes: [
      { nom: "Mastère Européen – Expert IT en Cybersécurité", duree: "2 ans (Bac+5)", details: "Titre RNCP niveau 7. Accès pour les titulaires d'une Licence EBS : Génie Logiciel & Systèmes d'Information." },
    ],
    eligibilite: "Être titulaire d'une Licence EBS en informatique, génie logiciel, systèmes d'information, réseaux ou discipline connexe. Admission soumise à l'étude du dossier et à la décision de RED-SUP.",
    avantages: [
      "Établissement français spécialisé dans l'informatique et la cybersécurité",
      "Formation Bac+5 orientée vers l'expertise IT et la sécurité des systèmes",
      "Pédagogie professionnalisante : projets appliqués et expérience professionnelle",
      "Passerelle dédiée aux titulaires d'une Licence EBS (informatique)",
      "15 % de réduction sur les frais de scolarité pour les étudiants EBS",
      "Accompagnement académique par ESPIMA et documents requis pour le visa",
    ],
    debouches: [
      "Expert en Cybersécurité",
      "Consultant en sécurité des systèmes d'information",
      "Architecte réseau et sécurité",
      "Analyste cybersécurité",
    ],
    keyStats: [
      { label: "Campus", value: "Paris (Clichy)" },
      { label: "Domaines", value: "Cybersécurité, Réseaux, Informatique" },
    ],
    pricing: [
      { label: "Mastère", amount: "Tarif officiel", period: "", note: "-15% de réduction EBS" },
    ],
    extraSections: [
      {
        title: "Conditions financières",
        body: "- **Réduction** : 15 % sur les frais de scolarité selon les conditions et modalités définies par RED-SUP.\n- RED-SUP délivre aux étudiants admis les attestations et documents académiques requis, notamment pour le visa."
      }
    ],
  },
} satisfies Record<AcademicPartnerSlug, PartnerData>;

export const partenaires: Readonly<Record<string, PartnerData>> = canonicalPartenaires;
