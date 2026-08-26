/* ── Shared Programme Data ──
   Single source of truth for all programme information.
   Imported by /programmes (listing) and /programmes/[slug] (detail). */

export interface Programme {
  slug: string;
  title: string;
  degree: 'Licence' | 'Master';
  duration: string;
  level: string;
  certs: number;
  price: string;
  international: string[];
  description: string;
  careers: string[];
  highlight: string;
  curriculum: { year: string; title: string; modules: string[] }[];
  certificationDetails: { name: string; provider: string }[];
  faq: { q: string; a: string }[];
  /* P1 enrichment — decision-complete fields */
  teachingFormat: string;
  tools: string[];
  assessmentModel: string;
  sampleProjects: string[];
  admissionSelectivity: string;
  outcomes: { employmentRate: string; topEmployers: string[]; avgSalary: string };
}

/** Programme banner images */
export const programmeImages: Record<string, string> = {
  'licence-informatique-genie-logiciel': '/images/programmes/banner-licence-informatique.jpg',
  'licence-management': '/images/programmes/licence-management.jpg',
  'licence-marketing': '/images/programmes/licence-marketing.jpg',
  'licence-finance': '/images/programmes/licence-finance.jpg',
  'master-marketing-digital-ia': '/images/programmes/banner-master-marketing.jpg',
  'master-management-projets': '/images/programmes/banner-master-projets.jpg',
  'master-ingenierie-financiere': '/images/programmes/banner-master-finance.jpg',
  'master-transformation-digitale-crm': '/images/programmes/banner-master-crm.jpg',
};

export const partnerFlag: Record<string, string> = {
  'UQAT': 'CA',
  'EM Normandie': 'FR',
  'Collège de Paris': 'FR',
  'Keyce Academy': 'FR',
};

