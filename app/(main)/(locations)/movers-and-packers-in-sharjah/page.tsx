import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import { LocHeroSection } from "@/components/LocHeroSection";
import MovingProcess from "@/components/MovingProcess";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import { Button } from "@/components/ui/button";
import { SharjahMovingFAQs } from "@/lib/FaqsData";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import heroImage from "@/public/loc/movers-packers-sharjah-professional-moving-service-uae.jpg";

import { ChevronRight, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers and Packers in Sharjah | Trusted Since 1998",
      desc: "Movers and packers in Sharjah. Same-day moves, transparent pricing & no hidden charges. Pay upon satisfaction. Licensed since 1998. Free quote Call now.",
    },
    image: {
      path: "/loc/movers-packers-sharjah-professional-moving-service-uae.jpg",
      alt: "Movers and Packers in uae professional team loading furniture into a branded moving truck on the Sharjah corniche with Al Noor Mosque visible in the background",
    },
    path: "/movers-and-packers-in-sharjah",
  },
});

const MoversInSharjahPage = () => {
  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "Movers and Packers in Sharjah",
        url: "/movers-and-packers-in-sharjah",
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
              Movers and Packers in Sharjah <br className="hidden sm:block" />
              <span className="font-normal">
                Professional, Licensed & Affordable
              </span>
            </>
          }
          desc={
            <>
              <p>
                If you’re looking for professional movers and packers in Sharjah you can
                actually trust, we’ve been doing this since 1998. That’s over 25
                years of moving homes, villas, offices, and everything in
                between — across Sharjah and the rest of the UAE.
              </p>
              <p>
                Our team in Sharjah is trained, insured, and ready to provide reliable moving and packing services from start to finish. No hidden charges. No
                disappearing after the job. You pay only when you’re satisfied.
              </p>
            </>
          }
          id="movers-and-packers-in-sharjah"
          img={{
            src: heroImage,
            alt: "Movers and Packers in UAE professional team loading furniture into a branded moving truck on the Sharjah corniche with Al Noor Mosque visible in the background",
          }}
        />
        <QuotationSection
          title={
            <>
              <span className="font-bold md:block">Get Free Moving Quote</span>{" "}
              From Movers and Packers in Sharjah
            </>
          }
          btnText="Get A Quote From Movers in Sharjah"
          desc="Call us or send a WhatsApp message for a free quote — our movers and packers in sharjah will get back to you quickly with a clear, fixed price. We handle everything, from packing and loading to transport and installation. "
        />

        <section
          id="best-movers-and-packers-in-sharjah"
          className="max-w-7xl md:px-10 px-4 mx-auto mt-32"
        >
          <h2 className="md:text-4xl text-3xl text-center">
            Why We Are the Best{" "}
            <span className="md:block font-bold">
              Movers and Packers in Sharjah
            </span>
          </h2>
          <p className="mt-5 text-muted-foreground text-center max-w-4xl mx-auto">
            There are plenty of moving companies in Sharjah. Some are
            registered, most are not. And if you’ve hired a freelance mover
            before, you probably already know how that can go — vague pricing,
            rough handling, no accountability.
          </p>
          <p className="mt-2 text-muted-foreground text-center">
            We’re different because we can prove it. Here’s what we offer:
          </p>
          <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
            {[
              {
                title: "Registered and operating since 1998",
                desc: "Moving Houses and Business in Sharjah Since 1998.",
              },
              {
                title: "25+ years of experience ",
                desc: "more than any of our major competitors in this market",
              },
              {
                title: "Fixed, transparent quotes ",
                desc: "sent to your WhatsApp or email — the price you see is what you pay",
              },
              {
                title: "Pay Upon Satisfaction  ",
                desc: "you don’t pay until the job is done and you’re happy with it",
              },
              {
                title: "100% insurance coverage",
                desc: "on all your items during the move",
              },
              {
                title: "Fully Enclosed Box Trucks",
                desc: "your furniture is protected from Sharjah’s summer heat and sandstorms",
              },
              {
                title: "Multilingual team ",
                desc: "we speak Arabic, English, and Urdu/Hindi",
              },
              {
                title: "Available 24/7",
                desc: "including same-day and emergency moves",
              },
            ].map((item, index) => (
              <div className="border-b border-primary pb-3" key={index}>
                <h3 className=" font-bold  mb-2">{item.title} </h3>
                <p className="text-muted-foreground leading-tight">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-muted-foreground text-center max-w-4xl mx-auto">
            We’re not trying to win your trust with big promises. We’re a legal,
            registered company with a real owner, a real address, and thousands
            of completed moves behind us. That’s the difference.
          </p>
        </section>
        <section
          id="movers-and-packers-in-sharjah-services"
          className="mt-20 max-w-7xl md:px-10 px-4 mx-auto"
        >
          <div className="bg-foreground rounded-2xl md:p-10 px-4 py-10 grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-8">
            <div>
              <p className="uppercase border-b border-primary text-gray-200 w-max">
                Our Moving Services
              </p>
              <h2 className="md:text-4xl text-3xl text-white mt-3">
                Our Moving{" "}
                <span className="font-bold">Services in Sharjah</span>{" "}
                <span className="md:block">Cover Everything</span>
              </h2>
            </div>
            <div>
              <p className="text-gray-200">
                We handle all types of moves — small or large, residential or
                commercial. Here’s a breakdown of what we offer.
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
          <div className="mt-16 grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="bg-white drop-shadow-lg md:p-6 px-4 py-6 rounded-3xl">
              <div className="bg-secondary aspect-video rounded-3xl relative overflow-hidden">
                <Image
                  src={
                    "/loc/house-movers-sharjah-home-shifting-service-apartment.jpg"
                  }
                  alt="Movers & Packers team carefully carrying a wrapped sofa and packed boxes during a full home shifting service in Sharjah"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-8 text-xl font-bold">
                House Movers in Sharjah —{" "}
                <Link href="/house-shifting-dubai">
                  Full Home Shifting Service
                </Link>
              </h3>
              <div className="mt-3 text-muted-foreground flex gap-y-1.5 leading-tight flex-col">
                <p>
                  Moving house in Sharjah is more than just loading a truck—it
                  requires careful packing and safe transport. Our team handles
                  your entire relocation, from dismantling furniture to seamless
                  reassembly at your new home.
                </p>
                <p>
                  We value your trust, treating your personal items and fragile
                  décor with the utmost care. Every move includes a dedicated
                  supervisor and premium packing materials to ensure your
                  belongings remain fully protected.
                </p>
                <p>
                  We serve all residential properties, from apartments to
                  villas.
                </p>
                <p>
                  Whether you need{" "}
                  <Link href="/house-shifting-dubai">local house shifting</Link>{" "}
                  in Sharjah or are relocating to another emirate, we guarantee
                  a stress-free moving experience.
                </p>
              </div>
              <Button quoteBtn className="mt-5">
                Get A Quote For House Moving
              </Button>
            </div>
            <div className="bg-white drop-shadow-lg md:p-6 px-4 py-6 rounded-3xl">
              <div className="bg-secondary aspect-video rounded-3xl relative overflow-hidden">
                <Image
                  src={
                    "/loc/villa-movers-sharjah-large-home-relocation-professional.jpg"
                  }
                  alt="Movers & Packers team dismantling and relocating large villa furniture including a wardrobe and bed frame in Sharjah"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-8 text-xl font-bold">
                Villa Movers in Sharjah -{" "}
                <Link href="/villa-movers-in-dubai">
                  Full Villa Shifting Service
                </Link>{" "}
              </h3>
              <div className="mt-3 text-muted-foreground flex gap-y-1.5 leading-tight flex-col">
                <p>
                  Large villa moves need a bigger team, more truck capacity, and
                  proper planning.
                </p>
                <p>
                  Our RTA-approved enclosed box trucks come in 3-ton and 4-ton
                  capacity, so we can handle big loads without cutting corners.
                </p>
                <p>
                  Our carpenters dismantle and reassemble all furniture — beds,
                  wardrobes, cabinets, L-shaped sofas, and everything else —
                  properly and without damage.
                </p>
                <p>
                  Every item is labelled before loading so reassembly at the new
                  location is organised.
                </p>
              </div>
              <Button quoteBtn className="mt-5">
                Get A Quote For House Moving
              </Button>
            </div>
            <div className="bg-white drop-shadow-lg md:p-6 px-4 py-6 rounded-3xl">
              <div className="bg-secondary aspect-video rounded-3xl relative overflow-hidden">
                {" "}
                <Image
                  src={
                    "/loc/office-movers-sharjah-commercial-relocation-professional.jpg"
                  }
                  alt="Movers & Packers team carefully packing office equipment and furniture during a professional office relocation in Sharjah"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-8 text-xl font-bold">
                <Link href="/house-shifting-dubai">Office Movers </Link> in
                Sharjah — Minimum Disruption, Full Care
              </h3>
              <div className="mt-3 text-muted-foreground flex gap-y-1.5 leading-tight flex-col">
                <p>
                  Office relocation is different from home moving. There’s
                  equipment to worry about, data to protect, and you usually
                  can’t afford to be shut down for long.
                </p>
                <p>
                  We offer weekend and overnight office moves in Sharjah to keep
                  your business running. Our team handles desks, filing systems,
                  IT equipment, partitions, and reception furniture — all packed
                  and transported securely.
                </p>
                <p>
                  We also understand that commercial moves require a higher
                  level of trust. That’s why we encourage you to check our
                  Google Business Profile before you hire us, and to speak
                  directly with our team before booking.
                </p>
              </div>
              <Button quoteBtn className="mt-5">
                Get A Quote For Office Moving
              </Button>
            </div>
            <div className="bg-white drop-shadow-lg md:p-6 px-4 py-6 rounded-3xl">
              <div className="bg-secondary aspect-video rounded-3xl relative overflow-hidden">
                <Image
                  src={
                    "/loc/furniture-movers-sharjah-single-item-sofa-moving-service.jpg"
                  }
                  alt="Movers & Packers team loading a wrapped L-shaped sofa into a branded moving van outside a Sharjah residential building"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-8 text-xl font-bold">
                <Link href="/furniture-moving-services-uae">
                  Furniture Movers{" "}
                </Link>{" "}
                in Sharjah — Single Item or Full Load
              </h3>
              <div className="mt-3 text-muted-foreground flex gap-y-1.5 leading-tight flex-col">
                <p>
                  Not every move is a whole house. Sometimes you just need to
                  move a sofa, a wardrobe, or a single bed to a new flat. We do
                  that too.
                </p>
                <p>
                  Our furniture movers in Sharjah handle single-item moves just
                  as professionally as full relocations. And if you’re moving
                  specialised furniture — for a bank, hospital, restaurant, or
                  school — we have experience with that as well.
                </p>
                <p>
                  We also move heavy items that most movers won’t touch:
                  industrial machinery, hospital equipment, and large safes.
                </p>
              </div>
              <Button quoteBtn className="mt-5">
                Get A Quote For Furniture Moving
              </Button>
            </div>
            <div className="bg-white drop-shadow-lg md:p-6 px-4 py-6 rounded-3xl">
              <div className="bg-secondary aspect-video rounded-3xl relative overflow-hidden">
                {" "}
                <Image
                  src={
                    "/loc/packing-services-sharjah-professional-home-packing-fragile-items.jpg"
                  }
                  alt="Movers & Packers team professionally packing fragile items and clothes using bubble wrap and branded packing materials in a Sharjah apartment"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-8 text-xl font-bold">
                <Link href="/packing-services-in-dubai">Packing Services</Link>{" "}
                in Sharjah
              </h3>
              <div className="mt-3 text-muted-foreground flex gap-y-1.5 leading-tight flex-col">
                <p>
                  If you’d rather not pack yourself, our team can do it all. We
                  bring the right materials for every item — proper boxes for
                  kitchenware, hanger boxes for clothes so they don’t crease,
                  bubble wrap for electronics and fragile items, and stretch
                  film for furniture.
                </p>
                <p>
                  Everything is labelled and inventoried before it leaves your
                  home. And when we arrive at the new place, we offer unpacking
                  assistance too, so you’re not left with a pile of boxes at the
                  end of a long day.
                </p>
              </div>
              <Button quoteBtn className="mt-5">
                Get A Quote For Packing Service
              </Button>
            </div>
            <div className="bg-white drop-shadow-lg md:p-6 px-4 py-6 rounded-3xl">
              <div className="bg-secondary aspect-video rounded-3xl relative overflow-hidden">
                <Image
                  src={
                    "/loc/storage-services-sharjah-secure-furniture-storage-facility.jpg"
                  }
                  alt="Movers & Packers team member organizing labeled boxes and wrapped furniture inside a clean secure storage facility in Sharjah"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-8 text-xl font-bold">
                Storage Services in Sharjah
              </h3>
              <div className="mt-3 text-muted-foreground flex gap-y-1.5 leading-tight flex-col">
                <p>
                  Sometimes the timing doesn’t work perfectly — your move-out
                  date arrives before you can get into the new place. We offer
                  short-term and long-term storage services in Sharjah to cover
                  that gap.
                </p>
                <p>
                  All items in storage are insured, labelled, and kept in secure
                  facilities. We have both self-storage and furniture storage
                  options depending on what you need. Contact us for current
                  availability and rates.
                </p>
              </div>
              <Button quoteBtn className="mt-5">
                Get A Quote For Storage Service
              </Button>
            </div>
            <div className="bg-white drop-shadow-lg md:p-6 px-4 py-6 rounded-3xl grid md:grid-cols-2 grid-cols-1 gap-10 items-center md:col-span-2">
              <div className="bg-secondary aspect-video rounded-3xl relative overflow-hidden">
                <Image
                  src={
                    "/loc/same-day-movers-sharjah-urgent-moving-service-residential.jpg"
                  }
                  alt="Movers & Packers team urgently carrying mattress and boxes down a Sharjah apartment stairwell during a same-day moving service"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Same-Day Movers in Sharjah — Urgent Moves Welcome
                </h3>
                <div className="mt-3 text-muted-foreground flex gap-y-1.5 leading-tight flex-col">
                  <p>
                    Just arrived in the UAE and need to move immediately? Or did
                    your plans suddenly change and you need to relocate
                    tomorrow? Call us.
                  </p>
                  <p>
                    We offer same-day moving in Sharjah based on team
                    availability. It’s not guaranteed for every date, but we do
                    our best to accommodate urgent requests.
                  </p>
                  <p>
                    A single WhatsApp message is enough to get the process
                    started — describe your situation and we’ll tell you
                    honestly what we can do.
                  </p>
                </div>
                <Button quoteBtn className="mt-5">
                  Get A Quote For Quick Moving
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20 max-w-7xl md:px-10 px-4 mx-auto">
          <h2 className="md:text-4xl text-3xl font-bold text-center">
            Areas We Cover in Sharjah
          </h2>
          <p className="text-muted-foreground mt-5 text-center">
            We provide moving services across all of Sharjah, including:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
            {[
              {
                t: "Al Nahda Sharjah — one of our most requested areas, including moves between Al Nahda Dubai and Al Nahda Sharjah",
                l: "#",
              },
              {
                t: "Movers in Al Taawun Sharjah",
                l: "#",
              },
              {
                t: "Movers in Al Khan Sharjah",
                l: "#",
              },
              {
                t: "Movers in Muwaileh Sharjah",
                l: "#",
              },
              {
                t: "Movers in Al Majaz Sharjah",
                l: "#",
              },
              {
                t: "Movers in Al Qasimia Sharjah",
                l: "#",
              },
              {
                t: "Movers in Industrial Area Sharjah Sharjah",
                l: "#",
              },
              {
                t: "Movers in Al Yarmook Sharjah",
                l: "#",
              },
              {
                t: "Movers in Al Wahda Sharjah",
                l: "#",
              },
              {
                t: "Movers in Rolla Sharjah",
                l: "#",
              },
              {
                t: "Movers in Al Khalidiyah Sharjah",
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
            We also handle inter-emirate moves — from Sharjah to Dubai, Abu
            Dhabi, Ajman, Ras Al Khaimah, and beyond. Distance isn’t a problem.
            Just tell us where you’re going and we’ll plan accordingly.
          </p>
        </section>
        <MovingProcess
          title={
            <>
              How Our Moving Process Works{" "}
              <span className="md:block font-normal">
                8 Steps from Start to Finish
              </span>
            </>
          }
          desc="Here’s exactly what happens from the moment you contact us to the moment you settle into your new place."
        />
        <ReviewSection reviews={googleReviews} />
        <section
          id="best-moving-company-in-uae "
          className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2 grid-cols-1 gap-10 md:px-10 px-4 items-center"
        >
          <div className=" md:order-1 order-2 md:text-lg text-muted-foreground mt-5 leading-tight">
            <p>
              We’re not going to give you a single number here, because moving
              costs depend on real factors: how many items you have, how far
              you’re moving, what truck size you need, whether you need packing,
              and your preferred timing.
            </p>
            <p className="mt-1.5">
              What we will tell you is this: the quote we give you is the price
              you pay. Not a penny more. No surprise charges on moving day, no
              extra fees for stairs, no suddenly expensive packing materials.
            </p>
            <p className="mt-1.5">
              We send every quote in writing to your WhatsApp or email so you
              have it in black and white before you commit to anything.
            </p>
            <p className="mt-1.5">
              For affordable movers in Sharjah, we offer competitive rates
              without cutting corners on service or insurance. And if you’re
              working with a tight timeline and need a budget-friendly option,
              contact us — we’ll work with what you have.
            </p>
            <p className="mt-1.5">
              <b>Payment methods we accept:</b> - Cash (after job completion) -
              Online bank transfer - Bank cheque
            </p>
            <p className="mt-1.5">
              We don’t ask for deposits before starting work. You pay when the
              job is done.
            </p>
            <p className="mt-1.5">
              Get a free quote: Call us or send a WhatsApp message now. It takes
              less than five minutes and you’ll have a fixed price in writing.
            </p>
          </div>
          <div className="md:order-2 order-1">
            {" "}
            <p className="font-medium border-b-2 border-primary w-max uppercase">
              industries
            </p>
            <h2 className="md:text-4xl text-3xl font-bold mt-3 ">
              {" "}
              <span className="md:block font-normal">
                Movers in Sharjah
              </span>{" "}
              Pricing and Payment Methods
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
        <section className="max-w-6xl mx-auto px-4 md:px-10 mt-32">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2
              id="comparison-heading"
              className="text-3xl md:text-4xl font-normal tracking-tight mb-6"
            >
              Why Choose Us Over Other{" "}
              <span className="md:block font-bold">
                Moving Companies in Sharjah?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground ">
              Most people searching for moving companies in Sharjah end up
              choosing between a registered company and a freelance mover they
              found on a classified site. Here’s why that decision matters more
              than you might think.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th
                      scope="col"
                      className="p-5 md:p-6 text-sm md:text-base font-semibold w-1/4"
                    >
                      Comparison Feature
                    </th>
                    <th
                      scope="col"
                      className="p-5 md:p-6 text-sm md:text-base font-semibold text-slate-500 w-1/3"
                    >
                      Freelance Movers
                    </th>
                    {/* Highlighted Header for "Us" */}
                    <th
                      scope="col"
                      className="p-5 md:p-6 text-sm md:text-base font-bold primary bg-red-50/50 w-5/12 border-b-2 border-primary"
                    >
                      <Link href="/">Movers and Packers in UAE</Link>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <th
                        scope="row"
                        className="p-5 md:p-6 text-sm md:text-base font-medium text-slate-900 align-top"
                      >
                        {item.feature}
                      </th>
                      <td className="p-5 md:p-6 text-sm md:text-base text-slate-600 align-top">
                        <div className="flex items-start gap-3">
                          {/* Cross/Warning Icon */}
                          <svg
                            className="w-5 h-5 text-rose-400 shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          <span>{item.freelance}</span>
                        </div>
                      </td>
                      <td className="p-5 md:p-6 text-sm md:text-base font-medium text-slate-900 bg-red-50/30 align-top">
                        <div className="flex items-start gap-3">
                          {/* Check Icon */}
                          <svg
                            className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{item.us}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section Footer / Trust Badge area */}
          <article className="mt-12 md:mt-16 text-center max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-base md:text-lg text-slate-700 leading-relaxed font-medium">
              We’ve been in this market{" "}
              <span className="text-primary font-bold">since 1998</span>. Most
              of the freelance movers that operate in Sharjah today didn’t exist
              back then. That track record means something when you’re handing
              over your furniture, your personal items, and access to your home.
            </p>
          </article>
        </section>
        <section className="max-w-6xl mx-auto px-4 md:px-10 mt-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2
              id="comparison-heading"
              className="text-3xl md:text-4xl font-normal tracking-tight mb-6"
            >
              International Movers in Sharjah{" "}
              <span className="md:block font-bold">
                {" "}
                Top Rated Moving Company in UAE{" "}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground ">
              If you’re relocating outside the UAE, we can help coordinate your
              international move. We work with cargo and freight partners for
              sea, land, and air shipments.
            </p>
            <p className="text-lg text-muted-foreground ">
              Contact us directly for international moving requirements — we’ll
              advise on the best option for your timeline and budget.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-5 gap-6 max-w-4xl mx-auto">
              <Button quoteBtn size={"lg"}>
                Get A Free Moving Quote
              </Button>

              <Button callBtn variant={"ghost"} size={"lg"}>
                <PhoneCall className="w-7 h-7 text-[#4B5563] group-hover:text-[#111827] transition-colors stroke-[1.5]" />
                <span className="text-sm font-medium">Call Now</span>
              </Button>
            </div>
          </div>
        </section>
        <FAQSection
          title="Frequently Asked Questions — Movers in Sharjah"
          faqs={SharjahMovingFAQs}
        />
        <CTA
          title="Contact the Best Movers and Packers in Sharjah"
          desc="If you’re ready to move — or just trying to figure out what it’ll cost — reach out. There’s no commitment required to get a quote from us. We’re available 24/7, including weekends. We cover all areas in Sharjah and handle inter-emirate moves across the UAE."
        />
        <div className="max-w-4xl mx-auto md:px-0 px-4 mt-10 md:text-xl text-lg font-medium text-center">
          <p>
            You can: -{" "}
            <Link href={"tel:+971507745691"} className="text-primary">
              Call us
            </Link>{" "}
            and speak to someone directly -{" "}
            <Link
              href={
                "https://wa.me/+971507745691?text=I%20Come%20From%20Your%20Website%20and%20I%20Need%20Moving%20Services"
              }
              aria-label="Get A Quote On WhatsApp"
              className="text-primary"
            >
              Send a WhatsApp message
            </Link>{" "}
            with your move details -{" "}
            <Link href={"/get-quote"} className="text-primary">
              Fill in the quote form
            </Link>{" "}
            on our website — it takes two minutes
          </p>
          <p className="mt-2 mb-5">
            25 years in this business has taught us one thing: a
            straightforward, honest service is what people actually want when
            they’re moving. That’s what we provide.
          </p>
          <Link
            href={"/get-quote"}
            className="text-primary underline-offset-8 underline"
          >
            Contact us today and get your free, fixed moving quote.
          </Link>
        </div>
      </main>
    </>
  );
};

export default MoversInSharjahPage;

const googleReviews = [
  {
    name: "Hamed Al Nuaimi",
    time: "1 week ago",
    star: 5,
    review:
      "Moved my flat from Al Majaz to Al Nahda last week. The guys were fast, packed everything properly, and didn't overcharge. Great value for Sharjah.",
    image: "/ava/32.jpg",
  },
  {
    name: "Rida Khan",
    time: "3 weeks ago",
    star: 5,
    review:
      "Called them for packing and moving my 2BHK in Sharjah. They came with all their own supplies—bubble wrap, boxes, everything. Took the stress out of it.",
    image: "/ava/44.jpg",
  },
  {
    name: "Daniel Smith",
    time: "2 days ago",
    star: 5,
    review:
      "Moved us from Sharjah to Dubai and they got the timing right. Their packing was solid and they handled everything without issues. Good service.",
    image: "/ava/86.jpg",
  },
  {
    name: "Sana Farooq",
    time: "1 month ago",
    star: 5,
    review:
      "These guys took apart my heavy wooden bed, transported it, and set it back up perfectly. No damage, no problems. That kind of care is hard to find.",
    image: "/ava/68.jpg",
  },
  {
    name: "Bilal Qureshi",
    time: "2 weeks ago",
    star: 5,
    review:
      "Most movers in Sharjah add hidden charges, but these guys quoted a flat rate upfront. The crew was professional and actually finished on time.",
    image: "/ava/22.jpg",
  },
  {
    name: "Aisha Mahmoud",
    time: "5 days ago",
    star: 5,
    review:
      "Used them for my office move in Muweilah. They packed and labeled everything clearly, which made unpacking way simpler than I expected.",
    image: "/ava/90.jpg",
  },
  {
    name: "Manoj Kumar",
    time: "3 weeks ago",
    star: 5,
    review:
      "They showed up exactly when they said they would at our Al Taawun place. Good packing, good loading, and everything arrived in one piece that same day.",
    image: "/ava/54.jpg",
  },
  {
    name: "Nadia Ali",
    time: "4 weeks ago",
    star: 5,
    review:
      "I was worried about my glass display cabinets during the move, but the packing crew in Sharjah knew what they were doing. Lots of padding, handled them carefully. Really impressed.",
    image: "/ava/29.jpg",
  },
];

const comparisonData = [
  {
    feature: "Legal Registration",
    freelance: "Usually none",
    us: "Registered since 1998",
  },
  {
    feature: "Insurance",
    freelance: "None",
    us: "100% coverage included",
  },
  {
    feature: "Pricing",
    freelance: "Verbally quoted, often inflated later",
    us: "Fixed, written quote — no changes",
  },
  {
    feature: "Accountability",
    freelance: "Disappear after the job",
    us: "Pay Upon Satisfaction guarantee",
  },
  {
    feature: "Truck Type",
    freelance: "Usually open pickup",
    us: "Enclosed box trucks — heat & dust protected",
  },
  {
    feature: "Team",
    freelance: "Unknown workers",
    us: "Trained, supervised team",
  },
  {
    feature: "Verifiable",
    freelance: "Not on Google Maps",
    us: "Google Business Profile listed",
  },
];
