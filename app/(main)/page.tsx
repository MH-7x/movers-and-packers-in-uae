import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  Hospital,
  HotelIcon,
  ListTodoIcon,
  Medal,
  MessageCircleCheck,
  PhoneCall,
  ShieldCheck,
  ShieldCheckIcon,
  Truck,
  University,
  Warehouse,
  X,
} from "lucide-react";
import {
  comparisonData,
  locations,
  movingFeatures,
  services,
} from "@/lib/data";
import Link from "next/link";
import Commercial from "@/components/Commerical";
import QuotationSection from "@/components/QuotationSection";
import { FAQSection } from "@/components/FaqsSection";
import { HomePageFAQs } from "@/lib/FaqsData";
import { ReviewSection } from "@/components/ReviewSection";
import MovingProcess from "@/components/MovingProcess";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import Script from "next/script";
import MainHeroSection from "@/components/MainHeroSection";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers and Packers in UAE | Dubai Moving Company Since 1998",
      desc: "Trusted movers and packers in UAE since 1998. House, villa, office & furniture moving across Dubai and all Emirates. Insured moves. Get a free WhatsApp quote.",
    },
    image: {
      path: "/mover-and-packers-in-uae.jpg",
      alt: "Movers and Packers in UAE - Professional Dubai Moving Company",
    },
    path: "",
  },
});

