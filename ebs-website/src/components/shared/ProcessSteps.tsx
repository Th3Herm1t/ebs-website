"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  color?: string;
  direction?: "vertical" | "horizontal";
  className?: string;
}

export function ProcessSteps({
  steps,
  color,
  direction = "horizontal",
  className,
}: ProcessStepsProps) {
  const accentColor = color ?? "#2B8FAB";

  if (direction === "vertical") {
    return (
      <div className={cn("space-y-0", className)}>
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex gap-5 relative"
          >
            <div className="flex flex-col items-center shrink-0">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-[15px] shrink-0"
                style={{ backgroundColor: accentColor }}
              >
                {step.number}
              </div>
              {i < steps.length - 1 && (
                <div className="w-0.5 flex-1 min-h-[24px] mt-2" style={{ backgroundColor: accentColor + "40" }} />
              )}
            </div>
            <div className="pb-8">
              <h4 className="text-penn-navy font-extrabold text-[16px] mb-1">
                {step.title}
              </h4>
              <p className="text-[14px] text-penn-body leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6",
        steps.length <= 4 && "lg:grid-cols-4",
        className
      )}
    >
      {steps.map((step, i) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="relative bg-white rounded-xl border border-penn-border p-6 text-center shadow-sm"
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-[15px] mx-auto mb-4"
            style={{ backgroundColor: accentColor }}
          >
            {step.number}
          </div>
          <h4 className="text-penn-navy font-extrabold text-[15px] mb-2">
            {step.title}
          </h4>
          <p className="text-[13px] text-penn-body leading-relaxed">
            {step.description}
          </p>

          {i < steps.length - 1 && (
            <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 text-penn-border">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
