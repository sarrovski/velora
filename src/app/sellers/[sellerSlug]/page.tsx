import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Card, Metric, MiniStat, Shell, StatusBadge } from "@/components/ui";
import { sellers, tools } from "@/lib/data";
import { ToolCard } from "@/components/tool-card";

export default function SellerPage({ params }: { params: { sellerSlug: string } }) {
  const seller = sellers.find(s => s.slug === params.sellerSlug);
  if (!seller) notFound();
  const sellerTools = tools.filter(t => t.sellerSlug === seller.slug);
  return <Shell><Nav /><section className="mt-12 rounded-3xl border border-purple-400/30 bg-white/[0.035] p-8"><div className="flex flex-col justify-between gap-5 md:flex-row"><div><StatusBadge value={seller.status} /><h1 className="mt-4 text-5xl font-black">{seller.name}</h1><p className="mt-3 max-w-3xl text-slate-400">{seller.description}</p></div><div className="grid min-w-[260px] gap-2"><MiniStat label="Trust score" value={`${seller.trustScore}/100`} /><MiniStat label="Plan" value={seller.plan} /></div></div></section><section className="mt-8 grid gap-4 md:grid-cols-4"><Metric label="Positive" value={String(seller.positive)} /><Metric label="Neutral" value={String(seller.neutral)} /><Metric label="Negative" value={String(seller.negative)} /><Metric label="Dispute rate" value={seller.disputeRate} /></section><section className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]"><div className="space-y-4"><h2 className="text-2xl font-black">Seller catalog</h2>{sellerTools.map((tool, i) => <ToolCard key={tool.slug} tool={tool} rank={i+1} />)}</div><aside className="space-y-4"><Card className="p-5"><h3 className="text-xl font-bold">Seller history</h3><div className="mt-4 space-y-3 text-sm text-slate-400"><p>Joined: {seller.joined}</p><p>Response time: {seller.responseTime}</p><p>Product slots: {seller.productSlots}</p><p>Status: {seller.status}</p></div></Card><Card className="p-5"><h3 className="text-xl font-bold">Trust note</h3><p className="mt-3 text-sm leading-6 text-slate-400">Users can view seller reliability before leaving Standard. Restricted sellers and suspended listings are clearly marked.</p></Card></aside></section></Shell>;
}
