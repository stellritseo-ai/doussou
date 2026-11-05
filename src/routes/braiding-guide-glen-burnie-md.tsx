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
  HelpCircle,
  BookOpen,
  DollarSign,
  Info,
} from "lucide-react";

import knotlessImg from "@/assets/style-knotless.jpg";
import boxbraidsImg from "@/assets/style-boxbraids.jpg";
import kidsImg from "@/assets/style-kids.jpg";
import naturalImg from "@/assets/style-natural.jpg";

const PAGE_TITLE = "The Complete Glen Burnie Braiding & Protective Style Guide | Doussou Quality Braiding";
const PAGE_DESCRIPTION =
  "Comprehensive guide to knotless braids, box braids, hair prep, costs, aftercare & kids styles by Doussou Quality Braiding at 337 S Hospital Dr, Glen Burnie, MD.";
const CANONICAL = "https://www.doussouqualitybraiding.com/braiding-guide-glen-burnie-md";

const GUIDE_SECTIONS = [
  {
    id: "what-are-knotless-braids",
    title: "1. What Are Knotless Braids?",
    summary:
      "Knotless braids are an advanced protective hair braiding technique where the braider starts with the client's natural hair and gradually feeds in synthetic or human hair extensions strand by strand, completely eliminating the bulky, tight knot at the root.",
    content: (
      <>
        <p className="text-[#5A534A] leading-relaxed mb-3">
          Traditional box braids begin with a tight anchor knot wrapped around the base of your natural hair shaft. This knot often places acute tension directly on the hair follicle, which can lead to headaches, bumps, and in severe cases, traction alopecia.
        </p>
        <p className="text-[#5A534A] leading-relaxed mb-3">
          In contrast, <strong>knotless braids lie completely flat against your scalp</strong> from minute one. Because extensions are fed in incrementally, the weight is distributed evenly down the length of the braid rather than pulling directly on the root.
        </p>
        <div className="bg-[#FAF5ED] p-4 rounded-lg border border-[#EADFCB] text-xs sm:text-sm">
          <strong className="text-[#4A1525] block mb-1">Key Advantages:</strong>
          <ul className="list-disc list-inside space-y-1 text-[#5A534A]">
            <li>Instant mobility: Put your hair into a high ponytail or bun on day one without pain.</li>
            <li>Zero tension bumps or scalp irritation.</li>
            <li>Natural, seamless scalp-growth appearance.</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "knotless-vs-box-braids",
    title: "2. Knotless Braids vs. Box Braids: Which Is Right for You?",
    summary:
      "The choice between knotless braids and traditional box braids comes down to tension sensitivity, installation time, budget, and desired longevity.",
    content: (
      <>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-[#FAF5ED] border-b border-[#EADFCB] text-[#4A1525]">
                <th className="p-3 font-serif font-bold">Feature</th>
                <th className="p-3 font-serif font-bold">Knotless Braids</th>
                <th className="p-3 font-serif font-bold">Traditional Box Braids</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EADFCB] text-[#5A534A]">
              <tr>
                <td className="p-3 font-medium text-[#2D2A26]">Root Tension</td>
                <td className="p-3 text-[#2E7D32] font-semibold">Zero tension (flat feed-in)</td>
                <td className="p-3">Mild to moderate knot tension</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[#2D2A26]">Immediate Styling</td>
                <td className="p-3 text-[#2E7D32]">Yes — wear in buns on Day 1</td>
                <td className="p-3">Usually requires 2-3 days to relax</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[#2D2A26]">Install Duration</td>
                <td className="p-3">3.5 to 6 hours</td>
                <td className="p-3">2.5 to 4 hours (Faster)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[#2D2A26]">Typical Longevity</td>
                <td className="p-3">6 to 8 weeks</td>
                <td className="p-3">6 to 10 weeks</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[#2D2A26]">Price Point</td>
                <td className="p-3">$180 – $280</td>
                <td className="p-3">$150 – $220</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[#5A534A] leading-relaxed text-xs sm:text-sm">
          <strong>Recommendation:</strong> If you have sensitive scalp or fragile edges, knotless is the gold standard. If you want a quick, classic install that holds exceptionally well on coarser textures, traditional box braids remain a great economical choice.
        </p>
      </>
    ),
  },
  {
    id: "how-long-do-box-braids-last",
    title: "3. How Long Do Box Braids Last?",
    summary:
      "Traditional box braids typically last between 6 and 10 weeks, while knotless braids look optimal for 6 to 8 weeks before new growth warrants a refresh.",
    content: (
      <>
        <p className="text-[#5A534A] leading-relaxed mb-3">
          How long your braids last depends on three key factors:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-[#5A534A] text-xs sm:text-sm mb-4">
          <li><strong>Braid Part Size:</strong> Micro and small braids last 8-10 weeks; medium braids last 6-8 weeks; large and jumbo braids last 4-6 weeks.</li>
          <li><strong>Nighttime Protection:</strong> Sleeping in a 100% silk or satin bonnet prevents friction-induced fuzz and flyaways.</li>
          <li><strong>Moisture Balance:</strong> Hydrating your scalp with lightweight oils prevents itchiness and dry flaking without causing slippage.</li>
        </ol>
        <div className="bg-[#FAF5ED] p-3 rounded border border-[#EADFCB] text-xs text-[#5A534A]">
          <strong className="text-[#4A1525]">Important Safety Note:</strong> We advise never wearing any braided style longer than 10-12 weeks, as shed hairs can begin locking and matting at the roots, making takedown damaging.
        </div>
      </>
    ),
  },
  {
    id: "how-to-prepare-your-hair",
    title: "4. How to Prepare Your Hair for Braiding",
    summary:
      "Arriving with properly prepared hair ensures a comfortable, pain-free installation and prolongs the lifespan of your style.",
    content: (
      <>
        <ul className="space-y-2 text-[#5A534A] text-xs sm:text-sm mb-4">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
            <span><strong>Clarify your scalp:</strong> Wash hair with a sulfate-free clarifying shampoo to remove buildup, dead skin, and old oils.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
            <span><strong>Deep condition:</strong> Provide deep moisture 24-48 hours before your appointment to strengthen the hair cortex.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
            <span><strong>Blow dry thoroughly:</strong> Arrive with detangled, stretched hair free of heavy grease, beeswax, or silicones.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
            <span><strong>Optional Salon Wash:</strong> If you prefer, Doussou Quality Braiding offers on-site wash and blowout service for $30-$45.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-to-maintain-protective-hairstyles",
    title: "5. How to Maintain Protective Hairstyles",
    summary:
      "Protective styles are only protective if your natural hair underneath remains clean, hydrated, and unstressed.",
    content: (
      <>
        <p className="text-[#5A534A] leading-relaxed mb-3">
          To protect your hair while enjoying your style:
        </p>
        <ul className="space-y-2 text-[#5A534A] text-xs sm:text-sm">
          <li><strong>Silk or Satin Nightwear:</strong> Always wrap braids with a satin scarf or sleep on a silk pillowcase.</li>
          <li><strong>Bi-weekly Cleansing:</strong> Cleanse your scalp parts with witch hazel or diluted shampoo using a cotton pad.</li>
          <li><strong>Nourish the Scalp:</strong> Apply 3-4 drops of jojoba or tea tree oil between rows 2 to 3 times per week.</li>
          <li><strong>Avoid Heavy Ponytails:</strong> Do not pull heavy braids into tight updos every single day to avoid hairline stress.</li>
        </ul>
      </>
    ),
  },
  {
    id: "african-hair-braids-cost",
    title: "6. How Much Do African Hair Braids Cost in Glen Burnie, MD?",
    summary:
      "At Doussou Quality Braiding, hair braiding services range from $60 for simple natural braids to $280 for intricate waist-length bohemian knotless braids.",
    content: (
      <>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-[#FAF5ED] border-b border-[#EADFCB] text-[#4A1525]">
                <th className="p-3 font-serif font-bold">Service Category</th>
                <th className="p-3 font-serif font-bold">Specific Style Examples</th>
                <th className="p-3 font-serif font-bold">Price Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EADFCB] text-[#5A534A]">
              <tr>
                <td className="p-3 font-medium text-[#2D2A26]">Knotless Braids</td>
                <td className="p-3">Goddess Knotless, Boho Knotless, 14", 18", 20"</td>
                <td className="p-3 font-semibold text-[#4A1525]">$180 – $280</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[#2D2A26]">Box Braids</td>
                <td className="p-3">Small, Medium, Large, French Curls</td>
                <td className="p-3 font-semibold text-[#4A1525]">$150 – $220</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[#2D2A26]">Cornrows & Feed-Ins</td>
                <td className="p-3">2-8 Stitch Braids, Men's Cornrows, Tribal</td>
                <td className="p-3 font-semibold text-[#4A1525]">$65 – $160</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[#2D2A26]">Twists & Locs</td>
                <td className="p-3">Senegalese Twists, Soft Locs, Butterfly Locs</td>
                <td className="p-3 font-semibold text-[#4A1525]">$180 – $280</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[#2D2A26]">Loc Care & Retwist</td>
                <td className="p-3">Starter Locs, Palm Roll Maintenance, Barrel Twists</td>
                <td className="p-3 font-semibold text-[#4A1525]">$80 – $120</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[#2D2A26]">Kids Braids</td>
                <td className="p-3">Natural Braids, Cornrows with Beads</td>
                <td className="p-3 font-semibold text-[#4A1525]">$65 – $110</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[#2D2A26]">Natural Hair Care</td>
                <td className="p-3">Two-Strand Twists, Wash & Deep Condition, Takedown</td>
                <td className="p-3 font-semibold text-[#4A1525]">$30 – $120</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "best-protective-styles-for-natural-hair",
    title: "7. Best Protective Hairstyles for Natural Hair",
    summary:
      "The best protective styles protect delicate ends from friction, tuck away coils, and allow regular access to moisturize the scalp.",
    content: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#5A534A] my-3">
          <div className="bg-[#FAF5ED] p-3 rounded border border-[#EADFCB]">
            <strong className="text-[#4A1525] block mb-1">1. Knotless Braids</strong>
            Offers the lowest scalp tension and maximum versatility while completely protecting natural ends.
          </div>
          <div className="bg-[#FAF5ED] p-3 rounded border border-[#EADFCB]">
            <strong className="text-[#4A1525] block mb-1">2. Two-Strand Twists</strong>
            Ideal for low manipulation with zero synthetic hair required. Simple to moisturize and unravel.
          </div>
          <div className="bg-[#FAF5ED] p-3 rounded border border-[#EADFCB]">
            <strong className="text-[#4A1525] block mb-1">3. Soft Locs / Faux Locs</strong>
            Encapsulates natural hair completely inside wrapped fiber, safeguarding it from weather and dry air.
          </div>
          <div className="bg-[#FAF5ED] p-3 rounded border border-[#EADFCB]">
            <strong className="text-[#4A1525] block mb-1">4. Feed-In Cornrows</strong>
            Lies flat to the head and keeps hair neatly secured for active gym lovers and swimmers.
          </div>
        </div>
      </>
    ),
  },
  {
    id: "how-to-care-for-braids-and-scalp",
    title: "8. How to Care for Braids and Your Scalp",
    summary:
      "A healthy protective style routine centers on moisture, scalp clarity, and low tension.",
    content: (
      <>
        <p className="text-[#5A534A] leading-relaxed mb-3">
          Common mistakes include ignoring itchy scalps or slathering heavy grease over dirty roots.
        </p>
        <ul className="space-y-2 text-[#5A534A] text-xs sm:text-sm">
          <li><strong>Hydrate first:</strong> Water-based leave-in spray (like rosewater or aloe vera) hydrates dried strands inside braids.</li>
          <li><strong>Seal second:</strong> Apply lightweight oil (argan, jojoba, or almond oil) along your parts to lock in hydration.</li>
          <li><strong>Target itch immediately:</strong> If you feel itchiness, dab witch hazel or tea tree oil with a cotton swab rather than scratching with nails, which can tear the skin.</li>
        </ul>
      </>
    ),
  },
  {
    id: "what-to-know-before-booking",
    title: "9. What to Know Before Booking a Braiding Appointment",
    summary:
      "Essential details regarding arrival time, hair length requirements, and booking policies at Doussou Quality Braiding.",
    content: (
      <>
        <div className="space-y-2 text-xs sm:text-sm text-[#5A534A]">
          <p><strong>Minimum Hair Length:</strong> We recommend at least 3 to 4 inches of natural hair all around your head to ensure braids grip comfortably without slipping.</p>
          <p><strong>Appointment Duration:</strong> Styles take between 1.5 hours (kids/cornrows) and 6 hours (micro knotless). Please allow ample time in your schedule.</p>
          <p><strong>Location & Parking:</strong> We are located at 337 S Hospital Dr, Glen Burnie, MD 21061, directly across from BWMC medical center with free parking.</p>
          <p><strong>Salon Hours:</strong> Monday through Saturday: 9:30 AM to 8:30 PM. Sunday appointments are available upon advance request.</p>
        </div>
      </>
    ),
  },
  {
    id: "best-braiding-styles-for-children",
    title: "10. Best Braiding Styles for Children",
    summary:
      "Styles that minimize chair time, prevent tension headaches, and stay neat through active school and playground days.",
    content: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-[#5A534A] my-3">
          <div className="bg-[#FAF5ED] p-3 rounded border border-[#EADFCB]">
            <strong className="text-[#4A1525] block mb-1">Cornrows with Beads</strong>
            Fun, colorful, and durable. Beads add joy while hair remains neatly secured away from their face.
          </div>
          <div className="bg-[#FAF5ED] p-3 rounded border border-[#EADFCB]">
            <strong className="text-[#4A1525] block mb-1">Two-Strand Twists</strong>
            Soft, featherlight, and easy to untwist at home. Ideal for toddlers and children under 6.
          </div>
          <div className="bg-[#FAF5ED] p-3 rounded border border-[#EADFCB]">
            <strong className="text-[#4A1525] block mb-1">Kid Knotless Braids</strong>
            Tension-free box plaits that allow gentle ponytails without pulling fragile temple hair.
          </div>
        </div>
      </>
    ),
  },
];

const getSchema = () => [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Complete Glen Burnie Braiding & Protective Style Guide",
    description: PAGE_DESCRIPTION,
    image: "https://www.doussouqualitybraiding.com/logo.png",
    author: {
      "@type": "Organization",
      name: "Doussou Quality Braiding",
      url: "https://www.doussouqualitybraiding.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "Doussou Quality Braiding",
      logo: {
        "@type": "ImageObject",
        url: "https://www.doussouqualitybraiding.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: GUIDE_SECTIONS.map((sec) => ({
      "@type": "Question",
      name: sec.title.replace(/^[0-9]+\.\s*/, ""),
      acceptedAnswer: {
        "@type": "Answer",
        text: sec.summary,
      },
    })),
  },
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
        name: "Braiding Guide Glen Burnie MD",
        item: CANONICAL,
      },
    ],
  },
];

export const Route = createFileRoute("/braiding-guide-glen-burnie-md")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { name: "keywords", content: "African hair braiding guide, knotless vs box braids, braiding hair prices Glen Burnie MD, how to prep hair for braids, braid maintenance, kids hair braiding advice" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "article" },
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
  component: BraidingGuidePage,
});

function BraidingGuidePage() {
  const [selectedService, setSelectedService] = useState<SelectedServiceData | null>(null);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2D2A26]">
      <Header />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF5ED] border-b border-[#EADFCB] py-3 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-[#7C756D]">
            <li>
              <Link to="/" className="hover:text-[#4A1525] transition-colors">
                Home
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-[#4A1525] font-semibold" aria-current="page">
              Glen Burnie Braiding Guide
            </li>
          </ol>
        </div>
      </nav>

      {/* Guide Header */}
      <header className="bg-gradient-to-b from-[#FAF5ED] to-[#FFFDF9] py-14 lg:py-18 border-b border-[#EADFCB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EADFCB]/60 text-[#4A1525] text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#C5A059]" />
            Official Salon Knowledge Base
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#4A1525] font-bold leading-tight mb-4">
            The Complete African Hair Braiding & Protective Styling Guide
          </h1>
          <p className="text-base sm:text-lg text-[#5A534A] leading-relaxed max-w-2xl mx-auto">
            Honest, fact-based answers on knotless vs. box braids, hair preparation, aftercare rituals, and transparent pricing in Glen Burnie, Maryland.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-[#7C756D]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              Doussou Quality Braiding (337 S Hospital Dr, Glen Burnie, MD)
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              Mon-Sat: 9:30 AM – 8:30 PM
            </span>
          </div>
        </div>
      </header>

      {/* Quick Navigation Anchor Bar */}
      <div className="bg-white border-b border-[#EADFCB] sticky top-0 z-10 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 overflow-x-auto whitespace-nowrap text-xs text-[#5A534A] flex gap-4 scrollbar-none">
          <a href="#what-are-knotless-braids" className="hover:text-[#4A1525] font-medium">1. Knotless Braids</a>
          <a href="#knotless-vs-box-braids" className="hover:text-[#4A1525] font-medium">2. Knotless vs Box</a>
          <a href="#how-long-do-box-braids-last" className="hover:text-[#4A1525] font-medium">3. How Long Braids Last</a>
          <a href="#how-to-prepare-your-hair" className="hover:text-[#4A1525] font-medium">4. Hair Prep</a>
          <a href="#how-to-maintain-protective-hairstyles" className="hover:text-[#4A1525] font-medium">5. Maintenance</a>
          <a href="#african-hair-braids-cost" className="hover:text-[#4A1525] font-medium">6. Pricing Guide</a>
          <a href="#best-protective-styles-for-natural-hair" className="hover:text-[#4A1525] font-medium">7. Natural Styles</a>
          <a href="#how-to-care-for-braids-and-scalp" className="hover:text-[#4A1525] font-medium">8. Scalp Care</a>
          <a href="#what-to-know-before-booking" className="hover:text-[#4A1525] font-medium">9. Before Booking</a>
          <a href="#best-braiding-styles-for-children" className="hover:text-[#4A1525] font-medium">10. Kids Styles</a>
        </div>
      </div>

      {/* Guide Content Sections */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {GUIDE_SECTIONS.map((sec, idx) => (
          <article
            key={sec.id}
            id={sec.id}
            className="scroll-mt-16 bg-white p-6 sm:p-8 rounded-2xl border border-[#EADFCB] shadow-xs"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#4A1525] font-bold mb-3">
              {sec.title}
            </h2>
            <div className="bg-[#FAF5ED] p-3.5 rounded-lg border-l-4 border-[#C5A059] mb-4 text-xs sm:text-sm text-[#2D2A26] font-medium">
              {sec.summary}
            </div>
            <div>{sec.content}</div>
          </article>
        ))}

        {/* Action Callout */}
        <div className="bg-[#FAF5ED] p-8 rounded-2xl border border-[#EADFCB] text-center space-y-4">
          <h3 className="text-2xl font-serif font-bold text-[#4A1525]">
            Have a Specific Question About Your Hair?
          </h3>
          <p className="text-[#5A534A] text-sm max-w-xl mx-auto">
            Give us a call or visit our Glen Burnie salon at 337 S Hospital Dr. We're always happy to offer honest advice and recommend the ideal protective style for your hair texture.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/services"
              className="px-6 py-3 bg-[#4A1525] hover:bg-[#38101C] text-white text-sm font-medium rounded-lg shadow-md transition-colors"
            >
              Explore All Services & Prices
            </Link>
            <a
              href={`tel:${CONTACT.phone.replace(/[^0-9]/g, "")}`}
              className="px-5 py-3 bg-white hover:bg-[#FAF5ED] text-[#4A1525] border border-[#EADFCB] text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              Call (301) 523-8593
            </a>
          </div>
        </div>
      </main>

      <Footer />

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

