import { cn } from "@/lib/utils";

export function StatusBadge({ value }: { value: string }) {
  const color =
    ["Working", "Published", "Active", "Verified", "Approved"].includes(value)
      ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
      : ["Updating", "Pending", "Pending Review", "Needs Review", "Paused"].includes(value)
      ? "border-amber-400/20 bg-amber-500/10 text-amber-300"
      : ["Not Working", "Rejected", "Suspended", "Removed", "Cancelled"].includes(value)
      ? "border-red-400/20 bg-red-500/10 text-red-300"
      : "border-white/10 bg-white/[0.04] text-slate-300";

  return <span className={cn("rounded-md border px-2 py-1 text-xs font-semibold", color)}>{value}</span>;
}
