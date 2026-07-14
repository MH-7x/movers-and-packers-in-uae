import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import ServiceHero from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { AllServices, locations } from "@/lib/data";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import HeroImage from "@/public/ser/warehouse-moving-dubai-industrial-service.jpg";
import { MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Warehouse Moving in UAE | Licensed Commercial Movers",
      desc: "Need warehouse moving in UAE? We relocate inventory, equipment & heavy machinery across all emirates. Licensed, insured, experienced since 1998.",
    },
    image: {
      path: "/ser/warehouse-moving-dubai-industrial-service.jpg",
      alt: "Warehouse Moving in UAE - Licensed Commercial Movers",
    },
    path: "/warehouse-moving-in-uae",
  },
});

const WarehouseMoving = () => {
  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "Warehouse Moving in UAE",
        url: "/warehouse-moving-in-uae",
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
              title: "Warehouse Moving in UAE",
              url: "/warehouse-moving-in-uae",
            },
          ]}
        />
        <ServiceHero
          title="Warehouse Moving in UAE — Commercial Relocation Done Right"
          desc="Warehouse moving in UAE requires more than a truck and a few workers. You are dealing with heavy equipment, fragile inventory, palletized goods, and tight delivery schedules where every hour of downtime costs money. At Movers and Packers in UAE, we relocate commercial warehouses safely."
          image={{
            src: HeroImage,
            alt: "Warehouse Moving in UAE",
          }}
          btnText="Get a Free Warehouse Moving Quote"
        />

        <section className="mt-16 max-w-4xl mx-auto md:px-0 px-4">
          <h3 className="md:text-2xl text-lg font-bold text-center">
            Reliable{" "}
            <Link
              href="/warehouse-moving-in-uae"
              className="text-primary underline underline-offset-4"
            >
              warehouse moving services
            </Link>
            . Minimal downtime and maximum protection.
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
            {[
              "Heavy Equipment Handlers",
              "Inventory Relocation",
              "Enclosed & Open Trucks",
              "Experienced Since 1998",
              "No Hidden Costs",
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
              We have been relocating commercial warehouses, factory equipment,
              and business inventory across the UAE since 1998. We have the
              trucks, the trained crews, and the experience to move your
              warehouse without losing a single item or a single day more than
              necessary.
            </p>
          </div>
        </section>

        <QuotationSection
          title={
            <>
              <span className="font-bold md:block">
                Plan Your Commercial Move
              </span>{" "}
              With Movers and Packers in UAE
            </>
          }
          btnText="Get Warehouse Moving Quote"
          desc="Whether you are moving a small storage room or a full-scale industrial warehouse, we handle the entire process — from inventory cataloging to heavy equipment loading to final placement at your new facility."
        />

        <div className="max-w-7xl md:px-10 mx-auto mt-20 grid lg:grid-cols-6 grid-col-1 min-h-screen gap-10">
          <div
            className="lg:col-span-4 flex flex-col gap-y-16 md:px-0 px-4"
            id="service-content"
          >
            <section>
              <h2>When Businesses Need Warehouse Moving</h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-8">
                {[
                  {
                    title: "Lease expiration or relocation",
                    description:
                      "Your current warehouse lease is ending, and you need to move operations to a new facility.",
                  },
                  {
                    title: "Expansion or downsizing",
                    description:
                      "Your business grew and needs a bigger space, or you are consolidating into a smaller, more efficient location.",
                  },
                  {
                    title: "Renovation or facility upgrade",
                    description:
                      "Your warehouse is being refitted, and everything needs to come out, get stored, and go back in.",
                  },
                  {
                    title: "New branch opening",
                    description:
                      "You are splitting operations between two locations and need inventory redistributed.",
                  },
                  {
                    title: "Equipment upgrades",
                    description:
                      "Old machinery going out, new machinery coming in. Both need professional handling.",
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
            </section>

            <section>
              <h2>Our Warehouse Moving Process</h2>
              <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-10">
                {[
                  {
                    title: "1. Site Survey and Planning",
                    desc: "We assess the volume of goods, identify heavy equipment, check loading dock access, and plan the timeline.",
                  },
                  {
                    title: "2. Inventory Cataloging",
                    desc: "Every item gets logged. You receive a complete inventory list so nothing goes unaccounted for.",
                  },
                  {
                    title: "3. Packing and Crating",
                    desc: "Inventory is packed in industrial-grade cartons. Heavy machinery gets custom crating with foam padding and strapping.",
                  },
                  {
                    title: "4. Loading and Transport",
                    desc: "We use enclosed box trucks and open trucks for large machinery. Loaded by trained crews using proper lifting techniques.",
                  },
                  {
                    title: "5. Unloading and Placement",
                    desc: "We place everything according to your layout plan. Racks, shelves, and storage systems get reassembled.",
                  },
                  {
                    title: "6. Post-Move Verification",
                    desc: "We cross-check the delivered items against the original inventory. You confirm receipt before signing off.",
                  },
                ].map((process, i) => (
                  <div key={i}>
                    <h3 className="mb-2! text-lg! text-primary">
                      {process.title}
                    </h3>
                    <p className="leading-tight">{process.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-secondary rounded-3xl aspect-video relative overflow-hidden">
              <Image
                src={
                  "/ser/movers-and-packers-in-uae-company-trucks-parked-outside-warehouse.jpg"
                }
                alt="Warehouse moving company trucks parked outside"
                fill
                className="object-cover"
              />
            </div>

            <section>
              <h2>Industries We Serve</h2>
              <ul className="list-disc pl-5 mt-4 space-y-4">
                <li>
                  <strong>Restaurants and food service:</strong> Kitchen
                  equipment, refrigeration units, bulk food supplies. We plan
                  moves around operating hours.
                </li>
                <li>
                  <strong>Retail and e-commerce:</strong> Inventory, display
                  units, point-of-sale equipment. We work with your stock system
                  to ensure orders ship.
                </li>
                <li>
                  <strong>Schools and educational institutions:</strong>{" "}
                  Classroom furniture, lab equipment, and IT hardware. We handle
                  moves during school breaks.
                </li>
                <li>
                  <strong>Hospitals and clinics:</strong> Medical equipment,
                  files, and sensitive instruments. We follow careful handling
                  protocols for medical items.
                </li>
                <li>
                  <strong>Factories and manufacturing:</strong> Production
                  machinery, raw materials, tools, and assembly line components.
                </li>
                <li>
                  <strong>Banks and financial offices:</strong> Safes, IT
                  servers, document archives, and high-security items.
                </li>
              </ul>
              <p className="mt-5">
                Take a look at our{" "}
                <Link
                  href="/office-movers-in-dubai"
                  className="text-primary underline"
                >
                  office relocation service
                </Link>{" "}
                and{" "}
                <Link
                  href="/storage-services-in-uae"
                  className="text-primary underline"
                >
                  storage facilities
                </Link>{" "}
                if you need complete commercial solutions.
              </p>
            </section>

            <section>
              <h2>Why Choose Us for Warehouse Moving</h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-8">
                {[
                  {
                    title: "Licensed and registered since 1998",
                    description:
                      "We are a fully registered moving company with a verifiable business license.",
                  },
                  {
                    title: "Enclosed and open truck fleet",
                    description:
                      "Our enclosed trucks protect goods from heat and sandstorms. We use open trucks for heavy machinery.",
                  },
                  {
                    title: "Trained commercial crews",
                    description:
                      "Our teams include carpenters, electricians, heavy equipment handlers, and logistics coordinators.",
                  },
                  {
                    title: "Insurance coverage",
                    description:
                      "Your warehouse inventory and equipment are covered during transport and handling.",
                  },
                  {
                    title: "No hidden costs",
                    description:
                      "You get a quote that covers everything. No surprise charges for stairs, distance, or overtime.",
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
            </section>

            <section>
              <h2>What to Prepare Before a Warehouse Move</h2>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>
                  <strong>Inventory audit:</strong> Know what you have before
                  moving day. Identify items to discard or donate.
                </li>
                <li>
                  <strong>Notify suppliers and customers:</strong> Update your
                  business address with vendors and logistics partners before
                  the move.
                </li>
                <li>
                  <strong>Label zones at the new location:</strong> Mark the
                  zones and racks so our crew places items in the right spots
                  immediately.
                </li>
                <li>
                  <strong>Back up digital systems:</strong> Back up all
                  inventory data. Server equipment should be professionally
                  disconnected.
                </li>
                <li>
                  <strong>Coordinate with building management:</strong> Handle
                  loading dock reservations and security clearance requirements
                  at least a week in advance.
                </li>
              </ul>
            </section>
          </div>

          <aside className="lg:col-span-2 flex flex-col gap-y-5 self-start sticky top-24 md:px-0 px-4">
            <div className="rounded-2xl bg-muted p-6 space-y-3">
              <h3 className="font-bold text-lg">Need Warehouse Moving?</h3>
              <p className="text-sm text-muted-foreground">
                Contact our commercial moving experts for a comprehensive site
                survey and professional relocation plan.
              </p>
              <div className="flex flex-col gap-2 pt-3">
                <Button
                  callBtn
                  className="bg-primary hover:bg-primary/90 w-full gap-2"
                >
                  <PhoneCall size={18} />
                  Call Now
                </Button>
                <Button
                  whatsappBtn
                  variant="secondary"
                  className="w-full gap-2"
                >
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
          faqs={warehouseMovingFaqs}
          title="Frequently Asked Questions — Warehouse Moving in UAE"
        />

        <CTA
          title="Get a Free Warehouse Moving Quote"
          desc="Moving a warehouse is not something you figure out on moving day. Contact us early, let us do a site survey, and we will build a plan that minimizes your downtime and keeps your operations running."
        />
      </main>
    </>
  );
};

export default WarehouseMoving;

const warehouseMovingFaqs = [
  {
    question: "How much does warehouse moving cost in the UAE?",
    answer: (
      <>
        <p>
          It depends on the volume of goods, the distance between locations, the
          type of equipment involved, and the timeline.
        </p>
        <p>
          Contact us for a site survey, and we will give you a detailed quote.
        </p>
      </>
    ),
  },
  {
    question: "Can you move heavy industrial machinery?",
    answer: (
      <>
        <p>
          Yes. We handle machinery of various sizes using hydraulic lifts,
          forklifts, and specialized loading equipment.
        </p>
        <p>Our team is trained in heavy item rigging and securing.</p>
      </>
    ),
  },
  {
    question: "How long does a warehouse move take?",
    answer: (
      <>
        <p>A small warehouse (under 2,000 sq ft) can be moved in one day.</p>
        <p>
          Larger facilities with heavy equipment may take 2–5 days depending on
          complexity. We give you a precise timeline during the planning phase.
        </p>
      </>
    ),
  },
  {
    question: "Do you offer storage if my new warehouse is not ready?",
    answer: (
      <>
        <p>
          Yes. We have our own storage facilities where your inventory and
          equipment can be kept safely.
        </p>
        <p>They remain protected until your new space is ready.</p>
      </>
    ),
  },
  {
    question: "Can you work nights or weekends to avoid business disruption?",
    answer: (
      <>
        <p>Yes. We schedule warehouse moves around your business hours.</p>
        <p>
          Night and weekend moves are available at no additional charge for most
          projects.
        </p>
      </>
    ),
  },
];
