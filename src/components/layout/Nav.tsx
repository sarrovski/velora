import Link from "next/link";
import { Button } from "@/components/ui/Button";

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

export function PublicNav() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <Logo />
      <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
        <Link href="/rankings" className="hover:text-white">Rankings</Link>
        <Link href="/sellers/devstudio" className="hover:text-white">Sellers</Link>
        <Link href="/pricing" className="hover:text-white">Pricing</Link>
        <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
        <Link href="/admin" className="hover:text-white">Admin</Link>
      </nav>
      <div className="flex items-center gap-3">
        <Button href="/dashboard" variant="secondary" className="hidden md:inline-flex">Seller Login</Button>
        <Button href="/rankings">Explore</Button>
      </div>
    </header>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070812] text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.16),transparent_30%),radial-gradient(circle_at_0%_42%,rgba(34,211,238,0.08),transparent_28%)]" />
      <div className="relative">{children}</div>
    </main>
  );
}
