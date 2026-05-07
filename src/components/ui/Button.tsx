import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "danger";

const variants: Record<Variant, string> = {
  primary: "bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/20 hover:brightness-110",
  secondary: "border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]",
  ghost: "text-slate-300 hover:bg-white/[0.06] hover:text-white",
  danger: "border border-red-400/20 bg-red-500/10 text-red-200 hover:bg-red-500/20",
};

export function Button({ children, href, variant = "primary", className = "" }: { children: React.ReactNode; href?: string; variant?: Variant; className?: string }) {
  const classes = cn("inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition", variants[variant], className);
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button className={classes}>{children}</button>;
}
