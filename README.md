# PCV India — React Website

Modern React + Tailwind CSS rebuild of the Process Control Valves India website, converted from a legacy PHP/jQuery static site.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)

---

## 📖 Overview

This is a fully static, client-side React application serving as the official website for **Process Control Valves India** — a manufacturer of valve components, instrumentation, and process controls based in Chennai.

The site was originally built with PHP templating and heavy jQuery plugins (Revolution Slider, Owl Carousel, Fancybox, Bootstrap Select, etc.). This rebuild replaces all of that with:

- **React 18** for component architecture
- **React Router 6** for client-side routing
- **Tailwind CSS 3** for styling
- **Vite** for fast development and optimized builds
- **Zero heavy UI libraries** — the slider, lightbox, counter animations, and mobile menu are all hand-rolled

---

## ✨ Features

- **6 fully converted pages** — Home, About, Products, Gallery, Enquiry, Contact
- **Custom hero slider** — auto-advancing, dot navigation, no external slider library
- **Lightbox gallery** — keyboard navigation (arrow keys + ESC), backdrop close, image counter
- **Animated counters** — IntersectionObserver-triggered number animations
- **Responsive layout** — mobile-first, hamburger menu, adaptive grids
- **Scroll-to-top button** — appears after 300px scroll
- **Accessible** — semantic HTML, ARIA labels, keyboard support
- **Zero jQuery** — removed ~30 script tags and 5+ legacy plugin dependencies
- **Small bundle** — ~200 KB gzipped vs. original ~2 MB

---

## 🗂️ Project Structure
pcv-react/
├── public/
│ └── img/ # All static images
│ ├── banner1.jpg … banner5.jpg
│ ├── slider-1.jpg … slider-3.jpg
│ ├── mc-1.jpg … mc-6.jpg
│ ├── c-1.jpg … c-5.jpg
│ ├── home-1.jpg … home-3.jpg
│ ├── product/
│ │ ├── 1.jpg
│ │ └── 2.jpg
│ └── gallery/
│ └── 1.jpg … 20.jpg
├── src/
│ ├── components/
│ │ ├── BrandStrip.jsx # Brand logo strip
│ │ ├── ContactForm.jsx # Reusable contact/enquiry form
│ │ ├── ContactInfoCard.jsx # Contact info card + data
│ │ ├── CounterSection.jsx # Animated stat counters
│ │ ├── FeatureGrid.jsx # 3-image "View more" grid
│ │ ├── Footer.jsx
│ │ ├── GalleryGrid.jsx # Image grid with lightbox
│ │ ├── Header.jsx # Nav + top bar + mobile menu
│ │ ├── HeroSlider.jsx # Custom home slider
│ │ ├── Lightbox.jsx # Fullscreen image viewer
│ │ ├── MachineGrid.jsx # 6-machine grid
│ │ ├── PageTitle.jsx # Reusable page banner
│ │ ├── ProductCard.jsx # Product display card
│ │ └── ScrollTop.jsx # Scroll-to-top button
│ ├── pages/
│ │ ├── About.jsx # /about
│ │ ├── Contact.jsx # /contact
│ │ ├── Enquiry.jsx # /enquiry
│ │ ├── Gallery.jsx # /gallery
│ │ ├── Home.jsx # /
│ │ └── Products.jsx # /products
│ ├── App.jsx # Route definitions + layout
│ ├── index.css # Tailwind directives + base styles
│ └── main.jsx # React entry point
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js

