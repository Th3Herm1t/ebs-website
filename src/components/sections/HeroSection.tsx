"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-[900px] max-md:h-auto max-md:pb-20"
      style={{
        backgroundImage: "url(/images/banner/home.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Left content — col-lg-6 */}
          <div className="w-full lg:w-6/12">
            <div className="pt-[250px] max-md:pt-[150px] relative">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[80px] max-lg:text-[60px] max-lg:leading-[70px] font-bold leading-[100px] mb-5 text-penn-navy"
              >
                Better <span className="text-penn-green">Learning Future</span> Starts
                With Penn
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-10 font-normal text-lg text-penn-body"
              >
                It is a long established fact that reader will be distracted readable content
                of a page when.
              </motion.p>
            </div>
            {/* CTA arrow button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="/courses" className="cta">
                <span>Explore Courses</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5" />
                  <polyline points="8 1 12 5 8 9" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right image — col-lg-6 */}
          <div className="w-full lg:w-6/12 flex items-end justify-end max-md:hidden">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative inline-block mt-auto pt-[50px]"
            >
              <Image
                src="/images/all-img/home-image.png"
                alt="Student"
                width={500}
                height={600}
                className="relative z-10"
                priority
              />

              {/* Floating card — 7500+ Active student (bottom-left of image) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-[50%] -left-[30px] bg-white w-[200px] p-5 rounded-[30px] shadow-[0px_0_30px_rgba(1,41,112,0.08)] z-20"
              >
                <Image src="/images/icon/user2.svg" alt="" width={40} height={40} className="float-left mr-2.5" />
                <h2 className="text-penn-navy font-extrabold overflow-hidden text-[24px]">7500+</h2>
                <span className="text-[14px] text-penn-body">Active student</span>
              </motion.div>

              {/* Floating card — 4500+ Online Course (top-right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-[10%] right-[-20px] bg-white w-[200px] p-5 rounded-[30px] shadow-[0px_0_30px_rgba(1,41,112,0.08)] z-20"
              >
                <Image src="/images/icon/file2.svg" alt="" width={40} height={40} className="float-left mr-2.5" />
                <h2 className="text-penn-navy font-extrabold overflow-hidden text-[24px]">4500+</h2>
                <span className="text-[14px] text-penn-body">Online Course</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
