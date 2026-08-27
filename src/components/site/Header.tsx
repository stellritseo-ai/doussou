import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, Clock, Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { CONTACT } from "./data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  const isAboutPage = pathname === "/about" || pathname.startsWith("/about");
  const isServicesPage = pathname === "/services" || pathname.startsWith("/services");
  const isReviewsPage = pathname === "/reviews" || pathname.startsWith("/reviews");
  const isBookingPage = pathname === "/booking" || pathname.startsWith("/booking");
  const isContactPage = pathname === "/contact" || pathname.startsWith("/contact");
  const isDedicatedPage = isAboutPage || isServicesPage || isReviewsPage || isBookingPage || isContactPage;

  const NAV = [
    { label: "Home", href: "/", isLink: true },
    { label: "About Us", href: "/about", isLink: true },
    { label: "Services", href: "/services", isLink: true },
    { label: "Gallery", href: isDedicatedPage ? "/#gallery" : "#gallery", isLink: false },
    { label: "Reviews", href: "/reviews", isLink: true },
    { label: "Booking", href: "/booking", isLink: true },
    { label: "Contact Us", href: "/contact", isLink: true },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top Bar */}
      <div className="hidden bg-plum-deep text-ivory md:block">
        <div className="mx-auto flex h-[40px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[13px] font-medium tracking-wide opacity-90">
            <Clock size={14} />
            <span>Business hours :- 9:30 am to 8:30pm Mon to Sat</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-[13px] font-medium">
              <button className="flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100">
                <span className="text-base leading-none">🇺🇸</span> English
              </button>
              <button className="flex items-center gap-1.5 opacity-60 transition-opacity hover:opacity-100">
                <span className="text-base leading-none">🇫🇷</span> French
              </button>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={CONTACT.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-ivory/80 transition-colors hover:bg-ivory hover:text-plum-deep"
              >
                <Facebook size={12} strokeWidth={2.5} />
              </a>
              <a
                href={CONTACT.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-ivory/80 transition-colors hover:bg-ivory hover:text-plum-deep"
              >
                <Instagram size={12} strokeWidth={2.5} />
              </a>
              <a
                href={CONTACT.socials.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
                className="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-ivory/80 transition-colors hover:bg-ivory hover:text-plum-deep"
              >
                <span className="text-[11px] font-bold leading-none">G</span>
              </a>
              <a
                href={CONTACT.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-ivory/80 transition-colors hover:bg-ivory hover:text-plum-deep"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-[11px] w-[11px]">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={cn(
          "bg-background transition-all duration-300 border-b border-border/40",
          scrolled ? "shadow-md" : "shadow-sm"
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-[88px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Doussou Quality Braiding"
              className="h-[68px] lg:h-[74px] w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          <ul className="hidden items-center gap-1 xl:gap-2 lg:flex ml-auto mr-4">
            {NAV.map((item) => {
              const isActive = isAboutPage
                ? item.label === "About Us"
                : isServicesPage
                ? item.label === "Services"
                : isReviewsPage
                ? item.label === "Reviews"
                : isBookingPage
                ? item.label === "Booking"
                : isContactPage
                ? item.label === "Contact Us"
                : activeItem === item.label &&
                  item.label !== "About Us" &&
                  item.label !== "Services" &&
                  item.label !== "Reviews" &&
                  item.label !== "Booking" &&
                  item.label !== "Contact Us";

              const navClass = cn(
                "rounded-full px-4 py-2 text-[14px] font-semibold transition-all duration-300 inline-block",
                isActive
                  ? "bg-magenta text-ivory shadow-md scale-105"
                  : "text-foreground/85 hover:bg-plum-deep hover:text-ivory hover:scale-105 hover:shadow-md active:scale-95"
              );

              return (
                <li key={item.label}>
                  {item.isLink ? (
                    <Link
                      to={item.href}
                      onClick={() => setActiveItem(item.label)}
                      className={navClass}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setActiveItem(item.label)}
                      className={navClass}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 rounded-full bg-magenta px-4 py-2 text-[14px] font-bold tracking-wide text-ivory transition-all hover:bg-plum-deep hover:scale-105 shadow-sm"
            >
              <Phone size={15} fill="currentColor" />
              {CONTACT.phone}
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-plum-deep lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[88px] md:top-[128px] z-40 bg-white/50 backdrop-blur-[40px] transition-all duration-500 lg:hidden overflow-y-auto border-t border-white/40 shadow-2xl",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0 delay-150",
        )}
      >
        <div className="mx-auto flex min-h-full max-w-[1400px] flex-col justify-between px-6 pb-12 pt-10">
          <ul className="flex flex-col gap-6 sm:gap-8">
            {NAV.map((item, i) => {
              const isActive = isAboutPage
                ? item.label === "About Us"
                : isServicesPage
                ? item.label === "Services"
                : isReviewsPage
                ? item.label === "Reviews"
                : isBookingPage
                ? item.label === "Booking"
                : isContactPage
                ? item.label === "Contact Us"
                : activeItem === item.label &&
                  item.label !== "About Us" &&
                  item.label !== "Services" &&
                  item.label !== "Reviews" &&
                  item.label !== "Booking" &&
                  item.label !== "Contact Us";

              const itemClass = cn(
                "group flex items-center justify-between font-display text-4xl sm:text-5xl transition-colors tracking-tight",
                isActive
                  ? "text-[#C48D46] italic font-serif"
                  : "text-[#2B231D] hover:text-[#C48D46]"
              );

              return (
                <li
                  key={item.label}
                  className="transform transition-all duration-[600ms] cubic-bezier(0.16,1,0.3,1)"
                  style={{
                    transitionDelay: `${open ? 150 + i * 60 : 0}ms`,
                    opacity: open ? 1 : 0,
                    transform: open ? "translateX(0)" : "translateX(30px)",
                  }}
                >
                  {item.isLink ? (
                    <Link
                      to={item.href}
                      onClick={() => {
                        setActiveItem(item.label);
                        setOpen(false);
                      }}
                      className={itemClass}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="h-[2px] w-12 sm:w-16 bg-[#C48D46] rounded-full animate-[fadeLeft_0.5s_ease-out_both]" />
                      )}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => {
                        setActiveItem(item.label);
                        setOpen(false);
                      }}
                      className={itemClass}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="h-[2px] w-12 sm:w-16 bg-[#C48D46] rounded-full animate-[fadeLeft_0.5s_ease-out_both]" />
                      )}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          <div
            className="mt-14 flex flex-col items-center space-y-8 transition-all duration-700"
            style={{
              transitionDelay: `${open ? 500 : 0}ms`,
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="flex gap-8">
              <a
                href={CONTACT.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/40 text-[#2B231D] border border-white/50 backdrop-blur-md shadow-sm transition-all hover:bg-[#BA1296] hover:text-white hover:scale-110 hover:border-transparent"
              >
                <Instagram size={24} strokeWidth={1.5} />
              </a>
              <a
                href={CONTACT.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/40 text-[#2B231D] border border-white/50 backdrop-blur-md shadow-sm transition-all hover:bg-[#BA1296] hover:text-white hover:scale-110 hover:border-transparent"
              >
                <Facebook size={24} strokeWidth={1.5} />
              </a>
            </div>

            <a
              href={CONTACT.phoneHref}
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#C48D46] to-[#A87432] py-4.5 text-base font-bold tracking-wide text-white shadow-lg shadow-[#C48D46]/20 transition-all hover:scale-[1.02] hover:shadow-[#C48D46]/40"
            >
              <Phone size={18} fill="currentColor" className="transition-transform group-hover:scale-110" />
              <span>Call to Book: {CONTACT.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}