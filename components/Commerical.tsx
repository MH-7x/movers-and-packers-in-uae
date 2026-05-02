import Image from "next/image";
import { Button } from "./ui/button";

const Commercial = () => {
  return (
    <section
      id="commercial-moving-services-in-uae"
      className="w-full md:h-[500px] h-[600px] relative mt-20"
    >
      <Image
        src={"/commerical-moving-services-in-uae.jpg"}
        alt="commercial moving services in uae"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw"
        className="object-cover object-center"
      />
      <div className="absolute  px-4 top-0 left-0 w-full h-full bg-gradient-to-r from-white/95 to-white/60 flex flex-col items-start justify-center md:px-20">
        <h2 className=" md:text-4xl text-3xl font-bold">
          Commercial Moving Services in UAE -<br className="md:block hidden" />
          <span className="font-normal">Trusted by Businesses</span>
        </h2>
        <p className="mt-7 text-muted-foreground max-w-3xl md:text-[17px] text-[15px] leading-tight md:leading-normal">
          If you run a business in the UAE, moving is not something you hand to
          a freelance team. You need a company with a trade license, trained
          staff, proper vehicles, and accountability when something goes wrong.
        </p>
        <p className="mt-2 text-muted-foreground max-w-3xl md:text-[17px] text-[15px] leading-tight md:leading-normal">
          Freelance movers don&apos;t carry business licences. They can&apos;t
          offer you written documentation, insurance, or a formal quote. If
          something gets damaged or lost, there&apos;s no recourse. That&apos;s
          a risk no business owner should take with expensive equipment or
          confidential property.
        </p>
        <p className="mt-2 text-muted-foreground max-w-3xl md:text-[17px] text-[15px] leading-tight md:leading-normal">
          We are a registered company with 25+ years of commercial moving
          experience in the UAE. We&apos;ve moved offices, banks, hospitals,
          schools, and restaurants.
        </p>
        <Button quoteBtn size={"lg"} className="mt-5">
          Contact For Commercial Moving
        </Button>
      </div>
    </section>
  );
};

export default Commercial;
