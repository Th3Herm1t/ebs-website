"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useMotionValue, useTransform } from "motion/react";
import Image from "next/image";
import { Quote, PenLine, ArrowDown } from "lucide-react";
import { CtaSection } from "@/components/shared";

export default function MotDuPresidentPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const portraitRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const portraitX = useTransform(mouseX, [-400, 400], [-12, 12]);
  const portraitY = useTransform(mouseY, [-400, 400], [-12, 12]);
  const glowX = useTransform(mouseX, [-400, 400], [-30, 30]);
  const glowY = useTransform(mouseY, [-400, 400], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!portraitRef.current) return;
    const rect = portraitRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#2B8FAB] origin-left z-[9999]"
        style={{ scaleX }}
      />

      {/* ═══════════ HERO — Full-width immersive ═══════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Deep gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#141a2e] to-penn-navy" />

        {/* Abstract grid */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(43,143,171,0.5) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />

        {/* Animated ambient orbs */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(43,143,171,0.12) 0%, transparent 70%)",
            x: glowX, y: glowY,
          }}
        />

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2B8FAB]/25 to-transparent" />

        <div
          ref={portraitRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
          className="relative z-10 w-full max-w-[1400px] mx-auto px-5 lg:px-12 py-24 md:py-32"
        >
<div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-16 lg:gap-24 items-center">

            {/* LEFT — PORTRAIT (dominant visual) */}
            <motion.div
              style={{ x: portraitX, y: portraitY }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative mx-auto lg:mx-0 w-full max-w-[400px] lg:max-w-none"
            >
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 lg:-inset-6 rounded-[40px] lg:rounded-[48px] border border-white/[0.04] pointer-events-none" />
              <div className="absolute -inset-2 lg:-inset-3 rounded-[32px] lg:rounded-[40px] border border-white/[0.06] pointer-events-none" />

              {/* Main portrait card */}
              <div className="relative rounded-3xl lg:rounded-[36px] overflow-hidden border border-white/[0.06] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                <div className="aspect-[3/4] bg-gradient-to-br from-[#141e30] via-[#1a2744] to-[#0d1525] flex flex-col items-center justify-center relative overflow-hidden p-8">
                  {/* Decorative elements */}
                  <div className="absolute top-8 right-8 w-28 h-28 rounded-full border border-white/[0.02]" />
                  <div className="absolute top-20 left-12 w-16 h-16 rounded-full border border-white/[0.015]" />
                  <div className="absolute bottom-16 right-20 w-20 h-20 rounded-full border border-white/[0.02]" />

                  {/* Portrait placeholder — premium glass circle */}
                  <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-white/[0.06] to-white/[0.02] border-2 border-white/[0.08] flex items-center justify-center mb-6 shadow-[0_0_80px_rgba(43,143,171,0.1)] relative">
                    <div className="absolute inset-0 rounded-full border border-white/[0.04] scale-75" />
                    <div className="absolute inset-0 rounded-full border border-white/[0.02] scale-50" />
                    <PenLine className="w-10 h-10 lg:w-12 lg:h-12 text-[#2B8FAB]/20" />
                  </div>

                  <p className="text-white/15 text-[13px] font-medium tracking-wide text-center">
                    Portrait du Président
                  </p>
                </div>

                {/* Name overlay at bottom of portrait */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/95 to-transparent">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-12 rounded-full bg-[#2B8FAB]" />
                    <div>
                      <p className="text-[20px] lg:text-[24px] font-extrabold text-white leading-tight">Abderraouf NAJAR</p>
                      <p className="text-[14px] lg:text-[15px] text-[#2B8FAB] font-semibold">Président-Fondateur</p>
                      <p className="text-[12px] lg:text-[13px] text-white/30">Espima Business School</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating quote badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 -right-2 lg:-right-4 bg-[#141e30] border border-white/[0.08] rounded-2xl px-6 py-4 shadow-2xl backdrop-blur-sm max-w-[280px]"
              >
                <Quote className="w-4 h-4 text-[#2B8FAB]/30 mb-2" />
                <p className="text-[14px] text-white/60 leading-relaxed italic">
                  &ldquo;Votre avenir commence ici.&rdquo;
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT — TEXT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-3 text-[#2B8FAB]/60 text-[12px] font-bold uppercase tracking-[4px] mb-8">
                  <div className="w-8 h-px bg-[#2B8FAB]/30" />
                  Espima Business School
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-[48px] md:text-[64px] lg:text-[80px] font-extrabold text-white leading-[0.95] tracking-[-1.5px] mb-6"
              >
                Le Mot du<br />
                <span className="text-[#2B8FAB]">Président</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-[17px] md:text-[19px] text-white/45 leading-relaxed max-w-[500px]"
              >
                Un message personnel du fondateur d&apos;Espima Business School à celles et ceux qui construiront demain.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-12"
              >
                <ArrowDown className="w-5 h-5 text-white/20 animate-bounce" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ THE LETTER ═══════════ */}
      <section className="section-padding bg-[#F5F5F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]"
          style={{ backgroundImage: "radial-gradient(circle, #000 0.5px, transparent 0.5px)", backgroundSize: "8px 8px" }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[200px] bg-[#2B8FAB]/[0.02] pointer-events-none" />

        <div className="relative z-10 max-w-[800px] mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-gray-100 p-8 md:p-14 lg:p-20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2B8FAB] via-[#2B8FAB]/40 to-transparent" />

            {/* Folded corner */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden z-20">
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-gray-50 border-l-[60px] border-l-transparent" />
            </div>

            {/* Drop cap */}
            <div className="mb-10">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="float-left text-[100px] md:text-[120px] leading-[0.65] font-serif text-[#2B8FAB] mr-4 mt-3 font-bold"
              >
                C
              </motion.span>
              <p className="text-[18px] md:text-[20px] text-penn-navy leading-relaxed pt-2 font-medium">
                hères étudiantes, chers étudiants, chères familles,
              </p>
            </div>

            <div className="space-y-8 text-[16px] md:text-[18px] text-penn-navy/80 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Depuis la fondation d&apos;Espima Business School en 2013, notre engagement a toujours été le même :{' '}
                <span className="text-penn-navy font-semibold">vous offrir une formation d&apos;excellence</span> qui vous prépare réellement au monde professionnel d&apos;aujourd&apos;hui et de demain.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="relative pl-8 border-l-[3px] border-[#2B8FAB]/20"
              >
                En 2026, nous avons pris une décision stratégique majeure : intégrer l&apos;Intelligence Artificielle comme compétence fondamentale obligatoire dans l&apos;ensemble de nos programmes.{' '}
                <span className="text-penn-navy font-semibold">Ce n&apos;est pas une tendance que nous suivons — c&apos;est notre responsabilité envers vous.</span> Le monde du travail a changé, et EBS s&apos;est transformée pour vous y préparer mieux que quiconque.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                En parallèle, nous avons noué des partenariats avec les plus grandes organisations mondiales de certification — Google, IBM, Harvard, Cisco, Bloomberg — pour vous permettre d&apos;obtenir, gratuitement et durant vos études, des certifications reconnues partout dans le monde.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.65 }}
              >
                Rejoindre EBS, c&apos;est choisir une trajectoire professionnelle ambitieuse, soutenue par une équipe pédagogique dédiée, des outils d&apos;apprentissage de pointe, et un réseau international solide.
              </motion.p>
            </div>

            {/* Closing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="my-14 h-px bg-gradient-to-r from-penn-border via-[#2B8FAB]/20 to-transparent origin-left"
              />

              <p className="text-[19px] md:text-[22px] text-penn-navy font-bold leading-relaxed mb-10">
                Bienvenue chez EBS. Votre avenir commence ici.
              </p>

              <div className="flex items-end justify-between gap-8">
                <div>
                  <p className="text-[22px] font-extrabold text-penn-navy leading-tight">Abderraouf NAJAR</p>
                  <p className="text-[15px] text-penn-body">Président — Espima Business School</p>
                  <p className="text-[13px] text-penn-body/40 mt-1">Tunis, le 8 Juin 2026</p>
                </div>

                <div className="hidden md:flex w-20 h-20 rounded-full border-[3px] border-penn-border items-center justify-center shrink-0 opacity-20">
                  <div className="text-center -space-y-0.5">
                    <p className="text-[9px] font-extrabold text-penn-navy leading-none tracking-wider">EBS</p>
                    <p className="text-[8px] text-penn-navy/60 leading-none">2013</p>
                    <div className="w-5 h-px bg-penn-navy/30 mx-auto mt-0.5" />
                    <p className="text-[6px] text-penn-navy/40 leading-none mt-0.5">TUNIS</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CtaSection
        title="Rejoignez la famille EBS."
        subtitle="Découvrez nos programmes et construisez votre avenir avec nous."
        primaryCta={{ label: "Voir nos programmes", href: "/licences" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
