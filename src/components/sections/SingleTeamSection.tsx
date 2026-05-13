"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Phone, Globe, MessageCircle } from "lucide-react";

export default function SingleTeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding py-[100px]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white border border-[#ededed] p-[40px] rounded-[6px] shadow-[0px_5px_40px_rgba(0,0,0,0.05)] flex flex-col md:flex-row gap-[40px] items-center"
            >
              {/* Image */}
              <div className="w-full md:w-5/12 flex-shrink-0">
                <Image 
                  src="/images/all-img/team-details.png" 
                  alt="Instructor" 
                  width={500} 
                  height={600} 
                  className="w-full h-auto rounded-[6px]"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-7/12">
                <h4 className="text-[28px] font-extrabold text-penn-navy mb-2">Bondo Kader Khan</h4>
                <h5 className="text-[18px] font-bold text-penn-green mb-4">Digital Marketer</h5>
                <p className="text-penn-body mb-[25px] leading-[28px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever type book.
                </p>
                
                <ul className="space-y-[15px] mb-[30px]">
                  <li className="flex items-center gap-3 text-penn-body font-semibold">
                    <Mail className="w-5 h-5 text-penn-green" /> yourmail@gmail.com
                  </li>
                  <li className="flex items-center gap-3 text-penn-body font-semibold">
                    <Phone className="w-5 h-5 text-penn-green" /> (+123) 123 123 123
                  </li>
                  <li className="flex items-center gap-3 text-penn-body font-semibold">
                    <Globe className="w-5 h-5 text-penn-green" /> www.yourdomainname.com
                  </li>
                  <li className="flex items-center gap-3 text-penn-body font-semibold">
                    <MessageCircle className="w-5 h-5 text-penn-green" /> skype.address
                  </li>
                </ul>
                
                <div className="pt-[25px] border-t border-[#ededed]">
                  <ul className="flex flex-wrap gap-[10px] m-0 p-0 list-none">
                    <li>
                      <Link href="#" className="w-[40px] h-[40px] bg-[#f9f9f9] border border-[#ededed] flex items-center justify-center rounded-[6px] transition-all hover:bg-[#3b5998] hover:border-[#3b5998] group">
                        <Image src="/images/icon/fb.svg" alt="Facebook" width={16} height={16} className="group-hover:brightness-0 group-hover:invert transition-all" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="w-[40px] h-[40px] bg-[#f9f9f9] border border-[#ededed] flex items-center justify-center rounded-[6px] transition-all hover:bg-[#1da1f2] hover:border-[#1da1f2] group">
                        <Image src="/images/icon/tw.svg" alt="Twitter" width={16} height={16} className="group-hover:brightness-0 group-hover:invert transition-all" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="w-[40px] h-[40px] bg-[#f9f9f9] border border-[#ededed] flex items-center justify-center rounded-[6px] transition-all hover:bg-[#bd081c] hover:border-[#bd081c] group">
                        <Image src="/images/icon/pn.svg" alt="Pinterest" width={16} height={16} className="group-hover:brightness-0 group-hover:invert transition-all" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="w-[40px] h-[40px] bg-[#f9f9f9] border border-[#ededed] flex items-center justify-center rounded-[6px] transition-all hover:bg-[#c32aa3] hover:border-[#c32aa3] group">
                        <Image src="/images/icon/ins.svg" alt="Instagram" width={16} height={16} className="group-hover:brightness-0 group-hover:invert transition-all" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
