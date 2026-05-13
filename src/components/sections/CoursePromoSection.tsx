"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Check } from "lucide-react";

export default function CoursePromoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Text content — col-lg-6 */}
          <div className="w-full lg:w-6/12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-penn-green font-bold text-lg mb-2.5">Best Online Learning Platform</h4>
              <h2 className="text-[44px] leading-[56px] max-md:text-[32px] max-md:leading-[42px] text-penn-navy font-bold mb-[25px]">
                One Platfrom & Many{" "}
                <span><u className="text-penn-green">Courses</u></span> For You
              </h2>
              <p className="text-penn-body mb-[25px]">
                From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.
              </p>
              <ul className="mb-[30px]">
                {[
                  "9/10 Average Satisfaction Rate",
                  "96% Completitation Rate",
                  "Friendly Environment & Expert Teacher",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 mb-2.5 text-penn-navy font-medium">
                    <Check className="w-4 h-4 text-penn-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-[30px]"
            >
              <a href="/courses" className="cta">
                <span>Explore Our Courses</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5" />
                  <polyline points="8 1 12 5 8 9" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Image — col-lg-6 */}
          <div className="w-full lg:w-6/12 max-md:mt-10">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/all-img/promo.png"
                alt="Course Promo"
                width={570}
                height={500}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
