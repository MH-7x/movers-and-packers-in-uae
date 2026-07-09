import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import ServiceHero from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { AllServices, locations } from "@/lib/data";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import HeroImage from "@/public/ser/funriture-storage-services-uae.jpg";
import { ChevronRight, MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Furniture Storage in UAE | Protected & Climate-Controlled",
      desc: "Store your furniture safely in UAE with Movers and Packers in UAE. Climate-controlled units, professional wrapping & 100% insurance. Free quote — call or WhatsApp.",
    },
    image: {
      path: "/ser/funriture-storage-services-uae.jpg",
      alt: "Furniture Storage in UAE - Protected & Climate-Controlled",
    },
    path: "/furniture-storage-in-uae",
  },
});

const FurnitureStorage = () => {
  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "Furniture Storage in UAE",
        url: "/furniture-storage-in-uae",
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
              title: "Furniture Storage in UAE",
              url: "/furniture-storage-in-uae",
            },
          ]}
        />
        <ServiceHero
          title="Furniture Storage in UAE — Professional Protection"
          desc="Furniture storage in UAE is not just about finding an empty room. Wood warps in heat. Leather cracks without humidity control. We store furniture the same way we move it — with proper wrapping, climate control, and expert care."
          image={{
            src: HeroImage,
            alt: "Furniture Storage in UAE",
          }}
          btnText="Get a Free Furniture Storage Quote"
        />

        <section className="mt-16 max-w-4xl mx-auto md:px-0 px-4">
          <h3 className="md:text-2xl text-lg font-bold text-center">
            Dedicated <Link href="/furniture-storage-in-uae" className="text-primary underline underline-offset-4">furniture storage UAE</Link>. Keep your valuable pieces safe and perfectly maintained.
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
            {[
              "Professional Wrapping",
              "Climate-Controlled",
              "100% Insurance",
              "Proper Disassembly",
              "Organized Placement",
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
              Whether you are storing a single dining table or the entire contents of a 5-bedroom villa, our furniture storage facilities in Dubai and across the UAE keep everything in the same condition it was when it left your home.
            </p>
          </div>
        </section>

        <QuotationSection
          title={
            <>
              <span className="font-bold md:block">
                Secure Your Furniture Storage
              </span>{" "}
              With Movers and Packers in UAE
            </>
          }
          btnText="Get Furniture Storage Quote"
          desc="Do not store your furniture somewhere that treats it like cargo. Contact us today for professional handling, climate-controlled units, and full insurance coverage."
        />

        <div className="max-w-7xl md:px-10 mx-auto mt-20 grid lg:grid-cols-6 grid-col-1 min-h-screen gap-10">
          <div className="lg:col-span-4 flex flex-col gap-y-16 md:px-0 px-4" id="service-content">
            
            <section>
              <h2>Why Furniture Needs Special Storage in the UAE</h2>
              <p>
                The UAE climate is one of the harshest environments for furniture. Summer temperatures exceed 50°C. Humidity can swing from 10% in the desert to 90% near the coast within the same week. Here is what that does to unprotected furniture:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Wooden furniture</strong> expands and contracts with temperature changes, causing joints to loosen, veneer to peel, and surfaces to crack.</li>
                <li><strong>Leather sofas and chairs</strong> dry out and crack in extreme heat, or develop mold in high humidity.</li>
                <li><strong>Fabric upholstery</strong> absorbs moisture and becomes a breeding ground for dust mites and mildew.</li>
                <li><strong>Glass tabletops and mirrors</strong> can develop stress fractures from rapid temperature changes.</li>
                <li><strong>Mattresses</strong> trap moisture and develop odor, stains, and structural breakdown without proper ventilation.</li>
              </ul>
              <p className="mt-4 font-semibold">
                This is why a regular garage, an outdoor container, or an unregulated warehouse is a bad idea for furniture storage in the UAE. You need a controlled environment.
              </p>
            </section>

            <section>
              <h2>How We Store Your Furniture</h2>
              <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-10">
                {[
                  { title: "Step 1: Professional Disassembly", desc: "Our team disassembles beds, wardrobes, dining tables on-site. Every screw and connector is bagged and labeled." },
                  { title: "Step 2: Wrapping and Protection", desc: "Stretch film for dust, bubble wrap for fragile surfaces, moving blankets for large pieces, and cardboard corner protectors." },
                  { title: "Step 3: Climate-Controlled Storage", desc: "Your furniture goes into our air-conditioned, humidity-regulated unit (20–24°C and 40–50% humidity)." },
                  { title: "Step 4: Organized Placement", desc: "Heavy pieces on the bottom. Delicate items elevated. Nothing touches the walls directly." },
                  { title: "Step 5: Inventory and Documentation", desc: "You get a complete list of every item stored, including its condition at the time of storage." }
                ].map((process, i) => (
                  <div key={i}>
                    <h3 className="mb-2! text-lg! text-primary">
                      {process.title}
                    </h3>
                    <p className="leading-tight">{process.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-secondary rounded-3xl aspect-video relative overflow-hidden">
              <Image
                src={"/ser/furniture-moving-dubai-uae-service.jpg"}
                alt="Furniture storage and moving in UAE"
                fill
                className="object-cover"
              />
            </div>

            <section>
              <h2>Furniture Storage for Different Situations</h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-8">
                {[
                  { title: "During a move", description: "Your new home is not ready yet. We store your furniture until you have the keys and the space is clean." },
                  { title: "During renovation", description: "Protect your furniture from construction dust, paint, and accidental damage. Store it with us and bring it back when the work is done." },
                  { title: "Downsizing", description: "Moving to a smaller place? Keep the furniture you love in storage until you decide what to sell or give away." },
                  { title: "Extended travel", description: "Leaving the UAE for months? Store your furniture instead of paying rent on an empty apartment." },
                  { title: "Seasonal rotation", description: "Swap furniture seasonally — heavier pieces for winter, lighter ones for summer. Storage makes this easy." }
                ].map((feature, i) => (
                  <div key={i} className="border-b border-primary leading-tight pb-2">
                    <h3 className="mb-2! text-base!">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5">
                Explore our <Link href="/storage-services-in-uae" className="text-primary underline">storage services in UAE</Link> and our <Link href="/house-shifting-dubai" className="text-primary underline">house moving service</Link> for complete solutions.
              </p>
            </section>

            <section>
              <h2>Common Mistakes People Make with Furniture Storage</h2>
              <ul className="list-disc pl-5 mt-4 space-y-4">
                <li><strong>Using a regular garage or container.</strong> Uninsulated spaces in the UAE can reach 60°C inside during summer. Your furniture will warp, crack, and deteriorate within weeks.</li>
                <li><strong>Wrapping leather in plastic.</strong> Plastic traps moisture against leather, causing mold and discoloration. We use breathable wrapping materials that allow air circulation while keeping dust out.</li>
                <li><strong>Stacking without protection.</strong> Placing items directly on top of each other causes pressure marks, scratches, and structural damage. We use padding between every layer.</li>
                <li><strong>Skipping disassembly.</strong> Moving a fully assembled wardrobe into a storage unit often means forcing it through doorways, causing chips and scratches. We disassemble everything that needs it.</li>
                <li><strong>Forgetting about insurance.</strong> Most people assume their home insurance covers items in storage. It usually does not. Our storage service includes full insurance coverage.</li>
              </ul>
            </section>

            <section>
              <h2>Furniture Storage Cost in UAE</h2>
              <p>
                The cost depends on three things: how many pieces you are storing, what size unit you need, and how long you need it. We do not publish generic price lists because every situation is different, and we do not want to overcharge or underquote.
              </p>
              <p className="mt-2">
                Call us or send a WhatsApp message with a list or photos of your furniture. We will give you an exact price within the hour. No obligations, no deposit required.
              </p>
            </section>

          </div>

          <aside className="lg:col-span-2 flex flex-col gap-y-5 self-start sticky top-24 md:px-0 px-4">
            <div className="rounded-2xl bg-muted p-6 space-y-3">
              <h3 className="font-bold text-lg">Need Furniture Storage?</h3>
              <p className="text-sm text-muted-foreground">
                Protect your valuable pieces with our professional furniture storage. Call today for a free quote.
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
          faqs={furnitureStorageFaqs}
          title="Frequently Asked Questions — Furniture Storage in UAE"
        />

        <CTA
          title="Get a Free Furniture Storage Quote"
          desc="Your furniture is one of the most expensive things in your home. Do not store it somewhere that treats it like cargo. With Movers and Packers in UAE, your furniture gets professional handling, proper wrapping, climate-controlled storage, and full insurance coverage."
        />
      </main>
    </>
  );
};

export default FurnitureStorage;

const furnitureStorageFaqs = [
  {
    question: "Can you store just one piece of furniture?",
    answer: (
      <>
        <p>Yes. We handle single-item storage all the time — a piano, a wardrobe, an antique cabinet.</p>
        <p>There is no minimum limit.</p>
      </>
    )
  },
  {
    question: "How do you protect leather furniture in storage?",
    answer: (
      <>
        <p>Leather is wrapped in breathable material (not plastic, which traps moisture).</p>
        <p>It is then stored in a humidity-controlled unit at 40–50% relative humidity, which prevents cracking and mold.</p>
      </>
    )
  },
  {
    question: "Will you disassemble and reassemble my furniture?",
    answer: (
      <>
        <p>Yes. Our team handles full disassembly before storage and reassembly at your new location.</p>
        <p>All hardware is labeled and stored with the item.</p>
      </>
    )
  },
  {
    question: "How long can I store furniture?",
    answer: (
      <>
        <p>As long as you need. We have customers who store for a week and others who have stored for over a year.</p>
        <p>There is no maximum limit.</p>
      </>
    )
  },
  {
    question: "Do you provide insurance for stored furniture?",
    answer: (
      <>
        <p>Yes. All items in our storage are covered by comprehensive insurance for the full duration of the rental.</p>
      </>
    )
  }
];
