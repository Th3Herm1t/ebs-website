import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  courses: [
    "Creative Writing",
    "Digital Marketing",
    "SEO Business",
    "Social Marketing",
    "Graphic Design",
    "Website Development",
  ],
  company: [
    "About us",
    "Knowledge Base",
    "Affiliate Program",
    "Community",
    "Market API",
    "Support team",
  ],
};

export default function Footer() {
  return (
    <footer className="section-padding bg-penn-navy">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div>
            <Link href="/">
              <Image
                src="/images/all-img/logo2.png"
                alt="Penn"
                width={150}
                height={45}
                className="mb-5"
              />
            </Link>
            <p className="text-white/60 mb-6 text-[15px] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vitae risus nec dui venenatis dignissim.
            </p>
            <ul className="flex gap-2">
              {["TW", "FB", "INS", "YT"].map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-penn-green transition-colors font-bold text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-extrabold text-lg mb-6">Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-white/60 text-[15px] transition-colors hover:text-penn-green"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-extrabold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-white/60 text-[15px] transition-colors hover:text-penn-green"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-extrabold text-lg mb-6">
              Contact Info
            </h4>
            <div className="space-y-5">
              {[
                {
                  icon: Phone,
                  title: "Phone number",
                  value: "+88 457 845 695",
                },
                {
                  icon: Mail,
                  title: "Email Address",
                  value: "example@yourmail.com",
                },
                {
                  icon: MapPin,
                  title: "Office Address",
                  value: "California, USA",
                },
              ].map(({ icon: Icon, title, value }) => (
                <div key={title} className="flex gap-3">
                  <Icon className="w-5 h-5 text-penn-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold text-sm">{title}</h3>
                    <p className="text-white/60 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-wrap justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; 2023. All Rights Reserved.
          </p>
          <ul className="flex gap-6">
            {["Terms of use", "Privacy Policy", "Cookie Policy"].map(
              (link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-white/50 text-sm hover:text-penn-green transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}
