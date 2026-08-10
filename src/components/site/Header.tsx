import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./primitives";
import { CONTACT } from "./data";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <div
        className={cn(
          "hidden bg-plum-deep text-ivory/70 transition-all duration-500 md:block",
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="shell flex h-9 items-center justify-between">
          <p className="eyebrow text-[0.62rem] text-ivory/60">
            Premier Hair Braiding in Bloomington, Minnesota
          </p>
          <a
            href={CONTACT.phoneHref}
            className="eyebrow text-[0.62rem] text-champagne transition-colors hover:text-ivory"
          >
            {CONTACT.phone}
          </a>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition-all duration-500",
          scrolled
            ? "border-border/60 bg-background/80 backdrop-blur-xl"
            : "border-transparent bg-background/0",
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "shell flex items-center justify-between transition-all duration-500",
            scrolled ? "h-16" : "h-20 lg:h-24",
          )}
        >
          <a href="#top" className="group flex flex-col leading-none">
            <span className="font-display text-[1.45rem] tracking-[0.02em] text-plum-deep">
              Fadi <span className="italic text-magenta">Fashion</span>
            </span>
            <span className="eyebrow mt-1 text-[0.56rem] text-muted-foreground">
              Hair Braiding Studio
            </span>
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="relative text-[0.82rem] font-medium tracking-[0.04em] text-foreground/75 transition-colors hover:text-plum after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-magenta after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href="#booking" className="px-6 py-3">
              Book Appointment
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-plum-deep lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 origin-top bg-background transition-all duration-400 lg:hidden",
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none -translate-y-3 opacity-0",
        )}
      >
        <div className="shell flex h-full flex-col justify-between py-10">
          <ul className="space-y-1">
            {NAV.map((item, i) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: `${open ? i * 45 + 60 : 0}ms` }}
                  className={cn(
                    "block border-b border-border/70 py-4 font-display text-3xl text-plum-deep transition-all duration-500",
                    open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <Button href="#booking" className="w-full" onClick={() => setOpen(false)}>
              Book Appointment
            </Button>
            <a
              href={CONTACT.phoneHref}
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
            >
              <Phone size={14} /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}