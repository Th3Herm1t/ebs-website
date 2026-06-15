"use client";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const LOGOS = [
  { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Harvard", src: "https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg" },
  { name: "IBM", src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Cisco", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  { name: "HubSpot", src: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
];

export function InfiniteLogoMarquee({ className }: { className?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    intervalRef.current = setInterval(() => {
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
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
    <div className={cn("w-full bg-white/40 backdrop-blur-md py-12 border-y border-gray-100 flex items-center relative", className)}>
      <div className="absolute left-0 top-0 w-16 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-16 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="relative group/marquee w-full">
        <button onClick={() => scroll("left")} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-[#2B8FAB]/30 shadow-md flex items-center justify-center text-[#2B8FAB] hover:bg-[#2B8FAB] hover:text-white transition-all"><ChevronLeft className="w-5 h-5" /></button>
        <button onClick={() => scroll("right")} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-[#2B8FAB]/30 shadow-md flex items-center justify-center text-[#2B8FAB] hover:bg-[#2B8FAB] hover:text-white transition-all"><ChevronRight className="w-5 h-5" /></button>
        <div
          ref={scrollRef}
          className="overflow-x-auto w-full scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          onMouseEnter={pauseScroll}
          onMouseLeave={resumeScroll}
        >
          <div className="flex items-center gap-16 md:gap-32 w-max pr-16 md:pr-32">
            {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
              <div key={index} className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <img src={logo.src} alt={logo.name} className="h-8 md:h-12 object-contain w-auto max-w-[150px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
