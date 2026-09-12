"use client";

import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { useReducedMotion } from "motion/react";
import { ArrowRight, Award, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface MagneticProgramCardProps {
  title: string;
  subtitle: string;
  certifications: number;
  color: string;
  href: string;
  image?: string;
  isFeatured?: boolean;
  className?: string;
}

export function MagneticProgramCard({
  title,
  subtitle,
  certifications,
  color,
  href,
  image,
  isFeatured = false,
  className,
}: MagneticProgramCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.035;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.035;

    ref.current.style.setProperty("--card-x", `${x}px`);
    ref.current.style.setProperty("--card-y", `${y}px`);
    ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.setProperty("--card-x", "0px");
    ref.current.style.setProperty("--card-y", "0px");
  };

  return (
    <div className={cn("h-full", className)}>
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "group relative flex flex-col h-full bg-white rounded-2xl border border-gray-100 overflow-hidden will-change-transform",
          "transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] motion-reduce:hover:translate-y-0",
          isFeatured && "lg:col-span-2 lg:flex-row lg:items-stretch"
        )}
        style={{
          borderBottom: `3px solid ${color}20`,
          transform: "translate3d(var(--card-x, 0px), var(--card-y, 0px), 0)",
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-[0.045] transition-opacity duration-300 pointer-events-none z-0"
          style={{ background: `radial-gradient(circle at var(--mouse-x,50%) var(--mouse-y,50%), ${color}, transparent 62%)` }}
        />

        {image && (
          <div className={cn("relative overflow-hidden w-full shrink-0 z-0", isFeatured ? "lg:w-[40%] h-[200px] lg:h-auto" : "h-[180px]")}>
            <Image fill src={image} alt={title} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className={cn("absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent", isFeatured && "lg:bg-gradient-to-r lg:from-black/60")} />
          </div>
        )}

        <div className={cn("relative z-10 flex flex-col flex-1 p-6 lg:p-8", isFeatured && "justify-center")}>
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

        {isFeatured && !image && (
          <div className="relative z-10 p-6 lg:p-8 shrink-0 flex items-center justify-center">
            <div 
              className="w-20 h-20 lg:w-[120px] lg:h-[120px] rounded-3xl flex items-center justify-center"
              style={{ backgroundColor: color + "10" }}
            >
              <Award className="w-8 h-8 lg:w-12 lg:h-12" style={{ color }} />
            </div>
          </div>
        )}
      </Link>
    </div>
  );
}
