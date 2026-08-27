import { Link } from "@tanstack/react-router";
import welcomeVideo from "@/assets/welcome.mp4";
import cornrows from "@/assets/style-cornrows.jpg";
import natural from "@/assets/style-natural.jpg";

export function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-gradient-to-r from-[#FCEAF4] via-[#FFF3F8] to-[#FCEAF4] py-16 lg:py-24 border-y border-[#F5D5E6]">
      {/* Decorative soft glowing ambient shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-magenta/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-blush/40 blur-3xl"
      />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Left Text Content */}
          <div>
            <div className="inline-block rounded-full bg-[#A81585] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm mb-6">
              Welcome To Doussou Quality Braiding
            </div>

            <h2 className="font-['Inter'] font-bold -mb-[11px] text-3xl leading-[1.2] text-[#111] sm:text-4xl lg:text-[2.5rem]">
              Expert Braids for Every Style, Texture, and Personality.
            </h2>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.75] text-[#222] font-normal">
              Welcome to Doussou Quality Braiding, where master braiders bring years of passion and precision to every client. Located in Glen Burnie, MD, we specialize in authentic African hair braiding and modern protective styles for both men and women.
            </p>

            <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.75] text-[#222] font-normal">
              For years, we have dedicated ourselves to the art of hair braiding, mastering everything from traditional African techniques to the latest trends like knotless and stitch braids. Our goal is to make every client feel beautiful and confident when they leave our chair. We pride ourselves on a clean, friendly atmosphere where you can relax while we handle your style. We look forward to meeting you and bringing your vision to life!
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="rounded-full bg-[#A81585] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#880D6B] hover:scale-105 shadow-md"
              >
                Read More
              </Link>
              <a
                href="#why-us"
                className="rounded-full bg-[#A81585] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#880D6B] hover:scale-105 shadow-md"
              >
                Check Out Our Achievements
              </a>
            </div>
          </div>

          {/* Right Image Gallery (1 Tall Photo + 2 Stacked Photos) */}
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* Tall Main Video */}
            <div className="overflow-hidden rounded-[24px] sm:rounded-[28px] shadow-lg">
              <video
                src={welcomeVideo}
                autoPlay
                loop
                muted
                playsInline
                className="h-[380px] sm:h-[520px] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Stacked Photos */}
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-[24px] sm:rounded-[28px] shadow-lg">
                <img
                  src={cornrows}
                  alt="Precision Feed-in Braids"
                  className="h-[182px] sm:h-[250px] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-[24px] sm:rounded-[28px] shadow-lg">
                <img
                  src={natural}
                  alt="Natural Hair Braids Style"
                  className="h-[182px] sm:h-[250px] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}