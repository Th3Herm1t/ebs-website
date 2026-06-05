"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import SectionHeading from "@/components/ui/SectionHeading";
import HeroBackgroundVariant2 from "./HeroBackgroundVariant2";

const testimonials = [
  { 
    img: "/images/all-img/t1-stock.jpg", 
    name: "Yassine B.", 
    role: "Étudiant en Master Finance", 
    bgClass: "bg-[#e1f7e8]",
    text: "Grâce à l'EBS, j'ai décroché mon premier emploi avant même la fin de mon Master."
  },
  { 
    img: "/images/all-img/t2-stock.jpg", 
    name: "Sarah M.", 
    role: "Étudiante en Marketing", 
    bgClass: "bg-[#f7e8d8]",
    text: "Une expérience inoubliable avec des professeurs passionnés et un accompagnement très personnalisé."
  },
  { 
    img: "/images/all-img/t3-stock.jpg", 
    name: "Ahmed T.", 
    role: "Alumni EBS", 
    bgClass: "bg-[#e8e8e8]",
    text: "Le partenariat avec l'UQAT m'a ouvert les portes d'une belle carrière à l'international."
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations('HomePage.testimonials');

  return (
    <section className="relative overflow-hidden section-padding" ref={ref}>
      <HeroBackgroundVariant2 />
      <div className="relative z-10 max-w-[1140px] mx-auto px-4">
        <div className="flex items-start justify-between mb-[50px]">
          <SectionHeading 
            title={t('title')} 
            subtitle={
              <>{t('subtitle')} <span className="text-penn-green underline decoration-penn-green">{t('subtitleHighlight')}</span></>
            }
            className="!mb-0"
          />
          <div className="flex gap-2 mt-8 max-md:hidden">
            <button className="w-10 h-10 rounded-full border border-penn-border flex items-center justify-center text-penn-navy hover:bg-penn-green hover:text-white hover:border-penn-green transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border border-penn-border flex items-center justify-center text-penn-navy hover:bg-penn-green hover:text-white hover:border-penn-green transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-[10px] overflow-hidden flex flex-col h-full"
            >
              {/* Stars + Quote */}
              <div className="bg-white border border-penn-border p-[30px] rounded-t-[10px] flex flex-col justify-center flex-1">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-[#f9b401] fill-[#f9b401]" />
                  ))}
                </div>
                <p className="text-penn-body leading-[26px] italic">
                  "{t.text}"
                </p>
              </div>

              {/* Author */}
              <div className={`flex items-center gap-4 p-[20px] ${t.bgClass} rounded-b-[10px]`}>
                <Image
                  src={t.img}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="rounded-full w-[60px] h-[60px] object-cover"
                />
                <div>
                  <h4 className="text-penn-navy font-extrabold text-[17px]">{t.name}</h4>
                  <small className="text-penn-body">{t.role}</small>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
