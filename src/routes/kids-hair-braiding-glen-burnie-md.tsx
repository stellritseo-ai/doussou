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
  Smile,
} from "lucide-react";

import styleKidsImg from "@/assets/style-kids.jpg";
import styleCornrowsImg from "@/assets/style-cornrows.jpg";
import styleNaturalImg from "@/assets/style-natural.jpg";

const PAGE_TITLE = "Kids Hair Braiding Glen Burnie MD | Gentle & Pain-Free Salon";
const PAGE_DESCRIPTION =
  "Gentle, patient kids hair braiding in Glen Burnie, MD at 337 S Hospital Dr. Pain-free cornrows, beads, twists & natural protective styles from $65. Book online today.";
const CANONICAL = "https://www.doussouqualitybraiding.com/kids-hair-braiding-glen-burnie-md";

const KIDS_FAQS = [
  {
    q: "What age children do you braid at your Glen Burnie salon?",
    a: "We welcome children typically ages 3 and older who are able to sit comfortably for the duration of the style. Our braiders are known for exceptional patience, gentle hands, and creating a warm, stress-free environment.",
  },
  {
    q: "Do you pull tightly on children's tender scalps?",
    a: "Never. We use an ultra-gentle, tension-free technique specifically developed for young tender heads. We protect delicate baby edges and temple hair, ensuring your child leaves smiling without headaches or scalp tenderness.",
  },
  {
    q: "Can I bring beads or hair accessories for my child?",
    a: "Yes! Parents are encouraged to bring their child's favorite colored beads, barrettes, or ribbons. We also carry standard wooden and acrylic beads at the salon to finish their style beautifully.",
  },
  {
    q: "How long does a kids braiding appointment typically take?",
    a: "Most kids styles take between 1.5 and 2.5 hours depending on hair length, density, and chosen style. We work efficiently so little ones don't get restless.",
  },
  {
    q: "What can I bring to keep my child entertained?",
    a: "Feel free to bring a tablet, phone with their favorite cartoons, headphones, books, and favorite snacks and drinks. We encourage parents to stay right alongside their children during the session.",
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
    serviceType: "Kids Hair Braiding",
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
      lowPrice: "60",
      highPrice: "150",
      priceCurrency: "USD",
    },
    description:
      "Gentle, tear-free kids African hair braiding in Glen Burnie, MD. Cornrows with beads, box braids, and natural styling designed specifically for tender heads.",
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
        name: "Kids Hair Braiding Glen Burnie MD",
        item: CANONICAL,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: KIDS_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  },
];

export const Route = createFileRoute("/kids-hair-braiding-glen-burnie-md")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { name: "keywords", content: "Kids Hair Braiding Glen Burnie MD, gentle children braiding Anne Arundel County, kids cornrows with beads Maryland, tear-free braider Glen Burnie Pasadena Severn" },
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
  component: KidsHairBraidingPage,
});

const KIDS_STYLES = [
  {
    name: "Kids Braids (Natural)",
    price: "$65-$100",
    duration: "1.5 - 2.5 hrs",
    image: styleKidsImg,
    description: "Neat, classic cornrows or plait braids styled on your child's natural hair without added extensions. Comfortable, quick, and easy to maintain for school.",
    features: ["Natural hair styling", "Zero added weight", "1.5 to 2.5 hour install", "Lasts 2 to 3 weeks"],
  },
  {
    name: "Kids Cornrows with Beads",
    price: "$75-$110",
    duration: "2 - 3 hrs",
    image: styleKidsImg,
    description: "Creative curved, straight, or zig-zag cornrow patterns finished with colorful wooden or acrylic beads securely fastened at the tips.",
    features: ["Custom creative designs", "Secure bead fastening", "Gentle on tender scalps", "Kid-favorite accessories"],
  },
  {
    name: "Kids Box Braids / Knotless",
    price: "$100-$150",
    duration: "2.5 - 3.5 hrs",
    image: styleNaturalImg,
    description: "Lightweight box braids or knotless braids using soft, feathered extensions. Tailored in smaller counts so the style is light and pain-free.",
    features: ["Lightweight extensions", "Tensionless root parting", "Versatile ponytail styling", "Lasts 3 to 5 weeks"],
  },
  {
    name: "Single Braid Natural Hair",
    price: "$60",
    duration: "1.5 - 2 hrs",
    image: styleCornrowsImg,
    description: "Simple, gentle free-hanging natural braids or two-strand twists without extensions. Ideal for everyday wash-and-go protection.",
    features: ["100% real hair", "Moisture locking technique", "Fast appointment time", "Easy home unbraiding"],
  },
];

