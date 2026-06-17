"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Award,
  Banknote,
  BookOpen,
  CalendarClock,
  Check,
  ChevronDown,
  Clock,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Percent,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge, CtaSection } from "@/components/shared";

const inclusions = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    text: "Formation complète : cours, projets, simulations professionnelles",
  },
  {
    icon: <Award className="w-5 h-5" />,
    text: "150+ certifications internationales gratuites (Google, IBM, Harvard, Bloomberg...)",
  },
  {
    icon: <Users className="w-5 h-5" />,
    text: "Accompagnement carrière personnalisé et ateliers d'insertion professionnelle",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    text: "Accès à la plateforme numérique EBS et aux ressources pédagogiques",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    text: "Stages professionnels obligatoires avec accompagnement au placement",
  },
];

const programmes = [
  {
    title: "Licence National",
    subtitle: "Bac+3",
    duree: "3 ans",
    price: "7 500 DT",
    priceLabel: "/ An",
    programmes: [
      "Management",
      "Marketing",
      "Finance",
      "Informatique — Standard",
      "Informatique — IA",
      "Cybersécurité",
    ],
    earlyBird: "Jusqu'au 31 Juillet",
    href: "/licences",
    color: "#2B8FAB",
    featured: false,
  },
  {
    title: "Licence International",
    subtitle: "Bac+3",
    duree: "3 ans",
    price: "9 500 DT",
    priceLabel: "/ An",
    programmes: [
      "L1 Tunisie → B2/B3 Link University — Italie",
      "L1/L2 Tunisie → B3 Grande École — France",
      "L1/L2/L3 Tunisie → M1 Canada / France / Italie",
    ],
    earlyBird: "Jusqu'au 31 Juillet",
    href: "/parcours-internationaux",
    color: "#E89745",
    featured: true,
  },
  {
    title: "Master",
    subtitle: "Bac+5",
    duree: "2 ans",
    price: "Sur demande",
    priceLabel: "",
    programmes: [
      "Management de Projets Innovants & Startups",
      "CRM & Transformation Digitale",
      "Ingénierie Financière",
    ],
    earlyBird: "Jusqu'au 31 Août",
    href: "/masters",
    color: "#2196F3",
    featured: false,
  },
];

const faq = [
  {
    q: "Y a-t-il des bourses disponibles ?",
    a: "EBS propose des bourses au mérite pour les excellents dossiers académiques, ainsi que des réductions pour les fratries (inscriptions multiples au sein d'une même famille). Contactez notre équipe pour connaître votre éligibilité.",
  },
  {
    q: "Comment fonctionne le paiement échelonné ?",
    a: "Nous proposons des plans de paiement échelonné sur l'année académique. Les modalités exactes (nombre d'échéances, montants) sont définies avec notre service administratif lors de l'inscription.",
  },
  {
    q: "Qu'est-ce que la remise Early Bird ?",
    a: "Une réduction significative accordée aux inscriptions anticipées : jusqu'au 31 Juillet pour les Licences et jusqu'au 31 Août pour les Masters. Le montant de la réduction vous est communiqué lors de votre premier contact avec notre équipe.",
  },
  {
    q: "Les certifications sont-elles vraiment incluses sans frais ?",
    a: "Oui, absolument. Les 150+ certifications (Google, IBM, Harvard, Bloomberg, etc.) sont entièrement incluses dans vos frais de scolarité. Aucun coût supplémentaire, ni pour les formations, ni pour les examens de certification.",
  },
  {
    q: "Proposez-vous des facilités pour les étudiants internationaux ?",
    a: "Oui, nous accompagnons les étudiants internationaux dans leurs démarches administratives et proposons des solutions de paiement adaptées. Contactez notre service international pour plus d'informations.",
  },
];

