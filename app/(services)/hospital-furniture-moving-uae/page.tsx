import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import ServiceHero from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { AllServices, locations } from "@/lib/data";
import { HospitalFurnitureMovingFaqs } from "@/lib/FaqsData";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import HeroImage from "@/public/ser/hospital-furniture-moving-uae-professional-movers-medical-equipment.jpg";
import { PhoneCall, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Hospital Furniture Moving in UAE | Medical Equipment Movers",
      desc: "Expert hospital furniture movers in UAE. Safe, hygienic relocation of clinical beds & medical equipment across Dubai & Abu Dhabi. Licensed since 1998. Get a quote!",
    },
    image: {
      path: "/ser/hospital-furniture-moving-uae-professional-movers-medical-equipment.jpg",
      alt: "Professional hospital furniture movers in UAE handling medical equipment and hospital beds with care",
    },
    path: "/hospital-furniture-moving-uae",
  },
});

const HospitalFurnitureMoving = () => {
  return (
    <main>
      <ServiceHero
        title="Hospital Furniture Moving in UAE — Safe, Hygienic & Professional Medical Movers"
        desc="Hospital and healthcare facility relocations require a uniquely careful approach. Moving hospital beds, patient room furniture, clinical workstations, and medical office setups demands hygiene compliance, careful handling techniques, and a team that understands the sensitivity of healthcare environments."
        image={{
          src: HeroImage,
          alt: "Professional hospital furniture movers in Dubai handling medical equipment and hospital beds with care",
        }}
        btnText="Plan Your Hospital Furniture Move"
      />
      <section className="mt-16 max-w-4xl mx-auto md:px-0 px-4">
        <p className="text-center">
          <Link href="/">At Movers and Packers in UAE</Link>, we provide a
          specialist hospital furniture moving service designed for clinics,
          hospitals, medical centers, and healthcare facilities across all UAE
          emirates.
        </p>
        <p className="md:text-2xl text-lg font-bold text-center mt-3">
          With 25+ years of commercial moving experience and a foundation built
          on{" "}
          <span className="text-primary underline underline-offset-4">
            Protection and Privacy
          </span>
          , we are the trusted choice for healthcare institutions looking for
          professional, reliable, and discreet furniture movers in the UAE.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
          {[
            "25+ Years Experience",
            "100% Insured",
            "No Hidden Charges",
            "Healthcare Trained",
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
            <p className="text-white/80">Institutional Moves</p>
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
              Plan Your Hospital or Clinic
            </span>{" "}
            Furniture Move — Speak to Our Commercial Team
          </>
        }
        btnText="Get Hospital Moving Quote"
        desc="Professional hospital furniture movers with 25+ years of experience in healthcare facility relocations. Safe, hygienic, and discreet service across all UAE."
      />
      <div className="max-w-7xl md:px-10 mx-auto mt-20 grid lg:grid-cols-6 grid-col-1 min-h-screen gap-10">
        <div
          className="lg:col-span-4 flex flex-col gap-y-16 md:px-0 px-4"
          id="service-content"
        >
          <section>
            <h2>Why Hospital Furniture Moving Is Different</h2>
            <p>
              Healthcare facility moves differ significantly from standard
              commercial relocations:
            </p>
            <ul className="list-inside list-disc mt-3 text-muted-foreground leading-tight space-y-2">
              <li>
                <strong>Hygiene and infection control</strong> — all packaging
                materials and handling must meet hospital-grade cleanliness
                standards
              </li>
              <li>
                <strong>Fragile and high-value clinical furniture</strong> —
                adjustable beds, examination tables, and specialized seating
              </li>
              <li>
                <strong>Zero tolerance for damage</strong> — broken hospital
                furniture can directly impact patient care
              </li>
              <li>
                <strong>Complex logistics</strong> — multi-department moves,
                floor-by-floor coordination, and elevator scheduling
              </li>
              <li>
                <strong>Minimizing disruption to patient services</strong> —
                moves must be timed precisely
              </li>
              <li>
                <strong>Safe handling of heavy medical furniture</strong> —
                bariatric beds, ward cabinets, nurse stations
              </li>
            </ul>
          </section>
          <section>
            <h2>Hospital & Healthcare Furniture We Move</h2>
            <p>
              Our expertise covers all types of hospital and clinical furniture
              found in healthcare facilities across the UAE:
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-6">
              {[
                {
                  category: "Patient Room Furniture",
                  items: [
                    "Hospital beds — standard, bariatric, adjustable, and ICU beds",
                    "Patient room furniture — bedside lockers, overbed tables, visitor chairs",
                  ],
                },
                {
                  category: "Clinical & Treatment Areas",
                  items: [
                    "Nurse stations and clinical workstations",
                    "Examination tables and treatment room furniture",
                  ],
                },
                {
                  category: "Hospital Administrative & Support Areas",
                  items: [
                    "Hospital ward cabinets and medication storage units",
                    "Medical office desks, chairs, and filing systems",
                  ],
                },
                {
                  category: "Public & Staff Areas",
                  items: [
                    "Waiting room and reception area furniture",
                    "Staff room, canteen, and break room furniture",
                  ],
                },
                {
                  category: "Specialized Spaces",
                  items: [
                    "Conference and training room furniture",
                    "Administrative office furniture within the hospital",
                  ],
                },
              ].map((section, i) => (
                <div
                  key={i}
                  className="border-b border-primary leading-tight pb-4"
                >
                  <h3 className="mb-3! text-base! font-semibold">
                    {section.category}
                  </h3>
                  <ul className="list-inside list-disc text-muted-foreground text-sm space-y-1">
                    {section.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <div className="bg-secondary rounded-3xl aspect-video relative overflow-hidden">
            <Image
              src={
                "/ser/movers-and-packers-in-uae-company-trucks-parked-outside-warehouse.jpg"
              }
              alt="movers and packers in uae company trucks parked outside warehouse"
              fill
              className="object-cover"
            />
          </div>
          <section>
            <h2>Our Hospital Furniture Moving Process</h2>
            <p>
              Our systematic, healthcare-focused approach ensures your facility
              move is handled with precision and minimal disruption:
            </p>
            <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-10">
              {[
                {
                  title: "Facility Survey",
                  desc: "Our commercial team visits the hospital to assess the move scope, access points, elevator dimensions, and floor plan.",
                },
                {
                  title: "Hygienic Packing Materials",
                  desc: "All packing materials are clean and unused. Items are wrapped to the standard required for healthcare environments.",
                },
                {
                  title: "Systematic Labelling",
                  desc: "Every item is labelled by department and room number, ensuring efficient unpacking at the destination.",
                },
                {
                  title: "Coordinated Floor-by-Floor Moving",
                  desc: "Our team works systematically and coordinates with hospital facility managers to avoid disrupting active patient areas.",
                },
                {
                  title: "Specialized Handling for Heavy Items",
                  desc: "Hospital beds and large medical furniture are handled with proper equipment and trained lifting techniques.",
                },
                {
                  title: "After-Hours Moving Available",
                  desc: "We can schedule moves during night hours or non-operational periods to minimize impact on patient care.",
                },
                {
                  title: "Post-Move Inspection",
                  desc: "We complete a final walkthrough with the facilities manager before concluding the move.",
                },
              ].map((process, i) => (
                <div key={i} className="rounded-2xl p-5 bg-muted">
                  <h3 className="mb-0! text-lg! font-medium">
                    {process.title}
                  </h3>
                  <p className="mt-3 leading-tight text-muted-foreground text-sm">
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2>Why Healthcare Facilities Trust Us</h2>
            <p>
              When it comes to moving critical healthcare assets, trust and
              expertise matter. Here is what sets us apart:
            </p>
            <ul className="list-inside list-disc mt-5 text-muted-foreground leading-relaxed space-y-3">
              <li>
                <strong>Licensed and registered since 1998</strong> — not an
                informal, uncertified mover
              </li>
              <li>
                <strong>25+ years of experience</strong> in institutional and
                commercial furniture moving
              </li>
              <li>
                <strong>Team trained in careful, professional handling</strong>{" "}
                of clinical environments
              </li>
              <li>
                <strong>Fully Enclosed Box Trucks</strong> protect items during
                UAE&apos;s extreme heat and sandstorms
              </li>
              <li>
                <strong>Protection and Privacy</strong> — our founding principle
                — is especially critical in healthcare settings
              </li>
              <li>
                <strong>Flexible scheduling</strong> including nights and
                weekends
              </li>
              <li>
                <strong>
                  Available across Dubai, Abu Dhabi, Sharjah, Ajman,
                </strong>{" "}
                and all UAE
              </li>
              <li>
                <strong>Transparent written quotes</strong> with no hidden
                charges
              </li>
            </ul>
          </section>
        </div>
        <aside className="lg:col-span-2 flex flex-col gap-y-5 self-start sticky top-24 md:px-0 px-4">
          <div className="rounded-2xl bg-muted p-6 space-y-3">
            <h3 className="font-bold text-lg">Need Hospital Moving Help?</h3>
            <p className="text-sm text-muted-foreground">
              Contact our commercial team today for a free consultation and
              quote. We specialize in healthcare facility relocations.
            </p>
            <div className="flex flex-col gap-2 pt-3">
              <Button
                callBtn
                className="bg-primary hover:bg-primary/90 w-full gap-2"
              >
                <PhoneCall size={18} />
                Call Now
              </Button>
              <Button whatsappBtn variant="secondary" className="w-full gap-2">
                <MessageCircle size={18} />
                WhatsApp
              </Button>
            </div>
          </div>
          <div className="rounded-2xl bg-secondary/50 p-6">
            <h4 className="font-semibold mb-3 text-lg">OUR MOVING SERVICES</h4>
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
        faqs={HospitalFurnitureMovingFaqs}
        title="Frequently Asked Questions — Hospital Furniture Moving UAE"
      />
      <CTA
        title="Contact Our Commercial Team for a Hospital Furniture Moving Plan — All UAE"
        desc="Professional hospital furniture movers with 25+ years of experience in healthcare facility relocations. Safe, hygienic, and discreet service. Available across Dubai, Abu Dhabi, Sharjah, Ajman, and all UAE emirates. Call or WhatsApp us today for a free consultation and quote."
      />
    </main>
  );
};

export default HospitalFurnitureMoving;
