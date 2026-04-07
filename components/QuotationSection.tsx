import { JSX } from "react";
import { Button } from "./ui/button";
import { MailCheck, MessageCircleCheck, PhoneCall, Send } from "lucide-react";

const QuotationSection = ({
  invert = false,
  title,
  desc,
  btnText,
}: {
  invert?: boolean;
  title?: JSX.Element;
  desc?: string;
  btnText?: string;
}) => {
  return (
    <section
      id="moving-quote-form-section"
      className="mt-32 w-full relative overflow-hidden md:px-20 px-4 grid lg:grid-cols-2 grid-cols-1 gap-16 items-center"
    >
      <div className={invert ? "md:order-2 order-1" : ""}>
        <h2 className="md:text-4xl text-3xl">
          {title ? (
            title
          ) : (
            <>
              <span className="font-bold md:block">
                Get a Free Moving Quote —{" "}
              </span>{" "}
              From Movers and Packers in UAE
            </>
          )}
        </h2>
        <p className="mt-5 leading-tight text-muted-foreground">
          {desc ? (
            desc
          ) : (
            <>
              Tell us what you need to move, where from, and where to. We at
              movers and packers in uae will send back a clear, itemized quote
              on WhatsApp or by email. No unclear estimates. The number we give
              you is the number on the invoice.
            </>
          )}
        </p>
        <p className="mt-2 leading-tight text-muted-foreground">
          We usually respond within an hour.
        </p>
        <h3 className="mt-5 text-xl font-medium text-white">
          Ways to Contact Us
        </h3>
        <ul className="mt-5 grid md:grid-cols-3 grid-cols-2 gap-5">
          <li className="flex flex-col items-center gap-y-2 text-muted-foreground leading-tight text-center text-sm">
            <PhoneCall
              size={30}
              strokeWidth={1}
              className="shrink-0 text-primary"
            />
            <p>Call Us — talk to our team directly and get answers quick</p>
          </li>
          <li className="flex flex-col items-center gap-y-2 text-muted-foreground leading-tight text-center text-sm">
            <MessageCircleCheck
              size={30}
              strokeWidth={1}
              className="shrink-0 text-primary"
            />
            <p>WhatsApp — send your move details and get a quote fast</p>
          </li>
          <li className="flex flex-col items-center gap-y-2 text-muted-foreground leading-tight text-center text-sm md:col-span-1 col-span-2 md:px-0 px-16">
            <MailCheck
              size={30}
              strokeWidth={1}
              className="shrink-0 text-primary"
            />
            <p>Email — request a full written quote at your convenience</p>
          </li>
        </ul>
      </div>
      <div
        className={`bg-foreground md:p-10 p-8 rounded-2xl ${invert ? "md:order-1 order-2" : ""}`}
      >
        <p className="text-primary uppercase">request a </p>
        <h3 className="md:text-4xl text-3xl text-white mt-0">
          Free Moving Quote.
        </h3>
        <form
          id="quote-form"
          className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-5 text-muted text-[14.5px]"
        >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="py-3 px-2 border-b border-b-white focus:border-b-primary outline-none"
          />
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Phone No"
            className="py-3 px-2 border-b border-b-white focus:border-b-primary outline-none"
          />
          <input
            type="text"
            name="movingFrom"
            id="movingFrom"
            placeholder="Moving From"
            className="py-3 px-2 border-b border-b-white focus:border-b-primary outline-none"
          />
          <input
            type="text"
            name="movingTo"
            id="MovingTo"
            placeholder="Moving To"
            className="py-3 px-2 border-b border-b-white focus:border-b-primary outline-none"
          />
          <textarea
            name="message"
            id="message"
            placeholder="More Details About Your Move.."
            className="py-3 px-2 border-b border-b-white focus:border-b-primary outline-none col-span-full min-h-28"
          ></textarea>
          <Button size={"lg"} className="mt-5">
            {btnText || "Get A Quote"} <Send strokeWidth={1} />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default QuotationSection;
