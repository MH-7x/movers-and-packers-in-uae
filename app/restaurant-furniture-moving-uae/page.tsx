import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import ServiceHero from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { AllServices, locations } from "@/lib/data";
import { RestaurantFurnitureMovingFaqs } from "@/lib/FaqsData";
import HeroImage from "@/public/ser/office-movers-in-dubai.jpg";
import { MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RestaurantFurnitureMoving = () => {
  return (
    <main>
      <ServiceHero
        title="Restaurant Furniture Moving in UAE — Complete F&B & Hospitality Relocation"
        desc="Professional restaurant furniture movers in UAE. We relocate dining furniture, bar setups, kitchen equipment & complete F&B fit-outs across Dubai, Abu Dhabi, Sharjah & all UAE. Trusted since 1998. Free quote."
        image={{
          src: HeroImage,
          alt: "Restaurant furniture moving service with movers handling dining tables and bar equipment",
        }}
        btnText="Plan Your Restaurant Furniture Move"
      />
      <section className="mt-16 max-w-4xl mx-auto md:px-0 px-4">
        <h3 className="md:text-2xl text-lg font-bold text-center">
          Relocating a restaurant, café, or food and beverage establishment in
          the UAE requires speed, precision, and the understanding that every
          hour your business is not operational costs money.
        </h3>
        <div className="md:text-lg text-muted-foreground text-center mt-10 md:px-20">
          <p>
            At Movers and Packers in UAE, we provide a specialist restaurant
            furniture moving service designed for the F&B and hospitality
            industry — covering everything from dining room tables and bar
            counters to commercial kitchen equipment and outdoor terrace
            furniture.
          </p>
          <p>
            Since 1998, we have been the trusted commercial furniture movers for
            businesses across UAE including restaurants, cafes, cloud kitchens,
            hotel F&B outlets, and catering businesses in Dubai, Abu Dhabi,
            Sharjah, and all UAE emirates. Our experience means we understand
            the urgency of your relocation and plan every move to minimize your
            downtime.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
          {[
            "25+ Years Experience",
            "100% Insured",
            "After-Hours Moves",
            "Fast & Efficient",
            "Zero Downtime",
          ].map((t, i) => (
            <div
              key={i}
              className="bg-primary text-white text-shadow-2xs px-3 py-1.5 text-sm rounded-4xl flex items-center gap-2"
            >
              <span> ✔</span> <p>{t} </p>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-foreground/90 p-10 rounded-3xl grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="text-center md:border-r md:border-b-transparent border-b md:pb-0 pb-2 border-primary">
            <p className="text-3xl text-white font-bold">25+</p>
            <p className="text-white/80">Years Experience</p>
          </div>
          <div className="text-center md:border-r md:border-b-transparent border-b md:pb-0 pb-2 border-primary">
            <p className="text-3xl text-white font-bold">1,000s+</p>
            <p className="text-white/80">Moves Completed</p>
          </div>
          <div className="text-center md:border-r md:border-b-transparent border-b md:pb-0 pb-2 border-primary">
            <p className="text-3xl text-white font-bold">9+</p>
            <p className="text-white/80">Emirates Covered</p>
          </div>
          <div className="text-center">
            <p className="text-3xl text-white font-bold">100%</p>
            <p className="text-white/80">Insurance Coverage</p>
          </div>
        </div>
      </section>
      <QuotationSection
        title={
          <>
            <span className="font-bold md:block">
              Plan Your Restaurant Furniture Move
            </span>{" "}
            — Fast, Efficient & No Business Disruption
          </>
        }
        btnText="Get Restaurant Furniture Moving Plan"
        desc="Get a free moving plan from our expert restaurant furniture movers in UAE. We handle everything from after-hours scheduling to protected transport and setup. No hidden charges, fully insured, and minimal business disruption."
      />
      <div className="max-w-7xl md:px-10 mx-auto mt-20 grid lg:grid-cols-6 grid-col-1 min-h-screen gap-10">
        <div
          className="lg:col-span-4 flex flex-col gap-y-16 md:px-0 px-4"
          id="service-content"
        >
          <section>
            <h2>Why Restaurant Furniture Moving Requires Specialist Movers</h2>
            <p>Moving a restaurant is unlike moving a home. It involves:</p>
            <ul className="mt-5 space-y-3 list-disc list-inside text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">
                  Heavy and bulky commercial furniture
                </span>{" "}
                — restaurant-grade tables, commercial bar counters, heavy
                display units
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Fragile décor items
                </span>{" "}
                — pendant lights, feature walls, framed artwork, glassware
                display cabinets
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Commercial kitchen equipment
                </span>{" "}
                — industrial ovens, refrigeration units, prep tables, extraction
                systems
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Time pressure
                </span>{" "}
                — every day of closure reduces revenue; moves often happen
                overnight
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Licensing compliance
                </span>{" "}
                — moves must not damage the fit-out of the new premises
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Brand and aesthetic continuity
                </span>{" "}
                — furniture must be placed correctly to recreate your
                restaurant&apos;s look and feel
              </li>
            </ul>
            <p className="mt-5">
              Hiring a freelance mover for a restaurant relocation is a
              high-risk decision. Without proper equipment, experience, and
              accountability, valuable furniture can be damaged. Our licensed,
              experienced team is the safe choice.
            </p>
          </section>

          <section>
            <h2>Restaurant Furniture & Equipment We Move</h2>
            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Front-of-House (Dining Area)
                </h3>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                  {[
                    "Dining tables — all shapes, sizes, and materials (wood, marble, metal)",
                    "Dining chairs and bench seating",
                    "Bar stools and high-table counter sets",
                    "Reception desks and host stations",
                    "Display shelving and wine rack units",
                    "Booth seating and banquette fixed bench sections",
                    "Decorative furniture — feature pieces, lounge seating, entrance displays",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 border-b pb-3 border-secondary"
                    >
                      <span className="text-primary mt-1">✓</span>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Back-of-House (Kitchen & Service Area)
                </h3>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                  {[
                    "Stainless steel prep tables and workstations",
                    "Commercial refrigerators and freezer units",
                    "Kitchen storage shelving and racking",
                    "Chef desks and back-kitchen furniture",
                    "Serving station counters and pass-through units",
                    "Staff lockers, changing room furniture, and canteen tables",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 border-b pb-3 border-secondary"
                    >
                      <span className="text-primary mt-1">✓</span>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Outdoor & Terrace
                </h3>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                  {[
                    "Outdoor dining tables and chairs",
                    "Sun umbrellas, parasol bases, and shade structures",
                    "Planters, decorative dividers, and feature installations",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 border-b pb-3 border-secondary"
                    >
                      <span className="text-primary mt-1">✓</span>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2>Our Restaurant Furniture Moving Process</h2>
            <div className="mt-8 space-y-6">
              {[
                {
                  title: "Pre-Move Assessment",
                  desc: "Our commercial team visits the restaurant to inventory all furniture, map the new layout, and plan the most efficient moving sequence.",
                },
                {
                  title: "After-Hours or Off-Day Scheduling",
                  desc: "Restaurant moves are ideally planned during closure hours — typically overnight or on a day the restaurant is closed — to eliminate business disruption.",
                },
                {
                  title: "Protective Packing",
                  desc: "All furniture is wrapped with moving blankets, bubble wrap, and stretch film. Fragile and decorative pieces receive extra padding and custom protection.",
                },
                {
                  title: "Systematic Loading",
                  desc: "Items are loaded in reverse layout order so they unload in the correct sequence for setup at the new location.",
                },
                {
                  title: "Careful Transport",
                  desc: "Enclosed trucks ensure your restaurant furniture is protected from dust, heat, and weather during transport.",
                },
                {
                  title: "Layout Setup at Destination",
                  desc: "Our team places every piece according to your new floor plan, so your restaurant is ready to open as quickly as possible.",
                },
                {
                  title: "Furniture Assembly",
                  desc: "Any disassembled items — tables with removable bases, booth frames — are fully reassembled on-site.",
                },
              ].map((process, i) => (
                <div key={i} className="border-l-2 border-primary pl-5">
                  <h3 className="text-lg font-semibold mb-2">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground">{process.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-secondary rounded-3xl aspect-video relative overflow-hidden">
            <Image
              src={"/ser/office-movers-in-dubai.jpg"}
              alt="Restaurant furniture moving team handling commercial furniture and equipment"
              fill
              className="object-cover"
            />
          </div>

          <section>
            <h2>Why Restaurants & F&B Businesses Choose Us</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-8">
              {[
                {
                  title:
                    "25+ years commercial moving experience including hospitality and F&B relocations",
                  icon: "✓",
                },
                {
                  title:
                    "After-hours and overnight restaurant moves to minimize closure time",
                  icon: "✓",
                },
                {
                  title:
                    "Professional packing of fragile and decorative furniture",
                  icon: "✓",
                },
                {
                  title:
                    "Enclosed trucks — protecting your restaurant furniture from UAE summer heat",
                  icon: "✓",
                },
                {
                  title:
                    "Fast, organized team experienced in high-volume F&B fit-out moves",
                  icon: "✓",
                },
                {
                  title:
                    "Licensed company with accountability — not a freelance operator",
                  icon: "✓",
                },
                {
                  title:
                    "Transparent quotes with no hidden charges — invoice suitable for business accounting",
                  icon: "✓",
                },
                {
                  title:
                    "Available across Dubai, Abu Dhabi, Sharjah, Ajman, and all UAE",
                  icon: "✓",
                },
              ].map((reason, i) => (
                <div
                  key={i}
                  className="border-b border-primary pb-4 last:border-0 flex items-start gap-3"
                >
                  <span className="text-primary text-xl shrink-0">
                    {reason.icon}
                  </span>
                  <p className="text-muted-foreground">{reason.title}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-2 flex flex-col gap-y-5 self-start sticky top-24 md:px-0 px-4">
          <div className="rounded-2xl bg-muted p-6 space-y-3">
            <h3 className="font-bold text-lg">Need Hospital Moving Help?</h3>
            <p className="text-sm text-muted-foreground">
              Contact our commercial team today for a free consultation and
              quote. We specialize in healthcare facility relocations.
            </p>
            <div className="flex flex-col gap-2 pt-3">
              <Button className="bg-primary hover:bg-primary/90 w-full gap-2">
                <PhoneCall size={18} />
                Call Now
              </Button>
              <Button variant="secondary" className="w-full gap-2">
                <MessageCircle size={18} />
                WhatsApp
              </Button>
            </div>
          </div>
          <div className="rounded-2xl bg-secondary/50 p-6">
            <h4 className="font-semibold mb-3 text-lg">OUR MOVING SERVICES</h4>
            <ul className="text-sm space-y-2 text-muted-foreground">
              {AllServices.map((ser, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-primary"> ✔ </span>
                  {ser.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-secondary/50 p-6">
            <h4 className="font-semibold mb-3 text-lg">AREAS WE SERVES</h4>
            <ul className="text-sm space-y-2 text-muted-foreground">
              {locations.map((loc, i) => (
                <li key={i}>
                  <Link href={loc.href} className="flex items-center gap-2">
                    <span className="text-primary"> 🏳 </span>
                    {loc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <ReviewSection />
      <FAQSection
        faqs={RestaurantFurnitureMovingFaqs}
        title="Frequently Asked Questions — Restaurant Furniture Moving UAE"
      />
      <CTA
        title="Book Your Restaurant Furniture Move — Fast & Professional | All UAE"
        desc="If you're planning a restaurant, café, or F&B business furniture move across the UAE, we are here to help. Registered since 1998, fully insured, with after-hours scheduling and minimal downtime. Call, WhatsApp, or fill out the form — we'll get back to you fast with a complete moving plan and fixed price. No hidden charges, professional service."
      />
    </main>
  );
};

export default RestaurantFurnitureMoving;
