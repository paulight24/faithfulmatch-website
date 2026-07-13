# FaithfulMatch website

Static marketing, download, and legal-compliance website for the FaithfulMatch app. Plain HTML/CSS/JS — no build step, no framework, no database, no authentication.

## Local preview

No build tooling required. From this directory, run any static file server, for example:

```bash
npx serve .
# or
python3 -m http.server 8080
```

Then open `http://localhost:8080/` (or the port shown).

## Production build

None needed — this is already static, deployable as-is.

## GitHub Pages setup

1. Push this repo to GitHub.
2. In the repo's **Settings → Pages**, set the source to **GitHub Actions**.
3. The workflow at `.github/workflows/deploy-pages.yml` is set to **manual trigger only** (`workflow_dispatch`) so pushing commits will never auto-publish. When ready to go live, go to the **Actions** tab and manually run "Deploy static site to GitHub Pages."
4. Because this is served from a project path (`/faithfulmatch/`), all internal links in this site use **relative paths with no leading slash** (e.g. `privacy/`, not `/privacy/`) so they work correctly under both the GitHub Pages subpath and the eventual custom domain.

## Connecting faithfulmatch.love later

1. Rename `CNAME.example` to `CNAME` (no extension) at the repo root — GitHub Pages reads this file to know the custom domain.
2. Add a `CNAME`/`ALIAS` DNS record at your domain registrar pointing `faithfulmatch.love` (or `www`) at the GitHub Pages endpoint, per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
3. In repo **Settings → Pages**, enter the custom domain and enable "Enforce HTTPS" once DNS propagates.

## Enabling app store links

Edit `assets/js/config.js` — set `googlePlayUrl` and `appStoreUrl` to the real store listing URLs once published. Every "Coming Soon" badge and download button on the site reads from this one file.

## Structure

```
index.html                     Home page
privacy/index.html             Privacy Policy
terms/index.html               Terms of Service
account-deletion/index.html    Account deletion instructions
support/index.html             Support / help center
safety/index.html              Dating safety tips
community-guidelines/index.html
404.html                       Custom not-found page
assets/css/style.css           Shared styles (responsive, light/dark)
assets/js/main.js              Nav toggle + store-badge wiring
assets/js/config.js            Store URLs + support email (edit here)
assets/images/brand/           Copied from apps/mobile/src/assets/brand/
.github/workflows/deploy-pages.yml  Manual-trigger-only Pages deploy
```

See `REVIEW-NOTES.md` for legal/technical items that must be confirmed before this site is published or submitted to app stores.
