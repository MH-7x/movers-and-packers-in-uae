import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import ServiceHero from "@/components/ServiceHero";
import { AllServices, locations } from "@/lib/data";
import { FurnitureMovingUaeFaqs } from "@/lib/FaqsData";
import HeroImage from "@/public/ser/furniture-movers-and-packers-in-uae.jpg";
import { MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Furniture Movers in UAE | All Kinds of Furniture Moving",
      desc: "Trusted furniture movers in UAE since 1998. Handling residential, commercial & single items across all Emirates. Fast, secure & reliable. Get a free quote!",
    },
    image: {
      path: "/ser/furniture-movers-and-packers-in-uae.jpg",
      alt: "Professional furniture movers in UAE handling furniture moving with specialized equipment and trained team members",
    },
    path: "/furniture-moving-services-uae",
  },
});

const FurnitureMovers = () => {
  return (
    <main>
      <ServiceHero
        title="Furniture Movers in UAE — All Kinds of Furniture Moving"
        desc="Looking for trusted furniture movers in UAE? You have found the right place. At Movers and Packers in UAE, we handle all kinds of furniture moving with the care, expertise, and professionalism your belongings deserve. "
        image={{
          src: HeroImage,
          alt: "Professional furniture movers in UAE handling furniture moving with specialized equipment and trained team members",
        }}
        btnText="Get a Free Furniture Moving Quote"
      />
      <section className="mt-16 max-w-4xl mx-auto md:px-0 px-4">
        <div className="md:text-lg text-muted-foreground text-center mt-10 md:px-20 space-y-4">
          <p>
            Whether you need to move a single sofa or an entire commercial
            fit-out, our team is available across Dubai, Abu Dhabi, Sharjah,
            Ajman, Ras Al Khaimah, Al Ain, Fujairah, Umm Al Quwain, and every
            corner of the UAE.
          </p>
          <p>
            At <Link href="/">Movers and Packers in UAE</Link>, we have
            completed thousands of successful furniture relocations for homes,
            offices, banks, hospitals, schools, restaurants, and warehouses.
          </p>
          <p>
            Our 25+ years of on-the-ground experience in the UAE moving industry
            means we know every challenge — from high-rise elevator bookings to
            extreme summer heat — and we are fully prepared to handle them all.
          </p>
          <p className="text-primary font-bold text-center text-xl">
            📞
            <Link href="/get-quote">
              {" "}
              Get Your Free Furniture Moving Quote Today
            </Link>{" "}
            — No Hidden Charges
          </p>
        </div>
      </section>
      <QuotationSection
        title={
          <>
            <span className="font-bold md:block">Get A Free Moving Quote</span>{" "}
            From Furniture Movers in UAE
          </>
        }
        btnText="Get Furniture Moving Quote"
        desc="Get a free furniture moving quote from our expert furniture movers in UAE. We handle all types of furniture movement with professional packing, careful transport, and complete reassembly. No hidden charges, fully insured, and same-day available."
      />
      <div className="max-w-7xl md:px-10 mx-auto mt-20 grid lg:grid-cols-6 grid-col-1 min-h-screen gap-10">
        <div
          className="lg:col-span-4 flex flex-col gap-y-16 md:px-0 px-4"
          id="service-content"
        >
          <section>
            <h2>What Makes Our Furniture Movers Different?</h2>
            <p>
              Choosing the right furniture movers in the UAE is not just about
              price. It is about trust, reliability, and knowing your items will
              arrive safely. Here is what sets us apart from freelance movers
              and unregistered companies.
            </p>
            <ul className=" mt-6 text-muted-foreground gap-3 grid md:grid-cols-2 grid-cols-1 leading-tight">
              <li className="p-3 bg-secondary rounded-2xl">
                Officially registered moving company since 1998 — fully licensed
                and legally operating
              </li>
              <li className="p-3 bg-secondary rounded-2xl">
                25+ years of experience handling thousands of UAE furniture
                moves
              </li>
              <li className="p-3 bg-secondary rounded-2xl">
                Transparent pricing — what you see in the quote is exactly what
                you pay, nothing more
              </li>
              <li className="p-3 bg-secondary rounded-2xl">
                Pay Upon Satisfaction: we only collect payment after the job is
                complete and you are happy
              </li>
              <li className="p-3 bg-secondary rounded-2xl">
                Fully Enclosed Box Trucks — protecting your furniture from UAE
                summer heat (45°C+) and sandstorms
              </li>
              <li className="p-3 bg-secondary rounded-2xl">
                Open trucks also available for budget-friendly, short-distance
                shifts
              </li>
              <li className="p-3 bg-secondary rounded-2xl">
                Multilingual team speaking English and Arabic for seamless
                communication
              </li>
              <li className="p-3 bg-secondary rounded-2xl">
                Same-day moving service available for urgent relocations
              </li>
              <li className="p-3 bg-secondary rounded-2xl">
                Verified Google Business Profile — check our real reviews before
                booking
              </li>
              <li className="p-3 bg-secondary rounded-2xl">
                No freelance, no phone-only operators — a real company with real
                accountability
              </li>
            </ul>
          </section>
          <div className="bg-secondary rounded-3xl aspect-video relative overflow-hidden">
            <Image
              src={"/ser/furniture-movers-team-moving-single-furniture.jpg"}
              alt="furniture movers team moving single furniture in UAE"
              fill
              className="object-cover"
            />
          </div>

          <section>
            <h2>All Types of Furniture We Move</h2>
            <p>
              Our furniture movers are trained and equipped to handle every
              category of furniture across residential, commercial, and
              institutional settings.
            </p>

            <h3 className="mt-6">
              <Link href={"/furniture-moving-services-uae"}>
                Residential Furniture Moving
              </Link>
            </h3>
            <ul className="list-inside list-disc mt-3 text-muted-foreground leading-tight space-y-2">
              <li>Bedroom sets — beds, wardrobes, mattresses, dressers</li>
              <li>
                Living room furniture — sofas, sectionals, TV units, coffee
                tables
              </li>
              <li>Dining furniture — dining tables, chairs, sideboards</li>
              <li>Kitchen furniture — cabinets, shelves, countertop units</li>
              <li>
                Children&apos;s room furniture — bunk beds, study desks, toy
                storage
              </li>
              <li>Outdoor furniture — garden sets, sun loungers, parasols</li>
            </ul>

            <h3 className="mt-6">
              Commercial &{" "}
              <Link href="/school-furniture-moving-uae">
                Institutional Furniture Moving
              </Link>
            </h3>
            <ul className="list-inside list-disc mt-3 text-muted-foreground leading-tight space-y-2">
              <li>
                Office desks, workstations, conference tables, reception
                furniture
              </li>
              <li>
                Bank counters, vault room furniture, secure teller stations
              </li>
              <li>
                Hospital beds, patient room furniture, medical office desks
              </li>
              <li>
                School desks, classroom chairs, library shelving, lab furniture
              </li>
              <li>
                Restaurant tables, chairs, bar counters, kitchen equipment
              </li>
              <li>Warehouse racking, heavy industrial shelving</li>
            </ul>

            <h3 className="mt-6">Specialty & Heavy Items</h3>
            <ul className="list-inside list-disc mt-3 text-muted-foreground leading-tight space-y-2">
              <li>Industrial machinery and heavy safes</li>
              <li>Heavy-duty storage cabinets and filing systems</li>
              <li>Antique and high-value furniture requiring extra care</li>
              <li>Piano and musical instrument moving</li>
              <li>
                <Link href="/single-furniture-moving-uae">
                  Single piece / single item furniture delivery and pick-up
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2>Our Furniture Moving Services — Explore Each Category</h2>
            <p>
              We provide dedicated pages for each specialist furniture moving
              service. Click below to learn more:
            </p>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-8">
              {[
                {
                  service: "Single Furniture Moving",
                  link: "/single-furniture-moving-uae",
                  description:
                    "Move just one item — a sofa, bed, or cabinet — quickly and affordably anywhere in UAE.",
                },
                {
                  service: "Bank's Furniture Moving",
                  link: "/bank-furniture-moving-uae",
                  description:
                    "Specialist secure moving for bank counters, teller stations, vaults, and office furniture.",
                },
                {
                  service: "Hospital Furniture Moving",
                  link: "/hospital-furniture-moving-uae",
                  description:
                    "Safe, hygienic transport of hospital beds, medical furniture & clinical room setups.",
                },
                {
                  service: "Schools' Furniture Moving",
                  link: "/school-furniture-moving-uae",
                  description:
                    "Efficient relocation of classrooms, libraries, and lab furniture with minimal disruption.",
                },
                {
                  service: "Restaurant Furniture Moving",
                  link: "/restaurant-furniture-moving-uae",
                  description:
                    "Complete restaurant fit-out moves — tables, chairs, kitchen equipment, and bar setups.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="border-b border-primary leading-tight pb-2"
                >
                  <h3 className="mb-2! text-base!">
                    <Link href={feature.link}>{feature.service}</Link>
                  </h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>Our Furniture Moving Process — Step by Step</h2>
            <p>
              We follow a structured, professional process that ensures zero
              damage and maximum efficiency. Here is exactly what happens from
              first contact to final delivery.
            </p>
            <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-8">
              {[
                {
                  title: "Step 1 — Free Quote",
                  desc: "Contact us by phone, WhatsApp, or our website form. Describe your move and we will send a fully itemized, no-obligation quote directly to your WhatsApp and email.",
                },
                {
                  title: "Step 2 — Survey (for large moves)",
                  desc: "For premium or large-scale relocations, our supervisor visits your location to assess the furniture and plan the move in detail.",
                },
                {
                  title: "Step 3 — Professional Packing",
                  desc: "Our trained team uses bubble wrap, stretch film, moving blankets, and custom padding to protect every piece of furniture before loading.",
                },
                {
                  title: "Step 4 — Disassembly",
                  desc: "Large furniture items such as beds, wardrobes, and modular units are carefully disassembled by our technicians.",
                },
                {
                  title: "Step 5 — Loading",
                  desc: "Furniture is systematically loaded into our clean, enclosed or open trucks depending on your requirement and the distance.",
                },
                {
                  title: "Step 6 — Safe Transport",
                  desc: "GPS-tracked delivery to your new location, with care taken at every turn.",
                },
                {
                  title: "Step 7 — Unloading & Reassembly",
                  desc: "Our team unloads, reassembles, and arranges your furniture exactly where you want it.",
                },
                {
                  title: "Step 8 — Pay Upon Satisfaction",
                  desc: "You inspect everything. If you are satisfied, you pay. Simple.",
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

          <section>
            <h2>Why You Must Avoid Freelance Furniture Movers in UAE</h2>
            <p>
              Many residents and businesses in the UAE make the mistake of
              hiring freelance movers who operate only through phone calls or
              social media. This carries serious risks:
            </p>
            <ul className="list-inside list-disc mt-6 text-muted-foreground leading-relaxed space-y-2">
              <li>
                No legal registration or DED license — no accountability if your
                furniture is damaged
              </li>
              <li>
                No insurance coverage — you pay for any breakage from your own
                pocket
              </li>
              <li>
                No professional packing equipment — furniture is vulnerable to
                scratches and breakage
              </li>
              <li>
                Privacy risk — unverified individuals entering your home or
                office
              </li>
              <li>
                No guarantees — many disappear after payment with no follow-up
              </li>
            </ul>
            <p className="mt-6">
              As a company registered since 1998 with a verified Google Business
              Profile, a real address, and thousands of completed moves, we are
              the safe and accountable alternative. Meet our owner, check our
              reviews, and book with confidence.
            </p>
          </section>

          <section className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
              <Image
                src={"/ser/furniture-movers-uae-packing-loading.jpg"}
                alt="Furniture movers in UAE carefully packing and loading sofas beds and other furniture into a branded moving truck"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
              <Image
                src={"/ser/furniture-movers-uae-delivery-setup.jpg"}
                alt="Furniture movers in UAE delivering and setting up furniture inside a modern home with professional workers"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section>
            <h2>Furniture Moving Prices in UAE — What to Expect</h2>
            <p>
              We believe in complete transparency. Our pricing depends on
              factors such as:
            </p>
            <ul className="list-inside list-disc mt-4 text-muted-foreground leading-relaxed space-y-2">
              <li>Number of furniture pieces and their size/weight</li>
              <li>Distance between pickup and delivery locations</li>
              <li>Floor level and availability of elevator/parking</li>
              <li>
                Need for disassembly, professional packing, and reassembly
              </li>
              <li>Timing — standard scheduling vs. same-day urgent service</li>
            </ul>
            <p className="mt-6">
              Contact us for a free, no-obligation customized quote sent
              directly to your WhatsApp. What you receive in the quote is
              exactly what you pay — no hidden charges, no surprises.
            </p>
          </section>

          <section>
            <h2>Service Areas — Furniture Movers Across All UAE Emirates</h2>
            <ul className="list-inside list-disc mt-6 text-muted-foreground leading-relaxed space-y-3">
              {[
                {
                  title: "Dubai",
                  link: "/",
                  extra:
                    "— all areas including Downtown, Marina, JLT, Deira, Bur Dubai",
                },
                {
                  title: "Abu Dhabi",
                  link: "/",
                  extra: "— Khalidiyah, Mussafah, Reem Island, Al Ruwais",
                },
                {
                  title: "Sharjah",
                  link: "/movers-and-packers-in-sharjah",
                  extra: "— Al Nahda, Al Taawun, Muwaileh, Industrial Area",
                },
                {
                  title: "Ajman",
                  link: "/movers-in-ajman",
                  extra: "— Al Jurf, Corniche, Al Rumailah",
                },
                {
                  title: "Ras Al Khaimah",
                  link: "/movers-in-ras-al-khaimah",
                  extra: "— Al Hamra, Julphar, Al Nakheel",
                },
                {
                  title: "Al Ain",
                  link: "/movers-in-al-ain",
                  extra: "— Al Jimi, Zakher, Al Maqam",
                },
                {
                  title: "Umm Al Quwain",
                  link: "/movers-in-umm-al-quwain",
                  extra: " — and Khor Fakkan",
                },
                {
                  title: "Fujairah",
                  link: "/movers-in-fujairah",
                  extra: "— city center and surrounding areas",
                },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="font-semibold text-foreground"
                  >
                    Furniture Movers {item.title}
                  </Link>{" "}
                  {item.extra}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Why Choose Registered, Professional Furniture Movers?</h2>
            <div className="flex flex-col gap-y-3 text-muted-foreground">
              <p>
                Movers and Packers in UAE has been handling furniture
                relocations since 1998. Unlike newer moving companies with no
                track record, we have 25+ years of proven experience.
              </p>
              <p>
                We understand that furniture is more than just objects — it is
                your investment in your home or business space. Whether it is
                antique furniture, sensitive electronics, or heavy office
                equipment, we treat every item with the care and attention it
                deserves.
              </p>
              <p>
                Our team is multilingual, professionally trained, available
                24/7, and fully insured. We stand behind every move we complete,
                which is why thousands of families and businesses across the UAE
                continue to trust us.
              </p>
              <p>
                For commercial relocations — offices, banks, hospital furniture,
                school setups, or restaurant fit-outs — you can arrange a direct
                meeting with the company owner to discuss your specific
                requirements.
              </p>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-2 flex flex-col gap-y-5 self-start sticky top-24 md:px-0 px-4">
          <div className="rounded-2xl bg-muted p-6 space-y-3">
            <h3 className="font-bold text-lg">Need Furniture Moving Help?</h3>
            <p className="text-sm text-muted-foreground">
              Contact our furniture movers team today for a free consultation
              and quote. We specialize in furniture moving services in uae.
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
        faqs={FurnitureMovingUaeFaqs}
        title="Frequently Asked Questions — Furniture Movers in UAE"
      />
      <CTA
        title="Call or WhatsApp Us Anytime — Free Quote in Minutes"
        desc="If you need professional furniture movers in the UAE you can trust, we are here. Registered since 1998, fully insured, no hidden charges, and available the same day if you need us. Call, WhatsApp, or fill out the form — we will get back to you fast with a quote."
      />
    </main>
  );
};

export default FurnitureMovers;
const googleReviews = [
  {
    name: "Amir Khan",
    time: "2 weeks ago",
    star: 5,
    review:
      "Moved our entire villa's furniture in Abu Dhabi seamlessly. The team was incredibly careful with our heavy oak dining table and delicate glass cabinets.",
    image: "/ava/32.jpg",
  },
  {
    name: "Sarah Al Qasimi",
    time: "1 month ago",
    star: 5,
    review:
      "Hired them to relocate our restaurant furniture in Dubai. They handled all the fragile dining tables, chairs, and décor with absolute professionalism and speed.",
    image: "/ava/44.jpg",
  },
  {
    name: "David Carter",
    time: "3 days ago",
    star: 5,
    review:
      "We needed our office workstations and conference tables moved in Sharjah over the weekend. They disassembled and reassembled everything perfectly before Monday morning.",
    image: "/ava/86.jpg",
  },
  {
    name: "Ayesha Rahman",
    time: "2 months ago",
    star: 5,
    review:
      "Great experience using them for our school's furniture relocation. They efficiently moved dozens of heavy classroom desks and filing cabinets without a single scratch.",
    image: "/ava/68.jpg",
  },
  {
    name: "Tarek Mansour",
    time: "1 week ago",
    star: 5,
    review:
      "Handled our warehouse furniture and bulky storage racks in Ajman effortlessly. The crew was strong, fast, and clearly knew exactly what they were doing.",
    image: "/ava/22.jpg",
  },
  {
    name: "Dr. Farah Ahmed",
    time: "4 weeks ago",
    star: 5,
    review:
      "We used Movers and Packers in UAE to shift our clinic's waiting room furniture and medical cabinets. They were punctual, quiet, and extremely careful with our property.",
    image: "/ava/90.jpg",
  },
  {
    name: "Vikram Singh",
    time: "3 weeks ago",
    star: 5,
    review:
      "Excellent corporate movers for our bank branch relocation. They made sure all the executive desks and heavy lobby furniture arrived safely and exactly on time.",
    image: "/ava/54.jpg",
  },
  {
    name: "Chloe Davies",
    time: "5 days ago",
    star: 5,
    review:
      "They took apart my massive IKEA wardrobe and reassembled it at the new place perfectly. Highly recommend them for any home furniture moving in the UAE.",
    image: "/ava/29.jpg",
  },
];
