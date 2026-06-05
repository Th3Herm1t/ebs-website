"use client";

import { m, LazyMotion, domAnimation } from "motion/react";

export default function HeroBackgroundVariant2() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="absolute inset-0 overflow-hidden z-0 bg-[#fbfdfd]">
        
        {/* --- Sophisticated Mesh Gradient Orbs --- */}
        {/* Top Left Orange Orb */}
        <m.div
          initial={{ opacity: 0.25, scale: 1, x: 0, y: 0 }}
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
            x: [0, 25, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[15%] -left-[15%] w-[65vw] h-[65vw] max-w-[700px] max-h-[700px] mix-blend-multiply pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(244,162,97,0.7) 0%, rgba(244,162,97,0) 65%)" }}
        />

        {/* Bottom Right Yellow Orb */}
        <m.div
          initial={{ opacity: 0.2, scale: 1, x: 0, y: 0 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[10%] -right-[10%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] mix-blend-multiply pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(233,196,106,0.75) 0%, rgba(233,196,106,0) 65%)" }}
        />

        {/* --- Original Geometric Accents (Rearranged) --- */}
        {/* Medium white circle outline (top right) */}
        <m.div
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[5%] w-[450px] h-[450px] rounded-full border-[1.5px] border-white/70 opacity-90 pointer-events-none"
        />

        {/* Small orange outline circle (middle) */}
        <m.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-[50%] left-[55%] w-[24px] h-[24px] rounded-full border-[2px] border-[#f4a261]/50 pointer-events-none"
        />
      </div>
    </LazyMotion>
  );
}
