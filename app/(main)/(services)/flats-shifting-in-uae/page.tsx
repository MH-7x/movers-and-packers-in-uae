import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import ServiceHero from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { AllServices, locations } from "@/lib/data";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import HeroImage from "@/public/ser/apartment-flat-shifting-dubai-uae.jpg";
import { ChevronRight, MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Flats Shifting in UAE | Fast, Affordable Flat Movers",
      desc: "Professional flats shifting in UAE by Movers and Packers in UAE. Packing, furniture disassembly, transport & setup. All emirates covered. Free quote — call now.",
    },
    image: {
      path: "/ser/apartment-flat-shifting-dubai-uae.jpg",
      alt: "Flats Shifting in UAE - Fast & Affordable Movers",
    },
    path: "/flats-shifting-in-uae",
  },
});

const FlatsShifting = () => {
  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "Flats Shifting in UAE",
        url: "/flats-shifting-in-uae",
      },
    ],
  });

  return (
    <>
      <script
        id="breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumb }}
      />
      <main>
        <Breadcrumb
          list={[
            {
              title: "Flats Shifting in UAE",
              url: "/flats-shifting-in-uae",
            },
          ]}
        />
        <ServiceHero
          title="Flats Shifting in UAE — Move Your Flat Without the Stress"
          desc="Flats shifting in UAE has its own set of challenges that house or villa moves do not. You are dealing with narrow hallways, shared elevators, parking restrictions, and building management approvals. At Movers and Packers in UAE, we have been moving people smoothly out of — and into — flats across the UAE since 1998."
          image={{
            src: HeroImage,
            alt: "Flats Shifting in UAE",
          }}
          btnText="Get a Free Flat Shifting Quote"
        />

        <section className="mt-16 max-w-4xl mx-auto md:px-0 px-4">
          <h3 className="md:text-2xl text-lg font-bold text-center">
            Expert <Link href="/flats-shifting-in-uae" className="text-primary underline underline-offset-4">flats shifting UAE</Link>. Fast, reliable, and hassle-free relocation.
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
            {[
              "Elevator Coordination",
              "Furniture Disassembly",
              "Same-Day Available",
              "Building Permits Support",
              "Fully Insured",
            ].map((t, i) => (
              <div
                key={i}
                className="bg-primary text-white text-shadow-2xs px-3 py-1.5 text-sm rounded-4xl flex items-center gap-2"
              >
                <span> ✔</span> <p>{t}</p>
              </div>
            ))}
          </div>
          <div className="md:text-lg text-muted-foreground text-center mt-10 md:px-20">
            <p>
              Whether you are shifting a studio, a 1-bedroom, or a 3-bedroom flat, our team packs everything, disassembles furniture, loads it into our trucks, drives it to your new flat, and sets everything up in your new rooms. You do not lift a finger.
            </p>
          </div>
        </section>

        <QuotationSection
          title={
            <>
              <span className="font-bold md:block">
                Professional Flats Shifting
              </span>{" "}
              With Movers and Packers in UAE
            </>
          }
          btnText="Get Flat Shifting Quote"
          desc="We know the building rules, the logistics, and the shortcuts that make flat moves faster and smoother across Dubai, Sharjah, Ajman, and every other emirate."
        />

        <div className="max-w-7xl md:px-10 mx-auto mt-20 grid lg:grid-cols-6 grid-col-1 min-h-screen gap-10">
          <div className="lg:col-span-4 flex flex-col gap-y-16 md:px-0 px-4" id="service-content">
            
            <section>
              <h2>What Makes Flat Shifting Different</h2>
              <p>Flat moves are not just "smaller house moves." They come with specific complications:</p>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-8">
                {[
                  { title: "Elevator Access", description: "Most buildings require you to book the service elevator for moving day. Our team coordinates with building management to secure access and works within the permitted time." },
                  { title: "Narrow Hallways and Doorways", description: "Large furniture does not always fit through standard doorways. Our carpenters know how to take apart and rebuild wardrobes and beds safely." },
                  { title: "Building Permits and NOCs", description: "Some buildings require a No Objection Certificate (NOC) or a moving permit from the landlord before you can move. We advise you on the documentation." },
                  { title: "Parking and Loading Zones", description: "Flat buildings often have limited truck parking. We plan our arrival to minimize congestion and use the correct loading bay." },
                  { title: "Neighbor Considerations", description: "Our crew works quickly and keeps common areas clear. We use protective floor coverings to prevent damage to building corridors." }
                ].map((feature, i) => (
                  <div key={i} className="border-b border-primary leading-tight pb-2">
                    <h3 className="mb-2! text-base!">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2>What is Included in Our Flat Shifting Service</h2>
              <ul className="list-disc pl-5 mt-4 space-y-4">
                <li><strong>Packing:</strong> We pack everything using quality cartons, bubble wrap, stretch film, and moving blankets. Check our <Link href="/packing-services-in-dubai" className="text-primary underline">packing services</Link> for details.</li>
                <li><strong>Furniture disassembly:</strong> Beds, wardrobes, dining tables, desks — anything that needs to come apart gets disassembled by our carpenters. Hardware is labeled and bagged.</li>
                <li><strong>Loading:</strong> Items are loaded into our enclosed trucks by a trained crew. Heavy items on the bottom, fragile items on top, secured to prevent shifting.</li>
                <li><strong>Transport:</strong> Our RTA-approved enclosed trucks protect your belongings from heat, dust, and sandstorms.</li>
                <li><strong>Unloading and setup:</strong> At your new flat, we carry everything in, place it where you want it, reassemble all furniture, and connect appliances.</li>
                <li><strong>Cleanup:</strong> We remove all packing materials and debris from both your old and new flat.</li>
              </ul>
            </section>

            <div className="bg-secondary rounded-3xl aspect-video relative overflow-hidden">
              <Image
                src={"/ser/apartment-moving-dubai-loading-truck.jpg"}
                alt="Flats Shifting Movers Loading Truck"
                fill
                className="object-cover"
              />
            </div>

            <section>
              <h2>Flat Shifting by Size</h2>
              <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-10">
                {[
                  { title: "Studio Apartment Shifting", desc: "One truckload with a 2-person crew. Includes bed, wardrobe, small sofa, TV unit, kitchen items, and boxes. Usually done in 3–4 hours." },
                  { title: "1-Bedroom Flat Shifting", desc: "One truck, 2–3 person crew. Adds a dining set, extra furniture, and more boxes. Typical timeline: 4–5 hours." },
                  { title: "2-Bedroom Flat Shifting", desc: "One or two trucks depending on furniture volume. 3–4 person crew. Includes full living room, bedroom sets. Timeline: 5–7 hours." },
                  { title: "3-Bedroom Flat Shifting", desc: "Usually requires two trucks and a 4–5 person crew. Full household packing, disassembly, and setup. Timeline: a full day." }
                ].map((size, i) => (
                  <div key={i} className="rounded-2xl p-5 bg-muted">
                    <h3 className="mb-0! text-xl! font-medium">{size.title}</h3>
                    <p className="mt-3 leading-tight text-muted-foreground">{size.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2>Same-Day and Urgent Flat Shifting</h2>
              <p>
                Life in the UAE moves fast. Lease cancellations with short notice, sudden job transfers, or last-minute apartment changes happen all the time. We offer same-day flat shifting for customers who need to move urgently. Call us in the morning, and we can have a crew at your flat within hours. Same-day moves are priced the same as scheduled moves — no emergency surcharges or panic pricing.
              </p>
            </section>

            <section>
              <h2>Flat Shifting Across All Emirates</h2>
              <p>
                We move flats in Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Al Ain, Umm Al Quwain, and Fujairah. We also handle inter-emirate flat shifts — moving from a flat in Sharjah to one in Dubai, or from Dubai to Al Ain. One team, one truck, one price.
              </p>
              <p className="mt-4">
                If you are looking at larger properties, we also offer <Link href="/apartment-movers-dubai" className="text-primary underline">apartment moving</Link> and full home relocation. We can also provide <Link href="/storage-services-in-uae" className="text-primary underline">storage services</Link> if there's a gap between your move dates, or <Link href="/curtain-fixing-in-uae" className="text-primary underline">curtain fixing and installation</Link> for your new place.
              </p>
            </section>

            <section>
              <h2>Why Choose Movers and Packers in UAE for Flat Shifting</h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-8">
                <div className="p-4 bg-muted rounded-xl">
                  <h3 className="font-bold mb-2">25+ years of experience</h3>
                  <p className="text-sm">We have moved thousands of flats across the UAE. We know the buildings, the roads, and the logistics.</p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <h3 className="font-bold mb-2">Registered and licensed</h3>
                  <p className="text-sm">We are a fully licensed moving company registered since 1998, not freelance movers working out of a van.</p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <h3 className="font-bold mb-2">Transparent pricing</h3>
                  <p className="text-sm">You get a quote upfront. No hidden charges for stairs, distance, or time. The price we quote is the price you pay.</p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <h3 className="font-bold mb-2">Pay upon satisfaction</h3>
                  <p className="text-sm">You pay after the move is complete and you are happy with the result.</p>
                </div>
              </div>
            </section>

          </div>

          <aside className="lg:col-span-2 flex flex-col gap-y-5 self-start sticky top-24 md:px-0 px-4">
            <div className="rounded-2xl bg-muted p-6 space-y-3">
              <h3 className="font-bold text-lg">Need Flat Shifting?</h3>
              <p className="text-sm text-muted-foreground">
                Get a fast, accurate quote for your flat move. Our team handles everything from packing to setup.
              </p>
              <div className="flex flex-col gap-2 pt-3">
                <Button callBtn className="bg-primary hover:bg-primary/90 w-full gap-2">
                  <PhoneCall size={18} />
                  Call Now
                </Button>
                <Button whatsappBtn variant="secondary" className="w-full gap-2">
                  <MessageCircle size={18} />
                  WhatsApp
                </Button>
              </div>
            </div>
            <div className="rounded-2xl bg-secondary/50 p-6">
              <h4 className="font-semibold mb-3 text-lg">OUR SERVICES</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                {AllServices.map((ser, i) => (
                  <li key={i}>
                    <Link href={ser.href} className="flex items-center gap-2">
                      <span className="text-primary"> ✔ </span>
                      {ser.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-secondary/50 p-6">
              <h4 className="font-semibold mb-3 text-lg">AREAS WE SERVE</h4>
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
          faqs={flatsShiftingFaqs}
          title="Frequently Asked Questions — Flats Shifting in UAE"
        />

        <CTA
          title="Get a Free Flat Shifting Quote"
          desc="Moving your flat should not cost a fortune or take a week to plan. Tell us your current flat size, your new location, and when you want to move. We will give you a price and a timeline on the same call."
        />
      </main>
    </>
  );
};

export default FlatsShifting;

const flatsShiftingFaqs = [
  {
    question: "How much does flat shifting cost in the UAE?",
    answer: (
      <>
        <p>A studio flat move within the same area starts from an affordable base rate.</p>
        <p>1-bedroom and larger flats are priced based on the amount of furniture and the distance. Call us for a specific quote.</p>
      </>
    )
  },
  {
    question: "Do I need permission from my building to move?",
    answer: (
      <>
        <p>Many buildings require a moving permit or NOC from the landlord.</p>
        <p>Check with your building management. We can advise you on what is typically needed.</p>
      </>
    )
  },
  {
    question: "Can you move me on the same day I call?",
    answer: (
      <>
        <p>Yes. We offer same-day flat shifting for urgent requirements.</p>
        <p>Call us as early in the day as possible, and we will arrange a crew and truck within hours.</p>
      </>
    )
  },
  {
    question: "Do you handle packing or do I need to pack myself?",
    answer: (
      <>
        <p>We handle everything. Our team packs all your items using professional materials.</p>
        <p>You do not need to pack anything yourself unless you prefer to.</p>
      </>
    )
  },
  {
    question: "What if my furniture does not fit through the door?",
    answer: (
      <>
        <p>Our carpenters disassemble large furniture items securely.</p>
        <p>They will reassemble them inside the new flat. This is included in the service at no extra charge.</p>
      </>
    )
  }
];
