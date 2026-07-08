# leovattoly.github.io — Personal Academic Website

Professional academic website of **Leo Vattoly**, served by GitHub Pages at
**https://leovattoly.github.io**.

Plain HTML + CSS — no frameworks, no build step. Edit a file, push, and the
live site updates automatically in ~1 minute.

## Site structure

| File | Purpose |
|---|---|
| `index.html` | Home — bio, research interests, News list |
| `research.html` | Research projects |
| `publications.html` | Preprints, papers, talks |
| `cv.html` | Education, experience, skills |
| `contact.html` | Contact details |
| `css/style.css` | All styling (colors at the top in `:root`) |
| `js/protect.js` | Image download protection |
| `img/` | Photos and logos |
| `_archive/` | Old template files (not published) |

## How to update the site

### Add a news item
Open `index.html`, find `<ul class="news">`, and add a new line **at the top**:
```html
<li><span class="date">Mar 2027</span> Your news text here.</li>
```

### Add a publication
Open `publications.html` and copy an existing `<div class="pub">...</div>`
block. Edit the title, authors, venue, status badge, and abstract.
**Do not link or upload the PDF** — details only.

### Add a new page/tab
1. Copy an existing page, e.g. `cp research.html teaching.html`, and edit its content.
2. Add the tab to the `<nav class="tabs">` block **in every page**:
   ```html
   <a href="teaching.html">Teaching</a>
   ```
   (set `class="active"` on that link only inside teaching.html itself).

### Change photo
Replace `img/profile_1.png` (keep the same filename) — the home page picks it
up automatically.

### Change colors
Edit the variables at the top of `css/style.css` (`--accent`, etc.).

## Publishing changes to GitHub (sync)

The site auto-deploys whenever you push to the `master` branch of
`Leovattoly/Leovattoly.github.io`. From this folder:

```bash
git add -A
git commit -m "Describe your change"
git push
```

If `git push` asks for credentials, use your GitHub username and a
**Personal Access Token** as the password (create one at
GitHub → Settings → Developer settings → Fine-grained tokens, with
*Contents: Read and write* permission on this repo).

Check deployment status at:
https://github.com/Leovattoly/Leovattoly.github.io/actions

## Privacy & image protection

- `.gitignore` excludes **all PDFs** (manuscripts, CV) and `_archive/` from
  GitHub — they stay only on your computer. Keep it that way: unpublished
  manuscripts should never be pushed to a public repo.
- Images cannot be right-clicked, dragged, or selected (`js/protect.js` +
  CSS). The profile photo is a CSS background, so there is no "Save image as"
  target. Note: no website can make images 100% un-downloadable (screenshots
  always work); this deters casual copying.
- The phone number and personal Gmail are deliberately **not** on the site —
  only the institutional email.

## Ideas for future extension

- `teaching.html` tab for courses/supervision
- Google Scholar / ORCID links on the Contact page once available
- Add DOI links to publications when papers are accepted
