export function formatSequenceNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function getStaggerStyle(
  index: number,
  start = 0,
  step = 80,
) {
  return `--reveal-delay:${start + index * step}ms`;
}
