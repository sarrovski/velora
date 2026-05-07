import { Card, Nav, SectionHeader, Shell, Badge } from "@/components/ui";
import { claimRequests, listings, outreachScripts } from "@/lib/real-listings";

export default function AdminPage() {
  return (
    <Shell>
      <Nav />
      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionHeader
          eyebrow="Admin"
          title="Verification and claim control"
          text="Review unclaimed references, seller claims, payment methods, risk signals, and outreach scripts."
        />

        <section className="mt-8 grid gap-4 md:grid-cols-4">
          <Metric label="Unclaimed" value={String(listings.filter((l) => l.status === "Unclaimed").length)} detail="Need seller outreach" />
          <Metric label="Claims" value={String(claimRequests.length)} detail="Waiting review" />
          <Metric label="Payment risk" value="Pending" detail="Methods unverified" />
          <Metric label="Hidden" value={String(listings.filter((l) => l.status === "Hidden").length)} detail="Restricted references" />
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <Panel title="Claim requests">
            <div className="space-y-3">
              {claimRequests.map((request) => (
                <Row
                  key={request.id}
                  title={request.listing}
                  meta={`${request.type} • ${request.requester}`}
                  right={<Badge tone="amber">{request.status}</Badge>}
                />
              ))}
            </div>
          </Panel>

          <Panel title="Payment Risk Center">
            <div className="space-y-3">
              {listings.map((listing) => (
                <Row
                  key={listing.slug}
                  title={listing.publicName}
                  meta={`Payment profile: ${listing.verifiedFacts.paymentMethods.length ? listing.verifiedFacts.paymentMethods.join(", ") : "Unverified"}`}
                  right={<Badge tone={listing.integrity.paymentRisk === "Medium" ? "amber" : "default"}>{listing.integrity.paymentRisk}</Badge>}
                />
              ))}
            </div>
          </Panel>
        </section>

        <section className="mt-6">
          <Panel title="Unclaimed references">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left text-sm">
                <thead className="border-b border-white/10 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Listing</th>
                    <th className="px-4 py-3">Seller</th>
                    <th className="px-4 py-3">Game</th>
                    <th className="px-4 py-3">Source</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map((listing) => (
                    <tr key={listing.slug} className="border-b border-white/5 last:border-0">
                      <td className="px-4 py-4 font-semibold">{listing.publicName}</td>
                      <td className="px-4 py-4 text-slate-400">{listing.publicSellerName}</td>
                      <td className="px-4 py-4 text-slate-400">{listing.game}</td>
                      <td className="px-4 py-4 text-slate-400">{listing.sourceType}</td>
                      <td className="px-4 py-4"><Badge tone="amber">{listing.status}</Badge></td>
                      <td className="px-4 py-4 text-right">
                        <button className="rounded-lg border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-300">
                          Send outreach
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </section>

        <section className="mt-6">
          <Panel title="Outreach scripts">
            <div className="grid gap-4 md:grid-cols-3">
              {outreachScripts.map((script) => (
                <Card key={script.title} className="p-5">
                  <h3 className="font-bold">{script.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{script.body}</p>
                </Card>
              ))}
            </div>
          </Panel>
        </section>
      </section>
    </Shell>
  );
}

function Metric({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <Card className="p-5">
      <div className="text-sm text-slate-400">{label}</div>
      <div className="mt-3 text-3xl font-black">{value}</div>
      <div className="mt-1 text-xs text-slate-500">{detail}</div>
    </Card>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="overflow-hidden">
      <div className="border-b border-white/10 p-5">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="p-5">{children}</div>
    </Card>
  );
}

function Row({ title, meta, right }: { title: string; meta: string; right: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
      <div>
        <div className="font-semibold">{title}</div>
        <div className="mt-1 text-xs text-slate-500">{meta}</div>
      </div>
      {right}
    </div>
  );
}
