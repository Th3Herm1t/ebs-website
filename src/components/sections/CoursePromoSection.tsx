import Image from "next/image";
import { Check } from "lucide-react";
import { useTranslations } from 'next-intl';
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CoursePromoSection() {
  const t = useTranslations('HomePage.coursepromo');

  return (
    <section 
      className="section-padding bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('/images/banner/section-bg-2.png')" }}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-24">
        
        {/* Top Row: Text & Image */}
        <div className="flex flex-wrap items-center mb-16">
          {/* Text content — col-lg-6 */}
          <div className="w-full lg:w-6/12 lg:pr-8">
            <ScrollReveal initialX={-40} duration={0.8}>
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-penn-green/10 text-penn-green font-bold text-[13px] tracking-widest uppercase mb-6 border border-penn-green/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-penn-green animate-pulse"></span>
                {t('title')}
              </div>

              {/* Dynamic Headline */}
              <h2 className="text-[48px] md:text-[60px] font-extrabold text-penn-navy leading-tight mb-8 tracking-tight">
                {t('subtitle')} <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4a261] to-[#e9c46a]">
                  {t('subtitleHighlight')}
                </span>
              </h2>

              {/* Stylized Paragraph */}
              <p className="text-lg md:text-[20px] text-penn-body/80 leading-tight pl-6 border-l-4 border-[#f4a261] italic font-medium">
                {t('desc')}
              </p>
            </ScrollReveal>
          </div>

          {/* Image — col-lg-6 */}
          <div className="w-full lg:w-6/12 max-md:mt-10">
            <ScrollReveal initialX={40} duration={0.8}>
              <Image
                src="/images/all-img/promo-stock.png"
                alt="EBS Students"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Row: The Two Pathways */}
        <div className="flex flex-wrap">
          {/* Pathway 1 */}
          <div className="w-full lg:w-6/12 lg:pr-8 max-md:mb-12">
            <ScrollReveal initialY={30} duration={0.8} delay={0.2}>
              <ul className="mb-[30px]">
                {t.raw('path1').map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-4 mb-3 text-penn-navy font-semibold text-[17px]">
                    <span className="flex items-center justify-center w-[25px] h-[25px] bg-penn-green text-white rounded-[2px] flex-shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <a href="/programmes" className="cta">
                  <span>{t('btn')}</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5" />
                    <polyline points="8 1 12 5 8 9" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Pathway 2 */}
          <div className="w-full lg:w-6/12 lg:pl-8">
            <ScrollReveal initialY={30} duration={0.8} delay={0.4}>
              <ul className="mb-[30px]">
                {t.raw('path2').map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-4 mb-3 text-penn-navy font-semibold text-[17px]">
                    <span className="flex items-center justify-center w-[25px] h-[25px] bg-penn-green text-white rounded-[2px] flex-shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <a href="/programmes" className="cta">
                  <span>{t('btn')}</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5" />
                    <polyline points="8 1 12 5 8 9" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
}
