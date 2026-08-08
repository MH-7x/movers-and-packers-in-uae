import { FAQSection } from "@/components/FaqsSection";
import { Button } from "@/components/ui/button";
import { ArSharjahMoversFaqs } from "@/lib/FaqsData";
import {
  MessageCircleCheck,
  PhoneCall,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  Sparkles,
} from "lucide-react";

import heroImage from "@/public/ar/نقل-اثاث-دبي-مارينا-نقل-الأثاث-في-الإمارات.jpg";
import Image from "next/image";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Link from "next/link";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import { Breadcrumb } from "@/components/Breadcrumb";
import QuotationSection from "@/components/QuotationSection";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title:
        "نقل أثاث الشارقة | شركة نقل عفش مرخصة وأسعار ثابته (خبرة 25 عاماً)",
      desc: "تبحث عن أفضل شركة نقل أثاث الشارقة؟ نقدم خدمات نقل العفش مع الفك والتغليف والضمان 100%. شاحنات مغلقة RTA، نجارون محترفون والدفع بعد الإتمام. اتصل الآن!",
    },
    image: {
      path: "/ar/نقل-اثاث-دبي-مارينا-نقل-الأثاث-في-الإمارات.jpg",
      alt: "شركة نقل أثاث الشارقة — خدمات نقل عفش احترافية ومضمونة 100%",
    },
    path: "/نقل-اثاث-الشارقة",
  },
});

const breadcrumb = generateBreadcrumb({
  list: [
    {
      title: "نقل اثاث الشارقة",
      url: "/نقل-اثاث-الشارقة",
    },
  ],
});

