import { useState, type FormEvent } from "react";
import { Check, Mail, MapPin, Phone, Clock, Sparkles, Send } from "lucide-react";
import { cn } from "@/lib/utils";
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
  "w-full rounded-xl border border-[#E8DFC8] bg-[#FAF8F5] px-4 py-3.5 text-sm text-[#2B231D] outline-none transition-all placeholder:text-[#8C7A6B]/60 focus:border-[#C48D46] focus:bg-white focus:ring-2 focus:ring-[#C48D46]/20 font-medium";

function Field({
  label,
  error,
  children,
  className,
  htmlFor,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
  className?: string | undefined;
  htmlFor: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#5C5046]"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs font-semibold text-rose-600">{error}</p>}
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
    <section id="booking" className="relative w-full overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-t border-[#E8DFC8]">
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-[#DCD4FD]/30 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-10 h-[500px] w-[500px] rounded-full bg-[#FCE0D4]/40 blur-[130px]"
      />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16 items-start">
          
          {/* Left Column: Contact Details */}
          <div id="contact" className="scroll-mt-32">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4">
              <Sparkles size={13} className="text-[#C48D46]" />
              <span>Booking & Inquiries</span>
            </div>

            <h2 className="font-display text-3xl font-normal leading-tight text-[#2B231D] sm:text-4xl lg:text-[2.75rem]">
              Let&rsquo;s Create <span className="font-serif italic text-[#C48D46]">Your Look.</span>
            </h2>

            <p className="mt-4 text-base text-[#5C5046] font-medium leading-relaxed max-w-lg">
              Send an appointment request and our master stylists will confirm your date and time within 24 hours.
            </p>

            {/* Studio Info Cards */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 rounded-[20px] bg-white p-5 border border-[#E8DFC8] shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all hover:border-[#C48D46]/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#BA1296]/10 text-[#BA1296]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#8C7A6B]">Direct Phone</p>
                  <a
                    href={CONTACT.phoneHref}
                    className="mt-0.5 block font-bold text-[#2B231D] hover:text-[#C48D46] transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-[20px] bg-white p-5 border border-[#E8DFC8] shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all hover:border-[#C48D46]/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#BA1296]/10 text-[#BA1296]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#8C7A6B]">Studio Email</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-0.5 block font-bold text-[#2B231D] hover:text-[#C48D46] transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-[20px] bg-white p-5 border border-[#E8DFC8] shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all hover:border-[#C48D46]/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#BA1296]/10 text-[#BA1296]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#8C7A6B]">Studio Location</p>
                  <p className="mt-0.5 font-bold text-[#2B231D]">{CONTACT.city}</p>
                </div>
              </div>

              <div className="rounded-[20px] bg-white p-6 border border-[#E8DFC8] shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#BA1296]/10 text-[#BA1296]">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2B231D]">Studio Hours</p>
                    <p className="text-xs text-[#8C7A6B]">Appointments & Walk-ins</p>
                  </div>
                </div>
                <ul className="space-y-2 text-xs">
                  {CONTACT.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between items-center border-b border-[#E8DFC8]/50 pb-2 last:border-0 last:pb-0 text-[#2B231D] font-medium"
                    >
                      <span className="font-semibold">{h.day}</span>
                      <span className="text-[#8C7A6B]">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form Card */}
          <div className="rounded-[28px] border border-[#E8DFC8] bg-white p-7 sm:p-10 shadow-xl relative">
            {sent ? (
              <div className="flex min-h-[440px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#16857B] text-white shadow-lg">
                  <Check size={28} />
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold text-[#2B231D]">
                  Request Received!
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#5C5046] font-medium">
                  Thank you — our team will contact you within 24 hours to confirm your appointment details.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-8 rounded-full bg-[#C48D46]/10 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#C48D46] hover:bg-[#C48D46] hover:text-white transition-all"
                >
                  Submit Another Request
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
                  label="Additional Notes / Style Request"
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
                    placeholder="Tell us about the hair braiding style you have in mind…"
                  />
                </Field>

                <div className="sm:col-span-2 mt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#C48D46] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#b07d3b] hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send size={16} />
                    <span>Submit Appointment Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}