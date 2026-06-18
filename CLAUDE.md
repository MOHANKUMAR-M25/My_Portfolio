# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint over the project (`eslint .`)

There is no test runner configured in this project.

## Architecture

This is a single-page personal portfolio for "Mohankumar M" built with **React 19** and **Vite 8**. There is no router and no global state — `src/App.jsx` renders a fixed top-to-bottom sequence of self-contained section components: `Preloader`, `Navbar`, `Hero`, `About`, `Services`, `Experience`, `Contact`, `Footer`.

Key cross-cutting facts that aren't obvious from a single file:

- **Navigation is anchor-based, not routed.** `Navbar` links point to fragment ids (`#home`, `#about`, …) and each section component owns a matching `id` on its root element (e.g. `Hero` is `id="home"`). `scroll-behavior: smooth` is set globally in `src/index.css`. Adding a nav entry means adding both the link in `Navbar` and a section with the corresponding `id`.

- **AOS (scroll-reveal animations) is initialized once, globally, inside `Hero.jsx`'s `useEffect`.** Every `data-aos="..."` attribute across all components depends on that single `AOS.init(...)` call. If `Hero` is removed or that effect is changed, scroll animations break site-wide.

- **Two separate animation systems are in use:** `framer-motion` (used for the `Preloader` shutter/water-fill transition via `AnimatePresence`) and `aos` (declarative `data-aos` attributes on section content). Custom AOS animations and keyframes (e.g. `drop-bounce`, `float`) are defined in `src/index.css`.

- **Tailwind CSS v4** is wired through the `@tailwindcss/vite` plugin (`vite.config.js`) — there is **no `tailwind.config.js`**. Theme customization (custom animations, design tokens) goes in the `@theme { ... }` block at the top of `src/index.css`, which also holds `@import "tailwindcss"`.

- **Brand palette:** primary blue `#0033A0`, accent `cyan-400`/`cyan-300`, on a black background with white text (set on `body` in `src/index.css`). Reuse these when adding UI.

- Styling is otherwise inline Tailwind utility classes in JSX. `src/App.css` is leftover Vite-template CSS (`.hero`, `#next-steps`, etc.) and is **not imported anywhere** — treat it as dead code rather than active styling.

- Assets (profile image, skill logos, hero background video) live under `src/assets/` and are imported directly into components so Vite bundles/hashes them.
