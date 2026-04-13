import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import ServiceHero from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { AllServices } from "@/lib/data";
import { PackingServicesDubaiFaqs } from "@/lib/FaqsData";
import HeroImage from "@/public/ser/packing-services-in-dubai.jpg";
import { Headset, MapPinCheck, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Packing Services in Dubai | Cargo, Storage & for Moving",
  description:
    "Looking for trusted packing services in Dubai? We are a registered moving company with 25+ years of experience. Professional packers for homes, offices, villas & cargo. Transparent quotes. Pay upon satisfaction. Call or WhatsApp now.",
};

const PackingServicesInDubai = () => {
  return (
    <main>
      <ServiceHero
        title="Professional Packing Services in Dubai — Safe, Stress-Free & Fully Insured"
        desc="If you are looking for reliable packing services in Dubai, you have come to the right place. Movers and Packers UAE is a registered moving company, based in Dubai since 1998, with over 25 years of experience packing and moving thousands of homes, offices, villas, and commercial spaces across the UAE."
        image={{
          src: HeroImage,
          alt: "packing services in Dubai with movers packing and loading furniture into a truck",
        }}
        btnText="Get a Free Packing Services Quote"
      />
      <section className="mt-16 max-w-4xl mx-auto md:px-0 px-4">
        <div className="md:text-lg text-muted-foreground text-center mt-10 md:px-20">
          <p>
            Our trained packers use professional materials — from bubble wrap to
            custom wooden crates — to make sure your belongings reach their
            destination in exactly the same condition they left. No damage. No
            hidden charges. And you only pay once the job is done to your
            satisfaction.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
          {[
            "Packing Services For Moving",
            "Packing Services For Cargo",
            "Packing Services For Storage",
            "Packing Services For International Moving",
          ].map((t, i) => (
            <div
              key={i}
              className="bg-primary text-white text-shadow-2xs px-3 py-1.5 text-sm rounded-4xl flex items-center gap-2"
            >
              <span> ✔</span> <h3>{t} </h3>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-center flex-wrap gap-3 border-t-2 pt-5">
          <Button size={"lg"} className="bg-foreground">
            Get a Free Quote on WhatsApp
          </Button>
          <Button size={"lg"} variant={"secondary"}>
            Call Us Now
          </Button>
        </div>
      </section>
      <QuotationSection
        title={
          <>
            <span className="font-bold md:block">Get a Free Quote For </span>
            Packing Services in Dubai
          </>
        }
        btnText="Get packing services quote"
        desc="Need packing services in dubai for moving, storage, or cargo? Call or WhatsApp us now. we have train and expert crew members which can pack your item and furniture with care and safety."
      />
      <div className="max-w-7xl md:px-10 mx-auto mt-20 grid lg:grid-cols-6 grid-col-1 min-h-screen gap-10">
        <div
          className="lg:col-span-4 flex flex-col gap-y-16 md:px-0 px-4"
          id="service-content"
        >
          <section>
            <h2>Why Hire Professional Packing Services in Dubai?</h2>
            <p>
              Most people underestimate how much can go wrong during a move —
              especially in Dubai. Summer temperatures regularly exceed 45°C,
              and sandstorms can show up without much warning. If your items are
              not properly packed and protected, the results can be costly.
            </p>
            <p className="mt-2">
              DIY packing with grocery bags and old newspapers is a gamble.
              Furniture gets scratched. Electronics overheat or get damaged by
              dust. Glassware breaks because it wasn&apos;t cushioned properly.
            </p>
            <p className="mt-2">
              And when you are already managing a move, the last thing you want
              is to open boxes and find broken belongings.
            </p>
            <p className="mt-2">
              That&apos;s where professional packing and moving services make a
              real difference:
            </p>
            <ul className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3 leading-tight">
              <li className="bg-secondary py-3 px-4 rounded-2xl">
                ✔ Reduces the risk of damage or breakage during transit
              </li>
              <li className="bg-secondary py-3 px-4 rounded-2xl">
                ✔ Our team can pack an entire apartment in a few hours — you
                save days of effort
              </li>
              <li className="bg-secondary py-3 px-4 rounded-2xl">
                ✔ Every box is labeled by room and fragility level — unpacking
                becomes organized and easy
              </li>
              <li className="bg-secondary py-3 px-4 rounded-2xl">
                ✔ Fragile, heavy, and high-value items are handled by trained
                staff who do this daily
              </li>
              <li className="bg-secondary py-3 px-4 rounded-2xl">
                ✔ 100% insurance coverage is included — your belongings are
                protected from start to finish
              </li>
              <li className="bg-secondary py-3 px-4 rounded-2xl">
                ✔ No hidden charges — the price you are quoted is exactly what
                you pay, nothing more
              </li>
              <li className="bg-secondary py-3 px-4 rounded-2xl">
                ✔ Pay upon satisfaction — you only pay once the job is completed
                and you are happy with it
              </li>
            </ul>
            <p className="mt-5">
              And that last point is something no competitor in Dubai currently
              offers. We stand behind our work.
            </p>
          </section>
          <div className="bg-secondary rounded-3xl aspect-video relative overflow-hidden">
            <Image
              src={"/ser/packing-services-by-movers-and-packers-in-uae.jpg"}
              alt="packing services in dubai by movers and packers in uae"
              fill
              className="object-cover"
            />
          </div>
          <section>
            <h2>Our Complete Packing and Moving Services in Dubai</h2>
            <p>
              We provide full and partial packing solutions for every type of
              move — residential or commercial, local or international. Whether
              you need someone to pack a single item or an entire warehouse, we
              can handle it.
            </p>
            <h3 className="mt-5">Full Home & Apartment Packing Services</h3>
            <div className="flex flex-col gap-y-1">
              <p>
                Moving your apartment or house is a big job. There are kitchen
                items wrapped in layers of grease and memories, fragile décor
                you&apos;ve collected over the years, electronics, clothing, and
                furniture — all in one place. Our team handles it all.
              </p>
              <p>
                We pack room by room, starting with the least-used spaces and
                working through to the essentials. Every item is wrapped and
                cushioned based on what it is and how it needs to be
                transported.{" "}
              </p>
              <p>
                Boxes are labeled by room and contents, so when you arrive at
                your new place, you know exactly where everything goes.
                Furniture is dismantled by our certified carpenters where needed
                and reassembled at your new location.
              </p>
              <p>
                This service works well for apartments, flats, and houses across
                Dubai and all emirates. It covers home shifting and full house
                moving from start to finish.
              </p>
            </div>
            <h3 className="mt-5">Villa Packing Services</h3>
            <div className="flex flex-col gap-y-1">
              <p>
                Villas come with their own challenges — chandeliers, large
                paintings, outdoor furniture, gym equipment, garden tools, and
                custom fixtures that need extra care. Standard packing materials
                are not always enough.
              </p>
              <p>
                For villa moves, we use reinforced carton boxes, thick padded
                furniture blankets, foam rolls, and custom-built wooden crates
                for anything fragile or unusually shaped. Every item is
                individually assessed before a packing method is chosen.
              </p>
              <p>
                We also recommend our fully enclosed box trucks for villa moves
                — they protect your belongings from Dubai&apos;s summer heat and
                sandstorm dust in a way that an open truck simply cannot.
              </p>
            </div>
            <h3 className="mt-5">Office & Commercial Packing Services</h3>
            <div className="flex flex-col gap-y-1">
              <p>
                Commercial packing requires a different level of precision.
                Computers, monitors, servers, and confidential documents cannot
                be thrown into a box and hoped for the best. Department
                organization matters. Downtime matters.
              </p>
              <p>
                Our office packing team works systematically. Electronics are
                wrapped in anti-static material. Servers and devices go into
                heavy-duty padded cartons. Files and documents are boxed by
                department with clear labels. Furniture is dismantled and
                protected for transport.
              </p>
              <p>
                We also pack for banks, hospitals, schools, and restaurants —
                sectors that require professional handling and full legal
                accountability. As a registered moving company, we carry the
                permissions required for commercial moves. Freelance movers do
                not. That is a risk no business should take.
              </p>
            </div>
            <h3 className="mt-5">
              Furniture Packing — Single Item to Full Warehouse
            </h3>
            <div className="flex flex-col gap-y-1">
              <p>
                Not every move is a full relocation. Sometimes you just need to
                move a single sofa, a dining table, or a heavy safe. We offer
                single furniture moving with the same level of care we give to
                full-home moves.
              </p>
              <p>
                For larger operations — warehouses, industrial equipment,
                machinery — our team has the experience and equipment to handle
                it. We have moved heavy safes, industrial machinery, and
                warehouse-scale inventory across UAE. If you need it moved, we
                can pack it.
              </p>
            </div>
            <h3 className="mt-5">Cargo Packing Services</h3>
            <div className="flex flex-col gap-y-1">
              <p>
                Shipping items by sea or air is different from a local move.
                Packages need to hold up against pressure changes, humidity,
                vibration, and long transit times. That calls for export-grade
                cargo packing.
              </p>
              <p>
                We use moisture-resistant wrapping, vacuum sealing for sensitive
                items, heat-treated wooden crates, and internationally compliant
                labeling for all cargo shipments. Every package is built to
                survive the journey — whether it is going to another emirate or
                another country.
              </p>
            </div>
            <h3 className="mt-5">Packing for Storage</h3>
            <div className="flex flex-col gap-y-1">
              <p>
                When you are putting items into self storage or furniture
                storage — whether for a few weeks or several months — packing
                matters just as much as it does for moving.
              </p>
              <p>
                We use dust-proof wrapping, double-layer protection for fragile
                items, and moisture-resistant sealing to keep your belongings
                clean and safe while in storage. Everything is labeled clearly
                so retrieval is easy. This service pairs well with our storage
                facilities if you need a place to keep your items while you are
                between locations.
              </p>
            </div>
            <h3 className="mt-5">Fragile & Specialty Item Packing</h3>
            <div className="flex flex-col gap-y-1">
              <p>
                Some items need more than just bubble wrap. Antiques, mirrors,
                glassware, artwork, musical instruments, luxury décor — these
                require a specific approach.
              </p>
              <p>
                We assess each fragile item individually before deciding how to
                pack it. Layers of bubble wrap, foam sheets, padded corner
                guards, and custom wooden crates are used based on the
                item&apos;s value, size, and fragility. If it matters to you, it
                matters to us.
              </p>
            </div>
          </section>
          <section>
            <h2>Professional Packing Materials We Use</h2>
            <p>
              The quality of packing materials directly affects how safe your
              belongings are during a move. We do not cut corners here. Our team
              arrives with everything needed — you do not have to buy or arrange
              a single thing.
            </p>
            <p className="mt-">Here is what we bring:</p>
            <ul className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3 leading-tight">
              <li className="bg-secondary py-3 px-4 rounded-2xl">
                <span className="font-medium">Heavy-duty carton boxes</span> in
                multiple sizes — matched to the type and volume of items
              </li>
              <li className="bg-secondary py-3 px-4 rounded-2xl">
                <span className="font-medium">Bubble wrap</span> for fragile and
                delicate items — glassware, electronics, décor
              </li>
              <li className="bg-secondary py-3 px-4 rounded-2xl">
                <span className="font-medium">Stretch film / plastic wrap</span>{" "}
                for protecting furniture surfaces from scratches
              </li>
              <li className="bg-secondary py-3 px-4 rounded-2xl">
                <span className="font-medium">Foam rolls and foam sheets</span>{" "}
                for cushioning and gap-filling inside boxes
              </li>
              <li className="bg-secondary py-3 px-4 rounded-2xl">
                <span className="font-medium">
                  Padded fabric furniture blankets
                </span>{" "}
                for sofas, beds, wardrobes, and large items
              </li>
              <li className="bg-secondary py-3 px-4 rounded-2xl">
                <span className="font-medium">Anti-scratch corner guards</span>{" "}
                for tables, frames, and edged furniture
              </li>
              <li className="bg-secondary py-3 px-4 rounded-2xl">
                <span className="font-medium">Anti-static wrapping</span>{" "}
                specifically for electronics and sensitive equipment
              </li>
              <li className="bg-secondary py-3 px-4 rounded-2xl">
                <span className="font-medium">Custom wooden crates</span> for
                high-value items, antiques, or unusually shaped pieces
              </li>
              <li className="bg-secondary py-3 px-4 rounded-2xl">
                <span className="font-medium">
                  Moisture-resistant and dust-proof sealing materials
                </span>{" "}
                important in Dubai&apos;s climate
              </li>
              <li className="bg-secondary py-3 px-4 rounded-2xl">
                <span className="font-medium">
                  Color-coded labels and room-specific box tags
                </span>{" "}
                so unpacking is organized, not chaotic
              </li>
            </ul>
            <p className="mt-5">
              And our RTA-approved, fully enclosed box trucks keep everything
              protected during transit. In a city where summer temperatures stay
              above 45°C for months, and sandstorms are a regular reality, an
              open truck is a genuine risk. Our enclosed trucks are not an
              upgrade — they are the standard.
            </p>
          </section>
          <section>
            <h2>How Our Packing Process Works — Step by Step</h2>
            <p>
              There is no mystery to how we operate. Here is exactly what
              happens when you book our packing and moving services:
            </p>
            <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-10">
              {[
                {
                  title: "Free Inspection & Quote",
                  desc: "Contact us on WhatsApp or by phone. Tell us what you need to move. We assess and give you a clear, itemized quote with no surprises.",
                },
                {
                  title: "Schedule Your Packing Day",
                  desc: "Pick a date that works for you. If you need same-day service, we will work around your timeline.",
                },
                {
                  title: "Team Arrives with All Materials",
                  desc: "Our packers show up on time with everything they need. You do not have to prepare a thing.",
                },
                {
                  title: "Furniture Dismantling",
                  desc: "Where needed, our certified carpenters dismantle furniture safely and systematically.",
                },
                {
                  title: "Item-by-Item Packing",
                  desc: "Each item is wrapped and packed based on its fragility, size, and how far it is traveling.",
                },
                {
                  title: "Systematic Labeling",
                  desc: "Every box is labeled by room, contents, and fragility level. Loading and unpacking both become faster and easier.",
                },
                {
                  title: "Safe Loading onto Our Enclosed Truck",
                  desc: " Items are carefully loaded and secured inside our RTA-approved covered box trucks.",
                },
                {
                  title: "Delivery, Unloading & Optional Unpacking",
                  desc: "We deliver to your new location, unload, reassemble furniture, and can unpack if you want that service too.",
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
            <p className="mt-5">
              Every step is managed by our team. You are updated throughout the
              process.
            </p>
          </section>
          <section className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
              <Image
                src={"/ser/packing-services-dubai-professional-boxing.jpeg"}
                alt="Packing services in Dubai with professional movers packing household items into boxes safely"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
              <Image
                src={"/ser/packing-services-dubai-bubble-wrap-labeling.jpeg"}
                alt="Packing services in Dubai with movers using bubble wrap and labeling boxes for secure relocation"
                fill
                className="object-cover"
              />
            </div>
          </section>
          <section>
            <h2>Who We Provide Packing Services For in Dubai</h2>
            <p>
              Our packing services are not limited to one type of customer. We
              work with individuals and businesses across the UAE. Here is who
              we regularly pack for:
            </p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-8">
              {[
                {
                  title: "Families & Individuals",
                  description: " Apartments, flats, and villas of all sizes",
                },
                {
                  title: "Offices & Corporate",
                  description:
                    "From a small office to a multi-floor commercial space",
                },
                {
                  title: "Hospitals & Clinics ",
                  description:
                    "Sensitive medical equipment and hospital furniture",
                },
                {
                  title: "Banks",
                  description:
                    "High-security packing for valuable and confidential commercial assets",
                },
                {
                  title: "Schools ",
                  description:
                    "Classroom furniture, library collections, and school equipment",
                },
                {
                  title: "Restaurants ",
                  description:
                    "Kitchen equipment, fixtures, countertops, and décor",
                },
                {
                  title: "Warehouses & Industrial",
                  description: "Machinery, heavy safes, large-scale equipment",
                },
                {
                  title: "Expats & New Arrivals",
                  description:
                    "Just arrived in the UAE and need to move quickly? We handle urgent and same-day packing",
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
            <p className="mt-5">
              If you are a business owner, hiring a legally registered packing
              and moving company is not optional — it is a protection. Freelance
              movers operate without official permits, which means if something
              goes wrong with your equipment or assets, you have very little
              recourse. We are registered, insured, and accountable.
            </p>
          </section>
          <section>
            <h2>How Much Do Packing Services in Dubai Cost?</h2>
            <p>
              This is the question almost everyone has, and almost no packing
              company in Dubai answers it properly. So here is a straight
              answer.
            </p>
            <p className="mt-2">
              Packing service costs in Dubai are not fixed. They depend on:
            </p>
            <ul className="text-muted-foreground mt-5 list-disc list-inside leading-tight">
              <li>
                <b>Volume of items —</b> A studio apartment costs less to pack
                than a four-bedroom villa
              </li>
              <li>
                <b>Type of packing required —</b> Standard packing, fragile
                specialty packing, and export-grade cargo packing each carry
                different material and labour costs
              </li>
              <li>
                <b>Additional services —</b> Unpacking, storage, furniture
                reassembly, curtain installation
              </li>
              <li>
                <b>Distance —</b> A move within Dubai is priced differently from
                a move to Abu Dhabi or Ras Al Khaimah
              </li>
            </ul>
            <p className="mt-5">
              What we promise is this: the quote you receive is the price you
              pay. If we quote you 1,000 AED, you pay 1,000 AED. No last-minute
              additions. No surprise charges when the job is done.
            </p>
            <p className="mt-2">
              We accept cash after job completion, online bank transfer, and
              bank cheque. And because we stand behind our work, you pay upon
              satisfaction — once the move is complete and you are happy with
              the result.
            </p>
            <p className="mt-2 mb-5">
              To get an accurate quote for your specific move, contact us on
              WhatsApp or call us directly. Describe what you need and we will
              send you a clear, itemized quote within a short time. No
              obligation.
            </p>
            <Link href={"#"} className=" font-bold">
              Get Your Free Packing Quote on WhatsApp — It Takes Less Than 2
              Minutes
            </Link>
          </section>
          <section>
            <h2>Why Customers in Dubai Trust Us with Their Packing</h2>
            <p>
              We have been doing this since 1998. That is more than 25 years of
              completed moves across the UAE — a track record that most moving
              companies in Dubai simply do not have.
            </p>
            <p>Here is what makes working with us different:</p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-8">
              {[
                {
                  title: "25+ Years in Business",
                  description: "Registered and operating since 1998",
                },
                {
                  title: "Thousands of Completed Moves",
                  description: "Across all seven emirates",
                },
                {
                  title: "100% Insurance Coverage",
                  description: "Included on every move, no extra charge",
                },
                {
                  title: "Zero Hidden Charges",
                  description: "Ever. The quoted price is the final price",
                },
                {
                  title: "Pay Upon Satisfaction ",
                  description:
                    "You pay after the job is done and you are satisfied",
                },
                {
                  title: "Bilingual Team ",
                  description:
                    "English and Arabic spoken — no communication gaps",
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
            <p className="mt-5">
              We built this company on the principles of Protection and Privacy.
              That matters particularly when strangers are entering your home to
              pack bedroom and kitchen items. Our team is trained, professional,
              and fully vetted.
            </p>
            <p className="mt-2">
              And if you want to meet the owner before confirming the booking,
              that door is open. No moving company should be a leap of faith.
            </p>
          </section>
          <section>
            <h2>Packing and Moving Services Across All UAE Emirates</h2>
            <p>
              Our packing and moving services are not limited to Dubai. We cover
              all seven emirates and can be reached from anywhere in the UAE by
              a single call or WhatsApp message.
            </p>
            <h3 className="mt-5">Areas and Emirates We Serve:</h3>
            <ul className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3 leading-tight text-sm">
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                {" "}
                Packing Services in Dubai
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                {" "}
                Packing Services in Abu Dhabi
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                {" "}
                Packing Services in Sharjah
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                {" "}
                Packing Services in Ajman
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                {" "}
                Packing Services in Ras Al Khaimah
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                {" "}
                Packing Services in Al Ain
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                {" "}
                Packing Services in Fujairah
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                {" "}
                Packing Services in Umm Al Quwain
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                {" "}
                Packing Services in Khor Fakkan
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                {" "}
                Packing Services in Al Ruwais
              </li>
            </ul>
            <p className="mt-5">
              Whether you are moving across the street or from one emirate to
              another, we coordinate the full move — packing, transport, and
              delivery.
            </p>
          </section>
          <section>
            <h2>Smart Packing Tips Before Moving Day in Dubai</h2>
            <p>
              If you are handling some of the packing yourself, or just want to
              be prepared before our team arrives, these tips are specific to
              moving in the UAE — not generic advice you&apos;ll find anywhere.
            </p>
            <h3 className="mt-5">UAE-Specific Packing Tips</h3>
            <ul className="text-muted-foreground mt-5 list-disc list-inside leading-tight flex flex-col gap-y-1">
              <li>
                <strong>Start with the rooms you use least.</strong> Guest
                rooms, storage rooms, and rarely-used cabinets should be packed
                1–2 weeks before your move date. Leave daily essentials for
                last.
              </li>
              <li>
                <strong>
                  Never pack electronics without anti-static protection.
                </strong>{" "}
                Dubai&apos;s summer humidity, combined with air conditioning,
                creates static buildup that can damage sensitive components. Use
                anti-static bags or wrap before boxing.
              </li>
              <li>
                <strong>
                  Use sealed, moisture-resistant bags for clothing and soft
                  items.
                </strong>{" "}
                Sandstorm dust is fine enough to get through gaps in boxes.
                Sealed bags keep soft items clean during transport.
              </li>
              <li>
                <strong>Label boxes on the side, not the top.</strong> When
                boxes are stacked, you can only see the sides. Side labels save
                a lot of time during unloading.
              </li>
              <li>
                <strong>Pack a &quot;first-night kit&quot; separately.</strong>{" "}
                Keep one bag with chargers, important documents, a change of
                clothes, toiletries, and any medications. This stays with you —
                not in the truck.
              </li>
              <li>
                <strong>Match box size to item weight.</strong> Heavy items like
                books and crockery go in small boxes. Light items like bedding
                and pillows go in large ones. Mixing this up leads to boxes that
                are too heavy to carry safely.
              </li>
              <li>
                <strong>
                  Photograph electronic setups before dismantling.
                </strong>{" "}
                A quick photo of the back of your TV unit, computer desk, or
                sound system saves considerable frustration when you are setting
                everything up again.
              </li>
            </ul>
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
        title="Frequently Asked Questions About Packing Services in Dubai"
        faqs={PackingServicesDubaiFaqs}
      />
      <CTA
        title="Book Your Professional Packing Service in Dubai Today"
        desc="Reaching us is simple. You can WhatsApp us, call us, or fill in the quote form on our website — and we will get back to you quickly with a clear, honest quote. We serve all of Dubai and every other emirate in the UAE. Same-day service is available when you need it."
      />
    </main>
  );
};

export default PackingServicesInDubai;
