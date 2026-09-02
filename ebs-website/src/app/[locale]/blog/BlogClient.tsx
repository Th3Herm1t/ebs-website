"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import {
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  ChevronDown,
  Clock,
  Globe,
  GraduationCap,
  Lightbulb,
  Newspaper,
  Rocket,
  Send,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { Badge, CtaSection } from "@/components/shared";

const categories = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "IA & Certifications",
    desc: "Guides certifications, tutoriels IA, actualités GenAI et prompting.",
    count: "Bientôt",
    color: "#9C27B0",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Carrière & Emploi",
    desc: "Conseils CV, préparation entretien, métiers de demain.",
    count: "Bientôt",
    color: "#2196F3",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Vie étudiante",
    desc: "Campus EBS, événements, témoignages, clubs étudiants.",
    count: "Bientôt",
    color: "#FF9800",
  },
  {
    icon: <Newspaper className="w-6 h-6" />,
    title: "Actualités EBS",
    desc: "Nouveaux partenariats, résultats, événements, lauréats.",
    count: "Bientôt",
    color: "#2B8FAB",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Secteurs & Tendances",
    desc: "Finance, Marketing digital, Cybersécurité, Entrepreneuriat.",
    count: "Bientôt",
    color: "#E91E8C",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "International",
    desc: "Étudier en France, au Canada, visa étudiant, guides pays.",
    count: "Bientôt",
    color: "#00BCD4",
  },
];

