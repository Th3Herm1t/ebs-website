"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FileText, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const socialIcons = [FacebookIcon, TwitterIcon, InstagramIcon];

const team = [
  { img: "/images/all-img/team1.jpg", name: "Marina Mojo", role: "Developer", courses: 5, students: 12 },
  { img: "/images/all-img/team2.jpg", name: "Ayoub Fennouni", role: "Logo Expert", courses: 5, students: 7 },
  { img: "/images/all-img/team3.jpg", name: "Mark Linomi", role: "Marketer", courses: 9, students: 17 },
  { img: "/images/all-img/team4.jpg", name: "Amira Yerden", role: "UI/UX Designer", courses: 15, students: 31 },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeading 
          title="Team Member" 
          subtitle={<>Our Expert <span className="text-penn-green underline decoration-penn-green">Instructors</span></>} 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={300}
                  height={350}
                  className="w-full h-auto transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="py-4">
                <h3 className="text-penn-navy font-extrabold text-xl mb-1">{member.name}</h3>
                <p className="text-penn-body mb-3">{member.role}</p>
                <div className="flex justify-center gap-5 mb-4 text-sm">
                  <span className="flex items-center gap-1.5 text-penn-navy">
                    <FileText className="w-3.5 h-3.5 text-penn-green" />
                    <u>{member.courses} Course</u>
                  </span>
                  <span className="flex items-center gap-1.5 text-penn-navy">
                    <Users className="w-3.5 h-3.5 text-penn-green" />
                    <u>{member.students} Student</u>
                  </span>
                </div>
                <ul className="flex justify-center gap-2">
                  {socialIcons.map((Icon, j) => (
                    <li key={j}>
                      <Link
                        href="/corps-enseignant"
                        className="w-9 h-9 rounded-full border border-penn-border flex items-center justify-center text-penn-navy transition-all hover:bg-penn-green hover:border-penn-green hover:text-white"
                      >
                        <Icon className="w-4 h-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
