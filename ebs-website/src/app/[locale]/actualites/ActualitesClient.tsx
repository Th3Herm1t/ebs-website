"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Calendar,
  ChevronRight,
  Megaphone,
  Newspaper,
  Sparkles,
  X,
  Phone,
  Mail,
} from "lucide-react";
import { Badge, CtaSection } from "@/components/shared";
import {
  articleAlaUne,
  allArticles,
  type Article,
  type ArticleTag,
} from "@/lib/actualites";

type Tab = "alaune" | "all";

const tagColors: Record<ArticleTag, { bg: string; text: string; border: string }> = {
  Partenariat: { bg: "bg-penn-green/10", text: "text-penn-green", border: "border-penn-green/20" },
  International: { bg: "bg-[#1E88E5]/10", text: "text-[#1E88E5]", border: "border-[#1E88E5]/20" },
  Technologie: { bg: "bg-[#FF5722]/10", text: "text-[#FF5722]", border: "border-[#FF5722]/20" },
  IA: { bg: "bg-[#9C27B0]/10", text: "text-[#9C27B0]", border: "border-[#9C27B0]/20" },
  Entrepreneuriat: { bg: "bg-[#5E35B1]/10", text: "text-[#5E35B1]", border: "border-[#5E35B1]/20" },
  Conférence: { bg: "bg-[#00897B]/10", text: "text-[#00897B]", border: "border-[#00897B]/20" },
  Carrière: { bg: "bg-[#E91E8C]/10", text: "text-[#E91E8C]", border: "border-[#E91E8C]/20" },
  Cérémonie: { bg: "bg-[#FF9800]/10", text: "text-[#FF9800]", border: "border-[#FF9800]/20" },
  "Vie Étudiante": { bg: "bg-[#2196F3]/10", text: "text-[#2196F3]", border: "border-[#2196F3]/20" },
  Solidarité: { bg: "bg-[#E53935]/10", text: "text-[#E53935]", border: "border-[#E53935]/20" },
  Finance: { bg: "bg-[#00BCD4]/10", text: "text-[#00BCD4]", border: "border-[#00BCD4]/20" },
  FinTech: { bg: "bg-[#00BCD4]/10", text: "text-[#00BCD4]", border: "border-[#00BCD4]/20" },
  Orientation: { bg: "bg-[#43A047]/10", text: "text-[#43A047]", border: "border-[#43A047]/20" },
  Digitalisation: { bg: "bg-[#FF5722]/10", text: "text-[#FF5722]", border: "border-[#FF5722]/20" },
  "Data Science": { bg: "bg-[#9C27B0]/10", text: "text-[#9C27B0]", border: "border-[#9C27B0]/20" },
  Alumni: { bg: "bg-penn-green/10", text: "text-penn-green", border: "border-penn-green/20" },
  Clubs: { bg: "bg-[#FF9800]/10", text: "text-[#FF9800]", border: "border-[#FF9800]/20" },
};

const tabs: { key: Tab; label: string; icon: React.ReactNode; desc: string }[] = [
  { key: "all", label: "Actualités et Évènements", icon: <Newspaper className="w-4 h-4" />, desc: "Toutes les nouvelles, rencontres et initiatives de la communauté EBS." },
  { key: "alaune", label: "À la Une", icon: <Sparkles className="w-4 h-4" />, desc: "L'article phare de l'actualité EBS" },
];

const stats = [
  { icon: <Newspaper className="w-5 h-5" />, label: "Publications", value: String(allArticles.length), accent: "#2B8FAB" },
  { icon: <Calendar className="w-5 h-5" />, label: "Formats réunis", value: "1", accent: "#FF9800" },
  { icon: <Sparkles className="w-5 h-5" />, label: "Thématiques", value: "17", accent: "#9C27B0" },
];

