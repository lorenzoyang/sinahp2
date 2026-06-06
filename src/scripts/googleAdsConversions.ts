declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    sinaTrackReservationSuccessConversion?: () => Promise<void>;
  }
}

type AdsConsentDetail = {
  granted?: boolean;
};

type ConversionEventParameters = {
  send_to: string;
  event_callback?: () => void;
  event_timeout?: number;
};

const CONSENT_STORAGE_KEY = "sinaGoogleAdsConsent";
const CONSENT_ACCEPTED_VALUE = "accepted";
const PHONE_CONVERSION_SEND_TO = "AW-16840687263/NJEsCL7dqJMbEJ_9od4-";
const WHATSAPP_CONVERSION_SEND_TO = "AW-16840687263/KqYzCLuI5LkcEJ_9od4-";
const EMAIL_CONVERSION_SEND_TO = "AW-16840687263/QOC7CNur-LkcEJ_9od4-";
const RESERVATION_SUCCESS_CONVERSION_SEND_TO =
  "AW-16840687263/0JulCOP7rIEcEJ_9od4-";
const CONVERSION_CALLBACK_TIMEOUT_MS = 1000;

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

function sendConversion(parameters: ConversionEventParameters): boolean {
  if (!hasAdsConsent()) {
    return false;
  }

  const gtag = getGtag();

  if (!gtag) {
    return false;
  }

  gtag("event", "conversion", parameters);
  return true;
}

function getConversionSendTo(href: string): string | undefined {
  if (href.startsWith("tel:")) {
    return PHONE_CONVERSION_SEND_TO;
  }

  if (href.startsWith("mailto:")) {
    return EMAIL_CONVERSION_SEND_TO;
  }

  if (href.includes("wa.me/") || href.includes("whatsapp.com/")) {
    return WHATSAPP_CONVERSION_SEND_TO;
  }

  return undefined;
}

function trackReservationSuccessConversion(): Promise<void> {
  if (!hasAdsConsent()) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    let isSettled = false;

    const settle = () => {
      if (isSettled) {
        return;
      }

      isSettled = true;
      resolve();
    };

    const wasSent = sendConversion({
      send_to: RESERVATION_SUCCESS_CONVERSION_SEND_TO,
      event_callback: settle,
      event_timeout: CONVERSION_CALLBACK_TIMEOUT_MS,
    });

    if (!wasSent) {
      settle();
      return;
    }

    window.setTimeout(settle, CONVERSION_CALLBACK_TIMEOUT_MS);
  });
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

  sendConversion({ send_to: sendTo });
});

window.sinaTrackReservationSuccessConversion =
  trackReservationSuccessConversion;

export {};
