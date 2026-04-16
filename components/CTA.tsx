import Image from "next/image";
import { Button } from "./ui/button";
import { ListTodoIcon, PhoneCall } from "lucide-react";

const CTA = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <section className="mt-20 bg-foreground md:px-20 px-3 md:py-0 pt-16 items-center md:gap-0 gap-y-10 min-h-96 grid md:grid-cols-2 relative overflow-hidden ">
      <div>
        <h2 className="md:text-4xl text-3xl font-bold text-white">{title}</h2>
        <p className=" mt-4 text-white/80">{desc}</p>
        <div className="mt-6 flex gap-x-3">
          <Button quoteBtn size={"lg"}>
            <ListTodoIcon />
            Get A Quote
          </Button>
          <Button size={"lg"} variant={"secondary"}>
            <PhoneCall />
            Call Us Now
          </Button>
        </div>
      </div>
      <div className="z-20 relative md:h-[420px] h-96">
        <Image
          src={"/cta-image.png"}
          alt="cta image"
          fill
          className="absolute object-contain object-center"
        />
      </div>
      <div className="absolute inset-y-0 right-0 md:w-1/2 w-full bg-primary md:origin-top-right origin-bottom-right transform -skew-x-[45deg] md:-mr-[500px] " />
    </section>
  );
};

export default CTA;
