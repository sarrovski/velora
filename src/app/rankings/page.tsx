import Link from "next/link";
import { Badge, FeaturePill, Nav, Shell, ToolStatusBadge } from "@/components/ui";
import { tools } from "@/lib/data";

export default function RankingsPage({ searchParams }: { searchParams?: { game?: string } }) {
  const filtered = searchParams?.game ? tools.filter((tool) => tool.game === searchParams.game) : tools;
  const ranked = filtered.filter((tool) => tool.platformStatus !== "Draft");

  return (
    <Shell>
      <Nav />
      <section className="mt-12">
        <p className="text-sm font-medium text-purple-300">Community rankings</p>
        <h1 className="mt-3 text-5xl font-black">Ranked gaming tools</h1>
        <p className="mt-3 max-w-2xl text-slate-400">Compare tools by game, features, reviews, status, seller trust, and organic rank.</p>
      </section>
      <section className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
        {ranked.map((tool, index) => (
          <div key={tool.slug} className="grid gap-4 border-b border-white/10 p-5 last:border-0 lg:grid-cols-[70px_1fr_220px] lg:items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-lg font-black text-purple-200">#{index + 1}</div>
            <div>
              <div className="flex flex-wrap items-center gap-2"><h2 className="text-xl font-bold">{tool.name}</h2><ToolStatusBadge value={tool.toolStatus} />{tool.sponsored && <Badge>Sponsored</Badge>}</div>
              <p className="mt-1 text-sm text-slate-500">{tool.game} • {tool.category} • by {tool.seller}</p>
              <div className="mt-3 flex flex-wrap gap-2">{tool.features.map((feature) => <FeaturePill key={feature}>{feature}</FeaturePill>)}</div>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <div className="text-right"><div className="text-xl font-black">★ {tool.rating || "—"}</div><div className="text-xs text-slate-500">{tool.reviews} reviews • {tool.clicks} clicks</div></div>
              <Link href={`/tools/${tool.slug}`} className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-4 py-2 text-center text-sm font-semibold">View Tool</Link>
            </div>
          </div>
        ))}
      </section>
    </Shell>
  );
}
