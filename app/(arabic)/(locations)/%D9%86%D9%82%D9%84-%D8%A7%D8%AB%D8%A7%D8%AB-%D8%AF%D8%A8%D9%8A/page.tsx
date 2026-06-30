import { FAQSection } from "@/components/FaqsSection";
import { Button } from "@/components/ui/button";
import { ArDubaiMoversFaqs } from "@/lib/FaqsData";
import { MessageCircleCheck, PhoneCall } from "lucide-react";

import heroImage from "@/public/ar/نقل-اثاث-دبي-مارينا-نقل-الأثاث-في-الإمارات.jpg";
import Image from "next/image";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Link from "next/link";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import { Breadcrumb } from "@/components/Breadcrumb";


export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "نقل اثاث دبي | شركة مرخصة منذ 1998 – نقل الأثاث في الإمارات",
      desc: "تبحث عن شركة نقل اثاث في دبي؟ نقل الأثاث في الإمارات تأسست 1998 — شاحنات بوكس مغلقة معتمدة، لا رسوم خفية، الدفع بعد رضاك الكامل. اتصل الآن للحصول على عرض مجاني.",
    },
    image: {
      path: "/ar/نقل-اثاث-دبي-مارينا-نقل-الأثاث-في-الإمارات.jpg",
      alt: "نقل اثاث دبي — شركة مرخصة وموثوقة منذ ١٩٩٨",
    },
    path: "/نقل-اثاث-دبي",
  },
});
const breadcrumb = generateBreadcrumb({
  list: [
    {
      title: "نقل اثاث دبي",
      url: "/نقل-اثاث-دبي",
    },
  ],
});

