"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import { cn } from "@/lib/utils";

export default function TopPromo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const t = useTranslations('HomePage.toppromo');

  const promos = [
    {
      id: "brochure",
      title: t('p1.title'),
      desc: t('p1.desc'),
      ctaText: t('p1.btn'),
      bgColor: "bg-[#264653]",
      link: "/brochures",
      image: "/images/toppromo/brochure.jpg",
    },
    {
      id: "whatsapp",
      title: t('p2.title'),
      desc: t('p2.desc'),
      ctaText: t('p2.btn'),
      bgColor: "bg-[#2B8FAB]",
      link: "/contact",
      image: "/images/toppromo/candidature.jpg",
    },
    {
      id: "apply",
      title: t('p3.title'),
      desc: t('p3.desc'),
      ctaText: t('p3.btn'),
      bgColor: "bg-[#f4a261]",
      link: "/preinscription",
      image: "/images/toppromo/conseiller.jpg",
    },
  ];

  return (
    <section className="pb-[50px]" ref={ref}>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {promos.map((promo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative p-[60px] border-r border-penn-border shadow-[0px_0px_150px_0px_rgba(78,67,250,0.1)] last:border-r-0 max-md:border-r-0 overflow-hidden"
            >
              {/* Background image at 30% opacity */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={promo.image}
                  alt=""
                  fill
                  className="object-cover opacity-30"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content overlay */}
              <div className="relative z-10">
                <h3 className="text-[20px] font-extrabold mb-[15px] text-penn-navy">
                  {promo.title}
                </h3>
                <p className="mb-10 text-penn-body">{promo.desc}</p>
                <a
                  href={promo.link}
                  className={cn(
                    "inline-block px-8 py-3 rounded-full text-white uppercase text-[13px] tracking-wide font-bold transition-opacity hover:opacity-90",
                    promo.bgColor
                  )}
                >
                  {promo.ctaText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
