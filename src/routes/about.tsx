import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BookingForm } from "@/components/site/BookingForm";
import { CONTACT } from "@/components/site/data";
import {
  Sparkles,
  Star,
  Award,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Calendar,
  ChevronRight,
  UserCheck,
  Scissors,
  ArrowRight,
  Sparkle,
  Check,
} from "lucide-react";

import aboutStudio from "@/assets/about-studio.jpg";
import heroPortrait from "@/assets/hero-portrait.jpg";
import welcomeVideo from "@/assets/welcome.mp4";
import transformationImg from "@/assets/transformation.jpg";
import bookingImg from "@/assets/booking-cta.jpg";
import knotlessImg from "@/assets/style-knotless.jpg";
import boxbraidsImg from "@/assets/style-boxbraids.jpg";
import cornrowsImg from "@/assets/style-cornrows.jpg";
import locsImg from "@/assets/style-locs.jpg";
import naturalImg from "@/assets/style-natural.jpg";
import treatmentImg from "@/assets/style-treatment.jpg";
import kidsImg from "@/assets/style-kids.jpg";

const PAGE_TITLE = "About Doussou Quality Braiding | Premier Braiding Studio in Glen Burnie, MD";
const PAGE_DESCRIPTION =
  "Learn the story behind Doussou Quality Braiding in Glen Burnie, MD. Discover our 6-year journey of mastering protective styles, our commitment to hair health, and why we are a top-rated salon.";

const getSchema = () => [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    mainEntity: {
      "@type": "HairSalon",
      name: "Doussou Quality Braiding",
      description: PAGE_DESCRIPTION,
      telephone: CONTACT?.phone ?? "(301) 523-8593",
      email: CONTACT?.email ?? "doussoukabba@gmail.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "337 S Hospital Dr",
        addressLocality: "Glen Burnie",
        addressRegion: "MD",
        postalCode: "21061",
        addressCountry: "US",
      },
      areaServed: "Glen Burnie, Maryland",
      openingHours: ["Mo-Fr 08:00-19:00", "Sa 08:00-18:00"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "142",
      },
    },
  },
];

const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "Master-Level Expertise",
    copy: "We are not just braiders; we are artisans. From traditional African hair braiding to modern signature styles, our team has the skill to deliver flawless results for every texture and personality.",
    icon: Scissors,
    tag: "Artisanal Craft",
  },
  {
    number: "02",
    title: "Unwavering Commitment to Hair Health",
    copy: "We prioritize the health and integrity of your natural hair. Our techniques ensure tension-free parting and scalp comfort, utilizing treatments and protective styling to promote hair growth.",
    icon: Heart,
    tag: "Scalp-First Care",
  },
  {
    number: "03",
    title: "A Personalized Approach",
    copy: "Every appointment begins with a personal consultation. We take the time to understand your lifestyle, hair texture, and desired look to create a style that is perfectly tailored to you.",
    icon: UserCheck,
    tag: "Custom Styling",
  },
  {
    number: "04",
    title: "A Studio You Can Trust",
    copy: "Our clean, friendly, and relaxing studio is designed for your comfort. We pride ourselves on punctuality, transparency, and delivering a flawless finish that holds its shape for weeks.",
    icon: ShieldCheck,
    tag: "Comfort & Hygiene",
  },
  {
    number: "05",
    title: "Proven Client Satisfaction",
    copy: "Join over 3,000 happy clients who trust us for their protective styling needs. Our 5.0-star rating is a testament to our dedication to quality, comfort, and customer service.",
    icon: Star,
    tag: "3,000+ Happy Clients",
  },
];

