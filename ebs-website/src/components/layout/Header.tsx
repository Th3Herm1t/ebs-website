"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslations } from 'next-intl';

interface NavDropdown {
  label: string;
  href: string;
}

type NavKey = "universite" | "licences" | "masters" | "international" | "admissions" | "contact";

interface NavItem {
  key: NavKey;
  href: string;
  children?: NavDropdown[];
}

const navItems: NavItem[] = [
  {
    key: "universite",
    href: "/qui-sommes-nous",
    children: [
      { label: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
      { label: "Vision, Mission & Valeurs", href: "/vision-mission-valeurs" },
      { label: "L'approche EBS", href: "/ia-et-certifications" },
      { label: "Corps Enseignant", href: "/corps-enseignant" },
      { label: "Partenaires Académiques", href: "/partenaires-academiques" },
      { label: "Partenaires Économiques", href: "/partenaires-economiques" },
      { label: "Actualités EBS", href: "/actualites" },
      { label: "Certifications", href: "/certifications" },
      { label: "FAQ", href: "/faq" },
      { label: "Alumni", href: "/alumni" },
      { label: "Campus", href: "/campus" },
    ],
  },
  {
    key: "licences",
    href: "/licences",
    children: [
      { label: "Vue d'ensemble", href: "/licences" },
      { label: "Licence en Management", href: "/licences/management" },
      { label: "Licence en Marketing", href: "/licences/marketing" },
      { label: "Licence en Finance", href: "/licences/finance" },

      { label: "Informatique — IA", href: "/licences/informatique-ia" },
      { label: "Informatique — Cybersécurité", href: "/licences/cybersecurite" },
    ],
  },
  {
    key: "masters",
    href: "/masters",
    children: [
      { label: "Vue d'ensemble", href: "/masters" },
      { label: "CRM & Transformation Digitale", href: "/masters/crm" },
      { label: "Marketing Digital & IA", href: "/masters/marketing-digital-ia" },
      { label: "Projets Innovants & Startups", href: "/masters/startups" },
      { label: "Ingénierie Financière", href: "/masters/ingenierie-financiere" },
    ],
  },
  {
    key: "international",
    href: "/parcours-international",
    children: [
      { label: "Parcours International", href: "/parcours-international" },
      { label: "Étudiants Internationaux", href: "/etudiants-internationaux" },
    ],
  },
  { key: "admissions", href: "/admissions" },
  { key: "contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isProgramPage = /^\/(fr|en)?\/?(licences|masters)\/[^/]+$/.test(pathname);
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
            <Image
              src="/images/all-img/teal-horizontal.svg"
              alt="EBS"
              width={210}
              height={61}
              loading="eager"
              className="object-contain h-[45px] lg:h-[55px] w-auto"
              style={{ width: "auto" }}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center justify-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <li
                key={item.key}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-[#232434] font-semibold text-[14px] xl:text-[15px] capitalize py-2 px-2 xl:px-3 block transition-colors hover:text-[#2B8FAB] whitespace-nowrap"
                >
                  {tNav(item.key)}
                  {item.children && (
                    <ChevronDown className="inline-block w-3 h-3 ml-1 -mt-0.5 opacity-50" />
                  )}
                </Link>

                {item.children && openDropdown === item.key && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-white rounded-lg border border-penn-border shadow-lg py-2 min-w-[260px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-[14px] text-penn-navy font-medium hover:bg-penn-bg-light hover:text-penn-green transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-end shrink-0">
          <div className="hidden md:flex items-center gap-4 xl:gap-6">
            <a 
              href="tel:+216 55 582 843" 
              className="text-[#2B8FAB] hover:text-[#2B8FAB]/80 transition-colors font-bold text-[14px] xl:text-[16px] whitespace-nowrap"
            >
              <span className="font-light mr-1.5">{t('call')}</span> +216 55 582 843
            </a>
            {!isProgramPage && (
              <Link
                href="/preinscription"
                className="bg-[#2B8FAB] text-white border border-[#2B8FAB] py-2 xl:py-2.5 px-6 xl:px-10 font-bold rounded-full text-[13px] xl:text-[14px] inline-flex items-center justify-center transition-all hover:bg-white hover:text-[#2B8FAB] hover:border-[#2B8FAB] whitespace-nowrap"
              >
                {t('postuler')}
              </Link>
            )}
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
        <div className="lg:hidden bg-white border-t border-penn-border shadow-lg absolute w-full left-0 max-h-[80vh] overflow-y-auto">
          <ul className="max-w-[1400px] w-full mx-auto px-6 py-2">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="text-penn-navy font-semibold text-[15px] py-3 block border-b border-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {tNav(item.key)}
                </Link>
                {item.children && (
                  <ul className="pl-4 pb-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="text-penn-body text-[14px] py-2 block font-medium"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
