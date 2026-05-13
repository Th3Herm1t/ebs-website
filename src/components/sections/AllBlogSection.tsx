"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const blogItems = [
  // Row 1
  {
    type: "stacked",
    items: [
      { date: "August 25, 2023", category: "Design", title: "Professional Mobile Painting and Sculpting" },
      { date: "August 25, 2023", category: "Design", title: "Professional Mobile Painting and Sculpting" }
    ]
  },
  {
    type: "image",
    img: "/images/blog/2.png",
    date: "August 26, 2023",
    category: "Education",
    title: "Professional Ceramic Moulding for Beginner"
  },
  {
    type: "image",
    img: "/images/blog/3.png",
    date: "August 28, 2023",
    category: "Programing",
    title: "Education Is About Create Leaders For Tomorrow"
  },
  // Row 2
  {
    type: "image",
    img: "/images/blog/2.png",
    date: "August 26, 2023",
    category: "Education",
    title: "Professional Ceramic Moulding for Beginner"
  },
  {
    type: "image",
    img: "/images/blog/3.png",
    date: "August 28, 2023",
    category: "Programing",
    title: "Education Is About Create Leaders For Tomorrow"
  },
  {
    type: "stacked",
    items: [
      { date: "August 25, 2023", category: "Design", title: "Professional Mobile Painting and Sculpting" },
      { date: "August 25, 2023", category: "Design", title: "Professional Mobile Painting and Sculpting" }
    ]
  }
];

export default function AllBlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-[#f9f9f9]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {blogItems.map((block, i) => (
            <div key={i} className="w-full md:w-1/2 lg:w-4/12 px-4 mb-[30px]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="h-full flex flex-col gap-[30px]"
              >
                {block.type === "stacked" ? (
                  block.items?.map((item, j) => (
                    <div key={j} className="bg-white p-[30px] rounded-[6px] border border-[#ededed] flex-1 flex flex-col justify-center transition-all duration-300 hover:shadow-[0px_10px_40px_rgba(0,0,0,0.06)] group">
                      <span className="text-penn-body text-[14px] font-semibold block mb-[10px]">
                        {item.date} | <Link href="/blog-single" className="text-penn-green hover:underline">{item.category}</Link>
                      </span>
                      <h2 className="text-[20px] font-extrabold text-penn-navy leading-[28px] mb-[15px]">
                        <Link href="/blog-single" className="transition-colors group-hover:text-penn-green">
                          {item.title}
                        </Link>
                      </h2>
                      <Link href="/blog-single" className="flex items-center gap-[10px] text-[13px] font-extrabold uppercase text-penn-navy tracking-[1px] group-hover:text-penn-green transition-colors mt-auto">
                        READ MORE
                        <svg width="13px" height="10px" viewBox="0 0 13 10" className="stroke-current fill-none stroke-2">
                          <path d="M1,5 L11,5"></path>
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-[6px] border border-[#ededed] overflow-hidden transition-all duration-300 hover:shadow-[0px_10px_40px_rgba(0,0,0,0.06)] h-full group">
                    <div className="overflow-hidden">
                      <Image 
                        src={block.img!} 
                        alt={block.title!} 
                        width={370} 
                        height={250} 
                        className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>
                    <div className="p-[30px]">
                      <span className="text-penn-body text-[14px] font-semibold block mb-[10px]">
                        {block.date} | <Link href="/blog-single" className="text-penn-green hover:underline">{block.category}</Link>
                      </span>
                      <h2 className="text-[20px] font-extrabold text-penn-navy leading-[28px] mb-[15px]">
                        <Link href="/blog-single" className="transition-colors group-hover:text-penn-green">
                          {block.title}
                        </Link>
                      </h2>
                      <Link href="/blog-single" className="flex items-center gap-[10px] text-[13px] font-extrabold uppercase text-penn-navy tracking-[1px] group-hover:text-penn-green transition-colors mt-auto">
                        READ MORE
                        <svg width="13px" height="10px" viewBox="0 0 13 10" className="stroke-current fill-none stroke-2">
                          <path d="M1,5 L11,5"></path>
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
