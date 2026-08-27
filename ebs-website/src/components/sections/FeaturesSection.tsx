"use client";

import React from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Award, Brain, Target, Briefcase, Globe, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------
// BentoCard Component with Mouse-following Glow Effect
// ----------------------------------------------------------------------
function BentoCard({
  feature,
  className,
  isHero = false,
}: {
  feature: {
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
    image?: string;
  };
  className?: string;
  isHero?: boolean;
}) {
  const radius = 250;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = feature.icon;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[24px] bg-white border border-penn-border shadow-sm transition-all hover:shadow-xl",
        isHero && "bg-penn-navy border-transparent text-white",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Background Glow Effect */}
      {!isHero && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                ${radius}px circle at ${mouseX}px ${mouseY}px,
                ${feature.color}15,
                transparent 80%
              )
            `,
          }}
        />
      )}

      {/* Hero Card specific backgrounds */}
      {isHero && feature.image && (
        <>
          <div className="absolute inset-0 z-0 bg-penn-navy/20">
            <Image src={feature.image} alt={feature.title} fill className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 mix-blend-overlay" />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-penn-navy/90 via-penn-navy/40 to-transparent pointer-events-none" />
        </>
      )}

      {/* Content Content */}
      <div className={cn("relative z-10 flex flex-col h-full p-6 lg:p-8", isHero ? "justify-end" : "")}>
        <div 
          className={cn(
            "flex items-center justify-center rounded-2xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
            isHero ? "w-16 h-16 bg-white/10 backdrop-blur-md text-white mb-auto" : "w-12 h-12"
          )}
          style={!isHero ? { backgroundColor: `${feature.color}15`, color: feature.color } : {}}
        >
          <Icon className={cn(isHero ? "w-8 h-8" : "w-6 h-6")} />
        </div>
        
        <h3 className={cn(
          "font-extrabold leading-tight tracking-tight mb-3 transition-colors duration-300",
          isHero ? "text-[26px] lg:text-[32px] text-white" : "text-[18px] lg:text-[20px] text-penn-navy group-hover:text-penn-green"
        )}>
          {feature.title}
        </h3>
        
        <p className={cn(
          "leading-relaxed",
          isHero ? "text-[15px] lg:text-[17px] text-white/80 max-w-[90%]" : "text-[14px] lg:text-[15px] text-penn-body/80"
        )}>
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

// ----------------------------------------------------------------------
// Main Section
// ----------------------------------------------------------------------
export default function FeaturesSection() {
  const t = useTranslations("HomePage.features");

  // Raw features from translations
  const rawFeatures = [
    { icon: Award, color: "#2B8FAB", title: t("list.0.title"), description: t("list.0.desc") }, // Certifications
    { icon: Brain, color: "#9C27B0", title: t("list.1.title"), description: t("list.1.desc") }, // AI
    { icon: Target, color: "#FF5722", title: t("list.2.title"), description: t("list.2.desc") }, // Soft Skills
    { icon: Briefcase, color: "#00BCD4", title: t("list.3.title"), description: t("list.3.desc") }, // Coaching
    { icon: Globe, color: "#4CAF50", title: t("list.4.title"), description: t("list.4.desc") }, // International
    { icon: TrendingUp, color: "#E91E63", title: t("list.5.title"), description: t("list.5.desc") }, // Pro/Work-study
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <section className="section-padding bg-penn-bg-light relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-penn-green/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-penn-navy/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 lg:px-12 relative z-10">
        <SectionHeading 
          title={t("title")} 
          subtitle={
            <>
              {t("subtitle")} <span className="text-penn-green underline decoration-penn-green/30 decoration-4 underline-offset-4">{t("subtitleHighlight")}</span>
            </>
          } 
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12 lg:mt-16"
        >
          {/* Card 0: The Hero Card (Spans 2x2) */}
          <BentoCard 
            feature={{...rawFeatures[0], image: "/images/sections/features-group.jpg"}} 
            isHero={true}
            className="md:col-span-2 md:row-span-2 min-h-[350px] lg:min-h-[500px]" 
          />
          
          {/* Card 1: AI (Spans 2 cols) */}
          <BentoCard 
            feature={rawFeatures[1]} 
            className="md:col-span-2" 
          />

          {/* Card 2: Soft Skills (Spans 1 col) */}
          <BentoCard 
            feature={rawFeatures[2]} 
          />

          {/* Card 3: Coaching (Spans 1 col) */}
          <BentoCard 
            feature={rawFeatures[3]} 
          />

          {/* Card 4: International (Spans 2 cols) */}
          <BentoCard 
            feature={rawFeatures[4]} 
            className="md:col-span-2" 
          />

          {/* Card 5: Pro/Work-study (Spans 2 cols) */}
          <BentoCard 
            feature={rawFeatures[5]} 
            className="md:col-span-2" 
          />
        </motion.div>
      </div>
    </section>
  );
}
