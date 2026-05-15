import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import ServiceHero from "@/components/ServiceHero";
import { AllServices, locations } from "@/lib/data";
import { BankFurnitureMovingUaeFaqs } from "@/lib/FaqsData";
import HeroImage from "@/public/ser/bank-furniture-moving-dubai-teller-counter-relocation.jpg";
import { MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Script from "next/script";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Bank Furniture Moving in UAE | Secure Commercial Movers",
      desc: "Trusted bank furniture movers in UAE. Secure & confidential relocation of counters, teller stations, and heavy safes across Dubai & the UAE. Get a quote!",
    },
    image: {
      path: "/ser/bank-furniture-moving-dubai-teller-counter-relocation.jpg",
      alt: "Movers and Packers in UAE professional team carefully relocating a bank teller counter inside a modern Dubai bank branch",
    },
    path: "/bank-furniture-moving-uae",
  },
});

const BankFurnitureMovers = () => {
  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "Bank Furniture Moving in UAE",
        url: "/bank-furniture-moving-uae",
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
          title="Bank Furniture Moving in UAE — Confidential Commercial Movers"
          desc="Moving a bank branch or financial institution in the UAE demands a level of trust, security, and professionalism that ordinary movers simply cannot provide. "
          image={{
            src: HeroImage,
            alt: "Movers and Packers in UAE professional team carefully relocating a bank teller counter inside a modern Dubai bank branch",
          }}
          btnText="Get a Confidential Bank Moving Quote"
        />
        <section className="mt-16 max-w-4xl mx-auto md:px-0 px-4">
          <div className="md:text-lg text-muted-foreground text-center md:px-20 space-y-4">
            <p>
              At Movers and Packers in UAE, we offer a specialist bank furniture
              moving service built on the pillars of Protection and Privacy —
              the core philosophy our company has operated on since 1998.
            </p>
            <p>
              If you are a bank manager, facilities director, or IT
              infrastructure head planning a branch relocation, fit-out change,
              or full bank office move anywhere in UAE, our team is the
              professionally licensed, commercially experienced partner you
              need.
            </p>
            <p>
              {" "}
              We have handled complex commercial furniture moves across Dubai,
              Abu Dhabi, Sharjah, and all UAE emirates.
            </p>
            <p className="text-primary font-bold text-center text-lg">
              Plan Your Bank Relocation — Call for a Confidential, No-Obligation
              Consultation
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-8">
            {[
              "Fully Confidential",
              "No Hidden Charges",
              "After-Hours Available",
              "All UAE Emirates",
            ].map((t, i) => (
              <div
                key={i}
                className="bg-primary text-white text-shadow-2xs px-3 py-1.5 text-sm rounded-4xl flex items-center gap-2"
              >
                <span>✔</span> <p>{t}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-foreground/90 p-10 rounded-3xl grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <div className="text-center md:border-r md:border-b-transparent border-b md:pb-0 pb-2 border-primary">
              <p className="text-3xl text-white font-bold">25+</p>
              <p className="text-white/80">Years Experience</p>
            </div>
            <div className="text-center md:border-r md:border-b-transparent border-b md:pb-0 pb-2 border-primary">
              <p className="text-3xl text-white font-bold">100+</p>
              <p className="text-white/80">Bank Moves Completed</p>
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
                Get a Confidential Quote
              </span>{" "}
              From Bank Furniture Movers
            </>
          }
          btnText="Request Bank Moving Consultation"
          desc="Get a discreet, professional quote for your bank furniture relocation. We understand the security and confidentiality requirements of financial institutions."
        />
        <div className="max-w-7xl md:px-10 mx-auto mt-20 grid lg:grid-cols-6 grid-col-1 min-h-screen gap-10">
          <div
            className="lg:col-span-4 flex flex-col gap-y-16 md:px-0 px-4"
            id="service-content"
          >
            <section>
              <h2>Why Bank Furniture Moving Requires a Specialist Mover</h2>
              <p>
                Bank relocations are not like ordinary home moves. They involve
                unique challenges and risks:
              </p>
              <ul className="list-inside list-disc mt-6 text-muted-foreground leading-relaxed space-y-2">
                <li>
                  Security sensitivity: bank counters, teller stations, and
                  vault rooms hold or have held high-value assets — discretion
                  is essential
                </li>
                <li>
                  Heavy safes and secure storage units requiring specialist
                  lifting equipment
                </li>
                <li>
                  Fragile electronic systems — ATM enclosures, CCTV frameworks,
                  desk terminals
                </li>
                <li>
                  Regulatory compliance — the move must not compromise security
                  protocols
                </li>
                <li>
                  Minimal business disruption — moves often need to happen
                  overnight or over weekends
                </li>
                <li>
                  Privacy of client data — no unauthorized personnel should
                  access back-office areas
                </li>
              </ul>
              <p className="mt-6">
                Our company was built on the principles of Protection and
                Privacy. Every team member is vetted, trained in professional
                handling, and understands the confidentiality requirements of
                moving commercial and financial institutions.
              </p>
            </section>

            <div className="bg-secondary rounded-3xl aspect-video relative overflow-hidden">
              <Image
                src={"/ser/banks-furniture-moving-truck.jpg"}
                alt="Professional bank furniture moving team with secure transport vehicle"
                fill
                className="object-cover"
              />
            </div>

            <section>
              <h2>Bank Furniture & Equipment We Move</h2>
              <ul className="list-inside list-disc mt-6 text-muted-foreground leading-relaxed space-y-2">
                <li>Bank service counters and teller workstations</li>
                <li>
                  Manager and director office desks, cabinets, and furniture
                </li>
                <li>Heavy bank safes and secure storage vaults</li>
                <li>ATM enclosure surrounds and protective furniture</li>
                <li>Client waiting area seating and reception furniture</li>
                <li>
                  Filing systems, document storage cabinets, and server room
                  furniture
                </li>
                <li>Branch signage stands and display furniture</li>
                <li>Conference room furniture and boardroom tables</li>
                <li>
                  Staff room furniture, kitchen units, and break room setups
                </li>
                <li>Modular office partitions and workstation dividers</li>
              </ul>
            </section>

            <section>
              <h2>Our Secure Bank Furniture Moving Process</h2>
              <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-8">
                {[
                  {
                    title: "Pre-Move Consultation",
                    desc: "Our supervisor meets with your facilities team to assess the full scope of the move, security requirements, and scheduling.",
                  },
                  {
                    title: "Confidential Move Planning",
                    desc: "We develop a detailed move plan that respects your security protocols, access restrictions, and business hours requirements.",
                  },
                  {
                    title: "After-Hours & Weekend Scheduling",
                    desc: "Bank moves are typically planned outside of business hours to avoid disruption to operations and client-facing services.",
                  },
                  {
                    title: "Professional Packing",
                    desc: "All items are packed using professional-grade materials with systematic labelling to enable efficient unpacking at the new branch.",
                  },
                  {
                    title: "Specialist Equipment for Heavy Safes",
                    desc: "We use appropriate lifting and moving equipment for heavy safes and secure storage units.",
                  },
                  {
                    title: "Supervised Unloading & Placement",
                    desc: "Our team works under the supervision of your facilities manager to place every item exactly as specified.",
                  },
                  {
                    title: "Post-Move Inspection",
                    desc: "We do not leave until your team has signed off on the complete delivery.",
                  },
                ].map((process, i) => (
                  <div key={i} className="border-l-4 border-primary pl-4">
                    <h3 className="mb-2 text-base font-semibold">
                      {process.title}
                    </h3>
                    <p className="leading-tight text-muted-foreground">
                      {process.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid md:grid-cols-2 grid-cols-1 gap-10">
              <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
                <Image
                  src={
                    "/ser/bank-office-furniture-relocation-dubai-financial-district-movers.jpg"
                  }
                  alt="Movers & Packers branded truck being loaded with bank office furniture outside a modern Dubai financial district building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
                <Image
                  src={
                    "/ser/bank-safe-moving-service-dubai-professional-movers.jpg"
                  }
                  alt="Movers & Packers team wrapping and securing a bank safe for relocation inside a Dubai bank office"
                  fill
                  className="object-cover"
                />
              </div>
            </section>

            <section>
              <h2>Why Banks & Financial Institutions Choose Us</h2>
              <ul className="list-inside list-disc mt-6 text-muted-foreground leading-relaxed space-y-2">
                <li>
                  Legally registered and operating since 1998 — not a freelance
                  operation
                </li>
                <li>
                  25+ years experience in commercial moving including sensitive
                  environments
                </li>
                <li>
                  Fully Enclosed Box Trucks — no exposure of sensitive items
                  during transport
                </li>
                <li>
                  Team trained in handling confidential commercial environments
                </li>
                <li>Strict adherence to Protection and Privacy principles</li>
                <li>
                  Transparent, fixed pricing with no hidden charges — invoice
                  ready
                </li>
                <li>After-hours and weekend bank moving services available</li>
                <li>Cash, bank cheque, and online transfer payment options</li>
                <li>
                  Available across all UAE emirates — Dubai, Abu Dhabi, Sharjah,
                  and beyond
                </li>
              </ul>
            </section>

            <section>
              <h2>Bank Furniture Moving across All UAE Emirates</h2>
              <div className="mt-6 grid md:grid-cols-2 grid-cols-1 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">
                    Major Banking Hubs
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>
                      ✓ Bank Furniture Moving in Dubai (DIFC, Downtown, Deira)
                    </li>
                    <li>
                      ✓ Bank Furniture Moving in Abu Dhabi (CBD, Khalidiyah)
                    </li>
                    <li>✓ Bank Furniture Moving in Sharjah</li>
                    <li>✓ Bank Furniture Moving in Ajman</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">
                    Full Emirates Coverage
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>✓ Bank Furniture Moving in Ras Al Khaimah</li>
                    <li>✓ Bank Furniture Moving in Al Ain</li>
                    <li>✓ Bank Furniture Moving in Fujairah</li>
                    <li>✓ Bank Furniture Moving in Umm Al Quwain</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2>Trust & Professionalism for Your Bank Relocation</h2>
              <div className="flex flex-col gap-y-3 text-muted-foreground">
                <p>
                  When you work with us on your bank furniture move, you are
                  partnering with a company that has been handling sensitive
                  commercial environments for 25+ years. We understand that a
                  bank relocation is not just about moving furniture — it is
                  about maintaining security, ensuring privacy, and minimizing
                  operational disruption.
                </p>
                <p>
                  Our team is hand-picked, thoroughly vetted, and trained
                  specifically for commercial and financial institution moves.
                  We follow strict protocols that ensure all sensitive items and
                  areas are handled with the utmost professionalism.
                </p>
                <p>
                  From the initial confidential consultation through to final
                  sign-off, we work exclusively under your supervision and
                  follow all your security access guidelines. Your requirements
                  shape our process, not the other way around.
                </p>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-2 flex flex-col gap-y-5 self-start sticky top-24 md:px-0 px-4">
            <div className="rounded-2xl bg-muted p-6 space-y-3">
              <h3 className="font-bold text-lg">
                Need To Move Bank Furniture?
              </h3>
              <p className="text-sm text-muted-foreground">
                Contact our commercial team today for a free consultation and
                quote. We specialize in moving bank furniture in the UAE.
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
          faqs={BankFurnitureMovingUaeFaqs}
          title="Frequently Asked Questions — Bank Furniture Moving UAE"
        />
        <CTA
          title="Book a Confidential Bank Furniture Moving Consultation — All UAE Emirates"
          desc="If you need to move your bank branch, financial institution, or corporate office with the highest level of security and professionalism, we are your partner. Registered since 1998, fully insured, completely confidential. Call or WhatsApp for a discrete consultation."
        />
      </main>
    </>
  );
};

export default BankFurnitureMovers;
