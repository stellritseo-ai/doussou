import knotless from "@/assets/style-knotless.jpg";
import cornrows from "@/assets/style-cornrows.jpg";
import boxbraids from "@/assets/style-boxbraids.jpg";
import locs from "@/assets/style-locs.jpg";
import natural from "@/assets/style-natural.jpg";
import kids from "@/assets/style-kids.jpg";
import bridal from "@/assets/style-bridal.jpg";
import treatment from "@/assets/style-treatment.jpg";

export const CONTACT = {
  name: "Doussou Quality Braiding",
  phone: "(301) 523-8593",
  phoneHref: "tel:+13015238593",
  email: "doussoukabba@gmail.com",
  website: "https://www.doussouqualitybraiding.com",
  city: "Glen Burnie, Maryland",
  state: "MD",
  zip: "21061",
  address: "337 S Hospital Dr, Glen Burnie, MD 21061",
  fullAddress: "337 S Hospital Dr, Glen Burnie, MD, United States, 21061",
  geo: {
    latitude: 39.1557,
    longitude: -76.6267,
  },
  serviceAreas: [
    "Glen Burnie, MD",
    "Pasadena, MD",
    "Severn, MD",
    "Hanover, MD",
    "Linthicum Heights, MD",
    "Millersville, MD",
    "Baltimore, MD",
    "Annapolis, MD",
    "Anne Arundel County, MD",
  ],
  socials: {
    facebook: "https://www.facebook.com/doussouqualitybraiding",
    tiktok: "https://www.tiktok.com/@doussouqualitybraiding",
    instagram: "https://www.instagram.com/doussouweb",
    google: "https://www.google.com/search?q=Doussou+Quality+Braiding&oq=Doussou+Quality+Braiding&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQRRgnGDsyCAgCEAAYFhgeMg0IAxAAGIYDGIAEGIoFMg0IBBAAGIYDGIAEGIoFMgYIBRBFGDwyBggGEEUYPTIGCAcQRRg80gEHMzM3ajBqN6gCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8",
  },
  hours: [
    { day: "Monday – Saturday", time: "9:30 AM – 8:30 PM" },
    { day: "Sunday", time: "By appointment only" },
  ],
};

export const SERVICES = [
  {
    name: "Knotless Braiding",
    blurb:
      "Featherlight, tension-free braids with a seamless root for effortless movement.",
    image: knotless,
  },
  {
    name: "Cornrow Braiding",
    blurb:
      "Precision feed-in patterns, sculpted parts and clean lines that last for weeks.",
    image: cornrows,
  },
  {
    name: "Box Braids",
    blurb:
      "Classic, versatile box braids in every length and thickness, styled to suit you.",
    image: boxbraids,
  },
  {
    name: "Locs & Extensions",
    blurb:
      "Faux locs, retwists and quality extension work finished with meticulous detail.",
    image: locs,
  },
  {
    name: "Natural Hair Styling",
    blurb:
      "Twist-outs, silk presses and protective styling that honours your natural texture.",
    image: natural,
  },
  {
    name: "Wash & Treatments",
    blurb:
      "Deep conditioning, scalp care and hydration rituals for healthy hair underneath.",
    image: treatment,
  },
];

