import Link from "next/link";
import heroImage from "@/public/ar/خدمات-تغليف-اثاث-احترافي-الإمارات-موفرز-باكرز.jpg";
import { Button } from "@/components/ui/button"; // يرجى مطابقة هذا المسار لمجلد مكون الزر لديك
import Image from "next/image";
import { ReviewSection } from "@/components/ReviewSection";
import QuotationSection from "@/components/QuotationSection";
import MetadataTemplate from "@/lib/MetaDataTemplate";

import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "خدمات تغليف اثاث في الإمارات | مواد احترافية — شركة مرخصة",
      desc: "خدمات تغليف اثاث احترافية في دبي والإمارات. كراتين، فقاعات هوائية، بلاستيك تمدد، بطانيات قماشية. شركة مرخصة منذ 1998. عرض مجاني على واتساب.",
    },
    image: {
      path: "/ar/خدمات-تغليف-اثاث-احترافي-الإمارات-موفرز-باكرز.jpg",
      alt: "متخصص من شركة موفرز آند باكرز يغلف اثاثاً بمواد احترافية في دبي الإمارات",
    },
    path: "/خدمات-تغليف-اثاث",
  },
});

const breadcrumb = generateBreadcrumb({
  list: [
    {
      title: "خدمات تغليف اثاث في الإمارات",
      url: "/خدمات-تغليف-اثاث",
    },
  ],
});

