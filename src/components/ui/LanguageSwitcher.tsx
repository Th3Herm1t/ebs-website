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
      className="flex items-center gap-1.5 text-[#232434] font-bold text-[14px] hover:text-[#2a9d8f] transition-colors uppercase"
      title={locale === 'fr' ? "Switch to English" : "Passer en Français"}
    >
      <Globe className="w-4 h-4 mb-[1px]" />
      {locale === 'fr' ? 'EN' : 'FR'}
    </button>
  );
}
