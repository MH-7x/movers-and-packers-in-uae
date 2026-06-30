import Link from "next/link";
import heroImage from "@/public/ar/نقل-اثاث-الفلل-دبي-موفرز-باكرز.jpg";
import { Button } from "@/components/ui/button"; // يرجى مطابقة هذا المسار لمجلد مكون الزر لديك
import MetadataTemplate from "@/lib/MetaDataTemplate";
import QuotationSection from "@/components/QuotationSection";
import Image from "next/image";
import { ReviewSection } from "@/components/ReviewSection";

import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "نقل اثاث الفلل في الإمارات | خبرة 25 سنة — اتصل الآن",
      desc: "شركة نقل اثاث الفلل في دبي والإمارات منذ 1998. نتعامل مع الفلل الكبيرة والأثاث الثقيل والسلالم والحدائق. دفع بعد الرضا. احصل على عرض مجاني الآن.",
    },
    image: {
      path: "/ar/نقل-اثاث-الفلل-دبي-موفرز-باكرز.jpg",
      alt: "فريق شركة موفرز آند باكرز لنقل اثاث الفلل الكبيرة في دبي الإمارات",
    },
    path: "/نقل-اثاث-الفلل",
  },
});

const breadcrumb = generateBreadcrumb({
  list: [
    {
      title: "نقل اثاث الفلل في الإمارات",
      url: "/نقل-اثاث-الفلل",
    },
  ],
});

