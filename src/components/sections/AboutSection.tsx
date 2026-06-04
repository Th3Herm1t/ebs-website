"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Award, Brain } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-[100px] section-padding" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
        <div className="flex flex-wrap items-center gap-10 lg:gap-0">
          {/* Image — col-lg-6 */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/images/all-img/about1.png"
                alt="About"
                width={570}
                height={500}
                className="pr-0 lg:pr-16 w-full"
              />
            </motion.div>
          </div>

          {/* Content — col-lg-6 */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-[30px] relative"
            >
              <h2 className="font-bold mb-5 leading-[1.2] text-[32px] lg:text-[44px] text-penn-navy">
                Rejoignez la Business School{" "}
                <span className="text-[#f4a261] underline decoration-4 underline-offset-4">tournée vers le futur</span>
              </h2>
              <p className="mb-[30px] text-[15px] leading-[1.8] text-penn-body opacity-90">
                Espima Business School évolue et fait évoluer ses programmes avec un objectif ultime : permettre à chaque étudiant de construire un profil plus compétitif, plus polyvalent et mieux préparé aux exigences du marché de l'emploi.
              </p>
            </motion.div>

            {/* Mission card */}
            <div className="mb-[30px] bg-white p-[25px] lg:p-[30px] rounded-[10px] border border-[#eee] transition-all duration-300 hover:border-l-4 hover:border-l-[#2a9d8f] shadow-sm hover:shadow-md">
              <span className="bg-[#2a9d8f]/10 rounded-full float-left mr-5 block w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] text-[#2a9d8f] leading-[60px] lg:leading-[70px] text-center text-[26px]">
                <Brain className="w-6 h-6 lg:w-7 lg:h-7 mx-auto mt-4 lg:mt-5" />
              </span>
              <h4 className="font-extrabold overflow-hidden mb-2.5 text-[20px] lg:text-[22px] text-[#264653]">L'IA comme outil différenciateur</h4>
              <p className="overflow-hidden text-[14px] lg:text-[15px] leading-[1.7] text-penn-body">Chez EBS, chaque étudiant - quelle que soit sa filière - maîtrise les outils d'IA les plus demandés par les recruteurs. Des licences de management aux masters d'ingénierie financière. Ce n'est pas une option : c'est notre engagement pour votre employabilité.</p>
            </div>

            {/* Vision card */}
            <div className="mb-[30px] bg-white p-[25px] lg:p-[30px] rounded-[10px] border border-[#eee] transition-all duration-300 hover:border-l-4 hover:border-l-[#2a9d8f] shadow-sm hover:shadow-md">
              <span className="bg-[#2a9d8f]/10 rounded-full float-left mr-5 block w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] text-[#2a9d8f] leading-[60px] lg:leading-[70px] text-center text-[26px]">
                <Award className="w-6 h-6 lg:w-7 lg:h-7 mx-auto mt-4 lg:mt-5" />
              </span>
              <h4 className="font-extrabold overflow-hidden mb-2.5 text-[20px] lg:text-[22px] text-[#264653]">Des compétences certifiées</h4>
              <p className="overflow-hidden text-[14px] lg:text-[15px] leading-[1.7] text-penn-body">En plus de votre diplôme reconnu par l'État tunisien, vous repartez avec des certifications délivrées par les organisations les plus reconnues au monde. Gratuites. Incluses dans votre formation. Valorisables partout dans le monde.</p>
            </div>

            <Link
              href="/programmes"
              className="bg-[#2a9d8f] text-white py-[10px] px-[30px] font-bold rounded-full text-[15px] inline-block transition-all relative overflow-hidden shadow-[10px_15px_18px_rgba(23,23,36,0.1)] group"
            >
              <span className="relative z-10">Parcourir les programmes</span>
              <span className="absolute inset-0 bg-[#232434] rounded-full transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
