import { Nav } from "@/components/nav";
import { ToolCard } from "@/components/tool-card";
import { Badge, Card, Shell, SectionTitle } from "@/components/ui";
import { features, games, tools } from "@/lib/data";
import { organicTools } from "@/lib/helpers";

export default function RankingsPage() {
  const ranked = organicTools();
  return (
    <Shell><Nav /><section className="mt-12"><SectionTitle eyebrow="Rankings" title="Find the best tools by game, feature, and trust" text="Filters are shown as product UX placeholders in this static MVP. Backend filtering comes later." /></section>
      <section className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-4"><Card className="p-5"><h2 className="font-bold">Filters</h2><div className="mt-4 space-y-4"><Filter title="Games" items={games.slice(0,7).map(g => g.name)} /><Filter title="Features" items={features.slice(0,8)} /><Filter title="Status" items={["Working", "Updating", "Not Working", "Verified seller", "Sponsored", "Pinned"]} /></div></Card><Card className="p-5"><Badge tone="green">Ranking rule</Badge><p className="mt-3 text-sm leading-6 text-slate-400">Boosts, bumps, and pins are visible, but never included in organic rank score.</p></Card></aside>
        <div className="space-y-4">{ranked.map((tool, index) => <ToolCard key={tool.slug} tool={tool} rank={index+1} />)}</div>
      </section></Shell>
  );
}
function Filter({ title, items }: { title: string; items: string[] }) { return <div><h3 className="text-xs font-bold uppercase tracking-wide text-slate-500">{title}</h3><div className="mt-2 flex flex-wrap gap-2">{items.map(item => <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">{item}</span>)}</div></div>; }
