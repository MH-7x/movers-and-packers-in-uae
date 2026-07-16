import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import { LocHeroSection } from "@/components/LocHeroSection";
import MovingProcess from "@/components/MovingProcess";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import { Button } from "@/components/ui/button";
import { UmmAlQuwainMovingFAQs } from "@/lib/FaqsData";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import heroImage from "@/public/loc/movers-umm-al-quwain-professional-moving-service-khor-al-beidah-lagoon.jpg";
import { MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";


export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers in Umm Al Quwain | Trusted Movers & Packers",
      desc: "Professional movers in Umm Al Quwain. House, villa & office relocation with no hidden fees. RTA-approved trucks & 25+ years experience. Get a free quote now!",
    },
    image: {
      path: "/loc/movers-umm-al-quwain-professional-moving-service-khor-al-beidah-lagoon.jpg",
      alt: "Movers and Packers in UAE professional team loading wrapped furniture and boxes into a branded enclosed moving truck outside a residential villa in Umm Al Quwain with the Khor Al Beidah lagoon visible in the background",
    },
    path: "/movers-in-umm-al-quwain",
  },
});

const MoversInUmmAlQuwain = () => {
  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "Movers in Umm Al Quwain",
        url: "/movers-in-umm-al-quwain",
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
        title: "Movers in Umm Al Quwain",
        url: "/movers-in-umm-al-quwain",
      },
    ]} />
        <LocHeroSection
          h1={
            <>
              Movers in Umm Al Quwain <br className="block" />
              <span className="font-normal">
                Professional, Trusted & Affordable
              </span>
            </>
          }
          desc={
            <>
              <p>
                Finding good movers in Umm Al Quwain is harder than it should
                be. You search online, get a few numbers, and half of them turn
                out to be freelancers with no license, no proper moving truck, and no
                accountability. If something breaks or goes missing,
                there&apos;s nobody to call back.
              </p>
              <p>
                At Movers and Packers in UAE, we&apos;ve been doing this since
                1998 as a trusted moving company in the uae. We&apos;re a registered relocation service and moving company in Umm Al Quwain —
                not a WhatsApp number that disappears once the job is done.
              </p>
            </>
          }
          id="movers-in-umm-al-quwain"
          img={{
            src: heroImage,
            alt: "Movers and Packers in UAE professional team loading wrapped furniture and boxes into a branded enclosed moving truck outside a residential villa in Umm Al Quwain with the Khor Al Beidah lagoon visible in the background",
          }}
        />

        <section className="mt-20 max-w-4xl mx-auto md:px-0 px-4">
          <p className="md:text-2xl text-xl font-bold text-center">
            Our team handles everything from a single sofa to a full villa move
            across UAQ, using RTA-approved trucks, high quality packing materials, and a price that doesn&apos;t change after we quote it.
          </p>
          <p className="text-center mt-5 text-muted-foreground">
            Call or WhatsApp us for a FREE moving quote in Umm Al Quwain ·
            Same-day response · No hidden charges · No commitment
          </p>
        </section>
        <QuotationSection
          title={
            <>
              <span className="font-bold md:block">Get A Moving Quote</span>{" "}
              From Movers and Packers in Umm Al Quwain
            </>
          }
          btnText="Get A Quote From Movers in umm al quwain"
          desc="Call us or send a WhatsApp message for a free quote — our movers and packers in umm al quwain will get back to you quickly with a clear, fixed price. We handle everything, from packing and loading to transport and installation. "
        />

        <section
          id="movers-and-packers-services-in-umm-al-quwain"
          className="max-w-7xl mx-auto mt-20 md:px-10 px-4"
        >
          {/* Main Header Section */}
          <div className="text-center mb-10 max-w-4xl mx-auto">
            <h2 className="md:text-4xl text-3xl font-bold mb-6">
              <span className="font-normal block">
                Moving Services We Offer{" "}
              </span>{" "}
              in Umm Al Quwain
            </h2>
            <p className="text-muted-foreground">
              We cover all types of residential and commercial moves across UAQ.
              Below is a breakdown of what we handle — but if your situation
              doesn&apos;t fit neatly into any category, just call and describe
              what you need. We&apos;ll figure it out.
            </p>
          </div>

          {/* CSS Grid Section - 1 col on mobile, 2 cols on lg screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {movingServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl py-8 px-5 sm:p-10 flex flex-col "
              >
                {/* Decorative Accent Line */}
                <div className="w-12 h-1.5 bg-primary rounded-full mb-6"></div>

                {/* Card Content */}
                <div className="grow">
                  <h3 className="md:text-2xl text-xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <div className="text-muted-foreground mb-5 flex flex-col gap-y-1.5">
                    {service.desc}
                  </div>
                </div>

                {/* Action Link positioned at the bottom */}
                <div className="mt-auto pt-5 border-t border-slate-100">
                  <Button
                    variant={"ghost"}
                    title={"contact us for " + service.title.toLowerCase()}
                    aria-label={"contact us for " + service.title.toLowerCase()}
                    className="text-primary font-semibold inline-flex items-center text-sm uppercase tracking-wide "
                  >
                    Contact Us Now
                    <span className="ml-2  text-lg leading-none">&rarr;</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-foreground rounded-3xl mt-5 text-white p-6 sm:p-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">
                Not sure what services you need?
              </h3>
              <p className="text-emerald-100">
                WhatsApp us, describe your situation, and we&apos;ll put
                together the right quote.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button whatsappBtn size="lg" variant={"secondary"}>
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </Button>
              <Button callBtn size="lg">
                <PhoneCall className="w-5 h-5" />
                <span>Call Now</span>
              </Button>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto mt-20 md:px-0 px-4 gap-5 grid md:grid-cols-2 grid-cols-1">
          <div className="col-span-full max-w-3xl mb-10">
            <h2 className="md:text-4xl text-3xl font-bold">
              Why We&apos;re the Best Movers and Packers in Umm Al Quwain
            </h2>
            <p className="text-muted-foreground mt-3">
              There are plenty of companies offering moving options in UAQ. Here&apos;s what
              actually separates us from the rest — and why customers who do
              their research tend to come back to us.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              25+ Years of Experience in the Moving Industry
            </h3>
            <div className="text-muted-foreground flex flex-col gap-y-1 mt-2">
              <p>
                We started in 1998. Most of the freelance movers you&apos;ll
                find online didn&apos;t exist then. Our team has completed
                thousands of moves across all Emirates — homes, offices,
                warehouses, clinics, and everything in between.
              </p>
              <p>
                That kind of track record shows in how the job gets done: fewer
                surprises, faster handling, and better problem-solving when
                something unexpected comes up on moving day.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              The Price We Quote Is the Price You Pay
            </h3>
            <div className="text-muted-foreground flex flex-col gap-y-1 mt-2">
              <p>
                We quote you AED 1,000, you pay AED 1,000. No fuel surcharge
                added at the end. No extra packing fee added later that was
                never mentioned. No surprise floor-access cost on moving day.
              </p>
              <p>
                Our quotes are sent in writing — via WhatsApp or email — so
                everything is documented before a single item gets touched.
              </p>
              <p>
                Most movers and packers in Umm Al Quwain give a verbal estimate
                and adjust it once the truck arrives. We don&apos;t.
              </p>
            </div>
          </div>

          <div className="col-span-full">
            <h3 className="text-2xl font-bold">
              RTA-Approved Trucks — Enclosed and Open
            </h3>
            <div className="text-muted-foreground flex flex-col gap-y-1 mt-2">
              <p>
                Our fleet includes both fully enclosed box trucks (3-ton and
                4-ton, RTA-approved) and open trucks, all regularly maintained
                and clean.
              </p>

              <p>
                For most moves in UAQ — especially villas and apartments with
                furniture and electronics — we recommend the enclosed trucks.
                UAQ&apos;s summer heat and sandstorms can damage upholstered
                furniture, wooden surfaces, and electronics during even a short
                drive.
              </p>
              <p>
                For lighter loads or simple furniture-to-furniture shifts where
                exposure isn&apos;t a concern, the open truck is a practical and
                cost-effective option. We&apos;ll recommend the right one for
                your specific move.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              You Pay Only When You&apos;re Satisfied
            </h3>
            <div className="text-muted-foreground flex flex-col gap-y-1 mt-2">
              <p>
                We collect payment after the job is done and you&apos;re happy
                with the result. This is our standard policy — not a special
                offer, not a promotion. If there&apos;s a problem, we talk about
                it before we ask for anything.
              </p>

              <p>
                This is the difference between hiring a registered company and
                hiring a freelancer with a pickup truck. One has dedicated customer services and something to
                lose if the job goes badly. The other doesn&apos;t.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              Same-Day Moving Available in Umm Al Quwain
            </h3>
            <div className="text-muted-foreground flex flex-col gap-y-1 mt-2">
              <p>
                If you need to move urgently — your contract ended, you just
                landed in the UAE, or your timeline got pushed forward — we can
                arrange a same-day move in Umm Al Quwain.
              </p>

              <p>
                Call us, describe your situation, and we&apos;ll work out the
                fastest practical option. This is part of our 24/7 availability,
                not an added premium.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              Trained Team — English & Arabic Communication
            </h3>
            <div className="text-muted-foreground flex flex-col gap-y-1 mt-2">
              <p>
                Our carpenters, packing helpers, electricians, and handymen are
                trained in professional moving techniques. They know how to lift
                heavy items safely, wrap fragile pieces correctly, and
                reassemble furniture without stripping screws or splitting
                panels.
              </p>

              <p>
                The team communicates in English and Arabic. No language barrier
                when you&apos;re explaining how you want your new bedroom
                arranged.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              Protection & Privacy — A Core Policy, Not a Marketing Line
            </h3>
            <div className="text-muted-foreground flex flex-col gap-y-1 mt-2">
              <p>
                Letting strangers into your home to pack your bedroom and
                kitchen is not a small thing. You&apos;re trusting us with
                spaces that matter.
              </p>

              <p>
                Our Protection & Privacy policy shapes how we train our team and
                how we operate every move. Your belongings are handled with care
                and discretion.
              </p>
              <p>
                Nothing gets moved without your knowledge. Our team is
                background-checked and has been working with us for years — not
                hired off the street the morning of your move.
              </p>
            </div>
          </div>
        </section>
        <MovingProcess
          title={
            <>
              How Our Moving Process
              <span className="md:block font-normal">
                Works in Umm Al Quwain
              </span>
            </>
          }
          desc="To make your moving process as smooth as possible, here is what happens from the moment you contact us to the moment we hand over the keys and collect payment:"
        />
        <ReviewSection reviews={googleReviews} />
        <section className="mt-20 max-w-7xl md:px-10 px-4 mx-auto">
          <h2 className="md:text-4xl text-3xl font-bold text-center">
            Areas We Serve in Umm Al Quwain{" "}
            <span className="font-normal md:block">and Nearby Emirates</span>
          </h2>
          <h3 className="md:text-2xl text-xl font-bold text-center mt-10">
            Neighborhoods We Cover in UAQ
          </h3>
          <p className="text-muted-foreground mt-3 text-center max-w-2xl mx-auto">
            We provide moving services throughout Umm Al Quwain. Our team is
            familiar with access routes, building regulations, and local
            logistics across all major areas of the emirate, including:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
            {[
              {
                t: "Movers in Al Raas Umm Al Quwain",
                l: "#",
              },
              {
                t: "Movers in Al Salamah Umm Al Quwain",
                l: "#",
              },
              {
                t: "Movers in Al Maqta Umm Al Quwain",
                l: "#",
              },
              {
                t: "Movers in Al Khor Umm Al Quwain",
                l: "#",
              },
              {
                t: "Movers in Al Madar Umm Al Quwain",
                l: "#",
              },
              {
                t: "Movers in Al Raudah Umm Al Quwain",
                l: "#",
              },
              {
                t: "Movers in Al Ittihad Umm Al Quwain",
                l: "#",
              },
              {
                t: "Movers in UAQ Industrial Area Umm Al Quwain",
                l: "#",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white text-foreground  px-4 border py-2 text-sm rounded-4xl flex items-center gap-2"
              >
                <span className="text-primary"> ✔</span>{" "}
                {/* <Link href={t.l}>{t.t} </Link> */}
                <p>{t.t} </p>
              </div>
            ))}
          </div>

          <h3 className="md:text-2xl text-xl font-bold text-center mt-10">
            Inter-Emirate Moves from Umm Al Quwain
          </h3>
          <p className="text-muted-foreground mt-3 text-center max-w-3xl mx-auto">
            Moving from UAQ to another emirate? We handle inter-emirate
            relocations with the same process and the same pricing transparency
            as local UAQ moves.
          </p>
          <p className="text-muted-foreground mt-3 text-center max-w-3xl mx-auto">
            We regularly move between Umm Al Quwain and Dubai, Sharjah, Ajman,
            Ras Al Khaimah, Al Ain, Abu Dhabi, Fujairah, and Khor Fakkan.
          </p>
          <p className="text-muted-foreground mt-3 text-center max-w-3xl mx-auto">
            The distance affects the quote — it won&apos;t affect the quality of
            the job.
          </p>
        </section>

        <section className="max-w-7xl mt-20 md:px-10 px-4 mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 bg-foreground text-white">
            <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-red-300 font-semibold tracking-wider uppercase text-sm mb-3">
                Pricing Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Moving Costs in Umm Al Quwain
                <br />
                <span className="text-red-400 font-medium">
                  — Transparent & Affordable Pricing
                </span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                We don&apos;t publish fixed rates because every move is
                different. A studio apartment and a five-bedroom villa are not
                the same job, and quoting both at the same price would be
                misleading.
              </p>
            </div>
            <div className="lg:col-span-2 aspect-4/3 relative overflow-hidden">
              <Image
                src={"/loc/moving-prices-in-umm-al-quwain.jpg"}
                alt="Movers and packers in umm al quwain prices"
                fill
                className="object-cover opacity-90 mix-blend-overlay"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-50 rounded-lg text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  What Affects Your Moving Cost in UAQ?
                </h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 text-foreground shrink-0">✓</span>
                  <span className="text-slate-600">
                    <strong className="text-slate-800 font-medium">
                      The number and size
                    </strong>{" "}
                    of items being moved
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 text-foreground shrink-0">✓</span>
                  <span className="text-slate-600">
                    <strong className="text-slate-800 font-medium">
                      Property type:
                    </strong>{" "}
                    studio, apartment, villa, office, or warehouse
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 text-foreground shrink-0">✓</span>
                  <span className="text-slate-600">
                    <strong className="text-slate-800 font-medium">
                      Distance:
                    </strong>{" "}
                    local UAQ move or inter-emirate relocation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 text-foreground shrink-0">✓</span>
                  <span className="text-slate-600">
                    <strong className="text-slate-800 font-medium">
                      Truck type:
                    </strong>{" "}
                    fully enclosed box truck or open truck
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 text-foreground shrink-0">✓</span>
                  <span className="text-slate-600">
                    <strong className="text-slate-800 font-medium">
                      Additional services:
                    </strong>{" "}
                    packing, storage, curtain installation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 text-foreground shrink-0">✓</span>
                  <span className="text-slate-600">
                    <strong className="text-slate-800 font-medium">
                      Timing:
                    </strong>{" "}
                    standard booking or same-day urgent service
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-50 rounded-lg text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  How We Charge — No Surprises
                </h3>
              </div>

              <div className="space-y-5 text-slate-600">
                <p>
                  Once we know the details of your move, we send you a{" "}
                  <strong className="text-slate-800 font-medium">
                    full itemized quote via WhatsApp or email
                  </strong>
                  . That number is what you pay — nothing added on the day the
                  truck arrives.
                </p>

                <div className="bg-red-50 p-4 rounded-xl ">
                  <p className="text-sm">
                    <strong className="text-slate-800 font-medium block mb-1">
                      Payment Methods
                    </strong>
                    We accept cash (most common, paid after job completion),
                    online bank transfer, and bank cheque. Payment is collected
                    only once you confirm you&apos;re satisfied.
                  </p>
                </div>

                <p>
                  If you&apos;re comparing our quote to a cheaper one from
                  another company, check what&apos;s included. Does their price
                  cover packing materials? Furniture dismantling and reassembly?
                  A covered, RTA-approved truck?{" "}
                  <strong className="text-primary font-medium">
                    Ours does — and it&apos;s written down before we start.
                  </strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white-50  p-6 flex flex-col sm:flex-row items-center gap-4">
            <span className="text-slate-500 text-sm font-medium flex items-center gap-2 shrink-0">
              Trending Searches:
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white border border-slate-200 text-muted-foreground text-sm rounded-full shadow-sm">
                cheap movers in umm al quwain
              </span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-muted-foreground text-sm rounded-full shadow-sm">
                affordable movers umm al quwain
              </span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-muted-foreground text-sm rounded-full shadow-sm">
                moving companies in umm al quwain
              </span>
            </div>
          </div>
        </section>

        <div className="bg-foreground max-w-6xl mx-auto rounded-3xl mt-5 text-white p-6 sm:p-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1">
              Get your FREE moving quote in Umm Al Quwain
            </h3>
            <p className="text-emerald-100">
              Call · WhatsApp · Online Form — we respond fast
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button whatsappBtn size="lg" variant={"secondary"}>
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </Button>
            <Button callBtn size="lg">
              <PhoneCall className="w-5 h-5" />
              <span>Call Now</span>
            </Button>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 md:px-10 mt-20 mb-20">
          <div className="bg-muted rounded-3xl p-6 sm:p-8 lg:px-12 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Inter-Emirate Moves: Umm Al Quwain to Ajman and RAK
            </h3>
            <div className="max-w-4xl">
              <p className="text-muted-foreground">
                If you are moving from Umm Al Quwain to nearby emirates such as Ajman or Ras Al Khaimah, our experienced team provides a seamless relocation experience without any hidden cross-border fees.
              </p>
              <p className="text-muted-foreground mt-3">
                See also:{" "}
                <Link href="/movers-in-ajman" className="underline underline-offset-4 hover:text-primary/80">
                  Ajman moving services
                </Link>{" "}
                and{" "}
                <Link href="/movers-in-ras-al-khaimah" className="underline underline-offset-4 hover:text-primary/80">
                  Ras Al Khaimah movers
                </Link>.
              </p>
            </div>
          </div>
        </section>
        <FAQSection
          faqs={UmmAlQuwainMovingFAQs}
          title="Frequently Asked Questions — Movers in Umm Al Quwain"
        />

        <CTA
          title="Book Your Move in Umm Al Quwain Today"
          desc="If you want movers in Umm Al Quwain who show up on time, do the job properly, and charge you exactly what they quoted — that's what we do. Whether it's a studio apartment in Al Salamah or a full villa in Al Raas, a single sofa or an entire office floor, a planned move or an urgent same-day shift — we're available."
        />
      </main>
    </>
  );
};

