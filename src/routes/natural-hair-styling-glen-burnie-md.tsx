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
  Droplets,
} from "lucide-react";

import styleNaturalImg from "@/assets/style-natural.jpg";
import combTwistsImg from "@/assets/services/comb-twists.jpg";
import singleBraidNaturalImg from "@/assets/services/single-braid-natural.jpg";
import styleTreatmentImg from "@/assets/style-treatment.jpg";

const PAGE_TITLE = "Natural Hair Styling Glen Burnie MD | Twists, Wash & Deep Care";
const PAGE_DESCRIPTION =
  "Healthy natural hair care & styling in Glen Burnie, MD at 337 S Hospital Dr. Two-strand twists, comb coils, gentle wash & deep hydration treatments from $30. Book online.";
const CANONICAL = "https://www.doussouqualitybraiding.com/natural-hair-styling-glen-burnie-md";

const NATURAL_FAQS = [
  {
    q: "Do you specialize in 4C textured natural hair?",
    a: "Absolutely! We celebrate and specialize in all Afro-textured curl types (3A through 4C). Our braiders understand the unique moisture needs, shrinkage, and delicate elasticity of coily hair, ensuring zero-damage detangling and styling.",
  },
  {
    q: "What is included in your Hair Wash & Deep Conditioning treatment?",
    a: "Our deep treatment includes a clarifying shampoo to eliminate scalp debris, followed by a rich moisture-protein mask, gentle steam therapy to open cuticles for deep hydration, and a leave-in botanical conditioner with scalp massage.",
  },
  {
    q: "How long do two-strand twists last on natural hair?",
    a: "Two-strand twists on natural hair typically last 2 to 4 weeks. You can also unravel them after a week or two to enjoy a gorgeous, defined twist-out afro with immense body and volume.",
  },
  {
    q: "Do you offer takedown services for old braids?",
    a: "Yes! Taking down long-term protective styles incorrectly can lead to unnecessary matting and breakage. We offer safe, gentle takedown services followed by clarifying wash and blowout for natural hair ($40) or extension styles ($120).",
  },
  {
    q: "Do I need to straighten my hair before coming in for natural styling?",
    a: "No! Please never apply flat-iron heat to your hair prior to your visit. We work with your hair in its natural state. Simply arrive with detangled hair, or add our wash and blowout service to your appointment.",
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
    serviceType: "Natural Hair Styling & Scalp Treatments",
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
      lowPrice: "30",
      highPrice: "120",
      priceCurrency: "USD",
    },
    description:
      "Nourishing natural hair styling, two-strand twists, comb twists, deep conditioning treatments, and safe braid takedown in Glen Burnie, MD.",
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
        name: "Natural Hair Styling Glen Burnie MD",
        item: CANONICAL,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: NATURAL_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  },
];

export const Route = createFileRoute("/natural-hair-styling-glen-burnie-md")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { name: "keywords", content: "Natural Hair Styling Glen Burnie MD, two-strand twists Glen Burnie, comb twists Maryland, 4C natural hair salon Pasadena Severn Baltimore, deep conditioning treatment Glen Burnie" },
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
  component: NaturalHairStylingPage,
});

