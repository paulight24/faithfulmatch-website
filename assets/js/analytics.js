/*
 * FaithfulMatch — marketing site analytics.
 *
 * Shares one GA4 property with the app, so a visitor who lands here and later
 * signs up shows as a single funnel rather than two unrelated ones.
 *
 * Deliberately narrow: page views plus a handful of intent signals. The site
 * cannot see installs — only the stores report those — so what we measure here
 * is *download intent* (store-badge clicks, by platform), which is the number
 * that tells us whether the page is doing its job. Compare it against Play
 * Console / App Store Connect install counts to get the store-page conversion
 * rate.
 */
(function () {
  var GA_ID = 'G-R2XE3W6R7R';

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  // anonymize_ip: we have no need for visitor-level geography beyond country,
  // and the privacy policy does not claim to collect precise location.
  gtag('config', GA_ID, { anonymize_ip: true });

  // One delegated listener rather than per-element handlers, so pages added
  // later are instrumented automatically.
  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('a, button') : null;
    if (!el) return;

    var store = el.getAttribute('data-store');
    if (store) {
      // Fires for the disabled "Coming Soon" badges too — pre-launch taps are
      // the cleanest measure of demand we will ever get, and we would rather
      // know than discard them.
      gtag('event', 'store_click', {
        platform: store,
        available: !el.classList.contains('is-disabled')
      });
      return;
    }

    var href = el.getAttribute('href') || '';
    if (el.classList.contains('btn')) {
      gtag('event', 'cta_click', {
        label: (el.textContent || '').trim().slice(0, 60),
        href: href
      });
      return;
    }

    if (href.indexOf('mailto:') === 0) {
      gtag('event', 'support_email_click');
    }
  }, true);

  // FAQ opens are a cheap read on what people are unsure about before signing
  // up — usually the fastest copy fix available.
  document.addEventListener('toggle', function (e) {
    var d = e.target;
    if (!d || d.tagName !== 'DETAILS' || !d.open) return;
    var q = d.querySelector('summary');
    gtag('event', 'faq_opened', { question: q ? q.textContent.trim().slice(0, 80) : '' });
  }, true);
})();
