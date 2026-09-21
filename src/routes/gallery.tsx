import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo, useEffect, useCallback } from "react";
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
  Clock,
  Heart,
  ShieldCheck,
  Star,
  Search,
  X,
  LayoutGrid,
  Grid,
  Maximize2,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Filter,
  Tag,
  Info,
  ArrowRight,
  Share2,
} from "lucide-react";

// Import all 33 images from src/assets/gallery/
import img1771942697690 from "@/assets/gallery/1771942697690.jpg";
import img1772826004520 from "@/assets/gallery/1772826004520.jpg";
import img1772826012835 from "@/assets/gallery/1772826012835.jpg";
import img1772826015954 from "@/assets/gallery/1772826015954.jpg";
import img1772826023256 from "@/assets/gallery/1772826023256.jpg";
import img1772826026208 from "@/assets/gallery/1772826026208.jpg";
import img1772826028895 from "@/assets/gallery/1772826028895.jpg";
import img1772826032015 from "@/assets/gallery/1772826032015.jpg";
import img6681 from "@/assets/gallery/6681.jpg";
import img6682 from "@/assets/gallery/6682.jpg";
import img6683 from "@/assets/gallery/6683.jpg";
import img6684 from "@/assets/gallery/6684.jpg";
import img6685 from "@/assets/gallery/6685.jpg";
import img6686 from "@/assets/gallery/6686.jpg";
import img6687 from "@/assets/gallery/6687.jpg";
import img6688 from "@/assets/gallery/6688.jpg";
import img6689 from "@/assets/gallery/6689.jpg";
import img6690 from "@/assets/gallery/6690.jpg";
import img6691 from "@/assets/gallery/6691.jpg";
import img6692 from "@/assets/gallery/6692.jpg";
import img6693 from "@/assets/gallery/6693.jpg";
import img6694 from "@/assets/gallery/6694.jpg";
import img6695 from "@/assets/gallery/6695.jpg";
import img6696 from "@/assets/gallery/6696.jpg";
import img6697 from "@/assets/gallery/6697.jpg";
import img6698 from "@/assets/gallery/6698.jpg";
import img6699 from "@/assets/gallery/6699.jpg";
import img6700 from "@/assets/gallery/6700.jpg";
import img6701 from "@/assets/gallery/6701.jpg";
import img6702 from "@/assets/gallery/6702.jpg";
import img6703 from "@/assets/gallery/6703.jpg";
import imgSec1 from "@/assets/gallery/Sec1.png";
import imgEstimateBg from "@/assets/gallery/Estimate-bg.png";

