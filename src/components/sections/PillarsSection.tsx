"use client";

import { motion } from "motion/react";

const pillars = [
  {
    id: "international",
    bgColor: "bg-[#264653]",
    textColor: "text-white",
    title: "Mobilité Internationale",
    p1: "La mobilité internationale offre aux étudiants l'opportunité d'élargir leurs horizons académiques et culturels à travers des expériences d'études ou de collaboration à l'étranger.",
    p2: "Forte d'un réseau solide de partenaires académiques internationaux, les étudiants d'EBS ont la possibilité d'entamer leurs études en Tunisie et les terminer au sein d'un établissement international partenaire.",
    cta: "EN SAVOIR PLUS",
    link: "#"
  },
  {
    id: "tech",
    bgColor: "bg-[#2a9d8f]",
    textColor: "text-white",
    title: "Technologies & Certifications",
    p1: "L'intégration des technologies émergentes constitue un élément central de nos programmes de formation. L'IA est à présent une compétence transversale dans tous nos cursus.",
    p2: "Les parcours académiques sont enrichis par des certifications reconnues, permettant de valider des compétences pratiques dans des domaines à forte valeur ajoutée et de renforcer l'employabilité et la capacité d'adaptation des diplômés.",
    cta: "EXPLORER LES CERTIFICATIONS",
    link: "#"
  },
  {
    id: "partners",
    bgColor: "bg-[#e9c46a]",
    textColor: "text-[#232434]",
    title: "Partenaires Économiques",
    p1: "Nos partenariats avec les acteurs économiques renforcent le lien entre formation académique et réalités du monde professionnel. Ces collaborations favorisent les stages, les projets appliqués, les interventions d'experts et les opportunités d'insertion.",
    p2: "En travaillant aux côtés d'entreprises et d'organisations de référence, EBS développe des formations en phase avec les compétences et les enjeux du marché.",
    cta: "DÉCOUVRIR NOS PARTENAIRES",
    link: "#"
  }
];

export default function PillarsSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      {pillars.map((pillar, i) => (
        <motion.div
          key={pillar.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className={`flex-1 ${pillar.bgColor} ${pillar.textColor} p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col`}
        >
          <h3 className="text-[24px] md:text-[28px] xl:text-[32px] font-bold mb-4 lg:mb-6 leading-tight">
            {pillar.title}
          </h3>
          <p className="mb-5 lg:mb-6 text-[14px] lg:text-[15px] leading-[1.7] lg:leading-[1.8] opacity-90">
            {pillar.p1}
          </p>
          <p className="mb-8 lg:mb-10 text-[14px] lg:text-[15px] leading-[1.7] lg:leading-[1.8] opacity-90">
            {pillar.p2}
          </p>
          <div className="mt-auto pt-4">
            <a 
              href={pillar.link} 
              className={`inline-block font-bold text-[13px] uppercase tracking-wider transition-opacity hover:opacity-70 ${pillar.textColor === 'text-white' ? 'border-white' : 'border-[#232434]'} border-b-2 pb-1`}
            >
              {pillar.cta}
            </a>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
