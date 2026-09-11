import { pageMetadata } from "@/lib/seo";

const routeMeta = {
  admissions: {
    title: "Admissions EBS : candidature Licence et Master",
    description: "Découvrez les conditions d'admission EBS, les étapes de candidature, les dossiers requis et les aides pour intégrer une Licence ou un Master à Tunis.",
  },
  preinscription: {
    title: "Préinscription EBS en ligne",
    description: "Déposez votre préinscription EBS en ligne pour une Licence, un Master ou un parcours international. Réponse sous 24h par l'équipe admissions.",
  },
  contact: {
    title: "Contact EBS Tunis",
    description: "Contactez Espima Business School à Tunis : admissions, programmes, certifications, partenariats et accompagnement étudiant.",
  },
  tarifs: {
    title: "Tarifs EBS : frais de scolarité et financement",
    description: "Découvrez les tarifs des Licences et Masters EBS, les modalités de paiement et les solutions de financement disponibles.",
  },
  faq: {
    title: "FAQ EBS : admissions, programmes, certifications",
    description: "Réponses aux questions fréquentes sur les admissions EBS, les Licences, Masters, certifications, stages, tarifs et parcours internationaux.",
  },
  campus: {
    title: "Campus EBS aux Berges du Lac Tunis",
    description: "Découvrez le campus EBS à Tunis : salles équipées, espaces étudiants, laboratoire informatique, vie de campus et accès.",
  },
  alumni: {
    title: "EBS Alumni : réseau des diplômés",
    description: "Découvrez le réseau EBS Alumni, les diplômés, les secteurs d'activité, le mentorat et les opportunités de carrière en Tunisie et à l'international.",
  },
  "ia-et-certifications": {
    title: "IA et certifications internationales chez EBS",
    description: "EBS intègre l'intelligence artificielle et un catalogue de ressources et justificatifs gratuits dans ses Licences et Masters.",
  },
  "parcours-international": {
    title: "Parcours international EBS : France, Canada, Italie, Oman",
    description: "Étudiez à EBS puis poursuivez chez nos universités partenaires en France, au Canada, en Italie ou à Oman.",
  },
  "etudiants-internationaux": {
    title: "Étudiants internationaux à EBS Tunisie",
    description: "Visa, logement, accueil, installation et accompagnement complet pour les étudiants internationaux souhaitant étudier à EBS Tunis.",
  },
  "partenaires-academiques": {
    title: "Partenaires académiques internationaux EBS",
    description: "Découvrez les universités partenaires d'EBS en France, au Canada, en Italie et à Oman pour poursuivre vos études à l'international.",
  },
  "partenaires-economiques": {
    title: "Partenaires économiques EBS",
    description: "EBS collabore avec des entreprises partenaires pour stages, projets appliqués, recrutement, job fairs et insertion professionnelle.",
  },
  actualites: {
    title: "Actualités et événements EBS",
    description: "Suivez les actualités, événements, conférences, salons, partenariats et temps forts de la vie étudiante à Espima Business School.",
  },
  blog: {
    title: "Blog EBS : études, IA, international, carrière",
    description: "Conseils et articles EBS sur les études supérieures en Tunisie, l'IA, les certifications, le marketing, la finance et l'international.",
  },
  brochures: {
    title: "Brochures EBS à télécharger",
    description: "Téléchargez les brochures des Licences, Masters, certifications et parcours internationaux proposés par Espima Business School.",
  },
  certifications: {
    title: "Certifications internationales incluses chez EBS",
    description: "Google, IBM, Harvard, Cisco, HubSpot, SEMrush et plus : découvrez le catalogue de ressources et justificatifs gratuits des programmes EBS.",
  },
  "qui-sommes-nous": {
    title: "Qui sommes-nous ? Espima Business School",
    description: "Découvrez EBS, université privée tunisienne d'informatique et de management fondée en 2013, agréée par l'État tunisien.",
  },
  "vision-mission-valeurs": {
    title: "Vision, mission et valeurs EBS",
    description: "Découvrez la vision, la mission et les valeurs qui guident Espima Business School dans la formation des leaders de demain.",
  },
  "corps-enseignant": {
    title: "Corps enseignant EBS",
    description: "Découvrez les enseignants, intervenants et experts professionnels qui accompagnent les étudiants EBS.",
  },
  "recruter-nos-etudiants": {
    title: "Recruter les étudiants EBS",
    description: "Entreprises : recrutez les étudiants EBS pour stages, alternance, projets, job fair et opportunités d'emploi.",
  },
} as const;

