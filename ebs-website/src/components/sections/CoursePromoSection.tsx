import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/shared";
import { useTranslations } from 'next-intl';
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CoursePromoSection() {
  const t = useTranslations('HomePage.coursepromo');

  return (
    <section
      className="section-padding bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/banner/section-bg-2.webp')" }}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-24">
        {/* Top Row: Text & Image */}
        <div className="flex flex-wrap items-center mb-16">
          <div className="w-full lg:w-6/12 lg:pr-8">
            <ScrollReveal initialX={-40} duration={0.8}>
              <Badge variant="default" size="lg" className="mb-6">
                <span className="w-2 h-2 rounded-full bg-penn-green animate-pulse" />
                {t('title')}
              </Badge>
              <h2 className="text-[48px] md:text-[60px] font-extrabold text-penn-navy leading-tight mb-8 tracking-tight">
                {t('subtitle')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4a261] to-[#e9c46a]">
                  {t('subtitleHighlight')}
                </span>
              </h2>
              <p className="text-lg md:text-[20px] text-penn-body/80 leading-tight pl-6 border-l-4 border-[#f4a261] italic font-medium">
                {t('desc')}
              </p>
            </ScrollReveal>
          </div>

          <div className="w-full lg:w-6/12 max-md:mt-10">
            <ScrollReveal initialX={40} duration={0.8}>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/all-img/promo-parcours-international.webp"
                  alt="EBS Students"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[center_25%]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Row: Three Pathways */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {["path1", "path2", "path3"].map((pathKey, idx) => (
            <ScrollReveal key={pathKey} initialY={30} duration={0.8} delay={0.2 + idx * 0.15}>
              <ul className="mb-[30px]">
                {t.raw(pathKey).map((item: string, i: number) => (
                  <li key={i} className={`flex items-center gap-4 mb-3 font-semibold text-[17px] ${i === 0 ? 'text-[#2B8FAB] text-[18px]' : 'text-penn-navy'}`}>
                    <span className="flex items-center justify-center w-[25px] h-[25px] bg-penn-green text-white rounded-[2px] flex-shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>

        {/* Single CTA */}
        <ScrollReveal initialY={20} duration={0.6} delay={0.5}>
          <div className="flex justify-center mt-12">
            <Link
              href="/parcours-international"
              className="inline-flex items-center gap-3 bg-[#2B8FAB] text-white font-bold text-[16px] py-4 px-10 rounded-full hover:bg-penn-navy transition-all duration-300 shadow-lg shadow-[#2B8FAB]/20 hover:shadow-xl hover:-translate-y-0.5"
            >
              J&apos;opte pour le parcours international
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
