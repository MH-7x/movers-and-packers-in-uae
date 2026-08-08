import { FAQSection } from "@/components/FaqsSection";
import { Button } from "@/components/ui/button";
import { ArAjmanMoversFaqs } from "@/lib/FaqsData";
import {
  MessageCircleCheck,
  PhoneCall,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  Sparkles,
  Award,
  FileText,
  DollarSign,
  AlertTriangle,
  CreditCard,
  Building2,
  Wrench,
  HelpCircle,
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
      title: "نقل اثاث عجمان | شركة نقل أثاث احترافية ومرخصة",
      desc: "شركة نقل اثاث عجمان مرخصة منذ 1998. فك وتركيب وتغليف احترافي بشاحنات مغلقة. أسعار شفافة بدون رسوم مخفية. اتصل بنا 0507745691 للزيارة المجانية.",
    },
    image: {
      path: "/ar/نقل-اثاث-دبي-مارينا-نقل-الأثاث-في-الإمارات.jpg",
      alt: "شركة نقل أثاث عجمان — خدمات نقل عفش احترافية ومضمونة 100%",
    },
    path: "/نقل-اثاث-عجمان",
  },
});

const breadcrumb = generateBreadcrumb({
  list: [
    {
      title: "نقل اثاث عجمان",
      url: "/نقل-اثاث-عجمان",
    },
  ],
});

