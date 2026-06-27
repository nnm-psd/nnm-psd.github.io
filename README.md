# Personal Portfolio Website

A static, multilingual (EN / FR / VI) personal site with scroll-triggered animations. No build step, no framework — pure HTML/CSS/JS, ready for GitHub Pages.

## File structure

```
portfolio-website/
├── index.html          # all page content + section markup
├── css/styles.css       # design system + layout + animations
├── js/i18n.js            # translations (EN/FR/VI) + language switch logic
├── js/main.js            # mobile nav + scroll reveal logic
├── assets/projects/      # drop project screenshots here
├── assets/profile/       # drop a headshot here
└── assets/README.md      # how to wire images into the cards
```

## Preview locally

No install needed. Just open `index.html` in a browser, or for a closer-to-production preview run a tiny local server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy on GitHub Pages

1. Create a new repository on GitHub (e.g. `yourusername.github.io` for a root-domain site, or any name for a project site).
2. Push this folder's contents to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source → Deploy from a branch → `main` / `(root)`**.
4. Your site will be live at `https://yourusername.github.io/your-repo/` (or `https://yourusername.github.io/` if you used the root-domain repo name).

## What to customize before publishing

These are placeholders you should replace — search `index.html` for them:

- **Name in the nav logo**: currently set to "Minh" — add a surname if you'd like.
- **Education section**: degree names, institutions, years, and descriptions (`[Your degree...]`, `[University name...]`).
- **Experience section**: company name, dates, and bullet points (`[Company name]`).
- **Contact section**: real email, GitHub, and LinkedIn URLs (currently `your.email@example.com`, `github.com/yourusername`, etc.) — both the visible link text and the `href`/`mailto:` values.
- **Project links**: each project card has `Live demo →` and `Source →` links pointing to `#` — point these at your actual Streamlit/Hugging Face deployments and GitHub repos.
- **Translations**: the same placeholder strings exist in French and Vietnamese inside `js/i18n.js` — update the `fr` and `vi` objects to match whatever you change in English. The Vietnamese and French copy was machine-translated; have a native or fluent speaker skim it before publishing, especially the case-study section.

## Adding or removing a project

Each project is a `<article class="card">` block inside `<section id="projects">`. Copy an existing block, change its content, and add a matching translation key set under `proj.yourkey` in `js/i18n.js` for all three languages (`en`, `fr`, `vi`) if you want it translated.

## Changing colors or fonts

All design tokens live at the top of `css/styles.css` under `:root`. Change `--accent` to shift the whole site's accent color, or swap the Google Fonts `<link>` in `index.html`'s `<head>` plus the `--font-*` variables to change typefaces.

## Notes on the language switch

- Language preference is remembered via `localStorage`, so returning visitors see their last-chosen language.
- Default language is English; the toggle is in the top-right of the header.
- If you add new content with translatable text, give it a `data-i18n="some.key"` attribute, then add `some.key` to all three language objects in `js/i18n.js`.

## Accessibility & performance notes already built in

- Scroll animations respect `prefers-reduced-motion`.
- Keyboard focus is visible on all interactive elements.
- A skip-to-content link is included for screen reader / keyboard users.
- No external JS frameworks — fast load on GitHub Pages' CDN.