const NATURAL_SERVICES = [
  {
    name: "Two Strand Twists",
    price: "$70-$85",
    duration: "1.5 - 2.5 hrs",
    image: styleNaturalImg,
    description: "Plump, defined twists crafted on natural hair using botanical butter and oil sealants. Wear as twists for weeks or untwist for a lush twist-out afro.",
    features: ["100% natural hair", "Moisture sealing hydration", "Zero heat required", "Lasts 2 to 4 weeks"],
  },
  {
    name: "Comb Twists",
    price: "$65-$85",
    duration: "1.5 - 2 hrs",
    image: combTwistsImg,
    description: "Classic comb coil technique yielding crisp, defined cylindrical coils. Excellent as a starter loc foundation or a standalone sleek natural look.",
    features: ["Clean scalp grid parts", "High coil definition", "Quick appointment time", "Great for short natural hair"],
  },
  {
    name: "Braids Natural",
    price: "$65-$85",
    duration: "1.5 - 2.5 hrs",
    image: singleBraidNaturalImg,
    description: "Scalp cornrows or free-hanging plaits using only your own hair without added synthetic fibers. Lightweight and breathable for workouts.",
    features: ["Zero added weight", "Gentle on fragile edges", "Comfortable sleep profile", "Easy home wash routine"],
  },
  {
    name: "Single Braid Natural Hair",
    price: "$60",
    duration: "1.5 - 2 hrs",
    image: singleBraidNaturalImg,
    description: "Free-flowing single three-strand plaits on natural hair. Provides maximum styling flexibility for buns, pins, and hair wraps.",
    features: ["Classic box parts", "Featherlight comfort", "Protective moisture lock", "No synthetic tension"],
  },
  {
    name: "Hair Wash & Deep Conditioning",
    price: "$45-$65",
    duration: "45 min - 1 hr",
    image: styleTreatmentImg,
    description: "Restorative scalp scrub, clarifying bath, and deep penetrating hydrating steam conditioning mask to revive dry, thirsty strands.",
    features: ["Clarifying bath", "Deep steam treatment", "Scalp circulation massage", "Replenishes elasticity"],
  },
  {
    name: "Undo Braids + Wash/Blow Dry",
    price: "$40-$120",
    duration: "1.5 - 3.5 hrs",
    image: styleTreatmentImg,
    description: "Pain-free professional style takedown preventing shed-hair matting, followed by a nourishing wash, conditioner, and gentle tension blowout.",
    features: ["Matting prevention", "Saves time and breakage", "Complete wash & blow", "Preps hair for new style"],
  },
];

