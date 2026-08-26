"use client";

import { m, LazyMotion, domAnimation, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  initialX?: number;
  initialY?: number;
  initialScale?: number;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  initialX = 0, 
  initialY = 30, 
  initialScale = 1,
  delay = 0, 
  duration = 0.6, 
  className = "" 
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        initial={{ opacity: 0, x: initialX, y: initialY, scale: initialScale }}
        animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
        transition={{ duration, delay }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
