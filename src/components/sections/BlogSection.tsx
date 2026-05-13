"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="section-title">
          <h2>News</h2>
          <p>Our Latest <span><u>Blogs</u></span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {/* Column 1: Two stacked text-only blog cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-[30px]"
          >
            {[1, 2].map((_, i) => (
              <div key={i} className="bg-white border border-penn-border rounded-[6px] p-[25px]">
                <span className="text-penn-body text-sm mb-2 block">
                  August 25, 2023 | <Link href="/blog-single" className="text-penn-green font-medium">Design</Link>
                </span>
                <h2>
                  <Link href="/blog-single" className="text-penn-navy font-extrabold text-lg leading-[28px] transition-colors hover:text-penn-green">
                    Professional Mobile Painting and Sculpting
                  </Link>
                </h2>
                <div className="mt-4">
                  <a href="#" className="cta">
                    <span>READ MORE</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Column 2: Image blog card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white border border-penn-border rounded-[6px] overflow-hidden">
              <Image
                src="/images/banner/slide2.jpg"
                alt="Blog"
                width={370}
                height={250}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-[25px]">
                <span className="text-penn-body text-sm mb-2 block">
                  August 26, 2023 | <Link href="/blog-single" className="text-penn-green font-medium">Education</Link>
                </span>
                <h2>
                  <Link href="/blog-single" className="text-penn-navy font-extrabold text-lg leading-[28px] transition-colors hover:text-penn-green">
                    Professional Ceramic Moulding for Beginner
                  </Link>
                </h2>
                <div className="mt-4">
                  <a href="#" className="cta">
                    <span>READ MORE</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Image blog card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white border border-penn-border rounded-[6px] overflow-hidden">
              <Image
                src="/images/banner/slide3.jpg"
                alt="Blog"
                width={370}
                height={250}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-[25px]">
                <span className="text-penn-body text-sm mb-2 block">
                  August 28, 2023 | <Link href="/blog-single" className="text-penn-green font-medium">Programing</Link>
                </span>
                <h2>
                  <Link href="/blog-single" className="text-penn-navy font-extrabold text-lg leading-[28px] transition-colors hover:text-penn-green">
                    Education Is About Create Leaders For Tomorrow
                  </Link>
                </h2>
                <div className="mt-4">
                  <a href="#" className="cta">
                    <span>READ MORE</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
