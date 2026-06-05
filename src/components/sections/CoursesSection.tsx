import Image from "next/image";
import Link from "next/link";
import { Calendar, Award } from "lucide-react";
import { useTranslations } from 'next-intl';
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import HeroBackgroundVariant1 from "./HeroBackgroundVariant1";

function ProgramGrid({ title, subtitle, programs }: { title: string, subtitle: string, programs: any[] }) {
  const getCatColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      // Licences
      case 'management': return 'bg-[#3b82f6]';
      case 'marketing': return 'bg-[#ec4899]';
      case 'finance': return 'bg-[#14b8a6]';
      case 'informatique': return 'bg-[#f43f5e]';
      case 'intelligence artificielle': return 'bg-[#a855f7]';
      case 'cybersécurité': return 'bg-[#eab308]';
      // Masters
      case 'finance avancée': return 'bg-[#10b981]';
      case 'marketing 5.0': return 'bg-[#d946ef]';
      case 'project management': return 'bg-[#6366f1]';
      default: return 'bg-[#f4a261]';
    }
  };

  return (
    <div className="mb-24 last:mb-0 relative z-10">
      <SectionHeading 
        title={title} 
        subtitle={
          <>
            <span className="text-penn-green underline decoration-penn-green">{subtitle.split(' ')[0]}</span> {subtitle.split(' ').slice(1).join(' ')}
          </>
        } 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {programs.map((course, i) => (
          <ScrollReveal
            key={i}
            initialY={30}
            duration={0.6}
            delay={i * 0.1}
            className="bg-white rounded-[6px] border border-penn-border overflow-hidden transition-all duration-300 hover:shadow-[0px_0_30px_rgba(1,41,112,0.08)] flex flex-col h-full"
          >
            {/* Image */}
            <div className="relative">
              <Image src={course.img} alt={course.title} width={370} height={220} className="w-full h-[220px] object-cover" />
            </div>

            {/* Content */}
            <div className="p-[25px] flex flex-col flex-grow">
              <div className="mb-4">
                <Link href="/programmes" className={`${getCatColor(course.cat)} text-white text-[13px] font-semibold py-[5px] px-[14px] rounded inline-block hover:bg-opacity-80 transition-colors duration-300`}>
                  {course.cat}
                </Link>
              </div>
              
              <h3 className="mb-[20px] flex-grow">
                <Link href="/programmes" className="text-penn-navy text-[20px] font-bold leading-[28px] transition-colors hover:text-penn-green">
                  {course.title}
                </Link>
              </h3>

              {/* Details List */}
              <div className="flex flex-col gap-3 pt-5 border-t border-penn-border mt-auto">
                <div className="flex items-center gap-2.5 text-penn-green text-[14.5px] font-medium">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span className="text-penn-body">{course.detail1}</span>
                </div>
                <div className="flex items-center gap-2.5 text-penn-green text-[14.5px] font-medium">
                  <Award className="w-4 h-4 flex-shrink-0" />
                  <span className="text-penn-body">{course.detail2}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

export default function CoursesSection() {
  const t = useTranslations('HomePage.programs');

  const licences = [
    { img: "/images/all-img/c1-stock.jpg", cat: t('licences.0.cat'), title: t('licences.0.title'), detail1: t('licences.0.detail1'), detail2: t('licences.0.detail2') },
    { img: "/images/all-img/c2-stock.jpg", cat: t('licences.1.cat'), title: t('licences.1.title'), detail1: t('licences.1.detail1'), detail2: t('licences.1.detail2') },
    { img: "/images/all-img/c3-stock.jpg", cat: t('licences.2.cat'), title: t('licences.2.title'), detail1: t('licences.2.detail1'), detail2: t('licences.2.detail2') },
    { img: "/images/all-img/c4-stock.jpg", cat: t('licences.3.cat'), title: t('licences.3.title'), detail1: t('licences.3.detail1'), detail2: t('licences.3.detail2') },
    { img: "/images/all-img/c5-stock.jpg", cat: t('licences.4.cat'), title: t('licences.4.title'), detail1: t('licences.4.detail1'), detail2: t('licences.4.detail2') },
    { img: "/images/all-img/c6-stock.jpg", cat: t('licences.5.cat'), title: t('licences.5.title'), detail1: t('licences.5.detail1'), detail2: t('licences.5.detail2') },
  ];

  const masters = [
    { img: "/images/all-img/c1-stock.jpg", cat: t('masters.0.cat'), title: t('masters.0.title'), detail1: t('masters.0.detail1'), detail2: t('masters.0.detail2') },
    { img: "/images/all-img/c2-stock.jpg", cat: t('masters.1.cat'), title: t('masters.1.title'), detail1: t('masters.1.detail1'), detail2: t('masters.1.detail2') },
    { img: "/images/all-img/c3-stock.jpg", cat: t('masters.2.cat'), title: t('masters.2.title'), detail1: t('masters.2.detail1'), detail2: t('masters.2.detail2') },
  ];

  return (
    <section className="relative overflow-hidden section-padding bg-[#fdfdfd]">
      <HeroBackgroundVariant1 />
      <div className="relative z-10 max-w-[1200px] mx-auto px-4">
        <ProgramGrid title={t('title')} subtitle={t('licencesSubtitle')} programs={licences} />
        <ProgramGrid title={t('title')} subtitle={t('mastersSubtitle')} programs={masters} />
      </div>
    </section>
  );
}
