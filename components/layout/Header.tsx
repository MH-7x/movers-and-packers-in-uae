"use client";
import { useState, useEffect } from "react";
import {
  PhoneCall,
  MapPin,
  X,
  ChevronDown,
  ChevronRight,
  Menu,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

// Menu Data
const mainMenuItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "/about-us" },
  { label: "Get Quote", href: "/get-quote" },
];

const servicesMenuItems = [
  { label: "House moving", href: "/house-shifting-dubai" },
  { label: "Villa moving", href: "/villa-movers-in-dubai" },
  { label: "Apartment Moving", href: "/apartment-movers-dubai" },
  { label: "Flats shifting", href: "/apartment-movers-dubai" },
  { label: "Office relocation", href: "/office-movers-in-dubai" },
  {
    label: "Packing Services (cargo, storage)",
    href: "/packing-services-in-dubai",
  },
  {
    label: "All kinds of furniture moving",
    href: "/furniture-moving-services-uae",
    submenu: [
      {
        label: "Single furniture moving",
        href: "/single-furniture-moving-uae",
      },
      { label: "Bank's furniture moving", href: "/bank-furniture-moving-uae" },
      {
        label: "Hospital furniture moving",
        href: "/hospital-furniture-moving-uae",
      },
      {
        label: "Schools' furniture moving",
        href: "/school-furniture-moving-uae",
      },
      {
        label: "Restaurant furniture moving",
        href: "/restaurant-furniture-moving-uae",
      },
    ],
  },
  { label: "Warehouse Moving", href: "#" },
  { label: "Curtain fixing and installation", href: "#" },
  {
    label: "Storage services",
    href: "#",
    submenu: [
      { label: "Self storage", href: "#" },
      { label: "Furniture storage", href: "#" },
    ],
  },
];

const locationsMenuItems = [
  { label: "Sharjah", href: "/movers-and-packers-in-sharjah" },
  { label: "Ajman", href: "/movers-in-ajman" },
  { label: "Al Ain", href: "#" },
  { label: "Ras Al Khaimah", href: "/movers-in-ras-al-khaimah" },
  { label: "Fujairah", href: "#" },
  { label: "Umm Al Quwain", href: "#" },
  { label: "Al Ruwais", href: "#" },
  { label: "Khor Fakkan", href: "#" },
];

const otherPagesMenuItems = [
  { label: "Our Moving Prices", href: "#" },
  { label: "How To Hire", href: "#" },
  { label: "How To Pay", href: "#" },
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
        <a
          href={item.href}
          className="block px-6 py-2.5 text-sm font-medium hover:bg-gray-50 hover:text-primary"
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);