export default function FurnitureMovingDubaiPage() {
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
      title: "نقل اثاث دبي",
      url: "/نقل-اثاث-دبي",
    },
  ]} />
        {/* 2. Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden border-b border-border ">
          <div className="max-w-7xl mx-auto md:px-10 px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                مرخصة وموثوقة منذ ١٩٩٨
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.2]">
                نقل اثاث دبي — شركة مرخصة وموثوقة منذ ١٩٩٨
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                معظم من يبحثون عن شركة{" "}
                <strong className="text-foreground font-semibold">
                  نقل اثاث دبي
                </strong>{" "}
                يواجهون نفس المشكلة: عامل مستقل بلا ترخيص، سعر منخفض يبدو جيداً،
                ثم يكتشفون يوم النقل أن أثاثاً مخدوشاً أو مفقوداً.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                نقل الأثاث في الإمارات مسجلة في دبي منذ عام ١٩٩٨ — سبعة وعشرون
                سنة ننفذ{" "}
                <strong className="text-foreground font-semibold">
                  <Link href="/نقل-اثاث-دبي"> نقل اثاث في دبي</Link>
                </strong>{" "}
                وفي جميع إمارات الدولة. شاحناتنا بوكس مغلقة بالكامل، معتمدة من
                هيئة الطرق والمواصلات. الأسعار تصلك على واتساب واضحة وبدون
                إضافات. والدفع يكون بعد انتهاء العمل فقط — بعد ما تتأكد أن كل
                شيء في مكانه.
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
                  className="bg-green-500 hover:bg-green-600"
                >
                  {" "}
                  <MessageCircleCheck /> واتساب (عرض سعر مجاني){" "}
                </Button>
                <Button callBtn size={"lg"}>
                  <PhoneCall /> اتصل بنا الآن{" "}
                </Button>
              </div>
            </div>

            {/* Hero Decorative / Placeholder Image (16:9 Aspect Ratio) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square bg-muted rounded-3xl  overflow-hidden ">
                <Image
                  src={heroImage}
                  alt="نقل اثاث دبي — شركة مرخصة وموثوقة منذ ١٩٩٨"
                  fill
                  className="object-cover"
                  loading="eager"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Services Section */}
        <section className="py-20 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                خدمات نقل الاثاث في دبي
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground font-semibold">
                  نقل اثاث في دبي
                </strong>{" "}
                ليس عملية واحدة تناسب الجميع. شقة في برج شاهق تختلف عن فيلا
                بحديقة، ومكتب في Business Bay له متطلبات لوجستية مختلفة عن شقة
                عائلية في ديرة أو الكرامة. فريقنا يتعامل مع كل نوع بطريقة مختلفة
                وبأدوات مناسبة.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
              {/* Service 1: Apartments */}
              <article className="bg-card text-card-foreground p-6 rounded-xl  flex flex-col justify-between ">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <svg
                      className="w-6 h-6 stroke-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold">
                    {" "}
                    <Link href="/نقل-اثاث-الشقق">
                      نقل اثاث الشقق في دبي
                    </Link>{" "}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    سواء كانت استوديو أو شقة بثلاث غرف، النهج عندنا متطابق: نصل
                    في الوقت المحدد ونبدأ مباشرة — تفكيك الأثاث، تغليف كل قطعة،
                    تحميله في شاحنة مغلقة، ثم إعادة التركيب والترتيب في المكان
                    الجديد.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    كثير من شقق دبي في مبانٍ شاهقة وتحتاج التنسيق مع إدارة
                    المبنى قبل يوم النقل — حجز مصعد الشحن وحماية أرضيات الممرات
                    والمداخل. هذا الإجراء إلزامي في معظم الأبراج وكثير من
                    العملاء لا يعرفون ذلك مسبقاً فيصطدمون به يوم النقل. نتولى
                    هذا التنسيق بدلاً عنك حتى لا تواجه أي توقف يوم العمل.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    الفريق يتحدث العربية والإنجليزية، فالتواصل مع إدارة المبنى
                    لا يشكل مشكلة بصرف النظر عن جنسية الموظفين.
                  </p>
                </div>
                <div className="pt-6 border-t border-border mt-4">
                  <Button variant={"ghost"} quoteBtn size={"sm"}>
                    {" "}
                    احجز الخدمة الآن ←
                  </Button>
                </div>
              </article>

              {/* Service 2: Villas */}
              <article className="bg-card text-card-foreground p-6 rounded-xl  flex flex-col justify-between ">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <svg
                      className="w-6 h-6 stroke-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold">
                    <Link href="/نقل-اثاث-الفلل">نقل اثاث الفلل في دبي</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    الفلل في مردف وجميرا وأراضي الشيخ محمد بن راشد والمناطق
                    المحيطة تحتاج تنسيقاً أعمق. القطع أكبر وأثقل، وبعض المجمعات
                    تشترط تصريح دخول للشاحنات ومواعيد محددة للشحن.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    نتعامل مع تفكيك الأسرة الكبيرة والخزائن الضخمة وطاولات
                    الطعام الطويلة والكنب الثقيل. للقطع التي تحتاج نجاراً، عندنا
                    نجارون ضمن الفريق. وعند الحاجة، ننسق تصريح الدخول مع مكتب
                    المجمع مسبقاً حتى لا نضيع وقتك أو وقت الفريق يوم النقل.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    إذا كانت الفيلا تضم خزنة ثقيلة أو معدات خاصة، هذا ضمن
                    خدماتنا أيضاً. نملك المعدات المناسبة لتحريك الأوزان الثقيلة
                    بدون خدش أو كسر.
                  </p>
                </div>
                <div className="pt-6 border-t border-border mt-4">
                  <Button variant={"ghost"} quoteBtn size={"sm"}>
                    {" "}
                    احجز الخدمة الآن ←
                  </Button>
                </div>
              </article>

              {/* Service 3: Offices */}
              <article className="bg-card text-card-foreground p-6 rounded-xl  flex flex-col justify-between ">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <svg
                      className="w-6 h-6 stroke-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">
                    {" "}
                    <Link href="/نقل-اثاث-المكاتب">
                      نقل اثاث المكاتب والشركات
                    </Link>{" "}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground font-semibold">
                      <Link href="/نقل-اثاث-المكاتب">نقل اثاث تجاري دبي</Link>
                    </strong>{" "}
                    له متطلب رئيسي: السرعة. كل يوم توقف عن العمل له تكلفة
                    مباشرة، لهذا نعمل في أوقات مرنة — مساءً أو في عطلة نهاية
                    الأسبوع — لتقليل التأثير على نشاطك قدر الإمكان.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    الفريق يضم كهربائيين متخصصين يفصلون الأجهزة بطريقة صحيحة
                    ومنظمة: أجهزة كمبيوتر، شاشات، كاميرات مراقبة، طابعات، أجهزة
                    الشبكة. كل شيء يُفكك ويُغلف بشكل منفصل ومرقَّم حتى يسهل
                    إعادة التركيب في الموقع الجديد بدون ضياع أي جزء.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    نغطي مكاتب Business Bay وDIFC وديرة والقوز الصناعية وأكاديمي
                    سيتي وأي موقع مكتبي داخل دبي. للمستودعات والمخازن الكبيرة،
                    نرسل مشرفاً للمعاينة أولاً وتحديد احتياجات النقل بدقة.
                  </p>
                </div>
                <div className="pt-6 border-t border-border mt-4">
                  <Button variant={"ghost"} quoteBtn size={"sm"}>
                    {" "}
                    احجز الخدمة الآن ←
                  </Button>
                </div>
              </article>

              {/* Service 4: Single Item */}
              <article className="bg-card text-card-foreground p-6 rounded-xl  flex flex-col justify-between ">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <svg
                      className="w-6 h-6 stroke-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">
                    <Link href="/نقل-عفش-دبي">نقل قطعة واحدة أو أثاث ثقيل</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    تريد نقل كنبة واحدة؟ خزنة ثقيلة؟ ثلاجة أو غسالة فقط؟ بيانو؟
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    هذا ضمن خدماتنا. لا حاجة لشاحنة كاملة ولا فريق كبير. صف ما
                    تحتاج وسنرتب لك الخيار المناسب من حيث العمال وحجم المركبة.
                    وفي أغلب الأوقات،{" "}
                    <strong className="text-foreground font-semibold">
                      خدمة نقل في نفس اليوم
                    </strong>{" "}
                    متاحة إذا كانت الحاجة عاجلة.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <Link
                      href="/نقل-عفش-دبي"
                      className="font-semibold text-foreground"
                    >
                      نقل عفش دبي
                    </Link>{" "}
                    خدمة يطلبها الآلاف كل شهر، لكن قليلاً من الشركات تقدمها
                    بالشفافية والمصداقية التي يستحقها العميل. نحن شركة نقل اثاث
                    في الإمارات، مرخصون رسمياً ومقرنا في رأس الخور الصناعية،
                    دبي.
                  </p>
                </div>
                <div className="pt-6 border-t border-border mt-4">
                  <Button variant={"ghost"} quoteBtn size={"sm"}>
                    {" "}
                    احجز الخدمة الآن ←
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 4. Why Us / Verification Section */}
        <section className="py-20 border-b border-border">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                افضل شركات نقل الاثاث في دبي — ما الذي يمكن التحقق منه فعلاً
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground">
                كثير من{" "}
                <strong className="text-foreground font-semibold">
                  شركات نقل الاثاث في دبي
                </strong>{" "}
                تقدم وعوداً متشابهة: &quot;محترفون، موثوقون، أسعار
                تنافسية.&quot; هذه النقاط الأربع لها دليل ملموس، مش مجرد كلام.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Feature 1 */}
              <div className="flex gap-4 p-6 bg-muted/30 rounded-xl border border-border/80 hover:bg-muted/50 transition-colors">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  ١
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    ٢٧ سنة في سوق الإمارات — منذ ١٩٩٨
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    <strong className="text-foreground font-semibold">
                      شركة نقل اثاث دبي
                    </strong>{" "}
                    نقل الأثاث في الإمارات مسجلة قانونياً في الإمارات منذ ١٩٩٨.
                    معظم المنافسين ومعظم العمال المستقلين ظهروا بعد عام ٢٠١٠.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    سبعة وعشرون سنة تعني آلاف عمليات النقل المنجزة في دبي وفي
                    باقي الإمارات — شقق وفلل ومكاتب ومستودعات. وتعني أن الشركة
                    ليست جديدة تتعلم على حساب عملائها ولا تجرب على أثاثك.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    يمكنك التحقق بنفسك. ملف Google Business للشركة موثق على
                    خرائط جوجل مع العنوان الفعلي في راس الخور الصناعية ١
                    والتقييمات الحقيقية من عملاء سابقين.{" "}
                    <a
                      href="https://www.google.com/maps/place/?q=place_id:ChIJ8UeWa_JnXz4RG24rN_JJolE"
                      className="text-primary hover:underline underline-offset-4 inline-flex items-center gap-1"
                    >
                      راجع ملفنا على خرائط جوجل ←
                    </a>
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 p-6 bg-muted/30 rounded-xl border border-border/80 hover:bg-muted/50 transition-colors">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  ٢
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    شاحنات بوكس مغلقة بالكامل — معتمدة من هيئة الطرق والمواصلات
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    كل شاحناتنا من نوع Box Truck مغلقة بالكامل، مسجلة ومعتمدة من
                    هيئة الطرق والمواصلات (RTA). هذا ليس مجرد تفصيل تقني — هو
                    فرق ملموس في سلامة أثاثك.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    في دبي، درجات الحرارة في الصيف تتجاوز ٤٥ درجة مئوية.
                    والعواصف الرملية تأتي بدون إنذار مسبق. الشاحنة المكشوفة في
                    هذه الظروف تُعرض الأثاث الخشبي للتشقق والأجهزة الإلكترونية
                    للتلف الحراري، وكلما طالت مدة النقل زاد الضرر المحتمل.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    الشاحنة المفتوحة متاحة للنقل البسيط والسريع إذا كانت الكميات
                    صغيرة والمسافة قصيرة. لكن حين يعرف العملاء الفرق، يختارون
                    المغلقة في الغالب — وهذا قرار صحيح.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 p-6 bg-muted/30 rounded-xl border border-border/80 hover:bg-muted/50 transition-colors">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  ٣
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    الدفع بعد انتهاء العمل ورضاك التام
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    لا نطلب دفعة مقدمة. تدفع بعد ما ينتهي الفريق من عمله وتتأكد
                    أن كل شيء في مكانه بدون نقص أو ضرر.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    هذه ليست ميزة استثنائية عندنا — هي طريقة عملنا الأصلية.
                    الشركة التي تأخذ المال مسبقاً ثم تختفي أو تتهاون في العمل لن
                    تقدم لك هذا الخيار أصلاً.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    نقبل:{" "}
                    <strong className="text-foreground font-semibold">
                      نقد، تحويل بنكي، شيك مصرفي
                    </strong>
                    . وكل هذا نوضحه في بداية التعامل قبل يوم النقل.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4 p-6 bg-muted/30 rounded-xl border border-border/80 hover:bg-muted/50 transition-colors">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  ٤
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    عرض السعر الذي تراه هو ما تدفعه — بلا رسوم خفية
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    ترسل لنا تفاصيل النقل، نرسل لك عرض السعر على واتساب أو
                    الإيميل. هذا الرقم هو المبلغ النهائي. لا يُضاف شيء يوم النقل
                    بسبب &quot;الدرج ضيق&quot; أو &quot;الطابق أعلى مما
                    ذكرت&quot; أو &quot;القطعة أثقل من المتوقع.&quot;
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    <strong className="text-foreground font-semibold">
                      اسعار نقل اثاث في دبي
                    </strong>{" "}
                    عندنا محددة ومكتوبة. وإذا تغير أي شيء في تفاصيل النقل بعد
                    إرسال العرض، نُخبرك مسبقاً ونحدث العرض — لا مفاجآت.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    للحصول على عرض سعر مجاني، تواصل معنا اليوم.{" "}
                    <Link
                      href="/get-quote"
                      className="text-primary hover:underline underline-offset-4 inline-flex items-center gap-1"
                    >
                      احصل على عرض سعر ←
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pricing Section with Placeholder Image */}
        <section className="py-20 border-b border-border bg-muted/10">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                تكلفة نقل الاثاث في دبي — جدول الأسعار التقريبية
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground font-semibold">
                  تكلفة نقل اثاث دبي
                </strong>{" "}
                تتغير حسب حجم الوحدة، الطابق، المسافة بين الموقع الحالي والجديد،
                وما إذا طلبت التغليف الكامل. الجدول أدناه يعطيك أرقاماً تقريبية
                تساعدك على تخطيط ميزانيتك.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Table */}
              <div className="lg:col-span-8 overflow-x-auto rounded-xl border border-border shadow-sm bg-card">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-primary text-primary-foreground text-sm font-bold border-b border-border">
                      <th className="p-4">نوع الوحدة</th>
                      <th className="p-4">عدد العمال</th>
                      <th className="p-4">عدد الشاحنات</th>
                      <th className="p-4">السعر التقريبي (درهم)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-sm text-foreground/90">
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-semibold">شقة استوديو</td>
                      <td className="p-4">٣–٤</td>
                      <td className="p-4">١</td>
                      <td className="p-4 font-bold text-primary">٩٠٠–١١٠٠</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-semibold">شقة غرفة وصالة</td>
                      <td className="p-4">٤–٥</td>
                      <td className="p-4">١</td>
                      <td className="p-4 font-bold text-primary">١١٠٠–١٤٠٠</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-semibold">شقة غرفتين وصالة</td>
                      <td className="p-4">٥–٦</td>
                      <td className="p-4">٢</td>
                      <td className="p-4 font-bold text-primary">١٤٠٠–١٧٠٠</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-semibold">شقة ٣ غرف وصالة</td>
                      <td className="p-4">٦–٨</td>
                      <td className="p-4">٢</td>
                      <td className="p-4 font-bold text-primary">١٨٠٠–٢٢٠٠</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-semibold">فيلا ٣ غرف نوم</td>
                      <td className="p-4">٦–٨</td>
                      <td className="p-4">٢–٣</td>
                      <td className="p-4 font-bold text-primary">٢٠٠٠–٢٥٠٠</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-semibold">فيلا ٤–٥ غرف نوم</td>
                      <td className="p-4">٨–١٠</td>
                      <td className="p-4">٣–٤</td>
                      <td className="p-4 font-bold text-primary">٢٥٠٠–٣٥٠٠</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-semibold">
                        قطعة واحدة أو نقل صغير
                      </td>
                      <td className="p-4">٢–٣</td>
                      <td className="p-4">١</td>
                      <td className="p-4 font-bold text-primary">
                        تبدأ من ٤٠٠
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Sidebar Notice + Placeholder (4:3 Aspect Ratio) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="relative aspect-4/3 bg-muted  rounded-xl  overflow-hidden flex ">
                  <Image
                    src={"/ar/نقل-اثاث-دبي-شركة.jpg"}
                    alt="نقل اثاث دبي شركة"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-primary/5 border border-primary/15 rounded-xl p-5 space-y-3">
                  <h4 className="font-bold text-foreground text-base">
                    ملاحظة هامة حول الأسعار
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    هذه{" "}
                    <strong className="text-foreground font-semibold">
                      اسعار نقل اثاث
                    </strong>{" "}
                    تقريبية. العرض الدقيق لحالتك يأتي بعد أن تخبرنا بالتفاصيل.
                    تواصل معنا وسنرسل لك رقماً واضحاً خلال دقائق.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Step-by-Step Process */}
        <section className="py-20 border-b border-border ">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                خطوة بخطوة — كيف تسير عملية نقل اثاث دبي معنا
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-sm space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm">
                  ١
                </span>
                <h3 className="text-lg font-bold pt-4">تخبرنا بالتفاصيل</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  حجم الوحدة، الطابق، موقعك الحالي والجديد. اتصل بنا أو راسلنا
                  على واتساب. نسألك أي سؤال ناقص ونرسل لك{" "}
                  <strong className="text-foreground font-semibold">
                    عرض سعر نقل اثاث
                  </strong>{" "}
                  كاملاً على واتساب أو الإيميل — كل شيء مكتوب وواضح.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-sm space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm">
                  ٢
                </span>
                <h3 className="text-lg font-bold pt-4">تؤكد الموعد</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  بعد موافقتك على السعر، نحجز الموعد الذي يناسبك.{" "}
                  <strong className="text-foreground font-semibold">
                    خدمة نقل في نفس اليوم
                  </strong>{" "}
                  ممكنة في أغلب الأوقات. إذا كنت بحاجة لموعد مسبق بعد أسبوع أو
                  أكثر، نحجزه مباشرة.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-sm space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm">
                  ٣
                </span>
                <h3 className="text-lg font-bold pt-4">
                  معاينة مسبقة عند الحاجة
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  للفلل الكبيرة والمكاتب والمستودعات، نرسل مشرفاً قبل يوم النقل
                  للمعاينة وتحديد عدد الشاحنات والعمال بدقة. هذا يضمن عدم الحاجة
                  لرحلات إضافية غير متوقعة.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-sm space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm">
                  ٤
                </span>
                <h3 className="text-lg font-bold pt-4">التفكيك والتغليف</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  يصل الفريق في الوقت المحدد. يبدأون بتفكيك الأثاث — أسرة،
                  خزائن، طاولات — ثم تغليف كل قطعة بالمواد المناسبة.{" "}
                  <strong className="text-foreground font-semibold">
                    فك وتركيب الاثاث
                  </strong>{" "}
                  يتم بشكل منظم غرفة بغرفة حتى لا يضيع أي جزء أو مسمار.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  في المباني الشاهقة، ينسق الفريق مع إدارة المبنى لحجز المصعد
                  وتفرش بطانيات حماية على أرضيات الممرات — هذا إجراء إلزامي في
                  معظم الأبراج ونتولاه نحن.
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-sm space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm">
                  ٥
                </span>
                <h3 className="text-lg font-bold pt-4">التحميل والنقل</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  تُحمَّل جميع القطع في شاحنة البوكس المغلقة بشكل منظم. كل صندوق
                  وكل قطعة مرقَّمة حتى يسهل التفريغ في الطرف الآخر بدون ارتباك.
                </p>
              </div>

              {/* Step 6 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-sm space-y-3">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm">
                  ٦
                </span>
                <h3 className="text-lg font-bold pt-4">
                  التفريغ وإعادة التركيب
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  عند الوصول، يُفرَّغ كل شيء ويُعاد{" "}
                  <strong className="text-foreground font-semibold">
                    تركيب الاثاث
                  </strong>{" "}
                  في مكانه حسب ما تطلبه. تركيب الستائر والأجهزة الكهربائية
                  وإعادة ترتيب القطع متاح عند الطلب — فقط أخبرنا مسبقاً.
                </p>
              </div>

              {/* Step 7 */}
              <div className="relative bg-card p-6 rounded-xl border border-border shadow-sm space-y-3 md:col-span-2 lg:col-span-2">
                <span className="absolute -top-4 right-4 bg-primary text-primary-foreground font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm">
                  ٧
                </span>
                <h3 className="text-lg font-bold pt-4">تتفقد وتدفع</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  بعد الانتهاء، تفحص جميع القطع. إذا كان هناك أي ملاحظة، نتعامل
                  معها قبل أن تدفع. بعد رضاك الكامل تدفع — نقد أو تحويل بنكي أو
                  شيك مصرفي.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Packaging Materials Section with Placeholder Image */}
        <section className="py-20 border-b border-border ">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left side info (text) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-black text-foreground">
                    مواد التغليف المستخدمة — لماذا تهم
                  </h2>
                  <div className="w-16 h-1 bg-primary rounded-full" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground font-semibold">
                      تغليف اثاث دبي
                    </strong>{" "}
                    هو الفرق الفعلي بين أثاث يصل سليماً وآخر يصل مخدوشاً. شركات
                    كثيرة تستخدم مواد رخيصة أو غير مناسبة لتوفير التكلفة — وأنت
                    من يدفع الثمن لاحقاً. إليك ما نستخدمه:
                  </p>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground text-base">
                        بطانيات قماشية سميكة
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        للأثاث الخشبي والمرايا والقطع الكبيرة. تمنع الخدش أثناء
                        التحميل والنقل والتفريغ.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground text-base">
                        ورق الفقاعات الهوائية (Bubble Wrap)
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        للأجهزة الإلكترونية والزجاج وكل قطعة هشة أو حساسة
                        للصدمات.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground text-base">
                        لفائف ستريتش
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        تُثبِّت الأدراج والأبواب وتمنع فتحها أثناء الطريق.
                        تُستخدم أيضاً لتثبيت القطع المفككة مع بعضها.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground text-base">
                        صناديق كرتونية بأحجام مختلفة
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        للكتب والملابس وأدوات المطبخ والقطع الصغيرة المتفرقة.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground text-base">
                        كرتون مضلع صلب
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        لزوايا الأثاث والقطع الطويلة المعرضة للكسر عند التلامس
                        مع جدران الممر.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                  <p className="text-sm text-foreground/90 font-medium">
                    كل مواد التغليف مشمولة في عرض السعر. ما في رسوم إضافية
                    للمواد.
                  </p>
                </div>
              </div>

              {/* Right side placeholder image (4:3 Aspect Ratio) */}
              <div className="lg:col-span-5">
                <div className="relative aspect-3/4 bg-muted rounded-2xl  overflow-hidden ">
                  <Image
                    src="/ar/تغليف-اثاث-فيلا-جميرا-دبي-نقل-الأثاث-في-الإمارات.jpg"
                    alt="تغليف اثاث فيلا جميرا دبي نقل الأثاث في الإمارات"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Areas We Serve */}
        <section className="py-20 border-b border-border ">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                مناطق دبي التي نخدمها
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground">
                نصل إلى جميع أحياء دبي. هذه المناطق التي ننفذ فيها{" "}
                <strong className="text-foreground font-semibold">
                  نقل اثاث
                </strong>{" "}
                بشكل متكرر، مع ملاحظة لوجستية مختصرة لكل منطقة:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Area 1 */}
              <div className="bg-card p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-primary">
                  {" "}
                  نقل اثاث في ديرة وبر دبي{" "}
                </h3>
                <p className="text-sm text-muted-foreground ">
                  مبانٍ قديمة وبعضها بمصاعد خدمة ضيقة. الفريق متعود على هذا
                  النوع من المداخل ولا يضيع وقتاً في تقديره.
                </p>
              </div>

              {/* Area 2 */}
              <div className="bg-card p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-primary"> نقل اثاث في البرشاء</h3>
                <p className="text-sm text-muted-foreground ">
                  مجمعات سكنية واسعة وحركة نقل عالية. نسيق مع إدارة المجمع لحجز
                  مصعد الشحن ووقت النقل المسموح به.
                </p>
              </div>

              {/* Area 3 */}
              <div className="bg-card p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-primary"> نقل اثاث في القوز</h3>
                <p className="text-sm text-muted-foreground ">
                  منطقة صناعية وتجارية بامتياز. ننقل الأثاث المكتبي والمستودعات
                  والمعدات.
                </p>
              </div>

              {/* Area 4 */}
              <div className="bg-card p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-primary"> نقل اثاث في مردف</h3>
                <p className="text-sm text-muted-foreground ">
                  فلل ومجمعات سكنية. إدارات البوابات في مردف صارمة في أوقات
                  الدخول — نتولى التنسيق قبل يوم النقل.
                </p>
              </div>

              {/* Area 5 */}
              <div className="bg-card p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-primary">
                  نقل اثاث في الورقاء والمزهر والطوار
                </h3>
                <p className="text-sm text-muted-foreground ">
                  مناطق بحركة سكانية مرتفعة خاصة عند نهاية العقود في السنة.
                </p>
              </div>

              {/* Area 6 */}
              <div className="bg-card p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-primary">
                  نقل اثاث في جميرا والمنطقة الأولى
                </h3>
                <p className="text-sm text-muted-foreground ">
                  فلل فاخرة والقطع الثمينة. التغليف يأخذ وقتاً أطول هنا وهذا
                  طبيعي.
                </p>
              </div>

              {/* Area 7 */}
              <div className="bg-card p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-primary">
                  نقل اثاث في قرية جميرا الدائرية (JVC) وتاون سكوير
                </h3>
                <p className="text-sm text-muted-foreground ">
                  مجمعات جديدة بأبراج كثيرة ولوائح مبانٍ محددة للشحن.
                </p>
              </div>

              {/* Area 8 */}
              <div className="bg-card p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-primary">
                  نقل اثاث في دبي مارينا وجي بي آر
                </h3>
                <p className="text-sm text-muted-foreground ">
                  أبراج شاهقة بإدارات منظمة. حجز المصعد والتنسيق المسبق إلزامي
                  ونتولى نحن.
                </p>
              </div>

              {/* Area 9 */}
              <div className="bg-card p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-primary">
                  نقل اثاث في واحة دبي للسيليكون وأكاديمي سيتي
                </h3>
                <p className="text-sm text-muted-foreground ">
                  مناطق شرق دبي. نصل إليها في نفس اليوم.
                </p>
              </div>

              {/* Area 10 */}
              <div className="bg-card p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-primary">
                  نقل اثاث في راس الخور الصناعية
                </h3>
                <p className="text-sm text-muted-foreground ">
                  مقر شركتنا. ننفذ نقل المستودعات والمصانع وأثاث المكاتب الكبيرة
                  من وإلى هذه المنطقة يومياً.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-muted/50 border border-border p-4 rounded-lg text-center">
              <p className="text-base text-muted-foreground">
                لم تجد منطقتك؟ اتصل بنا — نصل إلى أي نقطة داخل دبي.
              </p>
            </div>
          </div>
        </section>

        {/* 9. Sharjah and Inter-Emirate Section with Placeholder */}
        <section className="py-20 border-b border-border bg-muted/10">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image Placeholder (16:9 Aspect Ratio) */}
              <div className="lg:col-span-5 order-last lg:order-first">
                <div className="relative aspect-square bg-muted rounded-2xl  overflow-hidden">
                  <Image
                    src="/ar/نقل-اثاث-من-الشارقة-الى-دبي-نقل-الأثاث-في-الإمارات.jpg"
                    alt="نقل اثاث من الشارقة الى دبي نقل الأثاث في الإمارات"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content text */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl md:text-4xl font-black text-foreground">
                  نقل اثاث من الشارقة إلى دبي — والعكس
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full" />

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground font-semibold">
                    نقل اثاث الشارقة دبي
                  </strong>{" "}
                  من أكثر الطلبات التي نستقبلها يومياً. كثير من العائلات تسكن
                  الشارجة بسبب الإيجارات الأقل وتنتقل للعمل في دبي أو تقرر
                  الانتقال للسكن فيها — والعكس متكرر أيضاً.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  ننفذ هذا المسار كل يوم. من القاسمية والمجاز والتعاون وصحارى
                  وميسلون والخان وباقي أحياء الشارقة إلى أي موقع في دبي، ومن دبي
                  إلى الشارجة. السعر يشمل رسوم Salik مسبقاً — لا تفاجآت عند
                  الوصول.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  <strong className="text-foreground font-semibold">
                    نقل اثاث من عجمان إلى دبي
                  </strong>{" "}
                  متاح أيضاً. ومثله النقل من أبوظبي، رأس الخيمة، الفجيرة. إذا
                  كان لديك نقل بين إمارتين، تواصل معنا لعرض سعر على المسار الذي
                  تحتاجه.
                </p>

                <div className="pt-2">
                  <Link
                    href="/movers-and-packers-in-sharjah"
                    className="inline-flex items-center gap-1.5 text-primary font-bold hover:underline underline-offset-4 text-base"
                  >
                    خدمات نقل اثاث الشارقة ←
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQSection
          title="الأسئلة الشائعة حول نقل اثاث دبي"
          subtitle="كل ما تحتاج لمعرفته حول نقل اثاث دبي"
          faqs={ArDubaiMoversFaqs}
        />

        {/* 11. Final CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto md:px-10 px-4">
            <div className="bg-linear-to-br from-primary via-primary to-red-800 text-primary-foreground rounded-2xl p-8 md:p-12 lg:p-16 text-center space-y-6 shadow-xl relative overflow-hidden">
              {/* Background elements */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
                احصل على عرض سعر مجاني الآن
              </h2>

              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                تريد{" "}
                <strong className="text-white font-bold">نقل اثاث دبي</strong> —
                شقة أو فيلا أو مكتب أو قطعة واحدة؟ راسلنا على واتساب أو اتصل
                بنا. عرض سعر واضح وبدون رسوم خفية يصلك خلال دقائق.
              </p>

              <div className="bg-white/10 border border-white/20 p-4 rounded-xl max-w-md mx-auto">
                <span className="font-bold text-base md:text-lg block">
                  الدفع بعد انتهاء العمل ورضاك الكامل.
                </span>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button
                  whatsappBtn
                  size={"lg"}
                  className="bg-green-500 hover:bg-green-600"
                >
                  {" "}
                  <MessageCircleCheck /> واتساب (عرض سعر مجاني){" "}
                </Button>
                <Button callBtn variant={"secondary"} size={"lg"}>
                  <PhoneCall /> اتصل بنا الآن{" "}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
