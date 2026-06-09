"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const LOGOS = [
  { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Harvard", src: "https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg" },
  { name: "IBM", src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Cisco", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  { name: "HubSpot", src: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
];

export function InfiniteLogoMarquee({ className }: { className?: string }) {
  return (
    <div className={cn("w-full overflow-hidden bg-white/40 backdrop-blur-md py-12 border-y border-gray-100 flex items-center relative", className)}>
      <div className="absolute left-0 top-0 w-16 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-16 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-16 md:gap-32 w-max pr-16 md:pr-32"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Render twice for seamless loop */}
        {[...LOGOS, ...LOGOS].map((logo, index) => (
          <div key={index} className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <img src={logo.src} alt={logo.name} className="h-8 md:h-12 object-contain w-auto max-w-[150px]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
