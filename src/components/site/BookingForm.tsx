import { useState, type FormEvent } from "react";
import { Check, Mail, MapPin, Phone, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, Reveal, SectionHeading } from "./primitives";
import { CONTACT, SERVICES } from "./data";

type Values = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

const EMPTY: Values = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

function validate(v: Values) {
  const e: Partial<Record<keyof Values, string>> = {};
  if (!v.firstName.trim()) e.firstName = "First name is required";
  else if (v.firstName.trim().length > 60) e.firstName = "Too long";
  if (!v.lastName.trim()) e.lastName = "Last name is required";
  if (!/^[0-9+()\-.\s]{7,20}$/.test(v.phone.trim()))
    e.phone = "Enter a valid phone number";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "Enter a valid email address";
  if (!v.service) e.service = "Please select a service";
  if (!v.date) e.date = "Choose a preferred date";
  if (!v.time) e.time = "Choose a preferred time";
  if (v.message.length > 1000) e.message = "Message is too long";
  return e;
}

const fieldCls =
  "w-full rounded-lg border border-border bg-card px-4 py-3 text-[0.92rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-plum focus:ring-1 focus:ring-plum";

function Field({
  label,
  error,
  children,
  className,
  htmlFor,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
  htmlFor: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="eyebrow mb-2 block text-[0.58rem] text-muted-foreground"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

export function BookingForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setValues(EMPTY);
    }
  };

  return (
    <section id="booking" className="border-t border-border bg-ivory py-24 lg:py-36">
      <div className="shell grid gap-16 lg:grid-cols-[0.85fr_1fr] lg:gap-24">
        <div id="contact" className="scroll-mt-32">
          <Reveal>
            <SectionHeading
              eyebrow="Booking & Contact"
              title={
                <>
                  Let&rsquo;s Create
                  <br />
                  <span className="italic">Your Look.</span>
                </>
              }
              intro="Send a request and we'll confirm your appointment within one business day."
            />
          </Reveal>

          <Reveal delay={100} className="mt-12 space-y-7">
            <div className="flex gap-4 border-b border-border pb-6">
              <Phone size={17} className="mt-1 shrink-0 text-magenta" />
              <div>
                <p className="eyebrow text-[0.58rem] text-muted-foreground">Phone</p>
                <a
                  href={CONTACT.phoneHref}
                  className="mt-1 block text-[1.05rem] text-plum-deep transition-colors hover:text-magenta"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-4 border-b border-border pb-6">
              <Mail size={17} className="mt-1 shrink-0 text-magenta" />
              <div>
                <p className="eyebrow text-[0.58rem] text-muted-foreground">Email</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-1 block text-[1.05rem] text-plum-deep transition-colors hover:text-magenta"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
            <div className="flex gap-4 border-b border-border pb-6">
              <MapPin size={17} className="mt-1 shrink-0 text-magenta" />
              <div>
                <p className="eyebrow text-[0.58rem] text-muted-foreground">Location</p>
                <p className="mt-1 text-[1.05rem] text-plum-deep">{CONTACT.city}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock size={17} className="mt-1 shrink-0 text-magenta" />
              <div className="w-full">
                <p className="eyebrow text-[0.58rem] text-muted-foreground">Hours</p>
                <ul className="mt-2 space-y-1.5">
                  {CONTACT.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between gap-6 text-[0.92rem] text-foreground/80"
                    >
                      <span>{h.day}</span>
                      <span className="text-muted-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="rounded-[18px] border border-border bg-card p-7 sm:p-10">
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-plum text-primary-foreground">
                  <Check size={22} />
                </span>
                <h3 className="mt-6 font-display text-3xl text-plum-deep">
                  Request Received
                </h3>
                <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
                  Thank you — we&rsquo;ll be in touch within one business day to
                  confirm your appointment.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="eyebrow mt-8 text-[0.6rem] text-magenta underline underline-offset-4"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                <Field label="First Name" htmlFor="firstName" error={errors.firstName}>
                  <input
                    id="firstName"
                    className={fieldCls}
                    value={values.firstName}
                    onChange={set("firstName")}
                    maxLength={60}
                    autoComplete="given-name"
                    placeholder="Amara"
                  />
                </Field>
                <Field label="Last Name" htmlFor="lastName" error={errors.lastName}>
                  <input
                    id="lastName"
                    className={fieldCls}
                    value={values.lastName}
                    onChange={set("lastName")}
                    maxLength={60}
                    autoComplete="family-name"
                    placeholder="Johnson"
                  />
                </Field>
                <Field label="Phone" htmlFor="phone" error={errors.phone}>
                  <input
                    id="phone"
                    type="tel"
                    className={fieldCls}
                    value={values.phone}
                    onChange={set("phone")}
                    maxLength={20}
                    autoComplete="tel"
                    placeholder="(612) 555-0147"
                  />
                </Field>
                <Field label="Email" htmlFor="email" error={errors.email}>
                  <input
                    id="email"
                    type="email"
                    className={fieldCls}
                    value={values.email}
                    onChange={set("email")}
                    maxLength={255}
                    autoComplete="email"
                    placeholder="you@email.com"
                  />
                </Field>
                <Field
                  label="Select Service"
                  htmlFor="service"
                  error={errors.service}
                  className="sm:col-span-2"
                >
                  <select
                    id="service"
                    className={cn(fieldCls, "appearance-none")}
                    value={values.service}
                    onChange={set("service")}
                  >
                    <option value="">Choose a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Special Occasion / Wedding">
                      Special Occasion / Wedding
                    </option>
                    <option value="Kids Braiding">Kids Braiding</option>
                  </select>
                </Field>
                <Field label="Preferred Date" htmlFor="date" error={errors.date}>
                  <input
                    id="date"
                    type="date"
                    className={fieldCls}
                    value={values.date}
                    onChange={set("date")}
                  />
                </Field>
                <Field label="Preferred Time" htmlFor="time" error={errors.time}>
                  <input
                    id="time"
                    type="time"
                    className={fieldCls}
                    value={values.time}
                    onChange={set("time")}
                  />
                </Field>
                <Field
                  label="Message"
                  htmlFor="message"
                  error={errors.message}
                  className="sm:col-span-2"
                >
                  <textarea
                    id="message"
                    rows={4}
                    maxLength={1000}
                    className={cn(fieldCls, "resize-none")}
                    value={values.message}
                    onChange={set("message")}
                    placeholder="Tell us about the style you have in mind…"
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Button type="submit" className="w-full sm:w-auto">
                    Request Appointment
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}