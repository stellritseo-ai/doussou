import aboutStudio from "@/assets/about-studio.jpg";
import { Button, Reveal, SectionHeading } from "./primitives";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-36">
      <div className="shell grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-24">
        <Reveal className="relative order-2 lg:order-1">
          <div className="grain overflow-hidden rounded-[20px] rounded-bl-[120px]">
            <img
              src={aboutStudio}
              alt="Fadi Fashion stylist braiding cornrows for a client in the Bloomington studio"
              width={1104}
              height={1360}
              loading="lazy"
              className="h-[420px] w-full object-cover sm:h-[560px] lg:h-[680px]"
            />
          </div>
          <p className="eyebrow mt-5 text-[0.58rem] text-muted-foreground">
            Est. Bloomington, Minnesota
          </p>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title={
                <>
                  More Than Braids.
                  <br />
                  <span className="italic">It&rsquo;s Your Signature.</span>
                </>
              }
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-7 max-w-xl text-[1.02rem] leading-[1.85] text-muted-foreground">
              Fadi Fashion grew out of a lifelong love of African hair braiding —
              the patience of it, the artistry, and the quiet confidence a
              beautifully finished style gives a woman when she looks in the
              mirror.
            </p>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-[1.85] text-muted-foreground">
              Every client is styled individually. We consider your hair density,
              scalp comfort, how much time you have, and how long you need the
              style to last. Nothing rushed, nothing generic.
            </p>

            <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {[
                "Professional experience",
                "Individualised styling",
                "Comfort-first technique",
                "Quality hair & products",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-border pb-3 text-sm text-foreground/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-magenta" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="#services" variant="outline">
                Learn More
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}