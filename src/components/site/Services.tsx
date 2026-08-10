import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import { SERVICES } from "./data";

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-ivory py-24 lg:py-36">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title={<>Signature Braiding Services</>}
            intro="From timeless classics to modern statement styles, discover a look designed for you."
          />
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={(i % 3) * 100} as="article">
              <a href="#booking" className="group block">
                <div className="overflow-hidden rounded-[14px] bg-secondary">
                  <img
                    src={service.image}
                    alt={`${service.name} at Fadi Fashion, Bloomington MN`}
                    width={912}
                    height={1200}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <h3 className="font-display text-[1.6rem] leading-tight text-plum-deep">
                    {service.name}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="mt-1 shrink-0 text-magenta transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <p className="mt-3 max-w-sm text-[0.92rem] leading-[1.75] text-muted-foreground">
                  {service.blurb}
                </p>
                <span className="eyebrow mt-5 inline-block text-[0.6rem] text-plum/70 transition-colors group-hover:text-magenta">
                  Explore Service
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 border-t border-border pt-8">
          <p className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {[
              "Hair Styling",
              "Extension Services",
              "Hair Treatments",
              "Hair Wash",
              "Weddings & Events",
              "Kids Braiding",
            ].map((s) => (
              <span key={s}>{s}</span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}