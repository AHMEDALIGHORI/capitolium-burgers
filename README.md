<div align="center">

<!-- Animated Capitolium wordmark — burger brand palette -->
<svg width="720" height="140" viewBox="0 0 720 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CAPITOLIUM">
  <defs>
    <linearGradient id="mustardShimmer" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f4a804">
        <animate attributeName="stop-color" values="#f4a804;#ffd750;#f91814;#ffd750;#f4a804" dur="3.5s" repeatCount="indefinite"/>
      </stop>
      <stop offset="50%" stop-color="#ffd750">
        <animate attributeName="stop-color" values="#ffd750;#f91814;#ffd750;#f4a804;#ffd750" dur="3.5s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" stop-color="#f91814">
        <animate attributeName="stop-color" values="#f91814;#ffd750;#f4a804;#f91814;#f91814" dur="3.5s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>
    <filter id="strokeGlow" x="-10%" y="-20%" width="120%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#fff" flood-opacity="0.6"/>
    </filter>
  </defs>
  <rect width="720" height="140" rx="8" fill="#f5e3cd"/>
  <!-- jelly wave top -->
  <path d="M0,0 H720 V28 S540,8 360,22 S180,6 0,24 Z" fill="#f91814" opacity="0.9">
    <animate attributeName="d" values="M0,0 H720 V28 S540,8 360,22 S180,6 0,24 Z;M0,0 H720 V32 S540,14 360,18 S180,12 0,28 Z;M0,0 H720 V28 S540,8 360,22 S180,6 0,24 Z" dur="4s" repeatCount="indefinite"/>
  </path>
  <text x="360" y="78" text-anchor="middle" font-family="Impact, Haettenschweiler, sans-serif" font-size="54" font-weight="900" letter-spacing="10" fill="url(#mustardShimmer)" filter="url(#strokeGlow)">CAPITOLIUM</text>
  <text x="360" y="108" text-anchor="middle" font-family="Verdana, Geneva, sans-serif" font-size="14" letter-spacing="5" fill="#4c0016" opacity="0.9">
    ARTISAN SMASHED BURGERS · EST. 1997
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" repeatCount="indefinite"/>
  </text>
</svg>

<br/>

<!-- Loader status pulse -->
<svg width="480" height="32" viewBox="0 0 480 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="480" height="32" rx="16" fill="#f91814"/>
  <circle cx="20" cy="16" r="5" fill="#ffd750">
    <animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" repeatCount="indefinite"/>
    <animate attributeName="r" values="4;6;4" dur="1.2s" repeatCount="indefinite"/>
  </circle>
  <text x="36" y="20" font-family="Verdana, sans-serif" font-size="11" fill="#f5e3cd" letter-spacing="2">
    PREPARING ARTISAN KITCHEN...
    <animate attributeName="opacity" values="0.6;1;0.6" dur="1.2s" repeatCount="indefinite"/>
  </text>
</svg>

<br/><br/>

**A cinematic burger brand site** — smashed patties, scroll-driven motion, and a full load sequence  
built with **Next.js**, **GSAP**, and **Lenis**. Rebranded from the CRAV reference experience.

<br/>

<img src="https://img.shields.io/badge/Next.js-15-000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
<img src="https://img.shields.io/badge/GSAP-3.15-f91814?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP"/>
<img src="https://img.shields.io/badge/Lenis-Smooth_Scroll-ffd750?style=for-the-badge&labelColor=4c0016" alt="Lenis"/>
<img src="https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind"/>

</div>

---

## ✦ Load sequence

<svg width="100%" height="10" viewBox="0 0 800 10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <defs>
    <linearGradient id="loadBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f5e3cd"/>
      <stop offset="30%" stop-color="#ffd750">
        <animate attributeName="offset" values="0;0.7;0" dur="2.5s" repeatCount="indefinite"/>
      </stop>
      <stop offset="60%" stop-color="#f91814">
        <animate attributeName="offset" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" stop-color="#4c0016"/>
    </linearGradient>
  </defs>
  <rect width="800" height="4" y="3" rx="2" fill="url(#loadBar)"/>
</svg>

What happens when you open the site:

