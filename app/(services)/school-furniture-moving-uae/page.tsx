import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import ServiceHero from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { AllServices, locations } from "@/lib/data";
import { SchoolFurnitureMovingFaqs } from "@/lib/FaqsData";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import HeroImage from "@/public/ser/school-furniture-moving-uae-professional-educational-institution-relocation.jpg";
import { MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "School Furniture Moving in UAE | Educational Institution Movers ",
      desc: "School furniture movers in UAE. Professional relocation of classrooms, labs & offices across Dubai, Abu Dhabi & Sharjah. Trusted & experienced. Free quote.",
    },
    image: {
      path: "/ser/school-furniture-moving-uae-professional-educational-institution-relocation.jpg",
      alt: "Movers and Packers in UAE professional team relocating student desks and a whiteboard through a modern UAE school corridor during an educational institution move",
    },
    path: "/school-furniture-moving-uae",
  },
});

const SchoolFurnitureMoving = () => {
  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "School Furniture Moving",
        url: "/school-furniture-moving-uae",
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
        <ServiceHero
          title="School Furniture Moving in UAE — Educational Institution Relocation"
          desc="Professional school and educational institution furniture movers in UAE. Efficient relocation of classrooms, library shelving, lab furniture & admin offices across Dubai, Abu Dhabi, Sharjah & all UAE. Free quote."
          image={{
            src: HeroImage,
            alt: "Movers and Packers in UAE professional team relocating student desks and a whiteboard through a modern UAE school corridor during an educational institution move",
          }}
          btnText="Plan Your School Furniture Move"
        />
        <section className="mt-16 max-w-4xl mx-auto md:px-0 px-4">
          <p className="md:text-xl text-lg font-bold text-center">
            Schools, colleges, universities, and educational centers in the UAE
            face a unique challenge when relocating or rearranging furniture:
            the moves must be efficient, complete, and disruptive-free — ideally
            timed with term breaks or non-teaching periods.
          </p>
          <div className="md:text-lg text-muted-foreground text-center mt-10 md:px-20">
            <p>
              At Movers and Packers in UAE, we provide a dedicated school
              furniture moving service designed for educational institutions of
              all sizes, across all UAE emirates.
            </p>
            <p>
              With over 25 years of institutional and commercial moving
              experience since 1998, we understand the scale and coordination
              required to move a school campus, relocate classroom furniture, or
              shift an entire administration block quickly and safely.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
            {[
              "100% Insured",
              "Systematic Labelling",
              "Holiday Scheduling",
              "Multi-Room Capable",
            ].map((t, i) => (
              <div
                key={i}
                className="bg-primary text-white text-shadow-2xs px-3 py-1.5 text-sm rounded-4xl flex items-center gap-2"
              >
                <span> ✔</span> <p>{t} </p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-foreground/90 p-10 rounded-3xl grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <div className="text-center md:border-r md:border-b-transparent border-b md:pb-0 pb-2 border-primary">
              <p className="text-3xl text-white font-bold">25+</p>
              <p className="text-white/80">Years Experience</p>
            </div>
            <div className="text-center md:border-r md:border-b-transparent border-b md:pb-0 pb-2 border-primary">
              <p className="text-3xl text-white font-bold">1,000s+</p>
              <p className="text-white/80">Moves Completed</p>
            </div>
            <div className="text-center md:border-r md:border-b-transparent border-b md:pb-0 pb-2 border-primary">
              <p className="text-3xl text-white font-bold">9+</p>
              <p className="text-white/80">Emirates Covered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl text-white font-bold">100%</p>
              <p className="text-white/80">Insurance Coverage</p>
            </div>
          </div>
        </section>

        <QuotationSection
          title={
            <>
              <span className="font-bold md:block">
                Plan Your School or College Furniture Move
              </span>{" "}
              — Free Consultation Available
            </>
          }
          btnText="Get School Furniture Moving Plan"
          desc="Get a free moving plan from our expert school furniture movers in UAE. We handle everything from systematic planning and labelling to safe transport and setup. No hidden charges, fully insured, and flexible holiday scheduling."
        />
        <div className="max-w-7xl md:px-10 mx-auto mt-20 grid lg:grid-cols-6 grid-col-1 min-h-screen gap-10">
          <div
            className="lg:col-span-4 flex flex-col gap-y-16 md:px-0 px-4"
            id="service-content"
          >
            <section>
              <h2>Why School Furniture Moving Needs a Professional Company</h2>
              <p>
                Educational furniture relocation is more complex than it
                appears:
              </p>
              <ul className="mt-5 space-y-3 list-disc list-inside text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">Volume:</span>{" "}
                  A school may have hundreds of desks, chairs, and storage units
                  across dozens of classrooms
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Variety:
                  </span>{" "}
                  Classrooms, libraries, science labs, IT suites, sports
                  storage, canteens, and admin offices all have different
                  furniture types
                </li>
                <li>
                  <span className="font-semibold text-foreground">Timing:</span>{" "}
                  Moves must align with school holidays or closure periods to
                  avoid disruption to students
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Organisation:
                  </span>{" "}
                  Items must be systematically labelled by room number so they
                  can be set up correctly at the destination
                </li>
                <li>
                  <span className="font-semibold text-foreground">Safety:</span>{" "}
                  Student safety areas must not be blocked during the move
                  process
                </li>
              </ul>
            </section>

            <section>
              <h2>School & Educational Furniture We Move</h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-8">
                {[
                  "Classroom furniture — student desks, chairs, teacher desks, whiteboards",
                  "Library shelving units, reading tables, and study carrels",
                  "Science lab benches, storage cabinets, and equipment trolleys",
                  "IT suite desks, computer station furniture, and AV equipment stands",
                  "Administration office desks, filing cabinets, and meeting room furniture",
                  "Staff room furniture — sofas, dining tables, lockers, and kitchen units",
                  "Sports and PE storage furniture and equipment racks",
                  "School canteen tables, chairs, and food service counters",
                  "Nursery and early years classroom furniture — low tables, soft furnishings, storage",
                  "University lecture hall seating and seminar room furniture",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 border-b pb-3 border-secondary"
                  >
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2>Our School Furniture Moving Process</h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "Pre-Move Planning",
                    desc: "We work with your facilities manager or school administrator to map out every room's furniture inventory and create a systematic move plan.",
                  },
                  {
                    title: "Labelling System",
                    desc: "Every piece of furniture is tagged with its origin and destination room number to enable fast, accurate setup at the new location.",
                  },
                  {
                    title: "Staged Moving",
                    desc: "Large school moves are planned in phases — one section or floor at a time — to keep the process organized.",
                  },
                  {
                    title: "School Holiday Scheduling",
                    desc: "We are flexible with timing and can schedule moves during summer, Eid, winter, or spring breaks to avoid disruption.",
                  },
                  {
                    title: "Efficient Loading",
                    desc: "Our team is experienced in high-volume moves, ensuring fast, systematic loading and transport.",
                  },
                  {
                    title: "Careful Unpacking & Setup",
                    desc: "Furniture is placed in the correct rooms according to the labelling plan, ready for the start of term.",
                  },
                  {
                    title: "Final Walkthrough",
                    desc: "Our team supervisor does a complete check with the school's representative before departing.",
                  },
                ].map((process, i) => (
                  <div key={i} className="border-l-2 border-primary pl-5">
                    <h3 className="text-lg font-semibold mb-2">
                      {process.title}
                    </h3>
                    <p className="text-muted-foreground">{process.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-secondary rounded-3xl aspect-video relative overflow-hidden">
              <Image
                src={"/ser/furniture-movers-in-uae-branded-moving-trucks.jpg"}
                alt="furniture movers in uae branded moving trucks"
                fill
                className="object-cover"
              />
            </div>

            <section>
              <h2>Why Schools Choose Movers and Packers in UAE</h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-8">
                {[
                  {
                    title:
                      "25+ years of experience in large-scale commercial and institutional moves",
                    icon: "✓",
                  },
                  {
                    title:
                      "Experienced in managing high-volume, multi-room furniture relocations",
                    icon: "✓",
                  },
                  {
                    title:
                      "Systematic labelling and inventory management for school moves",
                    icon: "✓",
                  },
                  {
                    title:
                      "Flexible scheduling — term breaks, weekends, public holidays",
                    icon: "✓",
                  },
                  {
                    title:
                      "Fully enclosed trucks protecting furniture from UAE heat and sand",
                    icon: "✓",
                  },
                  {
                    title:
                      "Licensed company since 1998 — accountability and trust for institutional clients",
                    icon: "✓",
                  },
                  {
                    title:
                      "Transparent fixed pricing with formal invoice available for school procurement",
                    icon: "✓",
                  },
                  {
                    title:
                      "Serving schools and universities across all UAE emirates",
                    icon: "✓",
                  },
                ].map((reason, i) => (
                  <div
                    key={i}
                    className="border-b border-primary pb-4 last:border-0 flex items-start gap-3"
                  >
                    <span className="text-primary text-xl shrink-0">
                      {reason.icon}
                    </span>
                    <p className="text-muted-foreground">{reason.title}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-2 flex flex-col gap-y-5 self-start sticky top-24 md:px-0 px-4">
            <div className="rounded-2xl bg-muted p-6 space-y-3">
              <h3 className="font-bold text-lg">
                Need Help in School Furniture Moving?
              </h3>
              <p className="text-sm text-muted-foreground">
                We are available 24/7 to help you with your school furniture
                relocation. Contact us now!
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
              <h4 className="font-semibold mb-3 text-lg">
                OUR MOVING SERVICES
              </h4>
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
              <h4 className="font-semibold mb-3 text-lg">AREAS WE SERVES</h4>
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
          faqs={SchoolFurnitureMovingFaqs}
          title="Frequently Asked Questions — School Furniture Moving UAE"
        />
        <CTA
          title="Get a Free School Furniture Moving Plan — Serving All UAE Educational Institutions"
          desc="If you're planning a school or college furniture move across the UAE, we are here to help. We are fully insured, with systematic labelling and flexible scheduling for term breaks. Call, WhatsApp, or fill out the form — we'll get back to you fast with a complete moving plan and fixed price. No hidden charges, no disruption to students."
        />
      </main>
    </>
  );
};

export default SchoolFurnitureMoving;
