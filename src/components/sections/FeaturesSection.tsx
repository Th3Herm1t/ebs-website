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
    <section className="section-padding bg-white">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <SectionHeading 
          title={t('title')} 
          subtitle={<>{t('subtitle')} <span className="text-penn-green underline decoration-penn-green">{t('subtitleHighlight')}</span></>} 
        />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mt-12 items-center">
          {/* Left: Lifestyle Image */}
          <div className="w-full lg:w-5/12 shrink-0">
            <ScrollReveal initialX={-30} duration={0.8} className="relative h-full">
              <div className="absolute -inset-4 bg-gradient-to-br from-penn-green/20 via-transparent to-penn-navy/10 rounded-[30px] blur-xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-penn-border aspect-[4/5]">
                <img 
                  src="/images/sections/features-group.jpg" 
                  alt="Étudiants EBS"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Features Grid */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {features.map((feature, i) => (
                <ScrollReveal
                  key={i}
                  initialY={30}
                  duration={0.6}
                  delay={i * 0.1}
                >
                  <Card className="border-none shadow-none bg-transparent group h-full">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <span className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${feature.color.split(" ")[0]} ${feature.color.split(" ")[1]}`}>
                          <feature.icon className="w-5 h-5" />
                        </span>
                        <div>
                          <h3 className="font-extrabold text-penn-navy text-[17px] leading-snug mb-2 group-hover:text-penn-green transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-penn-body text-[14px] leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

