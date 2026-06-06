import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import { cn } from "@/lib/utils";

function FacebookIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
}
function TiktokIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" /></svg>;
}
function YoutubeIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>;
}
function InstagramIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;
}
function LinkedinIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>;
}

const socials = [
  { icon: FacebookIcon, hoverBg: "hover:bg-[#3B5998]", href: "#" },
  { icon: InstagramIcon, hoverBg: "hover:bg-[#FF5252]", href: "#" },
  { icon: TiktokIcon, hoverBg: "hover:bg-black", href: "#" },
  { icon: YoutubeIcon, hoverBg: "hover:bg-[#FF0000]", href: "#" },
  { icon: LinkedinIcon, hoverBg: "hover:bg-[#0e76a8]", href: "#" },
];

const FooterLink = ({ href, children, isBold }: { href: string, children: React.ReactNode, isBold?: boolean }) => (
  <li>
    <Link 
      href={href} 
      className={cn(
        "group flex items-center gap-2 text-white/80 hover:text-penn-green transition-all duration-300 overflow-hidden",
        isBold ? "uppercase font-bold text-[14px]" : "capitalize text-[15px]"
      )}
    >
      <ArrowRight className="w-4 h-4 text-penn-green transition-all duration-300 -ml-6 opacity-0 group-hover:ml-0 group-hover:opacity-100 flex-shrink-0" />
      <span className="transition-transform duration-300 group-hover:translate-x-1">{children}</span>
    </Link>
  </li>
);

export default function Footer() {
  const t = useTranslations('HomePage.footer');
  const tN = useTranslations('HomePage.newsletter');

  return (
    <footer className="pt-24 pb-8 bg-penn-navy relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-penn-green/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Logo + Description (Spans 4 cols on large) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/all-img/horizontal.png"
                alt="EBS"
                width={220}
                height={66}
                className="w-[220px] h-auto object-contain"
              />
            </Link>
            <p className="text-white/70 mb-8 text-[15px] leading-relaxed max-w-[400px]">
              {t('desc')}
            </p>
            <ul className="flex gap-3">
              {socials.map(({ icon: Icon, hoverBg, href }, i) => (
                <li key={i}>
                  <a 
                    href={href} 
                    className={cn(
                      "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 transition-all duration-300",
                      hoverBg,
                      "hover:border-transparent hover:text-white hover:-translate-y-1"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explorer Column (Spans 2 cols) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold text-[20px] mb-6 relative inline-block">
              {t('links.explorer')}
              <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-penn-green" />
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/international" isBold>{t('links.international')}</FooterLink>
              <FooterLink href="/entreprises">{t('links.entreprises')}</FooterLink>
              <FooterLink href="/stages" isBold>{t('links.stages')}</FooterLink>
              <FooterLink href="/blog">{t('links.blog')}</FooterLink>
              <FooterLink href="/contact">{t('links.contact')}</FooterLink>
              <FooterLink href="/campus">{t('links.campus')}</FooterLink>
              <FooterLink href="/evenements">{t('links.evenements')}</FooterLink>
            </ul>
          </div>

          {/* Formations Column (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[20px] mb-6 relative inline-block">
              {t('links.formations')}
              <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-penn-green" />
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/licences">{t('links.licences')}</FooterLink>
              <FooterLink href="/masters">{t('links.masters')}</FooterLink>
              <FooterLink href="/international" isBold>{t('links.parcours')}</FooterLink>
            </ul>
          </div>

          {/* Contact Column (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-[20px] mb-6 relative inline-block">
              {t('contact.title')}
              <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-penn-green" />
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-penn-green transition-colors">
                  <MapPin className="w-5 h-5 text-penn-green group-hover:text-white transition-colors" />
                </div>
                <span className="text-white/80 text-[14px] leading-relaxed mt-2">
                  {t('contact.address')}
                </span>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-penn-green transition-colors">
                  <Mail className="w-5 h-5 text-penn-green group-hover:text-white transition-colors" />
                </div>
                <a href="mailto:contact@ebs.tn" className="text-white/80 text-[15px] hover:text-penn-green mt-2 transition-colors">
                  contact@ebs.tn
                </a>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-penn-green transition-colors">
                  <Phone className="w-5 h-5 text-penn-green group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col text-white/80 text-[15px]">
                  <span>+216 29 58 28 35</span>
                  <span>+216 71 18 26 25</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} ESPIMA Business School. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">Mentions Légales</Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