function NaturalHairStylingPage() {
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
              Natural Hair Styling Glen Burnie MD
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
                <Droplets className="w-3.5 h-3.5 text-[#C5A059]" />
                Healthy Hair & Scalp Sanctuary
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#4A1525] leading-tight mb-4 font-bold">
                Nourishing Natural Hair Styling in Glen Burnie, MD
              </h1>
              <p className="text-base sm:text-lg text-[#5A534A] leading-relaxed mb-6 max-w-2xl">
                Honor your natural curls, coils, and kinks with low-manipulation styles and deep hydration. Located at{" "}
                <strong className="text-[#2D2A26] font-semibold">337 S Hospital Dr, Glen Burnie, MD 21061</strong>, Doussou Quality Braiding provides two-strand twists, comb coils, steam conditioning, and gentle takedowns that promote real retention and growth.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="bg-white p-3 rounded-lg border border-[#EADFCB] shadow-xs">
                  <div className="text-xs text-[#7C756D]">Natural Twists</div>
                  <div className="text-xl font-bold text-[#4A1525] font-serif">$70-$85</div>
                  <div className="text-[11px] text-[#A69F95]">Moisture sealed</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#EADFCB] shadow-xs">
                  <div className="text-xs text-[#7C756D]">Deep Condition</div>
                  <div className="text-xl font-bold text-[#4A1525] font-serif">$45-$65</div>
                  <div className="text-[11px] text-[#A69F95]">Steam therapy included</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#EADFCB] shadow-xs col-span-2 sm:col-span-1">
                  <div className="text-xs text-[#7C756D]">Textures</div>
                  <div className="text-xl font-bold text-[#4A1525] font-serif">3A to 4C</div>
                  <div className="text-[11px] text-[#A69F95]">Gentle finger detangling</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedService({
                      name: "Two Strand Twists",
                      price: "$70-$85",
                      duration: "1.5 - 2.5 hrs",
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#4A1525] hover:bg-[#38101C] text-white font-medium rounded-lg shadow-md transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                  Book Natural Style
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
                  src={styleNaturalImg}
                  alt="Beautiful natural hair styling and twist-out styled at Doussou Quality Braiding Glen Burnie MD"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="450"
                  height="560"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-serif text-lg font-bold">Natural Hair Care & Styling</p>
                    <p className="text-xs text-white/80">Styled with care at Doussou Quality Braiding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Natural Styles & Pricing Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-bold mb-3">
              Natural Hair Services & Transparent Pricing
            </h2>
            <p className="text-[#5A534A] text-sm sm:text-base">
              Clear, honest pricing for natural protective styling, scalp restoration, and takedown care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NATURAL_SERVICES.map((style, idx) => (
              <div
                key={idx}
                className="bg-[#FFFDF9] rounded-xl border border-[#EADFCB] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[#FAF5ED]">
                  <img
                    src={style.image}
                    alt={`${style.name} at Doussou Quality Braiding in Glen Burnie Maryland`}
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
                    <span className="text-[#4A1525] font-semibold">100% Real Hair</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#4A1525] mb-2">{style.name}</h3>
                  <p className="text-xs sm:text-sm text-[#5A534A] mb-4 flex-1">{style.description}</p>

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
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scalp & Moisture Principles */}
      <section className="py-16 bg-[#FAF5ED] border-y border-[#EADFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#4A1525] font-bold mb-3">
              Our 3 Principles of Natural Hair Retention
            </h2>
            <p className="text-[#5A534A] text-sm sm:text-base">
              How we nurture length retention, moisture balance, and healthy edges for natural clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#EADFCB] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#4A1525] mb-4">
                <Heart className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#4A1525] mb-2">1. Tension-Free Manipulation</h3>
              <p className="text-xs text-[#5A534A] leading-relaxed">
                Aggressive pulling snaps tight coils. We detangle slowly from ends to roots using wide-tooth tools and rich botanical slip.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#EADFCB] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#4A1525] mb-4">
                <Droplets className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#4A1525] mb-2">2. Deep Hydration Sealing</h3>
              <p className="text-xs text-[#5A534A] leading-relaxed">
                Water is the true moisturizer. We hydrate the hair shaft thoroughly and seal with non-comedogenic oils so styles hold moisture for weeks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#EADFCB] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#4A1525] mb-4">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#4A1525] mb-2">3. Edge & Nape Protection</h3>
              <p className="text-xs text-[#5A534A] leading-relaxed">
                The finest hairs live along your hairline. We never apply excessive tension to perimeter hairs, preserving fullness and avoiding traction alopecia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Glen Burnie Section */}
      <section className="py-14 bg-white border-b border-[#EADFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF5ED] rounded-2xl p-6 sm:p-8 border border-[#EADFCB] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A1525]">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                Glen Burnie Natural Hair Studio
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#4A1525]">
                Natural Hair Care for Glen Burnie, Pasadena, Severn & Baltimore
              </h2>
              <p className="text-xs sm:text-sm text-[#5A534A]">
                Visit us at 337 S Hospital Dr for attentive, one-on-one natural hair styling in a warm, welcoming community setting.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#4A1525] text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-[#38101C] transition-colors"
              >
                Contact & Directions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-[#FFFDF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#4A1525] font-bold mb-3">
              Natural Hair FAQs
            </h2>
            <p className="text-[#5A534A] text-sm">
              Common questions on natural styling, treatments, and appointments.
            </p>
          </div>

          <div className="space-y-3">
            {NATURAL_FAQS.map((faq, idx) => (
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
            Give Your Natural Hair the Love It Deserves
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            Book your twists, deep conditioning treatment, or safe takedown at Doussou Quality Braiding today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() =>
                setSelectedService({
                  name: "Two Strand Twists",
                  price: "$70-$85",
                  duration: "1.5 - 2.5 hrs",
                })
              }
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] hover:bg-[#B38F46] text-[#2D2A26] font-bold rounded-lg text-sm shadow-md transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Natural Style
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

