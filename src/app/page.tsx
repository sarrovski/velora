import Link from "next/link";
import { Nav } from "@/components/nav";
import { Badge, ButtonLink, Card, Metric, SectionTitle } from "@/components/ui";
import { games, tools } from "@/lib/data";
import { organicTools } from "@/lib/helpers";
import { ToolCard } from "@/components/tool-card";

export default function Home() {
  const topTools = organicTools().slice(0, 3);
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070812] px-6 py-8 text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.18),transparent_30%),radial-gradient(circle_at_0%_42%,rgba(34,211,238,0.10),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <Nav />
        <section className="mx-auto max-w-4xl py-20 text-center">
          <Badge>Trusted gaming tools marketplace</Badge>
          <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-tight md:text-7xl">Find the <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">standard</span><br />for every game.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">Compare tools by game, features, seller trust, reviews, tool status, bumps, and sponsored visibility — without confusing paid placement for organic rank.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><ButtonLink href="/rankings">Explore Rankings</ButtonLink><ButtonLink href="/dashboard" variant="secondary">Open Seller Dashboard</ButtonLink></div>
        </section>
        <section className="grid gap-4 md:grid-cols-4"><Metric label="Tools tracked" value="50+" detail="Original mock dataset" /><Metric label="Trusted sellers" value="1.1K" detail="Verified + monitored" /><Metric label="Reviews" value="24.8K" detail="Appeals protected" /><Metric label="Boost rule" value="0" detail="Paid rank influence" /></section>
        <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4"><SectionTitle eyebrow="Top organic tools" title="Community-ranked tools" text="Sponsored tools can get visibility, but these cards are ranked by trust, reviews, freshness, and engagement." />{topTools.map((tool, index) => <ToolCard key={tool.slug} tool={tool} rank={index + 1} />)}</div>
          <div className="space-y-4"><Card className="p-6"><h2 className="text-2xl font-black">Game hubs</h2><p className="mt-2 text-sm leading-6 text-slate-400">Users usually know the game first. Standard turns every game into a focused marketplace page.</p><div className="mt-5 grid gap-2">{games.slice(0,6).map(game => <Link key={game.slug} href={`/games/${game.slug}`} className="flex justify-between rounded-2xl border border-white/10 bg-slate-950/40 p-4 hover:border-purple-400/30"><span>{game.name}</span><span className="text-slate-500">{game.tools} tools</span></Link>)}</div></Card><Card className="p-6"><h2 className="text-2xl font-black">Marketplace mechanics</h2><div className="mt-4 space-y-3 text-sm text-slate-400"><p>✓ Pinned and bumped listings</p><p>✓ Seller trust and status</p><p>✓ Review appeals handled by admins</p><p>✓ Reports, restrictions, and audit logs</p></div></Card></div>
        </section>
      </div>
    </main>
  );
}
