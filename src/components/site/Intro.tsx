import { Reveal, SectionHeading } from "./primitives";

const STATS = [
  { value: "6+", label: "Years of Experience" },
  { value: "1000+", label: "Styles Created" },
  { value: "5★", label: "Client Experience" },
  { value: "100%", label: "Personalized Service" },
];

export function Intro() {
  return (
    <section className="border-y border-border bg-ivory py-24 lg:py-32">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1fr] lg:gap-24">
          <Reveal>
            <SectionHeading
              eyebrow="The Fadi Fashion Experience"
              title={
                <>
                  Expert Braiding.
                  <br />
                  Exceptional Detail.
                  <br />
                  <span className="italic">Your Signature Style.</span>
                </>
              }
            />
          </Reveal>
          <Reveal delay={120} className="max-w-xl self-end">
            <p className="text-[1.02rem] leading-[1.85] text-muted-foreground">
              For more than six years, Fadi Fashion has been braiding hair for
              women across Bloomington and the Twin Cities. Every appointment
              begins with a consultation, because a style should fit your hair
              type, your routine and the way you want to move through the world.
            </p>
            <p className="mt-5 text-[1.02rem] leading-[1.85] text-muted-foreground">
              The result is protective, precise, long-lasting work — clean
              parting, even tension, and a finish that holds its shape for weeks.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-y-12 border-t border-border pt-12 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="lg:border-r lg:border-border lg:last:border-none lg:pr-8">
              <p className="font-display text-[2.75rem] leading-none text-plum lg:text-[3.25rem]">
                {s.value}
              </p>
              <p className="eyebrow mt-3 text-[0.62rem] text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}