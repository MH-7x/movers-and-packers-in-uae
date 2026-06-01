import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button"; // يرجى مطابقة هذا المسار لمجلد مكون الزر لديك

import heroImage from "@/public/ar/نقل-اثاث-الشقق-دبي-موفرز-باكرز.jpg";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Image from "next/image";
import { ReviewSection } from "@/components/ReviewSection";
import Script from "next/script";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "نقل اثاث الشقق في الإمارات | فريق متخصص — اتصل الآن",
      desc: "شركة متخصصة في نقل اثاث الشقق في دبي والإمارات. نتعامل مع المصاعد والأدوار والتغليف الكامل. دفع بعد الرضا، بلا رسوم مخفية. عرض سعر مجاني على واتساب.",
    },
    image: {
      path: "/ar/نقل-اثاث-الشقق-دبي-موفرز-باكرز.jpg",
      alt: "فريق موفرز آند باكرز ينقل اثاث الشقق في مبنى سكني حديث بدبي الإمارات",
    },
    path: "/نقل-اثاث-الشقق",
  },
});

const breadcrumb = generateBreadcrumb({
  list: [
    {
      title: "نقل اثاث الشقق في الإمارات",
      url: "/نقل-اثاث-الشقق",
    },
  ],
});

export default function ApartmentMoversPage() {
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
                نقل اثاث الشقق في الإمارات — من المصعد إلى الباب الأمامي بأمان
              </h1>

              <div className="text-base text-muted-foreground leading-relaxed mb-8 space-y-4">
                <p>
                  نقل اثاث الشقق له تحديات يعرفها من جرّبها: ممرات ضيقة، مصاعد
                  صغيرة، جيران يجب مراعاتهم، وأحياناً قواعد المبنى التي تحدد
                  أوقات الانتقال.
                </p>
                <p>
                  هذه تفاصيل لا تراها في إعلانات شركات النقل العادية، لكنها
                  تُفرق بين نقل سلس وكارثة لوجستية. نحن شركة موفرز آند باكرز،
                  مسجلون رسمياً في الإمارات منذ عام 1998، ونتعامل مع نقل اثاث
                  الشقق بتخطيط مسبق يأخذ كل هذه التفاصيل بالحسبان.
                </p>
                <p>
                  في 25 سنة من العمل، تعاملنا مع مئات الشقق في أبراج دبي وأحياء
                  الشارقة ومباني أبوظبي والإمارات الأخرى لضمان انتقال مريح وآمن
                  بالكامل.
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
                alt="فريق موفرز آند باكرز ينقل اثاث الشقق في مبنى سكني حديث بدبي الإمارات"
                fill
                loading="eager"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 2. قسم المزايا التنافسية (ما الذي يجعل نقل اثاث الشقق مختلفاً؟) */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
                ما الذي يجعل نقل اثاث الشقق مختلفاً؟
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                الشقق لها خصوصية تجعل نقلها مختلفاً تماماً عن المنازل العادية
                والفلل المستقلة:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* الميزة الأولى */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">🏢</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    التنسيق مع إدارة المبنى
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    في كثير من المباني، تحتاج إذناً مسبقاً لاستخدام المصعد
                    الخدمي في أوقات محددة. فريقنا يعرف هذا ويُنبهك مسبقاً لتنظيم
                    هذا الجانب. إذا احتجت مساعدة في التواصل مع إدارة المبنى، نحن
                    هنا لتسهيل العملية وتفادي العقبات.
                  </p>
                </div>
              </div>

              {/* الميزة الثانية */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">📦</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    المصاعد الصغيرة والأثاث الكبير
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    مشكلة شائعة يواجهها الكثيرون: الكنبة أو الخزائن لا تدخل في
                    المصعد. الحل ليس كسرها أو خدشها — الحل هو فك القطع مسبقاً
                    بطرق صحيحة وإعادة تركيبها باحترافية في الموقع الجديد.
                    نجارونا يقيّمون هذا بعناية منذ اللحظة الأولى.
                  </p>
                </div>
              </div>

              {/* الميزة الثالثة */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">🧗</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    الأدوار العليا وغياب المصعد
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    بعض المباني الأقدم لا تمتلك مصعداً خدمياً أو تكون مصاعدها
                    معطلة أحياناً. لدينا فريق مدرب ومجهز بالكامل لنقل الأثاث
                    والأغراض بأمان عبر السلالم، بسرعة وباحترافية تضمن الحفاظ
                    التام على سلامة العفش.
                  </p>
                </div>
              </div>

              {/* الميزة الرابعة */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">🛡️</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    حماية الممرات والجيران
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    عملية النقل في الشقق قد تسبب الإزعاج للآخرين إن لم تتم
                    بهدوء. فريقنا يحرص على تغطية وحماية أرضيات وجدران الممرات
                    المشتركة، ونتحرك بهدوء يحترم خصوصية الجيران دون ترك أي آثار
                    أو مخلفات خلفنا.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. قسم الخدمات المقدمة لنقل الشقق */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
                خدمات نقل اثاث الشقق التي نقدمها
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                نوفر حلولاً شاملة ومتكاملة تغطي كافة متطلبات النقل السكني للشقق،
                متضمنةً:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* البند 1 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  تقييم مسبق قبل يوم النقل
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نزور الشقة لمعاينتها بشكل دقيق أو نعتمد على التفاصيل والصور
                  التي ترسلها لنا عبر واتساب. نحدد متطلبات الفك والتركيب، ونوع
                  وحجم الشاحنة المناسب، والوقت التقريبي لإنهاء العملية بالكامل.
                </p>
              </div>

              {/* البند 2 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  تغليف احترافي لكل قطعة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نعتمد كراتين مقواة ومتينة للأواني والقطع الزجاجية
                  والإلكترونيات، إلى جانب لف الكنبات والأسرّة بالبطانيات
                  القماشية والنايلون المقاوم لحمايتها من الأتربة والاحتكاك، مع
                  ترقيم وتدوين المحتويات.
                </p>
              </div>

              {/* البند 3 */}
              <div className="bg-background p-6 rounded-2xl border border-primary/20 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-3">
                  فك وتركيب دقيق ومتكامل
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  قاعدتنا الأساسية والمستمرة هي: &quot;ما يُفكك يُركَّب&quot;.
                  فريقنا يضم نجارين مختصين لفك وتركيب كافة أنواع غرف النوم،
                  الخزائن، المطابخ، والستائر دون أي نقص أو ترك قطع غير مركبة في
                  الشقة الجديدة.
                </p>
              </div>

              {/* البند 4 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  شاحنات مغلقة تناسب حجم الشقة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نوفر أسطولاً من الشاحنات المغلقة بأحجام مختلفة تناسب طبيعة
                  شقتك؛ فالشقة الاستوديو لا تتطلب سعة الشاحنة المطلوبة لشقة ذات
                  3 غرف. هذا الاختيار الدقيق يوفر عليك التكلفة والجهد.
                </p>
              </div>

              {/* البند 5 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm md:col-span-2 lg:col-span-1">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  نقل الشقق المفروشة والفارغة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  سواء كنت تريد نقل عفش شقة مفروشة بالكامل بجميع أجهزتها
                  وتفاصيلها، أو ترغب في نقل أثاث تم شراؤه حديثاً من صالات العرض
                  والمتاجر إلى شقة فارغة، فإننا جاهزون للتعامل مع الحالتين بكل
                  مرونة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. قسم آليات التعامل والسيناريوهات المختلفة (مستوحى من تصميم الخطوات الأصلي) */}
        <section className="py-16 md:py-24 border-t border-b border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-16">
              كيف نتعامل مع نقل الشقق بين المباني والمناطق؟
            </h2>

            <div className="relative border-r-2 border-primary/20 pr-8 space-y-12 max-w-4xl mx-auto">
              {/* الحالة 1 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  النقل داخل نفس المبنى
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  قد يبدو النقل داخل نفس البناية سهلاً، ولكنه يتطلب تنسيقاً
                  وحرصاً خاصاً؛ لا سيما في إدارة توقيت حجز المصعد الخدمي لتفادي
                  تعطل مصالح بقية القاطنين. فريقنا يتولى هذا التنسيق باحترافية
                  كاملة.
                </p>
              </div>

              {/* الحالة 2 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  النقل بين مناطق مختلفة داخل نفس الإمارة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  من الجانب الإماراتي في دبي إلى منطقة البرشاء، أو من عجمان إلى
                  الشارقة — لا توجد لدينا أي مشكلة جغرافية. شاحناتنا الكبيرة
                  والمغلقة مستعدة لتأمين عملية انتقال آمنة بغض النظر عن المسافات
                  وحالة الطرق.
                </p>
              </div>

              {/* الحالة 3 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-primary mb-2">
                  النقل بين الإمارات المختلفة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  سواء كنت تنتقل من دبي إلى الفجيرة، أو من الشارقة إلى العاصمة
                  أبوظبي، فإن خدماتنا لنقل الشقق تضمن وصول أثاثك وممتلكاتك سليمة
                  ومحفوظة من تقلبات الطقس والحرارة المرتفعة بفضل الشاحنات
                  المقفلة تماماً والمجهزة للمسافات البعيدة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. قسم التغطية الجغرافية والترابط الداخلي مع الروابط المطلوبة */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  مناطق خدمة نقل اثاث الشقق في الإمارات
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  نغطي جميع مناطق الإمارات بما فيها: دبي (الجانب الإماراتي،
                  البرشاء، ديرة، مردف، القوز، جميرا)، الشارقة، أبوظبي، عجمان،
                  رأس الخيمة، الفجيرة، أم القيوين، العين. تضمن لكم شاحناتنا
                  وصولاً سريعاً لكافة المواقع والأبراج السكنية في الدولة.
                </p>

                <div className="border-t border-border pt-6">
                  <p className="font-bold text-sm text-foreground mb-4">
                    تأكد من صفحات المدن لمزيد من التفاصيل والخدمات المتاحة:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <Link
                      href="/نقل-اثاث-دبي"
                      className="flex items-center gap-2 text-primary hover:underline font-bold text-sm"
                    >
                      📍 نقل اثاث دبي
                    </Link>
                    <Link
                      href="/movers-and-packers-in-sharjah"
                      className="flex items-center gap-2 text-primary hover:underline font-bold text-sm"
                    >
                      📍 نقل اثاث الشارقة
                    </Link>
                    <Link
                      href="/movers-in-ajman"
                      className="flex items-center gap-2 text-primary hover:underline font-bold text-sm"
                    >
                      📍 نقل اثاث عجمان
                    </Link>
                    <Link
                      href="/movers-in-al-ain"
                      className="flex items-center gap-2 text-primary hover:underline font-bold text-sm"
                    >
                      📍 نقل اثاث العين
                    </Link>
                    <Link
                      href="/movers-in-fujairah"
                      className="flex items-center gap-2 text-primary hover:underline font-bold text-sm"
                    >
                      📍 نقل اثاث الفجيرة
                    </Link>
                    <Link
                      href="/movers-in-ras-al-khaimah"
                      className="flex items-center gap-2 text-primary hover:underline font-bold text-sm"
                    >
                      📍 نقل اثاث راس الخيمة
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative aspect-4/3 bg-muted rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/ar/نقل-شقة-احترافي-ممر-مبنى-دبي.jpg"
                  alt="عمال شركة موفرز آند باكرز يحملون اثاث مغلف عبر ممر مبنى سكني حديث في دبي"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. قسم الأسعار والاتصال الفوري بالشقق */}
        <section className="py-16 border-t border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="bg-background border border-border rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                    أسعار نقل اثاث الشقق وكيف نحددها
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    السعر يعتمد على: حجم الشقة (استوديو، 1 غرفة، 2 غرفة، 3 غرف)،
                    الدور، والمسافة، ونوع الخدمات المطلوبة. العرض المجاني يصلك
                    بشكل واضح ومفصل بالكامل على واتساب دون أي درهم رسوم إضافية
                    مفاجئة. ما تسمعه هو ما تدفعه — لا زيادة.
                  </p>

                  <div className="space-y-4 mb-6">
                    <p className="font-bold text-sm text-foreground">
                      للتواصل الفوري وطلب التسعيرة:
                    </p>
                    <ul className="space-y-2 text-xs text-muted-foreground pr-4 list-disc">
                      <li>
                        📞 <strong>اتصل بنا هاتفياً:</strong>{" "}
                        <span dir="ltr">+971 50 774 5691</span>
                      </li>
                      <li>
                        💬 <strong>محادثة واتساب:</strong>{" "}
                        <span dir="ltr">+971 50 774 5691</span>
                      </li>
                      <li>
                        🌐 <strong>نموذج الموقع:</strong>{" "}
                        <Link
                          href="/get-quote"
                          className="text-primary hover:underline font-bold"
                        >
                          نموذج عرض السعر المجاني
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
                    💬 واتساب للحصول على تسعيرة للشقة
                  </Button>
                  <Button
                    quoteBtn
                    variant="outline"
                    size="lg"
                    className="w-full text-base font-bold py-6"
                  >
                    🌐 اطلب عرض سعر الآن
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. قسم الأسئلة الشائعة (FAQ) لنقل الشقق */}
        <section className="py-16 md:py-24 border-t border-border ">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-16">
              أسئلة شائعة حول نقل اثاث الشقق
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  هل تحتاجون إلى إذن من إدارة المبنى؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  في الغالب نعم، خاصة لاستخدام المصعد الخدمي في أوقات محددة
                  وتفادي إيقاف الشاحنة في الأماكن المحظورة. نُنبهك مسبقاً بما
                  تحتاجه وكيف تطلبه من الإدارة، وكثيراً ما يتواصل فريقنا مع
                  إدارة المبنى مباشرة لتسهيل الأمر.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  وجدت كنبة لا تدخل المصعد — ماذا تفعلون؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  الحل الدائم والأفضل هو الفك المسبق. نجارنا المحترف يُقيّم
                  كيفية تفكيك أي قطعة أثاث ضخمة وإعادة تركيبها بدقة في شقتك
                  الجديدة. وإذا كانت القطعة غير قابلة للتفكيك، فإننا نجد حلولاً
                  بديلة بالسلالم عبر معداتنا المخصصة.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  كم يستغرق نقل شقة من 3 غرف؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  في الغالب تستغرق العملية ما بين 4 إلى 8 ساعات، وهذا يعتمد على
                  كمية العفش، وحالة وموقع الشقة (الأدوار والمصاعد)، والمسافة
                  الإجمالية بين الموقعين.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  هل تتوفر خدمة نقل الشقق خارج أوقات الذروة؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نعم، نحن نوفر خدمات مرنة تتماشى مع رغباتكم وقوانين المباني،
                  بما في ذلك العمل في أيام العطلات الأسبوعية والمساء حسب التوفر
                  المسبق. تواصل معنا لتأكيد حجز موعدك.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="-mt-16" />
        <ReviewSection />
        <div className="pb-16" />
        {/* 8. بانر الحجز النهائي المخصص للشقق */}
        <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 z-0" />
          <div className="relative z-10 max-w-7xl mx-auto md:px-10 px-4">
            <h2 className="text-2xl md:text-4xl font-black mb-4">
              📞 ابدأ الانتقال لشقتك الجديدة الآن
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              نحن شركة مرخصة رسمياً نعمل منذ عام 1998، ونعرف جيداً كافة متطلبات
              وتحديات نقل اثاث الشقق في أبراج ومباني الإمارات. نضمن لك عملية نقل
              خالية من المتاعب ودفعاً بعد رضاك التام.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                whatsappBtn
                className="bg-white text-primary hover:bg-white/90 text-base font-bold px-8 py-6 rounded-full shadow-2xl"
              >
                💬 احصل على عرض سعر الآن
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
