import ServiceHero from "@/components/ServiceHero";
import HeroImage from "@/public/house-shifting-services-in-dubai-uae.jpg";
import QuotationSection from "@/components/QuotationSection";
import { AllServices, locations } from "@/lib/data";
import Image from "next/image";
import { ChevronRight, MessageCircle, PhoneCall } from "lucide-react";
import { ReviewSection } from "@/components/ReviewSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FAQSection } from "@/components/FaqsSection";
import { HouseShiftingDubaiFaqs } from "@/lib/FaqsData";
import CTA from "@/components/CTA";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Script from "next/script";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "House Shifting Dubai | Home Movers and Packers Dubai ",
      desc: "Need house shifting in Dubai? Our trained movers have 25+ years experience. Zero hidden fees, same-day service & pay-after-completion guarantee. Get a quote!",
    },
    image: {
      path: "/house-shifting-services-in-dubai-uae.jpg",
      alt: "House Shifting Services in Dubai, UAE",
    },
    path: "/house-shifting-dubai",
  },
});

const HouseShiftingServices = () => {
  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "House Shifting Dubai",
        url: "/house-shifting-dubai",
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
          title="House Shifting Dubai — Home Movers and Packers in Dubai"
          desc="Planning a house shifting in Dubai? Movers and Packers in UAE is your licensed, experienced partner for a smooth, stress-free relocation. Registered since 1998 and based in Ras Al Khor Industrial Area 1, Dubai, we have completed thousands of residential moves across all UAE emirates."
          image={{
            src: HeroImage,
            alt: "House Shifting Services in Dubai, UAE",
          }}
          btnText="Get a Free House Shifting Quote  "
        />
        <QuotationSection
          title={
            <>
              <span className="font-bold md:block">
                Get a Free House Shifting Quote
              </span>{" "}
              From Movers and Packers in UAE
            </>
          }
          btnText="Get My House Shifting Quote"
          desc="Getting a quote takes two minutes. Tell us your property type, pickup and drop-off location, and preferred moving date. We will come back with a fixed price — no guesswork, no hidden fees. Same-day moves are available. And you only pay once the job is done and you are satisfied."
        />
        <div className="max-w-7xl md:px-10 mx-auto mt-32 grid lg:grid-cols-6 grid-col-1 min-h-screen gap-10">
          <div
            className="lg:col-span-4 flex flex-col gap-y-16 md:px-0 px-4"
            id="service-content"
          >
            <section>
              <h3>
                Dubai&apos;s Most Experienced House Movers — 25+ Years,
                Thousands of Moves, Zero Hidden Charges
              </h3>
              <p>
                Whether you are moving house from a studio apartment or a
                5-bedroom villa, our professional team handles everything —
                packing, loading, transport, and unpacking — with full
                transparency and no hidden charges.
              </p>
            </section>
            <section>
              <h2>Why Choose Our House Shifting Services in Dubai?</h2>
              <p>
                We are not a freelance operation. Movers and Packers in UAE is a
                legally registered moving company with a verified License and
                Trade Profile, a permanent office in Al Mankhool, and a team
                that has been doing this since 1998. Here is what sets us apart.
              </p>
            </section>
            <section className="grid lg:grid-col-3 md:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <h3>25+ Years of Experience: </h3>
                <p className="-mt-2">
                  Registered in 1998, we have completed thousands of house
                  shifts across Dubai and all UAE emirates. That track record
                  matters when you are trusting someone with your home.
                </p>
              </div>
              <div>
                <h3>Licensed & Legally Registered: </h3>
                <p className="-mt-2">
                  Unlike freelance movers, we are a fully licensed company with
                  a verified Google Business Profile. You know exactly who you
                  are dealing with.
                </p>
              </div>
              <div>
                <h3>Zero Hidden Charges: </h3>
                <p className="-mt-2">
                  The quote you receive is the exact amount you pay. No
                  surprises on moving day, no last-minute additions.
                </p>
              </div>
              <div>
                <h3>Pay Upon Satisfaction: </h3>
                <p className="-mt-2">
                  You only pay once your move is complete and you are satisfied.
                  No upfront deposits required. If it is not right, we fix it.
                </p>
              </div>
              <div>
                <h3>Same-Day Service Available: </h3>
                <p className="-mt-2">
                  Need to move urgently? We offer same-day house shifting for
                  emergency relocations across Dubai. Call us directly for
                  fastest response.
                </p>
              </div>
              <div>
                <h3>Fully Enclosed Box Trucks </h3>
                <p className="-mt-2">
                  Our RTA-approved covered trucks protect your furniture from
                  Dubai&apos;s 45°C+ heat and sandstorms. Open pickups are a
                  risk we never take with your belongings.
                </p>
              </div>
            </section>
            <div className="bg-secondary rounded-3xl aspect-video relative overflow-hidden">
              <Image
                src={"/ser/house-shifting-services-in-dubai.jpg"}
                alt="House Shifting Services in Dubai By Movers and packers in uae"
                fill
                className="object-cover"
              />
            </div>
            <section>
              <h2>Our Complete House Shifting Services in Dubai</h2>
              <p>
                From small studio moves to large villa relocations, we cover
                every type of residential move across Dubai. Each service below
                is handled by a trained crew — not subcontractors, not day
                labour.
              </p>
              <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-10">
                {[
                  {
                    name: "Apartment Moving & Packing Services in Dubai",

                    description:
                      "Moving a 1BHK to 4BHK apartment in Dubai? We handle everything from coordinating elevator access and building permits to packing electronics with anti-static bubble wrap. Our apartment movers in Dubai work efficiently so your move does not drag into the evening.",
                    href: "/apartment-movers-dubai",
                  },
                  {
                    name: "Villa Moving Services Dubai",
                    description:
                      "Villas come with their own challenges: garden furniture, oversized wardrobes, chandeliers, and wide stairways that require careful planning. Our villa movers in Dubai have the experience and equipment to handle all of it without damage to your property or belongings.",
                    href: "/villa-movers-in-dubai",
                  },
                  {
                    name: "Flat & Studio Shifting in Dubai",
                    description:
                      "Smaller space, faster move — but still done properly. Our flat and studio shifting service is efficient and budget-friendly, with the same care and professionalism as any full villa job. We pack and move everything, from your bed and sofa to your kitchenware and wardrobe.",
                    href: "/apartment-movers-dubai",
                  },
                  {
                    name: "House Furniture Moving in Dubai",
                    description:
                      "Moving furniture in a house takes more than muscle. We dismantle wardrobes, beds, modular shelving, and glass-top tables carefully, wrap every piece properly, and reassemble everything at your new home. Nothing gets dragged. Nothing gets scratched.",
                    href: "/furniture-moving-services-uae",
                  },
                  {
                    name: "Packing Services For House Shifting",
                    description:
                      "We use high-quality boxes, stretch plastic, bubble wrap, and fabric moving blankets. Everything is labelled with a clear system so unpacking at the other end is fast and organised. Packing materials are included in your quote — no extra charges.",
                    href: "/packing-services-in-dubai",
                  },
                  {
                    name: "Curtain Fixing & Installation",
                    description:
                      "Once you have moved in, the last thing you want is to call a separate company for your curtains. We offer post-move curtain fixing and installation as part of our service — a detail most moving companies simply ignore.",
                    href: "/",
                  },
                  {
                    name: "Storage Services in Dubai",
                    description:
                      "Need somewhere to keep your belongings while you wait for your new place to be ready? We offer short and long-term furniture storage in Dubai, both managed and self-storage options available. Our secure warehouse is monitored 24/7 and fully insured.",
                    href: "/",
                  },
                ].map((service, i) => (
                  <div
                    key={i}
                    id={service.name.toLowerCase().replace(/\s+/g, "-")}
                    className="rounded-2xl p-5 bg-muted"
                  >
                    <h3 className=" mb-0! text-xl! font-medium">
                      <Link href={service.href}>{service.name}</Link>
                    </h3>
                    <p className="mt-3 leading-tight text-muted-foreground">
                      {service.description}
                    </p>
                    <Button
                      link={service.href}
                      title={`Contact Now ${service.name}`}
                      variant={"link"}
                      className="mt-3 "
                    >
                      Contact Now <ChevronRight />
                    </Button>
                  </div>
                ))}
                <p>
                  We also cover office relocation, warehouse moving, and
                  specialized equipment shifting.{" "}
                  <Link href="/moving-services">
                    See our full services page for details.
                  </Link>
                </p>
              </div>
            </section>
            <section className="grid md:grid-cols-2 grid-cols-1 gap-10">
              <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
                <Image
                  src={"/ser/house-shifting-dubai-loading-moving-truck.jpg"}
                  alt="House shifting service in Dubai with professional movers loading furniture and boxes into a branded moving truck"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
                <Image
                  src={"/ser/house-shifting-dubai-unpacking-home-service.jpg"}
                  alt="House shifting in Dubai with movers unloading and placing furniture and boxes inside a modern home"
                  fill
                  className="object-cover"
                />
              </div>
            </section>
            <section>
              <h2>How Our House Shifting Process Works in Dubai</h2>
              <p>
                Every house shift we do follows the same six-step process. No
                shortcuts, no skipped steps. Here is what happens from the
                moment you contact us to the moment you are settled in your new
                home.
              </p>
              <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-10">
                {[
                  {
                    title: "Free Quote & Survey",
                    desc: "Contact us by phone, WhatsApp, or our online form. We assess your move and send a transparent, fixed quote — no hidden fees, no guesswork.",
                  },
                  {
                    title: "Dismantling",
                    desc: "Our trained carpenters carefully dismantle large items — beds, wardrobes, shelving units — before anything is wrapped or moved.",
                  },
                  {
                    title: "Packing & Labelling",
                    desc: "Every item gets packed using quality materials: bubble wrap, reinforced boxes, and fabric blankets. Everything is labelled for smooth placement at your new home.",
                  },
                  {
                    title: "Loading & Transport",
                    desc: "Items are loaded into our RTA-approved fully enclosed box trucks — 3-ton or 4-ton — and transported safely to your destination.",
                  },
                  {
                    title: "Unloading & Installation",
                    desc: "We unload, reassemble your furniture, and place everything exactly where you want it. No guessing, no extra charges.",
                  },
                  {
                    title: "Optional Unpacking",
                    desc: "If you need it, our team can unpack and organize your belongings, leaving your new home clean and ready to live in from day one.",
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
              <h2>House Shifting Cost in Dubai — Transparent Pricing</h2>
              <p>
                We believe in fixed, honest pricing. The number we give you
                before the move is the number you pay on the day — no additions,
                no surprises.{" "}
              </p>
              <p className="mb-10">
                Below are our standard price ranges for house shifting in Dubai
                based on property size.
              </p>
              {/* Desktop / Tablet View (Table) */}
              <div className="hidden md:block bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-foreground border-b border-gray-200 text-white font-semibold">
                      <th className="py-4 px-6 text-sm">Property Type</th>
                      <th className="py-4 px-6 text-sm">Estimated Cost</th>
                      <th className="py-4 px-6 text-sm">Truck Size</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pricingData.map((row, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-4 px-6 text-sm font-medium text-gray-900">
                          {row.type}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-600">
                          {row.cost}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-500">
                          {row.truck}
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
                      {item.type}
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
                        {item.truck}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5">
                Final pricing depends on move size, distance, floor level, and
                any additional services selected. Contact us for your customised
                quote. And remember: the price you are quoted is the price you
                pay. See our full pricing page for more details.
              </p>
            </section>
            <section>
              <h2>House Shifting Services Across Dubai and All UAE Emirates</h2>
              <p>
                Based in Al Mankhool, we cover every neighbourhood in Dubai and
                operate UAE-wide. Whether you are moving within the same
                community or relocating from Dubai to another emirate, we handle
                it.
              </p>
              <p className="mt-2 mb-5">
                <b>Dubai Areas:</b> Downtown Dubai, Dubai Marina, Business Bay,
                Palm Jumeirah, Jumeirah Village Circle (JVC), Al Barsha, Deira,
                Bur Dubai, Al Quoz, International City, Discovery Gardens, and
                all other neighbourhoods.
              </p>
              <b>Other Emirates:</b>
              <ul className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-3">
                {[
                  { title: "Abu Dhabi", link: "/" },
                  { title: "Sharjah", link: "/movers-and-packers-in-sharjah" },
                  { title: "Ajman", link: "/movers-in-ajman" },
                  {
                    title: "Ras Al Khaimah",
                    link: "/movers-in-ras-al-khaimah",
                  },
                  { title: "Al Ain", link: "/movers-in-al-ain" },
                  { title: "Umm Al Quwain", link: "/movers-in-umm-al-quwain" },
                ].map((item, i) => (
                  <li key={i} className="hover:underline underline-offset-4">
                    <Link href={item.link}>
                      House Shifting Services in {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2>Why We Are the Best House Movers and Packers in Dubai</h2>
              <p>
                With 25+ years in the UAE moving industry, Movers and Packers in
                UAE has built a reputation on one thing: doing the job properly,
                every time. Since 1998, we have completed thousands of
                residential moves for families, singles, and corporations across
                Dubai and the wider UAE.{" "}
              </p>
              <p>
                We are fully insured, available 24/7, and our team speaks both
                English and Arabic.{" "}
              </p>
              <p>
                Unlike freelance movers with no accountability, we are a
                licensed company — which means if anything ever goes wrong, you
                have proper recourse. No legitimate moving company should be
                operating without a trade licence. We are not a risk worth
                taking.
              </p>
              <ul className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3">
                <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                  Registered since 1998 — 25+ years in operation
                </li>
                <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                  100% insurance coverage on all moves
                </li>
                <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                  RTA-approved fleet — 8 fully enclosed box trucks
                </li>
                <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                  Certified carpenters, electricians & handymen on every move
                </li>
                <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                  Pay upon satisfaction — no upfront deposits
                </li>
                <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                  English & Arabic speaking team
                </li>
                <li className="bg-secondary py-2 px-3 rounded-2xl leading-tight">
                  No hidden charges — fixed, transparent quotes
                </li>
              </ul>
            </section>
          </div>
          <aside className="lg:col-span-2 flex flex-col gap-y-5 self-start sticky top-24 md:px-0 px-4">
            <div className="rounded-2xl bg-muted p-6 space-y-3">
              <h3 className="font-bold text-lg">
                Need House Shifting in Dubai?
              </h3>
              <p className="text-sm text-muted-foreground">
                Contact our home movers and packers team today for a free
                consultation and quote. We specialize in house moving services
                in dubai.
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
                <li>
                  <Link
                    href={"/dubai-areas"}
                    className="flex items-center gap-2"
                  >
                    <span className="text-primary"> 🏳 </span>
                    Dubai Areas We Serve
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <ReviewSection reviews={googleReviews} />
        <FAQSection
          faqs={HouseShiftingDubaiFaqs}
          title="Frequently Asked Questions About House Shifting in Dubai"
          subtitle="Everything you need to know about our houses shifting dubai services and processes."
        />
        <CTA
          title="Contact Us For House Shifting Services in Dubai"
          desc=" We are here to help you with all your house shifting needs. Call us today for a free quote! "
        />
      </main>
    </>
  );
};

export default HouseShiftingServices;

const pricingData = [
  {
    type: "Studio Apartment",
    cost: "AED 650 – 1,000",
    truck: "3-ton enclosed",
  },
  {
    type: "1 Bedroom (1BHK)",
    cost: "AED 900 – 1,400",
    truck: "3-ton enclosed",
  },
  {
    type: "2 Bedroom (2BHK)",
    cost: "AED 1,300 – 1,900",
    truck: "3-ton enclosed",
  },
  {
    type: "3 Bedroom (3BHK)",
    cost: "AED 1,800 – 2,700",
    truck: "4-ton enclosed",
  },
  {
    type: "3–4 Bedroom Villa",
    cost: "AED 2,200 – 3,200",
    truck: "4-ton enclosed",
  },
  {
    type: "5+ Bedroom Villa",
    cost: "AED 3,000 – 4,500+",
    truck: "Multiple trucks",
  },
];

const googleReviews = [
  {
    name: "Mohammed Al Fayed",
    time: "1 week ago",
    star: 5,
    review:
      "Moved our 3-bedroom villa in Arabian Ranches last week. The house shifting team was efficient, packed everything securely, and even set up the beds for us.",
    image: "/ava/32.jpg",
  },
  {
    name: "Fatima Saeed",
    time: "3 weeks ago",
    star: 5,
    review:
      "Highly recommend their house shifting services in Dubai. They managed our entire move from Jumeirah to The Springs without a single broken glass.",
    image: "/ava/44.jpg",
  },
  {
    name: "John Peterson",
    time: "2 days ago",
    star: 5,
    review:
      "The best house movers I've used in the UAE! They arrived on time, wrapped all the bulky furniture, and unloaded everything exactly where my wife wanted it.",
    image: "/ava/86.jpg",
  },
  {
    name: "Anjali Patel",
    time: "1 month ago",
    star: 5,
    review:
      "Such a smooth house shifting experience. The crew was very polite, handled our heavy kitchen appliances with care, and made the whole process stress-free.",
    image: "/ava/68.jpg",
  },
  {
    name: "Tariq Abdullah",
    time: "2 weeks ago",
    star: 5,
    review:
      "We shifted our home from Deira to Mirdif and the team did a fantastic job. Great pricing and genuinely professional packers who know what they are doing.",
    image: "/ava/22.jpg",
  },
  {
    name: "Lisa Williams",
    time: "5 days ago",
    star: 5,
    review:
      "Great job on our recent house move in Dubai. They brought all the boxes, packed the entire kitchen in under an hour, and left absolutely no mess behind.",
    image: "/ava/90.jpg",
  },
  {
    name: "Sanjay Gupta",
    time: "2 months ago",
    star: 5,
    review:
      "I was really worried about shifting my house with a newborn, but they handled everything quietly and quickly. Truly a top-notch home moving company.",
    image: "/ava/54.jpg",
  },
  {
    name: "Mariam Youssef",
    time: "4 weeks ago",
    star: 5,
    review:
      "Fantastic service from start to finish! The house shifting crew carefully moved our large sofa and antique dining set through narrow doors without any damage.",
    image: "/ava/29.jpg",
  },
];
