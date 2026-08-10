import welcomeVideo from "@/assets/welcome.mp4";
import icon1 from "@/assets/icon1.png";
import icon2 from "@/assets/icon2.png";
import icon3 from "@/assets/icon3.png";
import icon4 from "@/assets/icon4.png";
import icon5 from "@/assets/icon5.png";
import icon6 from "@/assets/icon6.png";
import icon7 from "@/assets/icon7.png";
import icon8 from "@/assets/icon8.png";
import { Sparkles } from "lucide-react";

const LEFT_ITEMS = [
  {
    title: "Braids",
    desc: "Box braids, Knotless braids, Senegalese twist, boho braids, stitch braids, etc.",
    icon: icon1,
  },
  {
    title: "Natural styles",
    desc: "Silk press, Blow outs, Coily sets etc",
    icon: icon2,
  },
  {
    title: "Hair Treatments",
    desc: "Scalp Renewal, Hydrating Treatment, etc",
    icon: icon3,
  },
  {
    title: "Hair Styling",
    desc: "Your complete guide to different types of braids, from box braids to boho...",
    icon: icon4,
  },
];

const RIGHT_ITEMS = [
  {
    title: "Extension Services",
    desc: "Sew-ins, Wigs, Quick weaves, microlinks etc...",
    icon: icon5,
  },
  {
    title: "Locs",
    desc: "Starter Locs, Interlocking, Microlocs, Maintenance, etc",
    icon: icon6,
  },
  {
    title: "Weddings",
    desc: "Deluxe Hair Package, Bridal Hair Consultation, Standard Hair Package",
    icon: icon7,
  },
  {
    title: "Hair Wash",
    desc: "Start your braiding experience with a fresh, clean foundation. At Doussou Quality Braiding..",
    icon: icon8,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative w-full overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-t border-[#E8DFC8]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4">
            <Sparkles size={13} className="text-[#C48D46]" />
            <span>Why Choose Doussou Quality Braiding</span>
          </div>

          <h2 className="font-display text-3xl font-normal leading-tight text-[#2B231D] sm:text-4xl lg:text-[2.75rem]">
            Specialized Protective <span className="font-serif italic text-[#C48D46]">Hair Services</span>
          </h2>

          <p className="mt-3 text-[14px] sm:text-[17px] text-[#5C5046] font-medium leading-relaxed whitespace-normal md:whitespace-nowrap">
            Crafted with precision, comfort, and passion to celebrate your hair and natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr_1fr] gap-6 lg:gap-8 items-center">
          
          {/* Left 4 Magenta Cards */}
          <div className="flex flex-col gap-4">
            {LEFT_ITEMS.map((item) => (
              <div
                key={item.title}
                className="group flex items-center justify-between p-5 sm:p-6 rounded-[20px] bg-[#BA1296] text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-[#A30D83] border border-white/20"
              >
                <div className="pr-4">
                  <h3 className="font-sans text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/90 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center transition-transform group-hover:scale-110">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Center Tall Portrait Card */}
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] shadow-2xl h-[420px] sm:h-[470px] lg:h-[500px] border-4 border-white">
            <video
              src={welcomeVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white text-center">
              <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-white border border-white/30">
                She is ready ✨ for Eid
              </span>
            </div>
          </div>

          {/* Right 4 Magenta Cards */}
          <div className="flex flex-col gap-4">
            {RIGHT_ITEMS.map((item) => (
              <div
                key={item.title}
                className="group flex items-center justify-between p-5 sm:p-6 rounded-[20px] bg-[#BA1296] text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-[#A30D83] border border-white/20"
              >
                <div className="pr-4">
                  <h3 className="font-sans text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/90 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center transition-transform group-hover:scale-110">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}