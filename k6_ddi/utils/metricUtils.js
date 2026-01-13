export function safeAdd(trend, value, tags = {}) {
  if (typeof value === "number" && Number.isFinite(value)) {
    trend.add(value, tags);
  }
}
