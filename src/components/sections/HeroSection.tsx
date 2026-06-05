"use client";

import Image from "next/image";
import { motion } from "motion/react";
import HeroBackground from "./HeroBackground";
import { GraduationCap, Award, Globe, Briefcase, TrendingUp, LineChart, Monitor, Brain, Shield } from "lucide-react";
import { useTranslations } from 'next-intl';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HeroSection() {
  const t = useTranslations('HomePage.hero');

  const courseCategories = [
    { title: t('categories.Licence'), count: 4, icon: GraduationCap, badgeColor: "bg-[#f4a261]" },
    { title: t('categories.Master'), count: 3, icon: Award, badgeColor: "bg-[#84cc16]" },
    { title: t('categories.Parcours International'), count: 7, icon: Globe, badgeColor: "bg-[#8b5cf6]" },
    { title: t('categories.Management'), count: 2, icon: Briefcase, badgeColor: "bg-[#3b82f6]" },
    { title: t('categories.Marketing'), count: 2, icon: TrendingUp, badgeColor: "bg-[#ec4899]" },
    { title: t('categories.Finance'), count: 2, icon: LineChart, badgeColor: "bg-[#14b8a6]" },
    { title: t('categories.Informatique'), count: 1, icon: Monitor, badgeColor: "bg-[#f43f5e]" },
    { title: t('categories.Intelligence Artificielle'), count: 1, icon: Brain, badgeColor: "bg-[#a855f7]" },
    { title: t('categories.Cybersécurité'), count: 1, icon: Shield, badgeColor: "bg-[#eab308]" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center max-md:h-auto max-md:py-[80px] overflow-hidden"
    >
      <HeroBackground />
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-wrap items-center">
          {/* Left content — col-lg-6 */}
          <div className="w-full lg:w-6/12">
            <div className="py-10 max-md:py-0 relative">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[38px] md:text-[50px] xl:text-[60px] font-extrabold leading-[1.15] tracking-tight mb-6 md:mb-8 text-[#232434]"
              >
                {t('title1')} <span className="text-[#2a9d8f]">{t('titleHighlight')}</span> {t('title2')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 font-normal text-[16px] md:text-[18px] text-[#42474c] leading-[1.8] max-w-2xl pr-0 md:pr-8"
              >
                <strong className="text-[#232434] text-[18px] md:text-[20px] block mb-2 md:mb-3">{t('desc1')}</strong>
                {t('desc2')}
              </motion.p>

              {/* Category Slider Block */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative mt-4 w-full max-w-[550px]"
              >
                <div className="flex flex-col items-end mb-2 relative z-20 pr-4 md:pr-8">
                  <span className="text-[16px] md:text-[18px] text-[#2a9d8f] font-semibold italic text-right leading-tight w-[200px]">
                    {t('sliderTitle')}
                  </span>
                  <svg width="45" height="45" viewBox="0 0 100 100" fill="none" className="text-[#2a9d8f] mr-6 md:mr-12 mt-1">
                    <path d="M90,10 Q40,30 20,90" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <polygon points="20,90 32,78 14,75" fill="currentColor" />
                  </svg>
                </div>
                
                {/* Shadcn Carousel */}
                <div className="px-0 md:px-12">
                  <Carousel
                    opts={{
                      align: "start",
                      dragFree: true,
                      duration: 40,
                      loop: true,
                    }}
                    className="w-full relative z-20"
                  >
                    <CarouselContent className="-ml-4">
                      {courseCategories.map((cat, idx) => (
                        <CarouselItem key={idx} className="pl-4 basis-[140px] md:basis-[160px]">
                          <div className="w-full h-[150px] md:h-[160px] relative bg-transparent border border-dashed border-[#a3a3a3] flex flex-col items-center justify-center p-3 md:p-4 transition-all duration-300 hover:border-[#2a9d8f] cursor-pointer group">
                            {/* Badge */}
                            <div className={`absolute top-2 right-2 text-white text-[10px] font-bold px-1.5 py-0.5 rounded ${cat.badgeColor}`}>
                              +{cat.count}
                            </div>
                            {/* Thin Icon */}
                            <div className="mb-2 md:mb-3">
                              <cat.icon className="w-10 h-10 md:w-12 md:h-12 text-[#42474c] stroke-[1px] group-hover:text-[#2a9d8f] transition-colors" />
                            </div>
                            {/* Text */}
                            <h3 className="text-center font-bold text-[#232434] text-[12px] md:text-[13px] leading-snug group-hover:text-[#2a9d8f] transition-colors">
                              {cat.title}
                            </h3>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                      <CarouselPrevious className="border-2 border-penn-green bg-transparent text-penn-green hover:bg-penn-green hover:text-white transition-all duration-300" />
                      <CarouselNext className="border-2 border-penn-green bg-transparent text-penn-green hover:bg-penn-green hover:text-white transition-all duration-300" />
                    </div>
                  </Carousel>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right image — col-lg-6 */}
          <div className="w-full lg:w-6/12 flex items-center justify-center lg:justify-end mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative inline-block w-full max-w-[500px] lg:max-w-[700px]"
            >
              <Image
                src="/images/all-img/hero.png"
                alt="EBS Student"
                width={800}
                height={900}
                className="relative z-10 object-contain w-full h-auto"
                priority
              />

              {/* Floating card — 7500+ Active student (bottom-left of image) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-[60%] lg:top-[50%] -left-[10px] lg:-left-[30px] bg-white w-[160px] lg:w-[200px] p-3 lg:p-5 rounded-[20px] lg:rounded-[30px] shadow-[0px_0_30px_rgba(1,41,112,0.15)] z-20"
              >
                <Image src="/images/icon/user2.svg" alt="" width={40} height={40} className="float-left mr-2.5 w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]" />
                <h2 className="text-penn-navy font-extrabold overflow-hidden text-[18px] lg:text-[24px]">7500+</h2>
                <span className="text-[12px] lg:text-[14px] text-penn-body">{t('stats.active')}</span>
              </motion.div>

              {/* Floating card — 4500+ Online Course (top-right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-[5%] lg:top-[10%] -right-[10px] lg:-right-[20px] bg-white w-[160px] lg:w-[200px] p-3 lg:p-5 rounded-[20px] lg:rounded-[30px] shadow-[0px_0_30px_rgba(1,41,112,0.15)] z-20"
              >
                <Image src="/images/icon/file2.svg" alt="" width={40} height={40} className="float-left mr-2.5 w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]" />
                <h2 className="text-penn-navy font-extrabold overflow-hidden text-[18px] lg:text-[24px]">4500+</h2>
                <span className="text-[12px] lg:text-[14px] text-penn-body">{t('stats.online')}</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
