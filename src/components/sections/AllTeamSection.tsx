"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FileText, Users } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "@/components/ui/social-icons";

const allTeam = [
  { img: "/images/all-img/team5.png", name: "Stephen Cronin", role: "Designer", courses: 5, students: 12 },
  { img: "/images/all-img/team6.png", name: "Rachel Park", role: "Developer", courses: 19, students: 41 },
  { img: "/images/all-img/team7.png", name: "Dan Billson", role: "Marketer", courses: 14, students: 33 },
  { img: "/images/all-img/team8.png", name: "Gina Mellow", role: "Co-founder", courses: 11, students: 27 },
  { empty: true }, // The original HTML had an empty column here
  { img: "/images/all-img/team9.png", name: "John Stuart", role: "Graphics Expert", courses: 15, students: 32 },
  { img: "/images/all-img/team10.png", name: "Maikel Clark", role: "Animator", courses: 18, students: 72 },
];

export default function AllTeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-[60px]">
          <h2>Our Instructor</h2>
          <p>Our Expert <span><u>Instructors</u></span></p>
        </div>

        <div className="flex flex-wrap -mx-4 justify-center">
          {allTeam.map((member, i) => {
            if (member.empty) {
              return <div key={i} className="hidden md:block w-full md:w-1/4 px-4" />;
            }
            
            return (
              <div key={i} className="w-full sm:w-1/2 md:w-1/4 px-4 mb-[30px]">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative mb-4 overflow-hidden rounded-lg inline-block">
                    <Image
                      src={member.img!}
                      alt={member.name!}
                      width={270}
                      height={320}
                      className="w-full h-auto"
                    />
                    <ul className="absolute top-0 left-0 w-full h-full bg-[rgba(1,105,56,0.8)] flex flex-col items-center justify-center gap-2 opacity-0 transform scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 rounded-lg m-0 p-0 list-none">
                      <li><a href="#" className="w-[40px] h-[40px] bg-white text-penn-navy flex items-center justify-center rounded transition-colors hover:bg-penn-navy hover:text-white"><Facebook className="w-4 h-4" /></a></li>
                      <li><a href="#" className="w-[40px] h-[40px] bg-white text-penn-navy flex items-center justify-center rounded transition-colors hover:bg-penn-navy hover:text-white"><Twitter className="w-4 h-4" /></a></li>
                      <li><a href="#" className="w-[40px] h-[40px] bg-white text-penn-navy flex items-center justify-center rounded transition-colors hover:bg-penn-navy hover:text-white"><Linkedin className="w-4 h-4" /></a></li>
                      <li><a href="#" className="w-[40px] h-[40px] bg-white text-penn-navy flex items-center justify-center rounded transition-colors hover:bg-penn-navy hover:text-white"><Instagram className="w-4 h-4" /></a></li>
                    </ul>
                  </div>
                  <div className="py-[15px]">
                    <h3 className="text-[20px] font-extrabold text-penn-navy mb-1">{member.name}</h3>
                    <span className="text-penn-body text-[15px] block mb-3">{member.role}</span>
                    <div className="flex justify-center gap-[20px] text-[13px] font-bold text-penn-navy">
                      <span className="flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-penn-green" />
                        <u>{member.courses} Course</u>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-penn-green" />
                        <u>{member.students} Student</u>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
