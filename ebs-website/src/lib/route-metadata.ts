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
    description: "EBS intègre l'intelligence artificielle et 131 certifications internationales affichées dans ses Licences et Masters.",
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
    description: "Google, IBM, Harvard, Cisco, Bloomberg, HubSpot, SEMrush et plus : découvrez les certifications internationales incluses dans les programmes EBS.",
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

export function metadataForRoute(route: keyof typeof routeMeta, locale: string) {
  return pageMetadata({
    ...routeMeta[route],
    path: `/${locale}/${route}`,
  });
}
