import Image from "next/image";
import { useTranslations } from 'next-intl';
import SectionHeading from "@/components/ui/SectionHeading";

const logos = [
  { file: "logo-audencia.png", name: "Audencia" },
  { file: "/images/ebs-tn/EM_Normandie-Logo.png", name: "EM Normandie" },
  { file: "udl.webp", name: "Link University" },
  { file: "eklore.webp", name: "Eklore" },
  { file: "epitech.webp", name: "Epitech" },
  { file: "epsi.webp", name: "EPSI" },
  { file: "excelia.webp", name: "Excelia" },
  { file: "figs (2).webp", name: "FIGS" },
  { file: "gutech.webp", name: "GUtech" },
  { file: "idrac.webp", name: "IDRAC" },
  { file: "ifag.webp", name: "IFAG" },
  { file: "igefi.webp", name: "IGEFI" },
  { file: "psb.webp", name: "PSB" },
  { file: "redsup.webp", name: "Redsup" },
  { file: "supdecom.webp", name: "Sup de Com" },
  { file: "uqat.webp", name: "UQAT" },
];

export default function AcademicPartners() {
  const t = useTranslations('HomePage.partners');

  return (
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
        <SectionHeading subtitle={<>{t('acad')} <span className="text-penn-green underline decoration-penn-green">{t('acadHighlight')}</span></>} />
        <div className="relative group/marquee">
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden whitespace-nowrap w-full">
            <div className="marquee-track items-center gap-16 pr-16">
              {[...logos, ...logos].map((logo, i) => (
                <span key={i} className="inline-block flex-shrink-0">
                  <Image src={logo.file.startsWith("http") || logo.file.startsWith("/") ? logo.file : `/images/partenaires-academiques/${logo.file}`} alt={logo.name} width={180} height={90} className="h-[90px] w-auto object-contain" style={{ width: "auto" }} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
