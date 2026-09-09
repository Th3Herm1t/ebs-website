"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BadgeCheck, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { formatPublicCertificationCount } from "@/lib/certifications/v3";

export interface HomeCertificationCard {
  id: string;
  title: string;
  provider: string;
  providerLogo?: string;
  classification: string;
  credential: string;
  programmes: string[];
}

export default function HomeCertificationsCarousel({
  cards,
  resourceCount,
  providerCount,
  programmeCount,
}: {
  cards: HomeCertificationCard[];
  resourceCount: number;
  providerCount: number;
  programmeCount: number;
}) {
  return (
    <section className="relative overflow-hidden bg-penn-navy py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[38%] lg:block">
        <Image
          src="/images/sections/photo-5.jpg"
          alt="Étudiante EBS avec son certificat"
          fill
          sizes="38vw"
          className="object-[70%_center] object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-penn-navy/10 via-penn-navy/50 to-penn-navy" />
      </div>
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12">
        <div className="relative max-w-[540px] lg:pr-8">
          <div className="absolute -left-5 top-0 h-full w-px bg-gradient-to-b from-penn-green via-white/15 to-transparent lg:-left-8" />
          <div className="mb-6 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-penn-green">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-penn-green/30 bg-penn-green/10">
              <Sparkles className="h-4 w-4" />
            </span>
            DES CERTIFICATIONS RECONNUES
          </div>
          <h2 className="max-w-[510px] text-[38px] font-extrabold leading-[1.04] tracking-tight text-white md:text-[52px]">
            {formatPublicCertificationCount(resourceCount)} CERTIFICATIONS INTERNATIONALES
          </h2>
          <p className="mt-6 max-w-[470px] text-[16px] leading-relaxed text-white/65">
            EBS intègre {formatPublicCertificationCount(resourceCount)} certifications professionnelles et internationales dans ses différents cursus. Elles permettent aux étudiants de valider des compétences concrètes et de renforcer leur profil auprès des recruteurs.
          </p>

          <div className="mt-9 space-y-4">
            <div className="flex items-start gap-4">
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-penn-green" />
              <div><p className="text-sm font-extrabold text-white">UN AVANTAGE POUR VOTRE CARRIÈRE</p><p className="mt-1 text-xs leading-relaxed text-white/50">Management, finance, marketing, IA, cybersécurité, gestion de projet… Ces certifications complètent le diplôme et permettent aux étudiants de se démarquer sur un marché du travail de plus en plus international.</p></div>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-5 border-t border-white/10 pt-6">
            <Link href="/certifications" className="inline-flex items-center gap-2 rounded-full bg-penn-green px-6 py-3 text-[13px] font-extrabold uppercase tracking-wide text-white transition hover:bg-white hover:text-penn-navy">
              DÉCOUVRIR NOS CERTIFICATIONS
              <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="text-[11px] font-bold text-white/45">{formatPublicCertificationCount(resourceCount)} ressources · {providerCount} organismes · {programmeCount} programmes</span>
          </div>
        </div>

        <div
          className="relative isolate min-w-0 overflow-hidden px-7 py-2 lg:px-10"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
          }}
        >
          <Swiper
            modules={[EffectCoverflow, Navigation]}
            effect="coverflow"
            centeredSlides
            centeredSlidesBounds
            grabCursor
            loop={cards.length > 3}
            slidesPerView="auto"
            navigation={{ nextEl: ".home-cert-next", prevEl: ".home-cert-prev" }}
            coverflowEffect={{ rotate: 0, stretch: 70, depth: 260, modifier: 1, slideShadows: false }}
            className="!overflow-visible !pb-8 [&_.swiper-slide]:transition-[filter,opacity] [&_.swiper-slide]:duration-500 [&_.swiper-slide-prev]:blur-[1.5px] [&_.swiper-slide-next]:blur-[1.5px]"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id} className="!h-[380px] !w-[250px] md:!h-[440px] md:!w-[290px]">
                <article className="flex h-full flex-col justify-between overflow-hidden rounded-[26px] border border-white/15 bg-gradient-to-br from-[#243969] via-[#18294f] to-[#101a35] p-6 shadow-2xl">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-h-14 w-28 flex-col items-center justify-center gap-1 rounded-xl bg-white px-2 py-2">
                        {card.providerLogo && <Image src={card.providerLogo} alt={card.provider} width={96} height={40} className="h-8 w-full object-contain" unoptimized />}
                        <span className="w-full truncate text-center text-[9px] font-extrabold text-penn-navy" title={card.provider}>{card.provider}</span>
                      </div>
                      <Award className="h-6 w-6 text-penn-green" />
                    </div>
                    <p className="mt-8 text-[11px] font-extrabold uppercase tracking-[0.14em] text-penn-green">{card.classification}</p>
                    <h3 className="mt-3 text-[21px] font-extrabold leading-tight text-white">{card.title}</h3>
                  </div>
                  <div>
                    <p className="border-t border-white/15 pt-4 text-[11px] font-bold uppercase tracking-wide text-white/45">{card.credential}</p>
                    <p className="mt-3 line-clamp-2 text-[12px] leading-relaxed text-white/65">Associée à {card.programmes.join(" · ")}</p>
                    <span className="mt-5 inline-flex rounded-full bg-penn-green/15 px-3 py-1.5 text-[11px] font-extrabold text-penn-green">100 % gratuit</span>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <button type="button" aria-label="Certification précédente" className="home-cert-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-penn-navy/80 p-3 text-white transition hover:bg-penn-green">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Certification suivante" className="home-cert-next absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-penn-navy/80 p-3 text-white transition hover:bg-penn-green">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
