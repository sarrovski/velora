import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, Nav, Shell, Badge, StatusBadge } from "@/components/ui";
import { getListing } from "@/lib/helpers";

export default function ListingPage({
  params,
}: {
  params: { listingSlug: string };
}) {
  const listing = getListing(params.listingSlug);
  if (!listing) notFound();

  return (
    <Shell>
      <Nav />
      <section className="mx-auto max-w-6xl px-6 py-10">
        <Link href="/marketplace" className="text-sm text-slate-400 hover:text-white">
          ← Back to marketplace
        </Link>

        <Card className="mt-6 border-purple-400/30 p-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-4xl font-black">{listing.publicName}</h1>
                <StatusBadge value={listing.status} />
              </div>
              <p className="mt-3 max-w-2xl text-slate-400">
                This is a limited factual reference. Seller-submitted claims, payments, pricing,
                and feature details must be verified through the claim process.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge tone="purple">{listing.game}</Badge>
                <Badge>{listing.category}</Badge>
                <Badge>{listing.architecture}</Badge>
                <Badge tone="amber">{listing.sourceType}</Badge>
              </div>
            </div>

            <div className="min-w-[260px]">
              <Card className="p-5">
                <div className="text-sm text-slate-400">Integrity Index</div>
                <div className="mt-2 text-4xl font-black">{listing.integrity.score ?? "Pending"}</div>
                <div className="mt-1 text-xs text-slate-500">{listing.integrity.confidence} confidence</div>
              </Card>
              <Link
                href={`/claim?listing=${listing.slug}`}
                className="mt-3 inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold"
              >
                Claim this listing
              </Link>
            </div>
          </div>
        </Card>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            <Panel title="Verified facts">
              <Fact label="Payment methods" value={listing.verifiedFacts.paymentMethods.length ? listing.verifiedFacts.paymentMethods.join(", ") : "Pending seller verification"} />
              <Fact label="Price points" value={listing.verifiedFacts.pricePoints.length ? listing.verifiedFacts.pricePoints.join(", ") : "Pending seller verification"} />
              <Fact label="Delivery" value={listing.verifiedFacts.delivery} />
              <Fact label="Refund policy" value={listing.verifiedFacts.refundPolicy} />
            </Panel>

            <Panel title="Pending facts">
              <div className="grid gap-3">
                {listing.pendingFacts.map((fact) => (
                  <div key={fact} className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4 text-sm text-amber-100">
                    {fact}
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="Review and signal notes">
              <div className="grid gap-3">
                {listing.integrity.reviewSignals.map((signal) => (
                  <div key={signal} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300">
                    {signal}
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          <aside className="space-y-6">
            <Panel title="Public reference metadata">
              <Fact label="Seller display name" value={listing.publicSellerName} />
              <Fact label="Source" value={listing.sourceDomain} />
              <Fact label="Vouches" value={String(listing.publicActivity?.vouchCount ?? "Pending")} />
              <Fact label="Views" value={String(listing.publicActivity?.views ?? "Pending")} />
              <Fact label="Last seen" value={listing.publicActivity?.lastSeen ?? "Pending"} />
            </Panel>
            <Panel title="Claim policy">
              <p className="text-sm leading-6 text-slate-400">{listing.claimCta}</p>
            </Panel>
          </aside>
        </section>
      </section>
    </Shell>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="p-6">
      <h2 className="mb-5 text-xl font-bold">{title}</h2>
      {children}
    </Card>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}
