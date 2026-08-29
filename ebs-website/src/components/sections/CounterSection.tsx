import { Award, GraduationCap, Globe, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import { catalogueV3 } from "@/lib/certifications/v3";

export default function CounterSection() {
  const t = useTranslations("HomePage.counters");

  const counters = [
    { icon: Award, end: catalogueV3.release.counts.publicResources, suffix: "", label: t("c1"), color: "#4154f1" },
    { icon: GraduationCap, end: 7, suffix: "", label: t("c2"), color: "#ee6c20" },
    { icon: Globe, end: 10, suffix: "+", label: t("c3"), color: "#15be56" },
    { icon: TrendingUp, end: 93, suffix: "%", label: t("c4"), color: "#bb0852" },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
        <SectionHeading 
          title={t('title')} 
          subtitle={<>{t('subtitle')} <span className="text-penn-green underline decoration-penn-green">{t('subtitleHighlight')}</span></>} 
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((item, i) => (
            <ScrollReveal
              key={i}
              initialY={30}
              duration={0.6}
              delay={i * 0.1}
            >
              <div className="p-[25px] bg-white rounded-[6px] shadow-[0_0_30px_rgba(1,41,112,0.08)] border border-[#eee] transition-all duration-300 hover:border-t-2 hover:border-t-penn-green flex items-center justify-start gap-5 h-full">
                <item.icon className="flex-shrink-0" style={{ color: item.color, width: 45, height: 45 }} strokeWidth={1.5} />
                <div className="flex flex-col text-left">
                  <AnimatedCounter end={item.end} suffix={item.suffix} />
                  <p className="text-[#888888] text-[13px] mt-0">{item.label}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
