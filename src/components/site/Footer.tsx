import logo from "@/assets/logo.png";
import { Instagram, Facebook, Music2, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { CONTACT } from "./data";

const NAV = [
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Style Gallery", href: "#gallery" },
  { label: "Client Reviews", href: "#reviews" },
  { label: "Book Appointment", href: "#booking" },
];

const SERVICE_LINKS = [
  "Knotless Braids",
  "African Hair Braiding",
  "Feed-In Cornrows",
  "Box Braids",
  "Locs & Extensions",
  "Scalp & Wash Rituals",
];

export function Footer() {
  return (
    <footer className="w-full bg-[#1C1613] text-white/80 border-t border-[#332A24] relative overflow-hidden">
      {/* Decorative top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#C48D46] via-[#BA1296] to-[#C48D46]" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          
          {/* Col 1: Brand & Logo */}
          <div className="space-y-6">
            <a href="#top" className="inline-block">
              <img src={logo} alt="Doussou Quality Braiding" className="h-[74px] w-auto object-contain" />
            </a>
            <p className="text-sm leading-relaxed text-white/70 max-w-sm font-medium">
              Premier African hair braiding studio in Glen Burnie, Maryland. Protective, precise styling crafted for your beauty.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { Icon: Instagram, label: "Instagram", href: CONTACT.socials.instagram },
                { Icon: Facebook, label: "Facebook", href: CONTACT.socials.facebook },
                { Icon: Music2, label: "TikTok", href: CONTACT.socials.tiktok },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white border border-white/15 transition-all duration-300 hover:bg-[#C48D46] hover:scale-110 hover:border-transparent"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C48D46] mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    className="text-white/70 transition-colors hover:text-[#C48D46]"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C48D46] mb-5">
              Popular Services
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/70 transition-colors hover:text-[#C48D46]"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Studio Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C48D46] mb-5">
              Studio Contact
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#C48D46] shrink-0" />
                <a href={CONTACT.phoneHref} className="text-white/70 transition-colors hover:text-white">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#C48D46] shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="text-white/70 transition-colors hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#C48D46] shrink-0 mt-0.5" />
                <span className="text-white/70 text-xs leading-relaxed">{CONTACT.fullAddress}</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#BA1296] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#a00e80] hover:scale-105"
              >
                <span>Book Appointment</span>
              </a>
              <a
                href={CONTACT.socials.google}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-xs font-bold text-white border border-white/20 transition-all hover:bg-white/20"
              >
                <span>Google Profile</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#332A24] bg-[#140F0D] py-6">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-white/50">
          <p>© 2026 Doussou Quality Braiding. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6">
            <span>Glen Burnie, MD 21061</span>
            <a
              href="#top"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#C48D46]"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}