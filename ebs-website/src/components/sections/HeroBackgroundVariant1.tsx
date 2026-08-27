"use client";

import { m, LazyMotion, domAnimation } from "motion/react";

export default function HeroBackgroundVariant1() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="absolute inset-0 overflow-hidden z-0 bg-[#fbfdfd]">
        
        {/* --- Sophisticated Mesh Gradient Orbs --- */}
        {/* Bottom Left Teal Orb */}
        <m.div
          initial={{ opacity: 0.3, scale: 1, x: 0, y: 0 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] mix-blend-multiply pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(43,143,171,0.8) 0%, rgba(43,143,171,0) 65%)" }}
        />

        {/* Top Right Orange Orb */}
        <m.div
          initial={{ opacity: 0.25, scale: 1, x: 0, y: 0 }}
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
            x: [0, -20, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -top-[10%] -right-[15%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] mix-blend-multiply pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(244,162,97,0.8) 0%, rgba(244,162,97,0) 65%)" }}
        />

        {/* --- Original Geometric Accents (Rearranged) --- */}
        {/* Large white circle outline (bottom right) */}
        <m.div
          animate={{ y: [0, -10, 0], x: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[15%] -right-[5%] w-[500px] h-[500px] rounded-full border-[1.5px] border-white/60 opacity-80 pointer-events-none"
        />

        {/* Small teal circle outline (top middle) */}
        <m.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[15%] left-[45%] w-[20px] h-[20px] rounded-full border-[2px] border-penn-green/40 pointer-events-none"
        />
      </div>
    </LazyMotion>
  );
}
