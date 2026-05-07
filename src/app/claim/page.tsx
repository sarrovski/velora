import { Card, Nav, SectionHeader, Shell, Badge } from "@/components/ui";
import { listings } from "@/lib/real-listings";

export default function ClaimPage({
  searchParams,
}: {
  searchParams?: { listing?: string };
}) {
  const selected = listings.find((listing) => listing.slug === searchParams?.listing);

  return (
    <Shell>
      <Nav />
      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionHeader
          eyebrow="Claim flow"
          title="Claim a provider or reseller listing"
          text="Sellers can claim an existing reference, verify payment methods, pricing, delivery, product status, and support policy."
        />

        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="p-6">
            <h2 className="text-2xl font-black">Claim request</h2>
            <div className="mt-6 grid gap-4">
              <Input label="Listing" value={selected?.publicName ?? "Select or paste listing name"} />
              <Input label="Claim type" value="Provider / Authorized reseller" />
              <Input label="Business email" value="seller@example.com" />
              <Input label="Accepted payments" value="Pending verification" />
              <Input label="Proof required" value="Domain, product panel, authorization, stock, refund policy" />
            </div>
            <button className="mt-6 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold">
              Submit claim for admin review
            </button>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <Badge tone="amber">Required</Badge>
              <h3 className="mt-4 text-xl font-bold">What sellers verify</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li>• Provider or reseller authorization</li>
                <li>• Official pricing and plans</li>
                <li>• Accepted payment methods</li>
                <li>• Delivery time and stock status</li>
                <li>• Refund/support policy</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold">After approval</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                The listing can move from Unclaimed to Claimed or Verified. Verified facts become visible to users.
              </p>
            </Card>
          </div>
        </section>
      </section>
    </Shell>
  );
}

function Input({ label, value }: { label: string; value: string }) {
  return (
    <label>
      <div className="mb-2 text-sm text-slate-400">{label}</div>
      <div className="rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-300">
        {value}
      </div>
    </label>
  );
}
