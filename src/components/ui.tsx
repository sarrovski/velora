import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/helpers";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070812] text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.16),transparent_30%),radial-gradient(circle_at_0%_42%,rgba(34,211,238,0.08),transparent_28%)]" />
      <div className="relative">{children}</div>
    </main>
  );
}

export function Nav() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <Link href="/" className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 via-violet-500 to-purple-700 text-lg font-black text-white">
          S
        </span>
        <span className="text-2xl font-black tracking-tight">Standard</span>
      </Link>
      <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
        <Link href="/marketplace" className="hover:text-white">Marketplace</Link>
        <Link href="/claim" className="hover:text-white">Claim</Link>
        <Link href="/seller" className="hover:text-white">Seller Studio</Link>
        <Link href="/admin" className="hover:text-white">Admin</Link>
      </div>
      <Link
        href="/marketplace"
        className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold shadow-lg shadow-purple-500/20"
      >
        Explore
      </Link>
    </nav>
  );
}

export function Card({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Badge({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "purple" | "green" | "amber" | "red" | "cyan";
}) {
  const styles = {
    default: "border-white/10 bg-white/[0.04] text-slate-300",
    purple: "border-purple-400/20 bg-purple-500/10 text-purple-200",
    green: "border-emerald-400/20 bg-emerald-500/10 text-emerald-200",
    amber: "border-amber-400/20 bg-amber-500/10 text-amber-200",
    red: "border-red-400/20 bg-red-500/10 text-red-200",
    cyan: "border-cyan-400/20 bg-cyan-500/10 text-cyan-200",
  };

  return (
    <span className={cn("inline-flex rounded-full border px-2.5 py-1 text-xs font-medium", styles[tone])}>
      {children}
    </span>
  );
}

export function StatusBadge({ value }: { value: string }) {
  const tone =
    value === "Verified" || value === "Claimed"
      ? "green"
      : value === "Unclaimed" || value === "Claim Pending"
      ? "amber"
      : value === "Restricted" || value === "Hidden"
      ? "red"
      : "default";

  return <Badge tone={tone}>{value}</Badge>;
}

export function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-purple-300">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-slate-400">{text}</p>
    </div>
  );
}