export default MoversInUmmAlQuwain;

const movingServices = [
  {
    title: "House & Apartment Moving in Umm Al Quwain",
    desc: (
      <>
        <p>
          As experienced <Link href="/house-shifting-dubai">house movers</Link> in Umm Al Quwain, we know that moving a house involves more than loading trucks. Our team provides{" "}
          <strong>
            packing materials, furniture dismantling, and room-specific labeling
          </strong>{" "}
          to ensure a seamless setup at your new home.
        </p>
        <p>
          We handle all property types in UAQ, from{" "}
          <strong>studios to full family villas</strong>. Our enclosed box
          trucks protect your belongings from extreme heat and road dust during
          transit.
        </p>
        <p>
          To ensure your peace of mind, we operate on a{" "}
          <strong>satisfaction-first payment model</strong>—we only collect
          payment once the job is completed to your standards.
        </p>
      </>
    ),
  },
  {
    title: "Villa Moving in Umm Al Quwain",
    desc: (
      <>
        <p>
          <Link href="/villa-movers-in-dubai">Villa relocations</Link> require
          expert planning for heavy furniture and fragile items. We use{" "}
          <strong>RTA-approved, fully enclosed box trucks</strong> to safeguard
          your electronics and upholstery from temperatures exceeding 45°C.
        </p>
        <p>
          Our movers are skilled in navigating tight staircases and narrow
          doorways, ensuring large items are handled without damage to the
          property or the furniture.
        </p>
        <p>
          We handle the <strong>complete teardown and reassembly</strong> of
          large wardrobes and modular units, so your new home is functional the
          moment we leave.
        </p>
      </>
    ),
  },
  {
    title: "Office & Commercial Relocation in Umm Al Quwain",
    desc: (
      <>
        <p>
          Minimize business downtime with our{" "}
          <strong>flexible scheduling</strong>, including evening and weekend
          moves. We prioritize organized transport of IT equipment, filing
          systems, and office furniture.
        </p>
        <p>
          Our team works according to your{" "}
          <strong>floor plans and department labels</strong> to ensure every
          desk and computer ends up exactly where it needs to be.
        </p>
        <p>
          As a <strong>registered company since 1998</strong>, we offer the
          legal accountability and insurance that freelance movers cannot
          provide, protecting your corporate assets.
        </p>
      </>
    ),
  },
  {
    title: "Furniture Moving & Single Item Shifting",
    desc: (
      <>
        <p>
          No job is too small. We provide professional moving services for{" "}
          <strong>single items</strong> like heavy safes, wardrobes, or piano
          transport across Umm Al Quwain.
        </p>
        <p>
          We are experts in handling furniture from major retailers like{" "}
          <strong>Ikea, Home Centre, and Home Box</strong>, including complex
          dismantling and reassembly.
        </p>
      </>
    ),
  },
  {
    title: "Specialty Moves — Industrial, Hospital & Restaurant Equipment",
    desc: (
      <>
        <p>
          We go beyond residential moving to handle{" "}
          <strong>
            industrial machinery, clinic equipment, and restaurant fixtures
          </strong>{" "}
          that require specialized tools.
        </p>
        <p>
          Our team understands the technical requirements for moving{" "}
          <strong>500kg+ equipment</strong> safely, ensuring sensitive
          components remain intact during the transition.
        </p>
      </>
    ),
  },
  {
    title: "Packing, Storage & Curtain Installation in Umm Al Quwain",
    desc: (
      <>
        <p>
          <Link href="/packing-services-in-dubai">Our packing service</Link>{" "}
          uses{" "}
          <strong>
            premium bubble wrap, fabric blankets, and heavy-duty cartons
          </strong>{" "}
          to prevent the scratches and breaks common with DIY packing.
        </p>
        <p>
          We offer <strong>secure self-storage solutions</strong> if your new
          location isn&apos;t ready, along with handyman services like
          professional curtain installation at your new home.
        </p>
      </>
    ),
  },
];

