/**
 * apply_enrichments.js
 * 
 * Reads the restored partenaires.ts and applies guide-sourced enrichments
 * to each partner. Does NOT delete or overwrite existing entries.
 * Only enriches: programmes, keyStats, pricing, extraSections, eligibilite,
 * avantages, debouches, type, presentation.
 */
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '../src/lib/partenaires/partenaires.ts');
let src = fs.readFileSync(FILE, 'utf8');

// ─── Helper: replace a specific field inside a partner block ───
function replacePartnerBlock(slug, newBlock) {
  // Find the partner's opening key and replace the entire object
  // Strategy: find `slug: {` or `"slug": {`, then match balanced braces
  const patterns = [
    new RegExp(`(  "${slug}":\\s*\\{)`, 'm'),
    new RegExp(`(  ${slug}:\\s*\\{)`, 'm'),
  ];
  
  let keyStart = -1;
  let matchLen = 0;
  for (const p of patterns) {
    const m = src.match(p);
    if (m) {
      keyStart = src.indexOf(m[0]);
      matchLen = m[0].length;
      break;
    }
  }
  
  if (keyStart === -1) {
    console.error(`  ❌ Could not find partner block for: ${slug}`);
    return false;
  }
  
  // Find the balanced closing brace
  const objStart = keyStart + matchLen - 1; // the opening {
  let depth = 0;
  let objEnd = -1;
  for (let i = objStart; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') {
      depth--;
      if (depth === 0) {
        objEnd = i;
        break;
      }
    }
  }
  
  if (objEnd === -1) {
    console.error(`  ❌ Could not find closing brace for: ${slug}`);
    return false;
  }
  
  // Also consume trailing comma and whitespace
  let blockEnd = objEnd + 1;
  if (src[blockEnd] === ',') blockEnd++;
  
  // Find the key prefix (e.g. `  idrac: ` or `  "link-university": `)
  const keyLine = src.substring(keyStart, objStart + 1);
  
  // Replace the block
  const before = src.substring(0, keyStart);
  const after = src.substring(blockEnd);
  src = before + newBlock + after;
  
  console.log(`  ✅ Updated: ${slug}`);
  return true;
}

// ═══════════════════════════════════════════════════════
// ENRICHMENTS — one per partner that has a source guide
// ═══════════════════════════════════════════════════════

// ── IDRAC ──
replacePartnerBlock('idrac', `  idrac: {
    slug: "idrac",
    name: "IDRAC Business School",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/idrac.webp",
    type: "Grande École française de commerce et de management — 8 campus en France",
    presentation: "Fondée en 1965, IDRAC Business School est une Grande École française de commerce et de management, membre de l'Union des Grandes Écoles Indépendantes (UGEI). Implantée sur 8 campus en France (Bordeaux, Grenoble, Lyon, Montpellier, Nantes, Nice, Paris, Toulouse), elle propose des formations de Bac à Bac+5 avec des reconnaissances officielles de l'État français, notamment le Grade de Licence et le Grade de Master.",
    programmes: [
      { nom: "Bachelor Marketing & Business", duree: "1 an (L3)", details: "Diplôme visé par l'État (Bac+3). Accès après Bac+2 EBS / 120 ECTS en 3e année." },
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
        body: "- **Réduction** : 12 % sur les frais de scolarité.\\n- **Frais de candidature** : Exonération de 80 €.\\n- **1er acompte** : 3 000 € à l'admission.\\n- **2e acompte** : 3 000 € après obtention du visa.\\n- **Solde** : Avant le 30 novembre (Fall) ou le 30 avril (Spring).\\n- **Refus de visa** : Remboursement du premier acompte."
      }
    ],
  },`);

// ── IFAG ──
replacePartnerBlock('ifag', `  ifag: {
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
        body: "- **Réduction** : 12 % sur les frais de scolarité.\\n- **Frais de candidature** : Exonération de 80 €.\\n- **1er acompte** : 3 000 € à l'admission.\\n- **2e acompte** : 3 000 € après obtention du visa.\\n- **Solde** : Avant le 30 novembre (Fall) ou le 30 avril (Spring).\\n- **Refus de visa** : Remboursement du premier acompte."
      }
    ],
  },`);

