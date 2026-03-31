# GSAP Learning Project

This repository is a day-by-day learning series for GSAP (GreenSock Animation Platform) using plain HTML, CSS, and JavaScript.

It is designed to help you build animation intuition through focused mini-projects. Each day is standalone, so you can experiment without affecting other days.

## Learning Goals

- Understand core GSAP animation methods and options
- Learn timeline-based sequencing for cleaner animation orchestration
- Build scroll-driven animations with ScrollTrigger
- Create interactive animation behavior based on mouse events
- Practice translating visual ideas into reusable motion patterns

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- GSAP v3.13.0 (CDN)
- ScrollTrigger plugin (Day 2)

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

## Day-by-Day Breakdown

## Day 1: GSAP Basics and Timelines

Focus:
- Intro and entry animations for headings and navbar content
- Sequenced motion using `gsap.timeline()`
- Element transformation practice with boxes

Concepts practiced:
- `gsap.from()` and `gsap.to()`
- `duration`, `delay`, and `stagger`
- Timeline sequencing and relative animation order
- Transform properties like `x`, `y`, `rotate`, `scale`, and `borderRadius`

Outcome:
- You learn how to compose simple but polished entrance animations and coordinate multiple elements without writing repeated timing logic.

## Day 2: ScrollTrigger Fundamentals

Focus:
- Scroll-linked animation behavior across multi-section layout
- Pinning sections and syncing motion progress with scroll

Concepts practiced:
- `ScrollTrigger` setup and registration
- `trigger`, `start`, `end`
- `scrub` and `pin`
- `markers` for debugging during development

Outcome:
- You understand how to map scroll position to animation progress and create more immersive, narrative-style motion on long pages.

## Day 3: Interactive SVG String Effect

Focus:
- Cursor-driven SVG path deformation
- Natural return motion with elastic easing

Concepts practiced:
- Animating SVG `path` `d` values with GSAP `attr`
- Mouse events: `mousemove` and `mouseleave`
- Real-time interaction patterns and easing design

Outcome:
- You build an interactive effect that reacts to user input and feels physically responsive.

## How to Run

1. Open this project in VS Code.
2. Open any day folder (`day1`, `day2`, or `day3`).
3. Run that day's `index.html` in your browser.

No build setup is required.

## Suggested Practice Workflow

1. Run one day at a time and observe the animation behavior.
2. Tweak one property at a time (for example `duration` or `stagger`) and compare the result.
3. Add one custom element and animate it using the same pattern.
4. Refactor repeated values into variables for cleaner animation code.
5. Keep `markers` enabled while learning ScrollTrigger, then disable for final output.

## Common Customizations You Can Try

- Replace linear motion with easing combinations (`power`, `expo`, `elastic`)
- Convert absolute timings into timeline offsets
- Add hover-triggered micro-interactions for buttons or cards
- Extend Day 2 by animating multiple sections with independent triggers
- Add touch/mobile interaction fallback behavior for Day 3

## Notes

- GSAP and ScrollTrigger are loaded through CDN links.
- Internet connection is required to load CDN assets.
- Each day is intentionally isolated for safe experimentation.