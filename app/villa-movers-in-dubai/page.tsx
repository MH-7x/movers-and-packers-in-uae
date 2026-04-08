import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import ServiceHero from "@/components/ServiceHero";
import { AllServices } from "@/lib/data";
import { VillaMovingDubaiFaqs } from "@/lib/FaqsData";
import heroImage from "@/public/ser/villa-movers-in-dubai.jpg";
import { Headset, MapPinCheck, PhoneCall } from "lucide-react";
import Image from "next/image";

const VillaMoversInDubai = () => {
  return (
    <main>
      <ServiceHero
        image={{
          src: heroImage,
          alt: "Villa Movers in Dubai",
        }}
        title="Villa Movers in Dubai — Trusted, Licensed & Available 24/7"
        desc="Looking for villa movers in Dubai? At Movers and Packers UAE — registered and operating since 1998 — we handle every part of your villa relocation: from the pre-move assessment and professional packing to transport, assembly, and optional unpacking. "
        btnText="Get A Quote For Villa Moving"
      />
      <p className="max-w-4xl mx-auto mt-16 text-lg">
        With 25+ years of experience, 8 RTA-approved enclosed box trucks, and a
        fully trained team available around the clock, we make sure your move
        goes smoothly, your items arrive in perfect condition, and the price you
        agreed on is the price you pay.
      </p>

      <QuotationSection
        title={
          <>
            <span className="font-bold md:block">
              Get Free Online Estimates
            </span>{" "}
            For Your Villa Moving in Dubai
          </>
        }
        btnText="Get My Villa Moving Quote"
        desc="Moving a villa in Dubai is a big task. The right company makes it straightforward. The wrong one makes it stressful and expensive. We make it simple and stress-free. Get a free online quote from villa movers in dubai."
      />
      <div className="max-w-7xl md:px-10 mx-auto mt-20 grid lg:grid-cols-6 grid-col-1 min-h-screen gap-10">
        <div
          className="lg:col-span-4 flex flex-col gap-y-16 md:px-0 px-4"
          id="service-content"
        >
          <section>
            <h2>Why Choose a Licensed Villa Moving Company in Dubai?</h2>
            <p>
              A lot of people in Dubai try to save money by hiring freelance
              movers they find on classifieds or social media. That decision
              often turns into a costly mistake — and not just financially.
            </p>
            <p className="mt-2">
              Freelance movers have no legal permission to operate moving
              services in the UAE.{" "}
            </p>
            <p className="mt-2">
              They carry no insurance, which means if your antique cabinet gets
              scratched, your TV breaks during transit, or a piece of furniture
              simply disappears, there is nothing you can do. No contract, no
              accountability, no claim process.
            </p>
            <p className="mt-2">
              There is also the privacy issue. Villa moves involve access to
              bedrooms, storage rooms, and the most private areas of your home.
              Hiring unverified workers puts your household at risk in ways that
              are hard to undo.
            </p>
            <p className="mt-2">
              A licensed moving company in Dubai is a different category
              entirely.
            </p>
            <p className="mt-2">
              We are legally registered, our workers are vetted, trained, and
              identifiable, and every move is backed by proper documentation.
              You know exactly who is entering your home and what they are
              responsible for.
            </p>
            <h3 className="mt-5 mb-3!">
              What Sets a Registered Villa Moving Company Apart
            </h3>
            <p>
              Here is the practical difference between hiring a registered mover
              like us versus a freelance operator:
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-5">
              <div>
                <h4 className="font-bold">Registered Company:</h4>
                <ul className="mt-3 text-muted-foreground leading-tight list-disc list-inside flex flex-col gap-y-2">
                  <li>
                    Legal UAE trade license — verifiable on government records
                  </li>
                  <li>
                    Google Business profile with real reviews and a physical
                    address in Al Mankhool, Dubai
                  </li>
                  <li>
                    RTA-approved branded trucks with proper moving equipment
                  </li>
                  <li>Insured, uniformed, and bilingual team members</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold">Freelance Mover:</h4>
                <ul className="mt-3 text-muted-foreground leading-tight list-disc list-inside flex flex-col gap-y-2">
                  <li>No licence, no legal obligation to you</li>
                  <li>No insurance — if something breaks, it stays broken</li>
                  <li>Unverified workers with no background checks</li>
                  <li>
                    No accountability if items are damaged, delayed, or missing
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className="bg-secondary rounded-3xl aspect-video relative overflow-hidden">
            <Image
              src={"/ser/villa-moving-company-in-dubai-truck-outside-villa.jpg"}
              alt="villa moving company in dubai truck outside villa"
              fill
              className="object-cover"
            />
          </div>
          <section>
            <h2>Our Villa Moving Services in Dubai</h2>
            <p>
              We cover villa moves of every size across Dubai — from a compact
              2-bedroom villa in Al Barsha to a sprawling 7-bedroom compound in
              Emirates Hills.{" "}
            </p>
            <p className="mt-2">
              Our villa movers and packers in Dubai handle the full process, so
              you do not have to coordinate multiple contractors or worry about
              anything getting missed. Here is what is included:
            </p>
            <h3 className="mt-5 mb-3!">
              Pre-Move Assessment & Custom Moving Plan
            </h3>
            <p className="mt-2">
              Before moving day, we send a team member to your villa for a free
              site survey. They walk through every room, document all items,
              identify fragile or oversized pieces, check elevator access and
              parking, and note anything that needs special handling.
            </p>
            <p className="mt-2">
              From this visit, we build a room-by-room moving plan and send you
              a fully itemised quote via WhatsApp and email. Nothing is left
              vague. You know the price, the timeline, and exactly what is
              covered before we start.
            </p>
            <h3 className="mt-5 mb-3!">
              Professional Packing & High-Quality Materials
            </h3>
            <p className="mt-2">
              Packing is where most damage happens — not during transport. Our
              team uses proper materials for every item type, chosen
              specifically for Dubai&apos;s climate conditions:
            </p>
            <ul className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3">
              <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                <span className="font-medium">Fabric blankets —</span> protect
                wood and upholstered furniture from dust and heat
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                <span className="font-medium">
                  Bubble wrap and foam padding —
                </span>{" "}
                used for antiques, glassware, mirrors, and electronics
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                <span className="font-medium">Stretch film —</span> waterproofs
                items during outdoor loading and unloading
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                <span className="font-medium">Hanger boxes —</span> suits,
                dresses, and formal wear arrive without a single crease
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                <span className="font-medium">Kitchen paper wrap —</span>{" "}
                dishes, crockery, and fragile kitchenware packed safely
              </li>
            </ul>
            <p className="mt-3">
              In a city where summer temperatures hit 45°C and sandstorms are
              common, these are not optional extras — they are the standard we
              follow on every move.
            </p>

            <h3 className="mt-5">Furniture Dismantling & Reassembly</h3>
            <p>
              Large furniture pieces — beds, wardrobes, dining sets, modular
              shelving — need to be taken apart before they can be safely
              moved.{" "}
            </p>
            <p className="mt-1">
              Our team includes trained carpenters who handle dismantling
              carefully and put everything back together correctly at your new
              villa.{" "}
            </p>
            <p className="mt-1">
              We also offer curtain fixing and installation as an add-on, so you
              are fully settled in from day one.
            </p>

            <h3 className="mt-5">Safe Loading, Transport & Unloading</h3>
            <p>
              We operate RTA-approved, fully enclosed box trucks — available in
              3-ton and 4-ton capacity. The enclosed design is not just a
              preference; in Dubai it is a necessity.
            </p>
            <p className="mt-1">
              Open trucks expose your furniture and electronics to direct sun,
              extreme heat, and sand during transit. That is a real risk to
              upholstered pieces, wooden finishes, and anything with a screen or
              circuit board.
            </p>
            <p className="mt-1">
              Our enclosed trucks keep your items in a protected, shaded
              environment from loading to arrival. Every item is secured before
              the truck moves, and our drivers know Dubai&apos;s roads well.
            </p>

            <h3 className="mt-5">Unpacking & Setup at Your New Villa</h3>
            <p>
              If you want full-service, we offer an optional unpacking service.
            </p>
            <p className="mt-1">
              The team unpacks every box, places furniture according to your
              instructions, and removes all packing waste before they leave. You
              walk into a ready home — not a maze of cardboard.
            </p>
          </section>
          <section className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
              <Image
                src={"/ser/villa-moving-dubai-exterior-loading.jpg"}
                alt="Villa moving service in Dubai with professional movers loading furniture and boxes into a branded truck"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
              <Image
                src={"/ser/villa-moving-dubai-furniture-dismantling.jpg"}
                alt="Villa moving in Dubai with movers dismantling and wrapping furniture inside a luxury home"
                fill
                className="object-cover"
              />
            </div>
          </section>
          <section>
            <h2>Our Villa Moving in Dubai Process — Step by Step</h2>
            <p>
              Here is exactly what happens from the moment you contact us to the
              moment you are settled in your new villa:
            </p>
            <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-10">
              {[
                {
                  title: "Site Inspection",
                  desc: "Free visit to assess villa size, item count, fragile pieces, and parking access.",
                },
                {
                  title: "Custom Quote",
                  desc: "Transparent, itemised quote sent via WhatsApp and email — no hidden fees.",
                },
                {
                  title: "Dismantling",
                  desc: "Certified carpenters dismantle large furniture pieces and fittings.",
                },
                {
                  title: "Packing & Labelling",
                  desc: "Trained packers wrap, box, and label every item room by room and Every box is labelled with room destination for fast, accurate unloading.",
                },
                {
                  title: "Loading & Transport",
                  desc: "Fleet drives to your new villa — punctual and handled with care. Items unloaded, furniture reassembled, curtains installed.",
                },
                {
                  title: "Optional Unpacking",
                  desc: "Team unpacks boxes, places items, and clears all packing waste.",
                },
              ].map((process, i) => (
                <div key={i}>
                  <h3 className="mb-2! text-lg!">
                    <span className="text-primary">Step {i + 1}: </span>
                    {process.title}
                  </h3>
                  <p className="leading-tight">{process.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-3">
              Every step has a clear purpose. Nothing is rushed, nothing is
              skipped. That is how we have been doing it since 1998.
            </p>
          </section>
          <section>
            <h2>Villa Moving Areas We Cover in Dubai</h2>
            <p>
              We move villas across all major Dubai communities. Whether your
              area is close to the city or further out, we come to you:
            </p>
            <ul className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3 leading-tight ">
              <li className="bg-secondary py-2 px-3 rounded-2xl ">
                <span className="font-medium">Jumeirah 1, 2 & 3 —</span> classic
                villa areas with mixed street and compound layouts
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl ">
                <span className="font-medium">Emirates Hills —</span> large
                compounds with high-value residences and strict community rules
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl ">
                <span className="font-medium">Arabian Ranches 1, 2 & 3 —</span>{" "}
                gated communities where move-out coordination is required
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl ">
                <span className="font-medium">Al Barsha —</span> popular family
                villa area with easy road access
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl ">
                <span className="font-medium">Mirdif —</span> spacious villas
                with good parking and loading access
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl ">
                <span className="font-medium">
                  Damac Hills & Damac Lagoons —
                </span>{" "}
                newer developments with active villa market
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl ">
                <span className="font-medium">Palm Jumeirah —</span> signature
                island address with specific access requirements
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl ">
                <span className="font-medium">Dubai Hills Estate —</span>{" "}
                premium community with a growing villa population
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl ">
                <span className="font-medium">Nad Al Sheba —</span> large villa
                plots, often requiring bigger truck capacity
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl ">
                <span className="font-medium">The Springs & The Meadows —</span>{" "}
                well-established low-rise villa communities
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl ">
                <span className="font-medium">Al Furjan —</span> mid-range
                villas with straightforward access
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl ">
                <span className="font-medium">
                  Mohammed Bin Rashid City (MBR City) —
                </span>{" "}
                modern development with large villa units
              </li>
            </ul>
            <p className="mt-3">
              If your area is not listed, do not worry. We cover all of Dubai.
              Just give us a call and we will confirm availability right away.
            </p>
          </section>
          <section>
            <h2>Villa Moving Prices in Dubai — What to Expect</h2>
            <p>
              Most moving companies avoid talking about prices online. We do
              not. Transparent pricing is part of how we operate, and it makes
              the decision easier for you.
            </p>
            <p className="mb-10">
              Below are estimated price ranges by villa size. These are
              real-world figures based on typical moves — not a promotional
              minimum designed to get you to call:
            </p>
            {/* Desktop / Tablet View (Table) */}
            <div className="hidden md:block bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-foreground border-b border-gray-200 text-white font-semibold">
                    <th className="py-4 px-6 text-sm">Villa Size</th>
                    <th className="py-4 px-6 text-sm">Estimated Price (AED)</th>
                    <th className="py-4 px-6 text-sm">Typical Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pricingData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">
                        {row.type}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">
                        {row.cost}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {row.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View (Cards) */}
            <div className="md:hidden space-y-4">
              {pricingData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    {item.type}
                  </h3>
                  <div className="flex justify-between py-2 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      Estimated Price (AED)
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {item.cost}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      Typical Duration
                    </span>
                    <span className="text-sm text-gray-600">
                      {item.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5">
              These are estimates, not fixed figures. The actual price depends
              on a few variables: number of floors, elevator availability,
              distance between villas, the amount of packing required, and any
              add-ons like storage or curtain installation.
            </p>
            <p className="mt-2">
              When you contact us, we will give you a custom quote that accounts
              for your specific situation. What we guarantee is this: the price
              in your quote is the price you pay. No hidden charges, no surprise
              fees at the end of the job.
            </p>
          </section>
          <div className="bg-secondary rounded-3xl aspect-video relative overflow-hidden">
            <Image
              src={"/ser/villa-moving-dubai-truck-arrival.jpg"}
              alt="Branded villa moving service in Dubai with movers unloading furniture from a moving truck at a luxury villa"
              fill
              className="object-cover"
            />
          </div>
          <section>
            <h2>
              Why Movers and Packers UAE Are the{" "}
              <br className="md:block hidden" /> Best Villa Movers in Dubai
            </h2>
            <p>
              There are many moving companies in Dubai. Here is why customers
              who research properly tend to choose us — and why they come back:
            </p>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-5 mt-8">
              {[
                {
                  title: "25+ Years Experience",
                  description:
                    "Licensed and operating since 1998 — one of the oldest moving companies in the UAE.",
                },
                {
                  title: "100% Insurance Coverage",
                  description:
                    "All items insured during transit — zero financial risk to you.",
                },
                {
                  title: "Transparent Pricing",
                  description:
                    "Fixed quote sent via WhatsApp — you pay exactly what was quoted, not a dirham more.",
                },
                {
                  title: "Pay Upon Satisfaction",
                  description:
                    "Payment only after the job is complete and you are satisfied with the result.",
                },
                {
                  title: "RTA-Approved Fleet",
                  description:
                    "8 enclosed box trucks — your furniture stays protected from Dubai's heat and sandstorms.",
                },
                {
                  title: "24/7 Availability",
                  description:
                    "Same-day moves available — contact us any time, any day.",
                },
                {
                  title: "Bilingual Team",
                  description:
                    "English and Arabic-speaking staff — communication is never a problem.",
                },
                {
                  title: "Verified Google Business",
                  description:
                    "Registered Google profile with real customer reviews — fully verifiable.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="border-b border-primary leading-tight pb-2"
                >
                  <h3 className="mb-2! text-base!">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 ">
              These are not marketing claims. They are how we have built a
              25-year business in a competitive market. You can contact us or
              call us with any question before you book. We are not going
              anywhere.
            </p>
          </section>
          <section>
            <h2>Special Items We Move in Villas</h2>
            <p>
              Not every moving company has the equipment or experience to handle
              unusual or high-value items. We do. Beyond standard furniture, our
              team regularly moves:
            </p>
            <ul className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3 leading-tight">
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Pool equipment and heavy outdoor furniture
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Grand pianos and other musical instruments
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Heavy safes and vault boxes
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Industrial-grade kitchen appliances
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Antiques and fragile artwork
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Large TV screens and home cinema systems
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Gym equipment and treadmills
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Medical and hospital equipment
              </li>
            </ul>
            <p className="mt-3">
              If you have something unusual to move, tell us when you get in
              touch. We will assess it during the site survey and include the
              right handling plan in your quote.
            </p>
          </section>
          <section>
            <h2>Storage Solutions for Villa Moves in Dubai</h2>
            <p>
              Villa moves often involve a gap between your vacate date and your
              move-in date. Rather than leaving furniture with friends or paying
              for temporary accommodation just to store your belongings, we
              offer proper storage options:
            </p>
            <ul className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-3 leading-tight">
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Self-storage units available across Dubai
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Furniture storage in climate-controlled warehouses — important
                in UAE heat
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Flexible duration — daily, weekly, or monthly, depending on your
                timeline
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Every item inventoried, wrapped, and stored securely
              </li>
            </ul>
            <p className="mt-3">
              Short-term or long-term, we handle the storage as part of the
              overall move or as a standalone service. Get in touch to check
              availability and pricing.
            </p>
          </section>
        </div>

        <aside className="lg:col-span-2 border ">
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
                How We Can Help You With Your Move?
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
        title="Frequently Asked Questions About Villa Moving in Dubai"
        faqs={VillaMovingDubaiFaqs}
      />
      <CTA
        title="Get a Free Villa Moving Quote Today"
        desc="Get a free, no-obligation quote for a villa move in Dubai. We will provide an exact, itemized price based on your specific move."
      />
    </main>
  );
};

export default VillaMoversInDubai;

const pricingData = [
  {
    type: "2 Bedroom Villa",
    cost: "AED 800 – 1,500",
    duration: "Half Day (4–5 hrs)",
  },
  {
    type: "3 Bedroom Villa",
    cost: "AED 1,500 – 2,500",
    duration: "6–8 hrs",
  },
  {
    type: "4 Bedroom Villa",
    cost: "AED 2,500 – 3,500",
    duration: "Full Day",
  },
  {
    type: "5+ Bedroom Villa",
    cost: "AED 3,500 – 6,000+",
    duration: "1–2 Days",
  },
];
