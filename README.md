<div align="center">

<!-- Animated gold shimmer wordmark -->
<svg width="720" height="120" viewBox="0 0 720 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CAPITOLIUM">
  <defs>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8a7348">
        <animate attributeName="stop-color" values="#8a7348;#c3a677;#f0e3cf;#c3a677;#8a7348" dur="4s" repeatCount="indefinite"/>
      </stop>
      <stop offset="50%" stop-color="#c3a677">
        <animate attributeName="stop-color" values="#c3a677;#f0e3cf;#c3a677;#8a7348;#c3a677" dur="4s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" stop-color="#f0e3cf">
        <animate attributeName="stop-color" values="#f0e3cf;#c3a677;#8a7348;#c3a677;#f0e3cf" dur="4s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>
    <filter id="softGlow" x="-20%" y="-40%" width="140%" height="180%">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="720" height="120" fill="#0b090a"/>
  <text
    x="360"
    y="72"
    text-anchor="middle"
    font-family="Georgia, 'Times New Roman', Times, serif"
    font-size="52"
    letter-spacing="18"
    fill="url(#gold)"
    filter="url(#softGlow)"
  >CAPITOLIUM</text>
  <text
    x="360"
    y="102"
    text-anchor="middle"
    font-family="Georgia, 'Times New Roman', Times, serif"
    font-style="italic"
    font-size="16"
    letter-spacing="4"
    fill="#c3a677"
    opacity="0.85"
  >
    Qui se Ressemble, Rassemble
    <animate attributeName="opacity" values="0.45;0.95;0.45" dur="3.2s" repeatCount="indefinite"/>
  </text>
</svg>

<br/>

<!-- Pulsing status line -->
<svg width="420" height="28" viewBox="0 0 420 28" xmlns="http://www.w3.org/2000/svg">
  <circle cx="14" cy="14" r="5" fill="#c3a677">
    <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" repeatCount="indefinite"/>
    <animate attributeName="r" values="4;6;4" dur="1.6s" repeatCount="indefinite"/>
  </circle>
  <text x="28" y="18" font-family="Georgia, serif" font-size="13" fill="#c3a677" letter-spacing="2">
    IMMERSIVE EXPERIENCE · LIVE
  </text>
</svg>

<br/><br/>

**An editorial digital experience** uniting heritage, craft, and motion —  
where every scroll reveals a new chapter of the city.

<br/>

<a href="http://localhost:5173">
  <img src="https://img.shields.io/badge/▶_Enter_the_experience-0b090a?style=for-the-badge&labelColor=c3a677&color=0b090a" alt="Enter"/>
</a>
&nbsp;
<img src="https://img.shields.io/badge/GSAP-Motion-c3a677?style=flat-square&labelColor=0b090a" alt="GSAP"/>
<img src="https://img.shields.io/badge/Lenis-Smooth_Scroll-c3a677?style=flat-square&labelColor=0b090a" alt="Lenis"/>
<img src="https://img.shields.io/badge/Nuxt-SSG-c3a677?style=flat-square&labelColor=0b090a" alt="Nuxt"/>

</div>

---

## ✦ The journey

<svg width="100%" height="8" viewBox="0 0 800 8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <defs>
    <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0b090a"/>
      <stop offset="50%" stop-color="#c3a677">
        <animate attributeName="offset" values="0.2;0.8;0.2" dur="5s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" stop-color="#0b090a"/>
    </linearGradient>
  </defs>
  <rect width="800" height="2" y="3" fill="url(#line)"/>
</svg>

| Chapter | Atmosphere |
|:--------|:-----------|
| **I — Les Arcades** | Where the story begins under vaults of brick and light |
| **II — Salle du Conseil** | Heritage, authority, and the red & black soul |
| **III — Salle des Illustres** | From the locker room to the balcony of glory |

Then: **collection** · **medias** · **boutiques** — one continuous scroll, one composition.

---

## ✦ Launch

