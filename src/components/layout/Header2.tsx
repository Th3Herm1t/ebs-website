"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Phone, Mail, Clock, Menu } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "@/components/ui/social-icons";

export default function Header2() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* START LOGO WITH CONTACT */}
      <section className="logo-contact hidden md:block py-[20px] bg-white border-b border-[#ededed]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2 mb-[15px] lg:mb-0">
              <div className="single-top-contact flex items-center gap-[15px]">
                <div className="w-[40px] h-[40px] bg-penn-green text-white rounded-full flex items-center justify-center">
                  <Phone className="w-[18px] h-[18px]" />
                </div>
                <h4 className="text-[15px] font-bold text-[#333] m-0">+880 1934 781924</h4>
              </div>
            </div>
            <div className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2 mb-[15px] lg:mb-0">
              <div className="single-top-contact flex items-center gap-[15px]">							
                <div className="w-[40px] h-[40px] bg-penn-green text-white rounded-full flex items-center justify-center">
                  <Mail className="w-[18px] h-[18px]" />
                </div>
                <h4 className="text-[15px] font-bold text-[#333] m-0"><Link href="mailto:example@gmail.com" className="hover:text-penn-green transition-colors">example@mail.com</Link></h4>	
              </div>
            </div>
            <div className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2">
              <div className="single-top-contact flex items-center gap-[15px]">
                <div className="w-[40px] h-[40px] bg-penn-green text-white rounded-full flex items-center justify-center">
                  <Clock className="w-[18px] h-[18px]" />
                </div>
                <h4 className="text-[15px] font-bold text-[#333] m-0">Mon to sat Open: 9am - 6pm</h4>
              </div>
            </div>
            <div className="w-full lg:w-1/4 md:w-hidden hidden lg:block">
              <div className="top_social_profile flex justify-end gap-[10px]">
                <Link href="#" className="w-[35px] h-[35px] border border-[#ededed] text-[#333] flex items-center justify-center rounded-full transition-colors hover:bg-[#3b5998] hover:text-white hover:border-[#3b5998]"><Facebook className="w-[14px] h-[14px]" /></Link>
                <Link href="#" className="w-[35px] h-[35px] border border-[#ededed] text-[#333] flex items-center justify-center rounded-full transition-colors hover:bg-[#1da1f2] hover:text-white hover:border-[#1da1f2]"><Twitter className="w-[14px] h-[14px]" /></Link>
                <Link href="#" className="w-[35px] h-[35px] border border-[#ededed] text-[#333] flex items-center justify-center rounded-full transition-colors hover:bg-[#e1306c] hover:text-white hover:border-[#e1306c]"><Instagram className="w-[14px] h-[14px]" /></Link>
                <Link href="#" className="w-[35px] h-[35px] border border-[#ededed] text-[#333] flex items-center justify-center rounded-full transition-colors hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]"><Linkedin className="w-[14px] h-[14px]" /></Link>
              </div>
            </div>						
          </div>
        </div>
      </section>
      
      {/* START NAVBAR */}
      <div className={`site-navigation bg-white shadow-sm w-full z-50 transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 animate-fadeInDown' : 'relative'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 lg:py-0">
            <div className="site-logo">
              <Link href="/">
                <Image src="/images/all-img/logo.png" alt="Penn Logo" width={150} height={40} className="w-auto h-10" />
              </Link>
            </div>
            
            <div className="hidden lg:block">
              <nav id="main-menu" className="ms-auto">
                <ul className="flex items-center gap-6 m-0 p-0 list-none">
                  <li className="relative group py-8">
                    <Link href="/" className="text-[#333] font-bold text-[15px] uppercase flex items-center gap-1 hover:text-penn-green transition-colors">
                      Home <ChevronDown className="w-4 h-4" />
                    </Link>
                    <ul className="absolute left-0 top-[100%] w-[200px] bg-white shadow-lg border-t-2 border-penn-green opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col p-0 m-0 list-none transform translate-y-4 group-hover:translate-y-0">
                      <li><Link href="/" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Home 01</Link></li>
                      <li><Link href="/index-2" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Home 02</Link></li>
                      <li><Link href="/index-3" className="block px-5 py-3 text-[14px] text-[#333] font-medium hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Home 03</Link></li>
                    </ul>
                  </li>
                  <li className="relative group py-8">
                    <Link href="#" className="text-[#333] font-bold text-[15px] uppercase flex items-center gap-1 hover:text-penn-green transition-colors">
                      Pages <ChevronDown className="w-4 h-4" />
                    </Link>
                    <ul className="absolute left-0 top-[100%] w-[200px] bg-white shadow-lg border-t-2 border-penn-green opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col p-0 m-0 list-none transform translate-y-4 group-hover:translate-y-0">
                      <li><Link href="/about" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">About Us</Link></li>
                      <li><Link href="/team" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Instructor</Link></li>
                      <li><Link href="/team-details" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Instructor Details</Link></li>
                      <li><Link href="/faq" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">FAQ's</Link></li>
                      <li><Link href="/event" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Event</Link></li>
                      <li><Link href="/event-single" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Event Single</Link></li>
                      <li><Link href="/error" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">404 Page</Link></li>
                      <li><Link href="/login" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Login</Link></li>
                      <li><Link href="/register" className="block px-5 py-3 text-[14px] text-[#333] font-medium hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Register</Link></li>
                    </ul>
                  </li>
                  <li className="relative group py-8">
                    <Link href="/course" className="text-[#333] font-bold text-[15px] uppercase flex items-center gap-1 hover:text-penn-green transition-colors">
                      Courses <ChevronDown className="w-4 h-4" />
                    </Link>
                    <ul className="absolute left-0 top-[100%] w-[200px] bg-white shadow-lg border-t-2 border-penn-green opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col p-0 m-0 list-none transform translate-y-4 group-hover:translate-y-0">
                      <li><Link href="/course" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Courses 01</Link></li>
                      <li><Link href="/course-2" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Courses 02</Link></li>
                      <li><Link href="/course-3" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Courses 03</Link></li>
                      <li><Link href="/course-sidebar" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Course Sidebar</Link></li>
                      <li><Link href="/course-single" className="block px-5 py-3 text-[14px] text-[#333] font-medium hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Course details</Link></li>
                    </ul>
                  </li>
                  <li className="relative group py-8">
                    <Link href="/shop" className="text-[#333] font-bold text-[15px] uppercase flex items-center gap-1 hover:text-penn-green transition-colors">
                      Shop <ChevronDown className="w-4 h-4" />
                    </Link>
                    <ul className="absolute left-0 top-[100%] w-[200px] bg-white shadow-lg border-t-2 border-penn-green opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col p-0 m-0 list-none transform translate-y-4 group-hover:translate-y-0">
                      <li><Link href="/shop" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Shop</Link></li>
                      <li><Link href="/shop-single" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Single Shop</Link></li>
                      <li><Link href="/cart" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Cart Page</Link></li>
                      <li><Link href="/checkout" className="block px-5 py-3 text-[14px] text-[#333] font-medium hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Checkout page</Link></li>
                    </ul>
                  </li>
                  <li className="relative group py-8">
                    <Link href="/blog" className="text-[#333] font-bold text-[15px] uppercase flex items-center gap-1 hover:text-penn-green transition-colors">
                      Blog <ChevronDown className="w-4 h-4" />
                    </Link>
                    <ul className="absolute left-0 top-[100%] w-[200px] bg-white shadow-lg border-t-2 border-penn-green opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col p-0 m-0 list-none transform translate-y-4 group-hover:translate-y-0">
                      <li><Link href="/blog" className="block px-5 py-3 text-[14px] text-[#333] font-medium border-b border-[#f1f1f1] hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Blog List</Link></li>
                      <li><Link href="/blog-single" className="block px-5 py-3 text-[14px] text-[#333] font-medium hover:bg-[#f9f9f9] hover:text-penn-green transition-colors">Single Blog</Link></li>
                    </ul>
                  </li>
                  <li className="py-8">
                    <Link href="/contact" className="text-[#333] font-bold text-[15px] uppercase hover:text-penn-green transition-colors">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact" className="px-6 py-3 bg-penn-green text-white font-bold text-[14px] uppercase rounded-[30px] transition-colors hover:bg-penn-navy">
                Contact Us
              </Link>
              <Link href="/register" className="px-6 py-3 bg-white text-penn-navy border border-penn-navy font-bold text-[14px] uppercase rounded-[30px] transition-colors hover:bg-penn-green hover:text-white hover:border-penn-green">
                My Account
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <div className="lg:hidden">
              <button 
                className="text-[#333] p-2 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-[#ededed]">
            <ul className="flex flex-col p-4 m-0 list-none">
              <li>
                <Link href="/" className="block py-3 text-[15px] font-bold text-[#333] border-b border-[#ededed] hover:text-penn-green">Home</Link>
              </li>
              <li>
                <Link href="/course" className="block py-3 text-[15px] font-bold text-[#333] border-b border-[#ededed] hover:text-penn-green">Courses</Link>
              </li>
              <li>
                <Link href="/about" className="block py-3 text-[15px] font-bold text-[#333] border-b border-[#ededed] hover:text-penn-green">Pages</Link>
              </li>
              <li>
                <Link href="/blog" className="block py-3 text-[15px] font-bold text-[#333] border-b border-[#ededed] hover:text-penn-green">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="block py-3 text-[15px] font-bold text-[#333] hover:text-penn-green">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
