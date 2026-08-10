import transformation from "@/assets/transformation.jpg";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { CONTACT } from "./data";
import { Calendar, Phone } from "lucide-react";

export function Transformation() {
  return (
    <section id="transformation" className="relative w-full overflow-hidden bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Left Dark Slate/Teal Banner */}
        <div className="group relative flex flex-col items-center justify-center text-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 min-h-[300px] lg:min-h-[360px] overflow-hidden">
          <img
            src={transformation}
            alt="Premium Hair Braiding Salon in Minnesota"
            width={1920}
            height={1088}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Deep dark slate gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#14221E]/92 via-[#1D2B26]/88 to-[#14221E]/92 backdrop-blur-[2px]" />

          <div className="relative z-10 flex flex-col items-center max-w-md">
            <h3 className="font-display text-xl sm:text-2xl lg:text-[1.85rem] font-bold leading-tight text-white tracking-tight mb-3">
              Premium Hair Braiding Salon in Glen Burnie, MD
            </h3>

            <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed mb-6 max-w-sm sm:max-w-md">
              At Doussou Quality Braiding, you can trust that your hair will be styled by master braider professionals who know how to give you the exact look that you want.
            </p>

            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/40 backdrop-blur-md px-6 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#1D2B26] hover:scale-105 shadow-md"
            >
              <Calendar size={14} />
              <span>Book Your Appointment</span>
            </a>
          </div>
        </div>

        {/* Right Vibrant Magenta Banner */}
        <div className="group relative flex flex-col items-center justify-center text-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 min-h-[300px] lg:min-h-[360px] overflow-hidden">
          <img
            src={heroPortrait}
            alt="At Doussou Quality Braiding we take care of your look"
            width={1104}
            height={1456}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Deep vibrant magenta gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#A30D83]/92 via-[#B81395]/88 to-[#A30D83]/92 backdrop-blur-[2px]" />

          <div className="relative z-10 flex flex-col items-center max-w-md">
            <h3 className="font-display text-xl sm:text-2xl lg:text-[1.85rem] font-bold leading-tight text-white tracking-tight mb-3">
              At Doussou Quality Braiding we take care of your look.
            </h3>

            <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed mb-6 max-w-sm sm:max-w-md">
              Call us or book your appointment online today.
            </p>

            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 backdrop-blur-md px-7 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#BA1296] hover:scale-105 shadow-md"
            >
              <Phone size={14} />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}