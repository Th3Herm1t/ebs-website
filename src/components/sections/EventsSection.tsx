"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Clock, LayoutGrid } from "lucide-react";

const imageEvents = [
  { img: "/images/banner/slide1.jpg", day: "20", month: "Oct", title: "Electrical Engineering of Batparder new event" },
  { img: "/images/banner/slide2.jpg", day: "22", month: "Oct", title: "Architecture Design of International Art Fair 2023" },
];

const listEvents = [
  { day: "26", month: "Oct", title: "Chiter Astana Event" },
  { day: "29", month: "Oct", title: "Dasel Bhai Program" },
];

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="section-title">
          <h2>Upcoming Events</h2>
          <p>Join With Us <span><u>Our Events</u></span></p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
          {/* Two image event cards */}
          {imageEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white border border-penn-border rounded-[6px] overflow-hidden"
            >
              <div className="relative">
                <Image src={event.img} alt={event.title} width={370} height={270} className="w-full h-[270px] object-cover" />
                <div className="absolute top-[15px] left-[15px] flex">
                  <span className="bg-penn-navy text-white text-lg font-bold px-3 py-1 rounded-l">{event.day}</span>
                  <span className="bg-penn-green text-white text-lg font-bold px-3 py-1 rounded-r">{event.month}</span>
                </div>
              </div>
              <div className="p-[25px]">
                <h3>
                  <Link href="/event" className="text-penn-navy font-extrabold text-lg leading-[28px] transition-colors hover:text-penn-green">
                    {event.title}
                  </Link>
                </h3>
                <div className="flex gap-4 mt-2.5 text-penn-green text-sm">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />10.00AM - 12.00PM</span>
                  <span className="flex items-center gap-1"><LayoutGrid className="w-3.5 h-3.5" /><strong>At Penn School</strong></span>
                </div>
                <p className="mt-2.5 text-penn-body text-sm">Lorem ipsum dolor sit amet magna consectetur adipisicing elit.</p>
              </div>
            </motion.div>
          ))}

          {/* Right column — 2 stacked text-only event cards */}
          <div className="flex flex-col gap-[30px]">
            {listEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="bg-white border border-penn-border rounded-[6px] p-[25px]"
              >
                <div className="flex mb-3">
                  <span className="bg-penn-navy text-white text-lg font-bold px-3 py-1 rounded-l">{event.day}</span>
                  <span className="bg-penn-green text-white text-lg font-bold px-3 py-1 rounded-r">{event.month}</span>
                </div>
                <h3>
                  <Link href="/event" className="text-penn-navy font-extrabold text-lg transition-colors hover:text-penn-green">
                    {event.title}
                  </Link>
                </h3>
                <div className="flex gap-4 mt-2.5 text-penn-green text-sm">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />10.00AM - 12.00PM</span>
                  <span className="flex items-center gap-1"><LayoutGrid className="w-3.5 h-3.5" /><strong>At Penn School</strong></span>
                </div>
                <p className="mt-2.5 text-penn-body text-sm">Lorem ipsum dolor sit amet magna consectetur adipisicing elit.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
