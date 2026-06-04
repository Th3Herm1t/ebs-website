"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "L'université", href: "/universite" },
  { label: "Licences", href: "/licences" },
  { label: "Masters", href: "/masters" },
  { label: "International", href: "/international" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      id="navigation"
      className="w-full z-[999] bg-white/95 backdrop-blur-md sticky top-0 border-b border-gray-100 shadow-sm transition-all duration-300"
    >
      <div className="max-w-[1140px] mx-auto px-4 flex items-center justify-between h-[90px]">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="site-logo">
            <Image
              src="/images/all-img/logo.png"
              alt="Penn"
              width={150}
              height={45}
              className="h-auto"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center justify-center gap-8">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="text-[#232434] font-semibold text-[15px] capitalize py-2 block transition-colors hover:text-[#2a9d8f] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#2a9d8f] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-end shrink-0">
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center">
            <Link
              href="/postuler"
              className="text-[#42474c] border border-gray-200 py-2.5 px-7 font-bold rounded-full text-[14px] inline-flex items-center justify-center transition-all hover:text-white hover:border-[#2a9d8f] hover:bg-[#2a9d8f] whitespace-nowrap"
            >
              Postuler
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden bg-[#2a9d8f] text-white p-2 rounded ml-4"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-penn-border">
          <ul className="max-w-[1140px] mx-auto px-4 py-4">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-penn-border last:border-0">
                <Link
                  href={item.href}
                  className="text-penn-navy font-medium py-2.5 block"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