export default function VillaMoversPage() {
  return (
    <>
      <script
        
        id="breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumb }}
      />
      <main>
        <Breadcrumb list={[
    {
      title: "نقل اثاث الفلل في الإمارات",
      url: "/نقل-اثاث-الفلل",
    },
  ]} />
        {/* 1. قسم الهيرو الرئيسي (Hero Section) */}
        <section className="relative overflow-hidden border-b border-border py-16 md:py-24">
          <div className="relative z-10 max-w-7xl mx-auto md:px-10 px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start text-right">
              <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight mb-6">
                نقل اثاث الفلل في الإمارات — فريق يتعامل مع الحجم الكبير بدون
                متاعب
              </h1>

              <div className="text-base text-muted-foreground leading-relaxed mb-8 space-y-4">
                <p>
                  نقل اثاث الفلل ليس مثل نقل الشقق. الفيلا فيها غرف أكثر، أثاث
                  أثقل وأضخم، وأحياناً قطع لا يمكن نقلها إلا بفريق كبير ومعدات
                  مناسبة.
                </p>
                <p>
                  هناك أيضاً الحدائق والمصليات والمخازن والغرف الخارجية — مع كل
                  هذا، نظل أنت والعائلة داخل الفيلا حتى لحظة تسليمها. لذلك تحتاج
                  شركة تفهم هذا الضغط وتخطط للنقل وفقه.
                </p>
                <p>
                  نحن شركة موفرز آند باكرز، مرخصون رسمياً ونعمل في الإمارات منذ
                  عام 1998. نقل اثاث الفلل أحد تخصصاتنا الرئيسية، وقد أتممنا
                  مئات عمليات نقل الفلل في دبي وأبوظبي والشارقة وسائر الإمارات
                  بكفاءة واحترافية.
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
                alt="فريق شركة موفرز آند باكرز لنقل اثاث الفلل الكبيرة في دبي الإمارات"
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
        {/* 2. قسم التحليل والتوجيه (لماذا تحتاج الفلل شركة ذات خبرة فعلية؟) */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
                لماذا نقل الفلل يحتاج شركة ذات خبرة فعلية؟
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                ليس كل من يملك شاحنة يستطيع نقل فيلا. هذه حقيقة يكتشفها الناس
                يوم النقل حين يرون فريقاً غير منظم يتعامل مع ممتلكات ثمينة
                بإهمال. نقل الفيلا يتطلب حتماً:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* الميزة الأولى */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">👥</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    فريقاً كبيراً كافياً للحجم
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    فيلا مكونة من 4-6 غرف تحتاج فريقاً من 6-10 عمال متخصصين على
                    الأقل لإنجاز أعمال الفك والتغليف والتحميل في وقت معقول
                    ومحدد. نحن نحدد حجم الطاقم المناسب بعد إجراء المعاينة
                    المباشرة لتفادي التأخير.
                  </p>
                </div>
              </div>

              {/* الميزة الثانية */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">🚛</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    شاحنات بطاقة استيعابية كافية
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    العديد من الفلل تتطلب أكثر من رحلة نقل واحدة. نخطط لهذا بشكل
                    مسبق ودقيق: هل نستخدم شاحنة واحدة كبيرة ذات سعة ضخمة أم
                    نعتمد على شاحنتين معاً؟ هذا التخطيط الذكي يحمي ميزانيتك
                    ويوفر وقتك الثمين.
                  </p>
                </div>
              </div>

              {/* الميزة الثالثة */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">🏺</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    التعامل مع الأثاث الثقيل والضخم
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    خزائن الحائط الكبيرة، الأسرّة الثقيلة، طاولات السفرة
                    الرخامية، والتحف الثرية واللوحات الحساسة؛ كلها تتطلب طرق
                    تغليف وحمل تختلف كلياً عن العفش العادي. فريقنا مدرب بالكامل
                    ويمتلك أفضل الأدوات للتعامل مع هذه القطع.
                  </p>
                </div>
              </div>

              {/* الميزة الرابعة */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">📏</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    التخطيط للمسارات داخل الفيلا
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    السلالم الداخلية الملتوية، ممرات الصالات الضيقة، والأبواب
                    الخارجية الواسعة؛ كلها ممرات نقوم بمعاينتها وتقييم أبعادها
                    بدقة قبل البدء، لنضمن مسارات خروج ودخول آمنة كلياً ومحمية
                    لكل قطعة أثاث.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. قسم تفاصيل شمول الخدمة لنقل الفلل */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
                ما تشمله خدمة نقل اثاث الفلل
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                خدماتنا تغطي أدق التفاصيل لعملية انتقال متكاملة من فيلتك القديمة
                إلى الجديدة:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* البند 1 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  معاينة ميدانية مجانية
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  قبل نقل أي فيلا، نرسل مشرفاً خبيراً لمعاينة وتدوين متطلبات كل
                  غرفة وملحقاتها الخارجية. هذه الخطوة الاستباقية تحميك وتحمينا
                  من أي مفاجآت في يوم النقل الفعلي.
                </p>
              </div>

              {/* البند 2 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  تغليف كامل بمواد متخصصة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  جميع التحف والأجهزة والزجاجيات تحظى بحماية معززة بالفقاعات
                  والإسفنج المقوى. نغلف الأثاث الثقيل ببطانيات سميكة لحمايته من
                  الاحتكاك والخدوش داخل الشاحنة المغلقة.
                </p>
              </div>

              {/* البند 3 */}
              <div className="bg-background p-6 rounded-2xl border border-primary/20 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-3">
                  فك جميع أنواع الأثاث المركب
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نتعامل باحترافية تامة مع غرف النوم الإيطالية الفاخرة، خزائن
                  الحائط المدمجة والواسعة، الأسرّة المعلقة والمزدوجة، وأنظمة
                  شاشات التلفزيون المثبتة على الجدران دون حدوث أي ضرر أو خدش.
                </p>
              </div>

              {/* البند 4 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  نقل المقتنيات الثمينة والحساسة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نوفر بروتوكولاً أمنياً وتغليفاً خاصاً لنقل اللوحات الفنية
                  الأصلية، التحف التاريخية الثمينة، الأجهزة الطبية المنزلية
                  الحساسة، والخزائن الحديدية الثقيلة.
                </p>
              </div>

              {/* البند 5 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  تركيب كامل ومتقن في الفيلا الجديدة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  بعد وصول الأثاث، نقوم بإعادة بناء وتركيب كل قطعة في مكانها
                  المحدد حسب توجيهاتك. لا نغادر الموقع الجديد حتى نتأكد من رضاك
                  الكامل.
                </p>
              </div>

              {/* البند 6 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  خدمة تنظيم ما بعد النقل (اختياري)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  إذا كنت ترغب في الانتقال مباشرة لفيلا مرتبة وجاهزة للمعيشة،
                  فإننا نقدم خدمة تفريغ الكراتين وإعادة ترتيب الملابس والأواني
                  في أماكنها مع إزالة كافة مواد التغليف والمخلفات.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. قسم خطوات ومراحل التخطيط لنقل الفيلا */}
        <section className="py-16 md:py-24 border-t border-b border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-16">
              مراحل نقل الفيلا — كيف نخطط للنقل الكبير
            </h2>

            <div className="relative border-r-2 border-primary/20 pr-8 space-y-12 max-w-4xl mx-auto">
              {/* الخطوة 1 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  ١. المعاينة الميدانية
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نزور الفيلا لدراسة ومعاينة كافة الغرف والمقتنيات بدقة، ونحدد
                  الأثاث الذي يحتاج لعمليات فك خاصة وتغليف معقد.
                </p>
              </div>

              {/* الخطوة 2 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  ٢. خطة النقل المفصلة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نعد جدولاً لوجستياً تفصيلياً: متى يبدأ طاقمنا العمل، وما هو
                  ترتيب إخراج وتحميل الأثاث، وكم عدد الشاحنات، والوقت التقديري
                  للتسليم.
                </p>
              </div>

              {/* الخطوة 3 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  ٣. عرض السعر الشفاف
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  تصلك كافة تفاصيل التسعيرة بشكل واضح ومكتوب على واتساب أو
                  البريد الإلكتروني دون أي بنود غير مفهومة وتكاليف إضافية
                  مفاجئة.
                </p>
              </div>

              {/* الخطوة 4 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  ٤. يوم التنفيذ
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  يصل طاقمنا المتخصص في الموعد المحدد ويبدأ العمل بنظام وبخطوات
                  منهجية: الفك، التغليف، الترقيم والترميز للكراتين، ثم التحميل.
                </p>
              </div>

              {/* الخطوة 5 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  ٥. النقل والتسليم
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نصل بالسلامة إلى فيلتك الجديدة، نقوم بتفريغ الشاحنات، تركيب
                  غرف النوم والأثاث بدقة، والتأكد من مطابقة ومراجعة كل بند
                  لراحتك.
                </p>
              </div>

              {/* الخطوة 6 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-primary mb-2">
                  ٦. الدفع بعد الرضا
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  تتفقد جميع أرجاء الفيلا والملحقات بهدوء وتتأكد من سلامتها
                  التامة، ثم تقوم بدفع المبلغ المتفق عليه مسبقاً فقط.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. قسم التغطية والروابط الداخلية */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  نقل اثاث الفلل في جميع الإمارات
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  سواء كانت فيلتك في أرقى المجمعات السكنية في دبي أو في أي إمارة
                  أخرى، نصل إليك. نتعامل مع نقل الفلل في: دبي، أبوظبي، الشارقة،
                  عجمان، رأس الخيمة، الفجيرة، أم القيوين، والعين. النقل الآمن
                  للمسافات الطويلة بين الإمارات هو أحد تخصصاتنا اليومية.
                </p>

                <div className="border-t border-border pt-6">
                  <p className="font-bold text-sm text-foreground mb-4">
                    اطلع على صفحات خدماتنا المتميزة الأخرى:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Link
                      href="/نقل-اثاث-المنزل"
                      className="flex items-center gap-2 text-primary hover:underline font-bold text-sm"
                    >
                      📍 نقل اثاث المنزل
                    </Link>
                    <Link
                      href="/نقل-اثاث-المكاتب"
                      className="flex items-center gap-2 text-primary hover:underline font-bold text-sm"
                    >
                      📍 نقل اثاث المكاتب
                    </Link>
                    <Link
                      href="/خدمات-تغليف-اثاث"
                      className="flex items-center gap-2 text-primary hover:underline font-bold text-sm"
                    >
                      📍 خدمات التغليف
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative aspect-4/3 bg-muted rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/ar/فك-وتغليف-اثاث-الفيلا-احترافي-الإمارات.jpg"
                  alt="عمال موفرز آند باكرز يفككون ويغلفون اثاث فيلا فاخرة بشكل احترافي في الإمارات"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. قسم الأسعار وطريقة الحجز للفلل */}
        <section className="py-16 border-t border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="bg-background border border-border rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                    أسعار نقل اثاث الفلل والحصول على عرض
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    السعر النهائي يتحدد بشكل دقيق بعد إجراء المعاينة الميدانية
                    أو مراجعة الصور. فالفيلا الكبيرة تختلف عن المتوسطة، والنقل
                    السكني بين الإمارات يختلف عن النقل الداخلي بنفس المدينة.
                    ولكن ما نلتزم به دوماً هو: كل ما تسمعه في العرض المكتوب هو
                    كل ما تدفعه، دون زيادة فلس واحد.
                  </p>

                  <div className="space-y-4 mb-6">
                    <p className="font-bold text-sm text-foreground">
                      تواصل معنا فوراً واطلب معاينتك المجانية:
                    </p>
                    <ul className="space-y-2 text-xs text-muted-foreground pr-4 list-disc">
                      <li>
                        📞 <strong>اتصال هاتفي مباشر:</strong>{" "}
                        <span dir="ltr">+971 50 774 5691</span>
                      </li>
                      <li>
                        💬 <strong>محادثة واتساب سريعة:</strong>{" "}
                        <span dir="ltr">+971 50 774 5691</span>
                      </li>
                      <li>
                        🌐 <strong>الحصول على تسعيرة:</strong>{" "}
                        <Link
                          href="/get-quote"
                          className="text-primary hover:underline font-bold"
                        >
                          احصل على عرض مجاني
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
                    💬 اطلب معاينة مجانية للفيلا
                  </Button>
                  <Button
                    quoteBtn
                    variant="outline"
                    size="lg"
                    className="w-full text-base font-bold py-6"
                  >
                    🌐 اطلب عرض سعر مكتوب
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. قسم الأسئلة الشائعة (FAQ) لنقل الفلل */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-16">
              أسئلة شائعة حول نقل اثاث الفلل
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  كم يستغرق نقل فيلا من 4 غرف؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  في الغالب تستغرق العملية يوماً كاملاً، يتراوح ما بين 8 إلى 12
                  ساعة عمل متواصلة، وهذا يشمل كافة أعمال الفك الاحترافي، التغليف
                  الفائق، النقل، وإعادة التركيب في الموقع الجديد. المعاينة
                  المسبقة تمنحك وقتاً تقديرياً أدق.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  هل تتعاملون مع القطع الأثرية والتحف الثمينة؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نعم، نتعامل معها بحرص وعناية فائقة. نرجو منك إخطارنا بوجود هذه
                  القطع وتفاصيلها مسبقاً قبل عملية الانتقال لنقوم بتوفير وتجهيز
                  مواد تغليف مخصصة وحمايتها بأعلى المقاييس.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  هل يمكن نقل الفيلا على مرحلتين في يومين مختلفين؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نعم، هذا خيار متاح ويُفضله بعض عملائنا في الفلل الكبيرة
                  والمزدحمة لتسهيل ترتيب وتنظيم الأغراض. نقوم بتنظيم هذا الجدول
                  الزمني المرن معك مسبقاً وفق ما يناسب عائلتك.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  هل تُقدمون خدمة الخزن المؤقت إذا احتجنا؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نعم بالتأكيد. نوفر خدمات تخزين مؤقت متميزة ومحمية بالكامل في
                  حال وجود فجوة زمنية أو تأخير بين تسليم فيلتك القديمة واستلام
                  الجديدة. يمكنك التعرف على خدمات التخزين لدينا من خلال{" "}
                  <Link
                    href="/moving-services"
                    className="text-primary hover:underline font-bold"
                  >
                    رابط خدمات التخزين
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="-mt-16" />
        <ReviewSection />
        <div className="pb-16" />
        {/* 8. بانر الحجز النهائي للفلل */}
        <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 z-0" />
          <div className="relative z-10 max-w-7xl mx-auto md:px-10 px-4">
            <h2 className="text-2xl md:text-4xl font-black mb-4">
              📞 انقل فيلتك مع من يعرف كيف يتعامل معها
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              نمتلك مسيرة خبرة تتجاوز 25 سنة مكرسة لنقل الفلل الكبيرة والصغيرة
              في الإمارات. خدمات آمنة، دفع بعد رضاك التام، ودون وجود أي أسعار
              وتكاليف مخفية.
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
