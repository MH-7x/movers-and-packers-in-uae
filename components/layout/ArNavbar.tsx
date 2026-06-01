"use client";
import { useState, useEffect } from "react";
import { PhoneCall, MapPin, X, ChevronDown, Menu, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

// Menu Data
const mainMenuItems = [
  { label: "English ", href: "/" },
  { label: "معلومات عنا", href: "/about-us" },
  { label: "اتصل بنا", href: "/get-quote" },
];

const servicesMenuItems = [
  { label: "نقل اثاث المنزل", href: "/نقل-اثاث-المنزل" },
  { label: "نقل اثاث الشقق", href: "/نقل-اثاث-الشقق" },
  { label: "نقل اثاث الفلل", href: "/نقل-اثاث-الفلل" },
  { label: "نقل اثاث المكاتب", href: "/نقل-اثاث-المكاتب" },
  { label: "نقل عفش دبي", href: "/نقل-عفش-دبي" },
  { label: "خدمات تغليف اثاث", href: "/خدمات-تغليف-اثاث" },
];

const locationsMenuItems = [
  { label: "نقل اثاث دبي", href: "/نقل-اثاث-دبي" },
  { label: "نقل اثاث الشارقة", href: "/movers-and-packers-in-sharjah" },
  { label: "نقل اثاث عجمان", href: "/movers-in-ajman" },
  { label: "نقل اثاث في ام القيوين", href: "/movers-in-al-ain" },
  { label: "نقل اثاث راس الخيمة", href: "/movers-in-ras-al-khaimah" },
  { label: "نقل اثاث الفجيرة", href: "/movers-in-fujairah" },
  { label: "نقل اثاث في العين", href: "/movers-in-umm-al-quwain" },
];

const otherPagesMenuItems = [
  {
    label: "أسعارنا المتحركة",
    href: "/blogs/movers-and-packers-cost-in-dubai",
  },
  { label: "كيفية الاتصال", href: "/how-to-hire" },
  { label: "كيفية الدفع", href: "/how-to-pay" },
  { label: "مدونات", href: "/blogs" },
];

interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
}

