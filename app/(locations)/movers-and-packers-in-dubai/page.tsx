import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import { LocHeroSection } from "@/components/LocHeroSection";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import { Button } from "@/components/ui/button";
import { DubaiMovingFAQs } from "@/lib/FaqsData";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import heroImage from "@/public/loc/movers-and-packers-in-dubai-professional-moving-service-burj-khalifa-golden-hour.jpg";
import {
  ChevronDown,
  ChevronRight,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers and Packers in Dubai | Licensed Since 1998 | Free Quote",
      desc: "Trusted movers and packers in Dubai since 1998. Villa, apartment, office & furniture moves. RTA-approved trucks, no hidden fees. Pay after completion. Free quote.",
    },
    image: {
      path: "/loc/movers-and-packers-in-dubai-professional-moving-service-burj-khalifa-golden-hour.jpg",
      alt: "Movers and Packers in Dubai professional team loading wrapped furniture into a branded moving truck outside a luxury Dubai residential tower with the Burj Khalifa visible in the golden hour background",
    },
    path: "/movers-and-packers-in-dubai",
  },
});

function DubaiPage() {
  return (
    <main>
      <LocHeroSection
        h1={
          <>
            Movers and Packers in Dubai <br className="hidden sm:block" />
            <span className="font-normal">Trusted Since 1998</span>
          </>
        }
        desc={
          <>
            <h3 className="text-medium md:text-xl text-lg">
              One of Dubai&apos;s{" "}
              <span className="text-primary">
                longest-running licensed moving companies
              </span>{" "}
              — RTA-approved enclosed trucks, no hidden charges, and you pay
              only after the job is done.
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
              {[
                "DED Licensed",
                "RTA-Approved Trucks ",
                "Pay After Completion ",
                "25+ Years Experience",
                "Same Day Available",
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-muted text-foreground  px-3 py-1.5 text-sm rounded-4xl flex items-center gap-2"
                >
                  <span> ✔</span> <p>{t} </p>
                </div>
              ))}
            </div>
          </>
        }
        id="movers-and-packers-in-dubai"
        img={{
          src: heroImage,
          alt: "Movers and Packers in Dubai professional team loading wrapped furniture into a branded moving truck outside a luxury Dubai residential tower with the Burj Khalifa visible in the golden hour background",
        }}
      />
      <QuotationSection
        title={
          <>
            <span className="font-bold md:block">Get Free Moving Quote</span>{" "}
            From Movers and Packers in Dubai
          </>
        }
        btnText="Get A Quote From Movers in Dubai"
        desc="Call us or send a WhatsApp message for a free quote — our movers and packers in dubai will get back to you quickly with a clear, fixed price. We handle everything, from packing and loading to transport and installation. "
      />
      <section
        id="best-moving-company-in-uae "
        className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2 grid-cols-1 gap-10 md:px-10 px-4 items-center"
      >
        <div className=" md:order-1 order-2 md:text-lg text-muted-foreground mt-5 leading-tight">
          <p>
            Finding a reliable mover in Dubai is harder than it should be. The
            market is full of operators — many with no physical office, no trade
            licence, and no accountability once your furniture is on their
            truck. We are different.
          </p>
          <p className="mt-2">
            As a DED-registered <Link href="/">shifting company in Dubai</Link>,
            operating since 1998, we have handled thousands of residential and
            commercial moves across the city — from Deira to Dubai Marina, Bur
            Dubai to Dubai Silicon Oasis.
          </p>
          <p className="mt-2">
            If you need professional movers in Dubai, call or message us on
            WhatsApp. We will send you a clear quote fast, at no cost and no
            obligation.
          </p>
          <p className="mt-2">
            Our team covers all local movers in Dubai needs, with relocation
            services dubai-wide and across all seven emirates.
          </p>
          <Button whatsappBtn className="mt-5" size={"lg"}>
            Get a Free Quote on WhatsApp
          </Button>
        </div>
        <div className="md:order-2 order-1">
          {" "}
          <h2 className="md:text-4xl text-3xl font-bold mt-3 ">
            {" "}
            <span className="md:block font-normal">
              Professional and Fast
            </span>{" "}
            Moving Company in Dubai
          </h2>
          <div className="bg-muted aspect-video mt-8 overflow-hidden relative">
            <Image
              src={"/Moving-Company-Based-in-Dubai.jpg"}
              alt="Best Moving Company Based in Dubai UAE"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-20 md:px-10 px-4">
        {/* Main Header Section */}
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <h2 className="md:text-4xl text-3xl font-bold mb-6">
            <span className="font-normal block">Why Dubai Residents </span>{" "}
            Choose Our Moving Company
          </h2>
          <p className="text-muted-foreground">
            There are a number of moving companies in dubai. Here is what makes
            a real difference.
          </p>
        </div>

        {/* CSS Grid Section - 1 col on mobile, 2 cols on lg screens */}
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl py-8 px-5 sm:p-10 flex flex-col ${index === features.length - 1 ? "md:col-span-2" : ""} `}
            >
              {/* Decorative Accent Line */}
              <div className="w-12 h-1.5 bg-primary rounded-full mb-6"></div>

              {/* Card Content */}
              <div className="grow">
                <h3 className="md:text-2xl text-xl font-bold mb-4">
                  {feature.title}
                </h3>
                <div className="text-muted-foreground mb-5 flex gap-y-1 flex-col">
                  {feature.desc}
                </div>
              </div>

              {/* Action Link positioned at the bottom */}
              <div className="mt-auto pt-3 border-t border-slate-100">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className=" flex gap-x-1 items-center text-primary cursor-pointer">
                    see more <ChevronDown size={18} />
                  </summary>
                  <div className="mt-3 text-muted-foreground flex flex-col gap-y-1 leading-tight">
                    {feature.extra}
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="movers-and-packers-in-fujairah-services"
        className="mt-20 max-w-7xl md:px-10 px-4 mx-auto"
      >
        <div className="bg-foreground rounded-2xl md:p-10 px-4 py-10 grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-8">
          <div>
            <p className="uppercase border-b border-primary text-gray-200 w-max">
              Our Moving Services
            </p>
            <h2 className="md:text-4xl text-3xl text-white mt-3">
              Moving Services{" "}
              <span className="font-bold md:block">
                We Provide in Dubai
              </span>{" "}
            </h2>
            <Button
              link="/moving-services"
              variant={"secondary"}
              className="mt-5"
            >
              View All Services <ChevronRight />
            </Button>
          </div>
          <div>
            <p className="text-gray-200">
              We cover the full range of packing and moving services in dubai —
              residential, commercial, and specialized.
            </p>
            <p className="text-gray-200 mt-1">
              Whether you need professional movers and packers in dubai for a
              small apartment or a full company relocation, we handle it.
            </p>
            <p className="text-gray-200 mt-1">
              Here is a breakdown of relocation services dubai customers use
              most.
            </p>
          </div>
        </div>
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 md:gap-5 gap-8">
          {[
            {
              id: "villa-movers-in-dubai",
              name: "Villa Movers in Dubai",
              description: (
                <>
                  <p>
                    Villa moves involve bulk — large furniture across multiple
                    floors, outdoor items, and often high-value pieces that need
                    proper protection.
                  </p>
                  <p>
                    Our team of villa movers in dubai and{" "}
                    <Link href="/villa-movers-in-dubai">
                      villa movers and packers in dubai
                    </Link>{" "}
                    handles full packing, dismantling, transport, and
                    reassembly.
                  </p>
                </>
              ),
              extra: (
                <>
                  <p>
                    We use enclosed trucks sized for high-volume loads, and we
                    bring all necessary materials.
                  </p>
                </>
              ),
              img: {
                src: "/loc/villa-movers-dubai-professional-team-enclosed-truck.jpg",
                alt: "Professional villa movers in Dubai with enclosed truck, moving furniture up driveway with company branding visible",
              },
            },
            {
              id: "house-movers-in-dubai",
              name: "House and Home Movers in Dubai",
              description: (
                <>
                  <p>
                    Residential moves require careful handling of personal
                    belongings — bedroom furniture, kitchen equipment,
                    children&apos;s rooms.
                  </p>
                  <p>
                    We treat these moves with the same process and care as any
                    other job. Same-day moving is available for urgent
                    situations.
                  </p>
                </>
              ),
              extra: (
                <>
                  <p>
                    Our{" "}
                    <Link href="/house-shifting-dubai">
                      house movers in dubai
                    </Link>{" "}
                    and home movers in dubai teams are available across all
                    Dubai communities for house shifting services in dubai.
                  </p>
                </>
              ),
              img: {
                src: "/loc/apartment-movers-dubai-marina-interior-relocation.jpg",
                alt: "Apartment movers in Dubai relocating furniture through modern flat with professional equipment and branded uniforms",
              },
            },
            {
              id: "apartment-movers-in-dubai",
              name: "Apartment and Flat Movers in Dubai",
              description: (
                <>
                  <p>
                    Whether you are in a studio in Bur Dubai or a 3BHK in Dubai
                    Marina, the process is the same.
                  </p>
                  <p>
                    We coordinate elevator access, manage fragile items and
                    heavy appliances, and work within the building&apos;s moving
                    rules.
                  </p>
                </>
              ),
              extra: (
                <>
                  <p>
                    Our{" "}
                    <Link href="/apartment-movers-dubai">
                      apartment movers in dubai
                    </Link>{" "}
                    service covers home shifting dubai and house shifting dubai
                    needs across all residential towers in the city.
                  </p>
                </>
              ),
              img: {
                src: "/loc/house-movers-dubai-residential-moving-truck.jpg",
                alt: "Professional house movers Dubai loading residential furniture with protective materials and branded truck",
              },
            },
            {
              id: "office-movers-in-dubai",
              name: "Office and Commercial Movers in Dubai",
              description: (
                <>
                  <p>
                    Commercial moves need to happen around your schedule, not
                    ours. We work weekends and evenings to avoid disrupting your
                    operations.
                  </p>
                  <p>
                    As{" "}
                    <Link href="/office-movers-in-dubai">
                      experienced office movers dubai
                    </Link>{" "}
                    businesses rely on, we handle IT equipment, desks, filing
                    systems, server racks, and heavy safes.
                  </p>
                </>
              ),
              extra: (
                <>
                  <p>
                    Office relocation dubai jobs are quoted with a full
                    breakdown of scope so there are no surprises on the day.
                  </p>
                </>
              ),
              img: {
                src: "/loc/office-movers-dubai-commercial-relocation-it-equipment.jpg",
                alt: "Commercial office movers Dubai relocating IT equipment and desks in downtown corporate space",
              },
            },
            {
              id: "furniture-movers-in-dubai",
              name: "Furniture Movers Dubai",
              description: (
                <>
                  <p>
                    Moving a single piece of furniture or an entire household.
                    We dismantle, pad, transport, and reassemble.
                  </p>
                  <p>
                    We also handle antiques, heavy wardrobes, modular shelving,
                    and oversized items that standard movers won&apos;t touch.
                  </p>
                  <p>
                    As{" "}
                    <Link href="/furniture-moving-services-uae">
                      furniture movers dubai
                    </Link>{" "}
                    residents trust, we bring the right tools and proper padding
                    for every job.
                  </p>
                </>
              ),
              extra: <></>,
              img: {
                src: "/loc/furniture-movers-dubai-professional-packing-handling.jpg",
                alt: "Expert furniture movers Dubai carefully disassembling and protecting wooden furniture with professional padding materials",
              },
            },
            {
              id: "packing-services-in-dubai",
              name: "Packing Services in Dubai",
              description: (
                <>
                  <p>
                    Full professional packing using proper materials — cardboard
                    boxes, bubble wrap, stretch film, and furniture pads.
                  </p>
                  <p>
                    We label and inventory every box so unpacking at the new
                    location is straightforward.
                  </p>
                  <p>
                    Our{" "}
                    <Link href="/packing-services-in-dubai">
                      packing services in dubai
                    </Link>{" "}
                    cover everything from fragile kitchenware to electronics and
                    artwork.
                  </p>
                </>
              ),
              extra: <></>,
              img: {
                src: "/loc/packing-services-dubai-professional-materials-inventory.jpg",
                alt: "Professional packing services Dubai with organized materials, labeled boxes, and experienced packer wrapping fragile items",
              },
            },
            {
              id: "moving-and-storage-dubai",
              name: "Moving and Storage Dubai",
              description: (
                <>
                  <p>
                    If your new property is not ready, or you need somewhere to
                    keep furniture during a renovation, we offer both managed
                    furniture storage and self-storage options.
                  </p>
                  <p>
                    Moving and storage dubai is a single process with us — no
                    need to coordinate separate companies. Short-term and
                    long-term options are available.
                  </p>
                </>
              ),
              extra: <></>,
              img: {
                src: "/loc/moving-storage-dubai-climate-controlled-facility.jpg",
                alt: "Climate-controlled moving and storage facility Dubai with organized furniture and inventory management system",
              },
            },
            {
              id: "specialised-movers-in-dubai",
              name: "Specialised Moves — Heavy Equipment, Safes, Industrial Items",
              description: (
                <>
                  <p>
                    Not every <Link href={"/"}>moving company in Dubai</Link>{" "}
                    handles industrial machinery, hospital equipment, heavy
                    safes, or bank furniture. We do.
                  </p>
                  <p>
                    These jobs need proper equipment, crew strength, and
                    logistical planning.
                  </p>
                </>
              ),
              extra: (
                <>
                  <p>
                    We have handled moves for banks, hospitals, restaurants, and
                    warehouses — all with the same transparent pricing model.
                  </p>
                </>
              ),
              img: {
                src: "/loc/specialized-movers-dubai-heavy-safe-industrial-equipment.jpg",
                alt: "Specialized movers Dubai handling heavy safes and industrial equipment with professional hydraulic equipment and safety standards",
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
      <ReviewSection reviews={googleReviews} />

      <section className="relative overflow-hidden  bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 px-4 sm:px-6 lg:px-8 mt-20">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-10 w-96 h-96 bg-red-900/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-red-900/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-14 text-center">
            <h2
              className="md:text-4xl text-3xl font-bold mb-4"
              style={{ color: "#ffffff" }}
            >
              How Our Dubai Moving Process Works
            </h2>
            <div
              className="h-1 w-16 mx-auto rounded-full"
              style={{ backgroundColor: "#9f0712" }}
            />
          </div>

          {/* Steps Container */}
          <div className="relative">
            {/* Vertical line connector */}
            <div
              className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5"
              style={{ backgroundColor: "#9f0712", opacity: 0.3 }}
            />

            {/* Steps */}
            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Step layout: Number on left, content on right */}
                  <div className="flex gap-4 sm:gap-0">
                    {/* Number circle */}
                    <div className="relative flex-shrink-0 flex items-center justify-center">
                      <div
                        className="md:w-16 w-12 md:h-16 h-12 rounded-full flex items-center justify-center font-bold text-xl relative z-10 shadow-lg"
                        style={{
                          backgroundColor: "#9f0712",
                          color: "#ffffff",
                        }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2 sm:pl-0 sm:ml-0 sm:mr-0">
                      <div className="ml-0 sm:ml-16 sm:w-5/6 ">
                        <h3
                          className="text-lg sm:text-2xl font-semibold mb-3"
                          style={{ color: "#ffffff" }}
                        >
                          Step {step.number} — {step.title}
                        </h3>
                        <p
                          className="md:text-base text-sm md:leading-relaxed"
                          style={{ color: "#a1a1a1" }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div
            className="mt-10 pt-8 border-t"
            style={{ borderColor: "#27272a" }}
          >
            <div className="text-center">
              <p className="text-lg mb-4" style={{ color: "#a1a1a1" }}>
                Ready to move?
              </p>
              <Button whatsappBtn size={"lg"}>
                WhatsApp us now for a free quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="moving-services-pricing-in-dubai"
        className="max-w-5xl w-full mx-auto overflow-hidden rounded-3xl mt-20 md:px-0 px-4"
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Moving Costs in Dubai — What to Expect
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto ">
            There is no single price for a move in Dubai. Costs depend on
            property size, distance between locations, floor level, elevator
            access, and whether you need packing included.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
            As a general guide from our experience as a moving company in dubai:
          </p>
        </div>

        {/* Responsive Table */}
        <h3 className="text-3xl font-bold mt-10 text-center">
          Approximate Moving Prices in Dubai
        </h3>
        <div className="overflow-x-auto bg-white mt-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-foreground  text-white text-xs sm:text-sm uppercase tracking-wider">
                <th className="p-4 sm:px-8 sm:py-5 font-semibold whitespace-nowrap">
                  Property Type
                </th>
                <th className="p-4 sm:px-8 sm:py-5 font-semibold whitespace-nowrap">
                  Approx. From (AED)
                </th>
                <th className="p-4 sm:px-8 sm:py-5 font-semibold whitespace-nowrap">
                  Approx. To (AED)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm sm:text-base">
              {[
                { type: "Studio Apartment", from: "650", to: "1,050" },
                { type: "1 Bedroom Apartment", from: "950", to: "1,450" },
                { type: "2 Bedroom Apartment", from: "1,350", to: "1,950" },
                { type: "3 Bedroom Apartment", from: "1,950", to: "2,850" },
                { type: "3 Bedroom Villa", from: "2,350", to: "3,250" },
                { type: "5 Bedroom Villa", from: "3,150", to: "4,350" },
              ].map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/70 transition-colors"
                >
                  <td className="p-4 sm:px-8 sm:py-5 font-medium text-slate-900 whitespace-nowrap">
                    {row.type}
                  </td>

                  <>
                    <td className="p-4 sm:px-8 sm:py-5 text-slate-600 font-medium whitespace-nowrap">
                      {row.from}
                    </td>
                    <td className="p-4 sm:px-8 sm:py-5 text-slate-600 font-medium whitespace-nowrap">
                      {row.to}
                    </td>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto mt-10">
          <p>
            These are approximate ranges based on standard moves. Your actual
            quote depends on floor level, elevator availability, distance
            between locations, volume of items, and whether packing services are
            needed.
          </p>
          <p className="mt-2">
            Contact us for a free itemised quote — it comes with no obligation
            and takes a few minutes. You can also visit our moving prices page
            for a more detailed breakdown.
          </p>
          <h3 className="md:text-3xl text-2xl font-bold mt-10 text-foreground">
            Why Our Pricing Is Transparent
          </h3>
          <p className="mt-5">
            We tell you the full price before the job starts. Nothing changes on
            moving day — no additional charges, no fuel surcharge, no
            &quot;access fee&quot; added at the last minute.
          </p>
          <p className="mt-2">
            That is why we say we are affordable movers in dubai — the price
            holds.
          </p>
        </div>
        <div className="bg-foreground rounded-3xl mt-10 text-white p-6 sm:p-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1">
              Not sure what services you need?
            </h3>
            <p className="text-emerald-100">
              WhatsApp us, describe your situation, and we&apos;ll put together
              the right quote.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button whatsappBtn size="lg" variant={"secondary"}>
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </Button>
            <Button callBtn size="lg">
              <PhoneCall className="w-5 h-5" />
              <span>Call Now</span>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl md:px-10 px-4 mt-20">
        <h2 className=" text-center font-bold md:text-4xl text-3xl">
          Movers and Packers Across All Dubai Areas
        </h2>
        <p className="mt-3  text-center md:text-lg text-muted-foreground mx-auto max-w-3xl">
          We cover all residential communities, commercial zones, and industrial
          areas across Dubai. Below are the main areas where we work regularly
          as local movers in dubai.
        </p>
        <div className="mx-auto mt-12 grid w-full gap-x-8 gap-y-12 md:mt-18 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {locations.map((feature, i) => (
            <div
              className="flex flex-col items-center gap-x-12 gap-y-6"
              key={i}
            >
              <div className="flex flex-1 basis-1/2 flex-col items-start">
                <Link href={feature.href}>
                  <h3 className="mt-1 mb-2 font-bold text-xl tracking-[-0.02em]">
                    {feature.title}
                  </h3>
                </Link>
                <div className="mb-3 leading-tight text-muted-foreground flex flex-col gap-y-1">
                  {feature.details}
                </div>
                <Button link={feature.href} variant={"secondary"}>
                  Movers in {feature.cta} <ChevronRight />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-foreground rounded-3xl mt-10 text-white p-6 sm:p-8 lg:px-12 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1">
              Inter-Emirate Moves: Dubai to Sharjah and Beyond
            </h3>
            <div className="my-5 max-w-4xl">
              <p className="text-emerald-100">
                Many Dubai residents eventually move to Sharjah, Ajman, or Abu
                Dhabi — and the process requires a mover who knows both sides.
              </p>
              <p className="text-emerald-100 mt-1">
                We cover moves between Dubai and all other UAE emirates. Our
                movers dubai to sharjah service is one of our most common
                inter-city jobs. One company, one quote, no separate
                cross-border fees.
              </p>
              <p className="text-emerald-100 mt-1">
                See also:{" "}
                <Link href="/movers-and-packers-in-sharjah">
                  Sharjah moving services
                </Link>{" "}
                and <Link href="/movers-in-ajman">Ajman movers</Link>.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button whatsappBtn size="lg" variant={"secondary"}>
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </Button>
            <Button callBtn size="lg">
              <PhoneCall className="w-5 h-5" />
              <span>Call Now</span>
            </Button>
          </div>
        </div>
      </section>
      <FAQSection
        faqs={DubaiMovingFAQs}
        title="Frequently Asked Questions About Moving in Dubai"
      />
      <CTA
        title="Get a Free Moving Quote in Dubai"
        desc="Describe your move in a WhatsApp message or give us a call. We respond quickly with a clear, itemised quote — no surprises, no vague estimates. You pay only after the job is done. That applies to every move we take on, regardless of size.We are available for same-day and scheduled moves across all Dubai areas — from Dubai Marina to Bur Dubai, Mirdif to DSO, and everywhere in between."
      />
      <p className="mt-5 text-lg text-center px-4">
        Not sure what you need? Read{" "}
        <Link href="/how-to-hire" className="underline px-2">
          how to hire us
        </Link>{" "}
        or{" "}
        <Link href="/how-to-pay" className="underline px-2">
          how to pay
        </Link>{" "}
        for a step-by-step overview.
      </p>
    </main>
  );
}

export default DubaiPage;

const features = [
  {
    title: "Operating in Dubai Since 1998",
    desc: (
      <>
        <p>
          We registered in the UAE in 1998 — before most of the moving companies
          in Dubai that exist today were even started. That is not just a
          number.{" "}
        </p>
        <p>
          It means we have done this long enough to know every building type,
          every community access rule, and every common mistake that can derail
          a move.
        </p>
      </>
    ),
    extra: (
      <>
        <p>
          We hold a valid DED (Dubai Department of Economy and Tourism) trade
          licence, which you can verify. We are not a freelance setup operating
          from a WhatsApp number.{" "}
        </p>
        <p>
          We have a Google Business Profile with a real address, real reviews,
          and a verifiable track record. Among the best relocation companies in
          Dubai, our 1998 registration date is something no competitor can
          match.
        </p>
      </>
    ),
  },
  {
    title: "RTA-Approved Enclosed Box Trucks",
    desc: (
      <>
        <p>
          Most people don&apos;t think about what happens to their furniture on
          the back of an open flatbed in July. Dubai summer temperatures
          regularly hit 45°C or above.
        </p>
        <p>
          Add sandstorms, and an open truck becomes a serious risk to your
          electronics, wooden furniture, upholstery, and appliances.
        </p>
      </>
    ),
    extra: (
      <>
        <p>
          Our fleet of moving trucks Dubai residents can rely on are fully
          enclosed box trucks — not open flatbeds. They protect everything
          inside, regardless of weather.
        </p>
        <p>
          Each truck movers Dubai team uses is RTA (Roads and Transport
          Authority) approved, meaning they are legally compliant on all Dubai
          roads.
        </p>
        <p>
          We have trucks in multiple sizes to match the volume of a studio flat,
          a three-bedroom apartment, or a full villa.
        </p>
      </>
    ),
  },
  {
    title: "Pay After the Job Is Done",
    desc: (
      <>
        <p>
          No upfront deposit. No partial payment before we start. You pay only
          after the move is complete and you are satisfied with the result.
        </p>
        <p>
          This matters because a lot of movers take payment in advance and have
          very little incentive to handle your belongings carefully after that.
        </p>
      </>
    ),
    extra: (
      <>
        <p>
          We do the job first. Accepted payment methods: cash, online bank
          transfer, and bank cheque.
        </p>
        <p>
          This makes us genuinely affordable movers in dubai — not just by
          price, but because there is zero financial risk on your end.
        </p>
      </>
    ),
  },
  {
    title: "Transparent, No-Surprise Quotes",
    desc: (
      <>
        <p>
          We give you a detailed quote via WhatsApp and email before any work
          begins. No vague estimates. If the quote says AED 1,200, the invoice
          says AED 1,200 — nothing added on moving day.
        </p>
        <p>
          No fuel surcharges. No stair fees. No &quot;additional handling&quot;
          charges that appeared nowhere in the original packing and moving dubai
          quote.
        </p>
      </>
    ),
    extra: (
      <>
        <p>
          We cover moving companies in dubai prices honestly — you see the full
          breakdown upfront, and it doesn&apos;t change.
        </p>
        <p>
          For larger moves, we offer a free site assessment so the quote
          reflects what the job actually involves
        </p>
      </>
    ),
  },
  {
    title: "Bilingual Team — English and Arabic",
    desc: (
      <>
        <p>
          All of our client-facing staff communicate in both English and Arabic.
          This is a practical thing — clear communication on moving day avoids
          confusion about where items go, what gets packed first, and how things
          are labelled.
        </p>
        <p>
          It doesn&apos;t matter whether you&apos;re an expat or a UAE national.
          We can work with you directly in your preferred language.
        </p>
      </>
    ),
    extra: <></>,
  },
];

const steps = [
  {
    number: "1",
    title: "Contact Us for a Free Quote",
    description:
      "Call or message us on WhatsApp with your move details. We ask about property size, current location, destination, floor levels, and any special items. You get a clear quote back quickly — no obligation, no cost.",
  },
  {
    number: "2",
    title: "We Pack and Load",
    description:
      "Our trained team arrives at the agreed time with all packing materials and the right truck size. Every item is packed, labelled, and secured before loading. This is where the packing and moving dubai process actually starts — nothing goes on the truck unless it is properly protected.",
  },
  {
    number: "3",
    title: "Delivery and Setup",
    description:
      "We transport everything to your new location, then unload, reassemble furniture as needed, and place items as directed. You inspect everything before paying. That's it.",
  },
];

const locations = [
  {
    title: "Movers in Dubai Silicon Oasis (DSO)",
    details: (
      <>
        <p>
          DSO has a mix of residential towers and technology-company offices
          within a free zone.
        </p>
        <p>
          We handle apartment moves for residents and equipment moves for
          businesses relocating within or out of the free zone.
        </p>
        <p>
          Our movers and packers in dubai silicon oasis service covers both.
        </p>
      </>
    ),
    href: "#",
    cta: "Dubai Silicon Oasis",
  },

  {
    title: "Movers in Business Bay",
    details: (
      <>
        <p>
          Business Bay has both residential towers and commercial offices, often
          in the same building.
        </p>
        <p>
          We handle home moves and office relocations here, working around
          building management schedules and corporate handover timelines.
        </p>
        <p>
          Our movers and packers in dubai business bay service covers both
          categories.
        </p>
      </>
    ),
    href: "#",
    cta: "Business Bay",
  },
  {
    title: "Movers in Bur Dubai",
    details: (
      <>
        <p>
          One of Dubai&apos;s older districts — denser streets, older buildings,
          more varied access situations.
        </p>
        <p>
          We know the parking restrictions and building entry points in Bur
          Dubai well.
        </p>
        <p>
          If you need movers and packers bur dubai, or movers in bur dubai, we
          size the truck correctly for the access conditions and get it done
          efficiently.
        </p>
      </>
    ),
    href: "#",
    cta: "Bur Dubai",
  },
  {
    title: "Movers in Dubai Marina",
    details: (
      <>
        <p>
          Dubai Marina is a high-rise district with strict building access
          rules, elevator reservation requirements, and timing restrictions.
        </p>
        <p>
          Our movers in dubai marina team knows the process for each major tower
          — how to book access, how to coordinate with building management, and
          how to move efficiently within the constraints.{" "}
        </p>
        <p>
          If you need movers and packers in dubai marina, we have done this many
          times.
        </p>
      </>
    ),
    href: "#",
    cta: "Dubai Marina",
  },
  {
    title: "Movers in JVC (Jumeirah Village Circle)",
    details: (
      <>
        <p>
          JVC is one of Dubai&apos;s fastest-growing residential communities —
          villas, townhouses, and mid-rise apartment buildings across a wide
          area.
        </p>
        <p>
          We regularly handle moves into and out of JVC, including
          inter-community transfers within the development itself.
        </p>
      </>
    ),
    href: "#",
    cta: "JVC",
  },
  {
    title: "Movers in JLT (Jumeirah Lake Towers)",
    details: (
      <>
        <p>
          JLT is a cluster of high-rise residential and commercial towers with
          shared parking and access infrastructure.
        </p>
        <p>Elevator bookings and move-in windows are strictly managed here.</p>
        <p>
          We coordinate this with building management in advance so your move
          runs to time.
        </p>
      </>
    ),
    href: "#",
    cta: "JLT",
  },
  {
    title: "Movers in Mirdif",
    details: (
      <>
        <p>
          Mirdif is primarily a villa and townhouse community — larger volumes,
          private driveways, and family-sized homes.
        </p>
        <p>
          Our movers and packers in mirdif dubai team brings trucks sized for
          villa-volume moves and handles full packing if required.
        </p>
      </>
    ),
    href: "#",
    cta: "Mirdif",
  },
  {
    title: "Movers in International City",
    details: (
      <>
        <p>
          High density, mid-size apartments, and a community that has specific
          access and parking constraints.
        </p>
        <p>We offer practical, efficient apartment moves here.</p>
        <p>
          Our movers and packers in international city dubai service is
          straightforward and priced for the apartment-volume jobs this
          community typically requires.
        </p>
      </>
    ),
    href: "#",
    cta: "International City",
  },
  {
    title: "Movers in Al Barsha",
    details: (
      <>
        <p>
          Al Barsha has villas, compounds, and apartment towers in close
          proximity.
        </p>
        <p>
          We serve all property types here with the same transparent pricing
          model regardless of whether it is a compound villa or a tower flat.
        </p>
        <p>
          If you need movers and packers in dubai al barsha, we have done this
          many times.
        </p>
      </>
    ),
    href: "#",
    cta: "Al Barsha",
  },
];

const googleReviews = [
  {
    name: "Hamdan Al Rashidi",
    time: "2 weeks ago",
    star: 5,
    review:
      "Moved our villa in Mirdif and they handled the whole thing — packing, loading, reassembly. Price didn't change from what they quoted.",
    image: "/ava/32.jpg",
  },
  {
    name: "Sneha Pillai",
    time: "1 month ago",
    star: 5,
    review:
      "They sorted the elevator booking in my Dubai Marina tower and showed up on time. Everything arrived without a scratch.",
    image: "/ava/44.jpg",
  },
  {
    name: "Bilal Chaudhry",
    time: "3 weeks ago",
    star: 5,
    review:
      "Office move in Business Bay over a Friday — we were set up and running by Sunday. No missing items, no damage.",
    image: "/ava/86.jpg",
  },
  {
    name: "Laura Bennett",
    time: "5 weeks ago",
    star: 5,
    review:
      "Used the enclosed truck option because I was moving in August. Smart call — nothing got damaged from the heat.",
    image: "/ava/68.jpg",
  },
  {
    name: "Mustafa Karim",
    time: "2 months ago",
    star: 5,
    review:
      "Called them for a same-day move in Bur Dubai and they made it work. Paid after the job was done, which I appreciated.",
    image: "/ava/22.jpg",
  },
  {
    name: "Noor Al Zaabi",
    time: "1 month ago",
    star: 5,
    review:
      "They moved us from DSO to JVC and handled two heavy wardrobes I was worried about. Both arrived in perfect condition.",
    image: "/ava/90.jpg",
  },
  {
    name: "Deepak Varma",
    time: "3 weeks ago",
    star: 5,
    review:
      "The quote came on WhatsApp the same day I called, itemised clearly. What they said is what I paid — nothing added at the end.",
    image: "/ava/54.jpg",
  },
  {
    name: "Mariam Khalil",
    time: "6 weeks ago",
    star: 5,
    review:
      "Moved from Downtown Dubai to Sharjah and they managed the whole thing without any fuss. Would use them again without thinking twice.",
    image: "/ava/29.jpg",
  },
];
