import Link from "next/link";
import {
  Building2,
  Truck,
  Clock,
  MapPin,
  CheckCircle2,
  MessageSquare,
  ChevronRight,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import QuotationSection from "@/components/QuotationSection";
import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import { DubaiMarinaFAQs } from "@/lib/FaqsData";
import { ReviewSection } from "@/components/ReviewSection";
import heroImage from "@/public/local/movers-packers-dubai-marina-hero-team.jpg";
import Image from "next/image";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import { Breadcrumb } from "@/components/Breadcrumb";


export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers in Dubai Marina | Licensed & Trusted Since 1998",
      desc: "Need professional movers in Dubai Marina? We've handled thousands of Marina moves since 1998. Fixed quotes, fully enclosed trucks. Call or WhatsApp now.",
    },
    image: {
      path: "/local/movers-packers-dubai-marina-hero-team.jpg",
      alt: "movers in dubai marina",
    },
    path: "/dubai-areas/movers-in-dubai-marina",
  },
});

export default function MoversDubaiMarinaPage() {
  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "Dubai Areas We Serve",
        url: "/dubai-areas",
      },
      {
        title: "Movers in Dubai Marina",
        url: "/dubai-areas/movers-in-dubai-marina",
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
      <main className="text-foreground ">
        <Breadcrumb list={[
      {
        title: "Dubai Areas We Serve",
        url: "/dubai-areas",
      },
      {
        title: "Movers in Dubai Marina",
        url: "/dubai-areas/movers-in-dubai-marina",
      },
    ]} />
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h1 className="md:text-4xl text-3xl  font-extrabold tracking-tight leading-tight">
                  Movers in Dubai Marina — reliable, fixed-price, pay after
                  satisfaction
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Finding movers in Dubai Marina you can actually trust is
                  harder than it sounds. There are dozens of companies out
                  there, and most of them say roughly the same things. What
                  actually matters is track record, and ours goes back to 1998.{" "}
                  <Link href="/">Movers and Packers in UAE </Link> has been a
                  licensed moving company for over 25 years, completing
                  thousands of moves across Dubai Marina&apos;s towers,
                  waterfront apartments, and Marina Walk buildings.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    quoteBtn
                    size="lg"
                    className="shadow-lg shadow-primary/20"
                  >
                    Get Free Quote
                  </Button>
                  <Button
                    whatsappBtn
                    size="lg"
                    variant="outline"
                    className="gap-2"
                  >
                    <MessageSquare className="size-4 text-[#25D366]" />
                    WhatsApp
                  </Button>
                </div>
              </div>

              {/* Placeholder Image 1 (Hero Image) */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="aspect-square rounded-3xl bg-muted border border-border overflow-hidden relative shadow-xl">
                    <Image
                      src={heroImage}
                      alt="Movers in Dubai Marina Team"
                      fill
                      loading="eager"
                      placeholder="blur"
                      className="object-cover"
                    />
                  </div>
                  {/* Micro-badge */}
                  <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl border border-border shadow-lg max-w-50 hidden sm:block">
                    <p className="text-xs text-muted-foreground font-medium">
                      Satisfaction Guaranteed
                    </p>
                    <p className="text-sm font-bold text-foreground mt-1">
                      Zero Upfront Deposits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="-mt-10" />
        {/* Quotation Section */}
        <QuotationSection
          invert
          title={
            <>
              <span className="font-bold md:block">
                Get a Free Moving Quote —{" "}
              </span>{" "}
              From Marina Local Movers!{" "}
            </>
          }
          desc="As movers and packers in Dubai Marina, we handle the full job: service lift bookings, packing, transport, furniture assembly, and unpacking at the other end. You pay only after the work is done and you are satisfied with the result."
        />
        {/* Why Dubai Marina moves are different */}
        <section className="py-20 bg-muted/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  Why Dubai Marina moves are different from the rest of Dubai
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Moving in Dubai Marina is not like moving anywhere else in the
                  city. The logistics here are specific, and if your movers have
                  not done it before, you will feel it on moving day.
                </p>
              </div>

              {/* Placeholder Image 2 (Marina Logistics Map / Promenade Access visual) */}
              <div className="lg:col-span-5">
                <div className="aspect-video w-full rounded-2xl bg-muted border border-border overflow-hidden relative shadow-md">
                  <Image
                    src={
                      "/local/movers-packers-uae-branded-truck-dubai-marina-road.jpg"
                    }
                    alt="Movers and Packers UAE branded white enclosed moving truck on Dubai Marina road with company logo and phone number on side panel"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card border border-border p-6 rounded-2xl space-y-4 hover:shadow-md transition-all">
                <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Clock className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Service Lift Booking
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Most Marina towers need a service lift reservation booked 24
                  to 72 hours ahead, sometimes longer in older buildings on the
                  western side of Marina Walk. Miss that window and the move
                  does not happen. We contact your building management directly
                  and confirm the booking in writing before we agree on a date
                  with you.
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl space-y-4 hover:shadow-md transition-all">
                <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Promenade Access
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A number of towers near the promenade face pedestrian-only
                  canal-side streets. There is no truck access from the front
                  entrance. Loading happens from a rear service road or a side
                  access point specific to each building. We already know which
                  entrance your building uses before the truck leaves.
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl space-y-4 hover:shadow-md transition-all">
                <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Building2 className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Corridor Padding
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Most buildings also require floor runners in the corridor and
                  padding inside the service lift before a single item can be
                  moved. Building management enforces this with fines for
                  non-compliance. Our crews carry all required protection and
                  install it at the start, before anything gets loaded.
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl space-y-4 hover:shadow-md transition-all">
                <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Truck className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Enclosed Box Trucks
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  And then there are the trucks. Dubai Marina in summer
                  regularly hits 45 degrees Celsius, and sandstorms come without
                  much warning. An open truck moving leather furniture, wooden
                  pieces, or electronics through that is a genuine risk of
                  damage. We use fully enclosed box trucks for all Marina
                  residential moves. They are RTA-approved and matched to your
                  move volume.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Moving Services we Provide */}
        <section className="py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Moving services we provide in Dubai Marina
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                Comprehensive packing, transport, and setup options matching the
                high-rise standards of Dubai Marina.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 1. Apartment Moving */}
              <div className="bg-card border border-border p-6 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="aspect-16/10 w-full rounded-xl bg-muted border border-border overflow-hidden relative mb-4">
                    <Image
                      src="/local/apartment-moving-service-dubai-marina-high-rise.jpg"
                      fill
                      className="object-cover"
                      alt="Professional apartment movers loading boxes in a high-floor Dubai Marina apartment with marina canal views through floor-to-ceiling windows"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent flex items-end p-4">
                      <span className="text-xs text-white bg-primary px-2 py-1 rounded">
                        Apartment Move Setup
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Apartment and studio moving in Dubai Marina
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We handle studios through 3BHK apartments across all Marina
                    towers. Full service includes service lift coordination with
                    your building management, packing using double-wall cartons,
                    bubble wrap, and stretch film, transport in a fully enclosed
                    truck, and furniture assembly at the new address. Most
                    studio and 1BHK moves in Dubai Marina are done in three to
                    four hours.
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <Link
                    href="/apartment-movers-dubai"
                    className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:underline"
                  >
                    apartment movers Dubai
                    <ChevronRight className="size-3" />
                  </Link>
                </div>
              </div>

              {/* 2. Villa Moving */}
              <div className="bg-card border border-border p-6 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="aspect-16/10 w-full rounded-xl bg-muted border border-border overflow-hidden relative mb-4">
                    <Image
                      src="/local/villa-townhouse-moving-dubai-marina-waterfront.jpg"
                      fill
                      className="object-cover"
                      alt="Professional Movers and Packers team handling villa furniture relocation at a Dubai Marina townhouse with branded truck in driveway"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent flex items-end p-4">
                      <span className="text-xs text-white bg-primary px-2 py-1 rounded">
                        Villa Move Setup
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Villa and townhouse moving in Dubai Marina
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Marina townhouses and waterfront villas are ground-level
                    moves, so there is no lift coordination involved, but the
                    furniture volumes are typically larger. We manage
                    disassembly, wrapping, transport, and full reassembly at the
                    destination. For larger properties, we coordinate two
                    trucks.
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <Link
                    href="/villa-movers-in-dubai"
                    className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:underline"
                  >
                    villa movers in Dubai
                    <ChevronRight className="size-3" />
                  </Link>
                </div>
              </div>

              {/* 3. Office Moving */}
              <div className="bg-card border border-border p-6 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="aspect-16/10 w-full rounded-xl bg-muted border border-border overflow-hidden relative mb-4">
                    <Image
                      src="/local/office-commercial-moving-dubai-marina-evening.jpg"
                      fill
                      className="object-cover"
                      alt="Professional office movers handling commercial relocation after hours in a Dubai Marina tower office with city skyline views at dusk"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent flex items-end p-4">
                      <span className="text-xs text-white bg-primary px-2 py-1 rounded">
                        Commercial Workstation
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Office and commercial moving in Dubai Marina
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Office moves in Marina buildings usually run outside normal
                    hours to avoid conflicts with residential lift access. We
                    work weekday evenings and weekends for commercial clients as
                    standard. IT equipment is handled carefully, everything is
                    labeled systematically, and the new space is operational by
                    the next working morning.
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <Link
                    href="/office-movers-in-dubai"
                    className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:underline"
                  >
                    office movers in Dubai
                    <ChevronRight className="size-3" />
                  </Link>
                </div>
              </div>

              {/* 4. Single Furniture Moving */}
              <div className="bg-card border border-border p-6 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="aspect-16/10 w-full rounded-xl bg-muted border border-border overflow-hidden relative mb-4">
                    <Image
                      src="/local/single-furniture-moving-dubai-marina-tower-corridor.jpg"
                      fill
                      className="object-cover"
                      alt="Professional mover carefully transporting a wrapped sofa through a Dubai Marina high-rise corridor toward a padded service lift"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent flex items-end p-4">
                      <span className="text-xs text-white bg-primary px-2 py-1 rounded">
                        Item Disassembly
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Single furniture moving in Dubai Marina
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    One piece, such as a sofa, a wardrobe that needs
                    disassembly, or a dining table from a high floor. We check
                    the item&apos;s dimensions, the lift clearance, and the
                    carry route before quoting. There is no minimum job size.
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <Link
                    href="/single-furniture-moving-uae"
                    className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:underline"
                  >
                    single furniture moving UAE
                    <ChevronRight className="size-3" />
                  </Link>
                </div>
              </div>

              {/* 5. Professional Packing */}
              <div className="bg-card border border-border p-6 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="aspect-16/10 w-full rounded-xl bg-muted border border-border overflow-hidden relative mb-4">
                    <Image
                      src="/local/professional-packing-service-dubai-marina-apartment.jpg"
                      fill
                      className="object-cover"
                      alt="Professional packing team wrapping fragile items and sealing labeled boxes in a Dubai Marina apartment ready for relocation"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent flex items-end p-4">
                      <span className="text-xs text-white bg-primary px-2 py-1 rounded">
                        Premium Packaging
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Professional packing services in Dubai Marina
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our packing team works with double-wall cartons, bubble
                    wrap, stretch film, and furniture blankets. Fragile items,
                    electronics, and artwork are packed separately and clearly
                    marked. Every box is numbered and labeled by destination
                    room so unpacking is organized from the first box you open.
                    A full unpack and arrange service is available after
                    delivery if you want it.
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <Link
                    href="/packing-services-in-dubai"
                    className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:underline"
                  >
                    packing services in Dubai
                    <ChevronRight className="size-3" />
                  </Link>
                </div>
              </div>

              {/* 6. Storage Services */}
              <div className="bg-card border border-border p-6 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="aspect-16/10 w-full rounded-xl bg-muted border border-border overflow-hidden relative mb-4">
                    <Image
                      src="/local/furniture-storage-service-dubai-movers-packers-warehouse.jpg"
                      fill
                      className="object-cover"
                      alt="Clean organized climate-controlled storage unit with professionally wrapped furniture and labeled boxes managed by Movers and Packers UAE"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent flex items-end p-4">
                      <span className="text-xs text-white bg-primary px-2 py-1 rounded">
                        Storage Units
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Storage services in Dubai Marina
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    If you are between leases or your new address is not ready
                    on move day, we store your belongings and deliver when
                    access is confirmed. For longer-term furniture storage
                    across the UAE, see our{" "}
                    <Link
                      href="/furniture-moving-services-uae"
                      className="text-primary hover:underline font-semibold"
                    >
                      furniture storage services page
                    </Link>
                    .
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <Link
                    href="/furniture-moving-services-uae"
                    className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:underline"
                  >
                    furniture moving services UAE
                    <ChevronRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buildings we Cover */}
        <section className="py-20 bg-muted/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Dubai Marina buildings and neighbourhoods we cover
              </h2>
              <p className="text-lg text-muted-foreground">
                Dubai Marina covers a large area with distinct zones. Each has
                its own building access rules, loading bay locations, and
                management contacts.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card border border-border p-6 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-all">
                <h3 className="font-bold text-lg text-foreground border-b border-border pb-2 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary" />
                  West Marina
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  West Marina buildings include Princess Tower, 23 Marina, Elite
                  Residence, The Torch, Sulafa Tower, Trident Grand Residence,
                  and Marina Pinnacle.
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-all">
                <h3 className="font-bold text-lg text-foreground border-b border-border pb-2 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary" />
                  Along Marina Walk
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Along Marina Walk, we regularly move in and out of Cayan
                  Tower, Marina Crown, Park Island, Marina Gate I and II, Studio
                  One, and the Emaar Six Towers.
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-all">
                <h3 className="font-bold text-lg text-foreground border-b border-border pb-2 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary" />
                  East Marina
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  East Marina covers Ocean Heights, Al Sahab, Botanica Tower,
                  Horizon Tower, Le Reve, Marina Terrace, Al Majara, and
                  Marinascape.
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-all">
                <h3 className="font-bold text-lg text-foreground border-b border-border pb-2 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary" />
                  JBR Zone
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jumeirah Beach Residence is a separate zone with its own
                  building management. Clusters including Bahar, Murjan, Rimal,
                  Sadaf, Amwaj, and Shams each have different access procedures
                  from the Marina towers. We plan JBR moves independently, as
                  their own operation.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center text-sm text-muted-foreground max-w-2xl mx-auto bg-card border border-border px-6 py-4 rounded-xl shadow-sm">
              <span className="font-semibold text-foreground">
                Your building not listed here?
              </span>{" "}
              We cover it. Dubai Marina is one of our main operational zones.
            </div>
          </div>
        </section>
        <ReviewSection reviews={googleReviews} />
        {/* Step by Step Process */}
        <section className="py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-6 space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  How a Dubai Marina move works, step by step
                </h2>
                <p className="text-lg text-muted-foreground">
                  We simplify the complex building logistics rules, keeping you
                  informed at every step of your move.
                </p>
              </div>
              {/* Placeholder Image 4 (Process flow / team coordination visual) */}
              <div className="lg:col-span-6">
                <div className="aspect-video w-full rounded-2xl bg-muted border border-border overflow-hidden relative shadow-md">
                  <Image
                    src="/local/movers-packers-uae-professional-team-dubai-marina-waterfront.jpg"
                    alt="Movers and Packers UAE professional moving team in branded uniforms standing with truck at Dubai Marina waterfront promenade"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="space-y-4 relative">
                <div className="size-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-sm">
                  1
                </div>
                <h3 className="font-bold text-lg text-foreground">
                  Step 1 — Contact us and get a free quote
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Call, send a WhatsApp message, or use the quote form on this
                  page. Tell us your apartment size, floor level, and the date
                  you are looking at. We send a written quote to your WhatsApp
                  within a few hours. That number is the final number. It
                  includes carry distance, lift access, and corridor protection.
                  There are no additions on move day.
                </p>
              </div>

              <div className="space-y-4 relative">
                <div className="size-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-sm">
                  2
                </div>
                <h3 className="font-bold text-lg text-foreground">
                  Step 2 — We handle building coordination
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  After you confirm the quote, we contact your building
                  management to book the service lift, confirm the loading bay,
                  and arrange corridor protection for the hallway and lift
                  interior. You do not have to deal with building admin
                  yourself.
                </p>
              </div>

              <div className="space-y-4 relative">
                <div className="size-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-sm">
                  3
                </div>
                <h3 className="font-bold text-lg text-foreground">
                  Step 3 — Packing, loading, and transport
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The crew arrives on time, installs corridor protection, packs
                  your items, and loads the enclosed truck. Fully enclosed
                  vehicles are the standard for all Dubai Marina moves. Your
                  furniture and electronics are protected from the heat and dust
                  throughout the journey.
                </p>
              </div>

              <div className="space-y-4 relative">
                <div className="size-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-sm">
                  4
                </div>
                <h3 className="font-bold text-lg text-foreground">
                  Step 4 — Delivery, assembly, and payment after satisfaction
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We deliver, reassemble furniture, and place items where you
                  want them. When the work is done, you inspect the job. Payment
                  (by cash, bank transfer, or bank cheque) is only collected
                  after you confirm you are satisfied. We do not leave before
                  that confirmation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  Why residents choose us as their movers in Dubai Marina
                </h2>
                <p className="text-lg text-muted-foreground font-light">
                  Professional moving solutions with an established 25-year
                  history in the UAE.
                </p>
              </div>
              {/* Placeholder Image 5 (Enclosed Truck fleet / secure storage visual) */}
              <div className="lg:col-span-5">
                <div className="aspect-video w-full rounded-2xl bg-muted border border-border overflow-hidden relative shadow-md">
                  <Image
                    src="/local/satisfied-customer-handshake-movers-packers-dubai-marina.jpg"
                    alt="Satisfied Dubai Marina resident shaking hands with Movers and Packers UAE mover after a completed apartment move, pay after satisfaction"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-2xl border border-border space-y-3 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-primary shrink-0" />
                  <h3 className="font-bold text-lg text-foreground">
                    We have been doing this since 1998
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We started moving furniture in Dubai in 1998. When we
                  registered the company, most of the moving businesses you see
                  ranking online now did not exist yet. One major competitor
                  launched in 2003. Others in 2008 or later. We have been
                  operating continuously for over 25 years, licensed and legally
                  registered from day one. That is not a difficult thing to
                  verify. Ask our owner directly when you call or message us.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border space-y-3 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-primary shrink-0" />
                  <h3 className="font-bold text-lg text-foreground">
                    You pay after the job is done, not before
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We do not ask for payment until the move is complete and you
                  are happy with the result. No upfront deposit. No partial
                  payment before the truck gets loaded. Once everything is
                  delivered and assembled, you inspect the work. Payment comes
                  after you are satisfied, by cash, bank transfer, or bank
                  cheque. A company that has operated since 1998 does not stay
                  in business by running poor jobs and disappearing. This policy
                  is the practical expression of that.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border space-y-3 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-primary shrink-0" />
                  <h3 className="font-bold text-lg text-foreground">
                    Fully enclosed box trucks for UAE conditions
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We operate both open and enclosed trucks. For Dubai Marina
                  residential moves, fully enclosed box trucks are the default.
                  Dubai Marina summers regularly reach 45 degrees Celsius, and
                  sandstorms hit without much warning. Leather furniture, wooden
                  pieces, and electronics are all at risk inside an open truck
                  under those conditions. Our enclosed vehicles are RTA-approved
                  and come in 3-tonne and 4-tonne configurations matched to your
                  move.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border space-y-3 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-primary shrink-0" />
                  <h3 className="font-bold text-lg text-foreground">
                    The quote you get is the bill you pay
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The number on your written quote is the number on your
                  invoice. There are no extra charges for high-floor carry
                  distance, elevator trips, or corridor protection. Those costs
                  go into the quote before it is sent to you. This is how we
                  have worked for over two decades. It keeps things simple on
                  move day and it avoids the kind of disputes that damage a
                  company&apos;s reputation.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border space-y-3 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-primary shrink-0" />
                  <h3 className="font-bold text-lg text-foreground">
                    Arabic and English speaking team
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our team communicates in both Arabic and English. For UAE
                  national clients and Arabic-speaking residents in Dubai
                  Marina, there is no language barrier to work around when
                  planning or running your move.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border space-y-3 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-primary shrink-0" />
                  <h3 className="font-bold text-lg text-foreground">
                    Same-day and urgent moves
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If you just arrived in the UAE or need to move at short
                  notice, message us on WhatsApp. We handle urgent moves in
                  Dubai Marina and will tell you honestly what availability
                  looks like.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                How much do movers and packers in Dubai Marina cost?
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                The cost of movers and packers Dubai Marina residents hire
                varies based on apartment size, floor level, packing
                requirements, and move date. The table below gives you a
                starting point. Your actual fixed quote is sent after we
                understand the specifics.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted text-foreground text-sm font-semibold border-b border-border">
                      <th className="p-4 md:p-5">Move type</th>
                      <th className="p-4 md:p-5">Indicative range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-sm text-muted-foreground">
                    <tr>
                      <td className="p-4 md:p-5 font-medium text-foreground">
                        Studio / 1BHK apartment
                      </td>
                      <td className="p-4 md:p-5">AED 800 – AED 1,800</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-5 font-medium text-foreground">
                        2BHK apartment
                      </td>
                      <td className="p-4 md:p-5">AED 1,600 – AED 3,000</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-5 font-medium text-foreground">
                        3BHK apartment
                      </td>
                      <td className="p-4 md:p-5">AED 2,500 – AED 4,500</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-5 font-medium text-foreground">
                        4BHK / Penthouse
                      </td>
                      <td className="p-4 md:p-5">AED 4,000+</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-5 font-medium text-foreground">
                        Villa or townhouse
                      </td>
                      <td className="p-4 md:p-5">AED 3,000+ (volume-based)</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-5 font-medium text-foreground">
                        Office relocation
                      </td>
                      <td className="p-4 md:p-5">
                        Quote-based on volume and floors
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-5 font-medium text-foreground">
                        Single furniture item
                      </td>
                      <td className="p-4 md:p-5">
                        Quote-based on item and floor
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A low starting quote with no detail behind it often ends up more
              expensive than expected once move-day additions appear. Our quotes
              cover carry distance, lift access, and corridor protection
              upfront. The number in the quote is the number you pay.
              <span className="block mt-2 font-medium text-foreground">
                And payment only happens after the job is finished.
              </span>
            </p>
          </div>
        </section>
        {/* FAQs Section */}
        <FAQSection
          title="Frequently asked questions — movers in Dubai Marina"
          faqs={DubaiMarinaFAQs}
        />
        {/* Bottom CTA Area */}
        <section className="py-16 border-b border-border text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold text-foreground mb-4">
              Get a free quote for your Dubai Marina move
            </h2>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              Call us, send a WhatsApp message, or fill the quote form on this
              page. We need your apartment size, floor level, and preferred move
              date. A written quote is sent to your WhatsApp within a few hours.
              We are available seven days a week. You only pay after the move is
              done and you are satisfied with the result.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                quoteBtn
                size="lg"
                className="shadow-lg shadow-primary/20"
              >
                Get Free Quote
              </Button>
              <Button callBtn size="lg" variant="secondary" className="gap-2">
                <PhoneCall className="size-4" /> Call Now
              </Button>
              <Button whatsappBtn size="lg" variant="outline" className="gap-2">
                <MessageSquare className="size-4 text-[#25D366]" /> WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Main Standard CTA Module */}
        <CTA
          title="Move Stress-Free with Dubai Marina's Local Logistics Experts"
          desc="Book your fully enclosed box truck and experienced crew today. Transparent quotes, direct building lift bookings, and strict on-time schedules. Zero deposits, pay after complete satisfaction."
        />

        {/* Navigation & Footer Links */}
        <footer className="py-10 bg-muted border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <Link
                href="/apartment-movers-dubai"
                className="hover:text-primary transition-colors"
              >
                apartment movers Dubai
              </Link>
              <Link
                href="/villa-movers-in-dubai"
                className="hover:text-primary transition-colors"
              >
                villa movers in Dubai
              </Link>
              <Link
                href="/office-movers-in-dubai"
                className="hover:text-primary transition-colors"
              >
                office movers in Dubai
              </Link>
              <Link
                href="/packing-services-in-dubai"
                className="hover:text-primary transition-colors"
              >
                packing services in Dubai
              </Link>
              <Link
                href="/single-furniture-moving-uae"
                className="hover:text-primary transition-colors"
              >
                single furniture moving UAE
              </Link>
              <Link
                href="/furniture-moving-services-uae"
                className="hover:text-primary transition-colors"
              >
                furniture moving services UAE
              </Link>
              <Link
                href="/house-shifting-dubai"
                className="hover:text-primary transition-colors"
              >
                house shifting Dubai
              </Link>
              <Link
                href="/how-to-hire"
                className="hover:text-primary transition-colors"
              >
                how to hire a mover
              </Link>
              <Link
                href="/movers-and-packers-in-dubai"
                className="hover:text-primary transition-colors"
              >
                movers and packers in Dubai
              </Link>
              <Link
                href="/moving-services"
                className="hover:text-primary transition-colors"
              >
                moving services
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

