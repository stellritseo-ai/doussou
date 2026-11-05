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

import senegal18Img from "@/assets/services/senegalese-twist-18.jpg";
import senegal20Img from "@/assets/services/senegalese-twist-20.jpg";
import kinkyTwistsImg from "@/assets/services/kinky-twists.jpg";
import barrelTwistImg from "@/assets/services/barrel-twist.jpg";

const PAGE_TITLE = "Senegalese Twists Glen Burnie MD | Doussou Quality Braiding";
const PAGE_DESCRIPTION =
  "Smooth, elegant Senegalese rope twists in Glen Burnie, MD at 337 S Hospital Dr. 18\", 20\", medium & kinky twists from $190. Gentle install, long-lasting shine. Book online.";
const CANONICAL = "https://www.doussouqualitybraiding.com/senegalese-twists-glen-burnie-md";

const SENEGALESE_FAQS = [
  {
    q: "What makes Senegalese twists different from regular twists?",
    a: "Senegalese twists (often called rope twists) use smooth synthetic braiding hair (like Kanekalon or Toyokalon) twisted tightly using a two-strand technique. This yields a silky, sleek cylinder with high shine, unlike rougher textured kinky or Marley twists.",
  },
  {
    q: "How long do Senegalese twists last?",
    a: "Senegalese twists typically last 8 to 10 weeks with proper night care (wrapping with a silk or satin scarf). Their smooth texture keeps them looking neat and polished for months.",
  },
  {
    q: "Is hair included in the twist appointment price?",
    a: "Yes, standard high-grade synthetic braiding hair in natural colors (#1, #1B, #2, #4) is included. Custom colors, ombré tones, or specialty textures can also be accommodated.",
  },
  {
    q: "Can I wash my hair while wearing Senegalese twists?",
    a: "Yes! We recommend using a diluted scalp wash or witch hazel astringent on a cotton pad to cleanse the scalp between the parts every 2-3 weeks, followed by a light scalp oil. Avoid vigorous scrubbing to prevent premature frizz.",
  },
  {
    q: "How do I take down Senegalese twists without damaging my hair?",
    a: "Because they are two-strand twists, they unravel much faster and more gently than 3-strand braids. You simply snip the extensions safely below your natural hair length and untwist each section from bottom to top.",
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
    serviceType: "Senegalese Twists & Rope Twists",
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
      lowPrice: "190",
      highPrice: "280",
      priceCurrency: "USD",
    },
    description:
      "Expert Senegalese twists, rope twists, and kinky twists in Glen Burnie, Maryland. Tension-free roots, silky finish, long-lasting protective styling.",
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
        name: "Senegalese Twists Glen Burnie MD",
        item: CANONICAL,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SENEGALESE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  },
];

export const Route = createFileRoute("/senegalese-twists-glen-burnie-md")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { name: "keywords", content: "Senegalese Twists Glen Burnie MD, rope twists Glen Burnie, kinky twists Maryland, African hair twists Pasadena Severn Baltimore" },
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
  component: SenegaleseTwistsPage,
});

const TWIST_STYLES = [
  {
    name: '18" Senegalese Twists',
    price: "$190+",
    duration: "3.5 - 4.5 hrs",
    image: senegal18Img,
    description: "Classic mid-back length Senegalese rope twists. Sleek, polished cylindrical finish with sealed ends for effortless day-to-night styling.",
    features: ["Mid-back length (~18 inches)", "High-shine silky finish", "Hair included in salon", "Weightless feel"],
  },
  {
    name: '20" Senegalese Twists',
    price: "$200+",
    duration: "4 - 5 hrs",
    image: senegal20Img,
    description: "Elegant waist-skimming Senegalese twists crafted with premium Kanekalon hair. Ideal for versatile high buns, ponytails, and half-up styles.",
    features: ["Waist-length (~20 inches)", "Flexible styling movement", "Tension-free root feed", "Longevity 8-10 weeks"],
  },
  {
    name: "Senegal Twists Medium",
    price: "$260-$280",
    duration: "4.5 - 5.5 hrs",
    image: senegal18Img,
    description: "Fuller, denser coverage with precision square or diamond parting. Perfect for clients who desire a thick, voluminous rope twist silhouette.",
    features: ["Medium parting density", "Ultra-smooth twist technique", "Safe on delicate edges", "Low scalp stress"],
  },
  {
    name: "Kinky Twists",
    price: "$200-$220",
    duration: "3.5 - 4.5 hrs",
    image: kinkyTwistsImg,
    description: "Textured, natural-finish twists using textured afro-kinky hair. Offers a relaxed, organic look with curl-burned or curled ends.",
    features: ["Organic textured appearance", "Full volume & body", "Ideal for fine natural hair", "Easy at-home care"],
  },
  {
    name: "Barrel Twists",
    price: "$80-$100",
    duration: "1.5 - 2 hrs",
    image: barrelTwistImg,
    description: "Sculpted roll-and-tuck barrel twist styling ideal for natural locs, protective styling, or special occasion statement looks.",
    features: ["Neat scalp-hugging rows", "Quick 1.5-2 hour install", "Lasts 3-4 weeks", "Great for men & women"],
  },
];

