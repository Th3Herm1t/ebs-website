"use client";

import Image from "next/image";
import { motion, useInView, useAnimationControls } from "motion/react";
import { useRef, useState } from "react";
import { useTranslations } from 'next-intl';
import SectionHeading from "@/components/ui/SectionHeading";

const logos = [
  { file: "arforghe.png", name: "Arforghe" },
  { file: "asteelflash.png", name: "AsteelFlash" },
  { file: "atb.png", name: "ATB" },
  { file: "audita.png", name: "Audita" },
  { file: "cayon.png", name: "Cayon" },
  { file: "medianet.png", name: "Medianet" },
  { file: "satem.png", name: "Satem" },
  { file: "smartfuture.png", name: "Smart Future" },
  { file: "soprahr.png", name: "Sopra HR" },
  { file: "unifactor.png", name: "Unifactor" },
  { file: "yperyon.png", name: "Yperyon" },
];

export default function PartnerLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations('HomePage.partners');
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading subtitle={<>{t('eco')} <span className="text-penn-green underline decoration-penn-green">{t('ecoHighlight')}</span></>} />
          <div
            className="overflow-x-auto whitespace-nowrap w-full relative cursor-grab active:cursor-grabbing scrollbar-hide"
            onMouseEnter={() => { setIsPaused(true); controls.stop(); }}
            onMouseLeave={() => { setIsPaused(false); controls.start({ x: ["0%", "-50%"] }, { ease: "linear", duration: 25, repeat: Infinity }); }}
          >
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={controls}
              initial={{ x: "0%" }}
              className="inline-flex items-center gap-16 w-max"
            >
              {[...logos, ...logos].map((logo, i) => (
                <a key={i} href="#" className="inline-block flex-shrink-0">
                  <Image
                    src={`/images/partenaires/${logo.file}`}
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
