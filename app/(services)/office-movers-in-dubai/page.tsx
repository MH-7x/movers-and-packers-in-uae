import HeroImage from "@/public/ser/office-movers-in-dubai.jpg";
import ServiceHero from "@/components/ServiceHero";
import QuotationSection from "@/components/QuotationSection";
import Image from "next/image";
import { ChevronRight, MessageCircle, PhoneCall } from "lucide-react";
import { AllServices, locations } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ReviewSection } from "@/components/ReviewSection";
import { FAQSection } from "@/components/FaqsSection";
import { OfficeMovingDubaiFaqs } from "@/lib/FaqsData";
import CTA from "@/components/CTA";
import Link from "next/link";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Office Movers in Dubai – Best Office Relocation Services UAE ",
      desc: "Expert office movers in Dubai & UAE. Reliable relocation for businesses across all emirates. Professional service, transparent pricing. Get your free quote.",
    },
    image: {
      path: "/ser/office-movers-in-dubai.jpg",
      alt: "Office Movers in Dubai with movers handling IT equipment and workstations carefully",
    },
    path: "/office-movers-in-dubai",
  },
});

const OfficeMoversInDubai = () => {
  return (
    <main>
      <ServiceHero
        title="Office Movers in Dubai – Trusted Office Relocation in UAE"
        desc="If you're looking for reliable office movers in Dubai, you've come to the right place. We are Movers and Packers in UAE — a registered moving company based in Dubai, serving businesses of all sizes since 1998. Startups, banks, hospitals, schools, restaurants, and large corporate offices — we've moved them all."
        image={{
          src: HeroImage,
          alt: "Office Movers in Dubai with movers handling IT equipment and workstations carefully",
        }}
        btnText="Get a Free Office Move Quote"
      />
      <section className="mt-16 max-w-4xl mx-auto md:px-0 px-4">
        <div className="md:text-lg text-muted-foreground text-center mt-10 md:px-20">
          <p>
            Our job is simple: get your office from Point A to Point B safely,
            on time, and without turning your workday into chaos. No hidden
            fees. No damage. You pay only when you&apos;re satisfied.
          </p>
          <p>
            Call or WhatsApp us for a free quote — we&apos;ll get back to you
            fast.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
          {[
            " 25+ Years Experience ",
            "RTA-Approved Enclosed Trucks",
            " No Hidden Charges",
            "Pay After Completion",
            " Pay Upon Satisfaction",
          ].map((t, i) => (
            <div
              key={i}
              className="bg-primary text-white text-shadow-2xs px-3 py-1.5 text-sm rounded-4xl flex items-center gap-2"
            >
              <span> ✔</span> <p>{t} </p>
            </div>
          ))}
        </div>
      </section>
      <QuotationSection
        title={
          <>
            <span className="font-bold md:block">Get A Free Moving Quote</span>{" "}
            From Office Movers in Dubai
          </>
        }
        btnText="Get Office Relocation Quote"
        desc=" We are a one-stop solution for all your office relocation in dubai needs. Whether you are relocating your entire office, moving a single desk, or a few desks, we have the right solution for you."
      />
      <div className="max-w-7xl md:px-10 mx-auto mt-20 grid lg:grid-cols-6 grid-col-1 min-h-screen gap-10">
        <div
          className="lg:col-span-4 flex flex-col gap-y-16 md:px-0 px-4"
          id="service-content"
        >
          <section>
            <h2>
              Why Dubai Businesses Choose Us <br className="md:block hidden" />{" "}
              for Office Relocation Dubai
            </h2>
            <p>
              There&apos;s no shortage of{" "}
              <Link href="/">moving companies in Dubai</Link>. But most of them
              are freelance operators — no legal permit, no accountability, no
              protection for your valuables. We&apos;re different.
            </p>
            <p className="mt-2">
              We&apos;ve been legally registered and operating since 1998. You
              can check us on Google Maps, meet the owner, and verify everything
              before you commit. That&apos;s the level of trust we&apos;ve built
              over 25+ years of commercial moving across the UAE.
            </p>
            <p className="mt-2">Here&apos;s what sets us apart:</p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-8">
              {[
                {
                  title: "Registered & Licensed Since 1998 ",
                  description:
                    "We're a legitimate moving company with a verified Google Business Profile and a physical address in Ras Al Khor Industrial Area 1, Dubai. Not a phone-and-website operation.",
                },
                {
                  title: "25+ Years of Office Moving Experience ",
                  description:
                    "We've completed thousands of commercial moves across all nine UAE emirates. We know the buildings, the permits, the logistics.",
                },
                {
                  title: "Protection & Privacy",
                  description:
                    "Our team is trained to handle confidential documents, sensitive equipment, and private business assets with discretion. This matters especially for banks, law firms, hospitals, and government offices.",
                },
                {
                  title: "Fixed Quotes — No Hidden Charges",
                  description:
                    "You get a detailed quote on WhatsApp or email. What's written is what you pay. 1,000 AED quoted means 1,000 AED charged — nothing more.",
                },
                {
                  title: "Pay Upon Satisfaction",
                  description:
                    " We don't take payment upfront and disappear. You inspect the work, and only then you pay. Simple.",
                },
                {
                  title: "English & Arabic-Speaking Team ",
                  description:
                    "Our crew communicates in both languages, so nothing gets lost in translation.",
                },
                {
                  title: "24/7 Availability",
                  description:
                    "We work around your schedule. Need a move tomorrow? We'll do our best to make it happen.",
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
          <div className="bg-secondary rounded-3xl aspect-video relative overflow-hidden">
            <Image
              src={
                "/ser/office-relocation-team-in-dubai-handling-office-furniture.jpg"
              }
              alt="office relocation team in dubai handling office furniture"
              fill
              className="object-cover"
            />
          </div>
          <section>
            <h2>
              Our Office Moving Services in Dubai — Everything Under One Roof
            </h2>
            <p>
              Whether you&apos;re shifting a 5-person startup or a multi-floor
              corporate office, our{" "}
              <Link href="/office-movers-in-dubai">
                office movers and packers in Dubai
              </Link>{" "}
              handle every part of the process. You don&apos;t need to
              coordinate multiple vendors. We take care of everything.
            </p>
            <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-10">
              {[
                {
                  name: "Office Furniture Moving & Reassembly",
                  description:
                    "We dismantle desks, cabinets, conference tables, partitions, and workstations at your current office — then reassemble everything at the new location exactly how you want it. Our certified carpenters and handymen handle even the most awkward or heavy pieces.",
                  href: "#",
                },
                {
                  name: "IT Equipment & Server Relocation",
                  description:
                    "Computers, servers, printers, networking hardware — all packed with anti-static materials and handled with care. Every cable gets labeled. Every piece of hardware is documented before it moves. Your IT team gets everything intact and ready to reconnect.",
                  href: "#",
                },
                {
                  name: "Confidential Document & File Handling",

                  description:
                    "Your files are packed in sealed, labeled cartons and handled by the same crew from start to finish — no third-party access. For businesses like banks, medical clinics, and law firms, we treat document security as a top priority, not an afterthought.",
                  href: "#",
                },
                {
                  name: "Office Packing & Unpacking Services",
                  link: "/packing-services-in-dubai#office-and-commercial-packing-services",
                  description:
                    "We use high-quality packing materials — sturdy boxes, bubble wrap, stretch plastic, and fabric blankets — for every item that moves. If you need help setting up and unpacking at the new location, we handle that too. Your team walks in ready to work, not ready to unpack.",
                  href: "#",
                },
                {
                  name: "Warehouse & Storage Solutions During Relocation",
                  description:
                    "Sometimes your new office isn't ready when your lease ends. It happens. We offer secure short-term and long-term storage for office furniture, equipment, and archived files — held safely until you need delivery.",
                  href: "#",
                },
                {
                  name: "Same-Day & After-Hours Office Moves",
                  description:
                    "Running a business means you can't always stop for a move. We offer evening, overnight, and weekend office relocation so your staff walks into a fully set-up workspace at the start of the next business day. Same-day office moving in Dubai is available for urgent situations.",
                  href: "#",
                },
                {
                  name: "Industrial Machinery & Heavy Equipment Moving",
                  description:
                    "Our scope goes beyond standard office furniture. We relocate industrial machinery, heavy safes, hospital equipment, restaurant fit-outs, and warehouse setups. If it's large, heavy, or complex — we've moved it before.",
                  href: "#",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  id={service.name.toLowerCase().replace(/\s+/g, "-")}
                  className="rounded-2xl p-5 bg-muted"
                >
                  <h3 className=" mb-0! text-xl! font-medium">
                    {service.link ? (
                      <Link href={service.link}>{service.name}</Link>
                    ) : (
                      service.name
                    )}
                  </h3>
                  <p className="mt-3 leading-tight text-muted-foreground">
                    {service.description}
                  </p>
                  <Button variant={"link"} className="mt-3 ">
                    Contact Now <ChevronRight />
                  </Button>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2>Our Office Relocation Process — Step by Step</h2>
            <p>
              A smooth office relocation doesn&apos;t happen by accident.
              Here&apos;s exactly how we handle yours, from first contact to
              final setup.
            </p>
            <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-10">
              {[
                {
                  title: "Free Site Inspection & Quote",
                  desc: "Contact us by phone, WhatsApp, or the quote form. Tell us about your office — size, floors, what needs moving. We assess the scope and send you a clear, itemized quote. No vague estimates. No surprise charges later.",
                },
                {
                  title: "Move Planning & Scheduling",
                  desc: "We build a timeline around your business hours. If you need an overnight or weekend move to avoid disrupting your team, we schedule around that.",
                },
                {
                  title: "Professional Packing & Labeling",
                  desc: "Every item is labeled by room and department before it moves. Fragile electronics and IT equipment are packed with the right materials. Nothing gets mixed up.",
                },
                {
                  title: "Furniture Dismantling",
                  desc: "Our carpenters carefully disassemble workstations, partitions, shelving, and large furniture. Every component is tracked so reassembly goes smoothly.",
                },
                {
                  title: "Loading into RTA-Approved Enclosed Box Trucks",
                  desc: "We use covered 3-ton and 4-ton box trucks — not open vehicles. In Dubai's summer heat above 45°C and frequent sandstorms, an open truck puts your electronics and furniture at real risk. Our enclosed trucks protect everything in transit.",
                },
                {
                  title: "Secure Transport",
                  desc: "Your items move in fully covered vehicles. We coordinate access at both locations — loading bays, elevator booking, building permits — so there are no delays on moving day.",
                },
                {
                  title: "Unloading & Installation",
                  desc: "Everything is placed according to your floor plan. Furniture is reassembled. Workstations are set up. We don't drop boxes and leave.",
                },
                {
                  title: "Optional Unpacking & Setup",
                  desc: "If you want us to unpack and arrange everything, we do that too. We remove all packaging debris and leave your office clean.",
                },
                {
                  title: "Pay Upon Satisfaction",
                  desc: "You walk through, check everything, and if you're happy — that's when you pay. Cash, online transfer, or bank cheque. Your choice.",
                },
              ].map((process, i) => (
                <div key={i}>
                  <h3 className="mb-2! text-lg!">
                    <span className="text-primary">{i + 1}: </span>
                    {process.title}
                  </h3>
                  <p className="leading-tight">{process.desc}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2>Types of Offices We Relocate in Dubai</h2>
            <p>
              Most moving companies treat every office move the same way. We
              don&apos;t. Different businesses have different requirements, and
              we&apos;ve built experience across all of them.
            </p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3 leading-tight text-sm">
              <div className="bg-secondary py-3 px-4 rounded-2xl">
                <h3 className="text-base! mb-1! font-medium!">
                  <Link href="/office-movers-in-dubai">
                    {" "}
                    Corporate & Commercial Office
                  </Link>
                </h3>
                <p>
                  Full floor relocations, multi-department moves, phased
                  enterprise relocations
                </p>
              </div>
              <div className="bg-secondary py-3 px-4 rounded-2xl">
                <h3 className="text-base! mb-1! font-medium!">
                  <Link href="bank-furniture-moving-uae">
                    Banks & Financial Firms
                  </Link>
                </h3>
                <p>
                  Heavy safes, confidential records, secure document
                  chain-of-custody
                </p>
              </div>
              <div className="bg-secondary py-3 px-4 rounded-2xl">
                <h3 className="text-base! mb-1! font-medium!">
                  <Link href="/hospital-furniture-moving-uae">
                    Hospitals & Medical Clinics
                  </Link>
                </h3>
                <p>
                  Medical equipment, diagnostic tools, patient record transfers,
                  hygiene protocols
                </p>
              </div>
              <div className="bg-secondary py-3 px-4 rounded-2xl">
                <h3 className="text-base! mb-1! font-medium!">
                  <Link href="/school-furniture-moving-uae">
                    Schools & Universities
                  </Link>
                </h3>
                <p>
                  Classroom furniture, labs, libraries, smart boards, faculty
                  offices
                </p>
              </div>
              <div className="bg-secondary py-3 px-4 rounded-2xl">
                <h3 className="text-base! mb-1! font-medium!">
                  <Link href="/restaurant-furniture-moving-uae">
                    Restaurants & F&B Businesses
                  </Link>
                </h3>
                <p>Kitchen equipment, fit-out furniture, dining setups</p>
              </div>
              <div className="bg-secondary py-3 px-4 rounded-2xl">
                <h3 className="text-base! mb-1! font-medium!">Warehouses</h3>
                <p>Inventory, heavy shelving, racks, industrial machinery</p>
              </div>
              <div className="bg-secondary py-3 px-4 rounded-2xl">
                <h3 className="text-base! mb-1! font-medium!">
                  Startups & Small Offices
                </h3>
                <p>
                  Fast, affordable single-day moves — no over-complicated
                  process
                </p>
              </div>
            </div>
            <p className="mt-4">
              If your business type isn&apos;t listed above, contact us anyway.
              We offer customized moving plans for any commercial setup.
            </p>
          </section>
          <section className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
              <Image
                src={"/ser/office-movers-dubai-packing-it-equipment.jpg"}
                alt="Office movers in Dubai packing IT equipment computers and office items safely during relocation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
              <Image
                src={"/ser/office-movers-dubai-loading-furniture.jpg"}
                alt="Office movers in Dubai loading office furniture boxes and equipment into a branded moving truck"
                fill
                className="object-cover"
              />
            </div>
          </section>
          <section>
            <h2>Office Moving Coverage Across Dubai & the UAE</h2>
            <p>
              We serve businesses across all of Dubai&apos;s major commercial
              districts and across all nine UAE emirates. No matter where
              you&apos;re moving from or to — we cover it.
            </p>
            <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <p className="text-foreground! font-bold text-lg">
                  Dubai Districts We Regularly Serve
                </p>
                <p className=" mt-3 text-muted-foreground leading-tight">
                  Business Bay | DIFC | JLT (Jumeirah Lakes Towers) | Dubai
                  Marina | Al Quoz | Downtown Dubai | Deira | Bur Dubai | Dubai
                  Silicon Oasis | Dubai Internet City | Dubai Media City | Dubai
                  Investment Park
                </p>
              </div>
              <div>
                <p className="text-foreground! font-bold text-lg">
                  Across the UAE
                </p>
                <p className=" mt-3 text-muted-foreground leading-tight">
                  Abu Dhabi | Sharjah | Ajman | Ras Al Khaimah | Al Ain | Umm Al
                  Quwain | Fujairah | Al Ruwais | Khor Fakkan.
                  <br />
                  Inter-emirate office relocation is handled with the same
                  fixed-quote system — no surprise distance surcharges added at
                  the end.
                </p>
              </div>
            </div>
          </section>
          <section>
            <h2>What&apos;s Included in Your Office Move Package</h2>
            <p>
              This is something most moving companies don&apos;t tell you
              upfront. Here&apos;s exactly what you get when you book with us.
            </p>
            <h3 className="mt-5">Standard Package Includes:</h3>
            <ul className="list-inside list-disc text-muted-foreground">
              <li>
                Free on-site or phone consultation &amp; transparent written
                quote
              </li>
              <li>
                Professional packing materials (boxes, bubble wrap, stretch
                plastic, fabric blankets)
              </li>
              <li>
                Furniture dismantling &amp; reassembly by certified carpenters
              </li>
              <li>RTA-approved 3-ton / 4-ton enclosed box trucks</li>
              <li>Full loading, transport &amp; unloading</li>
              <li>100% insurance coverage on all items</li>
              <li>24/7 team availability</li>
              <li>English &amp; Arabic-speaking move coordinator</li>
            </ul>
            <h3 className="mt-5">Optional Add-Ons:</h3>
            <ul className="list-inside list-disc text-muted-foreground">
              <li>Curtain fixing &amp; installation at new location</li>
              <li>After-hours, overnight, or weekend scheduling</li>
              <li>Short-term or long-term storage</li>
              <li>Industrial machinery &amp; heavy safe relocation</li>
              <li>Professional unpacking &amp; office setup</li>
            </ul>
            <h3 className="mt-5 mb-2!">Payment Methods:</h3>
            <p>
              Cash | Online Transfer | Bank Cheque — paid after job completion,
              not before.
            </p>
            <div className="mt-10 bg-foreground w-full rounded-3xl p-5 ">
              <p className="md:text-xl text-lg text-white!">
                Ready to move your office? Get your free WhatsApp quote today —
                fixed price, no hidden charges, no obligations.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <Button whatsappBtn>WhatsApp Us Now</Button>
                <Button quoteBtn variant={"secondary"}>
                  Fill the Quote Form
                </Button>
              </div>
            </div>
          </section>
          <section>
            <h2>How Much Does Office Relocation Cost in Dubai?</h2>
            <p>
              There&apos;s no single fixed price for an office move — and any
              company that gives you a number without seeing your office first
              should make you cautious.
            </p>
            <p className="mt-2p">
              The cost of your move depends on several factors:
            </p>
            <ul className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3">
              <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                <span className="font-medium">Office size —</span> number of
                floors, rooms, and workstations
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                <span className="font-medium">Volume and type of items —</span>{" "}
                furniture, IT equipment, heavy machinery, documents
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                <span className="font-medium">Distance —</span> within Dubai, or
                inter-emirate
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                <span className="font-medium">Timing —</span> suits, standard
                working hours vs. overnight or weekend
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                <span className="font-medium">Additional services —</span>{" "}
                packing, unpacking, storage, curtain installation
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                <span className="font-medium">Building access —</span> elevator
                bookings, moving permits, loading bay arrangements
              </li>
            </ul>
            <p className="mt-5 mb-5">
              To give you a general idea of market ranges:
            </p>
            <div className="hidden md:block bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-foreground border-b border-gray-200 text-white font-semibold">
                    <th className="py-4 px-6 text-sm">Office Size</th>
                    <th className="py-4 px-6 text-sm">Estimated Cost Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pricingData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">
                        {row.size}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">
                        {row.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View (Cards) */}
            <div className="md:hidden space-y-4">
              {pricingData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    {item.size}
                  </h3>
                  <div className="flex justify-between py-2 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Cost</span>
                    <span className="text-sm font-medium text-gray-900">
                      {item.cost}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5">
              These are approximate figures. Your actual quote depends on your
              specific requirements. What we guarantee is this: the number you
              receive from us is the number you pay. Not a penny more.
            </p>
            <p className="mt-2">
              Contact us for a free, no-obligation quote based on your actual
              office.
            </p>
          </section>
          <section>
            <h2>How to Hire Office Movers in Dubai — Three Simple Steps</h2>
            <p>Booking a commercial move with us takes minutes, not days.</p>
            <ol className=" list-inside text-muted-foreground leading-tight mt-5">
              <li>
                <b>Step 1 — Contact Us:</b> Call, WhatsApp, or fill in the quote
                form on this page. Tell us your office size, what needs moving,
                and your preferred date. That&apos;s it.
              </li>
              <li>
                <b>Step 2 — Get Your Quote:</b> We send you a clear, itemized
                quote on WhatsApp or email within a few hours. No vague
                estimates. You see exactly what you&apos;re paying for before
                you agree to anything.
              </li>
              <li>
                <b>Step 3 — We Handle Everything: </b> Our team arrives on the
                agreed date and manages the entire office relocation — packing,
                dismantling, transport, unloading, and setup. You focus on your
                business. We focus on your move.
              </li>
            </ol>
            <p className="mt-5">
              Most quotes are delivered within a few hours of your enquiry. For
              urgent same-day office moves, contact us directly by phone or
              WhatsApp.
            </p>
          </section>
        </div>

        <aside className="lg:col-span-2 flex flex-col gap-y-5 self-start sticky top-24 md:px-0 px-4">
          <div className="rounded-2xl bg-muted p-6 space-y-3">
            <h3 className="font-bold text-lg">Need Office Moving Service?</h3>
            <p className="text-sm text-muted-foreground">
              Contact our commercial team today for a free consultation and
              quote. We specialize in relocating offices in dubai.
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
      <ReviewSection reviews={googleReviews} />
      <FAQSection
        title="H2: Frequently Asked Questions — Office Movers in Dubai"
        faqs={OfficeMovingDubaiFaqs}
      />
      <CTA
        title="Hire Top-Rated Office Movers in Dubai"
        desc="Hiring a freelance mover with no legal permit is a risk you don't need to take. Work with a registered office moving company that's been trusted in Dubai since 1998."
      />
    </main>
  );
};

export default OfficeMoversInDubai;

const pricingData = [
  {
    size: "Small Office (1–10 staff)",
    cost: "AED 800 – AED 1,800",
  },
  {
    size: "Medium Office (10–30 staff)",
    cost: "AED 1,800 – AED 4,000",
  },
  {
    size: "Large Office (30+ staff)",
    cost: "AED 4,000+ (custom quote)",
  },
];

const googleReviews = [
  {
    name: "Hassan El Masri",
    time: "1 week ago",
    star: 5,
    review:
      "Relocated our corporate office from Business Bay to DIFC over the weekend. The team was highly organized and ensured zero business downtime.",
    image: "/ava/32.jpg",
  },
  {
    name: "Sarah Jenkins",
    time: "3 weeks ago",
    star: 5,
    review:
      "Excellent office movers in Dubai. They safely transported all our sensitive IT equipment, servers, and delicate monitors without a single issue.",
    image: "/ava/44.jpg",
  },
  {
    name: "Rahul Verma",
    time: "2 months ago",
    star: 5,
    review:
      "The crew was incredibly professional and handled the dismantling and precise reassembly of all our modular office desks perfectly.",
    image: "/ava/86.jpg",
  },
  {
    name: "Amina Al Suwaidi",
    time: "5 days ago",
    star: 5,
    review:
      "Moved our startup's office to JLT smoothly. The packing team labelled every department's boxes, making Monday morning setup a total breeze.",
    image: "/ava/68.jpg",
  },
  {
    name: "Tarek Haddad",
    time: "1 month ago",
    star: 5,
    review:
      "They shifted our entire 50-person workspace over the weekend. We were up and running immediately with no disruption to our daily operations.",
    image: "/ava/22.jpg",
  },
  {
    name: "Elena Rostova",
    time: "2 weeks ago",
    star: 5,
    review:
      "Very impressed with how they managed to move our heavy filing cabinets and the main office safe. I highly recommend them for any commercial move in Dubai.",
    image: "/ava/90.jpg",
  },
  {
    name: "Faisal Qureshi",
    time: "3 weeks ago",
    star: 5,
    review:
      "Transparent pricing and great communication throughout our office relocation. The assigned project manager made sure everything stayed completely on schedule.",
    image: "/ava/54.jpg",
  },
  {
    name: "Leila Abbas",
    time: "4 days ago",
    star: 5,
    review:
      "Shifted our design studio effortlessly. They were incredibly careful with our large drafting tables, glass whiteboards, and fragile equipment.",
    image: "/ava/29.jpg",
  },
];
