export const services = [
  {
    category: "Residential Moving Services",
    items: [
      {
        name: "House Moving",
        description:
          "Full home relocations across any emirate. We pack, load, transport, and set up at the other end.",
        href: "#",
      },
      {
        name: "Villa Moving",
        description:
          "Large-scale moves with full furniture dismantling and reassembly. We handle the size, you handle the keys.",
        href: "#",
      },
      {
        name: "Apartment & Flat Shifting",
        description:
          "Studio to 5-bedroom moves with same-day service available. We work around your schedule and handle every floor.",
        href: "#",
      },
      {
        name: "Home Shifting Services",
        description:
          "Door-to-door household relocation with packing materials included. Everything placed in the right room.",
        href: "#",
      },
    ],
  },

  {
    category: "Commercial & Office Moving Services",
    items: [
      {
        name: "Office Relocation",
        description:
          "Minimal downtime. IT equipment handled carefully, workstations labelled, and everything set up correctly from day one.",
        href: "#",
      },
      {
        name: "Warehouse Moving",
        description:
          "Heavy goods, industrial shelving, and bulk storage handled with the right team and trucks for large-scale jobs.",
        href: "#",
      },
      {
        name: "Restaurant Furniture Moving",
        description:
          "Kitchen equipment, counters, chairs, and fixtures moved safely without disrupting your operations.",
        href: "#",
      },
      {
        name: "Bank & Hospital Furniture Moving",
        description:
          "Heavy safes, medical equipment, and sensitive assets moved securely with full care.",
        href: "#",
      },
    //   {
    //     name: "School Furniture Moving",
    //     description:
    //       "Classrooms, science labs, and libraries moved efficiently with zero damage and proper organization.",
    //     href: "#",
    //   },
    ],
  },

  {
    category: "Furniture & Specialty Moving",
    items: [
      {
        name: "All Kinds of Furniture Moving",
        description:
          "Single items or full loads including sofas, beds, wardrobes, and dining sets — packed properly and delivered safely.",
        href: "#",
      },
      {
        name: "Single Furniture Delivery Service",
        description:
          "Need just one item moved? We provide fast and reliable single-item delivery anywhere in the UAE.",
        href: "#",
      },
      {
        name: "Industrial Machinery & Heavy Safes",
        description:
          "Specialist rigging team for heavy, awkward, or fragile industrial items. Done safely and professionally.",
        href: "#",
      },
      {
        name: "Packing Services",
        description:
          "Complete packing solutions including bubble wrap, stretch film, blankets, and labeled boxes — no effort required from you.",
        href: "#",
      },
    ],
  },

//   {
//     category: "Storage & Add-On Services",
//     items: [
//       {
//         name: "Storage Services",
//         description:
//           "Short-term and long-term storage in secure facilities, ideal when your new space is not ready.",
//         href: "#",
//       },
//       {
//         name: "Self Storage",
//         description:
//           "Flexible and accessible storage for items you want nearby but do not have space for.",
//         href: "#",
//       },
//       {
//         name: "Furniture Storage",
//         description:
//           "Climate-aware warehousing to protect furniture from heat and dust until you need it again.",
//         href: "#",
//       },
//       {
//         name: "Curtain Fixing & Installation",
//         description:
//           "Post-move setup services including curtain installation to help you settle in quickly.",
//         href: "#",
//       },
//     ],
//   },
];


export const movingFeatures = [
  {
    
    title: "25+ Years of Experience",
    highlight: "Registered Since 1998",
    description: "We have been doing this since 1998. That is more than 25 years of moves — houses, villas, offices, warehouses — across every part of the UAE. We know what can go wrong and how to prevent it."
  },
  {
    
    title: "No Hidden Charges",
    highlight: "The Quote Is the Price",
    description: "When we send a quote for 1,000 AED, that is exactly what you pay. Nothing added at the end for extra labour, fuel, or materials. What you see is what you pay."
  },
  {
    
    title: "Pay Upon Satisfaction",
    highlight: "Job First, Payment After",
    description: "You do not pay until the work is finished and you are satisfied. We stay until everything is in place. Payment only comes when you are happy."
  },
  {
    
    title: "8 RTA-Approved Enclosed Box Trucks",
    highlight: "Fleet Quality",
    description: "Our fleet of 3-ton and 4-ton enclosed trucks is registered with the RTA. They are built to protect your belongings in the UAE's conditions — extreme heat, dust, and sandstorms included."
  },
  {
    
    title: "100% Insurance Coverage on Every Move",
    highlight: "Fully Insured",
    description: "Every move is fully insured. If something goes wrong, you are covered. This is included in the service — not added as an optional extra."
  },
  {
    
    title: "English & Arabic Speaking Team",
    highlight: "Bilingual Support",
    description: "Our team speaks both English and Arabic. Whether you are describing a complex office layout or just telling us where the sofa goes — there is no communication barrier."
  },
  {
    
    title: "Same-Day Moving Available",
    highlight: "Urgent Service",
    description: "Just arrived in the UAE? Need to move tomorrow? We offer same-day service for urgent situations. Contact us and describe your move — we will tell you what we can arrange."
  },
  {
    
    title: "Free Quote via WhatsApp, Email, or Phone",
    highlight: "No Obligation",
    description: "Contact us any way that works for you. Describe your move and we will send back a clear, itemised quote — no obligation, no pressure, no chasing."
  }
];

