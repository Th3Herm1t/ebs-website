"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Award, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface MagneticProgramCardProps {
  title: string;
  subtitle: string;
  certifications: number;
  color: string;
  href: string;
  isFeatured?: boolean;
  className?: string;
}

export function MagneticProgramCard({
  title,
  subtitle,
  certifications,
  color,
  href,
  isFeatured = false,
  className,
}: MagneticProgramCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={cn("h-full", className)}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "group relative flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 transition-all duration-300 overflow-hidden",
          "hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]",
          isFeatured && "lg:col-span-2 lg:flex-row lg:items-center lg:gap-8"
        )}
        style={{ borderBottom: `3px solid ${color}20` }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at var(--mouse-x,50%) var(--mouse-y,50%), ${color}, transparent 70%)` }}
        />

        <div className={cn("relative z-10 flex flex-col flex-1", isFeatured && "lg:flex-1")}>
          <span 
            className="inline-flex items-center self-start gap-1.5 text-[12px] font-bold uppercase tracking-wide mb-3 px-2.5 py-1 rounded-full"
            style={{ backgroundColor: color + "10", color }}
          >
            {isFeatured && <Sparkles className="w-3 h-3" />}
            {certifications}+ certifications
          </span>

          <h3 className={cn(
            "font-extrabold text-penn-navy leading-tight group-hover:text-penn-green transition-colors duration-200 mb-3",
            isFeatured ? "text-[22px] lg:text-[26px]" : "text-[18px] lg:text-[20px]"
          )}>
            {title}
          </h3>

          <p className="text-[14px] text-penn-body leading-relaxed mb-4">
            {subtitle}
          </p>

          <div className="inline-flex items-center self-start mt-auto gap-2 text-[13px] font-bold text-penn-green group-hover:gap-3 transition-all duration-200">
            Découvrir le programme
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {isFeatured && (
          <div className="relative z-10 mt-4 lg:mt-0 lg:w-[140px] lg:h-[140px] shrink-0 flex items-center justify-center">
            <div 
              className="w-20 h-20 lg:w-[120px] lg:h-[120px] rounded-3xl flex items-center justify-center"
              style={{ backgroundColor: color + "10" }}
            >
              <Award className="w-8 h-8 lg:w-12 lg:h-12" style={{ color }} />
            </div>
          </div>
        )}
      </Link>
    </motion.div>
  );
}
