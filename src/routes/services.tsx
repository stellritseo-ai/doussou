import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BookingForm } from "@/components/site/BookingForm";
import { CONTACT } from "@/components/site/data";
import {
  Sparkles,
  Scissors,
  CheckCircle2,
  Calendar,
  Phone,
  ChevronRight,
  Sparkle,
  Clock,
  Heart,
  ShieldCheck,
  Star,
  Layers,
  Crown,
  Smile,
  Check,
  Info,
  ArrowRight,
  Tag,
  Search,
  X,
  LayoutGrid,
  List,
  MapPin,
} from "lucide-react";

import goddessKnotlessImg from "@/assets/services/goddess-knotless.jpg";
import singleBraidNaturalImg from "@/assets/services/single-braid-natural.jpg";
import bohoKnotless18Img from "@/assets/services/boho-knotless-18.jpg";
import frenchCurlsImg from "@/assets/services/french-curls.jpg";
import senegaleseTwist18Img from "@/assets/services/senegalese-twist-18.jpg";
import senegaleseTwist20Img from "@/assets/services/senegalese-twist-20.jpg";
import interLocImg from "@/assets/services/inter-loc.jpg";
import knotlessBraids14Img from "@/assets/services/knotless-braids-14.jpg";
import barrelTwistImg from "@/assets/services/barrel-twist.jpg";
import combTwistsImg from "@/assets/services/comb-twists.jpg";
import crochetImg from "@/assets/services/crochet.jpg";
import fauxLocsImg from "@/assets/services/faux-locs.jpg";
import kinkyTwistsImg from "@/assets/services/kinky-twists.jpg";

import boxbraidsImg from "@/assets/style-boxbraids.jpg";
import knotlessImg from "@/assets/style-knotless.jpg";
import locsImg from "@/assets/style-locs.jpg";
import kidsImg from "@/assets/style-kids.jpg";
import treatmentImg from "@/assets/style-treatment.jpg";
import bridalImg from "@/assets/style-bridal.jpg";
import transformationImg from "@/assets/transformation.jpg";
import cornrowsImg from "@/assets/style-cornrows.jpg";

const PAGE_TITLE = "Our Services & Price List – Doussou Quality Braiding | Glen Burnie, MD";
const PAGE_DESCRIPTION =
  "Explore transparent upfront pricing and complete hair braiding services at Doussou Quality Braiding in Glen Burnie, MD. Over 6 years of professional artistry. View all service cards, prices, and book online.";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Doussou Quality Braiding",
    description: PAGE_DESCRIPTION,
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
    areaServed: "Glen Burnie, Baltimore, Annapolis, and surrounding Maryland areas",
  },
];

// Complete 24-Item Price List matching Image 1
export interface SalonPriceItem {
  id: string;
  name: string;
  price: string;
  category: "Braids" | "Twists & Locs" | "Natural & Care" | "Extensions & Wigs";
  highlighted: boolean;
  note?: string;
  isPopular?: boolean;
}

export const SALON_PRICE_LIST: SalonPriceItem[] = [
  { id: "barrel-twist", name: "Barrel Twist", price: "$80-$100", category: "Twists & Locs", highlighted: true, isPopular: true },
  { id: "bohemian-braid-medium", name: "Bohemian Braid Medium", price: "$240", category: "Braids", highlighted: false },
  { id: "box-braids", name: "Box Braids", price: "$200-$220", category: "Braids", highlighted: true, isPopular: true },
  { id: "box-braids-large", name: "Box Braids Large", price: "$250", category: "Braids", highlighted: false },
  { id: "braids-natural", name: "Braids Natural", price: "$65-$85", category: "Natural & Care", highlighted: true },
  { id: "comb-twists", name: "Comb Twists", price: "$65 -$85", category: "Twists & Locs", highlighted: false },
  { id: "crochet", name: "Crochet", price: "$100-$120", category: "Extensions & Wigs", highlighted: true, isPopular: true },
  { id: "dread-locks", name: "Dread Locks", price: "$100", category: "Twists & Locs", highlighted: false },
  { id: "faux-locks", name: "Faux Locks", price: "$200-$280", category: "Twists & Locs", highlighted: true, isPopular: true },
  { id: "french-braid", name: "French Braid", price: "$80", category: "Braids", highlighted: false },
  { id: "kids-braids", name: "Kids Braids", price: "$65-$100", category: "Braids", highlighted: true },
  { id: "kinky-twists", name: "Kinky Twists", price: "$200-$220", category: "Twists & Locs", highlighted: false },
  { id: "lock-extension", name: "Lock Extension", price: "$200-$300", category: "Twists & Locs", highlighted: true, note: "Supply your own hair", isPopular: true },
  { id: "lock-maintenance", name: "Lock Maintenance", price: "$80-$100", category: "Twists & Locs", highlighted: false },
  { id: "lock-start", name: "Lock Start", price: "$85-$120", category: "Twists & Locs", highlighted: true },
  { id: "senegal-twists", name: "Senegal Twists", price: "$200-$240", category: "Twists & Locs", highlighted: false },
  { id: "senegal-twists-medium", name: "Senegal Twists Medium", price: "$260-$280", category: "Twists & Locs", highlighted: true, isPopular: true },
  { id: "small-knotless-braids", name: "Small Knotless Braids", price: "$250", category: "Braids", highlighted: false, isPopular: true },
  { id: "two-strand-twists", name: "Two Strand Twists", price: "$70 -$85", category: "Twists & Locs", highlighted: true },
  { id: "undo-braids-extensions", name: "Undo Braids + Wash/Blow Dry (Extensions)", price: "$120", category: "Natural & Care", highlighted: false },
  { id: "undo-braids-natural-hair", name: "Undo Braids + Wash/Blow Dry (Natural Hair)", price: "$40", category: "Natural & Care", highlighted: true },
  { id: "wash", name: "Wash", price: "$30", category: "Natural & Care", highlighted: false },
  { id: "weaving-extension", name: "Weaving Extension", price: "$120 -$160", category: "Extensions & Wigs", highlighted: true },
  { id: "wig-install", name: "Wig Install", price: "$80-$85", category: "Extensions & Wigs", highlighted: false },
];

