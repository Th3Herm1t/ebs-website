"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Smile, FileText, Headphones, User } from "lucide-react";

const counters = [
  { icon: Smile, end: 8232, label: "Enrolled Students", color: "#4154f1" },
  { icon: FileText, end: 521, label: "Academic Programs", color: "#ee6c20" },
  { icon: Headphones, end: 163, label: "Winning Award", color: "#15be56" },
  { icon: User, end: 93, label: "Certified Students", color: "#bb0852" },
];

function AnimatedCounter({ end, isInView }: { end: number; isInView: boolean }) {
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
  return <span className="text-[36px] block text-penn-navy font-bold">{count}</span>;
}

export default function CounterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="section-title">
          <h2>Some Fun Fact</h2>
          <p>Our Great <span><u>Achievement</u></span></p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-[25px] bg-white text-center rounded-[6px] shadow-[0px_0_30px_rgba(1,41,112,0.08)] border border-penn-border transition-all duration-300 hover:border-t-2 hover:border-t-penn-green"
            >
              <item.icon className="mx-auto mb-[20px]" style={{ color: item.color, width: 40, height: 40 }} />
              <AnimatedCounter end={item.end} isInView={isInView} />
              <p className="text-penn-body mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
