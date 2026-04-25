import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import { APP, MoversAndPackersSchema } from "@/lib/App";

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-familjen-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  adjustFontFallback: true,
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  applicationName: APP.name,
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
      lang="en"
      className={`${familjenGrotesk.className} h-full antialiased`}
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
        <div className="-z-10 fixed top-[20%] right-[-10%] w-125 h-125 bg-red-50/50 rounded-full blur-[100px] pointer-events-none" />

        <Navbar />
        {children}

        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
