import ArNavbar from "@/components/layout/ArNavbar";
import { MoversAndPackersSchema } from "@/lib/App";
import { Metadata } from "next";
import { Tajawal } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import ArFooter from "@/components/layout/ArFooter";
import ActionButton from "@/components/ActionButtons";
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
  preload: true,
});

export const metadata: Metadata = {
  applicationName: "نقل الأثاث في الإمارات",

  robots: {
    "max-image-preview": "large",
    follow: true,
    googleBot: {
      notranslate: true,
      "max-image-preview": "large",
      index: true,
      follow: true,
    },
    index: true,
    notranslate: true,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      dir="rtl"
      lang="ar-AE"
      className={`${tajawal.className} antialiased `}
    >
      <head>
        <Script
          id="Business-Schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(MoversAndPackersSchema),
          }}
          strategy="beforeInteractive"
          key="Business-Schema"
        />
      </head>

      <body className="max-w-350 mx-auto relative overflow-hidden">
        <div className="-z-10 fixed top-[-10%] left-1/2 -translate-x-1/2 w-200 h-150 bg-purple-50/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="-z-10 fixed top-[20%] left-[-10%] w-125 h-125 bg-red-50/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="-z-10 fixed top-[20%] right-[-10%] w-125 h-125 bg-red-50/50 rounded-full blur-[100px] pointer-events-none" />{" "}
        <ArNavbar /> {children} <ActionButton /> <ArFooter />
      </body>
    </html>
  );
}
