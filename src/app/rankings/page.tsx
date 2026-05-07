import Link from "next/link";
import { PageShell, PublicNav } from "@/components/layout/Nav";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { featureOptions, games, publicTools } from "@/lib/data";

export default function RankingsPage({ searchParams }: { searchParams?: { game?: string; feature?: string } }) {
  const selectedGame = searchParams?.game || "";
  const selectedFeature = searchParams?.feature || "";
  const filtered = publicTools.filter((tool) => {
    const gameOk = !selectedGame || tool.game === selectedGame;
    const featureOk = !selectedFeature || tool.features.includes(selectedFeature);
    return gameOk && featureOk;
  }).sort((a,b) => b.rankScore - a.rankScore);

  return (
    <PageShell>
      <PublicNav />
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Badge tone="purple">Community rankings</Badge>
            <h1 className="mt-4 text-5xl font-black tracking-tight">Compare tools by game and features</h1>
            <p className="mt-3 max-w-2xl text-slate-400">Filter by game and feature, then compare status, rating, reviews, and trust.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button href="/rankings" variant="secondary">All</Button>
            {games.slice(0,3).map((game) => <Button key={game} href={`/rankings?game=${encodeURIComponent(game)}`} variant={selectedGame===game ? "primary" : "secondary"}>{game}</Button>)}
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {featureOptions.slice(0,8).map((feature) => <Link key={feature} href={`/rankings?${selectedGame ? `game=${encodeURIComponent(selectedGame)}&` : ""}feature=${encodeURIComponent(feature)}`} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300 hover:border-purple-400/40">{feature}</Link>)}
        </div>
        <Card className="mt-8 overflow-hidden">
          {filtered.map((tool, index) => (
            <div key={tool.slug} className="grid gap-4 border-b border-white/10 p-5 last:border-0 lg:grid-cols-[70px_1fr_220px] lg:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-lg font-black text-purple-200">#{index + 1}</div>
              <div>
                <div className="flex flex-wrap items-center gap-2"><h2 className="text-xl font-bold">{tool.name}</h2>{tool.showToolStatus && <StatusBadge value={tool.toolStatus} />}{tool.sponsored && <Badge tone="purple">Sponsored</Badge>}</div>
                <p className="mt-1 text-sm text-slate-500">{tool.game} • {tool.category} • by {tool.seller}</p>
                <div className="mt-3 flex flex-wrap gap-2">{tool.features.map((feature) => <span key={feature} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-slate-300">{feature}</span>)}</div>
              </div>
              <div className="flex flex-col gap-3 lg:items-end"><div className="text-right"><div className="text-xl font-black">★ {tool.rating}</div><div className="text-xs text-slate-500">{tool.reviews} reviews • {tool.clicks} clicks</div></div><Button href={`/tools/${tool.slug}`}>View Tool</Button></div>
            </div>
          ))}
        </Card>
      </section>
    </PageShell>
  );
}
