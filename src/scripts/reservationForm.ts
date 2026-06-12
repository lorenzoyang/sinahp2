import { queryAll, queryOne } from "./dom";
import { parseStringArray } from "../utils/json";

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

type ReservationPayload = Record<string, FormDataEntryValue>;
type SubmitReservationResult = {
  response: Response;
  result: Web3FormsResponse;
};
type UpdateTimeOptionsConfig = {
  preserveCurrent?: boolean;
};

declare global {
  interface Window {
    sinaTrackReservationSuccessConversion?: () => Promise<void>;
  }
}

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const selectors = {
  captchaResponse: 'textarea[name="h-captcha-response"]',
  date: "[data-reservation-date]",
  form: "[data-reservation-form]",
  location: "[data-reservation-location]",
  status: "[data-reservation-status]",
  submit: "[data-reservation-submit]",
  time: "[data-reservation-time]",
} as const;

function getTodayDateValue(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getPayload(form: HTMLFormElement): ReservationPayload {
  return Object.fromEntries(
    new FormData(form).entries(),
  ) as ReservationPayload;
}

function getCaptchaResponse(form: HTMLFormElement): string {
  const captchaResponse = queryOne<HTMLTextAreaElement>(
    selectors.captchaResponse,
    form,
  );

  return captchaResponse?.value.trim() ?? "";
}

function isCaptchaEnabled(form: HTMLFormElement): boolean {
  return form.dataset.captchaEnabled === "true";
}

function showStatus(status: Element | null, message: string): void {
  if (status) {
    status.textContent = message;
  }
}

function getSelectedTimeSlots(
  locationSelect: HTMLSelectElement | null,
): string[] {
  const selectedOption = locationSelect?.selectedOptions[0];

  return parseStringArray(selectedOption?.dataset.timeSlots);
}

function createTimeOption(value: string, label = value): HTMLOptionElement {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;

  return option;
}

function updateTimeOptions(
  timeSelect: HTMLSelectElement | null,
  locationSelect: HTMLSelectElement | null,
  { preserveCurrent = false }: UpdateTimeOptionsConfig = {},
): void {
  if (!timeSelect) {
    return;
  }

  const currentValue = timeSelect.value;
  const placeholder = timeSelect.dataset.placeholder ?? "";
  const timeSlots = getSelectedTimeSlots(locationSelect);

  timeSelect.replaceChildren();

  const placeholderOption = createTimeOption("", placeholder);
  placeholderOption.disabled = true;
  timeSelect.append(placeholderOption);

  timeSlots.forEach((timeSlot) => {
    timeSelect.append(createTimeOption(timeSlot));
  });

  timeSelect.value =
    preserveCurrent && timeSlots.includes(currentValue) ? currentValue : "";
}

function setSubmitState(
  form: HTMLFormElement,
  submit: HTMLButtonElement | null,
  isSending: boolean,
): void {
  if (!submit) {
    return;
  }

  submit.disabled = isSending;
  submit.textContent = isSending
    ? (form.dataset.sending ?? submit.textContent)
    : (form.dataset.submit ?? submit.textContent);
}

async function submitReservation(
  payload: ReservationPayload,
): Promise<SubmitReservationResult> {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });
  const result = (await response.json()) as Web3FormsResponse;

  return { response, result };
}

async function trackReservationSuccessConversion(): Promise<void> {
  try {
    await window.sinaTrackReservationSuccessConversion?.();
  } catch {
    return;
  }
}

function initReservationForm(form: HTMLFormElement): void {
  const status = queryOne(selectors.status, form);
  const submit = queryOne<HTMLButtonElement>(selectors.submit, form);
  const dateInput = queryOne<HTMLInputElement>(selectors.date, form);
  const timeSelect = queryOne<HTMLSelectElement>(selectors.time, form);
  const locationSelect = queryOne<HTMLSelectElement>(
    selectors.location,
    form,
  );

  if (dateInput) {
    dateInput.min = getTodayDateValue();
  }

  updateTimeOptions(timeSelect, locationSelect, { preserveCurrent: true });

  locationSelect?.addEventListener("change", () => {
    updateTimeOptions(timeSelect, locationSelect);
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity() || !submit || !status) {
      return;
    }

    const payload = getPayload(form);
    const labels = form.dataset;

    if (!payload.access_key) {
      showStatus(status, labels.missingKey ?? "");
      return;
    }

    if (isCaptchaEnabled(form) && !getCaptchaResponse(form)) {
      showStatus(status, labels.captchaRequired ?? "");
      return;
    }

    setSubmitState(form, submit, true);
    showStatus(status, "");

    try {
      const { response, result } = await submitReservation(payload);

      if (response.ok && result.success) {
        const successUrl = labels.successUrl ?? "/reservation-success/";

        await trackReservationSuccessConversion();
        window.location.href = successUrl;
        return;
      }

      showStatus(status, result.message || labels.error || "");
    } catch {
      showStatus(status, labels.error ?? "");
    } finally {
      setSubmitState(form, submit, false);
    }
  });
}

queryAll<HTMLFormElement>(selectors.form).forEach(initReservationForm);

export {};
