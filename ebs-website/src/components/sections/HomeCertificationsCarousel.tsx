"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export interface HomeCertificationCard {
  id: string;
  title: string;
  provider: string;
  providerLogo?: string;
  classification: string;
  credential: string;
  programmes: string[];
}

export default function HomeCertificationsCarousel({ cards, total }: { cards: HomeCertificationCard[]; total: number }) {
  return (
    <section className="overflow-hidden bg-penn-navy py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12">
        <div className="max-w-[520px]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/75">
            <Sparkles className="h-4 w-4 text-penn-green" />
            AI Passport EBS
          </div>
          <h2 className="text-[36px] font-extrabold leading-[1.08] tracking-tight md:text-[48px]">
            Des certifications internationales intégrées à votre parcours<span className="text-penn-green">.</span>
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-white/65">
            Explorez une sélection de certifications gratuites proposées par les organismes et plateformes qui accompagnent les compétences de nos étudiants.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/certifications" className="inline-flex items-center gap-2 rounded-full bg-penn-green px-6 py-3 text-[13px] font-extrabold uppercase tracking-wide text-white transition hover:bg-white hover:text-penn-navy">
              Explorer le catalogue
              <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="text-[12px] font-bold text-white/45">{total} opportunités au catalogue</span>
          </div>
        </div>

        <div className="relative min-w-0">
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
            className="!overflow-visible !pb-8"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id} className="!h-[380px] !w-[250px] md:!h-[440px] md:!w-[290px]">
                <article className="flex h-full flex-col justify-between overflow-hidden rounded-[26px] border border-white/15 bg-gradient-to-br from-[#243969] via-[#18294f] to-[#101a35] p-6 shadow-2xl">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-14 w-24 items-center rounded-xl bg-white px-3 py-2">
                        {card.providerLogo ? <Image src={card.providerLogo} alt={card.provider} width={96} height={40} className="h-9 w-full object-contain" unoptimized /> : <span className="text-[11px] font-extrabold text-penn-navy">{card.provider}</span>}
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
