"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useTranslations } from 'next-intl';
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations('HomePage.articles');

  const textBlogs = t.raw('listText') as any[];
  const imageBlogs = t.raw('listImage') as any[];

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-[1140px] mx-auto px-4">
        <SectionHeading 
          title={t('title')} 
          subtitle={<>{t('subtitle')} <span className="text-penn-green underline decoration-penn-green">{t('subtitleHighlight')}</span></>} 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {/* Column 1: Two stacked text-only blog cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-[30px]"
          >
            {textBlogs.map((blog, i) => (
              <Card key={i} className="border-penn-border rounded-[6px]">
                <CardContent className="p-[25px]">
                  <span className="text-penn-body text-sm mb-2 block">
                    {blog.date} | <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-penn-green font-medium">{blog.category}</a>
                  </span>
                  <h2>
                    <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-penn-navy font-extrabold text-lg leading-[28px] transition-colors hover:text-penn-green">
                      {blog.title}
                    </a>
                  </h2>
                  <div className="mt-4">
                    <a href={blog.link} target="_blank" rel="noopener noreferrer" className="cta">
                      <span>{t('readMore')}</span>
                      <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5" />
                        <polyline points="8 1 12 5 8 9" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Column 2 & 3: Image blog cards */}
          {imageBlogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <Card className="border-penn-border rounded-[6px] overflow-hidden h-full flex flex-col">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={370}
                  height={250}
                  className="w-full h-[250px] object-cover"
                />
                <CardContent className="p-[25px] flex-1">
                  <span className="text-penn-body text-sm mb-2 block">
                    {blog.date} | <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-penn-green font-medium">{blog.category}</a>
                  </span>
                  <h2>
                    <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-penn-navy font-extrabold text-lg leading-[28px] transition-colors hover:text-penn-green">
                      {blog.title}
                    </a>
                  </h2>
                  <div className="mt-4">
                    <a href={blog.link} target="_blank" rel="noopener noreferrer" className="cta">
                      <span>{t('readMore')}</span>
                      <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5" />
                        <polyline points="8 1 12 5 8 9" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
