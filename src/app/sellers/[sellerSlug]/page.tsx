import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, Card, FeaturePill, Metric, Nav, Shell, ToolStatusBadge } from "@/components/ui";
import { tools } from "@/lib/data";

export default function SellerPage({ params }: { params: { sellerSlug: string } }) {
  if (params.sellerSlug !== "devstudio") notFound();
  const sellerTools = tools.filter((tool) => tool.sellerSlug === params.sellerSlug);

  return (
    <Shell>
      <Nav />
      <section className="mt-12 rounded-3xl border border-purple-400/30 bg-white/[0.035] p-8 shadow-2xl shadow-purple-950/20">
        <p className="text-sm font-medium text-emerald-300">Verified seller</p>
        <h1 className="mt-3 text-5xl font-black tracking-tight">DevStudio</h1>
        <p className="mt-4 max-w-3xl text-slate-400">DevStudio builds polished analytics, overlay, and utility tools for competitive players who want reliable products, transparent reviews, and clear tool status.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-4"><Metric label="Trust Score" value="96/100" /><Metric label="Plan" value="Pro" /><Metric label="Products" value={`${sellerTools.length}/10`} /><Metric label="Reviews" value="410+" /></div>
      </section>
      <section className="mt-8">
        <div className="flex items-end justify-between gap-4"><div><h2 className="text-2xl font-black">Seller Catalog</h2><p className="mt-1 text-sm text-slate-400">Public products maintained by DevStudio.</p></div><Button href="/rankings" variant="secondary">View rankings</Button></div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">{sellerTools.map((tool) => <Card key={tool.slug} className="p-5"><div className="flex items-start justify-between gap-3"><div><h3 className="text-xl font-bold">{tool.name}</h3><p className="mt-1 text-sm text-slate-500">{tool.game} • {tool.category}</p></div><ToolStatusBadge value={tool.toolStatus} /></div><p className="mt-4 text-sm leading-6 text-slate-400">{tool.description}</p><div className="mt-4 flex flex-wrap gap-2">{tool.features.slice(0,3).map((feature)=><FeaturePill key={feature}>{feature}</FeaturePill>)}</div><div className="mt-5 grid grid-cols-3 gap-2 text-sm"><Mini label="Rating" value={tool.rating ? String(tool.rating) : "—"}/><Mini label="Reviews" value={String(tool.reviews)}/><Mini label="Clicks" value={String(tool.clicks)}/></div><Button href={`/tools/${tool.slug}`}>View Tool</Button></Card>)}</div>
      </section>
    </Shell>
  );
}

function Mini({ label, value }: { label: string; value: string }) { return <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"><div className="text-lg font-black">{value}</div><div className="mt-1 text-xs text-slate-500">{label}</div></div>; }
