import Link from "next/link";
import { tools, paymentsFor } from "@/lib/data";
import { riskTone, scoreTone } from "@/lib/helpers";
import { Badge, Card, Button } from "@/components/ui";

type Tool = (typeof tools)[number];

export function ToolCard({ tool, rank }: { tool: Tool; rank?: number }) {
  const payments = paymentsFor(tool.paymentIds).slice(0, 4);
  return (
    <Card className="p-5 transition hover:border-purple-400/40 hover:bg-purple-500/[0.06]">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {rank && <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-sm font-black text-purple-200">#{rank}</span>}
            <Link href={`/tools/${tool.slug}`} className="text-xl font-black hover:text-purple-200">{tool.name}</Link>
            <Badge tone={riskTone(tool.toolStatus) as any}>{tool.toolStatus}</Badge>
            {tool.sponsored && <Badge tone="purple">Sponsored</Badge>}
            {tool.pinned && <Badge tone="cyan">Pinned</Badge>}
            {tool.bumped && <Badge tone="amber">Bumped</Badge>}
          </div>
          <p className="mt-2 text-sm text-slate-500">{tool.game} • {tool.category} • {tool.architecture} • by {tool.providerName}</p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">{tool.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tool.features.slice(0, 5).map((feature) => <span key={feature} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-slate-300">{feature}</span>)}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {payments.map((method) => <Badge key={method.id} tone={riskTone(method.risk) as any}>{method.name}</Badge>)}
          </div>
        </div>
        <div className="grid min-w-[210px] gap-3">
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-right">
            <div className="text-2xl font-black">{tool.integrityIndex}/100</div>
            <div className={`text-xs ${scoreTone(tool.integrityIndex) === "green" ? "text-emerald-300" : scoreTone(tool.integrityIndex) === "amber" ? "text-amber-300" : "text-red-300"}`}>Integrity Index</div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-center text-sm">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3"><div className="font-bold">★ {tool.rating || "—"}</div><div className="text-xs text-slate-500">Rating</div></div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3"><div className="font-bold">{tool.verifiedReviews}</div><div className="text-xs text-slate-500">Verified</div></div>
          </div>
          <Button href={`/tools/${tool.slug}`}>View Tool</Button>
        </div>
      </div>
    </Card>
  );
}
