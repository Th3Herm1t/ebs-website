import { Award, Brain, Target, Briefcase, Globe, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from 'next-intl';
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturesSection() {
  const t = useTranslations('HomePage.features');

  const features = [
    {
      icon: Award,
      title: t('list.0.title'),
      description: t('list.0.desc'),
      color: "bg-[#e1f0ff] text-[#4154f1]",
    },
    {
      icon: Brain,
      title: t('list.1.title'),
      description: t('list.1.desc'),
      color: "bg-[#fff0e6] text-[#ee6c20]",
    },
    {
      icon: Target,
      title: t('list.2.title'),
      description: t('list.2.desc'),
      color: "bg-[#f1ffe6] text-[#15be56]",
    },
    {
      icon: Briefcase,
      title: t('list.3.title'),
      description: t('list.3.desc'),
      color: "bg-[#ffe6ee] text-[#bb0852]",
    },
    {
      icon: Globe,
      title: t('list.4.title'),
      description: t('list.4.desc'),
      color: "bg-[#e6eeff] text-[#4154f1]",
    },
    {
      icon: TrendingUp,
      title: t('list.5.title'),
      description: t('list.5.desc'),
      color: "bg-[#ffe6f4] text-[#e645ad]",
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-[1140px] mx-auto px-4">
        <SectionHeading 
          title={t('title')} 
          subtitle={<>{t('subtitle')} <span className="text-penn-green underline decoration-penn-green">{t('subtitleHighlight')}</span></>} 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {features.map((feature, i) => (
            <ScrollReveal
              key={i}
              initialY={30}
              duration={0.6}
              delay={i * 0.1}
            >
              <Card className="border-penn-border rounded-[6px] transition-all duration-300 hover:shadow-[0px_0_30px_rgba(1,41,112,0.08)] hover:border-t-2 hover:border-t-penn-green group h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <span className={`w-[55px] h-[55px] rounded-xl flex items-center justify-center flex-shrink-0 ${feature.color.split(" ")[0]} ${feature.color.split(" ")[1]}`}>
                      <feature.icon className="w-6 h-6" />
                    </span>
                    <h3 className="font-extrabold text-penn-navy text-[17px] leading-snug">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-penn-body text-[14px] leading-tight">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

