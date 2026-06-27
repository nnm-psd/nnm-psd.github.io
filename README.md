# Personal Portfolio Website

A minimal, typography-led personal site (EN / FR / VI), modeled on [taniarascia.com](https://www.taniarascia.com/) — a narrow centered column, simple list-style sections, and a light/dark theme toggle. No build step, no framework, no cards or dashboards — pure HTML/CSS/JS, ready for GitHub Pages.

## File structure

```
nnm-psd.github.io/
├── index.html         # all page content + section markup
├── css/styles.css      # design tokens (light + dark) + layout
├── js/i18n.js           # translations (EN/FR/VI) + language switch logic
├── js/main.js           # theme toggle + scroll reveal logic
└── profile.jpg          # your photo — add this file (see below)
```

## Adding your photo

The hero section references `profile.jpg` (a circular avatar next to "Hey, I'm Minh!"). Add a photo to the repo root with that exact filename — a square image roughly 200×200px or larger works best, since it's cropped to a circle with `object-fit: cover`. If you'd rather use a different filename or format (e.g. `.png`), update the `src="profile.jpg"` in `index.html`'s hero section to match.

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

- **Name in the logo**: currently set to "Minh" — add a surname if you'd like.
- **Hero bio**: the intro paragraph and Email/GitHub/LinkedIn links under "Hey, I'm Minh!".
- **Education section**: degree names, institutions, years, and descriptions (`[Your degree...]`, `[University name...]`).
- **Experience section**: company name, dates, and bullet points (`[Company name]`).
- **Certifications section**: three placeholder entries (`[Certification name]`, `[Issuing organization]`) — replace with your real certifications, or delete the `<div class="item">` blocks you don't need.
- **Contact section**: real email, GitHub, and LinkedIn URLs (currently `your.email@example.com`, `github.com/yourusername`, etc.) — both the visible link text and the `href`/`mailto:` values.
- **Project links**: each project entry has `Demo` and `Source` links pointing to `#` — point these at your actual Streamlit/Hugging Face deployments and GitHub repos.
- **Translations**: the same placeholder strings exist in French and Vietnamese inside `js/i18n.js` — update the `fr` and `vi` objects to match whatever you change in English. The Vietnamese and French copy was machine-translated; have a native or fluent speaker skim it before publishing, especially the case-study section.

## Adding or removing a project

Each project is a `<div class="item">` block inside `<section id="projects">`. Copy an existing block, change its content, and add a matching translation key set under `proj.yourkey` in `js/i18n.js` for all three languages (`en`, `fr`, `vi`) if you want it translated.

## Changing colors or fonts

All design tokens live at the top of `css/styles.css` under `:root` (light theme) and `[data-theme="dark"]` (dark theme). Change `--accent` in both blocks to shift the link/accent color, or swap the Google Fonts `<link>` in `index.html`'s `<head>` plus `--font-body` to change the typeface.

## Notes on the toggles

- **Language**: remembered via `localStorage`. Default is English.
- **Theme**: remembered via `localStorage`; if nothing is saved yet, it follows the visitor's OS-level light/dark preference.
- If you add new content with translatable text, give it a `data-i18n="some.key"` attribute, then add `some.key` to all three language objects in `js/i18n.js`.

## Accessibility & performance notes already built in

- Scroll animations respect `prefers-reduced-motion`.
- Keyboard focus is visible on all interactive elements.
- A skip-to-content link is included for screen reader / keyboard users.
- No external JS frameworks — fast load on GitHub Pages' CDN.