import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
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
  Calendar,
  Phone,
  ChevronRight,
  Sparkle,
  MapPin,
  MessageSquare,
  Search,
  Instagram,
  Facebook,
  ExternalLink,
  ThumbsUp,
  Share2,
  Users,
  Camera,
  Check,
  Quote,
  Flame,
  Crown,
  Eye,
  TrendingUp,
} from "lucide-react";

import aboutStudio from "@/assets/about-studio.jpg";
import heroPortrait from "@/assets/hero-portrait.jpg";
import bookingImg from "@/assets/booking-cta.jpg";
import transformationImg from "@/assets/transformation.jpg";
import knotlessImg from "@/assets/style-knotless.jpg";
import boxbraidsImg from "@/assets/style-boxbraids.jpg";
import cornrowsImg from "@/assets/style-cornrows.jpg";

const PAGE_TITLE = "Client Reviews | What Our Clients Say About Doussou Quality Braiding";
const PAGE_DESCRIPTION =
  "Read authentic reviews from 3,000+ happy clients at Doussou Quality Braiding in Glen Burnie, MD. See why we're rated 5.0 stars for our knotless braids, cornrows, and protective styles.";

const getSchema = () => [
  {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Doussou Quality Braiding",
    description: PAGE_DESCRIPTION,
    telephone: CONTACT?.phone ?? "(301) 523-8593",
    address: {
      "@type": "PostalAddress",
      streetAddress: "337 S Hospital Dr",
      addressLocality: "Glen Burnie",
      addressRegion: "MD",
      postalCode: "21061",
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      ratingCount: "142",
      reviewCount: "142",
    },
  },
];