export default function Home() {
  const breadcrumb = generateBreadcrumb({});

  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumb }}
      />
      <main>
        <MainHeroSection />
        <QuotationSection invert />
        <section
          id="best-moving-company-in-uae "
          className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2 grid-cols-1 gap-10 md:px-10 px-4 items-center"
        >
          <div>
            {" "}
            <p className="font-medium border-b-2 border-primary w-max uppercase">
              We Are The Best
            </p>
            <h2 className="md:text-4xl text-3xl font-bold mt-3 ">
              {" "}
              <span className="md:block font-normal">
                Among the Experienced
              </span>{" "}
              Moving Companies in UAE
            </h2>
            <div className="bg-muted aspect-video mt-8 relative overflow-hidden">
              <Image
                src={"/movers-and-packers-in-uae-moving-trucks.jpg"}
                alt="Movers and Packers in UAE - Professional Dubai Moving Company"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:pt-10 text-muted-foreground md:text-lg">
            <p className="font-medium ">
              Looking for{" "}
              <Link href={"/"} className="underline">
                {" "}
                movers and packers in uae
              </Link>{" "}
              you can trust and depend?
            </p>
            <p className=" mt-2">
              You&apos;ve found the right moving company. We are a licensed and
              officially registered moving company in Dubai, and we&apos;ve been
              completing thousands of moves across all seven emirates.
            </p>
            <p className=" mt-2">
              If you&apos;re moving a house, villa, apartment, or office, our
              team of professional packers handles everything to ensure a stress
              free move. We manage the entire process, from expert handling
              during loading to the final moment the team unloads and unpacks
              your belongings at your new place.
            </p>
            <p className=" mt-2">
              No hidden charges, giving you complete peace of mind. And you pay
              only after the job is done to your satisfaction. We work with both
              residential customers and businesses.
            </p>
            <p className=" mt-2">
              What makes us different from a freelance mover with a phone number
              isn&apos;t just experience. It&apos;s that we&apos;re registered,
              insured, and accountable, keeping your belongings safe at every
              step of the journey.
            </p>
            <Button className="mt-5" size={"lg"}>
              <Truck /> Book Your Move Now
            </Button>
          </div>
        </section>
        <ReviewSection />
        <section
          id="movers-and-packers-in-uae-services"
          className="mt-20 max-w-7xl md:px-10 px-4 mx-auto"
        >
          <div className="bg-foreground rounded-2xl md:p-10 px-4 py-10 grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-8">
            <div>
              <p className="uppercase border-b border-primary text-gray-200 w-max">
                Our Moving Services
              </p>
              <h2 className="md:text-4xl text-3xl text-white mt-3">
                Our Complete <span className="font-bold">Moving Services</span>{" "}
                <span className="md:block">Across the UAE</span>
              </h2>
            </div>
            <div>
              <p className="text-gray-200">
                Moving needs vary. Below is everything we cover — from a single
                piece of furniture to a full commercial relocation.
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
          {services.map((service, i) => (
            <div
              key={i}
              id={service.category.toLowerCase().replace(/\s+/g, "-")}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold text-center">
                {service.category}
              </h2>
              <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-5 gap-8">
                {service.items.map((item) => (
                  <div
                    key={item.name}
                    id={item.name.toLowerCase().replace(/\s+/g, "-")}
                    className="rounded-2xl p-4 bg-white"
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
                    <Link href={item.href}>
                      <h3 className="mt-5 text-lg leading-tight font-medium">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="mt-2 text-muted-foreground leading-tight text-[15px]">
                      {item.description}
                    </p>
                    <Button
                      link={item.href}
                      aria-label={"Contact Us For " + item.name}
                      title={"Contact Us For " + item.name}
                      variant={"link"}
                      size={"sm"}
                      className="mt-3 "
                    >
                      Contact Now <ChevronRight />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="md:text-2xl text-lg font-medium max-w-2xl text-center mx-auto mt-10">
            We Provide All Type Of Moving Services You Need in UAE, Check Out
            Our{" "}
            <Link
              href={"/moving-services"}
              className="text-primary underline underline-offset-4"
            >
              Services Page
            </Link>{" "}
            For More Details.
          </p>
        </section>
        <section
          id="why-choose-movers-and-packers-in-uae"
          className="max-w-7xl mx-auto md:px-10 px-4 mt-20 grid md:grid-cols-2 grid-cols-1 items-center gap-10"
        >
          <div>
            <p className="uppercase border-b border-primary text-muted-foreground w-max">
              Why Choose Us
            </p>
            <h2 className="mt-5 md:text-4xl text-3xl">
              Why <span className="font-bold">Residents and Businesses</span>{" "}
              Across UAE Trust Us
            </h2>
            <p className="mt-5 text-muted-foreground md:text-lg">
              Here is what sets us apart from the freelance movers and
              unregistered companies that are hard to verify and easy to regret.
            </p>
            <div className="mt-8 border-t pt-5 grid grid-cols-2 gap-5">
              <div className="flex items-center gap-x-2 border-r">
                <Medal
                  className="text-primary md:size-12 size-8"
                  strokeWidth={1}
                />
                <div>
                  <p className="md:text-4xl text-2xl font-medium">25+</p>
                  <p className="text-muted-foreground md:text-lg text-sm">
                    Years of Experience
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <ShieldCheckIcon
                  className="text-primary md:size-12 size-8"
                  strokeWidth={1}
                />
                <div>
                  <p className="md:text-4xl text-2xl font-medium">100%</p>
                  <p className="text-muted-foreground md:text-lg text-sm">
                    Insurance Coverage
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-4/3 bg-secondary relative overflow-hidden">
            <Image
              src={"/movers-and-packer-team-and-truck-grid.jpg"}
              alt="Movers and packers in uae moving team at work and truck aside"
              fill
              className="object-cover"
            />
          </div>
        </section>
        <section className="max-w-7xl mx-auto md:px-10 px-4 mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {movingFeatures.map((feature, i) => (
            <div key={i}>
              <h3 className="text-xl font-medium">{feature.title}</h3>
              <p className="text-primary  mt-1">{feature.highlight}</p>
              <p className="text-muted-foreground mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </section>
        <MovingProcess />
        <section className="w-full grid md:grid-cols-2 grid-cols-1 mt-20 items-start">
          <div className="md:pl-20 z-10">
            <p className="font-medium border-b-2 md:px-0 px-3 border-primary w-max uppercase">
              Benefits Of Choosing Us
            </p>
            <h2 className="md:text-3xl text-2xl mt-4 md:px-0 px-3">
              Moving in the UAE? <br /> A Few Things Worth Knowing
            </h2>
            <div className="bg-foreground md:w-[115%] w-full md:h-96 h-auto mt-10 md:p-10 py-7 px-4">
              <h3 className="md:text-4xl text-2xl text-white border-b border-white/80 pb-3">
                Why <span className="font-bold">Enclosed Box Trucks</span>{" "}
                Matter Here More Than Anywhere
              </h3>
              <p className="text-white/85 mt-4">
                UAE summers regularly exceed 45°C (113°F). Sandstorms happen
                without much warning, especially in areas like Al Ain, Fujairah,
                and Ras Al Khaimah.
              </p>
              <p className="text-white/85 mt-2">
                If you&apos;re moving in an open truck, your furniture,
                electronics, and upholstery take the hit.
              </p>
              <p className="text-white/85 mt-2">
                Our RTA-approved enclosed box trucks are sealed. Your items ride
                in a controlled environment — protected from heat, dust, and
                direct sun — whether it&apos;s June in Dubai or November in Abu
                Dhabi.
              </p>
            </div>
          </div>
          <div className="aspect-4/3 bg-secondary relative overflow-hidden">
            <Image
              src={"/movers-and-packers-in-uae-enclosed-moving-trucks.jpg"}
              alt="movers and packers in uae enclosed moving trucks"
              fill
              className="object-cover"
            />
          </div>
        </section>
        <section className="max-w-7xl mx-auto md:px-10 px-4 mt-20 grid lg:grid-cols-2 grid-cols-1 items-center gap-10">
          <div className="overflow-x-auto rounded-xl shadow-lg bg-white md:order-1 order-2">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-5 py-2 text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Factor
                  </th>
                  <th className="px-5 py-2 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Truck className="w-6 h-6 text-gray-400" />
                      <span className=" font-bold text-gray-700">
                        Open Truck
                      </span>
                    </div>
                  </th>
                  <th className="px-5 py-2 text-center bg-primary/5 border-x border-blue-100">
                    <div className="flex flex-col items-center gap-2">
                      <ShieldCheck className="w-6 h-6 text-primary/70" />
                      <span className=" font-bold text-primary">
                        Enclosed Box Truck
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-2 md:px-5 py-2 font-medium text-gray-700">
                      <div className="">
                        <span className="line-clamp-2">{row.factor}</span>
                      </div>
                    </td>
                    <td className="px-2 md:px-5 py-2 text-center text-gray-600">
                      <div className="flex flex-col items-center gap-1">
                        {row.open === "None" || row.open === "No" ? (
                          <X className="w-4 md:w-5 h-4 md:h-5 text-red-400" />
                        ) : null}
                        <span className="text-xs md:text-sm">{row.open}</span>
                      </div>
                    </td>
                    <td
                      className={`px-2 md:px-5 py-2 text-center border-x ${row.isPremium ? "bg-primary/5" : "bg-blue-50/30"}`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        {row.enclosed.includes("Yes") && (
                          <Check className="w-4 md:w-5 h-4 md:h-5 text-green-600" />
                        )}
                        <span
                          className={`text-xs md:text-sm font-semibold ${row.isPremium ? "text-primary" : "text-gray-800"}`}
                        >
                          {row.enclosed}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:order-2 order-1">
            <h2 className="md:text-4xl text-3xl">
              <span className="font-bold">Open Truck or Enclosed Truck</span> —
              Which One Do You Need?
            </h2>
            <p className="text-muted-foreground mt-5 md:pr-16">
              Not every move requires an enclosed truck. Here is a simple
              breakdown to help you decide:
            </p>
            <p className="text-muted-foreground mt-1 md:pr-16">
              If you are moving a single heavy item across town, an open truck
              is fine and costs less. But for anything involving your home,
              office, or anything with a screen or wood finish — choose the
              enclosed truck.
            </p>
            <Button quoteBtn size={"lg"} className="mt-6">
              <ListTodoIcon /> Get a Free Moving Quote
            </Button>
          </div>
        </section>
        <section
          id="movers-and-packers-in-uae-services"
          className="mt-20 md:py-20 py-10 bg-foreground md:px-20 px-4"
        >
          <div className="bg-primary rounded-2xl md:p-10 p-6 grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-8">
            <div>
              <p className="uppercase border-b border-primary text-gray-200 w-max">
                Serving All Emirates
              </p>
              <h2 className="md:text-4xl text-3xl text-white font-bold mt-3">
                Movers and Packers in UAE{" "}
                <span className="font-normal">We Cover Every Emirate</span>{" "}
              </h2>
            </div>
            <div>
              <p className="text-gray-200">
                One moving company for all seven emirates. Whether you need
                movers in Dubai, Abu Dhabi, Sharjah, or anywhere else in the UAE
                — we are the same team, with the same pricing policy and the
                same standards.
              </p>
              <Button whatsappBtn variant={"secondary"} className="mt-5">
                <MessageCircleCheck /> Get A Quote on WhatsApp
              </Button>
            </div>
          </div>
          <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-5 gap-8">
            {locations.map((location, i) => (
              <div
                key={i}
                id={location.title.toLowerCase().replace(/\s+/g, "-")}
                className="rounded-2xl p-5 bg-white/5 "
              >
                <h3 className="text-lg leading-tight font-medium text-white">
                  <Link href={location.href}>{location.title}</Link>
                </h3>
                <p className="mt-2 text-white/80 leading-tight text-[15px]">
                  {location.description}
                </p>
                <Button
                  variant={"link"}
                  link={location.href}
                  title={`get a quote from ${location.title}`}
                  className="mt-3 text-muted"
                >
                  Get A Moving Quote <ChevronRight />
                </Button>
              </div>
            ))}
          </div>
          <p className="md:text-xl text-lg text-white max-w-2xl text-center mx-auto mt-10">
            Cross-emirate moves are part of our daily work — Dubai to Sharjah,
            Abu Dhabi to Al Ain, Ajman to Fujairah. One quote, one team, one
            move.
          </p>
        </section>
        <Commercial />
        <section
          id="best-moving-company-in-uae "
          className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2 grid-cols-1 gap-10 md:px-10 px-4 items-center"
        >
          <div className=" grid md:grid-cols-2 grid-cols-1 gap-5 md:order-1 order-2">
            {[
              {
                title: "Restaurants & F&B Outlets",
                desc: "Kitchen equipment, commercial counters, refrigeration units, and dining furniture — we know how to pack and move it safely.",
                icon: <HotelIcon strokeWidth={1} size={35} />,
              },
              {
                title: "Hospitals & Medical Clinics",
                desc: "Sensitive and expensive medical equipment handled with care. Sterile items packed correctly. No improvisation.",
                icon: <Hospital strokeWidth={1} size={35} />,
              },
              {
                title: "Banks & Financial Offices",
                desc: "Heavy safes, document storage, and confidential equipment. We take the security of your items seriously.",
                icon: <Building2 strokeWidth={1} size={35} />,
              },
              {
                title: "Schools & Universities ",
                desc: "Classroom furniture, lab benches, library shelves, and IT equipment. Bulk moves handled efficiently.",
                icon: <University strokeWidth={1} size={35} />,
              },
              {
                title: "Warehouses & Industrial Facilities  ",
                desc: "Heavy-duty machinery relocation with the right equipment and trained riggers.",
                icon: <Warehouse strokeWidth={1} size={35} />,
              },
              {
                title: "Corporate Offices ",
                desc: "Workstations, meeting room furniture, reception areas, IT infrastructure — packed and moved without unnecessary downtime.",
                icon: <BriefcaseBusiness strokeWidth={1} size={35} />,
              },
            ].map((ind, i) => (
              <div key={i} className="flex items-center gap-x-3">
                <div className="bg-foreground text-white  w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center">
                  {ind.icon}
                </div>
                <div>
                  <h3 className=" font-medium ">{ind.title}</h3>
                  <p className="text-muted-foreground leading-tight text-sm mt-1">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="text-lg text-muted-foreground mt-5 col-span-full leading-tight">
              <p>
                Before you book any commercial mover, check their website, meet
                the owner, and verify their Google Business profile.
              </p>
              <p className="mt-1">
                A legitimate company will have nothing to hide. We have all of
                that — and we have been legally operating since 1998.
              </p>
            </div>
          </div>
          <div className="md:order-2 order-1">
            {" "}
            <p className="font-medium border-b-2 border-primary w-max uppercase">
              industries
            </p>
            <h2 className="md:text-4xl text-3xl font-bold mt-3 ">
              {" "}
              <span className="md:block font-normal">Industries We</span> Work
              With in The UAE
            </h2>
            <div className="bg-muted aspect-video mt-8 overflow-hidden relative">
              <Image
                src={"/Moving-Company-Based-in-Dubai.jpg"}
                alt="Best Moving Company Based in Dubai UAE"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
        <div className="md:bg-secondary max-w-7xl mx-auto mt-20 rounded-2xl md:p-10 px-6 py-2 grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-8">
          <div>
            <p className="uppercase border-b border-primary text-primary w-max">
              How We Charge
            </p>
            <h2 className="md:text-4xl text-3xl mt-3 font-bold">
              Our Payment Methods{" "}
              <span className="font-normal md:block">
                {" "}
                For Moving Services in UAE
              </span>{" "}
            </h2>
            <div className="h-12 w-72 mt-5 relative items-center ">
              <Image
                fill
                src={"/payment-methords-for-moving-services.png"}
                alt="Payment Methods For Moving Services in UAE"
                className="object-contain "
              />{" "}
            </div>
          </div>
          <div>
            <p className="text-muted-foreground">
              We accept cash, online bank transfer, and bank cheque. Payment is
              made after the job is completed — not before. You see the work,
              you are satisfied with it, then you pay.
            </p>
            <h3 className="text-lg font-medium mt-2">Need to move today?</h3>
            <p className="text-muted-foreground">
              Same-day service is available. Contact us, describe your
              situation, and we will tell you what we can arrange.
            </p>
            <Button callBtn size={"lg"} className="mt-5">
              <PhoneCall /> Contact Us Now
            </Button>
          </div>
        </div>
        <FAQSection
          title="Frequently Asked Questions — Movers and Packers in UAE"
          subtitle="Find quick answers to your questions about our UAE relocation services."
          faqs={HomePageFAQs}
        />
        <section
          id="about-movers-and-packers-in-uae"
          className=" max-w-4xl mx-auto md:px-0 px-4"
        >
          <h2 className="text-3xl font-bold ">
            About Our Moving Company — Registered, Experienced, Locally Trusted
          </h2>

          <div className="text-muted-foreground mt-5 leading-tight flex flex-col gap-y-2">
            <p>
              We started in 1998. Not as a small side operation — as a
              registered moving company with a legal trade licence, a proper
              fleet, and a trained team. That was when most of the freelance
              movers you see advertising today didn&apos;t exist yet.
            </p>

            <p>
              Our headquarters is in 16 13 St, Ras Al Khor Industrial Area 1 -
              Dubai, Dubai, and we cover all seven emirates. Over the past 25+
              years, we&apos;ve completed thousands of moves — houses, villas,
              apartments, offices, warehouses, hospitals, schools, and
              restaurants. We know what can go wrong on a move, because
              we&apos;ve seen it happen, and we&apos;ve built our process around
              preventing it.
            </p>

            <p>
              Our philosophy is straightforward: protect your items, respect
              your privacy, and charge you honestly. Those aren&apos;t marketing
              lines. They&apos;re the reason people call us back and refer us to
              others.
            </p>

            <p>
              You can verify us on Google Maps. Our business profile is listed,
              our address is real, and our reviews are from actual customers.
            </p>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5">
              <div>
                <h3 className="text-lg font-medium mt-2">Our Moving Fleet</h3>
                <ul className="list-inside list-disc">
                  <li>
                    RTA-approved vehicles, road-legal across all UAE emirates
                  </li>
                  <li>Fully enclosed box trucks (3-ton and 4-ton capacity)</li>
                  <li>Open trucks available for local furniture shifts</li>
                  <li>All vehicles maintained and insured</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mt-2">Our Team</h3>
                <ul className="list-inside list-disc">
                  <li>
                    Certified carpenters for furniture dismantling and
                    reassembly
                  </li>
                  <li>
                    Trained packing staff using professional-grade materials
                  </li>
                  <li>
                    Electricians and handymen for post-move installation work
                  </li>
                  <li>
                    English and Arabic speaking throughout — no communication
                    gaps
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