text

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** — [Download](https://nodejs.org/)
- **npm** (bundled with Node) or **pnpm**/**yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/pcv-react.git
cd pcv-react

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
Open http://localhost:5173 in your browser. The page auto-reloads on save.

Available Scripts
Command	Description
npm run dev	Start dev server with HMR at localhost:5173
npm run build	Build optimized production bundle to dist/
npm run preview	Preview the production build locally
🎨 Tech Stack
Layer	Choice	Why
Framework	React 18.3	Stable, well-supported, huge ecosystem
Build tool	Vite 5	Instant HMR, optimized production builds
Routing	React Router 6	Client-side navigation without page reloads
Styling	Tailwind CSS 3	Utility-first, no CSS files to maintain
Icons	react-icons	Lightweight, tree-shakeable Font Awesome
Forms	Native + fetch	No form library needed for this scale
What Was Removed
The original PHP site loaded ~30 JavaScript files, most of them unused jQuery plugins. All of the following were dropped:

jQuery + jQuery UI

Bootstrap 3 JS + Bootstrap Select

Revolution Slider (all 12 files)

Owl Carousel

Fancybox

Flexslider

Owl Carousel, Isotope, MixItUp

SmoothScroll, WOW.js, countTo.js

Google Maps JS (replaced with an <iframe> embed)

📸 Pages
Route	Page	Description
/	Home	Hero slider, welcome section, machine grid, animated counters, brand strip
/about	About Us	Company profile, mission, ISO certifications
/products	Products	Gate Plates and Spare Diaphragm product cards
/gallery	Gallery	20-image grid with fullscreen lightbox
/enquiry	Enquiry	Enquiry form + supporting image
/contact	Contact Us	Info cards, contact form, embedded Google Map
🖼️ Adding or Replacing Images
All images live in public/img/. To swap an image, just replace the file with the same name — no code changes needed.

To add a new gallery image:

Drop the image into public/img/gallery/

Update the count in src/pages/Gallery.jsx:

js
const images = Array.from({ length: 21 }, (_, i) => `/img/gallery/${i + 1}.jpg`);
(Change 20 to 21 if you added 21.jpg.)

To add a new product:

Drop the image into public/img/product/

Add a new entry in the products array in src/pages/Products.jsx

📧 Wiring the Contact / Enquiry Forms to Send Email
Both forms currently show a "simulated success" message so the UI works end-to-end. To make them actually send, pick one option:

Option A: Formspree (easiest — no backend)
Sign up at formspree.io (free: 50 submissions/month)

Create a form, copy your endpoint like https://formspree.io/f/xyzabcde

Open src/components/ContactForm.jsx and uncomment the Formspree block, pasting your URL

Option B: Keep your PHP mail.php endpoint
If you're hosting the React build on the same server as your PHP backend:

Keep mail.php on the server

Open src/components/ContactForm.jsx

Uncomment the "Option B" block (posts FormData to /mail.php)

Option C: EmailJS (client-side, no server)
Sign up at emailjs.com (free: 200 emails/month)

Follow their React SDK guide

Replace the form's submit handler accordingly

🌐 Deployment
Netlify (recommended)
Push this repo to GitHub

Go to netlify.com → "Add new site" → "Import from Git"

Select the repo

Build settings:

Build command: npm run build

Publish directory: dist

Click Deploy

Important: Add a _redirects file in public/ for client-side routing:

text
/*    /index.html   200
Without this, refreshing on /about returns a 404.

Vercel
Import the repo at vercel.com/new

Vercel auto-detects Vite. Click Deploy.

Add vercel.json if deep links 404:

json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
GitHub Pages
Set base in vite.config.js:

js
export default defineConfig({
  plugins: [react()],
  base: "/pcv-react/",   // repo name
});
Build: npm run build

Push the dist/ folder to a gh-pages branch (or use gh-pages)

Traditional hosting (cPanel, etc.)
Run npm run build

Upload the entire dist/ folder to public_html/ on your host

Add an .htaccess file for client-side routing:

apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
🔧 Customization
Change brand colors
Edit tailwind.config.js:

js
theme: {
  extend: {
    colors: {
      brand: "#0070c0",       // primary blue
      "brand-dark": "#00254a", // dark navy
      "brand-light": "#1b92e6",// header bar blue
      "brand-hover": "#48c7ec" // accent cyan
    }
  }
}
Then rebuild. All bg-brand, text-brand, etc. classes update automatically.

Change the slider timing
In src/components/HeroSlider.jsx:

js
const timer = setInterval(() => { ... }, 6000); // 6000ms = 6 seconds
🤝 Contributing
This is a private company site, but if you're contributing:

Create a feature branch: git checkout -b feat/your-feature

Commit with clear messages

Push and open a PR

📄 License
© 2026 Process Control Valves India. All rights reserved.

Website designed & rebuilt from legacy PHP → React.