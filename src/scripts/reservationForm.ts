type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

type ReservationPayload = Record<string, FormDataEntryValue>;

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const form = document.getElementById(
  "reservation-form",
) as HTMLFormElement | null;
const status = document.getElementById("reservation-status");
const submit = document.getElementById(
  "reservation-submit",
) as HTMLButtonElement | null;
const dateInput = document.getElementById(
  "reservation-date",
) as HTMLInputElement | null;

function getTodayDateValue() {
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

function showStatus(message: string) {
  if (status) {
    status.textContent = message;
  }
}

function setSubmitState(isSending: boolean) {
  if (!submit || !form) {
    return;
  }

  submit.disabled = isSending;
  submit.textContent = isSending
    ? (form.dataset.sending ?? submit.textContent)
    : (form.dataset.submit ?? submit.textContent);
}

async function submitReservation(payload: ReservationPayload) {
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

if (dateInput) {
  dateInput.min = getTodayDateValue();
}

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!form.reportValidity() || !submit || !status) {
    return;
  }

  const payload = getPayload(form);
  const labels = form.dataset;

  if (!payload.access_key) {
    showStatus(labels.missingKey ?? "");
    return;
  }

  setSubmitState(true);
  showStatus("");

  try {
    const { response, result } = await submitReservation(payload);

    if (response.ok && result.success) {
      window.location.href = labels.successUrl ?? "/reservation-success/";
      return;
    }

    showStatus(result.message || labels.error || "");
  } catch {
    showStatus(labels.error ?? "");
  } finally {
    setSubmitState(false);
  }
});

export {};
