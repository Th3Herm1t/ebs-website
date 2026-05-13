"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const promos = [
  { title: "Quality Education", desc: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore." },
  { title: "Experienced Teachers", desc: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore." },
  { title: "Delicious Food", desc: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore." },
];

export default function TopPromo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="pb-[50px]" ref={ref}>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {promos.map((promo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-[60px] border-r border-penn-border shadow-[0px_0px_150px_0px_rgba(78,67,250,0.1)] last:border-r-0 max-md:border-r-0"
            >
              <h3 className="text-[20px] font-extrabold mb-[15px] text-penn-navy">
                {promo.title}
              </h3>
              <p className="mb-10 text-penn-body">{promo.desc}</p>
              <a href="#" className="cta">
                <span>Explore</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5" />
                  <polyline points="8 1 12 5 8 9" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
