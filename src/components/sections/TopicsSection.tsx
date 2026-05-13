"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const topics = [
  { icon: "/images/icon/ct1.svg", title: "UI/UX Design", count: "71 Courses" },
  { icon: "/images/icon/ct2.svg", title: "Digital Program", count: "59 Courses" },
  { icon: "/images/icon/ct3.svg", title: "Finance", count: "68 Courses" },
  { icon: "/images/icon/ct4.svg", title: "Modern Physics", count: "83 Courses" },
  { icon: "/images/icon/ct5.svg", title: "Music Production", count: "37 Courses" },
  { icon: "/images/icon/ct6.svg", title: "Data Science", count: "51 Courses" },
];

export default function TopicsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="section-title">
          <h2>Start Learning </h2>
          <p>Popular <span><u>Topics To Learn</u></span> From Today.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex items-center gap-[20px] p-[25px] bg-white border border-penn-border rounded-[8px] transition-all duration-300 hover:shadow-[0px_0_30px_rgba(1,41,112,0.08)] hover:border-t-2 hover:border-t-penn-green"
            >
              <Image src={topic.icon} alt={topic.title} width={60} height={60} className="flex-shrink-0" />
              <div>
                <h2 className="text-penn-navy font-extrabold text-lg mb-1">
                  <a href="#" className="transition-colors hover:text-penn-green">{topic.title}</a>
                </h2>
                <span className="text-penn-green font-medium text-sm">{topic.count}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
