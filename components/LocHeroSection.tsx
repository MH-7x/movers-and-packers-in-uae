import Image, { StaticImageData } from "next/image";
import React from "react";
import { ReactNode } from "react";
import { Button } from "./ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

export const LocHeroSection = ({
  id,
  h1,
  desc,
  img,
}: {
  id: string;
  h1: ReactNode;
  desc: ReactNode;
  img: {
    src: StaticImageData;
    alt: string;
  };
}) => {
  return (
    <section
      id={id}
      className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Background Gradients */}

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto mt-16 sm:mt-20">
        <p className="bg-red-50 border text-primary text-sm px-4 py-1 rounded-3xl">
          5 Stars Rated on Google
        </p>
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl mt-2 font-bold  tracking-[-0.03em] leading-[1.05] mb-6">
          {h1}
        </h1>

        {/* Subheading */}
        <div className="max-w-4xl  text-muted-foreground leading-relaxed mb-10 font-medium flex flex-col gap-y-1">
          {desc}
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Button quoteBtn size={"lg"}>
            Get A Free Moving Quote
          </Button>
          <Button quoteBtn variant={"secondary"} size={"lg"}>
            <PhoneCall />
            Call Us Now
          </Button>
        </div>
      </div>
      <div className="mt-16 lg:w-4xl w-full rounded-4xl aspect-video relative overflow-hidden">
        <Image
          src={img.src}
          fill
          alt={img.alt}
          placeholder="blur"
          loading="eager"
          className="object-cover"
        />
      </div>
    </section>
  );
};