const DesktopSubMenu = ({ items }: { items: MenuItem[] }) => (
  <ul className="absolute left-full -top-2 hidden group-hover/nested:block bg-white shadow-xl min-w-62.5 border-l-4 border-gray-100 py-2">
    {items.map((item, idx) => (
      <li key={idx}>
        <Link
          href={item.href}
          className="block px-6 py-2.5 text-sm font-medium hover:bg-gray-50 hover:text-primary"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);

export default function ArNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile Accordion State
  const [openMobileMenus, setOpenMobileMenus] = useState<
    Record<string, boolean>
  >({});

  const toggleMobileMenu = (menu: string) => {
    setOpenMobileMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  // Handle Scroll for Desktop sticky nav features
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* =========================================
          MOBILE NAVBAR (Always Sticky)
      ========================================= */}
      <div className="lg:hidden sticky top-0 z-50 w-full">
        {/* Mobile Header Bar */}
        <div className="bg-white border-b border-gray-100 px-4 py-3.5 flex justify-between items-center shadow-sm relative z-50">
          {/* Logo (Left) */}
          <Link href="/" className="relative h-10 w-40">
            <Image
              src={"/logo.svg"}
              alt="Movers and Packers in UAE"
              fill
              loading="eager"
              className="object-contain"
            />
          </Link>

          {/* Action Items (Right) */}
          <div className="flex items-center gap-4">
            <Button callBtn variant={"secondary"}>
              <PhoneCall /> اتصل الآن
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-primary focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? (
                <X aria-label="close mobile menu" size={28} />
              ) : (
                <Menu aria-label="open mobile menu" size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full h-[calc(100vh-60px)] bg-white overflow-y-auto shadow-xl z-40 pb-20">
            <div className="px-4 pt-4 pb-10 space-y-2">
              {mainMenuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-bold text-base py-3 border-b border-gray-50 ${
                    index === 0 ? "text-primary" : "text-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile All Services Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileMenu("services")}
                  className="w-full flex items-center justify-between text-gray-800 font-bold text-base py-3 border-b border-gray-50"
                >
                  <Link href="/moving-services">خدماتنا</Link>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${openMobileMenus["services"] ? "rotate-180" : ""}`}
                  />
                </button>

                {openMobileMenus["services"] && (
                  <div className="bg-gray-50 pl-4 pr-2 py-2 space-y-1">
                    {servicesMenuItems.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-gray-600 text-sm py-2"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Locations Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileMenu("locations")}
                  className="w-full flex items-center justify-between text-gray-800 font-bold text-base py-3 border-b border-gray-50"
                >
                  المواقع
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${openMobileMenus["locations"] ? "rotate-180" : ""}`}
                  />
                </button>
                {openMobileMenus["locations"] && (
                  <div className="bg-gray-50 pl-4 pr-2 py-2 space-y-1">
                    {locationsMenuItems.map((location, index) => (
                      <Link
                        key={index}
                        href={location.href}
                        className="block text-gray-600 text-sm py-2"
                      >
                        {location.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Other Pages Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileMenu("other")}
                  className="w-full flex items-center justify-between text-gray-800 font-bold text-base py-3 border-b border-gray-50"
                >
                  صفحات أخرى
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${openMobileMenus["other"] ? "rotate-180" : ""}`}
                  />
                </button>
                {openMobileMenus["other"] && (
                  <div className="bg-gray-50 pl-4 pr-2 py-2 space-y-1">
                    {otherPagesMenuItems.map((page, index) => (
                      <Link
                        key={index}
                        href={page.href}
                        className="block text-gray-600 text-sm py-2"
                      >
                        {page.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* =========================================
          DESKTOP NAVBAR (Hidden on Mobile)
      ========================================= */}

      {/* Top Header Section (Scrolls out of view naturally) */}
      <header className="hidden lg:block w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Primary Logo */}
            <div className="shrink-0 flex items-center">
              <Link
                href="/"
                title="Movers and packers in uae logo"
                className="relative h-12 w-60"
              >
                <Image
                  src={"/logo.svg"}
                  alt="Movers and packers in uae logo"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Desktop Contact Info & CTA */}
            <div className="flex items-center space-x-10">
              {/* Telephone */}
              <div className="flex items-center space-x-3">
                <PhoneCall className="w-8 h-8 text-primary" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-0.5">
                    رقم التليفون
                  </span>
                  <a
                    dir="ltr"
                    href="tel:+971507745691"
                    className="text-gray-800 font-bold text-sm hover:text-primary transition-colors"
                  >
                    050 7745691
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-3">
                <MapPin className="w-8 h-8 text-primary" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-0.5">
                    عنوان المكتب
                  </span>
                  <address
                    style={{
                      fontStyle: "normal",
                    }}
                    className="text-gray-800 font-bold text-sm"
                  >
                    شارع 16 13، المنطقة الصناعية 1 رأس الخور - دبي
                  </address>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-8 h-8 text-primary" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-0.5">
                    ساعات العمل
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                    }}
                    className="text-gray-800 font-bold text-sm"
                  >
                    مفتوح 24/7
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Button quoteBtn size={"lg"}>
                طلب عرض أسعار
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar Section (Sticky on Desktop) */}
      <nav
        className={`hidden lg:block w-full sticky top-0 z-50 py-2 transition-colors duration-300 shadow-md ${
          isScrolled ? "bg-[#222A35]" : "bg-primary"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-full">
            {/* Secondary Logo (Appears on Scroll) */}
            <div
              className={`shrink-0 flex items-center transition-all duration-300 overflow-hidden ${
                isScrolled ? "w-auto opacity-100 pr-8 py-1" : "w-0 opacity-0"
              }`}
            >
              <Link
                href="/"
                title="movers and packers in uae logo"
                className="relative h-10 w-60"
              >
                <Image
                  src={"/logo-white.svg"}
                  alt="Movers and packers in uae logo"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Menu Items */}
            <ul className="flex items-center flex-1 h-full">
              {mainMenuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`block rounded-2xl text-white hover:bg-white/20 ${
                      index === 0 ? "px-8" : "px-6"
                    } py-3 font-bold text-sm uppercase tracking-wider h-full`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* All Services Dropdown */}
              <li className="relative group">
                <button className="flex items-center rounded-2xl text-white hover:bg-white/20 px-6 py-3 font-bold text-sm uppercase tracking-wider h-full">
                  <Link href="/moving-services">خدماتنا</Link>{" "}
                  <ChevronDown className="ml-1.5 w-4 h-4" />
                </button>
                <ul className="absolute right-0 top-full hidden group-hover:block bg-white shadow-xl text-gray-800 min-w-70 border-t-[3px] border-[#e22727] py-2 z-50">
                  {servicesMenuItems.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.href}
                        className="block px-6 py-2.5 text-sm font-medium hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Location Dropdown */}
              <li className="relative group">
                <button className="flex items-center rounded-2xl text-white hover:bg-white/20 px-6 py-3 font-bold text-sm uppercase tracking-wider h-full">
                  المواقع <ChevronDown className="ml-1.5 w-4 h-4" />
                </button>
                <ul className="absolute right-0 top-full hidden group-hover:block bg-white shadow-xl text-gray-800 min-w-70 border-t-[3px] border-[#e22727] py-2 z-50">
                  {locationsMenuItems.map((location, index) => (
                    <li key={index}>
                      <Link
                        href={location.href}
                        className="block px-6 py-2.5 text-sm font-medium hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        {location.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Other Pages Dropdown */}
              <li className="relative group">
                <button className="flex rounded-2xl items-center text-white hover:bg-white/20 px-6 py-3 font-bold text-sm uppercase tracking-wider h-full">
                  صفحات أخرى <ChevronDown className="ml-1.5 w-4 h-4" />
                </button>
                <ul className="absolute right-0 top-full hidden group-hover:block bg-white shadow-xl text-gray-800 min-w-55 border-t-[3px] border-[#e22727] py-2 z-50">
                  {otherPagesMenuItems.map((page, index) => (
                    <li key={index}>
                      <Link
                        href={page.href}
                        className="block px-6 py-2.5 text-sm font-medium hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
