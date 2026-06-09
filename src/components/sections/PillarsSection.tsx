import { useTranslations } from 'next-intl';
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PillarsSection() {
  const t = useTranslations('HomePage.pillars');

  const pillars = [
    {
      id: "international",
      bgColor: "bg-[#264653]",
      textColor: "text-white",
      title: t('p1.title'),
      p1: t('p1.desc1'),
      p2: t('p1.desc2'),
      cta: t('p1.btn'),
      link: "#"
    },
    {
      id: "tech",
      bgColor: "bg-[#2B8FAB]",
      textColor: "text-white",
      title: t('p2.title'),
      p1: t('p2.desc1'),
      p2: t('p2.desc2'),
      cta: t('p2.btn'),
      link: "#"
    },
    {
      id: "partners",
      bgColor: "bg-[#f4a261]",
      textColor: "text-white",
      title: t('p3.title'),
      p1: t('p3.desc1'),
      p2: t('p3.desc2'),
      cta: t('p3.btn'),
      link: "#"
    }
  ];

  return (
    <section className="w-full flex flex-col lg:flex-row">
      {pillars.map((pillar, i) => (
        <ScrollReveal
          key={pillar.id}
          initialX={0}
          initialY={0}
          initialScale={0.95}
          duration={0.6}
          delay={i * 0.2}
          className={`flex-1 ${pillar.bgColor} ${pillar.textColor} p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-10 hover:z-20`}
        >
          <h3 className="text-[24px] md:text-[28px] xl:text-[32px] font-bold mb-4 lg:mb-6 leading-tight text-current">
            {pillar.title}
          </h3>
          <p className="mb-5 lg:mb-6 text-[14px] lg:text-[15px] leading-tight lg:leading-tight opacity-90">
            {pillar.p1}
          </p>
          <p className="mb-8 lg:mb-10 text-[14px] lg:text-[15px] leading-tight lg:leading-tight opacity-90">
            {pillar.p2}
          </p>
          <div className="mt-auto pt-4">
            <a 
              href={pillar.link} 
              className={`inline-block font-bold text-[13px] uppercase tracking-wider transition-opacity hover:opacity-70 ${pillar.textColor === 'text-white' ? 'border-white' : 'border-[#232434]'} border-b-2 pb-1`}
            >
              {pillar.cta}
            </a>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
}
