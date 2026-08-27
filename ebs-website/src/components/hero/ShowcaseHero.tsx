"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Badge } from "@/components/shared/Badge";
import { cn } from "@/lib/utils";
import { fadeUp, staggerDelay, transitions } from "@/lib/animation";

export interface FloatingCard {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: string;
  offsetY: number; // For initial staggered positioning
  parallaxSpeed: number; // Multiplier for parallax effect
}

interface ShowcaseHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  cards: FloatingCard[];
}

export function ShowcaseHero({ badge, title, subtitle, cards }: ShowcaseHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Title words for staggered reveal
  const titleWords = title.split(" ");

  return (
    <section ref={containerRef} className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#FAFAFA] overflow-hidden">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(43,143,171,0.15) 0%, rgba(43,143,171,0) 70%)' }}
          animate={prefersReducedMotion ? undefined : { x: [0, 24, 0], y: [0, 16, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[10%] -right-[10%] w-[50%] h-[70%] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(156,39,176,0.1) 0%, rgba(156,39,176,0) 70%)' }}
          animate={prefersReducedMotion ? undefined : { x: [0, -20, 0], y: [0, -24, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(232,151,69,0.12) 0%, rgba(232,151,69,0) 70%)' }}
          animate={prefersReducedMotion ? undefined : { x: [0, 18, 0], y: [0, -22, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text (60%) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...transitions.reveal, delay: 0.08 }}
            >
              <Badge variant="default" size="lg" className="mb-6">{badge}</Badge>
            </motion.div>

            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-extrabold text-penn-navy leading-[1.05] tracking-[-1px] mb-6 flex flex-wrap gap-x-[0.25em] gap-y-2">
              {titleWords.map((word, i) => {
                const isLast = i === titleWords.length - 1;
                const hasDot = isLast && word.endsWith(".");
                const displayWord = hasDot ? word.slice(0, -1) : word;
                
                return (
                  <span key={i} className="overflow-hidden inline-block">
                    <motion.span
                      className="inline-block"
                      initial={{ opacity: 0, y: "70%" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        ...transitions.spring,
                        delay: prefersReducedMotion ? 0 : 0.08 + staggerDelay(i, 0.18),
                      }}
                    >
                      {displayWord}
                    </motion.span>
                    {hasDot && (
                      <span className="text-penn-green">.</span>
                    )}
                  </span>
                );
              })}
            </h1>

            <motion.p 
              className="text-[17px] md:text-[19px] text-penn-body leading-relaxed max-w-[560px]"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...transitions.reveal, delay: prefersReducedMotion ? 0 : 0.28 }}
            >
              {subtitle}
            </motion.p>
          </motion.div>

          {/* Right Column: Bento Widgets (40%) */}
          <motion.div 
            className="lg:col-span-5 relative w-full mt-12 lg:mt-0 flex flex-col justify-center perspective-[1000px]"
          >
            <div className="grid grid-cols-2 gap-4 lg:gap-5 w-full">
              {cards.map((card, i) => (
                <BentoStatCard key={i} card={card} index={i} />
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

function BentoStatCard({ card, index }: { card: FloatingCard, index: number }) {
  // First card takes full width (col-span-2), others take 1 column
  const isLarge = index === 0;

  return (
    <motion.div
      className={cn(
        "relative group bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 overflow-hidden",
        isLarge ? "col-span-2" : "col-span-1"
      )}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ...transitions.spring,
        delay: 0.32 + staggerDelay(index, 0.16),
      }}
      whileHover={{ y: -4 }}
    >
      {/* Background Glow Effect on Hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${card.color}, transparent 70%)` }}
      />

      <div className={cn("relative z-10 flex", isLarge ? "flex-row items-center gap-6" : "flex-col items-start gap-4")}>
        <div 
          className={cn(
            "rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-110",
            isLarge ? "w-16 h-16" : "w-12 h-12"
          )}
          style={{ backgroundColor: `${card.color}15`, color: card.color }}
        >
          {card.icon}
        </div>
        
        <div className="flex-1">
          <h4 className={cn(
            "font-extrabold text-penn-navy leading-tight",
            isLarge ? "text-[24px] md:text-[32px] mb-1" : "text-[18px] md:text-[22px] mb-2"
          )}>
            {card.title}
          </h4>
          <p className={cn(
            "text-penn-body leading-snug",
            isLarge ? "text-[15px] md:text-[17px]" : "text-[13px] md:text-[15px]"
          )}>
            {card.subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
