"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Map, Smartphone, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: Map,
    title: "Our Location",
    lines: ["Immeuble EBS, 10 rue Socrate", "Z.I Kheireddine - Les Berges du Lac III"],
  },
  {
    icon: Smartphone,
    title: "Telephone",
    lines: ["+216 29 58 28 35", "+216 71 18 26 25"],
  },
  {
    icon: Mail,
    title: "Send email",
    lines: ["contact@ebs.tn"],
  },
];

export default function ContactInfoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding pb-[50px]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] text-center">
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-10 border border-[#ededed] shadow-[0px_0px_150px_0px_rgba(78,67,250,0.06)] rounded-[10px] transition-all duration-300 hover:shadow-[0px_10px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="w-20 h-20 mx-auto bg-[rgba(46,202,127,0.1)] text-penn-green flex items-center justify-center rounded-full mb-5 text-4xl">
                <info.icon className="w-10 h-10" />
              </div>
              <h4 className="font-extrabold text-[22px] text-penn-navy mb-2.5">
                {info.title}
              </h4>
              {info.lines.map((line, j) => (
                <p key={j} className="text-penn-body mb-0">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
