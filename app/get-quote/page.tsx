import CTA from "@/components/CTA";
import { FAQSection } from "@/components/FaqsSection";
import QuotationSection from "@/components/QuotationSection";
import { MovingQuoteFAQs } from "@/lib/FaqsData";

import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Get a Quote from UAE's Top Movers and Packers",
      desc: "Get a free moving quote from trusted UAE movers. No obligation, no hidden charges. We respond within 5-10 minutes. Instant quote available online.",
    },
    image: {
      path: "/mover-and-packers-in-uae.jpg",
      alt: "Movers and Packers in UAE - Professional Moving Company",
    },
    path: "/get-quote",
  },
});

const GetAQuotePage = () => {
  return (
    <main>
      <QuotationSection invert h1 />
      <section className="mt-20 max-w-4xl mx-auto md:rounded-3xl bg-secondary aspect-video overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.857246591078!2d55.336691099999996!3d25.1742976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67f26b9647f1%3A0x51a249f2372b6e1b!2zTW92ZXJzIGFuZCBQYWNrZXJzIGluIFVBRSDZhtmC2YQg2KfZhNij2KvYp9irINmB2Yog2KfZhNil2YXYp9ix2KfYqg!5e0!3m2!1sen!2s!4v1776345171481!5m2!1sen!2s"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <FAQSection
        title="Frequently Asked Questions About Getting Quote From Movers and Packers in UAE"
        faqs={MovingQuoteFAQs}
      />
      <CTA
        title="UAE's Trusted Movers & Packers — Get Your Free Quote Today"
        desc="Over 25 years. Thousands of moves. Zero hidden charges. Whether you're moving a studio apartment or an entire office, our professional team is ready to handle it — safely, on time, and within your budget. Fill in the form above or reach out directly on WhatsApp. We'll get back to you faster than you think."
      />
    </main>
  );
};

export default GetAQuotePage;
