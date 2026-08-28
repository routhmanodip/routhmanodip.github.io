# Manodip Routh — Academic Homepage

Personal academic website for Manodip Routh, Ph.D. — plain HTML, CSS, and
JavaScript, no build step. Hosted for free on GitHub Pages.

Sections: About · Research · Publications · CV · Contact.

## Files

| File | What it is |
|------|------------|
| `index.html` | Page content. Look for `<!-- EDIT: ... -->` comments to update. |
| `styles.css` | Styling + light/dark theme tokens (academic maroon accent). |
| `script.js`  | Dark/light toggle + auto footer year. |
| `profile.jpg`| Your portrait, shown in the About section. |

## Preview locally

```bash
cd /Users/manodip/Desktop/github-website
python3 -m http.server 8000
```

Then open http://localhost:8000 — edit a file, save, and refresh to see changes.
Press Ctrl+C to stop the server.

## Publish to GitHub Pages

This repo is currently **private**, so Pages is off. To go live:

1. On GitHub: **Settings → General → (bottom) Change visibility → Public**.
2. Push any local changes:

   ```bash
   git add .
   git commit -m "Update site content"
   git push
   ```

3. **Settings → Pages → Source: Deploy from a branch → `main` / `root` → Save.**

Your site goes live at **https://routhmanodip.github.io** in a minute or two.

## Common edits

- **News:** add a new `<li>` at the top of the `.news-list` in `index.html`.
- **Publications:** copy a `<li class="pub">…</li>` block into the right year.
  Wrap your own name in `<strong>M. Routh</strong>` to bold it.
- **Accent color:** change `--accent` / `--accent-2` at the top of `styles.css`.
- **Photo:** replace `profile.jpg` with any image of the same name.
