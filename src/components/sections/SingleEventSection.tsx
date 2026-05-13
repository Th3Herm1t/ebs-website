"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, Clock, LayoutGrid, Phone, MapPin } from "lucide-react";

export default function SingleEventSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding py-[100px]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          
          {/* Main Content - Left Column */}
          <div className="w-full lg:w-8/12 px-4 mb-[50px] lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Image 
                src="/images/event/e1.png" 
                alt="Event Image" 
                width={800} 
                height={500} 
                className="w-full h-auto rounded-[6px] mb-[30px]"
              />
              <div className="mt-5">
                <h4 className="text-[28px] font-extrabold text-penn-navy mb-4">
                  Architecture Design of International Art Fair 2023
                </h4>
                
                <div className="flex flex-wrap gap-[20px] text-penn-green text-[15px] font-semibold mb-5">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> 10 Oct 2023
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> 9.00 AM-01.00 PM
                  </span>
                  <span className="flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4" /> <strong>3783 Columbia Mine Road Shinnston</strong>
                  </span>
                </div>
                
                <p className="text-penn-body mb-[30px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer.
                </p>
                
                <h3 className="text-[24px] font-extrabold text-penn-navy mb-4">Event Descriptions</h3>
                <p className="text-penn-body">
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="w-full lg:w-4/12 px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#f9f9f9] p-[30px] rounded-[6px]">
                <h3 className="text-[22px] font-extrabold text-penn-navy mb-[30px]">Buy Ticket</h3>
                <ul className="space-y-[20px]">
                  <li className="flex gap-4">
                    <div className="text-penn-green pt-1"><Calendar className="w-6 h-6" /></div>
                    <div>
                      <h4 className="text-[16px] font-bold text-penn-navy m-0">Total Seats</h4>
                      <p className="text-penn-body m-0">1200</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-penn-green pt-1"><Clock className="w-6 h-6" /></div>
                    <div>
                      <h4 className="text-[16px] font-bold text-penn-navy m-0">Ticket price</h4>
                      <p className="text-penn-body m-0">$50</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-penn-green pt-1"><Phone className="w-6 h-6" /></div>
                    <div>
                      <h4 className="text-[16px] font-bold text-penn-navy m-0">Contact for details</h4>
                      <p className="text-penn-body m-0">+88 123 456 789</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-penn-green pt-1"><MapPin className="w-6 h-6" /></div>
                    <div>
                      <h4 className="text-[16px] font-bold text-penn-navy m-0">Event Venue</h4>
                      <p className="text-penn-body m-0 leading-tight">3783 Columbia Mine Road Shinnston, WV 26431</p>
                    </div>
                  </li>
                </ul>
                <div className="text-center mt-[30px]">
                  <Link href="/courses" className="bg-penn-green text-white py-[12px] px-[30px] font-bold rounded-full text-[16px] inline-block transition-all relative overflow-hidden shadow-[10px_15px_18px_rgba(23,23,36,0.1)] group">
                    <span className="relative z-10">Register For book</span>
                    <span className="absolute inset-0 bg-penn-navy rounded-full transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