const PAGE_TITLE = "Style Gallery | Doussou Quality Braiding — Glen Burnie, MD";
const PAGE_DESCRIPTION =
  "Explore our portfolio of over 30 authentic hair braiding and protective styling transformations. Knotless braids, stitch cornrows, faux locs, men's braids, and twists crafted with care in Glen Burnie, MD.";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    provider: {
      "@type": "HairSalon",
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
    },
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "Knotless & Boho" | "Stitch & Cornrows" | "Locs & Twists" | "Men's Styles" | "Curls & Weaves";
  image: string;
  price: string;
  duration: string;
  tag: string;
  description: string;
  featured?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "heart-cornrow-bun",
    title: "Heart Cornrow Sculpted High Bun",
    category: "Stitch & Cornrows",
    image: imgSec1,
    price: "$140 - $180",
    duration: "3 - 4 hrs",
    tag: "Creative Artistry",
    description: "Intricate love-heart shaped feed-in cornrows sculpted into a dramatic top knot bun with soft curly side tendrils.",
    featured: true,
  },
  {
    id: "crisscross-boho-knotless",
    title: "Criss-Cross Parting Boho Knotless",
    category: "Knotless & Boho",
    image: img6681,
    price: "$220 - $260",
    duration: "4 - 5 hrs",
    tag: "Client Favorite",
    description: "Precision criss-cross scalp parting with lightweight knotless braids and cascading bohemian curls throughout.",
    featured: true,
  },
  {
    id: "butterfly-locs-ponytail",
    title: "Butterfly Faux Locs High Ponytail",
    category: "Locs & Twists",
    image: img6682,
    price: "$200 - $260",
    duration: "4 - 5 hrs",
    tag: "Trending",
    description: "Textured distressed butterfly locs swept up into a chic high ponytail with face-framing accent locs.",
    featured: true,
  },
  {
    id: "square-part-knotless-nape",
    title: "Precision Square Part Knotless (Back View)",
    category: "Knotless & Boho",
    image: img6683,
    price: "$190 - $240",
    duration: "4 - 5 hrs",
    tag: "Immaculate Parting",
    description: "Razor-sharp square grid parting from nape to crown with seamless tension-free feed-in technique.",
    featured: false,
  },
  {
    id: "honey-blonde-passion-twists",
    title: "Honey Blonde Passion Twists",
    category: "Locs & Twists",
    image: img6684,
    price: "$200 - $240",
    duration: "3.5 - 4.5 hrs",
    tag: "Color Blend",
    description: "Warm golden honey-blonde two-strand passion twists with soft bouncy curly ends and gorgeous dimensional depth.",
    featured: true,
  },
  {
    id: "leaf-swirl-cornrow-bun",
    title: "Swirl Leaf Cornrow Braided Updo",
    category: "Stitch & Cornrows",
    image: img6685,
    price: "$130 - $170",
    duration: "3 - 4 hrs",
    tag: "Signature Updo",
    description: "Artistic curved swirl cornrows leading into a high crown bun with delicately sculpted baby hair swoops.",
    featured: true,
  },
  {
    id: "curved-stitch-boho-hybrid",
    title: "Curved Stitch Cornrows with Boho Back",
    category: "Stitch & Cornrows",
    image: img6686,
    price: "$180 - $220",
    duration: "4 - 5 hrs",
    tag: "Hybrid Style",
    description: "S-curved feed-in stitch cornrows on the crown transitioning effortlessly into flowing bohemian knotless braids.",
    featured: true,
  },
  {
    id: "long-boho-knotless-curls",
    title: "Waist-Length Boho Knotless with Curls",
    category: "Knotless & Boho",
    image: img6687,
    price: "$240 - $280",
    duration: "5 - 6 hrs",
    tag: "Bestseller",
    description: "Extra-long knotless braids infused with high-density wet-and-wavy curls from mid-shaft to ends.",
    featured: false,
  },
  {
    id: "stitch-cornrow-artistry",
    title: "Feed-In Stitch Cornrow Artistry",
    category: "Stitch & Cornrows",
    image: img6688,
    price: "$100 - $140",
    duration: "2.5 - 3.5 hrs",
    tag: "Clean Scalp",
    description: "Precision clean parting and tension-controlled feed-in technique for enduring scalp comfort and durability.",
    featured: false,
  },
  {
    id: "side-cornrow-curly-weave",
    title: "Side Cornrows with Deep Curly Weave",
    category: "Curls & Weaves",
    image: img6689,
    price: "$150 - $190",
    duration: "3 - 4 hrs",
    tag: "Glamour Volume",
    description: "Sculpted side cornrows meeting a voluminous deep wave curly sew-in with immaculate edge finishing.",
    featured: false,
  },
  {
    id: "mens-straight-stitch-cornrows",
    title: "Men's Straight Back Precision Stitch",
    category: "Men's Styles",
    image: img6690,
    price: "$75 - $95",
    duration: "1.5 - 2 hrs",
    tag: "Sharp & Clean",
    description: "Uniform, symmetrical stitch cornrows straight back with clean geometric center part for men.",
    featured: true,
  },
  {
    id: "mens-zigzag-stitch-cornrows",
    title: "Men's Zig-Zag Stitch Cornrows",
    category: "Men's Styles",
    image: img6691,
    price: "$85 - $110",
    duration: "2 - 2.5 hrs",
    tag: "Geometric Art",
    description: "High-contrast zig-zag stitch cornrows designed for clean fade integration and scalp breathability.",
    featured: true,
  },
  {
    id: "mens-4-quadrant-geometric",
    title: "Men's 4-Quadrant Geometric Stitch",
    category: "Men's Styles",
    image: img6692,
    price: "$90 - $120",
    duration: "2 - 3 hrs",
    tag: "Custom Pattern",
    description: "Four-quadrant geometric quadrant stitch pattern meeting at the center with clean razor lines.",
    featured: false,
  },
  {
    id: "auburn-copper-goddess-back",
    title: "Auburn Copper Goddess Knotless (Back)",
    category: "Knotless & Boho",
    image: img6693,
    price: "$240 - $290",
    duration: "4.5 - 5.5 hrs",
    tag: "Vibrant Color",
    description: "Rich autumn copper and auburn tone Goddess braids with voluminous curl distribution.",
    featured: false,
  },
  {
    id: "auburn-copper-goddess-front",
    title: "Auburn Copper Goddess Knotless (Front)",
    category: "Knotless & Boho",
    image: img6694,
    price: "$240 - $290",
    duration: "4.5 - 5.5 hrs",
    tag: "Statement Style",
    description: "Full-bodied auburn copper knotless braids with neat center parting and glossy bohemian tendrils.",
    featured: true,
  },
  {
    id: "deep-wave-crochet-volume",
    title: "Full-Volume Deep Wave Curly Crochet",
    category: "Curls & Weaves",
    image: img6695,
    price: "$140 - $180",
    duration: "2.5 - 3.5 hrs",
    tag: "Maximum Volume",
    description: "Featherlight protective crochet install with luscious, bouncy deep wave curls and natural hairline.",
    featured: false,
  },
  {
    id: "goddess-faux-locs-cuffs",
    title: "Goddess Faux Locs with Silver Cuffs",
    category: "Locs & Twists",
    image: img6696,
    price: "$220 - $280",
    duration: "4 - 5.5 hrs",
    tag: "Boho Locs",
    description: "Long, lightweight faux locs adorned with silver filigree cuffs and cascading curly ends.",
    featured: true,
  },
  {
    id: "lemonade-fulani-curved",
    title: "Fulani Lemonade Curved Side Cornrows",
    category: "Stitch & Cornrows",
    image: img6697,
    price: "$160 - $200",
    duration: "3.5 - 4.5 hrs",
    tag: "Classic Fulani",
    description: "Sweeping side-directed stitch cornrows with individual box braids and sleek baby hair styling.",
    featured: false,
  },
  {
    id: "crisscross-stitch-boxbraids",
    title: "Criss-Cross Stitch Front with Box Braids",
    category: "Stitch & Cornrows",
    image: img6698,
    price: "$170 - $210",
    duration: "4 - 5 hrs",
    tag: "Precision Parting",
    description: "Criss-cross feed-in cornrow crown transitioning into sleek, uniform length box braids.",
    featured: false,
  },
  {
    id: "center-part-curved-stitch",
    title: "Center-Part Curved Stitch with Braids",
    category: "Stitch & Cornrows",
    image: img6699,
    price: "$160 - $200",
    duration: "3.5 - 4.5 hrs",
    tag: "Symmetrical",
    description: "Flawless center-part stitch cornrows fanning elegantly toward the shoulders with long braid extensions.",
    featured: false,
  },
  {
    id: "honey-ombre-half-cornrows",
    title: "Honey Ombre Half Cornrows & Wavy Curls",
    category: "Curls & Weaves",
    image: img6700,
    price: "$180 - $230",
    duration: "3.5 - 4.5 hrs",
    tag: "Ombre Curls",
    description: "Dimensional honey blonde ombre feed-in cornrows flowing into soft, touchable body waves.",
    featured: true,
  },
  {
    id: "loc-establishment-crochet",
    title: "Loc Establishment & Interlocking Session",
    category: "Locs & Twists",
    image: img6701,
    price: "$120 - $180",
    duration: "2 - 3.5 hrs",
    tag: "Loc Maintenance",
    description: "Specialized needle interlocking and retwisting session ensuring healthy, uniform loc formation from the root.",
    featured: false,
  },
  {
    id: "mens-crown-barrel-twists",
    title: "Men's Crown Barrel Roll Twists",
    category: "Men's Styles",
    image: img6702,
    price: "$85 - $110",
    duration: "1.5 - 2.5 hrs",
    tag: "Sculpted Updo",
    description: "Intricate diamond-part barrel twists woven across the crown for natural hair and loc wearers.",
    featured: true,
  },
  {
    id: "mens-two-strand-twists",
    title: "Men's Defined Two-Strand Twists",
    category: "Men's Styles",
    image: img6703,
    price: "$75 - $95",
    duration: "1.5 - 2 hrs",
    tag: "Natural Texture",
    description: "Hydrated, juicy two-strand twists with precision scalp parting and healthy sheen.",
    featured: false,
  },
  {
    id: "mens-diamond-twists-starter",
    title: "Men's Diamond Part Starter Twists",
    category: "Men's Styles",
    image: img1771942697690,
    price: "$80 - $100",
    duration: "1.5 - 2 hrs",
    tag: "Starter Locs",
    description: "Clean diamond-patterned grid parting with tight two-strand twists, perfect as a starter loc foundation.",
    featured: false,
  },
  {
    id: "half-cornrow-curly-sewin",
    title: "Half Cornrow Front with Curly Sew-In",
    category: "Curls & Weaves",
    image: img1772826004520,
    price: "$170 - $220",
    duration: "3.5 - 4.5 hrs",
    tag: "Best of Both",
    description: "Protective feed-in cornrows at the front paired with a full, bouncy deep curl sew-in weave.",
    featured: false,
  },
  {
    id: "deep-curly-volume-back",
    title: "Deep Curly Volume Sew-In (Back View)",
    category: "Curls & Weaves",
    image: img1772826012835,
    price: "$160 - $200",
    duration: "3 - 4 hrs",
    tag: "Full Density",
    description: "Seamless track lay and high-density deep curl placement for maximum bounce and movement.",
    featured: false,
  },
  {
    id: "half-cornrow-studio-view",
    title: "Half Cornrows & Soft Curls (Studio)",
    category: "Curls & Weaves",
    image: img1772826015954,
    price: "$170 - $220",
    duration: "3.5 - 4.5 hrs",
    tag: "Client Portrait",
    description: "Studio client portrait highlighting delicate hairline work, tension-free parting, and natural curl flow.",
    featured: false,
  },
  {
    id: "protective-braid-prep",
    title: "Protective Braiding & Clean Parting",
    category: "Knotless & Boho",
    image: img1772826023256,
    price: "$65 - $85",
    duration: "1.5 - 2 hrs",
    tag: "Healthy Hair",
    description: "Clean, tension-free protective styling focused on scalp health, edge preservation, and moisture retention.",
    featured: false,
  },
  {
    id: "goddess-knotless-tendrils",
    title: "Long Goddess Knotless with Curly Tendrils",
    category: "Knotless & Boho",
    image: img1772826026208,
    price: "$240 - $290",
    duration: "4.5 - 5.5 hrs",
    tag: "Goddess Glow",
    description: "Featherlight square-part knotless braids adorned with cascading bohemian curl strands throughout.",
    featured: true,
  },
  {
    id: "french-curls-braided-bob",
    title: "Bouncy French Curls Braided Bob",
    category: "Curls & Weaves",
    image: img1772826028895,
    price: "$180 - $230",
    duration: "3.5 - 4.5 hrs",
    tag: "Chic & Bouncy",
    description: "Shoulder-length braided bob bursting into voluminous spiral French curls with effortless bounce.",
    featured: true,
  },
  {
    id: "waist-length-boho-back",
    title: "Waist-Length Boho Knotless (Back View)",
    category: "Knotless & Boho",
    image: img1772826032015,
    price: "$260 - $310",
    duration: "5 - 6.5 hrs",
    tag: "Showstopper",
    description: "Breathtaking waist-length knotless installation showcasing razor-sharp parting and rich curly texture.",
    featured: true,
  },
  {
    id: "signature-style-trio",
    title: "Signature Trio: Cornrows, Knotless & Curls",
    category: "Stitch & Cornrows",
    image: imgEstimateBg,
    price: "$85 - $280",
    duration: "2 - 5 hrs",
    tag: "Salon Portfolio",
    description: "A showcase of three client favorites: straight back stitch cornrows, extra-long knotless, and beaded curly bob.",
    featured: false,
  },
];

