export interface PartnerData {
  slug: string;
  name: string;
  country: string;
  countryCode?: string;
  type: string;
  logo?: string;
  heroImage?: string;
  presentation: string;
  programmes: { nom: string; duree: string; details: string; richExpanded?: { type: "bullets" | "grid" | "text" | "thesis"; items?: string[]; thesisProjects?: { author: string; year: string; topic: string }[]; testimonial?: { quote: string; name: string; role: string; photo: string }; extra?: string; bourse?: string }[] }[];
  eligibilite: string;
  avantages: string[];
  debouches: string[];
  keyStats?: { label: string; value: string; icon?: string }[];
  pricing?: { label: string; amount: string; period: string; note?: string; featured?: boolean }[];
  imageSection?: { src: string; caption?: string };
  professors?: { nom: string; img: string }[];
  testimonials?: { quote: string; name: string; role: string; photo: string; programKey: string }[];
  residencyBadge?: { text: string; sub: string };
  accreditationImage?: string;
  accreditations?: { label: string; description: string; logo?: string }[];
  extraSections?: { title: string; body: string; }[];
}

export const partenaires: Record<string, PartnerData> = {
  audencia: {
    slug: "audencia",
    name: "Audencia",
    country: "­ƒç½­ƒçÀ France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/logo-audencia.png",
    heroImage: "/images/heroes/hero-alumni.webp",
    type: "Grande ├ëcole de Commerce ÔÇö Triple accr├®dit├®e EQUIS ┬À AACSB ┬À AMBA",
    presentation: "Triplement accr├®dit├®e (EQUIS, AACSB et AMBA), Audencia Business School est membre de la Conf├®rence des Grandes ├ëcoles. Class├®e 11├¿me meilleure ├®cole de commerce en France (Le Figaro ├ëtudiant) et 6├¿me par l'Express-NextEdu, Audencia compte 11 campus dans le monde, 180 professeurs permanents et +900 entreprises partenaires. Fond├®e ├á Nantes, elle forme depuis plus d'un si├¿cle des leaders responsables et audacieux.",
    programmes: [
      { nom: "Bachelor in Management", duree: "1 an (L3)", details: "Acc├¿s apr├¿s avoir effectu├® les 2 premi├¿res ann├®es ├á EBS. Formation post-bac en 3 ans sur le campus de Nantes." },
      { nom: "PGE ÔÇö Programme Grande ├ëcole (Grade de Master)", duree: "2 ans", details: "Acc├¿s apr├¿s avoir obtenu la Licence ├á EBS. Programme vis├® Bac+5, class├® 25├¿me Master in Management Monde (Financial Times). Sp├®cialisations en finance, marketing, management, entrepreneuriat." },
      { nom: "MSc ÔÇö Master of Science (M1 ou M2)", duree: "1 ou 2 ans", details: "Inscription en M1 apr├¿s la Licence EBS, ou en M2 apr├¿s le M1 ├á EBS. Large choix de sp├®cialisations en finance, marketing, management international, supply chain, data." },
    ],
    eligibilite: "├ètre inscrit ├á EBS. Avoir 12 de moyenne sur les ann├®es pr├®c├®dant celle de l'inscription. Avoir un bon niveau d'anglais et de fran├ºais. ├ëtude de dossier et entretien de s├®lection.",
    avantages: [
      "Triple accr├®ditation EQUIS + AACSB + AMBA ÔÇö top 1% mondial des ├®coles de commerce",
      "Class├®e 11├¿me meilleure ├®cole de commerce en France (Le Figaro)",
      "11 campus en France et ├á l'international (Nantes, Paris, Shenzhen, S├úo Paulo, Sydney...)",
      "180 professeurs permanents, +900 entreprises partenaires",
      "90% des dipl├┤m├®s trouvent un emploi dans les 6 mois",
      "+47 000 alumni dans le monde entier",
      "Visa ├®tudiant France facilit├® par la convention EBS ÔÇö Audencia",
      "Parcours en alternance possibles sur certains programmes",
    ],
    debouches: [
      "Manager international / Chef de projet",
      "Directeur marketing / Brand Manager",
      "Analyste financier / Banquier d'affaires",
      "Consultant en strat├®gie (MBB, Big 4)",
      "Entrepreneur / Fondateur de startup",
      "Supply Chain Manager / Responsable logistique",
      "Data Analyst / Business Intelligence Manager",
    ],
    keyStats: [
      { label: "├ëtudiants", value: "7 000+" },
      { label: "Campus", value: "11" },
      { label: "Entreprises", value: "900+" },
      { label: "Alumni", value: "47 000+" },
    ],
    accreditations: [
      { label: "AACSB", description: "Accr├®ditation mondiale de r├®f├®rence ÔÇö seules 5% des ├®coles la d├®tiennent", logo: "/images/partenaires-academiques/AACSB-logo-accredited-color-PMS_Website-1024x346.png" },
      { label: "EQUIS", description: "Label d'excellence acad├®mique et internationale de l'EFMD", logo: "/images/partenaires-academiques/EFMD-Global-EQUIS-Accredited-Pantonelm.png" },
      { label: "AMBA", description: "Accr├®ditation de r├®f├®rence pour les programmes MBA et post-graduate", logo: "/images/partenaires-academiques/amba-logo-association-of-mba-accredited-1244274_copie-removebg-preview.png" },
    ],
  },
  uqat: {
    slug: "uqat",
    name: "UQAT",
    country: "­ƒç¿­ƒçª Canada",
    countryCode: "CA",
    logo: "/images/partenaires-academiques/uqat.webp",
    heroImage: "https://www.uqat.ca/resources/medias/covers/mait-en-gestion-de-projet-profil-professionnel.jpg",
    type: "Universit├® publique qu├®b├®coise ÔÇö Membre du r├®seau Universit├® du Qu├®bec",
    presentation: "L'Universit├® du Qu├®bec en Abitibi-T├®miscamingue (UQAT) est une universit├® publique canadienne affili├®e au r├®seau de l'Universit├® du Qu├®bec qui compte dix ├®tablissements. Elle offre plus de 100 programmes d'├®tudes couvrant les trois cycles d'├®tudes (Bachelor, Ma├«trise et Doctorat) dans des domaines vari├®s. Avec ses 14 chaires de recherche et ses 11 unit├®s de recherche, l'UQAT est premi├¿re au Canada pour le volume de recherche par ├®tudiant de cycles sup├®rieurs.",
    programmes: [
      {
        nom: "MGP ÔÇö Ma├«trise en Gestion de Projet (profil professionnel)",
        duree: "2 ans",
        details: "L'objectif fondamental du programme MGP est de former des gestionnaires dot├®s d'une vision strat├®gique et int├®gr├®e du domaine, aptes ├á g├®rer strat├®giquement et efficacement des projets, programmes et portefeuilles, de leur conception jusqu'├á l'obtention des b├®n├®fices. Programme de cours (profil professionnel).",
        richExpanded: [
          { type: "bullets", items: ["L'utilisation d'outils techniques vous permettant de planifier et de g├®rer tout type de projet et d'en faire le suivi.", "Une formation offerte ├á temps partiel (cours de soir et de fin de semaine) qui vous permet de concilier les ├®tudes, le travail et la famille.", "Des professeurs d'exp├®rience et des charg├®s de cours chevronn├®s qui vous offrent un enseignement pratique de la gestion de projet."], extra: "Forces de la MGP" },
          { type: "text", testimonial: { quote: "J'ai pu devenir directrice g├®n├®rale d'une entreprise du secteur h├┤telier gr├óce au DESS en gestion de projet qui m'a donn├® toutes les comp├®tences n├®cessaires.", name: "Zabrina Rojas", role: "Dipl├┤m├®e DESS + Ma├«trise en gestion de projet", photo: "https://www.uqat.ca/resources/medias/etudes/temoignages/zabrina-rojas.jpg" } },
          { type: "text", bourse: "Bourse d'accueil : 25% des frais de scolarit├® major├®s couverts pour les ├®tudiants internationaux, pour 6 sessions cons├®cutives." },
        ],
      },
      {
        nom: "MGO ÔÇö Ma├«trise en Gestion des Organisations (profil recherche)",
        duree: "2 ans",
        details: "Cette ma├«trise vise ├á d├®velopper vos connaissances et vos habilet├®s en recherche, vous permettant de faire progresser des organisations et de contribuer ├á l'avancement du savoir. Innovation, entrepreneuriat, efficacit├® organisationnelle, gestion du changement, d├®veloppement r├®gional ou mondialisation des ├®changes ÔÇö la MGO enrichira votre vision de gestionnaire par de nouvelles perspectives.",
        richExpanded: [
          { type: "grid", items: ["Changement organisationnel et RH", "Climat psychologique au travail", "D├®veloppement durable (secteur minier)", "D├®veloppement local et r├®gional", "Entrepreneuriat", "├ëvaluation de la performance", "Gestion all├®g├®e (Lean management)", "Nouveaux mod├¿les d'affaires ├®lectroniques", "Syst├¿mes d'information et TI"], extra: "Champs de recherche" },
          { type: "thesis", thesisProjects: [{ author: "A. Ben Abdel Wahed", year: "2024", topic: "Facteurs de r├®tention des employ├®s ÔÇö secteur manufacturier" }, { author: "M. Labrecque-Denis", year: "2024", topic: "D├®veloppement des ├®cosyst├¿mes technocr├®atifs en r├®gions p├®riph├®riques" }, { author: "M-P. C├┤t├®", year: "2023", topic: "Responsabilit├® sociale et identification sociale des employ├®s" }, { author: "K. Gareau", year: "2023", topic: "Fid├®lisation des donateurs ÔÇö mod├®lisation du parcours philanthropique" }, { author: "├ë. Alain", year: "2020", topic: "Mod├¿le int├®grant cr├®ativit├® et analyse fonctionnelle en innovation" }], extra: "Th├¿ses r├®centes" },
          { type: "text", testimonial: { quote: "├ëtudier ├á la MGO a vraiment ├®t├® l'une des meilleures d├®cisions de ma vie. L'encadrement attentif et bienveillant des professeurs a vraiment fait la diff├®rence.", name: "Larissa Fomena Neuchy", role: "Finissante MGO, ├®tudiante internationale", photo: "https://www.uqat.ca/resources/medias/etudes/temoignages/llarissa-fomena-neuchy.jpg" } },
          { type: "text", bourse: "Bourse d'accueil : 50% des frais de scolarit├® major├®s couverts pour les ├®tudiants internationaux, pour 4 sessions cons├®cutives." },
        ],
      },
    ],
    eligibilite: "D├®tenir le dipl├┤me de Licence ou de Master d'ESPIMA Business School (├®tudes ├®quivalentes au grade de bachelier au Qu├®bec) ou l'├®quivalent ; Avoir r├®ussi les cours avec une moyenne ├®quivalente ├á un minimum de 11 sur 20 ; Avoir r├®ussi le programme de pr├®paration pour la ma├«trise en gestion de projet pr├®par├® par ESPIMA Business School ; Satisfaire aux conditions d'admission en vigueur du programme MGP de l'UQAT ; Poss├®der une connaissance ad├®quate du fran├ºais et une compr├®hension suffisante de l'anglais.",
    avantages: [
      "Dipl├┤me de Ma├«trise d'une universit├® publique canadienne reconnu ├á l'├®chelle internationale",
      "Ma├«trise en gestion de projet particuli├¿rement reconnue en entreprise",
      "Frais de scolarit├® identiques ├á ceux des ├®tudiants canadiens (tarifs r├®duits)",
      "R├®gion dynamique avec plusieurs opportunit├®s d'emplois",
      "Possibilit├® de jobs ├®tudiants ├á temps plein sur le campus et ├á temps partiel en dehors",
      "Logement disponible sur le campus",
      "Visa ├®tudiant facilit├® gr├óce ├á la convention inter-universitaire EBSÔÇôUQAT",
      "Possibilit├® de r├®sidence permanente via le Programme de l'exp├®rience qu├®b├®coise (PEQ)",
      "Bourses d'accueil couvrant 25% des frais de scolarit├® major├®s (├®tudiants internationaux)",
    ],
    debouches: [
      "Gestionnaire de projets international (PMP-ready)",
      "Directeur de programme / PMO",
      "Consultant en management strat├®gique",
      "Chef de projet IT / Transformation digitale",
      "Analyste-chercheur en gestion des organisations",
      "Entrepreneur / Fondateur de startup",
    ],
    keyStats: [
      { label: "Programmes", value: "100+" },
      { label: "Chaires", value: "14" },
      { label: "├ëtudiants", value: "3 000+" },
      { label: "Campus", value: "3" },
    ],
    pricing: [
      { label: "├ëtudiants internationaux", amount: "~7 500", period: "Ôé¼/an", note: "Bourse d'accueil : -25%" },
      { label: "Frais identiques", amount: "M├¬mes frais", period: "que les Qu├®b├®cois", note: "Avantage exclusif EBS-UQAT", featured: true },
      { label: "Bourse d'accueil", amount: "25ÔÇô50", period: "%", note: "Selon le programme choisi" },
    ],
    imageSection: { src: "/images/ebs-tn/img-uqat.png", caption: "Abitibi-T├®miscamingue, Qu├®bec" },
    professors: [
      { nom: "Louis Belisle", img: "https://www.uqat.ca/resources/medias/professeurs/professeur-louis-belisle.jpg" },
      { nom: "J├®r├┤me Desch├¬nes", img: "https://www.uqat.ca/resources/medias/professeurs/professeur-jerome-deschenes.jpg" },
      { nom: "Augustin ├ëpenda", img: "https://www.uqat.ca/resources/medias/professeurs/professeur-augustin-ependa.jpg" },
      { nom: "Julie-Andr├®e Girard", img: "https://www.uqat.ca/resources/medias/professeurs/profeseure-julie-andree-girard.jpg" },
      { nom: "Oscar Labra", img: "https://www.uqat.ca/resources/medias/professeurs/professeur-oscar-labra.jpg" },
      { nom: "Ahmed Marhfor", img: "https://www.uqat.ca/resources/medias/professeurs/professeur-ahmed-marhfor.jpg" },
      { nom: "Wassila Merkouche", img: "https://www.uqat.ca/resources/medias/professeurs/professeure-wassila-merkouche.jpg" },
      { nom: "Yasmine Mohamed", img: "https://www.uqat.ca/resources/medias/professeurs/professeure-yasmine-mohamed.jpg" },
      { nom: "Doina Muresanu", img: "https://www.uqat.ca/resources/medias/professeurs/professeure-doina-muresanu.jpg" },
      { nom: "Mycalle Trudel", img: "https://www.uqat.ca/resources/medias/professeurs/professeure-doina-muresanu.jpg" },
    ],
    testimonials: [
      { quote: "J'ai pu devenir directrice g├®n├®rale d'une entreprise du secteur h├┤telier gr├óce au DESS en gestion de projet qui m'a donn├® toutes les comp├®tences n├®cessaires.", name: "Zabrina Rojas", role: "Dipl├┤m├®e DESS + Ma├«trise en gestion de projet", photo: "https://www.uqat.ca/resources/medias/etudes/temoignages/zabrina-rojas.jpg", programKey: "MGP" },
      { quote: "├ëtudier ├á la MGO a vraiment ├®t├® l'une des meilleures d├®cisions de ma vie. L'encadrement attentif et bienveillant des professeurs a vraiment fait la diff├®rence.", name: "Larissa Fomena Neuchy", role: "Finissante MGO, ├®tudiante internationale", photo: "https://www.uqat.ca/resources/medias/etudes/temoignages/llarissa-fomena-neuchy.jpg", programKey: "MGO" },
    ],
    residencyBadge: { text: "R├®sidence permanente possible via le PEQ", sub: "Programme de l'exp├®rience qu├®b├®coise" },
  },

  "em-normandie": {
    slug: "em-normandie",
    name: "EM Normandie",
    country: "­ƒç½­ƒçÀ France",
    countryCode: "FR",
    logo: "/images/ebs-tn/EM_Normandie-Logo.png",
    type: "Grande ├ëcole de Commerce ÔÇö Triple accr├®dit├®e EQUIS ┬À AACSB ┬À AMBA",
    presentation: "150 ans d'innovations et de conqu├¬tes ont permis ├á l'EM Normandie de s'imposer comme l'une des meilleures Business Schools mondiales. Triple accr├®dit├®e EQUIS, AACSB et AMBA ÔÇö seulement 1% des ├®coles de commerce dans le monde d├®tiennent cette double accr├®ditation. Class├®e 18├¿me meilleure ├®cole de commerce en France (Le Figaro ├ëtudiant). Elle compte aujourd'hui plus de 5 800 apprenants r├®partis sur 6 campus : Caen, Le Havre, Paris, Duba├», Dublin et Oxford.",
    programmes: [
      {
        nom: "Bachelor in Management",
        duree: "1 an (L3)",
        details: "Acc├¿s apr├¿s avoir effectu├® les 2 premi├¿res ann├®es ├á EBS. Formation en management, marketing et commerce international.",
      },
      {
        nom: "PGE ÔÇö Programme Grande ├ëcole (Grade de Master)",
        duree: "2 ans",
        details: "Acc├¿s apr├¿s avoir obtenu la Licence ├á EBS. Programme vis├® Bac+5, grade de Master reconnu par l'├ëtat fran├ºais. Sp├®cialisations : Management International ┬À Digital Marketing ┬À Finance ┬À Entrepreneuriat ┬À Supply Chain.",
      },
      {
        nom: "MSc ÔÇö Master of Science (M1 ou M2)",
        duree: "1 ou 2 ans",
        details: "Inscription en M1 apr├¿s la Licence EBS, ou en M2 apr├¿s le M1 ├á EBS. 10 sp├®cialisations disponibles : Financial Data Management, International Events, Logistics & Port, Luxury & Lifestyle, FinTech ├á Oxford, Digital Marketing ├á Dublin, etc.",
      },
    ],
    eligibilite: "├ètre inscrit ├á EBS. Avoir 12 de moyenne sur les ann├®es pr├®c├®dant celle de l'inscription. Avoir un bon niveau d'anglais et de fran├ºais. ├ëtude de dossier et entretien de s├®lection. Score TOEIC 750 minimum (fili├¿re anglophone) ou TOEIC 600 (fili├¿re francophone).",
    avantages: [
      "Triple accr├®ditation EQUIS + AACSB + AMBA ÔÇö top 1% mondial des ├®coles de commerce",
      "6 campus internationaux : Caen, Le Havre, Paris, Duba├», Dublin, Oxford",
      "R├®seau de 5 000+ entreprises partenaires, 70 000+ offres de stages/emplois",
      "1 000+ ├®tudiants internationaux de 65 nationalit├®s chaque ann├®e",
      "105 professeurs permanents, 100% titulaires d'un doctorat",
      "800+ intervenants professionnels de haut niveau (KPMG, Nestl├®, Orange...)",
      "1 600 alternants par an, CFA int├®gr├®, 1 500 offres d'alternance",
      "400+ ├®v├®nements de recrutement par an",
      "Visa ├®tudiant France facilit├® par la convention EBS ÔÇö EM Normandie",
      "Dipl├┤me vis├® par l'├ëtat fran├ºais, grade de Master reconnu",
    ],
    debouches: [
      "Manager international / Chef de projet",
      "Directeur marketing / CMO",
      "Analyste financier / Banquier (M&A, FinTech)",
      "Consultant en strat├®gie (Big 4)",
      "Entrepreneur / Fondateur de startup",
      "Supply Chain Manager",
      "Expert Luxury & Lifestyle Management",
      "Directeur g├®n├®ral (trajectoire 7-10 ans)",
    ],
    keyStats: [
      { label: "├ëtudiants", value: "5 800" },
      { label: "Campus", value: "6" },
      { label: "Nationalit├®s", value: "65+" },
      { label: "Entreprises", value: "5 000+" },
    ],
    pricing: [
      { label: "MIM ÔÇö Programme Grande ├ëcole", amount: "~10 500", period: "Ôé¼/an", note: "Master vis├® par l'├ëtat fran├ºais" },
      { label: "MSc ÔÇö Master of Science", amount: "~13 000", period: "Ôé¼/an", note: "10 sp├®cialisations disponibles" },
      { label: "MS ÔÇö Mast├¿re Sp├®cialis├®", amount: "~9 500", period: "Ôé¼/an", note: "Bac+6, label CGE" },
    ],
    imageSection: { src: "/images/ebs-tn/img-page-em-presentiel.webp" },
    accreditations: [
      { label: "AACSB", description: "La plus prestigieuse accr├®ditation mondiale en management ÔÇö seules 5% des ├®coles de commerce la d├®tiennent" },
      { label: "EQUIS", description: "Label d'excellence acad├®mique et internationale d├®cern├® par l'EFMD" },
      { label: "AMBA", description: "Accr├®ditation de r├®f├®rence pour les programmes MBA et post-graduate" },
    ],
    accreditationImage: "/images/ebs-tn/Calque-2-2.png",
    extraSections: [
      {
        title: "10 MSc ÔÇö Masters of Science",
        body: "---LISTE\n1. MSc Financial Data Management ÔÇö Paris (+Le Havre)\n2. MSc International Events Management ÔÇö Paris (+Le Havre)\n3. MSc International Logistics & Port Management ÔÇö Le Havre\n4. MSc International Marketing & Business Development ÔÇö Caen (+Le Havre)\n5. MSc Marketing & Digital in Luxury & Lifestyle ÔÇö Paris (+Le Havre)\n6. MSc Banking, Finance & FinTech ÔÇö Oxford (+Le Havre)\n7. MSc Supply Chain Management ÔÇö Le Havre\n8. MSc Sustainable Business & Strategy ÔÇö Paris (+Le Havre)\n9. MSc Digital Strategy & Innovation ÔÇö Paris (+Le Havre)\n10. MSc Digital Marketing & Sales ÔÇö Dublin (+Le Havre)\n\nAcc├¿s en 1├¿re ann├®e (2 ans) ou 2├¿me ann├®e (1 an) selon le profil. Certaines sp├®cialisations sont disponibles en alternance.\n\n[https://www.em-normandie.com/fr/mastere-specialise-master-of-science|Voir tous les MSc sur le site EM Normandie ÔåÆ]"
      },
      {
        title: "Qu'est-ce qu'une Grande ├ëcole de Management ?",
        body: "Une Grande ├ëcole forme des managers responsables, agiles, capables d'exercer leurs comp├®tences dans une multitude de domaines : entrepreneuriat, logistique, Supply Chain, gestion des ressources humaines, commerce international, luxe, intelligence artificielle, marketingÔÇª\n\nUn haut niveau acad├®mique, des connexions ├®troites avec le monde de l'entreprise, une forte ouverture internationale, un accompagnement personnalis├® et des investissements permanents en faveur de l'innovation p├®dagogique sont les principaux crit├¿res d'excellence attendus au sein d'une Grande ├ëcole de management.\n\nLes Grandes ├ëcoles reconnues au niveau mondial, comme l'EM Normandie, font l'objet d'accr├®ditations internationales comme AACSB et EQUIS (seulement 1% des ├®coles de commerce dans le monde ont cette double accr├®ditation)."
      }
    ],
  },

  psb: {
    slug: "psb",
    name: "PSB Paris School of Business",
    country: "­ƒç½­ƒçÀ France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/psb.webp",
    type: "Grande ├ëcole de Commerce ÔÇö Triple accr├®dit├®e AACSB ┬À EQUIS ┬À AMBA",
    presentation: "Paris School of Business est une Grande ├ëcole de commerce triplement accr├®dit├®e EQUIS, AACSB et AMBA. Membre de la Conf├®rence des Grandes ├ëcoles, elle est class├®e dans le top 3 des ├®coles de commerce post-bac ├á Paris et dans le top 20 en France (Le Figaro ├ëtudiant). Fond├®e en 2015, elle compte 4 000+ ├®tudiants, 20 000+ alumni et un campus moderne au c┼ôur du 5├¿me arrondissement de Paris.",
    programmes: [
      { nom: "Bachelor in Management", duree: "1 an (L3)", details: "Acc├¿s apr├¿s avoir effectu├® les 2 premi├¿res ann├®es ├á EBS. Bachelor Management International ou Bachelor Tech for Management." },
      { nom: "PGE ÔÇö Programme Grande ├ëcole (Grade de Master)", duree: "2 ans", details: "Acc├¿s apr├¿s avoir obtenu la Licence ├á EBS. Cursus en 5 ans vis├® Bac+5. Sp├®cialisations en Finance, Management, Marketing & Data, Commerce & Entrepreneuriat." },
      { nom: "MSc ÔÇö Master of Science (M1 ou M2)", duree: "1 ou 2 ans", details: "Inscription en M1 apr├¿s la Licence EBS, ou en M2 apr├¿s le M1 ├á EBS. 10+ MSc : AI & Cybersecurity, International Finance, Luxury & Fashion, Supply Chain, Data Management, etc." },
    ],
    eligibilite: "├ètre inscrit ├á EBS. Avoir 12 de moyenne sur les ann├®es pr├®c├®dant celle de l'inscription. Avoir un bon niveau d'anglais et de fran├ºais. ├ëtude de dossier et entretien de s├®lection.",
    avantages: [
      "Triple accr├®ditation AACSB + EQUIS + AMBA ÔÇö top 1% mondial",
      "Class├®e dans le top 3 des ├®coles post-bac ├á Paris",
      "Campus moderne au c┼ôur de Paris (5├¿me arrondissement)",
      "4 000+ ├®tudiants, 20 000+ alumni",
      "R├®seau international d'universit├®s partenaires",
      "Alternance possible dans plusieurs programmes",
      "Visa ├®tudiant France facilit├® via convention EBS",
      "Membre de la Conf├®rence des Grandes ├ëcoles (CGE)",
    ],
    debouches: [
      "Manager international / Business Developer",
      "Analyste financier / Contr├┤leur de gestion",
      "Digital Marketing Manager",
      "Consultant en strat├®gie",
      "Chef de produit / Product Manager",
      "Responsable Supply Chain",
      "Entrepreneur / Fondateur de startup",
      "Data Analyst / Business Intelligence",
    ],
    keyStats: [
      { label: "├ëtudiants", value: "4 000+" },
      { label: "Alumni", value: "20 000+" },
      { label: "Campus", value: "Paris" },
      { label: "Accr├®ditations", value: "3" },
    ],
    accreditations: [
      { label: "AACSB", description: "Accr├®ditation mondiale de r├®f├®rence en management", logo: "/images/partenaires-academiques/AACSB-logo-accredited-color-PMS_Website-1024x346.png" },
      { label: "EQUIS", description: "Label d'excellence acad├®mique et internationale de l'EFMD", logo: "/images/partenaires-academiques/EFMD-Global-EQUIS-Accredited-Pantonelm.png" },
      { label: "AMBA", description: "Accr├®ditation de r├®f├®rence pour les programmes MBA", logo: "/images/partenaires-academiques/amba-logo-association-of-mba-accredited-1244274_copie-removebg-preview.png" },
    ],
  },
  idrac: {
    slug: "idrac",
    name: "IDRAC Business School",
    country: "­ƒç½­ƒçÀ France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/idrac.webp",
    type: "├ëcole sup├®rieure de commerce et de management ÔÇö 6 campus en France",
    presentation: "IDRAC Business School est une ├®cole de management pr├®sente sur 6 campus en France (Lyon, Bordeaux, Toulouse, Montpellier, Nantes, Paris). Elle propose des formations Bachelor et Master en management, marketing et commerce international, avec une forte orientation professionnalisante.",
    programmes: [
      { nom: "Master Management des Entreprises", duree: "2 ans", details: "Sp├®cialisations : Commerce International ┬À Marketing & Communication ┬À Finance." },
      { nom: "Bachelor Commerce International (3├¿me ann├®e)", duree: "1 an", details: "Acc├¿s depuis Licence 2 EBS. En entreprise." },
    ],
    eligibilite: "Acc├¿s depuis les Licences EBS Management, Marketing et Finance. Convention EBS ÔÇö IDRAC pour reconnaissance des cr├®dits.",
    avantages: [
      "6 campus en France ÔÇö choisir la ville souhait├®e",
      "Forte insertion professionnelle : 90%+ d'emplois ├á 6 mois",
      "R├®seau d'entreprises partenaires dans toutes les r├®gions fran├ºaises",
      "Visa ├®tudiant France facilit├®",
      "Frais de scolarit├® accessibles compar├®s aux grandes ├®coles parisiennes",
    ],
    debouches: [
      "Responsable commercial / Manager des ventes",
      "Charg├® de marketing et communication",
      "Responsable achats / Supply Chain",
      "Chef de projet international",
      "Responsable RH",
    ],
  },

  ifag: {
    slug: "ifag",
    name: "IFAG ├ëcole de Management",
    country: "­ƒç½­ƒçÀ France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/ifag.webp",
    type: "├ëcole de management ÔÇö Depuis 1968 ÔÇö Groupe FIGS Education",
    presentation: "L'IFAG (Institut de Formation aux Affaires et ├á la Gestion) est une ├®cole de management fond├®e en 1968. Membre du Groupe FIGS Education, elle forme des managers op├®rationnels capables d'├®voluer rapidement dans des fonctions de direction.",
    programmes: [
      { nom: "Master Management G├®n├®ral", duree: "2 ans", details: "Formation au management op├®rationnel avec forte composante pratique." },
      { nom: "MBA Management & Leadership", duree: "1 an (Bac+5)", details: "Pour profils exp├®riment├®s. Acc├¿s depuis Master EBS." },
    ],
    eligibilite: "Acc├¿s depuis les Licences EBS (Management, Marketing, Finance). Convention partenariale EBS ÔÇö IFAG.",
    avantages: [
      "55+ ans d'exp├®rience en formation management",
      "R├®seau d'anciens ├®tudiants dense dans toute la France",
      "Approche tr├¿s orient├®e entreprise et management terrain",
      "Visa ├®tudiant France facilit├®",
      "Campus dans les principales m├®tropoles fran├ºaises",
    ],
    debouches: [
      "Manager op├®rationnel / Directeur de centre de profit",
      "Responsable RH / Directeur des ressources humaines",
      "Directeur commercial / Business Unit Manager",
      "Entrepreneur / Repreneur d'entreprise",
    ],
  },

  igefi: {
    slug: "igefi",
    name: "IGEFI",
    country: "­ƒç½­ƒçÀ France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/igefi.webp",
    type: "├ëcole des m├®tiers de la finance d'entreprise et de l'expertise comptable",
    presentation: "IGEFI est l'├ëcole des m├®tiers de la finance d'entreprise et de l'expertise comptable. Sp├®cialis├®e dans les fili├¿res finance, comptabilit├® et contr├┤le de gestion, elle forme des experts financiers directement op├®rationnels.",
    programmes: [
      { nom: "Master Finance d'entreprise & Expertise Comptable", duree: "2 ans", details: "Pr├®paration au DSCG (Dipl├┤me Sup├®rieur de Comptabilit├® et de Gestion) possible." },
      { nom: "Mast├¿re Contr├┤le de Gestion & Finance", duree: "1 an", details: "Contr├┤le de gestion, reporting, analyse financi├¿re avanc├®e." },
    ],
    eligibilite: "Acc├¿s privil├®gi├® depuis la Licence Finance EBS et le Master Ing├®nierie Financi├¿re EBS. Convention directe EBS ÔÇö IGEFI.",
    avantages: [
      "Sp├®cialisation unique en finance d'entreprise et expertise comptable",
      "Passerelle vers les dipl├┤mes comptables reconnus (DCG, DSCG)",
      "R├®seau de cabinets d'expertise comptable partenaires (Big4 et ind├®pendants)",
      "Forte demande sur le march├® de l'emploi : p├®nurie de profils qualifi├®s",
      "Visa ├®tudiant France simplifi├® via convention EBS",
    ],
    debouches: [
      "Expert-comptable / Commissaire aux comptes (trajectoire)",
      "Contr├┤leur de gestion",
      "Directeur financier (CFO)",
      "Auditeur senior",
      "Analyste M&A / Corporate Finance",
    ],
  },

  eklore: {
    slug: "eklore",
    name: "├ëklore-ed",
    country: "­ƒç½­ƒçÀ France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/eklore.webp",
    type: "Grande ├ëcole de Commerce ÔÇö Accr├®dit├®e EFMD ┬À Membre CGE",
    presentation: "├ëklore-ed, anciennement ESC Pau BS, est une Grande ├ëcole de commerce accr├®dit├®e EFMD et membre de la Conf├®rence des Grandes ├ëcoles. Elle propose des dipl├┤mes allant du Bac au Bac+5, en formation initiale et en alternance, tous reconnus par l'├ëtat, dans les domaines du management, de la gestion d'entreprises, du commerce et du marketing sportif. Avec ses 3 campus (Pau, Grenoble, Saint-Denis), 2 600+ ├®tudiants et 21 000+ dipl├┤m├®s, ├®klore-ed allie excellence acad├®mique et bien-├¬tre ├®tudiant.",
    programmes: [
      { nom: "Bachelor in Management", duree: "1 an (L3)", details: "Acc├¿s apr├¿s avoir effectu├® les 2 premi├¿res ann├®es ├á EBS. Formation reconnue par l'├ëtat, disponible en initial ou alternance." },
      { nom: "PGE ÔÇö Programme Grande ├ëcole (Grade de Master)", duree: "2 ans", details: "Acc├¿s apr├¿s avoir obtenu la Licence ├á EBS. Dipl├┤me vis├® Bac+5, grade de Master. Sp├®cialisations en management, gestion d'entreprises, commerce." },
      { nom: "Mast├¿re Manager du D├®veloppement Commercial", duree: "2 ans", details: "Acc├¿s en M1 apr├¿s la Licence EBS. Formation professionnalisante en d├®veloppement commercial et management des ventes." },
    ],
    eligibilite: "├ètre inscrit ├á EBS. Avoir 12 de moyenne sur les ann├®es pr├®c├®dant celle de l'inscription. Avoir un bon niveau d'anglais et de fran├ºais. ├ëtude de dossier et entretien de s├®lection.",
    avantages: [
      "Accr├®dit├®e EFMD ÔÇö reconnaissance acad├®mique internationale",
      "Membre de la Conf├®rence des Grandes ├ëcoles (CGE)",
      "3 campus en France : Pau, Grenoble, Saint-Denis",
      "Dipl├┤mes reconnus par l'├ëtat du Bac au Bac+5",
      "Formations en initial et en alternance",
      "2 600+ ├®tudiants, 21 000+ dipl├┤m├®s",
      "P├®dagogie centr├®e sur le bien-├¬tre ├®tudiant",
      "Visa ├®tudiant France facilit├® via convention EBS",
      "Sp├®cialisation unique en marketing sportif",
    ],
    debouches: [
      "Manager commercial / Business Developer",
      "Responsable marketing et communication",
      "Chef de projet / Product Manager",
      "Manager du d├®veloppement commercial",
      "Entrepreneur / Cr├®ateur d'entreprise",
      "Responsable marketing sportif",
    ],
  },

  epitech: {
    slug: "epitech",
    name: "Epitech",
    country: "­ƒç½­ƒçÀ France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/epitech.webp",
    type: "Grande ├ëcole Informatique ÔÇö Expert Tech & Innovation",
    presentation: "Epitech est l'├ëcole pour l'informatique et les nouvelles technologies, fond├®e en 1999. Reconnue comme l'une des meilleures ├®coles d'informatique en France et en Europe, elle forme des experts tech capables d'innover. Epitech est pr├®sente sur 15 campus en France et 5 campus ├á l'international.",
    programmes: [
      { nom: "Master of Science Informatique (Expert en Syst├¿mes d'Information)", duree: "1 an (4├¿me ou 5├¿me ann├®e)", details: "Sp├®cialisations : IA ┬À Cybers├®curit├® ┬À Data ┬À Cloud ┬À D├®veloppement." },
      { nom: "Global Bachelor of Technology (ann├®e de mobilit├®)", duree: "1 an", details: "Mobilit├® internationale dans l'un des campus Epitech ├á l'├®tranger." },
    ],
    eligibilite: "Acc├¿s depuis la Licence Informatique (IA ou Cybers├®curit├®) EBS. Convention EBS ÔÇö Epitech pour admission simplifi├®e en Bac+4/5.",
    avantages: [
      "Dipl├┤me reconnu Bac+5 par l'├ëtat fran├ºais ÔÇö Grade de Master",
      "M├®thode p├®dagogique par projets (pas de cours magistraux) ÔÇö Learning by doing",
      "15 campus France + 5 international (Barcelone, Berlin, Bruxelles, Montr├®al, Porto...)",
      "R├®seau alumni tr├¿s actif dans l'industrie tech",
      "Taux d'insertion professionnelle > 95% dans les 6 mois",
      "Visa ├®tudiant France facilit├®",
    ],
    debouches: [
      "D├®veloppeur fullstack / Ing├®nieur logiciel",
      "Architecte cloud / DevOps Engineer",
      "Data Scientist / ML Engineer",
      "Expert cybers├®curit├® / Pentester",
      "CTO / Fondateur de startup tech",
    ],
  },

  epsi: {
    slug: "epsi",
    name: "EPSI",
    country: "­ƒç½­ƒçÀ France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/epsi.webp",
    type: "├ëcole d'ing├®nierie informatique ÔÇö Titre RNCP Bac+5",
    presentation: "EPSI est une ├®cole d'ing├®nierie informatique proposant des formations de Bac+2 ├á Bac+5 dans les domaines du d├®veloppement, de la cybers├®curit├®, de l'IA et de la gestion de projets IT. Forte d'une p├®dagogie pratique et de partenariats avec les grandes entreprises tech, EPSI garantit une insertion professionnelle rapide.",
    programmes: [
      { nom: "Expert Informatique & Syst├¿mes d'Information (Bac+5)", duree: "1ÔÇô2 ans", details: "Sp├®cialisations : D├®veloppement ┬À Cybers├®curit├® ┬À Data & IA ┬À Cloud." },
      { nom: "Concepteur D├®veloppeur d'Applications (Bac+3)", duree: "1 an", details: "Acc├¿s depuis Licence 2 EBS Informatique. Titre RNCP niveau 6." },
    ],
    eligibilite: "Acc├¿s depuis la Licence Informatique EBS (IA ou Cybers├®curit├®). Convention EBS ÔÇö EPSI. Int├®gration en Bac+4 (4├¿me ann├®e EPSI).",
    avantages: [
      "Titre RNCP Bac+5 reconnu par l'├ëtat ÔÇö Grade de Master",
      "Formations disponibles en apprentissage (entreprise int├®gr├®e)",
      "Partenariats avec Capgemini, Atos, Orange, SNCF, BNP...",
      "6 campus France ÔÇö choisir la ville souhait├®e",
      "Visa ├®tudiant France facilit├® via convention EBS",
      "Insertion pro > 92% dans les 3 mois apr├¿s dipl├┤me",
    ],
    debouches: [
      "Ing├®nieur d├®veloppement logiciel",
      "Expert cybers├®curit├®",
      "Architecte syst├¿mes et r├®seaux",
      "Data Analyst / Data Engineer",
      "Chef de projet IT",
    ],
  },

  excelia: {
    slug: "excelia",
    name: "Excelia Business School",
    country: "­ƒç½­ƒçÀ France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/excelia.webp",
    type: "Grande ├ëcole de Commerce ÔÇö Accr├®dit├®e AACSB et EPAS (EFMD)",
    presentation: "Excelia Business School est une grande ├®cole de commerce accr├®dit├®e AACSB et EPAS (EFMD), implant├®e ├á La Rochelle et Tours. Reconnue pour son excellence acad├®mique et son ouverture internationale, elle propose des programmes en management, tourisme, digital et supply chain avec une forte dimension RSE.",
    programmes: [
      { nom: "Master Grande ├ëcole", duree: "2 ans", details: "Sp├®cialisations : Digital Business ┬À Supply Chain ┬À Finance ┬À RSE & Durabilit├®." },
      { nom: "MSc International Business", duree: "1 an", details: "En anglais. Pour titulaires d'un Bac+3/4. Acc├¿s depuis Licence EBS." },
      { nom: "Bachelor Business Administration (3├¿me ann├®e)", duree: "1 an", details: "Acc├¿s depuis Licence 2 EBS. Programme en anglais possible." },
    ],
    eligibilite: "Acc├¿s depuis les Licences EBS Management, Marketing et Finance. Convention EBS ÔÇö Excelia pour admission facilit├®e.",
    avantages: [
      "Double accr├®ditation AACSB + EPAS ÔÇö reconnaissance internationale",
      "Campus ├á La Rochelle : qualit├® de vie exceptionnelle, ville dynamique",
      "Forte dimension RSE et durabilit├® ÔÇö en phase avec enjeux ESG",
      "R├®seau international : 80+ partenaires universitaires dans le monde",
      "Visa ├®tudiant France facilit├®",
    ],
    debouches: [
      "Supply Chain Manager / Responsable logistique",
      "Responsable RSE & D├®veloppement Durable",
      "Digital Project Manager",
      "Manager international / Export Manager",
      "Consultant en transformation durable",
    ],
  },

  figs: {
    slug: "figs",
    name: "FIGS Education",
    country: "­ƒç½­ƒçÀ France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/figs (2).webp",
    type: "Groupe d'enseignement sup├®rieur ÔÇö R├®seau d'├®coles sp├®cialis├®es",
    presentation: "FIGS Education est un groupe d'enseignement sup├®rieur regroupant plusieurs ├®coles sp├®cialis├®es en France, dont IFAG, ├ëklore et d'autres ├®tablissements. Fort d'une exp├®rience de plus de 50 ans dans la formation sup├®rieure, FIGS Education couvre un large spectre de domaines : management, informatique, communication et finance.",
    programmes: [
      { nom: "Ensemble des programmes des ├®coles du r├®seau FIGS", duree: "Variable", details: "IFAG (Management) ┬À ├ëklore (Management Innovation) ┬À autres ├®coles FIGS selon disponibilit├®." },
    ],
    eligibilite: "Partenariat global EBS ÔÇö FIGS Education donnant acc├¿s ├á l'ensemble des ├®coles du r├®seau FIGS selon le parcours EBS de l'├®tudiant.",
    avantages: [
      "Acc├¿s ├á un r├®seau d'├®coles compl├®mentaires via un seul partenariat",
      "Large couverture g├®ographique en France",
      "Offres de formation diversifi├®es : management, communication, finance, tech",
      "Visa ├®tudiant France facilit├® via convention EBS ÔÇö FIGS",
    ],
    debouches: [
      "Selon l'├®cole et la sp├®cialisation choisies au sein du r├®seau FIGS Education",
    ],
  },

  "link-university": {
    slug: "link-university",
    name: "Link University",
    country: "­ƒç«­ƒç╣ Italie",
    countryCode: "IT",
    logo: "/images/partenaires-academiques/udl.webp",
    type: "Universit├® priv├®e italienne reconnue par l'├ëtat italien ÔÇö Campus Rome",
    presentation: "L'Universit├á degli Studi Link (Link University) est une universit├® priv├®e italienne implant├®e ├á Rome. Reconnue par le Minist├¿re de l'Enseignement Sup├®rieur italien (MIUR), elle propose des programmes en management, sciences humaines, droit, communication et technologies. Partenaire strat├®gique d'EBS, Link University offre un acc├¿s ├á l'Europe du Sud d├¿s la premi├¿re ann├®e de Licence.",
    programmes: [
      { nom: "Bachelor en Sciences de l'Entreprise (2├¿me ann├®e)", duree: "2 ans (L2+L3)", details: "Acc├¿s direct d├¿s la 1├¿re ann├®e de Licence EBS. Cours en anglais et en italien disponibles." },
      { nom: "MSc Human Resources Management", duree: "2 ans (Bac+5)", details: "Acc├¿s depuis Licence compl├¿te EBS en Management ou Marketing." },
      { nom: "MSc Project Planning and Management", duree: "2 ans (Bac+5)", details: "Acc├¿s depuis Licence EBS (Management, Informatique). Certification PMI-aligned." },
    ],
    eligibilite: "Acc├¿s privil├®gi├® depuis toutes les Licences EBS selon le niveau valid├®. Convention de partenariat EBSÔÇôLink University pour facilitation des d├®marches d'admission et de visa.",
    avantages: [
      "Acc├¿s possible d├¿s la 1├¿re ann├®e de Licence EBS ÔåÆ int├®gration en Bachelor 2 ├á Rome",
      "Campus moderne au c┼ôur de Rome ÔÇö capitale europ├®enne de culture et d'opportunit├®s",
      "Universit├® reconnue par l'├ëtat italien (MIUR) ÔÇö dipl├┤me homologu├® EU",
      "Cours disponibles en anglais ÔÇö pas de niveau d'italien requis ├á l'entr├®e",
      "Visa ├®tudiant Italie (Schengen) ÔÇö acc├¿s ├á toute l'Europe",
      "Possibilit├® de travailler en Italie pendant les ├®tudes (permis ├®tudiant)",
      "R├®seau Erasmus+ et mobilit├® dans toutes les universit├®s europ├®ennes partenaires",
    ],
    debouches: [
      "Responsable RH / HR Business Partner",
      "Chef de projet / Project Manager certifi├®",
      "Consultant en management international",
      "Charg├® de relations internationales",
      "Entrepreneur franco-italien ou euro-m├®diterran├®en",
    ],
  },

  supdecom: {
    slug: "supdecom",
    name: "Sup'de Com",
    country: "­ƒç½­ƒçÀ France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/supdecom.webp",
    type: "├ëcole de la communication et des m├®dias ÔÇö Bac+3 ├á Bac+5",
    presentation: "Sup'de Com est l'├®cole de tous les m├®tiers de la communication. Elle forme des professionnels de la communication, du marketing, des relations publiques et des m├®dias digitaux. Forte d'une p├®dagogie pratique et de partenariats avec des agences et des marques, Sup'de Com garantit une excellente insertion dans les m├®tiers de la communication.",
    programmes: [
      { nom: "Master Communication & Marketing Int├®gr├®", duree: "2 ans", details: "Communication corporate, relations presse, brand content, social media." },
      { nom: "MSc Digital Marketing & Social Media", duree: "1 an", details: "Acc├¿s depuis Licence Marketing EBS. Sp├®cialisation digital et influence." },
      { nom: "Bachelor Communication (3├¿me ann├®e)", duree: "1 an", details: "Acc├¿s depuis Licence 2 EBS Marketing." },
    ],
    eligibilite: "Acc├¿s depuis la Licence Marketing EBS. Passerelle naturelle entre le marketing digital (EBS) et la communication professionnelle (Sup'de Com). Convention EBS ÔÇö Sup'de Com.",
    avantages: [
      "Sp├®cialisation unique dans tous les m├®tiers de la communication",
      "6 campus France dans les principales m├®tropoles",
      "R├®seau de partenaires agences de communication (Havas, Publicis, TBWA...)",
      "Projets r├®els avec des marques partenaires d├¿s la 1├¿re ann├®e",
      "Visa ├®tudiant France facilit├® via convention EBS",
    ],
    debouches: [
      "Responsable communication",
      "Community Manager / Social Media Manager",
      "Charg├® de relations presse",
      "Brand Content Manager",
      "Directeur de la communication (trajectoire 5-7 ans)",
    ],
  },

  gutech: {
    slug: "gutech",
    name: "GUtech",
    country: "­ƒç┤­ƒç▓ Oman",
    countryCode: "OM",
    logo: "/images/partenaires-academiques/gutech.webp",
    type: "Universit├® germanophone en partenariat avec RWTH Aachen (Allemagne) ÔÇö English-taught programs",
    presentation: "GUtech (German University of Technology in Oman) est une universit├® fond├®e en partenariat avec la RWTH Aachen University, l'une des meilleures universit├®s techniques au monde. Implant├®e ├á Muscat (Oman), GUtech propose des programmes en anglais dans les domaines de l'informatique, de l'ing├®nierie, de l'architecture et du management.",
    programmes: [
      { nom: "MSc Information Technology", duree: "2 ans", details: "Sp├®cialisations : Intelligent Systems ┬À Cybersecurity ┬À Data Science. Cours en anglais." },
      { nom: "MSc Applied Geosciences", duree: "2 ans", details: "Pour profils scientifiques. Cours en anglais." },
      { nom: "Bachelor of Science in Management (derni├¿re ann├®e)", duree: "1 an", details: "Acc├¿s depuis Licence Management EBS. Cours en anglais." },
    ],
    eligibilite: "Acc├¿s depuis les Licences Informatique (IA et Cybers├®curit├®) et Management EBS. Partenariat EBS ÔÇö GUtech ouvrant des perspectives d'emploi dans les pays du Golfe.",
    avantages: [
      "Partenariat avec RWTH Aachen University ÔÇö prestige acad├®mique europ├®en",
      "Cours enti├¿rement en anglais ÔÇö ouverture internationale imm├®diate",
      "Implantation ├á Muscat : acc├¿s direct au march├® de l'emploi du Golfe (EAU, Qatar, Arabie Saoudite, Oman)",
      "Opportunit├®s d'emploi dans l'ing├®nierie, la tech et le management dans la r├®gion MENA",
      "Cadre de vie moderne, s├®curis├®, multiculturel",
      "R├®sidence et permis de travail accessibles apr├¿s dipl├┤me au Sultanat d'Oman",
    ],
    debouches: [
      "Ing├®nieur informatique / IT Specialist (march├® du Golfe)",
      "Data Scientist / AI Specialist (EAU, Qatar, Arabie Saoudite)",
      "Expert cybers├®curit├® (Golfe + international)",
      "Manager des op├®rations (MENA)",
      "Consultant tech (Moyen-Orient)",
    ],
  },

  redsup: {
    slug: "redsup",
    name: "RedSup Education",
    country: "­ƒç½­ƒçÀ France",
    countryCode: "FR",
    logo: "/images/partenaires-academiques/redsup.webp",
    type: "R├®seau d'enseignement sup├®rieur ÔÇö Formation et accompagnement",
    presentation: "RedSup Education est un r├®seau d'enseignement sup├®rieur proposant des formations et un accompagnement vers les grandes ├®coles et universit├®s partenaires. RedSup accompagne les ├®tudiants internationaux dans leur int├®gration en France et l'acc├¿s aux parcours acad├®miques sup├®rieurs.",
    programmes: [
      { nom: "Accompagnement vers les grandes ├®coles partenaires du r├®seau", duree: "Variable", details: "Orientation, dossier de candidature, pr├®paration aux entretiens, installation en France." },
    ],
    eligibilite: "Partenariat EBS ÔÇö RedSup pour l'accompagnement des ├®tudiants EBS dans leurs d├®marches d'int├®gration en France et l'acc├¿s aux programmes sup├®rieurs.",
    avantages: [
      "Accompagnement personnalis├® dans les d├®marches d'├®tudes en France",
      "R├®seau d'├®coles et universit├®s partenaires en France",
      "Support administratif pour le visa ├®tudiant et l'installation",
      "Aide ├á la recherche de logement ├®tudiant en France",
      "Suivi post-arriv├®e en France",
    ],
    debouches: [
      "Acc├¿s facilit├® aux grandes ├®coles et universit├®s fran├ºaises partenaires",
    ],
  },
};
