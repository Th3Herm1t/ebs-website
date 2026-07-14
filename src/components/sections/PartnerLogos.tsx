import Image from "next/image";
import { useTranslations } from 'next-intl';
import SectionHeading from "@/components/ui/SectionHeading";

const logos = [
  { file: "arforghe.webp", name: "Arforghe" },
  { file: "asteelflash.webp", name: "AsteelFlash" },
  { file: "atb.webp", name: "ATB" },
  { file: "audita.webp", name: "Audita" },
  { file: "cayon.webp", name: "Cayon" },
  { file: "medianet.webp", name: "Medianet" },
  { file: "satem.webp", name: "Satem" },
  { file: "smartfuture.webp", name: "Smart Future" },
  { file: "soprahr.webp", name: "Sopra HR" },
  { file: "unifactor.webp", name: "Unifactor" },
  { file: "yperyon.webp", name: "Yperyon" },
];

export default function PartnerLogos() {
  const t = useTranslations('HomePage.partners');

  return (
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
        <SectionHeading subtitle={<>{t('eco')} <span className="text-penn-green underline decoration-penn-green">{t('ecoHighlight')}</span></>} />
        <div className="relative group/marquee">
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden whitespace-nowrap w-full">
            <div className="marquee-track items-center gap-16 pr-16">
              {[...logos, ...logos].map((logo, i) => (
                <span key={i} className="inline-block flex-shrink-0">
                  <Image src={`/images/partenaires/${logo.file}`} alt={logo.name} width={180} height={90} className="h-[90px] w-auto object-contain" style={{ width: "auto" }} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
