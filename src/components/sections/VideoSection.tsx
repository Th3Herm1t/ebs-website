"use client";

import Link from "next/link";
import { Play } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      className="vid_area section-padding py-[150px] bg-cover bg-center bg-no-repeat bg-fixed relative"
      style={{ backgroundImage: "url(/images/banner/video.jpg)" }}
      ref={ref}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#111111] opacity-60"></div>
      <div className="container mx-auto px-4 relative z-[1]">																
        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full text-center"
          >
            <div className="video-area flex justify-center">
              <Link 
                href="https://www.youtube.com/watch?v=RXv_uIN6e-Y" 
                target="_blank" 
                className="video-button w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-penn-green text-white rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-[0_0_0_15px_rgba(46,202,127,0.3)] animate-pulse"
              >
                <Play className="w-[30px] h-[30px] ml-[5px]" />
              </Link>
            </div>
          </motion.div>	
        </div>
      </div>
    </section>
  );
}
