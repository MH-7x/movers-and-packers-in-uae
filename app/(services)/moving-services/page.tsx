import CTA from "@/components/CTA";
import QuotationSection from "@/components/QuotationSection";
import { Button } from "@/components/ui/button";
import { AllServices } from "@/lib/data";
import { CheckCircle, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const OurMovingServices = () => {
  return (
    <main>
      <section
        id="movers-and-packers-in-uae-services"
        className="mt-10 max-w-7xl md:px-10 px-4 mx-auto"
      >
        <div className="bg-foreground rounded-2xl md:p-10 px-4 py-10 grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-8">
          <div>
            <p className="uppercase border-b border-primary text-gray-200 w-max">
              Our Moving Services
            </p>
            <h2 className="md:text-4xl text-3xl text-white mt-3">
              Our <span className="font-bold">Moving and Packing</span>{" "}
              <span className="md:block">Services in UAE</span>
            </h2>
            <Button size={"lg"} className="mt-5">
              Get A Moving Quote <ChevronRight />
            </Button>
          </div>
          <div>
            <p className="text-gray-200">
              Whether you&apos;re relocating your home, shifting your office, or
              moving a single piece of furniture, Movers and Packers in UAE
              offers a complete range of professional moving services across
              Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Al Ain, Umm Al
              Quwain, Fujairah, and all surrounding emirates.
            </p>
            <p className="text-gray-200 mt-2">
              With 25+ years of experience and thousands of successful moves
              completed across the UAE, we are your trusted, legally registered
              moving partner — available anytime, anywhere.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
          {AllServices.map((service, i) => (
            <div
              key={service.name}
              id={service.name.toLowerCase().replace(/\s+/g, "-")}
              className="rounded-2xl p-5 bg-muted"
            >
              <div className="relative aspect-video bg-white rounded-xl overflow-hidden">
                <Image
                  src={service.img.src}
                  alt={service.img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="mt-5 text-xl font-medium">
                {service.name} in Dubai, UAE
              </h3>
              <p className="mt-3 text-muted-foreground">
                {service.description}
              </p>
              <Button variant={"link"} className="mt-3 ">
                Contact Now <ChevronRight />
              </Button>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl md:px-0 px-4 mx-auto mt-20">
        <h2 className="md:text-4xl text-3xl text-center mb-16">
          Why Choose{" "}
          <span className="font-bold md:block ">
            Our Moving Services in UAE?
          </span>
        </h2>
        <div
          id="states"
          className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10"
        >
          <div className="flex items-center gap-x-3 border-b-2 border-gray-300 pb-3">
            <CheckCircle className="text-primary" size={25} />
            <p className="text-lg text-foreground font-medium">
              Officially registered company since 1998
            </p>
          </div>
          <div className="flex items-center gap-x-3 border-b-2 border-gray-300 pb-3">
            <CheckCircle className="text-primary" size={25} />
            <p className="text-lg text-foreground font-medium">
              25+ years of moving experience in UAE
            </p>
          </div>
          <div className="flex items-center gap-x-3 border-b-2 border-gray-300 pb-3">
            <CheckCircle className="text-primary" size={25} />
            <p className="text-lg text-foreground font-medium">
              Transparent quotes — no hidden charges
            </p>
          </div>
          <div className="flex items-center gap-x-3 border-b-2 border-gray-300 pb-3">
            <CheckCircle className="text-primary" size={25} />
            <p className="text-lg text-foreground font-medium">
              Same-day moving service available
            </p>
          </div>
          <div className="flex items-center gap-x-3 border-b-2 border-gray-300 pb-3">
            <CheckCircle className="text-primary" size={25} />
            <p className="text-lg text-foreground font-medium">
              Fully enclosed box trucks for heat & sandstorm protection
            </p>
          </div>
          <div className="flex items-center gap-x-3 border-b-2 border-gray-300 pb-3">
            <CheckCircle className="text-primary" size={25} />
            <p className="text-lg text-foreground font-medium">
              Pay upon satisfaction — after job completion
            </p>
          </div>
          <div className="flex items-center gap-x-3 border-b-2 border-gray-300 pb-3">
            <CheckCircle className="text-primary" size={25} />
            <p className="text-lg text-foreground font-medium">
              Serving all 7 UAE emirates
            </p>
          </div>
          <div className="flex items-center gap-x-3 border-b-2 border-gray-300 pb-3">
            <CheckCircle className="text-primary" size={25} />
            <p className="text-lg text-foreground font-medium">
              English & Arabic-speaking team
            </p>
          </div>
        </div>
      </section>
      <QuotationSection />
      <CTA
        title="Get a Free Moving Quote Today"
        desc="Ready to move? Contact us now for a free, no-obligation moving quote via phone, WhatsApp, or our online quote form. We'll respond within minutes with a clear, customized offer tailored to your needs."
      />
    </main>
  );
};

export default OurMovingServices;