export const EXAMPLES_SHOWCASE = [
  { name: "Goddess Knotless", price: "$180+", image: goddessKnotlessImg },
  { name: "Single Braid Natural", price: "$60", image: singleBraidNaturalImg },
  { name: "18\" Boho Knotless", price: "$190", image: bohoKnotless18Img },
  { name: "French Curls", price: "$180+", image: frenchCurlsImg },
  { name: "18\" Senegalese", price: "$190+", image: senegaleseTwist18Img },
  { name: "20\" Senegalese", price: "$200+", image: senegaleseTwist20Img },
  { name: "Inter Loc", price: "$300+", image: interLocImg },
  { name: "14\" Knotless Medi", price: "$180", image: knotlessBraids14Img },
];

export const PRICE_CATEGORIES = [
  "All",
  "Braids",
  "Twists & Locs",
  "Natural & Care",
  "Extensions & Wigs",
] as const;

// Complete list of ALL services as visual cards with Inter font
export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  category: "Braids" | "Twists & Locs" | "Natural Hair" | "Extensions" | "Wash & Care" | "Kids";
  image: string;
  tag: string;
  blurb: string;
  highlighted?: boolean;
}

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: "goddess-knotless",
    name: "Goddess Knotless",
    price: "$180+",
    category: "Braids",
    image: goddessKnotlessImg,
    tag: "Signature",
    blurb: "Featherlight knotless braids with cascading curly bohemian tendrils.",
    highlighted: true,
  },
  {
    id: "small-knotless-braids",
    name: "Small Knotless Braids",
    price: "$250",
    category: "Braids",
    image: knotlessImg,
    tag: "High Demand",
    blurb: "Intricate, fine-parted small knotless braids for maximum density and flow.",
    highlighted: false,
  },
  {
    id: "14-knotless-braids-medi",
    name: '14" Knotless Braids Medi',
    price: "$180",
    category: "Braids",
    image: knotlessBraids14Img,
    tag: "Chic & Light",
    blurb: "Shoulder-length medium knotless braids adorned with beads and cuffs.",
    highlighted: true,
  },
  {
    id: "18-inch-boho-knotless",
    name: "18 Inch Boho Knotless",
    price: "$190",
    category: "Braids",
    image: bohoKnotless18Img,
    tag: "Trending",
    blurb: "18-inch knotless braids infused with textured wavy curls throughout.",
    highlighted: true,
  },
  {
    id: "bohemian-braid-medium",
    name: "Bohemian Braid Medium",
    price: "$240",
    category: "Braids",
    image: bohoKnotless18Img,
    tag: "Client Favorite",
    blurb: "Full-bodied bohemian braids with soft, romantic curls along the length.",
    highlighted: false,
  },
  {
    id: "box-braids",
    name: "Box Braids",
    price: "$200-$220",
    category: "Braids",
    image: boxbraidsImg,
    tag: "Classic",
    blurb: "Timeless versatile box braids with clean, neat parting grids.",
    highlighted: true,
  },
  {
    id: "box-braids-large",
    name: "Box Braids Large",
    price: "$250",
    category: "Braids",
    image: boxbraidsImg,
    tag: "Bold Style",
    blurb: "Chunky statement box braids installed quickly with even tension.",
    highlighted: false,
  },
  {
    id: "french-curls",
    name: "French Curls",
    price: "$180+",
    category: "Braids",
    image: frenchCurlsImg,
    tag: "Bouncy & Glam",
    blurb: "Sleek braids transitioning into bouncy, voluminous spiral curls.",
    highlighted: true,
  },
  {
    id: "french-braid",
    name: "French Braid",
    price: "$80",
    category: "Braids",
    image: cornrowsImg,
    tag: "Clean & Sleek",
    blurb: "Elegant scalp French braiding for a smooth, refined daily look.",
    highlighted: false,
  },
  {
    id: "single-braid-natural-hair",
    name: "Single Braid Natural Hair",
    price: "$60",
    category: "Natural Hair",
    image: singleBraidNaturalImg,
    tag: "Natural Care",
    blurb: "Clean individual braids on natural hair with precision scalp parting.",
    highlighted: false,
  },
  {
    id: "braids-natural",
    name: "Braids Natural",
    price: "$65-$85",
    category: "Natural Hair",
    image: singleBraidNaturalImg,
    tag: "Gentle Care",
    blurb: "Protective natural hair braiding preserving hair health and edges.",
    highlighted: true,
  },
  {
    id: "kids-braids",
    name: "Kids Braids",
    price: "$65-$100",
    category: "Kids",
    image: kidsImg,
    tag: "Gentle for Kids",
    blurb: "Patient, tension-free styling for children with beads and colorful accessories.",
    highlighted: true,
  },
  {
    id: "18-senegalese-twist",
    name: '18" Senegalese Twist',
    price: "$190+",
    category: "Twists & Locs",
    image: senegaleseTwist18Img,
    tag: "Smooth & Silky",
    blurb: "Silky 18-inch two-strand rope twists styled for effortless elegance.",
    highlighted: false,
  },
  {
    id: "20-senegalese-twist",
    name: '20" Senegalese Twist',
    price: "$200+",
    category: "Twists & Locs",
    image: senegaleseTwist20Img,
    tag: "Statement Length",
    blurb: "Extra-long 20-inch twists crafted with even tension and clean parts.",
    highlighted: false,
  },
  {
    id: "senegal-twists",
    name: "Senegal Twists",
    price: "$200-$240",
    category: "Twists & Locs",
    image: senegaleseTwist18Img,
    tag: "Classic Twists",
    blurb: "Smooth, lustrous rope twists with featherlight feel and natural movement.",
    highlighted: false,
  },
  {
    id: "senegal-twists-medium",
    name: "Senegal Twists Medium",
    price: "$260-$280",
    category: "Twists & Locs",
    image: senegaleseTwist20Img,
    tag: "Full Volume",
    blurb: "Medium-diameter Senegalese rope twists with uniform neatness and shine.",
    highlighted: true,
  },
  {
    id: "barrel-twist",
    name: "Barrel Twist",
    price: "$80-$100",
    category: "Twists & Locs",
    image: barrelTwistImg,
    tag: "Sculpted Updo",
    blurb: "Intricate barrel roll twists along the scalp, ideal for natural hair and locs.",
    highlighted: true,
  },
  {
    id: "comb-twists",
    name: "Comb Twists",
    price: "$65-$85",
    category: "Twists & Locs",
    image: combTwistsImg,
    tag: "Coil Definition",
    blurb: "Neat, uniform single-strand comb coils that define natural texture perfectly.",
    highlighted: false,
  },
  {
    id: "two-strand-twists",
    name: "Two Strand Twists",
    price: "$70-$85",
    category: "Twists & Locs",
    image: barrelTwistImg,
    tag: "Versatile",
    blurb: "Juicy, defined two-strand twists that look stunning worn down or pinned up.",
    highlighted: true,
  },
  {
    id: "kinky-twists",
    name: "Kinky Twists",
    price: "$200-$220",
    category: "Twists & Locs",
    image: kinkyTwistsImg,
    tag: "Textured Look",
    blurb: "Natural-textured protective twists with curled or tapered ends.",
    highlighted: false,
  },
  {
    id: "inter-loc",
    name: "Inter Loc",
    price: "$300+",
    category: "Twists & Locs",
    image: interLocImg,
    tag: "Specialist",
    blurb: "Professional interlocking technique for neat, long-lasting loc establishment.",
    highlighted: true,
  },
  {
    id: "dread-locks",
    name: "Dread Locks",
    price: "$100",
    category: "Twists & Locs",
    image: locsImg,
    tag: "Loc Craft",
    blurb: "Expert palm rolling, retwisting, and maintenance for healthy mature locs.",
    highlighted: false,
  },
  {
    id: "faux-locks",
    name: "Faux Locks",
    price: "$200-$280",
    category: "Twists & Locs",
    image: fauxLocsImg,
    tag: "Glamorous Locs",
    blurb: "Gorgeous faux loc extensions offering the loc aesthetic without commitment.",
    highlighted: true,
  },
  {
    id: "lock-start",
    name: "Lock Start",
    price: "$85-$120",
    category: "Twists & Locs",
    image: combTwistsImg,
    tag: "New Journey",
    blurb: "Begin your loc journey with precision grid parting and healthy starter coils.",
    highlighted: true,
  },
  {
    id: "lock-maintenance",
    name: "Lock Maintenance",
    price: "$80-$100",
    category: "Twists & Locs",
    image: interLocImg,
    tag: "Retwist & Refresh",
    blurb: "Thorough wash, scalp treatment, and neat retwist for clean, tight roots.",
    highlighted: false,
  },
  {
    id: "lock-extension",
    name: "Lock Extension",
    price: "$200-$300",
    category: "Twists & Locs",
    image: interLocImg,
    tag: "Supply Your Hair",
    blurb: "Seamless loc extensions for instant length and density (supply your own hair).",
    highlighted: true,
  },
  {
    id: "crochet",
    name: "Crochet",
    price: "$100-$120",
    category: "Extensions",
    image: crochetImg,
    tag: "Quick & Voluminous",
    blurb: "Speedy, protective crochet install featuring curls, twists, or faux locs.",
    highlighted: true,
  },
  {
    id: "weaving-extension",
    name: "Weaving Extension",
    price: "$120-$160",
    category: "Extensions",
    image: bridalImg,
    tag: "Flawless Sew-In",
    blurb: "Secure, flat braid-down foundation with seamless track installation.",
    highlighted: true,
  },
  {
    id: "wig-install",
    name: "Wig Install",
    price: "$80-$85",
    category: "Extensions",
    image: transformationImg,
    tag: "Melted Hairline",
    blurb: "Lace customization, bleaching, pluck, and invisible melt for a natural finish.",
    highlighted: false,
  },
  {
    id: "undo-braids-extensions",
    name: "Undo Braids + Wash/Blow Dry (Extensions)",
    price: "$120",
    category: "Wash & Care",
    image: treatmentImg,
    tag: "Complete Reset",
    blurb: "Gentle takedown of extension braids followed by deep wash and blowout.",
    highlighted: false,
  },
  {
    id: "undo-braids-natural-hair",
    name: "Undo Braids + Wash/Blow Dry (Natural Hair)",
    price: "$40",
    category: "Wash & Care",
    image: treatmentImg,
    tag: "Hair Refresh",
    blurb: "Careful takedown of natural braids, clarifying shampoo, conditioner, and dry.",
    highlighted: true,
  },
  {
    id: "wash",
    name: "Wash",
    price: "$30",
    category: "Wash & Care",
    image: treatmentImg,
    tag: "Scalp Clarifying",
    blurb: "Invigorating scalp cleanse, hydrating shampoo, and nourishing rinse.",
    highlighted: false,
  },
];

