import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { PhoneCall } from "lucide-react";

const ServiceHero = ({
  title,
  desc,
  image,
  btnText,
}: {
  title: string;
  desc: string;
  image: { alt: string; src: StaticImageData };
  btnText: string;
}) => {
  return (
    <>
      <section
        className="w-full relative md:h-[90vh] h-[300px]"
        id="hero-section"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          placeholder="blur"
          loading="eager"
          className="absolute object-cover object-center"
          quality={90}
        />
        <div className="absolute top-0 left-0 w-full h-full md:bg-[#0000006c] md:mt-0 mt-72 flex items-end">
          <div className="md:w-[550px] w-full h-2/3  flex flex-col justify-center relative md:p-10 py-10 px-3 md:bg-white/90 rounded-tr-4xl">
            <div className="w-full h-5 b-red-bg absolute top-10 -left-10"></div>
            <h1 className="font-bold md:text-4xl text-2xl md:mt-5">{title}</h1>
            <p className="b-text mt-5">{desc}</p>
            <div className="mt-5 flex gap-x-3">
              {" "}
              <Button quoteBtn className="w-max!" size={"lg"}>
                {btnText}
              </Button>
              <Button
                callBtn
                className="w-max! bg-foreground hover:bg-foreground/90 md:flex hidden "
                size={"lg"}
              >
                Call Us Now <PhoneCall />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="md:mb-0 mb-[380px]" />
    </>
  );
};

export default ServiceHero;
