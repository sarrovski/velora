export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function riskTone(value: string) {
  if (["Low", "Working", "Verified", "Published", "Active", "Official Provider"].includes(value)) return "green";
  if (["Medium", "Updating", "Pending Review", "Under Review", "Paused"].includes(value)) return "amber";
  if (["High", "Not Working", "Restricted", "Suspended", "Irreversible"].includes(value)) return "red";
  return "default";
}

export function scoreTone(score: number) {
  if (score >= 88) return "green";
  if (score >= 72) return "amber";
  return "red";
}