const CATEGORIES = [
  "All",
  "Braids",
  "Twists & Locs",
  "Natural Hair",
  "Extensions",
  "Wash & Care",
  "Kids",
];

const WHY_BOOK_WITH_US = [
  {
    feature: "6+ Years Professional Experience",
    benefit: "Led by master-level African hair braiders with 6+ years of professional artistry.",
    icon: Scissors,
  },
  {
    feature: "Hair Health & Scalp First",
    benefit: "Tension-free parting and gentle techniques that protect your natural hair and edges.",
    icon: Heart,
  },
  {
    feature: "Flexible Fast Scheduling",
    benefit: "Book online anytime — we can often accommodate requests as early as one hour before!",
    icon: Clock,
  },
  {
    feature: "Styles for Men & Women",
    benefit: "Complete range of protective styles, individual braids, locs, and twists for everyone.",
    icon: Crown,
  },
  {
    feature: "5.0 ★ Rated Studio",
    benefit: "Trusted by hundreds of delighted clients in Glen Burnie, Baltimore, and surrounding Maryland areas.",
    icon: Star,
  },
  {
    feature: "Clean & Relaxing Salon",
    benefit: "Sanitary, peaceful environment dedicated to your supreme comfort and pampering.",
    icon: ShieldCheck,
  },
];

