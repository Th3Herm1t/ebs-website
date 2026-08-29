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
function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  );
}
function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
  { icon: FacebookIcon, hoverBg: "hover:bg-[#3B5998]", href: "https://www.facebook.com/espimabs" },
  { icon: InstagramIcon, hoverBg: "hover:bg-[#FF5252]", href: "https://www.instagram.com/espimabusinessschool/" },
  { icon: TiktokIcon, hoverBg: "hover:bg-black", href: "https://www.tiktok.com/@espimabusinessschool" },
  { icon: YoutubeIcon, hoverBg: "hover:bg-[#FF0000]", href: "https://www.youtube.com/@espimabusinessschool" },
  { icon: LinkedinIcon, hoverBg: "hover:bg-[#0e76a8]", href: "https://www.linkedin.com/school/espima-business-school/" },
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
            <span className="text-[#42474c] text-[13px] font-medium opacity-80">Immeuble EBS, 10 rue Socrate - Z.I Kheireddine - Les Berges du Lac III</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-[14px] h-[14px] text-[#42474c]" />
            <a href="mailto:info@ebs.tn" className="text-[#42474c] text-[13px] font-medium opacity-80 hover:underline">info@ebs.tn</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-[14px] h-[14px] text-[#42474c]" />
            <a href="tel:+21671182625" className="text-[#42474c] text-[13px] font-medium opacity-80 hover:underline">+216 71 18 26 25</a>
          </div>
        </div>

        {/* Right: Social Media (Shadcn) */}
        <div className="flex items-center gap-4">
          <span className="text-[#42474c] text-[13px] font-medium opacity-80">{t('follow')}</span>
          <ul className="flex items-center gap-1">
             {socials.map(({ icon: Icon, hoverBg, href }, i) => (
              <li key={i}>
                <a
                   href={href}
                   target="_blank"
                   rel="noopener noreferrer"
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
