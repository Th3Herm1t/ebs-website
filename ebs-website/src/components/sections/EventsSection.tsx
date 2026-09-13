"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, Camera, Clock, MapPin, Play } from "lucide-react";
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
        <div className="mb-8 border-b border-penn-navy/10 pb-6 md:mb-10">
          <SectionHeading
            title={t("title")}
            subtitle={<>{t("subtitle")} <span className="text-penn-green">{t("subtitleHighlight")}</span>.</>}
            className="mb-0 max-w-[760px]"
            subtitleClassName="md:w-full"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] lg:items-stretch lg:gap-8">
          <motion.article initial={{ opacity: 0, x: -24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="group overflow-hidden rounded-[28px] border border-penn-border bg-white shadow-[0_24px_70px_-42px_rgba(11,25,44,0.45)]">
            <div className="relative aspect-[16/6] overflow-hidden">
              <Image src={latest.img} alt={latest.title} fill sizes="(max-width: 1024px) 100vw, 62vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-penn-navy/75 via-penn-navy/5 to-transparent" />
              <div className="absolute left-5 top-5 flex overflow-hidden rounded-xl shadow-lg sm:left-7 sm:top-7">
                <span className="bg-penn-navy px-3.5 py-2.5 text-lg font-extrabold text-white">{latest.day}</span>
                <span className="bg-penn-green px-3.5 py-2.5 text-lg font-extrabold text-white">{latest.month}</span>
              </div>
              <span className="absolute bottom-5 left-5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white sm:bottom-7 sm:left-7">{t("latestLabel")}</span>
            </div>
            <div className="p-5 sm:p-7">
              <div className="mb-3 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-extrabold uppercase tracking-[0.08em] text-penn-green">
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{latest.time}</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{latest.location}</span>
              </div>
              <h3 className="max-w-[640px] text-[23px] font-extrabold leading-[1.18] text-penn-navy sm:text-[26px]">{latest.title}</h3>
              <p className="mt-3 line-clamp-3 max-w-[650px] text-[14px] leading-6 text-penn-body">{latest.desc}</p>
              <Link href="/actualites" className="group/link mt-5 inline-flex items-center gap-3 text-[13px] font-extrabold text-penn-navy">
                <span className="border-b border-penn-navy/20 pb-1 transition-colors group-hover/link:border-penn-green group-hover/link:text-penn-green">{t("btn")}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-penn-navy text-white transition-colors group-hover/link:bg-penn-green"><ArrowUpRight className="h-4 w-4" /></span>
              </Link>
            </div>
          </motion.article>

          <div className="hidden bg-penn-navy/10 lg:block" aria-hidden="true" />

          <motion.figure initial={{ opacity: 0, x: 24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.12 }} className="grid h-[430px] w-full grid-rows-[3fr_2fr] overflow-hidden rounded-[28px] bg-penn-navy shadow-[0_30px_70px_-35px_rgba(11,25,44,0.65)] lg:h-full">
            <div className="relative flex min-h-0 flex-col justify-center gap-2.5 overflow-hidden p-6 sm:p-8 lg:p-6 xl:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full border border-penn-green/20" aria-hidden="true" />
              <span className="pointer-events-none absolute bottom-[5%] right-3 select-none text-[92px] font-extrabold leading-none tracking-tight text-white/[0.05] lg:text-[88px] xl:text-[104px]" aria-hidden="true">EBS</span>
              <p className="relative flex items-center gap-2.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-penn-green">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-penn-green/30 bg-penn-green/10"><Camera className="h-3.5 w-3.5" /></span>
                {t("videoLabel")}
              </p>
              <h3 className="relative text-[20px] font-extrabold leading-[1.15] text-white sm:text-[24px] lg:text-[20px] xl:text-[24px]">{t("videoTitle")}</h3>
              <p className="relative line-clamp-3 text-[12.5px] leading-6 text-white/60">{t("videoDescription")}</p>
              <figcaption className="relative text-[9px] font-extrabold uppercase tracking-[0.15em] text-white/35">{t("videoCaption")}</figcaption>
            </div>
            <div className="relative min-h-0 overflow-hidden bg-black">
              <video className="h-full w-full object-cover" controls preload="none" poster="/images/campus/t27-poster-400.webp" playsInline aria-label={t("videoTitle")}>
                <source src="/videos/ebs-campus-tour.mp4" type="video/mp4" />
                {t("videoFallback")}
              </video>
              <span className="pointer-events-none absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-penn-navy/75 text-white backdrop-blur-sm" aria-hidden="true"><Play className="h-3.5 w-3.5 fill-current" /></span>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
