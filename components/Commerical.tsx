import Image from "next/image";
import { Button } from "./ui/button";

const Commercial = () => {
  return (
    <section
      id="commercial-moving-services-in-uae"
      className="w-full md:h-[500px] h-[580px] relative mt-20"
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
          <span className="font-normal">
            For Businesses That Cannot Afford Mistakes
          </span>
        </h2>
        <p className="mt-7 text-muted-foreground max-w-3xl text-[17px]">
          Moving a business is not the same as moving a home. There is equipment
          that breaks easily, systems that need handling with care, and
          operations that cannot stay down for long.
        </p>
        <p className="mt-2 text-muted-foreground max-w-3xl text-[17px]">
          Hiring an unlicensed mover for a commercial job is a risk most
          business owners only make once. We are a legally registered moving
          company with proper trucks, trained staff, and the experience to
          handle business assets — safely and on schedule.
        </p>
        <Button className="mt-5">Contact For Commercial Moving</Button>
      </div>
    </section>
  );
};

export default Commercial;
