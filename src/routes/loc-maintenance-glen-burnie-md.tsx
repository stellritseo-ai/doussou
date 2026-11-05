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
  RefreshCw,
} from "lucide-react";

import interLocImg from "@/assets/services/inter-loc.jpg";
import barrelTwistImg from "@/assets/services/barrel-twist.jpg";
import styleLocsImg from "@/assets/style-locs.jpg";

const PAGE_TITLE = "Loc Maintenance Glen Burnie MD | Retwist & Starter Locs Salon";
const PAGE_DESCRIPTION =
  "Expert loc maintenance, starter locs & dreadlock retwists in Glen Burnie, MD at 337 S Hospital Dr. Clean palm rolling, interlocking & barrel twists from $80. Book online.";
const CANONICAL = "https://www.doussouqualitybraiding.com/loc-maintenance-glen-burnie-md";

const LOC_FAQS = [
  {
    q: "How often should I get my locs retwisted?",
    a: "We recommend scheduling a retwist every 4 to 6 weeks. This keeps your parts crisp and clean, allows new growth to integrate smoothly into each loc matrix, and prevents roots from thinning or merging together.",
  },
  {
    q: "What products do you use for retwisting?",
    a: "We exclusively use residue-free, water-soluble natural locking gels and organic plant oils. We never use heavy beeswax or petroleum-based pomades that create trapped build-up or lint deep inside mature locs.",
  },
  {
    q: "How do you start starter locs for new clients?",
    a: "Depending on your hair texture, curl pattern, and personal goals, we initiate starter locs using comb coils, two-strand twists, or instant interlocking. We provide comprehensive first-stage homecare guidance to help your locs bud and mature cleanly.",
  },
  {
    q: "What is interlocking and who is it best for?",
    a: "Interlocking is a maintenance technique where a specialized latch hook tool weaves the end of the loc through the root growth in a 4-point rotation. It is ideal for active individuals, athletes, swimmers, or those with fine hair textures because it withstands frequent washing without unraveling.",
  },
  {
    q: "Do you offer loc styling like barrel twists or updos?",
    a: "Yes! Many clients pair their wash and retwist with barrel twists, loc petal buns, fishtail braids, or ropes. Loc styles help preserve your retwist longer and look sophisticated for both work and formal occasions.",
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
    serviceType: "Loc Maintenance & Starter Locs",
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
      lowPrice: "80",
      highPrice: "300",
      priceCurrency: "USD",
    },
    description:
      "Professional dreadlock maintenance, starter locs, palm roll retwists, and interlocking in Glen Burnie, MD. Clean parts, residue-free products, and scalp care.",
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
        name: "Loc Maintenance Glen Burnie MD",
        item: CANONICAL,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: LOC_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  },
];

export const Route = createFileRoute("/loc-maintenance-glen-burnie-md")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { name: "keywords", content: "Loc Maintenance Glen Burnie MD, dreadlock retwist Glen Burnie, starter locs Maryland, interlocking salon Pasadena Severn Baltimore, palm roll locs Anne Arundel" },
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
  component: LocMaintenancePage,
});

const LOC_SERVICES = [
  {
    name: "Lock Maintenance",
    price: "$80-$100",
    duration: "1.5 - 2.5 hrs",
    image: styleLocsImg,
    description: "Deep clarifying scalp cleanse, tension-free palm roll retwist, crisp grid parting, and under-dryer set for long-lasting, neat results.",
    features: ["Residue-free botanicals", "Crisp grid line precision", "Includes blow/dry set", "Root thickness preservation"],
  },
  {
    name: "Lock Start",
    price: "$85-$120",
    duration: "2 - 3 hrs",
    image: styleLocsImg,
    description: "Begin your loc journey the right way. Comb coils or two-strand twists crafted with customized part sizing to ensure dense, mature growth over time.",
    features: ["Customized parting grid", "Comb coil or twist method", "Personalized homecare plan", "Build-up free products"],
  },
  {
    name: "Barrel Twist",
    price: "$80-$100",
    duration: "1.5 - 2 hrs",
    image: barrelTwistImg,
    description: "Intricately woven barrel twists over freshly retwisted locs. Keeps locs elevated, compact, and polished for up to 4 weeks.",
    features: ["Sculpted crown patterns", "Preserves retwist longer", "Great for men & women", "Protects ends from lint"],
  },
  {
    name: "Inter Loc",
    price: "$300+",
    duration: "4 - 6 hrs",
    image: interLocImg,
    description: "Specialized root interlocking technique using tool rotation. Does not require dryer setting and withstands active gym workouts and regular washing.",
    features: ["Zero product residue", "Holds through frequent sweat", "Ideal for athletes & runners", "Lasts 8 to 10 weeks"],
  },
  {
    name: "Lock Extension",
    price: "$200-$300",
    duration: "4 - 7 hrs",
    image: interLocImg,
    description: "Seamlessly attach 100% human hair or afro loc extensions to your natural hair for instant length and density that blends undetectably.",
    features: ["100% human hair integration", "Permanent loc expansion", "Exact texture match", "Immediate length satisfaction"],
  },
  {
    name: "Dread Locks",
    price: "$100",
    duration: "1.5 - 2.5 hrs",
    image: styleLocsImg,
    description: "Loc styling, specialty updos, high crown loc buns, and petal designs for weddings, proms, galas, and professional portraits.",
    features: ["Formal updo artistry", "Jewelry & cuff accents", "Gentle pin placement", "Special occasion elegance"],
  },
];