const REVIEWS_DATA = [
  {
    id: 1,
    name: "Jasmine K.",
    location: "Baltimore, MD",
    style: "Knotless Braids",
    category: "Knotless",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "Immaculate parting, zero scalp tension, and such a warm, welcoming studio. I drove from Baltimore and I would happily do it again every month!",
  },
  {
    id: 2,
    name: "Dee M.",
    location: "Annapolis, MD",
    style: "Feed-In Cornrows",
    category: "Cornrows",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "She listened to me, then made it even better! My cornrows were completely flawless for my sister's wedding. 10/10 recommend Doussou Quality Braiding!",
  },
  {
    id: 3,
    name: "Nia R.",
    location: "Pasadena, MD",
    style: "Kids Braiding",
    category: "Kids",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "My daughter is usually nervous getting her hair done, but Doussou put her at ease. Gentle, patient, and stunning protective braiding results!",
  },
  {
    id: 4,
    name: "Lisa M.",
    location: "Glen Burnie, MD",
    style: "Box Braids",
    category: "Box Braids",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "Fast, honest, and meticulous work! The job was clean, painless, and turned out better than I imagined. Highly professional master braider.",
  },
  {
    id: 5,
    name: "Elena P.",
    location: "Columbia, MD",
    style: "Natural Hair Styling",
    category: "Natural",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "Outstanding service! Doussou took care of my natural hair before braiding and gave me customized aftercare advice. Exceptional experience!",
  },
  {
    id: 6,
    name: "Marcus T.",
    location: "Severn, MD",
    style: "Stitch Braids",
    category: "Cornrows",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "Cleanest stitch braids in Maryland. Great atmosphere, punctual appointments, and great conversation. Will definitely be a regular client.",
  },
  {
    id: 7,
    name: "David R.",
    location: "Glen Burnie, MD",
    style: "Box Braids",
    category: "Box Braids",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "Brought my sister here for box braids and she was thrilled with the results. High quality hair used, no tight tension, and very neat parting.",
  },
  {
    id: 8,
    name: "Sarah K.",
    location: "Ellicott City, MD",
    style: "Knotless Braids",
    category: "Knotless",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "I've been getting my hair braided for years and this was by far the best experience. Doussou is a true artist. My knotless braids are perfection!",
  },
  {
    id: 9,
    name: "Michelle W.",
    location: "Odenton, MD",
    style: "Faux Locs",
    category: "Locs",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "The studio is beautiful, clean, and relaxing. Doussou made me feel so comfortable and took the time to understand exactly what I wanted. Highly recommend!",
  },
  {
    id: 10,
    name: "Tasha P.",
    location: "Bowie, MD",
    style: "Locs Maintenance",
    category: "Locs",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "I'm so happy I found Doussou Quality Braiding. My locs have never looked better. The retwist was flawless and the scalp treatment was heavenly.",
  },
  {
    id: 11,
    name: "Rachel S.",
    location: "Hanover, MD",
    style: "Senegalese Twists",
    category: "Knotless",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "Amazing customer service! They accommodated my busy schedule and got me in for a last-minute appointment. The braids are gorgeous and lasting weeks.",
  },
  {
    id: 12,
    name: "Jessica O.",
    location: "Washington, DC",
    style: "Special Occasion Updo",
    category: "Special",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "Doussou did my bridal braided updo for my wedding and it was absolutely stunning. I received so many compliments. She truly made me feel beautiful on my special day.",
  },
  {
    id: 13,
    name: "Brittany M.",
    location: "Glen Burnie, MD",
    style: "Protective Styling",
    category: "Natural",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "My natural hair has grown so much since I started coming here. The protective styles are truly protective—no breakage, no tension, just beautiful hair.",
  },
  {
    id: 14,
    name: "Danielle C.",
    location: "Silver Spring, MD",
    style: "Knotless Braids",
    category: "Knotless",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "The best braiding experience in Maryland. Clean parting, even tension, and my knotless braids lasted over two months. I'm a customer for life.",
  },
  {
    id: 15,
    name: "Angela B.",
    location: "Laurel, MD",
    style: "Kids Braiding",
    category: "Kids",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "Very professional and skilled. The attention to detail is unmatched. My daughter loves her braids and we've already booked our next appointment.",
  },
  {
    id: 16,
    name: "Kayla T.",
    location: "Columbia, MD",
    style: "Faux Locs",
    category: "Locs",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "I was nervous about getting faux locs for the first time, but Doussou walked me through everything and the result was amazing. Lightweight and beautiful!",
  },
  {
    id: 17,
    name: "Chris W.",
    location: "Glen Burnie, MD",
    style: "Cornrows",
    category: "Cornrows",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "The best in Glen Burnie. Period. The quality of the braids, the professionalism, the atmosphere—everything is top-tier. Don't hesitate to book.",
  },
  {
    id: 18,
    name: "Mia H.",
    location: "Annapolis, MD",
    style: "Box Braids",
    category: "Box Braids",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "I love that Doussou prioritizes hair health. My scalp has never felt better and my braids are always perfect. This is the only place I trust with my hair.",
  },
  {
    id: 19,
    name: "Olivia F.",
    location: "Severn, MD",
    style: "Natural Hair Styling",
    category: "Natural",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "Quick, efficient, and beautiful work. The studio is welcoming and the conversation is great. I always leave feeling confident and beautiful.",
  },
  {
    id: 20,
    name: "Naomi J.",
    location: "Baltimore, MD",
    style: "Micro Braids",
    category: "Box Braids",
    stars: 5,
    verified: "Google Review",
    date: "Verified Client",
    quote:
      "Doussou Quality Braiding is a gem! The level of skill and care is unmatched. My micro braids are stunning and I get compliments everywhere I go.",
  },
];

