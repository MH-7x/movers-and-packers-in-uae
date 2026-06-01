import heroImage from "@/public/ar/نقل-عفش-دبي-شركة-موفرز-باكرز.jpg";
import Link from "next/link";

import { Button } from "@/components/ui/button"; // يرجى مطابقة هذا المسار لمجلد مكون الزر لديك
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Image from "next/image";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import Script from "next/script";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "نقل عفش دبي | شركة مرخصة 25 سنة خبرة — اتصل الآن",
      desc: "نقل عفش دبي بأيدٍ محترفة منذ 1998. فك وتغليف وتركيب، شاحنات مغلقة، خدمة نفس اليوم، دفع بعد الرضا. احصل على عرض سعر مجاني على واتساب الآن.",
    },
    image: {
      path: "/ar/نقل-عفش-دبي-شركة-موفرز-باكرز.jpg",
      alt: "شركة موفرز آند باكرز لنقل عفش دبي بشاحنة مغلقة احترافية مع برج خليفة في الخلفية",
    },
    path: "/نقل-عفش-دبي",
  },
});

const breadcrumb = generateBreadcrumb({
  list: [
    {
      title: "نقل عفش دبي",
      url: "/نقل-عفش-دبي",
    },
  ],
});

export default function DubaiMoversPage() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumb }}
      />
      <main>
        {/* 1. قسم الهيرو الرئيسي (Hero Section) */}
        <section className="relative overflow-hidden border-b border-border py-16 md:py-24">
          <div className="relative z-10 max-w-7xl mx-auto md:px-10 px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start text-right">
              <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight mb-6">
                نقل عفش دبي — خدمة على مدار الساعة بدون رسوم مخفية
              </h1>

              <div className="text-base text-muted-foreground leading-relaxed mb-8 space-y-4">
                <p>
                  نقل عفش دبي خدمة يطلبها الآلاف كل شهر، لكن قليلاً من الشركات
                  تقدمها بالشفافية والمصداقية التي يستحقها العميل. نحن شركة
                  موفرز آند باكرز في الإمارات، مرخصون رسمياً ومقرنا في رأس الخور
                  الصناعية، دبي.
                </p>
                <p>
                  بدأنا مسيرتنا في عام 1998 حين لم يكن هناك إنترنت ولا تطبيقات
                  أو إعلانات شبكات التواصل الاجتماعي — بدأنا بالسمعة الطيبة
                  وحدها، ولا نزال ننمو ونستمر بها حتى يومنا هذا.
                </p>
                <p>
                  نقل عفش دبي من منازل وشقق وفلل ومكاتب هو أحد تخصصاتنا
                  الرئيسية، وكل ما نبنيه يرتكز على سياسة واحدة واضحة: تدفع فقط
                  بعد أن ترضى تماماً.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <Button whatsappBtn variant="default" size="lg">
                  💬 اطلب تسعيرة مجانية عبر واتساب
                </Button>
                <Button callBtn variant="outline" size="lg">
                  📞 اتصل بنا بالهاتف
                </Button>
              </div>
            </div>

            {/* مساحة صورية تفاعلية للهيرو متطابقة مع نمط صفحتك المعدل */}
            <div className="lg:col-span-5 relative w-full aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl">
              <Image
                src={heroImage}
                alt="شركة موفرز آند باكرز لنقل عفش دبي بشاحنة مغلقة احترافية مع برج خليفة في الخلفية"
                fill
                loading="eager"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
        </section>
        <QuotationSection
          ar
          title={
            <>
              <span className="font-bold md:block">احصل على عرض أسعار</span> من
              نقل الأثاث في الإمارات
            </>
          }
          desc="أخبرنا بما ترغب بنقله، ومن أين، وإلى أين. نحن، شركة نقل وتغليف أثاث في الإمارات العربية المتحدة، سنرسل إليك عرض سعر مفصل وواضح عبر واتساب أو البريد الإلكتروني. لا نقدم تقديرات مبهمة، فالمبلغ الذي نحدده هو نفسه الموضح في الفاتورة."
        />

        {/* 2. قسم التحليل والمزايا (ما الذي يجعل نقل عفش دبي معنا تجربة مختلفة؟) */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
                ما الذي يجعل نقل عفش دبي تجربة مختلفة معنا؟
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                دبي مدينة كبيرة ومتنوعة: من مناطق البر القديمة إلى الأبراج
                الحديثة، ومن المجمعات السكنية المغلقة إلى الفلل الفردية. كل
                منطقة لها متطلباتها الخاصة التي نتميز بفهمها:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* الميزة الأولى */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">📍</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    معرفة عميقة بمناطق دبي
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    25 سنة في دبي تعني أننا نعرف جيداً مواعيد الازدحام المروري،
                    ومناطق الدخول المحظورة في بعض المجمعات، وأين تحتاج لتوفير
                    تصاريح خاصة. هذه المعرفة الميدانية تترجم إلى نقل أسرع وأقل
                    متاعب لك.
                  </p>
                </div>
              </div>

              {/* الميزة الثانية */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">🚚</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    شاحنات مغلقة تناسب مناخ دبي
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    درجات الحرارة في دبي تتجاوز 45 درجة في فصل الصيف. الشاحنة
                    المكشوفة تشكل خطراً حقيقياً على الأثاث والمعدات والمواد
                    الحساسة. لهذا السبب، جميع شاحناتنا مغلقة تماماً ومجهزة لحفظ
                    العفش.
                  </p>
                </div>
              </div>

              {/* الميزة الثالثة */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">⚡</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    خدمة نقل عفش في نفس اليوم
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    هذا خيار حقيقي نوفره لعملائنا وليس مجرد وعد تسويقي. تواصل
                    معنا في الصباح وإذا كان لدينا توفر في الجدول، ننظم نقلك في
                    نفس اليوم. وصلت إلى دبي للتو أو وجدت شقة فجأة وتحتاج
                    الانتقال سريعاً؟ نحن الخيار الصحيح.
                  </p>
                </div>
              </div>

              {/* الميزة الرابعة */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between md:col-span-2 lg:col-span-1">
                <div>
                  <span className="text-primary text-3xl mb-4 block">🤝</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    دفع بعد الرضا — لا استثناء
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    لا تدفع درهماً واحداً قبل انتهاء العمل وتأكدك من رضاك التام
                    عن الخدمة. هذه السياسة الصارمة هي ما يفرّقنا ويحمي ممتلكاتك،
                    بعكس الأطراف الأخرى التي قد تختفي بمجرد استلام العربون.
                  </p>
                </div>
              </div>

              {/* الميزة الخامسة */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between md:col-span-2 lg:col-span-2">
                <div>
                  <span className="text-primary text-3xl mb-4 block">🗣️</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    فريق يتحدث العربية والإنجليزية
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    دبي مدينة متعددة الثقافات والجنسيات. فريقنا يتواصل باللغتين
                    العربية والإنجليزية بشكل مريح وواضح كلياً. لن تحتاج للبحث عن
                    مترجم أو الشرح باستخدام الإشارات — نحن نفهم متطلباتك وننفذها
                    بدقة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. قسم تفاصيل الخدمات المقدمة */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
                خدمات نقل عفش دبي التي نقدمها
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                نوفر حلولاً تخصصية تغطي جميع متطلباتكم السكنية والتجارية في دبي:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* البند 1 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  نقل عفش المنازل والشقق
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  من ديرة إلى البرشاء، ومن مردف إلى جميرا — نغطي كل مناطق دبي
                  السكنية.
                </p>
                <Link
                  href="/نقل-اثاث-الشقق"
                  className="text-primary hover:underline font-bold text-xs"
                >
                  اعرف المزيد في صفحة نقل شقق دبي ◀
                </Link>
              </div>

              {/* البند 2 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  نقل عفش الفلل في دبي
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  الفلل في المرابع العربية، جميرا بارك، الرانشيز وغيرها — لدينا
                  خبرة واسعة في نقل عفش الفلل بمختلف أحجامها.
                </p>
                <Link
                  href="/نقل-اثاث-الفلل"
                  className="text-primary hover:underline font-bold text-xs"
                >
                  اعرف المزيد في نقل فلل دبي ◀
                </Link>
              </div>

              {/* البند 3 */}
              <div className="bg-background p-6 rounded-2xl border border-primary/20 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-3">
                  نقل عفش المكاتب في دبي
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  DIFC، Business Bay، Media City، JLT — نصل إلى جميع المناطق
                  التجارية والإدارية في دبي.
                </p>
                <Link
                  href="/نقل-اثاث-المكاتب"
                  className="text-primary hover:underline font-bold text-xs"
                >
                  اعرف المزيد في نقل مكاتب دبي ◀
                </Link>
              </div>

              {/* البند 4 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  نقل القطعة الواحدة من الأثاث
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  لا تحتاج شاحنة كاملة لنقل كنبة، ثلاجة، غسالة أو قطعة مفردة؟
                  نحن نتعامل مع نقل القطع الفردية بكل سهولة وبتكلفة منخفضة.
                </p>
                <Link
                  href="/نقل-عفش-دبي"
                  className="text-primary hover:underline font-bold text-xs"
                >
                  اعرف المزيد حول نقل القطعة الواحدة ◀
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. قسم النقل بين المدن والإمارات المجاورة (مستوحى من تصميم الخطوات) */}
        <section className="py-16 md:py-24 border-t border-b border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-16">
              نقل عفش من دبي إلى الإمارات الأخرى
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              كثير من عملاء دبي يحتاجون نقل عفشهم وممتلكاتهم إلى الإمارات
              المجاورة. نوفر هذا الخط اللوجستي بشكل يومي لضمان وصول العفش سليماً
              بغض النظر عن المسافات وحالة الطقس بفضل شاحناتنا المغلقة تماماً:
            </p>

            <div className="relative border-r-2 border-primary/20 pr-8 space-y-8 max-w-4xl mx-auto">
              {/* إمارة 1 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground">
                  نقل عفش من دبي إلى الشارقة
                </h3>
              </div>

              {/* إمارة 2 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground">
                  نقل عفش من دبي إلى عجمان
                </h3>
              </div>

              {/* إمارة 3 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground">
                  نقل عفش من دبي إلى أبوظبي
                </h3>
              </div>

              {/* إمارة 4 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground">
                  نقل عفش من دبي إلى الفجيرة
                </h3>
              </div>

              {/* إمارة 5 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground">
                  نقل عفش من دبي إلى رأس الخيمة
                </h3>
              </div>

              {/* إمارة 6 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-primary">
                  نقل عفش من دبي إلى أم القيوين والعين
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* 5. قسم المناطق الجغرافية المغطاة داخل دبي بالتفصيل */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  مناطق نقل عفش دبي التي نخدمها
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  نحن نصل إلى جميع مناطق وأحياء دبي بدون استثناء لتأمين نقل
                  ممتلكاتكم أينما كنتم:
                </p>

                {/* شبكة المناطق المغطاة */}
                <div className="bg-slate-50 dark:bg-slate-900/40 p-6 rounded-2xl border border-border text-xs md:text-sm text-muted-foreground leading-relaxed">
                  ديرة | بر دبي | الجانب الإماراتي | القوز | البرشاء | مردف |
                  القصيص | الجداف | جميرا | جميرا بيتش ريزيدنس | دبي مارينا |
                  داون تاون دبي | Business Bay | DIFC | الخوانيج | عود ميثاء |
                  رأس الخور | العوير | الورقاء | الروضة | الفرجان | ريم |
                  المرابع العربية | ذا فيلا | وغيرها من مجمعات وأحياء دبي.
                </div>
              </div>

              <div className="lg:col-span-5 relative aspect-4/3 bg-muted rounded-3xl overflow-hidden ">
                <Image
                  src="/ar/نقل-عفش-سريع-نفس-اليوم-دبي.jpg"
                  alt="فريق موفرز آند باكرز ينقل عفش شقة بسرعة واحترافية في منطقة سكنية بدبي"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. قسم أسعار نقل عفش دبي */}
        <section className="py-16 border-t border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="bg-background border border-border rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                    أسعار نقل عفش دبي وطريقة التقييم
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    السعر النهائي يتحدد بشكل مرن حسب: حجم وكمية العفش، المسافة
                    داخل إمارة دبي أو التوجه إلى إمارة أخرى، وطبيعة الخدمة
                    المطلوبة (مثل الفك، التغليف الفائق، أو إعادة الترتيب). العرض
                    مجاني تماماً ويصلك مفصلاً وبشفافية كاملة عبر واتساب أو
                    البريد الإلكتروني.
                  </p>

                  <div className="space-y-4 mb-6">
                    <p className="font-bold text-sm text-foreground">
                      لطلب تسعيرة فورية أو استفسار:
                    </p>
                    <ul className="space-y-2 text-xs text-muted-foreground pr-4 list-disc">
                      <li>
                        📞 <strong>اتصل بنا مباشرة:</strong>{" "}
                        <span dir="ltr">+971 50 774 5691</span>
                      </li>
                      <li>
                        💬 <strong>واتساب للتواصل السريع:</strong>{" "}
                        <span dir="ltr">+971 50 774 5691</span>
                      </li>
                      <li>
                        🌐 <strong>الحصول على عرض سعر:</strong>{" "}
                        <Link
                          href="/get-quote"
                          className="text-primary hover:underline font-bold"
                        >
                          طلب تسعيرة عبر نموذج الموقع
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-4">
                  <Button
                    whatsappBtn
                    variant="default"
                    size="lg"
                    className="w-full text-base font-bold shadow-lg shadow-primary/20 py-6"
                  >
                    💬 اطلب تسعيرة للعفش عبر واتساب
                  </Button>
                  <Button
                    quoteBtn
                    variant="outline"
                    size="lg"
                    className="w-full text-base font-bold py-6"
                  >
                    🌐 اطلب تسعيرة مجانية الآن
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. قسم الأسئلة الشائعة (FAQ) لنقل العفش */}
        <section className="py-16 md:py-24 border-t border-border ">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-16">
              أسئلة شائعة حول نقل عفش دبي
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  ما هو أرخص وقت لنقل العفش في دبي؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  الفترة من الأحد إلى الأربعاء عادة ما تكون الأكثر مرونة ومناسبة
                  في الأسعار. ننصح بتجنب أيام نهاية الشهر السكني نظراً لارتفاع
                  الطلب الشديد خلالها. ولكن الخيار الأفضل دوماً هو التواصل
                  والحجز المسبق لضمان السعر الأقل.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  هل نقل العفش في دبي يحتاج تصاريح؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نعم، بعض المجمعات السكنية والأبراج المغلقة في دبي تتطلب توفير
                  شهادة عدم ممانعة (NOC) أو تصريح دخول للشاحنات مسبقاً. سنقوم
                  بتنبيهك لهذا الأمر أثناء إجراء المعاينة لنساعدك في تجهيز
                  الأوراق اللازمة في الوقت المناسب.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  كم يستغرق نقل عفش شقة 2 غرفة داخل دبي؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  في الغالب تستغرق العملية ما بين 3 إلى 5 ساعات عمل متواصلة.
                  ويتحدد الوقت الفعلي بشكل دقيق بناءً على كمية الأثاث والأغراض،
                  والأدوار والمصاعد، والمسافة الجغرافية.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  هل تتعاملون مع العفش الثمين والأنتيك؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نعم بالتأكيد، نحن نوفر مواد تغليف تخصصية فائقة الحماية للقطع
                  الثمينة واللوحات والأنتيك. نرجو منك إخطارنا بوجود هذه القطع
                  الحساسة مسبقاً لنقوم باتخاذ كافة تدابير الحماية والوقاية
                  الإضافية لضمان سلامتها.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="-mt-16" />
        <ReviewSection />
        <div className="pb-16" />
        {/* 8. بانر الحجز والتوجيه النهائي مخصص لعفش دبي */}
        <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 z-0" />
          <div className="relative z-10 max-w-7xl mx-auto md:px-10 px-4">
            <h2 className="text-2xl md:text-4xl font-black mb-4">
              📞 نقل عفش دبي — تواصل معنا الآن
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              لا داعي للبحث والمجازفة مع عمالة غير معروفة. نحن شركة مرخصة رسمياً
              نمتلك أكثر من 25 سنة خبرة ميدانية في دبي، بملف موثق بالكامل على
              Google Business، ونلتزم معك بسياسة سداد ثابتة وآمنة: لا تدفع إلا
              بعد رضاك التام عن الخدمة.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                whatsappBtn
                className="bg-white text-primary hover:bg-white/90 text-base font-bold px-8 py-6 rounded-full shadow-2xl"
              >
                💬 احصل على عرض سعر مجاني الآن
              </Button>
              <Button
                callBtn
                className="bg-transparent text-white border-2 border-white hover:bg-white/10 text-base font-bold px-8 py-6 rounded-full"
              >
                📞 +971 50 774 5691
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
