export function formatSequenceNumber(index: number): string {
  return String(index + 1).padStart(2, "0");
}

export function getStaggerStyle(
  index: number,
  start = 0,
  step = 80,
): string {
  return `--reveal-delay:${start + index * step}ms`;
}
