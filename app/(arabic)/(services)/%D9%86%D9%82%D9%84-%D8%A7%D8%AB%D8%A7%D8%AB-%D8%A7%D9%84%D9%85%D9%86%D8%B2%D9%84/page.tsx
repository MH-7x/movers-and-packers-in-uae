import Link from "next/link";

import { Button } from "@/components/ui/button"; // تأكد من مطابقة هذا المسار لمجلد مكون الزر لديك
import heroImage from "@/public/ar/نقل-اثاث-المنزل-دبي-موفرز-باكرز.jpg";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Image from "next/image";
import { ReviewSection } from "@/components/ReviewSection";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import Script from "next/script";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "نقل اثاث المنزل في الإمارات | شركة موثوقة منذ 1998",
      desc: "شركة نقل اثاث المنزل في دبي وجميع الإمارات. فك وتغليف وتركيب احترافي، شاحنات مغلقة، دفع بعد الرضا التام. احصل على عرض سعر مجاني على واتساب الآن.",
    },
    image: {
      path: "/ar/نقل-اثاث-المنزل-دبي-موفرز-باكرز.jpg",
      alt: "فريق شركة موفرز آند باكرز لنقل اثاث المنزل في دبي الإمارات بشاحنة مغلقة احترافية",
    },
    path: "/نقل-اثاث-المنزل",
  },
});

const breadcrumb = generateBreadcrumb({
  list: [
    {
      title: "نقل اثاث المنزل في الإمارات",
      url: "/نقل-اثاث-المنزل",
    },
  ],
});

