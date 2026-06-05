"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useTranslations } from 'next-intl';
import SectionHeading from "@/components/ui/SectionHeading";

const logos = [
  { file: "eklore.png", name: "Eklore" },
  { file: "epitech.png", name: "Epitech" },
  { file: "epsi.png", name: "EPSI" },
  { file: "excelia.png", name: "Excelia" },
  { file: "figs (2).png", name: "FIGS" },
  { file: "gutech.png", name: "GUtech" },
  { file: "idrac.png", name: "IDRAC" },
  { file: "ifag.png", name: "IFAG" },
  { file: "igefi.png", name: "IGEFI" },
  { file: "psb.png", name: "PSB" },
  { file: "redsup.png", name: "Redsup" },
  { file: "supdecom.png", name: "Sup de Com" },
  { file: "uqat.png", name: "UQAT" },
];

export default function AcademicPartners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations('HomePage.partners');

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading subtitle={<>{t('acad')} <span className="text-penn-green underline decoration-penn-green">{t('acadHighlight')}</span></>} />
          <div className="overflow-hidden whitespace-nowrap w-full relative">
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
              className="inline-flex items-center gap-16"
            >
              {[...logos, ...logos].map((logo, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-block flex-shrink-0"
                >
                  <Image
                    src={`/images/partenaires-academiques/${logo.file}`}
                    alt={logo.name}
                    width={180}
                    height={90}
                    className="h-[90px] w-auto object-contain"
                  />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
