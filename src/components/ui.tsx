import Link from "next/link";
import type { ReactNode } from "react";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070812] px-6 py-8 text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.17),transparent_30%),radial-gradient(circle_at_0%_42%,rgba(34,211,238,0.08),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">{children}</div>
    </main>
  );
}

export function Card({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={`rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20 ${className}`}>{children}</div>;
}

export function Badge({ children, tone = "purple" }: { children: ReactNode; tone?: "purple" | "green" | "amber" | "red" | "blue" | "default" }) {
  const tones = {
    purple: "border-purple-400/20 bg-purple-500/10 text-purple-200",
    green: "border-emerald-400/20 bg-emerald-500/10 text-emerald-200",
    amber: "border-amber-400/20 bg-amber-500/10 text-amber-200",
    red: "border-red-400/20 bg-red-500/10 text-red-200",
    blue: "border-cyan-400/20 bg-cyan-500/10 text-cyan-200",
    default: "border-white/10 bg-white/[0.04] text-slate-300",
  };
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${tones[tone]}`}>{children}</span>;
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" }) {
  return <Link href={href} className={variant === "primary" ? "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:brightness-110" : "inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"}>{children}</Link>;
}

export function StatusBadge({ value }: { value: string }) {
  const good = ["Working", "Published", "Verified", "Active", "Low", "Closed"];
  const warn = ["Updating", "Pending Review", "Under Review", "Paused", "Medium", "Monitoring", "Open", "Appealed"];
  const color = good.includes(value) ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300" : warn.includes(value) ? "border-amber-400/20 bg-amber-500/10 text-amber-300" : "border-red-400/20 bg-red-500/10 text-red-300";
  return <span className={`rounded-md border px-2 py-1 text-xs font-semibold ${color}`}>{value}</span>;
}

export function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div>
      {eyebrow && <p className="text-sm font-medium text-purple-300">{eyebrow}</p>}
      <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
      {text && <p className="mt-3 max-w-3xl text-slate-400">{text}</p>}
    </div>
  );
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

export function MiniStat({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"><div className="text-lg font-black">{value}</div><div className="mt-1 text-xs text-slate-500">{label}</div></div>;
}

export function Pill({ children }: { children: ReactNode }) {
  return <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-slate-300">{children}</span>;
}
