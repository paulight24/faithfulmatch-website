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

## Current hosting: Hostinger subdirectory (temporary)

This site is currently deployed at `https://empoweredforwealth.com/faithfulmatch/` — uploaded directly into `public_html/faithfulmatch/` on Hostinger, **not** GitHub Pages. All internal links use **relative paths with no leading slash** (e.g. `privacy/`, not `/privacy/`) specifically so the same file set works unmodified from a subdirectory, from a domain root, or from GitHub Pages — no path rewriting needed when you move it later.

Canonical URLs and Open Graph tags in every page currently point at `https://empoweredforwealth.com/faithfulmatch/` to match this temporary host. Search for `empoweredforwealth.com/faithfulmatch/` across all `index.html` files when it's time to swap to the real domain (see below).

## GitHub Pages setup (alternative / not currently used)

1. Push this repo to GitHub.
2. In the repo's **Settings → Pages**, set the source to **GitHub Actions**.
3. The workflow at `.github/workflows/deploy-pages.yml` is set to **manual trigger only** (`workflow_dispatch`) so pushing commits will never auto-publish. When ready to go live, go to the **Actions** tab and manually run "Deploy static site to GitHub Pages."

## Moving to faithfulmatch.love later

1. Find-and-replace `https://empoweredforwealth.com/faithfulmatch/` → `https://faithfulmatch.love/` across every `index.html` file's `<link rel="canonical">` and `og:url`/`og:image` tags (only 7 files, one line each — grep for `empoweredforwealth.com` to find them all).
2. Since every internal link is relative, moving the same file set from a subdirectory to a domain root needs **no other changes** — `index.html`, `privacy/index.html`, etc. all resolve correctly either way.
3. If moving to GitHub Pages instead of another host: rename `CNAME.example` to `CNAME` at the repo root, add a DNS `CNAME`/`ALIAS` record pointing `faithfulmatch.love` at the GitHub Pages endpoint, then enter the custom domain in **Settings → Pages** and enable "Enforce HTTPS."
4. If moving to another host's root (e.g. Hostinger root instead of a subdirectory): just upload the same files to the new location's root — nothing to edit besides the canonical/OG URLs in step 1.

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
