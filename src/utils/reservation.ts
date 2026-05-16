import type { ReservationTimeRange } from "../data/restaurant";

export const reservationSlotIntervalMinutes = 30;

export function timeToMinutes(time: string): number {
  const [hours = "0", minutes = "0"] = time.split(":");

  return Number(hours) * 60 + Number(minutes);
}

export function minutesToTime(minutes: number): string {
  const normalizedMinutes = minutes % (24 * 60);
  const hours = Math.floor(normalizedMinutes / 60);
  const minute = normalizedMinutes % 60;

  return `${String(hours).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

export function getReservationTimeSlots(
  ranges: readonly ReservationTimeRange[],
  intervalMinutes = reservationSlotIntervalMinutes,
): string[] {
  return ranges.flatMap(({ start, end }) => {
    const startMinutes = timeToMinutes(start);
    const endMinutes = timeToMinutes(end);
    const adjustedEndMinutes =
      endMinutes <= startMinutes ? endMinutes + 24 * 60 : endMinutes;
    const slots: string[] = [];

    for (
      let minutes = startMinutes;
      minutes < adjustedEndMinutes;
      minutes += intervalMinutes
    ) {
      slots.push(minutesToTime(minutes));
    }

    return slots;
  });
}
