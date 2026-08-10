import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./primitives";
import { GALLERY, GALLERY_FILTERS } from "./data";

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);

  const items = GALLERY.filter((g) => filter === "All" || g.category === filter);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const lightbox = active !== null ? items[active] : null;

  return (
    <section id="gallery" className="border-y border-border bg-ivory py-24 lg:py-36">
      <div className="shell">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Style Gallery"
              title={<>Braids That Speak for Themselves</>}
              intro="Explore some of our latest work."
            />
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-10 -mx-6 overflow-x-auto px-6 lg:mx-0 lg:px-0">
          <div className="flex min-w-max gap-2 pb-1">
            {GALLERY_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setFilter(f);
                  setActive(null);
                }}
                className={cn(
                  "rounded-lg border px-4 py-2 text-[0.75rem] font-medium tracking-[0.08em] uppercase transition-all duration-300",
                  filter === f
                    ? "border-plum bg-plum text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-plum/40 hover:text-plum",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={(i % 3) * 80} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-[14px] bg-secondary text-left"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className={cn(
                    "w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]",
                    item.span === "tall" ? "aspect-[3/4]" : "aspect-square",
                  )}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-plum-deep/85 via-plum-deep/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block font-display text-xl text-ivory">
                    {item.label}
                  </span>
                  <span className="eyebrow mt-1 block text-[0.58rem] text-champagne">
                    {item.category}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.label}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-plum-deep/95 p-6 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-lg border border-ivory/30 text-ivory transition-colors hover:bg-ivory/10"
          >
            <X size={18} />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full">
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[76vh] w-auto rounded-[14px] object-contain"
            />
            <figcaption className="mt-5 text-center">
              <span className="block font-display text-2xl text-ivory">
                {lightbox.label}
              </span>
              <span className="eyebrow mt-1 block text-[0.58rem] text-champagne">
                {lightbox.category}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}