const googleReviews = [
  {
    name: "Omar Al Mulla",
    time: "2 weeks ago",
    star: 5,
    review:
      "Moved our family villa in Al Salama and it went smoothly. The packers were quick, respectful, and nothing got damaged.",
    image: "/ava/32.jpg",
  },
  {
    name: "Aisha Tariq",
    time: "1 month ago",
    star: 5,
    review:
      "Relocated from Umm Al Quwain to Dubai last month. They came with all their own materials and packed my 2BHK well.",
    image: "/ava/44.jpg",
  },
  {
    name: "Richard Evans",
    time: "3 days ago",
    star: 5,
    review:
      "Good movers in UAQ. They took apart my bedroom furniture and put it back together right in our new place in Al Ramlah.",
    image: "/ava/86.jpg",
  },
  {
    name: "Neha Kapoor",
    time: "1 week ago",
    star: 5,
    review:
      "Booked them for the apartment move in Al Maqtaa. Reasonable prices and the crew treated our stuff with care.",
    image: "/ava/68.jpg",
  },
  {
    name: "Fahad Al Jasmi",
    time: "2 months ago",
    star: 5,
    review:
      "Best movers I've used in Umm Al Quwain. Moved all our heavy living room furniture without any issues.",
    image: "/ava/22.jpg",
  },
  {
    name: "Maria Gonzalez",
    time: "4 weeks ago",
    star: 5,
    review:
      "Shifted our business office near the UAQ Free Trade Zone. Straightforward crew, transparent pricing, no surprises.",
    image: "/ava/90.jpg",
  },
  {
    name: "Zeeshan Ali",
    time: "5 days ago",
    star: 5,
    review:
      "They show up on time and work hard. Got everything out of the old building with tight stairs and into the new flat without problems.",
    image: "/ava/54.jpg",
  },
  {
    name: "Hessa Mahmoud",
    time: "3 weeks ago",
    star: 5,
    review:
      "They explained things clearly from the start. Packed all my kitchen stuff carefully and the move around UAQ was hassle-free.",
    image: "/ava/29.jpg",
  },
];
