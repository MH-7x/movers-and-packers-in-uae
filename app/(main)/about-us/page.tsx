import { Star, Truck } from "lucide-react";
import heroImage from "@/public/about-us-professional-movers-packers-team-dubai-uae.jpg";
import Image from "next/image";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "About Us | Movers and Packers in UAE Since 1998",
      desc: "About our moving company in UAE. Licensed since 1998, we provide house, villa, office & furniture moving. Transparent pricing, no hidden charges.",
    },
    image: {
      path: "/about-us-professional-movers-packers-team-dubai-uae.jpg",
      alt: "Movers and Packers in uae professional moving team standing confidently in front of a branded company truck with the Dubai skyline in the background",
    },
    path: "/about-us",
  },
});

const AboutUsPage = () => {
  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "About Us ",
        url: "/about-us",
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
        <Breadcrumb list={[
      {
        title: "About Us ",
        url: "/about-us",
      },
    ]} />
        <section className="max-w-7xl mx-auto md:px-10 px-4 mt-20 w-full">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
            {/* Left Large Image Placeholder */}
            <div className="w-full lg:w-[42%] relative overflow-hidden bg-gray-100 rounded-sm min-h-100 lg:min-h-full flex items-center justify-center md:order-1 order-2">
              <Image
                src={heroImage}
                alt="Movers and Packers in uae professional moving team standing confidently in front of a branded company truck with the Dubai skyline in the background"
                loading="eager"
                placeholder="blur"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Content Section */}
            <div className="w-full lg:w-[58%] flex flex-col justify-center py-4 md:order-2 order-1">
              {/* Subtitle */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1.5 h-1.5 bg-[#e32726]"></div>
                <span className="text-gray-500 uppercase tracking-[0.15em] text-xs font-bold">
                  About Our Company
                </span>
              </div>

              {/* Separator Line */}
              <hr className="w-full border-t border-gray-200 mb-8" />

              {/* Main Heading */}
              <h1 className="text-4xl md:text-[52px] font-bold text-[#0f172a] leading-[1.15] mb-12 tracking-tight">
                <span className="font-normal">Movers and Packers in UAE</span>{" "}
                <br className="hidden md:block" />
                You Can Actually Trust
              </h1>

              {/* Split Content Area */}
              <div className="flex flex-col md:flex-row gap-3">
                {/* Text and Stats Column */}
                <div className="flex-1 flex flex-col">
                  <p className="text-muted-foreground text-[15px] leading-[1.8] mb-3 pr-4 lg:pr-10">
                    We are Movers and Packers in UAE, a fully registered moving
                    company based in Ras Al Khor Industrial Area, Dubai.
                  </p>
                  <p className="text-muted-foreground text-[15px] leading-[1.8] mb-12 pr-4 lg:pr-10">
                    We have been handling moves across the UAE since 1998 — that
                    is over 25 years in the same business, doing the same job,
                    for real people with real belongings.
                  </p>

                  {/* Stats Row */}
                  <div className="flex flex-row gap-8 sm:gap-12 mt-auto">
                    {/* Stat 1 */}
                    <div className="flex-1">
                      <div className="flex items-baseline mb-5">
                        <span
                          className="text-[56px] sm:text-[68px] font-black leading-none"
                          style={{
                            WebkitTextStroke: "1.5px #64748b",
                            WebkitTextFillColor: "transparent",
                            color: "transparent",
                          }}
                        >
                          25
                        </span>
                        <span className="text-[44px] sm:text-[52px] font-black leading-none text-[#e32726] ml-1">
                          +
                        </span>
                      </div>
                      <hr className="w-full border-t border-gray-200 mb-4" />
                      <p className="text-[11px] font-bold text-[#1e293b] uppercase tracking-wider leading-[1.6]">
                        Years of Moving
                        <br />
                        Experience
                      </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex-1">
                      <div className="flex items-baseline mb-5">
                        <span
                          className="text-[56px] sm:text-[68px] font-black leading-none"
                          style={{
                            WebkitTextStroke: "1.5px #64748b",
                            WebkitTextFillColor: "transparent",
                            color: "transparent",
                          }}
                        >
                          16
                        </span>
                        <span className="text-[44px] sm:text-[52px] font-black leading-none text-[#e32726] ml-1">
                          k
                        </span>
                      </div>
                      <hr className="w-full border-t border-gray-200 mb-4" />
                      <p className="text-[11px] font-bold text-[#1e293b] uppercase tracking-wider leading-[1.6]">
                        We&apos;re Trusted By
                        <br />
                        More Clients
                      </p>
                    </div>
                  </div>
                </div>

                {/* Small Image Placeholder (Right Side) */}
                <div className="w-full md:w-60 lg:w-70 shrink-0 mt-8 md:mt-0">
                  <div className="w-full h-70 md:h-full min-h-70 bg-gray-100 rounded-sm flex items-center justify-center relative overflow-hidden">
                    <Image
                      src={"/movers-packers-client-handshake-dubai-uae.jpg"}
                      alt="Movers & Packers team member shaking hands with a satisfied client at the entrance of a modern Dubai residential building"
                      loading="eager"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto md:px-10 px-4 mt-32 grid md:grid-cols-2 grid-col-1 items-center md:gap-20">
          <div className="bg-secondary rounded-3xl aspect-square relative overflow-hidden md:order-1 order-2">
            <Image
              src={"/movers-and-packers-in-uae-svg.svg"}
              alt="Movers and packers in uae svg"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:order-2 order-1">
            <p className="md:text-3xl text-2xl font-bold">
              We are not a freelance operation with just a phone number and a
              pickup truck.
            </p>
            <p className="mt-5 text-muted-foreground">
              We are a legally registered company with branded trucks, trained
              staff, and a clear pricing system.
            </p>
            <p className="mt-2 text-muted-foreground">
              If you want to know who is coming into your home or office to
              handle your move, you can check our Google Business Profile, meet
              the owner, or simply call us and ask anything.
            </p>
            <div className="mt-10 flex flex-col gap-y-5">
              <div className="flex items-center md:gap-x-10 gap-x-5">
                <div className="w-16 h-16 shrink-0 bg-white shadow-lg rounded-full flex items-center justify-center">
                  <Truck className="text-primary" size={30} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-lg">
                    1000 + Moves Completed
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    We have completed 1000+ moves for our clients. We are
                    passionate about moving and making your move stress-free.
                  </p>
                </div>
              </div>
              <div className="flex items-center md:gap-x-10 gap-x-5">
                <div className="w-16 h-16 shrink-0 bg-white shadow-lg rounded-full flex items-center justify-center">
                  <Star className="text-primary" size={30} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-lg">
                    5 Stars Reviews on Google
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    We have received 5 stars reviews on Google. We are committed
                    to providing the best service to our clients in UAE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto md:px-10 px-4 mt-20 p-16 bg-foreground rounded-3xl">
          <h2 className="md:text-4xl text-3xl text-center font-bold text-white w-max mx-auto px-10 pb-2 border-b-2 border-primary">
            Our Story
          </h2>
          <p className="mt-10 text-lg text-white/80">
            The company was founded in 1998. Back then, most of the freelance
            movers you see on WhatsApp today did not even exist. The owner
            started with a small team and a clear idea: move people&apos;s
            things carefully, charge fairly, and show up when promised.
          </p>
          <div className="grid md:grid-cols-2 gird-cols-1 gap-5 md:mt-10 mt-5 text-white/80">
            <p>
              Over the years, we have completed thousands of moves across Dubai,
              Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Al Ain, Umm Al Quwain,
              Fujairah, Khor Fakkan, and Al Ruwais. The work is the same: pick
              up, pack, move, deliver — but done right.
            </p>
            <p className="md:border-l md:border-t-transparent border-t md:pl-5 md:pt-0 pt-5">
              We built the company around two things: protection of your
              belongings and privacy while we are inside your space. Those are
              not just words on a website — they are what we think about every
              time we send a team into someone&apos;s home.
            </p>
          </div>
        </section>

        <ServicesSection />
        <section
          id="best-moving-company-in-uae "
          className="max-w-7xl mx-auto mt-32 grid md:grid-cols-2 grid-cols-1 gap-10 md:px-10 px-4 items-center"
        >
          <div>
            {" "}
            <p className="font-medium border-b-2 border-primary w-max uppercase">
              Work Process
            </p>
            <h2 className="md:text-4xl text-3xl font-bold mt-3 ">
              {" "}
              <span className="md:block font-normal">How We Work</span> Easy &
              Quick Moving Process
            </h2>
            <div className="bg-muted aspect-video mt-8 relative overflow-hidden">
              <Image
                src={"/moving-company-uae-truck-in-dubai-road.jpg"}
                alt="Moving Company in UAE truck in Dubai Road"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:pt-10 text-muted-foreground md:text-lg">
            <p className="font-medium ">
              The process is simple. You reach out — by phone, WhatsApp, or the
              quote form on our website.
            </p>
            <p className=" mt-2">
              You describe your move. We send you a detailed quote on WhatsApp
              and email with everything written clearly. No hidden charges. If
              the quote says 1,000 AED, that is what you pay. Not a dirham more.
            </p>
            <p className=" mt-2">
              We also offer same-day service. If you just arrived in the UAE or
              your move is urgent, call us and we will work out the fastest
              option available.
            </p>
            <p className=" mt-2">
              And you pay after the job is done. We do not ask for money upfront
              and disappear. Once the move is complete and you are satisfied,
              you pay — by cash, bank transfer, or cheque.
            </p>
            <Button quoteBtn className="mt-5" size={"lg"}>
              <Truck /> Book Your Move Now
            </Button>
          </div>
        </section>
        <section className="max-w-4xl mx-auto md:px-10 px-4 mt-32">
          <h2 className="md:text-4xl text-3xl font-bold text-center">
            Our Professional and Trained Movers Team
          </h2>
          <div className="mt-5 md:text-lg text-muted-foreground flex flex-col gap-y-2 text-center">
            <p className="">
              Every person on our team is trained in packing, loading, and
              handling. They speak English and Arabic, so communication on the
              day of the move is not a problem.
            </p>
            <p>
              We understand that letting strangers into your home — especially
              into bedrooms and kitchen areas where personal items are kept —
              requires trust. That is why we take vetting seriously and have
              kept the same professional standards since the company started.
            </p>
            <p>We are available any time, and we cover all UAE emirates.</p>
          </div>
        </section>
        <section className="max-w-4xl mx-auto md:px-10 px-4 mt-20">
          <h2 className="md:text-4xl text-3xl font-bold text-center">
            Where We Operate
          </h2>
          <div className="mt-5 md:text-lg text-muted-foreground flex flex-col gap-y-2 text-center">
            <p className="">We cover the entire UAE. You can reach us from:</p>
            <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-5 my-5 text-base">
              {[
                { title: "Dubai", link: "/" },
                { title: "Abu Dhabi", link: "/" },
                { title: "Sharjah", link: "/movers-and-packers-in-sharjah" },
                { title: "Ajman", link: "/movers-in-ajman" },
                { title: "Ras Al Khaimah", link: "/movers-in-ras-al-khaimah" },
                { title: "Al Ain", link: "/movers-in-al-ain" },
                { title: "Umm Al Quwain", link: "/movers-in-umm-al-quwain" },
                { title: "Fujairah", link: "/movers-in-fujairah" },
                { title: "Khor Fakkan", link: "/" },
                { title: "Al Ruwais", link: "/" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="bg-red-100 text-primary p-1 rounded-2xl"
                >
                  <Link href={item.link} title={`movers in ${item.title}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p>
              One call or WhatsApp message is all it takes to get started, no
              matter which emirate you are in.
            </p>
          </div>
        </section>
        <section className="max-w-4xl mx-auto md:px-10 px-4 mt-20">
          <h2 className="md:text-4xl text-3xl font-bold text-center">
            Why People Choose Us Over Freelance Movers
          </h2>
          <div className="mt-5 md:text-lg text-muted-foreground flex flex-col gap-y-2 text-center">
            <p className="">
              There are a lot of people offering moving services in the UAE on
              WhatsApp and random websites. Most of them have no licence, no
              fixed address, and no accountability. If something goes wrong,
              they are gone.
            </p>
            <p>
              We are different not because we say so, but because we have a
              paper trail.
            </p>
            <p>
              We have a physical office address You can check everything before
              you hire us — and we encourage you to.
            </p>
            <p>
              For businesses — restaurants, banks, hospitals, offices — hiring a
              non-licensed mover for commercial equipment is a real risk. We are
              fully authorized to move that kind of property. You are covered.
            </p>
          </div>
        </section>
        <FAQSection
          title="Frequently Asked Questions About Us"
          faqs={AboutUSFaqs}
        />
        <CTA
          title="Get a Free Quote From Movers and Packers in UAE"
          desc="If you are planning a move — whether it is next week or tomorrow — reach out. Call us, send a WhatsApp, or fill in the quote form on our website. We will respond quickly with a clear, itemized quote."
        />
        <h3 className="mt-10 md:text-3xl text-lg font-bold text-center max-w-4xl mx-auto md:px-0 px-4">
          We are based in Dubai, registered since 1998, and available across all
          UAE emirates. Moving is stressful enough on its own — the company you
          choose should not add to that stress.
        </h3>
      </main>
    </>
  );
};

export default AboutUsPage;

import { Home, Building2, Wrench, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import { AboutUSFaqs } from "@/lib/FaqsData";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Link from "next/link";

import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import { Breadcrumb } from "@/components/Breadcrumb";
const servicesData = [
  {
    title: "Residential Moving",
    icon: Home,
    description: "Seamless transitions for your personal living spaces.",
    items: [
      "House moving",
      "Villa moving",
      "Apartment moving",
      "Flat shifting",
      "Single item or furniture-only moves",
    ],
    links: [
      "/house-shifting-dubai",
      "/villa-movers-in-dubai",
      "/apartment-movers-dubai",
      "/apartment-movers-dubai",
      "/single-furniture-moving-uae",
    ],
  },
  {
    title: "Commercial and Office Moving",
    icon: Building2,
    description: "Efficient relocation with minimal business downtime.",
    items: [
      "Office relocation",
      "Restaurant furniture moving",
      "Bank furniture moving",
      "Hospital equipment moving",
      "School furniture moving",
      "Warehouse moving",
      "Industrial machinery shifting",
    ],
    links: [
      "/office-movers-in-dubai",
      "/restaurant-furniture-moving-uae",
      "/bank-furniture-moving-uae",
      "/hospital-furniture-moving-uae",
      "/school-furniture-moving-uae",
      "/",
      "/",
    ],
  },
  {
    title: "Specialist and Add-On Services",
    icon: Wrench,
    description: "Comprehensive solutions for unique moving needs.",
    items: [
      "Packing services (partial or full)",
      "Storage services — both short-term and long-term",
      "Self-storage options",
      "Furniture storage",
      "Curtain fixing and installation",
      "Heavy safe moving",
      "Cargo handling",
    ],
    links: ["/packing-services-in-dubai", "/", "/", "/", "/", "/", "/"],
  },
];

const ServicesSection = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto md:px-10 px-4 mt-32">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-sm font-bold tracking-wide text-primary uppercase mb-3">
            What We Do
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            We handle all types of <br className="hidden md:block" /> moves in
            the UAE.
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Residential, commercial, and specialist. Here is a full look at what
            we cover:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]  flex flex-col"
              >
                {/* Card Header with Icon */}
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>

                <h4 className="text-xl font-bold mb-2">{service.title}</h4>

                {/* Divider Line */}
                <div className="w-12 h-1 bg-blue-100 rounded-full mb-6"></div>

                {/* List Items */}
                <ul className="space-y-4 grow">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start group">
                      <span className="w-5 h-5 text-foreground/50 mr-3 mt-0.5 shrink-0 transition-transform group-hover:scale-110">
                        ✔
                      </span>
                      <Link
                        href={service.links[itemIndex]}
                        className="text-slate-600 font-medium text-sm leading-relaxed"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-10 lg:mt-24 bg-primary rounded-3xl">
          <div className="relative p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Need something specific?
              </h4>
              <p className="text-white/90 md:text-lg md:leading-relaxed max-w-2xl">
                If you have something specific that is not listed here, contact
                us and describe your need. We offer customized moving plans
                based on what you actually require.
              </p>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <Link
                href="tel:+971507745691"
                title="Contact Movers and Packers in UAE"
              >
                <button className="w-full cursor-pointer lg:w-auto inline-flex items-center justify-center bg-white font-bold md:px-8 px-4 md:py-4 py-3 rounded-xl md:text-lg">
                  <PhoneCall className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Contact Us Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