```bash
npm install
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** and press **Entrer**.

```text
   ┌─────────────────────────────────────┐
   │  loader  →  hero sky  →  chapters   │
   │       ↓                             │
   │  collection · weekend · medias      │
   │       ↓                             │
   │           shops · footer            │
   └─────────────────────────────────────┘
```

---

## ✦ Brand identity

| Token | Value |
|:------|:------|
| Display | `CAPITOLIUM` — wide-tracked serif gold |
| Tagline | *Qui se Ressemble, Rassemble* |
| Dark gold | `#c3a677` |
| Light gold | `#f0e3cf` |
| Night | `#0b090a` |
| Type | Times · Edwardian Script · Typekit |

### Rename the brand

```bash
npm run rebrand -- "YOUR NAME"
```

Updates titles, wordmarks, and copy across the experience in one pass.

---

## ✦ Motion system

<div align="center">

<svg width="560" height="64" viewBox="0 0 560 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="560" height="64" rx="4" fill="#0b090a"/>
  <!-- scrolling chapter markers -->
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0; -180 0; 0 0" dur="8s" repeatCount="indefinite"/>
    <text x="24" y="28" font-family="Georgia, serif" font-size="12" fill="#c3a677" letter-spacing="3">GENÈSE</text>
    <text x="120" y="28" font-family="Georgia, serif" font-size="12" fill="#8a7348" letter-spacing="3">COLLECTION</text>
    <text x="260" y="28" font-family="Georgia, serif" font-size="12" fill="#c3a677" letter-spacing="3">MÉDIAS</text>
    <text x="360" y="28" font-family="Georgia, serif" font-size="12" fill="#8a7348" letter-spacing="3">BOUTIQUES</text>
    <text x="480" y="28" font-family="Georgia, serif" font-size="12" fill="#c3a677" letter-spacing="3">GENÈSE</text>
    <text x="576" y="28" font-family="Georgia, serif" font-size="12" fill="#8a7348" letter-spacing="3">COLLECTION</text>
  </g>
  <line x1="24" y1="44" x2="536" y2="44" stroke="#3a3a3a" stroke-width="1"/>
  <circle r="4" fill="#f0e3cf" cy="44">
    <animate attributeName="cx" values="24;536;24" dur="8s" repeatCount="indefinite"/>
  </circle>
</svg>

</div>

- **GSAP** — chapter reveals, scrubbed video, cinematic transitions  
- **Lenis** — buttery smooth scroll across the full narrative  
- **ScrollTrigger** — story panels locked to progress  
- **Custom cursor** — gold follower with contextual labels  

---

## ✦ Project map

```text
site/
├── index.html          ← the full experience
├── _nuxt/              ← runtime, styles, motion
├── fonts/              ← Times · Edwardian Script
├── images/             ← editorial photography
├── videos/             ← hero · chapters · film
└── pdfs/               ← mentions légales

scripts/
├── rebrand.mjs         ← rename the brand everywhere
└── mirror-site.mjs     ← refresh media & bundles
```

| Script | Purpose |
|:-------|:--------|
| `npm run dev` | Local preview on port `5173` |
| `npm run start` | Same as dev |
| `npm run rebrand -- "NAME"` | Apply a new brand name |
| `npm run mirror` | Refresh site assets |

---

<div align="center">

<svg width="480" height="56" viewBox="0 0 480 56" xmlns="http://www.w3.org/2000/svg">
  <text
    x="240"
    y="34"
    text-anchor="middle"
    font-family="Georgia, 'Times New Roman', serif"
    font-style="italic"
    font-size="18"
    fill="#c3a677"
    letter-spacing="2"
  >
    Qui se Ressemble, Rassemble
    <animate attributeName="letter-spacing" values="2;6;2" dur="4.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.55;1;0.55" dur="4.5s" repeatCount="indefinite"/>
  </text>
</svg>

<br/>

<sub>CAPITOLIUM · crafted for the screen</sub>

</div>
