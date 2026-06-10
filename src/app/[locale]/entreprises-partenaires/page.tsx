"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Award,
  Brain,
  Building2,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Globe,
  GraduationCap,
  Handshake,
  Lightbulb,
  Mail,
  Phone,
  Rocket,
  Search,
  Sparkles,
  Target,
} from "lucide-react";
import { Badge, CtaSection } from "@/components/shared";

const avantagesEntreprise = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Talents certifiés",
    desc: "Vos futurs collaborateurs sont certifiés par Google, IBM, Harvard, Bloomberg, Cisco — avant même d'avoir leur diplôme.",
    color: "#2B8FAB",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Opérationnels immédiatement",
    desc: "Pédagogie pratique, simulations pro Forage, projets réels. Un stagiaire EBS est productif dès la première semaine.",
    color: "#2196F3",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "IA-native",
    desc: "Tous nos étudiants maîtrisent l'IA générative, le prompting et l'automatisation. Une compétence que vos équipes n'ont pas encore.",
    color: "#9C27B0",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Bilingues & internationaux",
    desc: "Anglais professionnel, partenariats internationaux, expérience multiculturelle. Prêts pour vos équipes globales.",
    color: "#FF9800",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Recrutement sans risque",
    desc: "Testez nos talents en stage ou en alternance avant de les recruter. Zéro risque, 100% de valeur ajoutée.",
    color: "#E91E8C",
  },
];

const typesCollaboration = [
  {
    icon: <Calendar className="w-7 h-7" />,
    title: "Stage",
    desc: "Des stagiaires opérationnels pour vos projets ponctuels. Durée flexible, tous les programmes.",
    badge: "Le plus demandé",
    color: "#2B8FAB",
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: "Alternance",
    desc: "Un étudiant 2-3 jours/semaine dans votre entreprise. Formation prise en charge par EBS.",
    badge: "Avantage fiscal",
    color: "#2196F3",
  },
  {
    icon: <Search className="w-7 h-7" />,
    title: "Recrutement",
    desc: "Accès prioritaire à notre vivier de diplômés certifiés. Matching personnalisé selon vos besoins.",
    color: "#9C27B0",
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: "Projet réel",
    desc: "Confiez un projet à une équipe d'étudiants encadrée par nos professeurs. Résultats concrets garantis.",
    color: "#FF9800",
  },
];

const profilDiplomes = [
  {
    icon: <Award className="w-5 h-5" />,
    text: "Multi-certifiés : Google, IBM, Harvard, Bloomberg, Cisco, HubSpot, PMI, ScrumStudy et 15+ autres fournisseurs mondiaux.",
    color: "#2B8FAB",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    text: "IA-native : prompting, agents, automatisation, analyse de données augmentée — l'IA comme réflexe professionnel.",
    color: "#9C27B0",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    text: "Expérience pratique réelle : simulations Forage (BCG, Goldman Sachs, JP Morgan, Mastercard, PwC, KPMG, EY).",
    color: "#E91E8C",
  },
  {
    icon: <Check className="w-5 h-5" />,
    text: "Opérationnels dès J1 : pédagogie par projet, études de cas réels, outils professionnels maîtrisés.",
    color: "#2196F3",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    text: "Profil international : anglais professionnel, expérience multiculturelle, partenariats dans 8 pays.",
    color: "#FF9800",
  },
];

