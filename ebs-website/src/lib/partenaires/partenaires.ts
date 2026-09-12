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
    type: "Université publique québécoise",
    presentation: "L'Université du Québec en Abitibi-Témiscamingue (UQAT) est une université publique canadienne membre du réseau de l'Université du Québec, reconnue pour la qualité de son enseignement, son accompagnement personnalisé et son ouverture à l'international. Elle accueille chaque année des étudiants de nombreux pays et offre des formations de cycles supérieurs dans des domaines répondant aux besoins du marché de l'emploi, notamment la gestion de projet, la gestion des organisations, les sciences, l'ingénierie, l'éducation et les technologies. Grâce à un environnement d'études à taille humaine et à un encadrement de proximité, l'UQAT favorise la réussite académique, l'intégration et le développement professionnel de ses étudiants internationaux.",
    programmes: [
      {
        nom: "Maîtrise en gestion de projet (MGP)",
        duree: "2 ans",
        details: "Maîtrise (Master). Licence EBS.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Diplôme** : Maîtrise (Master)",
              "**Étudiants EBS concernés** : Licence EBS",
              "**Campus** : Val-d'Or",
              "**Conditions d'admission** : Moyenne ≥ 11/20 • Programme préparatoire ESPIMA • Tests de statistiques et mathématiques financières",
              "**Coût estimatif** : 24 000 à 30 000 $ CAD (2 ans)"
            ]
          }
        ]
      },
      {
        nom: "Maîtrise en gestion des organisations (MGO)",
        duree: "2 ans",
        details: "Maîtrise (Master). Licence EBS.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Diplôme** : Maîtrise (Master)",
              "**Étudiants EBS concernés** : Licence EBS",
              "**Campus** : Rouyn-Noranda",
              "**Conditions d'admission** : Moyenne ≥ 12/20 • Projet de recherche • Lettre d'invitation • Dossier académique",
              "**Coût estimatif** : 24 000 à 30 000 $ CAD (2 ans)"
            ]
          }
        ]
      }
    ],
    eligibilite: "• Être titulaire d'une Licence ESPIMA ou d'un diplôme équivalent.\n• Respecter la moyenne minimale exigée selon le programme.\n• Être proposé par ESPIMA Business School.\n• Déposer un dossier complet.\n• Régler les frais d'admission (75 $ CAD).\n• Respecter les délais de candidature.\n• Obtenir le CAQ, le permis d'études et le visa.\n\n**Calendrier**\n- Transmission de la liste des étudiants par ESPIMA : 15 janvier\n- Dépôt du dossier d'admission : 1er février\n- Communication avec les professeurs (MGO) : Avant le 20 février\n- Traitement du dossier : 3 à 4 semaines",
    avantages: [
      "✓ Université publique canadienne membre du réseau de l'Université du Québec.",
      "✓ Diplômes universitaires reconnus au Canada et à l'international.",
      "✓ Deux maîtrises accessibles aux diplômés d'ESPIMA.",
      "✓ Tarif canadien préférentiel réservé aux étudiants ESPIMA.",
      "✓ Bourse spécifique pour les étudiants de la MGP.",
      "✓ Encadrement académique personnalisé.",
      "✓ Études au Québec avec possibilité d'acquérir une expérience internationale.",
      "✓ Excellentes perspectives professionnelles en gestion de projet et en gestion des organisations."
    ],
    debouches: [],
    keyStats: [
      { label: "Nom", value: "Université du Québec en Abitibi-Témiscamingue (UQAT)" },
      { label: "Type", value: "Université publique canadienne" },
      { label: "Réseau", value: "Université du Québec" },
      { label: "Province", value: "Québec (Canada)" },
      { label: "Campus concernés", value: "Val-d'Or • Rouyn-Noranda" },
      { label: "Langue d'enseignement", value: "Français" },
      { label: "Diplômes", value: "Maîtrise (Master)" },
      { label: "Partenariat avec ESPIMA", value: "Poursuite d'études après Licence" }
    ],
    pricing: [
      { label: "Maîtrise en gestion de projet (MGP)", amount: "24 000 à 30 000", period: "$ CAD" },
      { label: "Maîtrise en gestion des organisations (MGO)", amount: "24 000 à 30 000", period: "$ CAD" }
    ],
    extraSections: [
      {
        title: "Reconnaissances et qualité académique",
        body: "- **Université publique** : Membre du réseau de l'Université du Québec.\n- **Diplômes** : Diplômes universitaires reconnus au Canada et à l'international.\n- **Recherche** : Université reconnue pour ses activités de recherche et ses liens avec les entreprises.\n- **Système universitaire** : Programmes conformes aux normes canadiennes et nord-américaines."
      },
      {
        title: "Informations importantes pour les étudiants",
        body: "- Les frais sont payés directement à l'UQAT.\n- Les frais d'admission sont de 75 $ CAD.\n- Les frais de scolarité sont indexés d'environ 3 % par année.\n- Les étudiants doivent obtenir un CAQ, un permis d'études et un visa.\n- Les frais de logement, de transport, d'assurance et de séjour restent à la charge de l'étudiant.\n- Les étudiants de la MGP doivent suivre le programme préparatoire organisé par ESPIMA et réussir les tests de statistiques et de mathématiques financières.\n- Les étudiants de la MGO doivent identifier un directeur de recherche et obtenir une lettre d'invitation."
      },
      {
        title: "Conditions financières du partenariat",
        body: "- **Tarif préférentiel** : Les étudiants d'ESPIMA bénéficient du tarif canadien, inférieur au tarif international.\n- **Coût estimatif** : Entre 24 000 et 30 000 $ CAD pour les deux années (selon les informations communiquées par l'UQAT).\n- **Frais d'admission** : 75 $ CAD.\n- **Indexation** : Les frais de scolarité peuvent être révisés d'environ 3 % par an.\n- **Bourse (MGP uniquement)** : 2 500 $ CAD par session, jusqu'à un maximum de 4 sessions, conformément à la convention.\n- **Autres frais** : Logement, assurance, transport, restauration et dépenses personnelles à la charge de l'étudiant."
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
    presentation: "Fondée en 1871, EM Normandie Business School est l'une des plus anciennes Grandes Écoles de Management françaises. Reconnue pour son excellence académique et son ouverture internationale, elle accueille plus de 6 600 étudiants de plus de 100 nationalités sur 6 campus internationaux. Membre de la Conférence des Grandes Écoles (CGE), elle fait également partie du cercle très restreint des Business Schools titulaires de la Triple Couronne internationale (AACSB, EQUIS et AMBA), une distinction détenue par moins de 1 % des écoles de management dans le monde.",
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
      { label: "AACSB", description: "Accréditation internationale garantissant l'excellence académique des écoles de management." },
      { label: "EQUIS", description: "Accréditation européenne délivrée par l'EFMD, reconnaissant la qualité de l'école et son ouverture internationale." },
      { label: "AMBA", description: "Accréditation internationale attribuée au Programme Grande École (Master in Management)." },
      { label: "Triple Couronne", description: "Moins de 1 % des Business Schools dans le monde possèdent simultanément les accréditations AACSB, EQUIS et AMBA." },
      { label: "Conférence des Grandes Écoles (CGE)", description: "EM Normandie est membre de la Conférence des Grandes Écoles." },
      { label: "Programme Grande École", description: "Diplôme visé par l'État conférant le Grade de Master." },
      { label: "Master of Science (MSc)", description: "Plusieurs MSc bénéficient du label MSc de la CGE selon les programmes." },
      { label: "Mastère Spécialisé (MS)", description: "Diplôme labellisé Mastère Spécialisé® (MS) par la Conférence des Grandes Écoles, lorsque le programme est concerné." },
    ],
    accreditationImage: "/images/ebs-tn/Calque-2-2.png",
    extraSections: [
      {
        title: "Avantages financiers du partenariat",
        body: "- **Réduction EM Normandie** : 10 % sur les frais de scolarité\n- **Réduction ESPIMA** : 5 % supplémentaires\n- **Réduction anticipée** : 10 % supplémentaires pour une candidature déposée avant le 30 avril\n- **Frais de dossier** : Exonérés\n- **Acompte** : 3 000 €\n- **Refus de visa** : Remboursement de l'acompte selon les dispositions prévues par la convention"
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
    presentation: "Paris School of Business (PSB) est une Grande École française de management reconnue pour l'excellence de ses formations, son ouverture internationale et sa proximité avec les entreprises. Membre de la Conférence des Grandes Écoles (CGE), l'école propose des formations allant du Bachelor au Programme Grande École conférant le Grade de Master, ainsi que des Masters of Science (MSc) dans plusieurs domaines du management.\nSituée à Paris, PSB accueille des étudiants de nombreuses nationalités et développe une pédagogie fondée sur l'innovation, les projets, l'expérience internationale et le développement des compétences professionnelles.\nLe partenariat entre ESPIMA Business School et Paris School of Business permet aux étudiants d'ESPIMA de poursuivre leurs études en France dans le cadre d'un parcours académique international, tout en bénéficiant d'un accompagnement personnalisé et des avantages prévus par la convention de partenariat.",
    programmes: [
      {
        nom: "Bachelor",
        duree: "1 an",
        details: "Diplôme visé • Grade de Licence – Bac+3 • Reconnu par l’État. Après Bac+2 EBS – admission en Bachelor 3.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Diplôme visé • Grade de Licence – Bac+3 • Reconnu par l’État",
              "**Étudiants EBS concernés** : Après Bac+2 EBS – admission en Bachelor 3",
              "**Principales spécialisations** : Marketing Digital • Banking & Finance • Audit & Contrôle de Gestion • International Business • Entrepreneuriat & Business Development",
              "**Campus** : Paris",
              "**Langue** : Français / Anglais selon parcours"
            ]
          }
        ]
      },
      {
        nom: "Programme Grande École (PGE)",
        duree: "2 ans",
        details: "Diplôme visé • Grade de Master – Bac+5 • RNCP 7 • EQUIS • AACSB • AMBA. Titulaires d’une Licence EBS (Bac+3).",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Diplôme visé • Grade de Master – Bac+5 • RNCP 7 • EQUIS • AACSB • AMBA",
              "**Étudiants EBS concernés** : Titulaires d’une Licence EBS (Bac+3)",
              "**Principales spécialisations** : Marketing & Data • Digital Business • International Business • Audit & Contrôle de Gestion • Achats & Supply Chain • Data Management • Ressources Humaines • Entrepreneuriat & Business Development…",
              "**Campus** : Paris",
              "**Langue** : Français / Anglais selon parcours"
            ]
          }
        ]
      },
      {
        nom: "Master of Science (MSc)",
        duree: "1 an",
        details: "Bac+5 • Label MSc de la Conférence des Grandes Écoles (CGE), selon le programme. Titulaires d’une Licence ou d’un M1 EBS, selon le MSc et le niveau d’entrée.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+5 • Label MSc de la Conférence des Grandes Écoles (CGE), selon le programme",
              "**Étudiants EBS concernés** : Titulaires d’une Licence ou d’un M1 EBS, selon le MSc et le niveau d’entrée",
              "**Principales spécialisations** : MSc proposés par PSB selon l’offre de la rentrée concernée",
              "**Campus** : Paris",
              "**Langue** : Principalement anglais / selon MSc"
            ]
          }
        ]
      },
      {
        nom: "MBA et programmes spécialisés",
        duree: "Variable",
        details: "Bac+5 • Titre RNCP / reconnaissance selon le programme. Selon le niveau académique requis.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+5 • Titre RNCP / reconnaissance selon le programme",
              "**Étudiants EBS concernés** : Selon le niveau académique requis",
              "**Principales spécialisations** : Selon le MBA ou programme spécialisé choisi",
              "**Campus** : Paris",
              "**Langue** : Français / Anglais selon programme"
            ]
          }
        ]
      }
    ],
    eligibilite: "du parcours académique du candidat ;\ndes diplômes et relevés de notes ;\ndu curriculum vitae et de la lettre de motivation ;\nd'un entretien individuel d'admission ;\ndu niveau de langue lorsque celui-ci est exigé par le programme choisi.",
    avantages: [
      "Grande École française reconnue, membre de la Conférence des Grandes Écoles (CGE).",
      "Triple accréditation internationale : AACSB, EQUIS et AMBA.",
      "Programme Grande École conférant le Grade de Master et large choix de spécialisations en Bachelor et Bac+5.",
      "Pédagogie orientée vers les projets, l’innovation et l’expérience professionnelle.",
      "Forte dimension internationale et réseau important d’entreprises partenaires.",
      "Campus situé à Paris, au cœur d’un environnement économique et professionnel international.",
      "Possibilité pour les étudiants EBS de poursuivre leurs études à PSB après Bac+2, après la Licence ou après un M1, selon le programme choisi.",
      "Accompagnement des étudiants EBS dans leurs démarches de poursuite d’études dans le cadre du partenariat.",
    ],
    debouches: [],
    keyStats: [
      { label: "Nom de l’établissement", value: "Paris School of Business (PSB)" },
      { label: "Type d’établissement", value: "Grande École française de management" },
      { label: "Année de création", value: "1974" },
      { label: "Campus", value: "Paris (Campus Nation – Paris)" },
      { label: "Domaines de formation", value: "Management • Marketing • Finance • International Business • Entrepreneuriat • Innovation • Data • Intelligence Artificielle • Digital • Supply Chain • Luxe • Ressources Humaines • Communication • Management de projets" },
      { label: "Langues d’enseignement", value: "Français et Anglais (selon les programmes)" },
      { label: "Reconnaissances et accréditations", value: "École reconnue par l'État français • Membre de la Conférence des Grandes Écoles (CGE) • Programme Grande École visé conférant le Grade de Master • Triple accréditation internationale AACSB • EQUIS • AMBA" },
      { label: "Partenariat avec ESPIMA", value: "Poursuite d'études des étudiants d'ESPIMA Business School dans les programmes de Paris School of Business conformément à la convention de partenariat." }
    ],
    pricing: [
      { label: "Bachelor", amount: "Tarif officiel PSB", period: "" },
      { label: "Programme Grande École (PGE)", amount: "Tarif officiel PSB", period: "" },
      { label: "Master of Science (MSc)", amount: "Tarif officiel PSB", period: "" },
      { label: "MBA et programmes spécialisés", amount: "Tarif officiel PSB", period: "" },
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
    presentation: "Fondée en 1965, IDRAC Business School est une Grande École française de commerce et de management, membre de l’Union des Grandes Écoles Indépendantes (UGEI). Implantée dans plusieurs grandes villes françaises, elle propose des formations de Bac à Bac+5 dans les domaines du commerce, du marketing, du management, de la stratégie, de l’international, de la finance, de l’innovation et de la supply chain.\nSes formations bénéficient de reconnaissances officielles de l’État français, notamment le Grade de Licence pour le Bachelor Marketing & Business et le Grade de Master pour son Programme Grande École. L’école développe une pédagogie professionnalisante fondée sur les projets, l’expérience en entreprise, l’entrepreneuriat et l’ouverture internationale.\nIDRAC Business School fait partie du réseau d’écoles de FIGS Education, qui rassemble plusieurs établissements français d’enseignement supérieur spécialisés et accompagne notamment les étudiants internationaux dans leurs projets d’études en France. IDRAC bénéficie également d’une forte dimension internationale, avec des programmes en anglais et des collaborations académiques à l’étranger.\nLe partenariat entre ESPIMA Business School, FIGS Education et IDRAC Business School permet aux étudiants d’ESPIMA de poursuivre leurs études en France après Bac+2 ou après l’obtention de leur Licence, selon leur parcours académique et les conditions prévues par la convention.",
    programmes: [
      {
        nom: "Bachelor Marketing & Business",
        duree: "1 an",
        details: "Bac+3 • Diplôme visé par l’État. Après Bac+2 EBS / 120 ECTS – admission en 3e année dans le cadre du parcours 2+1.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+3 • Diplôme visé par l’État",
              "**Étudiants EBS concernés** : Après Bac+2 EBS / 120 ECTS – admission en 3e année dans le cadre du parcours 2+1",
              "**Campus** : Bordeaux • Grenoble • Lyon • Montpellier • Nantes • Nice • Paris • Toulouse",
              "**Langue** : Français"
            ]
          }
        ]
      },
      {
        nom: "MBA Supply Chain, Achats & RSE",
        duree: "2 ans",
        details: "Bac+5 • Titre RNCP 7. Titulaires de la Licence EBS Management EBS.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+5 • Titre RNCP 7",
              "**Étudiants EBS concernés** : Titulaires de la Licence EBS Management EBS, conformément au partenariat et sous réserve d’admission",
              "**Campus** : Grenoble • Lyon",
              "**Langue** : Français"
            ]
          }
        ]
      },
      {
        nom: "MBA Manager de l’innovation stratégique",
        duree: "2 ans",
        details: "Bac+5 • Titre RNCP 7. Titulaires d’une Licence EBS compatible.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+5 • Titre RNCP 7",
              "**Étudiants EBS concernés** : Titulaires d’une Licence EBS compatible, sous réserve de correspondance avec les parcours prévus par le partenariat",
              "**Campus** : Bordeaux • Grenoble • Lyon • Montpellier • Nantes • Nice • Paris • Toulouse",
              "**Langue** : Français"
            ]
          }
        ]
      },
      {
        nom: "MBA International Project Management",
        duree: "2 ans",
        details: "Bac+5 • Titre RNCP 7. Titulaires d’une Licence EBS compatible.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+5 • Titre RNCP 7",
              "**Étudiants EBS concernés** : Titulaires d’une Licence EBS compatible, sous réserve des dispositions du partenariat et d’admission",
              "**Campus** : Montpellier • Nantes • Toulouse",
              "**Langue** : Anglais"
            ]
          }
        ]
      }
    ],
    eligibilite: "Modèles académiques prévus par le partenariat :\n• Modèle 2+1 : deux années d’études validées à ESPIMA, puis une 3e année à IDRAC Business School.\n• Modèle 3+1 : Licence obtenue à ESPIMA Business School, puis poursuite dans un programme MBA accessible dans le cadre du partenariat.\n• Après un Master 1 EBS : une admission en 2ᵉ année de certains programmes Bac+5 d’IDRAC Business School peut être envisagée, sous réserve de la compatibilité du parcours, de la validation des acquis académiques et de la décision d’admission d’IDRAC Business School.\n\nConditions générales d’admission :\nL’admission des étudiants d’ESPIMA Business School est examinée par IDRAC Business School conformément à la convention de partenariat FIGS Education et aux procédures d’admission applicables au programme choisi.\nLe dossier de candidature est évalué notamment sur la base :\n• du parcours académique du candidat et de la validation des années d’études à ESPIMA ;\n• des diplômes et relevés de notes ;\n• de la validation de 120 ECTS pour une poursuite après Bac+2 ou de 180 ECTS après Licence ;\n• du curriculum vitae et de la lettre de motivation ;\n• d’un entretien d’admission lorsque celui-ci est demandé ;\n• du niveau linguistique requis : Français B2 et Anglais B2 selon les conditions prévues par le partenariat et le programme choisi.\nImportant : les intitulés des programmes et les campus d’affectation peuvent évoluer. L’admission définitive dépend du programme choisi, de l’étude du dossier et des conditions en vigueur au moment de la candidature.",
    avantages: [
      "Grande École française de commerce et de management, fondée en 1965.",
      "Des diplômes reconnus par l’État français, avec notamment le Grade de Licence pour le Bachelor Marketing & Business et le Grade de Master pour le Programme Grande École.",
      "Un réseau de huit campus en France : Bordeaux, Grenoble, Lyon, Montpellier, Nantes, Nice, Paris et Toulouse.",
      "Une pédagogie professionnalisante associant projets, expérience en entreprise, entrepreneuriat et ouverture internationale.",
      "Des formations couvrant notamment le management, marketing, commerce, international, innovation et supply chain.",
      "Possibilité pour les étudiants EBS de poursuivre leurs études en France après Bac+2 ou après la Licence, selon leur filière et le programme choisi.",
      "12 % de réduction sur les frais de scolarité dans le cadre du partenariat.",
      "Accompagnement personnalisé dans les démarches Campus France et visa.",
    ],
    debouches: [],
    keyStats: [
      { label: "Nom de l’établissement", value: "IDRAC Business School" },
      { label: "Type d’établissement", value: "École française de commerce et de management" },
      { label: "Année de création", value: "1965" },
      { label: "Campus en France", value: "Bordeaux • Grenoble • Lyon • Montpellier • Nantes • Nice • Paris • Toulouse" },
      { label: "Domaines de formation", value: "Commerce • Management • Marketing • International Business • Finance • Entrepreneuriat • Innovation • Achats • Supply Chain • Digital" },
      { label: "Langues d’enseignement", value: "Français et Anglais selon les programmes et parcours" },
      { label: "Reconnaissances", value: "Bachelor Marketing & Business : diplôme visé Bac+3 • Programme Grande École : diplôme visé Bac+5 conférant le Grade de Master • Titres RNCP niveau 7 selon les MBA spécialisés" },
      { label: "Dimension internationale", value: "Réseau de partenaires académiques internationaux et possibilités de mobilité selon les programmes" },
      { label: "Partenariat avec ESPIMA", value: "Poursuite d’études après Bac+2 et après Licence EBS, conformément à la convention FIGS Education" }
    ],
    pricing: [
      { label: "Bachelor Marketing & Business", amount: "Tarif officiel IDRAC", period: "" },
      { label: "MBA Supply Chain, Achats & RSE", amount: "Tarif officiel IDRAC", period: "" },
      { label: "MBA Manager de l’innovation stratégique", amount: "Tarif officiel IDRAC", period: "" },
      { label: "MBA International Project Management", amount: "Tarif officiel IDRAC", period: "" },
    ],
    extraSections: [
      {
        title: "Conditions financières prévues par le partenariat",
        body: "- **Réduction** : 12 % sur les frais de scolarité\n- **Frais de candidature** : Exonération de 80 €\n- **1er acompte** : 3 000 € à l’admission\n- **2e acompte** : 3 000 € après obtention du visa\n- **Solde** : Avant le 30 novembre (Fall) ou le 30 avril (Spring)\n- **Refus de visa** : Remboursement du premier acompte conformément aux dispositions prévues par la convention"
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
    presentation: "Créée en 1968, l’IFAG est une École Supérieure française de management spécialisée dans les domaines du commerce, des ressources humaines et de l’entrepreneuriat. Pionnière de l’alternance en France, elle forme des étudiants du Bac+2 au Bac+5 et s’appuie sur un important réseau de campus.\nSa pédagogie professionnalisante est orientée vers l’action, les projets et l’expérience en entreprise. Elle prépare des managers opérationnels capables de développer l’activité commerciale, piloter un centre de profit, accompagner les équipes et conduire des projets.\nL’IFAG fait partie du réseau d’écoles de FIGS Education, service international d’un regroupement d’écoles privées françaises, qui accompagne notamment les étudiants internationaux dans leurs projets d’études en France.\nLe partenariat entre ESPIMA Business School, FIGS Education et l’IFAG permet aux étudiants EBS de poursuivre leurs études en France après Bac+2 ou après l’obtention de leur Licence, selon leur spécialité et les conditions prévues par la convention.",
    programmes: [
      {
        nom: "Bachelor – Responsable d’Agence et de Commerce",
        duree: "1 an",
        details: "Bac+3 • Titre RNCP 6. Étudiants EBS ayant validé Bac+2.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+3 • Titre RNCP 6",
              "**Étudiants EBS concernés** : Étudiants EBS ayant validé Bac+2",
              "**Campus** : Plusieurs campus IFAG",
              "**Langue** : Français"
            ]
          }
        ]
      },
      {
        nom: "Mastère – Manager de Commerce et de Centre de Profit",
        duree: "2 ans",
        details: "Bac+5 • Titre RNCP 7. Titulaires d’une Licence EBS en Management ou Marketing.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+5 • Titre RNCP 7",
              "**Étudiants EBS concernés** : Titulaires d’une Licence EBS en Management ou Marketing",
              "**Campus** : Plusieurs campus IFAG",
              "**Langue** : Français"
            ]
          }
        ]
      }
    ],
    eligibilite: "du niveau académique validé à ESPIMA Business School ;\ndes diplômes et relevés de notes ;\nde la cohérence entre la filière suivie à EBS et le programme demandé ;\ndu curriculum vitae et de la lettre de motivation ;\ndu concours et/ou de l’entretien d’admission lorsque requis par l’IFAG ;\ndes conditions particulières applicables au campus et au programme choisis.\nAprès un Master 1 EBS : une admission en 2ᵉ année de certains programmes Bac+5 de l’IFAG peut être envisagée, sous réserve de la compatibilité du parcours, de la validation des acquis académiques et de la décision finale d’admission de l’IFAG.",
    avantages: [
      "Plus de 50 ans d’expertise dans la formation aux métiers du management, du commerce et des ressources humaines.",
      "École pionnière de l’alternance en France, avec une pédagogie fortement professionnalisante et orientée vers l’action.",
      "Des formations du Bac au Bac+5 et des titres RNCP de niveaux 6 et 7 selon les programmes.",
      "Un vaste réseau de campus et une forte proximité avec les entreprises.",
      "Une place importante accordée à l’entrepreneuriat et au développement de projets.",
      "Des possibilités de poursuite pour les étudiants EBS après Bac+2 ou après la Licence, conformément au partenariat.",
      "12 % de réduction sur les frais de scolarité pour les étudiants EBS.",
      "Accompagnement personnalisé dans les démarches Campus France et visa."
    ],
    debouches: [],
    keyStats: [
      { label: "Nom de l’établissement", value: "IFAG" },
      { label: "Type d’établissement", value: "École française de management des métiers du commerce et des ressources humaines" },
      { label: "Année de création", value: "1968" },
      { label: "Réseau", value: "25 campus en France et à l’étranger selon l’offre actuelle de l’école" },
      { label: "Domaines de formation", value: "Management • Commerce • Développement commercial • Ressources humaines • Entrepreneuriat • Pilotage de centre de profit" },
      { label: "Niveaux de formation", value: "Bac+2 • Bac+3 • Bac+5" },
      { label: "Certifications", value: "Titres professionnels enregistrés au RNCP, notamment niveaux 6 et 7 selon les programmes" },
      { label: "Pédagogie", value: "Alternance • professionnalisation • projets • entrepreneuriat • proximité avec les entreprises" },
      { label: "Réseau Alumni", value: "18 000 diplômés annoncés par l’école" },
      { label: "Partenariat avec ESPIMA", value: "Poursuite d’études après Bac+2 et après Licence EBS, conformément au partenariat FIGS Education" }
    ],
    pricing: [
      { label: "Bachelor – Responsable d’Agence", amount: "Tarif officiel", period: "" },
      { label: "Mastère – Manager de Commerce", amount: "Tarif officiel", period: "" },
    ],
    extraSections: [
      {
        title: "Conditions financières prévues par le partenariat",
        body: "- **Réduction** : 12 % sur les frais de scolarité\n- **Frais de candidature** : Exonération de 80 €\n- **1er acompte** : 3 000 € à l’admission\n- **2e acompte** : 3 000 € après obtention du visa\n- **Solde** : Avant le 30 novembre (Fall) ou le 30 avril (Spring)\n- **Refus de visa** : Remboursement du premier acompte conformément aux dispositions prévues par la convention"
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
    presentation: "IGEFI est une École Supérieure française spécialisée dans les métiers de la finance d’entreprise, de la comptabilité, du contrôle de gestion, de la paie et de l’expertise comptable. Son offre s’étend du Bac+2 au Bac+5 et associe diplômes d’État, Grades de Licence et de Master pour les cursus concernés, et certifications professionnelles enregistrées au RNCP.\nL’école structure notamment son offre autour de deux grands parcours : l’expertise comptable, avec les diplômes d’État DCG et DSCG, et la comptabilité-gestion-finance, avec des formations professionnalisantes préparant aux métiers du chiffre, du contrôle de gestion et du pilotage financier.\nIGEFI fait partie du réseau d’écoles de FIGS Education, qui réunit plusieurs établissements français d’enseignement supérieur spécialisés et accompagne notamment les étudiants internationaux dans leurs projets d’études en France. Le partenariat entre ESPIMA Business School, FIGS Education et IGEFI permet aux étudiants EBS de poursuivre leurs études en France après Bac+2 ou après l’obtention de leur Licence Finance, selon les passerelles et conditions prévues par le partenariat.",
    programmes: [
      {
        nom: "Bachelor – Chargé de gestion comptable et financière",
        duree: "1 an",
        details: "Bac+3 • Titre RNCP 6. Étudiants EBS ayant validé Bac+2 dans un domaine compatible.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+3 • Titre RNCP 6",
              "**Étudiants EBS concernés** : Étudiants EBS ayant validé Bac+2 dans un domaine compatible",
              "**Campus** : Bordeaux • Lille",
              "**Langue** : Français"
            ]
          }
        ]
      },
      {
        nom: "Bachelor – Contrôleur de Gestion",
        duree: "1 an",
        details: "Bac+3 • Titre RNCP 6. Étudiants EBS ayant validé Bac+2 dans un domaine compatible.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+3 • Titre RNCP 6",
              "**Étudiants EBS concernés** : Étudiants EBS ayant validé Bac+2 dans un domaine compatible",
              "**Campus** : Lyon • Nantes • Paris-Courbevoie",
              "**Langue** : Français"
            ]
          }
        ]
      },
      {
        nom: "MBA – Expert Financier",
        duree: "2 ans",
        details: "Bac+5 • Titre RNCP 7. Spécialisation en finance d’entreprise. Titulaires de la Licence Finance EBS.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Spécialisation** : Spécialisation en finance d’entreprise",
              "**Reconnaissance** : Bac+5 • Titre RNCP 7",
              "**Étudiants EBS concernés** : Titulaires de la Licence Finance EBS",
              "**Campus** : Bordeaux • Lille • Lyon • Nantes • Paris",
              "**Langue** : Français"
            ]
          }
        ]
      },
      {
        nom: "DSCG – Diplôme Supérieur de Comptabilité et de Gestion",
        duree: "2 ans",
        details: "Bac+5 • Titre RNCP 7. Titulaires d’une Licence EBS compatible.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+5 • Titre RNCP 7",
              "**Étudiants EBS concernés** : Titulaires d’une Licence EBS compatible, sous réserve des prérequis du DSCG.",
              "**Campus** : Paris-Courbevoie",
              "**Langue** : Français"
            ]
          }
        ]
      }
    ],
    eligibilite: "du niveau académique validé à ESPIMA Business School ;\ndes diplômes et relevés de notes ;\nde la cohérence entre la formation EBS et le programme IGEFI demandé ;\ndes prérequis spécifiques du programme, notamment 120 ECTS pour les formations Bac+3 accessibles après Bac+2 et un niveau Bac+3 pour le cursus Expert Financier ;\ndu dossier de candidature, des tests en ligne et de l’entretien de motivation selon la procédure actuelle de l’école IGEFI ;\ndes conditions particulières applicables au campus et au programme choisis.\n\nAprès un Master 1 EBS : une admission en 2ᵉ année de certains programmes Bac+5 d’IGEFI peut être envisagée, sous réserve de la compatibilité du parcours, de la validation des acquis académiques, des prérequis du programme et de la décision finale d’admission d’IGEFI.",
    avantages: [
      "École spécialisée dans les métiers de la finance d’entreprise, de la comptabilité et de l’expertise comptable.",
      "Une expertise historique dans les métiers du chiffre et des parcours professionnalisants du Bac+2 au Bac+5.",
      "Diplômes d’État DCG et DSCG, avec Grade de Licence pour le DCG et Grade de Master pour le DSCG.",
      "Titres professionnels RNCP de niveaux 6 et 7 selon les programmes.",
      "Formations en finance d’entreprise, contrôle de gestion, comptabilité, audit et expertise financière.",
      "Intégration d’outils professionnels, de la data et de l’intelligence artificielle dans certaines formations.",
      "Six campus en France : Bordeaux, Lille, Lyon, Nantes, Paris et Toulouse.",
      "Possibilité pour les étudiants EBS de poursuivre leurs études après Bac+2 ou après la Licence Finance, selon le programme.",
      "12 % de réduction sur les frais de scolarité pour les étudiants EBS.",
      "Accompagnement personnalisé dans les démarches Campus France et visa."
    ],
    debouches: [],
    keyStats: [
      { label: "Nom de l’établissement", value: "IGEFI" },
      { label: "Type d’établissement", value: "École française des métiers de la finance d’entreprise, de la comptabilité et de l’expertise comptable" },
      { label: "Campus", value: "Bordeaux • Lille • Lyon • Nantes • Paris • Toulouse" },
      { label: "Domaines de formation", value: "Finance d’entreprise • Comptabilité • Contrôle de gestion • Audit • Expertise comptable • Gestion • Paie" },
      { label: "Niveaux de formation", value: "Bac+2 • Bac+3 • Bac+5" },
      { label: "Diplômes / certifications", value: "BTS • DCG (Grade de Licence) • DSCG (Grade de Master) • Titres RNCP niveaux 6 et 7 selon les programmes" },
      { label: "Parcours", value: "Expertise comptable • Comptabilité / Gestion / Finance • Paie" },
      { label: "Pédagogie", value: "Professionnalisation • cas pratiques • outils métiers • alternance et initial selon les formations" },
      { label: "Partenariat avec ESPIMA", value: "Poursuite d’études après Bac+2 et après Licence Finance EBS, conformément au partenariat FIGS Education" }
    ],
    pricing: [
      { label: "Bachelor – Chargé de gestion comptable", amount: "Tarif officiel", period: "" },
      { label: "Bachelor – Contrôleur de Gestion", amount: "Tarif officiel", period: "" },
      { label: "MBA – Expert Financier", amount: "Tarif officiel", period: "" },
      { label: "DSCG – Diplôme Supérieur", amount: "Tarif officiel", period: "" }
    ],
    extraSections: [
      {
        title: "Conditions financières prévues par le partenariat",
        body: "- **Réduction** : 12 % sur les frais de scolarité\n- **Frais de candidature** : Exonération de 80 €\n- **1er acompte** : 3 000 € à l’admission\n- **2e acompte** : 3 000 € après obtention du visa\n- **Solde** : Avant le 30 novembre (Fall) ou le 30 avril (Spring)\n- **Refus de visa** : Remboursement du premier acompte conformément aux dispositions prévues par la convention"
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
    presentation: "EKLORE-ed, anciennement ESC Pau Business School, est une Grande École française de commerce. Elle propose des formations du Bachelor au Bac+5 dans les domaines du management, de la gestion d’entreprise, du commerce, du marketing, de la finance, des ressources humaines, de la logistique, ainsi que du sport management.\nL’établissement propose des cursus en formation initiale et en alternance. Le partenariat avec ESPIMA Business School permet aux étudiants EBS de construire une poursuite d’études en France après Bac+2 ou après l’obtention de leur Licence, selon le programme choisi et les conditions d’admission.\nLes informations communiquées dans le cadre du partenariat mentionnent notamment des possibilités d’études sur les campus de Pau et de Paris, ainsi que des programmes en français et un parcours Master entièrement enseigné en anglais.",
    programmes: [
      {
        nom: "Bachelor Business Management",
        duree: "1 an",
        details: "Diplôme Bac+3 • Grade de Licence • Reconnu par l’État (MESR) • RNCP 6. Accès après Bac+2 EBS / 120 ECTS.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Diplôme Bac+3 • Grade de Licence • Reconnu par l’État (MESR) • RNCP 6",
              "**Étudiants EBS concernés** : Après Bac+2 EBS / 120 ECTS",
              "**Campus** : Pau pour l’entrée directe en B3",
              "**Langue** : Français / Anglais selon parcours"
            ]
          }
        ]
      },
      {
        nom: "Master en Management – Programme Grande École",
        duree: "2 ans",
        details: "Diplôme Bac+5 • Grade de Master • RNCP 7 • EFMD Accredited. Titulaires d’une Licence EBS (Bac+3).",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Diplôme Bac+5 • Grade de Master • RNCP 7 • EFMD Accredited",
              "**Spécialisations** : Finance • Marketing • Audit & Expertise Comptable • Management • Sport Management",
              "**Étudiants EBS concernés** : Titulaires d’une Licence EBS (Bac+3)",
              "**Campus** : Pau • Saint-Denis, selon parcours",
              "**Langue** : Français / Anglais selon parcours"
            ]
          }
        ]
      },
      {
        nom: "Management & International Business – Full English",
        duree: "2 ans",
        details: "Master Grande École • Bac+5 • Grade de Master • RNCP 7 • EFMD Accredited. Titulaires d’une Licence EBS.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Master Grande École • Bac+5 • Grade de Master • RNCP 7 • EFMD Accredited",
              "**Étudiants EBS concernés** : Titulaires d’une Licence EBS, selon admission",
              "**Campus** : Selon l’offre internationale EKLORE-ed",
              "**Langue** : Anglais"
            ]
          }
        ]
      }
    ],
    eligibilite: "être inscrit à ESPIMA Business School\navoir une moyenne minimale de 12/20 sur les années précédant l’inscription\npour une candidature au Bachelor après Bac+2 : moyenne prise en compte sur la 1re et la 2e année\npour une candidature au Programme Grande École ou en M1 du Mastère Manager du développement commercial : moyenne prise en compte sur la 1re, la 2e et la 3e année\navoir un bon niveau d’anglais et de français\npasser l’étude du dossier et l’entretien de sélection.",
    avantages: [
      "Intégrer un Bachelor après Bac+2 ou candidater au Programme Grande École après la Licence EBS.",
      "Accéder à des formations Bac+5 et à un large choix de spécialisations : management, marketing & IA, finance, RH, achats, logistique et sport management.",
      "Bénéficier d’un Master Full English en Management & International Business à Pau.",
      "Suivre un parcours Audit & Expertise Comptable, avec une dispense annoncée de 5 UE sur 7 du DSCG.",
      "Choisir, selon les programmes, entre formation initiale et alternance.",
      "Construire un parcours académique international entre ESPIMA Business School et une Grande École française.",
      "Réduction de 10 % sur les frais de scolarité dans le cadre du partenariat avec ESPIMA.",
    ],
    debouches: [],
    keyStats: [
      { label: "Nom de l’établissement", value: "EKLORE-ed (anciennement ESC Pau Business School)" },
      { label: "Type d’établissement", value: "Grande École française de commerce" },
      { label: "Campus concernés", value: "Pau • Paris, selon les programmes communiqués" },
      { label: "Domaines", value: "Management • Gestion d’entreprise • Commerce • Marketing • Finance • Ressources Humaines • Achats & Logistique • Sport Management • Audit & Expertise Comptable" },
      { label: "Niveaux", value: "Bachelor • Programme Grande École • Masters / formations Bac+5" },
      { label: "Modes de formation", value: "Formation initiale et alternance selon les programmes" },
      { label: "Langues", value: "Français et Anglais selon les programmes ; Master Full English à Pau" },
      { label: "Partenariat avec ESPIMA", value: "Poursuite après Bac+2 et après Licence EBS, selon les parcours et conditions d’admission" },
    ],
    pricing: [
      { label: "Bachelor Business Management", amount: "Tarif officiel EKLORE", period: "" },
      { label: "Master en Management – PGE", amount: "Tarif officiel EKLORE", period: "" },
      { label: "Management & International Business", amount: "Tarif officiel EKLORE", period: "" },
    ],
  },

  epitech: {
    slug: "epitech",
    name: "Epitech",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/epitech.webp",
    type: "Grande École Informatique — Expert Tech & Innovation",
    presentation: "EPITECH (École pour l'Informatique et les Nouvelles Technologies) est une Grande École française spécialisée dans l'informatique, les technologies numériques et l'innovation. Fondée en 1999, elle est reconnue pour sa pédagogie innovante basée sur les projets, l'apprentissage par la pratique et une forte proximité avec les entreprises.\nEPITECH forme des experts dans les domaines de l'intelligence artificielle, de la cybersécurité, du cloud computing, de la data, du développement logiciel et de la transformation numérique.\nGrâce au partenariat conclu avec ESPIMA Business School, les étudiants titulaires d'une Licence en Informatique peuvent poursuivre leurs études en France en intégrant le Master in IT d'EPITECH, tout en bénéficiant d'un accompagnement personnalisé et d'avantages financiers prévus par la convention.",
    programmes: [
      {
        nom: "Master in IT",
        duree: "2 ans",
        details: "Titre RNCP niveau 7 (Bac+5). Programme international en anglais sur le campus de Paris. Accès pour la Licence en Informatique.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Titre RNCP niveau 7 (Bac+5)",
              "**Spécialisations** : Intelligence Artificielle • Cybersécurité • Cloud Computing • Big Data • Développement Logiciel • Internet of Things (IoT) • Réalité Virtuelle (VR) • Transformation Digitale",
              "**Étudiants EBS concernés** : Licence en Informatique – Génie Logiciel & SI (ESPIMA)",
              "**Conditions d'admission** : Recommandation d'ESPIMA • Dossier complet • Respect des conditions d'admission EPITECH • Décision finale d'admission par EPITECH",
              "**Campus** : Paris (programme international)",
              "**Langue** : Anglais"
            ]
          }
        ]
      }
    ],
    eligibilite: "Les candidats doivent satisfaire aux conditions d'admission définies par EPITECH.\nÊtre recommandé par ESPIMA Business School.\nÊtre titulaire d'une Licence en Informatique ou d'un diplôme équivalent.\nDéposer un dossier de candidature complet conformément à la procédure EPITECH.\nRespecter les exigences académiques et linguistiques du programme.\nLa décision finale d'admission relève exclusivement d'EPITECH.\nCalendrier - Date limite de dépôt du dossier : 15 mai.\nEPITECH peut modifier cette date et en informe ESPIMA Business School.",
    avantages: [
      "Grande École française de référence dans les métiers de l'informatique et du numérique.",
      "Diplôme Bac+5 reconnu par l'État français.",
      "Titre RNCP niveau 7.",
      "Pédagogie innovante fondée sur les projets et la pratique.",
      "Formation orientée vers les métiers d'avenir : Intelligence Artificielle, Cybersécurité, Cloud, Big Data, Développement Logiciel, IoT et Réalité Virtuelle.",
      "Forte proximité avec les entreprises et excellente employabilité.",
      "Accompagnement des étudiants internationaux.",
      "Réduction de 10 % sur les frais de scolarité dans le cadre du partenariat avec ESPIMA.",
    ],
    debouches: [],
    keyStats: [
      { label: "Nom de l'établissement", value: "EPITECH – École pour l'Informatique et les Nouvelles Technologies" },
      { label: "Type d'établissement", value: "Grande École française spécialisée en informatique" },
      { label: "Année de création", value: "1999" },
      { label: "Campus", value: "Paris • Lyon • Lille • Bordeaux • Toulouse • Nantes • Rennes • Strasbourg • Montpellier • Nice • Marseille • Nancy • Mulhouse" },
      { label: "Reconnaissance officielle", value: "Diplôme Bac+5 visé par le ministère français de l'Enseignement supérieur et de la Recherche" },
      { label: "Certification RNCP", value: "Titre certifié de niveau 7 (Bac+5) enregistré au RNCP" },
      { label: "Pédagogie", value: "Apprentissage par projets, innovation, immersion en entreprise et ouverture internationale" },
      { label: "Domaines de formation", value: "Informatique • Intelligence artificielle • Cybersécurité • Cloud • Big Data • Développement logiciel • Réalité virtuelle • IoT • Transformation numérique" },
      { label: "Langues d'enseignement", value: "Français et Anglais (selon les programmes)" },
      { label: "Partenariat avec ESPIMA", value: "Poursuite d'études après une Licence en Informatique" }
    ],
    pricing: [
      { label: "Master in IT", amount: "Tarif officiel", period: "" },
    ],
    extraSections: [
      {
        title: "Conditions financières du partenariat",
        body: "- **Réduction sur les frais de scolarité** : 10 % de réduction sur les frais de scolarité standard.\n- **Acompte à l'admission** : 3 500 € à régler lors de la confirmation d'admission.\n- **Paiement du solde** : Le solde des frais de scolarité est payable au plus tard le jour de la rentrée académique.\n- **Refus de visa** : L'acompte est intégralement remboursé si EPITECH est informée du refus de visa dans un délai de 10 jours ouvrables suivant sa réception.\n- **Autres frais** : La CVEC, l'assurance, le logement, les transports et les dépenses personnelles restent à la charge de l'étudiant."
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
    presentation: "Créée en 1961, EPSI est une école française spécialisée dans l’ingénierie informatique. Elle forme des professionnels du numérique du Bac+2 au Bac+5 dans les principaux domaines de l’informatique : développement, systèmes et réseaux, intelligence artificielle, data, cybersécurité, cloud et DevOps.\nLa pédagogie EPSI est fortement orientée vers la pratique et les projets. L’école met en avant une approche « Learning by Doing », avec une place importante accordée aux réalisations concrètes et à la proximité avec les entreprises.\nEPSI fait partie du réseau d’écoles de FIGS Education, qui réunit plusieurs établissements français d’enseignement supérieur spécialisés dans différents domaines et accompagne les étudiants, notamment internationaux, dans leurs projets d’études en France.\nLe partenariat entre ESPIMA Business School, FIGS Education et EPSI permet notamment aux étudiants de la filière Informatique d’ESPIMA de poursuivre leurs études en France après Bac+2 ou après l’obtention de leur Licence, selon les conditions prévues par la convention.",
    programmes: [
      {
        nom: "Bachelor – Parcours spécialisés",
        duree: "1 an",
        details: "Bac+3 • Titre RNCP 6. Étudiants EBS ayant validé Bac+2 en Informatique.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+3 • Titre RNCP 6",
              "**Spécialisations** : Principales orientations : Développement Full Stack • Intelligence Artificielle • Systèmes & Réseaux",
              "**Étudiants EBS concernés** : Étudiants EBS ayant validé Bac+2 en Informatique",
              "**Campus** : Plusieurs campus EPSI",
              "**Langue** : Français"
            ]
          }
        ]
      },
      {
        nom: "Parcours Expert – Informatique et Système d’Information",
        duree: "2 ans",
        details: "Bac+5 • Titre RNCP 7. Titulaires de la Licence Informatique EBS.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+5 • Titre RNCP 7",
              "**Étudiants EBS concernés** : Titulaires de la Licence Informatique – Génie Logiciel & Systèmes d’Information EBS",
              "**Campus** : Plusieurs campus EPSI",
              "**Langue** : Français"
            ]
          }
        ]
      },
      {
        nom: "Parcours Expert – IA & Data Sciences",
        duree: "2 ans",
        details: "Bac+5 • Titre RNCP 7. Titulaires de la Licence Informatique EBS.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+5 • Titre RNCP 7",
              "**Étudiants EBS concernés** : Titulaires de la Licence Informatique – Génie Logiciel & Systèmes d’Information EBS",
              "**Campus** : Plusieurs campus EPSI",
              "**Langue** : Français"
            ]
          }
        ]
      },
      {
        nom: "Parcours Expert – DevOps",
        duree: "2 ans",
        details: "Bac+5 • Titre RNCP 7. Titulaires de la Licence Informatique EBS.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+5 • Titre RNCP 7",
              "**Étudiants EBS concernés** : Titulaires de la Licence Informatique – Génie Logiciel & Systèmes d’Information EBS",
              "**Campus** : Plusieurs campus EPSI",
              "**Langue** : Français"
            ]
          }
        ]
      },
      {
        nom: "Parcours Expert – Architecte Virtualisation Cloud",
        duree: "2 ans",
        details: "Bac+5 • Titre RNCP 7. Titulaires de la Licence Informatique EBS.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+5 • Titre RNCP 7",
              "**Étudiants EBS concernés** : Titulaires de la Licence Informatique – Génie Logiciel & Systèmes d’Information EBS",
              "**Campus** : Plusieurs campus EPSI",
              "**Langue** : Français"
            ]
          }
        ]
      },
      {
        nom: "Parcours Expert – Cybersécurité",
        duree: "2 ans",
        details: "Bac+5 • Titre RNCP 7. Titulaires de la Licence Informatique EBS.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+5 • Titre RNCP 7",
              "**Étudiants EBS concernés** : Titulaires de la Licence Informatique – Génie Logiciel & Systèmes d’Information EBS",
              "**Campus** : Plusieurs campus EPSI",
              "**Langue** : Français"
            ]
          }
        ]
      }
    ],
    eligibilite: "du niveau académique validé à ESPIMA Business School ;\ndes diplômes et relevés de notes ;\nde la cohérence entre le parcours suivi à EBS et la spécialisation demandée à EPSI ;\ndu curriculum vitae et de la lettre de motivation ;\ndes tests de sélection et de l’entretien d’admission lorsque ceux-ci sont requis par EPSI ;\ndes exigences linguistiques applicables au programme choisi.",
    avantages: [
      "Plus de 60 ans d’expertise dans la formation aux métiers de l’informatique et du numérique.",
      "Une pédagogie Learning by Doing, fondée sur les projets, la pratique et les mises en situation professionnelles.",
      "Des formations spécialisées dans les technologies recherchées par les entreprises : IA, Data, Cybersécurité, Cloud, DevOps, développement et systèmes d’information.",
      "Des titres RNCP de niveaux 6 et 7, selon les programmes.",
      "Un réseau de campus en France et une forte proximité avec les entreprises du numérique.",
      "Des possibilités de poursuite pour les étudiants EBS après Bac+2 ou après la Licence Informatique, conformément au partenariat.",
      "12 % de réduction sur les frais de scolarité pour les étudiants EBS.",
      "Accompagnement personnalisé dans les démarches Campus France et visa."
    ],
    debouches: [],
    keyStats: [
      { label: "Nom de l’établissement", value: "EPSI" },
      { label: "Type d’établissement", value: "École française d’ingénierie informatique" },
      { label: "Année de création", value: "1961" },
      { label: "Implantation", value: "Réseau de campus en France, notamment Arras, Auxerre, Bordeaux, Chartres, Grenoble, Lille, Lyon, Montpellier, Nantes, Paris-Courbevoie, Reims, Rennes, Saint-Étienne et Toulouse selon les programmes" },
      { label: "Domaines de formation", value: "Développement • Systèmes & Réseaux • Intelligence Artificielle • Data • Cybersécurité • Cloud • DevOps • Systèmes d’information" },
      { label: "Niveaux de formation", value: "Bac+2 • Bac+3 • Bac+5" },
      { label: "Certifications", value: "Titres professionnels enregistrés au RNCP, notamment niveaux 6 et 7 selon les programmes" },
      { label: "Pédagogie", value: "Learning by Doing • projets • mises en situation professionnelles • proximité avec les entreprises" },
      { label: "Partenariat avec ESPIMA", value: "Poursuite d’études après Bac+2 et après Licence EBS en Informatique, conformément au partenariat FIGS Education" }
    ],
    pricing: [
      { label: "Bachelor – Parcours spécialisés", amount: "Tarif officiel", period: "" },
      { label: "Parcours Expert – Info & SI", amount: "Tarif officiel", period: "" },
      { label: "Parcours Expert – IA & Data Sciences", amount: "Tarif officiel", period: "" },
      { label: "Parcours Expert – DevOps", amount: "Tarif officiel", period: "" },
      { label: "Parcours Expert – Architecte Cloud", amount: "Tarif officiel", period: "" },
      { label: "Parcours Expert – Cybersécurité", amount: "Tarif officiel", period: "" },
    ],
    extraSections: [
      {
        title: "Conditions financières prévues par le partenariat",
        body: "- **Réduction** : 12 % sur les frais de scolarité\n- **Frais de candidature** : Exonération de 80 €\n- **1er acompte** : 3 000 € à l’admission\n- **2e acompte** : 3 000 € après obtention du visa\n- **Solde** : Avant le 30 novembre (Fall) ou le 30 avril (Spring)\n- **Refus de visa** : Remboursement du premier acompte conformément aux dispositions prévues par la convention"
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
    presentation: "Excelia Business School est une Grande École de Management française reconnue par l'État, membre de la Conférence des Grandes Écoles (CGE) et appartenant au cercle très restreint des Business Schools titulaires de la Triple Couronne internationale (AACSB, EQUIS et AMBA), une distinction détenue par moins de 1 % des écoles de management dans le monde.\nElle propose des formations du Bachelor au Programme Grande École et aux Master of Science (MSc) dans les domaines du management, de la finance, du marketing, du digital, de la supply chain, de la communication, de l'entrepreneuriat et du développement durable.\nGrâce au partenariat conclu avec ESPIMA, les étudiants peuvent poursuivre leurs études en France après un Bac+2 ou une Licence, dans des conditions académiques et financières privilégiées.",
    programmes: [
      {
        nom: "Bachelor Business (3e année)",
        duree: "1 an",
        details: "Diplôme visé • Grade de Licence. Accès après un Bac+2 validé.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Diplôme visé • Grade de Licence",
              "**Étudiants concernés** : Bac+2 validé",
              "**Conditions d'admission** : Moyenne ≥ 12/20 • Recommandation EBS • Entretien • Français B2",
              "**Campus** : La Rochelle • Tours • Orléans",
              "**Langue** : Français"
            ]
          }
        ]
      },
      {
        nom: "BBA International",
        duree: "1 ou 2 ans",
        details: "Diplôme visé. Accès après un Bac+2 validé.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Diplôme visé",
              "**Étudiants concernés** : Bac+2 validé",
              "**Conditions d'admission** : Moyenne ≥ 12/20 • Entretien • Anglais B2 (TOEIC / TOEFL / IELTS selon le programme)",
              "**Campus** : La Rochelle • Paris",
              "**Langue** : Français / Anglais"
            ]
          }
        ]
      },
      {
        nom: "Programme Grande École",
        duree: "2 ans",
        details: "Programme Grande École • Diplôme visé • Grade de Master. Accès après une Licence EBS.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Programme Grande École • Diplôme visé • Grade de Master",
              "**Spécialisations** : Management • Marketing • Finance • Digital • Supply Chain • Entrepreneuriat",
              "**Étudiants concernés** : Licence EBS",
              "**Conditions d'admission** : Moyenne ≥ 12/20 • Entretien • Français B2 ou Anglais B2",
              "**Campus** : La Rochelle • Tours • Paris",
              "**Langue** : Français / Anglais"
            ]
          }
        ]
      },
      {
        nom: "Master of Science (MSc)",
        duree: "1 an",
        details: "Label MSc (CGE) ou Titre RNCP niveau 7 selon le programme. Accès après une Licence EBS.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Label MSc (CGE) ou Titre RNCP niveau 7 selon le programme",
              "**Spécialisations** : Marketing • Finance • Data • Supply Chain • Luxury • Sustainable Management",
              "**Étudiants concernés** : Licence EBS",
              "**Conditions d'admission** : Moyenne ≥ 12/20 • Entretien • Anglais B2/C1",
              "**Campus** : Selon le MSc",
              "**Langue** : Français / Anglais"
            ]
          }
        ]
      }
    ],
    eligibilite: "Validation du niveau d'études requis à ESPIMA Business School.\nMoyenne générale minimale de 12/20.\nRecommandation officielle d'ESPIMA Business School.\nDossier complet (CV, lettre de motivation, relevés de notes, diplôme, passeport…).\nEntretien d'admission organisé par Excelia.\nNiveau Français B2 pour les formations en français.\nNiveau TOEIC, TOEFL, IELTS ou équivalent pour les formations dispensées en anglais.",
    avantages: [
      "Grande École française reconnue par l'État.",
      "Membre de la Conférence des Grandes Écoles (CGE).",
      "Triple accréditation internationale : AACSB • EQUIS • AMBA.",
      "Programme Grande École conférant le Grade de Master.",
      "Diplômes visés par l'État et formations reconnues en France et à l'international.",
      "Plusieurs campus en France et un environnement d'études international.",
      "Accompagnement des étudiants internationaux tout au long de leur parcours.",
    ],
    debouches: [],
    keyStats: [
      { label: "Campus", value: "La Rochelle • Tours • Orléans • Paris" },
      { label: "Accréditations internationales", value: "AACSB • EQUIS • AMBA (Triple Couronne)" },
      { label: "Conférence des Grandes Écoles", value: "Oui" },
      { label: "Programme Grande École", value: "Diplôme visé conférant le Grade de Master" },
      { label: "Domaines de formation", value: "Management • Marketing • Finance • Digital • Supply Chain • Communication • Tourisme • Entrepreneuriat • Développement durable" },
      { label: "Langues d'enseignement", value: "Français / Anglais" },
      { label: "Partenariat avec ESPIMA", value: "Poursuite d'études après Bac+2 et après Licence" },
    ],
    accreditations: [
      { label: "AACSB", description: "Accréditation internationale garantissant l'excellence académique." },
      { label: "EQUIS", description: "Accréditation européenne délivrée par l'EFMD." },
      { label: "AMBA", description: "Accréditation internationale des programmes de management." },
      { label: "Triple Couronne", description: "Excelia fait partie de moins de 1 % des Business Schools dans le monde titulaires simultanément des accréditations AACSB, EQUIS et AMBA." },
      { label: "Conférence des Grandes Écoles (CGE)", description: "Membre de la Conférence des Grandes Écoles." },
      { label: "Programme Grande École", description: "Diplôme visé par l'État conférant le Grade de Master." },
      { label: "Bachelor", description: "Diplômes visés selon les programmes." },
      { label: "Master of Science (MSc)", description: "Label MSc de la CGE ou titre RNCP niveau 7 selon le programme." },
    ],
    pricing: [
      { label: "Bachelor Business (3e année)", amount: "9 700", period: "€ / an" },
      { label: "BBA International", amount: "12 400", period: "€ / an" },
      { label: "Programme Grande École", amount: "14 000 à 15 900", period: "€ / an" },
      { label: "Master of Science (MSc)", amount: "13 500", period: "€ / an" },
    ],
    extraSections: [
      {
        title: "Conditions financières du partenariat",
        body: "- **Réduction sur les frais de scolarité** : 10 % de réduction sur les frais de scolarité applicables aux étudiants internationaux (hors Union européenne), valable uniquement pendant la première année d'études.\n- **Paiement des frais** : Les frais de scolarité sont réglés directement auprès d'Excelia Business School.\n- **Autres frais** : La CVEC, l'assurance, le logement, le transport et les autres dépenses personnelles restent à la charge de l'étudiant."
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
    presentation: "Link University (Università degli Studi Link) est une université privée italienne reconnue par le Ministère italien de l'Université et de la Recherche (MUR) et accréditée par l'ANVUR, l'autorité nationale chargée de l'assurance qualité des établissements d'enseignement supérieur en Italie. Située à Rome, elle propose des formations en management, économie, finance, communication, marketing, digital, innovation, sport management et relations internationales. Les diplômes délivrés sont reconnus en Italie et dans l'ensemble de l'Espace européen de l'enseignement supérieur grâce au système ECTS.\nLe partenariat avec ESPIMA Business School permet de poursuivre des études à Link University après une ou deux années validées à ESPIMA, ainsi qu'en Master après l'obtention de la Licence ou la validation d'un M1, selon les conditions d'admission. Les étudiants bénéficient de la reconnaissance des crédits ECTS et des avantages prévus par le partenariat.",
    programmes: [
      {
        nom: "BA in Global Management – International Management and Finance",
        duree: "2 à 3 ans",
        details: "Bachelor’s Degree. 2ᵉ année après Bac+1 EBS • 3ᵉ année après Bac+2 EBS.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Diplôme préparé** : Bachelor’s Degree",
              "**Étudiants EBS concernés** : Après 1ʳᵉ année EBS ou Bac+2 EBS",
              "**Niveau d’intégration** : 2ᵉ année après Bac+1 • 3ᵉ année après Bac+2",
              "**Campus** : Rome",
              "**Langue** : Anglais"
            ]
          }
        ]
      },
      {
        nom: "BA in Innovative Technologies for Digital Communication",
        duree: "2 à 3 ans",
        details: "Bachelor’s Degree. 2ᵉ année après Bac+1 EBS • 3ᵉ année après Bac+2 EBS.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Diplôme préparé** : Bachelor’s Degree",
              "**Étudiants EBS concernés** : Après 1ʳᵉ année EBS ou Bac+2 EBS",
              "**Niveau d’intégration** : 2ᵉ année après Bac+1 • 3ᵉ année après Bac+2",
              "**Campus** : Rome",
              "**Langue** : Anglais"
            ]
          }
        ]
      },
      {
        nom: "MA in Economics of Innovation and Sustainable Globalization",
        duree: "2 ans",
        details: "Master’s Degree. Titulaires d’une Licence EBS ou étudiants ayant validé un M1.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Diplôme préparé** : Master’s Degree",
              "**Étudiants EBS concernés** : Titulaires d’une Licence EBS ou étudiants ayant validé un M1",
              "**Niveau d’intégration** : Admission en Master, selon le niveau académique et les conditions d’admission",
              "**Campus** : Rome",
              "**Langue** : Anglais"
            ]
          }
        ]
      },
      {
        nom: "MA in Advanced Global Management",
        duree: "2 ans",
        details: "Master’s Degree. Titulaires d’une Licence EBS ou étudiants ayant validé un M1.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Diplôme préparé** : Master’s Degree",
              "**Étudiants EBS concernés** : Titulaires d’une Licence EBS ou étudiants ayant validé un M1",
              "**Niveau d’intégration** : Admission en Master, selon le niveau académique et les conditions d’admission",
              "**Campus** : Rome",
              "**Langue** : Anglais"
            ]
          }
        ]
      },
      {
        nom: "MA in Technologies and Languages of Communications",
        duree: "2 ans",
        details: "Master’s Degree. Titulaires d’une Licence EBS ou étudiants ayant validé un M1.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Diplôme préparé** : Master’s Degree",
              "**Étudiants EBS concernés** : Titulaires d’une Licence EBS ou étudiants ayant validé un M1",
              "**Niveau d’intégration** : Admission en Master, selon le niveau académique et les conditions d’admission",
              "**Campus** : Rome",
              "**Langue** : Anglais"
            ]
          }
        ]
      }
    ],
    eligibilite: "• Validation des études effectuées à ESPIMA Business School ou obtention de la Licence, selon le niveau d’entrée souhaité. \n• Validation des crédits ECTS et étude du parcours académique. \n• Présélection des candidats par ESPIMA Business School, puis admission selon les conditions de Link University. \n• Justification du niveau linguistique requis et, si nécessaire, préparation académique ou linguistique complémentaire. \n• Inscription administrative et paiement des frais de scolarité directement auprès de Link University. \n• Accompagnement dans les démarches de visa et la recherche de logement. \n• Accès aux bibliothèques, plateformes numériques, laboratoires et services universitaires de Link University. \n• Les frais de transport, logement, restauration, assurance et dépenses personnelles restent à la charge de l’étudiant.",
    avantages: [
      "✓ Université italienne reconnue par le MUR.",
      "✓ Accréditation nationale ANVUR.",
      "✓ Diplômes reconnus dans toute l'Europe (système ECTS).",
      "✓ Campus situé au cœur de Rome.",
      "✓ Enseignement en italien ou en anglais.",
      "✓ Passerelles Bac+1/Bac+2 et poursuite en Master après Licence ou M1.",
      "✓ Réduction de 15% à 20 % sur les frais de scolarité.",
      "✓ Accompagnement personnalisé jusqu'à l'installation en Italie."
    ],
    debouches: [],
    keyStats: [
      { label: "Nom", value: "Link University (Università degli Studi Link)" },
      { label: "Type d'établissement", value: "Université privée italienne reconnue" },
      { label: "Pays", value: "Italie" },
      { label: "Ville", value: "Rome" },
      { label: "Reconnaissance", value: "Ministère italien de l'Université et de la Recherche (MUR)" },
      { label: "Assurance qualité", value: "ANVUR" },
      { label: "Système européen", value: "ECTS" },
      { label: "Diplômes", value: "Laurea (Bachelor) • Laurea Magistrale (Master)" },
      { label: "Langues d'enseignement", value: "Italien • Anglais" },
      { label: "Partenariat avec ESPIMA", value: "Passerelles après Bac+1 et Bac+2 • Poursuite en Master après Licence ou M1" }
    ],
    pricing: [
      { label: "BA in Global Management", amount: "Tarif officiel", period: "" },
      { label: "BA in Innovative Technologies", amount: "Tarif officiel", period: "" },
      { label: "MA in Economics of Innovation", amount: "Tarif officiel", period: "" },
      { label: "MA in Advanced Global Management", amount: "Tarif officiel", period: "" },
      { label: "MA in Technologies and Languages", amount: "Tarif officiel", period: "" }
    ],
    extraSections: [
      {
        title: "Conditions financières du partenariat",
        body: "- **Réduction sur les frais de scolarité** : De 15% à 20 % sur le tarif officiel des programmes.\n- **Paiement** : Directement auprès de Link University.\n- **Autres frais** : Visa, assurance, logement, transport et dépenses personnelles à la charge de l'étudiant.\n\nEn cas de refus de visa : possibilité de reporter l’admission, de poursuivre les études à ESPIMA ou de bénéficier du remboursement des sommes versées, conformément aux dispositions prévues par la convention."
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
    presentation: "SUP'DE COM est une École Supérieure française spécialisée dans les métiers de la communication. Elle forme des professionnels capables de concevoir, piloter et évaluer des stratégies de communication adaptées aux marques, aux organisations et aux nouveaux usages numériques.\nSa pédagogie professionnalisante repose sur les projets, les mises en situation, la créativité, le digital, l'événementiel et la proximité avec les entreprises. Les formations sont proposées en initial et/ou en alternance selon le programme et le campus.\nSUP'DE COM fait partie du réseau d'écoles de FIGS Education, qui réunit plusieurs établissements français d'enseignement supérieur spécialisés et accompagne notamment les étudiants internationaux dans leurs projets d'études en France.\nLe partenariat entre ESPIMA Business School, FIGS Education et SUP'DE COM permet notamment aux étudiants EBS de poursuivre leurs études en France après Bac+2 ou après l'obtention de leur Licence, selon les passerelles et conditions prévues par le partenariat.",
    programmes: [
      {
        nom: "Bachelor – Chargé de Communication",
        duree: "1 an",
        details: "Bac+3 • Titre RNCP 6. Étudiants EBS ayant validé Bac+2.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+3 • Titre RNCP 6",
              "**Étudiants EBS concernés** : Étudiants EBS ayant validé Bac+2, sous réserve de la compatibilité du parcours",
              "**Campus** : Plusieurs campus SUP'DE COM",
              "**Langue** : Français"
            ]
          }
        ]
      },
      {
        nom: "Bachelor – Chargé de Marketing et Communication Digitale",
        duree: "1 an",
        details: "Bac+3 • Titre RNCP 6. Étudiants EBS ayant validé Bac+2.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+3 • Titre RNCP 6",
              "**Étudiants EBS concernés** : Étudiants EBS ayant validé Bac+2 – admission en 3e année selon les conditions du programme",
              "**Campus** : Plusieurs campus SUP'DE COM",
              "**Langue** : Français"
            ]
          }
        ]
      },
      {
        nom: "Parcours : “Manager de la stratégie marketing / communication”",
        duree: "2 ans",
        details: "Bac+5 • Titre RNCP 7. Titulaires de la Licence EBS Marketing ou Management.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bac+5 • Titre RNCP 7",
              "**Étudiants EBS concernés** : Titulaires de la Licence EBS Marketing ou Management",
              "**Campus** : Plusieurs campus SUP'DE COM",
              "**Langue** : Français"
            ]
          }
        ]
      }
    ],
    eligibilite: "du niveau académique validé à ESPIMA Business School ;\ndes diplômes et relevés de notes ;\nde la cohérence entre le parcours suivi à EBS et le programme demandé ;\ndu curriculum vitae et de la lettre de motivation ;\nde l’examen et/ou de l’entretien d’admission lorsque requis par SUP'DE COM ;\ndes conditions particulières applicables au campus et au programme choisis.\n\nAprès un Master 1 EBS : une admission en 2e année de certains programmes Bac+5 de SUP'DE COM peut être envisagée, sous réserve de la compatibilité du parcours, de la validation des acquis académiques et de la décision finale d’admission de SUP'DE COM.",
    avantages: [
      "École spécialisée dans les métiers de la communication, avec une expertise couvrant la communication globale, le digital, la création, l'événementiel et la stratégie de marque.",
      "Formations professionnalisantes du Bac+3 au Bac+5, avec des titres enregistrés au RNCP selon les programmes.",
      "Pédagogie concrète fondée sur les projets, la créativité et les mises en situation professionnelles.",
      "Formation aux nouveaux enjeux de la communication : digital, réseaux sociaux, data, intelligence artificielle et communication omnicanale.",
      "Important réseau de campus en France et proximité avec les entreprises.",
      "Possibilité pour les étudiants EBS de poursuivre leurs études après Bac+2 ou après la Licence Marketing, selon le programme.",
      "12 % de réduction sur les frais de scolarité pour les étudiants EBS.",
      "Accompagnement personnalisé dans les démarches Campus France et visa."
    ],
    debouches: [],
    keyStats: [
      { label: "Nom de l’établissement", value: "SUP'DE COM" },
      { label: "Type d’établissement", value: "École française spécialisée dans les métiers de la communication" },
      { label: "Réseau de campus", value: "Réseau de campus en France, selon les programmes et les niveaux d’intégration" },
      { label: "Domaines de formation", value: "Communication • Marketing digital • Stratégie de marque • Réseaux sociaux • Événementiel • Publicité • Création • Communication corporate" },
      { label: "Niveaux de formation", value: "Bac+3 • Bac+5" },
      { label: "Certifications", value: "Titres et certifications professionnelles enregistrés au RNCP, notamment niveaux 6 et 7 selon les programmes" },
      { label: "Pédagogie", value: "Projets • mises en situation • création • digital • professionnalisation • alternance selon les parcours" },
      { label: "Partenariat avec ESPIMA", value: "Poursuite d’études après Bac+2 et après Licence EBS, conformément au partenariat FIGS Education" }
    ],
    pricing: [
      { label: "Bachelor – Chargé de Communication", amount: "Tarif officiel", period: "" },
      { label: "Bachelor – Chargé de Marketing", amount: "Tarif officiel", period: "" },
      { label: "Manager de la stratégie marketing", amount: "Tarif officiel", period: "" }
    ],
    extraSections: [
      {
        title: "Conditions financières prévues par le partenariat",
        body: "- **Réduction** : 12 % sur les frais de scolarité\n- **Frais de candidature** : Exonération de 80 €\n- **1er acompte** : 3 000 € à l’admission\n- **2e acompte** : 3 000 € après obtention du visa\n- **Solde** : Avant le 30 novembre (Fall) ou le 30 avril (Spring)\n- **Refus de visa** : Remboursement du premier acompte conformément aux dispositions prévues par la convention"
      }
    ],
  },

  gutech: {
    slug: "gutech",
    name: "GUtech",
    country: "🇴🇲 Oman",
    countryCode: "OM",
    logo: "/images/partenaires-academiques/gutech.webp",
    type: "Université privée technologique",
    presentation: "Fondée en 2007, German University of Technology in Oman (GUtech) est une université privée technologique située à Halban, près de Muscat, dans le Sultanat d’Oman. L’anglais est la langue d’enseignement.\nGUtech entretient une collaboration académique étroite avec RWTH Aachen University en Allemagne. Son Department of Computer Science propose notamment des programmes en Computer Science, Artificial Intelligence et Cyber Security. GUtech bénéficie d’une accréditation institutionnelle de l’Oman Authority for Academic Accreditation and Quality Assurance of Education (OAAAQA), et ses programmes Bachelor sont accrédités par l’agence internationale ACQUIN.\nLe Memorandum of Understanding entre ESPIMA Business School et GUtech établit un cadre de coopération académique dans les domaines de l’informatique, de l’intelligence artificielle, de la cybersécurité, de la transformation digitale et des systèmes d’information. Il prévoit notamment des projets conjoints, des Summer Schools, des activités de mobilité, des échanges d’expertise et des préparations à des certifications internationales.",
    programmes: [
      {
        nom: "Bachelor of Science (BSc) Computer Science • Artificial Intelligence • Cyber Security",
        duree: "4 ans",
        details: "Bachelor • 240 ECTS • Accréditation ACQUIN.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Bachelor • 4 ans • 240 ECTS • Accréditation ACQUIN",
              "**Étudiants EBS concernés** : Étudiants EBS en Informatique",
              "**Campus** : Halban Oman",
              "**Langue** : Anglais"
            ]
          }
        ]
      },
      {
        nom: "Master of Science (MSc) in Computer Science Data Science • Technology Management",
        duree: "Master",
        details: "Master of Science • 120 ECTS.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Master of Science • 120 ECTS",
              "**Étudiants EBS concernés** : Titulaires d’une Licence EBS en Informatique",
              "**Campus** : Halban Oman",
              "**Langue** : Anglais"
            ]
          }
        ]
      }
    ],
    eligibilite: "Le partenariat EBS–GUtech permet d’envisager des poursuites d’études dans les programmes de GUtech correspondant au parcours académique de l’étudiant. L’admission et la reconnaissance des acquis sont étudiées au cas par cas par GUtech.",
    avantages: [
      "Université technologique internationale anglophone fondée en 2007 dans le Sultanat d’Oman.",
      "Collaboration académique étroite avec RWTH Aachen University en Allemagne.",
      "Programmes Bachelor accrédités internationalement par ACQUIN.",
      "Programmes en Computer Science, Artificial Intelligence et Cyber Security alignés sur des domaines technologiques à forte croissance.",
      "Master of Science in Computer Science de 120 ECTS avec spécialisations Data Science et Technology Management.",
      "Possibilités de Summer Schools, projets conjoints, bootcamps, workshops et mobilité académique dans le cadre du partenariat EBS – GUtech.",
      "Possibilité de tarifs préférentiels pour les étudiants EBS, selon les conditions en vigueur de GUtech."
    ],
    debouches: [],
    keyStats: [
      { label: "Nom", value: "German University of Technology in Oman (GUtech)" },
      { label: "Type", value: "Université privée technologique" },
      { label: "Année de création", value: "2007" },
      { label: "Localisation", value: "Halban, près de Muscat – Sultanat d’Oman" },
      { label: "Langue d’enseignement", value: "Anglais" },
      { label: "Collaboration académique", value: "RWTH Aachen University – Allemagne" },
      { label: "Domaines concernés", value: "Computer Science • Artificial Intelligence • Cyber Security • Digital Transformation • Information Systems • Cloud Computing • DevOps" },
      { label: "Programmes en informatique", value: "BSc Computer Science • BSc Artificial Intelligence • BSc Cyber Security • MSc Computer Science • PhD Computer Science" },
      { label: "Accréditations", value: "Accréditation institutionnelle nationale (OAAAQA – Oman) • Programmes Bachelor accrédités par ACQUIN • Programmes licenciés par le Ministry of Education, Research and Innovation d’Oman" },
      { label: "Partenariat avec ESPIMA", value: "Coopération académique • mobilité • projets conjoints • Summer Schools • certifications • activités pédagogiques" }
    ],
    pricing: [
      { label: "Bachelor of Science (BSc)", amount: "Tarif GUtech", period: "" },
      { label: "Master of Science (MSc)", amount: "Tarif GUtech", period: "" },
    ],
    extraSections: [
      {
        title: "Coopération académique, projets et mobilité",
        body: "Le partenariat EBS - GUtech permet de développer, après accord des deux établissements, différentes activités académiques et internationales :\n- stages, projets appliqués, ateliers techniques et visites académiques ou professionnelles ;\n- conférences, séminaires, workshops et Summer Schools ;\n- mobilité d’enseignants, d’experts et échanges étudiants de courte durée ;\n- recherche appliquée, supervision de projets et développement de modules pédagogiques ;\n- préparation à des certifications internationales : AWS, Azure, Google Cloud, Cisco, Meta,...\n\nLes principaux domaines de coopération sont : Software Engineering • Artificial Intelligence • Cyber Security • Digital Transformation • Information Systems • Cloud Computing • DevOps."
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
    presentation: "RED-SUP est un établissement français d’enseignement supérieur privé spécialisé dans l’informatique et la cybersécurité. Ses formations couvrent notamment les réseaux, la sécurité informatique et la cybersécurité, avec des cursus de niveau Bac+3 et Bac+5.\nSa pédagogie est orientée vers la pratique, les projets appliqués et la professionnalisation. Dans un contexte marqué par le développement de l’intelligence artificielle et l’augmentation des enjeux de cybersécurité, RED-SUP forme des profils capables d’évoluer dans les métiers techniques de l’informatique et de la sécurité numérique.\nLe partenariat entre ESPIMA Business School et RED-SUP permet aux titulaires d’une Licence EBS en Informatique de poursuivre leurs études en France dans une formation Bac+5 spécialisée en cybersécurité. La convention prévoit également des actions de coopération pédagogique, de mobilité académique et de rapprochement avec l’environnement professionnel.",
    programmes: [
      {
        nom: "Mastère Européen – Expert IT en Cybersécurité",
        duree: "2 ans",
        details: "Titre RNCP niveau 7. Titulaires d’une Licence EBS : Génie Logiciel & Systèmes d’Information.",
        richExpanded: [
          {
            type: "bullets",
            items: [
              "**Reconnaissance** : Titre RNCP niveau 7, conformément aux termes de la convention",
              "**Étudiants EBS concernés** : Titulaires d’une Licence EBS : Génie Logiciel & Systèmes d’Information",
              "**Campus** : Paris France",
              "**Langue** : Français"
            ]
          }
        ]
      }
    ],
    eligibilite: "L’admission est prononcée par RED-SUP après validation du niveau académique par ESPIMA et étude du dossier de candidature.\n• être titulaire d’un diplôme de Licence ou équivalent ;\n• avoir suivi une spécialité compatible : informatique, génie logiciel, systèmes d’information, réseaux ou discipline connexe ;\n• faire valider le diplôme et les prérequis académiques par ESPIMA ;\n• soumettre le dossier de candidature à RED-SUP ;\n• obtenir une décision favorable d’admission de RED-SUP.",
    avantages: [
      "Établissement supérieur français spécialisé dans l’informatique et la cybersécurité.",
      "Formation Bac+5 orientée vers l’expertise IT, la sécurité des systèmes et la cybersécurité.",
      "Mastère Européen Expert IT en Cybersécurité, avec titre RNCP niveau 7 selon les termes de la convention.",
      "Pédagogie professionnalisante associant enseignements, projets appliqués et expérience professionnelle.",
      "Possibilité de stages ou d’alternance selon les modalités en vigueur.",
      "Passerelle dédiée aux titulaires d’une Licence EBS dans une spécialité informatique compatible.",
      "15 % de réduction sur les frais de scolarité, selon les conditions et modalités définies par RED-SUP.",
      "Accompagnement académique par ESPIMA et délivrance par RED-SUP des documents nécessaires aux démarches administratives, notamment pour le visa étudiant.",
      "Accès à un environnement professionnel lié aux formations."
    ],
    debouches: [],
    keyStats: [
      { label: "Nom de l’établissement", value: "RED-SUP" },
      { label: "Type d’établissement", value: "Établissement d’enseignement supérieur privé spécialisé en informatique et cybersécurité" },
      { label: "Pays", value: "France" },
      { label: "Adresse", value: "98 boulevard Victor Hugo, 92110 Clichy, France" },
      { label: "Domaines", value: "Informatique • Réseaux • Sécurité informatique • Cybersécurité" },
      { label: "Niveaux", value: "Bac+3 • Bac+5" },
      { label: "Programme Bac+5 prévu par la convention", value: "Mastère Européen Expert IT en Cybersécurité • Titre RNCP niveau 7, selon les termes de la convention" },
      { label: "Modalités pédagogiques", value: "Présentiel • projets appliqués • stages ou alternance selon les modalités en vigueur" },
      { label: "Partenariat avec ESPIMA", value: "Poursuite d’études en Bac+5 après une Licence en informatique à EBS" }
    ],
    pricing: [
      { label: "Mastère Européen", amount: "Tarif officiel RED-SUP", period: "" },
    ],
    extraSections: [
      {
        title: "Conditions financières et accompagnement",
        body: "- **Réduction** : 15 % sur les frais de scolarité selon les conditions et modalités définies par RED-SUP\n- **Documents administratifs** : RED-SUP délivre aux étudiants admis les attestations et documents académiques requis, notamment pour le visa\n- **Accompagnement ESPIMA** : Vérification des prérequis et accompagnement dans la constitution et le suivi du dossier\n- **Stages / activités pratiques** : Possibilité de stages, projets appliqués et ateliers ; chaque stage fait l’objet d’une convention tripartite distincte"
      }
    ],
  },
} satisfies Record<AcademicPartnerSlug, PartnerData>;

export const partenaires: Readonly<Record<string, PartnerData>> = canonicalPartenaires;
