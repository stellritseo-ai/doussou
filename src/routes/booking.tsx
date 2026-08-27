import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useId } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CONTACT } from "@/components/site/data";
import {
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Scissors,
  Users,
  Gift,
  Upload,
  Check,
  ChevronDown,
  Info,
  DollarSign,
  Heart,
  Smartphone,
  Send,
  Sparkle,
  Star,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

const PAGE_TITLE = "Book Your Appointment | Doussou Quality Braiding – Glen Burnie, MD";
const PAGE_DESCRIPTION =
  "Schedule your professional hair braiding appointment at Doussou Quality Braiding. Book online for knotless braids, cornrows, locs, and more. Serving Glen Burnie, MD.";

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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "20:30",
      },
    ],
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.doussouqualitybraiding.com/booking",
        inLanguage: "en-US",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "HairSalonReservation",
        name: "Hair Braiding & Protective Styling Appointment",
      },
    },
  },
];

const SERVICES_LIST = [
  "Knotless Braids",
  "Box Braids",
  "Feed-In Cornrows",
  "Senegalese Twists",
  "Boho Braids",
  "Stitch Braids",
  "Kids Braiding",
  "Faux Locs",
  "Starter Locs",
  "Microlocs",
  "Locs Retwist / Maintenance",
  "Extension Services (Sew-In, Wigs)",
  "Natural Hair Styling",
  "Wash & Treatments",
  "Special Occasion Updos",
  "Deluxe Hair Package",
  "Consultation Only",
  "Other (Please Specify)",
];

const ADDONS_LIST = [
  { id: "wash", name: "Hair Wash & Deep Condition", price: "+$25 - $35" },
  { id: "oil", name: "Scalp Oil Treatment", price: "+$15" },
  { id: "spray", name: "Braid Spray & Shine", price: "+$10" },
  { id: "beads", name: "Beads, Cuffs & Accessories", price: "+$10 - $30" },
  { id: "color", name: "Color Accents", price: "+$20 - $40" },
  { id: "jewelry", name: "Hair Jewelry", price: "+$10 - $25" },
  { id: "edge", name: "Edge Control & Finishing", price: "+$5 - $10" },
];

