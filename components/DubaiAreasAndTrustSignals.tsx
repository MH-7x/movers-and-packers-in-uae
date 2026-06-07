import React from "react";
import Link from "next/link";
import {
  History,
  Truck,
  HandCoins,
  FileCheck2,
  ArrowRight,
  MapPin,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Interfaces for structured data
interface AreaItem {
  name: string;
  slug: string;
  descriptor: string;
}

interface AreaGroup {
  categoryName: string;
  areas: AreaItem[];
}

export default function DubaiAreasAndTrustSignals() {
  // Structured Area Data grouped for logical UX flow
  const areaGroups: AreaGroup[] = [
    {
      categoryName: "Central Dubai & Business Corridors",
      areas: [
        {
          name: "Downtown Dubai",
          slug: "/dubai-areas",
          descriptor: "Luxury towers, Burj Khalifa district, Emaar permits",
        },
        {
          name: "Business Bay",
          slug: "/dubai-areas",
          descriptor: "Mixed residential-commercial, high-rise loading bays",
        },
        {
          name: "DIFC",
          slug: "/dubai-areas",
          descriptor:
            "Premium offices and residences, full commercial relocation",
        },
        {
          name: "Deira",
          slug: "/dubai-areas",
          descriptor:
            "Old Dubai's densest residential belt, Arabic-speaking communities",
        },
        {
          name: "Bur Dubai",
          slug: "/dubai-areas",
          descriptor: "Traditional residential, freight elevator buildings",
        },
        {
          name: "Karama",
          slug: "/dubai-areas",
          descriptor: "Affordable apartments, fast-turnaround moves",
        },
      ],
    },
    {
      categoryName: "Marina & Waterfront",
      areas: [
        {
          name: "Dubai Marina",
          slug: "/dubai-areas/movers-in-dubai-marina",
          descriptor: "200+ towers, elevator and permit specialists",
        },
        {
          name: "JBR",
          slug: "/dubai-areas",
          descriptor: "Beachfront towers, managed service elevator bookings",
        },
        {
          name: "JLT",
          slug: "/dubai-areas",
          descriptor: "79 towers, SZR access, DMCC cluster paperwork",
        },
        {
          name: "Palm Jumeirah",
          slug: "/dubai-areas",
          descriptor: "Villas and apartments, Nakheel permit coordination",
        },
      ],
    },
    {
      categoryName: "Midtown & Established Communities",
      areas: [
        {
          name: "Al Barsha",
          slug: "/dubai-areas",
          descriptor: "Near Mall of the Emirates, large villas and apartments",
        },
        {
          name: "Jumeirah",
          slug: "/dubai-areas",
          descriptor: "Beachside villas, Al Wasl and Umm Suqeim",
        },
        {
          name: "Mirdif",
          slug: "/dubai-areas",
          descriptor: "Family townhouses and villas, East Dubai",
        },
        {
          name: "Al Nahda",
          slug: "/dubai-areas",
          descriptor: "Dense apartments, Sharjah border crossings handled",
        },
        {
          name: "Al Qusais",
          slug: "/dubai-areas",
          descriptor: "Established residential, quick SZR and Ittihad access",
        },
        {
          name: "Ras Al Khor",
          slug: "/dubai-areas",
          descriptor: "Our home base — fastest response time in Dubai",
        },
      ],
    },
    {
      categoryName: "New Developments & Master Communities",
      areas: [
        {
          name: "JVC",
          slug: "/dubai-areas",
          descriptor: "Mid-rise towers, highest tenant turnover in Dubai",
        },
        {
          name: "JVT",
          slug: "/dubai-areas",
          descriptor: "Low-rise villas and townhouses, easy truck access",
        },
        {
          name: "Dubai Hills Estate",
          slug: "/dubai-areas",
          descriptor: "Premium Emaar community, large villas",
        },
        {
          name: "Arabian Ranches",
          slug: "/dubai-areas",
          descriptor: "Gated villa community, advance gate coordination",
        },
        {
          name: "Dubai Silicon Oasis",
          slug: "/dubai-areas",
          descriptor: "Tech hub residential towers",
        },
        {
          name: "Discovery Gardens",
          slug: "/dubai-areas",
          descriptor: "Cluster apartments, very high move frequency",
        },
        {
          name: "International City",
          slug: "/dubai-areas",
          descriptor: "Country-cluster apartments, active year-round",
        },
        {
          name: "Dubai Sports City",
          slug: "/dubai-areas",
          descriptor: "Mixed apartments and townhouses",
        },
        {
          name: "Motor City / Al Barsha South",
          slug: "/dubai-areas",
          descriptor: "Low-density residential, quieter moving corridors",
        },
        {
          name: "Town Square",
          slug: "/dubai-areas",
          descriptor: "New South Dubai development, growing population",
        },
      ],
    },
  ];

  return (
    <section
      className="w-full  pb-16 "
      aria-label="Dubai Areas and Trust Signals"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ======================================= */}
        {/*        TRUST SIGNALS BAR (4-ITEM)       */}
        {/* ======================================= */}
        <div className="mb-20">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="sr-only">Our Core Guarantees</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-border">
              {/* Signal 1 */}
              <div className="flex gap-4 items-start pt-4 first:pt-0 sm:pt-0 lg:px-4 first:pl-0">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <History className="size-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold  text-foreground">
                    Operating since 1998
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Before most of today&apos;s competitors existed
                  </p>
                </div>
              </div>

              {/* Signal 2 */}
              <div className="flex gap-4 items-start pt-4 sm:pt-0 lg:px-4">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Truck className="size-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold  text-foreground">
                    RTA-approved enclosed trucks
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your belongings stay protected in 45°C heat and sandstorms
                  </p>
                </div>
              </div>

              {/* Signal 3 */}
              <div className="flex gap-4 items-start pt-4 sm:pt-0 lg:px-4">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <HandCoins className="size-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold  text-foreground">
                    Pay after completion
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    No deposit, no upfront fees — nothing until the job is done
                    to your satisfaction
                  </p>
                </div>
              </div>

              {/* Signal 4 */}
              <div className="flex gap-4 items-start pt-4 sm:pt-0 lg:px-4">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <FileCheck2 className="size-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold  text-foreground">DED licensed</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Registered company with a Google-verified business profile
                    you can check before calling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================= */}
        {/*               AREA GRID                 */}
        {/* ======================================= */}
        <div className="space-y-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Areas we serve across Dubai
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Click on your area below to see our localized high-rise moving
              solutions, community permissions setup, and route maps.
            </p>
          </div>

          <div className="space-y-16">
            {areaGroups.map((group, groupIdx) => (
              <div key={groupIdx} className="space-y-6">
                {/* Category Header */}
                <div className="border-b border-border pb-3">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary" />
                    {group.categoryName}
                  </h3>
                </div>

                {/* Grid layout matching instruction: Group into three columns on desktop, single column on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.areas.map((area, areaIdx) => (
                    <Link
                      key={areaIdx}
                      href={area.slug}
                      className="group flex flex-col justify-between p-5 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-sm transition-all text-left"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                            Movers in {area.name}
                          </h4>
                          <span className="text-muted-foreground/40 group-hover:text-primary/70 transition-colors">
                            <ArrowRight className="size-4" />
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground/90 leading-relaxed font-light">
                          {area.descriptor}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Unlisted / Fallback Area Card */}
          <div className="mt-12 bg-muted/40 border border-border rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex gap-4 items-start text-left">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin className="size-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-lg text-foreground">
                  Don&apos;t see your area?
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                  Call us. If we haven&apos;t moved someone in your building,
                  we&apos;ve moved someone in the next one.
                </p>
              </div>
            </div>
            <div className="shrink-0 flex gap-3">
              <Button callBtn size="lg">
                <PhoneCall />
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
