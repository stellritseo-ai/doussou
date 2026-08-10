import heroPortrait from "@/assets/hero-portrait.jpg";
import { Button } from "./primitives";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background pt-32 lg:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[640px] w-[640px] rounded-full bg-blush/60 blur-3xl"
      />
      <svg
        aria-hidden
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -left-40 top-40 h-[560px] w-[560px] text-plum/10"
      >
        <circle cx="300" cy="300" r="280" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="300" cy="300" r="200" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="shell relative grid items-center gap-14 pb-20 lg:grid-cols-[1fr_0.92fr] lg:gap-20 lg:pb-32">
        <div className="animate-[fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_both]">
          <p className="eyebrow flex items-center gap-3 text-magenta">
            <span className="h-px w-8 bg-magenta" />
            Premier Hair Braiding • Bloomington, MN
          </p>
          <h1 className="mt-7 font-display text-[3rem] font-light leading-[0.98] tracking-[-0.02em] text-plum-deep sm:text-[4.2rem] lg:text-[5.2rem]">
            Braids That
            <br />
            <span className="italic text-magenta">Define</span> Your Style.
          </h1>
          <p className="mt-8 max-w-md text-[1.02rem] leading-[1.8] text-muted-foreground">
            Expertly crafted braiding styles designed to celebrate your beauty,
            confidence, and individuality.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#booking">Book an Appointment</Button>
            <Button href="#gallery" variant="outline">
              Explore Our Styles
            </Button>
          </div>

          <div className="mt-14 flex items-center gap-8 border-t border-border pt-8">
            <div>
              <p className="font-display text-3xl text-plum-deep">6+</p>
              <p className="eyebrow mt-1 text-[0.6rem] text-muted-foreground">Years</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-display text-3xl text-plum-deep">1000+</p>
              <p className="eyebrow mt-1 text-[0.6rem] text-muted-foreground">Styles</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-display text-3xl text-plum-deep">5★</p>
              <p className="eyebrow mt-1 text-[0.6rem] text-muted-foreground">Rated</p>
            </div>
          </div>
        </div>

        <div className="relative animate-[imageReveal_1.2s_cubic-bezier(0.16,1,0.3,1)_both]">
          <div className="grain relative overflow-hidden rounded-[20px] rounded-tr-[120px]">
            <img
              src={heroPortrait}
              alt="Woman with long knotless box braids styled by Fadi Fashion in Bloomington, Minnesota"
              width={1104}
              height={1456}
              fetchPriority="high"
              className="h-[440px] w-full object-cover object-top sm:h-[560px] lg:h-[680px]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-plum-deep px-7 py-5 text-ivory sm:block">
            <p className="font-display text-xl italic">Signature Knotless</p>
            <p className="eyebrow mt-1 text-[0.58rem] text-champagne">Studio Favourite</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform: translateY(28px) } to { opacity:1; transform:none } }
        @keyframes imageReveal { from { opacity:0; transform: scale(1.04) translateY(18px) } to { opacity:1; transform:none } }
      `}</style>
    </section>
  );
}