export default function PackingServicesPage() {
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
      title: "خدمات تغليف اثاث في الإمارات",
      url: "/خدمات-تغليف-اثاث",
    },
  ]} />
        {/* 1. قسم الهيرو الرئيسي (Hero Section) */}
        <section className="relative overflow-hidden border-b border-border py-16 md:py-24">
          <div className="relative z-10 max-w-7xl mx-auto md:px-10 px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start text-right">
              <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight mb-6">
                خدمات تغليف اثاث في الإمارات — الحماية الحقيقية تبدأ قبل رفع أي
                قطعة
              </h1>

              <div className="text-base text-muted-foreground leading-relaxed mb-8 space-y-4">
                <p>
                  خدمات تغليف اثاث ليست مجرد لف الأثاث بنايلون عشوائي ووضعه في
                  الشاحنة. التغليف الصحيح يعني أن غرفة نومك لن تصل مخدوشة، وأن
                  الأجهزة الإلكترونية لن تتأثر بالحرارة أو الاهتزاز، وأن
                  الزجاجيات ستصل سليمة دون أدنى كسر.
                </p>
                <p>
                  الشركات التي تُهمل التغليف الصحيح تُحوّل نقلك من تجربة انتقال
                  سعيدة إلى ندم وخسائر غير متوقعة.
                </p>
                <p>
                  نحن شركة موفرز آند باكرز، نقدم خدمات تغليف اثاث احترافية في
                  الإمارات منذ عام 1998 باستخدام مواد تغليف عالية الجودة وفريق
                  متخصص يعرف كيف يحمي كل نوع من الأثاث بالطريقة الصحيحة الملائمة
                  له.
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
                alt="متخصص من شركة موفرز آند باكرز يغلف اثاثاً بمواد احترافية في دبي الإمارات"
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
        {/* 2. قسم التحليل الفني (لماذا يستحق التغليف الاحترافي كل درهم تدفعه؟) */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
                لماذا التغليف الاحترافي يستحق كل درهم تدفعه؟
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                السؤال الذي يسأله بعض العملاء: &quot;هل يمكنني تغليف أغراضي
                بنفسي؟&quot; والإجابة: نعم يمكنك ذلك، ولكن هناك فرق شاسع بين
                التغليف العشوائي البسيط والتغليف المنهجي التخصصي.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* القائمة الفرعية الأولى: الأضرار الأكثر شيوعاً */}
              <div className="bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 text-primary">
                  <span>⚠️</span> الأضرار الأكثر شيوعاً في النقل بدون تغليف كافٍ
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground pr-4 list-disc">
                  <li>
                    حدوث خدوش وعلامات بالخشب نتيجة الاحتكاك المباشر أثناء
                    التحميل.
                  </li>
                  <li>
                    كسر الزجاج والمرايا والتحف الحساسة التي لا تتحمل الصدمات.
                  </li>
                  <li>
                    تلف الأجهزة الإلكترونية نتيجة الاهتزازات القوية أو التعرض
                    للحرارة الشديدة.
                  </li>
                  <li>
                    تشويه وتمزيق الأقمشة والجلود الخاصة بالكنبات والمجالس بسبب
                    الاحتكاك.
                  </li>
                  <li>
                    كسر الأطراف الحادة والزوايا للأثاث عند المرور من الأبواب
                    الضيقة.
                  </li>
                </ul>
                <p className="text-xs text-primary font-bold mt-6">
                  * التغليف الصحيح والمنهجي يمنع حدوث كل هذا تماماً ويحافظ على
                  ممتلكاتك.
                </p>
              </div>

              {/* القائمة الفرعية الثانية: مواد التغليف المستخدمة */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 text-primary">
                    <span>🛠️</span> مواد التغليف التي نستخدمها ولماذا يُفضَّل
                    ذلك
                  </h3>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      <strong>الفقاعات الهوائية (Bubble Wrap):</strong> توفر
                      أفضل حماية ممكنة للقطع الزجاجية والأجهزة الإلكترونية
                      والتحف. الفقاعات تمتص الصدمات وتمنع الاحتكاك المباشر.
                    </p>
                    <p>
                      <strong>بلاستيك التمدد (Stretch Film):</strong> يُستخدم
                      لتثبيت الأثاث الكبير وتجميع الأغراض والقطع الصغيرة معاً،
                      ويحمي من الأتربة والرطوبة وبقع الدهان.
                    </p>
                    <p>
                      <strong>الكراتين المتينة:</strong> نوفر كراتين بأحجام
                      مختلفة تناسب كافة الاحتياجات؛ كراتين كبيرة للملابس، وصغيرة
                      للكتب والأشياء الثقيلة، وكراتين خاصة لحفظ الأجهزة.
                    </p>
                    <p>
                      <strong>البطانيات القماشية:</strong> مخصصة لحماية القطع
                      الكبيرة كغرف النوم والكنبات والطاولات الخشبية الكبيرة.
                      تمنع الخدوش وتحمي من الحرارة.
                    </p>
                    <p>
                      <strong>الإسفنج المقطوع:</strong> مخصص لحماية زوايا الأثاث
                      وحوافه الحادة من خطر الاصطدام العشوائي بجدران الممرات.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. قسم أنواع خدمات التغليف التي نقدمها */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
                أنواع خدمات تغليف الاثاث التي نقدمها
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                تتعدد وتتنوع حلول التغليف لدينا لتلائم رغباتكم وحجم ميزانيتكم
                المحددة:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* البند 1 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  تغليف كامل (Full Packing Service)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نتولى تغليف كل شيء في منزلك أو مقر مكتبك من البداية وحتى
                  النهاية: الملابس، الكتب، الأواني وأدوات المطبخ، الأجهزة،
                  والأثاث بالكامل. كل شيء مرقّم ومكتوب عليه محتواه لسهولة فرزه.
                </p>
              </div>

              {/* البند 2 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  تغليف جزئي (Partial Packing)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  إذا كنت ترغب في تغليف وحماية بعض القطع الحساسة فقط — مثل
                  الزجاجيات، المرايا، الأواني والأجهزة الإلكترونية — وتفضل نقل
                  بقية الأثاث بنفسك، فإننا نوفر لك هذا الخيار المرن والعملي.
                </p>
              </div>

              {/* البند 3 */}
              <div className="bg-background p-6 rounded-2xl border border-primary/20 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-3">
                  تغليف القطع الخاصة والحساسة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  التحف النادرة، اللوحات الفنية الأصلية، المرايا الكبيرة جداً،
                  والثريات الفخمة؛ كلها تتطلب طرق تغليف تخصصية ومواد وقاية
                  مخصصة. نمتلك الخبرة الكافية والأدوات المناسبة لنقلها بسلام.
                </p>
              </div>

              {/* البند 4 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  تغليف الأجهزة الكهربائية الكبيرة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  الثلاجة، الغسالة، أجهزة التكييف، وشاشات التلفزيون الضخمة؛
                  نستخدم لها مواد تغليف مخصصة من الكرتون السميك والفقاعات
                  الهوائية والإسفنج لحمايتها ومنع حدوث أي تلفيات بها أثناء
                  حركتها.
                </p>
              </div>

              {/* البند 5 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm md:col-span-2 lg:col-span-1">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  تغليف العفش المخصص للتخزين
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  إذا كنت بحاجة لتخزين أثاثك لفترة زمنية طويلة، فإن طرق التغليف
                  تختلف تماماً عن التغليف العادي للنقل؛ حيث نعتمد على مواد تغليف
                  تمنع الرطوبة وتحمي من الحشرات لضمان بقائه في حالة ممتازة. تعرف
                  على المزيد عبر{" "}
                  <Link
                    href="/moving-services"
                    className="text-primary hover:underline font-bold"
                  >
                    رابط خدمات التخزين لدينا
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. قسم آليات الفروقات والخطوات التنفيذية بالتفصيل */}
        <section className="py-16 md:py-24 border-t border-b border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-12">
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  الفرق بين تغليف الشركة المرخصة وتغليف العامل المستقل
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  هذه نقطة جوهرية يسأل عنها الكثير من العملاء؛ والفرق الحقيقي لا
                  يكمن فقط في جودة المواد المستخدمة، بل يمتد للمسؤولية القانونية
                  والمهنية:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-2xl border border-border">
                    <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="text-red-500">❌</span> عامل مستقل بلا
                      ترخيص رسمي
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      لا يتحمل أي مسؤولية قانونية أو مهنية في حال تعرض أثاثك
                      للكسر أو الخدش. ويمكنه ببساطة التهرب والاختفاء تماماً بعد
                      انتهاء العمل واستلام المستحقات.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-primary/20">
                    <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                      <span className="text-green-500">✅</span> شركة مرخصة
                      ومسجلة مثلنا
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      نحن متواجدون ومسؤولون عن خدمتنا بشكل كامل ومستمر. ملفنا
                      التجاري وقنوات التواصل الرسمية موجودة ومفتوحة للتقييم على
                      Google Business. نحن هنا لخدمتك قبل وأثناء وبعد انتهاء
                      العمل.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-16">
              كيف نُنفّذ خدمة تغليف الاثاث — الخطوات بالتفصيل
            </h2>

            <div className="relative border-r-2 border-primary/20 pr-8 space-y-12 max-w-4xl mx-auto">
              {/* الخطوة 1 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  ١. الاستعداد المسبق والتجهيز
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  قبل وصول فريق العمل، نقوم بتجهيز وإحضار كميات ومقاييس مواد
                  التغليف المناسبة بناءً على الوصف والتقييم الأولي لحجم أثاثك
                  ومحتوياته.
                </p>
              </div>

              {/* الخطوة 2 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  ٢. الفرز والتصنيف الدقيق
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نبدأ بتقسيم وتصنيف الأثاث والأغراض إلى مجموعات محددة حسب نوعها
                  وطبيعتها وحجمها؛ فالأواني والزجاجيات يتم فصلها كلياً وتجميعها
                  بعناية.
                </p>
              </div>

              {/* الخطوة 3 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  ٣. التغليف المنهجي والآمن
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  كل قطعة أثاث أو جهاز تأخذ مادة التغليف الملائمة لها تماماً؛
                  حيث نستخدم طبقات كافية من الفقاعات والبلاستيك والبطانيات
                  لامتصاص أي اهتزازات.
                </p>
              </div>

              {/* الخطوة 4 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  ٤. الترقيم والتوثيق للمحتويات
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نقوم بترقيم الكراتين وتسجيل محتوياتها بوضوح تام وتحديد الغرفة
                  المخصصة لها في المقر الجديد لسهولة فرزها وإعادة ترتيبها بمجرد
                  الوصول.
                </p>
              </div>

              {/* الخطوة 5 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  ٥. التحميل الآمن والمنظم
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نقوم بتحميل وترتيب الكراتين والأثاث داخل الشاحنة المغلقة
                  بترتيب هندسي يضع الأغراض الثقيلة في الأسفل، والأكثر حساسية في
                  أماكن محمية تماماً.
                </p>
              </div>

              {/* الخطوة 6 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-primary mb-2">
                  ٦. فك التغليف في الموقع الجديد
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  هذه خدمة اختيارية نوفرها لراحتكم؛ حيث نقوم بفك مواد التغليف
                  وإعادة تنظيم وترتيب العفش في أماكنه المخصصة وإزالة كافة
                  الأوراق والمخلفات معنا.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. قسم التغطية الجغرافية لتغليف الأثاث */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  مناطق تقديم خدمات تغليف الأثاث
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  نحن نقدم خدمات تغليف الأثاث الاحترافية في جميع أنحاء الدولة:
                  دبي، الشارقة، أبوظبي، عجمان، رأس الخيمة، الفجيرة، أم القيوين،
                  والعين. وسواء كنت تنتقل داخل نفس الإمارة أو لمدينة أخرى، نصل
                  إليك بجميع المواد والمعدات اللازمة.
                </p>
              </div>

              <div className="lg:col-span-5 relative aspect-4/3 bg-muted rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/ar/تغليف-اجهزة-تحف-اثاث-ثمين-دبي.jpg"
                  alt="فريق موفرز آند باكرز يغلف أجهزة كهربائية وتحف وأثاثاً ثميناً بمواد متخصصة في دبي"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. قسم الأسعار وطريقة حجز الخدمة */}
        <section className="py-16 border-t border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="bg-background border border-border rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                    أسعار خدمات تغليف الاثاث
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    السعر يعتمد بشكل أساسي على: حجم وكمية المقتنيات التي تتطلب
                    تغليفاً، طبيعة ونوعية المواد المطلوبة، وما إذا كانت الخدمة
                    مستقلة بذاتها أم جزءاً من عملية نقل فك وتركيب متكاملة. نحن
                    نقدم التغليف كحل مستقل أو كجزء من باقة الانتقال الشاملة
                    لتناسب احتياجاتكم.
                  </p>

                  <div className="space-y-4 mb-6">
                    <p className="font-bold text-sm text-foreground">
                      لطلب تسعيرة أو استفسار سريع:
                    </p>
                    <ul className="space-y-2 text-xs text-muted-foreground pr-4 list-disc">
                      <li>
                        📞 <strong>اتصل بنا بالهاتف:</strong>{" "}
                        <span dir="ltr">+971 50 774 5691</span>
                      </li>
                      <li>
                        💬 <strong>مراسلة فورية واتساب:</strong>{" "}
                        <span dir="ltr">+971 50 774 5691</span>
                      </li>
                      <li>
                        🌐 <strong>نموذج الموقع الرسمي:</strong>{" "}
                        <Link
                          href="/get-quote"
                          className="text-primary hover:underline font-bold"
                        >
                          طلب تسعيرة مجانية عبر نموذج الموقع
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
                    💬 اطلب تسعيرة تغليف عبر واتساب
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

        {/* 7. قسم الأسئلة الشائعة (FAQ) لتغليف الأثاث */}
        <section className="py-16 md:py-24 border-t border-border ">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-16">
              أسئلة شائعة حول تغليف الاثاث
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  هل يمكنني الحصول على خدمة التغليف فقط بدون نقل؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نعم بالتأكيد، نحن نوفر خدمة التغليف الاحترافي كخدمة مستقلة
                  وممتازة. إذا كنت ترغب في تغليف وحفظ ممتلكاتك لتقوم بعملية
                  النقل بنفسك أو بطريقتك، فإننا نوفر لك طاقم العمل ومواد التغليف
                  الفاخرة للقيام بذلك بدقة.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  هل تُوفّرون الكراتين والمواد منفصلةً للبيع؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  يرجى التواصل معنا عبر واتساب أو الهاتف للاستفسار؛ حيث يمكننا
                  في بعض الحالات التنسيق وتوفير وإيصال صناديق الكرتون ومواد
                  التغليف المتنوعة للعملاء الذين يفضلون القيام بأعمال التغليف
                  بمفردهم وبأنفسهم.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  كيف تتعاملون مع تغليف التحف والقطع الثمينة جداً؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نعتمد على لف القطع بطبقات متعددة ومتينة من الفقاعات الهوائية
                  الماصة للصدمات، ونغلف زواياها وحوافها بالإسفنج المرن، كما نوثق
                  حالتها وسلامتها بالكامل من خلال التقاط صور فوتوغرافية واضحة
                  للقطع قبل التغليف وبعد التوصيل والفرز.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  هل التغليف مشمول تلقائياً في سعر النقل؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  التغليف الأساسي والوقائي للأثاث الخشبي والمعدني والأجهزة
                  الكبيرة مشمول تلقائياً بداخل عروض أسعار النقل والتركيب. أما
                  التغليف الكامل والدقيق لكل الأغراض الصغيرة وأدوات المطابخ
                  والملابس فيعد حلاً إضافياً يُحدّد بوضوح.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="-mt-16" />
        <ReviewSection />
        <div className="pb-16" />
        {/* 8. بانر الحجز النهائي المخصص للتغليف */}
        <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 z-0" />
          <div className="relative z-10 max-w-7xl mx-auto md:px-10 px-4">
            <h2 className="text-2xl md:text-4xl font-black mb-4">
              📞 غلّف أثاثك بشكل صحيح من البداية
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              التغليف غير المناسب أو الرديء سيكلفك الكثير من المال والجهد عندما
              تكتشف وجود خدوش وتلفيات بأثاثك وممتلكاتك الثمينة. نحن شركة مرخصة
              رسمياً منذ عام 1998، نوفر لك خدمات تغليف تخصصية ممتازة تحمي
              مقتنياتك بالكامل.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                whatsappBtn
                className="bg-white text-primary hover:bg-white/90 text-base font-bold px-8 py-6 rounded-full shadow-2xl"
              >
                💬 احصل على تسعيرة تغليف مجانية الآن
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
