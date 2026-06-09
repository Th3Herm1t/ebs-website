export interface CertProviderData {
  slug: string;
  name: string;
  tagline: string;
  presentation: string;
  pourquoi: string;
  categories: { name: string; certs: { name: string; level?: string }[] }[];
}

export const providers: Record<string, CertProviderData> = {
  google: {
    slug: "google",
    name: "Google",
    tagline: "Disponibles gratuitement chez EBS — Reconnues mondialement par les recruteurs.",
    presentation: "Google propose via ses plateformes Google Career Certificates, Google Skillshop et Google Cloud Skills Boost un catalogue exhaustif de certifications gratuites et reconnues mondialement. Ces certifications sont activement recherchées par les recruteurs dans les domaines du marketing digital, de la data, du cloud, de la cybersécurité et de l'IA.",
    pourquoi: "Les certifications Google sont parmi les plus reconnues au monde par les équipes RH et les recruteurs. Un diplômé EBS certifié Google bénéficie d'un avantage compétitif immédiat sur le marché de l'emploi, en Tunisie comme à l'international.",
    categories: [
      {
        name: "▶ IA & Prompting",
        certs: [
          { name: "Google AI Essentials" },
          { name: "Google AI Professional Certificate" },
          { name: "Google Prompting Essentials" },
          { name: "AI-Powered Performance Ads Certification" },
        ],
      },
      {
        name: "▶ Carrière & Data",
        certs: [
          { name: "Google Project Management Certificate" },
          { name: "Google Data Analytics Certificate" },
          { name: "Google Business Intelligence Certificate" },
          { name: "Google Advanced Data Analytics Certificate" },
          { name: "Google IT Automation with Python Certificate" },
          { name: "Google UX Design Certificate" },
          { name: "Google Digital Marketing & E-commerce Certificate" },
          { name: "Google Cybersecurity Certificate" },
          { name: "Google Cloud Cybersecurity Certificate" },
        ],
      },
      {
        name: "▶ Google Ads (Skillshop)",
        certs: [
          { name: "Fundamentals of Digital Marketing" },
          { name: "Google Ads Search Certification" },
          { name: "Google Ads Display Certification" },
          { name: "Google Ads Apps Certification" },
          { name: "Google Ads Measurement Certification" },
          { name: "Google Ads Creative Certification" },
          { name: "AI-Powered Shopping Ads Certification" },
          { name: "Conversion Optimization Certification" },
          { name: "Grow Offline Sales Certification" },
        ],
      },
      {
        name: "▶ Analytics (Skillshop)",
        certs: [
          { name: "Google Analytics Certification (GA4)" },
          { name: "Get Started using Google Analytics" },
          { name: "Dive Deeper Into GA4 Data and Reports" },
          { name: "Use GA with Other Tools and Data Sources" },
          { name: "Manage GA Data and Learn to Read Reports" },
        ],
      },
      {
        name: "▶ Google Cloud",
        certs: [
          { name: "Google Cloud: Associate Data Practitioner" },
          { name: "Google Cloud: Professional Data Engineer" },
          { name: "Google Cloud: Professional Cloud Architect" },
          { name: "Google Career Launchpad (Cloud)" },
        ],
      },
      {
        name: "▶ Outils & Agile",
        certs: [
          { name: "Communiquer vos idées avec le storytelling" },
          { name: "Analysez les besoins des utilisateurs en ligne" },
          { name: "Google Agile Essentials" },
          { name: "Google People Management Essentials" },
          { name: "CS50's Computer Science for Business (Harvard)" },
        ],
      },
    ],
  },

  ibm: {
    slug: "ibm",
    name: "IBM / Cognitive Class / SkillsBuild",
    tagline: "Disponibles gratuitement chez EBS — 45+ certifications en IA, Data Science et Cloud.",
    presentation: "IBM propose via IBM Cognitive Class (cognitiveclass.ai), IBM SkillsBuild et IBM Training un catalogue de plus de 45 certifications gratuites dans les domaines de l'Intelligence Artificielle, du Machine Learning, du Deep Learning, de la Data Science, du DevOps, du Cloud Computing et bien plus. IBM est l'un des partenaires de certifications les plus complets disponibles pour nos étudiants.",
    pourquoi: "Les certifications IBM sont reconnues par les grandes entreprises tech et financières mondiales. IBM est un employeur mondial et ses certifications valident des compétences directement applicables en entreprise.",
    categories: [
      {
        name: "▶ Intelligence Artificielle & GenAI",
        certs: [
          { name: "Fondements de l'IA (IBM)" },
          { name: "IA Générative : Transformation des Entreprises" },
          { name: "Foundations and Applications of Generative AI" },
          { name: "Agentic AI in Practice" },
          { name: "Introduction à l'IA Agent" },
          { name: "Ingénierie des Prompts pour Tous" },
          { name: "Concepts d'IA" },
          { name: "watsonx Orchestrate : Automatisation IA" },
          { name: "watsonx Assistant : Assistants Virtuels" },
        ],
      },
      {
        name: "▶ Machine Learning & Deep Learning",
        certs: [
          { name: "Fondements de l'Apprentissage Automatique" },
          { name: "Apprentissage Automatique avec Python" },
          { name: "Deep Learning (IBM)" },
          { name: "TensorFlow avec GPU" },
          { name: "Classification avec PyTorch" },
          { name: "CNN avec PyTorch" },
          { name: "Deep Learning avec TensorFlow" },
        ],
      },
      {
        name: "▶ Data Science",
        certs: [
          { name: "Science des Données avec Python" },
          { name: "Science des Données Appliquée" },
          { name: "Analyse de Données avec Python" },
          { name: "Visualisation de Données avec Python" },
          { name: "Fondements de la Modélisation Prédictive" },
          { name: "Statistiques 101" },
        ],
      },
      {
        name: "▶ Big Data & Cloud",
        certs: [
          { name: "Fondements du Big Data" },
          { name: "Big Data IBM (Hadoop, Watson, Spark)" },
          { name: "Fondements de Spark" },
          { name: "Introduction au Cloud Computing" },
          { name: "SQL et Bases de Données Relationnelles 101" },
          { name: "Git et GitHub" },
        ],
      },
      {
        name: "▶ DevOps & Business",
        certs: [
          { name: "IBM DevOps et Ingénierie Logicielle Pro" },
          { name: "IBM SkillsBuild Business Analyst Certificate" },
          { name: "IBM Finance & Accounting Essentials Badge" },
        ],
      },
    ],
  },

  harvard: {
    slug: "harvard",
    name: "Harvard University",
    tagline: "Disponibles gratuitement chez EBS — Le programme CS50, référence mondiale.",
    presentation: "Harvard University propose via Harvard Online et son programme CS50 un ensemble de cours et certifications gratuites considérés comme les meilleurs de leur catégorie au niveau mondial. Le programme CS50 est enseigné à Harvard et au MIT et est suivi par des millions d'étudiants dans le monde.",
    pourquoi: "Une certification Harvard sur un CV est un signal fort, partout dans le monde. Pour nos étudiants, c'est la possibilité d'obtenir un credential de la meilleure université mondiale, gratuitement et pendant leurs études chez EBS.",
    categories: [
      {
        name: "▶ Série CS50 (Computer Science)",
        certs: [
          { name: "CS50: Introduction to Computer Science" },
          { name: "CS50's Introduction to Programming with Python" },
          { name: "CS50's Introduction to AI with Python" },
          { name: "CS50's Introduction to Cybersecurity" },
          { name: "CS50's Web Programming with Python and JavaScript" },
          { name: "CS50's Introduction to SQL" },
          { name: "CS50's Computer Science for Business Professionals" },
        ],
      },
      {
        name: "▶ Data Science Series",
        certs: [
          { name: "Introduction to Data Science with Python" },
          { name: "Data Science: Visualization" },
          { name: "Data Science: Probability" },
          { name: "Data Science: Inference and Modeling" },
          { name: "Data Science: Building Machine Learning Models" },
          { name: "Data Science: Capstone" },
        ],
      },
      {
        name: "▶ IA avancé",
        certs: [
          { name: "Machine Learning and AI with Python" },
          { name: "Applications of TinyML" },
          { name: "MLOps for Scaling TinyML" },
        ],
      },
    ],
  },

  cisco: {
    slug: "cisco",
    name: "Cisco NetAcad",
    tagline: "Disponibles gratuitement chez EBS — Réseaux, cybersécurité et programmation.",
    presentation: "Cisco Networking Academy (NetAcad) propose des cours et certifications gratuites mondialement reconnues dans les domaines des réseaux, de la cybersécurité, de la programmation et de l'entrepreneuriat.",
    pourquoi: "Cisco est le leader mondial des infrastructures réseau. Une certification Cisco NetAcad prépare directement aux certifications professionnelles reconnues (CCNA, CyberOps Associate) et est valorisée par tous les employeurs IT.",
    categories: [
      {
        name: "▶ Cybersécurité",
        certs: [
          { name: "Introduction to Cybersecurity" },
          { name: "Cybersecurity Essentials" },
          { name: "Ethical Hacker" },
          { name: "Endpoint Security" },
          { name: "Network Defense" },
          { name: "Cyber Threat Management" },
        ],
      },
      {
        name: "▶ IA & Data",
        certs: [
          { name: "Introduction to Modern AI" },
          { name: "AI Fundamentals with IBM SkillsBuild" },
          { name: "Introduction to Data Science" },
        ],
      },
      {
        name: "▶ Programmation",
        certs: [
          { name: "Python Essentials 1" },
          { name: "Python Essentials 2" },
          { name: "JavaScript Essentials 1" },
          { name: "HTML Essentials" },
          { name: "Linux Essentials" },
        ],
      },
    ],
  },

  bloomberg: {
    slug: "bloomberg",
    name: "Bloomberg",
    tagline: "Disponibles gratuitement chez EBS — L'outil N°1 de la finance mondiale.",
    presentation: "Bloomberg For Education propose quatre certifications officielles spécialement conçues pour les étudiants en finance et en gestion. Ces certifications utilisent les outils et données du terminal Bloomberg, l'outil de référence absolu dans l'industrie financière mondiale.",
    pourquoi: "Bloomberg est l'outil N°1 de la finance mondiale. 325 000+ terminaux dans les banques, fonds et institutions. Une certification Bloomberg est immédiatement reconnue par tous les recruteurs en finance, banque et gestion de patrimoine.",
    categories: [
      {
        name: "▶ Certifications Bloomberg For Education",
        certs: [
          { name: "Bloomberg Market Concepts Certificate (BMC)" },
          { name: "Bloomberg Finance Fundamentals Certificate" },
          { name: "Bloomberg Spreadsheet Analysis Certificate" },
          { name: "Bloomberg ESG Certificate" },
        ],
      },
    ],
  },

  fortinet: {
    slug: "fortinet",
    name: "Fortinet",
    tagline: "Disponibles gratuitement chez EBS — Leader mondial de la cybersécurité.",
    presentation: "Fortinet propose via son programme NSE Training Institute des certifications gratuites en cybersécurité, reconnues mondialement dans l'industrie de la sécurité informatique. Fortinet est le fournisseur N°1 mondial de solutions de sécurité réseau.",
    pourquoi: "Les certifications Fortinet sont parmi les plus valorisées dans la cybersécurité. Fortinet est présent dans 90+ pays et ses certifications sont reconnues par tous les employeurs spécialisés en sécurité.",
    categories: [
      {
        name: "▶ Parcours de certification NSE",
        certs: [
          { name: "FCF — Fortinet Certified Fundamentals (Cybersecurity)" },
          { name: "FCA — Fortinet Certified Associate (Cybersecurity)" },
          { name: "NSE 1 — The Threat Landscape" },
          { name: "NSE 2 — The Evolution of Cybersecurity" },
          { name: "NSE 3 — Fortinet Security Fabric" },
          { name: "NSE 4 — FortiGate Security (avancé)" },
          { name: "NSE 5–8 — Niveaux Expert" },
        ],
      },
    ],
  },

  "deeplearning-ai": {
    slug: "deeplearning-ai",
    name: "DeepLearning.AI",
    tagline: "Disponibles gratuitement chez EBS — La référence en IA par Andrew Ng.",
    presentation: "DeepLearning.AI est l'organisation fondée par Andrew Ng, l'un des pionniers mondiaux de l'IA. Ses spécialisations et certifications sont considérées comme les références absolues en Machine Learning et Deep Learning.",
    pourquoi: "Andrew Ng est co-fondateur de Google Brain et ancien VP chez Baidu. Ses certifications sont citées dans les offres d'emploi data science du monde entier.",
    categories: [
      {
        name: "▶ Machine Learning & Deep Learning",
        certs: [
          { name: "Machine Learning Specialization (3 cours)" },
          { name: "Deep Learning Specialization (5 cours)" },
          { name: "TensorFlow Developer Professional Certificate" },
          { name: "PyTorch for Deep Learning Professional Certificate" },
        ],
      },
      {
        name: "▶ NLP, Vision & IA Générative",
        certs: [
          { name: "Natural Language Processing Specialization" },
          { name: "GAN Specialization" },
          { name: "Generative AI for Software Development" },
        ],
      },
      {
        name: "▶ Data & Automation",
        certs: [
          { name: "Data Analytics Professional Certificate" },
          { name: "Data Engineering Specialization" },
          { name: "MLOps Specialization" },
        ],
      },
    ],
  },

  hubspot: {
    slug: "hubspot",
    name: "HubSpot Academy",
    tagline: "Disponibles gratuitement chez EBS — CRM, marketing et ventes.",
    presentation: "HubSpot Academy propose le catalogue de certifications marketing, CRM et ventes le plus complet et le plus reconnu au monde. Plus d'un million de professionnels sont certifiés HubSpot.",
    pourquoi: "HubSpot est le CRM leader du marché des PME mondiales. Une certification HubSpot sur un CV en marketing, vente ou CRM est une preuve immédiate de compétence opérationnelle reconnu par tous les recruteurs du secteur.",
    categories: [
      {
        name: "▶ CRM & Plateforme HubSpot",
        certs: [
          { name: "HubSpot CRM Software Certification" },
          { name: "HubSpot Marketing Hub Software" },
          { name: "HubSpot Sales Hub Software" },
          { name: "HubSpot Service Hub Software" },
        ],
      },
      {
        name: "▶ Marketing & Inbound",
        certs: [
          { name: "HubSpot Digital Marketing Certification" },
          { name: "HubSpot Inbound Marketing Certification" },
          { name: "HubSpot Content Marketing Certification" },
          { name: "HubSpot SEO Certification" },
          { name: "HubSpot Email Marketing Certification" },
          { name: "HubSpot Social Media Marketing" },
          { name: "HubSpot Digital Advertising Certification" },
        ],
      },
      {
        name: "▶ Sales & Revenue",
        certs: [
          { name: "HubSpot Inbound Sales Certification" },
          { name: "HubSpot Sales Management Certification" },
          { name: "HubSpot Revenue Operations" },
        ],
      },
      {
        name: "▶ IA & Innovation",
        certs: [
          { name: "HubSpot AI for Marketing, Sales & Service Bootcamp" },
        ],
      },
    ],
  },

  semrush: {
    slug: "semrush",
    name: "SEMrush Academy",
    tagline: "Disponibles gratuitement chez EBS — SEO, content marketing et analytics.",
    presentation: "SEMrush Academy propose des certifications gratuites en SEO, content marketing, publicité digitale et analytics. SEMrush est l'outil SEO et marketing de référence utilisé par 10 millions de professionnels dans le monde.",
    pourquoi: "SEMrush est l'outil SEO N°1 mondial. Une certification SEMrush est immédiatement crédible aux yeux des agences digitales, des équipes marketing in-house et des freelances.",
    categories: [
      {
        name: "▶ SEO & IA Search",
        certs: [
          { name: "SEO Essentials with Semrush (AI Optimization)" },
          { name: "Technical SEO and AI Search Essentials" },
          { name: "On-Page SEO (SEO & AI)" },
          { name: "Keyword Research Essentials" },
          { name: "Content-Led SEO with Brian Dean" },
        ],
      },
      {
        name: "▶ Content & IA Marketing",
        certs: [
          { name: "Content Marketing Course: SEO & AI Search" },
          { name: "Advanced Content Marketing with Brian Dean" },
          { name: "How to Become an AI-Powered Marketer" },
        ],
      },
      {
        name: "▶ Analytics & PPC",
        certs: [
          { name: "Fundamentals of Marketing Analytics" },
          { name: "Boost Conversions with PPC" },
        ],
      },
    ],
  },

  "autres-fournisseurs": {
    slug: "autres-fournisseurs",
    name: "PMI · ScrumStudy · Forage · LinkedIn · Databricks · Microsoft · n8n",
    tagline: "Disponibles gratuitement chez EBS — Gestion de projet, simulations pro et IA.",
    presentation: "EBS donne accès à des certifications de plusieurs autres fournisseurs de premier rang mondial : PMI (Project Management Institute), ScrumStudy, Forage (simulations professionnelles), LinkedIn Learning, Databricks, Microsoft et n8n Automation.",
    pourquoi: "Ces certifications couvrent des domaines spécifiques : gestion de projets (PMI, Scrum), expérience professionnelle réelle (Forage), marketing B2B (LinkedIn), IA et Data Engineering (Databricks), productivité IA (Microsoft) et automatisation (n8n).",
    categories: [
      {
        name: "▶ PMI — Project Management Institute",
        certs: [
          { name: "PMI Kickoff" },
          { name: "Disciplined Agile Essentials Course (PMI DA)" },
        ],
      },
      {
        name: "▶ ScrumStudy",
        certs: [
          { name: "Scrum Fundamentals Certified SFC™" },
          { name: "Scrum with AI Certified SAC™" },
          { name: "Lean Six Sigma White Belt Certification" },
          { name: "Project Management Essentials Certification" },
        ],
      },
      {
        name: "▶ Forage — Simulations Professionnelles",
        certs: [
          { name: "BCG : Strategy Consulting · Ventures" },
          { name: "Goldman Sachs : Operations · Risk · Internal Audit" },
          { name: "JP Morgan : Investment Banking · Quantitative Research" },
          { name: "Citi : IB · Markets Sales & Trading" },
          { name: "Mastercard : Cybersecurity · Advisors & Consulting" },
          { name: "PwC : Cyber Security · Management Consulting" },
          { name: "KPMG : Audit · Advisory" },
          { name: "EY : Technology Risk" },
        ],
      },
      {
        name: "▶ Databricks",
        certs: [
          { name: "Generative AI Fundamentals (Databricks)" },
          { name: "AI Agents in your Workflows (Databricks)" },
          { name: "AWS Platform Architect Badge" },
          { name: "Azure Platform Architect Badge" },
        ],
      },
      {
        name: "▶ Microsoft",
        certs: [
          { name: "Introduction à l'IA et aux agents génératifs" },
          { name: "Transformer votre entreprise avec l'IA" },
          { name: "Renforcez votre productivité avec les outils d'IA" },
          { name: "Découvrir l'IA pour les leaders en finance" },
        ],
      },
      {
        name: "▶ LinkedIn Learning",
        certs: [
          { name: "LinkedIn Advertising Fundamentals Certification" },
          { name: "LinkedIn Marketing Strategy Certification" },
          { name: "LinkedIn Content & Creative Design Certification" },
        ],
      },
      {
        name: "▶ n8n Automation",
        certs: [
          { name: "n8n Automation Level 1" },
          { name: "n8n Automation Level 2" },
        ],
      },
    ],
  },
};
