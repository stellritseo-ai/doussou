import { Sparkles, Award, Star, ShieldCheck, CheckCircle2 } from "lucide-react";

const STATS = [
  {
    value: "6+",
    label: "Years of Experience",
    detail: "Master Braider in Glen Burnie, MD",
    icon: Award,
  },
  {
    value: "3,000+",
    label: "Styles Created",
    detail: "Knotless, Box & Cornrows",
    icon: Sparkles,
  },
  {
    value: "5.0 ★",
    label: "Client Rating",
    detail: "Top-Rated Hair Studio",
    icon: Star,
  },
  {
    value: "100%",
    label: "Protective Styling",
    detail: "Scalp-First Care",
    icon: ShieldCheck,
  },
];

export function Intro() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-t border-[#E8DFC8]">
      {/* Ambient Lighting Orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-28 top-0 h-[500px] w-[500px] rounded-full bg-[#DCD4FD]/30 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 bottom-0 h-[500px] w-[500px] rounded-full bg-[#FCE0D4]/40 blur-[130px]"
      />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Grid */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
          {/* Left Heading */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4">
              <Sparkles size={13} className="text-[#C48D46]" />
              <span>Doussou Quality Braiding Experience</span>
            </div>

            <h2 className="font-display text-3xl font-normal leading-tight text-[#2B231D] sm:text-4xl lg:text-[2.85rem]">
              Expert Braids. Exceptional Detail. <span className="font-serif italic text-[#C48D46]">Your Signature Style.</span>
            </h2>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold text-[#2B231D]">
              <span className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] shadow-2xs">
                <CheckCircle2 size={14} className="text-[#C48D46]" />
                Tension-Free Parting
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] shadow-2xs">
                <CheckCircle2 size={14} className="text-[#C48D46]" />
                Long-Lasting Hold
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] shadow-2xs">
                <CheckCircle2 size={14} className="text-[#C48D46]" />
                Scalp Comfort Focus
              </span>
            </div>
          </div>

          {/* Right Copy Paragraphs */}
          <div className="rounded-[24px] bg-white p-7 sm:p-9 border border-[#E8DFC8] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <p className="text-base sm:text-lg leading-relaxed text-[#5C5046] font-normal">
              For more than six years, Doussou Quality Braiding has been braiding hair for women across Glen Burnie and the surrounding areas. Every appointment begins with a personal consultation, ensuring your style matches your hair texture, lifestyle, and confidence.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#5C5046] font-normal border-t border-[#E8DFC8]/60 pt-4">
              The result is protective, precise, long-lasting work — clean parting, even tension, and a flawless finish that holds its shape for weeks.
            </p>
          </div>
        </div>

        {/* Stats Section Cards */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {STATS.map((s) => {
            const IconComponent = s.icon;
            return (
              <div
                key={s.label}
                className="group relative flex flex-col justify-between rounded-[24px] bg-white p-6 sm:p-7 border border-[#E8DFC8] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#C48D46]/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#C48D46] transition-transform group-hover:scale-105">
                    {s.value}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F9F5EF] text-[#C48D46] transition-colors group-hover:bg-[#C48D46] group-hover:text-white">
                    <IconComponent size={20} />
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2B231D]">
                    {s.label}
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-[#8C7A6B]">
                    {s.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}