function KidsHairBraidingPage() {
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
              Kids Hair Braiding Glen Burnie MD
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
                <Smile className="w-3.5 h-3.5 text-[#C5A059]" />
                Gentle & Patient Kids Specialists
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#4A1525] leading-tight mb-4 font-bold">
                Tear-Free Kids Hair Braiding in Glen Burnie, MD
              </h1>
              <p className="text-base sm:text-lg text-[#5A534A] leading-relaxed mb-6 max-w-2xl">
                We know how important tender scalp care is for your little one. At{" "}
                <strong className="text-[#2D2A26] font-semibold">337 S Hospital Dr, Glen Burnie, MD</strong>, our braiders treat every child with extraordinary gentleness, patience, and warmth, creating clean, durable styles they'll proudly show off at school.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="bg-white p-3 rounded-lg border border-[#EADFCB] shadow-xs">
                  <div className="text-xs text-[#7C756D]">Starting Price</div>
                  <div className="text-xl font-bold text-[#4A1525] font-serif">$65</div>
                  <div className="text-[11px] text-[#A69F95]">Natural Kids Styles</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#EADFCB] shadow-xs">
                  <div className="text-xs text-[#7C756D]">Comfort Guarantee</div>
                  <div className="text-xl font-bold text-[#4A1525] font-serif">Tear-Free</div>
                  <div className="text-[11px] text-[#A69F95]">Soft, gentle touch</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#EADFCB] shadow-xs col-span-2 sm:col-span-1">
                  <div className="text-xs text-[#7C756D]">Atmosphere</div>
                  <div className="text-xl font-bold text-[#4A1525] font-serif">Welcoming</div>
                  <div className="text-[11px] text-[#A69F95]">Snacks & tablets ok</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedService({
                      name: "Kids Braids",
                      price: "$65-$100",
                      duration: "1.5 - 2.5 hrs",
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#4A1525] hover:bg-[#38101C] text-white font-medium rounded-lg shadow-md transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                  Book Kids Braids
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
                  src={styleKidsImg}
                  alt="Neat, gentle kids braids styled at Doussou Quality Braiding Glen Burnie MD"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="450"
                  height="560"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-serif text-lg font-bold">Gentle Kids Braiding</p>
                    <p className="text-xs text-white/80">Styled with care at Doussou Quality Braiding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kids Styles & Pricing Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-bold mb-3">
              Kids Styles & Transparent Pricing
            </h2>
            <p className="text-[#5A534A] text-sm sm:text-base">
              Honest, upfront pricing for parents throughout Glen Burnie, Pasadena, Severn, and Hanover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {KIDS_STYLES.map((style, idx) => (
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
                    <span className="text-[#4A1525] font-semibold">Tender Head Friendly</span>
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

      {/* Parents Guide: Tips for Appointment Day */}
      <section className="py-16 bg-[#FAF5ED] border-y border-[#EADFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#4A1525] font-bold mb-3">
              Parents Guide: A Seamless Salon Visit
            </h2>
            <p className="text-[#5A534A] text-sm sm:text-base">
              A few simple steps to make braiding day a joyful, easy experience for both you and your child.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#EADFCB] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#4A1525] mb-4">
                <Heart className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#4A1525] mb-2">1. Detangle with Kindness</h3>
              <p className="text-xs text-[#5A534A] leading-relaxed">
                Please wash and thoroughly detangle your child's hair prior to arrival. Using a leave-in detangling spray or conditioner softens strands and prevents pain.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#EADFCB] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#4A1525] mb-4">
                <Smile className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#4A1525] mb-2">2. Bring Favorite Entertainment</h3>
              <p className="text-xs text-[#5A534A] leading-relaxed">
                Pack an iPad or tablet with downloaded shows, headphones, books, or a coloring pad. Keeping little hands and minds occupied makes the time fly by.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#EADFCB] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#4A1525] mb-4">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#4A1525] mb-2">3. Restful Night Care</h3>
              <p className="text-xs text-[#5A534A] leading-relaxed">
                Invest in a soft kid-sized satin bonnet or silk pillowcase. This prevents friction during sleep and keeps beads and braid edges looking neat for weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Glen Burnie / Anne Arundel County Callout */}
      <section className="py-14 bg-white border-b border-[#EADFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF5ED] rounded-2xl p-6 sm:p-8 border border-[#EADFCB] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A1525]">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                Easy Family Access in Glen Burnie
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#4A1525]">
                A Trusted Braiding Home for Anne Arundel Families
              </h2>
              <p className="text-xs sm:text-sm text-[#5A534A]">
                Convenient ground floor access, free parking directly in front of the salon, and a family-friendly setting at 337 S Hospital Dr.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#4A1525] text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-[#38101C] transition-colors"
              >
                Find Us on Map
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
              Kids Hair Braiding FAQs
            </h2>
            <p className="text-[#5A534A] text-sm">
              Common questions from parents in Glen Burnie, Severn, Pasadena, and Baltimore.
            </p>
          </div>

          <div className="space-y-3">
            {KIDS_FAQS.map((faq, idx) => (
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
            Give Your Child a Comfortable, Confidence-Boosting Hairstyle
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            Book an appointment with our patient braiders today. Quick scheduling, gentle hands, and beautiful styles.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() =>
                setSelectedService({
                  name: "Kids Braids",
                  price: "$65-$100",
                  duration: "1.5 - 2.5 hrs",
                })
              }
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] hover:bg-[#B38F46] text-[#2D2A26] font-bold rounded-lg text-sm shadow-md transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Kids Braids Now
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

