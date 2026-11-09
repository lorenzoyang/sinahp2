import { queryAll, queryOne } from "./dom";
import { parseStringArray } from "../utils/json";

type UpdateTimeOptionsConfig = {
  preserveCurrent?: boolean;
};

const selectors = {
  date: "[data-reservation-date]",
  fields: "[data-reservation-fields]",
  form: "[data-reservation-form]",
  submit: "[data-reservation-submit]",
  time: "[data-reservation-time]",
  location: "[data-reservation-location]",
} as const;

function getDateValue(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function addDays(date: Date, days: number): Date {
  const nextDate = new Date(date);
  nextDate.setDate(date.getDate() + days);

  return nextDate;
}

function timeToMinutes(time: string): number | null {
  const match = /^(\d{2}):(\d{2})$/.exec(time);

  if (!match) {
    return null;
  }

  const [, hours = "0", minutes = "0"] = match;
  const parsedHours = Number(hours);
  const parsedMinutes = Number(minutes);

  return parsedHours * 60 + parsedMinutes;
}

function getCurrentTimeMinutes(now: Date): number {
  return now.getHours() * 60 + now.getMinutes();
}

function getMinimumDateValueForTime(time: string, now = new Date()): string {
  const selectedTimeMinutes = timeToMinutes(time);

  if (selectedTimeMinutes === null) {
    return getDateValue(now);
  }

  const selectedTimeHasPassedToday =
    selectedTimeMinutes <= getCurrentTimeMinutes(now);

  return getDateValue(selectedTimeHasPassedToday ? addDays(now, 1) : now);
}

function updateDateMinimum(
  dateInput: HTMLInputElement | null,
  timeSelect: HTMLSelectElement | null,
): void {
  if (!dateInput) {
    return;
  }

  const minimumDateValue = getMinimumDateValueForTime(timeSelect?.value ?? "");

  dateInput.min = minimumDateValue;

  if (dateInput.value && dateInput.value < minimumDateValue) {
    dateInput.value = minimumDateValue;
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

function initReservationForm(form: HTMLFormElement): void {
  const submit = queryOne<HTMLButtonElement>(selectors.submit, form);
  const fields = queryOne<HTMLFieldSetElement>(selectors.fields, form);
  const dateInput = queryOne<HTMLInputElement>(selectors.date, form);
  const timeSelect = queryOne<HTMLSelectElement>(selectors.time, form);
  const locationSelect = queryOne<HTMLSelectElement>(selectors.location, form);
  const successUrl = form.dataset.successUrl;

  // Fail closed: controls stay disabled if the script cannot initialize.
  if (!submit || !fields || !dateInput || !timeSelect || !locationSelect || !successUrl) {
    return;
  }

  function resetDemo(): void {
    form.reset();
    updateTimeOptions(timeSelect, locationSelect);
    updateDateMinimum(dateInput, timeSelect);
  }

  resetDemo();
  locationSelect.addEventListener("change", () => {
    updateTimeOptions(timeSelect, locationSelect);
    updateDateMinimum(dateInput, timeSelect);
  });
  timeSelect.addEventListener("change", () => updateDateMinimum(dateInput, timeSelect));

  // Never serialize the fields. Even a native submission has no named inputs.
  form.addEventListener("submit", (event) => event.preventDefault());
  submit.addEventListener("click", () => {
    updateDateMinimum(dateInput, timeSelect);
    if (!form.reportValidity()) return;
    form.reset();
    window.location.assign(successUrl);
  });
  window.addEventListener("pagehide", resetDemo);
  window.addEventListener("pageshow", resetDemo);

  // Enable controls only after every event handler is attached.
  fields.disabled = false;
  submit.disabled = false;
}

queryAll<HTMLFormElement>(selectors.form).forEach(initReservationForm);