function LocMaintenancePage() {
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
              Loc Maintenance Glen Burnie MD
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
                <RefreshCw className="w-3.5 h-3.5 text-[#C5A059]" />
                Professional Loc Care & Retwist Studio
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#4A1525] leading-tight mb-4 font-bold">
                Healthy Loc Maintenance & Retwists in Glen Burnie, MD
              </h1>
              <p className="text-base sm:text-lg text-[#5A534A] leading-relaxed mb-6 max-w-2xl">
                Nurture your loc journey with clean parting, zero wax build-up, and healthy scalp care. Located at{" "}
                <strong className="text-[#2D2A26] font-semibold">337 S Hospital Dr, Glen Burnie, MD 21061</strong>, our locticians offer starter locs, regular retwists, interlocking, and barrel styling with gentle, skilled hands.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="bg-white p-3 rounded-lg border border-[#EADFCB] shadow-xs">
                  <div className="text-xs text-[#7C756D]">Retwist Price</div>
                  <div className="text-xl font-bold text-[#4A1525] font-serif">$80-$100</div>
                  <div className="text-[11px] text-[#A69F95]">Palm roll & dry set</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#EADFCB] shadow-xs">
                  <div className="text-xs text-[#7C756D]">Starter Locs</div>
                  <div className="text-xl font-bold text-[#4A1525] font-serif">$85-$120</div>
                  <div className="text-[11px] text-[#A69F95]">Precision grid parts</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#EADFCB] shadow-xs col-span-2 sm:col-span-1">
                  <div className="text-xs text-[#7C756D]">Formula</div>
                  <div className="text-xl font-bold text-[#4A1525] font-serif">Residue-Free</div>
                  <div className="text-[11px] text-[#A69F95]">No beeswax or petroleum</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedService({
                      name: "Lock Maintenance",
                      price: "$80-$100",
                      duration: "1.5 - 2.5 hrs",
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#4A1525] hover:bg-[#38101C] text-white font-medium rounded-lg shadow-md transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                  Book Loc Retwist
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
                  src={styleLocsImg}
                  alt="Neat loc maintenance and retwist styled at Doussou Quality Braiding Glen Burnie MD"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="450"
                  height="560"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-serif text-lg font-bold">Clean Loc Retwist & Updo</p>
                    <p className="text-xs text-white/80">Photographed at Doussou Quality Braiding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Loc Services & Pricing Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-bold mb-3">
              Loc Services & Transparent Pricing
            </h2>
            <p className="text-[#5A534A] text-sm sm:text-base">
              Consistent, honest pricing for starters, retwists, interlocking, and custom loc styling in Anne Arundel County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOC_SERVICES.map((style, idx) => (
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
                    <span className="text-[#4A1525] font-semibold">Residue-Free</span>
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

      {/* Why Choose Doussou for Your Loc Journey */}
      <section className="py-16 bg-[#FAF5ED] border-y border-[#EADFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#4A1525] font-bold mb-3">
              The Doussou Difference for Natural Locs
            </h2>
            <p className="text-[#5A534A] text-sm sm:text-base">
              Protecting root density and keeping your locs light, clean, and free of lint or heavy product build-up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#EADFCB] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#4A1525] mb-4">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#4A1525] mb-2">No Beeswax Policy</h3>
              <p className="text-xs text-[#5A534A] leading-relaxed">
                Beeswax locks in dirt and cannot be washed out with water. We only apply botanical locking gels that rinse completely clean every wash.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#EADFCB] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#4A1525] mb-4">
                <Scissors className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#4A1525] mb-2">Root Density Protection</h3>
              <p className="text-xs text-[#5A534A] leading-relaxed">
                We never over-twist or yank at delicate roots. Healthy follicles mean your locs will stay strong and thick as they grow down your back.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#EADFCB] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#4A1525] mb-4">
                <Heart className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#4A1525] mb-2">Scalp Hydration Ritual</h3>
              <p className="text-xs text-[#5A534A] leading-relaxed">
                Every retwist is complemented with gentle scalp stimulation and natural essential oils (tea tree, peppermint, jojoba) to soothe itching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Glen Burnie Callout */}
      <section className="py-14 bg-white border-b border-[#EADFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF5ED] rounded-2xl p-6 sm:p-8 border border-[#EADFCB] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A1525]">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                Anne Arundel County Loc Haven
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#4A1525]">
                Loc Maintenance Near Glen Burnie, Pasadena, Severn & Hanover
              </h2>
              <p className="text-xs sm:text-sm text-[#5A534A]">
                Conveniently located at 337 S Hospital Dr with free parking right at our doorstep. Relax in our welcoming salon while our locticians care for your crown.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#4A1525] text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-[#38101C] transition-colors"
              >
                Visit Salon
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
              Loc Maintenance FAQs
            </h2>
            <p className="text-[#5A534A] text-sm">
              Answers regarding products, retwist timing, and loc styling options.
            </p>
          </div>

          <div className="space-y-3">
            {LOC_FAQS.map((faq, idx) => (
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
            Give Your Locs the Professional Care They Deserve
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            Book your loc retwist, starter locs, or styling session at Doussou Quality Braiding today. Experience healthy roots and immaculate grid lines.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() =>
                setSelectedService({
                  name: "Lock Maintenance",
                  price: "$80-$100",
                  duration: "1.5 - 2.5 hrs",
                })
              }
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] hover:bg-[#B38F46] text-[#2D2A26] font-bold rounded-lg text-sm shadow-md transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Loc Retwist Now
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

