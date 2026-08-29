"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import HeroBackgroundVariant3 from "./HeroBackgroundVariant3";

const plans = [
  {
    id: 1,
    title: "Free",
    price: "$0",
    period: "/Monthly",
    subtitle: "Upgrade as you need",
    features: [
      "Learn at your own pace",
      "Learn at your own pace",
      "Learn at your own pace",
      "Learn at your own pace",
      "Learn at your own pace",
      "Learn at your own pace",
    ],
    buttonText: "Start Now",
    delay: 0.1
  },
  {
    id: 2,
    title: "Saver plan",
    price: "$29",
    period: "/Monthly",
    subtitle: "$348 Per Year",
    features: [
      "Learn at your own pace",
      "Learn at your own pace",
      "Learn at your own pace",
      "Learn at your own pace",
      "Learn at your own pace",
      "Learn at your own pace",
    ],
    buttonText: "Subscribe Now",
    delay: 0.2
  },
  {
    id: 3,
    title: "Unlimited plan",
    price: "$49",
    period: "/Monthly",
    subtitle: "$588 Per Year",
    features: [
      "Learn at your own pace",
      "Learn at your own pace",
      "Learn at your own pace",
      "Learn at your own pace",
      "Learn at your own pace",
      "Learn at your own pace",
    ],
    buttonText: "Subscribe Now",
    delay: 0.3
  }
];

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="relative overflow-hidden price_area section-padding py-[100px] bg-[#f9f9f9]" ref={ref}>
      <HeroBackgroundVariant3 />
      <div className="relative z-10 container mx-auto px-4">													
        <SectionHeading 
          title="Pricing Plan" 
          subtitle={<>Take A Look At The <span className="text-penn-green underline decoration-penn-green">pricing plan</span></>} 
          align="center"
          className="mb-[60px]"
        />
        <div className="flex flex-wrap -mx-[15px] justify-center">									
          {plans.map((plan) => (
            <div key={plan.id} className="w-full sm:w-1/2 lg:w-1/3 px-[15px] mb-[30px] lg:mb-0">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: plan.delay }}
                className="pricing_design"
              >
                <div className="single-pricing bg-white border border-[#ededed] rounded-[10px] p-[40px] text-center transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 group">
                  <div className="price-head border-b border-[#ededed] pb-[30px] mb-[30px]">		
                    <h2 className="text-[22px] font-bold text-penn-navy mb-[20px]">{plan.title}</h2>
                    <h1 className="text-[50px] font-bold text-penn-green mb-[5px] group-hover:text-penn-navy transition-colors">{plan.price}</h1>
                    <span className="text-[14px] text-[#666] block mb-[10px]">{plan.period}</span>
                    <span className="upgrade_price text-[13px] font-bold text-penn-navy bg-[#f9f9f9] py-[5px] px-[15px] rounded-[30px] inline-block">{plan.subtitle}</span>
                  </div>
                  <ul className="text-left mb-[30px] list-none p-0">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-[#666] text-[15px] mb-[15px] flex items-center gap-[10px]">
                        <Check className="w-[14px] h-[14px] text-penn-green" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/preinscription" className="price_btn inline-block w-full h-[50px] leading-[48px] bg-white border-2 border-penn-green text-penn-green font-bold text-[14px] uppercase rounded-[30px] transition-all duration-300 group-hover:bg-penn-green group-hover:text-white">
                    {plan.buttonText}
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