const UNIVERSAL_ADDONS = [
  { name: "Hair Wash & Deep Condition", price: "+$30", detail: "Thorough cleanse and restorative moisture hydration" },
  { name: "Scalp Oil Treatment", price: "+$15", detail: "Nourishing botanical oils massaged into the scalp" },
  { name: "Braid Spray & High Shine", price: "+$10", detail: "Long-lasting hydration and glossy sheen finish" },
  { name: "Beads, Cuffs & Accessories", price: "+$10 – $25", detail: "Gold/silver filigree cuffs, wooden beads, cowrie shells" },
  { name: "Extra Length / Boho Curls", price: "+$20 – $40", detail: "Waist-length extension or additional curly hair tendrils" },
  { name: "Edge Control & Finishing", price: "+$5 – $10", detail: "Sleek, firm-hold edge styling without white residue" },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "Hair braiding Glen Burnie, Doussou Quality Braiding services, Knotless braids Glen Burnie MD, Box braids prices, Boho knotless, French curls braids, Senegalese twist, Inter loc Glen Burnie, Hair braiding prices",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schema),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // State for the Transparent Upfront Pricing / Salon Price List Table
  const [priceSearchQuery, setPriceSearchQuery] = useState("");
  const [priceCategory, setPriceCategory] = useState<string>("All");

  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.blurb.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const filteredPriceList = useMemo(() => {
    return SALON_PRICE_LIST.filter((item) => {
      const matchesCat =
        priceCategory === "All" || item.category === priceCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(priceSearchQuery.toLowerCase()) ||
        item.price.toLowerCase().includes(priceSearchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(priceSearchQuery.toLowerCase()) ||
        (item.note && item.note.toLowerCase().includes(priceSearchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [priceSearchQuery, priceCategory]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#BA1296] selection:text-white">
      <Header />

      <main className="pt-28 lg:pt-36">
        {/* ========================================================================= */}
        {/* HERO SECTION (Matches Booking Page Luxury Editorial Design) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#FAF8F5] pb-14 pt-8 lg:pb-20 lg:pt-12 border-b border-[#E8DFC8]/70">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-20 h-[550px] w-[550px] rounded-full bg-[#DCD4FD]/50 blur-[130px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-20 h-[500px] w-[500px] rounded-full bg-[#FCE0D4]/60 blur-[130px]"
          />

          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C7A6B]"
            >
              <Link to="/" className="transition-colors hover:text-[#C48D46]">
                Home
              </Link>
              <ChevronRight size={13} className="text-[#C48D46]" />
              <span className="text-[#2B231D] font-bold">Services</span>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-5 shadow-xs">
                <Scissors size={13} className="text-[#C48D46]" />
                <span>Professional Hair Braiding &amp; Styling</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-normal leading-[1.12] tracking-tight text-[#2B231D]">
                Our Services –{" "}
                <span className="font-serif italic text-[#C48D46]">Doussou Quality Braiding</span>
              </h1>

              <p className="mt-5 text-lg sm:text-xl font-serif italic text-[#2B231D] leading-relaxed max-w-2xl mx-auto">
                Premium Hair Braiding &amp; Styling in Glen Burnie, MD
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#5C5046] font-medium leading-relaxed max-w-3xl mx-auto">
                At Doussou Quality Braiding, we combine authentic West African braiding heritage with modern scalp-friendly techniques for women, men, and children. Whether you seek knotless braids, stitch cornrows, loc maintenance, or custom twists, experience flawless artistry that protects your edges and lasts for weeks.
              </p>
            </div>

            {/* Quick Service Channels Grid */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              <a
                href="#all-services-grid"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs transition-all hover:border-[#C48D46] hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C48D46]/15 text-[#C48D46]">
                  <Scissors size={20} />
                </div>
                <div className="text-left">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#2B231D]">
                    32 Service Cards
                  </h2>
                  <p className="text-[11px] text-[#8C7A6B]">Explore All Styles &amp; Details</p>
                </div>
              </a>

              <a
                href="#price-list"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs transition-all hover:border-[#BA1296] hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#BA1296]/15 text-[#BA1296]">
                  <Tag size={20} />
                </div>
                <div className="text-left">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#2B231D]">
                    Price List Table
                  </h2>
                  <p className="text-[11px] text-[#8C7A6B]">24 Upfront Salon Prices</p>
                </div>
              </a>

              <Link
                to="/booking"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs transition-all hover:border-[#16857B] hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#16857B]/15 text-[#16857B]">
                  <Calendar size={20} />
                </div>
                <div className="text-left">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#2B231D]">
                    Online Booking
                  </h2>
                  <p className="text-[11px] text-[#8C7A6B]">Instant Appointment Slots</p>
                </div>
              </Link>

              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs transition-all hover:border-[#2B231D] hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2B231D]/10 text-[#2B231D]">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#2B231D]">
                    Call / Text Studio
                  </h2>
                  <p className="text-[11px] text-[#8C7A6B]">{CONTACT.phone}</p>
                </div>
              </a>
            </div>

            {/* Trust Assurance Strip */}
            <div className="mt-10 pt-6 border-t border-[#E8DFC8]/70 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-bold text-[#2B231D]">
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-[#E8DFC8] shadow-xs">
                <Star size={14} className="text-[#C48D46] fill-[#C48D46]" />
                <span>5.0 ★ Google Rated</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-[#E8DFC8] shadow-xs">
                <CheckCircle2 size={15} className="text-[#C48D46]" />
                <span>Upfront Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-[#E8DFC8] shadow-xs">
                <ShieldCheck size={15} className="text-[#C48D46]" />
                <span>100% Tension-Free Scalp Care</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-[#E8DFC8] shadow-xs">
                <Sparkles size={15} className="text-[#C48D46]" />
                <span>Walk-Ins Welcome by Notice</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ALL SERVICES CARDS GRID (Using Font Inter on every card) */}
        {/* ========================================================================= */}
        <section
          id="all-services-grid"
          className="relative overflow-hidden bg-neutral-50/60 pb-16 pt-8 lg:pb-24 lg:pt-12 scroll-mt-24 border-t border-purple-100/60"
        >
          <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-[#A81286] tracking-tight">
                All Braiding &amp; Hair Services
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">
                Browse our complete collection of protective hairstyles, locs, twists, extensions, and natural hair care services.
              </p>
            </div>

            {/* Search & Category Filter Controls */}
            <div className="mb-10 space-y-4 max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />
                <input
                  type="text"
                  placeholder="Search any service or price (e.g. Knotless, Box Braids, Twists, Locs, Wash)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border border-neutral-300 bg-white py-3.5 pl-11 pr-10 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-[#BA1296] focus:outline-none focus:ring-2 focus:ring-[#BA1296]/20 shadow-xs font-['Inter',sans-serif]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-neutral-400 hover:text-neutral-700"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Category Filter Pills with Counters */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  const count =
                    cat === "All"
                      ? ALL_SERVICES.length
                      : ALL_SERVICES.filter((s) => s.category === cat).length;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 font-['Inter',sans-serif] ${isSelected
                          ? "bg-[#A81286] text-white shadow-xs scale-105"
                          : "bg-white text-neutral-700 border border-neutral-200 hover:border-purple-300 hover:bg-purple-50/50"
                        }`}
                    >
                      {cat} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Filter info indicator */}
              <div className="flex items-center justify-between text-xs text-neutral-500 px-1 font-['Inter',sans-serif]">
                <span>
                  Showing <strong className="text-neutral-900 font-bold">{filteredServices.length}</strong> of {ALL_SERVICES.length} services
                </span>
                {(searchQuery || selectedCategory !== "All") && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="text-[#A81286] font-semibold hover:underline"
                  >
                    Reset all filters
                  </button>
                )}
              </div>
            </div>

            {/* Service Cards Grid - ALL SERVICES IN CARDS WITH INTER FONT */}
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    className="group relative overflow-hidden rounded-2xl bg-neutral-900 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col font-['Inter',sans-serif]"
                  >
                    {/* Photo Container */}
                    <div className="relative aspect-[4/4.8] w-full overflow-hidden bg-neutral-800">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Top Tag Badge (Font Inter) */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1 rounded-full bg-black/65 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white uppercase tracking-wider border border-white/20 font-['Inter',sans-serif]">
                          <Sparkle size={10} className="text-[#F7D272]" />
                          {service.tag}
                        </span>
                      </div>

                      {/* Category Tag on Top Right */}
                      <div className="absolute top-3 right-3 z-10">
                        <span className="inline-block rounded-full bg-[#8E1077]/90 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider font-['Inter',sans-serif]">
                          {service.category}
                        </span>
                      </div>

                      {/* Purple Gradient Bottom Overlay (Matching Image 2 with Font Inter) */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#8E1077] via-[#9F1387]/95 to-transparent pt-16 pb-4 px-4 text-white text-center font-['Inter',sans-serif]">
                        <h3 className="text-base sm:text-lg font-bold tracking-tight text-white drop-shadow-md font-['Inter',sans-serif]">
                          {service.name} : {service.price}
                        </h3>
                        <p className="mt-1 text-xs text-purple-100 line-clamp-2 opacity-95 leading-relaxed font-['Inter',sans-serif]">
                          {service.blurb}
                        </p>
                      </div>
                    </div>

                    {/* Card Action Footer with Inter Font */}
                    <div className="p-3 bg-[#8E1077] flex items-center justify-between gap-2 border-t border-purple-300/20 font-['Inter',sans-serif]">
                      <span className="text-xs font-semibold text-purple-100 font-['Inter',sans-serif]">
                        {service.price}
                      </span>
                      <a
                        href="#booking"
                        className="inline-flex items-center gap-1 rounded-full bg-white text-[#8E1077] px-3.5 py-1 text-xs font-bold transition-transform hover:scale-105 active:scale-95 shadow-xs font-['Inter',sans-serif]"
                      >
                        <span>Book Style</span>
                        <ChevronRight size={13} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl bg-white p-12 text-center border border-neutral-200 shadow-sm max-w-xl mx-auto font-['Inter',sans-serif]">
                <p className="text-lg font-bold text-neutral-800">No services match your search</p>
                <p className="mt-1 text-sm text-neutral-500">
                  Try searching for another style or reset the category filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#A81286] px-5 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#8e0e7a]"
                >
                  Reset Search &amp; Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* REDESIGNED: EXECUTIVE SERVICES & PRICE LIST TABLE (Ultra-Premium Menu) */}
        {/* ========================================================================= */}
        <section
          id="price-list"
          className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-[#19021C] to-neutral-950 py-16 sm:py-20 lg:py-28 scroll-mt-20 text-white font-['Inter',sans-serif] border-y border-purple-500/20"
        >
          {/* Ambient Lighting & Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-gradient-to-b from-[#BA1296]/20 via-purple-800/10 to-transparent blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#BA1296]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#BA1296]/20 to-[#F7D272]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#F7D272] border border-[#F7D272]/30 mb-4 shadow-[0_0_20px_rgba(247,210,114,0.12)]">
                <Tag size={13} className="text-[#F7D272]" />
                <span>Transparent Upfront Pricing</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-white font-['Inter',sans-serif]">
                Services &amp; <span className="bg-gradient-to-r from-[#FF72E1] via-[#F7D272] to-[#FFAAF8] bg-clip-text text-transparent">Price List Table</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base lg:text-lg text-neutral-300 max-w-2xl mx-auto font-normal">
                Quick-reference table of all our services and price ranges directly from our salon menu.
              </p>

              {/* Trust Guarantee Badges */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-purple-200">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-[#F7D272]" /> No Hidden Chair Fees
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-[#F7D272]" /> 100% Upfront Quotes
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-[#F7D272]" /> Free Style Consultation
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-[#F7D272]" /> Quality Hair Available
                </span>
              </div>
            </div>

            {/* The Executive Salon Menu Card Board */}
            <div className="rounded-[2.5rem] bg-gradient-to-b from-[#2B042F]/90 via-[#39063C]/95 to-[#1D0220] p-4 sm:p-7 lg:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.7)] border border-purple-400/25 relative overflow-hidden backdrop-blur-2xl">
              {/* Menu Controls: Search & Category Filter Pills */}
              <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-300" />
                  <input
                    type="text"
                    value={priceSearchQuery}
                    onChange={(e) => setPriceSearchQuery(e.target.value)}
                    placeholder="Search price menu (e.g. twist, braids, wash)..."
                    className="w-full rounded-xl bg-white/10 border border-purple-400/30 pl-10 pr-9 py-2.5 text-xs sm:text-sm text-white placeholder-purple-300/60 focus:outline-none focus:ring-2 focus:ring-[#F7D272] focus:border-transparent transition-all"
                  />
                  {priceSearchQuery && (
                    <button
                      type="button"
                      onClick={() => setPriceSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-300 hover:text-white"
                      title="Clear search"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {PRICE_CATEGORIES.map((cat) => {
                    const count =
                      cat === "All"
                        ? SALON_PRICE_LIST.length
                        : SALON_PRICE_LIST.filter((s) => s.category === cat).length;
                    const isActive = priceCategory === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setPriceCategory(cat)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all duration-150 ${
                          isActive
                            ? "bg-[#F7D272] text-[#3B073C] shadow-md shadow-amber-500/20 font-extrabold"
                            : "bg-white/10 text-purple-100 hover:bg-white/15 border border-white/10"
                        }`}
                      >
                        {cat} ({count})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dual-Column Editorial Menu Grid */}
              {filteredPriceList.length > 0 ? (
                (() => {
                  const mid = Math.ceil(filteredPriceList.length / 2);
                  const col1 = filteredPriceList.slice(0, mid);
                  const col2 = filteredPriceList.slice(mid);

                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3 font-['Inter',sans-serif]">
                      {/* Column 1 */}
                      <div className="space-y-2.5">
                        <div className="hidden sm:flex items-center justify-between bg-[#1C021E]/80 border border-purple-500/25 rounded-xl px-4 py-2.5 mb-2 text-xs font-bold uppercase tracking-wider text-purple-200">
                          <span>Service</span>
                          <div className="flex items-center gap-6">
                            <span>Cost</span>
                            <span>Action</span>
                          </div>
                        </div>

                        {col1.map((item) => (
                          <div
                            key={item.id}
                            className={`group flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 rounded-xl transition-all duration-200 ${
                              item.highlighted
                                ? "bg-gradient-to-r from-[#8E1B85] via-[#9F1D95] to-[#8E1B85] border border-purple-300/35 text-white shadow-md shadow-purple-950/40 hover:from-[#9B1E92] hover:to-[#B022A5] hover:shadow-[0_4px_25px_rgba(168,18,134,0.45)] hover:-translate-y-0.5"
                                : "bg-white/[0.04] border border-white/[0.07] text-white/95 hover:bg-white/[0.08] hover:border-purple-400/30 hover:-translate-y-0.5"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0 pr-2">
                              {item.highlighted ? (
                                <span className="flex h-2 w-2 rounded-full bg-[#F7D272] shrink-0 animate-pulse" />
                              ) : (
                                <span className="flex h-1.5 w-1.5 rounded-full bg-purple-400/60 shrink-0" />
                              )}
                              <span className="font-semibold text-sm sm:text-[15px] truncate text-white">
                                {item.name}
                              </span>
                              {item.note && (
                                <span className="hidden sm:inline-block shrink-0 rounded-md bg-[#F7D272]/20 border border-[#F7D272]/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#FDE047]">
                                  {item.note}
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-3 shrink-0">
                              <span
                                className={`font-bold text-sm sm:text-base font-['Inter',sans-serif] tracking-tight ${
                                  item.highlighted
                                    ? "text-[#FDE047] drop-shadow-xs"
                                    : "text-white/95 group-hover:text-[#FDE047] transition-colors"
                                }`}
                              >
                                {item.price}
                              </span>
                              <a
                                href="#booking"
                                className={`inline-flex items-center justify-center rounded-lg px-3 py-1 text-xs font-bold transition-all active:scale-95 ${
                                  item.highlighted
                                    ? "bg-white/20 hover:bg-white hover:text-[#4A0A4B] text-white"
                                    : "bg-white/10 hover:bg-white hover:text-[#4A0A4B] text-white"
                                }`}
                              >
                                Book
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Column 2 */}
                      <div className="space-y-2.5">
                        <div className="hidden sm:flex items-center justify-between bg-[#1C021E]/80 border border-purple-500/25 rounded-xl px-4 py-2.5 mb-2 text-xs font-bold uppercase tracking-wider text-purple-200">
                          <span>Service</span>
                          <div className="flex items-center gap-6">
                            <span>Cost</span>
                            <span>Action</span>
                          </div>
                        </div>

                        {col2.map((item) => (
                          <div
                            key={item.id}
                            className={`group flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 rounded-xl transition-all duration-200 ${
                              item.highlighted
                                ? "bg-gradient-to-r from-[#8E1B85] via-[#9F1D95] to-[#8E1B85] border border-purple-300/35 text-white shadow-md shadow-purple-950/40 hover:from-[#9B1E92] hover:to-[#B022A5] hover:shadow-[0_4px_25px_rgba(168,18,134,0.45)] hover:-translate-y-0.5"
                                : "bg-white/[0.04] border border-white/[0.07] text-white/95 hover:bg-white/[0.08] hover:border-purple-400/30 hover:-translate-y-0.5"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0 pr-2">
                              {item.highlighted ? (
                                <span className="flex h-2 w-2 rounded-full bg-[#F7D272] shrink-0 animate-pulse" />
                              ) : (
                                <span className="flex h-1.5 w-1.5 rounded-full bg-purple-400/60 shrink-0" />
                              )}
                              <span className="font-semibold text-sm sm:text-[15px] truncate text-white">
                                {item.name}
                              </span>
                              {item.note && (
                                <span className="hidden sm:inline-block shrink-0 rounded-md bg-[#F7D272]/20 border border-[#F7D272]/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#FDE047]">
                                  {item.note}
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-3 shrink-0">
                              <span
                                className={`font-bold text-sm sm:text-base font-['Inter',sans-serif] tracking-tight ${
                                  item.highlighted
                                    ? "text-[#FDE047] drop-shadow-xs"
                                    : "text-white/95 group-hover:text-[#FDE047] transition-colors"
                                }`}
                              >
                                {item.price}
                              </span>
                              <a
                                href="#booking"
                                className={`inline-flex items-center justify-center rounded-lg px-3 py-1 text-xs font-bold transition-all active:scale-95 ${
                                  item.highlighted
                                    ? "bg-white/20 hover:bg-white hover:text-[#4A0A4B] text-white"
                                    : "bg-white/10 hover:bg-white hover:text-[#4A0A4B] text-white"
                                }`}
                              >
                                Book
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center text-neutral-300">
                  <p className="text-base font-bold text-white">No services match "{priceSearchQuery}"</p>
                  <p className="mt-1 text-xs text-purple-200">
                    Try searching for another style name or resetting your filter.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setPriceSearchQuery("");
                      setPriceCategory("All");
                    }}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#BA1296] px-5 py-2 text-xs font-bold text-white shadow-md hover:bg-[#8e0e7a]"
                  >
                    Reset Price Search
                  </button>
                </div>
              )}

              {/* ========================================================================= */}
              {/* AUTHENTIC IMAGE 1 "EXAMPLES:" VISUAL SHOWCASE STRIP */}
              {/* ========================================================================= */}
              <div className="mt-10 pt-8 border-t border-purple-500/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#F7D272]" />
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                      Examples:{" "}
                      <span className="font-normal text-purple-200 text-xs sm:text-sm">
                        Visual style previews from our salon portfolio
                      </span>
                    </h3>
                  </div>
                  <a
                    href="#all-services-grid"
                    className="text-xs font-bold text-[#F7D272] hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>View all 32 visual cards above ↑</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                  {EXAMPLES_SHOWCASE.map((ex) => (
                    <a
                      key={ex.name}
                      href="#booking"
                      className="group flex flex-col items-center text-center p-2.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-400/50 hover:bg-white/[0.08] transition-all hover:-translate-y-1"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-purple-400/40 group-hover:border-[#F7D272] transition-colors shadow-md">
                        <img
                          src={ex.image}
                          alt={ex.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <span className="mt-2 text-[11px] font-bold text-white line-clamp-1 group-hover:text-[#F7D272] transition-colors">
                        {ex.name}
                      </span>
                      <span className="text-[10px] font-semibold text-[#FDE047]">
                        {ex.price}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Salon Policy & Hair Preparation Note */}
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-purple-900/40 to-purple-950/60 p-4 sm:p-5 border border-purple-400/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-purple-200">
                <div className="flex items-start sm:items-center gap-2.5">
                  <Info size={16} className="text-[#F7D272] shrink-0 mt-0.5 sm:mt-0" />
                  <span>
                    <strong className="text-white">Salon Note:</strong> For <strong>Lock Extension</strong>, please supply your own hair or let us know during booking so we can prepare it for you. Pre-stretched braiding hair is available for select signature styles.
                  </span>
                </div>
                <a
                  href="#booking"
                  className="inline-flex items-center gap-1.5 font-bold text-[#F7D272] hover:text-white transition-colors shrink-0"
                >
                  <span>Reserve appointment online →</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* WHY BOOK WITH US */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-neutral-200">
          <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#BA1296]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#BA1296] border border-[#BA1296]/20 mb-4">
                <ShieldCheck size={13} className="text-[#BA1296]" />
                <span>Our Quality Commitment</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-neutral-900 tracking-tight">
                Why Choose <span className="text-[#A81286]">Doussou Quality Braiding?</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
                Experience unparalleled care, precision parting, and healthy protective hair styling.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_BOOK_WITH_US.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.feature}
                    className="group rounded-2xl bg-purple-50/40 p-6 sm:p-7 border border-purple-100 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg hover:bg-white"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#BA1296]/10 text-[#BA1296] mb-4 group-hover:bg-[#BA1296] group-hover:text-white transition-colors">
                      <IconComp size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">
                      {item.feature}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                      {item.benefit}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* UNIVERSAL ADD-ONS & SALON POLICIES */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-neutral-50 py-16 lg:py-24 border-b border-neutral-200">
          <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
              {/* Universal Service Add-Ons */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#BA1296]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#BA1296] border border-[#BA1296]/20 mb-4">
                  <Tag size={13} className="text-[#BA1296]" />
                  <span>Customize Your Look</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
                  Service Add-Ons &amp; Enhancements
                </h2>
                <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                  Enhance your styling appointment with our signature add-on treatments, beads, curls, and scalp therapy rituals.
                </p>

                <div className="rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-xs">
                  <div className="divide-y divide-neutral-100">
                    {UNIVERSAL_ADDONS.map((addon) => (
                      <div
                        key={addon.name}
                        className="p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors hover:bg-purple-50/30"
                      >
                        <div>
                          <p className="font-bold text-sm sm:text-base text-neutral-900">
                            {addon.name}
                          </p>
                          <p className="text-xs text-neutral-500 mt-0.5">{addon.detail}</p>
                        </div>
                        <span className="font-bold text-base sm:text-lg text-[#A81286] shrink-0">
                          {addon.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Policies */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-emerald-700 border border-emerald-600/20 mb-4">
                  <Info size={13} className="text-emerald-700" />
                  <span>Important Guidelines</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
                  Studio Policies
                </h2>
                <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                  To ensure a seamless, punctual, and relaxing experience for all our clients, please review our salon guidelines:
                </p>

                <div className="space-y-3.5">
                  <div className="rounded-2xl bg-white p-4 sm:p-5 border border-neutral-200 shadow-2xs">
                    <h4 className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#A81286] text-white text-[11px]">
                        1
                      </span>
                      Fast &amp; Flexible Booking
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      We can often accommodate booking requests as early as one hour before your desired style. Online booking is quick and confirmed instantly.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 sm:p-5 border border-neutral-200 shadow-2xs">
                    <h4 className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#A81286] text-white text-[11px]">
                        2
                      </span>
                      Punctuality &amp; Timing
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      Please arrive on time. Arriving promptly guarantees your full styling time and keeps all client schedules running smoothly.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 sm:p-5 border border-neutral-200 shadow-2xs">
                    <h4 className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#A81286] text-white text-[11px]">
                        3
                      </span>
                      Clean &amp; Prepared Hair
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      Please arrive with your hair washed and blown out, or select our Wash &amp; Blow Dry service so we can prepare your hair before styling.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 sm:p-5 border border-neutral-200 shadow-2xs">
                    <h4 className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#A81286] text-white text-[11px]">
                        4
                      </span>
                      Children's Appointments
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      Children must be accompanied by an adult throughout their appointment. We provide patient, gentle care for our younger clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CALL TO ACTION BANNER */}
        {/* ========================================================================= */}
        <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#3B073C] via-[#5C105E] to-[#3B073C] py-16 lg:py-20 text-white">
          <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#F7D272] border border-white/20 mb-6">
                <Sparkles size={13} className="text-[#F7D272]" />
                <span>Ready for Your Transformation?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Book Your Appointment at{" "}
                <span className="text-[#F7D272]">Doussou Quality Braiding Today</span>
              </h2>

              <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
                With 6+ years of professional artistry, we offer meticulous care, tension-free parting, and stunning protective styles. We can often accommodate requests as early as one hour before your appointment!
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#5C105E] px-8 py-3.5 text-sm font-bold shadow-xl transition-all duration-200 hover:bg-neutral-100 hover:scale-105 active:scale-95"
                >
                  <Calendar size={17} />
                  <span>Book Appointment Online</span>
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-bold text-white border border-white/30 backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:scale-105 active:scale-95"
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
        <div id="booking" className="scroll-mt-24">
          <BookingForm />
        </div>
      </main>

      <Footer />

      {/* Mobile Sticky Booking CTA Button */}
      <a
        href="#booking"
        className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-xl bg-[#A81286] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-2xl transition-transform active:scale-95 lg:hidden font-['Inter',sans-serif]"
      >
        <Calendar size={16} />
        <span>Book Appointment</span>
      </a>
    </div>
  );
}
