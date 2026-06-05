"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

import { Download, ArrowRight, FileText } from "lucide-react";
import { useTranslations } from 'next-intl';

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
      icon: Download,
      link: "#"
    },
    { 
      id: "whatsapp",
      title: t('p2.title'), 
      desc: t('p2.desc'),
      ctaText: t('p2.btn'),
      link: "#"
    },
    { 
      id: "apply",
      title: t('p3.title'), 
      desc: t('p3.desc'),
      ctaText: t('p3.btn'),
      icon: ArrowRight,
      link: "#"
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
              className="p-[60px] border-r border-penn-border shadow-[0px_0px_150px_0px_rgba(78,67,250,0.1)] last:border-r-0 max-md:border-r-0"
            >
              <h3 className="text-[20px] font-extrabold mb-[15px] text-penn-navy">
                {promo.title}
              </h3>
              <p className="mb-10 text-penn-body">{promo.desc}</p>
              <a href={promo.link} className="cta">
                <span className="uppercase text-[13px] tracking-wide relative z-10">{promo.ctaText}</span>
                {promo.id === "whatsapp" ? (
                  <svg viewBox="0 0 24 24" width="18px" height="18px" className="ml-3 relative z-10" style={{ fill: "currentColor", stroke: "none" }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                ) : (
                  <svg width="13px" height="10px" viewBox="0 0 13 10" className="ml-3 relative z-10">
                    <path d="M1,5 L11,5" />
                    <polyline points="8 1 12 5 8 9" />
                  </svg>
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
