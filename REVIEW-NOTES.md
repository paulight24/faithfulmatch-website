# Internal review notes — NOT for publication

This file lists everything on the site that is a placeholder, unconfirmed, or requires a decision before this site goes live. Do not copy this file's contents to any public page.

## Legal (needs an actual lawyer, not just Claude)

- **Effective date / Last updated date** — every legal page (`privacy/`, `terms/`) has a placeholder. Needs a real date once the policy is final.
- **Terms §14 Limitation of Liability** — placeholder language, needs real legal review.
- **Terms §15 Governing law / dispute resolution / arbitration** — completely placeholder, needs a lawyer to pick a jurisdiction and arbitration approach.
- **Account deletion processing period** — no real number exists yet (e.g. "30 days"). Business needs to decide and confirm.
- **California privacy rights section** — written generically; if you have meaningful CA/CCPA traffic, have counsel review whether more specific CCPA disclosures (e.g. "Do Not Sell/Share" link) are required.

## Technical details requiring confirmation before publishing

- **AI provider(s) actually active in production** — per project memory, the app currently defaults to Gemini with Groq/OpenAI wired as swappable alternatives. The Privacy Policy currently says "a third-party AI provider" generically and flags this vendor name as unconfirmed. Before publishing, either (a) name the specific active provider(s), or (b) confirm the generic language is acceptable to legal/product.
- **Hosting/infrastructure provider names** — Privacy Policy section 5 doesn't name Hostinger (planned host) or the MySQL database explicitly. Confirm whether to name them or keep generic.
- **Email vendor** — currently console-only in dev, no real transactional email provider is wired. If/when one is added (e.g. for password reset emails), the Privacy Policy should name it.
- **Data retention periods** — Privacy Policy §6 has no specific retention timeframe. Needs a business decision.
- **"Encrypted," "anonymized," "never sold," "deleted within X days"** — none of these specific claims were added anywhere on the site, deliberately, since the current code/practice doesn't confirm them. If any become true (e.g. you confirm TLS everywhere, or add real anonymization), the Privacy Policy can be strengthened — but don't add these claims without verifying against the actual implementation first.
- **Photo/cloud storage vendor** — app currently uses local-disk photo storage (no cloud storage vendor). If you migrate to S3/Cloudinary/etc. before launch, update Privacy Policy section 5.

## Content placeholders on the live pages

- **Testimonials section** (home page) — intentionally a placeholder ("coming soon"), per your instruction not to invent quotes. Replace once you have real, permission-cleared member testimonials.
- **"Spiritual encouragement" screenshot slot** — still a dashed-border placeholder marked "Planned", since that feature isn't built yet. The other 5 slots (onboarding, discovery, profile details, match screen, messaging) now use real screenshots — see below.
- **Store URLs** — `assets/js/config.js` has both set to `null`. Nothing links anywhere until you fill these in post-launch.

## Screenshot / hero assets (resolved)

- `assets/images/hero-couple.jpg` and all 5 files in `assets/images/screenshots/` are **real captures**, not stock or mockup placeholders: the hero photo is `apps/mobile/src/assets/photos/welcome-hero.png` (already used on the app's own welcome screen); the 5 screenshots were captured live from the running app (headless Chrome via CDP, authenticated as the `david.wright@seed.fm` seed account) — onboarding/welcome, a real Discovery card (Emma, Chicago), the account's own Profile page, a Match profile view, and an actual Chat conversation (two messages were seeded via the API so the thread isn't empty).
- Since these are dev-seed-data screenshots (not final production photos/copy), consider recapturing once real user profiles or production copy exist, particularly if seed profile photos/names shouldn't appear on the public marketing site long-term.
- No feature-graphic-style banner image exists yet (useful for a future OG image / social sharing card — the OG image meta tag currently just points at the hero photo as a placeholder).
- `wordmark-nocross-test.png` (the less-overtly-religious variant) exists in the brand folder but was not used anywhere on this site — the current design leans on a plain symbol mark, not the wordmark, in the header, so this wasn't needed. Worth a look if you want to A/B the more secular-leaning wordmark on the marketing site itself.

## Things this build deliberately did NOT do (by design, not oversight)

- Did not create a working waitlist/email-collection form — no secure backend endpoint exists to receive it, and the spec explicitly said not to fake one. The site directs interested users to the support email instead.
- Did not link real Google Play / App Store badges — both are disabled placeholders per spec, wired through `assets/js/config.js` for a one-file update later.
- Did not enable GitHub Pages deployment — the included Actions workflow only runs on manual `workflow_dispatch`, so pushing this repo will not publish anything automatically.
- Did not claim "chat moderation" exists — confirmed via grep against `server/api/src/modules` that no moderation module exists yet, so it's correctly omitted from the Features section (not even listed as "Planned," since it wasn't in your feature list either — add it if you want it called out).
