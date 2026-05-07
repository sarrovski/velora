import { notFound } from "next/navigation";
import { getGame, tools, offers } from "@/lib/data";
import { Nav, SectionTitle, Shell, Stat, Card, Badge } from "@/components/ui";
import { ToolCard } from "@/components/tool-card";

export default function GamePage({ params }: { params: { gameSlug: string } }) {
  const game = getGame(params.gameSlug);
  if (!game) notFound();
  const gameTools = tools.filter((tool) => tool.gameSlug === game.slug).sort((a, b) => b.integrityIndex - a.integrityIndex);
  const sponsored = gameTools.filter((tool) => tool.sponsored || tool.pinned || tool.bumped);
  return <Shell><Nav /><SectionTitle eyebrow="Game hub" title={game.name} text={game.description} /><section className="mt-8 grid gap-4 md:grid-cols-4"><Stat label="Tools" value={gameTools.length} detail="Tracked listings" /><Stat label="Top score" value={gameTools[0]?.integrityIndex || 0} detail="Integrity Index" /><Stat label="Buy options" value={offers.filter((offer) => gameTools.some((tool) => tool.slug === offer.toolSlug)).length} detail="Providers + resellers" /><Stat label="Sponsored" value={sponsored.length} detail="Clearly separated" /></section>{sponsored.length > 0 && <><SectionTitle eyebrow="Paid visibility" title="Sponsored, pinned and bumped" text="Paid visibility is shown separately and never changes organic rank." /><section className="mt-6 grid gap-4">{sponsored.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}</section></>}<SectionTitle eyebrow="Organic ranking" title={`Best ${game.name} tools`} /><section className="mt-6 grid gap-4">{gameTools.map((tool, index) => <ToolCard key={tool.slug} tool={tool} rank={index + 1} />)}</section><Card className="mt-8 p-6"><h2 className="text-2xl font-black">Game-specific trust notes</h2><p className="mt-2 text-sm leading-6 text-slate-400">Standard compares features, verified reviews, seller history, payment options and suspicious signal patterns for this game category.</p><div className="mt-4 flex flex-wrap gap-2"><Badge tone="green">Verified review weighting</Badge><Badge tone="amber">Payment risk labels</Badge><Badge tone="purple">Reseller offers</Badge></div></Card></Shell>;
}
