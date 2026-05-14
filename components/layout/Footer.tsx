/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import { MailCheck, HeadphonesIcon, MapPinCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const locationsMenuItems = [
  { label: "Dubai", href: "/movers-and-packers-in-dubai" },
  { label: "Sharjah", href: "/movers-and-packers-in-sharjah" },
  { label: "Ajman", href: "/movers-in-ajman" },
  { label: "Al Ain", href: "/movers-in-al-ain" },
  { label: "Ras Al Khaimah", href: "/movers-in-ras-al-khaimah" },
  { label: "Fujairah", href: "/movers-in-fujairah" },
  { label: "Umm Al Quwain", href: "/movers-in-umm-al-quwain" },
  { label: "Al Ruwais", href: "#" },
  { label: "Khor Fakkan", href: "#" },
];
const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#222a35] py-5 px-6 font-sans mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center md:justify-between lg:justify-evenly items-start md:items-center gap-10 md:gap-6">
          {/* Phone Item */}
          <div className="flex items-center gap-5">
            <div className="bg-primary text-white md:w-[60px] w-12 md:h-[60px] h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm">
              <HeadphonesIcon className="w-7 h-7" />
            </div>
            <div className="flex flex-col text-white tracking-wide">
              <span className="font-bold text-[15px] mb-1">Phone:</span>
              <a className="text-[15px] opacity-85" href="tel:+971507745691">
                (050) 7745691
              </a>
            </div>
          </div>

          {/* Address Item */}
          <div className="flex items-center gap-5">
            <div className="bg-primary text-white md:w-[60px] w-12 md:h-[60px] h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm">
              <MapPinCheck className="w-7 h-7" />
            </div>
            <div className="flex flex-col text-white tracking-wide">
              <span className="font-bold text-[15px] mb-1">Address:</span>
              <address
                className="text-[15px] opacity-85"
                style={{ fontStyle: "normal" }}
              >
                16 13 St, Ras Al Khor Industrial Area 1 - Dubai
              </address>
            </div>
          </div>

          {/* Email Item */}
          <div className="flex items-center gap-5">
            <div className="bg-primary text-white md:w-[60px] w-12 md:h-[60px] h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm">
              <MailCheck className="w-7 h-7" />
            </div>
            <div className="flex flex-col text-white tracking-wide">
              <span className="font-bold text-[15px] mb-1">E-mail:</span>
              <Link
                href="mailto:movers.and.packers.uae91@gmail.com"
                className="text-[15px] opacity-85"
              >
                movers.and.packers.uae91@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#222a35] pt-16 pb-8 relative overflow-hidden border-t border-white/50">
        <div className="max-w-[1290px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
            {/* Column 1: Logo & About */}
            <div className="flex flex-col">
              {/* Logo */}
              <Link href={"/"} className="h-10 w-50  relative">
                <Image
                  src={"/logo-white.svg"}
                  alt="Movers and packers in uae"
                  fill
                  className="object-contain"
                />
              </Link>

              <p className="text-[#a5abb1] text-[13.5px] leading-[1.8] mb-5 pr-4 mt-5">
                Movers and Packers in UAE – We handle house moves, villa
                relocations, office shifts, packing, furniture transport, and
                more across Dubai and the emirates. We&apos;ve built a
                reputation on getting it right the first time.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/moversandpackersinuae91/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="facebook page link"
                  className="w-9 h-9 rounded-full border border-[#4a525a] flex items-center justify-center text-white hover:border-white transition-colors"
                >
                  <svg
                    fill="#fff"
                    className="w-6 h-6"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/moversandpackersinuae91"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="instagram profile link"
                  className="w-9 h-9 rounded-full border border-[#4a525a] flex items-center justify-center text-white hover:border-white transition-colors"
                >
                  <svg
                    fill="#fff"
                    className="w-6 h-6"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path>
                      <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path>
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.pinterest.com/moversandpackersuae91"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="pinterest page link"
                  className="w-9 h-9 rounded-full border border-[#4a525a] flex items-center justify-center text-white hover:border-white transition-colors"
                >
                  <svg
                    fill="#fff"
                    className="w-6 h-6"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M16.292 5C10.536 5 7.48 8.866 7.48 13.077c0 1.955 1.039 4.392 2.707 5.168.253.118.387.064.443-.18.047-.185.273-1.089.373-1.511a.402.402 0 0 0-.095-.386c-.55-.667-.988-1.896-.988-3.041 0-2.942 2.228-5.787 6.021-5.787 3.28 0 5.571 2.23 5.571 5.426 0 3.61-1.82 6.108-4.191 6.108-1.309 0-2.291-1.081-1.978-2.413.378-1.584 1.106-3.298 1.106-4.438 0-1.026-.552-1.883-1.685-1.883-1.341 0-2.415 1.385-2.415 3.241 0 1.182.4 1.978.4 1.978s-1.323 5.593-1.563 6.634c-.413 1.765.051 4.625.094 4.876.021.134.172.18.252.066.129-.175 1.725-2.565 2.174-4.292l.828-3.171c.439.829 1.707 1.531 3.061 1.531 4.021 0 6.923-3.703 6.923-8.299C24.52 8.301 20.92 5 16.292 5z"></path>
                    </g>
                  </svg>
                </a>
                <a
                  title="youtube channel link"
                  href="https://www.youtube.com/@moversandpackersinuae91"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#4a525a] flex items-center justify-center text-white hover:border-white transition-colors"
                >
                  <svg
                    fill="#fff"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z"></path>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="aspect-video bg-white/20 mt-5 rounded-2xl relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.857246591078!2d55.336691099999996!3d25.1742976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67f26b9647f1%3A0x51a249f2372b6e1b!2zTW92ZXJzIGFuZCBQYWNrZXJzIGluIFVBRSDZhtmC2YQg2KfZhNij2KvYp9irINmB2Yog2KfZhNil2YXYp9ix2KfYqg!5e0!3m2!1sen!2s!4v1776345171481!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  title="Movers and Packers in UAE Google Business Profile Location"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">
                Quick Links
              </h3>
              <div className="w-10 h-[1px] bg-[#c10007] mb-6"></div>
              <ul className="flex flex-col space-y-[14px]">
                <li>
                  <a
                    href="/about-us"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/blogs"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="/get-quote"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    Get A Quote
                  </a>
                </li>
                <li>
                  <a
                    href="/how-to-hire"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    How To Hire
                  </a>
                </li>
                <li>
                  <a
                    href="https://moversandpackersinuae.com/blogs/movers-and-packers-cost-in-dubai"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    Our Moving Prices
                  </a>
                </li>
                <li>
                  <a
                    href="/how-to-pay"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    How To Pay
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Categories */}
            <div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">
                <Link href="/moving-services"> Main Services</Link>
              </h3>
              <div className="w-10 h-[1px] bg-[#c10007] mb-6"></div>
              <ul className="flex flex-col space-y-[14px]">
                <li>
                  <a
                    href="/house-shifting-dubai"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    House Moving
                  </a>
                </li>
                <li>
                  <a
                    href="/villa-movers-in-dubai"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    Villa Moving
                  </a>
                </li>
                <li>
                  <a
                    href="/apartment-movers-dubai"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    Apartment Moving
                  </a>
                </li>
                <li>
                  <a
                    href="/office-movers-in-dubai"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    Office Relocations
                  </a>
                </li>
                <li>
                  <a
                    href="/packing-services-in-dubai"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    Packing Services
                  </a>
                </li>
                <li>
                  <a
                    href="/furniture-moving-services-uae"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    Furniture Moving
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    Curtain Fixing & Installation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    Storage Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">
                Locations We Serve
              </h3>
              <div className="w-10 h-[1px] bg-[#c10007] mb-6"></div>
              <ul className="flex flex-col space-y-[14px]">
                {locationsMenuItems.map((item, i) => (
                  <li key={i}>
                    {" "}
                    <a
                      href={item.href}
                      className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                    >
                      Movers in {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Copyright Section */}
          <div className="mt-16 border-t border-[#3a424b] pt-8 flex justify-between items-center md:flex-row flex-col">
            <p className="text-[#a5abb1] text-[13.5px] md:text-start text-center">
              Copyright © 2026{" "}
              <Link href="/" className="text-white font-medium">
                Movers and Packers in UAE نقل الأثاث في الإمارات
              </Link>
              . All rights reserved.
            </p>
            <div className="flex gap-3">
              <a className="text-[#a5abb1] text-[13.5px]" href="/sitemap.xml">
                Sitemap
              </a>
              <a
                href="https://mashalhuraira.vercel.app"
                rel="noopener noreferrer nofollow"
                target="_blank"
                className="text-[#a5abb1] text-[13.5px]"
              >
                Develop & Maintained by{" "}
                <span className="text-white">Mashal Huraira</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