export default function TarifsPage() {
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
              Tarifs 2026–2027 · Early Bird disponible
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[42px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
          >
            L&apos;excellence
            <br />
            <span className="text-[#2B8FAB]">accessible</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[17px] md:text-[18px] text-white/70 leading-relaxed max-w-[650px] mb-12"
          >
            Des formations d&apos;excellence à des tarifs compétitifs. 150+
            certifications internationales incluses. Réductions Early Bird et
            paiement échelonné disponibles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-white leading-none mb-1">
                150+
              </p>
              <p className="text-[12px] text-white/50 font-medium">
                Certifications incluses
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-[32px] md:text-[44px] font-extrabold text-[#2B8FAB] leading-none mb-1">
                0 DT
              </p>
              <p className="text-[12px] text-white/50 font-medium">
                Frais de certification
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <Banknote className="w-7 h-7 text-[#2B8FAB] mx-auto mb-1" />
              <p className="text-[12px] text-white/50 font-medium">
                Paiement échelonné
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

      {/* ═══════════ CE QUI EST INCLUS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center">
                <Check className="w-7 h-7 text-[#2B8FAB]" />
              </div>
              <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy">
                Ce qui est inclus dans votre formation
              </h2>
            </div>

            <div className="space-y-3">
              {inclusions.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 p-5 bg-penn-bg-light rounded-xl border border-penn-border hover:border-[#2B8FAB]/20 hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-[#2B8FAB]">{item.icon}</span>
                  </div>
                  <p className="text-[15px] text-penn-body leading-relaxed mt-1.5">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ PROGRAMME PRICING CARDS ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1000px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">
              Nos formations
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Licences & Masters
            </h2>
            <p className="text-[16px] text-penn-body mt-3 max-w-[600px] mx-auto">
              Contactez-nous pour une simulation personnalisée. Chaque
              situation est unique et mérite un accompagnement sur mesure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmes.map((prog, i) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative group"
              >
                <div className={`bg-white rounded-2xl border p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col ${prog.featured ? "border-[#E89745]/40 shadow-lg shadow-[#E89745]/10" : "border-penn-border"}`}>
                  {prog.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E89745] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                      Parcours International
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <span
                      className="inline-block text-[14px] font-bold uppercase tracking-[3px] mb-2"
                      style={{ color: prog.color }}
                    >
                      {prog.subtitle}
                    </span>
                    <h3 className="text-[28px] font-extrabold text-penn-navy">
                      {prog.title}
                    </h3>
                    <p className="text-[14px] text-penn-body mt-1">
                      Durée : {prog.duree}
                    </p>
                  </div>

                  <div className="text-center mb-6">
                    <span className="text-[42px] font-extrabold text-penn-navy leading-none">
                      {prog.price}
                    </span>
                    {prog.priceLabel && (
                      <span className="text-[16px] text-penn-body ml-1">{prog.priceLabel}</span>
                    )}
                  </div>

                  <div className="space-y-3 mb-8 flex-1">
                    {prog.programmes.map((p) => (
                      <div
                        key={p}
                        className="flex items-center gap-3 text-[14px] text-penn-navy font-medium"
                      >
                        <Check className="w-4 h-4 shrink-0" style={{ color: prog.color }} />
                        {p}
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-penn-border pt-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${prog.color}15` }}
                      >
                        <Percent className="w-5 h-5" style={{ color: prog.color }} />
                      </div>
                      <div>
                        <p className="text-[12px] font-bold uppercase tracking-wider" style={{ color: prog.color }}>
                          Early Bird
                        </p>
                        <p className="text-[13px] text-penn-body">
                          {prog.earlyBird}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={prog.href}
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-[15px] transition-all duration-300 hover:opacity-90"
                      style={{
                        backgroundColor: prog.color,
                        color: "white",
                      }}
                    >
                      {prog.featured ? "Voir les parcours" : "Voir les programmes"}
                      <ChevronDown className="w-4 h-4 -rotate-90" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ EARLY BIRD + PAIEMENT ═══════════ */}
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

        <div className="relative z-10 max-w-[1000px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <CalendarClock className="w-6 h-6" />,
                title: "Early Bird",
                text: "Réduction significative pour toute inscription anticipée. Licences : jusqu'au 31 Juillet. Masters : jusqu'au 31 Août.",
                color: "#2B8FAB",
              },
              {
                icon: <Banknote className="w-6 h-6" />,
                title: "Paiement échelonné",
                text: "Possibilité de régler vos frais de scolarité en plusieurs échéances sur l'année académique. Modalités flexibles.",
                color: "#2196F3",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Réduction fratries",
                text: "Des tarifs préférentiels pour les inscriptions multiples au sein d'une même famille. Contactez-nous pour plus de détails.",
                color: "#E91E8C",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 lg:p-8 hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300 text-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${item.color}1A` }}
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                </div>
                <h3 className="text-[18px] font-extrabold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[800px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-[#2B8FAB]" />
              </div>
              <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy">
                Questions fréquentes
              </h2>
            </div>

            <Accordion className="space-y-3">
              {faq.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-penn-bg-light border border-penn-border rounded-xl px-5 lg:px-6 hover:border-[#2B8FAB]/20 transition-all duration-200"
                >
                  <AccordionTrigger className="text-left text-[15px] lg:text-[16px] font-bold text-penn-navy hover:text-[#2B8FAB] hover:no-underline transition-colors py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] lg:text-[15px] text-penn-body leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CONTACT CTA ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[700px] mx-auto px-5 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-6">
              <HeartHandshake className="w-8 h-8 text-[#2B8FAB]" />
            </div>
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-4">
              Demandez une simulation personnalisée
            </h2>
            <p className="text-[15px] text-penn-body leading-relaxed mb-10 max-w-[500px] mx-auto">
              Chaque situation est unique. Notre équipe vous recontacte dans les
              24h avec un devis adapté à votre profil et à votre programme.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#2B8FAB] text-white font-bold text-[15px] py-3.5 px-8 rounded-full hover:bg-[#2B8FAB]/90 transition-all duration-300 shadow-lg shadow-[#2B8FAB]/20"
              >
                Nous contacter
                <MessageCircle className="w-4 h-4" />
              </Link>
              <a
                href="tel:+21629582835"
                className="inline-flex items-center gap-2 font-bold text-[15px] text-penn-navy hover:text-[#2B8FAB] transition-colors"
              >
                <Phone className="w-4 h-4" />
                +216 53 355 196
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaSection
        title="Prêt à investir dans votre avenir ?"
        subtitle="Candidatures 2026–2027 ouvertes. Déposez votre dossier dès maintenant."
        primaryCta={{ label: "Voir nos programmes", href: "/licences" }}
        secondaryCta={{ label: "Pré-inscription", href: "/preinscription" }}
        background="penn-green"
      />
    </>
  );
}
