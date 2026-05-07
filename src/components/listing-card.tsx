import Link from "next/link";
import { Badge, Card, StatusBadge } from "@/components/ui";
import type { ListingReference } from "@/lib/real-listings";

export function ListingCard({ listing, index }: { listing: ListingReference; index?: number }) {
  return (
    <Card className="p-5">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            {typeof index === "number" && (
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-sm font-black text-purple-200">
                #{index + 1}
              </span>
            )}
            <h2 className="text-xl font-bold">{listing.publicName}</h2>
            <StatusBadge value={listing.status} />
          </div>

          <p className="mt-2 text-sm text-slate-500">
            {listing.game} • {listing.category} • {listing.architecture}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <Badge tone="purple">{listing.sourceType}</Badge>
            <Badge>{listing.sourceDomain}</Badge>
            <Badge tone={listing.integrity.paymentRisk === "High" ? "red" : listing.integrity.paymentRisk === "Medium" ? "amber" : "default"}>
              Payment risk: {listing.integrity.paymentRisk}
            </Badge>
          </div>

          <div className="mt-4 grid gap-2 text-sm text-slate-400 md:grid-cols-3">
            <Mini label="Vouches" value={String(listing.publicActivity?.vouchCount ?? "Pending")} />
            <Mini label="Views" value={String(listing.publicActivity?.views ?? "Pending")} />
            <Mini label="Last seen" value={listing.publicActivity?.lastSeen ?? "Pending"} />
          </div>
        </div>

        <div className="min-w-[220px]">
          <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
            <div className="text-sm text-slate-400">Integrity Index</div>
            <div className="mt-2 text-3xl font-black">
              {listing.integrity.score ?? "Pending"}
            </div>
            <div className="mt-1 text-xs text-slate-500">{listing.integrity.confidence} confidence</div>
          </div>
          <Link
            href={`/listings/${listing.slug}`}
            className="mt-3 inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold"
          >
            View reference
          </Link>
        </div>
      </div>
    </Card>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <div className="font-bold text-white">{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}
