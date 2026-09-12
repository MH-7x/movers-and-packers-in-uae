import React from "react";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { 
  PhoneCall, 
  MessageSquare, 
  Sparkles, 
  Calendar, 
  Users, 
  Percent, 
  ShieldCheck, 
  Truck, 
  PackageCheck, 
  Wrench,
  CheckCircle2,
  ArrowDown
} from "lucide-react";
import QuotationSection from "@/components/QuotationSection";
import { OfferCountdown, SpotsUrgencyBadge, SpotsMeter } from "./OfferClientComponents";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "عرض نقل اثاث دبي: خصم 10٪ لأول 10 عملاء فقط",
      desc: "هل تخطط نقل اثاث دبي؟ احصل على خصم 10٪ الآن! يبدأ العرض من 14 سبتمبر (8:00 صباحاً) حتى 20 سبتمبر (8:00 صباحاً) لأول 10 عملاء فقط.",
    },
    image: {
      path: "/ar/نقل-اثاث-دبي-مارينا-نقل-الأثاث-في-الإمارات.jpg",
      alt: "عرض خصم 10% على نقل اثاث دبي",
    },
    path: "/dubai-offer",
  },
});

export default function DubaiMovingOfferPage() {
  const whatsappUrl = `https://wa.me/971507745691?text=${encodeURIComponent(
    "مرحباً، أود الاستفادة من خصم 10٪ لنقل الأثاث في دبي (عرض 14 سبتمبر 8:00 ص إلى 20 سبتمبر 8:00 ص لأول 10 عملاء). هل لا زالت المقاعد متاحة؟"
  )}`;

  return (
    <main className="bg-white text-slate-900 selection:bg-primary selection:text-white pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          
          {/* Top Clean Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
            <span>عرض حصري ومحدود في دبي</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.3] tracking-tight">
              هل تخطط نقل اثاث دبي؟{" "}
              <span className="text-primary block mt-1.5 font-black">
                احصل على خصم 10٪ الآن!
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              لديك موعد قريب للانتقال؟ استغل عرضنا المحدود واحجز خدمة نقل الأثاث بسعر أفضل.
            </p>
          </div>

          {/* 3 Core Pillars (Clean, Flat, Minimalist) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1 text-right">
            <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-5 hover:border-slate-300 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                <Percent className="w-5 h-5" strokeWidth={2} />
              </div>
              <div className="font-bold text-base text-slate-900 mb-1">
                خصم 10٪
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                على خدمات نقل الأثاث في دبي
              </p>
            </div>

            <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-5 hover:border-slate-300 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-700 mb-3">
                <Calendar className="w-5 h-5" strokeWidth={2} />
              </div>
              <div className="font-bold text-base text-slate-900 mb-1">
                14 — 20 سبتمبر
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                يبدأ 14 سبتمبر (8:00 ص) حتى 20 سبتمبر (8:00 ص)
              </p>
            </div>

            <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-5 hover:border-slate-300 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-slate-900/10 flex items-center justify-center text-slate-900 mb-3">
                <Users className="w-5 h-5" strokeWidth={2} />
              </div>
              <div className="font-bold text-base text-slate-900 mb-1">
                لأول 10 عملاء فقط
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                العرض محدود لأول 10 حجوزات مؤكدة فقط
              </p>
            </div>
          </div>

          {/* Scope Note */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 text-sm sm:text-base font-medium leading-relaxed flex items-start sm:items-center gap-3.5 text-right">
            <Truck className="w-5 h-5 text-primary shrink-0 mt-0.5 sm:mt-0" strokeWidth={1.75} />
            <p>
              سواء كنت تنقل قطع أثاث محدودة أو أثاث منزل كامل، فريقنا جاهز لمساعدتك في نقل أثاثك بسهولة وأمان وبدون عناء.
            </p>
          </div>

          {/* Scarcity Badge, Spots Meter, and Live Countdown */}
          <div className="space-y-3.5 pt-2">
            <div>
              <SpotsUrgencyBadge />
            </div>
            <SpotsMeter />
            <OfferCountdown />
          </div>

          {/* Main Direct CTAs */}
          <div className="pt-2 space-y-3.5 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+971507745691"
                className="flex-1 inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-xl shadow-sm transition-all text-sm sm:text-base"
              >
                <PhoneCall className="w-4 h-4" strokeWidth={2} />
                <span>اتصل الآن: 050 7745691</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-sm transition-all text-sm sm:text-base"
              >
                <MessageSquare className="w-4 h-4" strokeWidth={2} />
                <span>واتساب مباشر</span>
              </a>
            </div>

            <div className="text-xs sm:text-sm font-bold text-slate-800 bg-slate-50 border border-slate-200/90 py-2.5 px-4 rounded-xl">
              احجز مبكرًا، وفّر أكثر، وانقل أثاثك بثقة.
            </div>

            <div className="pt-1">
              <a
                href="#moving-quote-form-section"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-primary transition-colors"
              >
                <span>أو املأ نموذج عرض السعر أدناه</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Minimal 4 Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 text-center text-xs text-slate-700 font-semibold border-t border-slate-100">
            <div className="flex items-center justify-center gap-1.5 bg-slate-50 border border-slate-200/70 rounded-xl py-2.5 px-2">
              <Wrench className="w-4 h-4 text-primary shrink-0" strokeWidth={1.75} />
              <span>فك وتركيب احترافي</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 bg-slate-50 border border-slate-200/70 rounded-xl py-2.5 px-2">
              <PackageCheck className="w-4 h-4 text-primary shrink-0" strokeWidth={1.75} />
              <span>تغليف كرتون وبابلز</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 bg-slate-50 border border-slate-200/70 rounded-xl py-2.5 px-2">
              <Truck className="w-4 h-4 text-primary shrink-0" strokeWidth={1.75} />
              <span>شاحنات بوكس مغلقة</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 bg-slate-50 border border-slate-200/70 rounded-xl py-2.5 px-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" strokeWidth={1.75} />
              <span>الدفع بعد الرضا 100٪</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. REUSED QUOTATION SECTION */}
      <div className="-mt-16">
        <QuotationSection
          ar={true}
          h1={false}
          title={
            <>
              <span className="font-bold text-primary block">
                احجز الآن بخصم 10٪
              </span>
              عرض نقل الأثاث في دبي
            </>
          }
          desc="لديك موعد قريب للانتقال؟ استغل عرضنا المحدود واحجز خدمة نقل الأثاث بسعر أفضل. املأ بيانات نقلك أدناه وسنتواصل معك خلال 10 دقائق لتأكيد حجزك وتطبيق الخصم لأول 10 عملاء."
          btnText="تأكيد حجز العرض (خصم 10٪)"
        />
      </div>

      {/* 3. STICKY MOBILE ACTION BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-lg flex items-center justify-between gap-3">
        <div className="flex flex-col text-right">
          <span className="text-[11px] font-bold text-primary">خصم 10٪ لأول 10 عملاء</span>
          <span className="text-[10px] text-slate-500">14 سبتمبر (8 ص) — 20 سبتمبر (8 ص)</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="tel:+971507745691"
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2 px-3 rounded-lg flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" strokeWidth={2} />
            <span>اتصل</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 px-3 rounded-lg flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" strokeWidth={2} />
            <span>واتساب</span>
          </a>
        </div>
      </div>

    </main>
  );
}
