import Link from "next/link";
import { ButtonLink } from "./ui";

export function Logo() {
  return <Link href="/" className="flex items-center gap-3"><div className="relative h-9 w-9"><div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-300 via-violet-500 to-purple-700 blur-sm" /><div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-lg font-black text-white">S</div></div><span className="text-2xl font-black tracking-tight text-white">Standard</span></Link>;
}

export function Nav() {
  return (
    <nav className="flex items-center justify-between gap-4">
      <Logo />
      <div className="hidden gap-7 text-sm text-slate-300 md:flex">
        <Link href="/rankings" className="hover:text-white">Rankings</Link>
        <Link href="/games/valorant" className="hover:text-white">Games</Link>
        <Link href="/trust" className="hover:text-white">Trust</Link>
        <Link href="/pricing" className="hover:text-white">Pricing</Link>
        <Link href="/admin" className="hover:text-white">Admin</Link>
      </div>
      <div className="hidden gap-3 md:flex">
        <ButtonLink href="/dashboard" variant="secondary">Seller Dashboard</ButtonLink>
        <ButtonLink href="/rankings">Explore</ButtonLink>
      </div>
    </nav>
  );
}
