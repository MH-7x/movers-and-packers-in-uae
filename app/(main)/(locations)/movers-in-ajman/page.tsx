import React from "react";
import heroImage from "@/public/loc/movers-in-ajman-residential-house-moving-service-uae.jpg";
import { LocHeroSection } from "@/components/LocHeroSection";
import QuotationSection from "@/components/QuotationSection";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Clock,
  Sun,
} from "lucide-react";
import { Building2, Home, Briefcase, Truck, Users, Wallet } from "lucide-react";
import Image from "next/image";
import MovingProcess from "@/components/MovingProcess";
import Link from "next/link";
import { FAQSection } from "@/components/FaqsSection";
import { AjmanMovingFAQs } from "@/lib/FaqsData";
import CTA from "@/components/CTA";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { ReviewSection } from "@/components/ReviewSection";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import { Breadcrumb } from "@/components/Breadcrumb";


export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers in Ajman – Professional Movers and Packers in Ajman",
      desc: "Trusted movers in Ajman with 25+ years of experience. We offer house, villa, office & furniture moving at no hidden charges. Call or WhatsApp for a free quote.",
    },
    image: {
      path: "/loc/movers-in-ajman-residential-house-moving-service-uae.jpg",
      alt: "movers in ajman professional team loading wrapped furniture and boxes into a branded moving truck outside a residential house in Ajman UAE",
    },
    path: "/movers-in-ajman",
  },
});

