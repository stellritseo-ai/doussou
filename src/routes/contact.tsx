import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CONTACT } from "@/components/site/data";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
  ChevronRight,
  MessageCircle,
  Instagram,
  Facebook,
  Car,
  Bus,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Users,
  Calendar,
  Globe,
  Upload,
  Check,
  ExternalLink,
  ChevronDown,
  Navigation,
  Accessibility,
  Coffee,
  Tv,
  Wifi,
  Sparkle,
  PhoneCall,
  Volume2,
  Award,
} from "lucide-react";

const PAGE_TITLE = "Contact Us | Doussou Quality Braiding – Glen Burnie, MD";
const PAGE_DESCRIPTION =
  "Get in touch with Doussou Quality Braiding in Glen Burnie, MD. Call (301) 523-8593, email us, or visit our studio. Book your appointment for professional hair braiding today.";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Doussou Quality Braiding",
    description: PAGE_DESCRIPTION,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "337 S Hospital Dr",
      addressLocality: "Glen Burnie",
      addressRegion: "MD",
      postalCode: "21061",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.1557,
      longitude: -76.6214,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "20:30",
      },
    ],
  },
];

const CONTACT_FAQS = [
  {
    q: "How do I book an appointment?",
    a: "You can book online through our Booking page, call us at (301) 523-8593, email doussoukabba@gmail.com, or visit our studio in Glen Burnie.",
  },
  {
    q: "Do you accept walk-ins?",
    a: "Yes, walk-ins are welcome subject to stylist availability. We always recommend calling ahead at (301) 523-8593 to verify current wait times.",
  },
  {
    q: "What is the best time to call?",
    a: "The best time to call is during standard business hours: Monday–Saturday, 9:30 AM – 8:30 PM. If we miss your call during a service, we return voicemails promptly.",
  },
  {
    q: "Do you offer consultations?",
    a: "Yes! We provide style and hair health consultations in-person or over the phone to discuss your desired parting, length, and scalp needs.",
  },
  {
    q: "What if I need to cancel or reschedule?",
    a: "We require at least 24 hours' notice for cancellations. Please call us directly at (301) 523-8593 to reschedule.",
  },
  {
    q: "Do you provide hair for appointments?",
    a: "Yes, standard high-quality braiding hair is included in our service pricing. You are also welcome to bring your own specialized extensions.",
  },
  {
    q: "How long does a typical appointment take?",
    a: "Appointment durations range from 1.5 hours for simple cornrows to 6–8 hours for small waist-length knotless braids. An exact estimate is given at booking.",
  },
  {
    q: "Can I book for a group or bridal party?",
    a: "Yes! We offer group bookings and custom packages for bridal parties, proms, and special events. Contact us directly for tailored group accommodations.",
  },
  {
    q: "Do you do children's hair?",
    a: "Yes, we specialize in gentle, patient kids braiding. Children under 12 must be accompanied by an adult.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Cash, all major Credit/Debit cards, Zelle, CashApp, and Venmo. A small deposit is required for longer appointments.",
  },
  {
    q: "Do you offer gift cards?",
    a: "Yes! Physical and digital gift cards are available for any denomination ($25, $50, $100, $200, or custom amounts).",
  },
  {
    q: "Can I bring a friend or family member?",
    a: "Yes, guests are welcome in our comfortable waiting lounge equipped with seating, Wi-Fi, and TV entertainment.",
  },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "contact Doussou Quality Braiding, Glen Burnie MD hair braiding phone, hair salon directions Glen Burnie, African braiding email Maryland",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schema),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "General Inquiry",
    message: "",
    contactMethod: "Phone",
    bestTime: "Morning",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [callbackState, setCallbackState] = useState({
    name: "",
    phone: "",
    bestTime: "Morning",
    reason: "",
  });
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackSubmitted(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#BA1296] selection:text-white">
      <Header />

      <main className="pt-28 lg:pt-36">
        {/* ========================================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#FAF8F5] pb-14 pt-8 lg:pb-20 lg:pt-12 border-b border-[#E8DFC8]/70">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-20 h-[550px] w-[550px] rounded-full bg-[#DCD4FD]/50 blur-[130px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-20 h-[500px] w-[500px] rounded-full bg-[#FCE0D4]/60 blur-[130px]"
          />

          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C7A6B]"
            >
              <Link to="/" className="transition-colors hover:text-[#C48D46]">
                Home
              </Link>
              <ChevronRight size={13} className="text-[#C48D46]" />
              <span className="text-[#2B231D] font-bold">Contact Us</span>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-5 shadow-xs">
                <MapPin size={13} className="text-[#C48D46]" />
                <span>Glen Burnie, MD • Serving MD, DC &amp; VA</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-normal leading-[1.12] tracking-tight text-[#2B231D]">
                Let's Create{" "}
                <span className="font-serif italic text-[#C48D46]">Your Look</span>
              </h1>

              <p className="mt-5 text-lg sm:text-xl font-serif italic text-[#2B231D] leading-relaxed max-w-2xl mx-auto">
                Have questions? Ready to book? We're here to help.
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#5C5046] font-medium leading-relaxed max-w-2xl mx-auto">
                Reach out to our master braiders and start your journey to beautiful, protective
                styling. Contact us by phone, email, contact form, or visit our studio in Glen
                Burnie, Maryland.
              </p>
            </div>

            {/* Quick Contact Options Grid */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {/* Phone */}
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs transition-all hover:border-[#C48D46] hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C48D46]/15 text-[#C48D46]">
                  <Phone size={20} />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#2B231D]">
                    Call Us
                  </h2>
                  <p className="text-[11px] text-[#8C7A6B]">{CONTACT.phone}</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs transition-all hover:border-[#BA1296] hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#BA1296]/15 text-[#BA1296]">
                  <Mail size={20} />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#2B231D]">
                    Email Us
                  </h2>
                  <p className="text-[11px] text-[#8C7A6B]">{CONTACT.email}</p>
                </div>
              </a>

              {/* Visit */}
              <a
                href="#directions"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs transition-all hover:border-[#16857B] hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#16857B]/15 text-[#16857B]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#2B231D]">
                    Visit Studio
                  </h2>
                  <p className="text-[11px] text-[#8C7A6B]">337 S Hospital Dr</p>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2B231D]/10 text-[#2B231D]">
                  <Clock size={20} />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#2B231D]">
                    Studio Hours
                  </h2>
                  <p className="text-[11px] text-[#8C7A6B]">Mon–Sat: 9:30 AM – 8:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE CONTACT FORM & CALLBACK REQUESTER */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 items-start">
              {/* Left Column: Contact Form */}
              <div className="rounded-[32px] bg-[#FAF8F5] p-6 sm:p-10 border border-[#E8DFC8] shadow-sm">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#BA1296]">
                    Get in Touch
                  </span>
                  <h2 className="font-display text-3xl font-bold text-[#2B231D] mt-1">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-[#5C5046]">
                    Please include as much detail as possible so we can best assist you.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="rounded-2xl bg-white p-8 text-center border-2 border-[#16857B]/30">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#16857B]/15 text-[#16857B] mb-3">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#2B231D]">
                      Message Sent Successfully!
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#5C5046]">
                      Thank you, <strong>{formState.firstName || "valued client"}</strong>. We
                      have received your inquiry regarding <strong>{formState.subject}</strong> and
                      will get back to you via <strong>{formState.contactMethod}</strong> within 24
                      hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 rounded-full bg-[#C48D46] px-6 py-2 text-xs font-bold text-white hover:bg-[#A87432]"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-[#2B231D] mb-1.5">
                          First Name <span className="text-[#BA1296]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Amara"
                          value={formState.firstName}
                          onChange={(e) =>
                            setFormState({ ...formState, firstName: e.target.value })
                          }
                          className="w-full rounded-xl border border-[#E8DFC8] bg-white px-4 py-3 text-xs text-[#2B231D] outline-none focus:border-[#C48D46] focus:ring-2 focus:ring-[#C48D46]/20 font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#2B231D] mb-1.5">
                          Last Name <span className="text-[#BA1296]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Smith"
                          value={formState.lastName}
                          onChange={(e) =>
                            setFormState({ ...formState, lastName: e.target.value })
                          }
                          className="w-full rounded-xl border border-[#E8DFC8] bg-white px-4 py-3 text-xs text-[#2B231D] outline-none focus:border-[#C48D46] focus:ring-2 focus:ring-[#C48D46]/20 font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#2B231D] mb-1.5">
                          Phone Number <span className="text-[#BA1296]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(410) 000-0000"
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({ ...formState, phone: e.target.value })
                          }
                          className="w-full rounded-xl border border-[#E8DFC8] bg-white px-4 py-3 text-xs text-[#2B231D] outline-none focus:border-[#C48D46] focus:ring-2 focus:ring-[#C48D46]/20 font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#2B231D] mb-1.5">
                          Email Address <span className="text-[#BA1296]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          className="w-full rounded-xl border border-[#E8DFC8] bg-white px-4 py-3 text-xs text-[#2B231D] outline-none focus:border-[#C48D46] focus:ring-2 focus:ring-[#C48D46]/20 font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2B231D] mb-1.5">
                        Subject <span className="text-[#BA1296]">*</span>
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) =>
                          setFormState({ ...formState, subject: e.target.value })
                        }
                        className="w-full rounded-xl border border-[#E8DFC8] bg-white px-4 py-3 text-xs text-[#2B231D] outline-none focus:border-[#C48D46] font-medium"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Book Appointment">Book Appointment</option>
                        <option value="Pricing Question">Pricing Question</option>
                        <option value="Group Booking">Group Booking</option>
                        <option value="Bridal/Event Inquiry">Bridal / Event Inquiry</option>
                        <option value="Gift Card Purchase">Gift Card Purchase</option>
                        <option value="Partnership/Media">Partnership / Media</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2B231D] mb-1.5">
                        Your Message <span className="text-[#BA1296]">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about the hairstyle you have in mind, timing preferences, or specific questions..."
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        className="w-full rounded-xl border border-[#E8DFC8] bg-white px-4 py-3 text-xs text-[#2B231D] outline-none focus:border-[#C48D46] font-medium"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 pt-2">
                      <div>
                        <label className="block text-xs font-bold text-[#2B231D] mb-2">
                          Preferred Contact Method:
                        </label>
                        <div className="flex gap-4 text-xs font-medium">
                          {["Phone", "Email", "Text"].map((m) => (
                            <label key={m} className="flex items-center gap-1.5 cursor-pointer">
                              <input
                                type="radio"
                                name="contactMethod"
                                value={m}
                                checked={formState.contactMethod === m}
                                onChange={(e) =>
                                  setFormState({ ...formState, contactMethod: e.target.value })
                                }
                                className="accent-[#C48D46]"
                              />
                              <span>{m}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#2B231D] mb-2">
                          Best Time to Contact:
                        </label>
                        <div className="flex gap-4 text-xs font-medium">
                          {["Morning", "Afternoon", "Evening"].map((t) => (
                            <label key={t} className="flex items-center gap-1.5 cursor-pointer">
                              <input
                                type="radio"
                                name="bestTime"
                                value={t}
                                checked={formState.bestTime === t}
                                onChange={(e) =>
                                  setFormState({ ...formState, bestTime: e.target.value })
                                }
                                className="accent-[#C48D46]"
                              />
                              <span>{t}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2B231D] mb-1.5">
                        Upload Reference Photo (Optional, Max 5MB)
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        className="w-full text-xs text-[#5C5046] file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#C48D46]/10 file:text-[#C48D46] hover:file:bg-[#C48D46]/20 cursor-pointer"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#C48D46] px-9 py-3.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:bg-[#A87432] hover:scale-105"
                      >
                        <Send size={15} />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Column: Callback Requester & Social Links */}
              <div className="space-y-8">
                {/* Request a Callback Widget */}
                <div className="rounded-[32px] bg-[#FAF8F5] p-6 sm:p-8 border border-[#E8DFC8] shadow-sm">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#16857B]/10 px-3 py-1 text-xs font-bold text-[#16857B] mb-3">
                    <PhoneCall size={13} />
                    <span>Quick Callback</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#2B231D]">
                    Request a Callback
                  </h3>
                  <p className="mt-1 text-xs text-[#5C5046]">
                    Leave your number and we'll call you back at your preferred time.
                  </p>

                  {callbackSubmitted ? (
                    <div className="mt-4 rounded-xl bg-white p-4 border border-[#16857B]/40 text-center">
                      <p className="text-xs font-bold text-[#16857B]">
                        Callback request registered! We'll call you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleCallbackSubmit} className="mt-5 space-y-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={callbackState.name}
                        onChange={(e) =>
                          setCallbackState({ ...callbackState, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-[#E8DFC8] bg-white px-3.5 py-2.5 text-xs text-[#2B231D] outline-none focus:border-[#16857B]"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={callbackState.phone}
                        onChange={(e) =>
                          setCallbackState({ ...callbackState, phone: e.target.value })
                        }
                        className="w-full rounded-xl border border-[#E8DFC8] bg-white px-3.5 py-2.5 text-xs text-[#2B231D] outline-none focus:border-[#16857B]"
                      />
                      <div className="flex justify-between text-xs font-medium text-[#2B231D]">
                        {["Morning", "Afternoon", "Evening"].map((t) => (
                          <label key={t} className="flex items-center gap-1 cursor-pointer">
                            <input
                              type="radio"
                              name="callbackTime"
                              value={t}
                              checked={callbackState.bestTime === t}
                              onChange={(e) =>
                                setCallbackState({ ...callbackState, bestTime: e.target.value })
                              }
                              className="accent-[#16857B]"
                            />
                            <span>{t}</span>
                          </label>
                        ))}
                      </div>
                      <input
                        type="text"
                        placeholder="Reason (e.g., Knotless Braids pricing)"
                        value={callbackState.reason}
                        onChange={(e) =>
                          setCallbackState({ ...callbackState, reason: e.target.value })
                        }
                        className="w-full rounded-xl border border-[#E8DFC8] bg-white px-3.5 py-2.5 text-xs text-[#2B231D] outline-none focus:border-[#16857B]"
                      />
                      <button
                        type="submit"
                        className="w-full rounded-xl bg-[#16857B] py-2.5 text-xs font-bold text-white transition-all hover:bg-[#126b63]"
                      >
                        Request Callback
                      </button>
                    </form>
                  )}
                </div>

                {/* Direct Studio Line & Socials */}
                <div className="rounded-[32px] bg-[#FAF8F5] p-6 sm:p-8 border border-[#E8DFC8]">
                  <h3 className="font-display text-xl font-bold text-[#2B231D] mb-4">
                    Connect on Social Media
                  </h3>
                  <div className="space-y-3 text-xs">
                    <a
                      href={CONTACT.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8DFC8] transition-all hover:border-[#BA1296]"
                    >
                      <div className="flex items-center gap-2.5">
                        <Instagram size={16} className="text-[#BA1296]" />
                        <span className="font-bold text-[#2B231D]">@DoussouQualityBraiding</span>
                      </div>
                      <ExternalLink size={14} className="text-[#8C7A6B]" />
                    </a>

                    <a
                      href={CONTACT.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8DFC8] transition-all hover:border-[#C48D46]"
                    >
                      <div className="flex items-center gap-2.5">
                        <Facebook size={16} className="text-[#C48D46]" />
                        <span className="font-bold text-[#2B231D]">/DoussouQualityBraiding</span>
                      </div>
                      <ExternalLink size={14} className="text-[#8C7A6B]" />
                    </a>

                    <a
                      href={CONTACT.socials.google}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8DFC8] transition-all hover:border-[#16857B]"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-bold text-[#16857B] text-sm">G</span>
                        <span className="font-bold text-[#2B231D]">Google Business Profile</span>
                      </div>
                      <ExternalLink size={14} className="text-[#8C7A6B]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* LOCATION, MAP & TURN-BY-TURN DRIVING DIRECTIONS */}
        {/* ========================================================================= */}
        <section
          id="directions"
          className="relative overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-b border-[#E8DFC8]"
        >
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-3">
                <Navigation size={13} className="text-[#C48D46]" />
                <span>Find Your Way</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#2B231D]">
                Location &amp; <span className="font-serif italic text-[#C48D46]">Directions</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#5C5046] font-medium">
                Conveniently located in Glen Burnie, Maryland, right near the Baltimore Washington
                Medical Center with free on-site parking.
              </p>
            </div>

            {/* Address & Interactive Map Card */}
            <div className="rounded-[32px] bg-white border border-[#E8DFC8] p-6 sm:p-8 mb-12 shadow-xs grid gap-8 lg:grid-cols-[1fr_1.2fr] items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#BA1296]">
                  Studio Address
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B231D] mt-1 mb-4">
                  337 S Hospital Dr, Glen Burnie, MD 21061
                </h3>
                <div className="space-y-2 text-xs text-[#5C5046] mb-6">
                  <p>
                    <strong>Landmarks:</strong> Near Baltimore Washington Medical Center (BWMC) &amp;
                    Ritchie Highway.
                  </p>
                  <p>
                    <strong>Parking:</strong> Ample free on-site parking spaces directly in front of
                    the studio.
                  </p>
                  <p>
                    <strong>Accessibility:</strong> Ground floor, handicap accessible entrance &amp;
                    parking spaces.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={CONTACT.socials.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#C48D46] px-6 py-3 text-xs font-bold text-white shadow-sm hover:bg-[#A87432]"
                  >
                    <Navigation size={14} />
                    <span>Open in Google Maps</span>
                  </a>
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E8DFC8] px-5 py-3 text-xs font-bold text-[#2B231D] hover:bg-[#FAF8F5]"
                  >
                    <Phone size={14} />
                    <span>Call for Directions</span>
                  </a>
                </div>
              </div>

              {/* Map Visual / Directions Box */}
              <div className="h-64 sm:h-72 rounded-2xl bg-[#FAF8F5] border border-[#E8DFC8] flex flex-col items-center justify-center p-6 text-center">
                <MapPin size={40} className="text-[#C48D46] mb-3 animate-bounce" />
                <p className="font-display text-xl font-bold text-[#2B231D]">
                  337 S Hospital Dr, Glen Burnie, MD
                </p>
                <p className="text-xs text-[#8C7A6B] mt-1 max-w-xs">
                  Click below for instant GPS navigation directly to our front door.
                </p>
                <a
                  href={CONTACT.socials.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 rounded-full bg-[#2B231D] text-white px-5 py-2 text-xs font-bold hover:bg-[#C48D46] transition-colors"
                >
                  Start GPS Navigation
                </a>
              </div>
            </div>

            {/* Turn-by-Turn Driving Routes */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* From Baltimore */}
              <div className="rounded-[24px] bg-white p-6 border border-[#E8DFC8] shadow-xs">
                <div className="flex items-center gap-2 font-bold text-sm text-[#BA1296] mb-4">
                  <Car size={16} />
                  <span>From Baltimore (15 mins)</span>
                </div>
                <ol className="space-y-2 text-xs text-[#5C5046] list-decimal list-inside">
                  <li>Head south on I-95 S</li>
                  <li>Take exit 43A for MD-100 E toward Glen Burnie</li>
                  <li>Continue on MD-100 E</li>
                  <li>Turn right onto MD-2 S / Ritchie Hwy</li>
                  <li>Turn left onto S Hospital Dr</li>
                  <li>Destination is on your right</li>
                </ol>
              </div>

              {/* From Annapolis */}
              <div className="rounded-[24px] bg-white p-6 border border-[#E8DFC8] shadow-xs">
                <div className="flex items-center gap-2 font-bold text-sm text-[#C48D46] mb-4">
                  <Car size={16} />
                  <span>From Annapolis (20 mins)</span>
                </div>
                <ol className="space-y-2 text-xs text-[#5C5046] list-decimal list-inside">
                  <li>Head north on MD-2 N / Ritchie Hwy</li>
                  <li>Continue on MD-2 N past Pasadena</li>
                  <li>Turn right onto S Hospital Dr</li>
                  <li>Destination is on your right</li>
                </ol>
              </div>

              {/* From Washington DC */}
              <div className="rounded-[24px] bg-white p-6 border border-[#E8DFC8] shadow-xs">
                <div className="flex items-center gap-2 font-bold text-sm text-[#16857B] mb-4">
                  <Car size={16} />
                  <span>From Washington, DC (40 mins)</span>
                </div>
                <ol className="space-y-2 text-xs text-[#5C5046] list-decimal list-inside">
                  <li>Head northeast on I-295 N (BW Parkway)</li>
                  <li>Merge onto MD-100 E toward Glen Burnie</li>
                  <li>Turn right onto MD-2 S / Ritchie Hwy</li>
                  <li>Turn left onto S Hospital Dr</li>
                  <li>Destination is on your right</li>
                </ol>
              </div>
            </div>

            {/* Transit Information */}
            <div className="mt-8 rounded-2xl bg-white p-5 border border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <Bus size={20} className="text-[#BA1296]" />
                <div>
                  <p className="font-bold text-[#2B231D]">Public Transit &amp; Ride Share:</p>
                  <p className="text-[#5C5046]">
                    MTA Bus Routes serve Ritchie Hwy / S Hospital Dr. Light Rail: Cromwell Station (2
                    miles). Uber/Lyft pickup directly outside.
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-[#FAF8F5] px-3 py-1 font-bold text-[#2B231D] border border-[#E8DFC8]">
                Transit Friendly
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* HOURS, HOLIDAYS & RESPONSE TIME SLA */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-3">
              {/* Standard Hours */}
              <div className="rounded-[28px] bg-[#FAF8F5] p-7 border border-[#E8DFC8]">
                <div className="flex items-center gap-2 font-bold text-sm text-[#BA1296] mb-4">
                  <Clock size={18} />
                  <span>Operating Hours</span>
                </div>
                <div className="space-y-2.5 text-xs text-[#2B231D] font-medium divide-y divide-[#E8DFC8]/60">
                  <div className="flex justify-between pt-1">
                    <span>Monday</span>
                    <span className="font-bold">9:30 AM – 8:30 PM</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span>Tuesday</span>
                    <span className="font-bold">9:30 AM – 8:30 PM</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span>Wednesday</span>
                    <span className="font-bold">9:30 AM – 8:30 PM</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span>Thursday</span>
                    <span className="font-bold">9:30 AM – 8:30 PM</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span>Friday</span>
                    <span className="font-bold">9:30 AM – 8:30 PM</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span>Saturday</span>
                    <span className="font-bold">9:30 AM – 8:30 PM</span>
                  </div>
                  <div className="flex justify-between pt-2 text-[#BA1296]">
                    <span>Sunday</span>
                    <span className="font-bold">By Appointment Only</span>
                  </div>
                </div>
              </div>

              {/* Holiday Hours */}
              <div className="rounded-[28px] bg-[#FAF8F5] p-7 border border-[#E8DFC8]">
                <div className="flex items-center gap-2 font-bold text-sm text-[#C48D46] mb-4">
                  <Calendar size={18} />
                  <span>Holiday Hours (2026)</span>
                </div>
                <div className="space-y-2 text-xs text-[#5C5046]">
                  <div className="flex justify-between">
                    <span>New Year's Day</span>
                    <span className="font-bold text-[#BA1296]">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Memorial Day</span>
                    <span className="font-bold text-[#BA1296]">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Independence Day</span>
                    <span className="font-bold text-[#BA1296]">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Labor Day</span>
                    <span className="font-bold text-[#BA1296]">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thanksgiving Day</span>
                    <span className="font-bold text-[#BA1296]">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Christmas Eve</span>
                    <span className="font-bold text-[#16857B]">Closes at 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Christmas Day</span>
                    <span className="font-bold text-[#BA1296]">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New Year's Eve</span>
                    <span className="font-bold text-[#16857B]">Closes at 5:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Response Times SLA */}
              <div className="rounded-[28px] bg-[#FAF8F5] p-7 border border-[#E8DFC8]">
                <div className="flex items-center gap-2 font-bold text-sm text-[#16857B] mb-4">
                  <ShieldCheck size={18} />
                  <span>Response Time SLAs</span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between p-2 rounded-lg bg-white border border-[#E8DFC8]">
                    <span className="font-bold text-[#2B231D]">Phone Calls</span>
                    <span className="text-[#16857B] font-bold">Immediate</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-white border border-[#E8DFC8]">
                    <span className="font-bold text-[#2B231D]">Text Messages</span>
                    <span className="text-[#16857B] font-bold">1–2 Hours</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-white border border-[#E8DFC8]">
                    <span className="font-bold text-[#2B231D]">Email Inquiries</span>
                    <span className="text-[#16857B] font-bold">&lt; 24 Hours</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-white border border-[#E8DFC8]">
                    <span className="font-bold text-[#2B231D]">Website Form</span>
                    <span className="text-[#16857B] font-bold">&lt; 24 Hours</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-white border border-[#E8DFC8]">
                    <span className="font-bold text-[#2B231D]">Social Media DMs</span>
                    <span className="text-[#16857B] font-bold">2–4 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* STUDIO AMENITIES, ACCESSIBILITY & LANGUAGES */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#BA1296]">
                Client Comfort &amp; Hospitality
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2B231D] mt-1">
                Studio Amenities &amp; Accessibility
              </h2>
            </div>

            {/* Amenities Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              {[
                { icon: Coffee, title: "Refreshments", desc: "Bottled water & snacks" },
                { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Complimentary fast internet" },
                { icon: Tv, title: "Entertainment", desc: "TV & movies for long visits" },
                { icon: Sparkles, title: "Sanitary Studio", desc: "Sterilized equipment" },
                { icon: Accessibility, title: "Wheelchair Access", desc: "Ramp & accessible entry" },
                { icon: Globe, title: "Languages Spoken", desc: "English, French, Bambara" },
                { icon: Volume2, title: "Quiet Appointments", desc: "Sensory-friendly options" },
                { icon: Award, title: "Licensed Salon", desc: "Maryland Cosmetology Certified" },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white border border-[#E8DFC8] flex items-center gap-3.5 shadow-2xs"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C48D46]/10 text-[#C48D46]">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2B231D]">{item.title}</p>
                      <p className="text-[11px] text-[#8C7A6B]">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Communities Served & Phone Tree */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-[28px] bg-white p-7 border border-[#E8DFC8]">
                <h3 className="font-display text-xl font-bold text-[#2B231D] mb-3">
                  Proudly Serving Nearby Communities
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#5C5046]">
                  <div>• Glen Burnie (Home Studio)</div>
                  <div>• Baltimore (10–15 mins)</div>
                  <div>• Annapolis (20 mins)</div>
                  <div>• Columbia (15 mins)</div>
                  <div>• Severn &amp; Hanover (10 mins)</div>
                  <div>• Laurel &amp; Bowie (20 mins)</div>
                  <div>• Ellicott City (20 mins)</div>
                  <div>• Washington, DC (40 mins)</div>
                </div>
              </div>

              <div className="rounded-[28px] bg-white p-7 border border-[#E8DFC8]">
                <h3 className="font-display text-xl font-bold text-[#2B231D] mb-3">
                  Studio Phone Menu Options
                </h3>
                <div className="space-y-1.5 text-xs text-[#5C5046]">
                  <p><strong>Press 1:</strong> Book a New Appointment</p>
                  <p><strong>Press 2:</strong> Check Existing Appointment Status</p>
                  <p><strong>Press 3:</strong> Pricing &amp; Service Inquiries</p>
                  <p><strong>Press 4:</strong> Group &amp; Bridal Party Bookings</p>
                  <p><strong>Press 5:</strong> Reschedule / Cancel Appointment</p>
                  <p><strong>Press 0:</strong> Speak with Receptionist / Owner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#BA1296]">
                Frequently Asked Questions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2B231D] mt-1">
                Contact &amp; Studio FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {CONTACT_FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="rounded-2xl bg-[#FAF8F5] border border-[#E8DFC8] overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-[#2B231D]"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-[#C48D46] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-[#5C5046] leading-relaxed border-t border-[#E8DFC8]/60 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* NEWSLETTER SIGN-UP & PRESS CONTACT */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#FAF8F5] py-16 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="rounded-[32px] bg-white p-8 sm:p-12 border border-[#E8DFC8] grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#BA1296]">
                  Stay In The Loop
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B231D] mt-1">
                  Subscribe to Our VIP Newsletter
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5C5046]">
                  Receive exclusive styling promotions, new braid styles announcements, and hair
                  care tips directly to your inbox.
                </p>

                {newsletterSubmitted ? (
                  <p className="mt-4 text-xs font-bold text-[#16857B]">
                    ✓ Thank you for subscribing! Check your email for special welcome perks.
                  </p>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="mt-4 flex gap-2 max-w-md">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="flex-1 rounded-full border border-[#E8DFC8] bg-[#FAF8F5] px-4 py-2.5 text-xs text-[#2B231D] outline-none focus:border-[#C48D46]"
                    />
                    <button
                      type="submit"
                      className="rounded-full bg-[#C48D46] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#A87432]"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>

              <div className="space-y-3 text-xs text-[#5C5046] border-t lg:border-t-0 lg:border-l border-[#E8DFC8] pt-6 lg:pt-0 lg:pl-10">
                <p className="font-bold text-sm text-[#2B231D]">Press, Media &amp; Partnerships</p>
                <p>
                  For media interviews, influencer collaborations, event sponsorships, and bridal
                  partnerships, contact our salon founder:
                </p>
                <p>
                  <strong>Contact:</strong> Doussou (Owner &amp; Master Braider)
                  <br />
                  <strong>Email:</strong> {CONTACT.email}
                  <br />
                  <strong>Phone:</strong> {CONTACT.phone}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* DIRECT BOOKING CALL TO ACTION BANNER */}
        {/* ========================================================================= */}
        <section className="relative isolate overflow-hidden bg-plum-deep py-20 lg:py-24 text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 top-0 h-[450px] w-[450px] rounded-full bg-[#BA1296]/30 blur-[130px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C48D46]/30 blur-[130px]"
          />

          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#E8C28A] border border-white/20 mb-6">
                <Sparkles size={13} className="text-[#E8C28A]" />
                <span>Visit Doussou Quality Braiding</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-normal leading-[1.15] text-white">
                We Can't Wait to{" "}
                <span className="font-serif italic text-[#E8C28A] block sm:inline">
                  Welcome You to Our Studio
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
                Ready to transform your hair? Book your appointment online or call us directly at
                (301) 523-8593.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#C48D46] px-8 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#b07d3b] hover:scale-105 active:scale-95"
                >
                  <Calendar size={18} />
                  <span>Book Appointment Online</span>
                </Link>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-4 text-sm font-bold text-white border border-white/30 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95"
                >
                  <Phone size={16} />
                  <span>Call: {CONTACT.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
