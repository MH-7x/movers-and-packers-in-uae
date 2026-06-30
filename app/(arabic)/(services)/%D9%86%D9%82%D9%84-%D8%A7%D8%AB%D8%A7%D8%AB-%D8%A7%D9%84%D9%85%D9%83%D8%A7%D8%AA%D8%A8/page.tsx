import Link from "next/link";
import heroImage from "@/public/ar/نقل-اثاث-المكاتب-دبي-موفرز-باكرز.jpg";
import { Button } from "@/components/ui/button"; // يرجى مطابقة هذا المسار لمجلد مكون الزر لديك
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Image from "next/image";
import QuotationSection from "@/components/QuotationSection";
import { ReviewSection } from "@/components/ReviewSection";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import { Breadcrumb } from "@/components/Breadcrumb";


export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "نقل اثاث المكاتب في الإمارات | شركة مرخصة — نقل تجاري آمن",
      desc: "شركة نقل اثاث المكاتب في الإمارات. نقل مكتبي احترافي للشركات والمؤسسات مع تغليف الأجهزة والحفاظ على السرية. عرض سعر مجاني، دفع بعد الرضا.",
    },
    image: {
      path: "/ar/نقل-اثاث-المكاتب-دبي-موفرز-باكرز.jpg",
      alt: "فريق شركة موفرز آند باكرز لنقل اثاث المكاتب في أبراج دبي التجارية الإمارات",
    },
    path: "/نقل-اثاث-المكاتب",
  },
});

const breadcrumb = generateBreadcrumb({
  list: [
    {
      title: "نقل اثاث المكاتب في الإمارات",
      url: "/نقل-اثاث-المكاتب",
    },
  ],
});

