// cookie-consent.js
const GTM_ID = "GTM-CJZD10VZT1";

const defaultPreferences = {
  essential: true,
  analytics: true,
  marketing: true,
};

function getStoredPreferences() {
  const saved = localStorage.getItem("cookiePreferences");
  return saved ? JSON.parse(saved) : defaultPreferences;
}

function savePreferences(preferences) {
  localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
  updateGTMConsent(preferences);
}

function initGTM() {
  const preferences = getStoredPreferences();
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
    consentPreferences: preferences,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

function updateGTMConsent(preferences) {
  function doConsentUpdate() {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: preferences.marketing ? "granted" : "denied",
        analytics_storage: preferences.analytics ? "granted" : "denied",
        functionality_storage: "granted",
        security_storage: "granted",
      });
    } else {
      setTimeout(doConsentUpdate, 100);
    }
  }
  doConsentUpdate();

  if (window.dataLayer) {
    window.dataLayer.push({
      event: "updateConsent",
      consentPreferences: preferences,
    });
  }
}

function showCookieBanner() {
  document.getElementById("cookie-consent")?.classList.add("show");
}

function hideCookieBanner() {
  document.getElementById("cookie-consent")?.classList.remove("show");
}

function togglePreferences() {
  document.getElementById("cookie-preferences")?.classList.toggle("show");
}

function initCookieConsent() {
  debugger;
  const preferences = getStoredPreferences();

  if (!localStorage.getItem("cookiePreferences")) {
    showCookieBanner();
  } else {
    initGTM();
  }

  const analyticsCheckbox = document.getElementById("analytics-cookies");
  const marketingCheckbox = document.getElementById("marketing-cookies");

  if (analyticsCheckbox) analyticsCheckbox.checked = preferences.analytics;
  if (marketingCheckbox) marketingCheckbox.checked = preferences.marketing;

  document.getElementById("accept-cookies")?.addEventListener("click", () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
    hideCookieBanner();
    initGTM();
  });

  document
    .getElementById("customize-cookies")
    ?.addEventListener("click", togglePreferences);

  document.getElementById("save-preferences")?.addEventListener("click", () => {
    const analyticsInput = document.getElementById("analytics-cookies");
    const marketingInput = document.getElementById("marketing-cookies");

    const newPreferences = {
      essential: true,
      analytics: analyticsInput?.checked || false,
      marketing: marketingInput?.checked || false,
    };

    savePreferences(newPreferences);
    hideCookieBanner();
    initGTM();
  });
}

// Initialize when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCookieConsent);
} else {
  initCookieConsent();
}