"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useLocale } from "next-intl";

export default function NotFoundSection() {
  const locale = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding py-[100px]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src="/images/all-img/404.svg" 
                alt="404 error" 
                width={600} 
                height={400} 
                className="w-full max-w-[600px] h-auto mx-auto mb-10"
              />
              <h2 className="font-extrabold text-[50px] text-penn-navy mb-[30px] capitalize">
                {locale === "en" ? "Oops! Page not found" : "Oups ! Page introuvable"}
              </h2>
              <p className="font-medium text-penn-body w-full md:w-1/2 mx-auto mb-10">
                {locale === "en"
                  ? "We’re having trouble finding that page. Try again later or check your network connection."
                  : "Nous ne parvenons pas à trouver cette page. Réessayez plus tard ou vérifiez votre connexion réseau."}
              </p>
              
              <div>
                <Link 
                  href="/" 
                  className="bg-penn-green text-white py-3 px-10 font-bold rounded-full text-[16px] inline-block transition-all relative overflow-hidden shadow-[10px_15px_18px_rgba(23,23,36,0.1)] group"
                >
                   <span className="relative z-10">{locale === "en" ? "Back to home" : "Retour à l'accueil"}</span>
                  <span className="absolute inset-0 bg-penn-navy rounded-full transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
