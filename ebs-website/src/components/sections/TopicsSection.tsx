import Image from "next/image";
import { useTranslations } from 'next-intl';
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TopicsSection() {
  const t = useTranslations('HomePage.topics');

  const certifications = [
    { icon: "/images/icon/google.svg", title: "Google" },
    { icon: "/images/icon/microsoft.svg", title: "Microsoft" },
    { icon: "/images/icon/ibm.svg", title: "IBM" },
    { icon: "/images/icon/cisco-2.svg", title: "Cisco" },
    { icon: "/images/icon/aws-2.svg", title: "AWS" },
    { icon: "/images/icon/hubspot.svg", title: "Hubspot" },
    { icon: "/images/icon/Asset 1ahrefs.svg", title: "Ahrefs" },
    { icon: "/images/icon/Asset 1bloomberg.svg", title: "Bloomberg" },
    { icon: "/images/icon/deeplearning.ai.svg", title: "DeepLearning.AI" },
    { icon: "/images/icon/fortinet.png", title: "Fortinet" },
    { icon: "/images/icon/meta.png", title: "Meta" },
    { icon: "/images/icon/n8n.png", title: "n8n" },
    { icon: "/images/icon/pwc.png", title: "PwC" },
    { icon: "/images/icon/semrush.svg", title: "Semrush" },
    { icon: "/images/icon/harvard.png", title: "Harvard" },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/sections/certifications-bg.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-penn-navy/85" />
      <div className="absolute inset-0 z-[1] opacity-[0.03] bg-[radial-gradient(circle_at_30%_50%,_#2B8FAB_0%,_transparent_60%)]" />

      <div className="max-w-[1280px] mx-auto px-5 lg:px-12 relative z-10">
        <div className="mb-12 text-center max-w-[800px] mx-auto">
          <h2 className="text-[34px] md:text-[42px] font-extrabold text-white mb-4 leading-tight">
            {t('title')}
          </h2>
          <p className="text-[16px] text-white/70">
            {t('subtitle')} <span className="text-penn-green">{t('subtitleHighlight')}</span>
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-[30px]">
          {certifications.map((cert, i) => (
            <ScrollReveal
              key={i}
              initialY={30}
              duration={0.6}
              delay={i * 0.05}
              className="w-full sm:w-[calc(50%-15px)] md:w-[calc((100%-60px)/3)] lg:w-[calc((100%-120px)/5)]"
            >
              <div className="flex flex-col items-center justify-center gap-[15px] p-[20px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-[16px] transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white/10 hover:border-[#2B8FAB]/50 hover:shadow-[0_20px_40px_rgba(43,143,171,0.15)] h-full group">
                <div className="w-[60px] h-[60px] bg-white rounded-xl flex items-center justify-center p-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Image src={cert.icon} alt={cert.title} width={45} height={45} className="object-contain" style={{ width: 45, height: 45 }} />
                </div>
                <h3 className="text-white font-bold text-[15px] text-center">
                  {cert.title}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


