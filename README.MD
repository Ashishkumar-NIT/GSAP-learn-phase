# GSAP Learning Project

This repository is a day-by-day practice project for learning GSAP (GreenSock Animation Platform) fundamentals in plain HTML, CSS, and JavaScript.

The project focuses on building animation intuition through small, isolated exercises:
- Day 1: Core GSAP methods and timelines
- Day 2: Scroll-based animations with ScrollTrigger
- Day 3: Interactive SVG path animation with mouse events

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- GSAP 3.13.0 (CDN)
- GSAP ScrollTrigger plugin (used in Day 2)

## Project Structure

```text
GSAP/
|-- README.MD
|-- day1/
|   |-- index.html
|   |-- style.css
|   |-- script.js
|   `-- README.md
|-- day2/
|   |-- index.html
|   |-- style.css
|   |-- script.js
|   `-- README.md
`-- day3/
	|-- index.html
	|-- style.css
	`-- script.js
```

## What Each Day Covers

## Day 1: GSAP Basics and Timeline

Day 1 includes:
- Intro animations for navbar text (`h2`, `h4`) and heading (`h1`) using `gsap.timeline()`
- Sequential motion and reveal effects using `from()` with `stagger`
- Box animation practice with position, rotation, scale, border radius, and background color changes

Concepts practiced:
- `gsap.from()` and `gsap.to()`
- `duration`, `delay`, `stagger`
- `timeline()` sequencing

## Day 2: ScrollTrigger Practice

Day 2 is a scroll-driven layout with three full-screen sections.

Main animation:
- Large `EXPERIENCES` heading in `#page2` moves horizontally while scrolling
- Section is pinned during the animation
- Scrub behavior links animation progress to scroll position

Concepts practiced:
- `ScrollTrigger`
- `trigger`, `start`, `end`
- `scrub`, `pin`, and debug `markers`

## Day 3: Interactive SVG String Effect

Day 3 creates a string-like interaction using an SVG path and mouse movement.

Behavior:
- On `mousemove`, the curve control point follows the cursor
- On `mouseleave`, the path returns to a straight line with an elastic ease

Concepts practiced:
- SVG path `d` attribute animation with GSAP `attr`
- Mouse event handling (`mousemove`, `mouseleave`)
- Elastic easing for natural motion

## How to Run

1. Open this folder in VS Code.
2. Open any day folder (`day1`, `day2`, or `day3`).
3. Launch that day's `index.html` in your browser.

No build tools are required.

## Notes

- GSAP and ScrollTrigger are loaded via CDN.
- Internet connection is required when loading CDN files.
- Each day is intentionally standalone so you can experiment safely without affecting other exercises.
