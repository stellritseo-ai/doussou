import transformation from "@/assets/transformation.jpg";
import { Button, Reveal } from "./primitives";

export function Transformation() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={transformation}
        alt="Close up of intricate cornrow braid patterns created at Fadi Fashion"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-plum-deep/78" />
      <div className="shell flex min-h-[520px] items-center py-28 lg:min-h-[640px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-champagne">Featured Transformation</p>
          <h2 className="mt-6 font-display text-[2.5rem] leading-[1.05] text-ivory sm:text-[3.4rem] lg:text-[4rem]">
            Your Look.
            <br />
            <span className="italic">Your Confidence.</span>
          </h2>
          <p className="mt-7 max-w-lg text-[1.02rem] leading-[1.8] text-ivory/70">
            Every style is thoughtfully created to complement your personality,
            lifestyle, and natural beauty.
          </p>
          <div className="mt-10">
            <Button href="#booking" variant="light">
              Book Your Appointment
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}