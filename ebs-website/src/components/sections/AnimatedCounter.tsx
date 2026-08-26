"use client";

import { useState, useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

export default function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      return;
    }

    let frame = 0;
    const duration = 1200;
    const startTime = performance.now();
    const easeOut = (value: number) => 1 - Math.pow(1 - value, 3);

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.round(end * easeOut(progress)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [isInView, end, prefersReducedMotion]);

  return (
    <span ref={ref} className="text-[36px] block text-penn-navy font-bold">
      {prefersReducedMotion && isInView ? end : count}{suffix}
    </span>
  );
}
