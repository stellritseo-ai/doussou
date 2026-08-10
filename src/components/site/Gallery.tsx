import { useEffect, useState } from "react";
import { X, Sparkles, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
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
    <section id="gallery" className="relative w-full overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-t border-[#E8DFC8]">
      {/* Subtle ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-[#DCD4FD]/30 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-10 h-[500px] w-[500px] rounded-full bg-[#FCE0D4]/40 blur-[130px]"
      />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4">
            <Sparkles size={13} className="text-[#C48D46]" />
            <span>Style Portfolio</span>
          </div>

          <h2 className="font-display text-3xl font-normal leading-tight text-[#2B231D] sm:text-4xl lg:text-[2.75rem]">
            Braids That Speak <span className="font-serif italic text-[#C48D46]">for Themselves</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#5C5046] font-medium leading-relaxed">
            Explore our latest protective styling work created right here in Glen Burnie, MD.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mb-12 flex flex-wrap justify-center gap-2.5">
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => {
                setFilter(f);
                setActive(null);
              }}
              className={cn(
                "rounded-full border px-5 py-2 text-xs font-bold transition-all duration-300 shadow-2xs",
                filter === f
                  ? "border-[#C48D46] bg-[#C48D46] text-white scale-105 shadow-md"
                  : "border-[#E8DFC8] bg-white text-[#2B231D] hover:border-[#C48D46] hover:text-[#C48D46]"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* 4-Column Compact Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {items.map((item, i) => (
            <div key={item.label}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-[20px] bg-white border border-[#E8DFC8] shadow-[0_4px_16px_rgba(0,0,0,0.03)] text-left transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#C48D46]/40"
              >
                <div className="overflow-hidden aspect-[4/4.5] w-full bg-[#F9F5EF]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                
                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Floating Glass Caption on Hover */}
                <div className="absolute inset-x-3 bottom-3 translate-y-3 p-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-between rounded-xl bg-white/90 backdrop-blur-md border border-white/60 text-[#2B231D] shadow-lg">
                  <div>
                    <span className="block font-display text-sm font-bold leading-tight">
                      {item.label}
                    </span>
                    <span className="block text-[10px] font-medium text-[#C48D46]">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C48D46]/15 text-[#C48D46]">
                    <Maximize2 size={13} />
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.label}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActive(null)}
            className="absolute z-[70] right-3 top-3 sm:right-6 sm:top-6 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black hover:scale-110"
          >
            <X size={20} />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full max-w-4xl flex flex-col items-center">
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[78vh] w-auto rounded-[24px] object-contain shadow-2xl border-2 border-white/20"
            />
            <figcaption className="mt-4 text-center text-white">
              <span className="block font-display text-2xl font-bold">
                {lightbox.label}
              </span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-widest text-[#C48D46]">
                {lightbox.category} • Doussou Quality Braiding Glen Burnie
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}