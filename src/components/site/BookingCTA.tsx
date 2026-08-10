import bookingImg from "@/assets/booking-cta.jpg";
import { Button, Reveal } from "./primitives";
import { CONTACT } from "./data";

export function BookingCTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={bookingImg}
        alt="Waist length box braids photographed against a deep plum backdrop"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-plum-deep/80" />
      <div className="shell flex min-h-[480px] items-center justify-center py-28 text-center lg:min-h-[560px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-champagne">Bloomington, Minnesota</p>
          <h2 className="mt-6 font-display text-[2.5rem] leading-[1.05] text-ivory sm:text-[3.4rem] lg:text-[4rem]">
            Ready for Your <span className="italic">Next Look?</span>
          </h2>
          <p className="mx-auto mt-7 max-w-lg text-[1.02rem] leading-[1.8] text-ivory/70">
            Reserve your appointment and let our experienced stylists create a
            look made for you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="#booking" variant="light">
              Book Your Appointment
            </Button>
            <Button href={CONTACT.phoneHref} variant="ghost">
              Call Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}