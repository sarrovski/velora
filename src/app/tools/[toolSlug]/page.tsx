import { notFound } from "next/navigation";
import { getTool, offersForTool, paymentsFor, reviews, tools } from "@/lib/data";
import { Badge, Button, Card, Nav, SectionTitle, Shell, Stat } from "@/components/ui";
import { riskTone, scoreTone } from "@/lib/helpers";
import { ToolCard } from "@/components/tool-card";

export default function ToolPage({ params }: { params: { toolSlug: string } }) {
  const tool = getTool(params.toolSlug);
  if (!tool) notFound();
  const offers = offersForTool(tool.slug);
  const toolReviews = reviews.filter((review) => review.toolSlug === tool.slug);
  const alternatives = tools.filter((item) => item.gameSlug === tool.gameSlug && item.slug !== tool.slug).slice(0, 2);
  return (
    <Shell>
      <Nav />
      <section className="mt-12 rounded-3xl border border-purple-400/30 bg-white/[0.035] p-8 shadow-2xl shadow-purple-950/20">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="purple">{tool.game}</Badge>
              <Badge tone={riskTone(tool.toolStatus) as any}>{tool.toolStatus}</Badge>
              <Badge tone={riskTone(tool.paymentRisk) as any}>Payment risk: {tool.paymentRisk}</Badge>
              {tool.sponsored && <Badge tone="purple">Sponsored</Badge>}
            </div>
            <h1 className="mt-5 text-5xl font-black tracking-tight">{tool.name}</h1>
            <p className="mt-4 max-w-3xl text-slate-400">{tool.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge>{tool.architecture}</Badge>
              <Badge>{tool.category}</Badge>
              <Badge>{tool.lastUpdated}</Badge>
              <Badge>{tool.vouchCount} vouches</Badge>
            </div>
          </div>
          <Card className="p-5">
            <div className="text-sm text-slate-400">Standard Integrity Index</div>
            <div className="mt-3 text-5xl font-black">{tool.integrityIndex}/100</div>
            <div className={`mt-2 text-sm ${scoreTone(tool.integrityIndex) === "green" ? "text-emerald-300" : scoreTone(tool.integrityIndex) === "amber" ? "text-amber-300" : "text-red-300"}`}>Verified reviews are weighted 5x</div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <Stat label="Rating" value={`★ ${tool.rating || "—"}`} />
              <Stat label="Verified" value={tool.verifiedReviews} />
            </div>
          </Card>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-black">Available Sellers & Resellers</h2>
            <p className="mt-2 text-sm text-slate-400">Compare official providers and verified resellers by price, payment methods, delivery, stock, and trust.</p>
            <div className="mt-5 space-y-3">
              {offers.map((offer) => <div key={offer.sellerSlug} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"><div className="grid gap-4 lg:grid-cols-[1fr_180px_170px]"><div><div className="flex flex-wrap items-center gap-2"><h3 className="font-black">{offer.seller}</h3><Badge tone={offer.kind === "Official Provider" ? "green" : "purple"}>{offer.kind}</Badge></div><p className="mt-1 text-xs text-slate-500">Delivery: {offer.delivery} • Stock: {offer.stock}</p><div className="mt-3 flex flex-wrap gap-2">{paymentsFor(offer.paymentIds).map((method) => <Badge key={method.id} tone={riskTone(method.risk) as any}>{method.name}</Badge>)}</div></div><div className="rounded-xl border border-white/10 bg-white/[0.03] p-3"><div className="text-2xl font-black">{offer.trustScore}/100</div><div className="text-xs text-slate-500">Seller trust</div></div><div className="text-right"><div className="text-2xl font-black">{offer.price}</div><Button href={`/sellers/${offer.sellerSlug}`} variant="secondary" className="mt-3 w-full">View seller</Button></div></div></div>)}
            </div>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-black">Technical facts</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Fact label="Provider" value={tool.providerName} />
              <Fact label="Architecture" value={tool.architecture} />
              <Fact label="Starting price" value={tool.priceFrom} />
              <Fact label="Spam risk" value={tool.spamRisk} />
            </div>
          </Card>
          <Card className="p-6"><h2 className="text-2xl font-black">Features</h2><div className="mt-5 grid gap-3 md:grid-cols-2">{tool.features.map((feature) => <div key={feature} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"><div className="font-semibold">{feature}</div><p className="mt-1 text-sm text-slate-500">Technical capability listed as a factual feature.</p></div>)}</div></Card>
          <Card className="p-6"><h2 className="text-2xl font-black">Reviews</h2><div className="mt-5 grid gap-3 md:grid-cols-2">{toolReviews.map((review) => <div key={review.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"><div className="flex items-center justify-between gap-3"><div className="font-semibold">{review.title}</div><div className="text-amber-300">★ {review.rating}</div></div><p className="mt-2 text-sm leading-6 text-slate-400">{review.body}</p><div className="mt-3 flex flex-wrap gap-2"><Badge tone={review.verified ? "green" : "default"}>{review.verified ? "Verified purchase" : "Unverified"}</Badge><Badge>{review.accountAge} account</Badge></div></div>)}</div></Card>
        </div>
        <aside className="space-y-6">
          <Card className="p-5"><h3 className="font-black">Payment safety note</h3><p className="mt-3 text-sm leading-6 text-slate-400">Crypto and gift cards are common alternative methods, but they are high-risk or irreversible. Prefer verified sellers with low dispute rates.</p><Button href="/payments" variant="secondary" className="mt-4 w-full">Compare payments</Button></Card>
          <Card className="p-5"><h3 className="font-black">Gallery</h3><div className="mt-4 grid gap-3"><div className="h-32 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-cyan-400/10"/><div className="h-32 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-purple-950/40"/></div></Card>
        </aside>
      </section>
      {alternatives.length > 0 && <><SectionTitle eyebrow="Alternatives" title="Similar tools" /><section className="mt-6 grid gap-4">{alternatives.map((alt) => <ToolCard key={alt.slug} tool={alt} />)}</section></>}
    </Shell>
  );
}

function Fact({ label, value }: { label: string; value: string }) { return <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"><div className="text-xs text-slate-500">{label}</div><div className="mt-1 font-bold">{value}</div></div>; }