export default function EntreprisesPartenairesPage() {
  return (
    <>
      {/* ═══════════ IMMERSIVE HERO ═══════════ */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-penn-navy via-[#1a2035] to-penn-navy" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #2B8FAB 0%, transparent 60%), radial-gradient(circle at 70% 20%, #2B8FAB 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(43,143,171,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
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
              Recrutement · Stage · Alternance · Partenariat
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[42px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
          >
            Recrutez les talents
            <br />
            <span className="text-[#2B8FAB]">de demain</span>, aujourd&apos;hui.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[17px] md:text-[19px] text-white/70 leading-relaxed max-w-[700px] mb-12"
          >
            EBS forme les profils les plus recherchés du marché : certifiés,
            bilingues, IA-natives, et opérationnels dès leur premier jour. Vos
            futurs collaborateurs sont chez nous.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">
                90%+
              </p>
              <p className="text-[12px] text-white/50 font-medium">
                Taux d&apos;insertion
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-[#2B8FAB] leading-none mb-1">
                150+
              </p>
              <p className="text-[12px] text-white/50 font-medium">
                Certifications par diplômé
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">
                7
              </p>
              <p className="text-[12px] text-white/50 font-medium">
                Filières de recrutement
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <GraduationCap className="w-7 h-7 text-[#2B8FAB] mx-auto mb-1" />
              <p className="text-[12px] text-white/50 font-medium">
                Promotions 2026-2027
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </section>

      {/* ═══════════ POURQUOI RECRUTER CHEZ EBS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">
              Pourquoi EBS ?
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              5 bonnes raisons de recruter chez nous
            </h2>
            <p className="text-[16px] text-penn-body mt-3 max-w-[650px] mx-auto">
              Un diplômé EBS n&apos;est pas un étudiant comme les autres.
              C&apos;est un talent déjà certifié, déjà formé, déjà prêt.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avantagesEntreprise.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-2xl border border-penn-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}12` }}
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                </div>
                <h3 className="text-[18px] font-extrabold text-penn-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] text-penn-body leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TYPES DE COLLABORATION ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">
              Collaborer avec EBS
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Quatre façons de travailler avec nos talents
            </h2>
            <p className="text-[16px] text-penn-body mt-3 max-w-[650px] mx-auto">
              Chaque entreprise a des besoins différents. Choisissez le format
              qui vous correspond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {typesCollaboration.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group bg-white rounded-2xl border border-penn-border p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${type.color}12` }}
                  >
                    <span style={{ color: type.color }}>{type.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-[20px] font-extrabold text-penn-navy">
                        {type.title}
                      </h3>
                      {type.badge && (
                        <span
                          className="text-[11px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full"
                          style={{
                            backgroundColor: `${type.color}15`,
                            color: type.color,
                          }}
                        >
                          {type.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[14px] text-penn-body leading-relaxed">
                      {type.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROFIL DES DIPLÔMÉS ═══════════ */}
      <section className="section-padding bg-penn-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #2B8FAB 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(43,143,171,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-[900px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[14px] font-bold uppercase tracking-[3px] text-[#2B8FAB] mb-4">
              Profil type
            </span>
            <h2 className="text-[34px] md:text-[48px] font-extrabold text-white leading-[1.1]">
              Le profil du diplômé EBS
            </h2>
            <p className="text-[16px] text-white/50 mt-3 max-w-[600px] mx-auto">
              Voici ce que vous obtenez quand vous recrutez un talent formé chez
              nous.
            </p>
          </motion.div>

          <div className="space-y-4">
            {profilDiplomes.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 lg:p-6 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}1A` }}
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                </div>
                <p className="text-[15px] text-white/70 leading-relaxed mt-1.5">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CONTACT CTA ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[800px] mx-auto px-5 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-8 h-8 text-[#2B8FAB]" />
            </div>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15] mb-4">
              Prêt à collaborer ?
            </h2>
            <p className="text-[16px] text-penn-body leading-relaxed mb-10 max-w-[600px] mx-auto">
              Contactez notre équipe pour discuter des opportunités de
              partenariat, de stage ou de recrutement. Nous vous mettrons en
              relation avec les talents dont vous avez besoin.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <a
                href="tel:+21629582835"
                className="flex items-center gap-3 justify-center p-4 bg-penn-bg-light rounded-xl border border-penn-border hover:border-[#2B8FAB]/30 hover:shadow-md transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-[#2B8FAB]" />
                <span className="text-[15px] font-bold text-penn-navy">
                  +216 29 58 28 35
                </span>
              </a>
              <a
                href="mailto:contact@ebs.tn"
                className="flex items-center gap-3 justify-center p-4 bg-penn-bg-light rounded-xl border border-penn-border hover:border-[#2B8FAB]/30 hover:shadow-md transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-[#2B8FAB]" />
                <span className="text-[15px] font-bold text-penn-navy">
                  contact@ebs.tn
                </span>
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-3 justify-center p-4 bg-[#2B8FAB] text-white rounded-xl hover:bg-[#2B8FAB]/90 transition-all duration-300 shadow-lg shadow-[#2B8FAB]/20"
              >
                <Building2 className="w-5 h-5" />
                <span className="text-[15px] font-bold">
                  Formulaire entreprise
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaSection
        title="Recrutez les meilleurs talents, certifiés et IA-natives."
        subtitle="Découvrez comment nos étudiants peuvent contribuer à votre entreprise."
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
        secondaryCta={{ label: "Voir nos programmes", href: "/licences" }}
        background="penn-green"
      />
    </>
  );
}