export default function Navbar() {
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
            <Button variant={"secondary"}>
              <PhoneCall /> Call Now
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-primary focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full h-[calc(100vh-60px)] bg-white overflow-y-auto shadow-xl z-40 pb-20">
            <div className="px-4 pt-4 pb-10 space-y-2">
              {mainMenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`block font-bold text-base py-3 border-b border-gray-50 ${
                    index === 0 ? "text-primary" : "text-gray-800"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile All Services Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileMenu("services")}
                  className="w-full flex items-center justify-between text-gray-800 font-bold text-base py-3 border-b border-gray-50"
                >
                  All Services
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${openMobileMenus["services"] ? "rotate-180" : ""}`}
                  />
                </button>

                {openMobileMenus["services"] && (
                  <div className="bg-gray-50 pl-4 pr-2 py-2 space-y-1">
                    {servicesMenuItems.map((service, index) =>
                      service.submenu ? (
                        <div key={index}>
                          <button
                            onClick={() => toggleMobileMenu(`submenu-${index}`)}
                            className="w-full flex items-center justify-between text-gray-600 font-medium text-sm py-2"
                          >
                            {service.label}
                            <ChevronRight
                              className={`w-4 h-4 transition-transform ${
                                openMobileMenus[`submenu-${index}`]
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                          {openMobileMenus[`submenu-${index}`] && (
                            <div className="pl-4 py-1 space-y-1 border-l-2 border-gray-200 ml-2 mb-2">
                              {service.submenu.map((subitem, subindex) => (
                                <a
                                  key={subindex}
                                  href={subitem.href}
                                  className="block text-gray-500 text-sm py-1.5"
                                >
                                  {subitem.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          key={index}
                          href={service.href}
                          className="block text-gray-600 text-sm py-2"
                        >
                          {service.label}
                        </a>
                      ),
                    )}
                  </div>
                )}
              </div>

              {/* Mobile Locations Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileMenu("locations")}
                  className="w-full flex items-center justify-between text-gray-800 font-bold text-base py-3 border-b border-gray-50"
                >
                  Locations
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${openMobileMenus["locations"] ? "rotate-180" : ""}`}
                  />
                </button>
                {openMobileMenus["locations"] && (
                  <div className="bg-gray-50 pl-4 pr-2 py-2 space-y-1">
                    {locationsMenuItems.map((location, index) => (
                      <a
                        key={index}
                        href={location.href}
                        className="block text-gray-600 text-sm py-2"
                      >
                        {location.label}
                      </a>
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
                  Other Pages
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${openMobileMenus["other"] ? "rotate-180" : ""}`}
                  />
                </button>
                {openMobileMenus["other"] && (
                  <div className="bg-gray-50 pl-4 pr-2 py-2 space-y-1">
                    {otherPagesMenuItems.map((page, index) => (
                      <a
                        key={index}
                        href={page.href}
                        className="block text-gray-600 text-sm py-2"
                      >
                        {page.label}
                      </a>
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
              <Link href="/" className="relative h-12 w-60">
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
                    Telephone
                  </span>
                  <a
                    href="tel:0507745691"
                    className="text-gray-800 font-bold text-base hover:text-primary transition-colors"
                  >
                    (050) 7745691
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-3">
                <MapPin className="w-8 h-8 text-primary" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-0.5">
                    Address
                  </span>
                  <address
                    style={{
                      fontStyle: "normal",
                    }}
                    className="text-gray-800 font-bold text-base"
                  >
                    16 13 St, Ras Al Khor Industrial Area 1 - Dubai
                  </address>
                </div>
              </div>

              {/* CTA Button */}
              <Button quoteBtn size={"lg"}>
                Request a Quote
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
              <Link href="/" className="relative h-10 w-60">
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
                  <a
                    href={item.href}
                    className={`block rounded-2xl text-white hover:bg-white/20 ${
                      index === 0 ? "px-8" : "px-6"
                    } py-3 font-bold text-sm uppercase tracking-wider h-full`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              {/* All Services Dropdown */}
              <li className="relative group">
                <button className="flex items-center rounded-2xl text-white hover:bg-white/20 px-6 py-3 font-bold text-sm uppercase tracking-wider h-full">
                  All Services <ChevronDown className="ml-1.5 w-4 h-4" />
                </button>
                <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl text-gray-800 min-w-70 border-t-[3px] border-[#e22727] py-2 z-50">
                  {servicesMenuItems.map((service, index) =>
                    service.submenu ? (
                      <li key={index} className="relative group/nested">
                        <button className="w-full flex items-center justify-between px-6 py-2.5 text-sm font-medium hover:bg-gray-50 hover:text-primary transition-colors">
                          {service.label}{" "}
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </button>
                        <DesktopSubMenu items={service.submenu} />
                      </li>
                    ) : (
                      <li key={index}>
                        <a
                          href={service.href}
                          className="block px-6 py-2.5 text-sm font-medium hover:bg-gray-50 hover:text-primary transition-colors"
                        >
                          {service.label}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </li>

              {/* Location Dropdown */}
              <li className="relative group">
                <button className="flex items-center rounded-2xl text-white hover:bg-white/20 px-6 py-3 font-bold text-sm uppercase tracking-wider h-full">
                  Locations <ChevronDown className="ml-1.5 w-4 h-4" />
                </button>
                <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl text-gray-800 min-w-70 border-t-[3px] border-[#e22727] py-2 z-50">
                  {locationsMenuItems.map((location, index) => (
                    <li key={index}>
                      <a
                        href={location.href}
                        className="block px-6 py-2.5 text-sm font-medium hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        {location.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Other Pages Dropdown */}
              <li className="relative group">
                <button className="flex rounded-2xl items-center text-white hover:bg-white/20 px-6 py-3 font-bold text-sm uppercase tracking-wider h-full">
                  Other Pages <ChevronDown className="ml-1.5 w-4 h-4" />
                </button>
                <ul className="absolute right-0 top-full hidden group-hover:block bg-white shadow-xl text-gray-800 min-w-55 border-t-[3px] border-[#e22727] py-2 z-50">
                  {otherPagesMenuItems.map((page, index) => (
                    <li key={index}>
                      <a
                        href={page.href}
                        className="block px-6 py-2.5 text-sm font-medium hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        {page.label}
                      </a>
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
