"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGOS = [
  { name: "Google", src: "/images/icon/google.svg" },
  { name: "Harvard", src: "/images/icon/harvard.png" },
  { name: "IBM", src: "/images/icon/ibm.svg" },
  { name: "Cisco", src: "/images/icon/cisco-2.svg" },
  { name: "HubSpot", src: "/images/icon/hubspot.svg" },
];

export function InfiniteLogoMarquee({ className }: { className?: string }) {
  const logos = [...LOGOS, ...LOGOS];

  return (
    <div className={cn("w-full bg-white/40 backdrop-blur-md py-12 border-y border-gray-100 flex items-center relative overflow-hidden", className)}>
      <div className="absolute left-0 top-0 w-16 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-16 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="relative group/marquee w-full overflow-hidden">
        <div
          className="marquee-track items-center gap-16 md:gap-32 pr-16 md:pr-32 [animation-duration:28s]"
        >
          {logos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image src={logo.src} alt={logo.name} width={150} height={48} className="h-8 md:h-12 object-contain w-auto max-w-[150px]" style={{ width: "auto" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
