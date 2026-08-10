import bookingImg from "@/assets/booking-cta.jpg";
import { Sparkles, Calendar, Phone } from "lucide-react";
import { CONTACT } from "./data";

export function BookingCTA() {
  return (
    <section className="relative isolate w-full overflow-hidden py-20 lg:py-28">
      {/* Background Image with Dark Vignette Overlay */}
      <img
        src={bookingImg}
        alt="Hair braiding studio client protective style presentation"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/75 to-black/85 backdrop-blur-[2px]" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mx-auto max-w-3xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#E8C28A] border border-[#C48D46]/40 mb-6">
            <Sparkles size={13} className="text-[#E8C28A]" />
            <span>Ready to Transform Your Look?</span>
          </div>

          {/* Main Title */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-normal leading-[1.15] text-white">
            Schedule Your Braiding Appointment{" "}
            <span className="font-serif italic text-[#E8C28A]">with Our Skilled Stylists.</span>
          </h2>

          {/* Subtitle Body Text */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
            Make your look unique, unparalleled and unprecedented with a hairstyle that brings out all the natural assets you have.
          </p>

          {/* CTA Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#booking"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#C48D46] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#b07d3b] hover:scale-105 active:scale-95"
            >
              <Calendar size={18} />
              <span>Book Your Appointment Now</span>
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-4 text-sm font-bold text-white border border-white/30 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95"
            >
              <Phone size={16} />
              <span>Call Studio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}