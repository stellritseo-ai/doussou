import { Star } from "lucide-react";
import { Button, Reveal, SectionHeading } from "./primitives";
import { TESTIMONIALS } from "./data";

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 lg:py-36">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Client Reviews"
              title={
                <>
                  Trusted by Women Who
                  <br />
                  <span className="italic">Love Their Style.</span>
                </>
              }
            />
          </Reveal>
          <Reveal delay={100} className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-champagne text-champagne" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              5.0 average across Google reviews
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 border-t border-border pt-12 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 100} as="article">
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={13} className="fill-magenta text-magenta" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-[1.4rem] leading-[1.5] text-plum-deep lg:text-[1.6rem]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="eyebrow mt-6 text-[0.6rem] text-muted-foreground">
                {t.name} — Bloomington, MN
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <Button href="#booking" variant="outline">
            Read More Reviews
          </Button>
        </Reveal>
      </div>
    </section>
  );
}