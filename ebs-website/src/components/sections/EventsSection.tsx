"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Camera, Clock, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import HeroBackgroundVariant2 from "./HeroBackgroundVariant2";

interface LatestEntry {
  title: string;
  link: string;
  day: string;
  month: string;
  time: string;
  location: string;
  desc: string;
  img: string;
}

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("HomePage.events");
  const latest = (t.raw("listImage") as LatestEntry[])[0];

  return (
    <section className="relative overflow-hidden section-padding" ref={ref}>
      <HeroBackgroundVariant2 />
      <div className="relative z-10 mx-auto max-w-[1140px] px-4">
        <SectionHeading
          title={t("title")}
          subtitle={<>{t("subtitle")} <span className="text-penn-green underline decoration-penn-green">{t("subtitleHighlight")}</span></>}
        />

        <div className="mx-auto max-w-[760px]">
          <motion.article initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="overflow-hidden rounded-3xl border border-penn-border bg-white shadow-sm">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src={latest.img} alt={latest.title} fill sizes="(max-width: 1024px) 100vw, 760px" className="object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-penn-navy/70 via-transparent to-transparent" />
              <div className="absolute left-5 top-5 flex overflow-hidden rounded-xl shadow-lg">
                <span className="bg-penn-navy px-3 py-2 text-lg font-extrabold text-white">{latest.day}</span>
                <span className="bg-penn-green px-3 py-2 text-lg font-extrabold text-white">{latest.month}</span>
              </div>
              <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-penn-navy/70 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-white backdrop-blur-sm">Dernière publication</span>
            </div>
            <div className="p-6 lg:p-8">
              <div className="mb-3 flex flex-wrap gap-4 text-[12px] font-bold text-penn-green"><span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{latest.time}</span><span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{latest.location}</span></div>
              <h3 className="text-[23px] font-extrabold leading-tight text-penn-navy">{latest.title}</h3>
              <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-penn-body">{latest.desc}</p>
              <Link href="/actualites" className="mt-6 inline-flex items-center gap-2 text-[13px] font-extrabold text-penn-green transition-colors hover:text-penn-navy">Voir toute l&apos;actualité <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </motion.article>
        </div>

        <motion.figure initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.12 }} className="mx-auto mt-8 flex max-w-[760px] flex-col gap-5 rounded-2xl border border-penn-border bg-white/70 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
          <div className="overflow-hidden rounded-xl bg-black sm:w-[280px] sm:shrink-0">
            <video className="aspect-video w-full object-cover" controls preload="none" poster="/images/campus/t27-poster-400.webp" playsInline aria-label={t("videoTitle")}>
              <source src="/videos/ebs-campus-tour.mp4" type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture vidéo.
            </video>
          </div>
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-penn-green"><Camera className="h-4 w-4" />{t("videoLabel")}</p>
            <p className="mt-2 text-[18px] font-extrabold leading-tight text-penn-navy">{t("videoTitle")}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-penn-body">{t("videoDescription")}</p>
            <figcaption className="mt-3 text-[11px] font-bold uppercase tracking-wide text-penn-body/50">ESPIMA Business School · Tunis</figcaption>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
