import Link from "next/link";
import { analytics, boosts, boostPackages, products, reviews, seller } from "@/lib/data";
import { Badge, Button, Card, Mini, Nav, SectionTitle, Shell, Status } from "@/lib/ui";

const tabs = ["Overview", "Products", "Builder", "Boosts", "Reviews", "Analytics", "Billing", "Settings"];

export default function DashboardPage() {
  const activeBoosts = boosts.filter((b) => b.status === "Active");
  const appeals = reviews.filter((r) => r.appealStatus === "Pending Appeal");
  const published = products.filter((p) => p.platformStatus === "Published").length;

  return (
    <Shell wide>
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 lg:min-h-[calc(100vh-64px)]">
          <Nav />
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="font-bold">{seller.name}</div>
                <div className="text-xs text-slate-500">{seller.email}</div>
              </div>
              <Badge tone="green">{seller.plan}</Badge>
            </div>
          </div>
          <div className="mt-6 space-y-1">
            {tabs.map((tab) => (
              <a key={tab} href={`#${tab.toLowerCase()}`} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/[0.05] hover:text-white">
                {tab}
              </a>
            ))}
          </div>
        </aside>

        <main>
          <section id="overview" className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionTitle eyebrow="Seller workspace" title="Seller Dashboard" text="Manage products, features, boosts, reviews, analytics, billing and settings from one place." />
            <Button href="#products">+ Add Product</Button>
          </section>

          <section className="mt-6 grid gap-4 md:grid-cols-4">
            <Mini label="Product slots" value={`${products.length}/${seller.productLimit}`} />
            <Mini label="Published" value={published} />
            <Mini label="Active boosts" value={activeBoosts.length} />
            <Mini label="Pending appeals" value={appeals.length} />
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_380px]">
            <div className="space-y-6">
              <Card className="p-5">
                <div className="flex items-center justify-between"><h2 className="text-xl font-bold">Seller Alerts</h2><Badge tone="cyan">Action center</Badge></div>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <Alert title="Boost ending soon" text="PhantomX Tracker boost ends on May 27." action="Manage boost" />
                  <Alert title="Product pending" text="Shadow Overlay is waiting for admin approval." action="View product" />
                  <Alert title="Review appeal" text="One appeal is waiting for admin decision." action="Open reviews" />
                </div>
              </Card>

              <Card id="products" className="overflow-hidden">
                <div className="border-b border-white/10 p-5"><h2 className="text-xl font-bold">Products</h2><p className="mt-1 text-sm text-slate-400">Control visibility, status, features, boosts, and next actions.</p></div>
                <div className="overflow-x-auto"><table className="w-full min-w-[1060px] text-left text-sm"><thead className="border-b border-white/10 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-4">Product</th><th className="px-5 py-4">Platform</th><th className="px-5 py-4">Tool</th><th className="px-5 py-4">Features</th><th className="px-5 py-4">Health</th><th className="px-5 py-4 text-right">Actions</th></tr></thead><tbody>{products.map((p) => <tr key={p.id} className="border-b border-white/5 last:border-0"><td className="px-5 py-5"><div className="font-semibold">{p.name}</div><div className="text-xs text-slate-500">{p.game} • {p.category}</div></td><td className="px-5 py-5"><PlatformBadge value={p.platformStatus} /></td><td className="px-5 py-5"><Status value={p.toolStatus} /></td><td className="px-5 py-5"><div className="flex max-w-[260px] flex-wrap gap-1.5">{p.features.slice(0, 3).map((f) => <span key={f} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-slate-300">{f}</span>)}{p.features.length > 3 && <Badge tone="slate">+{p.features.length - 3}</Badge>}</div></td><td className="px-5 py-5"><div className="max-w-[260px] text-xs leading-5 text-slate-400">{p.recommendedAction}</div></td><td className="px-5 py-5"><div className="flex justify-end gap-2"><Link className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold" href={`/tools/${p.slug}`}>Preview</Link><a className="rounded-xl border border-purple-400/20 bg-purple-500/10 px-3 py-2 text-xs font-semibold text-purple-200" href="#builder">Features</a><a className={`rounded-xl px-3 py-2 text-xs font-semibold ${p.platformStatus === "Published" ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500" : "cursor-not-allowed bg-white/10 text-slate-500"}`} href="#boosts">Boost</a></div></td></tr>)}</tbody></table></div>
              </Card>

              <Card id="builder" className="p-6">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start"><div><Badge>Product Builder</Badge><h2 className="mt-3 text-2xl font-black">Edit tool pages and features</h2><p className="mt-2 text-sm text-slate-400">Sellers build their public pages with sections: hero, screenshots, features, pricing, FAQ and changelog.</p></div><Button href="/tools/phantomx-tracker" variant="secondary">Preview page</Button></div>
                <div className="mt-5 grid gap-3 md:grid-cols-3">{["Hero", "Features", "Screenshots", "Pricing", "FAQ", "Changelog"].map((block) => <div key={block} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"><div className="font-semibold">{block}</div><div className="mt-1 text-xs text-slate-500">Editable section</div></div>)}</div>
              </Card>

              <Card id="analytics" className="p-6">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center"><div><Badge tone="cyan">Analytics</Badge><h2 className="mt-3 text-2xl font-black">Performance overview</h2></div><Badge tone="slate">Last 30 days</Badge></div>
                <div className="mt-5 grid gap-3 md:grid-cols-4"><Mini label="Views" value={analytics.productViews.toLocaleString()} /><Mini label="Clicks" value={analytics.outboundClicks.toLocaleString()} /><Mini label="CTR" value={analytics.conversionRate} /><Mini label="Rank" value={analytics.rankMovement} /></div>
                <div className="mt-6 grid gap-6 lg:grid-cols-2"><div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5"><h3 className="font-bold">Traffic trend</h3><div className="mt-5 flex h-40 items-end gap-2">{analytics.timeline.map((h, i) => <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-purple-600/40 to-cyan-300" style={{ height: `${h}%` }} />)}</div></div><div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5"><h3 className="font-bold">Sources</h3><div className="mt-5 space-y-4">{analytics.sources.map((s) => <div key={s.name}><div className="flex justify-between text-sm"><span>{s.name}</span><span className="text-slate-400">{s.share}%</span></div><div className="mt-2 h-2 rounded-full bg-white/10"><div className="h-full rounded-full bg-purple-400" style={{ width: `${s.share}%` }} /></div></div>)}</div></div></div>
              </Card>
            </div>

            <aside className="space-y-6">
              <Card id="boosts" className="p-5"><h2 className="font-bold">Boost Center</h2>{activeBoosts.map((b) => <div key={b.id} className="mt-4 rounded-2xl border border-purple-400/20 bg-purple-500/10 p-4"><div className="font-semibold">{b.productName}</div><p className="mt-1 text-sm text-slate-400">{b.packageName} • {b.clicks} clicks • {b.ctr}</p><p className="mt-1 text-xs text-slate-500">Ends {b.endsAt}</p></div>)}<div className="mt-4 space-y-2">{boostPackages.map((pkg) => <div key={pkg.name} className="rounded-xl border border-white/10 bg-slate-950/50 p-3 text-sm"><div className="flex justify-between"><span>{pkg.name}</span><span>{pkg.price}</span></div><div className="text-xs text-slate-500">{pkg.duration} • {pkg.placement}</div></div>)}</div></Card>
              <Card id="reviews" className="p-5"><h2 className="font-bold">Review Appeals</h2><div className="mt-4 space-y-3">{reviews.map((r) => <div key={r.id} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"><div className="font-semibold">{r.title}</div><p className="mt-1 text-sm text-slate-400">{r.body}</p><div className="mt-3"><Badge tone={r.appealStatus === "Pending Appeal" ? "amber" : "slate"}>{r.appealStatus}</Badge></div></div>)}</div></Card>
              <Card id="billing" className="p-5"><h2 className="font-bold">Billing</h2><p className="mt-2 text-sm text-slate-400">Current plan: {seller.plan}. Product usage {products.length}/{seller.productLimit}.</p><Button href="/pricing" variant="secondary">Manage plan</Button></Card>
              <Card id="settings" className="p-5"><h2 className="font-bold">Settings</h2><div className="mt-4 space-y-3 text-sm text-slate-400"><p>Seller slug: {seller.slug}</p><p>Trust score: {seller.trustScore}/100</p><p>Verified: {seller.verified ? "Yes" : "No"}</p></div></Card>
            </aside>
          </section>
        </main>
      </div>
    </Shell>
  );
}

function Alert({ title, text, action }: { title: string; text: string; action: string }) { return <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"><div className="font-semibold">{title}</div><p className="mt-1 text-sm text-slate-400">{text}</p><p className="mt-3 text-xs font-semibold text-purple-200">{action} →</p></div>; }
function PlatformBadge({ value }: { value: string }) { return <Badge tone={value === "Published" ? "green" : value === "Pending Review" ? "amber" : value === "Suspended" ? "red" : "slate"}>{value}</Badge>; }
