"use client";

import { m, LazyMotion, domAnimation } from "motion/react";

export default function HeroBackground() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="absolute inset-0 overflow-hidden z-0 bg-[#fbfdfd]">
        
        {/* --- Sophisticated Mesh Gradient Orbs --- */}
        {/* Top Left Teal Orb */}
        <m.div
          initial={{ opacity: 0.4, scale: 1, x: 0, y: 0 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] mix-blend-multiply pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(43,143,171,0.95) 0%, rgba(43,143,171,0) 65%)" }}
        />

        {/* Bottom Right Orange Orb */}
        <m.div
          initial={{ opacity: 0.4, scale: 1, x: 0, y: 0 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] mix-blend-multiply pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(244,162,97,0.95) 0%, rgba(244,162,97,0) 65%)" }}
        />

        {/* Center Top Accent Orb (Optional soft bridge) */}
        <m.div
          initial={{ opacity: 0.3, scale: 1, x: 0, y: 0 }}
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[10%] left-[40%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] mix-blend-multiply pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(233,196,106,0.95) 0%, rgba(233,196,106,0) 65%)" }}
        />

        {/* --- Original Geometric Accents --- */}
        {/* Large white circle outline (top left) */}
        <m.div
          animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full border-[1.5px] border-white/60 opacity-80"
        />

        {/* Small teal circle outline (left middle) */}
        <m.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[58%] left-[7%] w-[16px] h-[16px] rounded-full border-[2px] border-[#2B8FAB]/50"
        />

        {/* Small solid dot (upper middle) */}
        <m.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[48%] w-[10px] h-[10px] rounded-full bg-[#f4a261]/80"
        />

        {/* Large solid orange circle (middle right) */}
        <m.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[25%] right-[15%] w-[400px] h-[400px] rounded-full bg-[#f4a261]"
        />

        {/* Small yellow circle outline (far right) */}
        <m.div
          animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-[32%] right-[8%] w-[18px] h-[18px] rounded-full border-[2px] border-[#e9c46a]/60"
        />
      </div>
    </LazyMotion>
  );
}
