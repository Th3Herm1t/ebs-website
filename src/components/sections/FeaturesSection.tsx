"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BookOpen, Heart, User, Eye, Lightbulb, Mail } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Learn More Anywhere", color: "bg-[#e1f0ff] text-[#4154f1]" },
  { icon: Heart, title: "Expert\nInstructor", color: "bg-[#fff0e6] text-[#ee6c20]" },
  { icon: User, title: "Team\nManagement", color: "bg-[#f1ffe6] text-[#15be56]" },
  { icon: Eye, title: "Course\n Planing", color: "bg-[#ffe6ee] text-[#bb0852]" },
  { icon: Lightbulb, title: "Teacher Monitoring", color: "bg-[#e6eeff] text-[#4154f1]" },
  { icon: Mail, title: "24/7 Strong Support", color: "bg-[#ffe6f4] text-[#e645ad]" },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="section-title">
          <h2>Why Choose Penn</h2>
          <p>Find the <span><u>best features</u></span> of Penn.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border border-penn-border rounded-[6px] p-10 transition-all duration-300 hover:shadow-[0px_0_30px_rgba(1,41,112,0.08)] hover:border-t-2 hover:border-t-penn-green group"
            >
              <div className="flex items-center gap-5 mb-5">
                <span className={`w-[60px] h-[60px] rounded-xl flex items-center justify-center text-[26px] ${feature.color.split(" ")[0]} ${feature.color.split(" ")[1]}`}>
                  <feature.icon className="w-7 h-7" />
                </span>
                <h2 className="font-extrabold text-penn-navy text-xl whitespace-pre-line">
                  {feature.title}
                </h2>
              </div>
              <p className="text-penn-body">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