const STYLE_SNAPSHOTS = [
  { client: "Amara S.", style: "Knotless Braids", location: "Glen Burnie, MD", rating: "5.0 ★" },
  { client: "Jasmine K.", style: "Knotless Braids", location: "Baltimore, MD", rating: "5.0 ★" },
  { client: "Dee M.", style: "Feed-In Cornrows", location: "Annapolis, MD", rating: "5.0 ★" },
  { client: "Nia R.", style: "Kids Braiding", location: "Pasadena, MD", rating: "5.0 ★" },
  { client: "Lisa M.", style: "Box Braids", location: "Glen Burnie, MD", rating: "5.0 ★" },
  { client: "Elena P.", style: "Natural Styling", location: "Columbia, MD", rating: "5.0 ★" },
  { client: "Marcus T.", style: "Stitch Braids", location: "Severn, MD", rating: "5.0 ★" },
  { client: "David R.", style: "Box Braids", location: "Glen Burnie, MD", rating: "5.0 ★" },
  { client: "Sarah K.", style: "Knotless Braids", location: "Ellicott City, MD", rating: "5.0 ★" },
  { client: "Michelle W.", style: "Faux Locs", location: "Odenton, MD", rating: "5.0 ★" },
  { client: "Tasha P.", style: "Locs", location: "Bowie, MD", rating: "5.0 ★" },
  { client: "Rachel S.", style: "Senegalese Twists", location: "Hanover, MD", rating: "5.0 ★" },
  { client: "Jessica O.", style: "Bridal Updo", location: "Washington, DC", rating: "5.0 ★" },
  { client: "Brittany M.", style: "Protective Styling", location: "Glen Burnie, MD", rating: "5.0 ★" },
  { client: "Danielle C.", style: "Knotless Braids", location: "Silver Spring, MD", rating: "5.0 ★" },
  { client: "Angela B.", style: "Kids Braiding", location: "Laurel, MD", rating: "5.0 ★" },
  { client: "Kayla T.", style: "Faux Locs", location: "Columbia, MD", rating: "5.0 ★" },
  { client: "Chris W.", style: "Cornrows", location: "Glen Burnie, MD", rating: "5.0 ★" },
  { client: "Mia H.", style: "Box Braids", location: "Annapolis, MD", rating: "5.0 ★" },
  { client: "Olivia F.", style: "Natural Styling", location: "Severn, MD", rating: "5.0 ★" },
  { client: "Naomi J.", style: "Micro Braids", location: "Baltimore, MD", rating: "5.0 ★" },
];

const TRUST_SIGNALS = [
  { element: "100+ Google Reviews", benefit: "Real, verified client feedback & experiences" },
  { element: "5.0 Star Rating", benefit: "Consistently excellent service across every appointment" },
  { element: "3,000+ Clients Served", benefit: "Proven track record of reliability and trust" },
  { element: "6+ Years Experience", benefit: "Master-level African braiding craftsmanship" },
  { element: "Baltimore, MD & DC Area", benefit: "Recognized as a regional protective styling destination" },
  { element: "Featured in Local Media", benefit: "Community trust and authentic client recognition" },
  { element: "Google Business Profile", benefit: "Transparent, responsive studio communication" },
  { element: "Positive Repeat Clients", benefit: "High client retention and generational families" },
  { element: "Referral Program", benefit: "Clients proudly bring their friends and family" },
  { element: "All Textures Welcome", benefit: "Inclusive, expert care for all textured hair types" },
];

const COMMUNITY_THEMES = [
  { theme: "Hair Health", quote: "My natural hair has grown so much since I started coming here." },
  { theme: "Tension-Free", quote: "No tight tension, and very neat parting." },
  { theme: "Long-Lasting", quote: "Six weeks in and they still look like day one." },
  { theme: "Professionalism", quote: "Fast, honest, and meticulous work." },
  { theme: "Atmosphere", quote: "Warm, welcoming, and relaxing studio." },
  { theme: "Kids Braiding", quote: "Gentle, patient, and stunning protective braiding results." },
  { theme: "Bridal & Glamour", quote: "Flawless for my sister's wedding." },
];