export const BOOKING_SERVICES_BY_CATEGORY = [
  {
    category: "Braids & Knotless",
    services: [
      { name: "Small Knotless Braids", price: "$250" },
      { name: "14\" Knotless Braids Medi", price: "$180" },
      { name: "18\" Boho Knotless", price: "$190" },
      { name: "Goddess Knotless", price: "$180+" },
      { name: "Bohemian Braid Medium", price: "$240" },
      { name: "Box Braids", price: "$200-$220" },
      { name: "Box Braids Large", price: "$250" },
      { name: "French Curls", price: "$180+" },
      { name: "French Braid", price: "$80" },
      { name: "Feed-In Cornrows", price: "$85-$150" },
      { name: "Stitch Braids / Cornrows", price: "$90-$160" },
      { name: "Men's Braids / Cornrows", price: "$65-$120" },
      { name: "Kids Braids", price: "$65-$100" },
    ],
  },
  {
    category: "Twists & Locs",
    services: [
      { name: "Barrel Twist", price: "$80-$100" },
      { name: "Two Strand Twists", price: "$70-$85" },
      { name: "Comb Twists", price: "$65-$85" },
      { name: "Kinky Twists", price: "$200-$220" },
      { name: "Senegal Twists", price: "$200-$240" },
      { name: "Senegal Twists Medium", price: "$260-$280" },
      { name: "18\" Senegalese", price: "$190+" },
      { name: "20\" Senegalese", price: "$200+" },
      { name: "Dread Locks", price: "$100" },
      { name: "Lock Start", price: "$85-$120" },
      { name: "Lock Maintenance", price: "$80-$100" },
      { name: "Lock Extension", price: "$200-$300" },
      { name: "Faux Locks", price: "$200-$280" },
      { name: "Inter Loc", price: "$300+" },
      { name: "Butterfly Locs / Soft Locs", price: "$180-$260" },
    ],
  },
  {
    category: "Natural Hair & Care",
    services: [
      { name: "Braids Natural", price: "$65-$85" },
      { name: "Single Braid Natural Hair", price: "$60" },
      { name: "Wash", price: "$30" },
      { name: "Hair Wash & Deep Conditioning", price: "$45-$65" },
      { name: "Undo Braids + Wash/Blow Dry (Natural Hair)", price: "$40" },
      { name: "Undo Braids + Wash/Blow Dry (Extensions)", price: "$120" },
    ],
  },
  {
    category: "Extensions & Wigs",
    services: [
      { name: "Crochet", price: "$100-$120" },
      { name: "Weaving Extension", price: "$120-$160" },
      { name: "Wig Install", price: "$80-$85" },
    ],
  },
  {
    category: "Specialty & Consultation",
    services: [
      { name: "Special Occasion / Wedding Updo", price: "$150+" },
      { name: "Consultation Only", price: "Free" },
      { name: "Other Custom Style", price: "Varies" },
    ],
  },
];

export const ALL_BOOKING_SERVICES_LIST = BOOKING_SERVICES_BY_CATEGORY.flatMap(
  (group) => group.services.map((s) => `${s.name} (${s.price})`)
);

export const GALLERY = [
  { src: knotless, alt: "Knotless braids with half-up bun styled in Glen Burnie MD", label: "Knotless Half-Up", category: "Knotless", span: "tall" },
  { src: cornrows, alt: "Feed-in cornrow braids straight back", label: "Feed-In Cornrows", category: "Cornrows", span: "short" },
  { src: boxbraids, alt: "Long jumbo box braids styled over the shoulder", label: "Waist-Length Box Braids", category: "Box Braids", span: "tall" },
  { src: bridal, alt: "Bridal braided updo with gold hair jewellery", label: "Bridal Braided Updo", category: "Special Occasion", span: "short" },
  { src: locs, alt: "Faux locs styled into an elegant updo", label: "Loc Updo", category: "Locs", span: "tall" },
  { src: kids, alt: "Child with neat braids and beads", label: "Kids Braids & Beads", category: "Kids", span: "short" },
  { src: natural, alt: "Natural afro twist-out styling", label: "Twist-Out Volume", category: "Natural Styles", span: "tall" },
  { src: treatment, alt: "Scalp oil treatment applied to fresh braids", label: "Scalp Ritual", category: "Knotless", span: "short" },
];

export const GALLERY_FILTERS = [
  "All",
  "Knotless",
  "Box Braids",
  "Cornrows",
  "Locs",
  "Natural Styles",
  "Kids",
  "Special Occasion",
];

