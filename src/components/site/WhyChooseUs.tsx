import { Reveal, SectionHeading } from "./primitives";
import { REASONS } from "./data";

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-36">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Why Fadi Fashion"
            title={<>Why Clients Choose Fadi Fashion</>}
          />
        </Reveal>

        <div className="mt-16 grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal
              key={r.n}
              delay={(i % 3) * 90}
              className="group border-b border-border px-0 py-10 transition-colors duration-300 sm:px-8 sm:odd:pl-0 lg:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <p className="font-display text-2xl text-champagne transition-colors duration-300 group-hover:text-magenta">
                {r.n}
              </p>
              <h3 className="mt-5 font-display text-[1.5rem] text-plum-deep">
                {r.title}
              </h3>
              <p className="mt-3 max-w-xs text-[0.92rem] leading-[1.75] text-muted-foreground">
                {r.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}