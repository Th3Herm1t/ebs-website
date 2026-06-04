"use client";

import { motion } from "motion/react";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 bg-[#fbfdfd]">
      
      {/* --- Sophisticated Mesh Gradient Orbs --- */}
      {/* Top Left Teal Orb */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-[#2a9d8f] blur-[120px] mix-blend-multiply"
      />

      {/* Bottom Right Orange Orb */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -40, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-[#f4a261] blur-[120px] mix-blend-multiply"
      />

      {/* Center Top Accent Orb (Optional soft bridge) */}
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[10%] left-[40%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#e9c46a] blur-[100px] mix-blend-multiply"
      />

      {/* --- Original Geometric Accents --- */}
      {/* Large white circle outline (top left) */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full border-[1.5px] border-white/60 opacity-80"
      />

      {/* Small teal circle outline (left middle) */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[58%] left-[7%] w-[16px] h-[16px] rounded-full border-[2px] border-[#2a9d8f]/50"
      />

      {/* Small solid dot (upper middle) */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] left-[48%] w-[10px] h-[10px] rounded-full bg-[#f4a261]/80"
      />

      {/* Large solid orange circle (middle right) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[25%] right-[15%] w-[400px] h-[400px] rounded-full bg-[#f4a261]"
      />

      {/* Small yellow circle outline (far right) */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[32%] right-[8%] w-[18px] h-[18px] rounded-full border-[2px] border-[#e9c46a]/60"
      />
    </div>
  );
}
