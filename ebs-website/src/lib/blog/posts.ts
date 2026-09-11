export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  readTime: string;
  publishDate: string;
  updatedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featuredImage: string;
  tags: string[];
}

export type BlogLocale = "fr" | "en";

export const blogPosts: Record<string, BlogPost> = {
  "reconnaissance-diplomes-enseignement-superieur-francais": {
    slug: "reconnaissance-diplomes-enseignement-superieur-francais",
    title: "Les principales reconnaissances des diplômes de l'enseignement supérieur français : le guide complet",
    excerpt: "Comprendre les visas d'État, Grades de Licence et Master, Titres RNCP (Niveaux 6 & 7), labels CGE et accréditations internationales (AACSB, EQUIS, AMBA) pour sécuriser votre poursuite d'études en France.",
    category: "International",
    categoryColor: "#00BCD4",
    readTime: "7 min de lecture",
    publishDate: "24 Août 2026",
    updatedDate: "02 Septembre 2026",
    author: {
      name: "Direction des Relations Internationales",
      role: "ESPIMA Business School",
      avatar: "/images/heroes/hero-parcours-internationaux.webp",
    },
    featuredImage: "/images/heroes/hero-parcours-internationaux.webp",
    tags: ["Études en France", "Reconnaissance des diplômes", "Grade de Master", "RNCP", "Grandes Écoles", "AACSB", "Campus France"],
  },
};

const englishPosts: Record<string, BlogPost> = {
  "reconnaissance-diplomes-enseignement-superieur-francais": {
    ...blogPosts["reconnaissance-diplomes-enseignement-superieur-francais"],
    title: "The main recognitions of French higher-education degrees: a complete guide",
    excerpt: "Understand state visas, Bachelor's and Master's degrees, RNCP qualifications (Levels 6 and 7), CGE labels and international accreditations (AACSB, EQUIS and AMBA) to plan your further studies in France with confidence.",
    category: "International",
    readTime: "7 min read",
    publishDate: "24 August 2026",
    updatedDate: "2 September 2026",
    author: {
      ...blogPosts["reconnaissance-diplomes-enseignement-superieur-francais"].author,
      role: "EBS International Relations Office",
    },
    tags: ["Study in France", "Degree recognition", "Master's degree", "RNCP", "Grandes Écoles", "AACSB", "Campus France"],
  },
};

export function getBlogPosts(locale: BlogLocale = "fr"): Record<string, BlogPost> {
  return locale === "en" ? englishPosts : blogPosts;
}

export function getBlogPost(slug: string, locale: BlogLocale = "fr"): BlogPost | undefined {
  return getBlogPosts(locale)[slug];
}