const featureTopics = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Comment décrocher 15+ certifications gratuitement pendant vos études",
    badge: "Guide",
    color: "#2B8FAB",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Les 5 compétences IA que tous les recruteurs recherchent en 2026",
    badge: "Tendances",
    color: "#9C27B0",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Licence vs Master : quel parcours choisir selon votre projet ?",
    badge: "Orientation",
    color: "#2196F3",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Double diplôme international : tout ce que vous devez savoir",
    badge: "Guide",
    color: "#FF9800",
  },
];

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

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
              Blog EBS
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[42px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
          >
            Le blog qui prépare
            <br />
            <span className="text-penn-green">votre avenir</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[17px] md:text-[18px] text-white/70 leading-relaxed max-w-[600px] mb-12"
          >
            Guides pratiques, actualités du monde professionnel, conseils
            carrière et insights sur les certifications, l&apos;IA et les études
            à l&apos;international.
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

      {/* ═══════════ CATEGORIES ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <Badge variant="default" size="lg" className="mb-4">
              Catégories
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Explorez par thématique
            </h2>
            <p className="text-[16px] text-penn-body mt-3 max-w-[600px] mx-auto">
              Des contenus adaptés à vos centres d&apos;intérêt, rédigés par
              notre équipe pédagogique et des professionnels du secteur.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group bg-white rounded-2xl border border-penn-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${cat.color}12` }}
                >
                  <span style={{ color: cat.color }}>{cat.icon}</span>
                </div>
                <h3 className="text-[18px] font-extrabold text-penn-navy mb-2 group-hover:text-penn-green transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[14px] text-penn-body leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <span
                  className="inline-block text-[12px] font-bold uppercase tracking-wide px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${cat.color}10`,
                    color: cat.color,
                  }}
                >
                  {cat.count}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURED LIVE ARTICLE ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <Badge variant="default" size="lg" className="mb-2">
                Article à la une
              </Badge>
              <h2 className="text-[28px] md:text-[36px] font-extrabold text-penn-navy">
                Dernières publications
              </h2>
            </div>
          </div>

          <Link
            href="/blog/reconnaissance-diplomes-enseignement-superieur-francais"
            className="group block bg-white rounded-3xl border border-penn-border hover:border-penn-green/40 hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] items-center">
              <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[260px] bg-penn-navy overflow-hidden">
                <Image
                  src="/images/heroes/hero-parcours-international.jpg"
                  alt="Reconnaissance des diplômes français"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-penn-green text-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-md">
                    <Globe className="w-3.5 h-3.5" />
                    International & Mobilité
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-[13px] text-penn-body/60 font-medium mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-penn-green" />
                      24 Août 2026
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-penn-green" />
                      7 min de lecture
                    </span>
                  </div>

                  <h3 className="text-[22px] md:text-[26px] font-extrabold text-penn-navy group-hover:text-penn-green transition-colors leading-tight mb-3">
                    Les principales reconnaissances des diplômes de l&apos;enseignement supérieur français : le guide complet
                  </h3>

                  <p className="text-[15px] text-penn-body leading-relaxed mb-6 line-clamp-3">
                    Comprendre les visas d&apos;État, Grades de Licence et Master, Titres RNCP (Niveaux 6 & 7), labels CGE et accréditations internationales (AACSB, EQUIS, AMBA) pour sécuriser votre poursuite d&apos;études en France depuis EBS Tunis.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-penn-border">
                  <span className="text-[13px] font-bold text-penn-navy">
                    Par la Direction des Relations Internationales EBS
                  </span>
                  <span className="inline-flex items-center gap-2 text-[14px] font-bold text-penn-green group-hover:translate-x-1 transition-transform">
                    Lire le guide complet →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ═══════════ FEATURED TOPICS ═══════════ */}
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
              <Badge variant="outline" size="lg" className="mb-4 border-white/20 text-white/80">
                À venir
              </Badge>
            <h2 className="text-[34px] md:text-[48px] font-extrabold text-white leading-[1.1]">
              Prochains articles en préparation
            </h2>
            <p className="text-[16px] text-white/50 mt-3 max-w-[600px] mx-auto">
              Notre équipe travaille sur une série d&apos;articles de fond pour
              vous aider à réussir vos études et votre carrière.
            </p>
          </motion.div>

          <div className="space-y-4">
            {featureTopics.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 p-5 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${topic.color}1A` }}
                >
                  <span style={{ color: topic.color }}>{topic.icon}</span>
                </div>
                <p className="text-[15px] text-white/80 leading-snug flex-1">
                  {topic.title}
                </p>
                <span
                  className="text-[11px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full shrink-0"
                  style={{
                    backgroundColor: `${topic.color}15`,
                    color: topic.color,
                  }}
                >
                  {topic.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ NEWSLETTER ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[700px] mx-auto px-5 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-penn-green/10 flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-penn-green" />
            </div>
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-4">
              Soyez les premiers informés
            </h2>
            <p className="text-[15px] text-penn-body leading-relaxed mb-8 max-w-[500px] mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir nos articles dès
              leur publication, ainsi que des conseils exclusifs pour votre
              carrière.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-penn-bg-light rounded-2xl border border-penn-border p-6"
              >
                <p className="text-[16px] font-bold text-penn-navy">
                  Merci pour votre inscription !
                </p>
                <p className="text-[14px] text-penn-body mt-1">
                  Vous recevrez nos premiers articles dans votre boîte mail.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto"
              >
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3.5 bg-penn-bg-light border border-penn-border rounded-xl text-[15px] text-penn-navy placeholder:text-penn-body/40 focus:outline-none focus:border-penn-green focus:bg-white focus:shadow-md transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-penn-green text-white font-bold text-[15px] py-3.5 px-6 rounded-xl hover:bg-penn-green/90 transition-all duration-300 shadow-lg shadow-penn-green/20 whitespace-nowrap"
                >
                  S&apos;inscrire
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ QUICK LINKS ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-[28px] md:text-[34px] font-extrabold text-penn-navy text-center mb-12"
          >
            En attendant, découvrez nos programmes
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: "Licences",
                desc: "6 programmes avec certifications incluses.",
                href: "/licences",
                label: "Explorer",
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Masters",
                desc: "3 Masters professionnels reconnus.",
                href: "/masters",
                label: "Explorer",
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Certifications",
                desc: "Certifications gratuites vérifiées.",
                href: "/certifications",
                label: "Découvrir",
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Pré-inscription",
                desc: "Candidatures 2026–2027 ouvertes.",
                href: "/preinscription",
                label: "Postuler",
              },
            ].map((link, i) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="group bg-white rounded-2xl border border-penn-border p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-penn-green/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-penn-green/10 flex items-center justify-center mb-4 text-penn-green group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <h3 className="text-[17px] font-extrabold text-penn-navy mb-2 group-hover:text-penn-green transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-[14px] text-penn-body leading-relaxed mb-4 flex-1">
                    {link.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-penn-green">
                    {link.label}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Prêt à construire votre avenir avec EBS ?"
        subtitle="Candidatures 2026–2027 ouvertes. Déposez votre dossier dès maintenant."
        primaryCta={{ label: "Voir nos programmes", href: "/nos-programmes" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
