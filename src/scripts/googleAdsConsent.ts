declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GOOGLE_ADS_ID = "AW-16840687263";
export const GOOGLE_ADS_SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
export const GOOGLE_ADS_CONSENT_STORAGE_KEY = "sinaGoogleAdsConsent";
export const GOOGLE_ADS_CONSENT_ACCEPTED_VALUE = "accepted";
export const GOOGLE_ADS_CONSENT_DECLINED_VALUE = "declined";
export const GOOGLE_ADS_CONSENT_FIELDS = [
  "ad_storage",
  "ad_user_data",
  "ad_personalization",
  "analytics_storage",
] as const;
export const GOOGLE_ADS_CONVERSIONS = {
  phone: `${GOOGLE_ADS_ID}/NJEsCL7dqJMbEJ_9od4-`,
  whatsapp: `${GOOGLE_ADS_ID}/KqYzCLuI5LkcEJ_9od4-`,
  email: `${GOOGLE_ADS_ID}/QOC7CNur-LkcEJ_9od4-`,
  reservationSuccess: `${GOOGLE_ADS_ID}/0JulCOP7rIEcEJ_9od4-`,
} as const;
export const GOOGLE_ADS_CONVERSION_CALLBACK_TIMEOUT_MS = 1000;

export type GoogleAdsConsentChoice =
  | typeof GOOGLE_ADS_CONSENT_ACCEPTED_VALUE
  | typeof GOOGLE_ADS_CONSENT_DECLINED_VALUE;
export type GoogleAdsConsentState = "granted" | "denied";
export type GoogleAdsConsentSettings = Record<
  (typeof GOOGLE_ADS_CONSENT_FIELDS)[number],
  GoogleAdsConsentState
>;

export function getStoredGoogleAdsConsentChoice(): string | null {
  try {
    return window.localStorage.getItem(GOOGLE_ADS_CONSENT_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function storeGoogleAdsConsentChoice(
  choice: GoogleAdsConsentChoice,
): void {
  try {
    window.localStorage.setItem(GOOGLE_ADS_CONSENT_STORAGE_KEY, choice);
  } catch {
    return;
  }
}

export function hasGrantedGoogleAdsConsent(): boolean {
  return (
    getStoredGoogleAdsConsentChoice() === GOOGLE_ADS_CONSENT_ACCEPTED_VALUE
  );
}

export function buildGoogleAdsConsentSettings(
  granted: boolean,
): GoogleAdsConsentSettings {
  const state = granted ? "granted" : "denied";

  return Object.fromEntries(
    GOOGLE_ADS_CONSENT_FIELDS.map((field) => [field, state]),
  ) as GoogleAdsConsentSettings;
}

export function getGtag(): Window["gtag"] {
  return typeof window.gtag === "function" ? window.gtag : undefined;
}

export function updateGoogleAdsConsent(granted: boolean): void {
  getGtag()?.("consent", "update", buildGoogleAdsConsentSettings(granted));
}
