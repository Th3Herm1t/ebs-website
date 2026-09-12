"use client";

import { motion, useInView } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import HeroBackgroundVariant2 from "./HeroBackgroundVariant2";

interface VideoTestimonial {
  videoUrl: string;
  eyebrow: string;
  title: string;
  description: string;
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("HomePage.testimonials");
  const videos = t.raw("videos") as VideoTestimonial[];

  return (
    <section className="relative overflow-hidden section-padding" ref={ref}>
      <HeroBackgroundVariant2 />
      <div className="relative z-10 mx-auto max-w-[1140px] px-4">
        <SectionHeading
          title={t("title")}
          subtitle={
            <>
              {t("subtitle")} <span className="text-penn-green underline decoration-penn-green">{t("subtitleHighlight")}</span>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {videos.map((video, index) => (
            <motion.article
              key={video.videoUrl}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group overflow-hidden rounded-2xl border border-penn-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden bg-penn-navy">
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-penn-green">{video.eyebrow}</p>
                <h3 className="text-[18px] font-extrabold leading-tight text-penn-navy">{video.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-penn-body">{video.description}</p>
                <a
                  href={video.videoUrl.replace("/embed/", "/watch?v=")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[13px] font-extrabold text-penn-green transition-colors hover:text-penn-navy"
                >
                  {t("watch")} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
