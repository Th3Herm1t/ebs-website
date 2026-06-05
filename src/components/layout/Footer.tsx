import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('HomePage.footer');

  return (
    <footer className="section-padding bg-penn-navy">
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/images/all-img/horizontal.png"
                alt="EBS"
                width={150}
                height={45}
                className="mb-5"
              />
            </Link>
            <p className="text-white/60 mb-6 text-[15px] leading-7 max-w-[500px]">
              {t('desc')}
            </p>
            <ul className="flex gap-4">
              {["FB", "TW", "IG", "IN", "YT"].map((label) => (
                <li key={label}>
                  <a href="#" className="text-white/80 hover:text-penn-green transition-colors font-bold text-sm">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explorer Column */}
          <div>
            <h4 className="text-white font-bold text-[20px] mb-5">{t('links.explorer')}</h4>
            <ul className="space-y-3">
              <li><Link href="/international" className="text-white/80 text-[14px] hover:text-[#2a9d8f] uppercase font-bold">{t('links.international')}</Link></li>
              <li><Link href="/entreprises" className="text-white/80 text-[14px] hover:text-[#2a9d8f] capitalize">{t('links.entreprises')}</Link></li>
              <li><Link href="/stages" className="text-white/80 text-[14px] hover:text-[#2a9d8f] uppercase font-bold">{t('links.stages')}</Link></li>
              <li><Link href="/blog" className="text-white/80 text-[14px] hover:text-[#2a9d8f] capitalize">{t('links.blog')}</Link></li>
              <li><Link href="/contact" className="text-white/80 text-[14px] hover:text-[#2a9d8f] capitalize">{t('links.contact')}</Link></li>
              <li><Link href="/campus" className="text-white/80 text-[14px] hover:text-[#2a9d8f] capitalize">{t('links.campus')}</Link></li>
              <li><Link href="/evenements" className="text-white/80 text-[14px] hover:text-[#2a9d8f] capitalize">{t('links.evenements')}</Link></li>
            </ul>
          </div>

          {/* Formations Column */}
          <div>
            <h4 className="text-white font-bold text-[20px] mb-5">{t('links.formations')}</h4>
            <ul className="space-y-3">
              <li><Link href="/licences" className="text-white/80 text-[14px] hover:text-[#2a9d8f] capitalize">{t('links.licences')}</Link></li>
              <li><Link href="/masters" className="text-white/80 text-[14px] hover:text-[#2a9d8f] capitalize">{t('links.masters')}</Link></li>
              <li><Link href="/international" className="text-white/80 text-[14px] hover:text-[#2a9d8f] uppercase font-bold">{t('links.parcours')}</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold text-[20px] mb-5">{t('contact.title')}</h4>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-[#2a9d8f] shrink-0 mt-1" />
                <span className="text-white/80 text-[14px] leading-relaxed">
                  {t('contact.address')}
                </span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-[#2a9d8f] shrink-0" />
                <a href="mailto:contact@ebs.tn" className="text-white/80 text-[14px] hover:text-[#2a9d8f]">
                  contact@ebs.tn
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-[#2a9d8f] shrink-0" />
                <div className="flex flex-col text-white/80 text-[14px]">
                  <span>+216 29 58 28 35</span>
                  <span>+216 71 18 26 25</span>
                </div>
              </li>
              <li className="text-white/80 text-[14px] pt-2">
                <strong>{t('contact.hours')}</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-wrap justify-center items-center">
          <p className="text-white/50 text-sm text-center">
            &copy; {new Date().getFullYear()} ESPIMA Business School. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
