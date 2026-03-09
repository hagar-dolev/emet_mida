# AI Misinformation & Legal Gaps — Knowledge Hub

A simple, component-based static website (React + TypeScript + Vite) for a public-service-style knowledge hub on AI-enabled misinformation, legal gaps, and practical guidance. Built for deployment to **GitHub Pages**.

---

## Local development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the dev server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173). The app uses React Router; base path is `/` in development.

---

## Build

- **Production build** (for deployment; use correct base path for your host):
  ```bash
  npm run build
  ```
  Output is in `dist/`.

- **Build with GitHub Pages base path** (e.g. if your repo is `my-repo` and the site will be at `https://<user>.github.io/my-repo/`):
  ```bash
  VITE_BASE_PATH=/my-repo/ npm run build
  ```
  Replace `my-repo` with your actual repository name.

- **Preview the production build locally**
  ```bash
  npm run preview
  ```
  If you built with a base path, preview may need to be run with the same base (e.g. open the URL Vite prints).

---

## Deploy to GitHub Pages (GitHub Actions — recommended)

1. **Push the repo to GitHub** (if you haven’t already).

2. **Enable GitHub Pages and set source**
   - Go to the repo → **Settings** → **Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.

3. **Trigger deployment**
   - The included workflow (`.github/workflows/deploy.yml`) runs on push to `main` and on manual dispatch.
   - It builds with base path `/<repository-name>/` and deploys the `dist` folder to GitHub Pages.
   - After it runs, the site will be at:  
     `https://<username>.github.io/<repository-name>/`

4. **Optional: change the default branch**  
   If your default branch is not `main`, edit `.github/workflows/deploy.yml` and change `branches: [main]` to your branch (e.g. `master`).

No `gh-pages` package or manual upload is required; the workflow handles the build and deploy.

---

## Deploy using `gh-pages` (alternative)

If you prefer to deploy from your machine with the `gh-pages` package:

1. **Install**
   ```bash
   npm install -D gh-pages
   ```

2. **Add a deploy script** in `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
   Then run:
   ```bash
   VITE_BASE_PATH=/YOUR_REPO_NAME/ npm run build
   npx gh-pages -d dist
   ```
   Replace `YOUR_REPO_NAME` with your GitHub repository name.  
   **Note:** With `gh-pages`, the build must use the same base path as the GitHub Pages URL (e.g. `/my-repo/`), so run the build with `VITE_BASE_PATH=/my-repo/` before `gh-pages -d dist`.

---

## How to add a new guide (about 1 minute)

1. **Open** `src/content/guides.tsx`.

2. **Add an entry to `guidesIndex`** (meta for the guides listing):
   ```ts
   {
     slug: 'my-new-guide',
     title: 'My new guide',
     summary: 'One-line description.',
     tags: ['tag1', 'tag2'],
     readingTime: 5,  // optional, minutes
   },
   ```

3. **Define sections** (same file), e.g.:
   ```ts
   const myNewGuideSections: GuideSection[] = [
     {
       id: 'section-1',
       title: 'First section',
       content: (
         <>
           <p>Paragraph one.</p>
           <ul><li>Bullet.</li></ul>
         </>
       ),
     },
   ];
   ```

4. **Add the full guide to `guidesBySlug`**:
   ```ts
   'my-new-guide': {
     ...guidesIndex[n],  // use the index of the entry you added in step 2
     tocItems: myNewGuideSections.map((s) => ({ id: s.id, label: s.title, level: 1 })),
     sections: myNewGuideSections,
     references: [
       { title: 'Some source', url: 'https://...', note: 'Optional note' },
     ],
   },
   ```
   Make sure the `...guidesIndex[n]` refers to the correct entry (same slug).

5. **Save.** The new guide will appear on `/guides` and at `/guides/my-new-guide`.

---

## Project structure (overview)

```
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions: build + deploy to Pages
├── public/                 # (optional) static assets
├── src/
│   ├── components/        # Reusable UI: Header, Footer, Navbar, Button, Card,
│   │                      # Callout, Accordion, Tag, PageLayout, TableOfContents, GuideLayout
│   ├── content/
│   │   └── guides.tsx     # Guide data + content (add new guides here)
│   ├── pages/             # Route pages: Home, GuidesIndex, GuidePage, Legal, Tech, Proposal, NotFound
│   ├── styles/
│   │   └── global.css     # CSS variables (theme), reset, base styles
│   ├── App.tsx            # Routes
│   └── main.tsx           # Entry (Router with basename from Vite base)
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts         # base path from VITE_BASE_PATH for Pages
```

---

## Key files to edit for content

| Goal                     | File(s) |
|--------------------------|--------|
| Add or edit guides       | `src/content/guides.tsx` |
| Home hero, feature cards | `src/pages/Home.tsx` + `Home.module.css` |
| Legal page / FAQ         | `src/pages/Legal.tsx` |
| Tech page / callout      | `src/pages/Tech.tsx` |
| Proposal / contact       | `src/pages/Proposal.tsx` |
| Site name, nav links     | `src/components/Header/Header.tsx`, `src/components/Navbar/Navbar.tsx` |
| Footer disclaimer        | `src/components/Footer/Footer.tsx` |
| Global theme (colors, spacing) | `src/styles/global.css` |

---

## RTL / Hebrew

The site is set up for **right-to-left (RTL)** and Hebrew:

- **`index.html`**: `lang="he"` and `dir="rtl"` on `<html>`. Layout and text flow RTL.
- **Fonts**: [Heebo](https://fonts.google.com/specimen/Heebo) is loaded for Hebrew-friendly UI text.
- **CSS**: Uses logical properties (`margin-inline`, `padding-inline-start`, `border-inline-start`, `text-align: start`, `inset-inline-start`) so layout flips correctly in RTL. Lists, callouts, accordions, and the guide TOC all respect direction.
- **Icons**: The “next” chevron on guide cards is flipped in RTL so it points in the reading direction.

To switch to LTR (e.g. for an English-only version), change `<html>` to `lang="en"` and remove `dir="rtl"` (or set `dir="ltr"`).

## Tech stack

- **React 18** + **TypeScript**
- **Vite** (static build)
- **React Router** (client-side routing; base path respected for GitHub Pages)
- **CSS Modules** + global CSS variables (no Tailwind)
- **RTL-first** layout (logical CSS, Hebrew-friendly fonts)
- **GitHub Actions** for deploy to GitHub Pages

---

## Disclaimer

This site is for informational and educational purposes only. It does not constitute legal advice. Consult a qualified professional for legal or compliance matters. See the footer on the site for the same disclaimer.
