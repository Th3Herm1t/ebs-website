"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function PartnerLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const logos = [1, 2, 3, 4, 5, 2, 1, 3, 4];

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-[1140px] mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-penn-navy font-bold text-xl mb-8">
            Trusted Company Arround The World!
          </h3>
          <div className="overflow-hidden whitespace-nowrap w-full relative">
            {/* Left and right fade gradients for a smoother look */}
            <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
              className="inline-flex items-center gap-16"
            >
              {[...logos, ...logos].map((num, i) => (
                <a key={i} href="#" className="inline-block opacity-60 hover:opacity-100 transition-opacity flex-shrink-0">
                  <Image
                    src={`/images/all-img/clients/${num}.png`}
                    alt="Partner"
                    width={120}
                    height={60}
                    className="h-auto w-auto object-contain"
                  />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
