"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Home 01", href: "/" },
      { label: "Home 02", href: "/index-2" },
      { label: "Home 03", href: "/index-3" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Instructor", href: "/team" },
      { label: "Instructor Details", href: "/team-details" },
      { label: "FAQ's", href: "/faq" },
      { label: "Event", href: "/event" },
      { label: "404 Page", href: "/404" },
      { label: "Login", href: "/login" },
      { label: "Register", href: "/register" },
    ],
  },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "Courses 01", href: "/courses" },
      { label: "Courses 02", href: "/course-2" },
      { label: "Courses 03", href: "/course-3" },
      { label: "Course Sidebar", href: "/course-sidebar" },
      { label: "Course details", href: "/course-single" },
    ],
  },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "Shop", href: "/shop" },
      { label: "Single Shop", href: "/shop-single" },
      { label: "Cart Page", href: "/cart" },
      { label: "Checkout page", href: "/checkout" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    children: [
      { label: "Blog List", href: "/blog" },
      { label: "Single Blog", href: "/blog-single" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsFixed(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="navigation"
      className={`w-full z-[999] bg-white transition-all duration-500 ${
        isFixed
          ? "fixed top-0 shadow-[0_0_40px_rgba(0,0,0,0.07)] py-2.5 animate-[fadeInDown_0.8s]"
          : "fixed top-0 py-2.5"
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-4 flex items-center justify-between">
        {/* Logo — col-lg-2 */}
        <div className="flex-shrink-0">
          <Link href="/" className="site-logo">
            <Image
              src="/images/all-img/logo.png"
              alt="Penn"
              width={150}
              height={45}
              className="h-auto mt-2.5"
              style={{ width: 150 }}
            />
          </Link>
        </div>

        {/* Desktop Nav — col-lg-6 */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center justify-center gap-0">
            {navItems.map((item) => (
              <li key={item.label} className="relative group ml-[15px]">
                <Link
                  href={item.href}
                  className="text-penn-navy font-bold text-[15px] capitalize py-6 block transition-colors hover:text-penn-green"
                >
                  {item.label}
                  {item.children && (
                    <span className="font-bold text-xs ml-1 inline-block">
                      <ChevronDown className="inline w-3 h-3" />
                    </span>
                  )}
                </Link>
                {item.children && (
                  <ul className="absolute left-[-55px] top-full bg-white shadow-[0_0_10px_3px_rgba(0,0,0,0.05)] p-2.5 w-[200px] rounded border-t-2 border-penn-green opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[999]">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="text-penn-navy text-[15px] font-bold capitalize block py-[7px] px-3 transition-colors hover:text-penn-green"
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

        {/* Right side — col-lg-4 */}
        <div className="flex items-center justify-end gap-4 shrink-0">
          {/* Heart + Cart icons */}
          <div className="hidden md:flex items-center gap-5 mt-[30px]">
            <Link href="#" className="relative inline-block mr-[30px]">
              <Heart className="w-[26px] h-[26px] text-penn-navy" />
              <span className="absolute -top-2.5 -right-2.5 bg-penn-green w-5 h-5 rounded-full flex items-center justify-center text-white text-[14px] font-normal">
                0
              </span>
            </Link>
            <Link href="#" className="relative inline-block mr-[30px]">
              <ShoppingCart className="w-[26px] h-[26px] text-penn-navy" />
              <span className="absolute -top-2.5 -right-2.5 bg-penn-green w-5 h-5 rounded-full flex items-center justify-center text-white text-[14px] font-normal">
                2
              </span>
            </Link>
          </div>

          {/* CTA Buttons — Login (green filled) + Sign Up (outline) */}
          <div className="hidden md:flex items-center gap-1.5 float-right mt-2.5">
            <Link
              href="/login"
              className="bg-penn-green text-white py-[10px] px-[30px] font-bold rounded-full text-[15px] inline-block transition-all relative overflow-hidden shadow-[10px_15px_18px_rgba(23,23,36,0.1)] group"
            >
              <span className="relative z-10">Login</span>
              <span className="absolute inset-0 bg-penn-navy rounded-full transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
            </Link>
            <Link
              href="/register"
              className="text-penn-navy border border-penn-border py-[9px] px-[30px] font-bold rounded-full text-[15px] inline-block transition-all hover:text-white hover:border-penn-green hover:bg-penn-green whitespace-nowrap"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden bg-penn-navy text-white p-2 rounded"
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
