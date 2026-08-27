import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import TopPromoCallbackButton from "./TopPromoCallbackButton";

export default async function TopPromo() {
  const t = await getTranslations('HomePage.toppromo');

  const promos = [
    {
      id: "brochure",
      title: t('p1.title'),
      desc: t('p1.desc'),
      ctaText: t('p1.btn'),
      bgColor: "bg-[#264653]",
      link: "/brochures",
      image: "/images/toppromo/brochure.jpg",
    },
    {
      id: "whatsapp",
      title: t('p2.title'),
      desc: t('p2.desc'),
      ctaText: t('p2.btn'),
      bgColor: "bg-penn-green",
      link: "",
      image: "/images/toppromo/candidature.jpg",
    },
    {
      id: "apply",
      title: t('p3.title'),
      desc: t('p3.desc'),
      ctaText: t('p3.btn'),
      bgColor: "bg-[#f4a261]",
      link: "/preinscription",
      image: "/images/toppromo/conseiller.jpg",
    },
  ];

  return (
    <section className="pb-[50px]">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {promos.map((promo) => {
            const ctaClassName = cn(
              "inline-block px-8 py-3 rounded-full text-white uppercase text-[13px] tracking-wide font-bold transition-all hover:opacity-90 hover:shadow-lg",
              promo.bgColor
            );

            return (
              <div key={promo.id} className="relative p-[60px] border-r border-penn-border shadow-[0px_0px_150px_0px_rgba(78,67,250,0.1)] last:border-r-0 max-md:border-r-0 overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <Image src={promo.image} alt="" fill className="object-cover opacity-30" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-[20px] font-extrabold mb-[15px] text-penn-navy">{promo.title}</h3>
                  <p className="mb-10 text-penn-body">{promo.desc}</p>
                  {promo.id === "whatsapp" ? (
                    <TopPromoCallbackButton label={promo.ctaText} className={ctaClassName} />
                  ) : (
                    <a href={promo.link} className={ctaClassName}>
                      {promo.ctaText}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
