import { movingProcess } from "@/lib/data";
import { LucideProps } from "lucide-react";
import Image from "next/image";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";

const MovingProcess = ({
  title,
  desc,
  process,
}: {
  title?: ReactNode;
  desc?: string;
  process?: {
    step: number;
    title: string;
    description: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    arrow: boolean;
  }[];
}) => {
  return (
    <section
      id="movers-and-packers-moving-process-in-uae"
      className="max-w-7xl mx-auto md:px-10 px-4 mt-20"
    >
      <h2 className="md:text-4xl text-3xl text-center font-bold">
        {title ? (
          title
        ) : (
          <>
            Our Moving Process{" "}
            <span className="md:block font-normal">
              8 Steps from Start to Finish
            </span>
          </>
        )}
      </h2>
      <p className="text-lg text-muted-foreground text-center mt-3 max-w-xl mx-auto">
        {desc ? (
          desc
        ) : (
          <>
            Moving is stressful enough. Here is exactly what happens when you
            book with us, so nothing catches you off guard.
          </>
        )}
      </p>
      <div className="mt-14 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {(process || movingProcess).map((process, i) => (
          <div key={i}>
            <div className="flex items-center md:justify-between justify-end md:translate-y-0 md:translate-x-0 -translate-x-6 translate-y-8">
              <process.icon
                className="text-foreground opacity-70 lg:size-12 size-8"
                strokeWidth={1}
              />
              {process.arrow && (
                <Image
                  src={"/arrow.svg"}
                  alt="arrow icon"
                  width={60}
                  height={60}
                  className="lg:block hidden"
                />
              )}
            </div>
            <div className="flex item-center gap-x-2 mt-4">
              <div className="w-6 h-6 text-white text-shadow-2xs rounded-md text-sm bg-primary flex items-center justify-center">
                0{i + 1}
              </div>{" "}
              <h4 className="font-medium text-xl">{process.title}</h4>
            </div>
            <p className="mt-3 text-muted-foreground">{process.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovingProcess;
