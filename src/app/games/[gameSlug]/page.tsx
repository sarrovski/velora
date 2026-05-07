import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { ToolCard } from "@/components/tool-card";
import { Card, Metric, Shell, SectionTitle } from "@/components/ui";
import { games, sellers, tools } from "@/lib/data";

export default function GamePage({ params }: { params: { gameSlug: string } }) {
  const game = games.find(g => g.slug === params.gameSlug);
  if (!game) notFound();
  const gameTools = tools.filter(t => t.gameSlug === game.slug);
  const sponsored = gameTools.filter(t => t.sponsored || t.pinned);
  const trustedSellers = sellers.filter(s => gameTools.some(t => t.sellerSlug === s.slug));
  return <Shell><Nav /><section className="mt-12"><SectionTitle eyebrow="Game hub" title={`${game.name} tools`} text={`Top ${game.genre} tools, seller trust, status updates, sponsored slots, and recent bumps.`} /></section><section className="mt-8 grid gap-4 md:grid-cols-4"><Metric label="Tools" value={String(gameTools.length)} detail="Listed tools" /><Metric label="Sponsored" value={String(sponsored.length)} detail="Clearly labeled" /><Metric label="Trusted sellers" value={String(trustedSellers.length)} detail="Active here" /><Metric label="Hot market" value={game.hot ? "Yes" : "No"} detail="Demand signal" /></section><section className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]"><div className="space-y-4"><h2 className="text-2xl font-black">Top tools</h2>{gameTools.map((tool, index) => <ToolCard key={tool.slug} tool={tool} rank={index+1} />)}</div><aside className="space-y-4"><Card className="p-5"><h3 className="text-xl font-bold">Pinned / boosted</h3><div className="mt-4 space-y-3">{sponsored.map(t => <div key={t.slug} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"><div className="font-semibold">{t.name}</div><div className="text-xs text-slate-500">{t.seller} • {t.lastUpdated}</div></div>)}</div></Card><Card className="p-5"><h3 className="text-xl font-bold">Trusted sellers</h3><div className="mt-4 space-y-3">{trustedSellers.map(s => <div key={s.slug} className="flex justify-between rounded-2xl border border-white/10 bg-slate-950/40 p-4"><span>{s.name}</span><span className="text-purple-200">{s.trustScore}</span></div>)}</div></Card></aside></section></Shell>;
}
