"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

import { useTranslations } from 'next-intl';

const navItems = [
  { key: "universite", href: "/universite" },
  { key: "licences", href: "/licences" },
  { key: "masters", href: "/masters" },
  { key: "international", href: "/international" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const tNav = useTranslations('HomePage.header.nav');
  const t = useTranslations('HomePage.header');

  return (
    <nav
      id="navigation"
      className="w-full z-[999] bg-white/95 backdrop-blur-md sticky top-0 border-b border-gray-100 shadow-sm transition-all duration-300"
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 flex items-center justify-between h-[90px]">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center h-full py-3">
          <Link href="/" className="shrink-0 flex items-center">
            <img
              src="/images/all-img/teal-horizontal.svg"
              alt="EBS"
              width={210}
              height={61}
              className="object-contain h-[45px] lg:h-[55px] w-auto"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center justify-center gap-8">
            {navItems.map((item) => (
              <li key={item.key} className="relative group">
                <Link
                  href={item.href}
                  className="text-[#232434] font-semibold text-[15px] capitalize py-2 block transition-colors hover:text-[#2B8FAB] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#2B8FAB] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {tNav(item.key as any)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-end shrink-0">
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="tel:+21629582835" 
              className="text-[#2B8FAB] hover:text-[#2B8FAB]/80 transition-colors font-bold text-[16px] xl:text-[18px] whitespace-nowrap"
            >
              <span className="font-light mr-1.5">{t('call')}</span> +216 29 58 28 35
            </a>
            <Link
              href="/postuler"
              className="bg-[#2B8FAB] text-white border border-[#2B8FAB] py-2.5 px-10 font-bold rounded-full text-[14px] inline-flex items-center justify-center transition-all hover:bg-white hover:text-[#2B8FAB] hover:border-[#2B8FAB] whitespace-nowrap min-w-[160px]"
            >
              {t('postuler')}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden bg-[#2B8FAB] text-white p-2 rounded ml-4"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-penn-border shadow-lg absolute w-full left-0">
          <ul className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 py-4">
            {navItems.map((item) => (
              <li key={item.key} className="border-b border-gray-100">
                <Link
                  href={item.href}
                  className="text-penn-navy font-medium py-3 block"
                  onClick={() => setMobileOpen(false)}
                >
                  {tNav(item.key as any)}
                </Link>
              </li>
            ))}

          </ul>
        </div>
      )}
    </nav>
  );
}
