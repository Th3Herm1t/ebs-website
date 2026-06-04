"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, Award } from "lucide-react";

const licences = [
  { img: "/images/all-img/c1.png", cat: "Management", title: "Licence Nationale en Sciences de Gestion - Option Marketing", detail1: "6 Semestres - Présentiel", detail2: "IA Intégrée - 35 Certifications" },
  { img: "/images/all-img/c2.png", cat: "Marketing", title: "Licence Nationale en Sciences de Gestion - Option Marketing", detail1: "6 Semestres - Présentiel", detail2: "IA Intégrée - 57 Certifications" },
  { img: "/images/all-img/c3.png", cat: "Finance", title: "Licence Nationale en Sciences de Gestion - Option Finance", detail1: "6 Semestres - Présentiel", detail2: "IA Intégrée - 19 Certifications" },
  { img: "/images/all-img/c4.png", cat: "Informatique", title: "Licence Nationale en Génie Logiciel - Parcours Standard", detail1: "6 Semestres - Présentiel", detail2: "IA Intégrée - 35 Certifications" },
  { img: "/images/all-img/c5.png", cat: "Informatique", title: "Licence Nationale en Génie Logiciel - Option IA", detail1: "6 Semestres - Présentiel", detail2: "75 Certifications Disponibles" },
  { img: "/images/all-img/c6.png", cat: "Informatique", title: "Licence Nationale en Génie Logiciel - Option Cybersécurité", detail1: "6 Semestres - Présentiel", detail2: "52 Certifications Disponibles" },
];

const masters = [
  { img: "/images/all-img/c1.png", cat: "Finance Avancée", title: "Master en Ingénierie Financière", detail1: "4 Semestres - Présentiel", detail2: "IA Intégrée - 15 Certifications" },
  { img: "/images/all-img/c2.png", cat: "Marketing 5.0", title: "Master en CRM - Marketing & Transformation Digitale", detail1: "4 Semestres - Présentiel", detail2: "IA Intégrée - 49 Certifications" },
  { img: "/images/all-img/c3.png", cat: "Project Management", title: "Master en Management des Projets Innovants & Startups", detail1: "4 Semestres - Présentiel", detail2: "IA Intégrée - 22 Certifications" },
];

function ProgramGrid({ title, subtitle, programs }: { title: string, subtitle: string, programs: any[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="mb-24 last:mb-0" ref={ref}>
      <div className="section-title">
        <h2 className="uppercase text-penn-green text-[14px] tracking-[2px] font-bold mb-2">{title}</h2>
        <p className="text-[36px] font-extrabold text-penn-navy">
          <span><u className="text-penn-green">{subtitle.split(' ')[0]}</u></span> {subtitle.split(' ').slice(1).join(' ')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {programs.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white rounded-[6px] border border-penn-border overflow-hidden transition-all duration-300 hover:shadow-[0px_0_30px_rgba(1,41,112,0.08)] flex flex-col h-full"
          >
            {/* Image */}
            <div className="relative">
              <Image src={course.img} alt={course.title} width={370} height={220} className="w-full h-[220px] object-cover" />
            </div>

            {/* Content */}
            <div className="p-[25px] flex flex-col flex-grow">
              <div className="mb-4">
                <Link href="/programmes" className="bg-[#f4a261] text-white text-[13px] font-semibold py-[5px] px-[14px] rounded inline-block hover:bg-opacity-80 transition-colors duration-300">
                  {course.cat}
                </Link>
              </div>
              
              <h3 className="mb-[20px] flex-grow">
                <Link href="/programmes" className="text-penn-navy text-[20px] font-bold leading-[28px] transition-colors hover:text-penn-green">
                  {course.title}
                </Link>
              </h3>

              {/* Details List */}
              <div className="flex flex-col gap-3 pt-5 border-t border-penn-border mt-auto">
                <div className="flex items-center gap-2.5 text-penn-green text-[14.5px] font-medium">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span className="text-penn-body">{course.detail1}</span>
                </div>
                <div className="flex items-center gap-2.5 text-penn-green text-[14.5px] font-medium">
                  <Award className="w-4 h-4 flex-shrink-0" />
                  <span className="text-penn-body">{course.detail2}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function CoursesSection() {
  return (
    <section className="section-padding bg-[#fdfdfd]">
      <div className="max-w-[1200px] mx-auto px-4">
        <ProgramGrid title="EBS PROGRAMS" subtitle="Parcourir nos Licences" programs={licences} />
        <ProgramGrid title="EBS PROGRAMS" subtitle="Parcourir nos Masters" programs={masters} />
      </div>
    </section>
  );
}
