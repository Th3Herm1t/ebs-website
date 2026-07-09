"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Calendar,
  ChevronDown,
  Clock,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Smartphone,
} from "lucide-react";
import { Badge, CtaSection } from "@/components/shared";

const contactCards = [
  {
    icon: <MapPin className="w-7 h-7" />,
    title: "Adresse",
    lines: ["Immeuble EBS, 10 rue Socrate", "Z.I Kheireddine - Les Berges du Lac III", "Tunis, Tunisie"],
    action: { label: "Voir sur la carte", href: "#map" },
    color: "#2B8FAB",
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "Téléphone",
    lines: ["+216 55 582 843"],
    action: { label: "Appeler", href: "tel:+21629582835" },
    color: "#2196F3",
  },
  {
    icon: <Mail className="w-7 h-7" />,
    title: "Email",
    lines: ["info@ebs.tn"],
    action: { label: "Écrire", href: "mailto:info@ebs.tn" },
    color: "#E91E8C",
  },
];

const quickActions = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Pré-inscription",
    desc: "Candidatures 2026–2027 ouvertes. Early Bird jusqu'au 30 Juin.",
    href: "/preinscription",
    label: "Postuler",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Prendre rendez-vous",
    desc: "Visitez notre campus et rencontrez notre équipe pédagogique.",
    href: "tel:+21629582835",
    label: "Appeler",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "WhatsApp",
    desc: "Échangez directement avec notre équipe sur WhatsApp.",
    href: "https://wa.me/21629582835",
    label: "Discuter",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Entreprises",
    desc: "Proposez un partenariat, un stage ou un recrutement.",
    href: "/partenaires-economiques",
    label: "Collaborer",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    "w-full px-5 py-3.5 bg-penn-bg-light border border-penn-border rounded-xl text-[15px] text-penn-navy placeholder:text-penn-body/40 focus:outline-none focus:border-[#2B8FAB] focus:bg-white focus:shadow-md transition-all duration-300";

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
              Nous sommes à votre écoute
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[42px] md:text-[58px] lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-[-1px] mb-6"
          >
            Parlons de votre
            <br />
            <span className="text-[#2B8FAB]">avenir</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[17px] md:text-[18px] text-white/70 leading-relaxed max-w-[600px] mb-12"
          >
            Une question sur nos programmes ? Une demande d&apos;inscription ?
            Notre équipe vous répond sous 24h. Par téléphone, email, WhatsApp ou
            directement sur place.
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

      {/* ═══════════ CONTACT CARDS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl border border-penn-border p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${card.color}15` }}
                >
                  <span style={{ color: card.color }}>{card.icon}</span>
                </div>
                <h3 className="text-[20px] font-extrabold text-penn-navy mb-3">
                  {card.title}
                </h3>
                {card.lines.map((line, j) => (
                  <p
                    key={j}
                    className="text-[15px] text-penn-body leading-relaxed"
                  >
                    {line}
                  </p>
                ))}
                <a
                  href={card.action.href}
                  className="inline-flex items-center gap-1.5 mt-5 text-[14px] font-bold text-[#2B8FAB] hover:underline"
                >
                  {card.action.label}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CONTACT FORM ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-12"
          >
            <Badge variant="default" size="lg" className="mb-4">
              Contact
            </Badge>
            <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
              Envoyez-nous votre message
            </h2>
            <p className="text-[16px] text-penn-body mt-3 max-w-[550px] mx-auto">
              Remplissez le formulaire ci-dessous et nous vous répondrons dans
              les plus brefs délais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-penn-border p-6 lg:p-10 shadow-sm"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-[#2B8FAB]" />
                </div>
                <h3 className="text-[24px] font-extrabold text-penn-navy mb-3">
                  Message envoyé !
                </h3>
                <p className="text-[15px] text-penn-body leading-relaxed max-w-[400px] mx-auto">
                  Merci pour votre message. Notre équipe vous répondra dans les
                  24 heures.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[14px] font-bold text-penn-navy mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      className={inputClasses}
                      placeholder="Votre nom"
                      value={form.nom}
                      onChange={(e) =>
                        setForm({ ...form, nom: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-bold text-penn-navy mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className={inputClasses}
                      placeholder="votre@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[14px] font-bold text-penn-navy mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      className={inputClasses}
                      placeholder="+216 XX XXX XXX"
                      value={form.telephone}
                      onChange={(e) =>
                        setForm({ ...form, telephone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-bold text-penn-navy mb-2">
                      Sujet
                    </label>
                    <select
                      className={inputClasses}
                      value={form.sujet}
                      onChange={(e) =>
                        setForm({ ...form, sujet: e.target.value })
                      }
                      required
                    >
                      <option value="" disabled>
                        Choisissez un sujet
                      </option>
                      <option value="inscription">Inscription / Admission</option>
                      <option value="programme">
                        Information sur un programme
                      </option>
                      <option value="certification">Certifications</option>
                      <option value="international">International</option>
                      <option value="stage">Stage / Alternance</option>
                      <option value="partenariat">
                        Partenariat entreprise
                      </option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-penn-navy mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className={`${inputClasses} resize-none`}
                    placeholder="Votre message..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#2B8FAB] text-white font-bold text-[15px] py-3.5 px-10 rounded-full hover:bg-[#2B8FAB]/90 transition-all duration-300 shadow-lg shadow-[#2B8FAB]/20 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Envoyer le message
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ MAP ═══════════ */}
      <section id="map" className="relative w-full h-[400px] bg-penn-bg-light">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.234567890!2d10.181000!3d36.853000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd37c5e3456789%3A0x1234567890abcdef!2sLac%20III%2C%20Tunis!5e0!3m2!1sfr!2stn!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Campus EBS"
        />
      </section>

      {/* ═══════════ QUICK ACTIONS ═══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-[28px] md:text-[34px] font-extrabold text-penn-navy text-center mb-12"
          >
            Actions rapides
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, i) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={action.href}
                  className="group bg-white rounded-2xl border border-penn-border p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#2B8FAB]/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center mb-4 text-[#2B8FAB] group-hover:scale-110 transition-transform">
                    {action.icon}
                  </div>
                  <h3 className="text-[17px] font-extrabold text-penn-navy mb-2 group-hover:text-[#2B8FAB] transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-[14px] text-penn-body leading-relaxed mb-4 flex-1">
                    {action.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#2B8FAB]">
                    {action.label}
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

      {/* ═══════════ HORAIRES ═══════════ */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[600px] mx-auto px-5 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
          >
            <div className="w-12 h-12 rounded-xl bg-[#2B8FAB]/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-[#2B8FAB]" />
            </div>
            <h3 className="text-[20px] font-extrabold text-penn-navy mb-2">
              Horaires d&apos;ouverture
            </h3>
            <p className="text-[15px] text-penn-body leading-relaxed">
              Lundi - Vendredi : 8h00 - 18h00
              <br />
              Samedi : 9h00 - 13h00
              <br />
              Dimanche : Fermé
            </p>
          </motion.div>
        </div>
      </section>

      <CtaSection
        title="Prêt à rejoindre EBS ?"
        subtitle="Déposez votre candidature dès maintenant. C'est gratuit et sans engagement."
        primaryCta={{ label: "Pré-inscription", href: "/preinscription" }}
        secondaryCta={{ label: "Voir nos programmes", href: "/nos-programmes" }}
        background="penn-green"
      />
    </>
  );
}
