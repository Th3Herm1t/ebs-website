"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Award, GraduationCap, Globe, TrendingUp } from "lucide-react";

const counters = [
  { icon: Award, end: 150, suffix: "+", label: "Certifications gratuites incluses", color: "#4154f1" },
  { icon: GraduationCap, end: 7, suffix: "", label: "Programmes Licences & Masters", color: "#ee6c20" },
  { icon: Globe, end: 10, suffix: "+", label: "Partenaires universitaires internationaux", color: "#15be56" },
  { icon: TrendingUp, end: 93, suffix: "%", label: "Taux de réussite", color: "#bb0852" },
];

function AnimatedCounter({ end, suffix, isInView }: { end: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);
  return <span className="text-[36px] block text-penn-navy font-bold">{count}{suffix}</span>;
}

export default function CounterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
        <div className="section-title">
          <h2 className="text-[#2a9d8f]">EBS EN CHIFFRES</h2>
          <p className="text-[#232434]">Les Chiffres Clés <span className="text-[#f4a261]"><u>de l'EBS</u></span></p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-[25px] bg-white rounded-[6px] shadow-[0_0_30px_rgba(1,41,112,0.08)] border border-[#eee] transition-all duration-300 hover:border-t-2 hover:border-t-penn-green flex items-center justify-start gap-5"
            >
              <item.icon className="flex-shrink-0" style={{ color: item.color, width: 45, height: 45 }} strokeWidth={1.5} />
              <div className="flex flex-col text-left">
                <AnimatedCounter end={item.end} suffix={item.suffix} isInView={isInView} />
                <p className="text-[#888888] text-[13px] mt-0">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
