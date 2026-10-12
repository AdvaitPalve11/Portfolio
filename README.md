# Advait Palve — Portfolio

Minimalist developer portfolio for **Advait Palve**, built with Astro and Tailwind. It highlights systems programming, kernel architecture, and computer graphics projects with a dark terminal-inspired interface.

## Overview

This portfolio is designed to feel like a low-level systems dashboard: dark surfaces, subtle grid lines, green terminal accents, and lightweight tooling without unnecessary runtime bloat.

It focuses on two flagship projects:

- [SyndromeOS](https://github.com/AdvaitPalve11/SyndromeOS)
- [Simple-RayTracer](https://github.com/AdvaitPalve11/Simple-RayTracer)

## Tech stack

- Astro
- Tailwind CSS
- Lucide Astro icons
- Static assets for GIF demos and resume PDF

## Project structure

```bash
Portfolio/
├── astro.config.mjs
├── package.json
├── README.md
├── tailwind.config.mjs
├── public/
│   └── assets/
│       ├── BootImage.png
│       ├── cameraShowCase.gif
│       ├── syndromeos-demo.gif
│       ├── raytracer-demo.gif
│       └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   └── ProjectCard.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── dist/                  # generated build output
```

## Local development

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Then open:

- http://localhost:4321

## Production build

```bash
npm run build
```

Preview the output locally with:

```bash
npm run preview -- --host 0.0.0.0
```

## Contact

- Email: palveadvait@gmail.com
- GitHub: https://github.com/AdvaitPalve11
- LinkedIn: https://www.linkedin.com/in/advaitpalve
