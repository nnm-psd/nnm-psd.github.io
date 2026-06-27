# Image folders

- `assets/projects/` — drop one image per project here (e.g. a screenshot of each Streamlit app).
- `assets/profile/` — drop a headshot or hero visual here if you want one.

## How to actually show an image instead of the placeholder number

In `index.html`, each project card currently has a placeholder block like this:

```html
<div class="card-image"><span class="mono">01</span></div>
```

Replace it with an `<img>` tag pointing at your file, for example:

```html
<div class="card-image">
  <img src="assets/projects/pea-risk-lab.png" alt="PEA Risk Lab dashboard screenshot">
</div>
```

Then add this to `css/styles.css` so the image fills the box cleanly:

```css
.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

Recommended size: roughly 800×450px (16:9), exported as `.png` or `.webp` to keep file size small.
