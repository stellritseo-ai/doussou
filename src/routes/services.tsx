import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BookingForm } from "@/components/site/BookingForm";
import { CONTACT } from "@/components/site/data";
import {
  Sparkles,
  Scissors,
  CheckCircle2,
  Calendar,
  Phone,
  ChevronRight,
  Sparkle,
  Clock,
  DollarSign,
  Heart,
  ShieldCheck,
  Star,
  Layers,
  Crown,
  Sparkles as SparklesIcon,
  Smile,
  Check,
  Info,
  ArrowRight,
  Tag,
  Gift,
} from "lucide-react";

import knotlessImg from "@/assets/style-knotless.jpg";
import boxbraidsImg from "@/assets/style-boxbraids.jpg";
import cornrowsImg from "@/assets/style-cornrows.jpg";
import locsImg from "@/assets/style-locs.jpg";
import naturalImg from "@/assets/style-natural.jpg";
import treatmentImg from "@/assets/style-treatment.jpg";
import kidsImg from "@/assets/style-kids.jpg";
import bridalImg from "@/assets/style-bridal.jpg";
import bookingImg from "@/assets/booking-cta.jpg";

const PAGE_TITLE = "Our Services | Hair Braiding & Protective Styles in Glen Burnie, MD";
const PAGE_DESCRIPTION =
  "Explore our full range of professional hair braiding services at Doussou Quality Braiding. From Knotless Braids to Locs, discover pricing and book your appointment today.";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Doussou Quality Braiding Services",
    description: PAGE_DESCRIPTION,
    provider: {
      "@type": "HairSalon",
      name: "Doussou Quality Braiding",
      telephone: CONTACT.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "337 S Hospital Dr",
        addressLocality: "Glen Burnie",
        addressRegion: "MD",
        postalCode: "21061",
        addressCountry: "US",
      },
    },
    areaServed: "Glen Burnie, Maryland",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hair Braiding & Protective Styles Catalog",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Knotless Braids" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Box Braids" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Feed-In Cornrows" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Senegalese Twists" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Boho Braids" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stitch Braids" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kids Braiding" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Faux Locs" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Starter Locs" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Microlocs" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Extension Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Natural Hair Styling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wash & Treatments" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Special Occasion Updos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deluxe Hair Packages" } },
      ],
    },
  },
];

const CATEGORIES = [
  { id: "all", label: "All Services", icon: Sparkles },
  { id: "braids-twists", label: "Braids & Twists", icon: Scissors },
  { id: "locs-extensions", label: "Locs & Extensions", icon: Layers },
  { id: "natural-treatments", label: "Natural & Treatments", icon: Heart },
  { id: "special-occasions", label: "Special Occasions & Packages", icon: Crown },
  { id: "addons-policies", label: "Add-Ons & Policies", icon: Info },
];

const WHY_BOOK_WITH_US = [
  {
    feature: "Master Braiders",
    benefit: "Years of expertise in African hair braiding and protective styles",
    icon: Scissors,
  },
  {
    feature: "Hair Health Focus",
    benefit: "Tension-free techniques and scalp-first care",
    icon: Heart,
  },
  {
    feature: "Clean Studio",
    benefit: "Relaxing, hygienic environment designed for comfort",
    icon: ShieldCheck,
  },
  {
    feature: "5.0 ★ Rating",
    benefit: "Trusted by 3,000+ happy clients across Maryland",
    icon: Star,
  },
  {
    feature: "Customizable",
    benefit: "Styles tailored to your preference, texture, and lifestyle",
    icon: Crown,
  },
  {
    feature: "All Ages Welcome",
    benefit: "Gentle, patient services for adults and children",
    icon: Smile,
  },
];

