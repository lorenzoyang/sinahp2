import {
  GOOGLE_ADS_CONSENT_ACCEPTED_VALUE,
  GOOGLE_ADS_CONSENT_DECLINED_VALUE,
  getStoredGoogleAdsConsentChoice,
  storeGoogleAdsConsentChoice,
  updateGoogleAdsConsent,
  type GoogleAdsConsentChoice,
} from "./googleAdsConsent";
import { queryOne } from "./dom";

const selectors = {
  accept: "[data-cookie-consent-accept]",
  banner: "[data-cookie-consent]",
  decline: "[data-cookie-consent-decline]",
} as const;

const banner = queryOne<HTMLElement>(selectors.banner);
const acceptButton = banner
  ? queryOne<HTMLButtonElement>(selectors.accept, banner)
  : null;
const declineButton = banner
  ? queryOne<HTMLButtonElement>(selectors.decline, banner)
  : null;

function chooseConsent(choice: GoogleAdsConsentChoice): void {
  const granted = choice === GOOGLE_ADS_CONSENT_ACCEPTED_VALUE;

  storeGoogleAdsConsentChoice(choice);
  updateGoogleAdsConsent(granted);

  if (banner) {
    banner.hidden = true;
  }
}

const currentChoice = getStoredGoogleAdsConsentChoice();
const hasStoredChoice =
  currentChoice === GOOGLE_ADS_CONSENT_ACCEPTED_VALUE ||
  currentChoice === GOOGLE_ADS_CONSENT_DECLINED_VALUE;

if (!hasStoredChoice && banner) {
  banner.hidden = false;
}

acceptButton?.addEventListener("click", () => {
  chooseConsent(GOOGLE_ADS_CONSENT_ACCEPTED_VALUE);
});

declineButton?.addEventListener("click", () => {
  chooseConsent(GOOGLE_ADS_CONSENT_DECLINED_VALUE);
});
