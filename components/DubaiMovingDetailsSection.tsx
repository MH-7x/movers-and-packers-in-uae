import Link from "next/link";
import {
  Sun,
  Truck,
  Info,
  ShieldCheck,
  Wrench,
  Building,
  Briefcase,
  Home,
  Archive,
} from "lucide-react";
import { FAQSection } from "./FaqsSection";
import { DubaiAreasFAQs } from "@/lib/FaqsData";
import CTA from "./CTA";
import Image from "next/image";

export default function DubaiMovingDetailsSection() {
  const steps = [
    {
      num: "Step 1",
      title: "Contact us",
      desc: "Call or WhatsApp with your area, the size of your move, and your preferred date. We respond the same day. We'll ask a few specific questions — how many rooms, any large items like safes or gym equipment, and whether you need packing materials included.",
    },
    {
      num: "Step 2",
      title: "You get a firm quote",
      desc: "We send an itemized quote to your WhatsApp. Every line is listed: truck type, crew size, packing materials if applicable, any floor or elevator considerations. Nothing is vague. If the quote says AED 1,200, that's what you'll pay.",
    },
    {
      num: "Step 3",
      title: "Building permits and elevator bookings (if needed)",
      desc: "Most buildings in Dubai Marina, Downtown, Business Bay, and JLT require a formal move-in/move-out permit and a reserved service elevator slot. We advise you on what your specific building needs and handle the coordination as part of the booking. This catches a lot of people off-guard — it's worth knowing in advance.",
    },
    {
      num: "Step 4",
      title: "Move day",
      desc: "The crew arrives at the agreed time with the confirmed truck. They disassemble furniture, pack everything with proper materials (cartons, bubble wrap, stretch film, moving blankets), load, and transport. No subcontractors, no strangers — the team you confirmed is the team that shows up.",
    },
    {
      num: "Step 5",
      title: "Delivery and setup",
      desc: "At the new location, furniture is reassembled and placed where you want it. Unpacking service is available on request. We don't drop boxes at the door and leave.",
    },
    {
      num: "Step 6",
      title: "You check and pay",
      desc: "You inspect the job. When you're satisfied, you pay. Cash, bank transfer, or cheque — confirmed during booking. Not before.",
    },
  ];

  const pricingTable = [
    { type: "Studio / 1-bedroom apartment", range: "500 – 900" },
    { type: "2-bedroom apartment", range: "800 – 1,400" },
    { type: "3-bedroom apartment", range: "1,200 – 2,000" },
    { type: "4+ bedroom apartment or townhouse", range: "1,800 – 3,500" },
    { type: "Villa (4–5 bedrooms)", range: "2,500 – 5,000" },
    {
      type: "Large villa (6+ bedrooms, full contents)",
      range: "4,000 – 7,000+",
    },
    { type: "Single furniture item (local)", range: "200 – 500" },
    { type: "Office relocation", range: "Quoted per site survey" },
  ];

  const services = [
    {
      label: "House moving and apartment shifting in Dubai",
      slug: "/house-shifting-dubai",
      icon: Home,
    },
    {
      label: "Villa movers in Dubai",
      slug: "/villa-movers-in-dubai",
      icon: Home,
    },
    {
      label: "Apartment movers Dubai",
      slug: "/apartment-movers-dubai",
      icon: Building,
    },
    {
      label: "Office and commercial relocation in Dubai",
      slug: "/office-movers-in-dubai",
      icon: Briefcase,
    },
    {
      label: "Single-item furniture moving UAE",
      slug: "/single-furniture-moving-uae",
      icon: Truck,
    },
    {
      label: "Full packing services in Dubai",
      slug: "/packing-services-in-dubai",
      icon: Archive,
    },
    {
      label: "Furniture moving services UAE",
      slug: "/furniture-moving-services-uae",
      icon: Truck,
    },
    {
      label: "Bank furniture moving UAE",
      slug: "/bank-furniture-moving-uae",
      icon: Briefcase,
    },
    {
      label: "Hospital furniture moving UAE",
      slug: "/hospital-furniture-moving-uae",
      icon: ShieldCheck,
    },
    {
      label: "School furniture moving UAE",
      slug: "/school-furniture-moving-uae",
      icon: Building,
    },
    {
      label: "Restaurant furniture moving UAE",
      slug: "/restaurant-furniture-moving-uae",
      icon: Briefcase,
    },
    {
      label: "Curtain fitting and installation",
      slug: "/",
      icon: Wrench,
    },
    {
      label: "Storage — short and long-term",
      slug: "/",
      icon: Archive,
    },
    {
      label: "Same-day moves for urgent situations",
      slug: "/",
      icon: Truck,
    },
  ];

  return (
    <div className="w-full space-y-24 pt-16 text-foreground">
      {/* ======================================= */}
      {/* 1. WHY ENCLOSED TRUCKS MATTER SECTION   */}
      {/* ======================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              <Sun className="size-4" />
              UAE Climate Protection
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Why Enclosed Trucks Matter in Dubai
            </h2>

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Dubai summers push past 45°C, and sandstorms can arrive with
                almost no warning. An open truck is the right call for a short
                local shift — furniture loads and unloads faster and the cost is
                lower. That&apos;s a genuine trade-off worth making when the
                move is simple and nearby.
              </p>
              <p>
                For anything crossing districts — JVC to Business Bay, Mirdif to
                Dubai Marina, International City to any point on the Sheikh
                Zayed Road corridor — the road time adds up fast. Electronics
                sitting in 45°C heat for 40 minutes in open air can come out
                with warped screens, swollen bezels, or heat-related damage that
                doesn&apos;t show immediately.
              </p>
              <p>
                Upholstered furniture picks up dust in sandstorm conditions.
                Anything lacquered or painted can show surface damage that
                wasn&apos;t there when it was loaded.
              </p>
              <p className="font-semibold text-foreground">
                Our RTA-approved enclosed fleet was built for this environment.
                You choose the truck type that fits your move — we give you the
                honest comparison before you confirm, not after.
              </p>
            </div>
          </div>

          {/* Enclosed truck illustration placeholder */}
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
              <Image
                src={"/movers-and-packers-in-uae-enclosed-moving-trucks.jpg"}
                fill
                alt="movers and packers in uae enclosed moving trucks"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* 2. HOW A DUBAI MOVE WORKS SECTION       */}
      {/* ======================================= */}
      <section className="bg-muted/30 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              How a Dubai Move Works With Us
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              No jargon. This is what actually happens from first contact to
              final payment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-card border border-border p-6 rounded-2xl relative space-y-4 hover:shadow-sm transition-all text-left"
              >
                <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* 3. HONEST PRICING RANGE SECTION         */}
      {/* ======================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Moving Prices in Dubai — Honest Ranges
            </h2>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                We don&apos;t publish fixed rates because every move is
                different. Truck type, floor level, distance, and packing
                requirements all change the number. What we do give is a firm,
                itemized quote on WhatsApp before any work starts. There are no
                add-ons on the day.
              </p>
              <p>
                <strong>What changes the price:</strong> distance between
                locations, truck size required, number of crew members, floor
                level and elevator availability, packing materials, and
                specialist items (safes, gym equipment, pianos, industrial
                machinery). All of this is in your WhatsApp quote before we
                start.
              </p>
            </div>

            <div className="border-l-4 border-primary bg-muted/60 p-5 rounded-r-xl space-y-3">
              <h4 className="font-bold text-foreground flex items-center gap-2">
                <Info className="size-4 text-primary" />
                Note on Cheap Movers in Dubai
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We&apos;re not the cheapest option in the market. But we&apos;re
                also not a freelance crew with no license, no liability, and no
                comeback if something breaks. Our pricing reflects a registered
                company with 25+ years in Dubai, RTA-approved trucks, and a
                pay-after-satisfaction policy. Most customers find that worth
                the difference.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-border bg-muted/40 text-left">
              <h3 className="font-bold text-foreground">
                Dubai Standard Price Estimates
              </h3>
              <p className="text-xs text-muted-foreground">
                Applies under typical conditions (operational lifts, standard
                access roads)
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/20 text-foreground text-xs font-semibold border-b border-border">
                    <th className="p-4">Move Type</th>
                    <th className="p-4 text-right">Typical Range (AED)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm text-muted-foreground">
                  {pricingTable.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-muted/10 transition-colors"
                    >
                      <td className="p-4 font-medium text-foreground">
                        {row.type}
                      </td>
                      <td className="p-4 text-right font-bold text-primary">
                        {row.range}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* 4. SERVICES DIRECTORY SECTION           */}
      {/* ======================================= */}
      <section className="bg-muted/30 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
              Services Available Across All Dubai Areas
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We provide fully-regulated residential, retail, and commercial
              logistics. Select any service to explore detailed procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <Link
                  key={idx}
                  href={svc.slug}
                  className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/20 hover:shadow-sm transition-all group text-left"
                >
                  <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <IconComp className="size-4" />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {svc.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 text-sm text-muted-foreground text-left max-w-4xl bg-card border border-border p-5 rounded-2xl shadow-sm">
            <span className="font-bold text-foreground">
              Specialist Shifting Requirements:
            </span>{" "}
            For industrial machinery, hospital equipment, heavy safes, or
            anything not listed —{" "}
            <Link
              href="tel:+971507745691"
              className="text-primary hover:underline font-semibold"
            >
              call us directly
            </Link>
            . We handle specialist moves on a per-job basis.
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* 5. FREQUENTLY ASKED QUESTIONS           */}
      {/* ======================================= */}
      <div className="-mt-16" />
      <FAQSection
        subtitle=" Answers to your key questions about timelines, licensing, pricing
            guarantees, and area logistics."
        faqs={DubaiAreasFAQs}
      />

      {/* ======================================= */}
      {/* 6. BOTTOM CTA                           */}
      {/* ======================================= */}
      <CTA
        title="Read To Move ? Contact Us Today"
        desc=" Pick your area from the grid above, or contact us directly.
            We'll send a firm quote to your WhatsApp — every item listed,
            nothing vague. You don't pay a dirham until the job is done."
      />
    </div>
  );
}
