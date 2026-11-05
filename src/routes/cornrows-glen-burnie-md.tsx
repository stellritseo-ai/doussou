import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ServiceBookingModal, type SelectedServiceData } from "@/components/site/ServiceBookingModal";
import { CONTACT } from "@/components/site/data";
import {
  Scissors,
  CheckCircle2,
  Calendar,
  Phone,
  ChevronRight,
  Clock,
  ShieldCheck,
  ChevronDown,
  Sparkle,
} from "lucide-react";

import cornrowsImg from "@/assets/style-cornrows.jpg";

const PAGE_TITLE = "Cornrows & Stitch Braids Glen Burnie MD | Doussou Quality Braiding";
const PAGE_DESCRIPTION =
  "Precision feed-in cornrows and stitch braids in Glen Burnie, MD at 337 S Hospital Dr. Clean geometric scalp parting for women, men, and children from $65–$160. Book online.";
const CANONICAL = "https://www.doussouqualitybraiding.com/cornrows-glen-burnie-md";

const CORNROW_FAQS = [
  {
    q: "How long do stitch cornrows last?",
    a: "Feed-in and stitch cornrows typically last 2 to 4 weeks for straight-back styles, and up to 5 weeks for smaller multi-braid designs when maintained with a silk du-rag or scarf.",
  },
  {
    q: "Do you offer cornrows for men and boys?",
    a: "Yes! We offer a full range of men's braids including clean straight-backs, zig-zag patterns, pop-smoke braids, barrel twists, and custom top-knot braids starting from $65 to $120.",
  },
  {
    q: "What is the difference between regular cornrows and stitch braids?",
    a: "Stitch braids use a specialized parting technique (often using a pinky nail or parting comb) that produces razor-sharp horizontal lines visible between each feed-in stitch, creating a crisp, geometric finish.",
  },
  {
    q: "Will cornrows pull on my hairline or edges?",
    a: "No. At Doussou Quality Braiding, we practice gentle feed-in tension, ensuring hair extensions are introduced gradually so your natural edges remain protected and comfortable.",
  },
];

const getSchema = () => [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL}#service`,
    name: "Cornrows & Stitch Braids Glen Burnie MD",
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
      sameAs: [
        CONTACT.socials.facebook,
        CONTACT.socials.instagram,
        CONTACT.socials.tiktok,
        CONTACT.socials.google,
      ],
    },
    areaServed: "Glen Burnie, Pasadena, Severn, Hanover, Baltimore, and Anne Arundel County",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "65",
      highPrice: "160",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.doussouqualitybraiding.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.doussouqualitybraiding.com/services" },
      { "@type": "ListItem", position: 3, name: "Cornrows Glen Burnie MD", item: CANONICAL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CORNROW_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export const Route = createFileRoute("/cornrows-glen-burnie-md")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "cornrows Glen Burnie MD, stitch braids Maryland, feed in cornrows Baltimore, men braids Glen Burnie, straight back braids Anne Arundel County",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(getSchema()) }],
  }),
  component: CornrowsPage,
});

const CORNROW_OPTIONS = [
  { name: "Feed-In Cornrows", price: "$85 - $150", time: "2 - 3.5 hrs", description: "Flawless scalp feed-in braids starting natural at the hairline and tapering into full lengths." },
  { name: "Stitch Braids / Cornrows", price: "$90 - $160", time: "2.5 - 3.5 hrs", description: "Razor-sharp stitch technique with neat horizontal sectioning and geometric symmetry." },
  { name: "Men's Braids / Cornrows", price: "$65 - $120", time: "1.5 - 2.5 hrs", description: "Clean lines, zig-zags, and protective styles tailored specifically for men and boys." },
  { name: "French Braid", price: "$80", time: "1 - 1.5 hrs", description: "Smooth, classic twin or single scalp French braids for daily, effortless elegance." },
];

function CornrowsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<SelectedServiceData | null>(null);

  const handleBook = (item?: (typeof CORNROW_OPTIONS)[0]) => {
    setSelectedService({
      name: item?.name || "Feed-In Cornrows",
      price: item?.price || "$85 - $160",
      image: cornrowsImg,
      category: "Braids",
      blurb: item?.description || "Precision feed-in cornrows and stitch braids in Glen Burnie, MD",
    });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#BA1296] selection:text-white">
      <Header />

      <main className="pt-28 lg:pt-36">
        <section className="bg-[#FAF8F5] border-b border-[#E8DFC8]/70 py-4">
          <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C7A6B]">
              <Link to="/" className="hover:text-[#C48D46] transition-colors">Home</Link>
              <ChevronRight size={13} className="text-[#C48D46]" />
              <Link to="/services" className="hover:text-[#C48D46] transition-colors">Services</Link>
              <ChevronRight size={13} className="text-[#C48D46]" />
              <span className="text-[#2B231D] font-bold">Cornrows &amp; Stitch Braids Glen Burnie</span>
            </nav>
          </div>
        </section>

        <section className="py-14 lg:py-20 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#16857B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#16857B] border border-[#16857B]/30 mb-4">
                  <Scissors size={13} />
                  <span>Precision Scalp Artistry</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2B231D] font-['Inter',sans-serif]">
                  Feed-In Cornrows &amp; <span className="text-[#16857B]">Stitch Braids</span> in Glen Burnie, MD
                </h1>

                <p className="mt-4 text-base sm:text-lg text-[#5C5046] font-medium leading-relaxed">
                  Looking for crisp parts and clean stitch lines that stay fresh for weeks? Doussou Quality Braiding (337 S Hospital Dr, Glen Burnie) delivers master-crafted cornrow designs for women, men, and children with edge-protecting technique.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold text-[#2B231D]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] shadow-xs">
                    <ShieldCheck size={15} className="text-[#16857B]" /> Scalp-Friendly Feed-In
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] shadow-xs">
                    <Clock size={15} className="text-[#BA1296]" /> Fast 1.5–3.5 Hr Installs
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => handleBook()}
                    className="inline-flex items-center gap-2 rounded-full bg-[#16857B] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#126b63] hover:scale-105 active:scale-95 cursor-pointer font-['Inter',sans-serif]"
                  >
                    <Calendar size={18} />
                    <span>Book Cornrows Online</span>
                  </button>
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#2B231D] border border-[#E8DFC8] shadow-xs transition-all hover:scale-105"
                  >
                    <Phone size={16} className="text-[#16857B]" />
                    <span>Call (301) 523-8593</span>
                  </a>
                </div>
              </div>

              <div>
                <div className="overflow-hidden rounded-3xl shadow-xl border border-[#E8DFC8]">
                  <img
                    src={cornrowsImg}
                    alt="Precision feed-in cornrows styled at Doussou Quality Braiding Glen Burnie MD"
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#FAF8F5] border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B231D] text-center mb-10 font-['Inter',sans-serif]">
              Cornrow &amp; Stitch Styles Menu
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {CORNROW_OPTIONS.map((item) => (
                <div key={item.name} className="rounded-2xl bg-white p-6 border border-[#E8DFC8] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-[#8C7A6B]">{item.time}</span>
                      <span className="text-xl font-bold text-[#16857B]">{item.price}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#2B231D]">{item.name}</h3>
                    <p className="text-xs text-[#5C5046] mt-2 leading-relaxed">{item.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleBook(item)}
                    className="mt-5 w-full rounded-xl bg-[#16857B] py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#126b63] transition-colors cursor-pointer"
                  >
                    Book Style
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-white border border-[#E8DFC8]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C7A6B] mb-3">Related Glen Burnie Braids:</h4>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <Link to="/knotless-braids-glen-burnie-md" className="rounded-full bg-[#FAF8F5] px-3.5 py-1.5 border border-[#E8DFC8] text-[#2B231D] hover:border-[#16857B] transition-colors">
                  Knotless Braids →
                </Link>
                <Link to="/box-braids-glen-burnie-md" className="rounded-full bg-[#FAF8F5] px-3.5 py-1.5 border border-[#E8DFC8] text-[#2B231D] hover:border-[#16857B] transition-colors">
                  Box Braids →
                </Link>
                <Link to="/kids-hair-braiding-glen-burnie-md" className="rounded-full bg-[#FAF8F5] px-3.5 py-1.5 border border-[#E8DFC8] text-[#2B231D] hover:border-[#16857B] transition-colors">
                  Kids Hair Braiding →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-b border-[#E8DFC8]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B231D] text-center mb-8 font-['Inter',sans-serif]">
              Cornrows &amp; Stitch Braids FAQs
            </h2>
            <div className="space-y-3">
              {CORNROW_FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={faq.q} className="rounded-2xl border border-[#E8DFC8] bg-[#FAF8F5] overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm text-[#2B231D]"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={16} className={`text-[#16857B] transition-transform ${isOpen ? "rotate-180" : ""}`} />
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

