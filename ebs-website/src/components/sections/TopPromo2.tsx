"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

const promos = [
  { title: "Formation professionnalisante", desc: "Des parcours reconnus, construits autour de compétences directement mobilisables en entreprise." },
  { title: "Encadrement expert", desc: "Des enseignants et intervenants professionnels accompagnent chaque étape de votre parcours." },
  { title: "Accompagnement durable", desc: "Un suivi qui relie formation, mobilité internationale, insertion et évolution professionnelle." },
];

export default function TopPromo2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="tp_feature pb-[50px]" ref={ref}>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {promos.map((promo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-[60px] border-r border-[#ededed] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.05)] last:border-r-0 max-md:border-r-0 text-center"
            >
              <h3 className="text-[20px] font-extrabold mb-[15px] text-penn-navy">
                {promo.title}
              </h3>
              <p className="mb-10 text-penn-body text-[15px] leading-[26px]">{promo.desc}</p>
               <Link href="/nos-programmes" className="cta mx-auto justify-center text-penn-green hover:text-penn-navy">
                <span className="font-bold text-[14px] uppercase tracking-wider relative z-10 transition-colors">Découvrir</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10" className="ml-[10px] transform transition-transform group-hover:translate-x-1">
                  <path d="M1,5 L11,5" stroke="currentColor" strokeWidth="2" fill="none" />
                  <polyline points="8 1 12 5 8 9" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
               </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
