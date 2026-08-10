import { Star, Sparkles, CheckCircle2 } from "lucide-react";

const ROW_1_REVIEWS = [
  {
    name: "Amara S.",
    location: "Glen Burnie, MD",
    initials: "AS",
    color: "bg-[#AA1585]",
    quote: "The most comfortable knotless braids I have ever had. Six weeks in and they still look like day one. Doussou Quality Braiding takes real pride in hair health!"
  },
  {
    name: "Jasmine K.",
    location: "Baltimore, MD",
    initials: "JK",
    color: "bg-[#16857B]",
    quote: "Immaculate parting, zero scalp tension, and such a warm, welcoming studio. I drove from Baltimore and I would happily do it again every month!"
  },
  {
    name: "Dee M.",
    location: "Annapolis, MD",
    initials: "DM",
    color: "bg-[#C48D46]",
    quote: "She listened to me, then made it even better! My cornrows were completely flawless for my sister's wedding. 10/10 recommend Doussou Quality Braiding!"
  },
  {
    name: "Nia R.",
    location: "Pasadena, MD",
    initials: "NR",
    color: "bg-[#7C1685]",
    quote: "My daughter is usually nervous getting her hair done, but Doussou put her at ease. Gentle, patient, and stunning protective braiding results!"
  }
];

const ROW_2_REVIEWS = [
  {
    name: "Lisa M.",
    location: "Glen Burnie, MD",
    initials: "LM",
    color: "bg-[#AA1585]",
    quote: "Fast, honest, and meticulous work! The job was clean, painless, and turned out better than I imagined. Highly professional master braider."
  },
  {
    name: "Elena P.",
    location: "Columbia, MD",
    initials: "EP",
    color: "bg-[#16857B]",
    quote: "Outstanding service! Doussou took care of my natural hair before braiding and gave me customized aftercare advice. Exceptional experience!"
  },
  {
    name: "Marcus T.",
    location: "Severn, MD",
    initials: "MT",
    color: "bg-[#C48D46]",
    quote: "Cleanest stitch braids in Maryland. Great atmosphere, punctual appointments, and great conversation. Will definitely be a regular client."
  },
  {
    name: "David R.",
    location: "Glen Burnie, MD",
    initials: "DR",
    color: "bg-[#7C1685]",
    quote: "Brought my sister here for box braids and she was thrilled with the results. High quality hair used, no tight tension, and very neat parting."
  }
];

export function Testimonials() {
  const topCards = [...ROW_1_REVIEWS, ...ROW_1_REVIEWS, ...ROW_1_REVIEWS];
  const bottomCards = [...ROW_2_REVIEWS, ...ROW_2_REVIEWS, ...ROW_2_REVIEWS];

  return (
    <section id="reviews" className="relative w-full overflow-hidden bg-[#FAF8F5] py-[50px] border-t border-[#E8DFC8]">
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
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4">
            <Sparkles size={13} className="text-[#C48D46]" />
            <span>Google Verified Reviews</span>
          </div>

          <h2 className="font-display text-3xl font-normal leading-[1.2] text-[#2B231D] sm:text-4xl lg:text-[2.75rem] whitespace-normal md:whitespace-nowrap">
            Trusted by Women Who <span className="font-serif italic text-[#C48D46]">Love Their Style.</span>
          </h2>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <div className="flex text-[#FFB800]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#2B231D]">5.0 Average Rating</span>
            <span className="text-xs text-[#8C7A6B] font-medium hidden sm:inline">•</span>
            <span className="text-xs text-[#8C7A6B] font-medium">100+ Verified Google Reviews</span>
          </div>
        </div>
      </div>

      {/* Marquee Rows Container */}
      <div className="flex flex-col gap-6 w-full overflow-hidden py-2">
        {/* Top Row: Right to Left (marqueeLeft) */}
        <div className="w-full overflow-hidden">
          <div className="animate-marquee-left flex gap-5">
            {topCards.map((review, idx) => (
              <div
                key={`top-${review.name}-${idx}`}
                className="w-[300px] sm:w-[360px] shrink-0 group flex flex-col justify-between rounded-[24px] bg-white p-6 border border-[#E8DFC8]/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-xl hover:border-[#C48D46]/40"
              >
                <div>
                  <div className="flex text-[#FFB800] gap-1 mb-3.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#2B231D] font-medium">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 border-t border-[#E8DFC8]/60 pt-4 flex items-center gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${review.color} text-white font-bold text-xs shadow-sm`}>
                    {review.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-xs font-bold text-[#2B231D]">{review.name}</p>
                      <CheckCircle2 size={13} className="text-[#16857B]" />
                    </div>
                    <p className="text-[10px] font-medium text-[#8C7A6B]">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row: Left to Right (marqueeRight) */}
        <div className="w-full overflow-hidden">
          <div className="animate-marquee-right flex gap-5">
            {bottomCards.map((review, idx) => (
              <div
                key={`bottom-${review.name}-${idx}`}
                className="w-[300px] sm:w-[360px] shrink-0 group flex flex-col justify-between rounded-[24px] bg-white p-6 border border-[#E8DFC8]/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-xl hover:border-[#C48D46]/40"
              >
                <div>
                  <div className="flex text-[#FFB800] gap-1 mb-3.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#2B231D] font-medium">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 border-t border-[#E8DFC8]/60 pt-4 flex items-center gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${review.color} text-white font-bold text-xs shadow-sm`}>
                    {review.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-xs font-bold text-[#2B231D]">{review.name}</p>
                      <CheckCircle2 size={13} className="text-[#16857B]" />
                    </div>
                    <p className="text-[10px] font-medium text-[#8C7A6B]">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}