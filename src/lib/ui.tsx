import Link from "next/link";

export function Shell({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070812] text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.18),transparent_30%),radial-gradient(circle_at_0%_42%,rgba(34,211,238,0.10),transparent_28%)]" />
      <div className={`relative mx-auto ${wide ? "max-w-[1500px]" : "max-w-7xl"} px-6 py-8`}>{children}</div>
    </main>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative h-9 w-9">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-300 via-violet-500 to-purple-700 blur-sm" />
        <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-lg font-black text-white">V</div>
      </div>
      <span className="text-2xl font-black tracking-tight text-white">Velora</span>
    </Link>
  );
}

export function Nav() {
  return (
    <nav className="flex items-center justify-between gap-6">
      <Logo />
      <div className="hidden gap-6 text-sm text-slate-300 md:flex">
        <Link href="/rankings" className="hover:text-white">Rankings</Link>
        <Link href="/sellers/devstudio" className="hover:text-white">Seller</Link>
        <Link href="/pricing" className="hover:text-white">Pricing</Link>
        <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
        <Link href="/admin" className="hover:text-white">Admin</Link>
      </div>
    </nav>
  );
}

export function Badge({ children, tone = "purple" }: { children: React.ReactNode; tone?: "purple" | "green" | "amber" | "red" | "slate" | "cyan" }) {
  const colors = {
    purple: "border-purple-400/20 bg-purple-500/10 text-purple-200",
    green: "border-emerald-400/20 bg-emerald-500/10 text-emerald-200",
    amber: "border-amber-400/20 bg-amber-500/10 text-amber-200",
    red: "border-red-400/20 bg-red-500/10 text-red-200",
    slate: "border-white/10 bg-white/[0.04] text-slate-300",
    cyan: "border-cyan-400/20 bg-cyan-500/10 text-cyan-200",
  };
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${colors[tone]}`}>{children}</span>;
}

export function Status({ value }: { value: string }) {
  const tone = value === "Working" ? "green" : value === "Updating" ? "amber" : "red";
  return <Badge tone={tone}>{value}</Badge>;
}

export function Button({ children, href, variant = "primary" }: { children: React.ReactNode; href: string; variant?: "primary" | "secondary" | "danger" }) {
  const styles = variant === "primary"
    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/20 hover:brightness-110"
    : variant === "danger"
      ? "border border-red-400/20 bg-red-500/10 text-red-200 hover:bg-red-500/20"
      : "border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]";
  return <Link href={href} className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition ${styles}`}>{children}</Link>;
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20 ${className}`}>{children}</div>;
}

export function Mini({ label, value }: { label: string; value: string | number }) {
  return <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3"><div className="font-bold text-white">{value}</div><div className="text-xs text-slate-500">{label}</div></div>;
}

export function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return <div>{eyebrow && <p className="text-sm font-medium text-purple-300">{eyebrow}</p>}<h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">{title}</h1>{text && <p className="mt-3 max-w-2xl text-slate-400">{text}</p>}</div>;
}