export default function ActualitesPage() {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [activeTag, setActiveTag] = useState<ArticleTag | null>(null);
  const [modalArticle, setModalArticle] = useState<Article | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredList = useMemo(() => {
    const currentList = activeTab === "alaune" ? [articleAlaUne] : allArticles;
    if (!activeTag || activeTab === "alaune") return currentList;
    return currentList.filter((a) => a.tag === activeTag);
  }, [activeTag, activeTab]);

  const visibleArticles = filteredList.slice(0, visibleCount);

  const availableTags = useMemo(() => {
    if (activeTab === "alaune") return [];
    const source = allArticles;
    const tags = [...new Set(source.map((a) => a.tag))];
    return tags.sort((a, b) => a.localeCompare(b));
  }, [activeTab]);

  return (
    <main className="min-h-screen">
      {/* ─────────── HERO ─────────── */}
      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroes/hero-actualites.png"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/60 via-[#1a2035]/50 to-penn-navy/60" />
        <div className="absolute inset-0 z-[1] opacity-[0.03] bg-[radial-gradient(circle_at_50%_70%,_#2B8FAB_0%,_transparent_50%)]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12">
          <div className="max-w-[700px]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="outline" size="lg" className="mb-6 border-white/20 text-white/80">
                <div className="w-1 h-1 rounded-full bg-penn-green" />
                Restez Informés
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[44px] md:text-[56px] lg:text-[68px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
            >
              Actualités et<br />
              <span className="text-penn-green">Évènements</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[17px] md:text-[19px] text-white/70 leading-relaxed max-w-[550px]"
            >
              Partenariats, événements, conférences et vie étudiante. Découvrez toute l'actualité d'ESPIMA Business School.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─────────── STATS BAR ─────────── */}
      <section className="relative z-20 -mt-10 pb-0">
        <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
          <div className="bg-white rounded-2xl border border-penn-border shadow-xl shadow-black/5 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-penn-border/50">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col items-center justify-center py-7 px-4"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${stat.accent}15` }}>
                    <div style={{ color: stat.accent }}>{stat.icon}</div>
                  </div>
                  <p className="text-[28px] md:text-[34px] font-extrabold text-penn-navy leading-none mb-1 text-center">{stat.value}</p>
                  <p className="text-[12px] text-penn-body/60 font-medium text-center">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── TABS ─────────── */}
      <section className="section-padding bg-white pt-16">
        <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
          {/* Tab buttons */}
          <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
            {tabs.map((tab) => (
              <motion.button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setActiveTag(null);
                  setVisibleCount(9);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative inline-flex flex-col items-center gap-1 px-6 py-4 rounded-2xl text-[14px] font-bold transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-penn-green text-white shadow-lg shadow-penn-green/20"
                    : "bg-gray-50 text-penn-navy/50 hover:bg-gray-100 hover:text-penn-navy/80"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </span>
                <span className={`text-[11px] font-medium ${activeTab === tab.key ? "text-white/60" : "text-penn-body/30"}`}>
                  {tab.desc}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Category filters (not shown on À la Une) */}
          {activeTab !== "alaune" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 mb-10 flex-wrap"
            >
              <button
                onClick={() => { setActiveTag(null); setVisibleCount(9); }}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold transition-all ${
                  activeTag === null
                    ? "bg-penn-navy text-white shadow-sm"
                    : "bg-gray-100 text-penn-body/60 hover:bg-gray-200 hover:text-penn-navy"
                }`}
              >
                Tous
              </button>
              {availableTags.map((tag) => {
                const c = tagColors[tag];
                return (
                  <button
                    key={tag}
                    onClick={() => { setActiveTag(tag); setVisibleCount(9); }}
                    className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold border transition-all ${
                      activeTag === tag
                        ? `${c.bg} ${c.text} ${c.border}`
                        : "bg-white border-gray-200 text-penn-body/60 hover:border-gray-300 hover:text-penn-navy"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + (activeTag || "all")}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured article (À la Une) */}
              {activeTab === "alaune" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl border border-penn-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                  onClick={() => setModalArticle(articleAlaUne)}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-[320px] lg:h-full min-h-[340px] overflow-hidden">
                      <Image
                        src={articleAlaUne.image!}
                        alt={articleAlaUne.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-penn-navy/40 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute top-5 left-5">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-penn-green text-white text-[12px] font-bold shadow-lg">
                          <Sparkles className="w-3 h-3" /> À la Une
                        </span>
                      </div>
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${tagColors[articleAlaUne.tag].bg} ${tagColors[articleAlaUne.tag].text} border ${tagColors[articleAlaUne.tag].border}`}>
                          {articleAlaUne.tag}
                        </div>
                        <div className="flex items-center gap-1.5 text-[13px] text-penn-body/50">
                          <Calendar className="w-3.5 h-3.5" />
                          {articleAlaUne.date}
                        </div>
                      </div>
                      <h2 className="text-[22px] md:text-[28px] font-extrabold text-penn-navy mb-4 leading-tight group-hover:text-penn-green transition-colors">
                        {articleAlaUne.title}
                      </h2>
                      <p className="text-[15px] text-penn-body/70 leading-relaxed mb-6">
                        {articleAlaUne.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-penn-green group-hover:gap-2.5 transition-all">
                        Lire l&apos;article complet <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Grid for Actualités & Événements */}
              {activeTab !== "alaune" && (
                <>
                  {filteredList.length === 0 ? (
                    <div className="text-center py-20">
                      <Megaphone className="w-12 h-12 text-penn-border mx-auto mb-4" />
                      <p className="text-penn-body/50 font-medium">Aucun article trouvé pour cette catégorie.</p>
                      <button onClick={() => setActiveTag(null)} className="mt-4 text-penn-green font-bold text-[14px] hover:underline">
                        Voir tous les articles
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {visibleArticles.map((article, idx) => (
                        <motion.article
                          key={article.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          className="bg-white rounded-2xl border border-penn-border/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-penn-green/20 transition-all duration-400 group cursor-pointer flex flex-col"
                          onClick={() => setModalArticle(article)}
                        >
                          {article.image ? (
                            <div className="relative h-[220px] overflow-hidden">
                              <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-600"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-penn-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                              <div className="absolute top-3 left-3">
                                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${tagColors[article.tag].bg} ${tagColors[article.tag].text} ${tagColors[article.tag].border} backdrop-blur-sm`}>
                                  {article.tag}
                                </span>
                              </div>
                              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 shadow-lg">
                                  <ChevronRight className="w-4 h-4 text-penn-navy" />
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="relative h-[220px] bg-gradient-to-br from-[#2B8FAB]/8 via-penn-bg-light to-[#2B8FAB]/4 flex items-center justify-center">
                              <Megaphone className="w-10 h-10 text-penn-green/15" />
                              <div className="absolute top-3 left-3">
                                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${tagColors[article.tag].bg} ${tagColors[article.tag].text} ${tagColors[article.tag].border}`}>
                                  {article.tag}
                                </span>
                              </div>
                            </div>
                          )}
                          <div className="p-5 flex flex-col flex-1">
                            <div className="flex items-center gap-2 text-[12px] text-penn-body/40 mb-3">
                              <Calendar className="w-3.5 h-3.5" />
                              <span className="font-medium">{article.date}</span>
                            </div>
                            <h3 className="text-[16px] font-extrabold text-penn-navy mb-2.5 group-hover:text-penn-green transition-colors line-clamp-2 leading-snug">
                              {article.title}
                            </h3>
                            <p className="text-[13px] text-penn-body/60 leading-relaxed line-clamp-3 flex-1">
                              {article.description}
                            </p>
                            <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-penn-green mt-4 group-hover:gap-2 transition-all">
                              Lire la suite <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* Load more */}
              {activeTab !== "alaune" && visibleArticles.length < filteredList.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center mt-12"
                >
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 9)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-penn-green text-penn-green font-bold text-[14px] hover:bg-penn-green hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-penn-green/20"
                  >
                    Afficher plus d&apos;articles
                    <ArrowDown className="w-4 h-4" />
                  </button>
                  <p className="text-[13px] text-penn-body/40 mt-3">
                    {visibleArticles.length} sur {filteredList.length} articles affichés
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─────────── NEWSLETTER EBS ─────────── */}
      <section className="section-padding bg-penn-navy relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,_#2B8FAB_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-[800px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <Badge variant="outline" size="lg" className="mb-4 border-white/20 text-white/80">Newsletter EBS</Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-white leading-[1.15] mb-4">
              Restez connecté à notre actualité
            </h2>
            <p className="text-[16px] text-white/70 leading-relaxed mb-8 max-w-[620px] mx-auto">
              Recevez les dernières actualités, les événements et les opportunités d'ESPIMA Business School directement dans votre boîte mail.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto mb-3"
            >
              <input
                type="email"
                required
                placeholder="Votre adresse e-mail"
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-penn-green text-[14px]"
              />
              <button
                type="submit"
                className="px-8 py-3.5 rounded-xl bg-penn-green text-white font-bold text-[14px] hover:bg-penn-green/90 transition-all shrink-0"
              >
                S'abonner
              </button>
            </form>
            <p className="text-[12px] text-white/40">
              Aucun spam. Désabonnement possible à tout moment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─────────── CONTACT ─────────── */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[800px] mx-auto px-5 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-penn-green/10 flex items-center justify-center mx-auto mb-6">
              <Megaphone className="w-8 h-8 text-penn-green" />
            </div>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15] mb-4">
              Une question ?
            </h2>
            <p className="text-[16px] text-penn-body leading-relaxed mb-10 max-w-[600px] mx-auto">
              Contactez notre équipe pour toute demande d&apos;information concernant nos événements et notre actualité.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[500px] mx-auto mb-10">
              <a
                href="tel:+216 55 582 843"
                className="flex items-center gap-3 justify-center p-4 bg-white rounded-xl border border-penn-border hover:border-penn-green/30 hover:shadow-md transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-penn-green" />
                <span className="text-[15px] font-bold text-penn-navy">+216 55 582 843</span>
              </a>
              <a
                href="mailto:info@ebs.tn"
                className="flex items-center gap-3 justify-center p-4 bg-white rounded-xl border border-penn-border hover:border-penn-green/30 hover:shadow-md transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-penn-green" />
                <span className="text-[15px] font-bold text-penn-navy">info@ebs.tn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaSection
        title="Découvrez toutes les actualités d'EBS."
        subtitle=""
        primaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />

      {/* ─────────── MODAL ─────────── */}
      <AnimatePresence>
        {modalArticle && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={() => setModalArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="relative bg-white rounded-2xl max-w-[760px] w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setModalArticle(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/95 hover:bg-white shadow-lg transition-all"
              >
                <X className="w-5 h-5 text-penn-navy" />
              </button>

              {modalArticle.image && (
                <div className="relative h-[300px]">
                  <Image
                    src={modalArticle.image}
                    alt={modalArticle.title}
                    fill
                    sizes="760px"
                    className="object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-penn-navy/60 to-transparent rounded-t-2xl" />
                </div>
              )}

              <div className="p-8 md:p-10">
                <div className="flex items-center flex-wrap gap-3 mb-5">
                  <div className={`px-3 py-1 rounded-full text-[12px] font-bold ${tagColors[modalArticle.tag].bg} ${tagColors[modalArticle.tag].text} border ${tagColors[modalArticle.tag].border}`}>
                    {modalArticle.tag}
                  </div>
                  <div className="flex items-center gap-1.5 text-[14px] text-penn-body/50">
                    <Calendar className="w-4 h-4 text-penn-green" />
                    {modalArticle.date}
                  </div>
                </div>

                <h2 className="text-[24px] md:text-[28px] font-extrabold text-penn-navy mb-6 leading-tight">
                  {modalArticle.title}
                </h2>

                {modalArticle.fullContent ? (
                  <div className="text-[15px] text-penn-body/80 leading-relaxed space-y-5 whitespace-pre-line">
                    {modalArticle.fullContent}
                  </div>
                ) : (
                  <p className="text-[15px] text-penn-body/80 leading-relaxed">
                    {modalArticle.description}
                  </p>
                )}

                <div className="mt-8 pt-6 border-t border-penn-border flex flex-wrap gap-4">
                  <Link
                    href="/preinscription"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-penn-green text-white text-[13px] font-bold hover:bg-penn-green/90 transition-all"
                  >
                    Rejoindre EBS <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/nos-programmes"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-penn-border text-penn-navy text-[13px] font-bold hover:border-penn-green/30 hover:text-penn-green transition-all"
                  >
                    Voir les formations
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