const MoversInAjman = () => {
  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "Movers in Ajman",
        url: "/movers-in-ajman",
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
        title: "Movers in Ajman",
        url: "/movers-in-ajman",
      },
    ]} />
        <LocHeroSection
          h1={
            <>
              Movers in Ajman <br className="block" />
              <span className="font-normal">
                Trusted Ajman Movers and Packers
              </span>
            </>
          }
          desc={
            <>
              <p>
                Looking for reliable movers in ajman? You are in the right
                place. We are a fully licensed and registered moving company
                providing quality relocation services since 1998 — with
                thousands of completed moves across the UAE.
              </p>
              <p>
                Whether you need to shift a studio apartment, a large villa, or
                a commercial office, our moving and packing services in Ajman
                cover everything from packing and loading to transport and full
                installation, safely and quality services on time for a stress free experience.
              </p>
            </>
          }
          id="movers-in-ajman"
          img={{
            src: heroImage,
            alt: "movers in ajman professional team loading wrapped furniture and boxes into a branded moving truck outside a residential house in Ajman UAE",
          }}
        />

        <QuotationSection
          title={
            <>
              <span className="font-bold md:block">Get A Moving Quote</span>{" "}
              From Movers and Packers in Ajman
            </>
          }
          btnText="Get A Quote From Movers in Ajman"
          desc="Call us or send a WhatsApp message for a free quote — our movers and packers in ajman will get back to you quickly with a clear, fixed price. We handle everything, from packing and loading to transport and installation. "
        />

        <section className="max-w-7xl mx-auto mt-32 md:px-10 px-4">
          {/* Main Header Section */}
          <div className="text-center mb-10 max-w-4xl mx-auto">
            <h2 className="md:text-4xl text-3xl font-bold mb-6">
              <span className="font-normal md:block">Why Choose Our</span>{" "}
              Movers and Packers in Ajman?
            </h2>
            <p className="text-muted-foreground">
              There are many moving companies operating in Ajman. Some are
              registered, most are not. We have been a licensed moving company
              in Ajman since 1998 — with a verified Google Business profile, an
              official trade license, and a real owner you can meet before you
              decide. Here is what makes us different from the rest.
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
                Our Wide Range of{" "}
                <span className="font-bold">Moving Services</span>{" "}
                <span>in Ajman</span>
              </h2>
            </div>
            <div>
              <p className="text-gray-200">
                We cover every type of residential and commercial move in Ajman.
                All professional moving services are handled by our trained team using proper
                equipment and quality packing materials. Here is a full
                breakdown of what we offer.
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
                id: "house-movers-in-ajman",
                name: "House Movers in Ajman",
                description: (
                  <>
                    <p>
                      As <Link href="/house-shifting-dubai">home movers</Link>{" "}
                      in Ajman, we handle the entire process: packing every
                      room, dismantling furniture, labeling boxes by room,
                      loading onto our truck, transporting to your new home,
                      unloading, reassembling furniture, and placing everything
                      where you want it.
                    </p>
                    <p>
                      House shifting in Ajman is something we do every day — the
                      process is organized, and the team knows what it is doing.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      Moving a home is personal. We understand that letting a
                      moving team into your bedroom, kitchen, and living space
                      takes trust.{" "}
                    </p>
                    <p>
                      That is exactly why our company operates on a philosophy
                      of protection and privacy — your belongings and your space
                      are treated with full respect.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/house-movers-ajman-full-home-shifting-service.jpg",
                  alt: "Movers and Packers in UAE team carefully carrying wrapped sofa and labeled boxes during a full house shifting service inside an Ajman home",
                },
              },
              {
                id: "villa-movers-in-ajman",
                name: "Villa Movers in Ajman",
                description: (
                  <>
                    <p>
                      Villa moves are bigger in scale and need more planning. A
                      larger crew, more trucks, and room-by-room coordination —
                      <Link href="/villa-movers-in-dubai">
                        our villa movers
                      </Link>{" "}
                      in Ajman are used to it.
                    </p>
                    <p>
                      We handle heavy furniture, fragile décor, large
                      electronics, glass items, and full kitchen setups.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      We set up the children&apos;s room first. Then bedrooms.
                      Then the rest of the home. Family comfort during the
                      settling-in period matters, and we factor that into how we
                      work.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/villa-movers-ajman-large-scale-relocation-professional.jpg",
                  alt: "Movers and Packers in UAE team carrying a wrapped wardrobe downstairs and dismantling bedroom furniture during a large villa move in Ajman",
                },
              },
              {
                id: "apartment-movers-in-ajman",
                name: "Apartment Movers in Ajman",
                description: (
                  <>
                    <p>
                      Apartment moves come with their own challenges — elevator
                      availability, narrow corridors, building access times, and
                      parking near the entrance.
                    </p>
                    <p>
                      Our{" "}
                      <Link href="/apartment-movers-dubai">
                        apartment movers
                      </Link>{" "}
                      in Ajman are experienced with Ajman&apos;s residential
                      buildings and compounds
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      We coordinate building access, use efficient loading
                      sequences to limit elevator time, and get the job done
                      without disrupting other residents.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/apartment-movers-ajman-elevator-building-relocation-service.jpg",
                  alt: "Movers and Packers in UAE team efficiently moving wrapped furniture through an elevator and corridor inside an Ajman residential apartment building",
                },
              },
              {
                id: "furniture-movers-in-ajman",
                name: "Furniture Movers in Ajman",
                description: (
                  <>
                    <p>
                      Not every move is a full house shift. Sometimes you just
                      need to move specific pieces — a sofa, a bed, a wardrobe,
                      or a dining set.
                    </p>
                    <p>
                      Our{" "}
                      <Link href="/furniture-moving-services-uae">
                        furniture movers
                      </Link>{" "}
                      in Ajman handle single items and full furniture sets. We
                      wrap, protect, load, transport, and place each piece
                      carefully.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      If the furniture needs dismantling before it can safely
                      pass through a doorway or elevator, our carpenters handle
                      that and reassemble it at the destination.
                    </p>
                    <p>
                      Furniture shifting in Ajman — whether it is one item or a
                      full room — is handled with the same level of care.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/furniture-movers-ajman-single-item-dining-set-moving-service.jpg",
                  alt: "Movers and Packers in UAE team carefully loading a wrapped dining table and chairs into a branded van outside an Ajman residential building",
                },
              },
              {
                id: "office-movers-in-ajman",
                name: "Office Movers in Ajman",
                description: (
                  <>
                    <p>
                      Office relocation affects your whole team. The goal is to
                      get you moved and operational again as fast as possible.
                    </p>
                    <p>
                      Our{" "}
                      <Link href="/office-movers-in-dubai">office movers</Link>{" "}
                      in Ajman pack workstations, cabinets, files, printers, IT
                      equipment, conference room furniture, and storage units.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      We label everything clearly so setup at the new location
                      is straightforward.
                    </p>
                    <p>
                      For businesses that cannot afford downtime during working
                      hours, we can schedule the move on a weekend or in the
                      evening. You tell us your schedule, and we work around it.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/office-movers-ajman-commercial-relocation-after-hours.jpg",
                  alt: "Movers and Packers in UAE team packing workstations, monitors, and office furniture during a professional after-hours office relocation in Ajman",
                },
              },
              {
                id: "storage-movers-in-ajman",
                name: "Storage Services in Ajman",
                description: (
                  <>
                    <p>
                      Need somewhere to keep your belongings during a
                      renovation, a delayed move-in, or a transition period? We
                      offer secure storage in Ajman for both short-term and
                      long-term needs.
                    </p>
                    <p>
                      Items are stored safely and are accessible when you need
                      them.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      {" "}
                      Options include self-storage and managed furniture storage
                      depending on what fits your situation.
                    </p>
                  </>
                ),
                img: {
                  src: "/loc/storage-services-ajman-secure-furniture-storage-facility.jpg",
                  alt: "Movers and Packers in UAE team member organizing labeled boxes and wrapped furniture inside a clean secure storage facility in Ajman",
                },
              },
              {
                id: "special-type-furniture-moving-in-ajman",
                name: "Bank, Hospital, Restaurant, School, and Warehouse Moving",
                description: (
                  <>
                    <p>
                      <Link href="/bank-furniture-moving-uae">
                        Relocating furniture and equipment for a bank
                      </Link>
                      , hospital, restaurant, school, or warehouse is not
                      something an unlicensed mover can legally do — and it is
                      not something you should trust to someone without proper
                      authorization.
                    </p>
                    <p>
                      We are legally registered to handle commercial and
                      institutional moves.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      {" "}
                      If you own or manage a commercial space in Ajman and need
                      a professional team to handle your relocation, contact us
                      to discuss the scope and get a quote.
                    </p>
                  </>
                ),

                img: {
                  src: "/loc/commercial-institutional-movers-ajman-bank-hospital-school-restaurant.jpg",
                  alt: "Licensed Movers & Packers team professionally relocating institutional furniture and equipment for commercial clients in Ajman",
                },
              },
              {
                id: "long-distance-moving-in-ajman",
                name: "Long-Distance and Inter-Emirate Moving from Ajman",
                description: (
                  <>
                    <p>
                      Moving from Ajman to another emirate? We cover all
                      destinations: Dubai, Sharjah, Abu Dhabi, Ras Al Khaimah,
                      Al Ain, Fujairah, and Umm Al Quwain.
                    </p>
                    <p>
                      Long-distance moves from Ajman use our fully enclosed
                      trucks, which protect your furniture across longer routes
                      and travel times.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      One truck can typically carry a full 2 to 3-bedroom
                      apartment load in a single trip.
                    </p>
                    <p>
                      We confirm timing, route, and delivery window before
                      dispatch — so you always know when to expect your
                      belongings.
                    </p>
                  </>
                ),

                img: {
                  src: "/loc/long-distance-inter-emirate-moving-ajman-dubai-sharjah-abudhabi.jpg",
                  alt: "Movers and Packers in UAE branded enclosed moving truck traveling along a UAE inter-emirate highway during a long-distance relocation from Ajman",
                },
              },
              {
                id: "industrial-moving-in-ajman",
                name: "Industrial Equipment and Heavy Item Moving in Ajman",
                description: (
                  <>
                    <p>
                      We also handle industrial machinery, heavy safes, and
                      large-scale equipment.
                    </p>
                    <p>
                      This type of move requires specialized handling and an
                      experienced team. If you are relocating a warehouse,
                      industrial space, or facility in Ajman, contact us to
                      discuss the specifics.
                    </p>
                  </>
                ),
                extra: (
                  <>
                    <p>
                      We confirm timing, route, and delivery window before
                      dispatch — so you always know when to expect your
                      belongings.
                    </p>
                  </>
                ),

                img: {
                  src: "/loc/industrial-equipment-heavy-item-moving-ajman-warehouse-relocation.jpg",
                  alt: "Movers and Packers in UAE team using hydraulic equipment to safely relocate heavy industrial machinery and a large safe inside an Ajman warehouse facility",
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
        <section
          id="moving-services-prices-in-ajman"
          className="mx-auto max-w-5xl md:px-0 px-4 mt-20"
        >
          {/* Header Section */}
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-3xl font-bold  md:text-4xl">
              Moving Prices in Ajman — What to Expect
            </h2>
            <p className="mt-5 text-muted-foreground max-w-3xl">
              The cost of hiring movers and packers in Ajman depends on the size
              of your move, the number of items, the distance, and the services
              you need. The table below gives a general idea of what to expect.
            </p>
          </div>

          {/* --- MOBILE VIEW: Card Layout (< md) --- */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {movingData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl  bg-white p-5 shadow-sm"
                >
                  {/* Card Header */}
                  <div className="mb-4 flex items-center gap-3 border-b border-slate-100 pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      {item.type}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Truck className="h-4 w-4" />
                        <span>Trucks Required</span>
                      </div>
                      <span className="font-medium text-slate-900">
                        {item.trucks}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Users className="h-4 w-4" />
                        <span>Crew Size</span>
                      </div>
                      <span className="font-medium text-slate-900">
                        {item.crew}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between rounded-lg bg-red-50/50 p-3 text-sm">
                      <div className="flex items-center gap-2 font-medium text-slate-600">
                        <Wallet className="h-4 w-4 text-primary/90" />
                        <span>Estimated Cost</span>
                      </div>
                      <span className="font-semibold text-primary">
                        {item.cost}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* --- DESKTOP VIEW: Standard Table (>= md) --- */}
          <div className="hidden overflow-hidden rounded-2xl  bg-white shadow-sm md:block">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-foreground">
                  <th
                    scope="col"
                    className="px-6 py-4 font-semibold text-white"
                  >
                    Move Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-semibold text-white"
                  >
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-white/90" />
                      Trucks Required
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-semibold text-white"
                  >
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-white/90" />
                      Crew Size
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-semibold text-white"
                  >
                    <div className="flex items-center gap-2">
                      <Wallet className="h-4 w-4 text-white/90" />
                      Estimated Cost
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {movingData.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <tr
                      key={idx}
                      className="group transition-colors hover:bg-red-50/50"
                    >
                      <td className="px-6 py-4 font-medium text-slate-800">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-primary ">
                            <Icon className="h-4 w-4" strokeWidth="1.5" />
                          </div>
                          {item.type}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {item.trucks}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {item.crew}
                      </td>
                      <td className="px-6 py-4 font-medium text-primary">
                        {item.cost}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-10 text-muted-foreground max-w-3xl mx-auto text-center">
            These are estimates. Your actual quote depends on how many items you
            have, how much packing is needed, and where you are moving to.
          </p>
          <p className="mt-2 text-muted-foreground max-w-3xl mx-auto text-center">
            Contact us with your details and we will send a clear, itemized
            quote — no surprises. And as we have said before: whatever the quote
            says is what you pay. That is a firm policy.
          </p>
        </section>
        <MovingProcess />
        <ReviewSection reviews={googleReviews} />
        <section className="max-w-4xl mx-auto mt-20 md:px-0 px-4 flex flex-col gap-y-5">
          <div>
            <h2 className="md:text-4xl text-3xl font-bold">
              Why Professional Movers in Ajman Are Worth It
            </h2>
            <p className="text-muted-foreground mt-3">
              A lot of people think about handling the move themselves or hiring
              informal day workers to save money. Here is what that usually
              means in practice.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              The Real Cost of Moving Yourself
            </h3>
            <div className="text-muted-foreground flex flex-col gap-y-1 mt-2">
              <p>
                Renting a truck, buying packing materials, paying for helpers,
                and spending your own time and energy — it adds up fast.
              </p>
              <p>
                And if something breaks because it was not packed properly,
                replacing it usually costs more than what a professional mover
                would have charged. There is also no insurance when you move
                yourself. One broken wardrobe door or cracked TV screen and the
                savings are gone.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              The Problem with Unlicensed Freelance Movers
            </h3>
            <div className="text-muted-foreground flex flex-col gap-y-1 mt-2">
              <p>
                Freelance movers in Ajman operate from a phone number. No trade
                license, no insurance, no fixed address, no accountability. If
                something is damaged or missing after the move, you have no
                legal recourse. For a residential move that is already a risk.
              </p>
              <p>
                For commercial spaces — banks, hospitals, restaurants — using an
                unlicensed mover is not just risky, it is not legally permitted.
              </p>
              <p>
                As a licensed moving company in Ajman registered since 1998, we
                carry full legal authorization, complete insurance, and clear
                accountability at every step.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              What to Check Before Hiring Any Mover in Ajman
            </h3>
            <div className="text-muted-foreground flex flex-col gap-y-1 mt-2">
              <p>Before booking any moving company, go through this list:</p>
              <ul className="list-inside list-disc">
                <li>
                  Is the company officially registered with a trade license?
                </li>
                <li>
                  Do they have a verified Google Business Profile with real
                  customer reviews?
                </li>
                <li>
                  Do they provide a written quote — via WhatsApp or email —
                  before the move starts?
                </li>
                <li>Is your stuff insured during the move?</li>
                <li>Can you pay after the job is done?</li>
              </ul>
              <p>
                We satisfy all five. Search for us on Google Maps right now and
                check the profile yourself.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-20 max-w-7xl md:px-10 px-4 mx-auto">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-3xl font-bold md:text-4xl">
              Best Time to Move in Ajman
            </h2>
            <p className="mt-3 text-muted-foreground md:max-w-3xl">
              If you have any flexibility on timing, here is what we recommend
              based on years of moving experience in Ajman.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* November to March Card */}
            <div className="relative overflow-hidden rounded-2xl p-6 ">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <CalendarDays className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold">November to March</h3>
              <p className="text-sm text-muted-foreground">
                The best period to move. The weather is cooler, loading and
                transport are easier, and there is no risk of heat damage to
                electronics or upholstered furniture. This is also the busiest
                period for moves — so book your date in advance.
              </p>
            </div>

            {/* June to August Card */}
            <div className="relative overflow-hidden rounded-2xl p-6 ">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Sun className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold ">June to August</h3>
              <p className="text-sm text-muted-foreground">
                The hottest time of year in Ajman. If you must move in summer,
                schedule it early in the morning before 9 AM or after sunset
                when temperatures come down. Our enclosed trucks help, but
                limiting direct exposure time still matters.
              </p>
            </div>

            {/* Timing matters Card */}
            <div className="relative overflow-hidden rounded-2xl p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold ">Timing Matters</h3>
              <p className="text-sm text-muted-foreground">
                Avoid public holidays and busy Friday mornings if possible.
                Traffic and building access restrictions can slow things down. A
                mid-week move is usually quicker and easier to coordinate.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-20 max-w-7xl md:px-10 px-4 mx-auto">
          <h2 className="md:text-4xl text-3xl font-bold text-center">
            Ajman Areas We Serve
          </h2>
          <p className="text-muted-foreground mt-5 text-center">
            We operate across all of Ajman&apos;s residential and commercial
            districts, including:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
            {[
              {
                t: "Movers in Al Nuaimiya Ajman",
                l: "#",
              },
              {
                t: "Movers in Al Rashidiya Ajman",
                l: "#",
              },
              {
                t: "Movers in Al Rumaila Ajman",
                l: "#",
              },
              {
                t: "Movers in Al Mowaihat Ajman",
                l: "#",
              },
              {
                t: "Movers in Al Hamidiyah Ajman",
                l: "#",
              },
              {
                t: "Movers in Al Tallah Ajman",
                l: "#",
              },
              {
                t: "Movers in Al Jurf Ajman",
                l: "#",
              },
              {
                t: "Movers in Ajman Industrial Area 1",
                l: "#",
              },
              {
                t: "Movers in Ajman Industrial Area 2",
                l: "#",
              },
              {
                t: "Movers in Al Rawda Ajman",
                l: "#",
              },
              {
                t: "Movers in Al Sawan Ajman",
                l: "#",
              },
              {
                t: "Movers in Corniche Area Ajman",
                l: "#",
              },
              {
                t: "Movers in Al Nakhil Ajman",
                l: "#",
              },
              {
                t: "Movers in Al Muntazi Ajman",
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
            And we handle moves from Ajman to Dubai, Sharjah, Abu Dhabi, Ras Al
            Khaimah, Al Ain, Fujairah, and Umm Al Quwain — full inter-emirate
            relocation, one team, one contact.
          </p>
        </section>
        <section className="max-w-7xl mx-auto px-4 md:px-10 mt-20 mb-20">
          <div className="bg-muted rounded-3xl p-6 sm:p-8 lg:px-12 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Inter-Emirate Moves: Ajman to Sharjah and Umm Al Quwain
            </h3>
            <div className="max-w-4xl">
              <p className="text-muted-foreground">
                If you are planning to move from Ajman to neighboring emirates like Sharjah or Umm Al Quwain, our team has you covered. We manage the logistics so you don't have to worry about cross-border moving details.
              </p>
              <p className="text-muted-foreground mt-3">
                See also:{" "}
                <Link href="/movers-and-packers-in-sharjah" className="underline underline-offset-4 hover:text-primary/80">
                  Sharjah moving services
                </Link>{" "}
                and{" "}
                <Link href="/movers-in-umm-al-quwain" className="underline underline-offset-4 hover:text-primary/80">
                  Umm Al Quwain movers
                </Link>.
              </p>
            </div>
          </div>
        </section>
        <FAQSection
          faqs={AjmanMovingFAQs}
          title="Frequently Asked Questions — Movers in Ajman"
        />
        <CTA
          title="Ready to Move in Ajman? Contact Us for a Free Quote"
          desc="We have been helping families and businesses relocate across Ajman and the UAE since 1998. Over 25 years of experience. A team that speaks English and Arabic. RTA-approved enclosed trucks. And a simple rule: you pay only after you are satisfied with the work."
        />
      </main>
    </>
  );
};

export default MoversInAjman;

const features = [
  {
    title: "25+ Years of Experience in UAE Relocations",
    desc: "We have been doing this since 1998. That is over 25 years of completing moves across all seven emirates — houses, villas, offices, and commercial spaces. We have handled thousands of relocations in Ajman alone. You are not dealing with a company that started last year and built a website. We know Ajman's buildings, roads, and residential communities well, and that local knowledge saves you time on moving day.",
    buttonText: "Learn more",
  },
  {
    title: "Pay Upon Satisfaction — You Pay After the Job Is Done",
    desc: "This is something no other moving company in Ajman clearly offers. You pay only after the move is complete and you are happy with the work. We do not ask for money upfront and disappear. We are accountable from start to finish. Payment is accepted as cash, online bank transfer, or bank cheque — whatever works best for you.",
    buttonText: "Get a quote",
  },
  {
    title: "No Hidden Charges — The Quote Is the Price",
    desc: "When we give you a quote, that is the number you pay. If we quote 1,000 AED, the final bill is 1,000 AED. No surprise additions at the end, no charges for materials not mentioned, no last-minute fees. We put everything in writing via WhatsApp or email before the move starts, so there is no confusion. A lot of people search for cheap movers in Ajman and end up paying more because of hidden costs added by unlicensed operators. Affordable moving does not have to mean unreliable — and with us, it does not.",
    buttonText: "View pricing",
  },
  {
    title: "Fully Licensed and Registered Moving Company Since 1998",
    desc: "We are not operating from a mobile number and a social media page. We are an officially registered company with a trade license, a physical headquarters, and a legal right to operate moving services across the UAE. If you are relocating a home, office, bank, or hospital — you need a legally authorized company, not a freelancer.",
    buttonText: "Verify license",
  },
  {
    title: "RTA-Approved Enclosed Box Trucks",
    desc: "We use 3-ton and 4-ton fully enclosed box trucks that are RTA-approved and road-ready. In Ajman, where summer temperatures go above 45°C and sandstorms happen without warning, moving furniture in an open truck is a real risk to your electronics, upholstered items, and wooden furniture. Our enclosed trucks keep everything sealed and protected during transport. ",
    buttonText: "See our fleet",
  },
  {
    title: "100% Insurance Coverage on Every Move",
    desc: "Every item we pack and transport is fully covered. From the moment our team starts packing your belongings to the moment they are placed in your new home, you are protected. If anything gets damaged during the move, it is on us — not on you.",
    buttonText: "Read policy",
  },
  {
    title: "English and Arabic Speaking Team",
    desc: "Our team speaks both English and Arabic. Communication is clear at every step — before the move, during it, and after. You do not need to worry about being misunderstood when explaining how to handle specific items or where to place furniture in your new place.",
    buttonText: "Contact support",
  },
  {
    title: "Same-Day Moving Service Available",
    desc: "If you need to move urgently — just arrived in the UAE, lease ending tomorrow, unexpected situation — contact us directly. We offer same-day moving services in Ajman and can arrange a team and vehicle based on what is available and what your move requires. It is not always possible, but we do everything we can to help.",
    buttonText: "Book urgently",
  },
];

type MoveTypeData = {
  type: string;
  trucks: string;
  crew: string;
  cost: string;
  icon: React.ElementType;
};

const googleReviews = [
  {
    name: "Saif Al Shamsi",
    time: "2 weeks ago",
    star: 5,
    review:
      "Moved from Al Nuaimiya to Al Rashidiya without any drama. They were on time and the packing held up well. Good value.",
    image: "/ava/32.jpg",
  },
  {
    name: "Amira Hassan",
    time: "1 month ago",
    star: 5,
    review:
      "Used them for my move in Ajman. They were careful with the heavy furniture and the whole thing was done in under three hours. Not bad.",
    image: "/ava/44.jpg",
  },
  {
    name: "John Davis",
    time: "3 days ago",
    star: 5,
    review:
      "Moved my villa in Al Rawda and they packed my electronics properly. Put everything back together and didn't lose a single screw. That matters.",
    image: "/ava/86.jpg",
  },
  {
    name: "Pooja Sharma",
    time: "1 week ago",
    star: 5,
    review:
      "Reasonably priced and straightforward. Moved us near Ajman Corniche and everything was transparent—no surprise charges at the end.",
    image: "/ava/68.jpg",
  },
  {
    name: "Ali Qasim",
    time: "2 months ago",
    star: 5,
    review:
      "Had to move from Ajman to Dubai on short notice. They moved fast and got all my dishes there in one piece. Exactly what I needed.",
    image: "/ava/22.jpg",
  },
  {
    name: "Nour K",
    time: "4 weeks ago",
    star: 5,
    review:
      "These are the best movers I've used in Ajman. They came prepared with boxes and wrap, and they made the whole process way less stressful.",
    image: "/ava/90.jpg",
  },
  {
    name: "Karthik Rajan",
    time: "5 days ago",
    star: 5,
    review:
      "The crew didn't slack off. Packed and moved my 2BHK in Ajman Downtown straight through without stopping. Solid work.",
    image: "/ava/54.jpg",
  },
  {
    name: "Fatima Zehra",
    time: "3 weeks ago",
    star: 5,
    review:
      "The team was polite and knew how to handle fragile stuff. My glass dining table and big wardrobe made it across Ajman without a scratch.",
    image: "/ava/29.jpg",
  },
];

const movingData: MoveTypeData[] = [
  {
    type: "Studio Apartment",
    trucks: "1",
    crew: "3–4",
    cost: "800–1,000 AED",
    icon: Building2,
  },
  {
    type: "1 BHK Apartment",
    trucks: "1",
    crew: "4–5",
    cost: "1,000–1,200 AED",
    icon: Building2,
  },
  {
    type: "2 BHK Apartment",
    trucks: "1–2",
    crew: "5–6",
    cost: "1,200–1,500 AED",
    icon: Building2,
  },
  {
    type: "3 BHK Apartment",
    trucks: "2",
    crew: "6–8",
    cost: "1,500–2,000 AED",
    icon: Building2,
  },
  {
    type: "2-Bedroom Villa",
    trucks: "2",
    crew: "6–8",
    cost: "1,400–1,800 AED",
    icon: Home,
  },
  {
    type: "3-Bedroom Villa",
    trucks: "2–3",
    crew: "7–10",
    cost: "2,000–2,500 AED",
    icon: Home,
  },
  {
    type: "4-Bedroom Villa",
    trucks: "3–4",
    crew: "8–10",
    cost: "2,500–3,500 AED",
    icon: Home,
  },
  {
    type: "Small Office",
    trucks: "1",
    crew: "4–5",
    cost: "1,000–1,500 AED",
    icon: Briefcase,
  },
];
