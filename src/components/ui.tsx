import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/helpers";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070812] px-6 py-8 text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.18),transparent_30%),radial-gradient(circle_at_0%_42%,rgba(34,211,238,0.09),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">{children}</div>
    </main>
  );
}

export function Nav() {
  return (
    <nav className="flex items-center justify-between gap-6">
      <Link href="/" className="flex items-center gap-3">
        <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-lg font-black text-white before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-br before:from-cyan-300 before:via-violet-500 before:to-purple-700 before:blur-sm">S</span>
        <span className="text-2xl font-black tracking-tight">Standard</span>
      </Link>
      <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
        <Link href="/rankings" className="hover:text-white">Rankings</Link>
        <Link href="/games/valorant" className="hover:text-white">Games</Link>
        <Link href="/payments" className="hover:text-white">Payments</Link>
        <Link href="/trust" className="hover:text-white">Trust</Link>
        <Link href="/pricing" className="hover:text-white">Pricing</Link>
        <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
        <Link href="/admin" className="hover:text-white">Admin</Link>
      </div>
    </nav>
  );
}

export function Button({ children, href, variant = "primary", className = "" }: { children: ReactNode; href: string; variant?: "primary" | "secondary" | "danger"; className?: string }) {
  const styles = {
    primary: "bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/20 hover:brightness-110",
    secondary: "border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]",
    danger: "border border-red-400/20 bg-red-500/10 text-red-200 hover:bg-red-500/20"
  };
  return <Link href={href} className={cx("inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition", styles[variant], className)}>{children}</Link>;
}

export function Card({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cx("rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20", className)}>{children}</div>;
}

export function Badge({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "purple" | "cyan" | "green" | "amber" | "red" }) {
  const tones = {
    default: "border-white/10 bg-white/[0.04] text-slate-300",
    purple: "border-purple-400/20 bg-purple-500/10 text-purple-200",
    cyan: "border-cyan-400/20 bg-cyan-500/10 text-cyan-200",
    green: "border-emerald-400/20 bg-emerald-500/10 text-emerald-200",
    amber: "border-amber-400/20 bg-amber-500/10 text-amber-200",
    red: "border-red-400/20 bg-red-500/10 text-red-200"
  };
  return <span className={cx("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium", tones[tone])}>{children}</span>;
}

export function Stat({ label, value, detail }: { label: string; value: string | number; detail?: string }) {
  return <Card className="p-5"><p className="text-sm text-slate-400">{label}</p><p className="mt-3 text-3xl font-black">{value}</p>{detail && <p className="mt-1 text-xs text-slate-500">{detail}</p>}</Card>;
}

export function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return <section className="mt-12"><p className="text-sm font-medium text-purple-300">{eyebrow}</p><h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">{title}</h1>{text && <p className="mt-4 max-w-3xl text-slate-400">{text}</p>}</section>;
}