const FILTER_CATEGORIES = [
  { id: "all", label: "All Reviews" },
  { id: "Knotless", label: "Knotless Braids" },
  { id: "Box Braids", label: "Box Braids" },
  { id: "Cornrows", label: "Cornrows & Stitch" },
  { id: "Locs", label: "Locs & Extensions" },
  { id: "Kids", label: "Kids Braiding" },
  { id: "Natural", label: "Natural Hair" },
  { id: "Special", label: "Special Occasions" },
];

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "Doussou Quality Braiding reviews, hair braiding Glen Burnie MD reviews, knotless braids reviews Baltimore, 5 star hair salon Glen Burnie, African braiding testimonials Maryland",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(getSchema()),
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReviews = useMemo(() => {
    return REVIEWS_DATA.filter((review) => {
      const matchesCategory =
        selectedCategory === "all" || review.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        review.name.toLowerCase().includes(q) ||
        review.location.toLowerCase().includes(q) ||
        review.style.toLowerCase().includes(q) ||
        review.quote.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
              <span className="text-[#2B231D] font-bold">Client Reviews</span>
            </nav>

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-center">
              {/* Left Column: Heading & Trust Highlights */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-5 shadow-xs">
                  <Star size={13} fill="currentColor" className="text-[#C48D46]" />
                  <span>5.0 Star Rated Salon • 3,000+ Happy Clients</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-normal leading-[1.12] tracking-tight text-[#2B231D]">
                  Trusted by Women{" "}
                  <span className="font-serif italic text-[#C48D46] block sm:inline">
                    Who Love Their Style
                  </span>
                </h1>

                <p className="mt-5 text-lg sm:text-xl font-serif italic text-[#2B231D] leading-relaxed">
                  Real reviews from real clients. Discover why Doussou Quality Braiding is the
                  premier choice for protective styling in Glen Burnie, Maryland.
                </p>

                <p className="mt-4 text-sm sm:text-base text-[#5C5046] font-medium leading-relaxed max-w-xl">
                  Every braid, twist, and loc is delivered with gentle tension, precision parting,
                  and an unwavering commitment to hair health. Read authentic testimonials from our
                  cherished clients across Maryland, Washington D.C., and beyond.
                </p>

                {/* Metric Summary Bar */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-2xl bg-white p-4 border border-[#E8DFC8] shadow-xs">
                    <p className="text-2xl sm:text-3xl font-display font-bold text-[#C48D46]">
                      5.0 ★
                    </p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#2B231D]">
                      Average Rating
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 border border-[#E8DFC8] shadow-xs">
                    <p className="text-2xl sm:text-3xl font-display font-bold text-[#BA1296]">
                      100+
                    </p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#2B231D]">
                      Google Reviews
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 border border-[#E8DFC8] shadow-xs">
                    <p className="text-2xl sm:text-3xl font-display font-bold text-[#16857B]">
                      3,000+
                    </p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#2B231D]">
                      Clients Served
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 border border-[#E8DFC8] shadow-xs">
                    <p className="text-2xl sm:text-3xl font-display font-bold text-[#2B231D]">
                      6+ Yrs
                    </p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#2B231D]">
                      Glen Burnie Studio
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#reviews-list"
                    className="inline-flex items-center gap-2 rounded-full bg-[#C48D46] px-7 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#A87432] transition-all hover:scale-105"
                  >
                    <span>Read Verified Reviews</span>
                    <ChevronRight size={16} />
                  </a>
                  <a
                    href="#leave-review"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#2B231D] border border-[#E8DFC8] hover:bg-[#FAF8F5] transition-all"
                  >
                    <MessageSquare size={16} className="text-[#BA1296]" />
                    <span>Leave a Review</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Featured Quote Card */}
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-[440px]">
                  <div className="rounded-[32px] bg-gradient-to-br from-[#BA1296] via-[#A81585] to-[#730959] p-8 text-white shadow-2xl relative overflow-hidden">
                    <Quote
                      size={120}
                      className="absolute -top-6 -right-6 text-white/10 pointer-events-none"
                    />

                    <div className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white mb-6">
                      <Star size={13} fill="currentColor" />
                      <Star size={13} fill="currentColor" />
                      <Star size={13} fill="currentColor" />
                      <Star size={13} fill="currentColor" />
                      <Star size={13} fill="currentColor" />
                      <span className="ml-1 text-[11px]">Featured Testimonial</span>
                    </div>

                    <p className="font-serif italic text-xl sm:text-2xl leading-relaxed text-white">
                      &ldquo;The most comfortable knotless braids I have ever had. Six weeks in and
                      they still look like day one. Doussou Quality Braiding takes real pride in hair
                      health!&rdquo;
                    </p>

                    <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
                      <div>
                        <p className="font-display text-xl font-bold">Amara S.</p>
                        <p className="text-xs text-white/80">Glen Burnie, MD • Knotless Braids</p>
                      </div>
                      <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                        Verified
                      </span>
                    </div>
                  </div>

                  {/* Floating Google Seal */}
                  <div className="absolute -bottom-5 -left-4 sm:-left-6 rounded-2xl bg-white p-3.5 shadow-xl border border-[#E8DFC8] flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C48D46]/15 text-[#C48D46]">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2B231D]">Google Verified 5.0</p>
                      <p className="text-[10px] text-[#8C7A6B]">100% Genuine Experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* REVIEW HIGHLIGHTS BY CATEGORY */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white py-14 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#BA1296]">
                What Clients Love Most
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2B231D] mt-1">
                Review Highlights by Category
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-[#FAF8F5] p-5 border border-[#E8DFC8] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C48D46] mb-2">
                    <Crown size={14} />
                    <span>Most Praised Style</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#2B231D]">Knotless Braids</h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#5C5046] italic leading-relaxed">
                    &ldquo;The most comfortable knotless braids I have ever had.&rdquo;
                  </p>
                </div>
                <p className="mt-4 pt-3 border-t border-[#E8DFC8] text-[11px] font-bold text-[#2B231D]">
                  — Amara S., Glen Burnie
                </p>
              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-5 border border-[#E8DFC8] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16857B] mb-2">
                    <Heart size={14} />
                    <span>Most Praised Focus</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#2B231D]">Hair Health</h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#5C5046] italic leading-relaxed">
                    &ldquo;Tension-free technique and scalp-first care.&rdquo;
                  </p>
                </div>
                <p className="mt-4 pt-3 border-t border-[#E8DFC8] text-[11px] font-bold text-[#2B231D]">
                  — Brittany M., Glen Burnie
                </p>
              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-5 border border-[#E8DFC8] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#BA1296] mb-2">
                    <ShieldCheck size={14} />
                    <span>Most Praised Quality</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#2B231D]">Professionalism</h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#5C5046] italic leading-relaxed">
                    &ldquo;Professional, punctual, and meticulous work.&rdquo;
                  </p>
                </div>
                <p className="mt-4 pt-3 border-t border-[#E8DFC8] text-[11px] font-bold text-[#2B231D]">
                  — Chris W., Glen Burnie
                </p>
              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-5 border border-[#E8DFC8] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C48D46] mb-2">
                    <Sparkles size={14} />
                    <span>Most Praised Setting</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#2B231D]">Atmosphere</h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#5C5046] italic leading-relaxed">
                    &ldquo;Warm, welcoming, clean and relaxing studio.&rdquo;
                  </p>
                </div>
                <p className="mt-4 pt-3 border-t border-[#E8DFC8] text-[11px] font-bold text-[#2B231D]">
                  — Michelle W., Odenton
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE REVIEWS DIRECTORY (ALL 20 VERIFIED REVIEWS) */}
        {/* ========================================================================= */}
        <section id="reviews-list" className="relative overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-3">
                  <Star size={13} fill="currentColor" />
                  <span>Real Client Feedback</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#2B231D]">
                  Featured <span className="font-serif italic text-[#C48D46]">Client Reviews</span>
                </h2>
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C7A6B]"
                />
                <input
                  type="text"
                  placeholder="Search reviews or city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-[#E8DFC8] bg-white pl-10 pr-4 py-2.5 text-xs text-[#2B231D] outline-none transition-all placeholder:text-[#8C7A6B]/60 focus:border-[#C48D46] focus:ring-2 focus:ring-[#C48D46]/20 font-medium"
                />
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className="mb-10 flex flex-wrap gap-2">
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? "bg-[#BA1296] text-white shadow-sm scale-105"
                      : "bg-white text-[#2B231D] border border-[#E8DFC8] hover:border-[#C48D46] hover:bg-[#FAF8F5]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Reviews Cards Grid */}
            {filteredReviews.length === 0 ? (
              <div className="rounded-3xl bg-white p-12 text-center border border-[#E8DFC8]">
                <p className="text-base font-semibold text-[#2B231D]">
                  No reviews match your search filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 rounded-full bg-[#C48D46] px-5 py-2 text-xs font-bold text-white"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredReviews.map((rev) => (
                  <article
                    key={rev.id}
                    className="group relative flex flex-col justify-between rounded-[28px] bg-white border border-[#E8DFC8] p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#C48D46]/50"
                  >
                    <div>
                      {/* Top Row: Stars and Google Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex text-[#C48D46]">
                          {[...Array(rev.stars)].map((_, i) => (
                            <Star key={i} size={15} fill="currentColor" />
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#16857B]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#16857B] border border-[#16857B]/20">
                          <Check size={11} /> {rev.verified}
                        </span>
                      </div>

                      {/* Quote Body */}
                      <p className="text-sm sm:text-[15px] leading-relaxed text-[#2B231D] font-normal italic">
                        &ldquo;{rev.quote}&rdquo;
                      </p>
                    </div>

                    {/* Footer Row: Client Info & Style */}
                    <div className="mt-6 pt-4 border-t border-[#E8DFC8]/60 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-display text-base font-bold text-[#2B231D]">
                          {rev.name}
                        </p>
                        <p className="text-[11px] font-medium text-[#8C7A6B]">{rev.location}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block rounded-full bg-[#FAF8F5] px-3 py-1 text-[11px] font-bold text-[#C48D46] border border-[#E8DFC8]">
                          {rev.style}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* REVIEW GALLERY: STYLE SNAPSHOTS TABLE */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-3">
                <Camera size={13} className="text-[#C48D46]" />
                <span>Client Style Directory</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-normal leading-tight text-[#2B231D]">
                Review Gallery:{" "}
                <span className="font-serif italic text-[#C48D46]">Style Snapshots</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#5C5046] font-medium">
                A verified breakdown of satisfied clients and their chosen protective styles across
                Maryland &amp; DC.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#FAF8F5] border border-[#E8DFC8] overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[#E8DFC8] bg-white text-[#8C7A6B] uppercase font-bold text-[10px] tracking-wider">
                      <th className="py-3.5 px-6">Client</th>
                      <th className="py-3.5 px-6">Chosen Style</th>
                      <th className="py-3.5 px-6">Location</th>
                      <th className="py-3.5 px-6">Rating</th>
                      <th className="py-3.5 px-6 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8DFC8]/60 font-medium text-[#2B231D]">
                    {STYLE_SNAPSHOTS.map((snap, i) => (
                      <tr
                        key={snap.client}
                        className={`transition-colors hover:bg-white ${
                          i % 2 === 0 ? "bg-[#FAF8F5]" : "bg-white/50"
                        }`}
                      >
                        <td className="py-3.5 px-6 font-bold">{snap.client}</td>
                        <td className="py-3.5 px-6">
                          <span className="inline-block rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-[#BA1296] border border-[#E8DFC8]">
                            {snap.style}
                          </span>
                        </td>
                        <td className="py-3.5 px-6 text-[#5C5046]">{snap.location}</td>
                        <td className="py-3.5 px-6 font-bold text-[#C48D46]">
                          ⭐⭐⭐⭐⭐ {snap.rating}
                        </td>
                        <td className="py-3.5 px-6 text-right">
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#16857B]">
                            <Check size={12} /> Verified
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* LEAVE US A REVIEW PORTAL */}
        {/* ========================================================================= */}
        <section
          id="leave-review"
          className="relative overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-b border-[#E8DFC8]"
        >
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
              {/* Left Info Column */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#BA1296]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#BA1296] border border-[#BA1296]/20 mb-4">
                  <MessageSquare size={13} className="text-[#BA1296]" />
                  <span>Your Feedback Matters</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#2B231D]">
                  Leave Us a <span className="font-serif italic text-[#C48D46]">Review</span>
                </h2>

                <p className="mt-4 text-base sm:text-lg text-[#5C5046] font-medium leading-relaxed">
                  Your reviews help our salon grow and continue to provide the highest standard of
                  protective hair braiding in Maryland. If you've had a great experience at Doussou
                  Quality Braiding, we would love to hear from you!
                </p>

                {/* Review Prompts Box */}
                <div className="mt-8 rounded-2xl bg-white p-6 border border-[#E8DFC8] shadow-xs">
                  <h3 className="font-bold text-sm text-[#2B231D] mb-3 flex items-center gap-2">
                    <Sparkles size={16} className="text-[#C48D46]" />
                    Review Suggestions &amp; Prompts:
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#5C5046]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C48D46] font-bold">•</span>
                      <span>⭐ Rate your overall braiding and scalp comfort experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C48D46] font-bold">•</span>
                      <span>📝 What style did you get? How long did it last?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C48D46] font-bold">•</span>
                      <span>📸 Upload a photo of your braids on Google or Instagram</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C48D46] font-bold">•</span>
                      <span>📍 Tag <strong>@DoussouQualityBraiding</strong> or use <strong>#DoussouBraids</strong></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Action Portal Cards */}
              <div className="space-y-4">
                {/* Google Review Card */}
                <a
                  href={CONTACT.socials.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-6 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs transition-all duration-300 hover:border-[#C48D46] hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C48D46]/15 text-[#C48D46] font-bold text-xl">
                      G
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-bold text-[#2B231D]">
                        Review on Google Business
                      </h4>
                      <p className="text-xs text-[#8C7A6B]">
                        Share your 5-star rating &amp; photos on Google
                      </p>
                    </div>
                  </div>
                  <ExternalLink size={18} className="text-[#8C7A6B] group-hover:text-[#C48D46]" />
                </a>

                {/* Facebook Review Card */}
                <a
                  href={CONTACT.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-6 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs transition-all duration-300 hover:border-[#BA1296] hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BA1296]/15 text-[#BA1296]">
                      <Facebook size={22} />
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-bold text-[#2B231D]">
                        Review on Facebook
                      </h4>
                      <p className="text-xs text-[#8C7A6B]">
                        Recommend Doussou Quality Braiding to friends
                      </p>
                    </div>
                  </div>
                  <ExternalLink size={18} className="text-[#8C7A6B] group-hover:text-[#BA1296]" />
                </a>

                {/* Instagram Tag Card */}
                <a
                  href={CONTACT.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-6 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs transition-all duration-300 hover:border-[#16857B] hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#16857B]/15 text-[#16857B]">
                      <Instagram size={22} />
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-bold text-[#2B231D]">
                        Tag Us on Instagram
                      </h4>
                      <p className="text-xs text-[#8C7A6B]">
                        Post your hairstyle and tag @DoussouQualityBraiding
                      </p>
                    </div>
                  </div>
                  <ExternalLink size={18} className="text-[#8C7A6B] group-hover:text-[#16857B]" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TRUST SIGNALS & VERIFIED REVIEW BADGES */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            {/* Badges Bar */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
              <div className="rounded-2xl bg-[#FAF8F5] p-5 border border-[#E8DFC8] text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#16857B]/15 text-[#16857B] mb-2">
                  <CheckCircle2 size={20} />
                </div>
                <p className="font-bold text-sm text-[#2B231D]">Google Verified</p>
                <p className="text-xs text-[#8C7A6B]">100+ Real Client Reviews</p>
              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-5 border border-[#E8DFC8] text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#C48D46]/15 text-[#C48D46] mb-2">
                  <Star size={20} fill="currentColor" />
                </div>
                <p className="font-bold text-sm text-[#2B231D]">5.0 Average</p>
                <p className="text-xs text-[#8C7A6B]">Top-Rated Braiding Studio</p>
              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-5 border border-[#E8DFC8] text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#BA1296]/15 text-[#BA1296] mb-2">
                  <Award size={20} />
                </div>
                <p className="font-bold text-sm text-[#2B231D]">2026 Award</p>
                <p className="text-xs text-[#8C7A6B]">Best Salon, Glen Burnie</p>
              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-5 border border-[#E8DFC8] text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#2B231D]/10 text-[#2B231D] mb-2">
                  <Users size={20} />
                </div>
                <p className="font-bold text-sm text-[#2B231D]">3,000+ Clients</p>
                <p className="text-xs text-[#8C7A6B]">Trusted by Thousands</p>
              </div>
            </div>

            {/* Trust Signals 10-Point Grid */}
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B231D] mb-4">
                  Why Clients Trust Our Glen Burnie Studio
                </h3>
                <p className="text-sm text-[#5C5046] font-medium leading-relaxed mb-6">
                  We have built our reputation on precision, punctuality, hygiene, and genuine care
                  for textured hair.
                </p>

                <div className="space-y-3">
                  {TRUST_SIGNALS.map((t) => (
                    <div
                      key={t.element}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DFC8] text-xs sm:text-sm font-medium"
                    >
                      <span className="font-bold text-[#2B231D]">{t.element}</span>
                      <span className="text-[#5C5046] text-right">{t.benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Proof Stats & Community Themes */}
              <div className="space-y-8">
                <div className="rounded-3xl bg-[#FAF8F5] border border-[#E8DFC8] p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-bold text-[#2B231D] mb-4">
                    Social Proof Highlights
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-[#E8DFC8]">
                      <p className="text-xs font-bold text-[#8C7A6B]">📸 Instagram Posts</p>
                      <p className="font-display text-xl font-bold text-[#BA1296] mt-0.5">500+ Features</p>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#E8DFC8]">
                      <p className="text-xs font-bold text-[#8C7A6B]">📍 Google Map Views</p>
                      <p className="font-display text-xl font-bold text-[#C48D46] mt-0.5">10,000+</p>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#E8DFC8]">
                      <p className="text-xs font-bold text-[#8C7A6B]">🔍 Search Visibility</p>
                      <p className="font-display text-xl font-bold text-[#16857B] mt-0.5">#1 Glen Burnie</p>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#E8DFC8]">
                      <p className="text-xs font-bold text-[#8C7A6B]">👀 Monthly Visitors</p>
                      <p className="font-display text-xl font-bold text-[#2B231D] mt-0.5">5,000+</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-[#FAF8F5] border border-[#E8DFC8] p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-bold text-[#2B231D] mb-4">
                    Community Themes
                  </h3>
                  <div className="space-y-2 text-xs">
                    {COMMUNITY_THEMES.map((th) => (
                      <div
                        key={th.theme}
                        className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-[#E8DFC8]"
                      >
                        <span className="font-bold text-[#BA1296]">{th.theme}</span>
                        <span className="italic text-[#5C5046] text-right">&ldquo;{th.quote}&rdquo;</span>
                      </div>
                    ))}
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
                <span>Experience the Doussou Difference</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-normal leading-[1.15] text-white">
                Ready to Experience the{" "}
                <span className="font-serif italic text-[#E8C28A] block sm:inline">
                  Doussou Difference?
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
                Join our growing family of 3,000+ satisfied clients. Book your appointment today and
                see why we're the most trusted braiding studio in Glen Burnie, MD.
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
                  <span>Call: {CONTACT.phone}</span>
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
