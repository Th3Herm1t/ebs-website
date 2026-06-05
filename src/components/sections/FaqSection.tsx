"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/ui/SectionHeading";
import HeroBackgroundVariant3 from "./HeroBackgroundVariant3";

const faqs = [
  {
    question: "What does it take excellent author?",
    answer: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use.",
  },
  {
    question: "Who will view my content?",
    answer: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use.",
  },
  {
    question: "What does it take become an author?",
    answer: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use.",
  },
  {
    question: "How to Change my Password easily?",
    answer: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use.",
  },
  {
    question: "How does it create content?",
    answer: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use.",
  },
];

export default function FaqSection({ showImage = true }: { showImage?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden pb-10 section-padding" ref={ref}>
      <HeroBackgroundVariant3 />
      <div className="relative z-10 max-w-[1140px] mx-auto px-4">
        {showImage ? (
          <SectionHeading 
            title="Frequently Asked Question" 
            subtitle={<>General <span className="text-penn-green underline decoration-penn-green">Questions</span></>} 
          />
        ) : (
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="" 
          />
        )}
        
        <div className="flex flex-wrap items-center justify-center -mx-4">
          <div className={`w-full ${showImage ? 'lg:w-6/12' : 'lg:w-10/12'} px-4 ${showImage ? 'mb-[60px] lg:mb-0' : ''}`}>
            <Accordion defaultValue={["item-0"]} className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border border-[#ededed] mb-5 rounded shadow-[0px_0px_150px_0px_rgba(78,67,250,0.06)] px-5"
                >
                  <AccordionTrigger className="text-penn-navy font-bold text-xl hover:no-underline text-left py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-penn-body text-[15px] leading-7 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {showImage && (
            <div className="w-full lg:w-6/12 px-4">
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="lg:pl-[50px]"
              >
                <Image 
                  src="/images/all-img/faq.png" 
                  alt="FAQ Illustration" 
                  width={570} 
                  height={500} 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
