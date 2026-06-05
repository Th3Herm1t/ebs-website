"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "motion/react";

export default function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { 
        setCount(end); 
        clearInterval(timer); 
      } else { 
        setCount(Math.floor(start)); 
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref} className="text-[36px] block text-penn-navy font-bold">
      {count}{suffix}
    </span>
  );
}