export const REASONS = [
  { n: "01", title: "Experienced Stylists", copy: "Six-plus years of specialist African braiding, refined on thousands of heads of hair." },
  { n: "02", title: "Personalized Consultation", copy: "Every appointment opens with a conversation about your hair, lifestyle and goals." },
  { n: "03", title: "Quality Hair & Products", copy: "Pre-stretched, itch-free hair and gentle products chosen for scalp health." },
  { n: "04", title: "Attention To Detail", copy: "Clean parts, even tension and a finish that reads perfect from every angle." },
  { n: "05", title: "Comfortable Experience", copy: "A calm, unhurried studio where long appointments never feel long." },
  { n: "06", title: "Long-Lasting Styles", copy: "Braids built to hold their shape for weeks, with aftercare guidance included." },
];

export const TESTIMONIALS = [
  { name: "Amara", stars: 5, quote: "The most comfortable knotless braids I have ever had. Six weeks in and they still look like day one. The team takes real pride in the work." },
  { name: "Jasmine", stars: 5, quote: "Immaculate parts, zero tension and such a warm space. I drove from Baltimore and I would happily do it again every month." },
  { name: "Dee", stars: 5, quote: "She listened to exactly what I wanted, then made it better. My cornrows were flawless for my sister's wedding in Annapolis." },
  { name: "Nia", stars: 5, quote: "My daughter is nervous about getting her hair done and she was completely at ease. Gentle, patient and beautiful results." },
];

export const FAQS = [
  {
    q: "Where is Doussou Quality Braiding located?",
    a: "Doussou Quality Braiding is located at 337 S Hospital Dr, Glen Burnie, MD 21061, conveniently situated near Baltimore, Pasadena, Severn, Hanover, and Annapolis.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book directly through our online booking form on this website, click 'Book Style' on any service card, or call our studio directly at (301) 523-8593.",
  },
  {
    q: "Does the salon offer knotless braids?",
    a: "Yes! Knotless braids are our signature specialty. We offer Bohemian Knotless, Goddess Knotless, Small, Medium, Large, and various lengths from shoulder to waist-length, installed with zero scalp tension.",
  },
  {
    q: "How much do box braids and knotless braids cost?",
    a: "Box braids start from $200–$250 depending on size and length. Knotless braids start from $180 to $250. We provide 100% upfront quotes with no hidden chair fees.",
  },
  {
    q: "Does the salon braid children's hair?",
    a: "Yes! We specialize in gentle, patient kids' braiding starting from $65. We offer pain-free parting with colorful beads, cuffs, and kid-friendly protective styles.",
  },
  {
    q: "What types of protective hairstyles are available?",
    a: "We offer knotless braids, traditional box braids, stitch cornrows, feed-in braids, Senegalese rope twists, kinky twists, faux locs, soft locs, crochet installs, sew-in extensions, wig installs, and loc retwists.",
  },
  {
    q: "Do I need to bring my own braiding hair?",
    a: "Standard pre-stretched synthetic braiding hair extensions are included with our full braiding services. If you require specialty colors, human hair curls, or specific custom textures, you may also bring your own.",
  },
  {
    q: "How long does a knotless braiding appointment take?",
    a: "Depending on your selected size and length, appointments typically take 3 to 7 hours. Our experienced braiders work efficiently with precise, clean parting to ensure your maximum comfort.",
  },
  {
    q: "Does the salon accept walk-ins?",
    a: "Yes! While advance appointments are recommended, walk-ins and same-day requests are warmly welcomed based on daily chair availability. Please call (301) 523-8593 before heading over to confirm same-day openings.",
  },
  {
    q: "What are the salon's business hours?",
    a: "We are open Monday through Saturday from 9:30 AM to 8:30 PM. Sunday appointments are available upon advance request.",
  },
  {
    q: "How should I prepare my hair before my appointment?",
    a: "Please arrive with your hair thoroughly washed, conditioned, detangled, and blown out straight from root to tip, free of heavy oils or butters so we can achieve clean, precise parts.",
  },
  {
    q: "Does the salon offer loc maintenance?",
    a: "Yes, we provide full loc care including starter locs ($85–$120), loc retwisting & maintenance ($80–$100), interlocking ($300+), and loc extensions ($200–$300).",
  },
];