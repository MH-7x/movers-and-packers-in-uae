import { APP } from "@/lib/App";
import { MetadataRoute } from "next";

const pages: MetadataRoute.Sitemap = [
  {
    url: "",
    changeFrequency: "daily",
    priority: 1.0,
    images: ["/mover-and-packers-in-uae.jpg"],
    lastModified: "2026-04-30",
  },
  {
    url: "/about-us",
    changeFrequency: "yearly",
    priority: 0.7,
    images: ["/about-us-professional-movers-packers-team-dubai-uae.jpg"],
    lastModified: "2026-04-28",
  },
  {
    url: "/get-quote",
    changeFrequency: "yearly",
    priority: 0.9,
    images: ["/about-us-professional-movers-packers-team-dubai-uae.jpg"],
    lastModified: "2026-04-28",
  },
  {
    url: "/blogs",
    changeFrequency: "weekly",
    priority: 0.7,
    images: ["/movers-and-packers-in-uae-blogs.jpg"],
    lastModified: "2026-04-30",
  },
  // -------------------------------------------------------

  // LOCATION PAGES

  // -------------------------------------------------------
  {
    url: "/movers-and-packers-in-sharjah",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/loc/movers-packers-sharjah-professional-moving-service-uae.jpg"],
    lastModified: "2026-04-28",
  },
  {
    url: "/movers-in-ajman",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/loc/movers-in-ajman-residential-house-moving-service-uae.jpg"],
    lastModified: "2026-04-26",
  },
  {
    url: "/movers-in-al-ain",
    changeFrequency: "monthly",
    priority: 0.8,
    images: [
      "/loc/movers-in-al-ain-professional-moving-service-jebel-hafeet-garden-city.jpg",
    ],
    lastModified: "2026-04-28",
  },
  {
    url: "/movers-in-fujairah",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/loc/movers-in-fujairah-professional-moving-service-hero.jpg"],
    lastModified: "2026-04-28",
  },
  {
    url: "/movers-in-ras-al-khaimah",
    changeFrequency: "monthly",
    priority: 0.8,
    images: [
      "/loc/movers-in-ras-al-khaimah-professional-moving-service-villa-hajar-mountains.jpg",
    ],
    lastModified: "2026-04-26",
  },
  {
    url: "/movers-in-umm-al-quwain",
    changeFrequency: "monthly",
    priority: 0.8,
    images: [
      "/loc/movers-umm-al-quwain-professional-moving-service-khor-al-beidah-lagoon.jpg",
    ],
    lastModified: "2026-04-26",
  },

  // -------------------------------------------------------

  // SERVICES PAGES

  // -------------------------------------------------------

  {
    url: "/apartment-movers-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/ser/apartment-movers-in-dubai.jpg"],
    lastModified: "2026-04-26",
  },
  {
    url: "/bank-furniture-moving-uae",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/ser/bank-furniture-moving-dubai-teller-counter-relocation.jpg"],
    lastModified: "2026-04-26",
  },
  {
    url: "/furniture-moving-services-uae",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/ser/furniture-movers-and-packers-in-uae.jpg"],
    lastModified: "2026-04-26",
  },
  {
    url: "/hospital-furniture-moving-uae",
    changeFrequency: "monthly",
    priority: 0.7,
    images: [
      "/ser/hospital-furniture-moving-uae-professional-movers-medical-equipment.jpg",
    ],
    lastModified: "2026-04-28",
  },
  {
    url: "/house-shifting-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/house-shifting-services-in-dubai-uae.jpg"],
    lastModified: "2026-04-26",
  },
  {
    url: "/moving-services",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/house-shifting-services-in-dubai-uae.jpg"],
    lastModified: "2026-04-28",
  },
  {
    url: "/office-movers-in-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/ser/office-movers-in-dubai.jpg"],
    lastModified: "2026-04-28",
  },
  {
    url: "/packing-services-in-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/ser/packing-services-in-dubai.jpg"],
    lastModified: "2026-04-26",
  },
  {
    url: "/restaurant-furniture-moving-uae",
    changeFrequency: "monthly",
    priority: 0.7,
    images: [
      "/ser/restaurant-furniture-moving-uae-professional-dining-relocation-dubai.jpg",
    ],
    lastModified: "2026-04-26",
  },
  {
    url: "/school-furniture-moving-uae",
    changeFrequency: "monthly",
    priority: 0.7,
    images: [
      "/ser/school-furniture-moving-uae-professional-educational-institution-relocation.jpg",
    ],
    lastModified: "2026-04-28",
  },
  {
    url: "/single-furniture-moving-uae",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/ser/single-item-moving-dubai-professional-sofa-movers.jpg"],
    lastModified: "2026-04-28",
  },
  {
    url: "/villa-movers-in-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/ser/villa-movers-in-dubai.jpg"],
    lastModified: "2026-04-26",
  },

  // -------------------------------------------------------

  // Other Pages

  // -------------------------------------------------------

  {
    url: "/how-to-hire",
    changeFrequency: "yearly",
    priority: 0.6,
    images: ["/about-us-professional-movers-packers-team-dubai-uae.jpg"],
    lastModified: "2026-04-26",
  },
  {
    url: "/how-to-pay",
    changeFrequency: "yearly",
    priority: 0.6,
    images: ["/about-us-professional-movers-packers-team-dubai-uae.jpg"],
    lastModified: "2026-04-26",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    ...page,
    url: `${APP.url}${page.url}`,
    images: page.images ? page.images.map((img) => `${APP.url}${img}`) : [],
    lastModified: page.lastModified,
  }));
}
