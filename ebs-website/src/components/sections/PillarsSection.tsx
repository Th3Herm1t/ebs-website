import Image from "next/image";
import { useTranslations } from 'next-intl';
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PillarsSection() {
  const t = useTranslations('HomePage.pillars');

  const pillars = [
    {
      id: "international",
      bgImage: "/images/sections/pillar-mobilite.jpg",
      textColor: "text-white",
      title: t('p1.title'),
      p1: t('p1.desc1'),
      p2: t('p1.desc2'),
      cta: t('p1.btn'),
      link: "/parcours-international"
    },
    {
      id: "tech",
      bgImage: "/images/sections/pillar-tech.jpg",
      textColor: "text-white",
      title: t('p2.title'),
      p1: t('p2.desc1'),
      p2: t('p2.desc2'),
      cta: t('p2.btn'),
      link: "/certifications"
    },
    {
      id: "partners",
      bgImage: "/images/sections/pillar-partenaires.jpg",
      textColor: "text-white",
      title: t('p3.title'),
      p1: t('p3.desc1'),
      p2: t('p3.desc2'),
      cta: t('p3.btn'),
      link: "/partenaires-economiques"
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
          className={`relative flex-1 ${pillar.textColor} p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-10 hover:z-20 min-h-[400px] overflow-hidden group`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image fill 
              src={pillar.bgImage} 
              alt="" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Gradient Overlay for legibility */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-penn-navy/90 via-penn-navy/60 to-penn-navy/30 group-hover:from-[#2B8FAB]/90 group-hover:via-[#2B8FAB]/60 transition-colors duration-500" />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-[24px] md:text-[28px] xl:text-[32px] font-bold mb-4 lg:mb-6 leading-tight text-current">
              {(() => {
                const words = pillar.title.split(' ');
                const mid = Math.ceil(words.length / 2);
                return (
                  <>
                    {words.slice(0, mid).join(' ')}
                    <br />
                    {words.slice(mid).join(' ')}
                  </>
                );
              })()}
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
                className={`inline-block font-bold text-[13px] uppercase tracking-wider transition-opacity hover:opacity-70 border-white border-b-2 pb-1`}
              >
                {pillar.cta}
              </a>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
}
