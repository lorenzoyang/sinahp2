import {
  GOOGLE_ADS_CONVERSION_CALLBACK_TIMEOUT_MS,
  GOOGLE_ADS_CONVERSIONS,
  getGtag,
  hasGrantedGoogleAdsConsent,
} from "./googleAdsConsent";

declare global {
  interface Window {
    sinaTrackReservationSuccessConversion?: () => Promise<void>;
  }
}

type ConversionEventParameters = {
  send_to: string;
  event_callback?: () => void;
  event_timeout?: number;
};

function sendConversion(parameters: ConversionEventParameters): boolean {
  if (!hasGrantedGoogleAdsConsent()) {
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
    return GOOGLE_ADS_CONVERSIONS.phone;
  }

  if (href.startsWith("mailto:")) {
    return GOOGLE_ADS_CONVERSIONS.email;
  }

  if (href.includes("wa.me/") || href.includes("whatsapp.com/")) {
    return GOOGLE_ADS_CONVERSIONS.whatsapp;
  }

  return undefined;
}

function trackReservationSuccessConversion(): Promise<void> {
  if (!hasGrantedGoogleAdsConsent()) {
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
      send_to: GOOGLE_ADS_CONVERSIONS.reservationSuccess,
      event_callback: settle,
      event_timeout: GOOGLE_ADS_CONVERSION_CALLBACK_TIMEOUT_MS,
    });

    if (!wasSent) {
      settle();
      return;
    }

    window.setTimeout(settle, GOOGLE_ADS_CONVERSION_CALLBACK_TIMEOUT_MS);
  });
}

document.addEventListener("click", (event) => {
  if (!hasGrantedGoogleAdsConsent() || !(event.target instanceof Element)) {
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