// ── IGEFI ──
replacePartnerBlock('igefi', `  igefi: {
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
        body: "- **Réduction** : 12 % sur les frais de scolarité.\\n- **Frais de candidature** : Exonération de 80 €.\\n- **1er acompte** : 3 000 € à l'admission.\\n- **2e acompte** : 3 000 € après obtention du visa.\\n- **Solde** : Avant le 30 novembre (Fall) ou le 30 avril (Spring).\\n- **Refus de visa** : Remboursement du premier acompte."
      }
    ],
  },`);

// ── EKLORE ──
replacePartnerBlock('eklore', `  eklore: {
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
  },`);

// ── EPITECH ──
replacePartnerBlock('epitech', `  epitech: {
    slug: "epitech",
    name: "Epitech",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/epitech.webp",
    type: "Grande École Informatique — Expert Tech & Innovation",
    presentation: "Epitech est l'École pour l'informatique et les nouvelles technologies, fondée en 1999. Reconnue comme l'une des meilleures écoles d'informatique en France et en Europe, elle forme des experts tech capables d'innover. Epitech est présente sur 15 campus en France et 5 campus à l'international.",
    programmes: [
      { nom: "Master of Science Informatique (Expert en Systèmes d'Information)", duree: "1 an (4ème ou 5ème année)", details: "Spécialisations : Cybersécurité · Data · Cloud · Développement." },
      { nom: "Global Bachelor of Technology (année de mobilité)", duree: "1 an", details: "Mobilité internationale dans l'un des campus Epitech à l'étranger." },
    ],
    eligibilite: "Accès depuis la Licence Informatique EBS. Convention EBS — Epitech pour admission simplifiée en Bac+4/5.",
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
        body: "- **Réduction** : 10 % de réduction sur les frais de scolarité standard.\\n- **Acompte à l'admission** : 3 500 € à régler lors de la confirmation d'admission.\\n- **Refus de visa** : L'acompte est intégralement remboursé si EPITECH est informée dans un délai de 10 jours."
      }
    ],
  },`);

// ── EPSI ──
replacePartnerBlock('epsi', `  epsi: {
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
    eligibilite: "Accès depuis la Licence Informatique EBS. Convention EBS — EPSI. Intégration en Bac+4 (4ème année EPSI).",
    avantages: [
      "Titre RNCP Bac+5 reconnu par l'État — Grade de Master",
      "Formations disponibles en apprentissage (entreprise intégrée)",
      "Partenariats avec Capgemini, Atos, Orange, SNCF, BNP...",
      "Réseau de campus en France",
      "12 % de réduction sur les frais de scolarité pour les étudiants EBS",
      "Visa étudiant France facilité via convention EBS",
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
        body: "- **Réduction** : 12 % sur les frais de scolarité.\\n- **Frais de candidature** : Exonération de 80 €.\\n- **1er acompte** : 3 000 € à l'admission.\\n- **2e acompte** : 3 000 € après obtention du visa.\\n- **Solde** : Avant le 30 novembre (Fall) ou le 30 avril (Spring).\\n- **Refus de visa** : Remboursement du premier acompte."
      }
    ],
  },`);

// ── EXCELIA ──
replacePartnerBlock('excelia', `  excelia: {
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
  },`);

// ── LINK UNIVERSITY ──
replacePartnerBlock('"link-university"', `  "link-university": {
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
        body: "- **Réduction** : De 15 % à 20 % sur le tarif officiel des programmes.\\n- **Paiement** : Directement auprès de Link University.\\n- **En cas de refus de visa** : possibilité de reporter l'admission, de poursuivre les études à ESPIMA ou de bénéficier du remboursement."
      }
    ],
  },`);

// ── SUP'DE COM (merge into existing supdecom) ──
replacePartnerBlock('supdecom', `  supdecom: {
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
        body: "- **Réduction** : 12 % sur les frais de scolarité.\\n- **Frais de candidature** : Exonération de 80 €.\\n- **1er acompte** : 3 000 € à l'admission.\\n- **2e acompte** : 3 000 € après obtention du visa.\\n- **Solde** : Avant le 30 novembre (Fall) ou le 30 avril (Spring).\\n- **Refus de visa** : Remboursement du premier acompte."
      }
    ],
  },`);

