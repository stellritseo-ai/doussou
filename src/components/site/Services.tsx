import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Calendar } from "lucide-react";
import { SERVICES } from "./data";

export function Services() {
  return (
    <section id="services" className="relative w-full overflow-hidden bg-[#FAF8F5] py-[50px] border-t border-[#E8DFC8]">
      {/* Subtle ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-[#DCD4FD]/30 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-10 h-[500px] w-[500px] rounded-full bg-[#FCE0D4]/40 blur-[130px]"
      />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4">
            <Sparkles size={13} className="text-[#C48D46]" />
            <span>Our Specialties</span>
          </div>

          <h2 className="font-display text-3xl font-normal leading-tight text-[#2B231D] sm:text-4xl lg:text-[2.75rem]">
            Signature Hair Braiding <span className="font-serif italic text-[#C48D46]">Services</span>
          </h2>

          <p className="mt-4 text-[14px] sm:text-[17px] text-[#5C5046] font-medium leading-relaxed whitespace-normal md:whitespace-nowrap">
            From timeless classics to modern statement styles, discover a protective look tailored for you.
          </p>
        </div>

        {/* Popular Styles & Offerings Chips */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Knotless Braids",
              "Box Braids",
              "Feed-In Cornrows",
              "Faux Locs",
              "Twist-Outs",
              "Scalp Treatments",
              "Kids Braiding",
              "Special Occasion Updos",
            ].map((tag) => (
              <a
                key={tag}
                href="#booking"
                className="rounded-full bg-white border border-[#E8DFC8] px-4 py-2 text-xs font-semibold text-[#2B231D] shadow-2xs transition-all hover:bg-[#C48D46] hover:text-white hover:border-[#C48D46] hover:scale-105"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.name}
              className="group relative flex flex-col overflow-hidden rounded-[28px] bg-white border border-[#E8DFC8] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(196,141,70,0.12)] hover:border-[#C48D46]/40"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] w-full bg-[#F9F5EF]">
                <img
                  src={service.image}
                  alt={`${service.name} at Doussou Quality Braiding in Glen Burnie, MD`}
                  width={912}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Category Badge Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-[#2B231D] shadow-sm border border-white/60">
                    {service.name.split(" ")[0]}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl font-bold text-[#2B231D] transition-colors group-hover:text-[#C48D46]">
                      {service.name}
                    </h3>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F9F5EF] text-[#C48D46] transition-all duration-300 group-hover:bg-[#C48D46] group-hover:text-white group-hover:rotate-45">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  <p className="mt-3 text-[14px] leading-relaxed text-[#5C5046] font-normal">
                    {service.blurb}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#E8DFC8]/60 pt-4 flex items-center justify-between">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C48D46] transition-all group-hover:gap-2.5"
                  >
                    <Calendar size={14} />
                    <span>Book This Style</span>
                  </a>
                  <span className="text-[11px] font-semibold text-[#8C7A6B]">Glen Burnie, MD</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View Full Services Guide Button */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-[#C48D46] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#A87432] hover:scale-105"
          >
            <span>View Full Services &amp; Pricing Guide</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}