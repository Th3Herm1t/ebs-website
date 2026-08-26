import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeadingProps {
  title?: string;
  subtitle: React.ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  subtitleClassName?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  theme = "light",
  className,
  subtitleClassName,
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const titleColor = isDark ? "text-white" : "text-penn-green";
  const lineColor = isDark ? "bg-white" : "bg-penn-green";
  const textColor = isDark ? "text-white" : "text-penn-navy";

  return (
    <div
      className={cn(
        "relative mb-[60px]",
        align === "center" && "text-center",
        className
      )}
    >
      {title && (
        <h2
          className={cn(
            "text-[14px] font-bold mb-[10px] tracking-[1.5px] uppercase flex items-center",
            align === "center" ? "justify-center" : "justify-start",
            titleColor
          )}
        >
          {align === "center" && (
            <span className={cn("w-[40px] md:w-[80px] h-[2px] inline-block mx-3", lineColor)} />
          )}
          {title}
          <span className={cn("w-[40px] md:w-[80px] h-[2px] inline-block mx-3", lineColor)} />
        </h2>
      )}
      <p
        className={cn(
          "m-0 text-[32px] md:text-[42px] font-extrabold leading-tight md:leading-tight",
          align === "center" ? "w-full mx-auto" : "w-full md:w-[70%]",
          textColor,
          subtitleClassName
        )}
      >
        {subtitle}
      </p>
    </div>
  );
}
