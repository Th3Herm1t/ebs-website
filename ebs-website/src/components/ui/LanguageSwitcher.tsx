"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'fr' ? 'en' : 'fr';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button 
      onClick={toggleLocale}
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center text-white font-extrabold text-[12px] bg-penn-green hover:bg-[#232434] transition-all duration-300 uppercase w-14 h-14 rounded-full shadow-[0_4px_20px_rgba(43,143,171,0.3)] hover:shadow-[0_4px_20px_rgba(35,36,52,0.4)] hover:scale-110 active:scale-95 border border-white/20"
      title={locale === 'fr' ? "Switch to English" : "Passer en Français"}
      aria-label={locale === 'fr' ? "Switch to English" : "Passer en Français"}
    >
      <div className="flex flex-col items-center justify-center leading-none gap-0.5">
        <Globe className="w-4 h-4 animate-pulse" />
        <span>{locale === 'fr' ? 'EN' : 'FR'}</span>
      </div>
    </button>
  );
}
