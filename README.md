# 🎬 GSAP Animation Learning Project

A hands-on project to learn and practice **GSAP (GreenSock Animation Platform)** animation fundamentals.

## 🛠️ Tech Stack

| Technology | Version / Details |
|---|---|
| **HTML5** | Page structure & semantic markup |
| **CSS3** | Custom styling (Gilroy font, dark theme) |
| **JavaScript (ES6)** | Animation logic & interactivity |
| **GSAP** | v3.13.0 (via CDN — [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js)) |

## 📂 Project Structure

```
GSAP/
├── index.html      # Main HTML page
├── style.css       # Styles (dark theme, navbar, box elements)
├── script.js       # GSAP animation scripts
└── README.md       # Project documentation
```

## ✅ What's Been Covered

- **GSAP Basics** — `gsap.to()` and `gsap.from()` methods
- **Box Animations** — Translating, rotating, scaling, and color-changing box elements
- **Text Animations** — Fade-in and slide effects on headings (`h1`, `h2`, `h4`)
- **Stagger** — Sequential animation delays across multiple elements
- **Repeat & Yoyo** — Looping animations with reverse playback (explored in comments)
- **GSAP Timelines** — Sequencing animations with `gsap.timeline()` for navbar & heading animations
- **Navbar Animation** — Animated navbar entry with staggered nav link reveals

## 🎨 Key GSAP Features Used

| Feature | Description |
|---|---|
| `gsap.to()` | Animates elements **to** specified property values |
| `gsap.from()` | Animates elements **from** specified values to their natural state |
| `gsap.timeline()` | Chains multiple animations in sequence |
| `stagger` | Offsets animation start times across a set of elements |
| `duration` | Controls animation length |
| `delay` | Adds wait time before an animation starts |
| `rotate` | Rotates elements by a given degree |
| `scale` | Scales elements up or down |
| `opacity` | Fades elements in or out |
| `borderRadius` | Animates corner rounding (square → circle) |
| `backgroundColor` | Smoothly transitions between colors |

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Ashishkumar-NIT/GSAP-learn-phase.git
   ```
2. Open `index.html` in your browser — no build tools or server required.

## 📝 Notes

- GSAP is loaded via **CDN**, so an internet connection is needed on first load.
- The project uses a **dark theme** (`#111` background, white text) with the **Gilroy** font family.
- Some animation experiments are preserved as **commented-out code** in `script.js` for reference.