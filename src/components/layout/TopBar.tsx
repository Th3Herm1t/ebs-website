"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  { icon: FacebookIcon, hoverBg: "hover:bg-[#3B5998]" },
  { icon: TwitterIcon, hoverBg: "hover:bg-[#1A90D9]" },
  { icon: InstagramIcon, hoverBg: "hover:bg-[#FF5252]" },
  { icon: LinkedinIcon, hoverBg: "hover:bg-[#0e76a8]" },
];

export default function TopBar() {
  const t = useTranslations('HomePage.topbar');

  return (
    <div className="bg-[#fbfbfb] py-1 max-sm:hidden border-b border-gray-100">
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between">
        {/* Left: Contact Info (Adapted from Optima right box) */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-[14px] h-[14px] text-[#42474c]" />
            <span className="text-[#42474c] text-[13px] font-medium opacity-80">Lac 3, Tunis</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-[14px] h-[14px] text-[#42474c]" />
            <span className="text-[#42474c] text-[13px] font-medium opacity-80">contact@ebs.tn</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-[14px] h-[14px] text-[#42474c]" />
            <span className="text-[#42474c] text-[13px] font-medium opacity-80">+216 29 58 28 35 / +216 71 18 26 25</span>
          </div>
        </div>

        {/* Right: Social Media (Shadcn) */}
        <div className="flex items-center gap-4">
          <span className="text-[#42474c] text-[13px] font-medium opacity-80">{t('follow')}</span>
          <ul className="flex items-center gap-1">
            {socials.map(({ icon: Icon, hoverBg }, i) => (
              <li key={i}>
                <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "w-8 h-8 rounded-full text-[#42474c] transition-colors duration-300",
                    hoverBg,
                    "hover:text-white"
                  )}
                >
                  <Icon className="w-4 h-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
