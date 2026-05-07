import Link from "next/link";
import { products } from "@/lib/data";
import { Badge, Card, Nav, Shell, Status } from "@/lib/ui";

export default function RankingsPage({ searchParams }: { searchParams?: { game?: string } }) {
  const filtered = products
    .filter((p) => p.platformStatus !== "Draft")
    .filter((p) => !searchParams?.game || p.game === searchParams.game)
    .sort((a, b) => b.rankScore - a.rankScore);

  return (
    <Shell>
      <Nav />
      <section className="mt-12">
        <p className="text-sm font-medium text-purple-300">Community rankings</p>
        <h1 className="mt-3 text-5xl font-black">Ranked gaming tools</h1>
        <p className="mt-3 max-w-2xl text-slate-400">Compare tools by game, features, reviews, status, seller trust, and organic rank.</p>
      </section>
      <Card className="mt-8 overflow-hidden">
        {filtered.map((product, index) => (
          <div key={product.id} className="grid gap-4 border-b border-white/10 p-5 last:border-0 lg:grid-cols-[70px_1fr_220px] lg:items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-lg font-black text-purple-200">#{index + 1}</div>
            <div>
              <div className="flex flex-wrap items-center gap-2"><h2 className="text-xl font-bold">{product.name}</h2>{product.showToolStatus && <Status value={product.toolStatus} />}{product.boosted && <Badge>Sponsored</Badge>}</div>
              <p className="mt-1 text-sm text-slate-500">{product.game} • {product.category} • by {product.sellerName}</p>
              <div className="mt-3 flex flex-wrap gap-2">{product.features.map((f) => <span key={f} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-slate-300">{f}</span>)}</div>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <div className="text-right"><div className="text-xl font-black">★ {product.rating.toFixed(1)}</div><div className="text-xs text-slate-500">{product.reviews} reviews • {product.clicks} clicks</div></div>
              <Link href={`/tools/${product.slug}`} className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-4 py-2 text-center text-sm font-semibold">View Tool</Link>
            </div>
          </div>
        ))}
      </Card>
    </Shell>
  );
}
