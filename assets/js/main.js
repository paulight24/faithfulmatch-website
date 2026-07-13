// Shared behavior: mobile nav toggle + store-badge wiring from config.js

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var cfg = window.FM_CONFIG || {};
  document.querySelectorAll("[data-store='google-play']").forEach(function (el) {
    if (cfg.googlePlayUrl) {
      el.href = cfg.googlePlayUrl;
      el.classList.remove("is-disabled");
      el.removeAttribute("aria-disabled");
    }
  });
  document.querySelectorAll("[data-store='app-store']").forEach(function (el) {
    if (cfg.appStoreUrl) {
      el.href = cfg.appStoreUrl;
      el.classList.remove("is-disabled");
      el.removeAttribute("aria-disabled");
    }
  });
  document.querySelectorAll("[data-support-email]").forEach(function (el) {
    if (cfg.supportEmail) {
      el.href = "mailto:" + cfg.supportEmail;
      el.textContent = cfg.supportEmail;
    }
  });
});
