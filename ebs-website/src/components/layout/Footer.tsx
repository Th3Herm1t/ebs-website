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
  { name: "Facebook EBS", icon: FacebookIcon, hoverBg: "hover:bg-[#3B5998]", href: "https://www.facebook.com/espimabs" },
  { name: "Instagram EBS", icon: InstagramIcon, hoverBg: "hover:bg-[#FF5252]", href: "https://www.instagram.com/espimabusinessschool/" },
  { name: "TikTok EBS", icon: TiktokIcon, hoverBg: "hover:bg-black", href: "https://www.tiktok.com/@espimabusinessschool" },
  { name: "YouTube EBS", icon: YoutubeIcon, hoverBg: "hover:bg-[#FF0000]", href: "https://www.youtube.com/@espimabusinessschool" },
  { name: "LinkedIn EBS", icon: LinkedinIcon, hoverBg: "hover:bg-[#0e76a8]", href: "https://www.linkedin.com/school/espima-business-school/" },
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
                style={{ height: "auto" }}
              />
            </Link>
            <p className="text-white/70 mb-8 text-[15px] leading-relaxed max-w-[400px]">
              {t('desc')}
            </p>
            <ul className="flex gap-3">
              {socials.map(({ name, icon: Icon, hoverBg, href }, i) => (
                <li key={i}>
                   <a
                     href={href}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label={name}
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
              <FooterLink href="/certifications">{t('links.certifications')}</FooterLink>
              <FooterLink href="/ia-et-certifications">{t('links.ia')}</FooterLink>
              <FooterLink href="/blog">{t('links.blog')}</FooterLink>
              <FooterLink href="/contact">{t('links.contact')}</FooterLink>
              <FooterLink href="/campus">{t('links.campus')}</FooterLink>
              <FooterLink href="/faq">{t('links.faq')}</FooterLink>
              <FooterLink href="/blog">{t('links.evenements')}</FooterLink>
            </ul>
          </div>

          {/* Formations Column (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[20px] mb-6 relative inline-block">
              {t('links.formations')}
              <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-penn-green" />
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/nos-programmes" isBold>Nos Programmes</FooterLink>
              <FooterLink href="/licences">{t('links.licences')}</FooterLink>
              <FooterLink href="/masters">{t('links.masters')}</FooterLink>
              <FooterLink href="/parcours-international">{t('links.parcours')}</FooterLink>
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
                <a href="mailto:info@ebs.tn" className="text-white/80 text-[15px] hover:text-penn-green mt-2 transition-colors">
                  info@ebs.tn
                </a>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-penn-green transition-colors">
                  <Phone className="w-5 h-5 text-penn-green group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col text-white/80 text-[15px]">
                   <a href="tel:+21655582843" className="hover:text-penn-green transition-colors">+216 55 582 843</a>
                  <a href="tel:+21671182625" className="hover:text-penn-green transition-colors">+216 71 18 26 25</a>
                </div>
              </li>
              <li className="flex gap-4 items-center group mt-2">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] transition-colors">
                  <svg className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </div>
                <a href="https://wa.me/21655582843" target="_blank" rel="noopener noreferrer" className="text-white/80 text-[15px] hover:text-[#25D366] transition-colors font-medium">
                  WhatsApp
                </a>
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
             <a href="https://ebs.tn/mentions-legales" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm transition-colors">Mentions Légales</a>
             <a href="https://ebs.tn/politique-de-confidentialite" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
