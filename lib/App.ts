export const APP = {
  name: "Movers and Packer in UAE",
  phone: "+971507745691",
  url: process.env.APP_URL || "http://localhost:3000",
};

export const MoversAndPackersSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany", //
  "@id": `${APP.url}/#business`,

  name: "Movers and Packers in UAE",

  alternateName: "نقل الأثاث في الإمارات",

  description:
    "Movers and Packers in UAE is a Dubai-based moving company registered since 1998. We offer house, villa, apartment, and office moving services across all seven UAE emirates, using enclosed box trucks and trained bilingual staff. Pay after job completion.",

  foundingDate: "1998",

  url: APP.url,

  telephone: "+971507745691",
  priceRange: "$$",

  // ── MEDIA ─────────────────────────────────────────────────────────────────
  image: {
    "@type": "ImageObject",
    url: `${APP.url}/ser/villa-movers-in-dubai.jpg`,
    width: 1024,
    height: 572,
  },

  logo: {
    "@type": "ImageObject",
    url: `${APP.url}/square-logo.jpg`,
    width: 675,
    height: 600,
  },
  // ✅ Same — ImageObject with dimensions helps Knowledge Panel rendering.

  // ── ADDRESS ───────────────────────────────────────────────────────────────
  address: {
    "@type": "PostalAddress",
    streetAddress: "16 13 St, Ras Al Khor Industrial Area 1",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
    postalCode: "00000",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.174314809425507,
    longitude: 55.33672101330998,
  },

  // ── COVERAGE ──────────────────────────────────────────────────────────────
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "City", name: "Ajman" },
    { "@type": "City", name: "Ras Al Khaimah" },
    { "@type": "City", name: "Al Ain" },
    { "@type": "City", name: "Umm Al Quwain" },
    { "@type": "City", name: "Fujairah" },
  ],
  knowsLanguage: ["en", "ar"],

  paymentAccepted: "Cash, Bank Transfer, Bank Cheque",
  currenciesAccepted: "AED",

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Moving and Packing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "House Moving" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Villa Moving" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Apartment Moving" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Office Relocation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Furniture Moving" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Packing Services" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Storage Services" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Warehouse Moving" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Curtain Fixing and Installation",
        },
      },
    ],
  },

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "13",
    bestRating: "5",
    worstRating: "1",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],

  sameAs: ["https://maps.app.goo.gl/sdeHroy7Aa4t2fYd6"],
};
