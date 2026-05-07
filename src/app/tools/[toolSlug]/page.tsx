import { notFound } from "next/navigation";
import { PageShell, PublicNav } from "@/components/layout/Nav";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { reviews, tools } from "@/lib/data";

export function generateStaticParams() {
  return tools.map((tool) => ({ toolSlug: tool.slug }));
}

export default function ToolPage({ params }: { params: { toolSlug: string } }) {
  const tool = tools.find((item) => item.slug === params.toolSlug);
  if (!tool) notFound();
  const toolReviews = reviews.filter((review) => review.toolSlug === tool.slug && review.status === "Published");

  return (
    <PageShell>
      <PublicNav />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <Button href="/rankings" variant="ghost">← Back to rankings</Button>
        <Card className="mt-6 border-purple-400/30 p-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
            <div className="flex gap-5">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border border-purple-400/20 bg-purple-500/10 text-3xl font-black text-purple-200">{tool.name.slice(0,2).toUpperCase()}</div>
              <div>
                <div className="flex flex-wrap items-center gap-2"><h1 className="text-4xl font-black">{tool.name}</h1>{tool.showToolStatus && <StatusBadge value={tool.toolStatus} />}{tool.sponsored && <Badge tone="purple">Sponsored</Badge>}</div>
                <p className="mt-3 max-w-2xl text-slate-400">{tool.description}</p>
                <div className="mt-4 flex flex-wrap gap-2"><Badge tone="amber">★ {tool.rating || "—"} rating</Badge><Badge>{tool.reviews} reviews</Badge><Badge tone="purple">{tool.game}</Badge>{tool.verified && <Badge tone="green">Verified seller</Badge>}</div>
              </div>
            </div>
            <div className="flex min-w-[260px] flex-col gap-3"><Button href={tool.websiteUrl}>Visit Website ↗</Button><Button variant="secondary">Write Review</Button></div>
          </div>
        </Card>
        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            <Card className="p-6"><h2 className="text-xl font-bold">Features</h2><p className="mt-1 text-sm text-slate-400">Key capabilities maintained by the seller.</p><div className="mt-5 grid gap-3 md:grid-cols-2">{tool.features.map((feature) => <div key={feature} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"><div className="font-semibold">{feature}</div><div className="mt-1 text-sm text-slate-500">Included with this tool.</div></div>)}</div></Card>
            <Card className="p-6"><h2 className="text-xl font-bold">Reviews</h2><div className="mt-5 grid gap-3 md:grid-cols-2">{toolReviews.map((review) => <div key={review.id} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"><div className="flex items-center justify-between gap-3"><div className="font-semibold">{review.title}</div><div className="text-amber-300">★ {review.rating}</div></div><p className="mt-2 text-sm leading-6 text-slate-400">{review.body}</p><div className="mt-3 text-xs text-slate-500">By {review.user}</div></div>)}</div></Card>
          </div>
          <aside className="space-y-6"><Card className="p-5"><h3 className="font-bold">Seller</h3><p className="mt-3 text-sm text-slate-400">{tool.seller}</p><Button href={`/sellers/${tool.sellerSlug}`} variant="secondary" className="mt-4 w-full">View Seller</Button></Card><Card className="p-5"><h3 className="font-bold">Ranking protection</h3><p className="mt-3 text-sm leading-6 text-slate-400">Boosted placements never affect organic rank. Ranking stays community-driven.</p></Card><Card className="p-5"><h3 className="font-bold">Tool status</h3><div className="mt-3"><StatusBadge value={tool.toolStatus} /></div><p className="mt-3 text-sm leading-6 text-slate-400">Sellers can display tool status. Admins can review abuse.</p></Card></aside>
        </section>
      </main>
    </PageShell>
  );
}
