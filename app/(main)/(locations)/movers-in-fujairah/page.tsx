import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import { LocHeroSection } from "@/components/LocHeroSection";
import MovingProcess from "@/components/MovingProcess";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import { Button } from "@/components/ui/button";
import { FujairahMovingFAQs } from "@/lib/FaqsData";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import heroImage from "@/public/loc/movers-in-fujairah-professional-moving-service-hero.jpg";
import {
  Boxes,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  MapPin,
  MessageCircle,
  PackageSearch,
  PhoneCall,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Best Movers in Fujairah – Professional Moving Company UAE",
      desc: "Movers in Fujairah with 25+ years experience. Fast, reliable service with no hidden charges. Same-day moves available. Free quote & pay-upon-satisfaction guarantee.",
    },
    image: {
      path: "/loc/movers-in-fujairah-professional-moving-service-hero.jpg",
      alt: "Professional movers in Fujairah with branded uniforms and company equipment moving household items and furniture from modern villa - expert moving and packing services",
    },
    path: "/movers-in-fujairah",
  },
});

const MoversInFujairah = () => {
  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "Best Movers in Fujairah",
        url: "/movers-in-fujairah",
      },
    ],
  });
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumb }}
      />

      <main>
        <LocHeroSection
          h1={
            <>
              Movers in Fujairah <br className="block" />
              <span className="font-normal">
                Moving & Packing Services in Fujairah
              </span>
            </>
          }
          desc={
            <>
              <p>
                If you need reliable movers in Fujairah, you have come to the
                right place. Movers and Packers in UAE is a licensed moving
                company that has been operating across all seven emirates since
                1998.
              </p>
              <p>
                We are one of the few movers and packers in Fujairah with over
                25 years of documented experience — thousands of successful
                moves completed, and a company that was registered long before
                most freelance operators even started.
              </p>
            </>
          }
          id="movers-in-fujairah"
          img={{
            src: heroImage,
            alt: "Professional movers in Fujairah with branded uniforms and company equipment moving household items and furniture from modern villa - expert moving and packing services",
          }}
        />
        <section className="mt-20 max-w-4xl mx-auto md:px-0 px-4">
          <p className="md:text-2xl text-xl font-bold text-center">
            Whether you are relocating your home, office, villa, or moving a
            single piece of furniture, our trained team handles the entire
            process for you.
          </p>
          <p className="text-center mt-5 text-muted-foreground">
            Packing, loading, transport, and setup — all done properly. Get a
            free quote today by calling us or sending a WhatsApp message. We
            respond within minutes.
          </p>
        </section>

        <QuotationSection
          title={
            <>
              <span className="font-bold md:block">Get A Moving Quote</span>{" "}
              From Movers and Packers in Fujairah
            </>
          }
          btnText="Get A Quote From Movers in Fujairah"
          desc="Call us or send a WhatsApp message for a free quote — our movers and packers in fujairah will get back to you quickly with a clear, fixed price. We handle everything, from packing and loading to transport and installation. "
        />

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
                Our Packing and Moving{" "}
                <span className="font-bold md:block">
                  Services in Fujairah
                </span>{" "}
              </h2>
            </div>
            <div>
              <p className="text-gray-200">
                We offer a full range of moving and packing services in Fujairah
                for both residential and commercial customers. Every job is
                handled according to your requirements — no fixed packages, no
                unnecessary extras.
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
                id: "House-Movers-in-Fujairah",
                name: "House Movers in Fujairah",
                description: (
                  <>
                    <p>
                      Moving an entire home takes planning and care. Our team
                      handles everything from packing kitchen items and bedroom
                      furniture to dismantling beds and wardrobes, loading them
                      safely, and reassembling everything at your new place.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      We treat your home the way we would treat our own — with
                      full protection and privacy throughout. Keywords:{" "}
                      <Link href="/house-shifting-dubai">house movers</Link> in
                      fujairah, home relocation fujairah.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/house-movers-fujairah-full-home-shifting-service-residential.jpg",
                  alt: "Movers and Packers in UAE team carefully carrying a wrapped sofa and labeling boxes during a complete house moving service inside a Fujairah residential home",
                },
              },
              {
                id: "Villa-Movers-in-Fujairah",
                name: "Villa Movers in Fujairah",
                description: (
                  <>
                    <p>
                      Villas come with large furniture, multiple floors, and
                      sometimes valuable items that need extra attention. Our
                      <Link href="/villa-movers-in-dubai">
                        villa movers{" "}
                      </Link>{" "}
                      in Fujairah use fully enclosed box trucks for all villa
                      moves — your furniture stays protected from
                      Fujairah&apos;s heat and dust, no matter the season.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/villa-movers-fujairah-enclosed-truck-large-home-relocation.jpg",
                  alt: "Movers and Packers in UAE team loading wrapped villa furniture into a fully enclosed branded moving truck outside a Fujairah villa with Hajar Mountains in the background",
                },
              },
              {
                id: "Apartment-Movers-in-Fujairah",
                name: "Apartment Movers in Fujairah",
                description: (
                  <>
                    <p>
                      <Link href="/apartment-movers-dubai">
                        Apartment moving
                      </Link>{" "}
                      need careful coordination — elevator access, building
                      management approvals, and moving without disturbing
                      neighbours. Our team is experienced with exactly this. We
                      handle the logistics so you do not have to.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/apartment-movers-fujairah-elevator-building-management-relocation.jpg",
                  alt: "Movers and Packers in UAE team moving wrapped furniture through an elevator and corridor with building management approval inside a Fujairah apartment building",
                },
              },
              {
                id: "Office-Relocation-in-Fujairah",
                name: "Office Relocation in Fujairah",
                description: (
                  <>
                    <p>
                      We understand that every hour of downtime costs your
                      business. Our{" "}
                      <Link href="/office-movers-in-dubai">office movers</Link>{" "}
                      in Fujairah can work after hours or on weekends to keep
                      disruption minimal. IT equipment, documents, office
                      furniture, and sensitive files — all transported securely
                      and placed exactly where you need them.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/office-movers-fujairah-commercial-relocation-after-hours-it-equipment.jpg",
                  alt: "Movers and Packers in UAE team professionally packing IT equipment, documents, and office furniture during an after-hours office relocation in Fujairah",
                },
              },
              {
                id: "Furniture-Movers-in-Fujairah",
                name: "Furniture Movers in Fujairah",
                description: (
                  <>
                    <p>
                      Not every move is a full relocation. If you need to move a
                      single sofa, wardrobe, heavy safe, or any standalone
                      piece, we handle single-item moves too. Our carpenters can
                      disassemble and reassemble any furniture — Italian, IKEA,
                      modular, or royal designs.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/furniture-movers-fujairah-single-item-specialist-carpenter-dismantling.jpg",
                  alt: "Movers and Packers in UAE specialist carpenter carefully dismantling a modular Italian wall unit for a single-item furniture move in a Fujairah apartment",
                },
              },
              {
                id: "Packing-and-Unpacking-Services-in-Fujairah",
                name: "Packing & Unpacking Services in Fujairah",
                description: (
                  <>
                    <p>
                      We use proper packing materials — bubble wrap, stretch
                      film, carton boxes, fabric blankets, and corrugated rolls.
                      Every box is labelled by room, so unpacking is organised
                      and fast.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      You can choose full-room packing or partial packing
                      depending on your needs.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/packing-unpacking-services-fujairah-professional-home-packing-labeling.jpg",
                  alt: "Movers and Packers in UAE team professionally packing and labeling fragile kitchen items and clothes using proper packing materials inside a Fujairah home",
                },
              },
              {
                id: "Storage Services in Fujairah",
                name: "Storage-Services-in-Fujairah",
                description: (
                  <>
                    <p>
                      Need somewhere to keep your belongings during the move? We
                      offer short-term and long-term storage in Fujairah —
                      secure warehousing for furniture, household items, and
                      commercial goods.
                    </p>
                  </>
                ),

                img: {
                  src: "/loc/storage-services-fujairah-secure-warehouse-furniture-storage.jpg",
                  alt: "Movers and Packers in UAE team member organizing labeled boxes and wrapped furniture inside a secure climate-aware storage warehouse in Fujairah",
                },
              },
              {
                id: "Industrial-and-Specialist-Moving-in-Fujairah",
                name: "Industrial & Specialist Moving in Fujairah",
                description: (
                  <>
                    <p>
                      Beyond household moves, we also move industrial machinery,
                      hospital equipment, heavy safes, restaurant furniture,
                      school furniture, and bank furniture.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      This is a specialist service that most moving companies in
                      Fujairah do not offer. If you have a non-standard moving
                      requirement, contact us and we will give you a clear plan
                      and price.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/industrial-specialist-movers-fujairah-heavy-equipment-safe-relocation.jpg",
                  alt: "Movers and Packers in UAE specialist team using hydraulic equipment to safely relocate heavy industrial machinery and a large safe inside a Fujairah industrial facility",
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
        <section className="max-w-7xl mx-auto mt-20 md:px-10 px-4">
          {/* Main Header Section */}
          <div className="text-center mb-10 max-w-4xl mx-auto">
            <h2 className="md:text-4xl text-3xl font-bold mb-6">
              <span className="font-normal block">Why Choose </span> Movers and
              Packers UAE in Fujairah
            </h2>
            <p className="text-muted-foreground">
              There are a number of moving companies in fujairah. Here is what
              makes a real difference.
            </p>
          </div>

          {/* CSS Grid Section - 1 col on mobile, 2 cols on lg screens */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-10">
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
        <section className="mt-20 max-w-7xl md:px-10 px-4 mx-auto">
          <h2 className="md:text-4xl text-3xl font-bold text-center">
            Areas We Serve in Fujairah
          </h2>
          <p className="text-muted-foreground mt-5 text-center">
            Our movers cover the entire emirate of Fujairah. From the city
            centre to the outskirts near the Hajar Mountains, and all the way
            along the Gulf of Oman coastline — we reach you. Here are the main
            areas we serve:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
            {[
              {
                t: "Movers in Fujairah City Centre",
                l: "#",
              },
              {
                t: "Movers in Sakakam Fujairah",
                l: "#",
              },
              {
                t: "Movers in Madhab Fujairah",
                l: "#",
              },
              {
                t: "Movers in Al Hayl Fujairah",
                l: "#",
              },
              {
                t: "Movers in Merashid Fujairah",
                l: "#",
              },
              {
                t: "Movers in Qidfa Fujairah",
                l: "#",
              },
              {
                t: "Movers in Dibba Al Fujairah",
                l: "#",
              },
              {
                t: "Movers in Khor Fakkan Fujairah",
                l: "#",
              },
              {
                t: "Movers in Surrounding rural and mountain communities Fujairah",
                l: "#",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white text-foreground  px-4 border py-2 text-sm rounded-4xl flex items-center gap-2"
              >
                <span className="text-primary"> ✔</span>{" "}
                {/* <Link href={t.l}>{t.t} </Link> */}
                <p>{t.t} </p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-5 text-center max-w-4xl mx-auto">
            We also handle inter-emirate moves. If you are moving from Dubai to
            Fujairah, or from Fujairah to Abu Dhabi, Sharjah, or any other
            emirate, we cover those routes regularly. Just let us know your
            start and end points and we will give you a clear quote.
          </p>
        </section>
        <section className="max-w-6xl w-full mx-auto mt-20 md:px-0 px-4">
          <div className="text-center pb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Moving Trucks & Equipment in Fujairah
              <br className="hidden sm:block" />
              <span className="text-primary font-normal">
                Which Do You Need?
              </span>
            </h2>
            <p className="md:text-lg text-muted-foreground max-w-2xl mx-auto">
              This is a practical question worth understanding before you book
              any movers in fujairah.
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
                Fully Enclosed Box Trucks <br className="hidden md:block" />{" "}
                (Recommended for Fujairah)
              </h3>
              <div className="space-y-2 text-slate-600 leading-relaxed">
                <p>
                  Fujairah&apos;s summer temperatures regularly exceed 45°C.
                  Sandstorms hit without much warning. If your furniture or
                  electronics travel in an open truck during these conditions,
                  the risk of damage is real — not theoretical.
                </p>
                <p>
                  Our fully enclosed, RTA-approved box trucks seal your
                  belongings away from heat, dust, and sand throughout the
                  entire journey.
                </p>
                <p>
                  Available in 3-ton and 4-ton capacities depending on your move
                  size. For any move in Fujairah — especially in summer months —
                  we strongly recommend the enclosed option.
                </p>
              </div>
            </div>

            {/* Open Pickup Truck div */}
            <div className="p-6 sm:p-12 hover:bg-slate-50/50 transition-colors duration-300">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Truck className="w-7 h-7 text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Open Moving Trucks <br className="hidden md:block" />{" "}
                (Budget-Friendly Option)
              </h3>
              <div className="space-y-2 text-slate-600 leading-relaxed">
                <p>
                  For short, simple furniture shifts on cooler days, open trucks
                  are a practical and cost-effective choice. Loading and
                  unloading is quicker.
                </p>
                <p>
                  If you are moving a small number of items on a clear day and
                  cost is the priority, this works fine. Our team will always
                  advise you honestly on which truck is right for your
                  situation.
                </p>
                <p>
                  We also carry all necessary equipment on-site: hydraulic
                  lifts, heavy-duty dollies, and full carpentry tools for
                  furniture dismantling and reassembly.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl w-full mx-auto md:px-10 px-4 mt-20">
          {/* Header */}

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How Much Do Movers in Fujairah Cost?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Moving costs in Fujairah are not one-size-fits-all. The final price
            depends on several factors:
          </p>

          {/* Content Split */}
          <div className="grid md:grid-cols-2 mt-10">
            {/* Factors List */}
            <section className="border-b md:border-b-0 md:border-r border-slate-100 p-6 sm:p-8">
              <ul className="space-y-6">
                {[
                  {
                    icon: Boxes,
                    title: "Volume of items",
                    desc: "How many rooms, how much furniture",
                  },
                  {
                    icon: MapPin,
                    title: "Distance",
                    desc: "Local move within Fujairah or inter-emirate",
                  },
                  {
                    icon: Building2,
                    title: "Floor level",
                    desc: "Ground floor vs. sixth floor with no lift makes a difference",
                  },
                  {
                    icon: PackageSearch,
                    title: "Packing add-ons",
                    desc: "Full packing, partial packing, or self-pack",
                  },
                  {
                    icon: Truck,
                    title: "Truck size required",
                    desc: "3-ton vs. 4-ton, open vs. enclosed",
                  },
                ].map((factor, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 border flex items-center justify-center shrink-0 mt-0.5">
                      <factor.icon
                        className="w-5 h-5 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {factor.title}
                      </h4>
                      <p className="text-sm text-slate-500 mt-1">
                        {factor.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Explanation & Guarantee */}
            <section className="p-6 sm:p-8 bg-slate-50/50 flex flex-col justify-center">
              <div className="prose prose-slate prose-sm sm:prose-base leading-relaxed text-slate-600 mb-8">
                <p>
                  We do not publish fixed prices because no two moves are the
                  same. What we do offer is a{" "}
                  <strong className="text-slate-900 font-semibold">
                    free, transparent quote
                  </strong>
                  .
                </p>
                <p>
                  Send us WhatsApp photos of your items or call us to describe
                  your move — a supervisor will assess and give you a full price
                  breakdown. No vague estimates, no surprise charges on moving
                  day.
                </p>
              </div>

              {/* Price Guarantee Box */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">
                    The Deal — Always
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  If your quoted price is{" "}
                  <strong className="text-foreground bg-red-50 px-1 rounded">
                    800 AED
                  </strong>
                  , you pay{" "}
                  <strong className="text-foreground bg-red-50 px-1 rounded">
                    800 AED
                  </strong>
                  .
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                    Accepted Payments (Post-Completion)
                  </p>
                  <p className="text-sm text-slate-700 font-medium">
                    Cash • Online Bank Transfer • Bank Cheque
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Call to Action div */}
          <div className="bg-foreground rounded-3xl mt-5 text-white p-6 sm:p-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">
                Need a price estimate?
              </h3>
              <p className="text-emerald-100">
                We&apos;ll get back to you within minutes.
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

        <FAQSection
          title="Frequently Asked Questions — Movers in Fujairah"
          faqs={FujairahMovingFAQs}
        />
        <section className="max-w-4xl mx-auto mt-10 md:px-0 px-4 flex flex-col gap-y-5">
          <div>
            <h2 className="md:text-4xl text-3xl font-bold">
              About Movers and Packers in UAE — Serving Fujairah Since 1998
            </h2>
            <p className="text-muted-foreground mt-3">
              <Link href="/">Movers and Packers in UAE</Link> was registered in
              1998 and has been running professional moving operations ever
              since. We are based in Dubai and operate across all seven UAE
              emirates, including regular moves throughout Fujairah.
            </p>
            <p className="text-muted-foreground mt-3">
              Over 25 years, we have completed thousands of moves — homes,
              villas, apartments, offices, and specialist commercial jobs. We
              built the company on two principles: Protection and Privacy. Every
              item we move is treated with care. Every home and office we enter
              is treated with respect.
            </p>
            <p className="text-muted-foreground mt-3">
              We have a verified Google Business Profile, a bilingual team, and
              an owner who has been in this industry since before most of the
              current competition existed. If you want to speak with someone
              before booking, just call. We are straightforward people who do
              good work.
            </p>
            <h3 className="text-muted-foreground mt-3">
              Get Your Free Moving Quote in Fujairah — Call or WhatsApp Now
            </h3>
            <p className="text-muted-foreground mt-3">
              No obligations. No hidden charges. Response within minutes.
            </p>
          </div>
        </section>
        <CTA
          title="Contact The Best Movers and Packers in Fujairah"
          desc="We have been helping families and businesses relocate across Ajman and the UAE since 1998. Over 25 years of experience. A team that speaks English and Arabic. RTA-approved enclosed trucks. And a simple rule: you pay only after you are satisfied with the work."
        />
      </main>
    </>
  );
};

export default MoversInFujairah;

const features = [
  {
    title: "25+ Years of Experience",
    desc: "We have been operating since 1998 — longer than most freelance movers have even existed. Thousands of successful moves completed across the UAE give us experience you simply cannot fake.",
    buttonText: "Learn Our History",
  },
  {
    title: "Pay Upon Satisfaction",
    desc: "You pay only after the job is finished and you are satisfied. No deposits, no upfront payments. We are not a fly-by-night operator — we stand behind every move we complete.",
    buttonText: "Book Risk-Free",
  },
  {
    title: "No Hidden Charges",
    desc: "Your quoted price is your final price. If the quote says 1,000 AED, that is what you pay — not a dirham more. Everything is confirmed in writing on WhatsApp before the move starts.",
    buttonText: "Get a Quote",
  },
  {
    title: "Same-Day Moving Available",
    desc: "Need to move urgently? We offer same-day service across Fujairah and the UAE. Call or WhatsApp us with your situation and we will arrange the fastest available option.",
    buttonText: "Move Now",
  },
  {
    title: "Licensed & Registered Since 1998",
    desc: "We are an officially registered moving company with a verified Google Business Profile. You can check us, call us, and meet the owner before you book. No anonymous operators here.",
    buttonText: "Verify Our License",
  },
  {
    title: "RTA-Approved Enclosed Box Trucks",
    desc: "Fujairah summers exceed 45°C and sandstorms are common. Open trucks expose your furniture and electronics to real damage. Our sealed, climate-protected fleet keeps everything safe in transit.",
    buttonText: "View Our Fleet",
  },
  {
    title: "Bilingual Team (English & Arabic)",
    desc: "Our crew works in both English and Arabic. Clear communication throughout — no confusion, no surprises on the day of your move.",
    buttonText: "Contact Us",
  },
  {
    title: "Protection & Privacy First",
    desc: "We know that letting strangers into your home — especially bedrooms and kitchens — requires real trust. Our team operates with full discretion and respect for your privacy at every step.",
    buttonText: "View Privacy Policy",
  },
];

const googleReviews = [
  {
    name: "Abdullah Al Yamani",
    time: "2 weeks ago",
    star: 5,
    review:
      "Moved our villa in Al Faseel last weekend. The team was fast and treated the heavy furniture carefully. No damage, no complaints.",
    image: "/ava/32.jpg",
  },
  {
    name: "Priya Desai",
    time: "1 month ago",
    star: 5,
    review:
      "Good movers and packers in Fujairah. They came with boxes and materials, and got our 2BHK to Dibba without any issues.",
    image: "/ava/44.jpg",
  },
  {
    name: "Marcus Cole",
    time: "3 days ago",
    star: 5,
    review:
      "Hired them for the long haul from Fujairah to Dubai. They showed up when they said they would and everything arrived intact.",
    image: "/ava/86.jpg",
  },
  {
    name: "Fatima Balushi",
    time: "1 week ago",
    star: 5,
    review:
      "Reasonable prices and they know what they're doing. Packed my dishes carefully and put my bed back together properly at the new place.",
    image: "/ava/68.jpg",
  },
  {
    name: "Tariq Hameed",
    time: "2 months ago",
    star: 5,
    review:
      "Best movers we've found on the east coast. Moved our small office near Fujairah City Center and we barely missed a beat.",
    image: "/ava/22.jpg",
  },
  {
    name: "Sarah O'Connor",
    time: "4 weeks ago",
    star: 5,
    review:
      "We needed a last-minute move and they said yes right away. The crew was friendly and actually helped us figure things out as we went.",
    image: "/ava/90.jpg",
  },
  {
    name: "Amit Sharma",
    time: "5 days ago",
    star: 5,
    review:
      "Dragged my heavy wardrobes and appliances down three flights and got them down without a scratch. That takes skill.",
    image: "/ava/54.jpg",
  },
  {
    name: "Zainab Ali",
    time: "3 weeks ago",
    star: 5,
    review:
      "They didn't leave a mess and handled everything like it mattered. The whole move was smooth. Really glad I called them.",
    image: "/ava/29.jpg",
  },
];