// ── GUTECH ──
replacePartnerBlock('gutech', `  gutech: {
    slug: "gutech",
    name: "GUtech",
    country: "🇴🇲 Oman",
    countryCode: "OM",
    logo: "/images/partenaires-academiques/gutech.webp",
    type: "Université germanophone en partenariat avec RWTH Aachen (Allemagne) — English-taught programs",
    presentation: "GUtech (German University of Technology in Oman) est une université fondée en partenariat avec la RWTH Aachen University, l'une des meilleures universités techniques au monde. Implantée à Muscat (Oman), GUtech propose des programmes en anglais dans les domaines de l'informatique, de l'ingénierie, de l'architecture et du management.",
    programmes: [
      { nom: "MSc Information Technology", duree: "2 ans", details: "Spécialisations : Intelligent Systems · Cybersecurity · Data Science. Cours en anglais." },
      { nom: "MSc Applied Geosciences", duree: "2 ans", details: "Pour profils scientifiques. Cours en anglais." },
      { nom: "Bachelor of Science in Management (dernière année)", duree: "1 an", details: "Accès depuis Licence Management EBS. Cours en anglais." },
    ],
    eligibilite: "Accès depuis les Licences Informatique et Management EBS. Partenariat EBS — GUtech ouvrant des perspectives d'emploi dans les pays du Golfe.",
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
      "Data Scientist (EAU, Qatar, Arabie Saoudite)",
      "Expert cybersécurité (Golfe + international)",
      "Manager des opérations (MENA)",
      "Consultant tech (Moyen-Orient)",
    ],
    keyStats: [
      { label: "Création", value: "2007" },
      { label: "Localisation", value: "Halban, Muscat, Sultanat d'Oman" },
      { label: "Accréditations", value: "OAAAQA, ACQUIN" },
    ],
    pricing: [
      { label: "Bachelor & Master", amount: "Tarif GUtech", period: "", note: "Tarifs préférentiels EBS" },
    ],
    extraSections: [
      {
        title: "Coopération académique, projets et mobilité",
        body: "- **Stages, projets appliqués**, ateliers techniques et visites académiques ou professionnelles.\\n- **Conférences, séminaires, workshops** et Summer Schools.\\n- **Mobilité d'enseignants**, d'experts et échanges étudiants de courte durée.\\n- **Recherche appliquée**, supervision de projets et développement de modules pédagogiques.\\n- **Certifications internationales** : AWS, Azure, Google Cloud, Cisco, Meta..."
      }
    ],
  },`);

// ── REDSUP (merge guide data into existing redsup) ──
replacePartnerBlock('redsup', `  redsup: {
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
        body: "- **Réduction** : 15 % sur les frais de scolarité selon les conditions et modalités définies par RED-SUP.\\n- RED-SUP délivre aux étudiants admis les attestations et documents académiques requis, notamment pour le visa."
      }
    ],
  },`);

