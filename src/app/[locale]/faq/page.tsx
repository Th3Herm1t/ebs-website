"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  Award,
  Banknote,
  BookOpen,
  ChevronDown,
  ClipboardList,
  Globe,
  GraduationCap,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge, CtaSection } from "@/components/shared";

const categories = [
  {
    title: "Admissions & Inscription",
    icon: ClipboardList,
    questions: [
      {
        q: "Quelles sont les conditions d'admission en Licence ?",
        a: "Pour intégrer une Licence chez EBS, vous devez être titulaire du Baccalauréat (toutes sections confondues). L'admission se fait sur étude de dossier, suivie d'un entretien de motivation. Aucun concours d'entrée n'est requis.",
      },
      {
        q: "Quand ouvrent les inscriptions pour 2026-2027 ?",
        a: "Les candidatures pour l'année universitaire 2026-2027 sont ouvertes depuis Janvier 2026. Nous recommandons de postuler avant le 30 Juin pour bénéficier du tarif Early Bird et garantir votre place dans la filière de votre choix.",
      },
      {
        q: "Puis-je m'inscrire sans le Bac ?",
        a: "Le Baccalauréat (ou un diplôme équivalent reconnu) est obligatoire pour intégrer une Licence. Pour les admissions en Master, une Licence (Bac+3) ou équivalent est requise. Contactez-nous pour étudier votre situation spécifique.",
      },
      {
        q: "Comment se déroule l'entretien de motivation ?",
        a: "L'entretien dure environ 30 minutes avec un membre de notre équipe pédagogique. Il permet d'évaluer votre projet professionnel, votre motivation et votre adéquation avec le programme choisi. Aucune connaissance technique préalable n'est exigée.",
      },
      {
        q: "Y a-t-il une limite de places par filière ?",
        a: "Oui, chaque filière a une capacité limitée pour garantir un encadrement de qualité. Nous acceptons environ 30 à 40 étudiants par promotion et par programme. Les places sont attribuées par ordre d'arrivée des dossiers complets.",
      },
    ],
  },
  {
    title: "Programmes & Pédagogie",
    icon: BookOpen,
    questions: [
      {
        q: "Quelle est la différence entre la Licence Info Standard et Info IA ?",
        a: "La Licence Informatique Standard couvre le développement logiciel classique (Java, Python, web, bases de données) et prépare aux métiers de développeur. La Licence Informatique IA ajoute une spécialisation en Intelligence Artificielle avec des certifications DeepLearning.AI, Harvard CS50 AI, IBM Watson, et des modules de Machine Learning et Deep Learning.",
      },
      {
        q: "Les cours sont-ils en français ou en anglais ?",
        a: "Les cours sont principalement en français, mais une part croissante est dispensée en anglais (notamment les certifications internationales, les modules techniques et les interventions de professeurs invités). Un niveau d'anglais professionnel est exigé en fin de parcours.",
      },
      {
        q: "Comment sont organisés les stages ?",
        a: "Les stages sont obligatoires en fin de chaque année. EBS vous accompagne dans la recherche via son réseau d'entreprises partenaires. Les stages durent de 1 à 3 mois selon l'année d'étude. De nombreux étudiants décrochent leur premier emploi à l'issue de leur stage de fin d'études.",
      },
      {
        q: "Puis-je changer de filière en cours d'année ?",
        a: "Un changement de filière est possible durant le premier mois de cours. Au-delà, cela devient plus difficile en raison des spécificités de chaque programme. Nous vous conseillons de bien réfléchir à votre orientation avant l'inscription.",
      },
      {
        q: "Quels débouchés après une Licence EBS ?",
        a: "Les débouchés sont excellents : 90%+ de nos diplômés trouvent un emploi dans les 6 mois. Selon la filière : chef de produit, analyste financier, développeur, community manager, consultant en cybersécurité... Vous pouvez également poursuivre en Master chez EBS ou à l'international.",
      },
    ],
  },
  {
    title: "Certifications",
    icon: Award,
    questions: [
      {
        q: "Les certifications sont-elles vraiment gratuites ?",
        a: "Oui, absolument. Toutes les certifications (Google, IBM, Harvard, Bloomberg, Cisco, Fortinet, HubSpot, etc.) sont entièrement gratuites pour nos étudiants. Elles sont incluses dans vos frais de scolarité, sans aucun coût supplémentaire.",
      },
      {
        q: "Combien de certifications puis-je obtenir ?",
        a: "Le nombre dépend de votre programme et de votre motivation. En moyenne, un étudiant EBS obtient entre 15 et 25 certifications pendant son cursus. Les plus motivés peuvent en décrocher 50+. Toutes les formations sont en ligne, à votre rythme.",
      },
      {
        q: "Les certifications sont-elles reconnues par les recruteurs ?",
        a: "Oui, absolument. Les certifications Google, IBM, Harvard, Bloomberg, Cisco sont mondialement reconnues et activement recherchées par les recruteurs. Elles apparaissent directement sur votre CV et votre profil LinkedIn. C'est un avantage compétitif immédiat sur le marché de l'emploi.",
      },
      {
        q: "Dois-je passer les certifications en dehors des cours ?",
        a: "Non. Les certifications sont intégrées à votre emploi du temps. Des créneaux dédiés sont prévus chaque semaine, et nos enseignants vous accompagnent dans la préparation des examens de certification.",
      },
    ],
  },
  {
    title: "International",
    icon: Globe,
    questions: [
      {
        q: "Puis-je étudier à l'étranger pendant mon cursus ?",
        a: "Oui. EBS dispose d'un réseau de 16 universités partenaires dans 8 pays (France, Canada, Italie, Oman...). Vous pouvez effectuer un semestre ou une année à l'étranger, ou obtenir un double diplôme avec certaines universités partenaires.",
      },
      {
        q: "Les diplômes EBS sont-ils reconnus à l'international ?",
        a: "Le diplôme EBS est reconnu par l'État tunisien (Agrément N°2013/02). Grâce à nos partenariats internationaux et aux certifications mondiales incluses (Google, Harvard, IBM, Bloomberg...), nos diplômés sont compétitifs sur le marché international. Nos doubles diplômes avec des universités françaises sont également reconnus en Europe.",
      },
      {
        q: "Quels sont les frais pour un semestre à l'étranger ?",
        a: "Les frais varient selon l'université partenaire et le pays. Dans le cadre des accords d'échange, vous payez généralement les frais de scolarité EBS (pas de surcoût), mais vous devez prévoir les frais de vie sur place (logement, nourriture, transport). Contactez notre service international pour un devis personnalisé.",
      },
    ],
  },
  {
    title: "Vie Étudiante & Campus",
    icon: GraduationCap,
    questions: [
      {
        q: "Où se situe le campus EBS ?",
        a: "Le campus EBS est situé au cœur de Tunis, facilement accessible en transport en commun. Nos locaux modernes comprennent des salles de cours équipées, un laboratoire informatique, une bibliothèque, un espace de coworking et une cafétéria.",
      },
      {
        q: "Y a-t-il des activités extrascolaires ?",
        a: "Oui. EBS dispose de clubs étudiants (Entrepreneuriat, Tech, Débat, Sport...), organise des conférences avec des professionnels, des hackathons, des visites d'entreprises et des événements de networking avec les alumni. La vie associative est encouragée.",
      },
      {
        q: "Proposez-vous un accompagnement personnalisé ?",
        a: "Chaque étudiant bénéficie d'un suivi personnalisé par un tuteur académique. Nous proposons également un accompagnement à l'insertion professionnelle (rédaction de CV, préparation aux entretiens, simulations d'entretien) et un soutien psychologique si nécessaire.",
      },
    ],
  },
  {
    title: "Financement & Tarifs",
    icon: Banknote,
    questions: [
      {
        q: "Quels sont les frais de scolarité ?",
        a: "Les frais de scolarité varient selon le programme (Licence ou Master) et la filière. Consultez notre page Tarifs pour le détail. Les certifications internationales (150+) sont incluses sans frais supplémentaire. Des facilités de paiement sont disponibles.",
      },
      {
        q: "Proposez-vous des facilités de paiement ?",
        a: "Oui, nous proposons des plans de paiement échelonné sur l'année universitaire. Contactez notre service administratif pour étudier les options disponibles en fonction de votre situation.",
      },
      {
        q: "Y a-t-il des bourses ou des réductions ?",
        a: "Nous proposons un tarif Early Bird (réduction pour inscription anticipée avant le 30 Juin), des réductions pour les fratries, et des bourses au mérite pour les excellents dossiers académiques. Contactez-nous pour connaître votre éligibilité.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      {/* ═══════════ IMMERSIVE HERO ═══════════ */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-penn-navy via-[#1a2035] to-penn-navy" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #2B8FAB 0%, transparent 60%), radial-gradient(circle at 70% 20%, #2B8FAB 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              size="lg"
              className="mb-6 border-white/20 text-white/80"
            >
              Foire Aux Questions
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[42px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
          >
            Des questions ?
            <br />
            <span className="text-[#2B8FAB]">On a les réponses</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[17px] md:text-[18px] text-white/70 leading-relaxed max-w-[600px] mb-12"
          >
            Admissions, programmes, certifications, international, campus,
            financement — tout ce que vous devez savoir sur EBS en un seul
            endroit.
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </section>

      {/* ═══════════ FAQ ACCORDION SECTIONS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12 space-y-16">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-[#2B8FAB]" />
                </div>
                <h2 className="text-[24px] md:text-[28px] font-extrabold text-penn-navy">
                  {category.title}
                </h2>
              </div>

              <Accordion className="space-y-3">
                {category.questions.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`${catIndex}-${i}`}
                    className="bg-white border border-penn-border rounded-xl px-5 lg:px-6 hover:border-[#2B8FAB]/20 transition-all duration-200"
                  >
                    <AccordionTrigger className="text-left text-[15px] lg:text-[16px] font-bold text-penn-navy hover:text-[#2B8FAB] hover:no-underline transition-colors py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[14px] lg:text-[15px] text-penn-body leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════ STILL HAVE QUESTIONS ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[700px] mx-auto px-5 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-[#2B8FAB]" />
            </div>
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-4">
              Vous n&apos;avez pas trouvé votre réponse ?
            </h2>
            <p className="text-[15px] text-penn-body leading-relaxed mb-10 max-w-[500px] mx-auto">
              Notre équipe est disponible pour répondre à toutes vos questions.
              Contactez-nous par le moyen qui vous convient.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="tel:+21629582835"
                className="flex items-center gap-3 justify-center p-4 bg-white rounded-xl border border-penn-border hover:border-[#2B8FAB]/30 hover:shadow-md transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-[#2B8FAB]" />
                <span className="text-[14px] font-bold text-penn-navy">
                  +216 53 355 196
                </span>
              </a>
              <a
                href="mailto:contact@ebs.tn"
                className="flex items-center gap-3 justify-center p-4 bg-white rounded-xl border border-penn-border hover:border-[#2B8FAB]/30 hover:shadow-md transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-[#2B8FAB]" />
                <span className="text-[14px] font-bold text-penn-navy">
                  contact@ebs.tn
                </span>
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-3 justify-center p-4 bg-[#2B8FAB] text-white rounded-xl hover:bg-[#2B8FAB]/90 transition-all duration-300 shadow-lg shadow-[#2B8FAB]/20"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-[14px] font-bold">Formulaire de contact</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaSection
        title="Prêt à rejoindre EBS ?"
        subtitle="Candidatures 2026–2027 ouvertes. Déposez votre dossier dès maintenant."
        primaryCta={{ label: "Voir nos programmes", href: "/nos-programmes" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
