"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const slides = [
  {
    id: 1,
    image: "/images/all-img/about1.png",
    subtitle: "★ NOUVEAU",
    title: (
      <>
        L'<strong>IA</strong> comme <strong>compétence obligatoire</strong> dans tous nos parcours
      </>
    ),
    text: "Pour la rentrée 2025/2026, l'intelligence artificielle sera intégrée comme compétence essentielle dans l’ensemble de nos parcours, indépendamment de la spécialité choisie. Les étudiants développent une compréhension des outils, des usages et des enjeux de l’IA afin d’en faire un levier d’analyse, d’innovation et de performance. Cette approche permet de préparer des diplômés capables d’évoluer dans un environnement où l’intelligence artificielle transforme progressivement les métiers et les organisations.",
    link: "#"
  },
  {
    id: 2,
    image: "/images/all-img/about2.png",
    subtitle: "★ EXCLUSIF",
    title: (
      <>
        Intégration de <strong>+150 Certifications Internationales</strong> dans nos différents parcours
      </>
    ),
    text: "EBS intègre plus de 150 certifications internationales reconnues dans ses différents programmes de formation afin de renforcer les compétences académiques par des validations professionnelles concrètes. Ces certifications couvrent des domaines variés tels que le management, la finance, le marketing, l’intelligence artificielle, la gestion de projets, la cybersécurité et les technologies numériques. Cette approche permet aux étudiants d’enrichir leur profil, de valoriser leurs acquis et de se préparer aux standards et exigences du marché international.",
    link: "#"
  },
  {
    id: 3,
    image: "/images/all-img/about4.png",
    subtitle: "★ ACTUALITÉ",
    title: (
      <>
        Inscriptions 2025-2026 ouvertes — <strong>Réductions Early Bird</strong> jusqu'au 30 Juin
      </>
    ),
    text: "Les candidatures pour l’année universitaire 2025-2026 sont désormais ouvertes pour l’ensemble de nos licences, masters et formations spécialisées. Profitez de nos réductions Early Bird, allant jusqu’à -25% sur vos frais de scolarité, en finalisant votre inscription avant le 30 juin, et préparez dès aujourd’hui votre parcours académique dans un environnement tourné vers l’innovation, les technologies et les compétences de demain. Nos équipes pédagogiques et administratives sont à votre disposition pour vous accompagner dans le choix de la formation la plus adaptée à votre projet académique et professionnel.",
    link: "#"
  }
];

export default function InfoSliderSection() {
  const plugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <section className="py-16 lg:py-[100px] bg-white overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-5 lg:px-12 relative">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-[100px]">
            {slides.map((slide) => (
              <CarouselItem key={slide.id} className="pl-[100px]">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[80px]">
                  {/* Left: Image */}
                  <div className="w-full lg:w-[55%]">
                    <div className="relative w-full rounded shadow-[0_20px_60px_rgba(0,0,0,0.15)] aspect-[1.4/1]">
                      <Image
                        src={slide.image}
                        alt="EBS Info"
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  </div>

                  {/* Right: Text Content */}
                  <div className="w-full lg:w-[45%] flex flex-col items-start pt-6 lg:pt-0 pr-0 lg:pr-16 xl:pr-20">
                    <span className="text-[#888888] font-bold text-[12px] uppercase tracking-[0.15em] mb-3 lg:mb-4">
                      {slide.subtitle}
                    </span>
                    <h2 className="text-[#232434] text-[26px] md:text-[32px] lg:text-[40px] font-light leading-[1.2] mb-5 lg:mb-6">
                      {slide.title}
                    </h2>
                    
                    {/* The small horizontal separator from the mockup */}
                    <div className="w-[60px] h-[2px] bg-gray-200 mb-8"></div>
                    
                    <p className="text-[#888888] text-[14px] lg:text-[15px] leading-[1.7] lg:leading-[1.8] mb-8 lg:mb-10 opacity-90">
                      {slide.text}
                    </p>
                    <a
                      href={slide.link}
                      className="inline-block px-7 py-3.5 lg:px-9 lg:py-4 bg-[#2a9d8f] text-white font-bold text-[13px] uppercase tracking-wider transition-all duration-300 hover:bg-[#232434] shadow-md rounded-sm"
                    >
                      En savoir plus
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Controls */}
          <div className="hidden lg:block">
            <CarouselPrevious className="-left-4 xl:-left-8 border-gray-300 text-gray-500 hover:text-[#2a9d8f] hover:border-[#2a9d8f] w-12 h-12 bg-white" />
            <CarouselNext className="-right-4 xl:-right-8 border-gray-300 text-gray-500 hover:text-[#2a9d8f] hover:border-[#2a9d8f] w-12 h-12 bg-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
