"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Clock, LayoutGrid } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const allEventsData = [
  // Row 1
  { type: "image", img: "/images/event/e1.png", day: "20", month: "Oct", title: "Electrical Engineering of Batparder new event" },
  { type: "image", img: "/images/event/e2.png", day: "22", month: "Oct", title: "Architecture Design of International Art Fair 2023" },
  { type: "image", img: "/images/event/e3.png", day: "22", month: "Oct", title: "Architecture Design of International Art Fair 2023" },
  
  // Row 2
  { type: "list", items: [
    { day: "26", month: "Oct", title: "Chiter astana event" },
    { day: "29", month: "Oct", title: "Dasel Bhai Program" }
  ]},
  { type: "list", items: [
    { day: "26", month: "Oct", title: "Chiter astana event" },
    { day: "29", month: "Oct", title: "Dasel Bhai Program" }
  ]},
  { type: "image", img: "/images/event/e4.png", day: "20", month: "Oct", title: "Electrical Engineering of Batparder new event" },
  
  // Row 3
  { type: "image", img: "/images/event/e5.png", day: "22", month: "Oct", title: "Architecture Design of International Art Fair 2023" },
  { type: "image", img: "/images/event/e6.png", day: "22", month: "Oct", title: "Architecture Design of International Art Fair 2023" },
];

export default function AllEventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-[1140px] mx-auto px-4">
        <SectionHeading 
          title="Upcoming Events" 
          subtitle={<>Join With Us <span className="text-penn-green underline decoration-penn-green">Our Events</span></>} 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {allEventsData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={item.type === "list" ? "flex flex-col gap-[30px]" : "bg-white border border-penn-border rounded-[6px] overflow-hidden"}
            >
              {item.type === "image" ? (
                <>
                  <div className="relative">
                    <Image src={item.img!} alt={item.title!} width={370} height={270} className="w-full h-[270px] object-cover" />
                    <div className="absolute top-[15px] left-[15px] flex">
                      <span className="bg-penn-navy text-white text-lg font-bold px-3 py-1 rounded-l">{item.day}</span>
                      <span className="bg-penn-green text-white text-lg font-bold px-3 py-1 rounded-r">{item.month}</span>
                    </div>
                  </div>
                  <div className="p-[25px]">
                    <h3>
                      <Link href="/event-single" className="text-penn-navy font-extrabold text-lg leading-[28px] transition-colors hover:text-penn-green">
                        {item.title}
                      </Link>
                    </h3>
                    <div className="flex gap-4 mt-2.5 text-penn-green text-sm">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />10.00AM - 12.00PM</span>
                      <span className="flex items-center gap-1"><LayoutGrid className="w-3.5 h-3.5" /><strong>At Penn School</strong></span>
                    </div>
                    <p className="mt-2.5 text-penn-body text-sm mb-0">Lorem ipsum dolor sit amet magna consectetur adipisicing elit.</p>
                  </div>
                </>
              ) : (
                item.items?.map((subItem, j) => (
                  <div key={j} className="bg-white border border-penn-border rounded-[6px] p-[25px] flex-1">
                    <div className="flex mb-3">
                      <span className="bg-penn-navy text-white text-lg font-bold px-3 py-1 rounded-l">{subItem.day}</span>
                      <span className="bg-penn-green text-white text-lg font-bold px-3 py-1 rounded-r">{subItem.month}</span>
                    </div>
                    <h3>
                      <Link href="/event-single" className="text-penn-navy font-extrabold text-lg transition-colors hover:text-penn-green">
                        {subItem.title}
                      </Link>
                    </h3>
                    <div className="flex gap-4 mt-2.5 text-penn-green text-sm">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />10.00AM - 12.00PM</span>
                      <span className="flex items-center gap-1"><LayoutGrid className="w-3.5 h-3.5" /><strong>At Penn School</strong></span>
                    </div>
                    <p className="mt-2.5 text-penn-body text-sm mb-0">Lorem ipsum dolor sit amet magna consectetur adipisicing elit.</p>
                  </div>
                ))
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
