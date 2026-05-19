# IBM React Website — indubbmishra.github.io

React + Vite personal website with 8 separate pages, deployable to GitHub Pages.

## Pages / Routes

| Page | Route |
|------|-------|
| Home (Hero) | `/#/` |
| About | `/#/about` |
| Impact | `/#/impact` |
| Experience | `/#/experience` |
| Expertise | `/#/expertise` |
| Case Studies | `/#/case-studies` |
| AI Initiatives | `/#/ai-initiatives` |
| Connect | `/#/connect` |

---

## Local Development

```bash
npm install
npm run dev
```
Open http://localhost:5173

---

## Deploy to GitHub Pages

### Option 1 — Automatic (GitHub Actions) [Recommended]

1. Push this entire project to the `main` branch of your `indubbmishra.github.io` repo.
2. GitHub Actions (`.github/workflows/deploy.yml`) will automatically build and deploy on every push.
3. In your GitHub repo → **Settings → Pages**, set the source to:
   - **Branch:** `gh-pages` | **Folder:** `/ (root)`
4. Your site will be live at https://indubbmishra.github.io

### Option 2 — Manual (one-time)

```bash
npm run deploy
```
This builds the project and pushes the `dist/` folder to the `gh-pages` branch.

---

## PDF Files

The AI Initiatives page embeds two PDFs:
- `public/Prompt_Framework.pdf`
- `public/Extensions_Tools.pdf`

These are already included in the `public/` folder and will be copied to `dist/` on build.

---

## Tech Stack

- **React 18** + **React Router v6** (HashRouter for GitHub Pages)
- **Vite 5** for fast builds
- **gh-pages** for manual deployment
- **GitHub Actions** for automated CI/CD
