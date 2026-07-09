import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import ServiceHero from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { AllServices, locations } from "@/lib/data";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import HeroImage from "@/public/ser/self-storage-services-in-uae.jpg";
import { ChevronRight, MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Self Storage in UAE | Secure Private Units Across Emirates",
      desc: "Rent affordable self storage in UAE with 24/7 access, climate control & CCTV security. Private units in Dubai & all emirates. Get your free quote now.",
    },
    image: {
      path: "/ser/self-storage-services-in-uae.jpg",
      alt: "Self Storage in UAE - Secure Private Units",
    },
    path: "/self-storage-in-uae",
  },
});

const SelfStorage = () => {
  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "Self Storage in UAE",
        url: "/self-storage-in-uae",
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
              title: "Self Storage in UAE",
              url: "/self-storage-in-uae",
            },
          ]}
        />
        <ServiceHero
          title="Self Storage in UAE — Private, Secure Units You Control"
          desc="Self storage in UAE gives you a dedicated, private unit where you keep your personal belongings for as long as you need — a week, a month, or a year. At Movers and Packers in UAE, our self storage units come with climate control, CCTV monitoring, and on-site security."
          image={{
            src: HeroImage,
            alt: "Self Storage in UAE",
          }}
          btnText="Get a Free Self Storage Quote"
        />

        <section className="mt-16 max-w-4xl mx-auto md:px-0 px-4">
          <h3 className="md:text-2xl text-lg font-bold text-center">
            Professional <Link href="/self-storage-in-uae" className="text-primary underline underline-offset-4">self storage UAE</Link>. Private units in Dubai & all emirates.
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
            {[
              "Private & Locked Units",
              "Climate Control",
              "CCTV and Security Guards",
              "Multiple Unit Sizes",
              "No Long-Term Commitments",
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
              We have been in the moving and storage business across the UAE since 1998. Our self storage service grew directly out of customer demand. People moving between apartments, waiting for visas, renovating homes, or traveling for extended periods kept asking us: "Can you just hold my stuff for a while?" Now we have fully equipped facilities to do exactly that.
            </p>
          </div>
        </section>

        <QuotationSection
          title={
            <>
              <span className="font-bold md:block">
                Secure Your Own Private Unit
              </span>{" "}
              With Movers and Packers in UAE
            </>
          }
          btnText="Get Self Storage Quote"
          desc="You decide what goes in, how long it stays, and when it comes out. Cancel when you are done. We do not charge penalties for early termination."
        />

        <div className="max-w-7xl md:px-10 mx-auto mt-20 grid lg:grid-cols-6 grid-col-1 min-h-screen gap-10">
          <div className="lg:col-span-4 flex flex-col gap-y-16 md:px-0 px-4" id="service-content">
            
            <section>
              <h2>When Self Storage Makes Sense</h2>
              <p>You do not need to be moving to use self storage. Here are the most common reasons our customers rent a unit:</p>
              <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-10">
                {[
                  { name: "Between homes.", description: "Your lease ended but the new place is not ready. You need somewhere safe for your belongings during that gap." },
                  { name: "Renovating.", description: "Construction dust, paint, and workers moving through your home can damage furniture. Store it until the work is finished." },
                  { name: "Downsizing.", description: "You moved to a smaller space but are not ready to part with everything. A storage unit buys you time to decide." },
                  { name: "Traveling.", description: "Heading out of the UAE for a few months? No point paying rent on an empty apartment. Store your items and save." },
                  { name: "Seasonal items.", description: "Winter clothing, sports equipment, holiday decorations — items you use once a year do not need to take up closet space year-round." },
                  { name: "Business inventory.", description: "Small business owners storing extra stock, samples, or documents without renting commercial warehouse space." }
                ].map((reason, i) => (
                  <div key={i} className="rounded-2xl p-5 bg-muted">
                    <h3 className="mb-0! text-xl! font-medium">{reason.name}</h3>
                    <p className="mt-3 leading-tight text-muted-foreground">{reason.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2>Features of Our Self Storage Units</h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-8">
                {[
                  { title: "Private, Locked Units", description: "Each unit has its own lock. Only you have the key. Our staff does not enter your unit without your written authorization." },
                  { title: "Climate Control", description: "Air conditioning and humidity regulation protect your items from the extreme UAE heat. Wood does not warp, leather does not crack, electronics do not overheat." },
                  { title: "CCTV and Security Guards", description: "Recorded surveillance runs 24/7. Security personnel are on-site at all times. Every entry and exit is logged." },
                  { title: "Multiple Unit Sizes", description: "We offer units from 50 sq ft to 400+ sq ft. Tell us what you are storing, and we will recommend the right size." },
                  { title: "No Long-Term Commitments", description: "Rent by the week or by the month. Cancel when you are done. We do not charge penalties for early termination." }
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
                src={"/ser/storage-services-in-uae.jpg"}
                alt="Safe self storage facilities in UAE"
                fill
                className="object-cover"
              />
            </div>

            <section>
              <h2>What to Store (and What Not to Store)</h2>
              <div className="mt-5 grid md:grid-cols-2 grid-cols-1 gap-10">
                <div className="p-5 border border-primary rounded-xl">
                  <h3 className="text-primary font-bold text-lg mb-2">Safe to Store:</h3>
                  <p>Furniture, clothing, kitchenware, electronics, books, documents, seasonal items, sports equipment, art, musical instruments, business inventory, office supplies.</p>
                </div>
                <div className="p-5 border border-red-500 rounded-xl">
                  <h3 className="text-red-500 font-bold text-lg mb-2">Do Not Store:</h3>
                  <p>Perishable food, flammable liquids or gases, live plants or animals, hazardous chemicals, illegal items. These are restricted under UAE storage regulations.</p>
                </div>
              </div>
            </section>

            <section>
              <h2>How to Rent a Self Storage Unit</h2>
              <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-10">
                {[
                  { title: "Contact us", desc: "With your storage needs — what items, how many, and for how long." },
                  { title: "Get a quote", desc: "We will recommend a unit size and give you a transparent price." },
                  { title: "We prepare your unit", desc: "Cleaned, climate-set, and ready for your items." },
                  { title: "You (or we) move items in", desc: "Bring your items yourself, or use our packing and transport team to do it for you." },
                  { title: "Access your unit as needed", desc: "Schedule a visit and we will arrange access." },
                  { title: "Move out when ready", desc: "No notice period, no penalty fees." }
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
              <h2>Self Storage Across the UAE</h2>
              <p>
                Our storage facilities serve customers from Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Al Ain, Umm Al Quwain, and Fujairah. We can arrange pickup from anywhere in the UAE and transport your items to our facility. When you are ready to retrieve them, we deliver to your new location.
              </p>
              <p className="mt-5">
                Take a look at our <Link href="/storage-services-in-uae" className="text-primary underline">full storage services</Link> and <Link href="/furniture-storage-in-uae" className="text-primary underline">furniture-specific storage</Link> for specialized options.
              </p>
            </section>

            <section>
              <h2>Self Storage vs. Warehouse Storage — What is the Difference?</h2>
              <p>
                Self storage gives you a private unit you can access on your terms. Warehouse storage is bulk space where a company stores large quantities of goods, typically for commercial use. If you are an individual or a small business with personal items, self storage is what you need. If you are running a logistics operation with palletized inventory, warehouse storage is the better option. We offer both. Call us, and we will help you figure out which one fits.
              </p>
            </section>

            <section>
              <h2>Tips for Preparing Items for Self Storage</h2>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Clean everything before storing.</strong> Wipe down furniture, wash clothing, and empty kitchen appliances.</li>
                <li><strong>Disassemble large furniture.</strong> Beds, desks, and shelving units take up less space when broken down. Keep all screws in labeled bags.</li>
                <li><strong>Use uniform box sizes.</strong> Same-size boxes stack neatly and make better use of the unit space.</li>
                <li><strong>Label every box.</strong> Mark the contents and the room it belongs to.</li>
                <li><strong>Do not vacuum-seal clothing long-term.</strong> Vacuum bags can permanently crease fabrics over months. Use breathable garment bags instead.</li>
                <li><strong>Stand mattresses upright.</strong> If your unit allows it, standing a mattress on its side saves floor space. Wrap it in a cover first.</li>
              </ul>
            </section>

          </div>

          <aside className="lg:col-span-2 flex flex-col gap-y-5 self-start sticky top-24 md:px-0 px-4">
            <div className="rounded-2xl bg-muted p-6 space-y-3">
              <h3 className="font-bold text-lg">Need Self Storage?</h3>
              <p className="text-sm text-muted-foreground">
                Contact our team today for a free consultation and quote. Private, secure, and affordable.
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
          faqs={selfStorageFaqs}
          title="Frequently Asked Questions — Self Storage in UAE"
        />

        <CTA
          title="Get a Free Self Storage Quote"
          desc="Self storage in UAE does not have to be complicated or expensive. Tell us what you need to store, and we will give you a clear price with no surprises. You pay after the service, not before."
        />
      </main>
    </>
  );
};

export default SelfStorage;

const selfStorageFaqs = [
  {
    question: "How much does self storage cost in UAE?",
    answer: (
      <>
        <p>Pricing varies by unit size and rental period.</p>
        <p>Contact us with your list of items, and we will give you a specific quote within the hour.</p>
      </>
    )
  },
  {
    question: "Can I visit my storage unit anytime?",
    answer: (
      <>
        <p>Yes. Schedule your visit with us, and we will ensure access is ready when you arrive.</p>
        <p>For customers who need frequent access, we arrange recurring schedules.</p>
      </>
    )
  },
  {
    question: "Do I have to move items in myself?",
    answer: (
      <>
        <p>No. Our team can pack, load, transport, and place your items into the unit.</p>
        <p>This is especially useful if you are combining self storage with a move.</p>
      </>
    )
  },
  {
    question: "What happens if I need to extend my rental?",
    answer: (
      <>
        <p>Just let us know. There is no paperwork or penalty.</p>
        <p>We extend your rental at the same rate.</p>
      </>
    )
  },
  {
    question: "Is self storage safe for electronics and delicate items?",
    answer: (
      <>
        <p>Yes. Our climate-controlled units maintain stable temperature and humidity levels.</p>
        <p>This protects electronics, musical instruments, artwork, and other sensitive items.</p>
      </>
    )
  }
];
