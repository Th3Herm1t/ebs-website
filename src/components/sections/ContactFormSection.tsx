"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function ContactFormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const inputClasses = "w-full h-[50px] px-5 bg-[#f4f4f4] border border-[#ededed] rounded text-[#333] focus:outline-none focus:border-penn-green focus:bg-white transition-colors duration-300";
  const labelClasses = "block font-bold text-penn-navy mb-2";

  return (
    <section className="section-padding pb-[100px]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-[50px]">
          <h2 className="font-extrabold text-[40px] text-penn-navy capitalize">
            Send your message.
          </h2>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white p-[50px] rounded-[10px] shadow-[0px_0px_150px_0px_rgba(78,67,250,0.06)] border border-[#ededed]"
            >
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 px-4 mb-[30px]">
                    <label className={labelClasses}>Name</label>
                    <input type="text" className={inputClasses} required />
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-[30px]">
                    <label className={labelClasses}>Your Email</label>
                    <input type="email" className={inputClasses} required />
                  </div>
                  <div className="w-full px-4 mb-[30px]">
                    <label className={labelClasses}>Your Subject</label>
                    <input type="text" className={inputClasses} required />
                  </div>
                  <div className="w-full px-4 mb-[30px]">
                    <label className={labelClasses}>Your Message</label>
                    <textarea 
                      rows={6} 
                      className={`${inputClasses} h-auto py-4 resize-none`} 
                      required 
                    ></textarea>
                  </div>
                  <div className="w-full px-4 text-center mt-[10px]">
                    <button 
                      type="submit" 
                      className="bg-penn-green text-white py-3 px-10 font-bold rounded-full text-[16px] inline-block transition-all relative overflow-hidden shadow-[10px_15px_18px_rgba(23,23,36,0.1)] group"
                    >
                      <span className="relative z-10">Send Message</span>
                      <span className="absolute inset-0 bg-penn-navy rounded-full transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
