"use client";

import Link from "next/link";
import { Send } from "lucide-react";

export default function HeroSection2() {
  return (
    <section 
      id="home" 
      className="home_bg2 bg-cover bg-center bg-no-repeat py-[150px] lg:h-[800px] flex items-center relative z-[1]" 
      style={{ backgroundImage: "url(/images/banner/home2.webp)" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#111111] opacity-70 z-[-1]"></div>
      <div className="container mx-auto px-4">
        <div className="row flex justify-center">
          <div className="w-full text-center">	
            <div className="home_content hc_pt mb-[40px]">
              <h1 className="text-white text-[40px] md:text-[50px] lg:text-[60px] font-bold mb-[20px] leading-tight">
                Get smart <span className="text-penn-green underline decoration-2 underline-offset-8">opportunity for</span> your best future
              </h1>
              <p className="text-white text-[16px] md:text-[18px] max-w-[700px] mx-auto opacity-90">
                It is a long established fact that reader will be distracted readable content of a page when.
              </p>						
            </div>
            <div className="home_sb max-w-[600px] mx-auto mb-[30px] relative">
              <form action="#" className="banner_subs relative">
                <input 
                  type="text" 
                  className="w-full h-[60px] rounded-[50px] px-[30px] outline-none text-[#333] border-none pr-[150px]" 
                  placeholder="Search your course here" 
                  required 
                />
                <button 
                  type="button" 
                  className="absolute right-[5px] top-[5px] h-[50px] px-[30px] bg-penn-green text-white font-bold rounded-[50px] transition-colors hover:bg-penn-navy flex items-center gap-[10px]"
                >
                  Search <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
            <div className="home_tag text-white text-[15px]">
              <span className="font-bold mr-[10px]">Popular Topic:</span>
              <Link href="/nos-programmes" className="text-white hover:text-penn-green transition-colors">Design, </Link>
              <Link href="/nos-programmes" className="text-white hover:text-penn-green transition-colors">Development, </Link>
              <Link href="/nos-programmes" className="text-white hover:text-penn-green transition-colors">Graphics, </Link>
              <Link href="/nos-programmes" className="text-white hover:text-penn-green transition-colors">Marketing </Link>
            </div>		  
          </div>
        </div>			
      </div>
    </section>
  );
}
