import { Instagram, Facebook, Music2 } from "lucide-react";
import { CONTACT } from "./data";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Booking", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  "Knotless Braids",
  "African Hair Braiding",
  "Cornrows",
  "Box Braids",
  "Locs",
  "Natural Styles",
];

export function Footer() {
  return (
    <footer className="bg-plum-deep text-ivory/70">
      <div className="shell grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-24">
        <div className="max-w-sm">
          <p className="font-display text-2xl text-ivory">
            Fadi <span className="italic text-champagne">Fashion</span>
          </p>
          <p className="mt-5 text-[0.92rem] leading-[1.8]">
            Premier African hair braiding in Bloomington, Minnesota. Protective,
            precise styling created for how you live.
          </p>
          <div className="mt-7 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Music2, label: "TikTok" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#top"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ivory/20 transition-colors hover:border-champagne hover:text-champagne"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow text-[0.58rem] text-champagne">Explore</p>
          <ul className="mt-5 space-y-3">
            {NAV.map((n) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  className="text-[0.92rem] transition-colors hover:text-ivory"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-[0.58rem] text-champagne">Services</p>
          <ul className="mt-5 space-y-3">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-[0.92rem] transition-colors hover:text-ivory"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[0.58rem] text-champagne">Contact</p>
          <ul className="mt-5 space-y-3 text-[0.92rem]">
            <li>
              <a href={CONTACT.phoneHref} className="transition-colors hover:text-ivory">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="transition-colors hover:text-ivory"
              >
                {CONTACT.email}
              </a>
            </li>
            <li>{CONTACT.city}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="shell flex flex-col items-center justify-between gap-3 py-6 text-[0.78rem] sm:flex-row">
          <p>© 2026 Fadi Fashion. All Rights Reserved.</p>
          <p className="eyebrow text-[0.55rem] text-ivory/40">
            Hair Braiding • Bloomington, MN
          </p>
        </div>
      </div>
    </footer>
  );
}