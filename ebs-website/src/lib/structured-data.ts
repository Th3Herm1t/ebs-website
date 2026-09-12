export function siteJsonLd(locale: string) {
  const baseUrl = "https://ebs.tn";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["CollegeOrUniversity", "EducationalOrganization"],
        "@id": `${baseUrl}/#organization`,
        name: "Espima Business School",
        alternateName: ["EBS", "ESPIMA Business School"],
        url: baseUrl,
        logo: `${baseUrl}/images/logo/logo.png`,
        image: `${baseUrl}/images/all-img/hero.webp`,
        foundingDate: "2013",
        description:
          "ESPIMA Business School est une université privée d'informatique et de management en Tunisie, agréée par le Ministère de l'Enseignement Supérieur.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Immeuble EBS, 10 rue Socrate, Z.I Kheireddine - Les Berges du Lac III",
          addressLocality: "Tunis",
          addressCountry: "TN",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+21655582843",
            contactType: "Admissions",
            areaServed: ["TN", "FR", "CA"],
            availableLanguage: ["fr", "en", "ar"],
          },
          {
            "@type": "ContactPoint",
            email: "info@ebs.tn",
            contactType: "Information",
            availableLanguage: ["fr", "en", "ar"],
          },
        ],
        sameAs: ["https://www.facebook.com/ebstunis", "https://www.linkedin.com/school/ebs-tunis/"],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Espima Business School",
        inLanguage: locale,
        publisher: { "@id": `${baseUrl}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${baseUrl}/${locale}/nos-programmes?program={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}
