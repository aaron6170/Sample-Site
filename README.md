## RISE website (static)

This is a simple static site (no build step).

### Edit content

- Home: `index.html`
- About: `about.html`
- Programs: `programs.html`
- Contact: `contact.html`

Shared styles and behavior:

- CSS: `css/styles.css`
- JS: `js/site.js`

### Branding assets

Put your assets in `assets/`:

- `assets/logo.svg` (preferred) or `assets/logo.png`
- `assets/hero.jpg` (optional hero image)
- `assets/favicon.svg` (optional)

Then update the CSS variables in `css/styles.css` under `:root` (colors + fonts).

### Run locally

Open any HTML file in your browser (double-click), or run a tiny server:

```bash
cd Sites/rise
python3 -m http.server 5173
```

