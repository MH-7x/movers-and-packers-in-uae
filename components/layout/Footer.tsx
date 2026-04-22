"use client";
import { MailCheck, HeadphonesIcon, MapPinCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const locationsMenuItems = [
  { label: "Sharjah", href: "/movers-and-packers-in-sharjah" },
  { label: "Ajman", href: "/movers-in-ajman" },
  { label: "Al Ain", href: "/movers-in-al-ain" },
  { label: "Ras Al Khaimah", href: "/movers-in-ras-al-khaimah" },
  { label: "Fujairah", href: "/movers-in-fujairah" },
  { label: "Umm Al Quwain", href: "#" },
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
              <span className="text-[15px] opacity-85">(719) 445-2808</span>
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
                12 29th St - Al Mankhool – Dubai
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
              <span className="text-[15px] opacity-85">info@demolink.org</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#222a35] pt-16 pb-8 relative overflow-hidden border-t border-white/50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
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

              <p className="text-[#a5abb1] text-[13.5px] leading-[1.8] mb-8 pr-4 mt-5">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore.Duis aute irure dolor in reprehenderit in
                voluptate velit.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-[#4a525a] flex items-center justify-center text-white hover:border-white transition-colors"
                >
                  <span className="font-serif font-bold text-[15px] leading-none mb-[2px]">
                    f
                  </span>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-[#4a525a] flex items-center justify-center text-white hover:border-white transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="13"
                    height="13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  >
                    <line x1="5" y1="5" x2="19" y2="19" />
                    <line x1="19" y1="5" x2="5" y2="19" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-[#4a525a] flex items-center justify-center text-white hover:border-white transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <circle cx="8.5" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="15.5" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-[#4a525a] flex items-center justify-center text-white hover:border-white transition-colors"
                >
                  <span className="font-bold text-[13px] leading-none">G+</span>
                </a>
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
                    href="#"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    Get A Quote
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    How To Hire
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    Our Moving Prices
                  </a>
                </li>
                <li>
                  <a
                    href="#"
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
                Main Services
              </h3>
              <div className="w-10 h-[1px] bg-[#c10007] mb-6"></div>
              <ul className="flex flex-col space-y-[14px]">
                <li>
                  <a
                    href="#"
                    className="text-[#a5abb1] hover:text-white text-[13.5px] transition-colors"
                  >
                    House Moving
                  </a>
                </li>
                <li>
                  <a
                    href="#"
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
              <span className="text-white font-medium">
                Movers and Packers in UAE
              </span>
              . All rights reserved.
            </p>
            <div className="flex gap-3">
              <a className="text-[#a5abb1] text-[13.5px]" href="#">
                Sitemap
              </a>
              <a className="text-[#a5abb1] text-[13.5px]" href="#">
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
