"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Check } from "lucide-react";

const checkpoints = [
  "Double diplôme avec nos partenaires internationaux",
  "Passerelle vers la France, le Canada & l'Italie",
  "Accompagnement dossier immigration & visa",
];

export default function CoursePromoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      className="section-padding bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('/images/banner/section-bg-2.png')" }}
      ref={ref}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-24">
        
        {/* Top Row: Text & Image */}
        <div className="flex flex-wrap items-center mb-16">
          {/* Text content — col-lg-6 */}
          <div className="w-full lg:w-6/12 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-penn-green font-bold text-lg mb-2.5">EBS INTERNATIONAL</h4>
              <h2 className="text-[44px] leading-[56px] max-md:text-[32px] max-md:leading-[42px] text-penn-navy font-bold mb-[25px]">
                Le Parcours International
                <br />
                Votre Passerelle vers un Avenir <br />
                Académique Sans Frontières
              </h2>
              <p className="text-penn-body mb-0">
                Forte d'un réseau solide de partenaires académiques internationaux, EBS offre à ses étudiants la possibilité d'entamer leurs études en Tunisie et les terminer au sein d'un établissement international partenaire.
              </p>
            </motion.div>
          </div>

          {/* Image — col-lg-6 */}
          <div className="w-full lg:w-6/12 max-md:mt-10">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/all-img/promo.png"
                alt="Parcours International EBS"
                width={570}
                height={500}
                className="w-full h-auto rounded-xl shadow-sm"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Row: The Two Pathways */}
        <div className="flex flex-wrap">
          {/* Pathway 1 */}
          <div className="w-full lg:w-6/12 lg:pr-8 max-md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ul className="mb-[30px]">
                {[
                  "Deux ans de Licence à EBS",
                  "Validation des acquis",
                  "Certification de langue",
                  "Préparation de dossier d'immigration",
                  "Bachelor Grande École en France",
                  "Bachelor Link University en Italie",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 mb-3 text-penn-navy font-semibold text-[17px]">
                    <span className="flex items-center justify-center w-[25px] h-[25px] bg-penn-green text-white rounded-[2px] flex-shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <a href="/programmes" className="cta">
                  <span>En savoir plus</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5" />
                    <polyline points="8 1 12 5 8 9" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Pathway 2 */}
          <div className="w-full lg:w-6/12 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ul className="mb-[30px]">
                {[
                  "Trois ans de Licence à EBS",
                  "Validation des acquis",
                  "Certification de langue",
                  "Préparation de dossier d'immigration",
                  "Maitrise en Management au Canada",
                  "Master Grande École en France",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 mb-3 text-penn-navy font-semibold text-[17px]">
                    <span className="flex items-center justify-center w-[25px] h-[25px] bg-penn-green text-white rounded-[2px] flex-shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <a href="/programmes" className="cta">
                  <span>En savoir plus</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5" />
                    <polyline points="8 1 12 5 8 9" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
