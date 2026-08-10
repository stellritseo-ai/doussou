import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as "div";
  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", shown && "reveal-in", className)}
    >
      {children}
    </Component>
  );
}

type BtnProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "light" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60";

const variants: Record<string, string> = {
  primary:
    "bg-plum text-primary-foreground hover:bg-plum-deep hover:-translate-y-0.5 shadow-[0_10px_30px_-18px_var(--plum-deep)]",
  outline:
    "border border-plum/30 text-plum hover:border-plum hover:-translate-y-0.5 hover:bg-plum/5",
  light:
    "bg-ivory text-plum-deep hover:-translate-y-0.5 hover:bg-champagne hover:text-plum-deep",
  ghost:
    "border border-ivory/40 text-ivory hover:border-ivory hover:-translate-y-0.5 hover:bg-ivory/10",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  disabled,
  onClick,
}: BtnProps) {
  const cls = cn(base, variants[variant], className);
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-5",
            tone === "light" ? "text-champagne" : "text-magenta",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-[2.1rem] leading-[1.08] sm:text-[2.75rem] lg:text-[3.4rem]",
          tone === "light" ? "text-ivory" : "text-plum-deep",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-6 text-[0.98rem] leading-[1.75]",
            tone === "light" ? "text-ivory/70" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function Rule({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-border", className)} />;
}