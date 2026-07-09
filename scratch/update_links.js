const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'lib/data.ts');
let content = fs.readFileSync(dataPath, 'utf8');

// Update Warehouse Moving
content = content.replace(/name: "Warehouse Moving",([\s\S]*?)href: "\/",/g, 'name: "Warehouse Moving",$1href: "/warehouse-moving-in-uae",');

// Update Industrial Machinery
content = content.replace(/name: "Industrial Machinery & Heavy Safes",([\s\S]*?)href: "\/",/g, 'name: "Industrial Machinery & Heavy Safes",$1href: "/industrial-machinery-moving",');

// Update Storage Services
content = content.replace(/name: "Storage Services",([\s\S]*?)href: "\/",/g, 'name: "Storage Services",$1href: "/storage-services-in-uae",');

// Update Self Storage
content = content.replace(/name: "Self Storage",([\s\S]*?)href: "\/",/g, 'name: "Self Storage",$1href: "/self-storage-in-uae",');

// Update Furniture Storage
content = content.replace(/name: "Furniture Storage",([\s\S]*?)href: "\/",/g, 'name: "Furniture Storage",$1href: "/furniture-storage-in-uae",');

// Update Curtain Fixing
content = content.replace(/name: "Curtain Fixing & Installation",([\s\S]*?)href: "\/",/g, 'name: "Curtain Fixing & Installation",$1href: "/curtain-fixing-in-uae",');

// Add Flats Shifting if missing
if (!content.includes('name: "Flats Shifting"')) {
    const flatStr = `  {
    name: "Flats Shifting",
    description: "Professional flats shifting in UAE with zero stress. Packing, furniture disassembly, transport and setup.",
    href: "/flats-shifting-in-uae",
    img: {
      src: "/ser/apartment-flat-shifting-dubai-uae.jpg",
      alt: "Flats shifting service in UAE with movers carrying boxes",
    },
  },
`;
    // Add to AllServices
    content = content.replace(/export const AllServices = \[/, 'export const AllServices = [\n' + flatStr);
}

fs.writeFileSync(dataPath, content);
console.log('data.ts updated!');
