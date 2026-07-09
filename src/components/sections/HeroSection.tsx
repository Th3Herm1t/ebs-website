import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Award, Brain, Briefcase, Globe, GraduationCap, LineChart, Monitor, Shield, TrendingUp } from "lucide-react";
import HeroBackground from "./HeroBackground";

const categoryIcons = {
  licence: GraduationCap,
  master: Award,
  international: Globe,
  management: Briefcase,
  marketing: TrendingUp,
  finance: LineChart,
  informatique: Monitor,
  ia: Brain,
  cyber: Shield,
};

type HeroCategory = {
  id: keyof typeof categoryIcons;
  title: string;
  count: number;
  badgeColor: string;
  href: string;
};

export default async function HeroSection() {
  const t = await getTranslations('HomePage.hero');

  const courseCategories: HeroCategory[] = [
    { id: "licence", title: t('categories.Licence'), count: 4, badgeColor: "bg-[#f4a261]", href: "/licences" },
    { id: "master", title: t('categories.Master'), count: 3, badgeColor: "bg-[#84cc16]", href: "/masters" },
    { id: "international", title: t('categories.Parcours International'), count: 14, badgeColor: "bg-[#8b5cf6]", href: "/parcours-international" },
    { id: "management", title: t('categories.Management'), count: 2, badgeColor: "bg-[#3b82f6]", href: "/licences?program=management" },
    { id: "marketing", title: t('categories.Marketing'), count: 2, badgeColor: "bg-[#ec4899]", href: "/licences?program=marketing" },
    { id: "finance", title: t('categories.Finance'), count: 2, badgeColor: "bg-[#14b8a6]", href: "/licences?program=finance" },
    { id: "informatique", title: t('categories.Informatique'), count: 2, badgeColor: "bg-[#f43f5e]", href: "/licences?program=informatique-ia" },
    { id: "ia", title: t('categories.Intelligence Artificielle'), count: 1, badgeColor: "bg-[#a855f7]", href: "/licences?program=informatique-ia" },
    { id: "cyber", title: t('categories.Cybersécurité'), count: 1, badgeColor: "bg-[#eab308]", href: "/licences?program=cybersecurite" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center max-md:h-auto max-md:py-[80px] pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden"
    >
      <HeroBackground />
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-wrap items-center">
          {/* Left content — col-lg-6 */}
          <div className="w-full lg:w-6/12">
            <div className="py-10 max-md:py-0 relative">
              <h1 className="text-[38px] md:text-[50px] xl:text-[60px] font-extrabold leading-tight tracking-tight mb-6 md:mb-8 text-[#232434]">
                {t('title1')} <span className="text-[#2B8FAB]">{t('titleHighlight')}</span> {t('title2')}
              </h1>
              <p className="mb-8 font-normal text-[16px] md:text-[18px] text-[#42474c] leading-tight max-w-2xl pr-0 md:pr-8">
                <strong className="text-[#232434] text-[18px] md:text-[20px] block mb-2 md:mb-3">{t('desc1')}</strong>
                {t('desc2')}
              </p>

              {/* Category Slider Block */}
              <div className="relative mt-4 w-full max-w-[550px]">
                <div className="flex flex-col items-end mb-2 relative z-20 pr-4 md:pr-8">
                  <span className="text-[16px] md:text-[18px] text-[#2B8FAB] font-semibold italic text-right leading-tight w-[200px]">
                    {t('sliderTitle')}
                  </span>
                  <svg width="45" height="45" viewBox="0 0 100 100" fill="none" className="text-[#2B8FAB] mr-6 md:mr-12 mt-1">
                    <path d="M90,10 Q40,30 20,90" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <polygon points="20,90 32,78 14,75" fill="currentColor" />
                  </svg>
                </div>
                
                {/* Shadcn Carousel */}
                <div className="px-0 md:px-12">
                  <div className="flex gap-4 overflow-x-auto pb-3 pr-2 snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {courseCategories.map((cat) => {
                      const Icon = categoryIcons[cat.id];
                      return (
                        <a key={cat.id} href={cat.href} className="snap-start shrink-0 w-[140px] md:w-[160px] h-[150px] md:h-[160px] relative bg-transparent border border-dashed border-[#a3a3a3] flex flex-col items-center justify-center p-3 md:p-4 transition-all duration-300 hover:border-[#2B8FAB] cursor-pointer group">
                          <div className={`absolute top-2 right-2 text-white text-[10px] font-bold px-1.5 py-0.5 rounded ${cat.badgeColor}`}>
                            {cat.count}
                          </div>
                          <div className="mb-2 md:mb-3">
                            <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#42474c] stroke-[1px] group-hover:text-[#2B8FAB] transition-colors" />
                          </div>
                          <h3 className="text-center font-bold text-[#232434] text-[12px] md:text-[13px] leading-snug group-hover:text-[#2B8FAB] transition-colors">
                            {cat.title}
                          </h3>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right image — col-lg-6 */}
          <div className="w-full lg:w-6/12 flex items-center justify-center lg:justify-end mt-16 lg:mt-0">
            <div className="relative inline-block w-full max-w-[500px] lg:max-w-[700px]">
              <Image
                src="/images/all-img/hero-batch7.webp"
                alt="EBS Student"
                width={800}
                height={900}
                className="relative z-10 object-contain w-full h-auto"
                priority
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
