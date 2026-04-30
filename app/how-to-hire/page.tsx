import { FAQSection } from "@/components/FaqsSection";
import { QuickFAQs } from "@/lib/FaqsData";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import heroImage from "@/public/how-to-hire-movers-uae-whatsapp-booking-professional-moving-company.jpg";
import Image from "next/image";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "How To Hire | Movers and Packers in UAE",
      desc: " Hiring a moving company in UAE doesn't have to be complicated. Here's exactly how it works with us — step by step, no confusion.",
    },
    image: {
      path: "/about-us-professional-movers-packers-team-dubai-uae.jpg",
      alt: "Movers and Packers in uae professional moving team standing confidently in front of a branded company truck with the Dubai skyline in the background",
    },
    path: "/how-to-hire",
  },
});

const steps = [
  {
    number: "01",
    title: "Contact Us",
    content: (
      <>
        <p className="text-stone-600 leading-relaxed mb-4">
          You have a few ways to reach us:
        </p>
        <ul className="space-y-3 mb-4">
          <li className="flex gap-3">
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            <span className="text-stone-600">
              <strong className="text-stone-800 font-medium">
                Call or WhatsApp
              </strong>{" "}
              — The fastest option. Just send us a message or call, and
              we&apos;ll respond quickly.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            <span className="text-stone-600">
              <strong className="text-stone-800 font-medium">
                Fill the quote form on our website
              </strong>{" "}
              — It&apos;s free. Describe your move, and we&apos;ll get back to
              you in a short time.
            </span>
          </li>
        </ul>
        <p className="text-stone-600 leading-relaxed">
          We cover all UAE emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al
          Khaimah, Fujairah, Al Ain, Umm Al Quwain, and nearby areas. Wherever
          you are, one message is enough to start.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Tell Us About Your Move",
    content: (
      <>
        <p className="text-stone-600 leading-relaxed mb-4">
          Once you contact us, just tell us:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Where are you moving from and to?",
            "What do you need moved? (Home, villa, apartment, office, furniture only, etc.)",
            "When do you want to move?",
            "Any special items? (Heavy safes, hospital equipment, machinery, fragile items)",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-stone-600">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-stone-600 leading-relaxed">
          The more detail you share, the more accurate your quote will be. But
          even a rough idea is fine to start.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Get Your Quote",
    content: (
      <>
        <p className="text-stone-600 leading-relaxed mb-4">
          We&apos;ll send you a clear, itemized quote on your WhatsApp or email.
          Everything is listed — no hidden charges, no surprises later.
        </p>
        <div className="bg-amber-50 border border-amber-100 rounded-xl px-5 py-4 mb-4">
          <p className="text-stone-700 font-medium text-sm">
            If your quote is{" "}
            <span className="text-amber-700 font-semibold">1,000 AED</span>,
            that&apos;s exactly what you pay. Nothing more.
          </p>
        </div>
        <p className="text-stone-600 leading-relaxed">
          For larger commercial or premium moves, we may need a short survey
          before confirming the final price. We&apos;ll let you know if
          that&apos;s the case.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Confirm the Booking",
    content: (
      <p className="text-stone-600 leading-relaxed">
        Once you&apos;re happy with the quote, just confirm the date and time.
        We&apos;ll lock it in. If you&apos;re in a rush, let us know — we offer
        same-day moving for urgent situations. Just contact us and we&apos;ll
        work out what&apos;s possible based on your needs.
      </p>
    ),
  },
  {
    number: "05",
    title: "We Show Up and Handle Everything",
    content: (
      <>
        <p className="text-stone-600 leading-relaxed mb-4">
          On move day, our trained team arrives with the right truck for your
          job — either an open truck or a fully enclosed box truck depending on
          what you&apos;re moving and the conditions.
        </p>
        <p className="text-stone-600 leading-relaxed">
          We pack, load, transport, and unload. If you need curtain fixing or
          installation at the new place, we do that too. You don&apos;t need to
          manage anything. That&apos;s what we&apos;re here for.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Pay After the Job Is Done",
    content: (
      <p className="text-stone-600 leading-relaxed">
        You pay only after the work is completed and you&apos;re satisfied.
        We&apos;re not the type of company that disappears after taking payment.
        Your satisfaction is what we care about.
      </p>
    ),
  },
];

const trustPoints = [
  "25+ years of experience in moving across UAE",
  "Registered company with a Google Business Profile you can verify",
  "Branded trucks, trained staff, and proper packing materials",
  "Fluent in English and Arabic",
  "No hidden fees — ever",
  "Available for both residential and commercial moves",
];

export default function HowToHire() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-foreground text-white px-4 pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-400 blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-amber-400 blur-3xl translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-6 font-medium">
            Movers &amp; Packers UAE
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-light leading-tight mb-6 text-white">
            How to Hire Us as Your
            <br />
            <em className="not-italic text-primary">Moving Company</em> in UAE
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl leading-relaxed">
            Hiring a moving company in UAE doesn&apos;t have to be complicated.
            Here&apos;s exactly how it works with us — step by step, no
            confusion.
          </p>
        </div>
      </section>

      {/* Image Placeholder — Hero */}
      <div className="max-w-4xl mx-auto px-4 -mt-10 mb-16 relative z-20">
        <div className="w-full aspect-video rounded-2xl bg-stone-100 border border-stone-200 flex flex-col items-center justify-center gap-3 shadow-sm relative overflow-hidden">
          <Image
            src={heroImage}
            alt="UAE resident booking Movers and packers in uae professional moving service via WhatsApp while the team arrives and begins the move in his apartment"
            className="object-cover"
            fill
            placeholder="blur"
            loading="eager"
          />
        </div>
      </div>

      {/* Steps */}
      <section className="max-w-4xl mx-auto px-4 mb-24">
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 group"
            >
              {/* Left — number + line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-2 border-stone-200 group-hover:border-primary transition-colors duration-300 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-sm font-light text-stone-400 group-hover:text-primary transition-colors duration-300">
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-stone-100 mt-3 min-h-[2rem]" />
                )}
              </div>

              {/* Right — content */}
              <div className="pb-8">
                <h2 className="font-display text-2xl font-light text-stone-900 mb-4">
                  {step.title}
                </h2>
                {step.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-stone-50 border-t border-stone-100 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary text-xs tracking-[0.2em] uppercase mb-4 font-medium">
                Why Us
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-stone-900 leading-snug mb-6">
                Why People Choose Us
              </h2>
              <ul className="space-y-4">
                {trustPoints.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-stone-600 text-[15px]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image placeholder */}
            <div className="w-full aspect-4/3 rounded-2xl bg-stone-200 border border-stone-200 flex flex-col items-center justify-center gap-3 relative overflow-hidden">
              <Image
                src="/why-choose-movers-packers-uae-trusted-experienced-moving-company-satisfaction.jpg"
                alt="Satisfied UAE client receiving job completion receipt from experienced Movers & Packers team member outside a residential building after a successfully completed move"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={QuickFAQs} />
      {/* CTA Banner */}
      <section className="bg-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-light text-white mb-2">
              Ready to book your move?
            </h2>
            <p className="text-stone-400 text-sm">
              One call or WhatsApp is all it takes.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="tel:+971507745691"
              className="bg-primary hover:bg-primary/90 transition-colors text-white font-medium text-sm px-6 py-3 rounded-xl"
            >
              Call Now
            </a>
            <a
              href="/get-quote"
              className="border border-white/50 hover:border-white transition-colors text-white text-sm px-6 py-3 rounded-xl"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