const UNIVERSAL_ADDONS = [
  { name: "Hair Wash & Deep Condition", price: "+$25 – $35", detail: "Thorough cleanse and restorative moisture mask" },
  { name: "Scalp Oil Treatment", price: "+$15", detail: "Nourishing botanical oils massaged into the scalp" },
  { name: "Braid Spray & Shine", price: "+$10", detail: "Long-lasting moisture and high-gloss sheen finish" },
  { name: "Beads, Cuffs & Accessories", price: "+$10 – $30", detail: "Gold/silver filigree cuffs, wooden beads, cowrie shells" },
  { name: "Color Accents", price: "+$20 – $40", detail: "Blended highlights, ombré tips, or custom color pops" },
  { name: "Hair Jewelry", price: "+$10 – $25", detail: "Bridal rings, metallic wraps, and decorative wire" },
  { name: "Edge Control & Finishing", price: "+$5 – $10", detail: "Sleek, firm-hold edge styling without white residue" },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "Hair braiding services Glen Burnie MD, Knotless braids prices Maryland, Box braids pricing, Feed-in cornrows Glen Burnie, Locs installation Glen Burnie, Senegalese twists, Boho braids, Kids braiding MD",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schema),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    if (id === "all") {
      window.scrollTo({ top: 380, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const offset = 140;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#BA1296] selection:text-white">
      <Header />

      <main className="pt-28 lg:pt-36">
        {/* ========================================================================= */}
        {/* HERO / HEADER SECTION */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#FAF8F5] pb-14 pt-8 lg:pb-20 lg:pt-12 border-b border-[#E8DFC8]/70">
          {/* Ambient Lighting Orbs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-20 h-[550px] w-[550px] rounded-full bg-[#DCD4FD]/50 blur-[130px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-20 h-[500px] w-[500px] rounded-full bg-[#FCE0D4]/60 blur-[130px]"
          />

          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C7A6B]"
            >
              <Link to="/" className="transition-colors hover:text-[#C48D46]">
                Home
              </Link>
              <ChevronRight size={13} className="text-[#C48D46]" />
              <span className="text-[#2B231D] font-bold">Services</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-5 shadow-xs">
                <Sparkles size={13} className="text-[#C48D46]" />
                <span>Premier Hair Braiding &amp; Protective Styles</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-normal leading-[1.12] tracking-tight text-[#2B231D]">
                Signature Hair{" "}
                <span className="font-serif italic text-[#C48D46]">Braiding Services</span>
              </h1>

              <p className="mt-5 text-lg sm:text-xl font-serif italic text-[#2B231D] leading-relaxed">
                From timeless classics to modern statement styles, discover a protective look
                tailored for you. Each service is crafted with precision, comfort, and your hair
                health in mind.
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#5C5046] font-medium leading-relaxed max-w-2xl mx-auto">
                At Doussou Quality Braiding, we offer a comprehensive range of professional hair
                services designed to celebrate your natural beauty. Whether you're looking for a chic
                everyday style or a stunning look for a special occasion, our master braiders are
                here to bring your vision to life. Browse our services below, select your perfect
                style, and book with confidence.
              </p>

              {/* Quick Trust Highlights */}
              <div className="mt-8 flex flex-wrap justify-center items-center gap-3 text-xs font-bold text-[#2B231D]">
                <span className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 border border-[#E8DFC8] shadow-2xs">
                  <CheckCircle2 size={15} className="text-[#C48D46]" />
                  Tension-Free Parting
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 border border-[#E8DFC8] shadow-2xs">
                  <CheckCircle2 size={15} className="text-[#C48D46]" />
                  Hair Extensions Included
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 border border-[#E8DFC8] shadow-2xs">
                  <CheckCircle2 size={15} className="text-[#C48D46]" />
                  5.0 ★ Rated Master Braiders
                </span>
              </div>
            </div>

            {/* Category Navigation Pills */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
              {CATEGORIES.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => scrollToCategory(cat.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-[#C48D46] text-white shadow-md scale-105"
                        : "bg-white text-[#2B231D] border border-[#E8DFC8] hover:border-[#C48D46] hover:bg-[#FAF8F5]"
                    }`}
                  >
                    <IconComponent size={15} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CATEGORY 1: BRAIDS & TWISTS */}
        {/* ========================================================================= */}
        <section
          id="braids-twists"
          className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-[#E8DFC8]"
        >
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="mb-14 border-b border-[#E8DFC8] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#BA1296]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#BA1296] border border-[#BA1296]/20 mb-3">
                  <Scissors size={13} className="text-[#BA1296]" />
                  <span>Category 01</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#2B231D]">
                  Braids &amp; <span className="font-serif italic text-[#C48D46]">Twists</span>
                </h2>
              </div>
              <p className="text-sm font-medium text-[#5C5046] max-w-md">
                Precision parted, tension-free protective styles installed with gentle, scalp-first
                care for long-lasting beauty and natural hair growth.
              </p>
            </div>

            <div className="space-y-16 lg:space-y-24">
              {/* ---------------- 1. Knotless Braids ---------------- */}
              <div className="rounded-[32px] bg-[#FAF8F5] border border-[#E8DFC8] p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block rounded-full bg-[#BA1296] px-3.5 py-1 text-xs font-bold text-white uppercase tracking-wider">
                        Signature Style
                      </span>
                      <span className="text-xs font-bold text-[#C48D46] uppercase tracking-wider">
                        Featherlight &amp; Tension-Free
                      </span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#2B231D]">
                      Knotless Braids
                    </h3>

                    <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#5C5046] font-normal">
                      Our signature knotless braids are the ultimate in protective styling. Using a
                      unique feed-in technique that eliminates the bulky knot at the root, these
                      braids lie flat against your scalp for a natural, seamless look. They are
                      featherlight, tension-free, and allow for effortless movement. Perfect for any
                      occasion, knotless braids are gentle on your edges and promote healthy hair
                      growth.
                    </p>

                    {/* What's Included */}
                    <div className="mt-6 rounded-2xl bg-white p-5 border border-[#E8DFC8]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#2B231D] mb-3 flex items-center gap-1.5">
                        <Sparkle size={13} className="text-[#C48D46]" />
                        What's Included:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#5C5046] font-medium">
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#16857B] shrink-0" />
                          Initial scalp consultation
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#16857B] shrink-0" />
                          Hair wash &amp; conditioning (add-on)
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#16857B] shrink-0" />
                          Custom braid size (small, medium, large)
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#16857B] shrink-0" />
                          Choice of length (shoulder, mid-back, waist)
                        </li>
                        <li className="flex items-center gap-2 sm:col-span-2">
                          <Check size={14} className="text-[#16857B] shrink-0" />
                          Edge control and polished finishing
                        </li>
                      </ul>
                    </div>

                    {/* Add-ons Pill List */}
                    <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold">
                      <span className="rounded-full bg-white px-3 py-1.5 border border-[#E8DFC8] text-[#2B231D]">
                        Wash &amp; Condition: +$25
                      </span>
                      <span className="rounded-full bg-white px-3 py-1.5 border border-[#E8DFC8] text-[#2B231D]">
                        Scalp Oil Treatment: +$15
                      </span>
                      <span className="rounded-full bg-white px-3 py-1.5 border border-[#E8DFC8] text-[#2B231D]">
                        Beads &amp; Accessories: +$10-$25
                      </span>
                      <span className="rounded-full bg-white px-3 py-1.5 border border-[#E8DFC8] text-[#2B231D]">
                        Boho Curls: +$30
                      </span>
                    </div>

                    <div className="mt-8">
                      <a
                        href="#booking"
                        className="inline-flex items-center gap-2 rounded-full bg-[#C48D46] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#A87432] transition-all hover:scale-105"
                      >
                        <Calendar size={16} />
                        <span>Book Knotless Braids Now</span>
                      </a>
                    </div>
                  </div>

                  {/* Pricing Table Card */}
                  <div className="rounded-2xl bg-white border border-[#E8DFC8] p-5 sm:p-6 shadow-sm">
                    <div className="flex items-center justify-between border-b border-[#E8DFC8] pb-3 mb-4">
                      <h4 className="font-display text-xl font-bold text-[#2B231D]">
                        Knotless Pricing Table
                      </h4>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C7A6B]">
                        Size × Length
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead>
                          <tr className="border-b border-[#E8DFC8] text-[#8C7A6B] uppercase font-bold text-[10px] tracking-wider">
                            <th className="pb-2">Size</th>
                            <th className="pb-2">Length</th>
                            <th className="pb-2">Price</th>
                            <th className="pb-2">Duration</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E8DFC8]/50 font-medium text-[#2B231D]">
                          <tr>
                            <td className="py-2.5 font-bold text-[#BA1296]">Small</td>
                            <td className="py-2.5">Shoulder</td>
                            <td className="py-2.5 font-bold">$250 – $300</td>
                            <td className="py-2.5 text-[#5C5046]">5-6 hrs</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 font-bold text-[#BA1296]">Small</td>
                            <td className="py-2.5">Mid-Back</td>
                            <td className="py-2.5 font-bold">$300 – $350</td>
                            <td className="py-2.5 text-[#5C5046]">6-7 hrs</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 font-bold text-[#BA1296]">Small</td>
                            <td className="py-2.5">Waist-Length</td>
                            <td className="py-2.5 font-bold">$350 – $400</td>
                            <td className="py-2.5 text-[#5C5046]">7-8 hrs</td>
                          </tr>
                          <tr className="bg-[#FAF8F5]">
                            <td className="py-2.5 font-bold text-[#C48D46]">Medium</td>
                            <td className="py-2.5">Shoulder</td>
                            <td className="py-2.5 font-bold">$200 – $240</td>
                            <td className="py-2.5 text-[#5C5046]">4-5 hrs</td>
                          </tr>
                          <tr className="bg-[#FAF8F5]">
                            <td className="py-2.5 font-bold text-[#C48D46]">Medium</td>
                            <td className="py-2.5">Mid-Back</td>
                            <td className="py-2.5 font-bold">$240 – $280</td>
                            <td className="py-2.5 text-[#5C5046]">5-6 hrs</td>
                          </tr>
                          <tr className="bg-[#FAF8F5]">
                            <td className="py-2.5 font-bold text-[#C48D46]">Medium</td>
                            <td className="py-2.5">Waist-Length</td>
                            <td className="py-2.5 font-bold">$280 – $320</td>
                            <td className="py-2.5 text-[#5C5046]">6-7 hrs</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 font-bold text-[#5C5046]">Large</td>
                            <td className="py-2.5">Shoulder</td>
                            <td className="py-2.5 font-bold">$160 – $200</td>
                            <td className="py-2.5 text-[#5C5046]">3-4 hrs</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 font-bold text-[#5C5046]">Large</td>
                            <td className="py-2.5">Mid-Back</td>
                            <td className="py-2.5 font-bold">$200 – $240</td>
                            <td className="py-2.5 text-[#5C5046]">4-5 hrs</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 font-bold text-[#5C5046]">Large</td>
                            <td className="py-2.5">Waist-Length</td>
                            <td className="py-2.5 font-bold">$240 – $280</td>
                            <td className="py-2.5 text-[#5C5046]">5-6 hrs</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------------- 2. Box Braids ---------------- */}
              <div className="rounded-[32px] bg-white border border-[#E8DFC8] p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block rounded-full bg-[#C48D46] px-3.5 py-1 text-xs font-bold text-white uppercase tracking-wider">
                        Timeless Classic
                      </span>
                      <span className="text-xs font-bold text-[#8C7A6B] uppercase tracking-wider">
                        Classic. Versatile. Timeless.
                      </span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#2B231D]">
                      Box Braids
                    </h3>

                    <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#5C5046] font-normal">
                      Box braids are a beloved classic for a reason. Whether you prefer them jumbo
                      and bold or small and intricate, these versatile braids offer endless styling
                      possibilities. At Doussou Quality Braiding, we take pride in clean, precise
                      parting and even tension throughout. Our box braids are durable, long-lasting,
                      and designed to suit your unique style and personality.
                    </p>

                    {/* What's Included */}
                    <div className="mt-6 rounded-2xl bg-[#FAF8F5] p-5 border border-[#E8DFC8]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#2B231D] mb-3 flex items-center gap-1.5">
                        <Sparkle size={13} className="text-[#C48D46]" />
                        What's Included:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#5C5046] font-medium">
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#16857B] shrink-0" />
                          Hair consultation &amp; style selection
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#16857B] shrink-0" />
                          Custom parting pattern (Square, Triangle)
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#16857B] shrink-0" />
                          Choice of thickness &amp; length
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#16857B] shrink-0" />
                          Neat finishing &amp; edge control
                        </li>
                        <li className="flex items-center gap-2 sm:col-span-2">
                          <Check size={14} className="text-[#16857B] shrink-0" />
                          Comprehensive aftercare tips
                        </li>
                      </ul>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold">
                      <span className="rounded-full bg-[#FAF8F5] px-3 py-1.5 border border-[#E8DFC8] text-[#2B231D]">
                        Wash &amp; Condition: +$25
                      </span>
                      <span className="rounded-full bg-[#FAF8F5] px-3 py-1.5 border border-[#E8DFC8] text-[#2B231D]">
                        Braid Spray &amp; Shine: +$10
                      </span>
                      <span className="rounded-full bg-[#FAF8F5] px-3 py-1.5 border border-[#E8DFC8] text-[#2B231D]">
                        Beads, Cuffs &amp; Accessories: +$10-$30
                      </span>
                      <span className="rounded-full bg-[#FAF8F5] px-3 py-1.5 border border-[#E8DFC8] text-[#2B231D]">
                        Updo Styling: +$25-$50
                      </span>
                    </div>

                    <div className="mt-8">
                      <a
                        href="#booking"
                        className="inline-flex items-center gap-2 rounded-full bg-[#BA1296] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#960d77] transition-all hover:scale-105"
                      >
                        <Calendar size={16} />
                        <span>Book Box Braids Now</span>
                      </a>
                    </div>
                  </div>

                  {/* Pricing Table Card */}
                  <div className="rounded-2xl bg-[#FAF8F5] border border-[#E8DFC8] p-5 sm:p-6 shadow-sm">
                    <div className="flex items-center justify-between border-b border-[#E8DFC8] pb-3 mb-4">
                      <h4 className="font-display text-xl font-bold text-[#2B231D]">
                        Box Braids Pricing Table
                      </h4>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C7A6B]">
                        Size × Length
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead>
                          <tr className="border-b border-[#E8DFC8] text-[#8C7A6B] uppercase font-bold text-[10px] tracking-wider">
                            <th className="pb-2">Size</th>
                            <th className="pb-2">Length</th>
                            <th className="pb-2">Price</th>
                            <th className="pb-2">Duration</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E8DFC8]/50 font-medium text-[#2B231D]">
                          <tr>
                            <td className="py-2.5 font-bold text-[#BA1296]">Small (Micro)</td>
                            <td className="py-2.5">Shoulder</td>
                            <td className="py-2.5 font-bold">$280 – $340</td>
                            <td className="py-2.5 text-[#5C5046]">6-8 hrs</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 font-bold text-[#BA1296]">Small (Micro)</td>
                            <td className="py-2.5">Mid-Back</td>
                            <td className="py-2.5 font-bold">$340 – $400</td>
                            <td className="py-2.5 text-[#5C5046]">8-10 hrs</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 font-bold text-[#BA1296]">Small (Micro)</td>
                            <td className="py-2.5">Waist-Length</td>
                            <td className="py-2.5 font-bold">$400 – $480</td>
                            <td className="py-2.5 text-[#5C5046]">10-12 hrs</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="py-2.5 font-bold text-[#C48D46]">Medium</td>
                            <td className="py-2.5">Shoulder</td>
                            <td className="py-2.5 font-bold">$200 – $240</td>
                            <td className="py-2.5 text-[#5C5046]">4-5 hrs</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="py-2.5 font-bold text-[#C48D46]">Medium</td>
                            <td className="py-2.5">Mid-Back</td>
                            <td className="py-2.5 font-bold">$240 – $280</td>
                            <td className="py-2.5 text-[#5C5046]">5-6 hrs</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="py-2.5 font-bold text-[#C48D46]">Medium</td>
                            <td className="py-2.5">Waist-Length</td>
                            <td className="py-2.5 font-bold">$280 – $340</td>
                            <td className="py-2.5 text-[#5C5046]">6-7 hrs</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 font-bold text-[#5C5046]">Large (Jumbo)</td>
                            <td className="py-2.5">Shoulder</td>
                            <td className="py-2.5 font-bold">$140 – $180</td>
                            <td className="py-2.5 text-[#5C5046]">3-4 hrs</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 font-bold text-[#5C5046]">Large (Jumbo)</td>
                            <td className="py-2.5">Mid-Back</td>
                            <td className="py-2.5 font-bold">$180 – $220</td>
                            <td className="py-2.5 text-[#5C5046]">4-5 hrs</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 font-bold text-[#5C5046]">Large (Jumbo)</td>
                            <td className="py-2.5">Waist-Length</td>
                            <td className="py-2.5 font-bold">$220 – $260</td>
                            <td className="py-2.5 text-[#5C5046]">5-6 hrs</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------------- 3. Feed-In Cornrows & 4. Senegalese Twists (2-Col Grid) ---------------- */}
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Feed-In Cornrows */}
                <div className="rounded-[28px] bg-[#FAF8F5] border border-[#E8DFC8] p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#C48D46] uppercase tracking-wider">
                      Precision Patterns &amp; Clean Lines
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B231D] mt-1">
                      Feed-In Cornrows
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-[#5C5046] leading-relaxed font-normal">
                      Cornrows are the epitome of precision and cultural heritage. Our feed-in
                      technique creates a seamless look by gradually adding hair extensions for
                      crisp sculpted parts and sharp lines that last for weeks.
                    </p>

                    <div className="mt-4 rounded-xl bg-white p-4 border border-[#E8DFC8] text-xs">
                      <p className="font-bold text-[#2B231D] mb-1">What's Included:</p>
                      <p className="text-[#5C5046]">
                        Consultation, custom pattern (straight, curved, geometric), feed-in extensions,
                        crisp parting &amp; edge finishing.
                      </p>
                    </div>

                    {/* Pricing Table */}
                    <div className="mt-5 overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-[#E8DFC8] text-[#8C7A6B] uppercase font-bold text-[10px]">
                            <th className="pb-1.5">Style Complexity</th>
                            <th className="pb-1.5">Price Range</th>
                            <th className="pb-1.5">Duration</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E8DFC8]/50 font-medium">
                          <tr>
                            <td className="py-2 font-semibold text-[#2B231D]">Simple (Straight-back)</td>
                            <td className="py-2 font-bold text-[#C48D46]">$80 – $120</td>
                            <td className="py-2 text-[#5C5046]">1.5-2.5 hrs</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-semibold text-[#2B231D]">Medium (Zig-zag, Curved)</td>
                            <td className="py-2 font-bold text-[#C48D46]">$120 – $180</td>
                            <td className="py-2 text-[#5C5046]">2.5-3.5 hrs</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-semibold text-[#2B231D]">Complex (Intricate Patterns)</td>
                            <td className="py-2 font-bold text-[#C48D46]">$180 – $250</td>
                            <td className="py-2 text-[#5C5046]">3.5-5 hrs</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-semibold text-[#2B231D]">With Beads/Accessories</td>
                            <td className="py-2 font-bold text-[#C48D46]">$150 – $220</td>
                            <td className="py-2 text-[#5C5046]">3-4 hrs</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-semibold text-[#2B231D]">Half Cornrows / Half Loose</td>
                            <td className="py-2 font-bold text-[#C48D46]">$100 – $150</td>
                            <td className="py-2 text-[#5C5046]">2-3 hrs</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8DFC8]">
                    <a
                      href="#booking"
                      className="inline-flex items-center gap-2 rounded-full bg-[#C48D46] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#A87432] transition-all"
                    >
                      <Calendar size={14} />
                      <span>Book Feed-In Cornrows Now</span>
                    </a>
                  </div>
                </div>

                {/* Senegalese Twists */}
                <div className="rounded-[28px] bg-[#FAF8F5] border border-[#E8DFC8] p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#BA1296] uppercase tracking-wider">
                      Elegant &amp; Defined Twists
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B231D] mt-1">
                      Senegalese Twists
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-[#5C5046] leading-relaxed font-normal">
                      Senegalese twists feature smooth, rope-like twists offering a sleek and
                      sophisticated finish. Created using premium hair, they are lightweight,
                      versatile, and heat-sealed for a polished look that lasts.
                    </p>

                    <div className="mt-4 rounded-xl bg-white p-4 border border-[#E8DFC8] text-xs">
                      <p className="font-bold text-[#2B231D] mb-1">What's Included:</p>
                      <p className="text-[#5C5046]">
                        Consultation, custom twist size &amp; length, heat setting for smooth finish,
                        and clean edge styling.
                      </p>
                    </div>

                    {/* Pricing Table */}
                    <div className="mt-5 overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-[#E8DFC8] text-[#8C7A6B] uppercase font-bold text-[10px]">
                            <th className="pb-1.5">Size</th>
                            <th className="pb-1.5">Length</th>
                            <th className="pb-1.5">Price</th>
                            <th className="pb-1.5">Duration</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E8DFC8]/50 font-medium">
                          <tr>
                            <td className="py-2 font-bold text-[#BA1296]">Small</td>
                            <td className="py-2">Shoulder / Mid-Back / Waist</td>
                            <td className="py-2 font-bold text-[#2B231D]">$200 – $350</td>
                            <td className="py-2 text-[#5C5046]">4-7 hrs</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-bold text-[#C48D46]">Medium</td>
                            <td className="py-2">Shoulder / Mid-Back / Waist</td>
                            <td className="py-2 font-bold text-[#2B231D]">$160 – $300</td>
                            <td className="py-2 text-[#5C5046]">3-6 hrs</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-bold text-[#5C5046]">Large</td>
                            <td className="py-2">Shoulder / Mid-Back</td>
                            <td className="py-2 font-bold text-[#2B231D]">$120 – $200</td>
                            <td className="py-2 text-[#5C5046]">2.5-4 hrs</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8DFC8]">
                    <a
                      href="#booking"
                      className="inline-flex items-center gap-2 rounded-full bg-[#BA1296] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#960d77] transition-all"
                    >
                      <Calendar size={14} />
                      <span>Book Senegalese Twists Now</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* ---------------- 5. Boho Braids, 6. Stitch Braids, 7. Kids Braiding (3-Col Grid) ---------------- */}
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Boho Braids */}
                <div className="rounded-[28px] bg-white border border-[#E8DFC8] p-6 sm:p-7 flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#BA1296]">
                      Trendy &amp; Effortlessly Chic
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#2B231D] mt-1">
                      Boho Braids
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#5C5046] leading-relaxed">
                      Blends classic knotless/box braids with playful wavy/curly strands for a
                      carefree, bohemian vacation look with volume.
                    </p>

                    <div className="mt-4 space-y-1.5 text-xs font-medium border-t border-[#E8DFC8] pt-3">
                      <div className="flex justify-between py-1 border-b border-[#E8DFC8]/50">
                        <span className="font-semibold">Knotless Boho (Shoulder)</span>
                        <span className="font-bold text-[#C48D46]">$280 - $340</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#E8DFC8]/50">
                        <span className="font-semibold">Knotless Boho (Mid-Back)</span>
                        <span className="font-bold text-[#C48D46]">$340 - $400</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#E8DFC8]/50">
                        <span className="font-semibold">Knotless Boho (Waist)</span>
                        <span className="font-bold text-[#C48D46]">$400 - $460</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#E8DFC8]/50">
                        <span className="font-semibold">Box Boho (Shoulder/Mid)</span>
                        <span className="font-bold text-[#C48D46]">$240 - $340</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#E8DFC8]">
                    <a
                      href="#booking"
                      className="w-full text-center inline-block rounded-full bg-[#C48D46] py-2.5 text-xs font-bold text-white hover:bg-[#A87432] transition-all"
                    >
                      Book Boho Braids Now
                    </a>
                  </div>
                </div>

                {/* Stitch Braids */}
                <div className="rounded-[28px] bg-white border border-[#E8DFC8] p-6 sm:p-7 flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C48D46]">
                      Clean &amp; Sculpted Hold
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#2B231D] mt-1">
                      Stitch Braids
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#5C5046] leading-relaxed">
                      Patented razor-sharp technique producing ultra-clean sculpted stitch lines and
                      a tight, long-lasting hold that stays crisp.
                    </p>

                    <div className="mt-4 space-y-1.5 text-xs font-medium border-t border-[#E8DFC8] pt-3">
                      <div className="flex justify-between py-1.5 border-b border-[#E8DFC8]/50">
                        <span className="font-semibold">Short Stitch Braids</span>
                        <span className="font-bold text-[#BA1296]">$80 - $120 (1.5-2.5h)</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-[#E8DFC8]/50">
                        <span className="font-semibold">Medium Stitch Braids</span>
                        <span className="font-bold text-[#BA1296]">$120 - $180 (2.5-3.5h)</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-[#E8DFC8]/50">
                        <span className="font-semibold">Long Stitch Braids</span>
                        <span className="font-bold text-[#BA1296]">$180 - $250 (3.5-5h)</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#E8DFC8]">
                    <a
                      href="#booking"
                      className="w-full text-center inline-block rounded-full bg-[#BA1296] py-2.5 text-xs font-bold text-white hover:bg-[#960d77] transition-all"
                    >
                      Book Stitch Braids Now
                    </a>
                  </div>
                </div>

                {/* Kids Braiding */}
                <div className="rounded-[28px] bg-white border border-[#E8DFC8] p-6 sm:p-7 flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#16857B]">
                      Gentle &amp; Patient Styling
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#2B231D] mt-1">
                      Kids Braiding
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#5C5046] leading-relaxed">
                      Gentle, patient styling for little ones with tension-free techniques, fun
                      colorful beads, and comfortable appointments.
                    </p>

                    <div className="mt-4 space-y-1.5 text-xs font-medium border-t border-[#E8DFC8] pt-3">
                      <div className="flex justify-between py-1 border-b border-[#E8DFC8]/50">
                        <span className="font-semibold">Simple Cornrows (Kids)</span>
                        <span className="font-bold text-[#C48D46]">$50 - $80</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#E8DFC8]/50">
                        <span className="font-semibold">Braids with Beads</span>
                        <span className="font-bold text-[#C48D46]">$60 - $100</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#E8DFC8]/50">
                        <span className="font-semibold">Individual Braids (Kids)</span>
                        <span className="font-bold text-[#C48D46]">$80 - $140</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#E8DFC8]/50">
                        <span className="font-semibold">Knotless Braids (Kids)</span>
                        <span className="font-bold text-[#C48D46]">$100 - $180</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#E8DFC8]">
                    <a
                      href="#booking"
                      className="w-full text-center inline-block rounded-full bg-[#C48D46] py-2.5 text-xs font-bold text-white hover:bg-[#A87432] transition-all"
                    >
                      Book Kids Braiding Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CATEGORY 2: LOCS & EXTENSIONS */}
        {/* ========================================================================= */}
        <section
          id="locs-extensions"
          className="relative overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-b border-[#E8DFC8]"
        >
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="mb-14 border-b border-[#E8DFC8] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-3">
                  <Layers size={13} className="text-[#C48D46]" />
                  <span>Category 02</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#2B231D]">
                  Locs &amp; <span className="font-serif italic text-[#C48D46]">Extensions</span>
                </h2>
              </div>
              <p className="text-sm font-medium text-[#5C5046] max-w-md">
                From transformative starter locs and refined microlocs to protective faux locs and
                seamless weave installations.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Faux Locs */}
              <div className="rounded-[28px] bg-white border border-[#E8DFC8] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-xs font-bold text-[#C48D46] uppercase tracking-wider">
                    Boho-Chic with a Protective Edge
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B231D] mt-1">
                    Faux Locs
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#5C5046] leading-relaxed font-normal">
                    All the beauty of natural locs without the long-term commitment. Created by
                    wrapping extensions around your hair for a bold, versatile bohemian finish.
                  </p>

                  <div className="mt-4 rounded-xl bg-[#FAF8F5] p-3.5 border border-[#E8DFC8] text-xs">
                    <p className="font-bold text-[#2B231D]">What's Included:</p>
                    <p className="text-[#5C5046]">
                      Consultation, extension prep, wrapping/crochet installation &amp; edge styling.
                    </p>
                  </div>

                  <div className="mt-5 overflow-x-auto">
                    <table className="w-full text-left text-xs font-medium">
                      <thead>
                        <tr className="border-b border-[#E8DFC8] text-[#8C7A6B] uppercase font-bold text-[10px]">
                          <th className="pb-1.5">Style</th>
                          <th className="pb-1.5">Length</th>
                          <th className="pb-1.5">Price Range</th>
                          <th className="pb-1.5">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8DFC8]/50">
                        <tr>
                          <td className="py-2 font-semibold text-[#2B231D]">Faux Locs</td>
                          <td className="py-2">Shoulder</td>
                          <td className="py-2 font-bold text-[#C48D46]">$200 - $280</td>
                          <td className="py-2 text-[#5C5046]">4-6 hrs</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-semibold text-[#2B231D]">Faux Locs</td>
                          <td className="py-2">Mid-Back</td>
                          <td className="py-2 font-bold text-[#C48D46]">$280 - $360</td>
                          <td className="py-2 text-[#5C5046]">6-8 hrs</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-semibold text-[#2B231D]">Faux Locs</td>
                          <td className="py-2">Waist-Length</td>
                          <td className="py-2 font-bold text-[#C48D46]">$360 - $450</td>
                          <td className="py-2 text-[#5C5046]">8-10 hrs</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-semibold text-[#2B231D]">Distressed Locs</td>
                          <td className="py-2">Shoulder / Mid-Back</td>
                          <td className="py-2 font-bold text-[#C48D46]">$240 - $400</td>
                          <td className="py-2 text-[#5C5046]">5-9 hrs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DFC8]">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 rounded-full bg-[#C48D46] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#A87432] transition-all"
                  >
                    <Calendar size={14} />
                    <span>Book Faux Locs Now</span>
                  </a>
                </div>
              </div>

              {/* Starter Locs */}
              <div className="rounded-[28px] bg-white border border-[#E8DFC8] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-xs font-bold text-[#BA1296] uppercase tracking-wider">
                    Begin Your Loc Journey with Confidence
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B231D] mt-1">
                    Starter Locs
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#5C5046] leading-relaxed font-normal">
                    Transformative loc journey with a solid foundation. Whether you choose comb
                    coils, two-strand twists, or braid locs, we ensure healthy long-term growth.
                  </p>

                  <div className="mt-4 rounded-xl bg-[#FAF8F5] p-3.5 border border-[#E8DFC8] text-xs">
                    <p className="font-bold text-[#2B231D]">What's Included:</p>
                    <p className="text-[#5C5046]">
                      Comprehensive consultation, parting assessment, starter products, &amp; 1st
                      retwist scheduling.
                    </p>
                  </div>

                  <div className="mt-5 overflow-x-auto">
                    <table className="w-full text-left text-xs font-medium">
                      <thead>
                        <tr className="border-b border-[#E8DFC8] text-[#8C7A6B] uppercase font-bold text-[10px]">
                          <th className="pb-1.5">Service</th>
                          <th className="pb-1.5">Price Range</th>
                          <th className="pb-1.5">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8DFC8]/50">
                        <tr>
                          <td className="py-2.5 font-semibold text-[#2B231D]">Comb Coils (Starter Locs)</td>
                          <td className="py-2.5 font-bold text-[#BA1296]">$150 – $250</td>
                          <td className="py-2.5 text-[#5C5046]">2-4 hrs</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-semibold text-[#2B231D]">Two-Strand Twist Locs</td>
                          <td className="py-2.5 font-bold text-[#BA1296]">$180 – $280</td>
                          <td className="py-2.5 text-[#5C5046]">3-5 hrs</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-semibold text-[#2B231D]">Braid Locs</td>
                          <td className="py-2.5 font-bold text-[#BA1296]">$200 – $300</td>
                          <td className="py-2.5 text-[#5C5046]">3-5 hrs</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-semibold text-[#2B231D]">Loc Retwist (Maintenance)</td>
                          <td className="py-2.5 font-bold text-[#BA1296]">$70 – $120</td>
                          <td className="py-2.5 text-[#5C5046]">1-2 hrs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DFC8]">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 rounded-full bg-[#BA1296] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#960d77] transition-all"
                  >
                    <Calendar size={14} />
                    <span>Book Starter Locs Now</span>
                  </a>
                </div>
              </div>

              {/* Microlocs */}
              <div className="rounded-[28px] bg-white border border-[#E8DFC8] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-xs font-bold text-[#C48D46] uppercase tracking-wider">
                    Fine, Sleek, and Versatile
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B231D] mt-1">
                    Microlocs
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#5C5046] leading-relaxed font-normal">
                    Delicate, refined locs created with micro-partings for a lighter, ultra-flexible,
                    and sophisticated aesthetic.
                  </p>

                  <div className="mt-4 rounded-xl bg-[#FAF8F5] p-3.5 border border-[#E8DFC8] text-xs">
                    <p className="font-bold text-[#2B231D]">What's Included:</p>
                    <p className="text-[#5C5046]">
                      Scalp assessment, interlocking/twisting installation, micro-parting &amp;
                      maintenance plan.
                    </p>
                  </div>

                  <div className="mt-5 space-y-2 text-xs font-medium">
                    <div className="flex justify-between py-2 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Microloc Installation</span>
                      <span className="font-bold text-[#C48D46]">$400 – $700 (8-12 hrs)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Microloc Retightening/Retwist</span>
                      <span className="font-bold text-[#C48D46]">$100 – $200 (2-3 hrs)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DFC8]">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 rounded-full bg-[#C48D46] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#A87432] transition-all"
                  >
                    <Calendar size={14} />
                    <span>Book Microlocs Now</span>
                  </a>
                </div>
              </div>

              {/* Extension Services */}
              <div className="rounded-[28px] bg-white border border-[#E8DFC8] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-xs font-bold text-[#BA1296] uppercase tracking-wider">
                    Sew-Ins, Wigs, &amp; Quick Weaves
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B231D] mt-1">
                    Extension Services
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#5C5046] leading-relaxed font-normal">
                    Looking for length, volume, or a fresh new look? Seamless weave blending and
                    expert wig installations.
                  </p>

                  <div className="mt-4 rounded-xl bg-[#FAF8F5] p-3.5 border border-[#E8DFC8] text-xs">
                    <p className="font-bold text-[#2B231D]">What's Included:</p>
                    <p className="text-[#5C5046]">
                      Consultation, foundation braiding, weave/wig installation, custom cut &amp;
                      styling.
                    </p>
                  </div>

                  <div className="mt-5 space-y-2 text-xs font-medium">
                    <div className="flex justify-between py-1.5 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Sew-In Weave (Leave-Out)</span>
                      <span className="font-bold text-[#BA1296]">$150 – $300 (2-4 hrs)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Quick Weave</span>
                      <span className="font-bold text-[#BA1296]">$120 – $200 (2-3 hrs)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Custom Wig Installation</span>
                      <span className="font-bold text-[#BA1296]">$150 – $250 (2-3 hrs)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Microlink Installation</span>
                      <span className="font-bold text-[#BA1296]">$200 – $400 (3-5 hrs)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DFC8]">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 rounded-full bg-[#BA1296] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#960d77] transition-all"
                  >
                    <Calendar size={14} />
                    <span>Book Extension Services Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CATEGORY 3: NATURAL HAIR & TREATMENTS */}
        {/* ========================================================================= */}
        <section
          id="natural-treatments"
          className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-[#E8DFC8]"
        >
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="mb-14 border-b border-[#E8DFC8] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#16857B]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#16857B] border border-[#16857B]/20 mb-3">
                  <Heart size={13} className="text-[#16857B]" />
                  <span>Category 03</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#2B231D]">
                  Natural Hair &amp;{" "}
                  <span className="font-serif italic text-[#C48D46]">Treatments</span>
                </h2>
              </div>
              <p className="text-sm font-medium text-[#5C5046] max-w-md">
                Healthy hair begins with a nourished foundation. Restorative scalp therapies,
                hydration rituals, and natural styling that honours your texture.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Natural Hair Styling */}
              <div className="rounded-[28px] bg-[#FAF8F5] border border-[#E8DFC8] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#C48D46] uppercase tracking-wider">
                    Celebrating Your Natural Texture
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B231D] mt-1">
                    Natural Hair Styling
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#5C5046] leading-relaxed font-normal">
                    From defined twist-outs and bantu knots to sleek silk presses, we enhance your
                    natural curl patterns and health.
                  </p>

                  <div className="mt-4 rounded-xl bg-white p-3.5 border border-[#E8DFC8] text-xs">
                    <p className="font-bold text-[#2B231D]">What's Included:</p>
                    <p className="text-[#5C5046]">
                      Hair assessment, moisturizing prep, precision style execution, &amp; finishing
                      sealant.
                    </p>
                  </div>

                  <div className="mt-5 space-y-2 text-xs sm:text-sm font-medium">
                    <div className="flex justify-between py-2 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Twist-Out</span>
                      <span className="font-bold text-[#C48D46]">$60 – $100 (1.5-2.5 hrs)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Braid-Out</span>
                      <span className="font-bold text-[#C48D46]">$60 – $100 (1.5-2.5 hrs)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">
                        Silk Press (Includes Wash &amp; Blow-Dry)
                      </span>
                      <span className="font-bold text-[#C48D46]">$90 – $150 (2-3 hrs)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Bantu Knot-Out</span>
                      <span className="font-bold text-[#C48D46]">$70 – $110 (1.5-2.5 hrs)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Coily Set / Wash &amp; Go</span>
                      <span className="font-bold text-[#C48D46]">$50 – $80 (1-2 hrs)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DFC8]">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 rounded-full bg-[#C48D46] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#A87432] transition-all"
                  >
                    <Calendar size={14} />
                    <span>Book Natural Hair Styling Now</span>
                  </a>
                </div>
              </div>

              {/* Wash & Treatments */}
              <div className="rounded-[28px] bg-[#FAF8F5] border border-[#E8DFC8] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#16857B] uppercase tracking-wider">
                    Deep Conditioning &amp; Scalp Care
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B231D] mt-1">
                    Wash &amp; Treatments
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#5C5046] leading-relaxed font-normal">
                    Cleanses, nourishes, and revitalizes your scalp with premium botanical masks and
                    essential oils before protective styling.
                  </p>

                  <div className="mt-4 rounded-xl bg-white p-3.5 border border-[#E8DFC8] text-xs">
                    <p className="font-bold text-[#2B231D]">What's Included:</p>
                    <p className="text-[#5C5046]">
                      Scalp analysis, gentle clarifying cleanse, deep conditioning mask, hydrating
                      scalp oil &amp; blow-dry.
                    </p>
                  </div>

                  <div className="mt-5 space-y-2 text-xs sm:text-sm font-medium">
                    <div className="flex justify-between py-2 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Hair Wash &amp; Deep Condition</span>
                      <span className="font-bold text-[#16857B]">$35 – $50 (45-60 min)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Scalp Renewal Treatment</span>
                      <span className="font-bold text-[#16857B]">$45 – $65 (45-60 min)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Hydrating Treatment</span>
                      <span className="font-bold text-[#16857B]">$40 – $55 (45-60 min)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">
                        Clarifying Wash (For Product Buildup)
                      </span>
                      <span className="font-bold text-[#16857B]">$40 – $55 (45-60 min)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DFC8]">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 rounded-full bg-[#16857B] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#126b63] transition-all"
                  >
                    <Calendar size={14} />
                    <span>Book Wash &amp; Treatments Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CATEGORY 4: SPECIAL OCCASIONS & DELUXE PACKAGES */}
        {/* ========================================================================= */}
        <section
          id="special-occasions"
          className="relative overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-b border-[#E8DFC8]"
        >
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="mb-14 border-b border-[#E8DFC8] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-3">
                  <Crown size={13} className="text-[#C48D46]" />
                  <span>Category 04</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#2B231D]">
                  Special Occasions &amp;{" "}
                  <span className="font-serif italic text-[#C48D46]">Deluxe Packages</span>
                </h2>
              </div>
              <p className="text-sm font-medium text-[#5C5046] max-w-md">
                Unforgettable bridal, prom, and gala styling paired with all-inclusive deluxe pampering
                experiences.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Special Occasion Updos */}
              <div className="rounded-[28px] bg-white border border-[#E8DFC8] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-xs font-bold text-[#BA1296] uppercase tracking-wider">
                    Bridal, Prom, &amp; Event Styling
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B231D] mt-1">
                    Special Occasion Updos
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#5C5046] leading-relaxed font-normal">
                    Make your big day memorable with regal braided crowns, romantic bridal buns, and
                    secure all-day holds styled with luxury jewelry.
                  </p>

                  <div className="mt-4 rounded-xl bg-[#FAF8F5] p-3.5 border border-[#E8DFC8] text-xs">
                    <p className="font-bold text-[#2B231D]">What's Included:</p>
                    <p className="text-[#5C5046]">
                      In-depth consultation, style design &amp; trial, high-hold products, &amp; hair
                      jewelry placement.
                    </p>
                  </div>

                  <div className="mt-5 space-y-2 text-xs sm:text-sm font-medium">
                    <div className="flex justify-between py-2 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Bridal Braided Updo</span>
                      <span className="font-bold text-[#BA1296]">$150 – $300 (2-4 hrs)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Bridesmaid Updo</span>
                      <span className="font-bold text-[#BA1296]">$100 – $180 (1.5-2.5 hrs)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Prom Updo</span>
                      <span className="font-bold text-[#BA1296]">$100 – $200 (2-3 hrs)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Elegant Bun</span>
                      <span className="font-bold text-[#BA1296]">$80 – $150 (1.5-2.5 hrs)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#E8DFC8]/50">
                      <span className="font-bold text-[#2B231D]">Braided Crown</span>
                      <span className="font-bold text-[#BA1296]">$100 – $180 (2-3 hrs)</span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3 text-xs font-semibold text-[#8C7A6B]">
                    <span>Hair Jewelry / Cuffs: +$10-$30</span>
                    <span>•</span>
                    <span>Trial Run: +$50</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DFC8]">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 rounded-full bg-[#BA1296] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#960d77] transition-all"
                  >
                    <Calendar size={14} />
                    <span>Book Special Occasion Updos Now</span>
                  </a>
                </div>
              </div>

              {/* Deluxe Hair Packages */}
              <div className="rounded-[28px] bg-white border border-[#E8DFC8] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-xs font-bold text-[#C48D46] uppercase tracking-wider">
                    The Complete Experience
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B231D] mt-1">
                    Deluxe Hair Packages
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#5C5046] leading-relaxed font-normal">
                    All-inclusive multi-step packages combining cleansing, deep nourishment, full
                    installation, and finishing styling for a transformative experience.
                  </p>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl bg-[#FAF8F5] p-3.5 border border-[#E8DFC8]">
                      <div className="flex justify-between items-center text-sm font-bold text-[#2B231D]">
                        <span>The Signature Package</span>
                        <span className="text-[#C48D46]">$260 – $340</span>
                      </div>
                      <p className="mt-1 text-xs text-[#5C5046]">
                        Wash + Deep Condition + Medium Knotless Braids + Edge Finish (5-7 hrs)
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#FAF8F5] p-3.5 border border-[#E8DFC8]">
                      <div className="flex justify-between items-center text-sm font-bold text-[#2B231D]">
                        <span>The Bridal Package</span>
                        <span className="text-[#C48D46]">$250 – $400</span>
                      </div>
                      <p className="mt-1 text-xs text-[#5C5046]">
                        Consultation + Trial Run + Wash &amp; Mask + Bridal Updo + Hair Jewelry (3-5 hrs)
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#FAF8F5] p-3.5 border border-[#E8DFC8]">
                      <div className="flex justify-between items-center text-sm font-bold text-[#2B231D]">
                        <span>The Loc Launch Package</span>
                        <span className="text-[#C48D46]">$250 – $380</span>
                      </div>
                      <p className="mt-1 text-xs text-[#5C5046]">
                        Starter Locs + Deep Condition + Loc Products + 1 Free Retwist (4-6 hrs)
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#FAF8F5] p-3.5 border border-[#E8DFC8]">
                      <div className="flex justify-between items-center text-sm font-bold text-[#2B231D]">
                        <span>The Protective Style Package</span>
                        <span className="text-[#C48D46]">$300 – $450</span>
                      </div>
                      <p className="mt-1 text-xs text-[#5C5046]">
                        Wash + Scalp Treatment + Full Braid Installation + Braid Spray (5-8 hrs)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DFC8]">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 rounded-full bg-[#C48D46] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#A87432] transition-all"
                  >
                    <Calendar size={14} />
                    <span>Book Deluxe Packages Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* WHY BOOK WITH US? (VALUE MATRIX) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4">
                <ShieldCheck size={13} className="text-[#C48D46]" />
                <span>The Doussou Quality Standard</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#2B231D]">
                Why Book <span className="font-serif italic text-[#C48D46]">With Us?</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5C5046] font-medium leading-relaxed">
                Experience unparalleled care, cleanliness, and artistry at our Glen Burnie sanctuary.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_BOOK_WITH_US.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.feature}
                    className="group rounded-[24px] bg-[#FAF8F5] p-6 sm:p-7 border border-[#E8DFC8] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C48D46]/50 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C48D46]/15 text-[#C48D46] mb-4 group-hover:bg-[#C48D46] group-hover:text-white transition-colors">
                      <IconComp size={22} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#2B231D]">
                      {item.feature}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#5C5046] font-normal">
                      {item.benefit}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* UNIVERSAL ADD-ONS & SALON POLICIES */}
        {/* ========================================================================= */}
        <section
          id="addons-policies"
          className="relative overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-b border-[#E8DFC8]"
        >
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
              {/* Universal Service Add-Ons */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#BA1296]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#BA1296] border border-[#BA1296]/20 mb-4">
                  <Tag size={13} className="text-[#BA1296]" />
                  <span>Customize Your Look</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2B231D]">
                  Service Add-Ons{" "}
                  <span className="font-serif italic text-[#C48D46]">(All Services)</span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#5C5046] font-medium leading-relaxed mb-6">
                  Enhance your appointment with our signature add-on treatments, accessories, and
                  scalp therapy rituals.
                </p>

                <div className="rounded-2xl bg-white border border-[#E8DFC8] overflow-hidden shadow-sm">
                  <div className="divide-y divide-[#E8DFC8]/60">
                    {UNIVERSAL_ADDONS.map((addon) => (
                      <div
                        key={addon.name}
                        className="p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors hover:bg-[#FAF8F5]"
                      >
                        <div>
                          <p className="font-bold text-sm sm:text-base text-[#2B231D]">
                            {addon.name}
                          </p>
                          <p className="text-xs text-[#8C7A6B] mt-0.5">{addon.detail}</p>
                        </div>
                        <span className="font-display text-lg font-bold text-[#C48D46] shrink-0">
                          {addon.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Policies */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#16857B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#16857B] border border-[#16857B]/20 mb-4">
                  <Info size={13} className="text-[#16857B]" />
                  <span>Important Guidelines</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2B231D]">
                  Service <span className="font-serif italic text-[#C48D46]">Policies</span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#5C5046] font-medium leading-relaxed mb-6">
                  To ensure a seamless, punctual, and relaxing experience for all clients, please
                  review our studio policies:
                </p>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-white p-5 border border-[#E8DFC8] shadow-xs">
                    <h4 className="font-bold text-sm text-[#2B231D] flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#BA1296] text-white text-[11px]">
                        1
                      </span>
                      Deposit Policy
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-[#5C5046] leading-relaxed">
                      A non-refundable deposit may be required for bookings scheduled over 3 hours to
                      secure your master stylist’s calendar.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-5 border border-[#E8DFC8] shadow-xs">
                    <h4 className="font-bold text-sm text-[#2B231D] flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C48D46] text-white text-[11px]">
                        2
                      </span>
                      Punctuality &amp; Late Arrivals
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-[#5C5046] leading-relaxed">
                      Please arrive on time. Late arrivals over 15 minutes may result in reduced
                      styling time or rescheduling to maintain scheduled appointments.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-5 border border-[#E8DFC8] shadow-xs">
                    <h4 className="font-bold text-sm text-[#2B231D] flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#16857B] text-white text-[11px]">
                        3
                      </span>
                      24-Hour Cancellation Notice
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-[#5C5046] leading-relaxed">
                      We kindly ask for at least 24 hours advance notice if you need to cancel or
                      reschedule your appointment.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-5 border border-[#E8DFC8] shadow-xs">
                    <h4 className="font-bold text-sm text-[#2B231D] flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B231D] text-white text-[11px]">
                        4
                      </span>
                      Hair &amp; Supplies Included
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-[#5C5046] leading-relaxed">
                      Standard pre-stretched braiding hair is included in our pricing. Specialty,
                      human hair curls, or custom ombre colors may require additional fees.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-5 border border-[#E8DFC8] shadow-xs">
                    <h4 className="font-bold text-sm text-[#2B231D] flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C48D46] text-white text-[11px]">
                        5
                      </span>
                      Children's Services
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-[#5C5046] leading-relaxed">
                      Children under the age of 12 must be accompanied by an adult throughout the
                      duration of the styling appointment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CALL TO ACTION BANNER */}
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
                <span>Ready to Transform Your Look?</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-normal leading-[1.15] text-white">
                Book Your Appointment with{" "}
                <span className="font-serif italic text-[#E8C28A] block sm:inline">
                  Doussou Quality Braiding Today.
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
                Our master stylists are ready to bring your vision to life. Experience precision,
                scalp comfort, and a protective hairstyle that turns heads.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#C48D46] px-8 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#b07d3b] hover:scale-105 active:scale-95"
                >
                  <Calendar size={18} />
                  <span>Book Your Appointment Now</span>
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-4 text-sm font-bold text-white border border-white/30 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95"
                >
                  <Phone size={16} />
                  <span>Call Studio: {CONTACT.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EMBEDDED BOOKING SECTION */}
        {/* ========================================================================= */}
        <BookingForm />
      </main>

      <Footer />

      {/* Mobile Sticky Booking CTA Button */}
      <a
        href="#booking"
        className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center rounded-lg bg-plum px-6 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-[0_12px_30px_-14px_var(--plum-deep)] lg:hidden"
      >
        Book Appointment
      </a>
    </div>
  );
}
