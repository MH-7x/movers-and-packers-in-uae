import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import { LocHeroSection } from "@/components/LocHeroSection";
import QuotationSection from "@/components/QuotationSection";
import { Button } from "@/components/ui/button";
import { RasAlKhaimahMovingFAQs } from "@/lib/FaqsData";
import heroImage from "@/public/loc/movers-in-ras-al-khaimah-professional-moving-service-villa-hajar-mountains.jpg";
import { ChevronDown, ChevronRight, MessageCircle } from "lucide-react";
import Image from "next/image";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers in Ras Al Khaimah | RAK Moving Company",
      desc: "Trusted movers in Ras Al Khaimah. Serving UAE families & businesses since 1998. Enclosed trucks & pay-after-completion. Get a free WhatsApp quote today!",
    },
    image: {
      path: "/loc/movers-in-ras-al-khaimah-professional-moving-service-villa-hajar-mountains.jpg",
      alt: "Professional movers in Ras Al Khaimah with branded uniforms and company equipment moving household items and furniture from modern villa - expert moving and packing services",
    },
    path: "/movers-in-ras-al-khaimah",
  },
});

const page = () => {
  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "Movers in Ras Al Khaimah",
        url: "/movers-in-ras-al-khaimah",
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
        <Breadcrumb list={[
      {
        title: "Movers in Ras Al Khaimah",
        url: "/movers-in-ras-al-khaimah",
      },
    ]} />
        <LocHeroSection
          h1={
            <>
              Movers in Ras Al Khaimah <br className="block" />
              <span className="font-normal">
                Trusted RAK Movers and Packers
              </span>
            </>
          }
          desc={
            <>
              <p>
                If you need movers in Ras Al Khaimah, the first thing you want
                to know is whether the company is legitimate — not a freelancer
                operating from a phone number who disappears once the job is
                done.
              </p>
              <p>
                Movers and Packers in UAE has been registered and running since
                1998. We have completed thousands of moves across RAK and all
                seven emirates: family homes, villas, offices, single-item
                furniture jobs, and large commercial relocations.
              </p>
            </>
          }
          id="movers-in-ras-al-khaimah"
          img={{
            src: heroImage,
            alt: "Movers in Ras Al Khaimah professional team loading wrapped furniture and boxes into a branded moving truck outside a residential villa in Ras Al Khaimah with the Hajar Mountains in the background",
          }}
        />
        <section className="mt-20 max-w-4xl mx-auto md:px-0 px-4">
          <h3 className="md:text-2xl text-xl font-bold text-center">
            Professional movers and packers in Ras Al Khaimah for homes, villas,
            offices, and furniture. Enclosed trucks. Pay after completion. Free
            WhatsApp quote.
          </h3>
          <p className="text-center mt-5 text-muted-foreground">
            As movers and packers in Ras Al Khaimah, we use fully enclosed box
            trucks, send itemised quotes on WhatsApp before anything starts, and
            you pay only after the move is complete and you are satisfied. That
            is how we have worked for over 25 years to ensure a stress free relocation.
          </p>
        </section>
        <QuotationSection
          title={
            <>
              <span className="font-bold md:block">Get A Moving Quote</span>{" "}
              From Movers and Packers in Ras Al Khaimah
            </>
          }
          btnText="Get A Quote From RAK Movers"
          desc="Call us or send a WhatsApp message for a free quote — our movers and packers in ras al khaimah will get back to you quickly with a clear, fixed price. We handle everything, from packing and loading to transport and installation. "
        />

        <section
          id="movers-and-packers-in-ajman-services"
          className="mt-20 max-w-7xl md:px-10 px-4 mx-auto"
        >
          <div className="bg-foreground rounded-2xl md:p-10 px-4 py-10 grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-8">
            <div>
              <p className="uppercase border-b border-primary text-gray-200 w-max">
                Our Moving Services
              </p>
              <h2 className="md:text-4xl text-3xl text-white mt-3">
                Our Moving and Packing{" "}
                <span className="font-bold md:block">
                  Services in Ras Al Khaimah
                </span>{" "}
              </h2>
            </div>
            <div>
              <p className="text-gray-200">
                We cover every type of move. Whether you are shifting a studio
                apartment, relocating a 6-bedroom villa, or moving an entire
                office, our team handles it. Below is what our movers and
                packers in Ras Al Khaimah provide.
              </p>
              <Button
                link={"/moving-services"}
                variant={"secondary"}
                className="mt-5"
              >
                View All Services <ChevronRight />
              </Button>
            </div>
          </div>
          <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 md:gap-5 gap-8">
            {[
              {
                id: "home-movers-in-ras-al-khaimah",
                name: "Home Movers in Ras Al Khaimah",
                description: (
                  <>
                    <p>
                      Moving house involves more coordination than most people
                      expect. Our team manages the entire process: packing,
                      dismantling furniture, safe loading, transport, unloading,
                      and reassembling everything at the new property.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      For <Link href="/house-shifting-dubai">home movers</Link>{" "}
                      in Ras Al Khaimah, we also deal with the move-out permit
                      process that many RAK buildings and gated communities
                      require — so that paperwork is sorted before moving day,
                      not on it.
                    </p>
                    <p>
                      Our enclosed trucks matter here too. RAK summers reach
                      above 45°C. An open flatbed truck exposes mattresses,
                      sofas, and electronics to direct heat during the drive.
                    </p>
                    <p>
                      Our trucks are fully sealed, so your items travel
                      protected from heat and dust regardless of the season.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/home-movers-ras-al-khaimah-full-house-shifting-service.jpg",
                  alt: "Movers and Packers in UAE team carrying a wrapped sofa and labeling boxes during a complete home moving service inside a Ras Al Khaimah residential house",
                },
              },
              {
                id: "villa-movers-in-ras-al-khaimah",
                name: "Villa Movers in Ras Al Khaimah",
                description: (
                  <>
                    <p>
                      <Link href="/villa-movers-in-dubai">Villa moving</Link>{" "}
                      are bigger operations and need proper planning. Our team
                      packs room by room, wraps fragile items — glass, mirrors,
                      artwork — separately, and handles bulky pieces like
                      wardrobes and dining tables with the right equipment.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      We have direct experience with gated communities in RAK
                      including Al Hamra Village and Mina Al Arab, where move-in
                      permits and access rules require coordination in advance.
                    </p>
                    <p>We handle all of that before the crew arrives.</p>
                  </>
                ),
                img: {
                  src: "/loc/villa-movers-ras-al-khaimah-gated-community-al-hamra-relocation.jpg",
                  alt: "Movers and Packers in UAE team carrying a wrapped wardrobe downstairs and dismantling bedroom furniture during a large villa move in a Ras Al Khaimah gated community",
                },
              },
              {
                id: "apartment-movers-in-ras-al-khaimah",
                name: "Apartment Movers in Ras Al Khaimah",
                description: (
                  <>
                    <p>
                      <Link href="/apartment-movers-dubai">
                        Apartment moves
                      </Link>{" "}
                      have their own complications: elevator booking windows,
                      tight corridors, parking restrictions, and
                      building-specific rules. We deal with all of this before
                      the moving day.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      Whether it is a studio or a 3-bedroom apartment, our team
                      works efficiently without scratching walls or damaging
                      floors.
                    </p>
                    <p>
                      If your building requires a move-in or move-out permit, we
                      will handle that too.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/apartment-movers-ras-al-khaimah-elevator-building-relocation.jpg",
                  alt: "Movers and Packers in UAE team efficiently moving wrapped furniture through an elevator corridor inside a Ras Al Khaimah residential apartment building",
                },
              },
              {
                id: "office-movers-in-ras-al-khaimah",
                name: "Office Movers in Ras Al Khaimah",
                description: (
                  <>
                    <p>
                      <Link href="/office-movers-in-dubai">
                        Office relocation
                      </Link>{" "}
                      in Ras Al Khaimah requires a different level of planning
                      than a home move. You have workstations, IT equipment,
                      filing systems, and confidential documents — and any
                      significant downtime costs you money.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      We can work evenings or weekends to keep your operations
                      running normally. Everything is labelled, packed
                      systematically, and reassembled at the new location.
                    </p>
                    <p>
                      We have experience with office relocation in RAK Free Zone
                      (RAKEZ) and commercial districts across the city.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/office-movers-ras-al-khaimah-rakez-commercial-relocation-after-hours.jpg",
                  alt: "Movers and Packers in UAE team packing workstations, IT equipment, and office furniture during a professional after-hours office relocation in Ras Al Khaimah",
                },
              },
              {
                id: "furniture-movers-in-ras-al-khaimah",
                name: "Furniture Movers in Ras Al Khaimah",
                description: (
                  <>
                    <p>
                      Not every job is a full house move. If you need to move a
                      single sofa, a bed, a wardrobe, or a set of office chairs,
                      we handle that too.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      Our{" "}
                      <Link href="/furniture-moving-services-uae">
                        furniture movers
                      </Link>{" "}
                      in Ras Al Khaimah wrap every item with protective
                      materials, dismantle where needed, and reassemble at the
                      destination.
                    </p>
                    <p>
                      The price depends on the item and distance. Just send us
                      the details on WhatsApp and we will give you a quote the
                      same day.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/furniture-movers-ras-al-khaimah-single-item-bed-moving-service.jpg",
                  alt: "Movers and Packers in UAE team carefully loading a dismantled and wrapped king-size bed into a branded van outside a Ras Al Khaimah residential villa",
                },
              },
              {
                id: "packing-services-in-ras-al-khaimah",
                name: "Packing Services in Ras Al Khaimah",
                description: (
                  <>
                    <p>
                      If you would rather not pack yourself, our team takes care
                      of it. We bring everything: labelled cartons, bubble wrap,
                      stretch film, protective pads, clothing boxes, and
                      separate packaging for kitchen items and fragile goods.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      You can request a full pack — where we handle everything —
                      or a partial pack for just the items you want us to take
                      care of.
                    </p>
                    <p>
                      Either way, nothing is loaded onto the truck unless it is
                      properly protected.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/packing-services-ras-al-khaimah-professional-home-packing-fragile.jpg",
                  alt: "Movers and Packers in UAE team professionally packing fragile items, glassware, and clothes with bubble wrap and branded materials inside a Ras Al Khaimah home",
                },
              },
              {
                id: "storage-services-in-ras-al-khaimah",
                name: "Storage Services in Ras Al Khaimah",
                description: (
                  <>
                    <p>
                      Not every move goes directly from one address to another.
                      If you are between tenancies, going through a renovation,
                      or need temporary storage for furniture, we have you
                      covered.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      Our storage service in Ras Al Khaimah is available for
                      both short-term and long-term needs.
                    </p>
                    <p>
                      Items are stored securely and can be delivered to you when
                      you are ready.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/storage-services-ras-al-khaimah-secure-furniture-storage-facility.jpg",
                  alt: "Movers and Packers in UAE team member carefully organizing labeled boxes and wrapped furniture inside a clean secure storage facility in Ras Al Khaimah",
                },
              },
              {
                id: "curtain-installation-in-ras-al-khaimah",
                name: "Curtain Installation in Ras Al Khaimah",
                description: (
                  <>
                    <p>
                      Once the move is finished, there is still the job of
                      setting up the new place. Our team can install curtains
                      and curtain rods the same day as your move.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      This saves you the hassle of finding a separate handyman
                      after you have already been through a move. It is a
                      service most moving companies in RAK do not offer.
                    </p>
                    <p>
                      Ask about it when you get in touch and we will include it
                      in your quote.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/curtain-installation-service-ras-al-khaimah-moving-company-same-day.jpg",
                  alt: "Movers and Packers in UAE handyman installing curtain rods and curtains in a freshly moved-into Ras Al Khaimah villa living room with Hajar Mountains visible through the window",
                },
              },
            ].map((item, i) => (
              <div
                key={i}
                id={item.id}
                className={`rounded-2xl p-5 bg-white border `}
              >
                <div className="relative aspect-video bg-white rounded-xl overflow-hidden">
                  <Image
                    src={item.img.src}
                    alt={item.img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold">{item.name}</h3>
                <div className="mt-3 text-muted-foreground flex flex-col gap-y-2 leading-tight">
                  {item.description}
                </div>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="mt-3 flex gap-x-1 items-center text-primary cursor-pointer">
                    See more <ChevronDown size={18} />
                  </summary>
                  <div className="mt-3 text-muted-foreground flex flex-col gap-y-2 leading-tight">
                    {item.extra}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto mt-20 md:px-10 px-4">
          {/* Main Header Section */}
          <div className="text-center mb-10 max-w-4xl mx-auto">
            <h2 className="md:text-4xl text-3xl font-bold mb-6">
              <span className="font-normal block">Why Choose </span> Movers and
              Packers UAE in Ras Al Khaimah
            </h2>
            <p className="text-muted-foreground">
              There are a number of moving companies in RAK. Here is what makes
              a real difference.
            </p>
          </div>

          {/* CSS Grid Section - 1 col on mobile, 2 cols on lg screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl py-8 px-5 sm:p-10 flex flex-col "
              >
                {/* Decorative Accent Line */}
                <div className="w-12 h-1.5 bg-primary rounded-full mb-6"></div>

                {/* Card Content */}
                <div className="grow">
                  <h3 className="md:text-2xl text-xl font-bold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-5">{feature.desc}</p>
                </div>

                {/* Action Link positioned at the bottom */}
                <div className="mt-auto pt-5 border-t border-slate-100">
                  <button className="text-primary font-semibold inline-flex items-center text-sm uppercase tracking-wide ">
                    {feature.buttonText}
                    <span className="ml-2  text-lg leading-none">&rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl w-full mx-auto mt-20 md:px-20 px-4">
          {/* Header Section */}
          <div className=" pb-8  border-b border-gray-50">
            <h2 className="text-3xl sm:text-4xl font-bold  mb-6">
              What Affects Moving Costs
              <br className="hidden sm:block" />
              <span className="font-normal"> in Ras Al Khaimah</span>
            </h2>
            <p className=" text-muted-foreground max-w-3xl">
              We do not publish fixed prices because no two moves are the same.
              A studio apartment in Al Nakheel and a 5-bedroom villa in Al Hamra
              Village are completely different jobs. Here is what typically
              influences the cost:
            </p>
          </div>

          {/* Grid Section */}

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {costFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <li key={index} className="flex items-start group">
                  <div
                    className={`shrink-0 w-12 h-12 rounded-2xl ${factor.bgColor} ${factor.color} flex items-center justify-center  shadow-sm`}
                  >
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {factor.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Call to Action Section */}
          <div className="px-6 py-8 sm:px-12 sm:py-10">
            <div className="bg-linear-to-br from-red-50 to-red-100 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Get Your Itemised Quote
                </h4>
                <p className="text-muted-foreground text-base mb-1">
                  Contact us on WhatsApp with your move details and we will send
                  you a quote within the hour.
                </p>
              </div>

              <a
                href={
                  "https://wa.me/+971507745691?text=I%20Come%20From%20Your%20Website%20and%20I%20Need%20Moving%20Services"
                }
                aria-label="Get A Quote On WhatsApp"
                rel="noopener noreferrer"
                target="_blank"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-xl hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/90 shadow-lg shadow-red-500/30 hover:shadow-red-500/40 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </section>
        <MovingProcess
          title={
            <>
              How Our Moving Process{" "}
              <span className="md:block font-normal">
                Works in Ras Al Khaimah
              </span>
            </>
          }
        />
        <ReviewSection reviews={googleReviews} />
        <section className="max-w-7xl mx-auto mt-20 md:px-10 px-4">
          {/* Main Header Section */}
          <div className="text-center mb-10 max-w-4xl mx-auto">
            <h2 className="md:text-4xl text-3xl font-bold mb-6">
              <span className="font-normal md:block">
                Movers and Packers in Ras Al Khaimah{" "}
              </span>{" "}
              Service Coverage
            </h2>
            <p className="text-muted-foreground">
              We serve every part of RAK under one team. Below is a quick
              reference of our coverage by area and service type.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-10 mt-10">
            {[
              {
                title: "Movers Al Hamra Village RAK",
                description:
                  "Gated community villa and apartment moves with permit handling",
              },
              {
                title: "Movers Mina Al Arab",
                description:
                  "Residential relocation — enclosed truck, access coordination",
              },
              {
                title: "Movers Al Marjan Island",
                description:
                  "Resort and residential moves — careful item handling",
              },
              {
                title: "Movers Al Nakheel RAK",
                description: "Apartment and villa shifting in central RAK",
              },
              {
                title: "Movers Julphar RAK",
                description: "Commercial and residential relocation",
              },
              {
                title: "Office Movers RAK Free Zone",
                description:
                  "Corporate office relocation with minimal downtime",
              },
              {
                title: "Movers from RAK to Dubai",
                description:
                  "Intercity move — enclosed truck, scheduled or same-day",
              },
              {
                title: "Movers from RAK to Sharjah",
                description:
                  "Long-distance residential or commercial relocation",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="border-b border-primary leading-tight pb-2"
              >
                <h3 className="mb-2 font-bold">{feature.title}</h3>
                <p className="leading-tight text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-7xl mx-auto mt-20 md:px-10 px-4">
          {/* Main Header Section */}
          <div className="text-center mb-10 max-w-4xl mx-auto">
            <h2 className="md:text-4xl text-3xl font-bold mb-6">
              <span className="font-normal md:block">Areas We Serve</span> in
              Ras Al Khaimah
            </h2>
            <p className="text-muted-foreground">
              We cover all major residential and commercial areas across Ras Al
              Khaimah. If your community is not listed below, contact us — we
              likely cover it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-10 mt-10">
            {[
              {
                title: "Al Hamra Village",
                description:
                  "Gated residential community — villa and apartment moves with move-in permit coordination",
              },
              {
                title: "Mina Al Arab",
                description:
                  "Waterfront gated community — access coordination and enclosed truck transport",
              },
              {
                title: "Al Marjan Island",
                description:
                  "Resort and residential properties — careful handling, community entry coordination",
              },
              {
                title: "Al Nakheel",
                description:
                  "Central residential district — apartments and villas, house shifting",
              },
              {
                title: "Julphar",
                description:
                  "Commercial and residential area — office and home relocation",
              },
              {
                title: "Al Dhait",
                description: "Residential suburb — house and villa shifting",
              },
              {
                title: "Khuzam",
                description:
                  "Mixed residential — furniture and apartment moves",
              },
              {
                title: "Al Qusaidat",
                description:
                  "Industrial and residential — warehouse and office moves",
              },
              {
                title: "Al Uraibi",
                description:
                  "Residential neighbourhood — house shifting and furniture moves",
              },
              {
                title: "Al Seer",
                description: "Residential community — apartment movers",
              },
              {
                title: "RAK Free Zone (RAKEZ)",
                description:
                  "Commercial office relocation with minimal business downtime",
              },
              {
                title: "RAK to Dubai",
                description:
                  "Intercity long-distance — enclosed truck, same-day or scheduled service",
              },
              {
                title: "RAK to Sharjah / Abu Dhabi / Ajman",
                description:
                  "All emirates covered for residential and commercial relocations",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="border-b border-primary leading-tight pb-2"
              >
                <h3 className="mb-2 font-bold">{feature.title}</h3>
                <p className="leading-tight text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <FAQSection
          title="Frequently Asked Questions: Movers in Ras Al Khaimah"
          faqs={RasAlKhaimahMovingFAQs}
        />
        <CTA
          title="Get a Free Quote from Movers and Packers in Ras Al Khaimah"
          desc="Movers and in Packers UAE has been handling moves in Ras Al Khaimah since 1998. Our team will send you an itemised quote on WhatsApp within the hour — no hidden charges, no pressure, no commitment required. You pay only after the job is done.
Call or WhatsApp us today to get started.
"
        />
      </main>
    </>
  );
};

export default page;

const features = [
  {
    title: "Registered Since 1998 — A Longer Track Record Than Most",
    desc: "Our company was officially registered in 1998. That is over 25 years of documented, legal moves across the UAE. When something goes wrong on a move — and occasionally it does — a company with a real history handles it properly. A freelance mover operating from a shared WhatsApp number does not have the same accountability. We were running as a professional moving company in Ras Al Khaimah before most current competitors were established.",
    buttonText: "Learn more",
  },
  {
    title: "Enclosed Box Trucks — The Right Equipment for UAE Conditions",
    desc: "Most movers in RAK use open flatbed trucks. Those work fine in mild weather, but Ras Al Khaimah summers regularly exceed 45°C and sandstorms are common. An open truck exposes your furniture, electronics, and appliances to direct heat and grit for the entire journey. Our enclosed box trucks are fully sealed. Your belongings travel in the same conditions as a storage unit — protected from heat, dust, and sunlight. This is not a minor point. It is the difference between items arriving in the condition they left, and items arriving damaged.",
    buttonText: "See our fleet",
  },
  {
    title: "Pay Upon Satisfaction — You Pay After the Job Is Done",
    desc: "We do not take payment before the move starts. You pay only once the job is complete and you are happy with how it went. This removes the biggest risk in hiring any moving company: paying upfront and then having no way to push back if the service falls short. We have worked this way since the beginning. It is the only approach that makes sense for the customer, and it keeps us accountable on every single job.",
    buttonText: "Get a quote",
  },
  {
    title: "Itemised WhatsApp Quote — No Hidden Charges",
    desc: "When you contact us, we send a complete breakdown of the job on WhatsApp or email. Every service, every item, every charge is listed before we start. The price we quote is the price you pay. There are no add-ons introduced on moving day, no fees that were not agreed in advance, and no vague “additional costs” that appear after the work is done. Our fleet is RTA-approved, so you are working with a fully compliant and legally operating company.",
    buttonText: "View pricing",
  },
  {
    title: "Bilingual Team — English and Arabic",
    desc: "Our team communicates in both English and Arabic. Whether you are an expat family, a UAE national, or a business owner, there is no communication gap on moving day. Clear instructions reduce mistakes, and fewer mistakes mean a smoother move.",
    buttonText: "Contact support",
  },
];

const costFactors = [
  {
    title: "Size of the move",
    description:
      "Studio, 1-BHK, 3-BHK apartment, villa, or full commercial office.",
    icon: Home,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "Distance",
    description:
      "Moving within RAK or intercity to Dubai, Abu Dhabi, Sharjah, or other emirates.",
    icon: MapPin,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Volume and type of items",
    description:
      "Fragile goods, heavy furniture, industrial machinery, or safes.",
    icon: Box,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    title: "Packing services",
    description: "Whether you need us to pack everything or just transport it.",
    icon: Package,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    title: "Access conditions",
    description:
      "Elevator availability, parking permits, or gated community entry requirements.",
    icon: Building2,
    color: "text-rose-500",
    bgColor: "bg-rose-50",
  },
  {
    title: "Timing",
    description: "Same-day, weekend, or a planned move booked in advance.",
    icon: Clock,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
  },
];

import { Home, MapPin, Box, Package, Building2, Clock } from "lucide-react";
import MovingProcess from "@/components/MovingProcess";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Link from "next/link";
import { ReviewSection } from "@/components/ReviewSection";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import { Breadcrumb } from "@/components/Breadcrumb";


const googleReviews = [
  {
    name: "Ahmed Al Zaabi",
    time: "2 weeks ago",
    star: 5,
    review:
      "Moved our 3BHK in Al Hamra Village without any problems. The team was on time, came prepared with boxes, and didn't damage anything.",
    image: "/ava/32.jpg",
  },
  {
    name: "Sanaa Youssef",
    time: "1 month ago",
    star: 5,
    review:
      "Used these movers in RAK to shift my apartment to Mina Al Arab. Got it done quick and all my fragile stuff made it there in one piece.",
    image: "/ava/44.jpg",
  },
  {
    name: "Michael Trent",
    time: "3 days ago",
    star: 5,
    review:
      "Moved from Ras Al Khaimah to Dubai with them. They packed my wardrobes properly and put everything together right at the new house.",
    image: "/ava/86.jpg",
  },
  {
    name: "Rohan Kapoor",
    time: "1 week ago",
    star: 5,
    review:
      "Booked them for the office move in Al Nakheel. Fast workers, straightforward pricing, and no surprise fees when they were done.",
    image: "/ava/68.jpg",
  },
  {
    name: "Tariq Mahmoud",
    time: "2 months ago",
    star: 5,
    review:
      "Best movers in Ras Al Khaimah we've used. Moved our whole villa including the heavy appliances without breaking anything. Really took the stress out.",
    image: "/ava/22.jpg",
  },
  {
    name: "Elena Smith",
    time: "4 weeks ago",
    star: 5,
    review:
      "Moved to Marjan Island last weekend and the crew did a solid job. Packed all the kitchen stuff and electronics carefully.",
    image: "/ava/90.jpg",
  },
  {
    name: "Usman Ali",
    time: "5 days ago",
    star: 5,
    review:
      "Good prices and the crew was respectful. Got all our things down from the 4th floor in Al Qusaidat without any fuss.",
    image: "/ava/54.jpg",
  },
  {
    name: "Layla Hassan",
    time: "3 weeks ago",
    star: 5,
    review:
      "The move in RAK went smoothly from start to finish. They came with wardrobe boxes for the clothes and cleaned up after themselves.",
    image: "/ava/29.jpg",
  },
];
