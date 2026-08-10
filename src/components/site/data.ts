import knotless from "@/assets/style-knotless.jpg";
import cornrows from "@/assets/style-cornrows.jpg";
import boxbraids from "@/assets/style-boxbraids.jpg";
import locs from "@/assets/style-locs.jpg";
import natural from "@/assets/style-natural.jpg";
import kids from "@/assets/style-kids.jpg";
import bridal from "@/assets/style-bridal.jpg";
import treatment from "@/assets/style-treatment.jpg";

export const CONTACT = {
  phone: "(612) 555-0147",
  phoneHref: "tel:+16125550147",
  email: "hello@fadifashion.com",
  city: "Bloomington, Minnesota",
  address: "Bloomington, MN 55425",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
    { day: "Saturday", time: "8:00 AM – 6:00 PM" },
    { day: "Sunday", time: "By appointment" },
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

export const GALLERY = [
  { src: knotless, alt: "Knotless braids with half-up bun styled in Bloomington MN", label: "Knotless Half-Up", category: "Knotless", span: "tall" },
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
  { name: "Amara", stars: 5, quote: "The most comfortable knotless braids I have ever had. Six weeks in and they still look like day one. Fadi takes real pride in the work." },
  { name: "Jasmine", stars: 5, quote: "Immaculate parts, zero tension and such a warm space. I drove from Saint Paul and I would happily do it again every month." },
  { name: "Dee", stars: 5, quote: "She listened to exactly what I wanted, then made it better. My cornrows were flawless for my sister's wedding." },
  { name: "Nia", stars: 5, quote: "My daughter is nervous about getting her hair done and she was completely at ease. Gentle, patient and beautiful results." },
];

export const FAQS = [
  {
    q: "Where is Fadi Fashion located?",
    a: "Fadi Fashion is a premier hair braiding studio serving Bloomington, Minnesota and the wider Twin Cities area.",
  },
  {
    q: "What braiding services do you offer?",
    a: "Knotless braids, box braids, cornrows, locs, extensions, natural hair styling, wash and deep conditioning treatments, and special occasion styling.",
  },
  {
    q: "How long do knotless braids last?",
    a: "With proper aftercare, knotless braids typically last six to eight weeks. We include personalised aftercare guidance with every appointment.",
  },
  {
    q: "Do I need an appointment?",
    a: "Yes, appointments are recommended. Submit the booking request form or call the studio and we will confirm your preferred date and time.",
  },
];