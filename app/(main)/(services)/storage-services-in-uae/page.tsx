import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import ServiceHero from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { AllServices, locations } from "@/lib/data";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import HeroImage from "@/public/ser/storage-services-in-uae.jpg";
import { ChevronRight, MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Storage Services in UAE | Secure & Climate-Controlled Units",
      desc: "Need safe storage services in UAE? Movers and Packers in UAE offers climate-controlled, CCTV-monitored storage units in Dubai & all emirates. Get a free quote today.",
    },
    image: {
      path: "/ser/storage-services-in-uae.jpg",
      alt: "Storage Services in UAE - Safe, Climate-Controlled Units",
    },
    path: "/storage-services-in-uae",
  },
});

const StorageServices = () => {
  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "Storage Services in UAE",
        url: "/storage-services-in-uae",
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
        <Breadcrumb
          list={[
            {
              title: "Storage Services in UAE",
              url: "/storage-services-in-uae",
            },
          ]}
        />
        <ServiceHero
          title="Storage Services in UAE — Safe, Climate-Controlled Units"
          desc="If you are moving, renovating, or simply running out of space, you need storage services in UAE that actually protect your belongings. At Movers and Packers in UAE, we operate fully secured, climate-controlled storage facilities."
          image={{
            src: HeroImage,
            alt: "Storage Services in UAE",
          }}
          btnText="Get a Free Storage Quote"
        />
        
        <section className="mt-16 max-w-4xl mx-auto md:px-0 px-4">
          <h3 className="md:text-2xl text-lg font-bold text-center">
            Professional <Link href="/storage-services-in-uae" className="text-primary underline underline-offset-4">storage services in UAE</Link>. Climate-controlled, CCTV-monitored, and flexible.
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
            {[
              "Climate-Controlled",
              "24/7 CCTV Monitoring",
              "100% Insurance Coverage",
              "Flexible Rental Terms",
              "No Long-Term Contracts",
            ].map((t, i) => (
              <div
                key={i}
                className="bg-primary text-white text-shadow-2xs px-3 py-1.5 text-sm rounded-4xl flex items-center gap-2"
              >
                <span> ✔</span> <p>{t}</p>
              </div>
            ))}
          </div>
          <div className="md:text-lg text-muted-foreground text-center mt-10 md:px-20">
            <p>
              We have been handling moves across the UAE since 1998. Over 25 years of relocating homes, villas, offices, and warehouses taught us one thing: sometimes, people need a place to keep their stuff between point A and point B. That is why we built storage facilities designed specifically for moving customers — not generic warehouse spaces rented by the square meter with no accountability.
            </p>
          </div>
        </section>

        <QuotationSection
          title={
            <>
              <span className="font-bold md:block">
                Secure Your Storage Space
              </span>{" "}
              With Movers and Packers in UAE
            </>
          }
          btnText="Get Storage Quote"
          desc="Store for a day, a week, a month, or longer. We do not lock you into contracts. When your items are ready to move, we bring them to your new location."
        />

        <div className="max-w-7xl md:px-10 mx-auto mt-20 grid lg:grid-cols-6 grid-col-1 min-h-screen gap-10">
          <div className="lg:col-span-4 flex flex-col gap-y-16 md:px-0 px-4" id="service-content">
            
            <section>
              <h2>Why People in UAE Need Storage During a Move</h2>
              <p>
                Not every move is a clean handoff. Your new apartment might not be ready. Your villa is being renovated. You are downsizing from a 3-bedroom to a 1-bedroom and need time to sell or donate extra furniture. Or you just arrived in the UAE and need somewhere safe for your shipment while you find a permanent home.
              </p>
              <p className="mt-2">
                These are real situations our customers face every week. Our storage services exist to fill that gap, so you are never forced to rush a move or leave your belongings with someone you do not trust.
              </p>
            </section>

            <section>
              <h2>What Makes Our Storage Facilities Different</h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-8">
                {[
                  {
                    title: "Climate-Controlled Units",
                    description: "UAE temperatures can reach 50°C in summer. Heat and humidity damage wood, warp electronics, and ruin leather. Every one of our storage units is air-conditioned and humidity-regulated. Your furniture comes out in the same condition it went in."
                  },
                  {
                    title: "24/7 CCTV and Security Personnel",
                    description: "Our facilities run recorded CCTV surveillance around the clock. Security guards are physically present on-site, and every unit requires authorized access. No one touches your items without your permission."
                  },
                  {
                    title: "100% Insurance Coverage",
                    description: "Your stored items are covered by our comprehensive insurance. If something happens — and in 25 years, we have kept that list very short — you are protected. Most storage providers in UAE do not include insurance. We do."
                  },
                  {
                    title: "Flexible Rental Terms",
                    description: "Store for a day, a week, a month, or longer. We do not lock you into contracts. When your items are ready to move, we bring them to your new location with the same trucks and the same team that packed them."
                  }
                ].map((feature, i) => (
                  <div key={i} className="border-b border-primary leading-tight pb-2">
                    <h3 className="mb-2! text-base!">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-secondary rounded-3xl aspect-video relative overflow-hidden">
              <Image
                src={"/ser/warehouse-moving-dubai-industrial-service.jpg"}
                alt="Storage facilities in UAE"
                fill
                className="object-cover"
              />
            </div>

            <section>
              <h2>Storage Unit Sizes — What You Actually Need</h2>
              <p>
                Most storage companies tell you to "contact us for details." Here is a straight answer:
              </p>
              <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-10">
                {[
                  {
                    name: "Small Unit (50–100 sq ft)",
                    description: "Good for a studio apartment or 1-bedroom flat. Fits a bed, wardrobe, dining table, and 10–15 boxes."
                  },
                  {
                    name: "Medium Unit (100–200 sq ft)",
                    description: "Fits a full 2-bedroom apartment. Handles a sofa set, beds, wardrobes, kitchen appliances, and 20–30 boxes."
                  },
                  {
                    name: "Large Unit (200–400 sq ft)",
                    description: "For villas, large apartments, or office furniture. Holds multiple room sets, large appliances, and commercial equipment."
                  }
                ].map((size, i) => (
                  <div key={i} className="rounded-2xl p-5 bg-muted">
                    <h3 className="mb-0! text-xl! font-medium">{size.name}</h3>
                    <p className="mt-3 leading-tight text-muted-foreground">{size.description}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5">
                If you are not sure, call us. We will ask about your items and recommend the right size — no upselling.
              </p>
            </section>

            <section>
              <h2>Our Storage Process — Step by Step</h2>
              <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-10">
                {[
                  { title: "You contact us", desc: "By phone, WhatsApp, or the quote form on our website. Tell us what you need to store and for how long." },
                  { title: "We give you a clear quote", desc: "No hidden charges. The price you see is the price you pay." },
                  { title: "Our team packs and loads", desc: "If you are combining storage with a move, our crew handles packing, disassembly, and loading into our enclosed trucks." },
                  { title: "Items go into your assigned unit", desc: "Cataloged, labeled, and inventoried. You get a full list of everything stored." },
                  { title: "You access whenever you need", desc: "Want to retrieve an item? Call us, and we will arrange access or delivery." },
                  { title: "We deliver to your new location", desc: "When you are ready, the same team brings everything to your door and reassembles furniture on-site." }
                ].map((process, i) => (
                  <div key={i}>
                    <h3 className="mb-2! text-lg!">
                      <span className="text-primary">{i + 1}. </span>
                      {process.title}
                    </h3>
                    <p className="leading-tight">{process.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2>Who Uses Our Storage Services</h2>
              <p>
                Our storage customers include families relocating within Dubai, professionals on temporary assignments, business owners storing inventory between office moves, and people renovating their homes. We also store commercial equipment for restaurants, clinics, and schools during refits.
              </p>
            </section>

            <section className="grid md:grid-cols-2 grid-cols-1 gap-10">
              <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
                <Image
                  src={"/ser/self-storage-services-in-uae.jpg"}
                  alt="Self storage in UAE"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative bg-secondary rounded-3xl aspect-4/3 overflow-hidden">
                <Image
                  src={"/ser/funriture-storage-services-uae.jpg"}
                  alt="Furniture storage in UAE"
                  fill
                  className="object-cover"
                />
              </div>
            </section>

            <section>
              <h2>Combine Storage with Our Other Moving Services</h2>
              <p>Storage works best when it is part of a complete moving plan. Here is how our customers typically use it:</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li><strong>House or villa moving + storage:</strong> Your new home needs painting or flooring before you move in. We move your belongings into storage first, then deliver them to your finished home on the date you choose.</li>
                <li><strong>Office relocation + storage:</strong> Moving to a new office? Store excess furniture and equipment while you figure out the layout. Retrieve only what fits.</li>
                <li><strong>Furniture storage during renovation:</strong> Protect your furniture from dust and damage while contractors work on your home. We pick it up before the work starts and bring it back when the space is clean.</li>
                <li><strong>International arrivals:</strong> Your shipping container arrived but you have not found a permanent home yet. We store your shipment safely until you settle.</li>
              </ul>
              <p className="mt-5">
                Explore our <Link href="/self-storage-in-uae" className="text-primary underline">self storage options</Link> or our <Link href="/furniture-storage-in-uae" className="text-primary underline">dedicated furniture storage</Link>. If you also need <Link href="/warehouse-moving-in-uae" className="text-primary underline">warehouse moving services</Link>, we handle that too.
              </p>
            </section>

            <section>
              <h2>Storage Regulations in the UAE</h2>
              <p>
                Storage facilities in the UAE must comply with Dubai Civil Defense (DCD) requirements for fire safety, ventilation, and emergency access. Dubai Municipality sets standards for construction, lighting, and health conditions in commercial storage. These include proper fire exits, sprinkler systems, adequate ventilation, and regular safety inspections.
              </p>
              <p className="mt-2">
                Our facilities meet all of these requirements. We are a fully licensed, registered moving and storage company operating since 1998. You can verify our registration through our Google Business Profile and visit our office in Ras Al Khor Industrial Area 1, Dubai.
              </p>
            </section>

            <section>
              <h2>Storage Services Across All Emirates</h2>
              <p>
                Our storage facilities serve customers throughout the UAE. Whether you are in Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Al Ain, Umm Al Quwain, or Fujairah, we can arrange pickup from your location, transport your belongings to our storage facility, and deliver them to your new address when you are ready.
              </p>
              <p className="mt-2">
                For inter-emirate moves where timing does not line up — say you are leaving a flat in Sharjah today but your villa in Dubai is not ready for two weeks — our storage bridges the gap. One company handles the entire chain: packing, loading, storing, delivering, and setting up.
              </p>
            </section>

          </div>

          <aside className="lg:col-span-2 flex flex-col gap-y-5 self-start sticky top-24 md:px-0 px-4">
            <div className="rounded-2xl bg-muted p-6 space-y-3">
              <h3 className="font-bold text-lg">Need Storage Services?</h3>
              <p className="text-sm text-muted-foreground">
                Contact our storage services team today for a free consultation and quote. We specialize in secure, climate-controlled storage in the UAE.
              </p>
              <div className="flex flex-col gap-2 pt-3">
                <Button callBtn className="bg-primary hover:bg-primary/90 w-full gap-2">
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
              <h4 className="font-semibold mb-3 text-lg">OUR SERVICES</h4>
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
              <h4 className="font-semibold mb-3 text-lg">AREAS WE SERVE</h4>
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
          faqs={storageFaqs}
          title="Frequently Asked Questions — Storage Services in UAE"
        />

        <CTA
          title="Book Your Storage Unit Today"
          desc="Whether you need to store a few boxes or the contents of an entire villa, our storage services in UAE give you a secure, flexible, and affordable solution. You pay after the work is done. No upfront deposits. No long-term contracts."
        />
      </main>
    </>
  );
};

export default StorageServices;

const storageFaqs = [
  {
    question: "How much does storage cost in the UAE?",
    answer: (
      <>
        <p>Pricing depends on the unit size and rental duration. A small unit for one month typically starts from a fixed competitive rate.</p>
        <p>Contact us for an exact quote based on your items.</p>
      </>
    )
  },
  {
    question: "Can I access my stored items at any time?",
    answer: (
      <>
        <p>Yes. Call us to schedule access, and we will arrange it within the same day.</p>
        <p>For regular access needs, we can set up a recurring schedule.</p>
      </>
    )
  },
  {
    question: "Is my furniture safe in summer heat?",
    answer: (
      <>
        <p>All our units are climate-controlled with air conditioning and humidity regulation.</p>
        <p>Your furniture, electronics, and sensitive items stay protected regardless of outside temperatures.</p>
      </>
    )
  },
  {
    question: "Do you offer storage with moving services?",
    answer: (
      <>
        <p>Yes. Most of our storage customers combine storage with our packing and moving services.</p>
        <p>We handle the entire process from your old location to our storage facility to your new home.</p>
      </>
    )
  },
  {
    question: "Are my items insured while in storage?",
    answer: (
      <>
        <p>Yes. Full insurance coverage is included in our storage service.</p>
        <p>Your belongings are protected for the entire duration of storage.</p>
      </>
    )
  }
];
