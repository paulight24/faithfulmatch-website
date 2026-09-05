# .well-known — mobile deep-link verification

These two files make `https://faithfulmatch.love/...` links open the native apps
instead of the browser. Without them Android App Links / iOS Universal Links
fail verification and every ad landing URL opens in Safari or Chrome, which
means the app never receives the `?utm_source=…&fm_ad=…` query string that
`AttributionService` reads (see FaithfulMatch.love `docs/growth/AD_ENGINE_AND_LAUNCH.md`).

Both must be served from the site root over HTTPS, with `Content-Type:
application/json`, no redirects:

- `https://faithfulmatch.love/.well-known/assetlinks.json`
- `https://faithfulmatch.love/.well-known/apple-app-site-association` (no file extension)

## assetlinks.json — one more fingerprint to add

The fingerprint currently listed is the **upload key**
(`android/app/faithfulmatch-release.jks`). Google Play re-signs every release
with its own **app signing key**, so once the app is live you must ALSO add that
fingerprint or verification will fail for real Play installs:

Play Console → your app → **Setup → App integrity → App signing key certificate**
→ copy the SHA-256 → add it as a second entry in `sha256_cert_fingerprints`.

Verify with:
`https://developers.google.com/digital-asset-links/tools/generator`

## apple-app-site-association — Team ID required

Replace `REPLACE_TEAM_ID` with the Apple Developer Team ID (Apple Developer →
Membership → Team ID, a 10-character string). The result looks like
`A1B2C3D4E5.love.faithfulmatch.app`.

Universal Links also need the **Associated Domains** capability enabled on the
App ID and added in Xcode (`applinks:faithfulmatch.love`). That capability is
deliberately NOT in `App.entitlements` yet — adding it before the App ID is
configured makes code signing fail.
