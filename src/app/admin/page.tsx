"use client";

import { useState } from "react";
import { PageShell, PublicNav } from "@/components/layout/Nav";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { plans, reviews, sellers, tools } from "@/lib/data";

const tabs = ["Overview", "Sellers", "Products", "Reviews", "Boosts", "Plans", "Audit"];

const auditLogs = [
  "Admin approved PhantomX Tracker",
  "Boost campaign activated for PhantomX Tracker",
  "Review appeal created by DevStudio",
  "Shadow Overlay submitted for review",
  "Admin paused a suspicious boost placement",
  "Admin forced tool status visibility on a flagged product",
];

export default function AdminPage() {
  const [tab, setTab] = useState("Overview");
  const openAppeals = reviews.filter((review) => review.appealStatus === "Pending Appeal").length;
  const pendingProducts = tools.filter((tool) => tool.publicationStatus === "Pending Review").length;

  return (
    <PageShell>
      <PublicNav />
      <main className="mx-auto max-w-7xl px-6 py-8">
        <section className="mt-4">
          <Badge tone="red">Admin Control</Badge>
          <h1 className="mt-4 text-5xl font-black tracking-tight">Platform Control Center</h1>
          <p className="mt-3 max-w-2xl text-slate-400">Full control over sellers, products, reviews, appeals, boosts, plans, and platform trust.</p>
        </section>
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">{tabs.map((item) => <button key={item} onClick={() => setTab(item)} className={`rounded-xl px-4 py-2 text-sm font-semibold ${tab === item ? "bg-white text-slate-950" : "border border-white/10 bg-white/[0.04] text-slate-300"}`}>{item}</button>)}</div>
        <section className="mt-6 grid gap-4 md:grid-cols-4"><Metric label="Sellers" value={String(sellers.length)} detail="Trusted accounts" /><Metric label="Products" value={String(tools.length)} detail={`${pendingProducts} pending`} /><Metric label="Active Boosts" value="312" detail="$14.8K monthly" /><Metric label="Open Appeals" value={String(openAppeals)} detail="Needs admin review" /></section>
        <div className="mt-8">{tab === "Overview" && <Overview />}{tab === "Sellers" && <SellerControl />}{tab === "Products" && <ProductModeration />}{tab === "Reviews" && <ReviewAppeals />}{tab === "Boosts" && <BoostControl />}{tab === "Plans" && <PlanControl />}{tab === "Audit" && <Audit />}</div>
      </main>
    </PageShell>
  );
}

function Metric({ label, value, detail }: { label: string; value: string; detail: string }) { return <Card className="p-5"><p className="text-sm text-slate-400">{label}</p><p className="mt-3 text-3xl font-black">{value}</p><p className="mt-1 text-xs text-slate-500">{detail}</p></Card>; }
function Panel({ title, children }: { title: string; children: React.ReactNode }) { return <Card className="overflow-hidden"><div className="border-b border-white/10 p-5"><h2 className="text-xl font-bold">{title}</h2></div><div className="p-5">{children}</div></Card>; }
function Overview() { return <div className="grid gap-6 xl:grid-cols-2"><SellerControl compact /><ProductModeration compact /><ReviewAppeals compact /><BoostControl compact /></div>; }
function SellerControl({ compact = false }: { compact?: boolean }) { return <Panel title="Seller Control"><div className="space-y-3">{sellers.map((seller) => <div key={seller.slug} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4"><div><div className="font-semibold">{seller.name}</div><div className="mt-1 text-xs text-slate-500">{seller.plan} plan • trust {seller.trustScore}/100</div></div><StatusBadge value={seller.verified ? "Verified" : "Pending"} /></div>)}</div>{!compact && <p className="mt-4 text-sm leading-6 text-slate-400">Admins can verify sellers, adjust trust score, suspend accounts, and review subscription limits.</p>}</Panel>; }
function ProductModeration({ compact = false }: { compact?: boolean }) { return <Panel title="Product Moderation"><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="border-b border-white/10 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-4 py-3">Product</th><th className="px-4 py-3">Seller</th><th className="px-4 py-3">Platform</th><th className="px-4 py-3">Tool</th><th className="px-4 py-3 text-right">Actions</th></tr></thead><tbody>{tools.slice(0, compact ? 3 : tools.length).map((tool) => <tr key={tool.slug} className="border-b border-white/5 last:border-0"><td className="px-4 py-4 font-semibold">{tool.name}</td><td className="px-4 py-4 text-slate-400">{tool.seller}</td><td className="px-4 py-4"><StatusBadge value={tool.publicationStatus} /></td><td className="px-4 py-4"><StatusBadge value={tool.toolStatus} /></td><td className="px-4 py-4"><div className="flex justify-end gap-2"><button className="rounded-lg border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-300">Approve</button><button className="rounded-lg border border-red-400/20 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-300">Suspend</button></div></td></tr>)}</tbody></table></div></Panel>; }
function ReviewAppeals({ compact = false }: { compact?: boolean }) { return <Panel title="Review Appeals"><div className="space-y-3">{reviews.slice(0, compact ? 2 : reviews.length).map((review) => <div key={review.id} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"><div className="flex items-start justify-between gap-4"><div><div className="font-semibold">{review.title}</div><p className="mt-1 text-sm text-slate-400">{review.body}</p><div className="mt-2 text-xs text-slate-500">{review.toolSlug} • by {review.user}</div></div><StatusBadge value={review.appealStatus} /></div><div className="mt-4 flex gap-2"><button className="rounded-lg border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-300">Approve Appeal</button><button className="rounded-lg border border-red-400/20 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-300">Deny Appeal</button></div></div>)}</div></Panel>; }
function BoostControl({ compact = false }: { compact?: boolean }) { const boosts = [{product:"PhantomX Tracker", status:"Active", placement:"Top sponsored slot", spend:"$49"},{product:"Shadow Overlay", status:"Paused", placement:"Game rankings", spend:"$19"}]; return <Panel title="Boost Control"><div className="space-y-3">{boosts.slice(0, compact ? 2 : boosts.length).map((boost) => <div key={boost.product} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4"><div><div className="font-semibold">{boost.product}</div><div className="mt-1 text-xs text-slate-500">{boost.placement} • {boost.spend}</div></div><StatusBadge value={boost.status} /></div>)}</div></Panel>; }
function PlanControl() { return <Panel title="Plan Control"><div className="grid gap-4 md:grid-cols-3">{plans.map((plan) => <div key={plan.name} className={`rounded-2xl border p-5 ${plan.highlighted ? "border-purple-400/30 bg-purple-500/10" : "border-white/10 bg-slate-950/40"}`}><div className="text-xl font-black">{plan.name}</div><div className="mt-2 text-sm text-slate-400">{plan.productLimit} products • {plan.boosts} boosts • {plan.appeals} appeals</div></div>)}</div></Panel>; }
function Audit() { return <Panel title="Audit Log"><div className="grid gap-3 md:grid-cols-2">{auditLogs.map((log) => <div key={log} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300">{log}<div className="mt-1 text-xs text-slate-500">Just now • Admin</div></div>)}</div></Panel>; }
