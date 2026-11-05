import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ServiceBookingModal, type SelectedServiceData } from "@/components/site/ServiceBookingModal";
import { CONTACT } from "@/components/site/data";
import {
  Sparkles,
  Scissors,
  CheckCircle2,
  Calendar,
  Phone,
  ChevronRight,
  Clock,
  Heart,
  ShieldCheck,
  Star,
  Check,
  ChevronDown,
  Sparkle,
  ArrowRight,
  MapPin,
} from "lucide-react";

import fauxLocsImg from "@/assets/services/faux-locs.jpg";
import interLocImg from "@/assets/services/inter-loc.jpg";
import styleLocsImg from "@/assets/style-locs.jpg";

const PAGE_TITLE = "Faux Locs Glen Burnie MD | Soft & Butterfly Locs Salon";
const PAGE_DESCRIPTION =
  "Expert faux locs, soft locs & butterfly locs in Glen Burnie, MD at 337 S Hospital Dr. Lightweight, natural texture, tension-free styling from $180. Book online today.";
const CANONICAL = "https://www.doussouqualitybraiding.com/faux-locs-glen-burnie-md";

const FAUX_LOCS_FAQS = [
  {
    q: "What is the difference between soft locs and butterfly locs?",
    a: "Soft locs use a pre-made crochet loc wrapped smoothly at the roots with spring or passion twist hair for a sleek, bohemian look with minimal texture. Butterfly locs feature intentionally pulled loops and distressing along the shaft for an organic, textured, messy-chic finish.",
  },
  {
    q: "Are faux locs heavy on the head or scalp?",
    a: "At Doussou Quality Braiding, we prioritize lightweight crochet wrap methods and premium low-density hair. Our tension-free parting ensures your locs feel featherlight without pulling on fragile temple edges or causing neck strain.",
  },
  {
    q: "How long do faux locs last?",
    a: "With routine nighttime care and scalp hydration, faux locs last 8 to 12 weeks. Because they mimic natural dreadlocks, they often look even more natural as they age and mature.",
  },
  {
    q: "Can I wash and exercise with faux locs?",
    a: "Yes! Faux locs are an ideal athletic protective style. You can cleanse your scalp using diluted shampoo or witch hazel between parts and dry thoroughly with a microfiber towel or hooded dryer.",
  },
  {
    q: "How do I take down faux locs without cutting my real hair?",
    a: "To remove them safely, identify where your natural braided hair ends inside the wrap, snip the outer wrapping hair safely 2-3 inches below that line, and unravel the wrapping fiber upwards. We also offer professional salon take-down services if you prefer.",
  },
];

const getSchema = () => [
  {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Doussou Quality Braiding",
    image: "https://www.doussouqualitybraiding.com/logo.png",
    "@id": "https://www.doussouqualitybraiding.com/#salon",
    url: "https://www.doussouqualitybraiding.com/",
    telephone: "+13015238593",
    email: "doussoukabba@gmail.com",
    priceRange: "$$",
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
      longitude: -76.6267,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "20:30",
      },
    ],
    sameAs: [
      CONTACT.socials.facebook,
      CONTACT.socials.instagram,
      CONTACT.socials.tiktok,
      CONTACT.socials.google,
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Faux Locs, Soft Locs & Butterfly Locs",
    provider: {
      "@type": "HairSalon",
      name: "Doussou Quality Braiding",
      address: {
        "@type": "PostalAddress",
        streetAddress: "337 S Hospital Dr",
        addressLocality: "Glen Burnie",
        addressRegion: "MD",
        postalCode: "21061",
        addressCountry: "US",
      },
    },
    areaServed: [
      { "@type": "City", name: "Glen Burnie" },
      { "@type": "City", name: "Pasadena" },
      { "@type": "City", name: "Severn" },
      { "@type": "City", name: "Hanover" },
      { "@type": "City", name: "Baltimore" },
      { "@type": "City", name: "Annapolis" },
    ],
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "180",
      highPrice: "280",
      priceCurrency: "USD",
    },
    description:
      "Specialist faux locs, butterfly locs, and soft locs salon in Glen Burnie, MD. Painless installation, authentic texture, and long-lasting protective styling.",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.doussouqualitybraiding.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.doussouqualitybraiding.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Faux Locs Glen Burnie MD",
        item: CANONICAL,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAUX_LOCS_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  },
];

export const Route = createFileRoute("/faux-locs-glen-burnie-md")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { name: "keywords", content: "Faux Locs Glen Burnie MD, soft locs Glen Burnie, butterfly locs Maryland, goddess locs salon Pasadena Severn Baltimore" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(getSchema()),
      },
    ],
  }),
  component: FauxLocsPage,
});