export default function FurnitureMovingSharjahPage() {
  return (
    <>
      <script
        id="breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumb }}
      />
      <main className="text-foreground">
        <Breadcrumb
          list={[
            {
              title: "نقل اثاث الشارقة",
              url: "/نقل-اثاث-الشارقة",
            },
          ]}
        />

        {/* 1. Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden border-b border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                مرخصة وموثوقة منذ ١٩٩٨ (خبرة 25 عاماً)
              </span>

              <h1 className="text-3xl md:text-4xl  font-black text-foreground tracking-tight leading-[1.2]">
                شركة نقل أثاث الشارقة: خدمات نقل عفش احترافية ومضمونة 100%
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                هل تخطط للانتقال إلى منزل جديد أو مكتب جديد في الشارقة وتستعد
                لمواجهة مشقة التكاديس والتغليف؟ إن عملية نقل المنقولات والأثاث
                من مكان لآخر تُعد من أكثر المهام التي تسبب القلق والتوتر للعديد
                من الأسر وأصحاب الشركات في الإمارات. هنا يأتي دورنا في{" "}
                <strong className="text-foreground font-bold">
                  شركة نقل أثاث الشارقة
                </strong>{" "}
                لنقدم لك الحل المتكامل، المريح، والآمن كلياً.
              </p>

              <div className="bg-muted/50 p-4 rounded-xl border border-border/80">
                <p className="text-sm text-foreground/90 font-medium">
                  إذا أردت عرض سعر مجاني، اتصل بنا أو راسلنا على واتساب وسنرد
                  بسرعة.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  whatsappBtn
                  size={"lg"}
                  className="bg-green-500 hover:bg-green-600 shadow-md"
                >
                  <MessageCircleCheck className="w-5 h-5 ml-1" /> واتساب (عرض
                  سعر مجاني)
                </Button>
                <Button callBtn size={"lg"} className="shadow-md">
                  <PhoneCall className="w-5 h-5 ml-1" /> اتصل بنا الآن
                </Button>
              </div>
            </div>

            {/* Hero Aspect-Square Placeholder Image (1:1 Aspect Ratio) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square bg-muted rounded-3xl overflow-hidden shadow-lg border border-border/50">
                <Image
                  src={heroImage}
                  alt="شركة نقل أثاث الشارقة — خدمات نقل عفش احترافية ومضمونة 100%"
                  fill
                  className="object-cover"
                  loading="eager"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-12">
            <p className="text-base text-muted-foreground leading-relaxed">
              نحن شركة نقل احترافية ومرخصة رسمياً ومقرنا الرئيسي في راس الخور
              الصناعية 1، الشارع 13، مبنى 16، دبي. منذ تأسيس شركتنا الرسمية عام
              1998، عملنا على مدار أكثر من 25 عاماً متواصلة في تقديم خدمات النقل
              رفيعة المستوى في الشارقة وكافة إمارات الدولة. هدفنا الأساسي
              والوحيد هو حمايتك ومساعدتك في التعامل مع شركة مرخصة وموثوقة، بدلاً
              من المخاطرة باللجوء إلى عمالة مستقلة غير مرخصة لا تملك سوى رقم
              هاتف مجهول وموقع مؤقت!
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              سواء كنت تسكن في شقة مرتفعة في{" "}
              <strong className="text-foreground font-semibold">الخان</strong>{" "}
              أو{" "}
              <strong className="text-foreground font-semibold">المجاز</strong>،
              أو تنقل فيلا واسعة في{" "}
              <strong className="text-foreground font-semibold">مويلح</strong>{" "}
              أو{" "}
              <strong className="text-foreground font-semibold">الزاهية</strong>
              ، أو حتى تنقل مقر شركتك في{" "}
              <strong className="text-foreground font-semibold">
                القاسمية
              </strong>
              ؛ فإن فريقنا المتخصص يصلك بأسرع وقت بمكالمة هاتفية واحدة أو رسالة
              واتساب بسيطة.
            </p>
          </div>
        </section>
        <QuotationSection
          ar
          title={
            <>
              <span className="font-bold md:block">احصل على عرض أسعار</span> من
              نقل أثاث الشارقة
            </>
          }
          desc="أخبرنا بما ترغب بنقله، ومن أين، وإلى أين. نحن، شركة نقل أثاث الشارقة، سنرسل إليك عرض سعر مفصل وواضح عبر واتساب أو البريد الإلكتروني. لا نقدم تقديرات مبهمة، فالمبلغ الذي نحدده هو نفسه الموضح في الفاتورة."
        />
        {/* 2. Why Choose Us Section */}
        <section className="py-20 border-b border-border bg-muted/10">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                لماذا نحن أفضل شركة نقل اثاث في الشارقة وخيارك الأول؟
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                في سوق مليء بالإعلانات والعروض الوهمية، تتجلى الخبرة والشفافية
                كمعيار حقيقي للاختيار. إليك الأسباب الجوهرية التي جعلت نسبة رضا
                عملائنا تتجاوز 90%، وجعلتنا نكسب ثقة آلاف العائلات والشركات عبر
                العقود:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-4 flex flex-col justify-between hover:border-primary/50 transition-colors">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    ١
                  </div>
                  <h3 className="text-xl font-bold">
                    1. خبرة عريقة منذ عام 1998 وترخيص رسمي قانوني
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    نحن لسنا شركة حديثة النمذجة أو مجرد وسيط؛ نحن نملك ترخيصاً
                    رسمياً ومسجلاً من الجهات الحكومية في الإمارات منذ عام 1998.
                    السماح لأشخاص بدخول بيتك لتغليف مقتنياتك الشخصية وغرف نومك
                    يتطلب ثقة كاملة، ونحن نوفر لك هذه الثقة القانونية والمهنية.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-4 flex flex-col justify-between hover:border-primary/50 transition-colors">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    ٢
                  </div>
                  <h3 className="text-xl font-bold">
                    2. شفافية مطلقة في الأسعار (بدون أي رسوم مخفية)
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    نعلم جيداً أن أكبر تخوف للمستأجر هو المفاجآت السعرية بعد
                    انتهاء النقل! مع شركتنا، نعتمد نظام تسعير واضح ومكتوب. إذا
                    حصلت على عرض سعر بقيمة 1,000 درهم، فهذا هو المبلغ النهائي
                    الذي ستدفعه دون إضافة درهم واحد تحت أي مسمى (لا رسوم دروج،
                    ولا رسوم تغليف إضافية).
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-4 flex flex-col justify-between hover:border-primary/50 transition-colors">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    ٣
                  </div>
                  <h3 className="text-xl font-bold">
                    3. أسطول شاحنات مغلقة معتمدة من هيئة الطرق والمواصلات (RTA)
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    تصل درجات الحرارة في الصيف داخل الإمارات إلى أكثر من 45 درجة
                    مئوية، فضلاً عن العواصف الرملية المتكررة. نقل الأثاث
                    والأجهزة الإلكترونية في شاحنات مفتوحة يعرضها للتلف والكسر
                    وتراكم الغبار. لذلك نمتلك أسطولاً كبيراً من الشاحنات المغلقة
                    بالكامل بطاقة 3 طن و4 طن المعتمدة رسمياً، لضمان وصول عفشك
                    ناصعاً وآمناً.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-4 flex flex-col justify-between hover:border-primary/50 transition-colors md:col-span-2 lg:col-span-1">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    ٤
                  </div>
                  <h3 className="text-xl font-bold">
                    4. ضمان وحماية شاملة 100% والدفع بعد الإتمام
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    ثقتنا في جودة عملنا تتيح لك راحة البال الكاملة؛ فأنت غير
                    مطالب بدفع تكلفة الخدمة إلا بعد انتهاء عملية النقل والتركيب
                    بالكامل، ومعاينتك الفردية لكافة قطع الأثاث والتأكد من
                    سلامتها ورضاك التام 100%.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-4 flex flex-col justify-between hover:border-primary/50 transition-colors md:col-span-2 lg:col-span-2">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    ٥
                  </div>
                  <h3 className="text-xl font-bold">
                    5. فريق عمل محترف يتحدث العربية والإنجليزية
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    يضم فريقنا نجارين فك وتركيب محترفين، كهربائيين لتفكيك
                    الأجهزة والأضواء والستائر، وعمالاً مدربين على فنون التغليف
                    والترقيم، لضمان التعامل السلس والمعاملة الراقية مع كل قطعة
                    من ممتلكاتك.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Services Section */}
        <section className="py-20 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                خدمات نقل الأثاث الشاملة التي نقدمها في الشارقة
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                نحن لا نكتفي بنقل الأثاث المنزلي فقط، بل تتسع دائرة خدماتنا
                لتغطي كافة الاحتياجات السكنية والتجارية والصناعية:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service 1 */}
              <article className="bg-card text-card-foreground p-6 rounded-xl border border-border flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Truck className="w-6 h-6 stroke-2" />
                  </div>
                  <h3 className="text-xl font-bold">
                    <Link
                      href="/نقل-اثاث-الشقق"
                      className="hover:text-primary transition-colors"
                    >
                      نقل اثاث المنازل والفلل والشقق
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    من الشقق الصغيرة (استوديو أو غرفة وصالة) وحتى الفلل الملكية
                    متعددة الطوابق، نوفر حلول نقل شاملة تتضمن التفكيك، التغليف
                    بالكامل، التحميل الآمن، وإعادة التركيب والترتيب في المنزل
                    الجديد.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    تشمل الخدمات الاستوديو، شقق 1BHK، شقق 2BHK، شقق 3BHK والفلل
                    المستقلة والمزدوجة في جميع مجمعات وأحياء الشارقة.
                  </p>
                </div>
                <div className="pt-6 border-t border-border mt-4">
                  <Button variant={"ghost"} quoteBtn size={"sm"}>
                    احجز الخدمة الآن ←
                  </Button>
                </div>
              </article>

              {/* Service 2 */}
              <article className="bg-card text-card-foreground p-6 rounded-xl border border-border flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 stroke-2" />
                  </div>
                  <h3 className="text-xl font-bold">
                    <Link
                      href="/نقل-اثاث-المكاتب"
                      className="hover:text-primary transition-colors"
                    >
                      نقل المكاتب والشركات والمؤسسات التجارية
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    نحن الخيار المثالي للبنوك، المستشفيات، المدارس، المطاعم،
                    والمكاتب الشريكة. ندرك أهمية الوقت للأنشطة التجارية، لذا
                    نعمل وفق جدول زمني دقيق لضمان عودة عملك للانطلاق دون تعطيل.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    نوفر خدمات تفكيك شبكات المكاتب، الأجهزة الإلكترونية،
                    الطاولات الجماعية، وإعادة التركيب الاحترافي.
                  </p>
                </div>
                <div className="pt-6 border-t border-border mt-4">
                  <Button variant={"ghost"} quoteBtn size={"sm"}>
                    احجز الخدمة الآن ←
                  </Button>
                </div>
              </article>

              {/* Service 3 */}
              <article className="bg-card text-card-foreground p-6 rounded-xl border border-border flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Sparkles className="w-6 h-6 stroke-2" />
                  </div>
                  <h3 className="text-xl font-bold">
                    <Link
                      href="/نقل-عفش-دبي"
                      className="hover:text-primary transition-colors"
                    >
                      نقل قطعة واحدة والأغراض الثقيلة
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    هل تحتاج لنقل أريكة واحدة، أو ثلاجة كبيرة، أو خزينة حديدية
                    ثقيلة، أو معدات خاصة؟ نوفر لك خدمة نقل القطع المنفردة بكل
                    سهولة وسرعة ودون تكاليف باهظة.
                  </p>
                </div>
                <div className="pt-6 border-t border-border mt-4">
                  <Button variant={"ghost"} quoteBtn size={"sm"}>
                    احجز الخدمة الآن ←
                  </Button>
                </div>
              </article>

              {/* Service 4 */}
              <article className="bg-card text-card-foreground p-6 rounded-xl border border-border flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 stroke-2" />
                  </div>
                  <h3 className="text-xl font-bold">
                    <Link
                      href="/خدمات-تغليف-اثاث"
                      className="hover:text-primary transition-colors"
                    >
                      خدمات التغليف والتخزين الذاتي للأثاث
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    إذا كنت تجهز لسفر طويل أو تحتاج لتخزين أثاثك مؤقتاً أثناء
                    تجديد المنزل، نوفر لك خدمات تغليف هيدروليكي ومستودعات تخزين
                    آمنة ومكيفة على مدار 24 ساعة.
                  </p>
                </div>
                <div className="pt-6 border-t border-border mt-4">
                  <Button variant={"ghost"} quoteBtn size={"sm"}>
                    احجز الخدمة الآن ←
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 4. Process Stages Section */}
        <section className="py-20 border-b border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                مراحل عملية نقل العفش لدينا في الشارقة (من المعاينة حتى الترتيب)
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground">
                لنضمن لك تجربة نقل خالية من الأخطاء، نتبع في{" "}
                <strong className="text-foreground font-bold">
                  شركة نقل أثاث الشارقة
                </strong>{" "}
                استراتيجية عمل منظمة تتكون من 5 مراحل رئيسية:
              </p>
            </div>

            {/* Diagram Banner */}
            <div className="bg-primary/10 border border-primary/20 p-4 md:p-6 rounded-2xl mb-12 text-center">
              <p className="text-base md:text-lg font-bold text-primary flex flex-wrap items-center justify-center gap-2 md:gap-4 dir-rtl">
                <span>المعاينة والتسعير</span>
                <span>⬅️</span>
                <span>فك الأثاث والستائر</span>
                <span>⬅️</span>
                <span>التغليف والترقيم</span>
                <span>⬅️</span>
                <span>النقل بالشاحنات المغلقة</span>
                <span>⬅️</span>
                <span>التفريغ والتركيب</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Step 1 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-xs space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-9 h-9 rounded-full flex items-center justify-center text-base shadow-xs">
                  ١
                </span>
                <h3 className="text-lg font-bold pt-2">
                  المعاينة المجانية وعرض السعر الشفاف
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  بعد تواصلك معنا، نقوم بفهم احتياجاتك أو إرسال مندوب للمعاينة،
                  ثم تزويدك بعرض سعر مفصل ومكتوب عبر الواتساب أو البريد
                  الإلكتروني.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-xs space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-9 h-9 rounded-full flex items-center justify-center text-base shadow-xs">
                  ٢
                </span>
                <h3 className="text-lg font-bold pt-2">
                  فك الأثاث والأجهزة بمهارة
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  يبدأ النجارون المتخصصون بفك غرف النوم، الخزائن، المطابخ،
                  والستائر، مع تفكيك التكييفات والأجهزة الإلكترونية بوساطة فنيين
                  ماهرين.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-xs space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-9 h-9 rounded-full flex items-center justify-center text-base shadow-xs">
                  ٣
                </span>
                <h3 className="text-lg font-bold pt-2">
                  التغليف الاحترافي والترقيم
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  نستخدم أجود مواد التغليف لحماية المنقولات، مع ترقيم الكراتين
                  وتصنيفها (غرف النوم، المطبخ، الزجاج) لسهولة الترتيب لاحقاً.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-xs space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-9 h-9 rounded-full flex items-center justify-center text-base shadow-xs">
                  ٤
                </span>
                <h3 className="text-lg font-bold pt-2">التحميل والنقل الآمن</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  يتم رص الأثاث داخل الشاحنات المغلقة بعناية فائقة باستخدام حبال
                  تثبيت وبطانيات حماية لمنع أي احتكاك أثناء الطريق.
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-xs space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-9 h-9 rounded-full flex items-center justify-center text-base shadow-xs">
                  ٥
                </span>
                <h3 className="text-lg font-bold pt-2">
                  التفريغ، التركيب، وإعادة الترتيب
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  فور الوصول للموقع الجديد، نقوم بتفريغ الشاحنة، وإعادة تركيب
                  كافة الغرف والستائر والأثاث في أماكنها المحددة حسب رغبتك.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Areas Covered Section */}
        <section className="py-20 border-b border-border bg-muted/10">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                تغطية شاملة لجميع مناطق وأحياء الشارقة والإمارات
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground">
                نصل إليك أينما كنت في الشارقة، حيث نملك تغطية ميدانية سريعة
                لجميع المناطق والأحياء، ومنها:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Area 1 */}
              <div className="bg-card p-6 rounded-xl border border-border space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <h3 className="text-lg">نقل اثاث الخان والمجاز والنهدة</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  متخصصون في التعامل مع الأبراج السكنية المرتفعة، وتنظيم عمليات
                  النقل عبر المصاعد الكبيرة بحرفية وسرعة.
                </p>
              </div>

              {/* Area 2 */}
              <div className="bg-card p-6 rounded-xl border border-border space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <h3 className="text-lg">
                    نقل اثاث التعاون والقاسمية وأبو شغارة
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  خدمات نقل سريعة وميسرة للمنازل والمحلات التجارية في قلب
                  الشارقة.
                </p>
              </div>

              {/* Area 3 */}
              <div className="bg-card p-6 rounded-xl border border-border space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <h3 className="text-lg">
                    نقل اثاث مويلح والزاهية والرحمانية والسيوح
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  حلول مخصصة لنقل الفلل والمجمعات السكنية الحديثة بأعلى درجات
                  العناية.
                </p>
              </div>

              {/* Area 4 */}
              <div className="bg-card p-6 rounded-xl border border-border space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <h3 className="text-lg">
                    نقل اثاث الخزامية والرقا والفلج وشارع الكورنيش
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  استجابة سريعة على مدار الساعة.
                </p>
              </div>

              {/* Area 5 */}
              <div className="bg-card p-6 rounded-xl border border-border space-y-3 hover:border-primary/40 transition-colors sm:col-span-2 lg:col-span-2">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <h3 className="text-lg">
                    النقل من الشارقة إلى جميع الإمارات
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  نقل يومي مباشر من الشارقة إلى{" "}
                  <Link
                    href="/نقل-اثاث-دبي"
                    className="text-primary font-semibold hover:underline"
                  >
                    دبي
                  </Link>
                  ، أبوظبي، عجمان، رأس الخيمة، العين، أم القيوين، والفجيرة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Pricing Section with Aspect-4/3 Placeholder Image */}
        <section className="py-20 border-b border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                أسعار شركات نقل الأثاث في الشارقة: جدول التكلفة الشفافة
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                نحن نؤمن بأن العميل يستحق معرفة التكلفة التقريبية بوضوح قبل
                البدء. إليك جدولاً توضيحياً لمتوسط أسعار نقل الأثاث في الشارقة
                بناءً على حجم السكن:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Pricing Table */}
              <div className="lg:col-span-8 overflow-x-auto rounded-xl border border-border shadow-xs bg-card">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-primary text-primary-foreground text-sm font-bold border-b border-border">
                      <th className="p-4">نوع السكن / الخدمة</th>
                      <th className="p-4">
                        السعر التقريبي (بالدرهم الإماراتي)
                      </th>
                      <th className="p-4">التغليف والخدمات المشمولة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-sm text-foreground/90">
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-bold">نقل شقة استوديو</td>
                      <td className="p-4 font-bold text-primary dir-ltr text-right">
                        500 – 750 درهم
                      </td>
                      <td className="p-4">
                        فك + تغليف + نقل بشاحنة مغلقة + تركيب
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-bold">
                        نقل شقة غرفة وصالة (1BHK)
                      </td>
                      <td className="p-4 font-bold text-primary dir-ltr text-right">
                        750 – 1,100 درهم
                      </td>
                      <td className="p-4">
                        فريق نجارين + مواد تغليف عالية الجودة + ضمان
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-bold">
                        نقل شقة غرفتين وصالة (2BHK)
                      </td>
                      <td className="p-4 font-bold text-primary dir-ltr text-right">
                        1,200 – 1,800 درهم
                      </td>
                      <td className="p-4">
                        شاحنة RTA 4 طن + تغليف شامل + فك وتفكيك ستائر
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-bold">
                        نقل فيلا كاملة (3-5 غرف)
                      </td>
                      <td className="p-4 font-bold text-primary dir-ltr text-right">
                        2,200 – 3,800 درهم
                      </td>
                      <td className="p-4">
                        شاحنات متعددة + فريق كامل + تركيب وترتيب
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-bold">نقل مكاتب وشركات</td>
                      <td className="p-4 font-bold text-primary">
                        يتم التحديد بعد المعاينة المجانية
                      </td>
                      <td className="p-4">
                        خطة نقل مرنة دون تعطيل ساعات العمل
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Sidebar Image Card (4:3 Aspect Ratio) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="relative aspect-4/3 bg-muted rounded-xl overflow-hidden shadow-xs border border-border">
                  <Image
                    src="/ar/نقل-اثاث-دبي-شركة.jpg"
                    alt="أسعار شركات نقل الأثاث في الشارقة"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary/5 border border-primary/15 rounded-xl p-5 space-y-3">
                  <h4 className="font-bold text-foreground text-base">
                    ملاحظة هامة حول الأسعار
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    يختلف السعر النهائي بناءً على كمية الأثاث، عدد الطوابق، وهل
                    يوجد مصعد أم دراج، ولكن السعر المتفق عليه في العقد هو السعر
                    النهائي دون أي زيادة!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Packaging Materials Section with Aspect-3/4 Image */}
        <section className="py-20 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Materials info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-black text-foreground">
                    مواد التغليف المستخدمة لحماية عفشك من الحرارة والخدوش
                  </h2>
                  <div className="w-16 h-1 bg-primary rounded-full" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    لحماية ممتلكاتك الثمينة، نستخدم حزمة من أجود مواد التغليف
                    العالمية المتوافقة مع معايير السلامة:
                  </p>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground text-base">
                        الكرتون ثلاثي الطبقات (Triple-Wall Cartons)
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        كراتين مقواة بأحجام مختلفة لتغليف أواني المطبخ والملابس
                        والأدوات الحساسة.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground text-base">
                        البلاستيك الفقاعي السميك (Bubble Wrap)
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        لحماية الشاشات، الزجاج، اللوحات الفنية، والأجهزة
                        الإلكترونية من الصدمات.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground text-base">
                        ورق الستريتش الحراري (Stretch Film)
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        لمنع تسرب الغبار والأتربة والرطوبة إلى الكنبات والأثاث
                        الخشبي.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground text-base">
                        البطانيات القماشية الحامية (Moving Blankets)
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        نضعها بين قطع الأثاث أثناء الرص في الشاحنة لمنع أي
                        احتكاك أو خدش.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Aspect-3/4 Image Placeholder */}
              <div className="lg:col-span-5">
                <div className="relative aspect-3/4 bg-muted rounded-2xl overflow-hidden shadow-md border border-border">
                  <Image
                    src="/ar/تغليف-اثاث-فيلا-جميرا-دبي-نقل-الأثاث-في-الإمارات.jpg"
                    alt="مواد التغليف المستخدمة لحماية عفشك"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Moving Tips & Golden Checklist */}
        <section className="py-20 border-b border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                نصائح ذهبية وقائمة مراجعة قبل الانتقال إلى بيتك الجديد
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                حرصاً منا على تقديم قيمة حقيقية، نضع بين يديك هذه النصائح الهامة
                لتسهيل يوم النقل:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Tip 1 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    ١
                  </div>
                  <h3 className="text-lg font-bold">
                    1. احصل على تصريح النقل (موافقة إدارة البناية)
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  تأكد من إبلاغ حارس البناية أو إدارة المجمع السكني بموعد النقل
                  وحجز مصعد الخدمات مسبقاً.
                </p>
              </div>

              {/* Tip 2 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    ٢
                  </div>
                  <h3 className="text-lg font-bold">
                    2. اعزل المستندات والمجوهرات الشخصية
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  يفضل وضع الأوراق الرسمية، الذهب، والمبالغ المالية في حقيبة
                  خاصة بك ونقلها بسيارتك الشخصية.
                </p>
              </div>

              {/* Tip 3 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    ٣
                  </div>
                  <h3 className="text-lg font-bold">
                    3. تخلص من الأغراض غير الضرورية
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  النقل فرصة مثالية للتبرع بالأغراض الزائدة لتخفيف حجم العفش
                  وتقليل التكلفة.
                </p>
              </div>

              {/* Tip 4 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    ٤
                  </div>
                  <h3 className="text-lg font-bold">
                    4. تنسيق خدمات المياه والكهرباء (SEWA)
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  تأكد من تفعيل خدمات الكهرباء والمياه في مسكنك الجديد قبل موعد
                  وصول الأثاث.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <FAQSection
          title="الأسئلة الشائعة حول خدمات نقل الأثاث في الشارقة (FAQ)"
          subtitle="إجابات كاملة وشفافة عن كل ما يخص نقل اثاث الشارقة"
          faqs={ArSharjahMoversFaqs}
        />

        {/* 10. Final Call to Action Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="bg-linear-to-br from-primary via-primary to-red-800 text-primary-foreground rounded-2xl p-8 md:p-12 lg:p-16 text-center space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
                احجز خدمتك الآن مع شركة نقل الأثاث الأولى في الشارقة!
              </h2>

              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                لا تدع عملية الانتقال تتحول إلى عبء إضافي عليك وعلى أسرتك!
                استمتع برحلة نقل مريحة، آمنة، ومحمية بالكامل مع{" "}
                <strong className="text-white font-bold">
                  شركة نقل أثاث الشارقة
                </strong>
                . تواصل معنا الآن عبر الهاتف أو أرسل لنا رسالة واتساب مباشرة
                للحصول على معاينة مجانية وعرض سعر مفصل وخاص بمتطلباتك. فريقنا
                متواجد لخدمتك على مدار 24 ساعة طوال أيام الأسبوع!
              </p>

              <div className="bg-white/10 border border-white/20 p-5 rounded-xl max-w-2xl mx-auto text-sm md:text-base space-y-2 text-right dir-rtl">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-5 h-5 shrink-0 text-white" />
                  <span>
                    <strong>
                      رقم الهاتف / الواتساب Direct Call & WhatsApp:
                    </strong>{" "}
                    <a
                      href="tel:+971507745691"
                      dir="ltr"
                      className="font-bold underline"
                    >
                      050 7745691
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 shrink-0 text-white" />
                  <span>
                    <strong>المقر الرئيسي:</strong> راس الخور الصناعية 1، الشارع
                    13، مبنى 16، دبي، الإمارات العربية المتحدة.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 shrink-0 text-white" />
                  <span>
                    <strong>ساعات العمل:</strong> 24/7 طوال أيام الأسبوع.
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button
                  whatsappBtn
                  size={"lg"}
                  className="bg-green-500 hover:bg-green-600 shadow-md"
                >
                  <MessageCircleCheck className="w-5 h-5 ml-1" /> واتساب (عرض
                  سعر مجاني)
                </Button>
                <Button
                  callBtn
                  variant={"secondary"}
                  size={"lg"}
                  className="shadow-md"
                >
                  <PhoneCall className="w-5 h-5 ml-1" /> اتصل بنا الآن
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
