import { auditLogs, boosts, plans, reviews, tools } from "@/lib/data";
import { Badge, Card, Metric, Nav, PlatformStatusBadge, Shell, ToolStatusBadge } from "@/components/ui";

const sellers = [
  { name: "DevStudio", plan: "Pro", trust: 96, status: "Verified", products: "3/10" },
  { name: "AimForge Labs", plan: "Starter", trust: 72, status: "Pending", products: "2/5" },
];

export default function AdminPage() {
  const appeals = reviews.filter((review) => review.appealStatus === "Pending Appeal");
  return (
    <Shell>
      <Nav />
      <section className="mt-12"><p className="text-sm font-medium text-red-300">Admin Control</p><h1 className="mt-3 text-5xl font-black tracking-tight">Platform Control Center</h1><p className="mt-3 max-w-2xl text-slate-400">Full control over sellers, products, reviews, appeals, boosts, plans, and marketplace trust.</p></section>
      <section className="mt-8 grid gap-4 md:grid-cols-4"><Metric label="Sellers" value="1.1K" detail="42 pending review"/><Metric label="Products" value="5.6K" detail="118 pending review"/><Metric label="Active Boosts" value="312" detail="$14.8K monthly"/><Metric label="Open Appeals" value={String(appeals.length)} detail="Needs admin review"/></section>
      <section className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]"><Panel title="Seller Control"><div className="space-y-3">{sellers.map((seller)=><AdminRow key={seller.name} title={seller.name} meta={`${seller.plan} plan • ${seller.products} products`} right={<div className="text-right"><Badge tone={seller.status === "Verified" ? "green" : "amber"}>{seller.status}</Badge><div className="mt-2 text-xs text-slate-500">Trust {seller.trust}/100</div></div>} />)}</div></Panel><Panel title="Plans"><div className="grid gap-3">{plans.map((plan)=><div key={plan.name} className={`rounded-2xl border p-4 ${plan.recommended ? "border-purple-400/30 bg-purple-500/10" : "border-white/10 bg-slate-950/40"}`}><div className="font-bold">{plan.name}</div><div className="mt-1 text-xs text-slate-500">{plan.products} products • {plan.boosts} boosts</div></div>)}</div></Panel></section>
      <section className="mt-6"><Panel title="Product Moderation"><div className="overflow-x-auto"><table className="w-full min-w-[900px] text-left text-sm"><thead className="border-b border-white/10 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-4 py-3">Product</th><th className="px-4 py-3">Seller</th><th className="px-4 py-3">Platform</th><th className="px-4 py-3">Tool</th><th className="px-4 py-3 text-right">Actions</th></tr></thead><tbody>{tools.map((tool)=><tr key={tool.slug} className="border-b border-white/5 last:border-0"><td className="px-4 py-4 font-semibold">{tool.name}</td><td className="px-4 py-4 text-slate-400">{tool.seller}</td><td className="px-4 py-4"><PlatformStatusBadge value={tool.platformStatus}/></td><td className="px-4 py-4"><ToolStatusBadge value={tool.toolStatus}/></td><td className="px-4 py-4"><div className="flex justify-end gap-2"><button className="rounded-lg border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-300">Approve</button><button className="rounded-lg border border-red-400/20 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-300">Suspend</button></div></td></tr>)}</tbody></table></div></Panel></section>
      <section className="mt-6 grid gap-6 xl:grid-cols-2"><Panel title="Review Appeals"><div className="space-y-3">{appeals.map((review)=><AdminRow key={review.title} title={review.title} meta={`${review.toolSlug} • Seller appeal`} right={<Badge tone="amber">Pending</Badge>} />)}</div></Panel><Panel title="Boost Control"><div className="space-y-3">{boosts.map((boost)=><AdminRow key={boost.product} title={boost.product} meta={`${boost.package} • ${boost.spend}`} right={<Badge tone={boost.status === "Active" ? "green" : "amber"}>{boost.status}</Badge>} />)}</div></Panel></section>
      <section className="mt-6"><Panel title="Audit Log"><div className="grid gap-3 md:grid-cols-2">{auditLogs.map((log)=><div key={log} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300">{log}<div className="mt-1 text-xs text-slate-500">Just now • Admin</div></div>)}</div></Panel></section>
    </Shell>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) { return <section className="rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20"><div className="border-b border-white/10 p-5"><h2 className="text-xl font-bold">{title}</h2></div><div className="p-5">{children}</div></section>; }
function AdminRow({ title, meta, right }: { title: string; meta: string; right: React.ReactNode }) { return <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4"><div><div className="font-semibold">{title}</div><div className="mt-1 text-xs text-slate-500">{meta}</div></div>{right}</div>; }
