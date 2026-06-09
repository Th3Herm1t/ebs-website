"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "motion/react";
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
        {prefix}{count}{suffix}
      </span>
      <span className="text-[14px] md:text-[15px] font-medium text-penn-body leading-snug max-w-[200px]">
        {label}
      </span>
    </div>
  );
}
