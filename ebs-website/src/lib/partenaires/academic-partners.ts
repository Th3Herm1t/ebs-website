export const academicPartners = [
  {
    name: "EM Normandie",
    pays: "France",
    code: "FR",
    slug: "em-normandie",
    logo: "/images/ebs-tn/EM_Normandie-Logo.png",
    desc: "Fondée en 1871, EM Normandie est une Grande École française de management, membre de la Conférence des Grandes Écoles et bénéficiant de la triple accréditation internationale EQUIS, AACSB et AMBA.",
  },
  {
    name: "Excelia",
    pays: "France",
    code: "FR",
    slug: "excelia",
    logo: "/images/partenaires-academiques/excelia.webp",
    desc: "Excelia Business School est une Grande École française reconnue pour son ouverture internationale et ses formations en management, du Bachelor au Bac+5.",
  },
  {
    name: "PSB Paris",
    pays: "France",
    code: "FR",
    slug: "psb",
    logo: "/images/partenaires-academiques/psb.webp",
    desc: "Paris School of Business est une Grande École française membre de la Conférence des Grandes Écoles et bénéficiant de la triple accréditation AACSB, EQUIS et AMBA.",
  },
  {
    name: "Éklore-ed",
    pays: "France",
    code: "FR",
    slug: "eklore",
    logo: "/images/partenaires-academiques/eklore.webp",
    desc: "EKLORE-ed, anciennement ESC Pau Business School, est une Grande École de commerce proposant des formations du Bachelor au Bac+5 dans divers domaines.",
  },
  {
    name: "Epitech",
    pays: "France",
    code: "FR",
    slug: "epitech",
    logo: "/images/partenaires-academiques/epitech.webp",
    desc: "EPITECH est une école française spécialisée dans l'informatique, reconnue pour sa pédagogie intensive fondée sur les projets et la pratique.",
  },
  {
    name: "EPSI",
    pays: "France",
    code: "FR",
    slug: "epsi",
    logo: "/images/partenaires-academiques/epsi.webp",
    desc: "Créée en 1961, EPSI forme des professionnels du numérique. Sa pédagogie Learning by Doing privilégie les projets et la mise en pratique.",
  },
  {
    name: "IDRAC",
    pays: "France",
    code: "FR",
    slug: "idrac",
    logo: "/images/partenaires-academiques/idrac.webp",
    desc: "Fondée en 1965, IDRAC Business School propose des formations en commerce, management, marketing, stratégie, international, innovation et supply chain.",
  },
  {
    name: "IFAG",
    pays: "France",
    code: "FR",
    slug: "ifag",
    logo: "/images/partenaires-academiques/ifag.webp",
    desc: "Créée en 1968, IFAG est une école française de management spécialisée dans les domaines du commerce, des ressources humaines et de l'entrepreneuriat.",
  },
  {
    name: "Sup'de Com",
    pays: "France",
    code: "FR",
    slug: "supdecom",
    logo: "/images/partenaires-academiques/supdecom.webp",
    desc: "SUP'DE COM forme aux différents métiers de la communication : stratégie de communication, marketing digital, réseaux sociaux, création, événementiel et publicité.",
  },
  {
    name: "IGEFI",
    pays: "France",
    code: "FR",
    slug: "igefi",
    logo: "/images/partenaires-academiques/igefi.webp",
    desc: "IGEFI est une école supérieure française spécialisée dans les métiers de la finance d'entreprise, de la comptabilité, du contrôle de gestion et de l'expertise comptable.",
  },
  {
    name: "RED-SUP",
    pays: "France",
    code: "FR",
    slug: "redsup",
    logo: "/images/partenaires-academiques/redsup.webp",
    desc: "RED-SUP est un établissement français d'enseignement supérieur spécialisé dans l'informatique, les réseaux, la sécurité informatique et la cybersécurité.",
  },
  {
    name: "UQAT",
    pays: "Canada",
    code: "CA",
    slug: "uqat",
    logo: "/images/partenaires-academiques/uqat.webp",
    desc: "Membre du réseau de l'Université du Québec, l'UQAT est une université publique canadienne proposant des formations et des activités de recherche dans plusieurs domaines.",
  },
  {
    name: "Link University",
    pays: "Italie",
    code: "IT",
    slug: "link-university",
    logo: "/images/partenaires-academiques/udl.webp",
    desc: "Située à Rome, Link University propose des programmes internationaux en management, finance, économie, innovation, technologies digitales et communication.",
  },
  {
    name: "GUtech",
    pays: "Oman",
    code: "OM",
    slug: "gutech",
    logo: "/images/partenaires-academiques/gutech.webp",
    desc: "Fondée en 2007, GUtech est une université technologique anglophone située dans le Sultanat d'Oman, développant une collaboration avec RWTH Aachen University.",
  },
] as const;

export type PartnerLocale = "fr" | "en";

const englishDescriptions: Record<string, string> = {
  "em-normandie": "Founded in 1871, EM Normandie is a French Grande École of management, a member of the Conférence des Grandes Écoles and holder of the international triple accreditation EQUIS, AACSB and AMBA.",
  excelia: "Excelia Business School is a French Grande École known for its international outlook and management programmes from Bachelor's level to Bac+5.",
  psb: "Paris School of Business is a French Grande École, a member of the Conférence des Grandes Écoles and holder of the international triple accreditation AACSB, EQUIS and AMBA.",
  eklore: "EKLORE-ed, formerly ESC Pau Business School, is a business Grande École offering programmes from Bachelor's level to Bac+5 in several fields.",
  epitech: "EPITECH is a French school specialising in computer science, known for its intensive project- and practice-based teaching.",
  epsi: "Founded in 1961, EPSI trains digital professionals. Its Learning by Doing approach prioritises projects and practical experience.",
  idrac: "Founded in 1965, IDRAC Business School offers programmes in business, management, marketing, strategy, international business, innovation and supply chain.",
  ifag: "Founded in 1968, IFAG is a French management school specialising in business, human resources and entrepreneurship.",
  supdecom: "SUP'DE COM trains students for communication careers including communication strategy, digital marketing, social media, creative work, events and advertising.",
  igefi: "IGEFI is a French higher-education school specialising in corporate finance, accounting, management control and accountancy.",
  redsup: "RED-SUP is a French higher-education institution specialising in computer science, networks, IT security and cybersecurity.",
  uqat: "A member of the Université du Québec network, UQAT is a Canadian public university offering teaching and research in several fields.",
  "link-university": "Based in Rome, Link University offers international programmes in management, finance, economics, innovation, digital technologies and communication.",
  gutech: "Founded in 2007, GUtech is an English-speaking technological university in the Sultanate of Oman collaborating with RWTH Aachen University.",
};

export function getAcademicPartners(locale: PartnerLocale = "fr") {
  return academicPartners.map((partner) => locale === "en"
    ? { ...partner, desc: englishDescriptions[partner.slug] ?? partner.desc }
    : partner);
}

export type AcademicPartnerSlug = (typeof academicPartners)[number]["slug"];
