"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useTranslations } from 'next-intl';

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

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-penn-navy font-bold text-xl mb-10">
            {t('eco')}
          </h3>
          <div className="overflow-hidden whitespace-nowrap w-full relative">
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 25, repeat: Infinity }}
              className="inline-flex items-center gap-16"
            >
              {[...logos, ...logos].map((logo, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-block opacity-50 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                >
                  <Image
                    src={`/images/partenaires/${logo.file}`}
                    alt={logo.name}
                    width={140}
                    height={70}
                    className="h-[50px] w-auto object-contain"
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
