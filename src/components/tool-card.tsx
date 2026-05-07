import Link from "next/link";
import { ToolStatus } from "@/lib/data";
import { Badge, Card, Pill, StatusBadge } from "./ui";

export function ToolCard({ tool, rank }: { tool: any; rank?: number }) {
  return (
    <Card className="p-5 transition hover:border-purple-400/30 hover:bg-purple-500/[0.06]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            {rank && <Badge tone="default">#{rank}</Badge>}
            <h3 className="text-xl font-bold">{tool.name}</h3>
            <StatusBadge value={tool.toolStatus as ToolStatus} />
            {tool.sponsored && <Badge>Sponsored</Badge>}
            {tool.pinned && <Badge tone="blue">Pinned</Badge>}
            {tool.bumped && <Badge tone="amber">Bumped</Badge>}
          </div>
          <p className="mt-1 text-sm text-slate-500">{tool.game} • {tool.category} • by {tool.seller}</p>
          <p className="mt-3 text-sm leading-6 text-slate-400">{tool.description}</p>
        </div>
        <div className="shrink-0 text-right">
          <div className="text-2xl font-black">★ {tool.rating || "—"}</div>
          <div className="text-xs text-slate-500">{tool.reviews} reviews</div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">{tool.features.slice(0, 4).map((f: string) => <Pill key={f}>{f}</Pill>)}</div>
      <div className="mt-5 flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div className="flex flex-wrap gap-2 text-xs text-slate-500"><span>{tool.views.toLocaleString()} views</span><span>•</span><span>{tool.replies} replies</span><span>•</span><span>Updated {tool.lastUpdated}</span></div>
        <Link href={`/tools/${tool.slug}`} className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-4 py-2 text-center text-sm font-semibold">View Tool</Link>
      </div>
    </Card>
  );
}