export default function HouseShiftingPage() {
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
              {/* شارة التميز والخبرة */}

              <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight mb-6">
                نقل اثاث المنزل في الإمارات — فريق محترف، دفع بعد الرضا فقط
              </h1>

              <div className="text-base  text-muted-foreground leading-relaxed mb-8">
                <p>
                  {" "}
                  يفكر كثيرون أن نقل اثاث المنزل مسألة بسيطة: تأتي شاحنة، تحمل
                  الأغراض، وتنطلق. لكن الواقع مختلف تماماً.{" "}
                </p>
                <p>
                  {" "}
                  المطبخ فيه أجهزة حساسة. الصالة فيها قطع ضخمة لا تمر من الأبواب
                  بدون فك مسبق. وفوق هذا كله، في منطقة تصل درجات حرارتها صيفاً
                  إلى 45 درجة مئوية، الشاحنة المكشوفة وحدها كفيلة بإتلاف ما
                  بنيته في منزلك خلال سنوات. نحن شركة موفرز آند باكرز في
                  الإمارات، مرخصون رسمياً ونعمل منذ عام 1998.
                </p>
                <p>
                  غرفة النوم فيها قطع ثمينة لا تتحمل الاهتزاز. في أكثر من 25
                  سنة، أتممنا آلاف عمليات نقل اثاث المنزل في دبي وأبوظبي
                  والشارقة وسائر الإمارات — ونعرف جيداً كيف نجعل هذه التجربة
                  سهلة وآمنة.{" "}
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

            {/* مساحة صورية تفاعلية للـ Hero */}
            <div className="lg:col-span-5 relative w-full aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl">
              <Image
                src={heroImage}
                alt="فريق شركة موفرز آند باكرز لنقل اثاث المنزل في دبي الإمارات بشاحنة مغلقة احترافية"
                fill
                loading="eager"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 2. قسم المزايا التنافسية (لماذا يختارنا العملاء؟) */}
        <section className="py-16 md:py-24 ">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
                لماذا يعود معظم عملائنا إلينا في كل انتقال؟
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                الإجابة المباشرة: لأن الكلام سهل، لكن التجربة الفعلية هي ما
                تفرق. هذه بعض الأشياء التي تجعلنا مختلفين:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* الميزة الأولى */}
              <div className="bg-white  p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">📋</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    ترخيص رسمي يسبق عصر الإنترنت
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    سجلنا التجاري يعود إلى 1998. يومها، لم تكن معظم شركات النقل
                    التي تجدها اليوم على الإنترنت موجودةً أصلاً. هذه ليست فخراً
                    فارغاً — هذا يعني أن لدينا سجلاً موثقاً يمكنك التحقق منه،
                    وملف Google Business يمكنك قراءة تقييماته. حين تدخل شخصاً
                    غريباً إلى منزلك لينقل أغراض غرفة نومك، تحتاج لمن تعرفه
                    حقاً.
                  </p>
                </div>
              </div>

              {/* الميزة الثانية */}
              <div className="bg-white  p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">🤝</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    الدفع بعد انتهاء العمل والرضا التام
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    لا تدفع درهماً واحداً قبل أن يكتمل العمل وتتأكد بنفسك أن كل
                    شيء في مكانه الصحيح. هذا ليس شعاراً تسويقياً — هذه سياستنا
                    مع كل عميل منذ بدأنا. السبب واضح: نحن لسنا من يأخذ المال
                    ويختفي.
                  </p>
                </div>
              </div>

              {/* الميزة الثالث */}
              <div className="bg-white  p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">💎</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    لا رسوم مخفية، بالحرف الواحد
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    إذا قلنا لك السعر 1000 درهم، فهذا هو المبلغ الذي ستدفعه عند
                    اكتمال العمل. لا إضافات مفاجئة، لا رسوم &quot;طابق&quot; لم
                    تُذكر، لا تكلفة &quot;إضافية&quot; بعد انتهاء الخدمة.
                  </p>
                </div>
              </div>

              {/* الميزة الرابعة */}
              <div className="bg-white  p-8 rounded-3xl border border-border flex flex-col justify-between md:col-span-2 lg:col-span-1">
                <div>
                  <span className="text-primary text-3xl mb-4 block">🚚</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    شاحنات مغلقة بالكامل لمناخ الإمارات
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    في بيئة يتجاوز فيها الحر 45 درجة مئوية وتكثر فيها العواصف
                    الرملية، الشاحنة المكشوفة خطر حقيقي على الأثاث والأجهزة
                    الإلكترونية. أسطولنا يشمل شاحنات مغلقة بطاقة 3 و4 طن، معتمدة
                    من هيئة الطرق والمواصلات في دبي.
                  </p>
                </div>
              </div>

              {/* الميزة الخامسة */}
              <div className="bg-white  p-8 rounded-3xl border border-border flex flex-col justify-between md:col-span-2 lg:col-span-2">
                <div>
                  <span className="text-primary text-3xl mb-4 block">⚡</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    خدمة نقل في نفس اليوم
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    وصلت إلى الإمارات للتو وتحتاج مكاناً جاهزاً؟ أو عندك ظرف
                    طارئ وتحتاج الانتقال غداً؟ نتعامل مع هذا. لا وعود فضفاضة —
                    فقط تواصل معنا من الصباح وسنرتب أفضل خيار متاح.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. قسم تفاصيل شمول الخدمة */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
                ما تشمله خدمة نقل اثاث المنزل
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                كثير من العملاء يسألوننا بالضبط: ماذا تفعلون؟ لأن بعض الشركات
                تأتي وتحمل فقط، وبعضها يترك الأثاث عند الباب. إليك ما نقدمه
                فعلياً من الألف إلى الياء:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* البند 1 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  1. المعاينة المجانية وعرض السعر الشفاف
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  قبل أي شيء، نرسل مشرفاً لمعاينة المنزل وتقييم حجم العمل. إذا
                  كانت المسافة بعيدة أو الوقت ضيقاً، ترسل لنا وصفاً أو صوراً عبر
                  واتساب وسنعدّ لك عرض السعر بشكل واضح ومفصل. كل بند ظاهر: تكلفة
                  الشاحنة، التغليف، الفك والتركيب، الأدوار، المسافة — لا شيء
                  مخفي.
                </p>
              </div>

              {/* البند 2 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  2. فك احترافي بفريق يضم نجارين متخصصين
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  فريقنا لا يكتفي بحمل الأثاث كما هو. يفك غرف النوم المركبة،
                  خزائن الحائط، الأسرّة ذات الأوراك، طاولات السفرة — بطريقة
                  منهجية تحافظ على كل مسمار وبراغي. ولا يغادر الموقع الجديد قبل
                  أن يُعيد التركيب كاملاً.
                </p>
              </div>

              {/* البند 3 (يشمل مواد التغليف الفرعية بالتفصيل) */}
              <div className="bg-background p-6 rounded-2xl border border-primary/20 shadow-sm md:col-span-2 lg:col-span-1">
                <h3 className="text-lg font-bold text-primary mb-3">
                  3. تغليف محترف بمواد عالية الجودة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  نستخدم مواد مخصصة لحماية فائقة للممتلكات:
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground pr-4 list-disc mb-2">
                  <li>
                    <strong>كراتين متينة</strong> بأحجام مناسبة لكل نوع أثاث.
                  </li>
                  <li>
                    <strong>فقاعات هوائية (Bubble Wrap)</strong> للقطع الحساسة
                    والزجاجية.
                  </li>
                  <li>
                    <strong>بلاستيك التمدد (Stretch Film)</strong> لتثبيت الأثاث
                    وحمايته من الغبار.
                  </li>
                  <li>
                    <strong>بطانيات قماشية</strong> للقطع الكبيرة كالكنبات
                    وخزائن الملابس.
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground">
                  كل قطعة مرقّمة ومصنّفة حتى يسهل إعادة ترتيبها في الموقع
                  الجديد.
                </p>
              </div>

              {/* البند 4 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  4. نقل آمن بشاحنات مجهزة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  الشاحنة المغلقة تضمن أن أثاثك لن يتعرض للغبار أو الحرارة أو
                  المطر خلال رحلة النقل — مهما طالت المسافة.
                </p>
              </div>

              {/* البند 5 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  5. تفريغ وتركيب في الموقع الجديد
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  لا نضع الأثاث عند الباب وننصرف. فريقنا يفرغ الشاحنة، يركّب كل
                  قطعة في مكانها، ويتأكد أنك راضٍ قبل أن يغادر.
                </p>
              </div>

              {/* البند 6 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  6. فك التغليف وترتيب الأغراض (خدمة اختيارية)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  هذه خيار إضافي لمن يريد أن يجد منزله مرتباً بالكامل بمجرد
                  دخوله. نفك الكراتين، نرتب المحتويات، ونأخذ كل مواد التغليف
                  معنا.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. قسم خطوات ومراحل العمل */}
        <section className="py-16 md:py-24 border-t border-b border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-16">
              مراحل عملية نقل اثاث المنزل خطوة بخطوة
            </h2>

            <div className="relative border-r-2 border-primary/20 pr-8 space-y-12 max-w-4xl mx-auto">
              {/* الخطوة 1 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  الخطوة 1: التواصل والاستفسار
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  اتصل بنا أو راسلنا على واتساب (+971 50 774 5691). أخبرنا
                  بالموقعين وتقدير حجم الأثاث وموعدك المفضل.
                </p>
              </div>

              {/* الخطوة 2 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  الخطوة 2: المعاينة وعرض السعر
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نحدد موعد معاينة أو تُرسل لنا التفاصيل مباشرة. نصلك بعرض سعر
                  واضح على واتساب أو البريد الإلكتروني.
                </p>
              </div>

              {/* الخطوة 3 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  الخطوة 3: تأكيد الموعد
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  تختار اليوم والوقت المناسب. نعمل طوال أيام الأسبوع وفي أوقات
                  مرنة.
                </p>
              </div>

              {/* الخطوة 4 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  الخطوة 4: الفك والتغليف
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  يصل الفريق في الوقت المتفق عليه ويبدأ العمل بشكل منهجي — يفك
                  ثم يغلف ثم يرقّم.
                </p>
              </div>

              {/* الخطوة 5 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  الخطوة 5: التحميل والنقل
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  الأثاث يُحمَّل في الشاحنة بترتيب مدروس يمنع تحرك القطع أو
                  تصادمها خلال الرحلة.
                </p>
              </div>

              {/* الخطوة 6 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  الخطوة 6: التفريغ والتركيب
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  يصل الفريق إلى الموقع الجديد، يفرغ، يركب، ويتأكد من رضاك
                  الكامل.
                </p>
              </div>

              {/* الخطوة 7 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-primary mb-2">
                  الخطوة 7: الدفع بعد الرضا
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  بعد تفقد كل شيء والتأكد أن كل شيء في مكانه، تدفع المبلغ المتفق
                  عليه فقط.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. قسم التغطية الجغرافية والترابط الداخلي */}
        <section className="py-16 md:py-24 ">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  نقل اثاث المنزل في جميع أنحاء الإمارات
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  نغطي كل الإمارات ولا نحدد خدمتنا بمنطقة واحدة. سواء كنت تنتقل
                  داخل دبي، أو من دبي إلى الشارقة أو عجمان أو أبوظبي أو رأس
                  الخيمة أو الفجيرة أو أم القيوين أو العين — نحن هناك. نقل اثاث
                  المنزل بين الإمارات المختلفة من تخصصاتنا، وشاحناتنا مجهزة
                  للرحلات الطويلة.
                </p>

                <div className="border-t border-border pt-6">
                  <p className="font-bold text-sm text-foreground mb-4">
                    يمكنك أيضاً الاطلاع على صفحات خدمتنا في المدن المختلفة:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
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
                      href="/movers-in-fujairah"
                      className="flex items-center gap-2 text-primary hover:underline font-bold text-sm"
                    >
                      📍 نقل اثاث الفجيرة
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative aspect-4/3 bg-muted rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/ar/تغليف-اثاث-المنزل-احترافي-دبي-الإمارات.jpg"
                  alt="عمال متخصصون في تغليف وتركيب اثاث المنزل داخل شقة في دبي - شركة موفرز آند باكرز"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. قسم التسعير الشفاف */}
        <section className="py-16 border-t border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="bg-background border border-border rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                    أسعار نقل اثاث المنزل وكيف تحصل على عرضك
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    لا يوجد سعر موحد لجميع الحالات — حجم الأثاث، المسافة، عدد
                    الأدوار، نوع الخدمة (تغليف أم بدون) كلها تؤثر في العرض
                    النهائي. لكن ما يبقى ثابتاً: السعر الذي تسمعه هو السعر الذي
                    تدفعه.
                  </p>

                  <div className="space-y-4 mb-6">
                    <p className="font-bold text-sm text-foreground">
                      طرق الحصول على عرض سعر:
                    </p>
                    <ul className="space-y-2 text-xs text-muted-foreground pr-4 list-disc">
                      <li>
                        📞 <strong>اتصل:</strong>{" "}
                        <span dir="ltr">+971 50 774 5691</span>
                      </li>
                      <li>
                        💬 <strong>واتساب:</strong>{" "}
                        <span dir="ltr">+971 50 774 5691</span>
                      </li>
                      <li>
                        🌐 <strong>الموقع:</strong>{" "}
                        <Link
                          href="/get-quote"
                          className="text-primary hover:underline font-bold"
                        >
                          نموذج الاستفسار المجاني
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <p className="text-xs text-muted-foreground font-semibold">
                    * طرق الدفع المقبولة: نقداً، تحويل بنكي، شيك مصرفي.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-4">
                  <Button
                    whatsappBtn
                    variant="default"
                    size="lg"
                    className="w-full text-base font-bold shadow-lg shadow-primary/20 py-6"
                  >
                    💬 واتساب للحصول على تسعيرة
                  </Button>
                  <Button
                    quoteBtn
                    variant="outline"
                    size="lg"
                    className="w-full text-base font-bold py-6"
                  >
                    🌐 نموذج عرض السعر
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. قسم الأسئلة الشائعة (FAQ) */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-16">
              أسئلة شائعة حول نقل اثاث المنزل
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  هل تتعاملون مع نقل اثاث المنزل في نفس اليوم؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نعم، في حالات الاستعجال وإذا توفرت شاحنة وفريق متاح. تواصل
                  معنا من الصباح الباكر لأفضل النتائج، وسنرتب لك خياراً يناسب
                  وضعك.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  ماذا تستخدمون من مواد تغليف؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نستخدم كراتين، فقاعات هوائية، بلاستيك تمدد، وبطانيات قماشية.
                  المواد تختلف حسب نوع كل قطعة — الزجاجيات تأخذ حماية مختلفة عن
                  خشب غرفة النوم.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  هل تتعاملون مع الخزائن الحديدية والأثاث الثقيل جداً؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نعم. لدينا فريق ومعدات مناسبة للقطع الثقيلة جداً، بما فيها
                  الخزائن الحديدية والمعدات الصناعية.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  هل يمكنني تتبع موقع الشاحنة أثناء النقل؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  تواصل مع فريقنا عند الحجز لمعرفة خيارات المتابعة المتاحة. نحرص
                  دائماً على التواصل المستمر معك خلال يوم النقل.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="-mt-16" />
        <ReviewSection />
        <div className="pb-16" />
        {/* 8. بانر الحجز النهائي والاتصال الفوري (CTA Footer) */}
        <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 z-0" />
          <div className="relative z-10 max-w-7xl mx-auto md:px-10 px-4">
            <h2 className="text-2xl md:text-4xl font-black mb-4">
              📞 احجز الآن — نقل اثاث المنزل بدون ضغط
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              25 سنة من الخبرة، آلاف المنازل المنقولة بأمان، وسياسة واحدة لا
              تتغير: لا تدفع إلا بعد رضاك التام.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                whatsappBtn
                className="bg-white text-primary hover:bg-white/90 text-base font-bold px-8 py-6 rounded-full shadow-2xl"
              >
                💬 تواصل معنا واتساب الآن
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
