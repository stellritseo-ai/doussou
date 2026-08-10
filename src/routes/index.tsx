import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Transformation } from "@/components/site/Transformation";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { BookingCTA } from "@/components/site/BookingCTA";
import { BookingForm } from "@/components/site/BookingForm";
import { Footer } from "@/components/site/Footer";
import { CONTACT, FAQS } from "@/components/site/data";

const TITLE = "Fadi Fashion | Hair Braiding Salon in Bloomington, MN";
const DESCRIPTION =
  "Premier African hair braiding in Bloomington, Minnesota. Knotless braids, box braids, cornrows, locs and natural styling by experienced stylists. Book today.";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Fadi Fashion",
    description: DESCRIPTION,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bloomington",
      addressRegion: "MN",
      postalCode: "55425",
      addressCountry: "US",
    },
    areaServed: "Bloomington, Minnesota",
    openingHours: ["Mo-Fr 08:00-19:00", "Sa 08:00-18:00"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "142",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Braiding Services",
      itemListElement: [
        "Knotless Braiding",
        "Box Braids",
        "Cornrow Braiding",
        "Locs & Extensions",
        "Natural Hair Styling",
        "Wash & Treatments",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name, areaServed: "Bloomington, MN" },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
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
          "hair braiding Bloomington MN, African hair braiding Bloomington, knotless braids Bloomington MN, box braids Bloomington, cornrow braids Minnesota, braiding salon Bloomington Minnesota",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schema),
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
        <Intro />
        <About />
        <Services />
        <Transformation />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <BookingCTA />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
