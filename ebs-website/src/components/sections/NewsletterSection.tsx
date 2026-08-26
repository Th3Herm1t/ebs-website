import { Send } from "lucide-react";
import { useTranslations } from 'next-intl';
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function NewsletterSection() {
  const t = useTranslations('HomePage.newsletter');

  return (
    <section className="newsletter_area section-padding bg-white relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 relative z-10">
        <ScrollReveal initialY={30} duration={0.8} className="text-center max-w-[800px] mx-auto">
          <div className="subs_form">
            <h3 className="text-[32px] md:text-[40px] font-extrabold text-penn-navy mb-[20px] leading-tight">
              {t('title')}
            </h3>
            <p className="text-penn-body mb-[30px] text-[16px]">
              {t('desc')}
            </p>

            <form className="relative mt-[30px] w-full md:w-[80%] mx-auto block">
              <input 
                type="email" 
                placeholder={t('placeholder')}
                className="block w-full h-[60px] bg-white border border-[#ededed] rounded-[500px] text-penn-navy font-semibold px-[30px] pr-[80px] focus:outline-none focus:border-penn-green focus:shadow-none transition-all placeholder:text-[#999]"
                required
              />
              <button 
                type="submit"
                className="absolute right-[5px] top-[5px] h-[50px] w-[50px] bg-penn-green text-white rounded-full flex items-center justify-center hover:bg-penn-navy transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-5 h-5 -ml-1" />
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
