import Link from "next/link";
import { auditLogs, boosts, plans, products, reviews, seller } from "@/lib/data";
import { Badge, Card, Mini, Nav, SectionTitle, Shell, Status } from "@/lib/ui";

export default function AdminPage() {
  const pendingProducts = products.filter((p) => p.platformStatus === "Pending Review").length;
  const pendingAppeals = reviews.filter((r) => r.appealStatus === "Pending Appeal").length;

  return (
    <Shell wide>
      <Nav />
      <section className="mt-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <SectionTitle eyebrow="Admin control" title="Platform Control Center" text="Control sellers, products, boosts, review appeals, plans, moderation and trust." />
      </section>
      <section className="mt-6 grid gap-4 md:grid-cols-5"><Mini label="Sellers" value="1" /><Mini label="Products" value={products.length} /><Mini label="Pending products" value={pendingProducts} /><Mini label="Boosts" value={boosts.length} /><Mini label="Appeals" value={pendingAppeals} /></section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_420px]">
        <div className="space-y-6">
          <Card className="p-6"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-center"><div><Badge tone="green">Seller control</Badge><h2 className="mt-3 text-2xl font-black">{seller.name}</h2><p className="mt-1 text-sm text-slate-500">{seller.plan} plan • Trust score {seller.trustScore}/100 • {products.length}/{seller.productLimit} slots used</p></div><div className="flex flex-wrap gap-2"><button className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold">Remove verified</button><button className="rounded-xl border border-red-400/20 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-200">Suspend seller</button></div></div></Card>

          <Card className="overflow-hidden"><div className="border-b border-white/10 p-5"><h2 className="text-2xl font-black">Product moderation</h2><p className="mt-1 text-sm text-slate-400">Override publication status, tool status, visibility, and ranking eligibility.</p></div><div className="divide-y divide-white/10">{products.map((p) => <div key={p.id} className="grid gap-4 p-5 lg:grid-cols-[1fr_160px_160px_280px] lg:items-center"><div><h3 className="font-bold">{p.name}</h3><p className="mt-1 text-sm text-slate-500">{p.game} • {p.category}</p><p className="mt-2 text-xs text-slate-500">{p.healthNote}</p></div><PlatformBadge value={p.platformStatus} /><Status value={p.toolStatus} /><div className="flex flex-wrap justify-end gap-2"><Link className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold" href={`/tools/${p.slug}`}>Preview</Link><button className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-3 py-2 text-xs font-semibold">Approve</button><button className="rounded-xl border border-red-400/20 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-200">Suspend</button></div></div>)}</div></Card>

          <Card className="overflow-hidden"><div className="border-b border-white/10 p-5"><h2 className="text-2xl font-black">Review appeals</h2><p className="mt-1 text-sm text-slate-400">Sellers can appeal reviews. Admin makes the final decision.</p></div><div className="divide-y divide-white/10">{reviews.map((r) => <div key={r.id} className="grid gap-4 p-5 md:grid-cols-[1fr_160px_220px] md:items-center"><div><h3 className="font-bold">{r.title}</h3><p className="mt-1 text-sm text-slate-400">{r.body}</p><p className="mt-2 text-xs text-slate-500">By {r.user} • Helpful {r.helpful}</p></div><Badge tone={r.appealStatus === "Pending Appeal" ? "amber" : "slate"}>{r.appealStatus}</Badge><div className="flex justify-end gap-2"><button className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold">Deny</button><button className="rounded-xl border border-red-400/20 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-200">Remove review</button></div></div>)}</div></Card>
        </div>

        <aside className="space-y-6">
          <Card className="p-5"><h2 className="font-bold">Boost control</h2>{boosts.map((b) => <div key={b.id} className="mt-4 rounded-2xl border border-purple-400/20 bg-purple-500/10 p-4"><div className="font-semibold">{b.productName}</div><p className="mt-1 text-sm text-slate-400">{b.packageName} • {b.spend} • {b.clicks} clicks</p><div className="mt-3 flex gap-2"><button className="rounded-lg border border-white/10 px-2 py-1 text-xs">Pause</button><button className="rounded-lg border border-red-400/20 bg-red-500/10 px-2 py-1 text-xs text-red-200">Cancel</button></div></div>)}</Card>
          <Card className="p-5"><h2 className="font-bold">Plans</h2><div className="mt-4 space-y-2">{plans.map((p) => <div key={p.name} className="rounded-xl border border-white/10 bg-slate-950/50 p-3 text-sm"><div className="flex justify-between"><span>{p.name}</span><span>{p.price}</span></div><div className="mt-1 text-xs text-slate-500">{p.productLimit} products • {p.boostLimit} boosts • {p.appealLimit} appeals</div></div>)}</div></Card>
          <Card className="p-5"><h2 className="font-bold">Audit log</h2><div className="mt-4 space-y-2 text-sm text-slate-400">{auditLogs.map((log) => <p key={log}>• {log}</p>)}</div></Card>
          <Card className="p-5"><h2 className="font-bold">Trust rules</h2><div className="mt-3 space-y-2 text-sm leading-6 text-slate-400"><p>Boosts must stay labeled Sponsored.</p><p>Boosts never affect organic rank.</p><p>Admins can override abusive tool statuses.</p><p>Sellers cannot remove reviews directly.</p></div></Card>
        </aside>
      </section>
    </Shell>
  );
}
function PlatformBadge({ value }: { value: string }) { return <Badge tone={value === "Published" ? "green" : value === "Pending Review" ? "amber" : value === "Suspended" ? "red" : "slate"}>{value}</Badge>; }
