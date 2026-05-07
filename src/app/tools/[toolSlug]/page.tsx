import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge, Button, Card, FeaturePill, Nav, Shell, ToolStatusBadge } from "@/components/ui";
import { reviews, tools } from "@/lib/data";

export default function ToolPage({ params }: { params: { toolSlug: string } }) {
  const tool = tools.find((item) => item.slug === params.toolSlug);
  if (!tool) notFound();
  const toolReviews = reviews.filter((review) => review.toolSlug === tool.slug);

  return (
    <Shell>
      <Nav />
      <Link href="/rankings" className="mt-10 inline-block text-sm text-slate-400 hover:text-white">← Back to rankings</Link>
      <section className="mt-6 rounded-3xl border border-purple-400/30 bg-white/[0.035] p-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <div className="flex gap-5">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border border-purple-400/20 bg-purple-500/10 text-3xl font-black text-purple-200">{tool.name.slice(0, 2).toUpperCase()}</div>
            <div>
              <div className="flex flex-wrap items-center gap-2"><h1 className="text-4xl font-black">{tool.name}</h1><ToolStatusBadge value={tool.toolStatus} />{tool.sponsored && <Badge>Sponsored</Badge>}</div>
              <p className="mt-3 max-w-2xl text-slate-400">{tool.description}</p>
              <div className="mt-4 flex flex-wrap gap-2"><Badge tone="amber">★ {tool.rating || "—"} rating</Badge><Badge tone="slate">{tool.reviews} reviews</Badge><Badge>{tool.game}</Badge>{tool.verified && <Badge tone="green">Verified seller</Badge>}</div>
            </div>
          </div>
          <div className="flex min-w-[240px] flex-col gap-3"><Button href="https://example.com">Visit Website ↗</Button><Button href="#reviews" variant="secondary">Write Review</Button></div>
        </div>
      </section>
      <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <Card className="p-6"><h2 className="mb-5 text-xl font-bold">Features</h2><div className="grid gap-3 md:grid-cols-2">{tool.features.map((feature) => <div key={feature} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"><div className="font-semibold">{feature}</div><p className="mt-1 text-sm text-slate-500">Included with this tool.</p></div>)}</div></Card>
          <Card id="reviews" className="p-6"><h2 className="mb-5 text-xl font-bold">Reviews</h2><div className="grid gap-3 md:grid-cols-2">{toolReviews.map((review) => <div key={review.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"><div className="flex justify-between gap-3"><div className="font-semibold">{review.title}</div><div className="text-amber-300">★ {review.rating}</div></div><p className="mt-2 text-sm leading-6 text-slate-400">{review.body}</p><div className="mt-3 text-xs text-slate-500">By {review.user}</div></div>)}</div></Card>
        </div>
        <aside className="space-y-6"><Card className="p-5"><h3 className="font-bold">Seller</h3><p className="mt-3 text-slate-400">{tool.seller}</p><Button href={`/sellers/${tool.sellerSlug}`} variant="secondary">View Seller</Button></Card><Card className="p-5"><h3 className="font-bold">Ranking protection</h3><p className="mt-3 text-sm leading-6 text-slate-400">Boosted placements never affect organic rank. Ranking stays community-driven.</p></Card><Card className="p-5"><h3 className="font-bold">Tool status</h3><p className="mt-3 text-sm leading-6 text-slate-400">Sellers can show Working, Updating, or Not Working. Admins can review status abuse.</p></Card></aside>
      </section>
    </Shell>
  );
}
