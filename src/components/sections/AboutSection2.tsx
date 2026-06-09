"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function AboutSection2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="ab_one section-padding py-[100px]" ref={ref}>
      <div className="container mx-auto px-4">									
        <div className="flex flex-wrap -mx-[15px] items-center">								
          <div className="w-full lg:w-1/2 px-[15px] mb-[50px] lg:mb-0">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="ab_img"
            >
              <Image src="/images/all-img/about2.png" className="w-full h-auto" alt="image" width={570} height={450} />
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 px-[15px]">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1 }}
              className="ab_content"
            >
              <h2 className="text-[40px] md:text-[45px] font-bold text-penn-navy leading-tight mb-[20px]">
                Learn new skills to go <u className="decoration-2 underline-offset-8 text-penn-green"><span className="text-penn-green">ahead for your </span></u> career.
              </h2>
              <p className="text-penn-body text-[16px] leading-[28px] mb-[20px]">
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply. From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.From blogs to emails to ad copies, auto-generate catchy, original and high-converting copies.
              </p>
              <p className="text-penn-navy text-[16px] leading-[28px] font-bold mb-[30px]">
                <strong>Auto-generate catchy original and high-converting copies in popular tones languages. From blogs to emails to ad copies auto-generate catchy</strong>
              </p>
              <Link href="/about" className="btn_one inline-block bg-penn-green text-white font-bold text-[15px] px-[30px] py-[12px] rounded-[30px] transition-colors hover:bg-penn-navy">
                Read More us
              </Link>
            </motion.div>						
          </div>
        </div>
      </div>
    </section>
  );
}
