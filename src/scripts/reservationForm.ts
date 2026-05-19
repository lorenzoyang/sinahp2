type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

type ReservationPayload = Record<string, FormDataEntryValue>;
type SubmitReservationResult = {
  response: Response;
  result: Web3FormsResponse;
};
type UpdateTimeOptionsOptions = {
  preserveCurrent?: boolean;
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

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
  const captchaResponse = form.querySelector<HTMLTextAreaElement>(
    'textarea[name="h-captcha-response"]',
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

  if (!selectedOption?.dataset.timeSlots) {
    return [];
  }

  try {
    const parsedSlots = JSON.parse(selectedOption.dataset.timeSlots);

    return Array.isArray(parsedSlots)
      ? parsedSlots.filter((timeSlot): timeSlot is string =>
          typeof timeSlot === "string",
        )
      : [];
  } catch {
    return [];
  }
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
  { preserveCurrent = false }: UpdateTimeOptionsOptions = {},
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

function initReservationForm(form: HTMLFormElement): void {
  const status = form.querySelector("[data-reservation-status]");
  const submit = form.querySelector<HTMLButtonElement>(
    "[data-reservation-submit]",
  );
  const dateInput = form.querySelector<HTMLInputElement>(
    "[data-reservation-date]",
  );
  const timeSelect = form.querySelector<HTMLSelectElement>(
    "[data-reservation-time]",
  );
  const locationSelect = form.querySelector<HTMLSelectElement>(
    "[data-reservation-location]",
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
        window.location.href = labels.successUrl ?? "/reservation-success/";
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

document
  .querySelectorAll<HTMLFormElement>("[data-reservation-form]")
  .forEach(initReservationForm);

export {};
