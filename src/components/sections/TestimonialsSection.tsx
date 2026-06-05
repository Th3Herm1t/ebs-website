"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import SectionHeading from "@/components/ui/SectionHeading";
import HeroBackgroundVariant2 from "./HeroBackgroundVariant2";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations('HomePage.testimonials');
  const testimonials = t.raw('list') as any[];

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
          {testimonials.map((testimonial, i) => (
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
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author */}
              <div className={`flex items-center gap-4 p-[20px] ${testimonial.bgClass} rounded-b-[10px]`}>
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full w-[60px] h-[60px] object-cover"
                />
                <div>
                  <h4 className="text-penn-navy font-extrabold text-[17px]">{testimonial.name}</h4>
                  <small className="text-penn-body">{testimonial.role}</small>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
