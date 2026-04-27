# Movers & Packers in UAE – Professional Website

A modern, responsive website design and maintenance by [Mashal Huraira](https://mashalhuraira.vercel.app) for a professional moving and packing company operating across the United Arab Emirates. Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**.

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.2.2-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?style=flat-square&logo=tailwindcss)

**[🌐 Live URL](https://moversandpackersinuae.com)** • **[📧 Contact Us](mailto:movers.and.packers.uae91@gmail.com)**

</div>

---

## ✨ Features

### 🏠 Comprehensive Service Coverage

- **Residential Moving**: House, villa, apartment, and flat shifting
- **Commercial Moving**: Office relocation, warehouse, retail space moves
- **Specialty Services**: Furniture moving, packing, storage, single item delivery
- **Location-Based Pages**: Dedicated service pages for all major UAE emirates

### 🎯 Business-Ready Features

- ✅ **Dynamic Quote System** - Real-time quotation requests with email notifications
- ✅ **Email Integration** - Resend-powered email templates for customer inquiries
- ✅ **SEO Optimized** - Meta tags, structured data, and performance optimizations
- ✅ **Responsive Design** - Perfect on mobile, tablet, and desktop
- ✅ **FAQ Section** - Comprehensive Q&A for customer support
- ✅ **Customer Reviews** - Showcase testimonials and ratings
- ✅ **Contact Integration** - Twilio-ready for SMS/call notifications

### 🎨 Modern UI/UX

- Beautiful, professional design with smooth animations
- Dark mode support with `next-themes`
- Component-based architecture with shadcn/ui
- Custom carousel functionality (Embla Carousel)
- Toast notifications with Sonner
- Accessible form inputs and interactive elements

---

## 🛠️ Tech Stack

### Frontend

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Reusable component library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Embla Carousel](https://www.emblacarousel.com/)** - Touch-enabled carousel

### Backend & Services

- **[Resend](https://resend.com/)** - Email service for quote requests
- **[React Email](https://react.email/)** - HTML email templates
- **[Twilio](https://www.twilio.com/)** - SMS/telephony integration (optional)
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[Next.js ESLint Config](https://nextjs.org/)** - Next.js-specific linting rules
- **[PostCSS](https://postcss.org/)** - CSS processing

---

## 📦 Installation & Setup

### Prerequisites

- **Node.js** 18.17 or later
- **pnpm** (recommended) or npm/yarn

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/movers-and-packers-uae.git
cd movers-and-packers-uae
```

### 2. Install Dependencies

```bash
pnpm install
# or
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key_here

# Twilio (Optional - for SMS/calls)
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=+1234567890
```

Get your API keys:

- **Resend API Key**: [https://resend.com/](https://resend.com/)
- **Twilio Credentials**: [https://www.twilio.com/](https://www.twilio.com/)

### 4. Run Development Server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Available Scripts

```bash
# Development server with hot reload
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

---

## 📁 Project Structure

```
├── app/
│   ├── (locations)/              # Location-specific pages (Sharjah, Abu Dhabi, etc.)
│   ├── (services)/               # Service-specific pages (Office, Villa, etc.)
│   ├── about-us/                 # About page
│   ├── get-quote/                # Quote request page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
│
├── components/
│   ├── ui/                       # shadcn/ui components (button, carousel, etc.)
│   ├── layout/
│   │   ├── Header.tsx            # Navigation header
│   │   └── Footer.tsx            # Footer component
│   ├── Commerical.tsx            # Commercial services section
│   ├── CTA.tsx                   # Call-to-action component
│   ├── EmailTemplate.tsx         # Email template for quotes
│   ├── FaqsSection.tsx           # FAQ section
│   ├── LocHeroSection.tsx        # Hero section for location pages
│   ├── MovingProcess.tsx         # Process flow component
│   ├── QuotationSection.tsx      # Quotation CTA section
│   ├── QuoteForm.tsx             # Quote request form
│   ├── ReviewSection.tsx         # Customer testimonials
│   └── ServiceHero.tsx           # Hero for service pages
│
├── lib/
│   ├── data.ts                   # Services, locations, features data
│   ├── FaqsData.tsx              # FAQ content
│   ├── sendMail.ts               # Email sending logic (Server Action)
│   ├── utils.ts                  # Utility functions
│   └── MetaDataTemplate.ts       # SEO metadata generator
│
├── public/
│   ├── logo.svg                  # Brand logo
│   ├── ava/                      # Avatar images
│   ├── loc/                      # Location-based images
│   └── ser/                      # Service images
│
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.mjs           # PostCSS configuration
└── package.json                 # Dependencies & scripts
```

---

## 🎯 Key Components

### QuoteForm (Interactive)

- Form validation and error handling
- Real-time field updates
- Email submission via Server Action
- Toast notifications for success/error

### EmailTemplate

- Professional HTML email design
- Responsive layout (mobile-optimized)
- Brand-consistent styling
- Direct call button for customer contact

### MovingProcess

- Visual representation of 4-step moving process
- Smooth animations and transitions
- Mobile-responsive grid layout

### ReviewSection

- Customer testimonial carousel
- Auto-playing with manual controls
- Star ratings display
- Avatar images

---

## 📧 Email Integration (Resend)

The `SendMail` Server Action handles quote requests:

```typescript
// Usage in components
const response = await SendMail({ data: formData });

if (response.success) {
  // Show success toast
} else {
  // Show error toast
}
```

**Email Template Features:**

- Brand header with logo
- Customer contact details
- Moving route visualization
- Conditional message display
- Direct call button (tel: link)
- Professional footer

---

## 🎨 Design System

### Colors

- **Primary**: `#c10007` (Brand red)
- **Secondary**: `#222a35` (Dark grey)
- **Text**: `#666666` (Medium grey)
- **Background**: `#f5f5f5` (Light grey)
- **White**: `#ffffff`

### Typography

- **Heading Font**: System fonts (font-weight: 600-700)
- **Body Font**: Helvetica Neue, Arial (font-size: 14-15px)

### Spacing

- Mobile: 24px padding
- Desktop: 40px padding
- Consistent gap sizes: 8px, 16px, 24px, 32px

---

## 🌐 SEO & Performance

- ✅ Dynamic meta tags for each page
- ✅ Open Graph and Twitter cards
- ✅ Structured data for services and locations
- ✅ Image optimization with Next.js Image component
- ✅ Lazy loading for below-the-fold content
- ✅ Mobile-first responsive design
- ✅ Fast page load times (Vercel optimized)

---

## 🔧 Configuration

### Tailwind CSS

Custom configuration with:

- Responsive breakpoints
- Extended color palette
- Animation utilities
- Custom spacing scale

### Next.js

- App Router for modern routing
- Server Components by default
- Optimized font loading
- Image optimization

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components tested and optimized for all screen sizes.

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Standards

- Follow the existing code style
- Use TypeScript for type safety
- Write meaningful commit messages
- Test responsive design on multiple devices

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

**Email**: [movers.and.packers.uae91@gmail.com](mailto:movers.and.packers.uae91@gmail.com)

**Website**: [https://moversandpackersinuae.vercel.app](https://moversandpackersinuae.com)

**Issues & Feedback**: [GitHub Issues](https://github.com/yourusername/movers-and-packers-uae/issues)

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI Components from [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide React](https://lucide.dev/)
- Email service by [Resend](https://resend.com/)
- Deployed on [Vercel](https://vercel.com/)

---

<div align="center">

**Made with ❤️ for seamless moving experiences across the UAE**

⭐ If you find this project helpful, please consider giving it a star!

</div>
