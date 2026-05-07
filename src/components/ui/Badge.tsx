import { cn } from "@/lib/utils";

type Tone = "default" | "purple" | "green" | "amber" | "red" | "cyan";

const tones: Record<Tone, string> = {
  default: "border-white/10 bg-white/[0.04] text-slate-300",
  purple: "border-purple-400/20 bg-purple-500/10 text-purple-200",
  green: "border-emerald-400/20 bg-emerald-500/10 text-emerald-200",
  amber: "border-amber-400/20 bg-amber-500/10 text-amber-200",
  red: "border-red-400/20 bg-red-500/10 text-red-200",
  cyan: "border-cyan-400/20 bg-cyan-500/10 text-cyan-200",
};

export function Badge({ children, tone = "default", className = "" }: { children: React.ReactNode; tone?: Tone; className?: string }) {
  return <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium", tones[tone], className)}>{children}</span>;
}