const FAQS = [
  {
    q: "How long does braiding take?",
    a: "Depending on the style, size, and length, braiding can take 1–8 hours. We provide estimated completion times during booking and consultation.",
  },
  {
    q: "What hair is used?",
    a: "We use premium synthetic fibers and human hair blends suited specifically to your style to ensure lightweight wear, no scalp irritation, and long-lasting results.",
  },
  {
    q: "Do you provide hair?",
    a: "Yes! Standard braiding hair extensions are included in our pricing. Specialty colors or human hair additions can be discussed during your consultation.",
  },
  {
    q: "Is a deposit required?",
    a: "A non-refundable deposit of $25–$50 may be required for appointments over 3 hours. This deposit goes directly toward your final service total.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We ask for at least 24 hours' notice for cancellations or rescheduling. Late cancellations may result in forfeiture of your deposit.",
  },
  {
    q: "Can I bring my own hair?",
    a: "Yes, you are welcome to bring your own specialized hair extensions. Please let us know in advance during booking.",
  },
  {
    q: "Do you braid all hair types?",
    a: "Yes! We specialize in all hair textures—including natural, relaxed, transitioned, and fine hair—with tension-free protective techniques.",
  },
  {
    q: "Do you offer children's services?",
    a: "Yes, we specialize in gentle, patient kids braiding for children. An adult must accompany children under 12 years old.",
  },
  {
    q: "What if I arrive late?",
    a: "Please notify us immediately if you are running late. Arrivals more than 15 minutes late may require reducing style complexity or rescheduling.",
  },
  {
    q: "Do you offer appointments on Sundays?",
    a: "Sunday appointments are available by special request. Please contact us directly at (301) 523-8593 to arrange Sunday availability.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "We accept Cash, Credit/Debit cards (Visa, MasterCard, Amex), and digital payments including Zelle, CashApp, and Venmo.",
  },
  {
    q: "Can I book for a group or bridal party?",
    a: "Yes! We offer group reservations, wedding bridal party bookings, and private studio rentals with customized packages.",
  },
];

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "book hair braiding Glen Burnie MD, appointment Doussou Quality Braiding, schedule knotless braids Baltimore, African hair salon booking Maryland",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schema),
      },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  const formId = useId();

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    contactMethod: "Phone",
    service: "Knotless Braids",
    braidSize: "Medium",
    length: "Mid-Back",
    hairType: "Natural",
    stylePreference: "",
    preferredDate: "",
    preferredTime: "10:00 AM",
    altDate: "",
    altTime: "02:00 PM",
    notes: "",
    allergies: "",
    referral: "Google Search",
    stylistPreference: "Any Available",
    comfortNeeds: [] as string[],
    specialRequests: "",
    agreeDeposit: false,
    agreeCancel: false,
    agreeLate: false,
    agreeHair: false,
    agreeKids: false,
    agreePhoto: "agree",
  });

  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleAddonToggle = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleComfortToggle = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      comfortNeeds: prev.comfortNeeds.includes(item)
        ? prev.comfortNeeds.filter((c) => c !== item)
        : [...prev.comfortNeeds, item],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              <span className="text-[#2B231D] font-bold">Book Appointment</span>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-5 shadow-xs">
                <Calendar size={13} className="text-[#C48D46]" />
                <span>Instant Scheduling &amp; Consultation</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-normal leading-[1.12] tracking-tight text-[#2B231D]">
                Ready to Transform{" "}
                <span className="font-serif italic text-[#C48D46]">Your Look?</span>
              </h1>

              <p className="mt-5 text-lg sm:text-xl font-serif italic text-[#2B231D] leading-relaxed max-w-2xl mx-auto">
                Schedule Your Braiding Appointment with Our Skilled Stylists.
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#5C5046] font-medium leading-relaxed max-w-3xl mx-auto">
                Make your look unique, unparalleled, and unprecedented with a hairstyle that brings
                out all the natural assets you have. Whether it's tension-free knotless braids, sleek
                cornrows, or customized loc styling, we are ready to craft your signature style.
              </p>
            </div>

            {/* Quick Booking Channels Grid */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              <a
                href="#booking-form"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs transition-all hover:border-[#C48D46] hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C48D46]/15 text-[#C48D46]">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#2B231D]">
                    Online Booking
                  </h2>
                  <p className="text-[11px] text-[#8C7A6B]">24/7 Instant Booking</p>
                </div>
              </a>

              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs transition-all hover:border-[#BA1296] hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#BA1296]/15 text-[#BA1296]">
                  <Phone size={20} />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#2B231D]">
                    Phone Call
                  </h2>
                  <p className="text-[11px] text-[#8C7A6B]">{CONTACT.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs transition-all hover:border-[#16857B] hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#16857B]/15 text-[#16857B]">
                  <Mail size={20} />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#2B231D]">
                    Email Request
                  </h2>
                  <p className="text-[11px] text-[#8C7A6B]">Reply &lt; 24 Hours</p>
                </div>
              </a>

              <a
                href={CONTACT.socials.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs transition-all hover:border-[#2B231D] hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2B231D]/10 text-[#2B231D]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#2B231D]">
                    Studio Walk-In
                  </h2>
                  <p className="text-[11px] text-[#8C7A6B]">Glen Burnie, MD</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* COMPREHENSIVE ONLINE BOOKING FORM */}
        {/* ========================================================================= */}
        <section
          id="booking-form"
          className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-[#E8DFC8]"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#BA1296]">
                Reserve Your Appointment
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2B231D] mt-1">
                Online Booking Form
              </h2>
              <p className="mt-2 text-sm text-[#5C5046]">
                Please complete the details below to request your date and customized hair braiding
                style.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-[32px] bg-[#FAF8F5] border-2 border-[#16857B]/30 p-10 text-center shadow-lg">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#16857B]/15 text-[#16857B] mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display text-3xl font-bold text-[#2B231D]">
                  Appointment Request Received!
                </h3>
                <p className="mt-3 text-base text-[#5C5046] max-w-md mx-auto">
                  Thank you, <strong>{formData.firstName || "valued client"}</strong>. We have
                  received your request for <strong>{formData.service}</strong> on{" "}
                  <strong>{formData.preferredDate || "your preferred date"}</strong>.
                </p>
                <p className="mt-2 text-sm text-[#8C7A6B]">
                  Our master braider will review your details and send a confirmation via{" "}
                  <strong>{formData.contactMethod}</strong> within 24 hours.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="rounded-full bg-[#C48D46] px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#A87432]"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href={CONTACT.phoneHref}
                    className="rounded-full bg-white border border-[#E8DFC8] px-6 py-2.5 text-xs font-bold text-[#2B231D] hover:bg-[#FAF8F5]"
                  >
                    Call Studio: {CONTACT.phone}
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-10 rounded-[32px] bg-[#FAF8F5] p-6 sm:p-10 border border-[#E8DFC8] shadow-sm"
              >
                {/* 1. PERSONAL INFORMATION */}
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-[#BA1296] border-b border-[#E8DFC8] pb-3 mb-6 flex items-center gap-2">
                    <Users size={18} />
                    <span>1. Personal Information</span>
                  </h3>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-[#2B231D] mb-1.5">
                        First Name <span className="text-[#BA1296]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amara"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
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
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
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
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-[#E8DFC8] bg-white px-4 py-3 text-xs text-[#2B231D] outline-none focus:border-[#C48D46] focus:ring-2 focus:ring-[#C48D46]/20 font-medium"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-[#2B231D] mb-2">
                        Preferred Contact Method:
                      </label>
                      <div className="flex flex-wrap gap-4 text-xs font-medium text-[#2B231D]">
                        {["Phone", "Email", "Text"].map((method) => (
                          <label key={method} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="contactMethod"
                              value={method}
                              checked={formData.contactMethod === method}
                              onChange={(e) =>
                                setFormData({ ...formData, contactMethod: e.target.value })
                              }
                              className="accent-[#C48D46]"
                            />
                            <span>{method}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. APPOINTMENT & STYLE DETAILS */}
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-[#BA1296] border-b border-[#E8DFC8] pb-3 mb-6 flex items-center gap-2">
                    <Scissors size={18} />
                    <span>2. Appointment &amp; Style Details</span>
                  </h3>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-[#2B231D] mb-1.5">
                        Select Service <span className="text-[#BA1296]">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-[#E8DFC8] bg-white px-4 py-3 text-xs text-[#2B231D] outline-none focus:border-[#C48D46] font-medium"
                      >
                        {SERVICES_LIST.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2B231D] mb-2">
                        Braid Size:
                      </label>
                      <div className="flex flex-wrap gap-3 text-xs font-medium">
                        {["Small", "Medium", "Large", "Custom"].map((sz) => (
                          <label key={sz} className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name="braidSize"
                              value={sz}
                              checked={formData.braidSize === sz}
                              onChange={(e) =>
                                setFormData({ ...formData, braidSize: e.target.value })
                              }
                              className="accent-[#C48D46]"
                            />
                            <span>{sz}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2B231D] mb-2">
                        Length Preference:
                      </label>
                      <div className="flex flex-wrap gap-3 text-xs font-medium">
                        {["Shoulder", "Mid-Back", "Waist-Length", "Custom"].map((len) => (
                          <label key={len} className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name="length"
                              value={len}
                              checked={formData.length === len}
                              onChange={(e) =>
                                setFormData({ ...formData, length: e.target.value })
                              }
                              className="accent-[#C48D46]"
                            />
                            <span>{len}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-[#2B231D] mb-2">
                        Current Hair Type:
                      </label>
                      <div className="flex flex-wrap gap-4 text-xs font-medium">
                        {["Natural", "Relaxed", "Transitioning", "Other"].map((ht) => (
                          <label key={ht} className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name="hairType"
                              value={ht}
                              checked={formData.hairType === ht}
                              onChange={(e) =>
                                setFormData({ ...formData, hairType: e.target.value })
                              }
                              className="accent-[#C48D46]"
                            />
                            <span>{ht}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-[#2B231D] mb-1.5">
                        Style Preference &amp; Details
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Describe your desired look (parting pattern, color accents, thickness, curly ends, etc.)..."
                        value={formData.stylePreference}
                        onChange={(e) =>
                          setFormData({ ...formData, stylePreference: e.target.value })
                        }
                        className="w-full rounded-xl border border-[#E8DFC8] bg-white px-4 py-3 text-xs text-[#2B231D] outline-none focus:border-[#C48D46] font-medium"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. DATE & TIME SELECTION */}
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-[#BA1296] border-b border-[#E8DFC8] pb-3 mb-6 flex items-center gap-2">
                    <Clock size={18} />
                    <span>3. Date &amp; Time Preferences</span>
                  </h3>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-[#2B231D] mb-1.5">
                        Preferred Date <span className="text-[#BA1296]">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDate: e.target.value })
                        }
                        className="w-full rounded-xl border border-[#E8DFC8] bg-white px-4 py-3 text-xs text-[#2B231D] outline-none focus:border-[#C48D46] font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2B231D] mb-1.5">
                        Preferred Time <span className="text-[#BA1296]">*</span>
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredTime: e.target.value })
                        }
                        className="w-full rounded-xl border border-[#E8DFC8] bg-white px-4 py-3 text-xs text-[#2B231D] outline-none focus:border-[#C48D46] font-medium"
                      >
                        <option value="09:30 AM">09:30 AM (Opening)</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="02:30 PM">02:30 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:30 PM">05:30 PM (Evening)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2B231D] mb-1.5">
                        Alternative Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={formData.altDate}
                        onChange={(e) => setFormData({ ...formData, altDate: e.target.value })}
                        className="w-full rounded-xl border border-[#E8DFC8] bg-white px-4 py-3 text-xs text-[#2B231D] outline-none focus:border-[#C48D46] font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2B231D] mb-1.5">
                        Alternative Time (Optional)
                      </label>
                      <select
                        value={formData.altTime}
                        onChange={(e) => setFormData({ ...formData, altTime: e.target.value })}
                        className="w-full rounded-xl border border-[#E8DFC8] bg-white px-4 py-3 text-xs text-[#2B231D] outline-none focus:border-[#C48D46] font-medium"
                      >
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2 rounded-2xl bg-white p-4 border border-[#E8DFC8] flex items-center justify-between text-xs">
                      <div>
                        <p className="font-bold text-[#2B231D]">Studio Business Hours:</p>
                        <p className="text-[#5C5046]">
                          Monday – Saturday: 9:30 AM – 8:30 PM • Sunday: By Appointment Only
                        </p>
                      </div>
                      <span className="rounded-full bg-[#16857B]/10 text-[#16857B] px-3 py-1 font-bold text-[11px]">
                        Open Mon–Sat
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4. ADD-ON SERVICES */}
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-[#BA1296] border-b border-[#E8DFC8] pb-3 mb-6 flex items-center gap-2">
                    <Sparkles size={18} />
                    <span>4. Add-On Services (Optional)</span>
                  </h3>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {ADDONS_LIST.map((addon) => {
                      const isSelected = selectedAddons.includes(addon.id);
                      return (
                        <label
                          key={addon.id}
                          className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                            isSelected
                              ? "bg-white border-[#C48D46] shadow-xs"
                              : "bg-white/60 border-[#E8DFC8] hover:bg-white"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => handleAddonToggle(addon.id)}
                              className="accent-[#C48D46] h-4 w-4 rounded"
                            />
                            <span className="text-xs font-semibold text-[#2B231D]">
                              {addon.name}
                            </span>
                          </div>
                          <span className="text-xs font-bold text-[#BA1296]">{addon.price}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* 5. APPOINTMENT PREFERENCES & COMFORT */}
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-[#BA1296] border-b border-[#E8DFC8] pb-3 mb-6 flex items-center gap-2">
                    <Heart size={18} />
                    <span>5. Stylist &amp; Comfort Preferences</span>
                  </h3>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-[#2B231D] mb-2">
                        Stylist Preference:
                      </label>
                      <div className="space-y-2 text-xs font-medium">
                        {["Any Available", "Doussou (Owner)", "Specific Stylist"].map((st) => (
                          <label key={st} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="stylistPreference"
                              value={st}
                              checked={formData.stylistPreference === st}
                              onChange={(e) =>
                                setFormData({ ...formData, stylistPreference: e.target.value })
                              }
                              className="accent-[#C48D46]"
                            />
                            <span>{st}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2B231D] mb-2">
                        Comfort Needs:
                      </label>
                      <div className="space-y-2 text-xs font-medium">
                        {[
                          "Extra Cushion for Chair",
                          "Neck Support",
                          "Pillow for Back",
                          "Quiet Appointment",
                        ].map((c) => (
                          <label key={c} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.comfortNeeds.includes(c)}
                              onChange={() => handleComfortToggle(c)}
                              className="accent-[#C48D46]"
                            />
                            <span>{c}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-[#2B231D] mb-1.5">
                        Allergies, Sensitivities &amp; Special Requests
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sensitive scalp, allergy to certain oils, synthetic fiber sensitivity..."
                        value={formData.allergies}
                        onChange={(e) =>
                          setFormData({ ...formData, allergies: e.target.value })
                        }
                        className="w-full rounded-xl border border-[#E8DFC8] bg-white px-4 py-3 text-xs text-[#2B231D] outline-none focus:border-[#C48D46] font-medium"
                      />
                    </div>
                  </div>
                </div>

                {/* 6. TERMS & CONDITIONS POLICIES */}
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-[#BA1296] border-b border-[#E8DFC8] pb-3 mb-6 flex items-center gap-2">
                    <ShieldCheck size={18} />
                    <span>6. Terms &amp; Studio Agreements</span>
                  </h3>

                  <div className="space-y-3 text-xs text-[#5C5046]">
                    <label className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E8DFC8] cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.agreeDeposit}
                        onChange={(e) =>
                          setFormData({ ...formData, agreeDeposit: e.target.checked })
                        }
                        className="accent-[#C48D46] mt-0.5"
                      />
                      <span>
                        <strong>Deposit Policy:</strong> A non-refundable deposit of $25–$50 may be
                        required for bookings over 3 hours. This is applied directly to your final
                        bill.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E8DFC8] cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.agreeCancel}
                        onChange={(e) =>
                          setFormData({ ...formData, agreeCancel: e.target.checked })
                        }
                        className="accent-[#C48D46] mt-0.5"
                      />
                      <span>
                        <strong>Cancellation Policy:</strong> 24-hour advance notice is required
                        for cancellations or changes.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E8DFC8] cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.agreeLate}
                        onChange={(e) =>
                          setFormData({ ...formData, agreeLate: e.target.checked })
                        }
                        className="accent-[#C48D46] mt-0.5"
                      />
                      <span>
                        <strong>Late Arrival:</strong> Please arrive on time. Late arrivals may
                        result in reduced service time or rescheduling.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E8DFC8] cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.agreeHair}
                        onChange={(e) =>
                          setFormData({ ...formData, agreeHair: e.target.checked })
                        }
                        className="accent-[#C48D46] mt-0.5"
                      />
                      <span>
                        <strong>Hair &amp; Supplies:</strong> Standard extensions are included in
                        the price unless otherwise noted.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E8DFC8] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreeKids}
                        onChange={(e) =>
                          setFormData({ ...formData, agreeKids: e.target.checked })
                        }
                        className="accent-[#C48D46] mt-0.5"
                      />
                      <span>
                        <strong>Children Policy:</strong> Children under 12 must be accompanied by
                        an adult during services.
                      </span>
                    </label>

                    <div className="p-3 rounded-xl bg-white border border-[#E8DFC8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span>
                        <strong>Photo Release:</strong> I consent to styled hair photos for salon
                        portfolio/promotional use.
                      </span>
                      <div className="flex gap-4 font-bold text-[#2B231D]">
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="agreePhoto"
                            value="agree"
                            checked={formData.agreePhoto === "agree"}
                            onChange={(e) =>
                              setFormData({ ...formData, agreePhoto: e.target.value })
                            }
                            className="accent-[#C48D46]"
                          />
                          <span>I Agree</span>
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="agreePhoto"
                            value="decline"
                            checked={formData.agreePhoto === "decline"}
                            onChange={(e) =>
                              setFormData({ ...formData, agreePhoto: e.target.value })
                            }
                            className="accent-[#C48D46]"
                          />
                          <span>Decline</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SUBMIT BUTTONS */}
                <div className="pt-6 border-t border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C48D46] px-10 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#A87432] hover:scale-105 active:scale-95"
                  >
                    <Send size={16} />
                    <span>Submit Appointment Request</span>
                  </button>

                  <a
                    href={CONTACT.phoneHref}
                    className="text-xs font-bold text-[#BA1296] hover:underline flex items-center gap-1.5"
                  >
                    <Phone size={14} />
                    <span>Prefer to book by phone? Call (301) 523-8593</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ESTIMATED PRICING GUIDE ACCORDION */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-3">
                <DollarSign size={13} className="text-[#C48D46]" />
                <span>Transparent Rates</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#2B231D]">
                Estimated <span className="font-serif italic text-[#C48D46]">Pricing Guide</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#5C5046] font-medium">
                Standard pricing breakdown by category, size, length, and estimated appointment
                duration.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Category 1: Braids & Twists */}
              <div className="rounded-[28px] bg-white border border-[#E8DFC8] p-6 shadow-xs">
                <h3 className="font-display text-2xl font-bold text-[#2B231D] mb-4 flex items-center gap-2">
                  <Scissors size={20} className="text-[#BA1296]" />
                  <span>Braids &amp; Twists</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#E8DFC8] text-[#8C7A6B] uppercase text-[10px] font-bold">
                        <th className="py-2.5">Service</th>
                        <th className="py-2.5">Size / Length</th>
                        <th className="py-2.5">Price Range</th>
                        <th className="py-2.5 text-right">Est. Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8DFC8]/60 font-medium text-[#2B231D]">
                      <tr>
                        <td className="py-2.5 font-bold">Knotless Braids</td>
                        <td className="py-2.5">Small • Waist</td>
                        <td className="py-2.5 text-[#BA1296] font-bold">$350 – $400</td>
                        <td className="py-2.5 text-right text-[#5C5046]">7–8 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Knotless Braids</td>
                        <td className="py-2.5">Medium • Mid-Back</td>
                        <td className="py-2.5 text-[#BA1296] font-bold">$240 – $280</td>
                        <td className="py-2.5 text-right text-[#5C5046]">5–6 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Box Braids</td>
                        <td className="py-2.5">Medium • Mid-Back</td>
                        <td className="py-2.5 text-[#BA1296] font-bold">$240 – $280</td>
                        <td className="py-2.5 text-right text-[#5C5046]">5–6 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Feed-In Cornrows</td>
                        <td className="py-2.5">Simple • Precision</td>
                        <td className="py-2.5 text-[#BA1296] font-bold">$80 – $120</td>
                        <td className="py-2.5 text-right text-[#5C5046]">1.5–2.5 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Senegalese Twists</td>
                        <td className="py-2.5">Medium • Mid-Back</td>
                        <td className="py-2.5 text-[#BA1296] font-bold">$200 – $250</td>
                        <td className="py-2.5 text-right text-[#5C5046]">4–5 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Boho Braids</td>
                        <td className="py-2.5">Knotless • Mid-Back</td>
                        <td className="py-2.5 text-[#BA1296] font-bold">$340 – $400</td>
                        <td className="py-2.5 text-right text-[#5C5046]">6–7 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Stitch Braids</td>
                        <td className="py-2.5">Medium • Sculpted</td>
                        <td className="py-2.5 text-[#BA1296] font-bold">$120 – $180</td>
                        <td className="py-2.5 text-right text-[#5C5046]">2.5–3.5 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Kids Braiding</td>
                        <td className="py-2.5">Simple • Gentle</td>
                        <td className="py-2.5 text-[#BA1296] font-bold">$50 – $80</td>
                        <td className="py-2.5 text-right text-[#5C5046]">1–2 hrs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Category 2: Locs & Extensions */}
              <div className="rounded-[28px] bg-white border border-[#E8DFC8] p-6 shadow-xs">
                <h3 className="font-display text-2xl font-bold text-[#2B231D] mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-[#C48D46]" />
                  <span>Locs &amp; Extensions</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#E8DFC8] text-[#8C7A6B] uppercase text-[10px] font-bold">
                        <th className="py-2.5">Service</th>
                        <th className="py-2.5">Type / Length</th>
                        <th className="py-2.5">Price Range</th>
                        <th className="py-2.5 text-right">Est. Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8DFC8]/60 font-medium text-[#2B231D]">
                      <tr>
                        <td className="py-2.5 font-bold">Faux Locs</td>
                        <td className="py-2.5">Standard • Mid-Back</td>
                        <td className="py-2.5 text-[#C48D46] font-bold">$280 – $360</td>
                        <td className="py-2.5 text-right text-[#5C5046]">6–8 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Distressed Locs</td>
                        <td className="py-2.5">Waist-Length</td>
                        <td className="py-2.5 text-[#C48D46] font-bold">$360 – $450</td>
                        <td className="py-2.5 text-right text-[#5C5046]">8–10 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Starter Locs</td>
                        <td className="py-2.5">Comb Coils / Twists</td>
                        <td className="py-2.5 text-[#C48D46] font-bold">$150 – $250</td>
                        <td className="py-2.5 text-right text-[#5C5046]">2–4 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Microlocs Install</td>
                        <td className="py-2.5">Precision Grid</td>
                        <td className="py-2.5 text-[#C48D46] font-bold">$400 – $700</td>
                        <td className="py-2.5 text-right text-[#5C5046]">8–12 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Loc Retwist</td>
                        <td className="py-2.5">Maintenance &amp; Scalp</td>
                        <td className="py-2.5 text-[#C48D46] font-bold">$70 – $120</td>
                        <td className="py-2.5 text-right text-[#5C5046]">1–2 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Sew-In Weave</td>
                        <td className="py-2.5">Leave-Out Install</td>
                        <td className="py-2.5 text-[#C48D46] font-bold">$150 – $300</td>
                        <td className="py-2.5 text-right text-[#5C5046]">2–4 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Quick Weave</td>
                        <td className="py-2.5">Protective Cap</td>
                        <td className="py-2.5 text-[#C48D46] font-bold">$120 – $200</td>
                        <td className="py-2.5 text-right text-[#5C5046]">2–3 hrs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Category 3: Natural Hair & Special Occasions */}
              <div className="rounded-[28px] bg-white border border-[#E8DFC8] p-6 shadow-xs">
                <h3 className="font-display text-2xl font-bold text-[#2B231D] mb-4 flex items-center gap-2">
                  <Heart size={20} className="text-[#16857B]" />
                  <span>Natural Hair &amp; Special Occasions</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#E8DFC8] text-[#8C7A6B] uppercase text-[10px] font-bold">
                        <th className="py-2.5">Service</th>
                        <th className="py-2.5">Price Range</th>
                        <th className="py-2.5 text-right">Est. Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8DFC8]/60 font-medium text-[#2B231D]">
                      <tr>
                        <td className="py-2.5 font-bold">Twist-Out / Coily Set</td>
                        <td className="py-2.5 text-[#16857B] font-bold">$60 – $100</td>
                        <td className="py-2.5 text-right text-[#5C5046]">1.5–2.5 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Silk Press &amp; Trim</td>
                        <td className="py-2.5 text-[#16857B] font-bold">$90 – $150</td>
                        <td className="py-2.5 text-right text-[#5C5046]">2–3 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Wash &amp; Deep Condition</td>
                        <td className="py-2.5 text-[#16857B] font-bold">$35 – $50</td>
                        <td className="py-2.5 text-right text-[#5C5046]">45–60 min</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Scalp Renewal Treatment</td>
                        <td className="py-2.5 text-[#16857B] font-bold">$45 – $65</td>
                        <td className="py-2.5 text-right text-[#5C5046]">45–60 min</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Bridal Braided Updo</td>
                        <td className="py-2.5 text-[#16857B] font-bold">$150 – $300</td>
                        <td className="py-2.5 text-right text-[#5C5046]">2–4 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Prom &amp; Event Updo</td>
                        <td className="py-2.5 text-[#16857B] font-bold">$100 – $200</td>
                        <td className="py-2.5 text-right text-[#5C5046]">2–3 hrs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Category 4: Deluxe Hair Packages */}
              <div className="rounded-[28px] bg-white border border-[#E8DFC8] p-6 shadow-xs">
                <h3 className="font-display text-2xl font-bold text-[#2B231D] mb-4 flex items-center gap-2">
                  <Star size={20} className="text-[#BA1296]" fill="currentColor" />
                  <span>Deluxe Hair Packages</span>
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8DFC8]">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-bold text-[#2B231D]">The Signature Package</p>
                      <span className="font-bold text-[#BA1296]">$260 – $340</span>
                    </div>
                    <p className="text-[11px] text-[#5C5046]">
                      Wash + Deep Condition + Medium Knotless Braids + Edge Finish (5–7 hrs)
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8DFC8]">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-bold text-[#2B231D]">The Bridal Package</p>
                      <span className="font-bold text-[#BA1296]">$250 – $400</span>
                    </div>
                    <p className="text-[11px] text-[#5C5046]">
                      Consultation + Trial Run + Wash + Bridal Updo + Hair Jewelry (3–5 hrs)
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8DFC8]">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-bold text-[#2B231D]">The Loc Launch Package</p>
                      <span className="font-bold text-[#BA1296]">$250 – $380</span>
                    </div>
                    <p className="text-[11px] text-[#5C5046]">
                      Starter Locs + Deep Condition + Loc Products + 1 Free Retwist (4–6 hrs)
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8DFC8]">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-bold text-[#2B231D]">The Protective Style Package</p>
                      <span className="font-bold text-[#BA1296]">$300 – $450</span>
                    </div>
                    <p className="text-[11px] text-[#5C5046]">
                      Wash + Scalp Treatment + Full Braid Installation + Braid Spray (5–8 hrs)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BOOKING PROCESS & WHAT TO EXPECT */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#BA1296]">
                Seamless Experience
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2B231D] mt-1">
                Booking Process &amp; What to Expect
              </h2>
            </div>

            {/* 6-Step Booking Roadmap */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-16">
              {[
                { step: "01", title: "Browse Services", desc: "Explore pricing & styles" },
                { step: "02", title: "Select Style", desc: "Choose length, size & add-ons" },
                { step: "03", title: "Check Availability", desc: "Pick date & time" },
                { step: "04", title: "Submit Request", desc: "Send your details" },
                { step: "05", title: "Get Confirmation", desc: "Receive email & text confirmation" },
                { step: "06", title: "Arrive & Relax", desc: "Let us craft your look" },
              ].map((s) => (
                <div
                  key={s.step}
                  className="rounded-2xl bg-[#FAF8F5] p-5 border border-[#E8DFC8] flex flex-col justify-between"
                >
                  <span className="text-xs font-bold text-[#C48D46]">{s.step}.</span>
                  <div className="mt-4">
                    <p className="font-display text-base font-bold text-[#2B231D]">{s.title}</p>
                    <p className="text-xs text-[#8C7A6B] mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 3-Phase Experience Roadmap */}
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-[28px] bg-[#FAF8F5] p-7 border border-[#E8DFC8]">
                <div className="inline-block rounded-full bg-[#BA1296]/10 px-3 py-1 text-xs font-bold text-[#BA1296] mb-4">
                  Before Appointment
                </div>
                <h3 className="font-display text-xl font-bold text-[#2B231D] mb-3">Preparation</h3>
                <ul className="space-y-2 text-xs text-[#5C5046]">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#16857B] shrink-0 mt-0.5" />
                    <span>Arrive with clean, detangled hair (or book our wash service)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#16857B] shrink-0 mt-0.5" />
                    <span>Bring reference photos of your desired look</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#16857B] shrink-0 mt-0.5" />
                    <span>Confirm your appointment time 24h prior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#16857B] shrink-0 mt-0.5" />
                    <span>Arrive 5–10 minutes early</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-[28px] bg-[#FAF8F5] p-7 border border-[#E8DFC8]">
                <div className="inline-block rounded-full bg-[#C48D46]/10 px-3 py-1 text-xs font-bold text-[#C48D46] mb-4">
                  During Appointment
                </div>
                <h3 className="font-display text-xl font-bold text-[#2B231D] mb-3">In Studio</h3>
                <ul className="space-y-2 text-xs text-[#5C5046]">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#16857B] shrink-0 mt-0.5" />
                    <span>Welcome &amp; personal scalp consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#16857B] shrink-0 mt-0.5" />
                    <span>Customization of parting and tension check</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#16857B] shrink-0 mt-0.5" />
                    <span>Comfortable chairs, TV entertainment, &amp; Wi-Fi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#16857B] shrink-0 mt-0.5" />
                    <span>Final styling, mousse finish &amp; scalp oiling</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-[28px] bg-[#FAF8F5] p-7 border border-[#E8DFC8]">
                <div className="inline-block rounded-full bg-[#16857B]/10 px-3 py-1 text-xs font-bold text-[#16857B] mb-4">
                  After Appointment
                </div>
                <h3 className="font-display text-xl font-bold text-[#2B231D] mb-3">Aftercare</h3>
                <ul className="space-y-2 text-xs text-[#5C5046]">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#16857B] shrink-0 mt-0.5" />
                    <span>Receive personalized aftercare instructions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#16857B] shrink-0 mt-0.5" />
                    <span>Schedule your next touch-up or removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#16857B] shrink-0 mt-0.5" />
                    <span>Share your photos and tag @DoussouQualityBraiding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#16857B] shrink-0 mt-0.5" />
                    <span>Leave a Google review for special client perks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PREPARATION TIPS & AFTERCARE GUIDELINES */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Preparation Tips */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4">
                  <Info size={13} />
                  <span>Before You Book</span>
                </div>
                <h2 className="font-display text-3xl font-bold text-[#2B231D] mb-6">
                  Preparation Tips
                </h2>

                <div className="space-y-3 text-xs sm:text-sm">
                  {[
                    {
                      title: "Hair Preparation",
                      desc: "Arrive with clean, detangled, and completely dry hair. Or add our wash & blow dry service.",
                    },
                    {
                      title: "Reference Photos",
                      desc: "Bring inspiration pictures to help us replicate or customize your dream style.",
                    },
                    {
                      title: "Time Commitment",
                      desc: "Appointments can take 1–8 hours depending on size/length. Please plan your schedule accordingly.",
                    },
                    {
                      title: "Comfort Items",
                      desc: "Feel free to bring headphones, neck pillows, reading material, or light snacks.",
                    },
                    {
                      title: "Payment Types",
                      desc: "Cash, cards, Zelle, Venmo, and CashApp accepted upon service completion.",
                    },
                    {
                      title: "Children",
                      desc: "For kids' appointments, bringing a tablet or favorite toy helps keep them relaxed.",
                    },
                  ].map((tip) => (
                    <div
                      key={tip.title}
                      className="p-3.5 rounded-xl bg-white border border-[#E8DFC8]"
                    >
                      <p className="font-bold text-[#2B231D]">{tip.title}</p>
                      <p className="text-[#5C5046] mt-0.5">{tip.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aftercare Tips */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#16857B]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#16857B] border border-[#16857B]/20 mb-4">
                  <Heart size={13} />
                  <span>Long-Lasting Results</span>
                </div>
                <h2 className="font-display text-3xl font-bold text-[#2B231D] mb-6">
                  Aftercare Tips
                </h2>

                <div className="space-y-3 text-xs sm:text-sm">
                  {[
                    {
                      title: "Nighttime Satin Wrap",
                      desc: "Always wrap your hair with a silk/satin scarf or sleep on a satin pillowcase to prevent frizz.",
                    },
                    {
                      title: "Moisturizing & Scalp Oil",
                      desc: "Apply lightweight braid spray or tea tree/jojoba oil 2–3 times weekly for scalp hydration.",
                    },
                    {
                      title: "Gentle Cleansing",
                      desc: "Wash your scalp gently with diluted shampoo using a applicator bottle without disturbing the braids.",
                    },
                    {
                      title: "Edge Care",
                      desc: "Use gentle edge control without alcohol to keep your baby hairs sleek without buildup.",
                    },
                    {
                      title: "Style Longevity",
                      desc: "With proper maintenance, knotless and box braids last 6–8 weeks comfortably.",
                    },
                    {
                      title: "Safe Removal",
                      desc: "Never rush take-down. Book our professional removal to prevent natural hair breakage.",
                    },
                  ].map((tip) => (
                    <div
                      key={tip.title}
                      className="p-3.5 rounded-xl bg-white border border-[#E8DFC8]"
                    >
                      <p className="font-bold text-[#2B231D]">{tip.title}</p>
                      <p className="text-[#5C5046] mt-0.5">{tip.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* GROUP BOOKINGS & GIFT CARDS */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Group Bookings Card */}
              <div className="rounded-[32px] bg-[#FAF8F5] p-8 border border-[#E8DFC8] flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#BA1296]/10 px-3.5 py-1 text-xs font-bold text-[#BA1296] mb-4">
                    <Users size={14} />
                    <span>Special Events &amp; Parties</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B231D]">
                    Group &amp; Bridal Party Bookings
                  </h3>
                  <p className="mt-3 text-sm text-[#5C5046] leading-relaxed">
                    Planning for a wedding party, prom group, graduation, or family event? We offer
                    custom group reservations with private studio accommodations and group
                    discounts for parties of 3 or more.
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-[#2B231D] font-medium">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-[#C48D46]" />
                      <span>Group discounts for 3+ people</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-[#C48D46]" />
                      <span>Private studio session available upon request</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-[#C48D46]" />
                      <span>Complimentary refreshments for bridal parties</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-[#E8DFC8]">
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#BA1296] hover:underline"
                  >
                    <span>Inquire for Group Booking</span>
                    <ChevronRight size={14} />
                  </a>
                </div>
              </div>

              {/* Gift Cards Card */}
              <div className="rounded-[32px] bg-[#FAF8F5] p-8 border border-[#E8DFC8] flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-3.5 py-1 text-xs font-bold text-[#C48D46] mb-4">
                    <Gift size={14} />
                    <span>The Perfect Gift</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B231D]">
                    Doussou Quality Gift Cards
                  </h3>
                  <p className="mt-3 text-sm text-[#5C5046] leading-relaxed">
                    Treat someone special to the gift of confidence and luxury hair braiding. Our
                    gift cards are redeemable for all styling services and treatments at our Glen
                    Burnie studio.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E8DFC8] text-[#2B231D]">
                      $25
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E8DFC8] text-[#2B231D]">
                      $50
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E8DFC8] text-[#2B231D]">
                      $100
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E8DFC8] text-[#2B231D]">
                      $200
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E8DFC8] text-[#2B231D]">
                      Custom Amount
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#E8DFC8]">
                  <a
                    href={`mailto:${CONTACT.email}?subject=Gift%20Card%20Inquiry`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C48D46] hover:underline"
                  >
                    <span>Purchase Gift Card Online</span>
                    <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#BA1296]">
                Got Questions?
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2B231D] mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="rounded-2xl bg-white border border-[#E8DFC8] overflow-hidden transition-all"
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
        {/* DIRECT STUDIO CONTACT CHANNELS */}
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
                We Look Forward to{" "}
                <span className="font-serif italic text-[#E8C28A] block sm:inline">
                  Creating Your Signature Look
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
                Located at 337 S Hospital Dr, Glen Burnie, MD. Call us directly or submit your
                booking form above to secure your appointment.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#booking-form"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#C48D46] px-8 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#b07d3b] hover:scale-105 active:scale-95"
                >
                  <Calendar size={18} />
                  <span>Book Online Now</span>
                </a>
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
