# Muhammad Furqan Arshad — Portfolio

Personal portfolio site built to showcase my work as a Computer Science undergraduate and full-stack developer, designed and built from scratch with a focus on distinctive motion and interaction rather than a templated layout.

**Live site:** _https://furqanarshad.vercel.app/_

## Overview

A single-page portfolio covering Home, About, Skills, Projects, Experience, Education, and Contact, with a dark-first, technical/engineered visual identity built around a custom motion system, section-aware navigation, and interactive project cards.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Smooth scrolling:** Lenis
- **Icons:** React Icons
- **Deployment:** Vercel

## Key Features

- **Custom section-aware scrollbar** — replaces the native scrollbar with a tick-mark navigator that tracks scroll progress and highlights the active section, synced to smooth scrolling via Lenis
- **Interactive project cards** — 3D cursor-tilt effect on hover, respecting `prefers-reduced-motion`
- **Animated background network** — an ambient, self-reorganizing node network in the Hero section that responds to cursor proximity
- **Instant in-page navigation** — header links jump immediately to sections, independent of the scrollbar's smooth-scroll behavior
- **Light/dark theme toggle** — persisted across visits, with no flash of incorrect theme on load
- **Accessible by design** — skip-to-content link, visible focus states, reduced-motion support throughout

## Project Structure

```
src/
├── app/                  # App Router pages, layout, and metadata
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Home, About, Skills, Projects, Experience, Education, Contact
│   ├── motion/           # Reusable animated primitives (tilt cards, node network, etc.)
│   └── providers/        # Theme and smooth-scroll context providers
├── lib/                  # Shared data, animation/motion config, section metadata
└── types/                # Shared TypeScript types
```

## Running Locally

```bash
git clone https://github.com/DevFurqanAI/FurqanArshad.git
cd FurqanArshad
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Building for Production

```bash
npm run build
npm start
```

## Contact

- **Email:** _(see Contact section on the live site)_
- **LinkedIn / GitHub:** _(see Contact section on the live site)_

---

Built and designed independently by Muhammad Furqan Arshad.