const routeMetaEn: Record<keyof typeof routeMeta, { title: string; description: string }> = {
  admissions: { title: "EBS Admissions: Bachelor's and Master's applications", description: "Discover EBS admission requirements, application steps, required documents, and funding options in Tunis." },
  preinscription: { title: "EBS Online Application", description: "Submit your EBS application online for a Bachelor's, Master's, or international pathway programme." },
  contact: { title: "Contact EBS Tunis", description: "Contact Espima Business School in Tunis about admissions, programmes, certifications, partnerships, and student support." },
  tarifs: { title: "EBS Tuition Fees and Funding", description: "Discover EBS tuition fees for Bachelor's and Master's programmes, payment options, and available funding solutions." },
  faq: { title: "EBS FAQ: Admissions, Programmes, and Certifications", description: "Answers to frequently asked questions about EBS admissions, programmes, certifications, internships, fees, and international pathways." },
  campus: { title: "EBS Campus at Les Berges du Lac, Tunis", description: "Discover the EBS campus in Tunis, including equipped classrooms, student spaces, computer labs, and access information." },
  alumni: { title: "EBS Alumni Network", description: "Discover the EBS alumni network, graduate profiles, sectors, mentoring, and career opportunities in Tunisia and abroad." },
  "ia-et-certifications": { title: "AI and International Certifications at EBS", description: "EBS integrates artificial intelligence and a catalogue of free professional credentials into its Bachelor's and Master's programmes." },
  "parcours-international": { title: "EBS International Pathway: France, Canada, Italy, Oman", description: "Study at EBS and continue your education with partner universities in France, Canada, Italy, or Oman." },
  "etudiants-internationaux": { title: "International Students at EBS Tunisia", description: "Visa, housing, arrival, settling in, and complete support for international students who wish to study at EBS Tunis." },
  "partenaires-academiques": { title: "EBS International Academic Partners", description: "Discover EBS university partners in France, Canada, Italy, and Oman for continuing your studies internationally." },
  "partenaires-economiques": { title: "EBS Corporate Partners", description: "EBS works with partner companies on internships, applied projects, recruitment, job fairs, and career placement." },
  actualites: { title: "EBS News and Events", description: "Follow news, events, conferences, fairs, partnerships, and highlights from student life at Espima Business School." },
  blog: { title: "EBS Blog: Studies, AI, International, and Careers", description: "EBS advice and articles about higher education in Tunisia, AI, certifications, marketing, finance, and international study." },
  brochures: { title: "EBS Brochures to Download", description: "Download brochures for the Bachelor's, Master's, certification, and international pathway programmes offered by EBS." },
  certifications: { title: "International Certifications Included at EBS", description: "Google, IBM, Harvard, Cisco, HubSpot, SEMrush, and more: discover the professional credentials included in EBS programmes." },
  "qui-sommes-nous": { title: "About Espima Business School", description: "Discover EBS, a Tunisian private university for computer science and management founded in 2013 and approved by the Tunisian State." },
  "vision-mission-valeurs": { title: "EBS Vision, Mission, and Values", description: "Discover the vision, mission, and values guiding Espima Business School in educating tomorrow's leaders." },
  "corps-enseignant": { title: "EBS Faculty", description: "Meet the teachers, lecturers, and professional experts who support EBS students." },
  "recruter-nos-etudiants": { title: "Recruit EBS Students", description: "Companies can recruit EBS students for internships, work-study opportunities, projects, job fairs, and employment." },
};

export function metadataForRoute(route: keyof typeof routeMeta, locale: string) {
  return pageMetadata({
    ...(locale === "en" ? routeMetaEn[route] : routeMeta[route]),
    path: `/${locale}/${route}`,
  });
}