import{ 
  Eye, 
  Wrench, 
  Package, 
  Tag, 
  Truck, 
  ShieldCheck, 
  Home, 
  PackageOpen 
} from 'lucide-react';

export const movingProcess = [
  {
    step: 1,
    title: "Site Inspection",
    description: "We visit your current location to assess the volume, access points, and any items that need special handling. This keeps the quote accurate and the move smooth.",
    icon: Eye,
    arrow : true
  },
  {
    step: 2,
    title: "Dismantling",
    description: "Our carpenters take apart beds, wardrobes, shelving units, and anything else that needs disassembly before it can be safely moved.",
    icon: Wrench,
    arrow : true,
    ivert : true,
  },
  {
    step: 3,
    title: "Packing",
    description: "We pack everything using the right materials — bubble wrap for fragile items, stretch film for soft furniture, and fabric blankets for large pieces.",
    icon: Package,
    arrow : true
  },
  {
    step: 4,
    title: "Labelling",
    description: "Every box is labelled by room. When it arrives at the new place, it goes straight to the right space — no guessing, no sorting through random boxes.",
    icon: Tag
  },
  {
    step: 5,
    title: "Loading",
    description: "Our team loads the truck carefully — heavy items first, fragile items secured. Not just stacked and hoped for.",
    icon: Truck,
    arrow : true
  },
  {
    step: 6,
    title: "Transport",
    description: "We use fully enclosed box trucks to protect everything during the journey. No exposure to the UAE heat, dust, or sandstorms on route.",
    icon: ShieldCheck,
    arrow : true,
    ivert : true,
  },
  {
    step: 7,
    title: "Unloading & Installation",
    description: "We unload at the new location, reassemble all furniture, and place everything in the room it belongs in.",
    icon: Home,
    arrow : true
  },
  {
    step: 8,
    title: "Optional Unpacking",
    description: "If you want us to unpack boxes and sort everything out too, we can do that. Just let us know when you book.",
    icon: PackageOpen
  }
];

export const comparisonData = [
    {
      factor: "Best for",
      open: "Short local furniture shifts",
      enclosed: "Full home or office relocations",
      isPremium: false
    },
    {
      factor: "Heat protection",
      open: "None",
      enclosed: "Yes — critical above 40°C",
      isPremium: true
    },
    {
      factor: "Sandstorm protection",
      open: "None",
      enclosed: "Yes",
      isPremium: true
    },
    {
      factor: "Safe for electronics",
      open: "No",
      enclosed: "Yes",
      isPremium: true
    },
    {
      factor: "Safe for upholstery",
      open: "At risk",
      enclosed: "Yes",
      isPremium: true
    },
    {
      factor: "Recommended for",
      open: "Budget furniture transport",
      enclosed: "All residential & commercial moves",
      isPremium: false
    }
  ];

  export const locations = [
  {
    title: "Movers and Packers Dubai",
    description: "Our home base in Al Mankhool. House moving, villa relocation, apartment shifting, office moving, and furniture delivery — all Dubai districts covered.",
    href: "#",
    icon: "MapPin"
  },
  {
    title: "Movers and Packers Abu Dhabi",
    description: "Professional home shifting, villa moves, and office relocation across Abu Dhabi — city apartments, villa communities, and new developments all covered.",
    href: "#",
    icon: "Building2"
  },
  {
    title: "Movers and Packers Sharjah",
    description: "House moving, flat shifting, and cross-emirate relocations between Sharjah and Dubai. Packing services and storage available for Sharjah moves.",
    href: "#",
    icon: "ArrowLeftRight"
  },
  {
    title: "Movers and Packers Ajman",
    description: "Apartment moves, flat shifting, furniture transport, and office relocation in Ajman — full emirate coverage with transparent, no-hidden-charge pricing.",
    href: "#",
    icon: "Wallet"
  },
  {
    title: "Movers and Packers Ras Al Khaimah",
    description: "Full home moving, villa relocation, and furniture transport in Ras Al Khaimah. Enclosed trucks used for the journey to protect belongings on longer routes.",
    href: "#",
    icon: "Shield"
  },
  {
    title: "Movers and Packers Al Ain",
    description: "House shifting, apartment moving, and office relocation across Al Ain city and surrounding districts — including cross-emirate moves to Abu Dhabi or Dubai.",
    href: "#",
    icon: "Compass"
  },
  {
    title: "Movers and Packers Umm Al Quwain",
    description: "Home moving, furniture transport, and flat shifting in Umm Al Quwain. Cross-emirate relocations to Dubai, Sharjah, or Ajman also handled.",
    href: "#",
    icon: "Anchor"
  },
  {
    title: "Movers and Packers Fujairah",
    description: "House moving, villa shifting, and office relocation across Fujairah and the east coast. Packing services and enclosed truck transport included.",
    href: "#",
    icon: "Mountain"
  },
  {
    title: "Movers and Packers Al Ruwais",
    description: "Home moving and furniture transport in Al Ruwais and the western region of Abu Dhabi. Cross-emirate moves also arranged from this area.",
    href: "#",
    icon: "Navigation"
  },
  {
    title: "Movers and Packers Khor Fakkan",
    description: "House shifting, apartment moving, and furniture transport in Khor Fakkan. Covered as part of our Fujairah moving service — same team, same standards.",
    href: "#",
    icon: "Ship"
  }
];