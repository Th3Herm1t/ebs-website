import Image from "next/image";
import Link from "next/link";
import { Award, Brain } from "lucide-react";
import { useTranslations } from 'next-intl';
import ScrollReveal from "@/components/ui/ScrollReveal";
import HeroBackgroundVariant1 from "./HeroBackgroundVariant1";

export default function AboutSection() {
  const t = useTranslations('HomePage.about');

  return (
    <section className="relative overflow-hidden py-16 lg:py-[100px] section-padding">
      <HeroBackgroundVariant1 />
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 lg:px-12">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12">
          {/* Image — col-lg-6 */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex">
            <ScrollReveal
              initialX={-40}
              initialY={0}
              duration={0.8}
              className="relative w-full h-full"
            >
              <Image
                src="/images/all-img/section-5.png"
                alt="EBS l'Université Augmentée par l'IA"
                width={570}
                height={800}
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
            </ScrollReveal>
          </div>

          {/* Content — col-lg-6 */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <ScrollReveal
              initialX={40}
              initialY={0}
              duration={0.8}
              className="mb-[30px] relative"
            >
              <h2 className="font-bold mb-5 leading-tight text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] tracking-tight xl:whitespace-nowrap text-penn-navy">
                {t('title')}
              </h2>
              <p className="mb-[30px] text-[15px] leading-tight text-penn-body opacity-90">
                {t('desc')}
              </p>
            </ScrollReveal>

            {/* Mission card */}
            <ScrollReveal initialY={30} delay={0.2}>
              <div className="mb-[30px] bg-white p-[25px] lg:p-[30px] rounded-[10px] border border-[#eee] transition-all duration-300 hover:border-l-4 hover:border-l-[#2B8FAB] shadow-sm hover:shadow-md">
                <span className="bg-[#2B8FAB]/10 rounded-full float-left mr-5 block w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] text-[#2B8FAB] leading-[60px] lg:leading-[70px] text-center text-[26px]">
                  <Brain className="w-6 h-6 lg:w-7 lg:h-7 mx-auto mt-4 lg:mt-5" />
                </span>
                <h4 className="font-extrabold overflow-hidden mb-2.5 text-[18px] lg:text-[20px] text-[#264653]">{t('f1Title')}</h4>
                <p className="overflow-hidden text-[14px] lg:text-[15px] leading-tight text-penn-body">{t('f1Desc')}</p>
              </div>
            </ScrollReveal>

            {/* Vision card */}
            <ScrollReveal initialY={30} delay={0.3}>
              <div className="mb-[30px] bg-white p-[25px] lg:p-[30px] rounded-[10px] border border-[#eee] transition-all duration-300 hover:border-l-4 hover:border-l-[#2B8FAB] shadow-sm hover:shadow-md">
                <span className="bg-[#2B8FAB]/10 rounded-full float-left mr-5 block w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] text-[#2B8FAB] leading-[60px] lg:leading-[70px] text-center text-[26px]">
                  <Award className="w-6 h-6 lg:w-7 lg:h-7 mx-auto mt-4 lg:mt-5" />
                </span>
                <h4 className="font-extrabold overflow-hidden mb-2.5 text-[18px] lg:text-[20px] text-[#264653]">{t('f2Title')}</h4>
                <p className="overflow-hidden text-[14px] lg:text-[15px] leading-tight text-penn-body">{t('f2Desc')}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal initialY={30} delay={0.4}>
              <Link
                href="/licences"
                className="bg-[#2B8FAB] text-white py-[10px] px-[30px] font-bold rounded-full text-[15px] inline-block transition-all relative overflow-hidden shadow-[10px_15px_18px_rgba(23,23,36,0.1)] group"
              >
                <span className="relative z-10">{t('btn')}</span>
                <span className="absolute inset-0 bg-[#232434] rounded-full transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
