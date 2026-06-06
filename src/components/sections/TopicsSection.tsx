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
    <section className="section-padding">
      <div className="max-w-[1140px] mx-auto px-4">
        <SectionHeading 
          title={t('title')}
          subtitle={
            <>{t('subtitle')} <span className="text-penn-green underline decoration-penn-green">{t('subtitleHighlight')}</span></>
          }
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {certifications.map((cert, i) => (
            <ScrollReveal
              key={i}
              initialY={30}
              duration={0.6}
              delay={i * 0.1}
            >
              <div className="flex items-center gap-[20px] p-[25px] bg-white border border-penn-border rounded-[8px] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(1,41,112,0.1)] hover:border-t-2 hover:border-t-penn-green h-full">
                <Image src={cert.icon} alt={cert.title} width={60} height={60} className="flex-shrink-0 object-contain" />
                <div className="flex flex-col justify-center">
                  <h2 className="text-penn-navy font-extrabold text-lg">
                    <span className="transition-colors hover:text-penn-green cursor-pointer">{cert.title}</span>
                  </h2>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}



