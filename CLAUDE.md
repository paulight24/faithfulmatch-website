# FaithfulMatch Website

Static marketing and landing website for the FaithfulMatch dating app. Contains home page, privacy policy, terms of service, account deletion instructions, support/help center, dating safety tips, community guidelines, and email verification page.

## E4W De Team Project

This project is managed by the E4W De Team. See `~/projects/e4wDevTeam/CLAUDE.md` for team workflow and delivery loop.

## Architecture

Pure static site — no framework, no build step, no dependencies.

```
faithfulmatch-website/
├── index.html              → Home / landing page
├── 404.html                → Custom 404
├── privacy/index.html      → Privacy policy
├── terms/index.html        → Terms of service
├── account-deletion/       → Account deletion instructions
├── support/                → Help center
├── safety/                 → Dating safety tips
├── community-guidelines/   → Community guidelines
├── verify-email/           → Email verification page
├── assets/
│   ├── css/style.css       → Single stylesheet
│   ├── js/main.js, config.js → Vanilla JS
│   └── images/brand/       → Logos (SVG, PNG)
├── .github/workflows/      → GitHub Actions deploy
└── CNAME.example           → Future custom domain setup
```

## Tech Stack

- HTML5, CSS3, vanilla JavaScript
- Zero npm dependencies (no package.json)
- No build tooling

## Deployment

- **Current**: GitHub Pages (manual trigger via GitHub Actions)
  - Workflow: `.github/workflows/deploy-pages.yml` (workflow_dispatch)
- **Current URL**: faithfulmatch.love (own domain, Hostinger; DNS live since 2026-09-06)
- **Previous URL**: empoweredforwealth.com/faithfulmatch/ (temporary subdirectory, now superseded)
- **Planned domain**: faithfulmatch.love

## Development

No build step. Open `index.html` in a browser or use any static file server:

```bash
npx serve .
# or
python -m http.server
```

## Conventions

- Each page in its own folder with `index.html` for clean URLs
- All styles in `assets/css/style.css`
- All JS in `assets/js/`
- Images in `assets/images/brand/`
- No frameworks — keep it simple and fast-loading
