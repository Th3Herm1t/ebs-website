"use client";

import { m, LazyMotion, domAnimation } from "motion/react";

export default function FloatingGeoBackground() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="absolute inset-0 overflow-hidden z-0 bg-[#fbfdfd]">
        
        {/* Top Left Teal Outline Circle */}
        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.15, y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[15%] -left-[5%] w-[400px] h-[400px] rounded-full border-[1.5px] border-penn-green pointer-events-none"
        />

        {/* Bottom Right Orange Outline Square */}
        <m.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.1, rotate: [0, 45, 90, 135, 180] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] border-[1.5px] border-[#f4a261] pointer-events-none"
        />

        {/* Small Solid Yellow Dot */}
        <m.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] right-[15%] w-[12px] h-[12px] rounded-full bg-[#e9c46a] pointer-events-none"
        />

        {/* Small Solid Teal Dot */}
        <m.div
          animate={{ x: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[35%] left-[10%] w-[8px] h-[8px] rounded-full bg-penn-green pointer-events-none"
        />
        
      </div>
    </LazyMotion>
  );
}
