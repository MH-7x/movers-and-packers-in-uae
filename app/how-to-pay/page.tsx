import { FAQSection } from "@/components/FaqsSection";
import { PaymentFAQs } from "@/lib/FaqsData";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Image from "next/image";

const paymentMethods = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Cash",
    desc: "The most common option. Pay directly to our team on the day of the move after the job is done.",
    tag: "Most Common",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
    title: "Online Bank Transfer",
    desc: "We&apos;ll share our bank details during the booking process.",
    tag: null,
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Bank Cheque",
    desc: "Accepted for commercial and larger moves, where applicable.",
    tag: "Commercial",
  },
];

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "How To Pay | Payment Methods For Paying Movers",
      desc: "We understand that trust is a big part of hiring a moving company. So we've kept our payment process as straightforward as possible.",
    },
    image: {
      path: "/about-us-professional-movers-packers-team-dubai-uae.jpg",
      alt: "Movers and Packers in uae professional moving team standing confidently in front of a branded company truck with the Dubai skyline in the background",
    },
    path: "/how-to-pay",
  },
});
export default function HowToPay() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-foreground text-white px-4 pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-400 blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-amber-400 blur-3xl translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-6 font-medium">
            Movers &amp; Packers UAE
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-light leading-tight mb-6 text-white">
            How Payment Works —{" "}
            <em className="not-italic text-primary">Simple, Clear, </em>
            and No Surprises
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl leading-relaxed">
            We understand that trust is a big part of hiring a moving company.
            So we&apos;ve kept our payment process as straightforward as
            possible.
          </p>
        </div>
      </section>

      {/* Pay After Card — floats over hero */}
      <div className="max-w-4xl mx-auto px-4 -mt-14 mb-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-lg border border-stone-100 p-8 md:p-10">
          <div className="flex items-start md:flex-row flex-col gap-5">
            <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
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
              <h2 className="font-display text-2xl font-light text-stone-900 mb-3">
                You Pay After the Job Is Done
              </h2>
              <p className="text-stone-600 leading-relaxed mb-3">
                This is one of the most important things to know:{" "}
                <strong className="text-stone-800 font-medium">
                  you pay once the move is complete and you&apos;re satisfied.
                </strong>
              </p>
              <p className="text-stone-600 leading-relaxed mb-3">
                We don&apos;t ask for large upfront payments and then disappear.
                We&apos;re a registered company with a real address, a verified
                Google Business listing, and 25+ years of history in UAE.
                We&apos;re not going anywhere.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Once our team finishes the job, you inspect everything, and then
                you pay. That&apos;s how it works.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <section className="max-w-4xl mx-auto px-4 mb-24">
        <p className="text-primary text-xs tracking-[0.2em] uppercase mb-4 font-medium">
          Accepted Methods
        </p>
        <h2 className="font-display text-3xl font-light text-stone-900 mb-10">
          What Payment Methods We Accept
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {paymentMethods.map((method, i) => (
            <div
              key={i}
              className="border border-red-100 rounded-2xl p-6 bg-red-50"
            >
              <div className="w-11 h-11 rounded-xl bg-white/50   flex items-center justify-center text-foreground  mb-5 shadow-sm">
                {method.icon}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-medium text-stone-900 text-[15px]">
                  {method.title}
                </h3>
                {method.tag && (
                  <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium tracking-wide">
                    {method.tag}
                  </span>
                )}
              </div>
              <p className="text-stone-500 text-sm leading-relaxed">
                {method.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-stone-500 text-sm">
          We explain all the payment details clearly while dealing with you
          before the move happens, so there&apos;s no confusion on the day.
        </p>
      </section>

      {/* No Hidden Charges */}
      <section className="bg-foreground py-20 px-4 mb-0">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-xs tracking-[0.2em] uppercase mb-4 font-medium">
              Transparency First
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-5">
              No Hidden Charges
            </h2>
            <p className="text-stone-400 leading-relaxed mb-4">
              What we quote is what you pay.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 mb-5">
              <p className="text-stone-300 text-sm leading-relaxed">
                If your moving quote is{" "}
                <span className="text-primary font-semibold">800 AED</span>, you
                pay <span className="text-primary font-semibold">800 AED</span>.
                No surprise fees added at the end for fuel, extra workers, or
                time.
              </p>
            </div>
            <p className="text-stone-400 leading-relaxed text-sm">
              This is one reason we put everything in writing — on your WhatsApp
              or email — so you can refer back to it at any time.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="w-full h-4/3 rounded-2xl relative overflow-hidden">
            <Image
              src={
                "/how-to-pay-movers-uae-transparent-quote-no-hidden-charges-payment.jpg"
              }
              alt="UAE client reviewing a clear itemized Movers & Packers moving quote document with no hidden charges before confirming a moving booking"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Commercial + Urgent */}
      <section className=" py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Premium / Commercial */}
          <div className="bg-white rounded-2xl border border-stone-100 p-7">
            <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center mb-5">
              <svg
                className="w-5 h-5 text-stone-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h2 className="font-display text-xl font-light text-stone-900 mb-4">
              For Premium or Commercial Moves
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              Larger moves — like office relocations, industrial machinery, or
              hospital equipment — sometimes need a more detailed payment
              arrangement. In those cases:
            </p>
            <ul className="space-y-3">
              {[
                "We discuss the payment structure clearly before any work begins",
                "Cheque payment is often the preferred option for large commercial moves",
                "You can meet with us directly if you&apos;d like to confirm all details in person",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-stone-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-stone-500 text-sm">
              Whatever your move type, there&apos;s always a clear agreement
              before we start.
            </p>
          </div>

          {/* Urgent */}
          <div className="bg-white rounded-2xl border border-stone-100 p-7">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-5">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="font-display text-xl font-light text-stone-900 mb-4">
              For Urgent or Same-Day Moves
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              If you need an urgent move, we still follow the same principle —
              no upfront surprises.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed">
              Contact us, describe your situation, and we&apos;ll give you a
              clear quote before anything begins. Same rules, same transparency,
              just a faster timeline.
            </p>

            {/* Image placeholder */}
            <div className="mt-6 w-full aspect-video rounded-xl relative overflow-hidden">
              <Image
                src={
                  "/how-to-pay-movers-uae-cash-payment-after-completion-transparent.jpg"
                }
                alt="UAE client making cash payment in AED dirhams to Movers & Packers team after a successfully completed move outside a residential building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={PaymentFAQs} />
      {/* CTA */}
      <section className="bg-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-light text-white mb-2">
              Have more questions about payment?
            </h2>
            <p className="text-white/70 text-sm">
              Just call or WhatsApp us — we&apos;ll walk you through everything.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="tel:0507745691"
              className="bg-primary hover:bg-primary transition-colors text-white font-medium text-sm px-4 py-3 rounded-xl"
            >
              Call Now
            </a>
            <a
              href="/get-quote"
              className="border border-white/10 hover:border-white/50 transition-colors text-white text-sm px-4 py-3 rounded-xl"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