export const flags: Record<string, { svg: string; label: string }> = {
  TN: {
    label: 'Tunisie',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="w-5 h-3.5 shrink-0"><path fill="#e70013" d="M0 0h640v480H0z"/><circle cx="320" cy="240" r="120" fill="#fff"/><circle cx="340" cy="240" r="96" fill="#e70013"/><path fill="#e70013" d="m289 181 31 95-81-59h100l-81 59z" transform="translate(26)"/></svg>`,
  },
  CA: {
    label: 'Canada',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="w-5 h-3.5 shrink-0"><path fill="#fff" d="M150.1 0h339.7v480H150z"/><path fill="#f00" d="M-19.7 0h169.8v480H-19.7zm509.5 0h169.8v480H489.9zM201 232l-14-22 43 4-9-42 34 24 8-40 9 40 33-24-8 42 42-4-14 22 33 13-46 17 2 47-27-34-31 33 2-46-46-17z"/></svg>`,
  },
  FR: {
    label: 'France',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="w-5 h-3.5 shrink-0"><path fill="#002654" d="M0 0h213.3v480H0z"/><path fill="#fff" d="M213.3 0h213.4v480H213.3z"/><path fill="#ce1126" d="M426.7 0H640v480H426.7z"/></svg>`,
  },
};

export const licences: Programme[] = [
  {
    slug: 'licence-informatique-genie-logiciel',
    title: 'Informatique Génie Logiciel',
    degree: 'Licence',
    duration: '3 ans',
    level: 'Bac',
    certs: 14,
    price: '6 000',
    international: ['Keyce Academy'],
    description: 'Développement, bases de données, réseaux et IA. Conforme LMD, avec stages obligatoires et certifications intégrées.',
    careers: ['Développeur web', 'Analyste programmeur', 'Admin réseaux', 'Admin BDD'],
    highlight: 'Le seul cursus IT en Tunisie avec 14 certifications incluses.',
    curriculum: [
      { year: 'L1', title: 'Fondamentaux', modules: ['Algorithmique & Programmation', 'Mathématiques pour l\'informatique', 'Architecture des ordinateurs', 'Introduction aux réseaux', 'Anglais technique', 'Communication professionnelle'] },
      { year: 'L2', title: 'Approfondissement + Alternance', modules: ['Bases de données relationnelles', 'Développement web (HTML/CSS/JS)', 'Programmation orientée objet', 'Systèmes d\'exploitation', 'Réseaux et sécurité', 'Stage en entreprise (alternance)'] },
      { year: 'L3', title: 'Spécialisation + Projet', modules: ['Génie logiciel & UML', 'Intelligence artificielle', 'Cloud computing & DevOps', 'Développement mobile', 'Projet de fin d\'études', 'Certifications AWS, Cisco, IBM'] },
    ],
    certificationDetails: [
      { name: 'AWS Cloud Practitioner', provider: 'AWS' },
      { name: 'AWS Solutions Architect – Associate', provider: 'AWS' },
      { name: 'AWS Developer – Associate', provider: 'AWS' },
      { name: 'CCNA Introduction to Networks', provider: 'Cisco' },
      { name: 'Cisco CyberOps Associate', provider: 'Cisco' },
      { name: 'IBM Data Science', provider: 'IBM' },
      { name: 'IBM Cybersecurity Analyst', provider: 'IBM' },
      { name: 'Google IT Support', provider: 'Google' },
      { name: 'Google IT Automation with Python', provider: 'Google' },
      { name: 'Google Cloud Digital Leader', provider: 'Google' },
      { name: 'Oracle Database Foundations', provider: 'Oracle' },
      { name: 'Oracle Java Foundations', provider: 'Oracle' },
      { name: 'Microsoft Azure Fundamentals', provider: 'Microsoft' },
      { name: 'Microsoft 365 Fundamentals', provider: 'Microsoft' },
    ],
    faq: [
      { q: 'Faut-il avoir un bac scientifique ?', a: 'Non, la licence est ouverte à tous les bacheliers. Les fondamentaux sont enseignés dès la L1.' },
      { q: 'L\'alternance est-elle obligatoire ?', a: 'L\'alternance débute en L2 sur un rythme de 3 jours EBS / 2 jours entreprise. Elle fait partie intégrante du cursus.' },
      { q: 'Les certifications sont-elles vraiment gratuites ?', a: 'Oui, les 14 certifications sont incluses dans les frais de scolarité. Aucun frais supplémentaire.' },
    ],
    teachingFormat: 'Cours magistraux, TP sur machines, projets en équipe, hackathons internes. Alternance 3j EBS / 2j entreprise dès la L2.',
    tools: ['VS Code', 'GitHub', 'AWS Academy', 'Cisco NetAcad', 'Docker', 'MySQL', 'Figma', 'Jira'],
    assessmentModel: 'Contrôle continu (40%), projets & livrables (30%), examens de fin de semestre (30%). Soutenance PFE obligatoire en L3.',
    sampleProjects: ['Application web e-commerce complète (React + Node.js)', 'Infrastructure réseau simulée avec Cisco Packet Tracer', 'Dashboard BI avec données réelles d\'entreprise partenaire', 'Application mobile de gestion de tâches'],
    admissionSelectivity: 'Bac toutes sections. Admission sur dossier + entretien. ~85% des candidats admis.',
    outcomes: { employmentRate: '78% en 6 mois', topEmployers: ['Vermeg', 'Sofrecom', 'Telnet', 'Think IT', 'Linedata'], avgSalary: '1 400 – 2 200 DT/mois (premier emploi)' },
  },
  {
    slug: 'licence-management',
    title: 'Management',
    degree: 'Licence',
    duration: '3 ans',
    level: 'Bac',
    certs: 10,
    price: '8 200',
    international: ['UQAT', 'EM Normandie', 'Collège de Paris'],
    description: 'Gestion d\'entreprise, finance, marketing, RH et stratégie. Accès aux Masters partenaires au Canada et en France.',
    careers: ['Chef de projet', 'Consultant', 'Chargé de clientèle', 'Responsable RH'],
    highlight: 'Double diplôme possible avec l\'UQAT au Canada.',
    curriculum: [
      { year: 'L1', title: 'Fondamentaux du management', modules: ['Introduction au management', 'Comptabilité générale', 'Microéconomie', 'Droit des affaires', 'Anglais des affaires', 'Outils numériques'] },
      { year: 'L2', title: 'Gestion approfondie + Alternance', modules: ['Marketing fondamental', 'Gestion des ressources humaines', 'Finance d\'entreprise', 'Statistiques appliquées', 'Gestion de projet', 'Stage en entreprise (alternance)'] },
      { year: 'L3', title: 'Stratégie + Projet', modules: ['Management stratégique', 'Contrôle de gestion', 'Entrepreneuriat', 'Business English avancé', 'Projet de fin d\'études', 'Certifications Google, HubSpot, Salesforce'] },
    ],
    certificationDetails: [
      { name: 'Google Project Management', provider: 'Google' },
      { name: 'Google Digital Marketing & E-commerce', provider: 'Google' },
      { name: 'HubSpot Inbound Marketing', provider: 'HubSpot' },
      { name: 'HubSpot Sales Software', provider: 'HubSpot' },
      { name: 'HubSpot Email Marketing', provider: 'HubSpot' },
      { name: 'Salesforce Administrator', provider: 'Salesforce' },
      { name: 'Salesforce Business Analyst', provider: 'Salesforce' },
      { name: 'IBM Design Thinking', provider: 'IBM' },
      { name: 'IBM Enterprise Design Thinking Co-Creator', provider: 'IBM' },
      { name: 'Microsoft Power Platform Fundamentals', provider: 'Microsoft' },
    ],
    faq: [
      { q: 'Comment fonctionne le double diplôme avec l\'UQAT ?', a: 'Après ta Licence EBS, tu peux poursuivre en Master à l\'UQAT au Québec avec une reconnaissance complète de tes crédits.' },
      { q: 'Quels sont les partenaires internationaux ?', a: 'UQAT (Canada), EM Normandie (France) et Collège de Paris (France) sont nos partenaires principaux pour cette filière.' },
    ],
    teachingFormat: 'Cours, études de cas Harvard, simulations de gestion, projets d\'entreprise réels. Alternance 3j/2j dès la L2.',
    tools: ['Salesforce', 'Microsoft 365', 'Trello', 'Canva', 'SAP (initiation)', 'Google Workspace'],
    assessmentModel: 'Contrôle continu (35%), études de cas & présentations (35%), examens (30%). Soutenance PFE en L3.',
    sampleProjects: ['Business plan complet pour une startup tunisienne', 'Audit organisationnel d\'une PME partenaire', 'Étude de marché pour lancement de produit', 'Simulation de gestion d\'entreprise (jeu sérieux)'],
    admissionSelectivity: 'Bac toutes sections. Admission sur dossier + entretien. ~80% des candidats admis.',
    outcomes: { employmentRate: '70% en 6 mois', topEmployers: ['Biat', 'Amen Bank', 'Tunisair', 'Poulina Group', 'Groupe Loukil'], avgSalary: '1 200 – 1 800 DT/mois (premier emploi)' },
  },
  {
    slug: 'licence-marketing',
    title: 'Marketing',
    degree: 'Licence',
    duration: '3 ans',
    level: 'Bac',
    certs: 10,
    price: '8 200',
    international: ['UQAT', 'EM Normandie', 'Collège de Paris'],
    description: 'Stratégie marketing, communication digitale, études de marché et comportement du consommateur.',
    careers: ['Chargé de marketing', 'Community manager', 'Chef de produit', 'Analyste marché'],
    highlight: 'Certifications HubSpot et Google intégrées.',
    curriculum: [
      { year: 'L1', title: 'Bases du marketing', modules: ['Principes du marketing', 'Comportement du consommateur', 'Économie de marché', 'Communication écrite et orale', 'Anglais commercial', 'Introduction au digital'] },
      { year: 'L2', title: 'Marketing opérationnel + Alternance', modules: ['Marketing digital', 'Études de marché', 'Publicité et médias', 'Réseaux sociaux et e-commerce', 'Brand management', 'Stage en entreprise (alternance)'] },
      { year: 'L3', title: 'Stratégie + Projet', modules: ['Stratégie marketing avancée', 'Marketing international', 'Data marketing', 'Content marketing', 'Projet de fin d\'études', 'Certifications HubSpot, Google Ads'] },
    ],
    certificationDetails: [
      { name: 'Google Ads Search', provider: 'Google' },
      { name: 'Google Ads Display', provider: 'Google' },
      { name: 'Google Analytics', provider: 'Google' },
      { name: 'Google Digital Marketing & E-commerce', provider: 'Google' },
      { name: 'HubSpot Content Marketing', provider: 'HubSpot' },
      { name: 'HubSpot Social Media Marketing', provider: 'HubSpot' },
      { name: 'HubSpot Email Marketing', provider: 'HubSpot' },
      { name: 'HubSpot Inbound Marketing', provider: 'HubSpot' },
      { name: 'HubSpot SEO', provider: 'HubSpot' },
      { name: 'Salesforce Marketing Cloud Email Specialist', provider: 'Salesforce' },
    ],
    faq: [
      { q: 'Le cursus est-il adapté au marketing digital ?', a: 'Oui, le programme intègre le marketing digital dès la L2 avec des certifications Google et HubSpot.' },
      { q: 'Peut-on poursuivre en Master ?', a: 'Oui, le Master Marketing Digital & IA est la suite naturelle. Des passerelles internationales sont aussi possibles.' },
    ],
    teachingFormat: 'Cours, workshops créatifs, campagnes réelles sur réseaux sociaux, études de cas marques. Alternance 3j/2j dès la L2.',
    tools: ['Google Ads', 'HubSpot CRM', 'Canva', 'Hootsuite', 'Google Analytics', 'Mailchimp', 'WordPress'],
    assessmentModel: 'Contrôle continu (30%), projets créatifs & campagnes (40%), examens (30%). Soutenance PFE en L3.',
    sampleProjects: ['Campagne social media complète pour une marque locale', 'Stratégie de lancement digital pour un e-commerce', 'Audit SEO/SEA d\'un site réel avec recommandations', 'Création d\'une identité de marque de A à Z'],
    admissionSelectivity: 'Bac toutes sections. Admission sur dossier + entretien. ~80% des candidats admis.',
    outcomes: { employmentRate: '72% en 6 mois', topEmployers: ['Orange Tunisie', 'Jumia', 'MG Tunisie', 'Carrefour Tunisie', 'Tunisie Telecom'], avgSalary: '1 100 – 1 700 DT/mois (premier emploi)' },
  },
  {
    slug: 'licence-finance',
    title: 'Finance',
    degree: 'Licence',
    duration: '3 ans',
    level: 'Bac',
    certs: 10,
    price: '8 200',
    international: ['UQAT', 'EM Normandie', 'Collège de Paris'],
    description: 'Comptabilité, marchés financiers et contrôle de gestion. Préparation aux Masters en ingénierie financière.',
    careers: ['Analyste financier', 'Contrôleur de gestion', 'Comptable', 'Auditeur'],
    highlight: 'Passerelle directe vers le Master Ingénierie Financière.',
    curriculum: [
      { year: 'L1', title: 'Fondamentaux financiers', modules: ['Comptabilité générale', 'Mathématiques financières', 'Macroéconomie', 'Droit commercial', 'Anglais financier', 'Excel & outils quantitatifs'] },
      { year: 'L2', title: 'Finance appliquée + Alternance', modules: ['Analyse financière', 'Finance de marché', 'Comptabilité analytique', 'Fiscalité', 'Gestion de trésorerie', 'Stage en entreprise (alternance)'] },
      { year: 'L3', title: 'Expertise + Projet', modules: ['Audit et contrôle de gestion', 'Finance internationale', 'Évaluation d\'entreprise', 'Risk management', 'Projet de fin d\'études', 'Certifications Oracle, Microsoft'] },
    ],
    certificationDetails: [
      { name: 'Oracle Financial Management', provider: 'Oracle' },
      { name: 'Oracle Cloud Infrastructure Foundations', provider: 'Oracle' },
      { name: 'Microsoft Excel Expert', provider: 'Microsoft' },
      { name: 'Microsoft Power BI Data Analyst', provider: 'Microsoft' },
      { name: 'Microsoft Azure Data Fundamentals', provider: 'Microsoft' },
      { name: 'IBM Data Analytics', provider: 'IBM' },
      { name: 'IBM Data Science Foundations', provider: 'IBM' },
      { name: 'Google Data Analytics', provider: 'Google' },
      { name: 'Google Advanced Data Analytics', provider: 'Google' },
      { name: 'Salesforce Tableau Desktop Specialist', provider: 'Salesforce' },
    ],
    faq: [
      { q: 'Quelle est la différence avec un cursus en comptabilité ?', a: 'La licence Finance couvre un spectre plus large : marchés financiers, analyse de risques, évaluation d\'entreprise, en plus de la comptabilité.' },
      { q: 'Peut-on passer des certifications CFA ?', a: 'Le cursus prépare aux fondamentaux du CFA. L\'examen lui-même est externe mais des sessions de préparation sont organisées.' },
    ],
    teachingFormat: 'Cours magistraux, simulations boursières, études de cas financiers réels, modélisation sur Excel. Alternance 3j/2j dès la L2.',
    tools: ['Microsoft Excel (avancé)', 'Oracle Financials', 'Bloomberg Terminal (initiation)', 'Power BI', 'SAP FI', 'Google Sheets'],
    assessmentModel: 'Contrôle continu (35%), modélisations & analyses (35%), examens (30%). Soutenance PFE en L3.',
    sampleProjects: ['Évaluation financière d\'une entreprise cotée à la BVMT', 'Modèle de prévision de trésorerie pour une PME', 'Analyse de risques d\'un portefeuille d\'investissement', 'Due diligence financière simulée'],
    admissionSelectivity: 'Bac toutes sections (scientifique ou économie recommandé). Admission sur dossier + entretien. ~75% des candidats admis.',
    outcomes: { employmentRate: '74% en 6 mois', topEmployers: ['Biat', 'Amen Bank', 'BH Bank', 'Deloitte Tunisie', 'Ernst & Young'], avgSalary: '1 300 – 2 000 DT/mois (premier emploi)' },
  },
];

export const masters: Programme[] = [
  {
    slug: 'master-marketing-digital-ia',
    title: 'Marketing Digital & IA',
    degree: 'Master',
    duration: '2 ans',
    level: 'Bac+3',
    certs: 6,
    price: '8 500',
    international: [],
    description: 'SEO, publicité digitale, data analytics et automatisation marketing par l\'IA.',
    careers: ['Responsable marketing digital', 'Growth hacker', 'Data analyst', 'Consultant SEO/SEA'],
    highlight: 'L\'IA appliquée au marketing : un positionnement unique en Tunisie.',
    curriculum: [
      { year: 'M1', title: 'Marketing digital avancé', modules: ['SEO & SEA avancés', 'Social media strategy', 'Marketing automation', 'UX/UI & conversion', 'Data analytics', 'Intelligence artificielle appliquée'] },
      { year: 'M2', title: 'IA & Stratégie', modules: ['Machine learning pour le marketing', 'Programmatic advertising', 'Growth hacking', 'Stratégie digitale globale', 'Mémoire professionnel', 'Certifications Google, HubSpot'] },
    ],
    certificationDetails: [
      { name: 'Google Ads', provider: 'Google' },
      { name: 'Google Analytics 4', provider: 'Google' },
      { name: 'Google Ads Display', provider: 'Google' },
      { name: 'HubSpot Marketing Software', provider: 'HubSpot' },
      { name: 'HubSpot Inbound', provider: 'HubSpot' },
      { name: 'HubSpot SEO', provider: 'HubSpot' },
    ],
    faq: [
      { q: 'Faut-il avoir une licence en marketing ?', a: 'Une licence en marketing, management ou communication est recommandée. D\'autres profils peuvent être acceptés sur dossier.' },
      { q: 'Quelle est la part d\'IA dans le programme ?', a: 'L\'IA est intégrée dans chaque module comme outil appliqué, avec un semestre dédié en M2.' },
    ],
    teachingFormat: 'Masterclasses, ateliers pratiques, projets clients réels, labs IA. Alternance 3j/2j tout au long du Master.',
    tools: ['Google Ads', 'SEMrush', 'HubSpot', 'ChatGPT/OpenAI API', 'Google Analytics 4', 'Tableau', 'Python (data)'],
    assessmentModel: 'Projets clients (40%), mémoire professionnel (30%), examens (30%). Soutenance de mémoire en M2.',
    sampleProjects: ['Stratégie d\'acquisition IA-driven pour un e-commerçant', 'Chatbot marketing avec intégration CRM', 'Audit programmatic advertising avec optimisation automatisée'],
    admissionSelectivity: 'Licence en marketing, management ou communication. Admission sur dossier + entretien. ~70% des candidats admis.',
    outcomes: { employmentRate: '80% en 6 mois', topEmployers: ['Orange', 'Sofrecom', 'Publicis Groupe', 'dentsu Tunisie', 'MG Tunisie'], avgSalary: '1 600 – 2 500 DT/mois (premier emploi)' },
  },
  {
    slug: 'master-management-projets',
    title: 'Management de Projets',
    degree: 'Master',
    duration: '2 ans',
    level: 'Bac+3',
    certs: 6,
    price: '8 500',
    international: [],
    description: 'Gestion agile et traditionnelle, leadership, risques et pilotage de la performance.',
    careers: ['Chef de projet', 'Scrum Master', 'Consultant organisation', 'PMO'],
    highlight: 'Orientation certification PMP — standard mondial.',
    curriculum: [
      { year: 'M1', title: 'Fondamentaux du management de projets', modules: ['Méthodologies de gestion de projets', 'Gestion agile (Scrum, Kanban)', 'Leadership & management d\'équipe', 'Gestion des risques', 'Budgétisation & planification', 'Outils de pilotage (MS Project, Jira)'] },
      { year: 'M2', title: 'Expertise & certification', modules: ['Programme & portfolio management', 'Conduite du changement', 'Gouvernance de projets', 'Préparation PMP/CAPM', 'Mémoire professionnel', 'Certifications Salesforce, Google'] },
    ],
    certificationDetails: [
      { name: 'Google Project Management', provider: 'Google' },
      { name: 'Google Digital Marketing & E-commerce', provider: 'Google' },
      { name: 'Salesforce Administrator', provider: 'Salesforce' },
      { name: 'Salesforce Business Analyst', provider: 'Salesforce' },
      { name: 'IBM Agile Explorer', provider: 'IBM' },
      { name: 'Microsoft Power Platform Fundamentals', provider: 'Microsoft' },
    ],
    faq: [
      { q: 'Le Master prépare-t-il au PMP ?', a: 'Oui, le cursus est aligné sur le référentiel PMI. Des sessions de préparation spécifiques sont incluses en M2.' },
      { q: 'Quels profils sont acceptés ?', a: 'Les titulaires d\'une licence en management, informatique, ou ingénierie sont bienvenus.' },
    ],
    teachingFormat: 'Cours, simulations agiles, certifications PMI, projets multi-équipes. Alternance 3j/2j tout au long du Master.',
    tools: ['MS Project', 'Jira', 'Confluence', 'Trello', 'Salesforce', 'Miro', 'Slack'],
    assessmentModel: 'Projets & livrables (40%), préparation certifications (30%), examens (30%). Soutenance de mémoire en M2.',
    sampleProjects: ['Pilotage d\'un projet digital de bout en bout (méthode agile)', 'Déploiement CRM pour une entreprise partenaire', 'Conduite du changement pour une transformation digitale'],
    admissionSelectivity: 'Licence en management, informatique ou ingénierie. Admission sur dossier + entretien. ~65% des candidats admis.',
    outcomes: { employmentRate: '82% en 6 mois', topEmployers: ['Vermeg', 'Telnet', 'Sofrecom', 'Capgemini', 'Atos'], avgSalary: '1 800 – 2 800 DT/mois (premier emploi)' },
  },
  {
    slug: 'master-ingenierie-financiere',
    title: 'Ingénierie Financière',
    degree: 'Master',
    duration: '2 ans',
    level: 'Bac+3',
    certs: 4,
    price: '8 500',
    international: [],
    description: 'Modélisation financière, analyse de risques, fusions-acquisitions et marchés de capitaux.',
    careers: ['Analyste M&A', 'Risk manager', 'Trésorier', 'Directeur financier'],
    highlight: 'Formation orientée finance d\'entreprise avancée et M&A.',
    curriculum: [
      { year: 'M1', title: 'Finance d\'entreprise avancée', modules: ['Modélisation financière', 'Marchés de capitaux', 'Corporate finance', 'Analyse de risques', 'Droit financier', 'Économétrie financière'] },
      { year: 'M2', title: 'Ingénierie & Stratégie', modules: ['Fusions & acquisitions', 'Private equity & venture capital', 'Gestion de portefeuille', 'FinTech & innovations financières', 'Mémoire professionnel', 'Certifications Oracle, Microsoft'] },
    ],
    certificationDetails: [
      { name: 'Oracle Financial Management', provider: 'Oracle' },
      { name: 'Microsoft Excel Expert', provider: 'Microsoft' },
      { name: 'IBM Data Analytics', provider: 'IBM' },
      { name: 'Google Advanced Data Analytics', provider: 'Google' },
    ],
    faq: [
      { q: 'Faut-il une licence en finance ?', a: 'Fortement recommandé. Les licenciés en économie ou mathématiques appliquées sont aussi éligibles.' },
      { q: 'Le diplôme est-il reconnu à l\'international ?', a: 'Le diplôme est reconnu par l\'État tunisien et par nos partenaires internationaux.' },
    ],
    teachingFormat: 'Cours avancés, modélisation financière intensive, études de cas M&A, simulations de marché. Alternance 3j/2j.',
    tools: ['Excel (VBA)', 'Bloomberg Terminal', 'Oracle Financials', 'Power BI', 'Python (quantitatif)', 'R'],
    assessmentModel: 'Modélisations & rapports (40%), mémoire professionnel (30%), examens (30%). Soutenance de mémoire en M2.',
    sampleProjects: ['Modélisation DCF complète d\'une opération M&A', 'Gestion de portefeuille virtuel sur 6 mois', 'Analyse de risques systémiques du secteur bancaire tunisien'],
    admissionSelectivity: 'Licence en finance, économie ou mathématiques appliquées. Admission sélective sur dossier + entretien. ~60% des candidats admis.',
    outcomes: { employmentRate: '76% en 6 mois', topEmployers: ['Biat', 'BH Bank', 'Deloitte', 'Ernst & Young', 'PwC Tunisie'], avgSalary: '1 800 – 3 000 DT/mois (premier emploi)' },
  },
  {
    slug: 'master-transformation-digitale-crm',
    title: 'Transformation Digitale & CRM',
    degree: 'Master',
    duration: '2 ans',
    level: 'Bac+3',
    certs: 8,
    price: '8 500',
    international: [],
    description: 'CRM Salesforce, ERP, conduite du changement et automatisation des processus métier.',
    careers: ['Consultant CRM', 'Chef de projet digital', 'Responsable transformation', 'Analyste SI'],
    highlight: '8 certifications Salesforce incluses — le maximum.',
    curriculum: [
      { year: 'M1', title: 'Systèmes d\'information & CRM', modules: ['Architecture des SI', 'CRM Salesforce (Admin & Dev)', 'ERP et solutions d\'entreprise', 'Conduite du changement', 'Data management', 'Processus métier & BPMN'] },
      { year: 'M2', title: 'Transformation & Expertise', modules: ['Salesforce avancé (Lightning, Apex)', 'Stratégie de transformation digitale', 'Automatisation des processus (RPA)', 'Cloud & SaaS management', 'Mémoire professionnel', 'Certifications Salesforce (x8)'] },
    ],
    certificationDetails: [
      { name: 'Salesforce Administrator', provider: 'Salesforce' },
      { name: 'Salesforce Platform Developer I', provider: 'Salesforce' },
      { name: 'Salesforce Sales Cloud', provider: 'Salesforce' },
      { name: 'Salesforce Service Cloud', provider: 'Salesforce' },
      { name: 'Salesforce Marketing Cloud', provider: 'Salesforce' },
      { name: 'Salesforce Experience Cloud Consultant', provider: 'Salesforce' },
      { name: 'Salesforce Platform App Builder', provider: 'Salesforce' },
      { name: 'Salesforce Data Cloud Consultant', provider: 'Salesforce' },
    ],
    faq: [
      { q: 'Pourquoi 8 certifications Salesforce ?', a: 'Salesforce est le CRM n°1 mondial. 8 certifications couvrent l\'écosystème complet : Admin, Dev, Sales, Service, Marketing Cloud.' },
      { q: 'Les certifications sont-elles reconnues par Salesforce ?', a: 'Oui, ce sont les certifications officielles Salesforce, vérifiables sur Trailhead.' },
    ],
    teachingFormat: 'Labs Salesforce, projets CRM réels, ateliers RPA, études de cas transformation digitale. Alternance 3j/2j.',
    tools: ['Salesforce (Admin, Dev, Lightning)', 'MuleSoft', 'Tableau CRM', 'UiPath (RPA)', 'Jira', 'Slack'],
    assessmentModel: 'Projets Salesforce & certifications (45%), mémoire professionnel (25%), examens (30%). Soutenance de mémoire en M2.',
    sampleProjects: ['Déploiement Salesforce CRM complet pour une entreprise partenaire', 'Automatisation d\'un processus métier avec UiPath', 'Migration d\'un SI legacy vers le cloud'],
    admissionSelectivity: 'Licence en management, informatique ou systèmes d\'information. Admission sur dossier + entretien. ~65% des candidats admis.',
    outcomes: { employmentRate: '85% en 6 mois', topEmployers: ['Salesforce EMEA', 'Berexia', 'Capgemini', 'CGI', 'Talan'], avgSalary: '2 000 – 3 200 DT/mois (premier emploi)' },
  },
];

export const allProgrammes: Programme[] = [...licences, ...masters];
