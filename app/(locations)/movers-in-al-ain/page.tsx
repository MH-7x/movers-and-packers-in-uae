import heroImage from "@/public/loc/movers-in-al-ain-professional-moving-service-jebel-hafeet-garden-city.jpg";
import QuotationSection from "@/components/QuotationSection";
import { LocHeroSection } from "@/components/LocHeroSection";
import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  ChevronDown,
  ChevronRight,
  Info,
  PackageCheck,
  ShieldCheck,
  ThermometerSun,
  Truck,
  Wallet,
  Wind,
} from "lucide-react";
import Image from "next/image";
import MovingProcess from "@/components/MovingProcess";
import Link from "next/link";
import { FAQSection } from "@/components/FaqsSection";
import { AlAinMovingFAQs } from "@/lib/FaqsData";
import CTA from "@/components/CTA";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { ReviewSection } from "@/components/ReviewSection";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers in Al Ain | Trusted Al Ain Movers and Packers",
      desc: "Meta Description	Need movers and packers in Al Ain? Our licensed team offers house, villa & office moving with no hidden charges. Pay upon satisfaction. Call now.",
    },
    image: {
      path: "/loc/movers-in-al-ain-professional-moving-service-jebel-hafeet-garden-city.jpg",
      alt: "movers in al ain professional team loading wrapped furniture and boxes into a branded moving truck on a tree-lined Al Ain residential boulevard with Jebel Hafeet mountain in the background",
    },
    path: "/movers-in-al-ain",
  },
});

