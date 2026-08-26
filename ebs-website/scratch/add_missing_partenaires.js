const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../src/lib/partenaires/partenaires.ts');
let content = fs.readFileSync(file, 'utf8');

// 1. Update UQAT
if (!content.includes('Coût estimatif')) {
    content = content.replace(
        /testimonials: \[\s*\{ quote: "J'ai pu devenir directrice générale[\s\S]*?programKey: "MGO" \},\s*\],/g,
        `testimonials: [
      { quote: "J'ai pu devenir directrice générale d'une entreprise du secteur hôtelier grâce au DESS en gestion de projet qui m'a donné toutes les compétences nécessaires.", name: "Zabrina Rojas", role: "Diplômée DESS + Maîtrise en gestion de projet", photo: "https://www.uqat.ca/resources/medias/etudes/temoignages/zabrina-rojas.jpg", programKey: "MGP" },
      { quote: "Étudier à la MGO a vraiment été l'une des meilleures décisions de ma vie. L'encadrement attentif et bienveillant des professeurs a vraiment fait la différence.", name: "Larissa Fomena Neuchy", role: "Finissante MGO, étudiante internationale", photo: "https://www.uqat.ca/resources/medias/etudes/temoignages/llarissa-fomena-neuchy.jpg", programKey: "MGO" },
    ],
    extraSections: [
      {
        title: "Conditions financières du partenariat",
        body: "- **Coût estimatif** : Entre 24 000 et 30 000 $ CAD pour les deux années.\\n- **Frais d'admission** : 75 $ CAD.\\n- **Bourse (MGP)** : 2 500 $ CAD par session (max 4 sessions).\\n- **Indexation** : Les frais de scolarité peuvent être révisés d'environ 3 % par an."
      }
    ],`
    );
}

// 2. Update PSB
const psbRegex = /programmes: \[\s*\{ nom: "Bachelor in Management",[\s\S]*?debouches: \[\s*"Manager international \/ Business Developer",[\s\S]*?"Data Analyst \/ Business Intelligence",\s*\],/;
const psbReplacement = `programmes: [
      { nom: "Bachelor", duree: "1 an (Bac+3)", details: "Diplôme visé (Grade de Licence). Accès après Bac+2 EBS en 3e année." },
      { nom: "Programme Grande École (PGE)", duree: "2 ans (Bac+5)", details: "Diplôme visé (Grade de Master). Triple accréditation. Accès après Licence EBS." },
      { nom: "Master of Science (MSc)", duree: "1 ou 2 ans (Bac+5)", details: "Label MSc de la CGE. Accès après Licence ou M1 EBS." },
      { nom: "MBA et programmes spécialisés", duree: "Variable (Bac+5)", details: "Titre RNCP selon programme." },
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
    ],`;
content = content.replace(psbRegex, psbReplacement);

// Add missing partenaires:
const missingPartenaires = `
  "red-sup": {
    slug: "red-sup",
    name: "RED-SUP",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/red-sup.webp",
    type: "Établissement spécialisé en informatique et cybersécurité",
    presentation: "RED-SUP est un établissement français d’enseignement supérieur privé spécialisé dans l’informatique et la cybersécurité. Ses formations couvrent notamment les réseaux, la sécurité informatique et la cybersécurité, avec des cursus de niveau Bac+3 et Bac+5.",
    programmes: [
      { nom: "Mastère Européen – Expert IT en Cybersécurité", duree: "2 ans (Bac+5)", details: "Titre RNCP niveau 7. Accès pour les titulaires d’une Licence EBS : Génie Logiciel & Systèmes d’Information." },
    ],
    eligibilite: "Être titulaire d'une Licence EBS en informatique, génie logiciel, SI, ou réseaux. Admission soumise à l'étude du dossier par RED-SUP.",
    avantages: [
      "Établissement français spécialisé dans l’informatique et la cybersécurité",
      "Pédagogie professionnalisante associant projets appliqués et expérience professionnelle",
      "Passerelle dédiée aux titulaires d’une Licence EBS (informatique)",
      "Accompagnement académique par ESPIMA",
      "Possibilité de stages ou d’alternance",
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
        body: "- **Réduction** : 15 % sur les frais de scolarité selon les conditions définies par RED-SUP.\\n- RED-SUP délivre les documents requis pour le visa."
      }
    ],
  },
  
  "sup-de-com": {
    slug: "sup-de-com",
    name: "SUP'DE COM",
    country: "🇫🇷 France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/sup-de-com.webp",
    type: "École française spécialisée dans les métiers de la communication",
    presentation: "SUP'DE COM est une École Supérieure française spécialisée dans les métiers de la communication. Elle forme des professionnels capables de concevoir, piloter et évaluer des stratégies de communication adaptées aux marques, aux organisations et aux nouveaux usages numériques.",
    programmes: [
      { nom: "Bachelor – Chargé de Communication", duree: "1 an (Bac+3)", details: "Titre RNCP 6. Accès après Bac+2 EBS." },
      { nom: "Bachelor – Chargé de Marketing et Communication Digitale", duree: "1 an (Bac+3)", details: "Titre RNCP 6. Accès après Bac+2 EBS en 3e année." },
      { nom: "Manager de la stratégie marketing / communication", duree: "2 ans (Bac+5)", details: "Titre RNCP 7. Accès après Licence EBS Marketing ou Management." },
    ],
    eligibilite: "Accès après Bac+2 ou Licence EBS (Marketing/Management). Admission sur étude de dossier et entretien éventuel.",
    avantages: [
      "Expertise couvrant la communication globale, le digital, la création et l'événementiel",
      "Réseau de campus dans plusieurs grandes villes françaises",
      "Pédagogie fondée sur les projets, la créativité et les mises en situation",
      "Formation aux nouveaux enjeux : data, IA, réseaux sociaux",
      "Accompagnement personnalisé dans les démarches visa et Campus France",
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
        body: "- **Réduction** : 12 % sur les frais de scolarité.\\n- **Frais de candidature** : Exonération de 80 €.\\n- **1er acompte** : 3 000 € à l’admission.\\n- **2e acompte** : 3 000 € après obtention du visa.\\n- **Refus de visa** : Remboursement du premier acompte."
      }
    ],
  },
`;

if (!content.includes('slug: "sup-de-com"')) {
    content = content.replace(/\n\};\n*$/, missingPartenaires + '\n};\n');
}

fs.writeFileSync(file, content);
console.log("Done.");
