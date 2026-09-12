"use client";

import Link from "next/link";
import { motion } from "motion/react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <section 
      className="pt-[200px] pb-[120px] relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner/section-top.png')" }}
    >
      <div className="container mx-auto px-4">
        <div className="w-full lg:w-10/12 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <h1 className="mb-2.5 capitalize font-bold text-[50px] text-penn-navy">
              {title}
            </h1>
            <ul className="bg-white text-center border-2 border-white py-2.5 px-5 w-fit min-w-[220px] mx-auto rounded-[10px] mt-5 inline-block">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="inline-block text-penn-navy font-semibold text-[15px]">
                  {index > 0 && <span className="mx-2"> / </span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="text-penn-green font-semibold transition-colors duration-300 hover:text-penn-navy">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
