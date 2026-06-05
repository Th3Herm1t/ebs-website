"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Clock, LayoutGrid } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/SectionHeading";
import HeroBackgroundVariant2 from "./HeroBackgroundVariant2";

const imageEvents = [
  {
    title: "Master Marketing Digital et Data Analytics : Webinaire",
    link: "https://ebs.tn/blog/master-marketing-digital-et-data-analytics-de-lebs/",
    img: "https://ebs.tn/wp-content/uploads/2024/02/Master-Marketing-Digital-et-Data-Analytics-d_ESPIMA.webp",
    day: "19",
    month: "FÉV",
    time: "10:00 - 12:00",
    location: "Campus EBS"
  },
  {
    title: "Métiers d'Avenir dans le Digital Marketing : Conférence",
    link: "https://ebs.tn/blog/metiers-davenir-dans-le-digital-marketing-levolution-dynamique-du-paysage-professionnel/",
    img: "https://ebs.tn/wp-content/uploads/2024/01/Metiers-d_Avenir-dans-le-Digital-Marketing.webp",
    day: "26",
    month: "JAN",
    time: "14:00 - 16:30",
    location: "Amphithéâtre"
  }
];

const listEvents = [
  {
    title: "CV Renforcé par des Certifications : Workshop",
    link: "https://ebs.tn/blog/cv-renforce-par-des-certifications-la-cle-de-la-reussite-pour-les-jeunes-diplomes/",
    img: "https://ebs.tn/wp-content/uploads/2024/02/CV-Renforce-par-des-Certifications.webp",
    day: "01",
    month: "FÉV",
    time: "09:00 - 12:00",
    location: "Campus EBS"
  },
  {
    title: "L'Enseignement Supérieur : Les Universités Privées",
    link: "https://ebs.tn/blog/universites-privees-en-tunisie/",
    img: "https://ebs.tn/wp-content/uploads/2024/02/Photo-principale-Enseignement-Superieur-dans-les-Universites-Privees-en-Tunisie_1.webp",
    day: "29",
    month: "FÉV",
    time: "10:00 - 12:00",
    location: "En Ligne"
  }
];

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations('HomePage.events');

  return (
    <section className="relative overflow-hidden section-padding" ref={ref}>
      <HeroBackgroundVariant2 />
      <div className="relative z-10 max-w-[1140px] mx-auto px-4">
        <SectionHeading 
          title={t('title')} 
          subtitle={<>{t('subtitle')} <span className="text-penn-green underline decoration-penn-green">{t('subtitleHighlight')}</span></>} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
          {/* Two image event cards */}
          {imageEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Card className="border-penn-border rounded-[6px] overflow-hidden h-full">
                <div className="relative">
                  <Image src={event.img} alt={event.title} width={370} height={270} className="w-full h-[270px] object-cover" />
                  <div className="absolute top-[15px] left-[15px] flex shadow-lg">
                    <span className="bg-penn-navy text-white text-lg font-bold px-3 py-1 rounded-l">{event.day}</span>
                    <span className="bg-penn-green text-white text-lg font-bold px-3 py-1 rounded-r">{event.month}</span>
                  </div>
                </div>
                <CardContent className="p-[25px]">
                  <h3>
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-penn-navy font-extrabold text-lg leading-[28px] transition-colors hover:text-penn-green block min-h-[56px]">
                      {event.title}
                    </a>
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-2.5 text-penn-green text-sm">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{event.time}</span>
                    <span className="flex items-center gap-1"><LayoutGrid className="w-3.5 h-3.5" /><strong>{event.location}</strong></span>
                  </div>
                  <p className="mt-2.5 text-penn-body text-sm line-clamp-2">Rejoignez-nous pour cet événement exceptionnel de l'Espima Business School et découvrez de nouvelles opportunités.</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Right column — 2 stacked text-only event cards */}
          <div className="flex flex-col gap-[30px]">
            {listEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="h-full"
              >
                <Card className="border-penn-border rounded-[6px] h-full flex flex-col justify-center">
                  <CardContent className="p-[25px]">
                    <div className="flex mb-3 shadow-sm max-w-max">
                      <span className="bg-penn-navy text-white text-lg font-bold px-3 py-1 rounded-l">{event.day}</span>
                      <span className="bg-penn-green text-white text-lg font-bold px-3 py-1 rounded-r">{event.month}</span>
                    </div>
                    <h3>
                      <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-penn-navy font-extrabold text-lg transition-colors hover:text-penn-green">
                        {event.title}
                      </a>
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2.5 text-penn-green text-sm">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{event.time}</span>
                      <span className="flex items-center gap-1"><LayoutGrid className="w-3.5 h-3.5" /><strong>{event.location}</strong></span>
                    </div>
                    <p className="mt-2.5 text-penn-body text-sm line-clamp-2">Ne manquez pas cet événement organisé par EBS. Inscrivez-vous dès maintenant.</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