const CATEGORIES = [
  "All Styles",
  "Knotless & Boho",
  "Stitch & Cornrows",
  "Locs & Twists",
  "Men's Styles",
  "Curls & Weaves",
] as const;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "Hair braiding gallery, knotless braids Glen Burnie, stitch cornrows portfolio, boho braids pictures, faux locs, men's braids Glen Burnie MD, Doussou Quality Braiding",
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
  component: GalleryPage,
});

function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Styles");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"masonry" | "detailed" | "compact">("masonry");

  // Filtered gallery items
  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "All Styles" || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.price.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Modal navigation handlers
  const handleOpenModal = (index: number) => {
    setActiveModalIndex(index);
  };

  const handleCloseModal = () => {
    setActiveModalIndex(null);
  };

  const handleNextModal = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) =>
      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  }, [activeModalIndex, filteredItems.length]);

  const handlePrevModal = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  }, [activeModalIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === "Escape") handleCloseModal();
      if (e.key === "ArrowRight") handleNextModal();
      if (e.key === "ArrowLeft") handlePrevModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalIndex, handleNextModal, handlePrevModal]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (activeModalIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalIndex]);

  const currentModalItem =
    activeModalIndex !== null ? filteredItems[activeModalIndex] : null;

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#BA1296] selection:text-white">
      <Header />

      <main className="pt-28 lg:pt-36">
        {/* ========================================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-neutral-900 via-[#1F0223] to-neutral-950 text-white py-16 sm:py-20 lg:py-24 border-b border-purple-500/20">
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-[#BA1296]/25 to-transparent blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#F7D272]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-200/80"
            >
              <Link to="/" className="transition-colors hover:text-[#F7D272]">
                Home
              </Link>
              <ChevronRight size={13} className="text-[#F7D272]" />
              <span className="text-white font-bold">Style Gallery</span>
            </nav>

            {/* Eyebrow Badge */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#BA1296]/20 to-[#F7D272]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#F7D272] border border-[#F7D272]/30 mb-4 shadow-[0_0_20px_rgba(247,210,114,0.12)]">
                <Sparkles size={13} className="text-[#F7D272]" />
                <span>Real Salon Client Transformations</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Inter',sans-serif]">
              Our Style{" "}
              <span className="bg-gradient-to-r from-[#FF72E1] via-[#F7D272] to-[#FFAAF8] bg-clip-text text-transparent">
                Portfolio &amp; Gallery
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-normal">
              Every braid tells a story of artistry, precision, and scalp-friendly care. Explore over 30 authentic salon creations crafted by <strong className="font-semibold text-white">Doussou Quality Braiding</strong> in Glen Burnie, MD.
            </p>

            {/* Highlights Strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-purple-200">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 size={16} className="text-[#F7D272]" /> 30+ Real Client Photos
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Star size={16} className="text-[#F7D272] fill-[#F7D272]" /> 5.0 ★ Client Satisfaction
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <ShieldCheck size={16} className="text-[#F7D272]" /> Tension-Free Scalp Care
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Scissors size={16} className="text-[#F7D272]" /> 6+ Years Master Artistry
              </span>
            </div>

            {/* Quick Action CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#BA1296] to-[#910e75] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-purple-900/30 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Calendar size={16} />
                <span>Book This Look Online</span>
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white border border-white/20 px-7 py-3.5 text-sm font-bold backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:scale-105 active:scale-95"
              >
                <Tag size={16} className="text-[#F7D272]" />
                <span>View Price List Menu</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* GALLERY CONTROLS & FILTER BAR */}
        {/* ========================================================================= */}
        <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200 py-4 shadow-xs">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                {CATEGORIES.map((cat) => {
                  const count =
                    cat === "All Styles"
                      ? GALLERY_ITEMS.length
                      : GALLERY_ITEMS.filter((item) => item.category === cat).length;
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-150 ${
                        isActive
                          ? "bg-[#BA1296] text-white shadow-md shadow-purple-900/20"
                          : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                      }`}
                    >
                      {cat} <span className="opacity-80 text-xs">({count})</span>
                    </button>
                  );
                })}
              </div>

              {/* Search & View Mode Switcher */}
              <div className="flex items-center gap-3">
                {/* Live Search */}
                <div className="relative flex-1 sm:w-64">
                  <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search styles, tags..."
                    className="w-full rounded-full bg-neutral-100 pl-9 pr-8 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#BA1296] border border-transparent focus:border-transparent transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                {/* View Mode Toggle */}
                <div className="hidden sm:flex items-center rounded-full bg-neutral-100 p-1 border border-neutral-200">
                  <button
                    type="button"
                    onClick={() => setViewMode("masonry")}
                    title="Masonry View"
                    className={`p-1.5 rounded-full transition-colors ${
                      viewMode === "masonry"
                        ? "bg-white text-[#BA1296] shadow-xs font-bold"
                        : "text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    <LayoutGrid size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("detailed")}
                    title="Detailed Editorial Cards"
                    className={`p-1.5 rounded-full transition-colors ${
                      viewMode === "detailed"
                        ? "bg-white text-[#BA1296] shadow-xs font-bold"
                        : "text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    <Grid size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* GALLERY SHOWCASE GRID */}
        {/* ========================================================================= */}
        <section className="py-12 lg:py-16 bg-neutral-50/70 min-h-[600px]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            {/* Active filters counter / reset */}
            <div className="mb-6 flex items-center justify-between text-xs sm:text-sm text-neutral-500 font-medium">
              <span>
                Showing <strong className="text-neutral-900">{filteredItems.length}</strong> styles
                {selectedCategory !== "All Styles" && (
                  <span> in <strong className="text-[#BA1296]">{selectedCategory}</strong></span>
                )}
                {searchQuery && (
                  <span> matching "<strong className="text-neutral-900">{searchQuery}</strong>"</span>
                )}
              </span>

              {(selectedCategory !== "All Styles" || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("All Styles");
                    setSearchQuery("");
                  }}
                  className="text-xs font-bold text-[#BA1296] hover:underline"
                >
                  Reset all filters
                </button>
              )}
            </div>

            {/* Grid Layouts */}
            {filteredItems.length > 0 ? (
              viewMode === "masonry" ? (
                /* Masonry Layout */
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                  {filteredItems.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() => handleOpenModal(index)}
                      className="group relative break-inside-avoid rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-neutral-200/80 hover:-translate-y-1"
                    >
                      {/* Image Container */}
                      <div className="relative overflow-hidden bg-neutral-900">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        />

                        {/* Top Badges */}
                        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
                          <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white border border-white/20">
                            {item.tag}
                          </span>
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20 transition-transform group-hover:scale-110">
                            <Maximize2 size={13} />
                          </span>
                        </div>

                        {/* Bottom Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                        {/* Overlay Content */}
                        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white z-10">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#F7D272]">
                            {item.category}
                          </span>
                          <h3 className="mt-1 text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[#F7D272] transition-colors">
                            {item.title}
                          </h3>
                          <div className="mt-2.5 flex items-center justify-between text-xs font-semibold">
                            <span className="text-[#FDE047] font-bold text-sm sm:text-base font-['Inter',sans-serif]">
                              {item.price}
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold backdrop-blur-md text-white group-hover:bg-[#BA1296] transition-colors">
                              <span>View Style</span>
                              <ChevronRight size={12} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Detailed Cards Layout */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="group flex flex-col rounded-2xl bg-white overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Image Header with Click to Zoom */}
                      <div
                        onClick={() => handleOpenModal(index)}
                        className="relative aspect-4/5 overflow-hidden bg-neutral-900 cursor-pointer"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                        />
                        <div className="absolute top-3 left-3 z-10">
                          <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white border border-white/20">
                            {item.tag}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3 z-10">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenModal(index);
                            }}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:bg-[#BA1296] transition-colors"
                          >
                            <Maximize2 size={13} />
                          </button>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      </div>

                      {/* Card Content */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between text-xs font-semibold text-neutral-500 mb-1.5">
                            <span className="text-[#BA1296] font-bold uppercase tracking-wider text-[11px]">
                              {item.category}
                            </span>
                            <span className="inline-flex items-center gap-1 text-neutral-500">
                              <Clock size={12} />
                              <span>{item.duration}</span>
                            </span>
                          </div>

                          <h3
                            onClick={() => handleOpenModal(index)}
                            className="text-lg font-bold text-neutral-900 group-hover:text-[#BA1296] transition-colors cursor-pointer leading-snug"
                          >
                            {item.title}
                          </h3>

                          <p className="mt-2 text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Price & Action */}
                        <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-wider">
                              Estimated Price
                            </span>
                            <span className="text-lg font-black text-neutral-900 font-['Inter',sans-serif]">
                              {item.price}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => handleOpenModal(index)}
                              className="rounded-lg bg-neutral-100 hover:bg-neutral-200 px-3 py-2 text-xs font-bold text-neutral-700 transition-colors"
                            >
                              Details
                            </button>
                            <a
                              href="#booking"
                              className="inline-flex items-center gap-1 rounded-lg bg-[#BA1296] hover:bg-[#8e0e7a] px-3.5 py-2 text-xs font-bold text-white shadow-xs transition-transform active:scale-95"
                            >
                              <span>Book</span>
                              <ChevronRight size={13} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : (
              /* Empty State */
              <div className="rounded-3xl bg-white p-12 sm:p-16 text-center border border-neutral-200 shadow-sm max-w-xl mx-auto">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-50 text-[#BA1296] mb-4">
                  <Search size={24} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">No styles match your search</h3>
                <p className="mt-2 text-sm text-neutral-600">
                  We couldn't find any hairstyles matching "{searchQuery}". Try another keyword or browse our full salon portfolio.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("All Styles");
                    setSearchQuery("");
                  }}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#BA1296] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#8e0e7a] transition-all"
                >
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SALON QUALITY COMMITMENT (Why Our Styles Last) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-y border-neutral-200">
          <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#BA1296]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#BA1296] border border-[#BA1296]/20 mb-4">
                <ShieldCheck size={13} className="text-[#BA1296]" />
                <span>Our Standard of Excellence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-neutral-900 tracking-tight">
                Why Our Styles Look Better &amp; Last Longer
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
                We combine authentic West African braiding techniques with modern scalp protection and precision parting.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Tension-Free Parting",
                  desc: "Zero scalp pulling or edge stress. Your natural hair and edges stay healthy and intact.",
                  icon: Heart,
                },
                {
                  title: "Pre-Stretched Hair",
                  desc: "Soft, lightweight, and pre-feathered hair treated to prevent scalp itch and heaviness.",
                  icon: Scissors,
                },
                {
                  title: "6 to 8+ Week Hold",
                  desc: "Meticulous stitch and lock technique built to maintain its pristine look for weeks.",
                  icon: Clock,
                },
                {
                  title: "Clean Sanitary Salon",
                  desc: "Disinfected tools, serene atmosphere, and dedicated chair time without rushed styling.",
                  icon: ShieldCheck,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-purple-50/30 p-6 border border-purple-100 transition-all hover:bg-white hover:shadow-lg hover:border-purple-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#BA1296]/10 text-[#BA1296] mb-4">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
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
                <span>Found Your Inspiration?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Book Your Appointment at{" "}
                <span className="text-[#F7D272]">Doussou Quality Braiding</span>
              </h2>

              <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
                Ready to rock your favorite look from our gallery? Reserve your appointment online or call us directly. We can often accommodate requests as early as one hour before!
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

      {/* ========================================================================= */}
      {/* INTERACTIVE FULLSCREEN LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      {currentModalItem && activeModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          {/* Top Bar Controls */}
          <div
            className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-50 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs sm:text-sm font-bold text-white/80 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
              <span>Photo {activeModalIndex + 1} of {filteredItems.length}</span>
            </div>

            <button
              type="button"
              onClick={handleCloseModal}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white hover:text-black transition-colors border border-white/20"
              title="Close (Esc)"
            >
              <X size={20} />
            </button>
          </div>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevModal();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-black border border-white/20 transition-all active:scale-90"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNextModal();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-black border border-white/20 transition-all active:scale-90"
            title="Next (Right Arrow)"
          >
            <ChevronRightIcon size={24} />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/15 flex flex-col md:flex-row z-40 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Viewport */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[320px] md:min-h-[500px]">
              <img
                src={currentModalItem.image}
                alt={currentModalItem.title}
                className="max-h-[60vh] md:max-h-[85vh] w-full object-contain"
              />
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/20">
                  {currentModalItem.tag}
                </span>
              </div>
            </div>

            {/* Dossier Sidebar */}
            <div className="w-full md:w-80 lg:w-96 bg-neutral-950 p-6 sm:p-7 text-white flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 overflow-y-auto max-h-[40vh] md:max-h-[85vh]">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#F7D272]">
                  {currentModalItem.category}
                </span>
                <h3 className="mt-1.5 text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {currentModalItem.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {currentModalItem.description}
                </p>

                {/* Specs Grid */}
                <div className="mt-5 space-y-2.5 rounded-xl bg-white/5 p-4 border border-white/10 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Estimated Cost</span>
                    <span className="font-bold text-[#FDE047] text-sm sm:text-base font-['Inter',sans-serif]">
                      {currentModalItem.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Chair Duration</span>
                    <span className="font-semibold text-white">{currentModalItem.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Hair Type</span>
                    <span className="font-semibold text-white">All Textures (1A - 4C)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Location</span>
                    <span className="font-semibold text-white">Glen Burnie, MD</span>
                  </div>
                </div>

                {/* Salon Tip */}
                <div className="mt-4 rounded-xl bg-purple-950/60 p-3 border border-purple-500/30 text-[11px] text-purple-200">
                  💡 <strong>Care Tip:</strong> Sleep with a silk or satin bonnet and apply light scalp oil weekly to keep this style looking salon-fresh for 6 to 8+ weeks.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href="#booking"
                  onClick={handleCloseModal}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#BA1296] to-[#910e75] py-3 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90 active:scale-95"
                >
                  <Calendar size={16} />
                  <span>Book This Style Now</span>
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white/10 py-2.5 text-xs font-bold text-white border border-white/20 hover:bg-white/20 transition-all"
                >
                  <Phone size={14} />
                  <span>Call to Inquire: {CONTACT.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sticky Booking CTA */}
      <a
        href="#booking"
        className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-xl bg-[#A81286] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-2xl transition-transform active:scale-95 lg:hidden font-['Inter',sans-serif]"
      >
        <Calendar size={16} />
        <span>Book Style from Gallery</span>
      </a>
    </div>
  );
}
