import { JSX, ReactNode } from "react";
import { Button } from "./ui/button";
import { MailCheck, MessageCircleCheck, PhoneCall, Send } from "lucide-react";
import QuoteForm from "./QuoteForm";

const QuotationSection = ({
  invert = false,
  title,
  desc,
  extra,
  btnText,
  h1,
  ar,
}: {
  invert?: boolean;
  title?: JSX.Element;
  desc?: string;
  extra?: ReactNode;
  btnText?: string;
  h1?: boolean;
  ar?: boolean;
}) => {
  return (
    <section
      id="moving-quote-form-section"
      className={`${h1 ? "mt-16" : "mt-32"} w-full relative overflow-hidden md:px-20 px-4 grid lg:grid-cols-2 grid-cols-1 gap-16 items-center`}
    >
      <div className={invert ? "md:order-2 order-1" : ""}>
        {h1 ? (
          <h1 className="md:text-4xl text-3xl">
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
          </h1>
        ) : (
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
        )}
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
        {extra && (
          <p className="mt-5 leading-tight text-muted-foreground">{extra}</p>
        )}
        <p className="mt-2 leading-tight text-muted-foreground">
          {ar
            ? "عادةً ما نرد في غضون 10 دقائق."
            : " We usually respond within 10 minutes."}
        </p>
        <h3 className="mt-5 text-xl font-medium text-foreground">
          {ar ? "طرق التواصل معنا" : "Ways to Contact Us"}
        </h3>
        <ul className="mt-5 grid md:grid-cols-3 grid-cols-2 gap-5">
          <li className="flex flex-col items-center gap-y-2 text-muted-foreground leading-tight text-center text-sm">
            <PhoneCall
              size={30}
              strokeWidth={1}
              className="shrink-0 text-primary"
            />
            <p>
              {ar
                ? "تواصل معنا - تحدث إلى فريقنا واحصل على إجابات سريعة"
                : "Call Us — talk to our team and get answers quickly"}
            </p>
          </li>
          <li className="flex flex-col items-center gap-y-2 text-muted-foreground leading-tight text-center text-sm">
            <MessageCircleCheck
              size={30}
              strokeWidth={1}
              className="shrink-0 text-primary"
            />
            <p>
              {ar
                ? "واتساب — أرسل تفاصيل نقلك واحصل على عرض سعر سريع"
                : "WhatsApp — send your move details and get a quote fast"}
            </p>
          </li>
          <li className="flex flex-col items-center gap-y-2 text-muted-foreground leading-tight text-center text-sm md:col-span-1 col-span-2 md:px-0 px-16">
            <MailCheck
              size={30}
              strokeWidth={1}
              className="shrink-0 text-primary"
            />
            <p>
              {ar
                ? "إيميل — اطلب عرض أسعار مكتوبًا بالكامل في الوقت الذي يناسبك"
                : "Email — request a full written quote at your convenience"}
            </p>
          </li>
        </ul>
      </div>
      <div
        className={`bg-foreground md:p-10 p-8 rounded-2xl ${invert ? "md:order-1 order-2" : ""}`}
      >
        <p className="text-red-400 uppercase">{ar ? "طلب أ " : "request a "}</p>
        <h3 className="md:text-4xl text-3xl text-white mt-0">
          {ar ? "اقتباس متحرك مجاني." : "Free Moving Quote."}
        </h3>
        <QuoteForm btnText={ar ? "احصل على عرض أسعار" : btnText} />
      </div>
    </section>
  );
};

export default QuotationSection;
