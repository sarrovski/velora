import { Card, Nav, SectionHeader, Shell, Badge } from "@/components/ui";
import { paymentMethods } from "@/lib/real-listings";

export default function SellerStudioPage() {
  return (
    <Shell>
      <Nav />
      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionHeader
          eyebrow="Seller Studio"
          title="Build verified listing facts"
          text="A simplified seller workspace for claimed providers and verified resellers. This is where pricing, payment methods, delivery, features, and status will be managed."
        />

        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-black">Listing builder</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Field label="Listing name" value="Pending claimed listing" />
                <Field label="Seller type" value="Provider / Reseller / Hybrid" />
                <Field label="Tool status" value="Working / Updating / Not Working" />
                <Field label="Architecture" value="Internal / External / DMA / Unknown" />
                <Field label="Delivery" value="Instant / Manual / Scheduled" />
                <Field label="Refund policy" value="Required before verification" />
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-black">Accepted payments</h2>
              <p className="mt-2 text-sm text-slate-400">
                Payment methods are a marketplace differentiator. Sellers should list what they accept and admins can flag risky methods.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <span key={method} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300">
                    {method}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <Badge tone="purple">Plan usage</Badge>
              <h3 className="mt-4 text-xl font-bold">Provider / Reseller limits</h3>
              <div className="mt-4 space-y-3">
                <Meter label="Product listings" value="0 / 10" />
                <Meter label="Reseller offers" value="0 / 25" />
                <Meter label="Claim requests" value="2 pending" />
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold">Verification status</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Submit proof once backend is connected. Admin can approve, restrict, or request more information.
              </p>
            </Card>
          </div>
        </section>
      </section>
    </Shell>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

function Meter({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
      <div className="text-sm text-slate-400">{label}</div>
      <div className="mt-1 text-lg font-black">{value}</div>
    </div>
  );
}
