import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import ServiceHero from "@/components/ServiceHero";

import { AllServices } from "@/lib/data";
import { SingleFurnitureMovingUaeFaqs } from "@/lib/FaqsData";
import HeroImage from "@/public/ser/single-item-moving-dubai-professional-sofa-movers.jpg";
import { Headset, MapPinCheck, PhoneCall } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Single Furniture Moving in UAE | One Item Pick Up & Delivery",
  description:
    "Need to move just one piece of furniture in UAE? Our single furniture moving service covers sofas, beds, wardrobes & more across Dubai, Abu Dhabi, Sharjah & all emirates. Fast, safe, affordable. Get a free quote!",
};

const SingleFurnitureMovers = () => {
  return (
    <main>
      <ServiceHero
        title="Single Furniture Moving in UAE — One-Item Pickup & Delivery"
        desc="Need to move just one piece of furniture in the UAE? You do not need a full moving truck or a whole-house team. Our single furniture moving service is the smart, cost-effective solution designed specifically for customers who want to move a single item — a sofa, bed, wardrobe, dining table, or any other piece — quickly and safely anywhere across the UAE."
        image={{
          src: HeroImage,
          alt: "Two professional Movers & Packers team members carrying a large sofa through a luxury Dubai residential building lobby",
        }}
        btnText="Get Quote for Single Furniture Moving"
      />
      <section className="mt-16 max-w-4xl mx-auto md:px-0 px-4">
        <div className="md:text-lg text-muted-foreground text-center mt-10 md:px-20 space-y-4">
          <p>
            Movers and Packers in UAE has been providing single furniture moving
            services since 1998. With over 25 years of experience and thousands
            of single-item moves completed across Dubai, Abu Dhabi, Sharjah,
            Ajman, Al Ain, Ras Al Khaimah, Fujairah, and Umm Al Quwain, we are
            the trusted name for furniture pick up and delivery across all
            emirates.
          </p>
          <p className="text-primary font-bold text-center text-xl">
            📞 Move a Single Piece of Furniture Today — Call or WhatsApp for a
            Free Quote
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-8">
          {[
            "100% Insured",
            "No Hidden Charges",
            "Pay After Completion",
            "Same Day Available",
          ].map((t, i) => (
            <div
              key={i}
              className="bg-primary text-white text-shadow-2xs px-3 py-1.5 text-sm rounded-4xl flex items-center gap-2"
            >
              <span>✔</span> <p>{t}</p>
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
            <p className="text-white/80">Single Moves Completed</p>
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
            <span className="font-bold md:block">Get Moving Free Quote</span>{" "}
            From Single Furniture Movers in UAE
          </>
        }
        btnText="Get Single Furniture Moving Quote"
        desc="Get a free quote for moving a single piece of furniture anywhere in the UAE. No hidden charges, fully insured, and same-day available when needed."
      />
      <div className="max-w-7xl md:px-10 mx-auto mt-20 grid lg:grid-cols-6 grid-col-1 min-h-screen gap-10">
        <div
          className="lg:col-span-4 flex flex-col gap-y-16 md:px-0 px-4"
          id="service-content"
        >
          <section>
            <h2>What Is Single Furniture Moving?</h2>
            <p>
              Single furniture moving — sometimes called one-item moving, single
              piece furniture delivery, or furniture transport for a single item
              — is a specialized service for customers who only need to move one
              or a few individual furniture pieces. This is different from a
              full house move and is priced accordingly — far more affordable
              and efficient.
            </p>
            <p className="mt-4">
              Common scenarios where customers use our single furniture moving
              service include:
            </p>
            <ul className="list-inside list-disc mt-4 text-muted-foreground leading-relaxed space-y-2">
              <li>
                Buying a sofa, bed, or cabinet from a seller and needing
                delivery to your home
              </li>
              <li>
                Moving a single wardrobe or bookshelf when renovating one room
              </li>
              <li>
                Sending a dining table as a gift to a family member in another
                emirate
              </li>
              <li>
                Relocating a home gym equipment piece such as a treadmill or
                rack
              </li>
              <li>
                Moving single furniture in house from one room to another or one
                floor to another
              </li>
              <li>
                Office furniture rearrangement — moving a single desk or filing
                cabinet
              </li>
            </ul>
          </section>

          <div className="bg-secondary rounded-3xl aspect-video relative overflow-hidden">
            <Image
              src={"/ser/single-furniture-movers-in-uae.jpeg"}
              alt="Single furniture moving team 2 members warping and packing furniture"
              fill
              className="object-cover"
            />
          </div>

          <section>
            <h2>Items We Move as Single Furniture Pieces</h2>
            <ul className="list-inside list-disc mt-6 text-muted-foreground leading-relaxed space-y-2">
              <li>
                Sofas and sectional couches (1-seater, 2-seater, 3-seater,
                L-shape)
              </li>
              <li>Beds — single, double, king-size, and bunk beds</li>
              <li>Wardrobes and bedroom cupboards</li>
              <li>Dining tables and dining chairs</li>
              <li>TV units and entertainment centers</li>
              <li>Bookshelves and display cabinets</li>
              <li>Refrigerators, washing machines, and large appliances</li>
              <li>Office desks and ergonomic chairs</li>
              <li>Heavy safes and strong boxes</li>
              <li>Outdoor furniture pieces — garden tables, sun loungers</li>
              <li>Any single piece of household or office furniture</li>
            </ul>
          </section>

          <section>
            <h2>How Our Single Furniture Moving Service Works</h2>
            <p>
              Our process is simple, transparent, and designed for speed and
              efficiency when moving a single item.
            </p>
            <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-8">
              {[
                {
                  title: "Step 1: Contact Us",
                  desc: "Contact us by phone, WhatsApp, or our website form. Tell us what item you need moved, your pickup location, and the delivery address.",
                },
                {
                  title: "Step 2: Get a Fixed Price Quote",
                  desc: "We provide a transparent, fixed price quote directly to your WhatsApp — no hidden charges.",
                },
                {
                  title: "Step 3: Confirm Date & Time",
                  desc: "Confirm the date and time. We can offer same-day service for urgent requests.",
                },
                {
                  title: "Step 4: Right Vehicle Arrives",
                  desc: "Our team arrives with the right vehicle — we use smaller pickup vehicles for single-item moves, making it faster and more affordable.",
                },
                {
                  title: "Step 5: Safe Packing & Loading",
                  desc: "We carefully wrap the item using bubble wrap and moving blankets, load it, and transport it safely.",
                },
                {
                  title: "Step 6: Delivery & Placement",
                  desc: "We deliver, unload, and if needed, place the item exactly where you want it in your new space.",
                },
                {
                  title: "Step 7: Inspection & Payment",
                  desc: "You inspect. You are satisfied. Then you pay.",
                },
              ].map((process, i) => (
                <div key={i} className="border-l-4 border-primary pl-4">
                  <h3 className="mb-2 text-base font-semibold">
                    {process.title}
                  </h3>
                  <p className="leading-tight text-muted-foreground">
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>Single Furniture Moving Prices in UAE</h2>
            <p>
              Our pricing for single furniture moving in the UAE is
              straightforward and transparent. Factors that affect the cost
              include:
            </p>
            <ul className="list-inside list-disc mt-4 text-muted-foreground leading-relaxed space-y-2">
              <li>
                The type and size of the furniture piece (sofa vs. wardrobe vs.
                safe)
              </li>
              <li>Distance between pickup and delivery points</li>
              <li>Floor level and elevator availability</li>
              <li>Whether disassembly is required</li>
            </ul>
            <p className="mt-6">
              We provide fixed-price quotes with absolutely no hidden charges.
              The price quoted is the price you pay. As a guideline, single
              furniture moves within the same emirate typically start from AED
              300, depending on the item and distance. Contact us for a free,
              exact quote for your specific move.
            </p>
          </section>

          <section className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
              <Image
                src={
                  "/ser/single-item-furniture-moving-dubai-villa-movers-van.jpg"
                }
                alt="Movers & Packers team loading a single office desk into a branded moving van outside a Dubai villa"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
              <Image
                src={
                  "/ser/single-appliance-moving-service-dubai-fridge-packing.jpg"
                }
                alt="Movers & Packers professional carefully wrapping a refrigerator with protective blankets for single item move in Dubai"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section>
            <h2>Why Choose Us for Single Furniture Moving?</h2>
            <ul className="list-inside list-disc mt-6 text-muted-foreground leading-relaxed space-y-2">
              <li>
                No need to pay for a full truck — right-sized vehicles for
                single items
              </li>
              <li>
                Fully registered company since 1998 — not a freelance mover
              </li>
              <li>
                Professional packing with bubble wrap, blankets, and stretch
                film
              </li>
              <li>Same-day single furniture moving available across UAE</li>
              <li>
                Serving Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain, RAK, Fujairah,
                UAQ
              </li>
              <li>Inter-emirate single furniture transport available</li>
              <li>
                Pay only after you are 100% satisfied — no upfront payment
              </li>
              <li>English and Arabic speaking team</li>
            </ul>
          </section>

          <section>
            <h2>Single Furniture Moving Across All UAE Emirates</h2>
            <div className="mt-6 grid md:grid-cols-2 grid-cols-1 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-foreground">
                  Dubai & Northern Emirates
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>✓ Single Furniture Moving in Dubai</li>
                  <li>✓ Single Furniture Moving in Sharjah</li>
                  <li>✓ Single Furniture Moving in Ajman</li>
                  <li>✓ Single Furniture Moving in Ras Al Khaimah</li>
                  <li>✓ Single Furniture Moving in Fujairah</li>
                  <li>✓ Single Furniture Moving in Umm Al Quwain</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-foreground">
                  Central & Southern Emirates
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>✓ Single Furniture Moving in Abu Dhabi</li>
                  <li>✓ Single Furniture Moving in Al Ain</li>
                  <li>✓ Inter-emirate Pick Up & Delivery</li>
                  <li>✓ Same-day Service Available</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>Professional Single Item Furniture Moving You Can Trust</h2>
            <div className="flex flex-col gap-y-3 text-muted-foreground">
              <p>
                When you book a single furniture move with us, you are not
                paying for a full-truck service you do not need. You are paying
                for exactly what you get — professional handling of one item.
              </p>
              <p>
                Our team knows how to package, protect, and transport single
                pieces safely, whether it is a delicate sofa, a heavy safe, or
                valuable antique furniture.
              </p>
              <p>
                With 25+ years of experience, a registered business license,
                100% insurance coverage, and transparent pricing, we are the
                single furniture moving service you can rely on across all UAE
                emirates.
              </p>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-2 border self-start sticky top-24 ">
          <h3 className="uppercase text-xl font-bold text-center px-5 pt-5">
            Our Services
          </h3>
          <ul className="mt-5 text-muted-foreground flex flex-col gap-y-3 p-5">
            {AllServices.map((ser, i) => (
              <li
                key={i}
                className="border-b last:border-0 pb-2 hover:text-foreground cursor-pointer transition"
              >
                {ser.name}
              </li>
            ))}
          </ul>
          <div className="w-full mt-5 relative overflow-hidden aspect-square">
            <Image
              src={"/movers-and-packer-in-uae-team-member.jpg"}
              alt="movers and packers in uae team member"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 w-full h-full bg-primary/75 flex items-center justify-center flex-col gap-y-3 p-5">
              <Headset size={60} className="text-white" strokeWidth={1.5} />
              <h3 className="mt-5 text-2xl uppercase font-bold text-white text-shadow-2xs text-center">
                How We Can Help You Move a Single Furniture Item?
              </h3>
              <div className="flex items-center gap-x-2 mt-2 text-white">
                <PhoneCall /> (050) 445-2808
              </div>
              <div className="flex items-center gap-x-2 text-white">
                <MapPinCheck /> 12 29th St - Al Mankhool – Dubai
              </div>
            </div>
          </div>
        </aside>
      </div>
      <ReviewSection />
      <FAQSection
        faqs={SingleFurnitureMovingUaeFaqs}
        title="Frequently Asked Questions — Single Furniture Moving UAE"
      />
      <CTA
        title="📱 Move a Single Piece of Furniture Anywhere in UAE — Get Your Free Quote Now"
        desc="If you need to move just one piece of furniture anywhere in the UAE, we are your solution. Registered since 1998, fully insured, no hidden charges, and available the same day if needed. Call, WhatsApp, or fill out the form — we will get back to you with a free quote."
      />
    </main>
  );
};

export default SingleFurnitureMovers;
