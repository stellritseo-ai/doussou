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
} from "lucide-react";

import boxbraidsImg from "@/assets/style-boxbraids.jpg";
import cornrowsImg from "@/assets/style-cornrows.jpg";

const PAGE_TITLE = "Box Braids Glen Burnie MD | Doussou Quality Braiding";
const PAGE_DESCRIPTION =
  "Classic and versatile box braids in Glen Burnie, MD at 337 S Hospital Dr. Small, medium, and large box braids starting from $200. Crisp parts, even tension, long-lasting styles.";
const CANONICAL = "https://www.doussouqualitybraiding.com/box-braids-glen-burnie-md";

const BOX_BRAIDS_FAQS = [
  {
    q: "How long do box braids last?",
    a: "Traditional box braids typically last between 6 and 10 weeks depending on your hair growth rate and how well you protect them at night with a satin bonnet or scarf.",
  },
  {
    q: "What is the difference between box braids and knotless braids?",
    a: "Box braids feature a traditional knot anchored at the root, which gives high structural hold and great fullness from day one. Knotless braids start with your own natural hair without a knot for zero initial scalp tension.",
  },
  {
    q: "How much do box braids cost at Doussou Quality Braiding?",
    a: "Standard box braids range from $200 to $220 for medium sizes, and $250 for large statement or small high-density sizes. Braiding hair is included in our prices.",
  },
  {
    q: "Can I wash my hair while wearing box braids?",
    a: "Yes. We recommend focusing on your scalp with diluted shampoo or clarifying rinse every 2 to 3 weeks, followed by complete air drying or hooded drying to prevent moisture retention inside the braids.",
  },
  {
    q: "How do I choose between small, medium, and large box braids?",
    a: "Small box braids offer the highest density and longest lifespan (8–10 weeks). Medium is our most popular all-around style, offering quick styling and 6–8 weeks of wear. Large box braids install quickly (3–4 hours) and provide a bold, chunky statement look.",
  },
];

const getSchema = () => [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL}#service`,
    name: "Box Braids Glen Burnie MD",
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
      lowPrice: "200",
      highPrice: "250",
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
        name: "Box Braids Glen Burnie MD",
        item: CANONICAL,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BOX_BRAIDS_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export const Route = createFileRoute("/box-braids-glen-burnie-md")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "box braids Glen Burnie MD, traditional box braids Baltimore, large box braids, medium box braids price Maryland, protective styles Glen Burnie",
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
  component: BoxBraidsPage,
});

const BOX_BRAIDS_OPTIONS = [
  {
    name: "Box Braids (Medium)",
    price: "$200 - $220",
    time: "4.5 - 5.5 hrs",
    description: "Our most popular classic box braid style. Clean grid lines, uniform thickness, and versatile styling.",
  },
  {
    name: "Box Braids Large",
    price: "$250",
    time: "3.5 - 4.5 hrs",
    description: "Chunky, statement box braids installed quickly with even scalp tension.",
  },
  {
    name: "Small Box Braids",
    price: "$250",
    time: "5.5 - 6.5 hrs",
    description: "Fine, high-density individual box braids providing maximum volume and longevity up to 10 weeks.",
  },
];

function BoxBraidsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<SelectedServiceData | null>(null);

  const handleBook = (item?: (typeof BOX_BRAIDS_OPTIONS)[0]) => {
    setSelectedService({
      name: item?.name || "Box Braids",
      price: item?.price || "$200 - $250",
      image: boxbraidsImg,
      category: "Braids",
      blurb: item?.description || "Classic, versatile box braids styled in Glen Burnie, MD",
    });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#BA1296] selection:text-white">
      <Header />

      <main className="pt-28 lg:pt-36">
        {/* Breadcrumbs */}
        <section className="bg-[#FAF8F5] border-b border-[#E8DFC8]/70 py-4">
          <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C7A6B]">
              <Link to="/" className="hover:text-[#C48D46] transition-colors">Home</Link>
              <ChevronRight size={13} className="text-[#C48D46]" />
              <Link to="/services" className="hover:text-[#C48D46] transition-colors">Services</Link>
              <ChevronRight size={13} className="text-[#C48D46]" />
              <span className="text-[#2B231D] font-bold">Box Braids Glen Burnie MD</span>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="py-14 lg:py-20 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4">
                  <Scissors size={13} className="text-[#C48D46]" />
                  <span>Artisanal African Hair Braiding</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2B231D] font-['Inter',sans-serif]">
                  Classic Box Braids in <span className="text-[#C48D46]">Glen Burnie, MD</span>
                </h1>

                <p className="mt-4 text-base sm:text-lg text-[#5C5046] font-medium leading-relaxed">
                  Timeless, neat, and highly versatile. At Doussou Quality Braiding (337 S Hospital Dr, Glen Burnie), our artisans specialize in precision square and triangular box parting, calibrated tension, and smooth extension integration for lasting beauty.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold text-[#2B231D]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] shadow-xs">
                    <Clock size={15} className="text-[#C48D46]" /> Lasts 6–10 Weeks
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] shadow-xs">
                    <ShieldCheck size={15} className="text-[#16857B]" /> Upfront Quotes • No Hidden Fees
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] shadow-xs">
                    <Sparkle size={15} className="text-[#BA1296]" /> Extension Hair Included
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => handleBook()}
                    className="inline-flex items-center gap-2 rounded-full bg-[#BA1296] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#8e0e7a] hover:scale-105 active:scale-95 cursor-pointer font-['Inter',sans-serif]"
                  >
                    <Calendar size={18} />
                    <span>Book Box Braids Online</span>
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

              <div>
                <div className="overflow-hidden rounded-3xl shadow-xl border border-[#E8DFC8]">
                  <img
                    src={boxbraidsImg}
                    alt="Neat long box braids styled at Doussou Quality Braiding Glen Burnie MD"
                    className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Options & Pricing */}
        <section className="py-16 bg-[#FAF8F5] border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C48D46]">Style Options</span>
              <h2 className="text-3xl font-extrabold text-[#2B231D] tracking-tight mt-1 font-['Inter',sans-serif]">
                Box Braids Pricing &amp; Durations
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {BOX_BRAIDS_OPTIONS.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl bg-white p-6 border border-[#E8DFC8] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-xs font-bold text-[#BA1296] uppercase tracking-wider">
                      {item.time}
                    </span>
                    <h3 className="text-lg font-bold text-[#2B231D] mt-1">{item.name}</h3>
                    <p className="text-2xl font-black text-[#C48D46] mt-2 font-['Inter',sans-serif]">{item.price}</p>
                    <p className="text-xs text-[#5C5046] mt-3 leading-relaxed">{item.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleBook(item)}
                    className="mt-6 w-full rounded-xl bg-[#8E1077] py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#720a5e] transition-colors cursor-pointer"
                  >
                    Book This Style
                  </button>
                </div>
              ))}
            </div>

            {/* Internal Links to Other Styles */}
            <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E8DFC8]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C7A6B] mb-3">
                Related Services:
              </h4>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <Link to="/knotless-braids-glen-burnie-md" className="rounded-full bg-[#FAF8F5] px-3.5 py-1.5 border border-[#E8DFC8] text-[#2B231D] hover:border-[#BA1296] hover:text-[#BA1296] transition-colors">
                  Knotless Braids Glen Burnie →
                </Link>
                <Link to="/cornrows-glen-burnie-md" className="rounded-full bg-[#FAF8F5] px-3.5 py-1.5 border border-[#E8DFC8] text-[#2B231D] hover:border-[#BA1296] hover:text-[#BA1296] transition-colors">
                  Feed-In Cornrows →
                </Link>
                <Link to="/senegalese-twists-glen-burnie-md" className="rounded-full bg-[#FAF8F5] px-3.5 py-1.5 border border-[#E8DFC8] text-[#2B231D] hover:border-[#BA1296] hover:text-[#BA1296] transition-colors">
                  Senegalese Twists →
                </Link>
                <Link to="/braiding-guide-glen-burnie-md" className="rounded-full bg-[#FAF8F5] px-3.5 py-1.5 border border-[#E8DFC8] text-[#2B231D] hover:border-[#BA1296] hover:text-[#BA1296] transition-colors">
                  Braids Care &amp; Longevity Guide →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B231D] text-center tracking-tight mb-8 font-['Inter',sans-serif]">
              Box Braids FAQs
            </h2>
            <div className="space-y-3">
              {BOX_BRAIDS_FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={faq.q} className="rounded-2xl border border-[#E8DFC8] bg-[#FAF8F5] overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm text-[#2B231D]"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={16} className={`text-[#BA1296] transition-transform ${isOpen ? "rotate-180" : ""}`} />
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
      </main>

      <Footer />
      <ServiceBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} service={selectedService} />
    </div>
  );
}