const googleReviews = [
  {
    name: "Ahmed Al Suwaidi",
    time: "1 week ago",
    star: 5,
    review:
      "Moved from JBR to Marina Gate. They dealt with the service lift approvals with building management on their own, I didn't have to follow up once. Paid only once everything was done to my satisfaction.",
    image: "/ava/32.jpg",
  },
  {
    name: "Chloe Davies",
    time: "3 weeks ago",
    star: 5,
    review:
      "We live right on Marina Walk where getting a truck in isn't easy, but they knew exactly which rear service road to use. Quick job, nothing got scratched.",
    image: "/ava/44.jpg",
  },
  {
    name: "Hassan Reza",
    time: "1 month ago",
    star: 5,
    review:
      "They came with a fully enclosed truck, which honestly saved us with the electronics in the Dubai heat. Also laid down floor runners in the corridors before we even thought to mention it.",
    image: "/ava/86.jpg",
  },
  {
    name: "Elena Petrova",
    time: "2 months ago",
    star: 5,
    review:
      "Moved my 1BHK out of Princess Tower. Packing was done properly, nothing rushed. The WhatsApp quote matched the final bill exactly. Not a dirham more.",
    image: "/ava/68.jpg",
  },
  {
    name: "Michael Smith",
    time: "2 weeks ago",
    star: 5,
    review:
      "You can tell they've done this a thousand times. Moved our heavy dining table through a tight corridor without a scratch. Would use them again.",
    image: "/ava/22.jpg",
  },
  {
    name: "Farah Al Qasimi",
    time: "4 weeks ago",
    star: 5,
    review:
      "Needed a same-day move to a studio in Cayan Tower, which I know is a big ask. They showed up when they said they would, took apart my bed, and had it back together in the new place within a few hours.",
    image: "/ava/90.jpg",
  },
  {
    name: "James O'Connor",
    time: "3 months ago",
    star: 5,
    review:
      "Moved our office in Dubai Marina over the weekend. Everything came labeled by room and we were up and running by Monday morning. No lost equipment, no confusion.",
    image: "/ava/54.jpg",
  },
  {
    name: "Maria Gonzalez",
    time: "5 days ago",
    star: 5,
    review:
      "The pay-after-satisfaction thing is real, not just a tagline. Team was polite, wrapped everything properly in bubble wrap, and cleaned up before they left.",
    image: "/ava/29.jpg",
  },
];
