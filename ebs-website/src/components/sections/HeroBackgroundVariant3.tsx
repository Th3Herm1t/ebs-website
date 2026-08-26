"use client";

import { m, LazyMotion, domAnimation } from "motion/react";

export default function HeroBackgroundVariant3() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="absolute inset-0 overflow-hidden z-0 bg-[#fbfdfd]">
        
        {/* --- Sophisticated Mesh Gradient Orbs --- */}
        {/* Center Top Teal Orb */}
        <m.div
          initial={{ opacity: 0.3, scale: 1, x: 0, y: 0 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.45, 0.3],
            x: [0, -15, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] left-[20%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] mix-blend-multiply pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(43,143,171,0.7) 0%, rgba(43,143,171,0) 65%)" }}
        />

        {/* Center Bottom Orange/Yellow Orb */}
        <m.div
          initial={{ opacity: 0.25, scale: 1, x: 0, y: 0 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
            x: [0, 20, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[20%] right-[20%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] mix-blend-multiply pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(233,196,106,0.8) 0%, rgba(233,196,106,0) 65%)" }}
        />

        {/* --- Original Geometric Accents (Rearranged) --- */}
        {/* Large white circle outline (center left) */}
        <m.div
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] -left-[10%] w-[550px] h-[550px] rounded-full border-[1.5px] border-white/80 opacity-90 pointer-events-none"
        />

        {/* Small teal outline circle (bottom middle) */}
        <m.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-[30%] left-[40%] w-[18px] h-[18px] rounded-full border-[2px] border-[#2B8FAB]/50 pointer-events-none"
        />
      </div>
    </LazyMotion>
  );
}
