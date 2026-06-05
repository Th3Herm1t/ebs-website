"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { useTranslations } from 'next-intl';

export default function InfoSliderSection() {
  const plugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );
  const t = useTranslations('HomePage.infoslider');

  const slides = [
    {
      id: 1,
      image: "/images/all-img/about1-stock.jpg",
      subtitle: t('s1.badge'),
      title: t('s1.title'),
      text: t('s1.desc'),
      link: "#"
    },
    {
      id: 2,
      image: "/images/all-img/about2-stock.jpg",
      subtitle: t('s2.badge'),
      title: t('s2.title'),
      text: t('s2.desc'),
      link: "#"
    },
    {
      id: 3,
      image: "/images/all-img/about4-stock.png",
      subtitle: t('s3.badge'),
      title: t('s3.title'),
      text: t('s3.desc'),
      link: "#"
    }
  ];

  return (
    <section className="py-16 lg:py-[100px] bg-white overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-5 lg:px-24 xl:px-32 relative">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "start",
            duration: 40,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {slides.map((slide) => (
              <CarouselItem key={slide.id} className="pl-4">
                <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
                  {/* Left: Image */}
                  <div className="w-full lg:w-1/2 flex">
                    <div className="relative w-full rounded shadow-[0_20px_60px_rgba(0,0,0,0.15)] min-h-[300px] lg:min-h-[400px] h-full">
                      <Image
                        src={slide.image}
                        alt="EBS Info"
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  </div>

                  {/* Right: Text Content */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start justify-center pt-6 lg:pt-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-penn-green/10 text-penn-green font-bold text-[12px] uppercase tracking-wider mb-5 lg:mb-6">
                      <Sparkles className="w-4 h-4" />
                      {slide.subtitle.replace('★ ', '')}
                    </div>
                    
                    <h2 className="text-penn-navy text-[28px] md:text-[32px] lg:text-[36px] font-extrabold leading-[1.15] mb-5 lg:mb-6 tracking-tight">
                      {slide.title}
                    </h2>
                    
                    <div className="w-[80px] h-[3px] bg-gradient-to-r from-penn-green to-transparent mb-6 lg:mb-8"></div>
                    
                    <p className="text-penn-body text-[15px] lg:text-[16px] leading-[1.8] mb-8 lg:mb-10">
                      {slide.text}
                    </p>
                    
                    <a
                      href={slide.link}
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-penn-green text-white font-bold text-[14px] uppercase tracking-wider transition-all duration-300 hover:bg-penn-navy hover:shadow-lg hover:-translate-y-1 rounded-sm"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Controls */}
          <div className="hidden lg:block">
            <CarouselPrevious className="-left-16 lg:-left-20 xl:-left-24 w-12 h-12 border-2 border-penn-green bg-transparent text-penn-green hover:bg-penn-green hover:text-white transition-all duration-300" />
            <CarouselNext className="-right-16 lg:-right-20 xl:-right-24 w-12 h-12 border-2 border-penn-green bg-transparent text-penn-green hover:bg-penn-green hover:text-white transition-all duration-300" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
