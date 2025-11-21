# MOODI - React Merch Scaffold

This is a minimal Vite + React scaffold to reproduce the merch page in your attachment. It uses plain React components and vanilla CSS so you can replace any component (for example `Navbar` or `Footer`) with completely different code when you want.

Quick start

1. Open a bash terminal in this folder (`c:/Users/kovid/OneDrive/Desktop/MOODI`).
2. Install dependencies:

```bash
npm install
```

3. Run the dev server:

```bash
npm run dev
```

Notes
- The hero texture image you added is expected at `/texture.png` in the project root (I saw `texture.png` in this folder). The CSS also tolerates other locations; if you want to use `public/moodi/texture.png` instead, move the file there and update the path in `src/index.css` or keep as-is.
- Replace `src/components/Navbar.jsx` or `src/components/Footer.jsx` to change those sections completely — the rest of the app will still work.
- `src/components/Carousel.jsx` accepts `items`, `visibleCount` and `renderItem` props so it's reusable and editable.
