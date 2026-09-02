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
      avatar: "/images/heroes/hero-parcours-international.jpg",
    },
    featuredImage: "/images/heroes/hero-parcours-international.jpg",
    tags: ["Études en France", "Reconnaissance des diplômes", "Grade de Master", "RNCP", "Grandes Écoles", "AACSB", "Campus France"],
  },
};