| Phase | What you see |
|:------|:-------------|
| **1 — Stack** | Six ingredient layers drop in (bun → patty → cheese → tomato → lettuce → burger) |
| **2 — Progress** | Mustard bar fills 0→100% · status text updates per layer |
| **3 — Celebrate** | Confetti burst · **READY TO CAPITOLIUM!** |
| **4 — Curtain** | Red → orange → burgundy wipe reveals the page |
| **5 — Hero** | Burger pops in · **THE BURGER** word-pop · **CAPITOLIUM** title · body lines rise |

Lenis scroll is **locked** during the loader and **released** when the curtain finishes.

---

## ✦ Pages

<div align="center">

<svg width="640" height="72" viewBox="0 0 640 72" xmlns="http://www.w3.org/2000/svg">
  <rect width="640" height="72" rx="6" fill="#ffd750"/>
  <g font-family="Verdana, sans-serif" font-size="13" font-weight="bold" letter-spacing="2">
    <g>
      <animateTransform attributeName="transform" type="translate" values="0 0; -160 0; 0 0" dur="10s" repeatCount="indefinite"/>
      <text x="24" y="30" fill="#f91814">HOME</text>
      <text x="120" y="30" fill="#4c0016">MENU</text>
      <text x="220" y="30" fill="#f91814">SPICES</text>
      <text x="340" y="30" fill="#4c0016">CONTACT</text>
      <text x="460" y="30" fill="#f91814">LOCATIONS</text>
      <text x="600" y="30" fill="#4c0016">HOME</text>
      <text x="696" y="30" fill="#f91814">MENU</text>
    </g>
  </g>
  <line x1="16" y1="48" x2="624" y2="48" stroke="#f91814" stroke-width="2" opacity="0.3"/>
  <circle r="5" fill="#f91814" cy="48">
    <animate attributeName="cx" values="24;616;24" dur="10s" repeatCount="indefinite"/>
  </circle>
  <text x="320" y="66" text-anchor="middle" font-family="Verdana, sans-serif" font-size="9" fill="#4c0016" letter-spacing="1">SCROLL THE ROUTE · BERLIN → TOKYO</text>
</svg>

</div>

| Route | Highlights |
|:------|:-----------|
| **`/`** | Hero · Classic · Experience · Travel map · About · Feel the Change |
| **`/menu`** | 6 artisan burgers · cart drawer · checkout |
| **`/spices`** | Farm-to-bite story · ingredient carousel |
| **`/contact`** | Craving form · concept credit |

---

## ✦ Home sections

```text
   ┌──────────────────────────────────────────────────┐
   │  LOADER  →  curtain wipe  →  isPageReady         │
   │       ↓                                          │
   │  HERO · THE BURGER · CAPITOLIUM                  │
   │       ↓                                          │
   │  CLASSIC · EXPERIENCE · TRAVEL MAP · ABOUT       │
   │       ↓                                          │
   │  FEEL THE CHANGE · footer                        │
   └──────────────────────────────────────────────────┘
```

---

## ✦ Launch

```bash
npm install
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** — hard refresh to replay the full loader.

```bash
npm run build    # production build
npm run start    # serve build
npm run lint     # eslint
```

---

## ✦ Brand tokens

| Token | Hex | Role |
|:------|:----|:-----|
| `--beige` | `#f5e3cd` | Page background |
| `--red` | `#f91814` | Primary brand · CTAs |
| `--mustard` | `#ffd750` | Accent · map sections |
| `--mustard-dark` | `#f4a804` | Strokes · eyebrows |
| `--burgundy` | `#4c0016` | Display text |
| `--black` | `#1b1b1b` | Body copy |

| Font | Usage |
|:-----|:------|
| **Modak** | Display headlines · logo scale |
| **Mouse Memoirs** | Nav · CTAs · `.heading180` |

---

## ✦ Motion system

<div align="center">

