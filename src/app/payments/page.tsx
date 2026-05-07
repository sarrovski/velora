import { offers, paymentMethods, tools, sellers, paymentsFor } from "@/lib/data";
import { Badge, Card, Nav, SectionTitle, Shell, Stat, Button } from "@/components/ui";
import { riskTone } from "@/lib/helpers";

export default function PaymentsPage() {
  return (
    <Shell>
      <Nav />
      <SectionTitle eyebrow="Payment discovery" title="Find tools by the way you can pay" text="Payment method availability is a real buying problem. Standard makes accepted methods visible, comparable, and risk-labeled." />
      <section className="mt-8 grid gap-4 md:grid-cols-4">
        <Stat label="Crypto offers" value={offers.filter((o) => o.paymentIds.includes("crypto")).length} detail="Irreversible payment" />
        <Stat label="PayPal options" value={offers.filter((o) => o.paymentIds.some((id) => id.includes("paypal"))).length} detail="G&S / F&F separated" />
        <Stat label="Gift-card sellers" value={offers.filter((o) => o.paymentIds.includes("gift-cards")).length} detail="High risk method" />
        <Stat label="Verified resellers" value={sellers.filter((s) => s.kind === "Verified Reseller").length} detail="Alternative methods" />
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {paymentMethods.map((method) => (
          <Card key={method.id} className="p-5">
            <div className="flex items-center justify-between gap-3"><h3 className="font-black">{method.name}</h3><Badge tone={riskTone(method.risk) as any}>{method.risk}</Badge></div>
            <p className="mt-3 text-sm leading-6 text-slate-400">{method.note}</p>
            <Button href={`/rankings?payment=${method.id}`} variant="secondary" className="mt-4 w-full">Find tools</Button>
          </Card>
        ))}
      </section>
      <SectionTitle eyebrow="Available sellers" title="Reseller offers by payment method" text="Compare price, delivery, stock, seller trust, and accepted payments before leaving Standard." />
      <section className="mt-6 grid gap-4">
        {offers.map((offer) => {
          const tool = tools.find((item) => item.slug === offer.toolSlug);
          return <Card key={`${offer.toolSlug}-${offer.sellerSlug}`} className="p-5"><div className="grid gap-4 lg:grid-cols-[1fr_240px_180px]"><div><div className="flex flex-wrap items-center gap-2"><h3 className="text-xl font-black">{offer.seller}</h3><Badge tone={offer.kind === "Official Provider" ? "green" : "purple"}>{offer.kind}</Badge></div><p className="mt-1 text-sm text-slate-500">Selling {tool?.name} • {offer.delivery} delivery • {offer.stock}</p><div className="mt-3 flex flex-wrap gap-2">{paymentsFor(offer.paymentIds).map((method) => <Badge key={method.id} tone={riskTone(method.risk) as any}>{method.name}</Badge>)}</div></div><div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"><div className="text-2xl font-black">{offer.trustScore}/100</div><div className="text-xs text-slate-500">Seller trust</div></div><div className="text-right"><div className="text-2xl font-black">{offer.price}</div><Button href={`/tools/${offer.toolSlug}`} className="mt-3 w-full">View tool</Button></div></div></Card>;
        })}
      </section>
    </Shell>
  );
}
