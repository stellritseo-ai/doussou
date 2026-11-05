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

import knotlessImg from "@/assets/style-knotless.jpg";
import goddessKnotlessImg from "@/assets/services/goddess-knotless.jpg";
import bohoKnotless18Img from "@/assets/services/boho-knotless-18.jpg";
import knotlessBraids14Img from "@/assets/services/knotless-braids-14.jpg";

const PAGE_TITLE = "Knotless Braids Glen Burnie MD | Doussou Quality Braiding";
const PAGE_DESCRIPTION =
  "Expert knotless hair braiding in Glen Burnie, MD at 337 S Hospital Dr. Painless, featherlight bohemian, goddess & classic knotless braids from $180. Book online today.";
const CANONICAL = "https://www.doussouqualitybraiding.com/knotless-braids-glen-burnie-md";

const KNOTLESS_FAQS = [
  {
    q: "How do knotless braids differ from traditional box braids?",
    a: "Unlike traditional box braids that start with a tight knot at the scalp, knotless braids begin with your natural hair and gradually feed in extensions. This creates a seamless, flat root that eliminates pulling, headaches, and tension bumps from day one.",
  },
  {
    q: "Does knotless braiding hurt or pull on edges?",
    a: "Not at all. At Doussou Quality Braiding, we specialize in 100% tension-free parting that preserves delicate baby hairs and fragile temple edges while delivering maximum longevity.",
  },
  {
    q: "How long do knotless braids typically last?",
    a: "With proper nighttime maintenance (silk or satin bonnet) and scalp hydration, knotless braids typically last 6 to 8 weeks looking neat and fresh.",
  },
  {
    q: "Is braiding hair included with my service?",
    a: "Yes! Standard pre-stretched synthetic braiding hair is included. If you want human hair curls for a boho style or specialty colors, you may also bring your preferred packs.",
  },
  {
    q: "How long does a knotless appointment take?",
    a: "Depending on your selected part size and desired length, appointments typically range between 3.5 and 6 hours. We work diligently and carefully so you can relax throughout your visit.",
  },
];

const getSchema = () => [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL}#service`,
    name: "Knotless Braids Glen Burnie MD",
    serviceType: "African Hair Braiding",
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    provider: {
      "@type": "HairSalon",
      "@id": "https://www.doussouqualitybraiding.com/#salon",
      name: "Doussou Quality Braiding",
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
        latitude: CONTACT.geo.latitude,
        longitude: CONTACT.geo.longitude,
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
    areaServed: [
      { "@type": "City", name: "Glen Burnie" },
      { "@type": "City", name: "Pasadena" },
      { "@type": "City", name: "Severn" },
      { "@type": "City", name: "Hanover" },
      { "@type": "City", name: "Baltimore" },
      { "@type": "City", name: "Annapolis" },
      { "@type": "AdministrativeArea", name: "Anne Arundel County" },
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "180",
      highPrice: "250",
      offerCount: "5",
    },
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
        name: "Knotless Braids Glen Burnie MD",
        item: CANONICAL,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: KNOTLESS_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export const Route = createFileRoute("/knotless-braids-glen-burnie-md")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "knotless braids Glen Burnie MD, bohemian knotless Maryland, goddess knotless braids Baltimore, tension-free braids Anne Arundel County, hair braiding salon near me",
      },
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
  component: KnotlessBraidsPage,
});

const KNOTLESS_STYLES = [
  {
    name: "Small Knotless Braids",
    price: "$250",
    time: "5.5 - 6.5 hrs",
    image: knotlessImg,
    description: "Ultra-fine parting with high density, incredible movement, and long-lasting sleekness.",
  },
  {
    name: "14\" Knotless Braids Medi",
    price: "$180",
    time: "3.5 - 4.5 hrs",
    image: knotlessBraids14Img,
    description: "Chic shoulder-length medium knotless braids, lightweight and effortless for busy professionals.",
  },
  {
    name: "18\" Boho Knotless",
    price: "$190",
    time: "4.5 - 5.5 hrs",
    image: bohoKnotless18Img,
    description: "Trending bohemian knotless braids infused with romantic wavy curls cascading throughout.",
  },
  {
    name: "Goddess Knotless",
    price: "$180+",
    time: "4.5 - 5.5 hrs",
    image: goddessKnotlessImg,
    description: "Ethereal goddess braids with curly leave-outs and face-framing tendrils.",
  },
];

function KnotlessBraidsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<SelectedServiceData | null>(null);

  const handleBook = (style?: (typeof KNOTLESS_STYLES)[0]) => {
    if (style) {
      setSelectedService({
        name: style.name,
        price: style.price,
        image: style.image,
        category: "Braids",
        blurb: style.description,
      });
    } else {
      setSelectedService({
        name: "Knotless Braids",
        price: "$180 - $250",
        image: knotlessImg,
        category: "Braids",
        blurb: "Featherlight, tension-free knotless braiding in Glen Burnie, MD",
      });
    }
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#BA1296] selection:text-white">
      <Header />

      <main className="pt-28 lg:pt-36">
        {/* Breadcrumb Bar */}
        <section className="bg-[#FAF8F5] border-b border-[#E8DFC8]/70 py-4">
          <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C7A6B]">
              <Link to="/" className="hover:text-[#C48D46] transition-colors">Home</Link>
              <ChevronRight size={13} className="text-[#C48D46]" />
              <Link to="/services" className="hover:text-[#C48D46] transition-colors">Services</Link>
              <ChevronRight size={13} className="text-[#C48D46]" />
              <span className="text-[#2B231D] font-bold">Knotless Braids Glen Burnie MD</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] py-14 lg:py-20 border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#BA1296]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#BA1296] border border-[#BA1296]/30 mb-4">
                  <Sparkles size={13} className="text-[#BA1296]" />
                  <span>Glen Burnie's Knotless Braids Specialists</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2B231D] leading-tight font-['Inter',sans-serif]">
                  Knotless Braids in <span className="text-[#BA1296]">Glen Burnie, MD</span>
                </h1>

                <p className="mt-4 text-base sm:text-lg text-[#5C5046] font-medium leading-relaxed">
                  Experience featherlight, pain-free knotless hair braiding at Doussou Quality Braiding. Located at <strong>337 S Hospital Dr, Glen Burnie, MD</strong>, our master artisans craft seamless, tension-free braids that protect your natural hairline and feel weightless from the second you leave our chair.
                </p>

                {/* Trust Badges */}
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold text-[#2B231D]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] shadow-xs">
                    <ShieldCheck size={15} className="text-[#16857B]" /> 100% Tension-Free Scalp Care
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] shadow-xs">
                    <Clock size={15} className="text-[#BA1296]" /> Lasts 6–8 Weeks
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] shadow-xs">
                    <Sparkle size={15} className="text-[#C48D46]" /> Braiding Hair Included
                  </span>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => handleBook()}
                    className="inline-flex items-center gap-2 rounded-full bg-[#BA1296] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#8e0e7a] hover:scale-105 active:scale-95 cursor-pointer font-['Inter',sans-serif]"
                  >
                    <Calendar size={18} />
                    <span>Book Knotless Braids Online</span>
                  </button>
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#2B231D] border border-[#E8DFC8] shadow-xs transition-all hover:border-[#BA1296] hover:scale-105"
                  >
                    <Phone size={16} className="text-[#BA1296]" />
                    <span>Call (301) 523-8593</span>
                  </a>
                </div>
              </div>

              {/* Photo Showcase */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-md border border-[#E8DFC8]">
                    <img
                      src={knotlessImg}
                      alt="Small knotless braids styled at Doussou Quality Braiding in Glen Burnie Maryland"
                      className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-md border border-[#E8DFC8]">
                    <img
                      src={bohoKnotless18Img}
                      alt="18 inch boho knotless braids with wavy bohemian curls in Glen Burnie MD"
                      className="w-full h-44 sm:h-52 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-6">
                  <div className="overflow-hidden rounded-2xl shadow-md border border-[#E8DFC8]">
                    <img
                      src={goddessKnotlessImg}
                      alt="Goddess knotless braids styled at Glen Burnie MD braiding salon"
                      className="w-full h-44 sm:h-52 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-md border border-[#E8DFC8]">
                    <img
                      src={knotlessBraids14Img}
                      alt="Medium 14 inch shoulder length knotless braids in Glen Burnie Maryland"
                      className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Knotless Styles & Pricing Cards */}
        <section className="py-16 bg-[#FAF8F5] border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BA1296]">Salon Menu</span>
              <h2 className="text-3xl font-extrabold text-[#2B231D] tracking-tight mt-1 font-['Inter',sans-serif]">
                Knotless Braids Styles &amp; Upfront Pricing
              </h2>
              <p className="mt-2 text-sm text-[#5C5046]">
                Every style includes clean precision parts, tension-free feed-in, and pre-stretched braiding hair.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {KNOTLESS_STYLES.map((style) => (
                <div
                  key={style.name}
                  className="rounded-2xl bg-white border border-[#E8DFC8] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                    <img
                      src={style.image}
                      alt={`${style.name} styled at Doussou Quality Braiding Glen Burnie MD`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-[#BA1296] text-white text-[10px] font-bold px-2.5 py-0.5">
                      {style.price}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-[#8C7A6B] font-semibold mb-1">
                        <Clock size={12} />
                        <span>Est: {style.time}</span>
                      </div>
                      <h3 className="text-base font-bold text-[#2B231D]">{style.name}</h3>
                      <p className="mt-2 text-xs text-[#5C5046] leading-relaxed">{style.description}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleBook(style)}
                      className="mt-5 w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#8E1077] py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#720a5e] transition-colors cursor-pointer"
                    >
                      <span>Book Style</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Service Guide & Preparation */}
        <section className="py-16 sm:py-20 bg-white border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B231D] tracking-tight font-['Inter',sans-serif]">
              Why Choose Knotless Braids at Doussou Quality Braiding?
            </h2>

            <div className="mt-6 space-y-6 text-sm text-[#5C5046] leading-relaxed">
              <p>
                Knotless braids have transformed protective styling by putting scalp health first. Traditional box braids use an anchor knot at the root which can pull on the hair follicle, causing tension bumps, headaches, and hairline thinning.
              </p>
              <p>
                At our Glen Burnie studio, we initiate every braid with your natural hair and feed in synthetic extension fibers gradually. This creates a flat, seamless root that allows you to put your hair in a high ponytail or bun right from the salon chair without any break-in pain.
              </p>
            </div>

            {/* Preparation & Aftercare Steps */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#FAF8F5] p-6 border border-[#E8DFC8]">
                <h3 className="text-base font-bold text-[#2B231D] flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#16857B]" />
                  <span>How to Prepare Your Hair</span>
                </h3>
                <ul className="mt-4 space-y-2.5 text-xs text-[#5C5046]">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#16857B] mt-0.5 shrink-0" />
                    <span>Wash hair with clarifying shampoo and deep condition thoroughly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#16857B] mt-0.5 shrink-0" />
                    <span>Detangle completely and blow-dry straight from roots to ends.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#16857B] mt-0.5 shrink-0" />
                    <span>Avoid heavy leave-in oils, butters, or waxes on appointment day.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#16857B] mt-0.5 shrink-0" />
                    <span>Need a wash? Add our in-salon scalp clarifying wash to your booking.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-6 border border-[#E8DFC8]">
                <h3 className="text-base font-bold text-[#2B231D] flex items-center gap-2">
                  <Heart size={18} className="text-[#BA1296]" />
                  <span>Aftercare &amp; Longevity</span>
                </h3>
                <ul className="mt-4 space-y-2.5 text-xs text-[#5C5046]">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#BA1296] mt-0.5 shrink-0" />
                    <span>Sleep with a 100% silk or satin bonnet to prevent frizz.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#BA1296] mt-0.5 shrink-0" />
                    <span>Apply lightweight scalp oil 2 to 3 times per week between parts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#BA1296] mt-0.5 shrink-0" />
                    <span>For bohemian styles, use curl mousse or foam to revive curls weekly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#BA1296] mt-0.5 shrink-0" />
                    <span>We recommend refreshing or removing braids after 6 to 8 weeks.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Internal Links to Related Services */}
            <div className="mt-12 p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFC8]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C7A6B] mb-3">
                Explore Other Glen Burnie Protective Styles:
              </h4>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <Link to="/box-braids-glen-burnie-md" className="rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] text-[#2B231D] hover:border-[#BA1296] hover:text-[#BA1296] transition-colors">
                  Box Braids Glen Burnie →
                </Link>
                <Link to="/cornrows-glen-burnie-md" className="rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] text-[#2B231D] hover:border-[#BA1296] hover:text-[#BA1296] transition-colors">
                  Feed-In Cornrows →
                </Link>
                <Link to="/senegalese-twists-glen-burnie-md" className="rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] text-[#2B231D] hover:border-[#BA1296] hover:text-[#BA1296] transition-colors">
                  Senegalese Twists →
                </Link>
                <Link to="/kids-hair-braiding-glen-burnie-md" className="rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] text-[#2B231D] hover:border-[#BA1296] hover:text-[#BA1296] transition-colors">
                  Kids Hair Braiding →
                </Link>
                <Link to="/braiding-guide-glen-burnie-md" className="rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] text-[#2B231D] hover:border-[#BA1296] hover:text-[#BA1296] transition-colors">
                  Complete Braiding Guide &amp; FAQs →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="py-16 bg-[#FAF8F5] border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BA1296]">Got Questions?</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B231D] tracking-tight mt-1 font-['Inter',sans-serif]">
                Knotless Braids Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {KNOTLESS_FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="rounded-2xl border border-[#E8DFC8] bg-white overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm text-[#2B231D] hover:text-[#BA1296] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className={`text-[#BA1296] transition-transform duration-200 shrink-0 ml-2 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-[#5C5046] leading-relaxed border-t border-[#E8DFC8]/50 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom Booking CTA Banner */}
        <section className="py-16 bg-gradient-to-r from-[#2F0631] via-[#5C105E] to-[#2F0631] text-white text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <span className="inline-block rounded-full bg-white/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#F7D272] border border-white/20 mb-4">
              Schedule Your Appointment Today
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready for Gorgeous, Pain-Free Knotless Braids?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-purple-100 max-w-xl mx-auto">
              Visit Doussou Quality Braiding at 337 S Hospital Dr, Glen Burnie, MD. Book online or call directly to secure your preferred date and time.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => handleBook()}
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#5C105E] px-8 py-3.5 text-sm font-bold shadow-xl transition-all hover:bg-neutral-100 hover:scale-105 active:scale-95 cursor-pointer font-['Inter',sans-serif]"
              >
                <Calendar size={17} />
                <span>Book Appointment Online</span>
              </button>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-bold text-white border border-white/30 backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105"
              >
                <Phone size={16} />
                <span>Call {CONTACT.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Pop-up Booking Modal with Auto-Selected Knotless Service */}
      <ServiceBookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selectedService}
      />
    </div>
  );
}

