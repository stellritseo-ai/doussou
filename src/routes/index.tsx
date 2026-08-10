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

const TITLE = "Doussou Quality Braiding | Hair Braiding Salon in Glen Burnie, MD";
const DESCRIPTION =
  "Doussou Quality Braiding - Premier African hair braiding studio located at 337 S Hospital Dr, Glen Burnie, MD 21061. Knotless braids, box braids, cornrows, locs and natural styling. Book today.";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Doussou Quality Braiding",
    description: DESCRIPTION,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "337 S Hospital Dr",
      addressLocality: "Glen Burnie",
      addressRegion: "MD",
      postalCode: "21061",
      addressCountry: "US",
    },
    areaServed: "Glen Burnie, Maryland",
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
        itemOffered: { "@type": "Service", name, areaServed: "Glen Burnie, MD" },
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
          "hair braiding Glen Burnie MD, African hair braiding Glen Burnie, knotless braids Glen Burnie MD, box braids Glen Burnie, cornrow braids Maryland, braiding salon Glen Burnie Maryland",
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
