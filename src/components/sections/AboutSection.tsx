"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Award, Sparkles } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pb-[50px] section-padding" ref={ref}>
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex flex-wrap items-start">
          {/* Image — col-lg-6 */}
          <div className="w-full lg:w-6/12 mb-[60px] lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/images/all-img/about1.png"
                alt="About"
                width={570}
                height={500}
                className="pr-10 max-md:pr-0 w-full"
              />
            </motion.div>
          </div>

          {/* Content — col-lg-6 */}
          <div className="w-full lg:w-6/12">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-[30px] relative"
            >
              <h2 className="font-bold mb-5 capitalize leading-[54px] text-[44px] text-penn-navy">
                Learn new skills to go{" "}
                <u><span className="text-penn-green">ahead for your </span></u>
                career.
              </h2>
              <p className="mb-[30px] text-penn-body">
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                tempor incididunt ut labore et simply.
              </p>
            </motion.div>

            {/* Mission card */}
            <div className="mb-[30px] bg-white p-[30px] rounded-[10px] border border-[#eee] transition-all duration-300 hover:border-l-4 hover:border-l-penn-green">
              <span className="bg-penn-green-light rounded-full float-left mr-5 block w-[70px] h-[70px] text-penn-green leading-[70px] text-center text-[26px]">
                <Award className="w-7 h-7 mx-auto mt-5" />
              </span>
              <h4 className="font-extrabold overflow-hidden mb-2.5 text-[22px] text-penn-navy">Our Mission</h4>
              <p className="overflow-hidden text-penn-body">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
            </div>

            {/* Vision card */}
            <div className="mb-[30px] bg-white p-[30px] rounded-[10px] border border-[#eee] transition-all duration-300 hover:border-l-4 hover:border-l-penn-green">
              <span className="bg-penn-green-light rounded-full float-left mr-5 block w-[70px] h-[70px] text-penn-green leading-[70px] text-center text-[26px]">
                <Sparkles className="w-7 h-7 mx-auto mt-5" />
              </span>
              <h4 className="font-extrabold overflow-hidden mb-2.5 text-[22px] text-penn-navy">Our Vision</h4>
              <p className="overflow-hidden text-penn-body">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
            </div>

            <Link
              href="/about"
              className="bg-penn-green text-white py-[10px] px-[30px] font-bold rounded-full text-[15px] inline-block transition-all relative overflow-hidden shadow-[10px_15px_18px_rgba(23,23,36,0.1)] group"
            >
              <span className="relative z-10">Discover More</span>
              <span className="absolute inset-0 bg-penn-navy rounded-full transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