<svg width="560" height="80" viewBox="0 0 560 80" xmlns="http://www.w3.org/2000/svg">
  <rect width="560" height="80" rx="4" fill="#f5e3cd"/>
  <!-- floating ingredient dots -->
  <circle cx="80" cy="40" r="8" fill="#ffd750">
    <animate attributeName="cy" values="40;28;40" dur="2.4s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="80;88;80" dur="2.4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="200" cy="40" r="8" fill="#f91814">
    <animate attributeName="cy" values="40;52;40" dur="2.8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="360" cy="40" r="8" fill="#4c0016">
    <animate attributeName="cy" values="40;30;40" dur="2.2s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="360;352;360" dur="2.2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="480" cy="40" r="8" fill="#60a905">
    <animate attributeName="cy" values="40;48;40" dur="2.6s" repeatCount="indefinite"/>
  </circle>
  <text x="280" y="72" text-anchor="middle" font-family="Verdana, sans-serif" font-size="10" fill="#4c0016" letter-spacing="2">GSAP · SCROLLTRIGGER · LENIS · MOTION PATH</text>
</svg>

</div>

| System | What it drives |
|:-------|:---------------|
| **GSAP timelines** | Loader stack · curtain wipe · hero burger pop |
| **PopHeading** | Word-pop titles (`back.out(2.35)`) |
| **SplitTextReveal** | Body copy line rise (`power4.out`) |
| **ScrollTrigger** | Section reveals · travel map · plane path |
| **Lenis** | Smooth scroll · loader lock/unlock |
| **Sticker peel** | City takeaway cards · CSS `--peel-amount` |
| **JellyDivider** | Wavy SVG transitions between color bands |

---

## ✦ Project map

```text
src/
├── app/
│   ├── page.tsx              ← home
│   ├── menu/page.tsx
│   ├── spices/page.tsx
│   ├── contact/page.tsx
│   ├── layout.tsx            ← fonts · providers · chrome
│   └── globals.css           ← tokens · sticker · jelly CSS
├── components/
│   ├── Loader.tsx            ← stack + curtain load sequence
│   ├── PopHeading.tsx        ← word-pop headings
│   ├── SplitTextReveal.tsx   ← line reveal copy
│   ├── SmoothScroll.tsx      ← Lenis + GSAP ticker
│   ├── Navbar.tsx · FooterCTA.tsx · JellyDivider.tsx
│   ├── home/                 ← Hero · Classic · Experience · Travel · About
│   ├── menu/                 ← MenuPage · CartDrawer
│   ├── spices/ · contact/
│   └── ...
├── context/
│   ├── AnimationContext.tsx  ← isPageReady gate
│   ├── LenisContext.tsx
│   └── CartContext.tsx
└── lib/data.ts               ← burgers · cities · ingredients

public/
├── img-webp/ · img/ · burgers/
└── fonts/                    ← modak.woff2 · mouse-memoirs.woff2

_reference/                   ← original CRAV HTML · specs · assets
```

---

## ✦ Menu

| Burger | Price |
|:-------|:------|
| Classic Burger | $16 |
| Spicy Jalapeño Burger | $18 |
| Bacon Cheese Burger | $21 |
| Veggie Delight Burger | $15 |
| BBQ Ranch Burger | $19 |
| Mushroom Swiss Burger | $20 |

Cart state is client-side via `CartContext` — add items on `/menu`, open the drawer, checkout.

---

## ✦ Stack

| Layer | Package |
|:------|:--------|
| Framework | Next.js 15 · React 19 · TypeScript |
| Styling | Tailwind CSS 4 |
| Motion | GSAP 3 · Lenis 1.3 |
| Deploy | Netlify-ready (static + App Router) |

---

<div align="center">

<!-- Animated footer lockup -->
<svg width="520" height="64" viewBox="0 0 520 64" xmlns="http://www.w3.org/2000/svg">
  <text x="260" y="28" text-anchor="middle" font-family="Impact, sans-serif" font-size="22" letter-spacing="12" fill="#f91814">
    C A P I T O L I U M
    <animate attributeName="letter-spacing" values="12;16;12" dur="4s" repeatCount="indefinite"/>
  </text>
  <text x="260" y="50" text-anchor="middle" font-family="Verdana, sans-serif" font-size="12" fill="#4c0016" letter-spacing="3">
    Smashed patties · toasted buns · est. 1997
    <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
  </text>
</svg>

<br/>

<sub>© 2026 Capitolium — crafted with fire on the flat top</sub>

</div>
