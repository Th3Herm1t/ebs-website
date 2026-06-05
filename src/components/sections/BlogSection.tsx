"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useTranslations } from 'next-intl';
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/SectionHeading";

const textBlogs = [
  {
    title: "Poursuivre les Études Supérieures au Québec : Les Avantages du Partenariat EBS-UQAT",
    link: "https://ebs.tn/blog/poursuivre-les-etudes-superieures-au-quebec-canada-les-avantages-du-partenariat-entre-ebs-tunisie-et-uqat-canada/",
    date: "1 avril 2024",
    category: "Partenariat"
  },
  {
    title: "Master en Ingénierie Financière à EBS : Un Parcours d'Excellence",
    link: "https://ebs.tn/blog/les-etudes-superieures-en-finance-en-tunisie-master-en-ingenierie-financiere-a-ebs-un-parcours-dexcellence/",
    date: "1 avril 2024",
    category: "Éducation"
  }
];

const imageBlogs = [
  {
    title: "Trois Masters Exceptionnels en Partenariat avec ADP et ASTEELFLASH : Votre Carrière à Portée de Main !",
    link: "https://ebs.tn/blog/espima-business-school-propose-pour-ses-etudiants-trois-masters-exceptionnels-en-partenariat-avec-adp-et-asteelflash-votre-carriere-a-portee-de-main/",
    img: "https://ebs.tn/wp-content/uploads/2024/03/PHOTO-COUV-TROIS-MASTERS-AVEC-ADP-ET-ASTEELFLASH-min.webp",
    date: "25 mars 2024",
    category: "Carrière"
  },
  {
    title: "L'Enseignement Supérieur dans les Universités Privées en Tunisie",
    link: "https://ebs.tn/blog/universites-privees-en-tunisie/",
    img: "https://ebs.tn/wp-content/uploads/2024/02/Photo-principale-Enseignement-Superieur-dans-les-Universites-Privees-en-Tunisie_1.webp",
    date: "29 février 2024",
    category: "Actualités"
  }
];

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations('HomePage.articles');

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-[1140px] mx-auto px-4">
        <SectionHeading 
          title={t('title')} 
          subtitle={<>{t('subtitle')} <span className="text-penn-green underline decoration-penn-green">{t('subtitleHighlight')}</span></>} 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {/* Column 1: Two stacked text-only blog cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-[30px]"
          >
            {textBlogs.map((blog, i) => (
              <Card key={i} className="border-penn-border rounded-[6px]">
                <CardContent className="p-[25px]">
                  <span className="text-penn-body text-sm mb-2 block">
                    {blog.date} | <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-penn-green font-medium">{blog.category}</a>
                  </span>
                  <h2>
                    <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-penn-navy font-extrabold text-lg leading-[28px] transition-colors hover:text-penn-green">
                      {blog.title}
                    </a>
                  </h2>
                  <div className="mt-4">
                    <a href={blog.link} target="_blank" rel="noopener noreferrer" className="cta">
                      <span>LIRE LA SUITE</span>
                      <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5" />
                        <polyline points="8 1 12 5 8 9" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Column 2 & 3: Image blog cards */}
          {imageBlogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <Card className="border-penn-border rounded-[6px] overflow-hidden h-full flex flex-col">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={370}
                  height={250}
                  className="w-full h-[250px] object-cover"
                />
                <CardContent className="p-[25px] flex-1">
                  <span className="text-penn-body text-sm mb-2 block">
                    {blog.date} | <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-penn-green font-medium">{blog.category}</a>
                  </span>
                  <h2>
                    <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-penn-navy font-extrabold text-lg leading-[28px] transition-colors hover:text-penn-green">
                      {blog.title}
                    </a>
                  </h2>
                  <div className="mt-4">
                    <a href={blog.link} target="_blank" rel="noopener noreferrer" className="cta">
                      <span>LIRE LA SUITE</span>
                      <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5" />
                        <polyline points="8 1 12 5 8 9" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
