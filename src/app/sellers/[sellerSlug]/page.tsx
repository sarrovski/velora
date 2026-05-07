import { notFound } from "next/navigation";
import { PageShell, PublicNav } from "@/components/layout/Nav";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { sellers, tools } from "@/lib/data";

export function generateStaticParams() {
  return sellers.map((seller) => ({ sellerSlug: seller.slug }));
}

export default function SellerPage({ params }: { params: { sellerSlug: string } }) {
  const seller = sellers.find((item) => item.slug === params.sellerSlug);
  if (!seller) notFound();
  const catalog = tools.filter((tool) => tool.sellerSlug === seller.slug);

  return (
    <PageShell>
      <PublicNav />
      <main className="mx-auto max-w-7xl px-6 py-10">
        <Card className="border-purple-400/30 p-8"><Badge tone={seller.verified ? "green" : "amber"}>{seller.verified ? "Verified seller" : "Pending seller"}</Badge><h1 className="mt-4 text-5xl font-black">{seller.name}</h1><p className="mt-3 max-w-3xl text-slate-400">{seller.description}</p><div className="mt-6 grid gap-4 md:grid-cols-4"><Mini label="Trust Score" value={`${seller.trustScore}/100`} /><Mini label="Plan" value={seller.plan} /><Mini label="Products" value={`${catalog.length}/${seller.productLimit}`} /><Mini label="Joined" value={seller.joinedAt} /></div></Card>
        <section className="mt-8 grid gap-4 md:grid-cols-3">{catalog.map((tool) => <Card key={tool.slug} className="p-5"><div className="flex items-start justify-between gap-3"><div><h2 className="text-xl font-bold">{tool.name}</h2><p className="mt-1 text-sm text-slate-500">{tool.game} • {tool.category}</p></div>{tool.showToolStatus && <StatusBadge value={tool.toolStatus} />}</div><p className="mt-4 text-sm leading-6 text-slate-400">{tool.description}</p><div className="mt-4 flex flex-wrap gap-2">{tool.features.slice(0,3).map((feature) => <span key={feature} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-slate-300">{feature}</span>)}</div><div className="mt-5 grid grid-cols-3 gap-2"><Mini label="Rating" value={tool.rating ? String(tool.rating) : "—"} /><Mini label="Reviews" value={String(tool.reviews)} /><Mini label="Clicks" value={String(tool.clicks)} /></div><Button href={`/tools/${tool.slug}`} className="mt-5 w-full">View Tool</Button></Card>)}</section>
      </main>
    </PageShell>
  );
}

function Mini({ label, value }: { label: string; value: string }) { return <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"><div className="text-lg font-black">{value}</div><div className="mt-1 text-xs text-slate-500">{label}</div></div>; }
