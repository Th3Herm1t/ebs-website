"use client";

import { useState, useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  size?: "sm" | "default" | "lg";
  color?: string;
  className?: string;
}

export function StatCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  size = "default",
  color,
  className,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
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

  const sizeClasses = {
    sm: "text-[28px]",
    default: "text-[36px] md:text-[42px]",
    lg: "text-[48px] md:text-[56px]",
  };

  return (
    <div ref={ref} className={cn("flex flex-col items-center text-center", className)}>
      <span
        className={cn(
          "block font-extrabold leading-none mb-2 text-penn-navy",
          sizeClasses[size]
        )}
        style={color ? { color } : undefined}
      >
        {prefix}{prefersReducedMotion && isInView ? end : count}{suffix}
      </span>
      <span className="text-[14px] md:text-[15px] font-medium text-penn-body leading-snug max-w-[200px]">
        {label}
      </span>
    </div>
  );
}
