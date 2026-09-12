"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function NotFoundSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding py-[100px]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src="/images/all-img/404.svg" 
                alt="404 error" 
                width={600} 
                height={400} 
                className="w-full max-w-[600px] h-auto mx-auto mb-10"
              />
              <h2 className="font-extrabold text-[50px] text-penn-navy mb-[30px] capitalize">
                Oops! Page not found
              </h2>
              <p className="font-medium text-penn-body w-full md:w-1/2 mx-auto mb-10">
                Hmm. We’re having trouble finding that site. Try again later or Check your network connection.
              </p>
              
              <div>
                <Link 
                  href="/" 
                  className="bg-penn-green text-white py-3 px-10 font-bold rounded-full text-[16px] inline-block transition-all relative overflow-hidden shadow-[10px_15px_18px_rgba(23,23,36,0.1)] group"
                >
                  <span className="relative z-10">Back to Home</span>
                  <span className="absolute inset-0 bg-penn-navy rounded-full transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
