import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import ServiceHero from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { AllServices, locations } from "@/lib/data";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import HeroImage from "@/public/ser/Curtain-Fixing-Installation-uae.jpg";
import { ChevronRight, MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Curtain Fixing & Installation in UAE | Fast & Affordable",
      desc: "Professional curtain fixing and installation across UAE. All curtain types — rods, tracks, motorized. Book same-day service. Call or WhatsApp for a free quote.",
    },
    image: {
      path: "/ser/Curtain-Fixing-Installation-uae.jpg",
      alt: "Curtain Fixing & Installation in UAE",
    },
    path: "/curtain-fixing-in-uae",
  },
});

const CurtainFixing = () => {
  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "Curtain Fixing & Installation in UAE",
        url: "/curtain-fixing-in-uae",
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
              title: "Curtain Fixing & Installation in UAE",
              url: "/curtain-fixing-in-uae",
            },
          ]}
        />
        <ServiceHero
          title="Curtain Fixing and Installation in UAE — From Removal to Reinstallation"
          desc="Curtain fixing in UAE is one of those jobs that looks simple until you are standing on a ladder with a drill, realizing the wall is gypsum board and your curtain rod needs a completely different mounting approach. At Movers and Packers in UAE, we handle curtain fixing and installation safely and perfectly."
          image={{
            src: HeroImage,
            alt: "Curtain Fixing and Installation in UAE",
          }}
          btnText="Get a Free Curtain Fixing Quote"
        />

        <section className="mt-16 max-w-4xl mx-auto md:px-0 px-4">
          <h3 className="md:text-2xl text-lg font-bold text-center">
            Professional{" "}
            <Link
              href="/curtain-fixing-in-uae"
              className="text-primary underline underline-offset-4"
            >
              curtain fixing UAE
            </Link>
            . Fast, reliable, and expertly mounted.
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
            {[
              "All Curtain Types",
              "Gypsum Board Experts",
              "Motorized Systems",
              "Same-Day Service",
              "Standalone or Bundled",
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
              When you relocate to a new home, villa, or office, we remove your
              existing curtains at the old location and reinstall them at your
              new one — or install brand new curtains from scratch. We know the
              wall types, the ceiling structures, and the quirks of UAE
              construction that make curtain installation trickier than it
              looks.
            </p>
          </div>
        </section>

        <QuotationSection
          title={
            <>
              <span className="font-bold md:block">
                Professional Curtain Installation
              </span>{" "}
              With Movers and Packers in UAE
            </>
          }
          btnText="Get Curtain Installation Quote"
          desc="Our team handles all curtain hardware, brackets, and anchors properly matched to your wall type, so you do not have to hire a separate handyman and coordinate schedules."
        />

        <div className="max-w-7xl md:px-10 mx-auto mt-20 grid lg:grid-cols-6 grid-col-1 min-h-screen gap-10">
          <div
            className="lg:col-span-4 flex flex-col gap-y-16 md:px-0 px-4"
            id="service-content"
          >
            <section>
              <h2>Why Curtain Fixing is Part of Moving</h2>
              <p>
                When you move, curtains are usually the last thing packed and
                the first thing you want up at the new place. Nobody wants to
                spend their first night in a new home with bare windows. But
                curtain installation is not as straightforward as hanging a
                picture frame:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>
                  Different walls need different anchors. Concrete, gypsum
                  board, and hollow block walls each require specific drilling
                  and mounting techniques.
                </li>
                <li>
                  Curtain tracks and rods need precise alignment. A few
                  millimeters off and the curtains will not close properly or
                  hang evenly.
                </li>
                <li>
                  Motorized curtain systems require electrical work that should
                  be done by someone who knows what they are doing.
                </li>
                <li>
                  Some buildings have specific rules about wall mounting —
                  especially in rented apartments.
                </li>
              </ul>
              <p className="mt-4">
                Our team handles all of this as part of your move, so you can
                easily include it in our{" "}
                <Link
                  href="/house-shifting-dubai"
                  className="text-primary underline"
                >
                  house moving packages
                </Link>{" "}
                or{" "}
                <Link
                  href="/flats-shifting-in-uae"
                  className="text-primary underline"
                >
                  flat shifting service
                </Link>
                .
              </p>
            </section>

            <section>
              <h2>Curtain Types We Install</h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-8">
                {[
                  {
                    title: "Standard Rod Curtains",
                    description:
                      "A metal or wooden rod mounted on brackets above the window frame. We install single and double rod systems.",
                  },
                  {
                    title: "Curtain Track Systems",
                    description:
                      "Ceiling or wall-mounted tracks with gliders. Common in modern villas and offices. We handle straight, curved, and bay window tracks.",
                  },
                  {
                    title: "Motorized Curtains",
                    description:
                      "Electrically operated curtains controlled by remote or smart home system. We install the track, motor unit, and connect the wiring.",
                  },
                  {
                    title: "Blinds and Shutters",
                    description:
                      "Venetian blinds, roller blinds, Roman blinds, and wooden shutters. Each has its own mounting method.",
                  },
                  {
                    title: "Sheer and Blackout Curtains",
                    description:
                      "Often installed as a pair — sheer curtains for daytime privacy and blackout curtains for sleeping. Usually need a double system.",
                  },
                  {
                    title: "Ceiling-Mounted Curtains",
                    description:
                      "Used when there is no space above the window frame. Requires drilling into the ceiling slab.",
                  },
                  {
                    title: "Gypsum Board Mounting",
                    description:
                      "Many UAE apartments have gypsum board ceilings. Standard screws pull right out. We use specialized anchors and toggle bolts rated for heavy weight.",
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
                src={"/ser/Curtain-Fixing-Installation-uae.jpg"}
                alt="Curtain Fixing and Installation in UAE"
                fill
                className="object-cover"
              />
            </div>

            <section>
              <h2>Our Curtain Fixing Process</h2>
              <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-10">
                {[
                  {
                    title: "You tell us what you need",
                    desc: "New installation, removal, reinstallation, or a combination during your move.",
                  },
                  {
                    title: "We assess the windows",
                    desc: "Measurements, wall type, ceiling type, and any building restrictions.",
                  },
                  {
                    title: "We bring the right hardware",
                    desc: "Brackets, anchors, screws, and tools matched to your wall and curtain type.",
                  },
                  {
                    title: "Installation",
                    desc: "Drilling, mounting, leveling, and hanging. Our team makes sure everything is aligned and functional.",
                  },
                  {
                    title: "Cleanup",
                    desc: "We clean up drilling dust and packaging. Your space is left the way we found it, minus the bare windows.",
                  },
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

            <section>
              <h2>Curtain Removal and Reinstallation for Movers</h2>
              <p>
                If you are moving and want to take your existing curtains to
                your new home, we handle the full cycle:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>
                  Remove curtain rods, tracks, or motorized systems at your
                  current location.
                </li>
                <li>Pack curtains with your other belongings.</li>
                <li>Install rods, tracks, or systems at your new location.</li>
                <li>Hang curtains and test motorized systems.</li>
              </ul>
              <p className="mt-4">
                This is included in our moving packages like{" "}
                <Link
                  href="/villa-movers-in-dubai"
                  className="text-primary underline"
                >
                  villa relocation
                </Link>{" "}
                or available as a standalone service.
              </p>
            </section>

            <section>
              <h2>Curtain Care Tips After Installation</h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-8">
                <div className="p-4 bg-muted rounded-xl">
                  <h3 className="font-bold mb-2">Vacuum curtains monthly</h3>
                  <p className="text-sm">
                    Use a brush attachment on low suction to remove dust. This
                    prevents buildup that dulls fabric and triggers allergies.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <h3 className="font-bold mb-2">Rotate layers</h3>
                  <p className="text-sm">
                    If you have a double system, open the blackout curtains
                    during the day to reduce UV fading on the sheer layer.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <h3 className="font-bold mb-2">
                    Check brackets periodically
                  </h3>
                  <p className="text-sm">
                    UAE construction settles over time. Tightening brackets
                    takes two minutes and prevents rails from falling.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <h3 className="font-bold mb-2">Clean curtain tracks</h3>
                  <p className="text-sm">
                    A damp cloth along the track once a year keeps them running
                    smoothly and removes dust.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2>Why Movers Handle Curtain Fixing Better Than Handymen</h2>
              <p>
                A general handyman can hang a curtain rod. But a moving company
                that installs curtains handles the complete picture. We already
                know the layout of your new home because we just moved your
                furniture into it. We have the right drill bits for UAE wall
                types because we drill into them every day. We carry backup
                hardware in the truck because we have learned from experience
                that some buildings need longer anchors or heavier brackets than
                expected.
              </p>
            </section>
          </div>

          <aside className="lg:col-span-2 flex flex-col gap-y-5 self-start sticky top-24 md:px-0 px-4">
            <div className="rounded-2xl bg-muted p-6 space-y-3">
              <h3 className="font-bold text-lg">Need Curtain Fixing?</h3>
              <p className="text-sm text-muted-foreground">
                Get your curtains installed perfectly with the right hardware
                for UAE walls. Contact us for a quick quote.
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
          faqs={curtainFixingFaqs}
          title="Frequently Asked Questions — Curtain Fixing in UAE"
        />

        <CTA
          title="Book Curtain Fixing Today"
          desc="Whether you are moving into a new apartment, renovating your villa, or setting up a new office, Movers and Packers in UAE gets your curtains up fast and right. Call us or send a WhatsApp message for a free quote."
        />
      </main>
    </>
  );
};

export default CurtainFixing;

const curtainFixingFaqs = [
  {
    question: "How much does curtain fixing cost in the UAE?",
    answer: (
      <>
        <p>
          Standard rod installation starts from a competitive flat rate per
          curtain.
        </p>
        <p>
          Track systems and motorized curtains are priced per window based on
          complexity. Contact us for an exact quote.
        </p>
      </>
    ),
  },
  {
    question: "Can you install curtains on gypsum board walls?",
    answer: (
      <>
        <p>
          Yes. We use specialized anchors designed specifically for gypsum
          board.
        </p>
        <p>
          They can support the weight of heavy curtain rods and tracks without
          pulling out.
        </p>
      </>
    ),
  },
  {
    question: "Do you supply curtain rods and tracks?",
    answer: (
      <>
        <p>
          We can supply standard rods, tracks, and hardware if you do not have
          your own.
        </p>
        <p>
          For specific brands or custom items, you purchase them and we handle
          the professional installation.
        </p>
      </>
    ),
  },
  {
    question: "How long does curtain installation take?",
    answer: (
      <>
        <p>
          A standard apartment (3–5 windows) takes about 2–3 hours to complete.
        </p>
        <p>
          Larger villas or motorized systems might require a bit more time
          depending on the setup requirements.
        </p>
      </>
    ),
  },
  {
    question: "Do you offer same-day curtain fixing?",
    answer: (
      <>
        <p>
          Yes. We offer same-day service for curtain fixing across most
          locations in the UAE.
        </p>
        <p>
          Give us a call or send a WhatsApp message to book your slot
          immediately.
        </p>
      </>
    ),
  },
];