function SenegaleseTwistsPage() {
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
              Senegalese Twists Glen Burnie MD
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
                Anne Arundel County Master Braiders
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#4A1525] leading-tight mb-4 font-bold">
                Silky Senegalese Twists in Glen Burnie, MD
              </h1>
              <p className="text-base sm:text-lg text-[#5A534A] leading-relaxed mb-6 max-w-2xl">
                Experience the beauty of featherlight, high-shine rope twists installed with master precision. Located at{" "}
                <strong className="text-[#2D2A26] font-semibold">337 S Hospital Dr, Glen Burnie, MD 21061</strong>, Doussou Quality Braiding delivers clean, tension-free Senegalese twists that protect your natural hairline and last 8 to 10 weeks.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="bg-white p-3 rounded-lg border border-[#EADFCB] shadow-xs">
                  <div className="text-xs text-[#7C756D]">Starting Price</div>
                  <div className="text-xl font-bold text-[#4A1525] font-serif">$190+</div>
                  <div className="text-[11px] text-[#A69F95]">Hair included</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#EADFCB] shadow-xs">
                  <div className="text-xs text-[#7C756D]">Duration</div>
                  <div className="text-xl font-bold text-[#4A1525] font-serif">3.5 - 5h</div>
                  <div className="text-[11px] text-[#A69F95]">Gentle 2-hand craft</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#EADFCB] shadow-xs col-span-2 sm:col-span-1">
                  <div className="text-xs text-[#7C756D]">Wear Time</div>
                  <div className="text-xl font-bold text-[#4A1525] font-serif">8-10 Wks</div>
                  <div className="text-[11px] text-[#A69F95]">Ultra low maintenance</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedService({
                      name: '18" Senegalese Twists',
                      price: "$190+",
                      duration: "3.5 - 4.5 hrs",
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#4A1525] hover:bg-[#38101C] text-white font-medium rounded-lg shadow-md transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                  Book Senegalese Twists
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
                  src={senegal20Img}
                  alt="Sleek 20 inch Senegalese rope twists styled at Doussou Quality Braiding Glen Burnie MD"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="450"
                  height="560"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-serif text-lg font-bold">20" Senegalese Rope Twists</p>
                    <p className="text-xs text-white/80">Photographed at Doussou Quality Braiding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Styles & Pricing Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-bold mb-3">
              Senegalese & Kinky Twist Styles & Transparent Pricing
            </h2>
            <p className="text-[#5A534A] text-sm sm:text-base">
              Every appointment includes high quality synthetic braiding hair and tension-free parted foundations. No hidden charges or surprise fees at checkout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TWIST_STYLES.map((style, idx) => (
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
                    <span className="text-[#4A1525] font-semibold">Master Braider</span>
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
                    Book This Style
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hair Preparation & Maintenance Guide */}
      <section className="py-16 bg-[#FAF5ED] border-y border-[#EADFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#4A1525] font-bold mb-3">
              How to Prepare & Maintain Your Twists
            </h2>
            <p className="text-[#5A534A] text-sm sm:text-base">
              Follow these simple professional salon steps to ensure maximum comfort during installation and up to 10 weeks of frizz-free shine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-[#EADFCB] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#4A1525]">
                  <Scissors className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#4A1525]">Before Your Appointment</h3>
                  <p className="text-xs text-[#7C756D]">Salon preparation guidelines</p>
                </div>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#5A534A]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Cleanse thoroughly:</strong> Wash with a clarifying shampoo to eliminate product residue and sebum.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Deep condition:</strong> Replenish moisture 24-48 hours before styling so your strands are resilient.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Thoroughly blow-dry:</strong> Arrive with detangled, blown-out hair free of heavy grease or silicones.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#EADFCB] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#4A1525]">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#4A1525]">Twist Aftercare & Longevity</h3>
                  <p className="text-xs text-[#7C756D]">Keep them silky for 8-10 weeks</p>
                </div>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#5A534A]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Night wrap ritual:</strong> Always sleep in a satin or silk scarf or oversized bonnet to prevent flyaways.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Lightweight scalp nourishment:</strong> Apply jojoba, sweet almond, or peppermint oil between rows 2-3 times weekly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Edge control discipline:</strong> Use alcohol-free gel and avoid high tension when pulling twists into high ponytails.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Anne Arundel Context */}
      <section className="py-14 bg-white border-b border-[#EADFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF5ED] rounded-2xl p-6 sm:p-8 border border-[#EADFCB] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A1525]">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                Convenient Glen Burnie Location
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#4A1525]">
                Serving Glen Burnie, Pasadena, Severn, Hanover, Baltimore & Annapolis
              </h2>
              <p className="text-xs sm:text-sm text-[#5A534A]">
                Our salon at 337 S Hospital Dr offers dedicated parking, a welcoming atmosphere, and experienced braiders fluent in all African hair textures.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#4A1525] text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-[#38101C] transition-colors"
              >
                Get Directions
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
              Frequently Asked Questions About Senegalese Twists
            </h2>
            <p className="text-[#5A534A] text-sm">
              Clear, honest answers to help you book with confidence.
            </p>
          </div>

          <div className="space-y-3">
            {SENEGALESE_FAQS.map((faq, idx) => (
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
            Ready for Gorgeous, Featherlight Senegalese Twists?
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            Book your appointment at Doussou Quality Braiding today. Relax in our comfortable Glen Burnie salon while our master braiders transform your hair.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() =>
                setSelectedService({
                  name: '18" Senegalese Twists',
                  price: "$190+",
                  duration: "3.5 - 4.5 hrs",
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

