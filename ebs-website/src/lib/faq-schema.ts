export const faqSchemaQuestions = [
  {
    q: "Quelles sont les conditions d'admission en Licence ?",
    a: "Pour intégrer une Licence chez EBS, vous devez être titulaire du Baccalauréat. L'admission se fait sur étude de dossier, suivie d'un entretien de motivation.",
  },
  {
    q: "Quand ouvrent les inscriptions pour 2026-2027 ?",
    a: "Les candidatures pour l'année universitaire 2026-2027 sont ouvertes. Il est recommandé d'effectuer votre préinscription dès maintenant.",
  },
  {
    q: "Les certifications sont-elles vraiment gratuites ?",
    a: "Oui. Le catalogue public v3 ne retient que des ressources dont l'apprentissage, l'évaluation, le justificatif et les accès requis sont vérifiés à coût zéro.",
  },
  {
    q: "Puis-je étudier à l'étranger pendant mon cursus ?",
    a: "Oui. EBS dispose d'un réseau de partenaires académiques en France, au Canada, en Italie et à Oman pour poursuivre une partie du cursus à l'international.",
  },
  {
    q: "Les diplômes EBS sont-ils reconnus ?",
    a: "Oui. EBS est une université privée agréée par le Ministère de l'Enseignement Supérieur tunisien, avec des diplômes conformes au système LMD.",
  },
];

export const admissionsFaqSchemaQuestions = [
  {
    q: "Y a-t-il un concours d'entrée ?",
    a: "Non. L'admission à l'EBS se fait sur dossier et entretien de motivation.",
  },
  {
    q: "Quand ouvrent les inscriptions ?",
    a: "Les inscriptions ouvrent chaque année en mai et restent ouvertes jusqu'à fin septembre, sous réserve de places disponibles.",
  },
  {
    q: "Peut-on s'inscrire en cours d'année ?",
    a: "Les inscriptions en cours d'année sont possibles sous conditions. L'équipe admissions étudie chaque situation individuellement.",
  },
  {
    q: "L'EBS est-elle reconnue par l'État ?",
    a: "Oui, EBS Tunis est une université privée reconnue par le Ministère de l'Enseignement Supérieur tunisien.",
  },
  {
    q: "Des facilités de paiement sont-elles disponibles ?",
    a: "Oui, le paiement peut être échelonné en plusieurs tranches selon un plan personnalisé.",
  },
];

export function faqJsonLd(questions: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