const SIGNATURE_SERVICES = [
  {
    title: "Knotless Braids",
    description: "Featherlight, tension-free braids for effortless movement.",
    image: knotlessImg,
    badge: "Most Popular",
  },
  {
    title: "Box Braids",
    description: "Classic, versatile styles in any length and thickness.",
    image: boxbraidsImg,
    badge: "Timeless Classic",
  },
  {
    title: "Feed-In Cornrows",
    description: "Precision sculpted parts and clean lines that last.",
    image: cornrowsImg,
    badge: "Sculpted Precision",
  },
  {
    title: "Faux Locs & Extensions",
    description: "Meticulous retwists and extension work.",
    image: locsImg,
    badge: "Artisan Locs",
  },
  {
    title: "Natural Hair Styling",
    description: "Twist-outs, silk presses, and protective styling.",
    image: naturalImg,
    badge: "Texture Care",
  },
  {
    title: "Scalp & Hair Treatments",
    description: "Deep conditioning, scalp care, and hydration rituals.",
    image: treatmentImg,
    badge: "Restorative Care",
  },
  {
    title: "Kids Braiding",
    description: "Gentle, patient styling for our youngest clients.",
    image: kidsImg,
    badge: "Gentle Touch",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "About Doussou Quality Braiding, Glen Burnie hair braider, African hair braiding story, master braider Glen Burnie MD, protective hair styling Maryland, knotless braids history, scalp care braiding",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(getSchema()),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#BA1296] selection:text-white">
      <Header />

      <main className="pt-28 lg:pt-36">
        {/* ========================================================================= */}
        {/* HERO / HEADER BANNER SECTION */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#FAF8F5] pb-16 pt-8 lg:pb-24 lg:pt-12 border-b border-[#E8DFC8]/70">
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
              <span className="text-[#2B231D] font-bold">About Us</span>
            </nav>

            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 items-center">
              {/* Left Column: Heading & Introduction */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-5 shadow-xs">
                  <Sparkles size={13} className="text-[#C48D46]" />
                  <span>About Doussou Quality Braiding</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-normal leading-[1.12] tracking-tight text-[#2B231D]">
                  Where Braiding is a Craft,{" "}
                  <span className="font-serif italic text-[#C48D46] block sm:inline">
                    and Your Hair is Our Canvas.
                  </span>
                </h1>

                <div className="mt-8 space-y-5 text-base sm:text-[17px] leading-[1.8] text-[#5C5046] font-medium">
                  <p className="border-l-2 border-[#C48D46] pl-4 italic text-[#2B231D] text-lg">
                    At Doussou Quality Braiding, we believe that a great hairstyle is more than
                    just an aesthetic; it is a statement of confidence, a celebration of culture,
                    and an expression of your unique personality. Located in the heart of Glen
                    Burnie, Maryland, our studio is a sanctuary dedicated to the art of protective
                    styling.
                  </p>

                  <p>
                    We are a team of passionate master braiders with over six years of combined
                    experience, dedicated to perfecting every braid, twist, and loc that leaves our
                    chairs. From the intricate precision of traditional African cornrows to the
                    modern, tension-free elegance of knotless braids, we bring passion, precision,
                    and a personal touch to every client who walks through our door. Our goal is
                    simple: to make you look and feel like the best version of yourself.
                  </p>
                </div>

                {/* Quick Trust Pill Grid */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-[#E8DFC8] shadow-xs text-xs font-bold text-[#2B231D]">
                    <CheckCircle2 size={15} className="text-[#C48D46]" />
                    <span>6+ Years Studio Experience</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-[#E8DFC8] shadow-xs text-xs font-bold text-[#2B231D]">
                    <CheckCircle2 size={15} className="text-[#C48D46]" />
                    <span>3,000+ Styles Crafted</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-[#E8DFC8] shadow-xs text-xs font-bold text-[#2B231D]">
                    <CheckCircle2 size={15} className="text-[#C48D46]" />
                    <span>Tension-Free Scalp Comfort</span>
                  </div>
                </div>

                {/* CTA Action Buttons */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#C48D46] px-8 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(196,141,70,0.3)] transition-all duration-300 hover:bg-[#A87432] hover:scale-105"
                  >
                    <Calendar size={16} />
                    <span>Book Your Appointment</span>
                  </a>
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#2B231D] border border-[#E8DFC8] shadow-xs transition-all duration-300 hover:bg-[#FAF8F5] hover:border-[#C48D46]"
                  >
                    <Phone size={15} className="text-[#C48D46]" />
                    <span>Call: {CONTACT.phone}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visual Composite */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Luxury Rounded Image Container with Gold Border */}
                  <div className="overflow-hidden rounded-[32px] sm:rounded-[40px] border-4 border-white shadow-2xl w-full max-w-[440px] h-[500px] sm:h-[580px] relative bg-plum-deep">
                    <img
                      src={aboutStudio}
                      alt="Doussou Quality Braiding Studio in Glen Burnie MD"
                      className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Bottom Caption inside Image */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#E8C28A]">
                        Glen Burnie Sanctuary
                      </p>
                      <h3 className="text-xl sm:text-2xl font-display font-normal text-white mt-1">
                        A Warm, Clean & Welcoming Environment
                      </h3>
                    </div>
                  </div>

                  {/* Floating Metric Badge 1: 5.0 Stars */}
                  <div className="absolute -top-4 -left-4 sm:-left-6 rounded-2xl bg-white p-4 shadow-xl border border-[#E8DFC8] flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C48D46]/15 text-[#C48D46]">
                      <Star size={22} fill="currentColor" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-[#C48D46]">
                        <span className="font-display text-lg font-bold">5.0</span>
                        <span className="text-xs font-bold text-[#2B231D]">★★★★★</span>
                      </div>
                      <p className="text-[11px] font-semibold text-[#8C7A6B]">Top-Rated Studio</p>
                    </div>
                  </div>

                  {/* Floating Metric Badge 2: 6+ Years */}
                  <div className="absolute -bottom-5 -right-4 sm:-right-6 rounded-2xl bg-[#BA1296] p-4 text-white shadow-xl flex items-center gap-3 border border-white/20">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                      <Award size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="font-display text-2xl font-bold leading-none">6+ Years</p>
                      <p className="text-[11px] font-medium text-white/90 mt-0.5">
                        Mastery in Glen Burnie
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* OUR STORY: SIX YEARS OF PASSION & PRECISION */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-center">
              {/* Left Video / Visual Card */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] shadow-2xl border-4 border-[#FAF8F5]">
                  <video
                    src={welcomeVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-[360px] sm:h-[460px] w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#BA1296] px-3.5 py-1 text-xs font-bold tracking-wide">
                      <Sparkle size={12} /> Studio Craftsmanship
                    </span>
                    <p className="mt-2 text-sm font-semibold text-white/90">
                      Every appointment is handled with dedication and gentle care.
                    </p>
                  </div>
                </div>

                {/* Secondary Image Grid Under Video */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-2xl shadow-md h-36">
                    <img
                      src={transformationImg}
                      alt="Hair Braiding Transformation Glen Burnie"
                      className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-md h-36">
                    <img
                      src={cornrowsImg}
                      alt="Precision feed-in braids"
                      className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Right Text Content: Our Story */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#BA1296]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#BA1296] border border-[#BA1296]/20 mb-4">
                  <Award size={13} className="text-[#BA1296]" />
                  <span>Heritage & Dedication</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#2B231D]">
                  Our Story:{" "}
                  <span className="font-serif italic text-[#C48D46]">
                    Six Years of Passion &amp; Precision
                  </span>
                </h2>

                <div className="mt-6 space-y-5 text-base sm:text-lg leading-relaxed text-[#5C5046] font-normal">
                  <p>
                    Doussou Quality Braiding was founded from a deep love for hair and a desire
                    to provide the Glen Burnie community with an unparalleled hair experience.
                    What started as a passion for the art of braiding has blossomed into a trusted
                    studio, known for its meticulous attention to detail and warm, welcoming
                    atmosphere.
                  </p>

                  <p>
                    For six years, we have dedicated ourselves to the craft, studying and mastering
                    everything from ancient African braiding techniques to the latest trends,
                    including knotless braids, stitch braids, and faux locs. We pride ourselves on a
                    clean, friendly, and relaxing environment where you can unwind while we handle
                    your style.
                  </p>

                  <p>
                    We take the time to listen, to consult, and to create a look that not only meets
                    but exceeds your expectations. Our journey is built on the satisfaction and
                    loyalty of our clients, and we look forward to welcoming you to our growing
                    family.
                  </p>
                </div>

                {/* Milestone Counter Grid */}
                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#E8DFC8] pt-6">
                  <div>
                    <span className="font-display text-3xl sm:text-4xl font-bold text-[#C48D46]">
                      6+
                    </span>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#2B231D]">
                      Years Serving Glen Burnie
                    </p>
                  </div>
                  <div>
                    <span className="font-display text-3xl sm:text-4xl font-bold text-[#C48D46]">
                      3,000+
                    </span>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#2B231D]">
                      Happy Clients
                    </p>
                  </div>
                  <div>
                    <span className="font-display text-3xl sm:text-4xl font-bold text-[#C48D46]">
                      100%
                    </span>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#2B231D]">
                      Protective Styling Care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MEET THE MASTER BRAIDER: DOUSSOU */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-28 top-0 h-[500px] w-[500px] rounded-full bg-[#DCD4FD]/40 blur-[130px]"
          />

          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
              {/* Left Bio Column */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4">
                  <Sparkles size={13} className="text-[#C48D46]" />
                  <span>The Artistry Behind the Studio</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#2B231D]">
                  Meet the Master Braider:{" "}
                  <span className="font-serif italic text-[#C48D46]">Doussou</span>
                </h2>

                <div className="mt-6 space-y-5 text-base sm:text-lg leading-relaxed text-[#5C5046] font-normal">
                  <p>
                    At the helm of Doussou Quality Braiding is a true artist whose journey is rooted
                    in heritage and perfected through years of dedication. Doussou brings years of
                    professional experience and a deep understanding of textured hair, ensuring every
                    client receives the highest level of care. With a reputation for creating
                    flawless, long-lasting styles, Doussou is celebrated for listening to clients’
                    needs and elevating their vision.
                  </p>

                  <p>
                    As a master braider, Doussou’s philosophy is centered on hair health and scalp
                    comfort. Every braid is installed with even tension, clean parting, and a focus
                    on protecting your natural hair. This commitment to scalp-first care is what sets
                    Doussou apart as one of the top-rated stylists in Glen Burnie, MD, and the
                    surrounding areas.
                  </p>
                </div>

                {/* Quote Box */}
                <div className="mt-8 rounded-2xl bg-white p-6 border-l-4 border-[#C48D46] shadow-sm">
                  <p className="font-serif italic text-lg sm:text-xl text-[#2B231D] leading-relaxed">
                    &ldquo;Every braid is installed with even tension, clean parting, and a focus on
                    protecting your natural hair.&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#C48D46]">
                    — Doussou, Master Braider &amp; Founder
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 rounded-full bg-[#BA1296] px-7 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#960d77] hover:scale-105"
                  >
                    <Calendar size={15} />
                    <span>Book with Doussou</span>
                  </a>
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#2B231D] border border-[#E8DFC8] transition-all hover:bg-[#FAF8F5]"
                  >
                    <Phone size={15} className="text-[#C48D46]" />
                    <span>Inquire: {CONTACT.phone}</span>
                  </a>
                </div>
              </div>

              {/* Right Portrait & Signature Card */}
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-[420px]">
                  <div className="p-2 rounded-[36px] bg-gradient-to-b from-[#C48D46] via-[#E2B77B] to-[#BA1296] shadow-2xl">
                    <div className="overflow-hidden rounded-[30px] bg-white h-[460px] sm:h-[520px]">
                      <img
                        src={heroPortrait}
                        alt="Master Braider Doussou"
                        className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Floating Master Braider Seal */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl bg-white px-6 py-3.5 shadow-xl border border-[#E8DFC8] text-center w-[85%]">
                    <p className="font-display text-lg font-bold text-[#2B231D]">Doussou</p>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#C48D46]">
                      Master Stylist &amp; Texture Specialist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* WHY CHOOSE DOUSSOU QUALITY BRAIDING? (5 PILLARS) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4">
                <ShieldCheck size={13} className="text-[#C48D46]" />
                <span>The Doussou Difference</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#2B231D]">
                Why Choose{" "}
                <span className="font-serif italic text-[#C48D46]">
                  Doussou Quality Braiding?
                </span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#5C5046] font-medium leading-relaxed">
                When you book an appointment with us, you’re not just getting your hair done—you're
                investing in an exceptional experience. Here is why we are the premier choice for
                braiding in Maryland:
              </p>
            </div>

            {/* 5 Pillars Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {WHY_CHOOSE_US.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.number}
                    className={`group relative flex flex-col justify-between rounded-[24px] bg-[#FAF8F5] p-7 sm:p-8 border border-[#E8DFC8] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#C48D46]/50 ${
                      idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <div>
                      {/* Top Header inside card */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-display text-3xl font-bold text-[#C48D46]">
                          {item.number}
                        </span>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BA1296]/10 text-[#BA1296] transition-colors group-hover:bg-[#BA1296] group-hover:text-white">
                          <IconComponent size={22} />
                        </div>
                      </div>

                      <span className="inline-block rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#C48D46] border border-[#E8DFC8] mb-3">
                        {item.tag}
                      </span>

                      <h3 className="font-display text-2xl font-bold text-[#2B231D] leading-snug">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#5C5046] font-normal">
                        {item.copy}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E8DFC8]/60 flex items-center text-xs font-bold text-[#C48D46] group-hover:text-[#BA1296] transition-colors">
                      <span>Experience the quality</span>
                      <ArrowRight size={14} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* OUR SIGNATURE SERVICES */}
        {/* ========================================================================= */}
        <section id="services" className="relative overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#BA1296]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#BA1296] border border-[#BA1296]/20 mb-4">
                <Scissors size={13} className="text-[#BA1296]" />
                <span>Excellence Across Every Style</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#2B231D]">
                Our <span className="font-serif italic text-[#C48D46]">Signature Services</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#5C5046] font-medium leading-relaxed">
                We offer a comprehensive range of services to cater to every need, from everyday
                elegance to special occasion glamour:
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {SIGNATURE_SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-[24px] bg-white border border-[#E8DFC8] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#C48D46]/40 flex flex-col justify-between"
                >
                  {/* Service Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-plum-deep">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2B231D] shadow-xs">
                      {service.badge}
                    </span>
                  </div>

                  {/* Service Details */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#2B231D]">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#5C5046] font-normal">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E8DFC8]/60 flex items-center justify-between">
                      <a
                        href="#booking"
                        className="text-xs font-bold uppercase tracking-wider text-[#C48D46] hover:text-[#BA1296] transition-colors flex items-center gap-1"
                      >
                        <span>Book Style</span>
                        <ChevronRight size={14} />
                      </a>
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-[#8C7A6B]">
                        <Check size={13} className="text-[#16857B]" /> Tension-Free
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View Full Services Guide Button */}
            <div className="mt-12 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-[#C48D46] px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#A87432] hover:scale-105"
              >
                <span>View Full Pricing &amp; Services Menu</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* VISIT OUR STUDIO SECTION */}
        {/* ========================================================================= */}
        <section id="studio" className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 items-center">
              {/* Left Column: Studio Details */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4">
                  <MapPin size={13} className="text-[#C48D46]" />
                  <span>Glen Burnie Studio</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#2B231D]">
                  Visit Our <span className="font-serif italic text-[#C48D46]">Studio</span>
                </h2>

                <p className="mt-4 text-base sm:text-lg text-[#5C5046] font-medium leading-relaxed">
                  Experience the Doussou Quality Braiding difference at our Glen Burnie studio. We
                  welcome you to schedule a consultation, ask questions, and let us help you
                  achieve your signature look.
                </p>

                <div className="mt-4">
                  <p className="font-display text-2xl font-bold text-[#BA1296]">
                    Book Your Appointment Today!
                  </p>
                </div>

                {/* Studio Information Cards */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4 rounded-2xl bg-[#FAF8F5] p-5 border border-[#E8DFC8]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C48D46]/15 text-[#C48D46] mt-0.5">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#8C7A6B]">
                        Studio Address
                      </p>
                      <p className="mt-1 font-bold text-[#2B231D] text-base">
                        {CONTACT.fullAddress}
                      </p>
                      <a
                        href={CONTACT.socials.google}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#C48D46] hover:underline"
                      >
                        <span>Get Directions on Google Maps</span>
                        <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl bg-[#FAF8F5] p-5 border border-[#E8DFC8]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#BA1296]/15 text-[#BA1296] mt-0.5">
                      <Clock size={20} />
                    </div>
                    <div className="w-full">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#8C7A6B]">
                        Business Hours
                      </p>
                      <ul className="mt-2 space-y-1.5 text-sm text-[#2B231D] font-medium">
                        {CONTACT.hours.map((h) => (
                          <li key={h.day} className="flex justify-between">
                            <span className="font-semibold">{h.day}</span>
                            <span className="text-[#5C5046]">{h.time}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-[#FAF8F5] p-5 border border-[#E8DFC8]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#16857B]/15 text-[#16857B]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#8C7A6B]">
                        Direct Phone Inquiries
                      </p>
                      <a
                        href={CONTACT.phoneHref}
                        className="mt-1 block font-bold text-lg text-[#2B231D] hover:text-[#C48D46] transition-colors"
                      >
                        {CONTACT.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Studio Photo Preview */}
              <div className="relative">
                <div className="overflow-hidden rounded-[32px] shadow-2xl border-4 border-[#FAF8F5] h-[480px]">
                  <img
                    src={bookingImg}
                    alt="Doussou Quality Braiding Studio Experience"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                    <p className="font-display text-2xl sm:text-3xl font-bold">
                      A Sanctuary for Protective Styling
                    </p>
                    <p className="mt-2 text-sm text-white/90 font-medium">
                      Relax in our modern, hygienic, and welcoming studio while we craft your look.
                    </p>
                    <div className="mt-4 flex justify-center gap-3">
                      <a
                        href="#booking"
                        className="rounded-full bg-[#C48D46] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#A87432] transition-all"
                      >
                        Book Your Visit
                      </a>
                    </div>
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
                <span>Call to Action</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-normal leading-[1.15] text-white">
                Ready to Transform Your Look?{" "}
                <span className="font-serif italic text-[#E8C28A] block sm:inline">
                  Where Precision Meets Passion.
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
                Ready to transform your look? Our master stylists are eager to bring your vision to
                life. Book your appointment today to experience the Doussou difference—where
                precision meets passion and your confidence is our priority.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#C48D46] px-8 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#b07d3b] hover:scale-105 active:scale-95"
                >
                  <Calendar size={18} />
                  <span>Book an Appointment</span>
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-4 text-sm font-bold text-white border border-white/30 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95"
                >
                  <Phone size={16} />
                  <span>Call {CONTACT.phone}</span>
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
