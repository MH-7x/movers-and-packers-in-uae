import DubaiAreasAndTrustSignals from "@/components/DubaiAreasAndTrustSignals";
import DubaiMovingDetailsSection from "@/components/DubaiMovingDetailsSection";
import { Button } from "@/components/ui/button";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Script from "next/script";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Dubai Areas We Serve - Movers and Packers in Dubai",
      desc: "looking for movers and packers in dubai ? We Serve all major areas and communities in Dubai since 1998. Call or WhatsApp for a free quote.",
    },
    image: {
      path: "/loc/movers-and-packers-in-dubai-professional-moving-service-burj-khalifa-golden-hour.jpg",
      alt: "areas we serve - movers and packers in dubai",
    },
    path: "/dubai-areas",
  },
});

function DubaiAreas() {
  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "Dubai Areas We Serve",
        url: "/dubai-areas",
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
        <section className="bg-foreground text-white px-4 pt-20 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-400 blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-amber-400 blur-3xl translate-y-1/2 -translate-x-1/3" />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-primary text-xs tracking-[0.2em] uppercase mb-6 font-medium">
              Movers and Packers in UAE
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-light leading-tight mb-6 text-white">
              Dubai Areas We Serve
              <br />
              <em className="not-italic text-primary">Movers and Packers</em> in
              Dubai
            </h1>
            <p className="text-gray-400 text-lg max-w-4xl leading-relaxed">
              We cover every district in Dubai — from high-rise towers in Dubai
              Marina to villa communities in Mirdif and Jumeirah. Pick your area
              from the list below to see how we handle your specific building
              type, permit process, and moving route. Our team has been doing
              this since 1998.
            </p>
            <p className="text-gray-400 text-lg max-w-4xl leading-relaxed">
              We bring RTA-approved enclosed trucks, an Arabic and
              English-speaking crew, and one firm price with nothing added on
              the day. You pay only after the job is done.
            </p>
            <div className="mt-5 flex gap-3">
              <Button size="lg" quoteBtn>
                Get A Moving Quote
              </Button>
              <Button size="lg" variant={"ghost"} whatsappBtn>
                Contact On WhatsApp
              </Button>
            </div>
          </div>
        </section>
        <div className="max-w-5xl mx-auto px-4 -mt-14 mb-20 relative z-20">
          <div className="bg-white rounded-2xl shadow-lg border border-stone-100 p-8 md:p-10">
            <div className="flex items-start md:flex-row flex-col gap-5">
              <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-stone-600 leading-relaxed mb-3">
                  Most Dubai moving companies started recently. We didn&apos;t.
                  Movers and Packers in UAE has been registered and operating in
                  Dubai since 1998 — before JBR existed, before the Palm was
                  finished, and before most of today&apos;s competitors were
                  even incorporated.
                </p>
              </div>
            </div>
            <div className="flex items-start md:flex-row flex-col gap-5">
              <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-stone-600 leading-relaxed mb-3">
                  That length of time isn&apos;t a selling point in itself; what
                  it means practically is that we&apos;ve moved in nearly every
                  building type this city has produced over 25 years. Old Deira
                  walk-ups, Emaar-managed Downtown towers, Nakheel-issued Palm
                  villa permits, DMCC cluster documentation for JLT — it&apos;s
                  all familiar ground.
                </p>
              </div>
            </div>
            <div className="flex items-start md:flex-row flex-col gap-5">
              <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-stone-600 leading-relaxed">
                  Our base is Ras Al Khor Industrial Area 1, which puts us
                  within a short drive of most Dubai districts. We move movers
                  and packers across every part of the city, on open or fully
                  enclosed trucks depending on your job, and we give you a
                  written, itemized quote before anything starts. You pay when
                  it&apos;s done. That&apos;s the whole model.
                </p>
              </div>
            </div>
          </div>
        </div>
        <DubaiAreasAndTrustSignals />
        <DubaiMovingDetailsSection />
      </main>
    </>
  );
}

export default DubaiAreas;