const LOC_STYLES = [
  {
    name: "Butterfly Locs / Soft Locs",
    price: "$180-$260",
    duration: "3.5 - 5 hrs",
    image: fauxLocsImg,
    description: "Trendsetting distressed bohemian butterfly locs with textured signature loops, or silky flowing soft locs. Ultra-lightweight with fluid natural movement.",
    features: ["Bohemian distressed loops", "Lightweight crochet wrap base", "Gentle on delicate hairlines", "Lasts 8 to 12 weeks"],
  },
  {
    name: "Faux Locks (Classic Wrap)",
    price: "$200-$280",
    duration: "4 - 6 hrs",
    image: styleLocsImg,
    description: "Classic cylinder wrapped locs that replicate mature, manicured dreadlocks. Exceptionally durable with high resistance to humidity and workout perspiration.",
    features: ["Mature dreadlock aesthetic", "Uniform cylinder wrapping", "Complete natural hair coverage", "Ideal gym & travel style"],
  },
  {
    name: "Inter Loc",
    price: "$300+",
    duration: "4 - 6 hrs",
    image: interLocImg,
    description: "Precision interlocking technique for natural loc roots or permanent loc cultivation. Tight, clean matrix with minimal need for constant wax or heavy gels.",
    features: ["Specialized tool technique", "Longest-lasting root hold", "No wax build-up", "Great for active lifestyles"],
  },
  {
    name: "Lock Extension",
    price: "$200-$300",
    duration: "4 - 7 hrs",
    image: fauxLocsImg,
    description: "Add instant length and volume to existing natural locs using 100% human or afro-kinky hair, flawlessly blended to match your natural diameter and texture.",
    features: ["Seamless hair integration", "Custom diameter matching", "Permanent or temporary wear", "Color-matched styling"],
  },
];

