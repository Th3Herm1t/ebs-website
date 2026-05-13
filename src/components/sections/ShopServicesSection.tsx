"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Rocket, RefreshCw, Lock, Tag } from "lucide-react";

export default function ShopServicesSection({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { icon: Rocket, title: "Free shipping", desc: "Orders over $100" },
    { icon: RefreshCw, title: "Free Return", desc: "Within 30 days returns" },
    { icon: Lock, title: "Secure Payment", desc: "100% secure payment" },
    { icon: Tag, title: "Best Price", desc: "Guaranteed price" },
  ];

  return (
    <section className={`shop-services section py-[60px] bg-[#f9f9f9] border-t border-[#ededed] ${className}`} ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 text-center">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div key={i} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-[30px] lg:mb-0 relative before:content-[''] before:absolute before:right-0 before:top-[10%] before:h-[80%] before:w-[1px] before:bg-[#ddd] last:before:hidden sm:odd:before:hidden lg:odd:before:block">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="px-[20px]"
                >
                  <Icon className="w-[40px] h-[40px] text-penn-green mx-auto mb-[20px]" strokeWidth={1.5} />
                  <h4 className="text-[18px] font-extrabold text-penn-navy uppercase mb-[10px]">{svc.title}</h4>
                  <p className="text-penn-body text-[14px] m-0">{svc.desc}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
