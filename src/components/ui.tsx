import Link from "next/link";
import type { ReactNode } from "react";
import type { ToolStatus, PlatformStatus } from "@/lib/data";

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070812] px-6 py-8 text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.18),transparent_30%),radial-gradient(circle_at_0%_42%,rgba(34,211,238,0.10),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">{children}</div>
    </main>
  );
}

export function Nav() {
  return (
    <nav className="flex items-center justify-between gap-6">
      <Link href="/" className="flex items-center gap-3">
        <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-lg font-black text-white ring-1 ring-purple-400/30 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-br before:from-cyan-300 before:via-violet-500 before:to-purple-700 before:blur-sm">V</span>
        <span className="text-2xl font-black tracking-tight">Velora</span>
      </Link>
      <div className="hidden gap-5 text-sm text-slate-300 md:flex">
        <Link href="/rankings" className="hover:text-white">Rankings</Link>
        <Link href="/sellers/devstudio" className="hover:text-white">Seller</Link>
        <Link href="/pricing" className="hover:text-white">Pricing</Link>
        <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
        <Link href="/admin" className="hover:text-white">Admin</Link>
      </div>
    </nav>
  );
}

export function Card({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cx("rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20", className)}>
      {children}
    </div>
  );
}

export function Badge({ children, tone = "purple" }: { children: ReactNode; tone?: "purple" | "green" | "amber" | "red" | "slate" | "cyan" }) {
  const colors = {
    purple: "border-purple-400/20 bg-purple-500/10 text-purple-200",
    green: "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
    amber: "border-amber-400/20 bg-amber-500/10 text-amber-300",
    red: "border-red-400/20 bg-red-500/10 text-red-300",
    slate: "border-white/10 bg-white/[0.04] text-slate-300",
    cyan: "border-cyan-400/20 bg-cyan-500/10 text-cyan-300",
  };
  return <span className={cx("inline-flex rounded-full border px-2.5 py-1 text-xs font-medium", colors[tone])}>{children}</span>;
}

export function Button({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" }) {
  return (
    <Link href={href} className={variant === "primary" ? "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:brightness-110" : "inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"}>
      {children}
    </Link>
  );
}

export function ToolStatusBadge({ value }: { value: ToolStatus }) {
  const tone = value === "Working" ? "green" : value === "Updating" ? "amber" : "red";
  return <Badge tone={tone}>{value}</Badge>;
}

export function PlatformStatusBadge({ value }: { value: PlatformStatus }) {
  const tone = value === "Published" ? "green" : value === "Pending Review" ? "amber" : value === "Draft" ? "slate" : "red";
  return <Badge tone={tone}>{value}</Badge>;
}

export function Metric({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <Card className="p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-3 text-3xl font-black">{value}</p>
      {detail && <p className="mt-1 text-xs text-slate-500">{detail}</p>}
    </Card>
  );
}

export function FeaturePill({ children }: { children: ReactNode }) {
  return <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-slate-300">{children}</span>;
}
