"use client";

import Image from "next/image";
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
    title: "FAQ Admissions",
    icon: ClipboardList,
    questions: [
      {
        q: "Y a-t-il un concours d'entrée ?",
        a: "Non. L'admission à EBS se fait sur étude du dossier académique et de la motivation du candidat.",
      },
      {
        q: "Quand ouvrent les inscriptions ?",
        a: "Les inscriptions sont ouvertes chaque année pour la prochaine rentrée universitaire, dans la limite des places disponibles.",
      },
      {
        q: "Peut-on s'inscrire en cours d'année ?",
        a: "En principe, les inscriptions ne sont pas possibles en cours d'année. Des admissions exceptionnelles peuvent toutefois être envisagées au cas par cas et sous réserve de l'autorisation du Ministère de l'Enseignement Supérieur et de la Recherche Scientifique.",
      },
      {
        q: "EBS est-elle agréée par l'État tunisien ?",
        a: "Oui. ESPIMA Business School est une université privée agréée par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique sous le n° 02-2013.",
      },
      {
        q: "Des facilités de paiement ou des réductions sont-elles proposées ?",
        a: "Oui. EBS propose des facilités de paiement ainsi que des réductions selon les conditions et offres en vigueur. Pour connaître les modalités applicables, contactez le service Scolarité.",
      },
      {
        q: "Quels Baccalauréats permettent de s'inscrire en Licence ?",
        a: "L'admission en Licence est ouverte aux titulaires du Baccalauréat, toutes sections sauf Lettres et Sport.",
      },
      {
        q: "Puis-je intégrer EBS après avoir commencé mes études dans une autre université ?",
        a: "Oui. Une admission peut être étudiée en fonction de votre niveau, de votre filière et des études déjà validées. L'équivalence et le niveau d'intégration sont examinés sur dossier.",
      },
      {
        q: "Puis-je poursuivre mes études à l'étranger après EBS ?",
        a: "Oui. EBS dispose de partenaires académiques internationaux en France, au Canada, en Italie et à Oman, offrant différentes possibilités de poursuite d'études selon votre filière, votre niveau et les conditions du partenaire.",
      },
      {
        q: "Dois-je choisir le Parcours International dès ma première année ?",
        a: "Oui. Le Parcours International est une classe spécifique à choisir dès la première année. L'admission chez un partenaire reste soumise à l'étude du dossier et à ses conditions d'admission.",
      },
      {
        q: "Peut-on intégrer un Master EBS avec une Licence obtenue dans une autre université ?",
        a: "Oui, sous réserve que votre Licence ou diplôme Bac+3 soit compatible avec le Master choisi et après étude de votre dossier.",
      },
      {
        q: "Les étudiants internationaux peuvent-ils s'inscrire à EBS ?",
        a: "Oui. EBS accueille des étudiants internationaux et les accompagne dans leur candidature ainsi que dans la préparation de leur arrivée et de leur installation en Tunisie.",
      },
      {
        q: "EBS accompagne-t-elle les étudiants pour le visa ?",
        a: "Oui. Pour les étudiants internationaux, EBS apporte un accompagnement dans la préparation des démarches administratives liées à leur venue en Tunisie. Pour les mobilités à l'étranger, l'accompagnement dépend de la destination et du partenariat.",
      },
      {
        q: "La pré-inscription est-elle définitive ?",
        a: "Non. La pré-inscription permet de déposer votre candidature et de démarrer l'étude de votre dossier. L'inscription définitive intervient après validation de l'admission et accomplissement des formalités demandées.",
      },
      {
        q: "Puis-je être conseillé avant de choisir ma filière ?",
        a: "Oui. L'équipe EBS peut vous accompagner pour identifier le programme le plus adapté à votre profil, vos objectifs et votre projet professionnel.",
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
            <span className="text-penn-green">On a les réponses</span>.
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
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* ── LEFT: ILLUSTRATIVE IMAGERY ── */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-5/12 lg:sticky lg:top-32 self-start hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]">
                <Image fill src="/images/sections/features-group.jpg" alt="Étudiants EBS" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B8FAB]/90 via-[#2B8FAB]/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                    <ClipboardList className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[32px] font-extrabold leading-[1.1] mb-3">Votre avenir commence ici.</h3>
                  <p className="text-white/90 text-[16px] leading-relaxed">
                    Notre équipe admission vous accompagne à chaque étape pour préparer votre rentrée dans les meilleures conditions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: ACCORDIONS ── */}
            <div className="w-full lg:w-7/12 space-y-16">
              {categories.map((category, catIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-penn-green/10 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-penn-green" />
                    </div>
                    <h2 className="text-[28px] md:text-[32px] font-extrabold text-penn-navy">
                      {category.title}
                    </h2>
                  </div>

                  <Accordion className="space-y-4">
                    {category.questions.map((faq, i) => (
                      <AccordionItem
                        key={i}
                        value={`${catIndex}-${i}`}
                        className="bg-white border border-penn-border rounded-2xl px-6 hover:border-penn-green/30 hover:shadow-md transition-all duration-300"
                      >
                        <AccordionTrigger className="text-left text-[16px] font-bold text-penn-navy hover:text-penn-green hover:no-underline transition-colors py-6 leading-tight">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-[15px] text-penn-body leading-relaxed pb-6 pr-4">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
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
            <div className="w-16 h-16 rounded-2xl bg-penn-green/10 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-penn-green" />
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
                className="flex items-center gap-3 justify-center p-4 bg-white rounded-xl border border-penn-border hover:border-penn-green/30 hover:shadow-md transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-penn-green" />
                <span className="text-[14px] font-bold text-penn-navy">
                  +216 55 582 843
                </span>
              </a>
              <a
                href="mailto:info@ebs.tn"
                className="flex items-center gap-3 justify-center p-4 bg-white rounded-xl border border-penn-border hover:border-penn-green/30 hover:shadow-md transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-penn-green" />
                <span className="text-[14px] font-bold text-penn-navy">
                  info@ebs.tn
                </span>
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-3 justify-center p-4 bg-penn-green text-white rounded-xl hover:bg-penn-green/90 transition-all duration-300 shadow-lg shadow-penn-green/20"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-[14px] font-bold">Formulaire de contact</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaSection
        title="Prêt(e) à rejoindre EBS ?"
        subtitle="Pré-inscription en ligne en quelques minutes. Notre équipe vous recontacte dans les meilleurs délais."
        primaryCta={{ label: "Voir nos programmes", href: "/nos-programmes" }}
        secondaryCta={{ label: "Pré-inscription", href: "/preinscription" }}
        background="penn-green"
      />
    </>
  );
}
