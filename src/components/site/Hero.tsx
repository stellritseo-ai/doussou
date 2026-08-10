import { useState, useEffect } from "react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import boxbraids from "@/assets/style-boxbraids.jpg";
import cornrows from "@/assets/style-cornrows.jpg";
import { CONTACT } from "./data";
import { Calendar, Phone, Sparkles, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const HERO_IMAGES = [
  {
    src: heroPortrait,
    title: "Signature Knotless Braids",
    tag: "Featherlight & Tension-Free",
    alt: "Doussou Quality Braiding Signature Knotless Braids in Glen Burnie"
  },
  {
    src: boxbraids,
    title: "Waist-Length Box Braids",
    tag: "Classic & Versatile Styling",
    alt: "Doussou Quality Braiding Waist-Length Box Braids"
  },
  {
    src: cornrows,
    title: "Feed-In Cornrows",
    tag: "Precision Scalped Patterns",
    alt: "Doussou Quality Braiding Feed-In Cornrows"
  }
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  return (
    <section id="top" className="relative w-full overflow-hidden bg-[#FAF8F5] pt-36 pb-16 lg:pt-44 lg:pb-24">
      {/* Soft Aura Lighting Orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-28 -top-16 h-[650px] w-[650px] rounded-full bg-[#DCD4FD]/60 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-[300px] h-[600px] w-[600px] rounded-full bg-[#FCE0D4]/75 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 h-[500px] w-[500px] rounded-full bg-[#EBDCFD]/40 blur-[120px]"
      />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Left Content Column */}
          <div className="z-10 animate-[fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_both]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-6">
              <Sparkles size={13} className="text-[#C48D46]" />
              <span>3000+ Happy Customers & Clients</span>
            </div>

            <h1 className="font-display text-4xl font-normal leading-[1.2] tracking-tight text-[#2B231D] sm:text-5xl lg:leading-[1.1] lg:text-[3.4rem] xl:text-[4rem]">
              Doussou Quality Braiding – Premier Hair Braiding in <span className="font-serif italic text-[#C48D46]">Glen Burnie, MD</span>
            </h1>

            <p className="mt-[15px] text-[17px] sm:text-[19px] leading-[1.8] sm:leading-[35px] font-medium text-[#5C5046] max-w-xl">
              6 Years of Perfecting the Art of Braids. Experience personalized protective styling designed to celebrate your hair & confidence.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 lg:mt-10">
              <a
                href="#booking"
                className="group flex items-center gap-2.5 rounded-full bg-[#C48B40] px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#A87432] hover:scale-105 shadow-[0_8px_20px_rgba(196,139,64,0.3)]"
              >
                <Calendar size={16} />
                <span>Book an appointment</span>
              </a>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2.5 rounded-full bg-white border-2 border-[#C48B40] px-8 py-3.5 text-sm font-bold text-[#C48B40] transition-all duration-300 hover:bg-[#C48B40]/10 hover:scale-105 shadow-sm"
              >
                <Phone size={16} />
                <span>Call Us 9 Am to 8 Pm</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="mt-[30px] flex items-center gap-6 border-t border-[#E8DFC8] pt-6 text-[#5C5046]">
              <div className="flex items-center gap-2">
                <div className="flex text-[#C48D46]">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span className="text-xs font-bold tracking-wide text-[#2B231D]">5.0 Star Rated</span>
              </div>
              <div className="h-4 w-px bg-[#E8DFC8]" />
              <span className="text-xs font-semibold tracking-wide">3000+ Happy Clients</span>
            </div>
          </div>

          {/* Right Oval Image Slider Column */}
          <div className="relative flex justify-center lg:justify-end animate-[imageReveal_1.2s_cubic-bezier(0.16,1,0.3,1)_both]">
            <div className="relative p-[5px] rounded-[200px] sm:rounded-[260px] bg-gradient-to-b from-[#C48D46] via-[#E2B77B] to-[#9E6C2D] shadow-[0_15px_40px_rgba(0,0,0,0.12)]">

              {/* Image Viewport */}
              <div className="relative overflow-hidden rounded-full sm:rounded-[254px] w-[320px] sm:w-[360px] lg:w-[410px] xl:w-[440px] h-[480px] sm:h-[560px] lg:h-[620px] xl:h-[650px]">
                {HERO_IMAGES.map((img, idx) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={1104}
                    height={1456}
                    fetchPriority={idx === 0 ? "high" : "low"}
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover object-top transition-all duration-1000 ease-in-out",
                      idx === currentImage
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-105 z-0"
                    )}
                  />
                ))}
              </div>



              {/* Slider Indicator Dots */}
              <div className="absolute bottom-4 right-1/2 translate-x-1/2 z-20 flex items-center gap-2 rounded-full bg-black/30 backdrop-blur-md px-3 py-1.5">
                {HERO_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentImage(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      idx === currentImage
                        ? "w-6 bg-[#C48D46]"
                        : "w-2 bg-white/60 hover:bg-white"
                    )}
                  />
                ))}
              </div>

              {/* Floating Glass Badge (Dynamic Info) */}
              <div className="absolute -bottom-3 -left-4 sm:left-2 rounded-2xl bg-white/95 backdrop-blur-xl px-5 py-3 text-[#2B231D] shadow-xl border border-[#E8DFC8] hidden sm:flex items-center gap-3 z-20 transition-all duration-500">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C48D46]/15 text-[#C48D46]">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">{HERO_IMAGES[currentImage].title}</p>
                  <p className="text-[10px] font-medium text-[#5C5046]">{HERO_IMAGES[currentImage].tag}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform: translateY(28px) } to { opacity:1; transform:none } }
        @keyframes imageReveal { from { opacity:0; transform: scale(0.96) translateY(18px) } to { opacity:1; transform:none } }
      `}</style>
    </section>
  );
}