function FauxLocsPage() {
  const [selectedService, setSelectedService] = useState<SelectedServiceData | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2D2A26]">
      <Header />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF5ED] border-b border-[#EADFCB] py-3 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-[#7C756D]">
            <li>
              <Link to="/" className="hover:text-[#4A1525] transition-colors">
                Home
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li>
              <Link to="/services" className="hover:text-[#4A1525] transition-colors">
                Services
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-[#4A1525] font-semibold" aria-current="page">
              Faux Locs Glen Burnie MD
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF5ED] to-[#FFFDF9] py-14 lg:py-20 border-b border-[#EADFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EADFCB]/60 text-[#4A1525] text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkle className="w-3.5 h-3.5 text-[#C5A059]" />
                Bohemian & Classic Loc Artistry
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#4A1525] leading-tight mb-4 font-bold">
                Natural-Looking Faux Locs & Soft Locs in Glen Burnie, MD
              </h1>
              <p className="text-base sm:text-lg text-[#5A534A] leading-relaxed mb-6 max-w-2xl">
                Get the authentic, carefree beauty of locs without the lifetime commitment. Located at{" "}
                <strong className="text-[#2D2A26] font-semibold">337 S Hospital Dr, Glen Burnie, MD 21061</strong>, our salon specializes in featherlight soft locs, distressed butterfly locs, and classic faux locs that keep your natural hair completely protected.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="bg-white p-3 rounded-lg border border-[#EADFCB] shadow-xs">
                  <div className="text-xs text-[#7C756D]">Starting Price</div>
                  <div className="text-xl font-bold text-[#4A1525] font-serif">$180</div>
                  <div className="text-[11px] text-[#A69F95]">Soft & Butterfly</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#EADFCB] shadow-xs">
                  <div className="text-xs text-[#7C756D]">Wear Time</div>
                  <div className="text-xl font-bold text-[#4A1525] font-serif">8-12 Wks</div>
                  <div className="text-[11px] text-[#A69F95]">Ages beautifully</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#EADFCB] shadow-xs col-span-2 sm:col-span-1">
                  <div className="text-xs text-[#7C756D]">Weight Profile</div>
                  <div className="text-xl font-bold text-[#4A1525] font-serif">Featherlight</div>
                  <div className="text-[11px] text-[#A69F95]">Zero neck strain</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedService({
                      name: "Butterfly Locs / Soft Locs",
                      price: "$180-$260",
                      duration: "3.5 - 5 hrs",
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#4A1525] hover:bg-[#38101C] text-white font-medium rounded-lg shadow-md transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                  Book Faux Locs
                </button>
                <a
                  href={`tel:${CONTACT.phone.replace(/[^0-9]/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-[#FAF5ED] text-[#4A1525] border border-[#EADFCB] font-medium rounded-lg shadow-xs transition-all"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  Call (301) 523-8593
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] max-w-md mx-auto">
                <img
                  src={fauxLocsImg}
                  alt="Beautiful bohemian soft faux locs installed at Doussou Quality Braiding Glen Burnie MD"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="450"
                  height="560"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-serif text-lg font-bold">Soft Bohemian Faux Locs</p>
                    <p className="text-xs text-white/80">Photographed at Doussou Quality Braiding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Loc Styles & Pricing Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-bold mb-3">
              Faux Loc Styles & Transparent Pricing
            </h2>
            <p className="text-[#5A534A] text-sm sm:text-base">
              Explore our versatile collection of soft, butterfly, and interlocking loc techniques tailored to your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOC_STYLES.map((style, idx) => (
              <div
                key={idx}
                className="bg-[#FFFDF9] rounded-xl border border-[#EADFCB] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[#FAF5ED]">
                  <img
                    src={style.image}
                    alt={`${style.name} styled at Doussou Quality Braiding in Glen Burnie Maryland`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    width="400"
                    height="275"
                  />
                  <div className="absolute top-3 right-3 bg-[#4A1525] text-white px-3 py-1 rounded-full text-xs font-serif font-bold shadow-md">
                    {style.price}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center justify-between text-xs text-[#7C756D] mb-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      {style.duration}
                    </span>
                    <span className="text-[#4A1525] font-semibold">Tension-Free</span>
                  </div>

                  <h3 className="font-serif text-base font-bold text-[#4A1525] mb-2">{style.name}</h3>
                  <p className="text-xs text-[#5A534A] mb-4 flex-1">{style.description}</p>

                  <ul className="space-y-1.5 mb-5 text-xs text-[#5A534A]">
                    {style.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedService({
                        name: style.name,
                        price: style.price,
                        duration: style.duration,
                      })
                    }
                    className="w-full py-2.5 px-4 bg-[#FAF5ED] hover:bg-[#4A1525] text-[#4A1525] hover:text-white border border-[#EADFCB] font-medium rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book This Style
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scalp Health & Loc Care */}
      <section className="py-16 bg-[#FAF5ED] border-y border-[#EADFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#4A1525] font-bold mb-3">
              Loc Care & Scalp Health Essentials
            </h2>
            <p className="text-[#5A534A] text-sm sm:text-base">
              Faux locs look even better as they age when you nurture your scalp beneath the style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#EADFCB] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#4A1525] mb-4">
                <Heart className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#4A1525] mb-2">Zero Scalp Tension</h3>
              <p className="text-xs text-[#5A534A] leading-relaxed">
                We wrap without pulling on root follicles. Your forehead and temples will never feel sore or tight after leaving our chair.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#EADFCB] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#4A1525] mb-4">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#4A1525] mb-2">Moisture Retention</h3>
              <p className="text-xs text-[#5A534A] leading-relaxed">
                Spritz your scalp with rosewater or leave-in conditioner weekly to keep your natural hair hydrated inside the wrapped loc.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#EADFCB] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#4A1525] mb-4">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#4A1525] mb-2">Safe Unraveling</h3>
              <p className="text-xs text-[#5A534A] leading-relaxed">
                When you're ready for removal after 8-12 weeks, the outer wrap unwinds easily without snagging or cutting your natural lengths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Anne Arundel County Section */}
      <section className="py-14 bg-white border-b border-[#EADFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF5ED] rounded-2xl p-6 sm:p-8 border border-[#EADFCB] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A1525]">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                Hospital Drive Hair Salon
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#4A1525]">
                Convenient to Glen Burnie, Severn, Pasadena, BWI & Baltimore
              </h2>
              <p className="text-xs sm:text-sm text-[#5A534A]">
                Conveniently situated at 337 S Hospital Dr near BWMC with ample free parking. We welcome clients from all across Anne Arundel and Howard counties.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#4A1525] text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-[#38101C] transition-colors"
              >
                View Map & Contact
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#FFFDF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#4A1525] font-bold mb-3">
              Faux Locs Frequently Asked Questions
            </h2>
            <p className="text-[#5A534A] text-sm">
              Answers regarding weight, installation time, and loc maintenance.
            </p>
          </div>

          <div className="space-y-3">
            {FAUX_LOCS_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#EADFCB] overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-serif font-semibold text-[#4A1525] text-sm sm:text-base cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C5A059] shrink-0 transition-transform duration-200 ${
                      openFaqIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5A534A] leading-relaxed border-t border-[#FAF5ED]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-14 bg-[#4A1525] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            Get Your Dream Faux Locs at Doussou Quality Braiding
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            Experience painless, lightweight faux locs installed by Maryland's trusted braiding specialists. Book online or call today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() =>
                setSelectedService({
                  name: "Butterfly Locs / Soft Locs",
                  price: "$180-$260",
                  duration: "3.5 - 5 hrs",
                })
              }
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] hover:bg-[#B38F46] text-[#2D2A26] font-bold rounded-lg text-sm shadow-md transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Online Now
            </button>
            <a
              href={`tel:${CONTACT.phone.replace(/[^0-9]/g, "")}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium border border-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call (301) 523-8593
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Pop-up Booking Modal */}
      {selectedService && (
        <ServiceBookingModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={selectedService}
        />
      )}
    </div>
  );
}

