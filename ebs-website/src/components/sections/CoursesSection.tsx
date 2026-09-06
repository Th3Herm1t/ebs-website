import Image from "next/image";
import Link from "next/link";
import { Calendar, Award } from "lucide-react";
import { useTranslations } from 'next-intl';
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import HeroBackgroundVariant1 from "./HeroBackgroundVariant1";

interface ProgramCardData {
  img: string;
  cat: string;
  title: string;
  detail1: string;
  detail2: string;
  slug: string;
}

function ProgramGrid({ title, subtitle, programs, type }: { title: string, subtitle: string, programs: ProgramCardData[], type: "licence" | "master" }) {
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
    <div className="mb-16 last:mb-0 relative z-10">
      <SectionHeading 
        title={title} 
        subtitle={
          <>
            <span className="text-penn-green underline decoration-penn-green">{subtitle.split(' ')[0]}</span> {subtitle.split(' ').slice(1).join(' ')}
          </>
        } 
      />

      <div className="flex flex-wrap justify-center gap-[30px]">
        {programs.map((course, i) => {
          const href = `/${type === "licence" ? "licences" : "masters"}?program=${course.slug}`;
          return (
          <ScrollReveal
            key={i}
            initialY={30}
            duration={0.6}
            delay={i * 0.1}
            className="bg-white rounded-[6px] border border-penn-border overflow-hidden transition-all duration-300 hover:shadow-[0px_0_30px_rgba(1,41,112,0.08)] flex flex-col h-full w-full md:w-[calc(50%-15px)] lg:w-[calc((100%-60px)/3)]"
          >
            {/* Image */}
            <Link href={href} className="relative block overflow-hidden h-[220px]">
              <Image src={course.img} alt={course.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-105" />
            </Link>

            {/* Content */}
            <div className="p-[25px] flex flex-col flex-grow">
              <div className="mb-4">
                <Link href={href} className={`${getCatColor(course.cat)} text-white text-[13px] font-semibold py-[5px] px-[14px] rounded inline-block hover:opacity-90 transition-opacity`}>
                  {course.cat}
                </Link>
              </div>
              
              <h3 className="mb-[20px] flex-grow">
                <Link href={href} className="text-penn-navy text-[20px] font-bold leading-[28px] transition-colors hover:text-penn-green">
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
          );
        })}
      </div>
    </div>
  );
}

export default function CoursesSection() {
  const t = useTranslations('HomePage.programs');

  const licences = [
    { img: "/images/all-img/c1-stock.jpg", cat: t('licences.0.cat'), title: t('licences.0.title'), detail1: t('licences.0.detail1'), detail2: t('licences.0.detail2'), slug: "management", type: "licence" as const },
    { img: "/images/all-img/c2-stock.jpg", cat: t('licences.1.cat'), title: t('licences.1.title'), detail1: t('licences.1.detail1'), detail2: t('licences.1.detail2'), slug: "marketing", type: "licence" as const },
    { img: "/images/all-img/c3-stock.jpg", cat: t('licences.2.cat'), title: t('licences.2.title'), detail1: t('licences.2.detail1'), detail2: t('licences.2.detail2'), slug: "finance", type: "licence" as const },
    { img: "/images/all-img/c5-stock.jpg", cat: t('licences.3.cat'), title: t('licences.3.title'), detail1: t('licences.3.detail1'), detail2: t('licences.3.detail2'), slug: "informatique-ia", type: "licence" as const },
    { img: "/images/all-img/c6-stock.jpg", cat: t('licences.4.cat'), title: t('licences.4.title'), detail1: t('licences.4.detail1'), detail2: t('licences.4.detail2'), slug: "cybersecurite", type: "licence" as const },
  ];

  const masters = [
    { img: "/images/all-img/c1-stock.jpg", cat: t('masters.0.cat'), title: t('masters.0.title'), detail1: t('masters.0.detail1'), detail2: t('masters.0.detail2'), slug: "ingenierie-financiere", type: "master" as const },
    { img: "/images/all-img/c2-stock.jpg", cat: t('masters.1.cat'), title: t('masters.1.title'), detail1: t('masters.1.detail1'), detail2: t('masters.1.detail2'), slug: "crm", type: "master" as const },
    { img: "/images/all-img/c3-stock.jpg", cat: t('masters.2.cat'), title: t('masters.2.title'), detail1: t('masters.2.detail1'), detail2: t('masters.2.detail2'), slug: "startups", type: "master" as const },
    { img: "/images/all-img/c4-stock.jpg", cat: t('masters.3.cat'), title: t('masters.3.title'), detail1: t('masters.3.detail1'), detail2: t('masters.3.detail2'), slug: "marketing-digital-ia", type: "master" as const },
  ];

  return (
    <section className="relative overflow-hidden pt-16 bg-[#fdfdfd]">
      <HeroBackgroundVariant1 />
      <div className="relative z-10 max-w-[1200px] mx-auto px-4">
        <ProgramGrid title={t('title')} subtitle={t('licencesSubtitle')} programs={licences} type="licence" />
        <ProgramGrid title={t('title')} subtitle={t('mastersSubtitle')} programs={masters} type="master" />
      </div>
    </section>
  );
}