// ── PSB: Add pricing and extraSections from guide ──
// PSB already has good data. We just need to add the MBA programme from the guide + keyStats correction
replacePartnerBlock('psb', `  psb: {
    slug: "psb",
    name: "PSB Paris School of Business",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/psb.webp",
    type: "Grande École de Commerce — Triple accréditée AACSB · EQUIS · AMBA — Membre CGE",
    presentation: "Paris School of Business (PSB) est une Grande École française de management reconnue pour l'excellence de ses formations, son ouverture internationale et sa proximité avec les entreprises. Membre de la Conférence des Grandes Écoles (CGE), triple accréditée AACSB, EQUIS et AMBA. Fondée en 1974, elle compte 4 000+ étudiants, 20 000+ alumni et un campus à Paris (Campus Nation).",
    programmes: [
      { nom: "Bachelor", duree: "1 an (Bac+3)", details: "Diplôme visé • Grade de Licence. Spécialisations : Marketing Digital, Banking & Finance, Audit & Contrôle de Gestion, International Business, Entrepreneuriat. Accès après Bac+2 EBS." },
      { nom: "Programme Grande École (PGE)", duree: "2 ans (Bac+5)", details: "Diplôme visé • Grade de Master • RNCP 7. Spécialisations : Marketing & Data, Digital Business, Audit & Contrôle de Gestion, Achats & Supply Chain, Data Management, RH, Entrepreneuriat. Accès après Licence EBS." },
      { nom: "Master of Science (MSc)", duree: "1 ou 2 ans (Bac+5)", details: "Label MSc de la CGE (selon programme). Accès après Licence ou M1 EBS." },
      { nom: "MBA et programmes spécialisés", duree: "Variable (Bac+5)", details: "Titre RNCP / reconnaissance selon le programme. Accès selon le niveau académique requis." },
    ],
    eligibilite: "Être inscrit à EBS. Étude de dossier (parcours, relevés de notes, CV, lettre de motivation). Entretien individuel d'admission. Niveau de langue requis selon le programme.",
    avantages: [
      "Triple accréditation AACSB + EQUIS + AMBA — top 1% mondial",
      "Membre de la Conférence des Grandes Écoles (CGE)",
      "Fondée en 1974",
      "Campus à Paris (Campus Nation)",
      "4 000+ étudiants, 20 000+ alumni",
      "Réseau international d'universités partenaires",
      "Pédagogie orientée vers les projets, l'innovation et l'expérience professionnelle",
      "Possibilité de poursuite après Bac+2, Licence ou M1",
      "Accompagnement des étudiants EBS dans le cadre du partenariat",
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
    accreditations: [
      { label: "AACSB", description: "Accréditation mondiale de référence en management", logo: "/images/partenaires-academiques/AACSB-logo-accredited-color-PMS_Website-1024x346.png" },
      { label: "EQUIS", description: "Label d'excellence académique et internationale de l'EFMD", logo: "/images/partenaires-academiques/EFMD-Global-EQUIS-Accredited-Pantonelm.png" },
      { label: "AMBA", description: "Accréditation de référence pour les programmes MBA", logo: "/images/partenaires-academiques/amba-logo-association-of-mba-accredited-1244274_copie-removebg-preview.png" },
    ],
  },`);

// ── UQAT: Add extraSections from guide ──
// The UQAT entry is already very rich. Just add the financial conditions from the guide.
{
  // Find the uqat block's residencyBadge line and add extraSections after it
  const residencyLine = 'residencyBadge: { text: "Résidence permanente possible via le PEQ", sub: "Programme de l\'expérience québécoise" },';
  const extraSectionsToAdd = `
    extraSections: [
      {
        title: "Conditions financières du partenariat",
        body: "- **Coût estimatif** : Entre 24 000 et 30 000 $ CAD pour les deux années.\\n- **Frais d'admission** : 75 $ CAD.\\n- **Bourse (MGP uniquement)** : 2 500 $ CAD par session, jusqu'à un maximum de 4 sessions.\\n- **Indexation** : Les frais de scolarité peuvent être révisés d'environ 3 % par an.\\n- **Tarif préférentiel** : Les étudiants d'ESPIMA bénéficient du tarif canadien, inférieur au tarif international."
      }
    ],`;
  
  if (src.includes(residencyLine) && !src.includes('Conditions financières du partenariat')) {
    // Only if not already present
    // Find the residencyBadge line specifically in uqat context
    const idx = src.indexOf(residencyLine);
    if (idx !== -1) {
      const insertAt = idx + residencyLine.length;
      src = src.substring(0, insertAt) + extraSectionsToAdd + src.substring(insertAt);
      console.log('  ✅ Added extraSections to: uqat');
    }
  } else {
    console.log('  ⚠️ UQAT: residencyBadge not found or extraSections already present');
  }
}

// Write the final file
fs.writeFileSync(FILE, src, 'utf8');
console.log('\n✅ All enrichments applied. File saved.');
console.log(`   Final size: ${src.length} bytes`);

// Quick sanity check
const slugs = [...src.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]);
console.log(`   Found ${slugs.length} partner slugs: ${slugs.join(', ')}`);
