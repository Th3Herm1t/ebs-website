"use client";

import Image from "next/image";
import Link from "next/link";
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
import Autoplay from "embla-carousel-autoplay";

export default function HeroSection() {
  const t = useTranslations('HomePage.hero');

  const courseCategories = [
    { title: t('categories.Licence'), count: 4, icon: GraduationCap, badgeColor: "bg-[#f4a261]", href: "/licences" },
    { title: t('categories.Master'), count: 3, icon: Award, badgeColor: "bg-[#84cc16]", href: "/masters" },
    { title: t('categories.Parcours International'), count: 14, icon: Globe, badgeColor: "bg-[#8b5cf6]", href: "/parcours-international" },
    { title: t('categories.Management'), count: 2, icon: Briefcase, badgeColor: "bg-[#3b82f6]", href: "/licences?program=management" },
    { title: t('categories.Marketing'), count: 2, icon: TrendingUp, badgeColor: "bg-[#ec4899]", href: "/licences?program=marketing" },
    { title: t('categories.Finance'), count: 2, icon: LineChart, badgeColor: "bg-[#14b8a6]", href: "/licences?program=finance" },
    { title: t('categories.Informatique'), count: 3, icon: Monitor, badgeColor: "bg-[#f43f5e]", href: "/licences?program=informatique-standard" },
    { title: t('categories.Intelligence Artificielle'), count: 1, icon: Brain, badgeColor: "bg-[#a855f7]", href: "/licences?program=informatique-ia" },
    { title: t('categories.Cybersécurité'), count: 1, icon: Shield, badgeColor: "bg-[#eab308]", href: "/licences?program=cybersecurite" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center max-md:h-auto max-md:py-[80px] pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden"
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
                className="text-[38px] md:text-[50px] xl:text-[60px] font-extrabold leading-tight tracking-tight mb-6 md:mb-8 text-[#232434]"
              >
                {t('title1')} <span className="text-[#2B8FAB]">{t('titleHighlight')}</span> {t('title2')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 font-normal text-[16px] md:text-[18px] text-[#42474c] leading-tight max-w-2xl pr-0 md:pr-8"
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
                  <span className="text-[16px] md:text-[18px] text-[#2B8FAB] font-semibold italic text-right leading-tight w-[200px]">
                    {t('sliderTitle')}
                  </span>
                  <svg width="45" height="45" viewBox="0 0 100 100" fill="none" className="text-[#2B8FAB] mr-6 md:mr-12 mt-1">
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
                    plugins={[
                      Autoplay({
                        delay: 3000,
                        stopOnInteraction: false,
                      }),
                    ]}
                    className="w-full relative z-20"
                  >
                    <CarouselContent className="-ml-4">
                      {courseCategories.map((cat, idx) => (
                        <CarouselItem key={idx} className="pl-4 basis-[140px] md:basis-[160px]">
                          <Link href={cat.href} className="w-full h-[150px] md:h-[160px] relative bg-transparent border border-dashed border-[#a3a3a3] flex flex-col items-center justify-center p-3 md:p-4 transition-all duration-300 hover:border-[#2B8FAB] cursor-pointer group">
                            {/* Badge */}
                            <div className={`absolute top-2 right-2 text-white text-[10px] font-bold px-1.5 py-0.5 rounded ${cat.badgeColor}`}>
                              {cat.count}
                            </div>
                            {/* Thin Icon */}
                            <div className="mb-2 md:mb-3">
                              <cat.icon className="w-10 h-10 md:w-12 md:h-12 text-[#42474c] stroke-[1px] group-hover:text-[#2B8FAB] transition-colors" />
                            </div>
                            {/* Text */}
                            <h3 className="text-center font-bold text-[#232434] text-[12px] md:text-[13px] leading-snug group-hover:text-[#2B8FAB] transition-colors">
                              {cat.title}
                            </h3>
                          </Link>
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

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