const MoversInAlAin = () => {
  return (
    <main>
      <LocHeroSection
        h1={
          <>
            Trusted Movers in Al Ain <br className="block" />
            <span className="font-normal">
              Professional Packing & Moving Services
            </span>
          </>
        }
        desc={
          <>
            <p>
              If you&apos;re looking for movers in Al Ain, you need a company
              that shows up, handles your belongings carefully, and charges
              exactly what they quoted. That&apos;s what we do.
            </p>
            <p>
              <Link href="/">Movers and Packers in UAE </Link> has been
              operating since 1998 — over 25 years of moving homes, villas,
              offices, and commercial spaces across the UAE. We&apos;re a
              licensed, registered company with a verified Google Business
              Profile.
            </p>
          </>
        }
        id="movers-in-al-ain"
        img={{
          src: heroImage,
          alt: "movers in al ain professional team loading wrapped furniture and boxes into a branded moving truck on a tree-lined Al Ain residential boulevard with Jebel Hafeet mountain in the background",
        }}
      />

      <section className="mt-20 max-w-4xl mx-auto md:px-0 px-4">
        <h3 className="md:text-2xl text-xl font-bold text-center">
          Getting started is simple. One call or WhatsApp message is all it
          takes to get a free quote and book your move.
        </h3>
      </section>

      <QuotationSection
        title={
          <>
            <span className="font-bold md:block">Get A Moving Quote</span> From
            Movers and Packers in Al Ain
          </>
        }
        btnText="Get A Quote From Movers in Al Ain"
        desc="Call us or send a WhatsApp message for a free quote — our movers and packers in al ain will get back to you quickly with a clear, fixed price. We handle everything, from packing and loading to transport and installation.
        Our movers and packers in Al Ain handle everything from a single-item transfer to a full five-bedroom villa relocation.
        "
      />

      <section className="max-w-7xl mx-auto mt-20 md:px-10 px-4">
        {/* Main Header Section */}
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <h2 className="md:text-4xl text-3xl font-bold mb-6">
            <span className="font-normal md:block">
              Why Choose Professional
            </span>{" "}
            Movers in Al Ain?
          </h2>
          <p className="text-muted-foreground">
            Most people underestimate how much can go wrong with a move.
            Scratched furniture, broken electronics, items that arrive damaged —
            these things happen when you hire freelance movers who operate
            without any legal standing or accountability.
          </p>
          <p className="text-muted-foreground">
            We&apos;re a registered moving company with 25+ years of experience
            and thousands of completed moves across the UAE. Our professional
            movers in Al Ain are trained, our trucks are RTA-approved, and every
            quote we send comes with zero hidden charges.
          </p>
          <p className="text-muted-foreground">
            Here&apos;s what makes us different from every other licensed moving
            company in Al Ain:
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-10">
          {[
            {
              title: "Pay upon satisfaction",
              description:
                "You inspect your belongings at the new location first, then you pay. We don&apos;t take money upfront and disappear.",
            },
            {
              title: "No hidden charges ",
              description:
                "The price we quote is the price you pay. AED 1,000 quoted means AED 1,000 charged — nothing more.",
            },
            {
              title: "Licensed and verified since 1998 ",
              description:
                "We have a registered Google Business Profile. Check our reviews, see company details, and meet the owner before you book.",
            },
            {
              title: "English and Arabic speaking team ",
              description:
                "Communication is clear from the first call to the final delivery.",
            },
            {
              title: "100% insurance coverage ",
              description:
                "Your belongings are fully covered during every move",
            },
          ].map((feature, i) => (
            <div key={i} className="border-b border-primary leading-tight pb-2">
              <h3 className="mb-2 font-bold">{feature.title}</h3>
              <p className="leading-tight text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-muted-foreground max-w-4xl mx-auto text-center">
          Hiring professional movers in Al Ain isn&apos;t just about
          convenience. It&apos;s about protecting what you own and having a
          company that&apos;s accountable if something goes wrong.
        </p>
      </section>

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
              Our Moving
              <span className="font-bold md:block">
                Services in Al Ain
              </span>{" "}
            </h2>
          </div>
          <div>
            <p className="text-gray-200">
              We cover every type of move. Whether you are shifting a studio
              apartment, relocating a 6-bedroom villa, or moving an entire
              office, our team handles it. Below is what our movers and packers
              in Ras Al Khaimah provide.
            </p>
            <Button
              link="/moving-services"
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
              id: "house-and-villa-movers-in-al-ain",
              name: "House & Villa Movers in Al Ain",
              description: (
                <>
                  <p>
                    Whether you&apos;re moving a studio flat, a three-bedroom
                    apartment, or a large villa, our team manages the entire
                    process — packing, dismantling, loading, transport,
                    unloading, and reassembly.
                  </p>
                </>
              ),
              extra: (
                <>
                  <p>
                    We bring all packing materials: bubble wrap for fragile
                    items, stretch film for furniture surfaces, carton boxes for
                    loose items, and fabric blankets for wardrobes, sofas, and
                    upholstered pieces.
                  </p>
                  <p>
                    Our{" "}
                    <Link href="/house-shifting-dubai">
                      house movers and packers
                    </Link>{" "}
                    in Al Ain handle house shifting,{" "}
                    <Link href="/villa-movers-in-dubai">villa shifting</Link>,
                    <Link href="/apartment-movers-dubai"> flat shifting</Link>,
                    and apartment moves of every size. We&apos;re careful with
                    bedroom furniture, kitchen appliances, mirrors, artwork, and
                    anything that needs extra protection.
                  </p>
                </>
              ),
              img: {
                src: "/loc/house-villa-movers-al-ain-professional-residential-moving-service.jpg",
                alt: "Professional house and villa movers in Al Ain with branded uniforms carefully packing furniture and boxes in a modern white villa with moving truck visible - residential moving services",
              },
            },
            {
              id: "office-and-commercial-movers-in-al-ain",
              name: "Office & Commercial Movers in Al Ain",
              description: (
                <>
                  <p>
                    Commercial moves require a level of trust that residential
                    moves don&apos;t always demand. You&apos;re moving
                    computers, servers, filing cabinets, reception furniture,
                    and sometimes equipment that&apos;s expensive to replace.
                  </p>
                </>
              ),
              extra: (
                <>
                  <p>
                    Our{" "}
                    <Link href="/office-movers-in-dubai">office movers</Link> in
                    Al Ain manage full office relocations,{" "}
                    <Link href="/bank-furniture-moving-uae">
                      bank furniture moving
                    </Link>
                    ,{" "}
                    <Link href="/school-furniture-moving-uae">
                      school furniture moving
                    </Link>
                    , hospital equipment, restaurant furniture, and warehouse
                    moving. We&apos;re a registered company with verifiable
                    credentials — you can check our Google Business Profile,
                    speak to the owner, and confirm every detail before we
                    start.
                  </p>
                  <p>
                    This is exactly why commercial clients should avoid
                    freelance movers who have no legal permission to operate and
                    no accountability if something goes wrong.
                  </p>
                </>
              ),
              img: {
                src: "/loc/office-commercial-movers-al-ain-professional-relocation-service.jpg",
                alt: "Professional office and commercial movers in Al Ain with branded uniforms and company phone number moving corporate equipment and servers - commercial relocation services",
              },
            },
            {
              id: "furniture-movers-in-al-ain",
              name: "Furniture Movers in Al Ain",
              description: (
                <>
                  <p>
                    Not every move is a full house. Sometimes you just need to
                    move a single piece of furniture — a wardrobe, a sofa, a
                    large dining table, or a heavy safe.
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
                    in Al Ain handle single-item moves just as professionally as
                    full-house jobs. We also move specialist items: heavy safes,
                    industrial machinery, hospital equipment, and other large or
                    unusual pieces that most movers won&apos;t take on. If you
                    have a specific requirement, contact us and we&apos;ll
                    confirm what we can do.
                  </p>
                </>
              ),
              img: {
                src: "/loc/furniture-movers-al-ain-single-item-sofa-wardrobe-moving-service.jpg",
                alt: "Professional furniture movers in Al Ain carefully moving modern sofa and wardrobe with specialized equipment - single furniture item moving services",
              },
            },
            {
              id: "packing-storage-and-additional-services",
              name: "Packing, Storage & Additional Services",
              description: (
                <>
                  <p>
                    <Link href="/packing-services-in-dubai">
                      Our packing services
                    </Link>{" "}
                    in Al Ain cover the full process — we bring materials, pack
                    everything, and label all boxes for easy unpacking at the
                    other end. You can hand the whole packing job to us or
                    we&apos;ll work alongside you, depending on what suits you.
                  </p>
                </>
              ),
              extra: (
                <>
                  <p>
                    We also offer storage services in Al Ain for customers who
                    need a gap between moves. This includes self-storage and
                    furniture storage options. And for customers moving into a
                    new property, we provide curtain fixing and installation as
                    an add-on service.
                  </p>
                </>
              ),
              img: {
                src: "/loc/packing-storage-curtain-installation-al-ain-comprehensive-moving-services.jpg",
                alt: "Professional packing and storage services in Al Ain warehouse with labeled boxes, bubble wrap, furniture storage, and curtain installation - complete moving solutions",
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
      <MovingProcess />
      <ReviewSection reviews={googleReviews} />
      <section className="max-w-6xl w-full mx-auto mt-20 md:px-0 px-4">
        <div className="text-center pb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Open Truck vs. Enclosed Box Truck:{" "}
            <br className="hidden sm:block" />
            <span className="text-primary font-normal">Which Do You Need?</span>
          </h2>
          <p className="md:text-lg text-muted-foreground max-w-2xl mx-auto">
            This is a practical question worth understanding before you book any
            movers in Al Ain.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-0 border-t border-slate-100">
          {/* Enclosed Box Truck Section */}
          <div className="p-6 sm:p-12 border-b md:border-b-0 md:border-r border-slate-100 bg-red-50/50 ">
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Enclosed Box Trucks
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900 font-semibold">
                  Fully sealed protection.
                </strong>{" "}
                Your furniture, electronics, and packed boxes sit inside a
                covered compartment — completely protected from dust, sand, and
                heat.
              </p>

              {/* Al Ain Climate Context */}
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 my-6">
                <h3 className="flex items-center gap-2 font-semibold text-orange-900 mb-2">
                  <ThermometerSun className="w-5 h-5 text-orange-600" />
                  Why it matters in Al Ain
                </h3>
                <p className="text-sm text-orange-800">
                  Summer temperatures regularly hit <strong>45°C</strong> and{" "}
                  <span className="inline-flex items-center gap-1">
                    <Wind className="w-3 h-3" /> sandstorms
                  </span>{" "}
                  can arrive without warning.
                </p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-300 mt-2.5 shrink-0"></div>
                  <p>
                    Prevents <strong>electronics</strong> from overheating.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-300 mt-2.5 shrink-0"></div>
                  <p>
                    Stops <strong>wooden furniture</strong> from warping.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-300 mt-2.5 shrink-0"></div>
                  <p>
                    Keeps <strong>fabric</strong> from absorbing fine,
                    difficult-to-remove dust.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Open Pickup Truck div */}
          <div className="p-6 sm:p-12 hover:bg-slate-50/50 transition-colors duration-300">
            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <Truck className="w-7 h-7 text-slate-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Open Pickup Trucks
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                A reasonable choice for{" "}
                <strong className="text-slate-900 font-semibold">
                  single-item
                </strong>{" "}
                or{" "}
                <strong className="text-slate-900 font-semibold">
                  short-distance
                </strong>{" "}
                moves.
              </p>
              <p>
                They are ideal when the weather isn&apos;t a concern and the
                item being moved isn&apos;t sensitive to heat or dust exposure.
              </p>
              <div className="bg-slate-50 rounded-xl p-4 mt-6 border border-slate-100">
                <p className="text-sm flex items-start gap-3 text-slate-700">
                  <PackageCheck className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>
                    They are generally easier and faster to load and unload for
                    very straightforward jobs.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer / CTA Section */}
        <div className="bg-foreground mt-10 text-white p-6 sm:p-10 lg:px-12 flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-3xl">
          <div className="bg-red-500/50 p-4 rounded-2xl shrink-0">
            <BadgeCheck className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Our RTA-Approved Fleet
            </h3>
            <p className="text-slate-300 text-base sm:text-lg ">
              We operate <strong>3-ton</strong> and{" "}
              <strong>4-ton enclosed box trucks</strong>. For any full
              residential or commercial move, we always recommend enclosed — and
              that&apos;s exactly what we use as our standard.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-5xl w-full mx-auto overflow-hidden rounded-3xl mt-20 md:px-0 px-4">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 font-medium text-sm mb-6">
            <Wallet className="w-4 h-4" />
            <span>Price Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Moving Costs in Al Ain
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto ">
            Moving costs depend on the number of rooms, the distance, and the
            services you need. The table below shows approximate starting
            ranges. Your final rate is confirmed after a{" "}
            <strong className=" font-semibold">free on-site survey</strong>.
          </p>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto bg-white mt-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-foreground/90 text-white text-xs sm:text-sm uppercase tracking-wider">
                <th className="p-4 sm:px-8 sm:py-5 font-semibold whitespace-nowrap">
                  Move Type
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
                { type: "Studio Apartment", from: "800", to: "1,400" },
                { type: "1-Bedroom Apartment", from: "1,000", to: "2,500" },
                { type: "2-Bedroom Apartment", from: "1,200", to: "3,000" },
                {
                  type: "3-Bedroom Apartment / Villa",
                  from: "1,500",
                  to: "3,500",
                },
                { type: "4-Bedroom Villa", from: "1,700", to: "5,000" },
                { type: "5+ Bedroom Villa", from: "2,200", to: "7,000+" },
                {
                  type: "Office / Commercial",
                  from: "Contact us for a custom quote",
                  to: "—",
                  isCustom: true,
                },
              ].map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/70 transition-colors"
                >
                  <td className="p-4 sm:px-8 sm:py-5 font-medium text-slate-900 whitespace-nowrap">
                    {row.type}
                  </td>
                  {row.isCustom ? (
                    <td
                      colSpan={2}
                      className="p-4 sm:px-8 sm:py-5 text-primary font-medium whitespace-nowrap"
                    >
                      {row.from}
                    </td>
                  ) : (
                    <>
                      <td className="p-4 sm:px-8 sm:py-5 text-slate-600 font-medium whitespace-nowrap">
                        {row.from}
                      </td>
                      <td className="p-4 sm:px-8 sm:py-5 text-slate-600 font-medium whitespace-nowrap">
                        {row.to}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <div className="bg-red-50/50 p-6 sm:p-8 border-t border-red-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-100 shrink-0">
            <Info className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-foreground font-semibold mb-1">
              Whatever you&apos;re quoted is what you pay.
            </p>
            <p className="text-muted-foreground leading-tight">
              No additions, no last-minute extras. If you want to check how our
              rates compare in more detail, see our full moving prices page.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-20 max-w-7xl md:px-10 px-4 mx-auto">
        <h2 className="md:text-4xl text-3xl font-bold text-center">
          Areas We Serve in Al Ain
        </h2>
        <p className="text-muted-foreground mt-5 text-center">
          Our movers in Al Ain cover every neighbourhood and district across the
          city. Below are the main areas we serve regularly.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
          {[
            {
              t: "Movers in Al Hili Al Ain",
              l: "#",
            },
            {
              t: "Movers in Al Jimi Al Ain",
              l: "#",
            },
            {
              t: "Movers in Al Towayya / Al Tiwayyah Al Ain",
              l: "#",
            },
            {
              t: "Movers in Falaj Hazza Al Ain",
              l: "#",
            },
            {
              t: "Movers in Al Qattarah Al Ain",
              l: "#",
            },
            {
              t: "Movers in Al Muwaiji Al Ain",
              l: "#",
            },
            {
              t: "Movers in Al Yahar Al Ain",
              l: "#",
            },
            {
              t: "Movers in Mazyad Al Ain",
              l: "#",
            },
            {
              t: "Movers in Al Ameriya Al Ain",
              l: "#",
            },
            {
              t: "Movers in Al Salamat Al Ain",
              l: "#",
            },
            {
              t: "Movers in Zakhir / Al Maqam Al Ain",
              l: "#",
            },
            {
              t: "Movers in Al Ain Industrial Area",
              l: "#",
            },
            {
              t: "Movers in Al Ain – Abu Dhabi corridor",
              l: "#",
            },
            {
              t: "Movers in Al Ain city centre",
              l: "#",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white text-foreground  px-4 border py-2 text-sm rounded-4xl flex items-center gap-2"
            >
              <span className="text-primary"> ✔</span>{" "}
              <Link href={t.l}>{t.t} </Link>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-5 text-center max-w-4xl mx-auto">
          Don&apos;t see your area? We serve all of Al Ain. We also cover Dubai,
          Abu Dhabi, Sharjah, Ras Al Khaimah, Ajman, Fujairah, Umm Al Quwain,
          and all other UAE emirates from a single booking.
        </p>
      </section>
      <FAQSection
        title="Frequently Asked Questions - Movers in Al Ain"
        faqs={AlAinMovingFAQs}
      />
      <section className="max-w-4xl mx-auto mt-10 md:px-0 px-4 flex flex-col gap-y-5">
        <div>
          <h2 className="md:text-4xl text-3xl font-bold">
            Why We Are the Best Movers and Packers in Al Ain
          </h2>
          <p className="text-muted-foreground mt-3">
            Here&apos;s a straightforward summary of what you get when you book
            with us.
          </p>
          <div className="text-muted-foreground flex flex-col gap-y-1 mt-2">
            <ul className="list-inside list-disc">
              <li>
                Founded 1998 — over 25 years of moving experience across the UAE
              </li>
              <li>Thousands of completed moves across all seven Emirates</li>
              <li>
                RTA-approved enclosed box trucks — built for UAE heat and
                sandstorm conditions
              </li>
              <li>
                Certified carpenters and professional packing helpers on every
                job
              </li>
              <li>
                English and Arabic speaking team — clear communication
                throughout
              </li>
              <li>100% insurance coverage included on every move</li>
              <li>No hidden charges — your quoted price is your final price</li>
              <li>
                Pay Upon Satisfaction — you pay only when you&apos;re happy with
                the result
              </li>
              <li>Same-day urgent service available for unexpected moves</li>
              <li>
                Verified Google Business Profile — check our reviews and confirm
                our credentials
              </li>
            </ul>
            <p>
              Ready to move in Al Ain? Call or WhatsApp us for a free quote.
            </p>
          </div>
        </div>
      </section>
      <CTA
        title="Get a Free Moving Quote in Al Ain"
        desc="Getting a quote is free and takes only a few minutes. Call us, send a WhatsApp message, or fill out the quote form on our website. We'll review your requirements and send a full itemised quote — no guesswork, no hidden costs. One call covers everything: site survey, final pricing, and scheduling. We're available across all of Al Ain and throughout the UAE. Most customers get their quote on the same day they contact us. If you're comparing moving companies in Al Ain, check our Google Business Profile. Read the reviews. If you want to confirm more details, you can speak to the owner directly. "
      />
    </main>
  );
};

export default MoversInAlAin;

const googleReviews = [
  {
    name: "Saeed Al Kaabi",
    time: "1 week ago",
    star: 5,
    review:
      "Moved my villa in Al Muwaiji last week. The packers were quick, didn't damage anything, and charged exactly what they quoted.",
    image: "/ava/32.jpg",
  },
  {
    name: "Ayesha Al Dhaheri",
    time: "3 weeks ago",
    star: 5,
    review:
      "These guys moved us in Al Ain from Al Jimi to Zakher. Nothing broke, no surprise charges. Exactly what you want in a moving company.",
    image: "/ava/44.jpg",
  },
  {
    name: "Mark Taylor",
    time: "2 days ago",
    star: 5,
    review:
      "Moved from Al Ain to Abu Dhabi with them. They handled the heavy stuff and put my wardrobes back together properly at the new place.",
    image: "/ava/86.jpg",
  },
  {
    name: "Riya Patel",
    time: "1 month ago",
    star: 5,
    review:
      "The packing was solid. They wrapped all my dishes carefully and got us moved to Al Maqam without any of the usual stress.",
    image: "/ava/68.jpg",
  },
  {
    name: "Khalid Mansour",
    time: "2 weeks ago",
    star: 5,
    review:
      "Best movers I've used in Al Ain. On time, friendly, and they actually stayed until every piece was positioned right.",
    image: "/ava/22.jpg",
  },
  {
    name: "Fatima Hassan",
    time: "5 days ago",
    star: 5,
    review:
      "Was concerned about my garden furniture and fragile items, but they handled everything without a problem. Really dependable crew.",
    image: "/ava/90.jpg",
  },
  {
    name: "Tariq Mehmood",
    time: "3 weeks ago",
    star: 5,
    review:
      "Moved my office in Al Towayya and they came ready with their own boxes and materials. Got it done fast so we didn't lose much business time.",
    image: "/ava/54.jpg",
  },
  {
    name: "Sarah Jones",
    time: "4 weeks ago",
    star: 5,
    review:
      "Good rates and they know how to pack. Got my 65-inch TV and electronics across safely. No damage, no stress.",
    image: "/ava/29.jpg",
  },
];
