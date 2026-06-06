declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type AdsConsentDetail = {
  granted?: boolean;
};

const CONSENT_STORAGE_KEY = "sinaGoogleAdsConsent";
const CONSENT_ACCEPTED_VALUE = "accepted";
const WHATSAPP_CONVERSION_SEND_TO = "AW-16840687263/bEurCKOprIEcEJ_9od4-";
const PHONE_CONVERSION_SEND_TO = "AW-16840687263/Aa3uCLD8vYEcEJ_9od4-";

function getStoredConsent(): string | null {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    return null;
  }
}

function hasAdsConsent(): boolean {
  return getStoredConsent() === CONSENT_ACCEPTED_VALUE;
}

function getGtag(): Window["gtag"] {
  return typeof window.gtag === "function" ? window.gtag : undefined;
}

function updateGoogleAdsConsent(granted: boolean): void {
  getGtag()?.("consent", "update", {
    ad_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
    analytics_storage: "denied",
  });
}

function getConversionSendTo(href: string): string | undefined {
  if (href.startsWith("tel:")) {
    return PHONE_CONVERSION_SEND_TO;
  }

  if (href.includes("wa.me/") || href.includes("whatsapp.com/")) {
    return WHATSAPP_CONVERSION_SEND_TO;
  }

  return undefined;
}

if (hasAdsConsent()) {
  updateGoogleAdsConsent(true);
}

window.addEventListener("sina:ads-consent", (event) => {
  const detail = (event as CustomEvent<AdsConsentDetail>).detail;

  updateGoogleAdsConsent(detail?.granted === true);
});

document.addEventListener("click", (event) => {
  if (!hasAdsConsent() || !(event.target instanceof Element)) {
    return;
  }

  const link = event.target.closest<HTMLAnchorElement>("a[href]");
  const href = link?.getAttribute("href");

  if (!href) {
    return;
  }

  const sendTo = getConversionSendTo(href);

  if (!sendTo) {
    return;
  }

  getGtag()?.("event", "conversion", { send_to: sendTo });
});

export {};