export default function FurnitureMovingAjmanPage() {
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
              title: "نقل اثاث عجمان",
              url: "/نقل-اثاث-عجمان",
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

              <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-[1.2]">
                نقل اثاث عجمان – خدمة نقل احترافية ومرخصة منذ 1998
              </h1>

              <p className=" text-muted-foreground leading-relaxed">
                تبحث عن خدمة{" "}
                <strong className="text-foreground font-bold">
                  نقل اثاث عجمان
                </strong>{" "}
                تجمع بين الأمان والالتزام بالمواعيد؟ نحن في{" "}
                <strong className="text-foreground font-bold">
                  شركة نقل اثاث عجمان
                </strong>{" "}
                (شركة نقل الأثاث في الإمارات) نقدم لك خياراً موثوقاً يعفيك من
                عناء التعامل مع عمال غير مرخصين. شركتنا مسجلة رسمياً منذ عام
                1998، ومقرنا الرئيسي في راس الخور الصناعية 1 بدبي، ونغطي جميع
                أحياء عجمان بأسطول من الشاحنات المغلقة وفريق عمل مدرب يتحدث
                العربية والإنجليزية. خلال أكثر من 25 عاماً في سوق الإمارات،
                أنجزنا آلاف عمليات نقل المنازل والفلل والمكاتب. نضمن لك أسعاراً
                واضحة، وتأميناً شاملاً، والدفع بعد الانتهاء من العمل والتأكد من
                رضاك الكامل. اتصل بنا اليوم على{" "}
                <a
                  href="tel:+971507745691"
                  className="text-primary font-bold hover:underline"
                  dir="ltr"
                >
                  0507745691
                </a>{" "}
                للحصول على معاينة مجانية وعرض سعر مكتوب.
              </p>

              {/* Direct Contact Box */}
              <div className="bg-muted/60 p-5 rounded-2xl border border-border space-y-2 text-sm">
                <h3 className="font-bold text-foreground text-base flex items-center gap-2">
                  <PhoneCall className="w-5 h-5 text-primary" />
                  تواصل معنا مباشرة للحصول على عرض سعر مجاني
                </h3>
                <ul className="space-y-1.5 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">الهاتف المباشر:</strong>{" "}
                    <a
                      href="tel:+971507745691"
                      className="text-primary font-bold dir-ltr inline-block"
                    >
                      0507745691
                    </a>
                  </li>
                  <li>
                    <strong className="text-foreground">
                      محادثات الواتساب:
                    </strong>{" "}
                    <a
                      href="https://wa.me/+971507745691?text=مرحباً،%20أحتاج%20إلى%20معاينة%20عرض%20سعر%20لنقل%20الأثاث%20في%20عجمان"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-semibold hover:underline"
                    >
                      تواصل عبر الواتساب فوراً
                    </a>
                  </li>
                  <li>
                    <strong className="text-foreground">ساعات العمل:</strong>{" "}
                    نخدمكم على مدار 24 ساعة طوال أيام الأسبوع (24/7)
                  </li>
                  <li>
                    <strong className="text-foreground">الضمان:</strong> معاينة
                    مجانية + لا رسوم مخفية + الدفع بعد إتمام الخدمة
                  </li>
                </ul>
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
                  alt="شركة نقل أثاث عجمان — خدمات نقل عفش احترافية ومضمونة 100%"
                  fill
                  className="object-cover"
                  loading="eager"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quotation Form Component */}
        <QuotationSection
          ar
          title={
            <>
              <span className="font-bold md:block">احصل على عرض أسعار</span> من
              نقل اثاث عجمان
            </>
          }
          desc="أخبرنا بما ترغب بنقله، ومن أين، وإلى أين. سنرسل إليك عرض سعر مفصل وواضح عبر واتساب أو البريد الإلكتروني. لا نقدم تقديرات مبهمة، فالمبلغ الذي نحدده هو نفسه الموضح في الفاتورة."
        />

        {/* 2. Why We Differ Section */}
        <section className="py-20 border-b border-border bg-muted/10">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                لماذا نختلف في سوق نقل الأثاث بعجمان؟
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                الانتقال من منزل إلى آخر تجربة تحتاج إلى التخطيط، وأكبر خطأ يقع
                فيه الكثيرون هو الاستعانة بشاحنة عادية مع عمال لا يملكون رخصة
                تجارية أو خبرة حقيقية. إليك الفروق العملية التي تجعل خدماتنا في{" "}
                <strong className="text-foreground font-semibold">
                  نقل اثاث في عجمان
                </strong>{" "}
                اختياراً آمناً لممتلكاتك:
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
                    1. الترخيص القانوني والخبرة الطويلة
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    نحن شركة مسجلة رسمياً وتعمل في دولة الإمارات منذ عام 1998.
                    لدينا ملف موثق على خرائط Google ومقر ثابت يمكنك زيارته، عكس
                    العمال المستقلين الذين ينتهي تواصلك معهم بمجرد مغادرة
                    الشاحنة.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-4 flex flex-col justify-between hover:border-primary/50 transition-colors">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    ٢
                  </div>
                  <h3 className="text-xl font-bold">2. عرض سعر مكتوب ونهائي</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    قبل أن نبدأ بأي خطوة، نرسل لك تفاصيل الأسعار عبر الواتساب أو
                    البريد الإلكتروني. إذا كان العرض 1000 درهم، فهذا هو المبلغ
                    الذي ستدفعه دون أي إضافة طارئة في يوم النقل.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-4 flex flex-col justify-between hover:border-primary/50 transition-colors">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    ٣
                  </div>
                  <h3 className="text-xl font-bold">3. الدفع بعد الانتهاء</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    لا نطلب منك دفعة مقدمة. تفحص أثاثك في المنزل الجديد، وتتأكد
                    من سلامة كافة القطع وتركيبها بالشكل المطلوب، ثم تسدد المبلغ.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-4 flex flex-col justify-between hover:border-primary/50 transition-colors">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    ٤
                  </div>
                  <h3 className="text-xl font-bold">4. شاحنات مغلقة معتمدة</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    نعتمد على شاحنات مغلقة بطاقة 3 طن و4 طن معتمدة من هيئة الطرق
                    والمواصلات. الشاحنة المغلقة تحمي الخشب والأجهزة الكهرومنزلية
                    من حرارة الصيف الشديدة والعواصف الرملية.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-4 flex flex-col justify-between hover:border-primary/50 transition-colors">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    ٥
                  </div>
                  <h3 className="text-xl font-bold">
                    5. تأمين شامل على المنقولات
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    يغطي عملنا تأمين كامل ضد الأضرار أو الخدوش أثناء الفك والنقل
                    والتركيب.
                  </p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-4 flex flex-col justify-between hover:border-primary/50 transition-colors">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                    ٦
                  </div>
                  <h3 className="text-xl font-bold">6. فريق متعدد التخصصات</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    لا يقتصر فريقنا على عمال التحميل، بل يضم نجارين متخصصين لفك
                    وتركيب غرف النوم والأثاث الخشبي، وكهربائيين لفك وشبك
                    الأجهزة، وفنيين لتركيب الستائر وشاشات التلفزيون.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Comprehensive Services Section */}
        <section className="py-20 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                خدمات نقل الأثاث المتكاملة في عجمان
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                مهما كان حجم منقولاتك أو طبيعة مسكنك، نوفر حلولاً مخصصة تناسب
                متطلباتك دون تكاليف زائدة:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      1. نقل الشقق والمنازل في عجمان
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    سواء كنت تنتقل من استوديو صغير أو شقة مكونة من ثلاث غرف
                    وصالة، نتعامل مع الممرات الضيقة وأدوار المباني المرتفعة
                    بمهارة. يحرص فريقنا على حماية جدران البناية والمصاعد من أي
                    احتكاك أثناء نقل الأثاث.
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
                    <Building2 className="w-6 h-6 stroke-2" />
                  </div>
                  <h3 className="text-xl font-bold">
                    <Link
                      href="/نقل-اثاث-الفلل"
                      className="hover:text-primary transition-colors"
                    >
                      2. نقل الفلل في عجمان
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    تتطلب الفلل ترتيباً خاصاً لكثرة قطع الأثاث وتنوعها بين
                    المجالس، والمطابخ الكبيرة، والحدائق الخارجية. نوفر طاقماً
                    كبيراً وشاحنات متعددة لإنجاز نقل الفيلا في يوم واحد، مع
                    تصنيف الصناديق وتوزيعها مباشرة على الغرف المخصصة لها في
                    الفيلا الجديدة.
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
                    <ShieldCheck className="w-6 h-6 stroke-2" />
                  </div>
                  <h3 className="text-xl font-bold">
                    <Link
                      href="/نقل-اثاث-المكاتب"
                      className="hover:text-primary transition-colors"
                    >
                      3. نقل المكاتب والشركات في عجمان
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    نعلم أن توقف العمل لعدة أيام يسبب خسائر مادية للشركات. لذلك
                    نقدم خدمة نقل المكاتب خلال عطلة نهاية الأسبوع أو في الفترات
                    المسائية. نغلف أجهزة الكمبيوتر والشاشات بفقاعات هوائية
                    سميكة، وننقل أثاث المكاتب والأرشيف بأعلى درجات السرية
                    والتنظيم.
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
                    <Wrench className="w-6 h-6 stroke-2" />
                  </div>
                  <h3 className="text-xl font-bold">
                    <Link
                      href="/خدمات-تغليف-اثاث"
                      className="hover:text-primary transition-colors"
                    >
                      4. فك وتركيب وتغليف الأثاث
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    إذا كنت تمتلك أثاثاً من إيكيا (IKEA) أو قطعاً خشبية معقدة،
                    يقوم النجارون بفكها بعناية مع الترقيم. نستخدم مواد تغليف
                    متنوعة تشمل الكرتون المقوى، فقاعات الهواء (Bubble Wrap)،
                    البلاستيك السريتش، وبطانيات الحماية.
                  </p>
                </div>
                <div className="pt-6 border-t border-border mt-4">
                  <Button variant={"ghost"} quoteBtn size={"sm"}>
                    احجز الخدمة الآن ←
                  </Button>
                </div>
              </article>

              {/* Service 5 */}
              <article className="bg-card text-card-foreground p-6 rounded-xl border border-border flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Sparkles className="w-6 h-6 stroke-2" />
                  </div>
                  <h3 className="text-xl font-bold">
                    5. تركيب الستائر وشاشات التلفزيون
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    بعد النقل، لا تحتاج للبحث عن فني منفصل. نثبت الستائر
                    والبراقع على النوافذ، ونعلق الشاشات على الجدران بالقياسات
                    والتسويات الصحيحة.
                  </p>
                </div>
                <div className="pt-6 border-t border-border mt-4">
                  <Button variant={"ghost"} quoteBtn size={"sm"}>
                    احجز الخدمة الآن ←
                  </Button>
                </div>
              </article>

              {/* Service 6 */}
              <article className="bg-card text-card-foreground p-6 rounded-xl border border-border flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 stroke-2" />
                  </div>
                  <h3 className="text-xl font-bold">
                    6. خدمات تخزين الأثاث في عجمان
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    إذا كنت بصدد تجديد منزل مأجور أو مسافر لفترة وتفكر في حفظ
                    أثاثك، نوفر مستودعات آمنة، ومكيفة، ومحمية بنظام مراقبة على
                    مدار الساعة، لتخزين أثاثك لفترات قصيرة أو طويلة بأسعار
                    مناسبة.
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

        {/* 4. 8 Steps Process Section */}
        <section className="py-20 border-b border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                8 خطوات واضحة لنقل أثاثك بدون توتر
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground">
                نتبع خطة عمل منظمة تجعل عملية النقل واضحة وسريعة من لحظة تواصلك
                معنا:
              </p>
            </div>

            {/* Diagram Banner */}
            <div className="bg-primary/10 border border-primary/20 p-4 md:p-6 rounded-2xl mb-12 text-center overflow-x-auto">
              <p className="text-sm md:text-base font-bold text-primary flex flex-wrap items-center justify-center gap-2 md:gap-3 dir-rtl">
                <span>1. المعاينة والتواصل</span>
                <span>➔</span>
                <span>2. عرض السعر المكتوب</span>
                <span>➔</span>
                <span>3. التفكيك الاحترافي</span>
                <span>➔</span>
                <span>4. التغليف والتصنيف</span>
                <span>➔</span>
                <span>5. التحميل المنظم</span>
                <span>➔</span>
                <span>6. النقل بالشاحنة المغلقة</span>
                <span>➔</span>
                <span>7. التفريغ والتركيب</span>
                <span>➔</span>
                <span>8. تسليم الموقع والدفع</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-xs space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-9 h-9 rounded-full flex items-center justify-center text-base shadow-xs">
                  ١
                </span>
                <h3 className="text-lg font-bold pt-2">1. التواصل الأول</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  تتصل بنا على الرقم{" "}
                  <a
                    href="tel:+971507745691"
                    className="text-primary font-bold dir-ltr"
                  >
                    0507745691
                  </a>{" "}
                  أو ترسل تفاصيل نقل أثاثك عبر الواتساب.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-xs space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-9 h-9 rounded-full flex items-center justify-center text-base shadow-xs">
                  ٢
                </span>
                <h3 className="text-lg font-bold pt-2">2. المعاينة والتقييم</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  يقدر مندوبنا حجم الأثاث وعدد الشاحنات ومواد التغليف المطلوبة،
                  إما عبر زيارة ميدانية مجانية أو من خلال صور وفيديوهات ترسلها
                  لنا.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-xs space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-9 h-9 rounded-full flex items-center justify-center text-base shadow-xs">
                  ٣
                </span>
                <h3 className="text-lg font-bold pt-2">3. إرسال عرض السعر</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  تستلم عرض سعر مكتوباً يشمل كادر العمال، الشاحنات، ومواد
                  التغليف.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-xs space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-9 h-9 rounded-full flex items-center justify-center text-base shadow-xs">
                  ٤
                </span>
                <h3 className="text-lg font-bold pt-2">4. التفكيك والترقيم</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  يفكك النجارون غرف النوم والخزائن والطاولات، وتوضع البراغي
                  والقطع الصغيرة في أكياس مخصصة وملصقة بالقطع الرئيسية.
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-xs space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-9 h-9 rounded-full flex items-center justify-center text-base shadow-xs">
                  ٥
                </span>
                <h3 className="text-lg font-bold pt-2">5. التغليف والتصنيف</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  نغلف كل قطعة بمادة التغليف المناسبة، ونكتب على كل كرتونة
                  محتوياتها والغرفة التي تنتمي إليها.
                </p>
              </div>

              {/* Step 6 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-xs space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-9 h-9 rounded-full flex items-center justify-center text-base shadow-xs">
                  ٦
                </span>
                <h3 className="text-lg font-bold pt-2">6. التحميل المنظم</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  يرتب العمال الصناديق والأثاث داخل الشاحنة المغلقة بطريقة تمنع
                  احتكاك القطع أو حركتها أثناء السير.
                </p>
              </div>

              {/* Step 7 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-xs space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-9 h-9 rounded-full flex items-center justify-center text-base shadow-xs">
                  ٧
                </span>
                <h3 className="text-lg font-bold pt-2">7. النقل والتفريغ</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  تنتقل الشاحنة إلى المسكن الجديد، وينزل الفريق الأغراض ويبدأ
                  بتوزيعها على الغرف حسب توجيهاتك.
                </p>
              </div>

              {/* Step 8 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-xs space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-9 h-9 rounded-full flex items-center justify-center text-base shadow-xs">
                  ٨
                </span>
                <h3 className="text-lg font-bold pt-2">
                  8. التركيب والمعاينة النهائية
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  نعيد تركيب الأثاث، والستائر، والشاشات. تفحص كل شيء بنفسك، وبعد
                  تأكدك من سلامة المنقولات ورضاك عن العمل يتم السداد.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pricing Section with Aspect-4/3 Placeholder Image */}
        <section className="py-20 border-b border-border bg-muted/10">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                أسعار نقل الأثاث في عجمان
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                نؤمن بالشفافية الكاملة في التسعير. التكلفة تعتمد أساساً على كمية
                الأثاث، والطابق (وجود مصعد من عدمه)، والمسافة بين السكنين، وحاجة
                الأغراض إلى فك وتغليف خاص. جدول تقريبي لتكاليف{" "}
                <strong className="text-foreground font-bold">
                  نقل اثاث في عجمان
                </strong>
                :
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Pricing Table */}
              <div className="lg:col-span-8 overflow-x-auto rounded-xl border border-border shadow-xs bg-card">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-primary text-primary-foreground text-sm font-bold border-b border-border">
                      <th className="p-4">نوع السكن / الخدمة</th>
                      <th className="p-4">السعر التقريبي (درهم إماراتي)</th>
                      <th className="p-4">الخدمات المشمولة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-sm text-foreground/90">
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-bold">استوديو</td>
                      <td className="p-4 font-bold text-primary dir-ltr text-right">
                        400 – 600 درهم
                      </td>
                      <td className="p-4">
                        شاحنة واحدة + فك وتغليف ونقل وتركيب
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-bold">شقة غرفة وصالة</td>
                      <td className="p-4 font-bold text-primary dir-ltr text-right">
                        700 – 1,000 درهم
                      </td>
                      <td className="p-4">
                        فريق عمل + شاحنة مغلقة + مواد تغليف كاملاً
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-bold">شقة غرفتين وصالة</td>
                      <td className="p-4 font-bold text-primary dir-ltr text-right">
                        1,100 – 1,600 درهم
                      </td>
                      <td className="p-4">
                        نجارون وفريق تحميل + مواد تغليف متكاملة
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-bold">شقة 3 غرف وصالة</td>
                      <td className="p-4 font-bold text-primary dir-ltr text-right">
                        1,700 – 2,200 درهم
                      </td>
                      <td className="p-4">شاحنتان/شاحنة كبيرة + كادر متكامل</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-bold">فيلا (3-5 غرف)</td>
                      <td className="p-4 font-bold text-primary dir-ltr text-right">
                        2,400 – 3,500 درهم
                      </td>
                      <td className="p-4">
                        طاقم كامل + شاحنات متعددة + تركيب شامل
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-bold">نقل مكتب صغير</td>
                      <td className="p-4 font-bold text-primary dir-ltr text-right">
                        800 – 1,400 درهم
                      </td>
                      <td className="p-4">تغليف أجهزة الكترونية وأثاث مكتبي</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Sidebar Image Card (4:3 Aspect Ratio Placeholder) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="relative aspect-4/3 bg-muted rounded-xl overflow-hidden shadow-xs border border-border">
                  <Image
                    src="/ar/نقل-اثاث-دبي-شركة.jpg"
                    alt="أسعار نقل الأثاث في عجمان"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary/5 border border-primary/15 rounded-xl p-5 space-y-3">
                  <h4 className="font-bold text-foreground text-base">
                    ملاحظة هامة حول الأسعار
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    الأسعار الموضحة أعلاه هي تقديرات مبدئية لتسهيل التخطيط لديك.
                    التكلفة النهائية تتحدد بدقة بعد المعاينة المجانية، وتظل
                    ثابتة دون أي زيادات طارئة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Areas Covered in Ajman */}
        <section className="py-20 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                المناطق والأحياء التي نغطيها في عجمان
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground">
                يمتلك سائقونا معرفة دقيقة بشوارع عجمان ومداخل بناياتها وفللها،
                مما يختصر وقت النقل وتفادي التأخير. نصل إليك في كافة أحياء
                ومناطق الإمارة:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Area 1 */}
              <div className="bg-card p-6 rounded-xl border border-border space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <h3 className="text-lg">نقل اثاث النعيمية (1، 2، 3)</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  منطقة ذات كثافة سكنية عالية بأبراجها المرتفعة، ونحن معتادون
                  على التنسيق مع إدارات بناياتها واستخدام مصاعد الخدمة بمرونة.
                </p>
              </div>

              {/* Area 2 */}
              <div className="bg-card p-6 rounded-xl border border-border space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <h3 className="text-lg">نقل اثاث الراشدية (1، 2، 3)</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  نخدم سكان الشقق والفلل بالقرب من حدائق الراشدية والمباني
                  التجاري.
                </p>
              </div>

              {/* Area 3 */}
              <div className="bg-card p-6 rounded-xl border border-border space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <h3 className="text-lg">نقل اثاث المويهات (1، 2، 3)</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  نركز هنا على نقل الفلل والمنازل المستقلة بكوادر كبيرة وسيارات
                  مغلقة.
                </p>
              </div>

              {/* Area 4 */}
              <div className="bg-card p-6 rounded-xl border border-border space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <h3 className="text-lg">نقل اثاث الجرف (1، 2، 3)</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  نغطي المناطق السكنية والتجارية والمؤسسات بالقرب من المنطقة
                  الصناعية والمستشفى السعودي الألماني.
                </p>
              </div>

              {/* Area 5 */}
              <div className="bg-card p-6 rounded-xl border border-border space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <h3 className="text-lg">نقل اثاث الروضة (1، 2، 3)</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  نقدم خدمات نقل متكاملة للفلل والمجمعات العائلية مع ترتيب
                  الملابس والأواني.
                </p>
              </div>

              {/* Area 6 */}
              <div className="bg-card p-6 rounded-xl border border-border space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <h3 className="text-lg">نقل اثاث الرميلة</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  بالقرب من الكورنيش، ونراعي حركة المرور في أوقات الذروة.
                </p>
              </div>

              {/* Area 7 */}
              <div className="bg-card p-6 rounded-xl border border-border space-y-3 hover:border-primary/40 transition-colors sm:col-span-2 lg:col-span-3">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <h3 className="text-lg">مناطق أخرى في عجمان وضواحيها</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  مشيرف، الحميدية، البطين، الصوان، عجمان وسط المدينة، ومصفوت
                  والمنامة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Inter-Emirates Moving Section */}
        <section className="py-20 border-b border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                نقل الأثاث بين عجمان والإمارات الأخرى
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                إذا كان انتقالك يتجاوز حدود إمارة عجمان، فإن أسطولنا المرخص
                يتكفل بالنقل بين جميع الإمارات بسلاسة:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Route 1 */}
              <div className="bg-card p-6 rounded-xl border border-border space-y-3 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold">
                  1.{" "}
                  <Link
                    href="/نقل-اثاث-الشارقة"
                    className="hover:text-primary transition-colors"
                  >
                    نقل اثاث من عجمان إلى الشارقة
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  نظراً للقرب الجغرافي بين الإمارتين، ننجز عملية النقل بين عجمان
                  والشارقة (مثل مناطق النهدة، النهدة، التعاون، والمويلح) في
                  ساعات قليلة وبأسعار ميسرة.
                </p>
              </div>

              {/* Route 2 */}
              <div className="bg-card p-6 rounded-xl border border-border space-y-3 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold">
                  2.{" "}
                  <Link
                    href="/نقل-اثاث-دبي"
                    className="hover:text-primary transition-colors"
                  >
                    نقل اثاث من عجمان إلى دبي
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  يعتبر هذا المسار من أكثر خطوط النقل التي نغطيها يومياً. ننقل
                  أثاثك من عجمان إلى جميع مناطق دبي (مثل مردف، دبي سيليكون واحة،
                  البرشاء، دبي مارينا، وجبل علي) مع مراعاة أوقات حظر الشاحنات
                  لتجنب أي تأخير.
                </p>
              </div>

              {/* Route 3 */}
              <div className="bg-card p-6 rounded-xl border border-border space-y-3 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold">
                  3. نقل اثاث من عجمان إلى أبوظبي والعين
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  النقل بين الإمارات البعيدة يحتاج لربط الأثاث داخل الشاحنة
                  وتغليفه بطبقات مزدوجة لحمايته من طقس الطريق المسفلت. نغطي
                  أبوظبي، وضواحيها، ومدينة العين بكفاءة.
                </p>
              </div>

              {/* Route 4 */}
              <div className="bg-card p-6 rounded-xl border border-border space-y-3 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold">
                  4. نقل الأثاث إلى رأس الخيمة وأم القيوين والفجيرة
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  نوفر رحلات نقل سريعة ومباشرة إلى كافة مناطق الإمارات الشمالية
                  بشاحنات مغلقة تحافظ على محتوياتك.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Enclosed Trucks & Equipment Section */}
        <section className="py-20 border-b border-border bg-muted/10">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-foreground text-center">
                تجهيزات ومعدات النقل: لماذا الشاحنة المغلقة هي الخيار الصح؟
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                تتميز بيئة الخليج العربي بدرجات حرارة مرتفعة في الصيف قد تتجاوز
                45 درجة مئوية، مع الغبار والرطوبة. نقل خشب غرف النوم أو الشاشات
                والأجهزة الإلكترونية في شاحنة مفتوحة يعرضها للحرارة المباشرة
                وتلف الدوائر الكهربائية أو خدش الدهانات.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                لهذا السبب، نمتلك أسطولاً من الشاحنات المغلقة بالكامل (Box
                Trucks) بطول 10 إلى 14 قدماً. تتميز شاحناتنا بـ:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="bg-card p-5 rounded-xl border border-border space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <h3 className="font-bold text-foreground">أرضية مبطنة</h3>
                  <p className="text-xs text-muted-foreground">
                    تمنع انزلاق الأثاث أثناء الحركة وتوفر الحماية الكافية.
                  </p>
                </div>
                <div className="bg-card p-5 rounded-xl border border-border space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <h3 className="font-bold text-foreground">
                    أحزمة تثبيت جانبية
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    لربط القطع الثقيلة كالثلاجات والغسالات والكنب وإبقائها
                    ثابتة.
                  </p>
                </div>
                <div className="bg-card p-5 rounded-xl border border-border space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <h3 className="font-bold text-foreground">
                    نظافة دورية للمساحة الداخلية
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    لضمان عدم اتساخ السجاد أو المفروشات أثناء النقل.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Packaging Materials Section with Aspect-3/4 Image Placeholder */}
        <section className="py-20 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Packaging Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-black text-foreground">
                    مواد التغليف الاحترافية المستعملة لحماية ممتلكاتك
                  </h2>
                  <div className="w-16 h-1 bg-primary rounded-full" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    نستخدم مواد تغليف عالية الجودة لحماية كل قطعة أثاث حسب نوعها
                    وحساسيتها:
                  </p>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground text-base">
                        الكرتون المقوى
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        بحجمين كبير ومتوسط للكتب والأواني وأغراض المطبخ.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground text-base">
                        الفقاعات الهوائية (Bubble Wrap)
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        للزجاج، والشاشات، والتحف القابلة للكسر.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground text-base">
                        البلاستيك السريتش
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        لحماية الكنب والأثاث الناعم من الأتربة والخدوش.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground text-base">
                        بطانيات الحماية
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        لتغطية الأجهزة والأسطح الخشبية داخل الشاحنة.
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
                    alt="مواد تغليف الأثاث في عجمان"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. 8 Proven Tips Section */}
        <section className="py-20 border-b border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                8 نصائح مجربة لتسهيل عملية نقل منزلك
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                بناءً على خبرتنا الممتدة لسنوات في نقل الأثاث، هذه بعض الخطوات
                البسيطة التي تختصر عليك الكثير من الجهد والوقت:
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
                    1. احجز مصعد الخدمة مسبقاً
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  تواصل مع حارس البناية أو إدارة العقار لحجز مصعد الخدمة وتأمين
                  موقف للشاحنة في موعد النقل.
                </p>
              </div>

              {/* Tip 2 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    ٢
                  </div>
                  <h3 className="text-lg font-bold">
                    2. فرز الأغراض غير الضرورية
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  التخلص من الأثاث التالف أو الملابس المستغنى عنها يقلل من حجم
                  الشاحنة ويوفر في قيمة الخدمة.
                </p>
              </div>

              {/* Tip 3 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    ٣
                  </div>
                  <h3 className="text-lg font-bold">
                    3. نقل الوثائق والمجوهرات بنفسك
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  الأوراق الرسمية، جوازات السفر، الذهب، والمبالغ المالية احفظها
                  في حقيبة يدك الخاصة.
                </p>
              </div>

              {/* Tip 4 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    ٤
                  </div>
                  <h3 className="text-lg font-bold">
                    4. فصل الأجهزة الكهربائية بليلة
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  افصل الثلاجة والمجمد قبل النقل بـ 12 ساعة لتذويب الثلج
                  وتجفيفها، كي لا تتسرب المياه داخل الشاحنة.
                </p>
              </div>

              {/* Tip 5 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    ٥
                  </div>
                  <h3 className="text-lg font-bold">
                    5. تجميع المستلزمات اليومية في حقيبة منفصلة
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  ضع ملابس اليوم الأول، وأدوات النظافة الشخصية، وشواحن الهواتف
                  في شنطة واحدة لتجدها بسهولة فور وصولك.
                </p>
              </div>

              {/* Tip 6 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    ٦
                  </div>
                  <h3 className="text-lg font-bold">6. تسمية الكراتين</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  اكتب اسم الغرفة على جانب الكرتونة (مثلاً: مطبخ / زجاج، غرفة
                  النوم الرئيسية).
                </p>
              </div>

              {/* Tip 7 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    ٧
                  </div>
                  <h3 className="text-lg font-bold">
                    7. التقاط صور لتوصيلات الأجهزة
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  صور خلفية التلفزيون وأجهزة الرسيفر والأنظمة الصوتية قبل فك
                  الأسلاك لسهولة إعادة توصيلها.
                </p>
              </div>

              {/* Tip 8 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-3 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    ٨
                  </div>
                  <h3 className="text-lg font-bold">
                    8. اطلب عرض سعر مكتوب دائماً
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  لا تعتمد على الاتفاقات الشفهية، واحرص على اختيار شركة لها سجل
                  تجاري رسمي.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Comparison Section (Company vs Freelancers) */}
        <section className="py-20 border-b border-border bg-muted/10">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                لماذا تجنب العمال المستقلين الشائعيين برقم هاتف فقط؟
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                ينخدع البعض بأسعار منخفضة يقدمها عمال غير مرخصين يعلنون عبر
                الملصقات في الشوارع أو الحسابات الوهمية. إليك مقارنة واقعية قبل
                اتخاذ قرارك:
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border shadow-xs bg-card">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground text-sm font-bold border-b border-border">
                    <th className="p-4">وجه المقارنة</th>
                    <th className="p-4">
                      شركة نقل الأثاث في الإمارات (شركتنا)
                    </th>
                    <th className="p-4">العمال المستقلون والشاحنات السائبة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm text-foreground/90">
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-bold">الرخصة والشرعية</td>
                    <td className="p-4 font-semibold text-green-700">
                      مرخصة رسمياً منذ 1998 ولديها سجل تجاري
                    </td>
                    <td className="p-4 text-red-600">
                      بدون رخصة تجارية أو غطاء قانوني
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-bold">الضمان والتأمين</td>
                    <td className="p-4 font-semibold text-green-700">
                      تأمين 100% ودفع السعر بعد معاينة رضاك
                    </td>
                    <td className="p-4 text-red-600">
                      لا يوجد أي ضمان في حال كسر الأثاث أو ضياعه
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-bold">التسعير</td>
                    <td className="p-4 font-semibold text-green-700">
                      عرض سعر مكتوب وشفاف بدون زيادات
                    </td>
                    <td className="p-4 text-red-600">
                      تغيير السعر والمطالبة بمبالغ إضافية يوم النقل
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-bold">نوع الشاحنة</td>
                    <td className="p-4 font-semibold text-green-700">
                      شاحنات مغلقة مخصصة ومحمية من الحرارة
                    </td>
                    <td className="p-4 text-red-600">
                      شاحنات مفتوحة تعرض أثاثك للشمس والأتربة
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-bold">فريق العمل</td>
                    <td className="p-4 font-semibold text-green-700">
                      نجارون وفنيون مدربون بزياء مخصصة
                    </td>
                    <td className="p-4 text-red-600">
                      عمال عشوائيون يفتقرون لخبرة فك الأثاث المعقد
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 12. Payment Methods Section */}
        <section className="py-20 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                طرق الدفع المتاحة
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                نحرص على توفير خيارات سداد مريحة دون أي تعقيد. لا نطلب دفعات قبل
                بدء الخدمة، ويمكنك السداد فور انتهاء النقل والتركيب بالطرق
                التالية:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Payment 1 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-4 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <DollarSign className="w-6 h-6 stroke-2" />
                </div>
                <h3 className="text-xl font-bold">الدفع نقداً (Cash)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  بعد معاينة الأثاث في المنزل الجديد والتأكد من سلامة كافة
                  الأغراض.
                </p>
              </div>

              {/* Payment 2 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-4 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <CreditCard className="w-6 h-6 stroke-2" />
                </div>
                <h3 className="text-xl font-bold">
                  التحويل البنكي المباشر (Bank Transfer)
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  إلى حساب الشركة الرسمي بكل سهولة وأمان.
                </p>
              </div>

              {/* Payment 3 */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-xs space-y-4 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <FileText className="w-6 h-6 stroke-2" />
                </div>
                <h3 className="text-xl font-bold">الشيكات المصرفية (Cheque)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  للشركات والمؤسسات التجارية حسب الاتفاق المسبق.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 13. FAQ Section */}
        <FAQSection
          title="الأسئلة الشائعة حول نقل الأثاث في عجمان (PAA)"
          subtitle="إجابات كاملة وشفافة عن كل ما يخص نقل اثاث عجمان"
          faqs={ArAjmanMoversFaqs}
        />

        {/* 14. Final Call to Action Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="bg-linear-to-br from-primary via-primary to-red-800 text-primary-foreground rounded-2xl p-8 md:p-12 lg:p-16 text-center space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
                📞 احجز موعد نقل أثاثك اليوم في عجمان
              </h2>

              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                اتصل بنا الآن وسيتولى فريقنا ترتيب كافة التفاصيل وإرسال عرض سعر
                شامل في أقل من 10 دقائق:
              </p>

              <div className="bg-white/10 border border-white/20 p-5 rounded-xl max-w-2xl mx-auto text-sm md:text-base space-y-2.5 text-right dir-rtl">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-5 h-5 shrink-0 text-white" />
                  <span>
                    <strong>رقم الهاتف Direct Call:</strong>{" "}
                    <a
                      href="tel:+971507745691"
                      dir="ltr"
                      className="font-bold underline"
                    >
                      0507745691
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircleCheck className="w-5 h-5 shrink-0 text-white" />
                  <span>
                    <strong>المحادثات المباشرة:</strong>{" "}
                    <a
                      href="https://wa.me/+971507745691?text=مرحباً،%20أرغب%20في%20طلب%20عرض%20سعر%20لنقل%20الأثاث%20في%20عجمان"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline"
                    >
                      تواصل عبر الواتساب
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 shrink-0 text-white" />
                  <span>
                    <strong>البريد الإلكتروني:</strong>{" "}
                    <a
                      href="mailto:movers.and.packers.uae91@gmail.com"
                      className="underline"
                    >
                      movers.and.packers.uae91@gmail.com
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 shrink-0 text-white" />
                  <span>
                    <strong>المقر الرئيسي:</strong> الشارع 13، مبنى 16، راس
                    الخور الصناعية 1، دبي، الإمارات العربية المتحدة.
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
