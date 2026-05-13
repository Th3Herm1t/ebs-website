"use client";

import { Phone, Mail } from "lucide-react";

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
  return (
    <div className="bg-penn-green py-2.5 max-sm:hidden">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* Contact Info */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-white" />
            <span className="text-white text-[15px] font-medium">+88 457 845 695</span>
          </div>
          <div className="flex items-center gap-3 max-md:hidden">
            <Mail className="w-5 h-5 text-white" />
            <span className="text-white text-[15px] font-medium">example@yourmail.com</span>
          </div>
        </div>

        {/* Social */}
        <ul className="flex items-center gap-1.5">
          {socials.map(({ icon: Icon, hoverBg }, i) => (
            <li key={i}>
              <a
                href="#"
                className={`bg-white w-[35px] h-[35px] flex items-center justify-center rounded-full text-[#232434] transition-all duration-300 ${hoverBg} hover:text-white`}
              >
                <Icon className="w-4 h-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