export default function OfficeMoversPage() {
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
      title: "نقل اثاث المكاتب في الإمارات",
      url: "/نقل-اثاث-المكاتب",
    },
  ]} />
        {/* 1. قسم الهيرو الرئيسي (Hero Section) */}
        <section className="relative overflow-hidden border-b border-border py-16 md:py-24">
          <div className="relative z-10 max-w-7xl mx-auto md:px-10 px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start text-right">
              <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight mb-6">
                نقل اثاث المكاتب في الإمارات — نقل تجاري يحترم الوقت والسرية
              </h1>

              <div className="text-base text-muted-foreground leading-relaxed mb-8 space-y-4">
                <p>
                  نقل اثاث المكاتب لا يشبه نقل المنازل من ناحية واحدة جوهرية: كل
                  ساعة تأخير يعني خسارة عمل فعلية. الموظفون ينتظرون، العملاء لا
                  يعرفون ماذا يحدث، والعمليات متوقفة.
                </p>
                <p>
                  لهذا السبب، نقل مكتب ناجح يعتمد على تخطيط دقيق ومحترف يُنجز
                  العمل في أسرع وقت بأقل تعطل ممكن لسير أعمالكم.
                </p>
                <p>
                  نحن شركة موفرز آند باكرز في الإمارات، نعمل منذ 1998 ونمتلك
                  خبرة واسعة في نقل اثاث المكاتب لشركات صغيرة ومتوسطة وكبيرة في
                  دبي وأبوظبي والشارقة والإمارات الأخرى. من بنوك ومستشفيات إلى
                  مكاتب تجارية ومستودعات — تعاملنا مع كل أنواع النقل التجاري.
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
                alt="فريق شركة موفرز آند باكرز لنقل اثاث المكاتب في أبراج دبي التجارية الإمارات"
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
        {/* 2. قسم التحليل والمقارنة (لماذا يختلف النقل التجاري عن السكني؟) */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
                لماذا النقل التجاري يختلف تماماً عن النقل السكني؟
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                تتطلب بيئات الأعمال آليات وخططاً تشغيلية صارمة تضمن استمرارية
                الدوام والمحافظة على الأصول:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* الميزة الأولى */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">⚠️</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    المخاطر أعلى
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    في المنزل، الخطأ يمكن تداركه بسهولة. أما في المكتب، فإن تلف
                    أجهزة السيرفر والشبكات أو ضياع المستندات أو حدوث كسر للمعدات
                    ذات القيمة العالية يترجم فوراً كخسارة مالية مباشرة لعمليات
                    الشركة.
                  </p>
                </div>
              </div>

              {/* الميزة الثانية */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">🔒</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    السرية التامة مطلوبة
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    نحن نعمل في بيئات حساسة تحتوي على معلومات هامة وسجلات مالية،
                    وملفات موظفين، وبيانات عملاء خاصة. فريقنا يدرك قيمة هذه
                    المسؤولية ويعمل بمستوى عالٍ من الانضباط والأمانة المهنية بما
                    يتوافق مع البيئة التجارية.
                  </p>
                </div>
              </div>

              {/* الميزة الثالثة */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">⏰</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    التوقيت حرج للغاية
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    العديد من الشركات والمؤسسات تفضل إتمام عمليات النقل خارج
                    أوقات العمل الرسمية؛ مثل الفترات المسائية أو خلال عطلة نهاية
                    الأسبوع. نحن نوفر هذه الحلول المرنة لنضمن جاهزية مقركم
                    الجديد للعمل بالكامل صباح اليوم التالي.
                  </p>
                </div>
              </div>

              {/* الميزة الرابعة */}
              <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
                <div>
                  <span className="text-primary text-3xl mb-4 block">📜</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    الترخيص الرسمي ضرورة لا خيار
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    حينما يتعلق الأمر بنقل ممتلكات وأصول البنوك، المستشفيات، أو
                    الشركات، لا يمكن المخاطرة بالاعتماد على عمالة غير مرخصة.
                    شركتنا مسجلة قانونياً ويمكنكم التحقق من سجلنا التجاري وملفنا
                    الموثق بالكامل على Google Business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. قسم تفاصيل خدمات نقل المكاتب */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
                ما تشمله خدمة نقل اثاث المكاتب
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                نوفر تغطية شاملة لكافة احتياجات مقراتكم الإدارية والتجارية لضمان
                انتقال خالي من المتاعب:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* البند 1 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  تقييم مسبق وخطة نقل تفصيلية
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نزور مقراتكم الحالية والجديدة لوضع تصور تفصيلي شامل يحدد تسلسل
                  إخراج وتنزيل الأثاث، والمعدات الحساسة، وجدولة المواعيد بشكل
                  يضمن تقليص فترات التوقف.
                </p>
              </div>

              {/* البند 2 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  تغليف الأجهزة والمعدات المكتبية
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  أجهزة الحاسوب، الطابعات والماسحات الضوئية، أنظمة السيرفرات
                  والشبكات، والشاشات الحساسة؛ كلها تحظى بأساليب تغليف تخصصية
                  ومواد حماية ماصة للصدمات لضمان سلامتها التامة ومطابقتها
                  للمواصفات.
                </p>
              </div>

              {/* البند 3 */}
              <div className="bg-background p-6 rounded-2xl border border-primary/20 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-3">
                  فك وتركيب الأثاث المكتبي المركب
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نتعامل باحترافية تامة مع فك وتركيب المكاتب الفردية والمزدوجة،
                  خزائن حفظ الملفات والسجلات الواسعة، والقواطع والأقسام المكتبية
                  الداخلية (Partitions) مع إعادتها لحالتها الأصلية بدقة متناهية.
                </p>
              </div>

              {/* البند 4 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  نقل الأرشيف والملفات بأمان
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نقوم بحفظ وأرشفة الملفات والأوراق والمستندات الهامة داخل
                  صناديق وكراتين متينة ومحكمة الإغلاق، مع ترميزها وترقيمها
                  لسهولة توزيعها وترتيبها في المقر الجديد دون حدوث أي تداخل.
                </p>
              </div>

              {/* البند 5 */}
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm md:col-span-2 lg:col-span-1">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  تركيب الستائر والشاشات في الموقع الجديد
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  خدماتنا تمتد لتشمل إعادة تثبيت وتركيب شاشات العرض والستائر
                  المكتبية والبرمجيات الثابتة لتهيئة وتجهيز المكاتب للتشغيل
                  الفوري. يمكنكم التعرف على تفاصيل أكثر عبر{" "}
                  <Link
                    href="/moving-services"
                    className="text-primary hover:underline font-bold"
                  >
                    رابط خدمة تركيب الستائر
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. قسم مميزات وتخطيط النقل خارج الدوام (سيناريو وتوقيت مرن) */}
        <section className="py-16 md:py-24 border-t border-b border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-16">
              النقل خارج أوقات العمل — الخيار الأذكى للشركات
            </h2>

            <div className="relative border-r-2 border-primary/20 pr-8 space-y-12 max-w-4xl mx-auto">
              {/* المرحلة 1 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  تجنب فترات الازدحام ومقاطعة الموظفين
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  إن النقل الليلي أو خلال عطلة نهاية الأسبوع يلغي تماماً فترات
                  الانتظار الطويلة للمصاعد الإدارية المشتركة، ولا يتسبب في
                  مقاطعة أعمال وتشتيت انتباه موظفيكم، كما يضمن تفادي أي إحراج
                  لعملائكم وزواركم أثناء فترات العمل الرسمية.
                </p>
              </div>

              {/* المرحلة 2 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  أعمال الفك والتغليف المسائي والتركيب الليلي
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  يقوم فريقنا بفك الأثاث وتغليفه بدقة وتجهيزه خلال الفترة
                  المسائية، بينما تتم أعمال النقل وإعادة التركيب والترتيب طوال
                  ساعات الليل في المقر الجديد، ليصل طاقم العمل في الصباح الباكر
                  ويجد مقاعده ومعداته جاهزة للبدء والتشغيل فورا.
                </p>
              </div>

              {/* المرحلة 3 */}
              <div className="relative">
                <span className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold text-primary mb-2">
                  تنسيق لوجستي دقيق ومرونة كاملة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  تتطلب هذه الآلية مستوى عالٍ جداً من التنسيق والالتزام بالوقت
                  والمرونة التامة؛ وهو بالتحديد ما نضمن تقديمه وتوفيره لجميع
                  الشركاء والشركات لنوفر عليهم عناء التوقف.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. قسم شركاء النجاح والتغطية الجغرافية للمكاتب */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  شركات استفادت من نقل اثاث مكاتبها بشكل احترافي
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  نحن لا نقيس أعمالنا بحجم المؤسسة؛ بل نتعامل بكفاءة مع الشركات
                  الناشئة التي تنتقل من مكاتب صغيرة، والمجموعات الكبرى والمؤسسات
                  الخدمية التي تنقل مئات الموظفين. وتتنوع القطاعات التي نخدمها
                  لتشمل:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-sm text-foreground font-bold">
                    <span className="text-primary text-xl">🏦</span>
                    <span>بنوك ومؤسسات مالية تحتاج نقل معدات دقيقة وحساسة</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground font-bold">
                    <span className="text-primary text-xl">🏥</span>
                    <span>
                      مستشفيات ومراكز طبية تحتاج نقل أثاث طبي وأجهزة معتمدة
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground font-bold">
                    <span className="text-primary text-xl">🏫</span>
                    <span>مدارس وجامعات تحتاج نقل أثاث صفوف ومعامل دراسية</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground font-bold">
                    <span className="text-primary text-xl">🍔</span>
                    <span>مطاعم وفنادق تنتقل لمواقع جديدة ومطابخ تجارية</span>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="font-bold text-sm text-foreground mb-4">
                    مناطق خدمة نقل المكاتب والتغطية التجارية:
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    نغطي جميع مناطق العمل الرئيسية في الإمارات: أبراج دبي (DIFC،
                    Business Bay، JLT، Media City، Internet City)، أبوظبي،
                    الشارقة، وسائر الإمارات. خدمات النقل البيني والتجاري بين
                    الإمارات متاحة على مدار الساعة.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 relative aspect-4/3 bg-muted rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/ar/تغليف-معدات-مكتبية-احترافي-دبي-الإمارات.jpg"
                  alt="موظفو موفرز آند باكرز يغلفون أجهزة كمبيوتر ومعدات مكتبية داخل مكتب حديث في دبي"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. قسم أسعار نقل المكاتب والاتصال */}
        <section className="py-16 border-t border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="bg-background border border-border rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                    أسعار نقل اثاث المكاتب وعروض السعر
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    سعر النقل التجاري يعتمد بشكل رئيسي على: حجم وعينة المكاتب،
                    عدد الموظفين، كمية ومواصفات الأجهزة والمعدات التقنية، توقيت
                    النقل المفضل، والمسافة الإجمالية بين المقرين. نعد لكم كشف
                    أسعار مفصل بالكامل ومطابق للمعايير بعد إجراء المعاينة
                    المباشرة لمكاتبكم.
                  </p>

                  <div className="space-y-4 mb-6">
                    <p className="font-bold text-sm text-foreground">
                      لطلب تسعيرة أو جدولة معاينة مكتبية مجانية:
                    </p>
                    <ul className="space-y-2 text-xs text-muted-foreground pr-4 list-disc">
                      <li>
                        📞 <strong>اتصال هاتفي مباشر بنا:</strong>{" "}
                        <span dir="ltr">+971 50 774 5691</span>
                      </li>
                      <li>
                        💬 <strong>محادثة واتساب سريعة للتنسيق:</strong>{" "}
                        <span dir="ltr">+971 50 774 5691</span>
                      </li>
                      <li>
                        🌐 <strong>الحصول على تسعيرة:</strong>{" "}
                        <Link
                          href="/get-quote"
                          className="text-primary hover:underline font-bold"
                        >
                          احصل على عرض مجاني الآن
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
                    💬 اطلب معاينة مكتبية عبر واتساب
                  </Button>
                  <Button
                    quoteBtn
                    variant="outline"
                    size="lg"
                    className="w-full text-base font-bold py-6"
                  >
                    🌐 اطلب عرض سعر تجاري
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. قسم الأسئلة الشائعة (FAQ) لنقل المكاتب */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <h2 className="text-2xl md:text-4xl font-black text-foreground text-center mb-16">
              أسئلة شائعة حول نقل اثاث المكاتب
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  هل يمكن إنجاز النقل في ليلة واحدة؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نعم، في كثير من حالات المكاتب الصغيرة والمتوسطة يمكن إنجاز
                  العملية بالكامل في ليلة واحدة. يعتمد هذا الأمر على حجم وتفاصيل
                  المكتب ومعداته الفنية، والمعاينة المسبقة تمنحكم توقيتات
                  تشغيلية واضحة ودقيقة.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  هل تُقدمون وثائق رسمية مع الخدمة؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نعم بالتأكيد، نحن شركة مرخصة ومسجلة رسمياً بالكامل في
                  الإمارات. يمكننا تزويدكم بكافة المستندات والأوراق الرسمية،
                  الفواتير الضريبية المعتمدة، وعروض الأسعار الرسمية المطلوبة
                  لإتمام إجراءاتكم واعتمادها في ملف الموردين لديكم.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  كيف تتعاملون مع معدات تقنية المعلومات والشبكات؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نقوم بتغليف الشاشات، أجهزة الكومبيوتر، والسيرفرات الحساسة
                  بمواد حماية تخصصية ومضادة للكهرباء الساكنة لامتصاص الصدمات
                  والاهتزازات. كما نوصي دوماً بالتنسيق وإشراك فريق تقنية
                  المعلومات (IT) التابع لكم للإشراف ومتابعة تفاصيل توصيل الأجهزة
                  وتشغيلها في المقر الجديد.
                </p>
              </div>

              <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  هل تتعاملون مع النقل التجاري الدولي؟
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  لا تغطي خدماتنا حالياً عمليات الشحن والنقل التجاري الدولي خارج
                  الدولة، ولكننا متخصصون ومجهزون بالكامل لكافة عمليات النقل
                  التجاري واللوجستي الداخلي بجميع أنواعه ومستوياته بين كافة
                  إمارات الدولة.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="-mt-16" />
        <ReviewSection />
        <div className="pb-16" />
        {/* 8. بانر الحجز والتوجيه النهائي للمكاتب */}
        <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 z-0" />
          <div className="relative z-10 max-w-7xl mx-auto md:px-10 px-4">
            <h2 className="text-2xl md:text-4xl font-black mb-4">
              📞 انقل مكتبك مع شركة يمكنك الوثوق بها رسمياً
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              نحن نوفر ترخيصاً رسمياً منذ عام 1998، وملفاً تجارياً موثقاً
              بالكامل على Google Business، مع إمكانية التواصل المباشر مع مالك
              الشركة لتسهيل إجراءاتكم. نقل أثاث المكاتب وأصول الشركات لا يحتمل
              المجازفة، فاختر من يمتلك الخبرة الحقيقية.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                whatsappBtn
                className="bg-white text-primary hover:bg-white/90 text-base font-bold px-8 py-6 rounded-full shadow-2xl"
              >
                💬 تواصل مع مالك الشركة واتساب
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
