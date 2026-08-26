"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import SectionHeading from "@/components/ui/SectionHeading";

const logos = [
  { file: "logo-audencia.png", name: "Audencia", slug: "audencia" },
  { file: "/images/ebs-tn/EM_Normandie-Logo.png", name: "EM Normandie", slug: "em-normandie" },
  { file: "udl.webp", name: "Link University", slug: "link-university" },
  { file: "eklore.webp", name: "Eklore", slug: "eklore" },
  { file: "epitech.webp", name: "Epitech", slug: "epitech" },
  { file: "epsi.webp", name: "EPSI", slug: "epsi" },
  { file: "excelia.webp", name: "Excelia", slug: "excelia" },
  { file: "figs (2).webp", name: "FIGS", slug: "figs" },
  { file: "gutech.webp", name: "GUtech", slug: "gutech" },
  { file: "idrac.webp", name: "IDRAC", slug: "idrac" },
  { file: "ifag.webp", name: "IFAG", slug: "ifag" },
  { file: "igefi.webp", name: "IGEFI", slug: "igefi" },
  { file: "psb.webp", name: "PSB", slug: "psb" },
  { file: "redsup.webp", name: "Redsup", slug: "redsup" },
  { file: "supdecom.webp", name: "Sup de Com", slug: "supdecom" },
  { file: "uqat.webp", name: "UQAT", slug: "uqat" },
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
                <Link key={i} href={`/partenaires/${logo.slug}`} className="inline-block flex-shrink-0">
                  <Image src={logo.file.startsWith("http") || logo.file.startsWith("/") ? logo.file : `/images/partenaires-academiques/${logo.file}`} alt={logo.name} width={180} height={90} className="h-[90px] w-auto object-contain" style={{ width: "auto" }} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
