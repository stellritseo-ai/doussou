import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Intro } from "@/components/site/Intro";
import { Services } from "@/components/site/Services";
import { Transformation } from "@/components/site/Transformation";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { BookingCTA } from "@/components/site/BookingCTA";
import { BookingForm } from "@/components/site/BookingForm";
import { Footer } from "@/components/site/Footer";
import { CONTACT, FAQS } from "@/components/site/data";

const TITLE = "Doussou Quality Braiding | African Hair Braiding Salon in Glen Burnie, MD";
const DESCRIPTION =
  "Premier African hair braiding salon in Glen Burnie, MD at 337 S Hospital Dr. Expert knotless braids, box braids, cornrows, twists & locs with tension-free scalp care. Walk-ins welcome & online booking.";
const CANONICAL = "https://www.doussouqualitybraiding.com/";

const getSchema = () => [
  {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": "https://www.doussouqualitybraiding.com/#salon",
    name: "Doussou Quality Braiding",
    url: CANONICAL,
    description: DESCRIPTION,
    telephone: CONTACT?.phone ?? "(301) 523-8593",
    email: CONTACT?.email ?? "doussoukabba@gmail.com",
    priceRange: "$$",
    image: "https://www.doussouqualitybraiding.com/og-image.jpg",
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
    areaServed: [
      { "@type": "City", name: "Glen Burnie" },
      { "@type": "City", name: "Pasadena" },
      { "@type": "City", name: "Severn" },
      { "@type": "City", name: "Hanover" },
      { "@type": "City", name: "Baltimore" },
      { "@type": "City", name: "Annapolis" },
      { "@type": "AdministrativeArea", name: "Anne Arundel County" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "17:00",
        description: "By appointment only",
      },
    ],
    sameAs: [
      CONTACT.socials.facebook,
      CONTACT.socials.instagram,
      CONTACT.socials.tiktok,
      CONTACT.socials.google,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "African Hair Braiding & Protective Styling Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Knotless Braids Glen Burnie MD",
            url: "https://www.doussouqualitybraiding.com/knotless-braids-glen-burnie-md",
            description: "Featherlight, tension-free knotless braids with natural scalp parting.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Box Braids Glen Burnie MD",
            url: "https://www.doussouqualitybraiding.com/box-braids-glen-burnie-md",
            description: "Classic and versatile box braids in small, medium, and large parts.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cornrows & Stitch Braids Glen Burnie MD",
            url: "https://www.doussouqualitybraiding.com/cornrows-glen-burnie-md",
            description: "Precision feed-in cornrows and stitch patterns for women, men, and teens.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Senegalese Twists Maryland",
            url: "https://www.doussouqualitybraiding.com/senegalese-twists-glen-burnie-md",
            description: "Smooth, lustrous rope twists crafted with silky extensions.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Faux Locs & Soft Locs",
            url: "https://www.doussouqualitybraiding.com/faux-locs-glen-burnie-md",
            description: "Bohemian faux locs and butterfly locs installed without heavy weight.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kids Hair Braiding Glen Burnie",
            url: "https://www.doussouqualitybraiding.com/kids-hair-braiding-glen-burnie-md",
            description: "Gentle, patient, pain-free braiding with colorful beads for children.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Loc Maintenance & Retwist",
            url: "https://www.doussouqualitybraiding.com/loc-maintenance-glen-burnie-md",
            description: "Palm rolling, interlocking, and starter loc establishment.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Natural Hair Styling & Scalp Care",
            url: "https://www.doussouqualitybraiding.com/natural-hair-styling-glen-burnie-md",
            description: "Deep conditioning, natural twists, wash and takedown services.",
          },
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.doussouqualitybraiding.com/#website",
    url: CANONICAL,
    name: "Doussou Quality Braiding",
    description: DESCRIPTION,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (FAQS ?? []).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "hair braiding Glen Burnie MD, African hair braiding Glen Burnie, knotless braids Glen Burnie MD, box braids Glen Burnie, cornrow braids Maryland, braiding salon Glen Burnie Maryland",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(getSchema()),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Intro />
        <Transformation />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <BookingCTA />
        <BookingForm />
      </main>
      <Footer />
      <a
        href="#booking"
        className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center rounded-lg bg-plum px-6 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-[0_12px_30px_-14px_var(--plum-deep)] lg:hidden"
      >
        Book Appointment
      </a>
    </div>
  );
}
