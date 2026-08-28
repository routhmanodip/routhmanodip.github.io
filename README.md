# Personal Portfolio

A simple, responsive personal portfolio site — plain HTML, CSS, and JavaScript,
no build step. Ready to host for free on GitHub Pages.

## Files

| File | What it is |
|------|------------|
| `index.html` | Page structure and content. Look for `<!-- EDIT: ... -->` comments to customize. |
| `styles.css` | All styling and the light/dark theme tokens. |
| `script.js`  | Theme toggle + footer year. |

## Preview locally

Just open `index.html` in your browser. Or, for a live local server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deploy to GitHub Pages

1. Create a new repository on GitHub.
   - For a site at `https://<username>.github.io`, name the repo **`<username>.github.io`**.
   - For a project site at `https://<username>.github.io/<repo>`, name it anything (e.g. `portfolio`).
2. Push this folder:

   ```bash
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   choose `main` / `root`, and Save. Your site goes live in a minute or two.

## Customize

- Replace the `<!-- EDIT -->` placeholders in `index.html` (name, bio, projects, links, email).
- Swap the monogram for a real photo: add `profile.jpg` next to `index.html` and
  replace the `.photo-frame` block with `<img src="profile.jpg" alt="Manodip Routh" />`.
- Tweak colors in the `:root` / `[data-theme="dark"]` blocks at the top of `styles.css`.
