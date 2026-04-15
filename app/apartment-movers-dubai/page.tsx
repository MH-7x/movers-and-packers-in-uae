import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import ServiceHero from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { AllServices, locations } from "@/lib/data";
import { ApartmentMovingDubaiFaqs } from "@/lib/FaqsData";
import HeroImage from "@/public/ser/apartment-movers-in-dubai.jpg";
import {
  ChevronRight,
  Headset,
  MapPinCheck,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const ApartmentMovers = () => {
  return (
    <main>
      <ServiceHero
        title="Apartment Movers in Dubai — Quick & Safe Relocations"
        desc="Looking for reliable apartment movers in Dubai? Whether you are shifting a studio, a 1BHK, or a large 4-bedroom apartment, our team at Movers and Packers UAE handles everything from start to finish — packing, transport, and full installation."
        image={{
          src: HeroImage,
          alt: "Apartment moving service in Dubai with movers packing and loading furniture into a truck",
        }}
        btnText="Get a Free Apartment Moving Quote  "
      />
      <section className="mt-16 max-w-4xl mx-auto md:px-0 px-4">
        <h3 className="md:text-2xl text-lg font-bold text-center">
          Professional{" "}
          <span className="text-primary underline underline-offset-4">
            apartment moving services
          </span>{" "}
          across all Dubai areas. No hidden charges, fully insured, same-day
          available.
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
          {[
            "1998 Registered ",
            "100% Insured",
            "No Hidden Charges",
            "Pay After Completion",
            "Same Day Available",
          ].map((t, i) => (
            <div
              key={i}
              className="bg-primary text-white text-shadow-2xs px-3 py-1.5 text-sm rounded-4xl flex items-center gap-2"
            >
              <span> ✔</span> <p>{t} </p>
            </div>
          ))}
        </div>
        <div className="md:text-lg text-muted-foreground text-center mt-10 md:px-20">
          <p>
            We have been officially registered since 1998 and have completed
            thousands of apartment moves across Dubai, Abu Dhabi, Sharjah, and
            all seven Emirates.
          </p>
          <p>
            If you need apartment shifting in Dubai or are planning a house
            shifting in any part of the UAE, contact us today for a free,
            no-obligation quote with zero hidden charges.
          </p>
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
            <span className="font-bold md:block">Get Moving Free Quote</span>{" "}
            From Apartment Movers in Dubai
          </>
        }
        btnText="Get Apartment Moving Quote"
        desc="Get a free moving quote from our expert apartment movers in Dubai. We handle everything, from packing and loading to transport and installation. No hidden charges, fully insured, and same-day available."
      />
      <div className="max-w-7xl md:px-10 mx-auto mt-20 grid lg:grid-cols-6 grid-col-1 min-h-screen gap-10">
        <div
          className="lg:col-span-4 flex flex-col gap-y-16 md:px-0 px-4"
          id="service-content"
        >
          <section>
            <h2>Why Choose Our Apartment Movers in Dubai?</h2>
            <p>
              There is a big difference between hiring a registered apartment
              moving company and booking a freelance operator you found on a
              flyer.{" "}
            </p>
            <p className="mt-2">
              Our apartment movers in Dubai are fully trained, properly
              equipped, and part of a licensed business that has been operating
              in the UAE for over 25 years. That means real accountability, real
              insurance, and a team that shows up on time.
            </p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-8">
              {[
                {
                  title: "Officially Registered Since 1998 ",
                  description:
                    "Legal, licensed, and verifiable on UAE trade records — unlike many freelance operators with no legal standing in the UAE.",
                },
                {
                  title: "Pay After Completion ",
                  description:
                    "We do not take a single dirham until the job is done and you are fully happy. No upfront payment, no pressure.",
                },
                {
                  title: "No Hidden Charges ",
                  description:
                    "If we quote AED 1,000, you pay AED 1,000. Nothing more, nothing less. The price we give is the price you pay.",
                },
                {
                  title: "Enclosed Box Trucks (UAE-Ready) ",
                  description:
                    "Our fully enclosed RTA-approved trucks protect your furniture from Dubai's 45°C+ summer heat and sandstorms during transit.",
                },
                {
                  title: "100% Insured Moves ",
                  description:
                    "Every item is covered from the moment we pick it up to the moment it is placed in your new apartment.",
                },
                {
                  title: "24/7 Availability + Same-Day Service ",
                  description:
                    "Need to move today? We offer same-day apartment moving in Dubai when you need it most — no need to wait days for a slot.",
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
              src={"/ser/apartment-movers-in-dubai-crew-with-moving-truck.jpg"}
              alt="apartment movers in dubai crew with moving truck"
              fill
              className="object-cover"
            />
          </div>

          <section>
            <h2>Our Apartment Moving Services in Dubai</h2>
            <p>
              We cover the full scope of apartment moving services — from a
              single-room studio to a sprawling 4BHK. Whether you need packing
              and moving services in Dubai or just a furniture mover to handle
              the heavy lifting, we can put together exactly the team and
              equipment you need.
            </p>
            <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-10">
              {[
                {
                  name: "Full Packing & Moving Service",
                  description:
                    "Our team brings everything needed to pack your apartment properly — double-walled cardboard boxes, bubble wrap, stretch plastic, and thick fabric blankets for fragile and oversized items. Every box is labelled by room so unpacking is quick and straightforward. Furniture is dismantled by our certified carpenters before transport and fully reassembled at your new place.",
                  href: "#",
                },
                {
                  name: "Studio & 1BHK Apartment Moving Dubai",
                  description:
                    "Studio and one-bedroom apartments are the most common move requests we handle in Dubai. We use a right-sized truck, a focused team, and a streamlined process that gets you moved efficiently without charging you for capacity you do not need. If you are looking for studio apartment movers in Dubai, this is exactly what we do every day.",
                  href: "#",
                },
                {
                  name: "2BHK, 3BHK & Large Apartment Relocation",
                  description:
                    "Larger apartments need proper planning. We assign a bigger team and can deploy multiple 4-ton enclosed trucks if your volume requires it. If your new apartment is not ready yet, we also offer short-term furniture storage so your belongings are safe until you are ready to move in.",
                  href: "#",
                },
                {
                  name: "Same-Day & Urgent Apartment Moving",
                  description:
                    "Sometimes you do not have the luxury of planning weeks ahead. Lease expired, landlord situation, new arrival in UAE — whatever the reason, our same-day apartment movers in Dubai are set up to respond fast. Call or WhatsApp us in the morning and we can have a team at your door the same day.",
                  href: "#",
                },
                {
                  name: "Furniture Storage During Your Move",
                  description:
                    "If there is a gap between your move-out and move-in date, we offer safe, secure short-term and long-term furniture storage. Your items are kept in climate-controlled facilities and fully insured throughout the storage period.",
                  href: "#",
                },
                {
                  name: "Curtain Fixing & Installation (Add-On)",
                  description:
                    "Once you are moved in, we can also fix and install your curtains in the new apartment. This is something none of our competitors offer, and it genuinely saves you the hassle of finding a separate handyman. Ask about this add-on when you book.",
                  href: "#",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  id={service.name.toLowerCase().replace(/\s+/g, "-")}
                  className="rounded-2xl p-5 bg-muted"
                >
                  <h3 className=" mb-0! text-xl! font-medium">
                    {service.name}
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
            <h2>How Our Apartment Moving Process Works</h2>
            <p>
              We handle your Dubai apartment relocation in five clear steps — no
              confusion, no surprises. Here is what to expect when you book with
              our apartment movers in Dubai.
            </p>
            <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-10">
              {[
                {
                  title: "Free Quote & Site Inspection",
                  desc: "Contact us via call, WhatsApp, or the online form. We assess your apartment, discuss what you need, and give you a transparent quote. No guesswork.",
                },
                {
                  title: "Dismantling & Packing",
                  desc: "Our certified carpenters dismantle furniture while our packing team carefully wraps and boxes all items using bubble wrap, blankets, and labels for easy unpacking.",
                },
                {
                  title: "Loading & Safe Transport",
                  desc: "Your belongings are loaded into our RTA-approved enclosed trucks, fully protected from Dubai's heat and sandstorms during the drive.",
                },
                {
                  title: "Unloading & Installation",
                  desc: "We unload, reassemble all furniture, and place items exactly where you want them in your new apartment. You direct, we execute.",
                },
                {
                  title: "Unpacking & Curtain Fixing (Optional)",
                  desc: "Ask for our unpacking service and curtain installation add-on. We make your new apartment feel ready from day one.",
                },
              ].map((process, i) => (
                <div key={i}>
                  <h3 className="mb-2! text-lg!">
                    <span className="text-primary">Step {i + 1}: </span>
                    {process.title}
                  </h3>
                  <p className="leading-tight">{process.desc}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2>
              Freelance Movers vs Professional{" "}
              <br className="hidden md:block" /> Apartment Movers in Dubai
            </h2>
            <p>
              A lot of people in Dubai have been burned by freelance movers —
              hidden fees after the job, furniture scratched on an open truck,
              no insurance and nowhere to complain. That is not what we
              are.{" "}
            </p>
            <p className="mt-2">
              Here is a straightforward comparison so you can decide for
              yourself.
            </p>
            <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <h3 className="text-foreground">
                  ⓧ Freelance / Unregistered Movers
                </h3>
                <ul className="list-inside list-disc mt-3 text-muted-foreground leading-tight">
                  <li>No legal license or trade registration</li>
                  <li>Hidden charges appear after the job</li>
                  <li>Open trucks — furniture damaged by heat and dust</li>
                  <li>No insurance — any loss is your problem</li>
                  <li>Payment demanded upfront, no recourse</li>
                </ul>
              </div>
              <div>
                <h3 className="text-foreground">
                  ✔ Freelance / Unregistered Movers
                </h3>
                <ul className="list-inside list-disc mt-3 text-muted-foreground leading-tight">
                  <li>Officially registered since 1998 — verifiable</li>
                  <li>Quoted price = final price, no extras</li>
                  <li>RTA-approved enclosed box trucks always</li>
                  <li>100% insurance on all your belongings</li>
                  <li>Pay only after you are fully satisfied</li>
                </ul>
              </div>
            </div>
            <p className="mt-5 ">
              The difference is not just convenience — it is protection. With a
              registered company, you have a legal paper trail, a direct point
              of contact, and actual recourse if something goes wrong.
            </p>
            <p>
              With an unregistered operator, you have nothing in writing and no
              way to hold anyone accountable.
            </p>
          </section>
          <section className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
              <Image
                src={"/ser/apartment-moving-dubai-loading-truck.jpg"}
                alt="Apartment moving service in Dubai with professional movers loading furniture and boxes into a branded truck"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
              <Image
                src={"/ser/apartment-moving-dubai-delivery-setup.jpg"}
                alt="Apartment moving in Dubai with movers delivering and arranging furniture and boxes inside a modern apartment"
                fill
                className="object-cover"
              />
            </div>
          </section>
          <section>
            <h2>How Do We Cost For Apartment Moving in UAE</h2>
            <p>
              The cost of hiring apartment movers in Dubai varies depending on
              the volume of your belongings, the level of service (basic vs.
              premium), and the specific moving company you choose.
            </p>
            <p className="mt-2 ">
              Here is a breakdown of the average estimated costs for moving
              different apartment sizes within Dubai:
            </p>
            <h3 className="mb-10! mt-5">
              Average Costs of Apartment Moving in Dubai
            </h3>
            {/* Desktop / Tablet View (Table) */}
            <div className="hidden md:block bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-foreground border-b border-gray-200 text-white font-semibold">
                    <th className="py-4 px-6 text-sm">Apartment Size</th>
                    <th className="py-4 px-6 text-sm">Estimated Cost</th>
                    <th className="py-4 px-6 text-sm">Time Required</th>
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
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {row.duration}
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
                  <div className="flex justify-between py-2 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Truck Size</span>
                    <span className="text-sm text-gray-600">
                      {item.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2>
              Apartment Moving Services Across All{" "}
              <br className="hidden md:block" /> Dubai Areas & UAE Emirates
            </h2>
            <p>
              We are based in Al Mankhool, Dubai, but our coverage spans the
              entire UAE. Whether you need inter-emirate apartment moving to
              Sharjah or Abu Dhabi, or a local move across Dubai neighbourhoods,
              our trucks reach every corner of the country.
            </p>

            <h3 className="mt-5">Dubai Areas</h3>
            <ul className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3 leading-tight text-sm">
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Downtown Dubai
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Dubai Marina
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Silicon Oasis Dubai
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Deira Dubai
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Bur Dubai
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Jumeirah Dubai
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Business Bay Dubai
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in JLT Dubai
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Al Quoz Dubai
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Mirdif Dubai
              </li>
            </ul>
            <h3 className="mt-5">UAE Emirates</h3>
            <ul className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3 leading-tight text-sm">
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Abu Dhabi
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Sharjah
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Ajman
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Ras Al Khaimah
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Fujairah
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Umm Al Quwain
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Al Ain
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Al Ruwais
              </li>
              <li className="bg-secondary py-2 px-3 rounded-2xl">
                Apartment Movers in Al Khor Fakkan
              </li>
            </ul>
          </section>
          <section>
            <h2>Apartment Moving Company You Can Actually Trust</h2>
            <div className="flex flex-col gap-y-1">
              <p>
                Movers and Packers UAE was established in 1998 — that is over 25
                years of legally operating in the UAE, verifiable through our
                trade registration.
              </p>
              <p>
                While many moving companies in Dubai have appeared in the last
                five years with no track record, we have handled thousands of
                relocations and built our reputation entirely on repeat business
                and word of mouth.
              </p>
              <p>
                We operate under a clear philosophy of Protection and Privacy —
                which matters especially when movers are handling bedroom items,
                personal belongings, and household valuables.
              </p>
              <p>
                Our team communicates in both English and Arabic, so language is
                never a barrier.
              </p>
              <p>
                We are available 24/7, including weekends and public
                holidays.{" "}
              </p>
              <p>
                For commercial residential moves — offices, banks, hospital
                staff quarters, restaurants — you can arrange a direct meeting
                with the company owner.{" "}
              </p>
              <p>
                We are not a call centre. We are a family business that has been
                doing this work for a long time, and we stand behind every move
                we complete.
              </p>
            </div>
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
              <Button className="bg-primary hover:bg-primary/90 w-full gap-2">
                <PhoneCall size={18} />
                Call Now
              </Button>
              <Button variant="secondary" className="w-full gap-2">
                <MessageCircle size={18} />
                WhatsApp
              </Button>
            </div>
          </div>
          <div className="rounded-2xl bg-secondary/50 p-6">
            <h4 className="font-semibold mb-3 text-lg">OUR MOVING SERVICES</h4>
            <ul className="text-sm space-y-2 text-muted-foreground">
              {AllServices.map((ser, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-primary"> ✔ </span>
                  {ser.name}
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
        faqs={ApartmentMovingDubaiFaqs}
        title="Frequently Asked Questions — Apartment Movers in Dubai"
      />
      <CTA
        title="Ready to Move? Get Your Free Apartment Moving Quote Today"
        desc="If you are looking for apartment movers in Dubai you can actually rely on, we are here. Registered since 1998, fully insured, no hidden charges, and available the same day if you need us. Call, WhatsApp, or fill out the form — we will get back to you fast. Your move, done right."
      />
    </main>
  );
};

export default ApartmentMovers;

const pricingData = [
  {
    size: "Studio Apartment",
    cost: "800 – 1,500",
    duration: "5 – 7 hours",
  },
  {
    size: "1 BHK (1 Bedroom)",
    cost: "1,000 – 2,000",
    duration: "7 – 8 hours",
  },
  {
    size: "2 BHK (2 Bedrooms)",
    cost: "1,600 – 3,500",
    duration: "8 – 9 hours",
  },
  {
    size: "3 BHK / Small Villa",
    cost: "3,000 – 5,000",
    duration: "10 – 12 hours",
  },
  {
    size: "4+ BHK / Large Villa",
    cost: "5,500 – 10,000+",
    duration: "14 – 18 hours",
  },
];
