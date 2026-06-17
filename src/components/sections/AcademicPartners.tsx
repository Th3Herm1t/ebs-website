"use client";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import SectionHeading from "@/components/ui/SectionHeading";

const logos = [
  { file: "logo-audencia.png", name: "Audencia" },
  { file: "https://ebs.tn/wp-content/uploads/2022/08/EM_Normandie-Logo.png", name: "EM Normandie" },
  { file: "link-university.jpeg", name: "Link University" },
  { file: "eklore.png", name: "Eklore" },
  { file: "epitech.png", name: "Epitech" },
  { file: "epsi.png", name: "EPSI" },
  { file: "excelia.png", name: "Excelia" },
  { file: "figs (2).png", name: "FIGS" },
  { file: "gutech.png", name: "GUtech" },
  { file: "idrac.png", name: "IDRAC" },
  { file: "ifag.png", name: "IFAG" },
  { file: "igefi.png", name: "IGEFI" },
  { file: "psb.png", name: "PSB" },
  { file: "redsup.png", name: "Redsup" },
  { file: "supdecom.png", name: "Sup de Com" },
  { file: "uqat.png", name: "UQAT" },
];

export default function AcademicPartners() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const t = useTranslations('HomePage.partners');

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    intervalRef.current = setInterval(() => {
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    }, 30);

    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    pauseScroll();
    el.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
    setTimeout(resumeScroll, 500);
  };

  const pauseScroll = () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  const resumeScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    intervalRef.current = setInterval(() => {
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
    }, 30);
  };

  return (
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
        <SectionHeading subtitle={<>{t('acad')} <span className="text-penn-green underline decoration-penn-green">{t('acadHighlight')}</span></>} />
        <div className="relative group/marquee">
          <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-[#2B8FAB]/30 shadow-md flex items-center justify-center text-[#2B8FAB] hover:bg-[#2B8FAB] hover:text-white transition-all"><ChevronLeft className="w-5 h-5" /></button>
          <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-[#2B8FAB]/30 shadow-md flex items-center justify-center text-[#2B8FAB] hover:bg-[#2B8FAB] hover:text-white transition-all"><ChevronRight className="w-5 h-5" /></button>
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div
            ref={scrollRef}
            className="overflow-x-auto whitespace-nowrap w-full scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onMouseEnter={pauseScroll}
            onMouseLeave={resumeScroll}
          >
            <div className="inline-flex items-center gap-16 w-max">
              {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
                <a key={i} href="#" className="inline-block flex-shrink-0">
                  <img src={logo.file.startsWith("http") ? logo.file : `/images/partenaires-academiques/${logo.file}`} alt={logo.name} className="h-[90px] w-auto object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
