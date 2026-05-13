"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, Clock, Star, LayoutGrid } from "lucide-react";

const courses = [
  { img: "/images/all-img/c1.png", price: "$49", cat: "Arts & Design", title: "Basic Fundamentals of Interior & Graphics Design", lessons: 3, time: "3h 45m", rating: 4.9, seats: 30 },
  { img: "/images/all-img/c2.png", price: "$39", cat: "Social", title: "Increasing Engagement with Instagram & Facebook", lessons: 5, time: "4h 15m", rating: 4.7, seats: 21 },
  { img: "/images/all-img/c3.png", price: "$29", cat: "Design", title: "Introduction to Color Theory & Basic UI/UX", lessons: 4, time: "6h 25m", rating: 4.8, seats: 33 },
  { img: "/images/all-img/c4.png", price: "$59", cat: "Technology", title: "Financial Security Thinking and Principles Theory", lessons: 7, time: "7h 45m", rating: 4.7, seats: 11 },
  { img: "/images/all-img/c5.png", price: "$69", cat: "Data Science", title: "Logo Design: From Concept to Presentation", lessons: 5, time: "4h 55m", rating: 4.9, seats: 41 },
  { img: "/images/all-img/c6.png", price: "$99", cat: "Development", title: "Professional Ceramic Moulding for Beginners", lessons: 3, time: "3h 10m", rating: 4.9, seats: 37 },
  { img: "/images/all-img/c1.png", price: "$49", cat: "Arts & Design", title: "Basic Fundamentals of Interior & Graphics Design", lessons: 3, time: "3h 45m", rating: 4.9, seats: 30 },
  { img: "/images/all-img/c2.png", price: "$39", cat: "Social", title: "Increasing Engagement with Instagram & Facebook", lessons: 5, time: "4h 15m", rating: 4.7, seats: 21 },
  { img: "/images/all-img/c3.png", price: "$29", cat: "Design", title: "Introduction to Color Theory & Basic UI/UX", lessons: 4, time: "6h 25m", rating: 4.8, seats: 33 },
];

export default function CoursesSection({ 
  limit, 
  showButton = true 
}: { 
  limit?: number;
  showButton?: boolean;
} = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const displayedCourses = limit ? courses.slice(0, limit) : courses;

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="section-title">
          <h2>Popular Courses</h2>
          <p>Choose Our <span><u>Top Courses</u></span></p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {displayedCourses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-[6px] border border-penn-border overflow-hidden transition-all duration-300 hover:shadow-[0px_0_30px_rgba(1,41,112,0.08)]"
            >
              {/* Image + Price badge */}
              <div className="relative">
                <Image src={course.img} alt={course.title} width={370} height={220} className="w-full h-[220px] object-cover" />
                <div className="absolute top-[15px] left-[15px] bg-penn-green text-white py-1 px-4 rounded-full text-sm font-bold">
                  {course.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-[20px] pt-[25px]">
                <Link href="/course-single" className="bg-penn-green-light text-penn-green text-sm font-semibold py-[5px] px-[15px] rounded-full inline-block mb-2.5">
                  {course.cat}
                </Link>
                <h3 className="mb-[15px]">
                  <Link href="/course-single" className="text-penn-navy text-lg font-extrabold leading-[28px] transition-colors hover:text-penn-green">
                    {course.title}
                  </Link>
                </h3>

                {/* Meta row */}
                <div className="flex flex-wrap gap-3 text-penn-green text-sm mb-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />{course.lessons} Lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />{course.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" />{course.rating}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-penn-green text-sm">
                  <LayoutGrid className="w-3.5 h-3.5" /><strong>{course.seats} Seats Available</strong>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {showButton && (
          <div className="text-center mt-[60px]">
            <Link
              href="/courses"
              className="bg-penn-green text-white py-[10px] px-[30px] font-bold rounded-full text-[15px] inline-block transition-all relative overflow-hidden shadow-[10px_15px_18px_rgba(23,23,36,0.1)] group"
            >
              <span className="relative z-10">View All Course</span>
              <span className="absolute inset-0 bg-penn-navy rounded-full transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
