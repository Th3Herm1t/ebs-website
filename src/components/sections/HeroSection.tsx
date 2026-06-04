"use client";

import Image from "next/image";
import { motion } from "motion/react";
import HeroBackground from "./HeroBackground";
import { GraduationCap, Award, Globe, Briefcase, TrendingUp, LineChart, Monitor, Brain, Shield } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const courseCategories = [
  { title: "Licence", count: 4, icon: GraduationCap, badgeColor: "bg-[#f4a261]" },
  { title: "Master", count: 3, icon: Award, badgeColor: "bg-[#84cc16]" },
  { title: "Parcours International", count: 7, icon: Globe, badgeColor: "bg-[#8b5cf6]" },
  { title: "Management", count: 2, icon: Briefcase, badgeColor: "bg-[#3b82f6]" },
  { title: "Marketing", count: 2, icon: TrendingUp, badgeColor: "bg-[#ec4899]" },
  { title: "Finance", count: 2, icon: LineChart, badgeColor: "bg-[#14b8a6]" },
  { title: "Informatique", count: 1, icon: Monitor, badgeColor: "bg-[#f43f5e]" },
  { title: "Intelligence Artificielle", count: 1, icon: Brain, badgeColor: "bg-[#a855f7]" },
  { title: "Cybersécurité", count: 1, icon: Shield, badgeColor: "bg-[#eab308]" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center max-md:h-auto max-md:pb-20 overflow-hidden"
    >
      <HeroBackground />
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-wrap items-center">
          {/* Left content — col-lg-6 */}
          <div className="w-full lg:w-6/12">
            <div className="py-10 relative">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[55px] md:text-[65px] xl:text-[80px] font-extrabold leading-[1.05] tracking-tight mb-8 text-[#232434]"
              >
                La <span className="text-[#2a9d8f] inline-block">Business School</span> Tournée vers Le Futur
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 font-normal text-[18px] text-[#42474c] leading-[1.8] max-w-2xl pr-8"
              >
                <strong className="text-[#232434] text-[20px] block mb-3">Formez-vous pour le monde de demain</strong>
                Business · Finance · Technologie · Intelligence Artificielle · Cybersécurité · Licences et Masters reconnus avec +150 certifications internationales gratuites disponibles
              </motion.p>

              {/* Category Slider Block (adapted from Educa Template) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative mt-4 w-full max-w-[550px]"
              >
                <div className="flex flex-col items-end mb-2 relative z-20 pr-8">
                  <span className="text-[18px] text-[#2a9d8f] font-semibold italic text-right leading-tight">
                    Trouver le parcours<br />qui vous convient
                  </span>
                  <svg width="45" height="45" viewBox="0 0 100 100" fill="none" className="text-[#2a9d8f] mr-12 mt-1">
                    <path d="M90,10 Q40,30 20,90" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <polygon points="20,90 32,78 14,75" fill="currentColor" />
                  </svg>
                </div>
                
                {/* Shadcn Carousel */}
                <Carousel
                  opts={{
                    align: "start",
                    dragFree: true,
                  }}
                  className="w-full relative z-20"
                >
                  <CarouselContent className="-ml-4">
                    {courseCategories.map((cat, idx) => (
                      <CarouselItem key={idx} className="pl-4 basis-[160px]">
                        <div className="w-[150px] h-[160px] relative bg-transparent border border-dashed border-[#a3a3a3] flex flex-col items-center justify-center p-4 transition-all duration-300 hover:border-[#2a9d8f] cursor-pointer group">
                          {/* Badge exactly like Educa */}
                          <div className={`absolute top-2 right-2 text-white text-[10px] font-bold px-1.5 py-0.5 rounded ${cat.badgeColor}`}>
                            +{cat.count}
                          </div>
                          {/* Thin Icon exactly like Educa */}
                          <div className="mb-3">
                            <cat.icon className="w-12 h-12 text-[#42474c] stroke-[1px] group-hover:text-[#2a9d8f] transition-colors" />
                          </div>
                          {/* White/Dark text depending on background (using dark since our hero is light) */}
                          <h3 className="text-center font-bold text-[#232434] text-[13px] leading-snug group-hover:text-[#2a9d8f] transition-colors">
                            {cat.title}
                          </h3>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="hidden md:block">
                    <CarouselPrevious className="-left-12 border-gray-300 text-gray-500 hover:text-[#2a9d8f] hover:border-[#2a9d8f]" />
                    <CarouselNext className="-right-12 border-gray-300 text-gray-500 hover:text-[#2a9d8f] hover:border-[#2a9d8f]" />
                  </div>
                </Carousel>
              </motion.div>
            </div>
          </div>

          {/* Right image — col-lg-6 */}
          <div className="w-full lg:w-6/12 flex items-center justify-end max-md:hidden">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative inline-block w-full max-w-[700px]"
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
                className="absolute top-[50%] -left-[30px] bg-white w-[200px] p-5 rounded-[30px] shadow-[0px_0_30px_rgba(1,41,112,0.08)] z-20"
              >
                <Image src="/images/icon/user2.svg" alt="" width={40} height={40} className="float-left mr-2.5" />
                <h2 className="text-penn-navy font-extrabold overflow-hidden text-[24px]">7500+</h2>
                <span className="text-[14px] text-penn-body">Active student</span>
              </motion.div>

              {/* Floating card — 4500+ Online Course (top-right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-[10%] right-[-20px] bg-white w-[200px] p-5 rounded-[30px] shadow-[0px_0_30px_rgba(1,41,112,0.08)] z-20"
              >
                <Image src="/images/icon/file2.svg" alt="" width={40} height={40} className="float-left mr-2.5" />
                <h2 className="text-penn-navy font-extrabold overflow-hidden text-[24px]">4500+</h2>
                <span className="text-[14px] text-penn-body">Online Course</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
