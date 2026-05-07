import Link from "next/link";
import { notFound } from "next/navigation";
import { products, seller } from "@/lib/data";
import { Badge, Card, Mini, Nav, Shell, Status } from "@/lib/ui";

export function generateStaticParams() { return [{ sellerSlug: seller.slug }]; }

export default function SellerPage({ params }: { params: { sellerSlug: string } }) {
  if (params.sellerSlug !== seller.slug) notFound();
  return (
    <Shell>
      <Nav />
      <section className="mt-12 rounded-2xl border border-purple-400/30 bg-white/[0.035] p-8">
        <p className="text-sm font-medium text-emerald-300">{seller.verified ? "Verified seller" : "Seller"}</p>
        <h1 className="mt-3 text-5xl font-black">{seller.name}</h1>
        <p className="mt-3 max-w-3xl text-slate-400">{seller.description}</p>
        <div className="mt-5 flex flex-wrap gap-2"><Badge>Trust score {seller.trustScore}/100</Badge><Badge>{seller.plan} plan</Badge><Badge>{products.length}/{seller.productLimit} product slots</Badge></div>
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {products.map((product) => <Card key={product.id} className="p-5"><div className="flex items-start justify-between gap-3"><div><h2 className="text-xl font-bold">{product.name}</h2><p className="mt-1 text-sm text-slate-500">{product.game} • {product.category}</p></div>{product.showToolStatus && <Status value={product.toolStatus} />}</div><div className="mt-4 flex flex-wrap gap-2">{product.features.slice(0, 3).map((f) => <span key={f} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-slate-300">{f}</span>)}</div><div className="mt-5 grid grid-cols-3 gap-2"><Mini label="Rating" value={product.rating || "—"} /><Mini label="Reviews" value={product.reviews} /><Mini label="Clicks" value={product.clicks} /></div><Link href={`/tools/${product.slug}`} className="mt-5 inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold">View Tool</Link></Card>)}
      </section>
    </Shell>
  );
}
